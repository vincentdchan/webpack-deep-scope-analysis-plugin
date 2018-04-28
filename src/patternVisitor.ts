import { Syntax } from 'estraverse';
import * as esrecurse from 'esrecurse';
import * as ESTree from 'estree';

function getLast<T>(xs: T[]) {
  return xs[xs.length - 1] || null;
}

export type AssignmentType =
| ESTree.AssignmentPattern
| ESTree.AssignmentExpression

export interface ICallbackOption {
  topLevel: boolean,
  rest: boolean
  assignments: AssignmentType[],
}

export type PatternVisitorCallback = (id: ESTree.Identifier, option: ICallbackOption) => void;

export class PatternVisitor extends esrecurse.Visitor {

  public static isPattern(node: ESTree.Node) {
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
  public callback: PatternVisitorCallback;
  public assignments: AssignmentType[];
  public rightHandNodes: any[];
  public restElements: any[];

  constructor(
    options: esrecurse.VisitorOption,
    rootPattern: ESTree.Node,
    callback: PatternVisitorCallback,
  ) {
    super(undefined, options);
    this.rootPattern = rootPattern;
    this.callback = callback;
    this.assignments = [];
    this.rightHandNodes = [];
    this.restElements = [];
  }

  Identifier(pattern: ESTree.Identifier) {
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

  Property(property: ESTree.Property) {
    // Computed property's key is a right hand node.
    if (property.computed) {
      this.rightHandNodes.push(property.key);
    }

    // If it's shorthand, its key is same as its value.
    // If it's shorthand and has its default value, its key is same as its value.left (the value is AssignmentPattern).
    // If it's not shorthand, the name of new variable is its value's.
    this.visit(property.value);
  }

  ArrayPattern(pattern: ESTree.ArrayPattern) {
    for (let i = 0, iz = pattern.elements.length; i < iz; ++i) {
      const element = pattern.elements[i];

      this.visit(element);
    }
  }

  AssignmentPattern(pattern: ESTree.AssignmentPattern) {
    this.assignments.push(pattern);
    this.visit(pattern.left);
    this.rightHandNodes.push(pattern.right);
    this.assignments.pop();
  }

  RestElement(pattern: ESTree.RestElement) {
    this.restElements.push(pattern);
    this.visit(pattern.argument);
    this.restElements.pop();
  }

  MemberExpression(node: ESTree.MemberExpression) {
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

  SpreadElement(node: ESTree.SpreadElement) {
    this.visit(node.argument);
  }

  ArrayExpression(node: ESTree.ArrayExpression) {
    node.elements.forEach(this.visit, this);
  }

  AssignmentExpression(node: ESTree.AssignmentExpression) {
    this.assignments.push(node);
    this.visit(node.left);
    this.rightHandNodes.push(node.right);
    this.assignments.pop();
  }

  CallExpression(node: ESTree.CallExpression) {
    // arguments are right hand nodes.
    node.arguments.forEach(a => {
      this.rightHandNodes.push(a);
    });
    this.visit(node.callee);
  }

}
