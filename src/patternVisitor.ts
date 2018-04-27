import { Syntax } from 'estraverse';
import * as esrecurse from 'esrecurse';

/**
 * Get last array element
 * @param {array} xs - array
 * @returns {any} Last elment
 */
function getLast<T>(xs: T[]) {
  return xs[xs.length - 1] || null;
}

export class PatternVisitor extends esrecurse.Visitor {

  public static isPattern(node) {
    const nodeType = node.type;

    return (
      nodeType === Syntax.Identifier ||
      nodeType === Syntax.ObjectPattern ||
      nodeType === Syntax.ArrayPattern ||
      nodeType === Syntax.SpreadElement ||
      nodeType === Syntax.RestElement ||
      nodeType === Syntax.AssignmentPattern
    );
  }

  public rootPattern: any;
  public callback: Function;
  public assignments: any[];
  public rightHandNodes: any[];
  public restElements: any[];

  constructor(options, rootPattern, callback) {
    super(null, options);
    this.rootPattern = rootPattern;
    this.callback = callback;
    this.assignments = [];
    this.rightHandNodes = [];
    this.restElements = [];
  }

  Identifier(pattern) {
    const lastRestElement = getLast(this.restElements);

    this.callback(pattern, {
      topLevel: pattern === this.rootPattern,
      rest:
        lastRestElement !== null &&
        lastRestElement !== undefined &&
        lastRestElement.argument === pattern,
      assignments: this.assignments,
    });
  }

  Property(property) {
    // Computed property's key is a right hand node.
    if (property.computed) {
      this.rightHandNodes.push(property.key);
    }

    // If it's shorthand, its key is same as its value.
    // If it's shorthand and has its default value, its key is same as its value.left (the value is AssignmentPattern).
    // If it's not shorthand, the name of new variable is its value's.
    this.visit(property.value);
  }

  ArrayPattern(pattern) {
    for (let i = 0, iz = pattern.elements.length; i < iz; ++i) {
      const element = pattern.elements[i];

      this.visit(element);
    }
  }

  AssignmentPattern(pattern) {
    this.assignments.push(pattern);
    this.visit(pattern.left);
    this.rightHandNodes.push(pattern.right);
    this.assignments.pop();
  }

  RestElement(pattern) {
    this.restElements.push(pattern);
    this.visit(pattern.argument);
    this.restElements.pop();
  }

  MemberExpression(node) {
    // Computed property's key is a right hand node.
    if (node.computed) {
      this.rightHandNodes.push(node.property);
    }

    // the object is only read, write to its property.
    this.rightHandNodes.push(node.object);
  }

  //
  // ForInStatement.left and AssignmentExpression.left are LeftHandSideExpression.
  // By spec, LeftHandSideExpression is Pattern or MemberExpression.
  //   (see also: https://github.com/estree/estree/pull/20#issuecomment-74584758)
  // But espree 2.0 parses to ArrayExpression, ObjectExpression, etc...
  //

  SpreadElement(node) {
    this.visit(node.argument);
  }

  ArrayExpression(node) {
    node.elements.forEach(this.visit, this);
  }

  AssignmentExpression(node) {
    this.assignments.push(node);
    this.visit(node.left);
    this.rightHandNodes.push(node.right);
    this.assignments.pop();
  }

  CallExpression(node) {
    // arguments are right hand nodes.
    node.arguments.forEach(a => {
      this.rightHandNodes.push(a);
    });
    this.visit(node.callee);
  }

}
