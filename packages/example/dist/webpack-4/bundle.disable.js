/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./example.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./another.js":
/*!********************!*\
  !*** ./another.js ***!
  \********************/
/*! exports provided: what, the, foo */
/*! exports used: the, what */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return what; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return the; });
/* unused harmony export foo */
/* harmony import */ var _end__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./end */ "./end.js");


function what() {
  console.log('what');
  return 'what' + Object(_end__WEBPACK_IMPORTED_MODULE_0__[/* final */ "a"])();
}

function the() {
  console.log('the');
  return 'the';
}

function foo() {
  return 'foo';
}


/***/ }),

/***/ "./assert.js":
/*!*******************!*\
  !*** ./assert.js ***!
  \*******************/
/*! exports provided: default, equal, deepEqual */
/*! exports used: default, equal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return equal; });
/* unused harmony export deepEqual */
/* harmony import */ var _another__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./another */ "./another.js");


/* harmony default export */ __webpack_exports__["a"] = (function() {
  console.log('');
});

function equal(a, b) {
  return true + Object(_another__WEBPACK_IMPORTED_MODULE_0__[/* the */ "a"])();
}

function deepEqual(a, b) {
  return true + Object(_another__WEBPACK_IMPORTED_MODULE_0__[/* what */ "b"])();
}


/***/ }),

/***/ "./end.js":
/*!****************!*\
  !*** ./end.js ***!
  \****************/
/*! exports provided: final */
/*! exports used: final */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return final; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");


function wrap(fun) {
  run();
}

function _final() {
  return Object(ramda__WEBPACK_IMPORTED_MODULE_0__[/* isNil */ "a"])('final');
}

var final = wrap(_final); 




/***/ }),

/***/ "./example.js":
/*!********************!*\
  !*** ./example.js ***!
  \********************/
/*! exports provided: myFunction, aaa, myFun, ExportCls1, ExportCls2, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myFunction", function() { return myFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aaa", function() { return aaa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myFun", function() { return hisFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportCls1", function() { return ExportCls1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportCls2", function() { return ExportCls2; });
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert */ "./assert.js");
// const assert = require('./assert')

// import { deepEqual } from 'assert'

function myFunction() {
  function it() {
    Object(_assert__WEBPACK_IMPORTED_MODULE_0__[/* equal */ "b"])(1, arguments[0]);
  }
  // deepEqual(1, 1);
  it();
}

function hisFunction() {
  console.log("his");
  _assert__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];
}

const what = function () {
  Object(_assert__WEBPACK_IMPORTED_MODULE_0__[/* equal */ "b"])();
}

const bb = hisFunction() + Object(_assert__WEBPACK_IMPORTED_MODULE_0__[/* equal */ "b"])();

const aaa = hisFunction() + Object(_assert__WEBPACK_IMPORTED_MODULE_0__[/* equal */ "b"])()


// export * from "./assert"

// export default aa  = 3;
// export default function aaa () {}

function fun1() {
  // deepEqual(1, 1);
}

function fun2() {
  fun1();
}

function fun3() {
  fun2();
}

function fun4() {
  fun3();
}

class ExportCls1 {

  constructor() {
    fun4();
  }

}

class ExportCls2 {

  add() {
    this.name = _assert__WEBPACK_IMPORTED_MODULE_0__[/* equal */ "b"];
  }

}

/* harmony default export */ __webpack_exports__["default"] = (function () {

});


/***/ }),

/***/ "./node_modules/ramda/es/F.js":
/*!************************************!*\
  !*** ./node_modules/ramda/es/F.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./always */ "./node_modules/ramda/es/always.js");


/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.T
 * @example
 *
 *      R.F(); //=> false
 */
var F = /*#__PURE__*/Object(_always__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(false);
/* unused harmony default export */ var _unused_webpack_default_export = (F);

/***/ }),

/***/ "./node_modules/ramda/es/T.js":
/*!************************************!*\
  !*** ./node_modules/ramda/es/T.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./always */ "./node_modules/ramda/es/always.js");


/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.F
 * @example
 *
 *      R.T(); //=> true
 */
var T = /*#__PURE__*/Object(_always__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(true);
/* unused harmony default export */ var _unused_webpack_default_export = (T);

/***/ }),

/***/ "./node_modules/ramda/es/__.js":
/*!*************************************!*\
  !*** ./node_modules/ramda/es/__.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * A special placeholder value used to specify "gaps" within curried functions,
 * allowing partial application of any combination of arguments, regardless of
 * their positions.
 *
 * If `g` is a curried ternary function and `_` is `R.__`, the following are
 * equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2, _)(1, 3)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @constant
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @example
 *
 *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
 *      greet('Alice'); //=> 'Hello, Alice!'
 */
/* unused harmony default export */ var _unused_webpack_default_export = ({ '@@functional/placeholder': true });

/***/ }),

/***/ "./node_modules/ramda/es/add.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/add.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Adds two values.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @see R.subtract
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */
var add = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function add(a, b) {
  return Number(a) + Number(b);
});
/* harmony default export */ __webpack_exports__["a"] = (add);

/***/ }),

/***/ "./node_modules/ramda/es/addIndex.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/addIndex.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_concat */ "./node_modules/ramda/es/internal/_concat.js");
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/es/curryN.js");




/**
 * Creates a new list iteration function from an existing one by adding two new
 * parameters to its callback function: the current index, and the entire list.
 *
 * This would turn, for instance, [`R.map`](#map) function into one that
 * more closely resembles `Array.prototype.map`. Note that this will only work
 * for functions in which the iteration callback function is the first
 * parameter, and where the list is the last parameter. (This latter might be
 * unimportant if the list parameter is not used.)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Function
 * @category List
 * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      var mapIndexed = R.addIndex(R.map);
 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */
var addIndex = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function addIndex(fn) {
  return Object(_curryN__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(fn.length, function () {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function () {
      var result = origFn.apply(this, Object(_internal_concat__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (addIndex);

/***/ }),

/***/ "./node_modules/ramda/es/adjust.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/adjust.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_concat */ "./node_modules/ramda/es/internal/_concat.js");
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");



/**
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig (a -> a) -> Number -> [a] -> [a]
 * @param {Function} fn The function to apply.
 * @param {Number} idx The index.
 * @param {Array|Arguments} list An array-like object whose value
 *        at the supplied index will be replaced.
 * @return {Array} A copy of the supplied array-like object with
 *         the element at index `idx` replaced with the value
 *         returned by applying `fn` to the existing element.
 * @see R.update
 * @example
 *
 *      R.adjust(R.add(10), 1, [1, 2, 3]);     //=> [1, 12, 3]
 *      R.adjust(R.add(10))(1)([1, 2, 3]);     //=> [1, 12, 3]
 * @symb R.adjust(f, -1, [a, b]) = [a, f(b)]
 * @symb R.adjust(f, 0, [a, b]) = [f(a), b]
 */
var adjust = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function adjust(fn, idx, list) {
  if (idx >= list.length || idx < -list.length) {
    return list;
  }
  var start = idx < 0 ? list.length : 0;
  var _idx = start + idx;
  var _list = Object(_internal_concat__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(list);
  _list[_idx] = fn(list[_idx]);
  return _list;
});
/* harmony default export */ __webpack_exports__["a"] = (adjust);

/***/ }),

/***/ "./node_modules/ramda/es/all.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/all.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_xall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xall */ "./node_modules/ramda/es/internal/_xall.js");




/**
 * Returns `true` if all elements of the list match the predicate, `false` if
 * there are any that don't.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
 *         otherwise.
 * @see R.any, R.none, R.transduce
 * @example
 *
 *      var equals3 = R.equals(3);
 *      R.all(equals3)([3, 3, 3, 3]); //=> true
 *      R.all(equals3)([3, 3, 1, 3]); //=> false
 */
var all = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(['all'], _internal_xall__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], function all(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (!fn(list[idx])) {
      return false;
    }
    idx += 1;
  }
  return true;
}));
/* unused harmony default export */ var _unused_webpack_default_export = (all);

/***/ }),

/***/ "./node_modules/ramda/es/allPass.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/allPass.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/es/curryN.js");
/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./max */ "./node_modules/ramda/es/max.js");
/* harmony import */ var _pluck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pluck */ "./node_modules/ramda/es/pluck.js");
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reduce */ "./node_modules/ramda/es/reduce.js");






/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.anyPass
 * @example
 *
 *      var isQueen = R.propEq('rank', 'Q');
 *      var isSpade = R.propEq('suit', '♠︎');
 *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */
var allPass = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function allPass(preds) {
  return Object(_curryN__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_reduce__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_max__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], 0, Object(_pluck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])('length', preds)), function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (allPass);

/***/ }),

/***/ "./node_modules/ramda/es/always.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/always.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");


/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      var t = R.always('Tee');
 *      t(); //=> 'Tee'
 */
var always = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function always(val) {
  return function () {
    return val;
  };
});
/* harmony default export */ __webpack_exports__["a"] = (always);

/***/ }),

/***/ "./node_modules/ramda/es/and.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/and.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Returns `true` if both arguments are `true`; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if it is falsy, otherwise the second argument.
 * @see R.both
 * @example
 *
 *      R.and(true, true); //=> true
 *      R.and(true, false); //=> false
 *      R.and(false, true); //=> false
 *      R.and(false, false); //=> false
 */
var and = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function and(a, b) {
  return a && b;
});
/* harmony default export */ __webpack_exports__["a"] = (and);

/***/ }),

/***/ "./node_modules/ramda/es/any.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/any.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_xany__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xany */ "./node_modules/ramda/es/internal/_xany.js");




/**
 * Returns `true` if at least one of elements of the list match the predicate,
 * `false` otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
 *         otherwise.
 * @see R.all, R.none, R.transduce
 * @example
 *
 *      var lessThan0 = R.flip(R.lt)(0);
 *      var lessThan2 = R.flip(R.lt)(2);
 *      R.any(lessThan0)([1, 2]); //=> false
 *      R.any(lessThan2)([1, 2]); //=> true
 */
var any = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(['any'], _internal_xany__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], function any(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (fn(list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}));
/* harmony default export */ __webpack_exports__["a"] = (any);

/***/ }),

/***/ "./node_modules/ramda/es/anyPass.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/anyPass.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/es/curryN.js");
/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./max */ "./node_modules/ramda/es/max.js");
/* harmony import */ var _pluck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pluck */ "./node_modules/ramda/es/pluck.js");
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reduce */ "./node_modules/ramda/es/reduce.js");






/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.allPass
 * @example
 *
 *      var isClub = R.propEq('suit', '♣');
 *      var isSpade = R.propEq('suit', '♠');
 *      var isBlackCard = R.anyPass([isClub, isSpade]);
 *
 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 */
var anyPass = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function anyPass(preds) {
  return Object(_curryN__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_reduce__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_max__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], 0, Object(_pluck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])('length', preds)), function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }
      idx += 1;
    }
    return false;
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (anyPass);

/***/ }),

/***/ "./node_modules/ramda/es/ap.js":
/*!*************************************!*\
  !*** ./node_modules/ramda/es/ap.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_concat */ "./node_modules/ramda/es/internal/_concat.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_reduce */ "./node_modules/ramda/es/internal/_reduce.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ "./node_modules/ramda/es/map.js");





/**
 * ap applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the second argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @sig (a -> b -> c) -> (a -> b) -> (a -> c)
 * @param {*} applyF
 * @param {*} applyX
 * @return {*}
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 *
 *      // R.ap can also be used as S combinator
 *      // when only two functions are passed
 *      R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 */
var ap = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function ap(applyF, applyX) {
  return typeof applyX['fantasy-land/ap'] === 'function' ? applyX['fantasy-land/ap'](applyF) : typeof applyF.ap === 'function' ? applyF.ap(applyX) : typeof applyF === 'function' ? function (x) {
    return applyF(x)(applyX(x));
  } :
  // else
  Object(_internal_reduce__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function (acc, f) {
    return Object(_internal_concat__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(acc, Object(_map__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(f, applyX));
  }, [], applyF);
});
/* harmony default export */ __webpack_exports__["a"] = (ap);

/***/ }),

/***/ "./node_modules/ramda/es/aperture.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/aperture.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_aperture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_aperture */ "./node_modules/ramda/es/internal/_aperture.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_xaperture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_xaperture */ "./node_modules/ramda/es/internal/_xaperture.js");





/**
 * Returns a new list, composed of n-tuples of consecutive elements. If `n` is
 * greater than the length of the list, an empty list is returned.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @param {Number} n The size of the tuples to create
 * @param {Array} list The list to split into `n`-length tuples
 * @return {Array} The resulting list of `n`-length tuples
 * @see R.transduce
 * @example
 *
 *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
 *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
 */
var aperture = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])([], _internal_xaperture__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _internal_aperture__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]));
/* unused harmony default export */ var _unused_webpack_default_export = (aperture);

/***/ }),

/***/ "./node_modules/ramda/es/append.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/append.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_concat */ "./node_modules/ramda/es/internal/_concat.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");



/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */
var append = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function append(el, list) {
  return Object(_internal_concat__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(list, [el]);
});
/* unused harmony default export */ var _unused_webpack_default_export = (append);

/***/ }),

/***/ "./node_modules/ramda/es/apply.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/apply.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Applies function `fn` to the argument list `args`. This is useful for
 * creating a fixed-arity function from a variadic function. `fn` should be a
 * bound function if context is significant.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> a) -> [*] -> a
 * @param {Function} fn The function which will be called with `args`
 * @param {Array} args The arguments to call `fn` with
 * @return {*} result The result, equivalent to `fn(...args)`
 * @see R.call, R.unapply
 * @example
 *
 *      var nums = [1, 2, 3, -99, 42, 6, 7];
 *      R.apply(Math.max, nums); //=> 42
 * @symb R.apply(f, [a, b, c]) = f(a, b, c)
 */
var apply = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function apply(fn, args) {
  return fn.apply(this, args);
});
/* harmony default export */ __webpack_exports__["a"] = (apply);

/***/ }),

/***/ "./node_modules/ramda/es/applySpec.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/applySpec.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply */ "./node_modules/ramda/es/apply.js");
/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/es/curryN.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ "./node_modules/ramda/es/map.js");
/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./max */ "./node_modules/ramda/es/max.js");
/* harmony import */ var _pluck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pluck */ "./node_modules/ramda/es/pluck.js");
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reduce */ "./node_modules/ramda/es/reduce.js");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./values */ "./node_modules/ramda/es/values.js");









/**
 * Given a spec object recursively mapping properties to functions, creates a
 * function producing an object of the same structure, by mapping each property
 * to the result of calling its associated function with the supplied arguments.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
 * @param {Object} spec an object recursively mapping properties to functions for
 *        producing the values for these properties.
 * @return {Function} A function that returns an object of the same structure
 * as `spec', with each property set to the value returned by calling its
 * associated function with the supplied arguments.
 * @see R.converge, R.juxt
 * @example
 *
 *      var getMetrics = R.applySpec({
 *        sum: R.add,
 *        nested: { mul: R.multiply }
 *      });
 *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
 */
var applySpec = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function applySpec(spec) {
  spec = Object(_map__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(function (v) {
    return typeof v == 'function' ? v : applySpec(v);
  }, spec);
  return Object(_curryN__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_reduce__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_max__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], 0, Object(_pluck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])('length', Object(_values__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(spec))), function () {
    var args = arguments;
    return Object(_map__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(function (f) {
      return Object(_apply__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(f, args);
    }, spec);
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (applySpec);

/***/ }),

/***/ "./node_modules/ramda/es/applyTo.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/applyTo.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
* Takes a value and applies a function to it.
*
* This function is also known as the `thrush` combinator.
*
* @func
* @memberOf R
 * @since v0.25.0
* @category Function
* @sig a -> (a -> b) -> b
* @param {*} x The value
* @param {Function} f The function to apply
* @return {*} The result of applying `f` to `x`
* @example
*
*      var t42 = R.applyTo(42);
*      t42(R.identity); //=> 42
*      t42(R.add(1)); //=> 43
*/
var applyTo = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function applyTo(x, f) {
  return f(x);
});
/* unused harmony default export */ var _unused_webpack_default_export = (applyTo);

/***/ }),

/***/ "./node_modules/ramda/es/ascend.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/ascend.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


/**
 * Makes an ascending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
 * @see R.descend
 * @example
 *
 *      var byAge = R.ascend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByYoungestFirst = R.sort(byAge, people);
 */
var ascend = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function ascend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa < bb ? -1 : aa > bb ? 1 : 0;
});
/* unused harmony default export */ var _unused_webpack_default_export = (ascend);

/***/ }),

/***/ "./node_modules/ramda/es/assoc.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/assoc.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
var assoc = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function assoc(prop, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = val;
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (assoc);

/***/ }),

/***/ "./node_modules/ramda/es/assocPath.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/assocPath.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _internal_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/es/internal/_has.js");
/* harmony import */ var _internal_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_isArray */ "./node_modules/ramda/es/internal/_isArray.js");
/* harmony import */ var _internal_isInteger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_isInteger */ "./node_modules/ramda/es/internal/_isInteger.js");
/* harmony import */ var _assoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assoc */ "./node_modules/ramda/es/assoc.js");
/* harmony import */ var _isNil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isNil */ "./node_modules/ramda/es/isNil.js");







/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */
var assocPath = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function assocPath(path, val, obj) {
  if (path.length === 0) {
    return val;
  }
  var idx = path[0];
  if (path.length > 1) {
    var nextObj = !Object(_isNil__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(obj) && Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(idx, obj) ? obj[idx] : Object(_internal_isInteger__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(path[1]) ? [] : {};
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
  }
  if (Object(_internal_isInteger__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(idx) && Object(_internal_isArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj)) {
    var arr = [].concat(obj);
    arr[idx] = val;
    return arr;
  } else {
    return Object(_assoc__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(idx, val, obj);
  }
});
/* harmony default export */ __webpack_exports__["a"] = (assocPath);

/***/ }),

/***/ "./node_modules/ramda/es/binary.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/binary.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _nAry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nAry */ "./node_modules/ramda/es/nAry.js");



/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 2 parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> c) -> (a, b -> c)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 2.
 * @see R.nAry, R.unary
 * @example
 *
 *      var takesThreeArgs = function(a, b, c) {
 *        return [a, b, c];
 *      };
 *      takesThreeArgs.length; //=> 3
 *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
 *
 *      var takesTwoArgs = R.binary(takesThreeArgs);
 *      takesTwoArgs.length; //=> 2
 *      // Only 2 arguments are passed to the wrapped function
 *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
 * @symb R.binary(f)(a, b, c) = f(a, b)
 */
var binary = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function binary(fn) {
  return Object(_nAry__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(2, fn);
});
/* unused harmony default export */ var _unused_webpack_default_export = (binary);

/***/ }),

/***/ "./node_modules/ramda/es/bind.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/bind.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_arity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_arity */ "./node_modules/ramda/es/internal/_arity.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");



/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      var log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
var bind = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function bind(fn, thisObj) {
  return Object(_internal_arity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});
/* harmony default export */ __webpack_exports__["a"] = (bind);

/***/ }),

/***/ "./node_modules/ramda/es/both.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/both.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isFunction */ "./node_modules/ramda/es/internal/_isFunction.js");
/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./and */ "./node_modules/ramda/es/and.js");
/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lift */ "./node_modules/ramda/es/lift.js");





/**
 * A function which calls the two provided functions and returns the `&&`
 * of the results.
 * It returns the result of the first function if it is false-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * false-y value.
 *
 * In addition to functions, `R.both` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @see R.and
 * @example
 *
 *      var gt10 = R.gt(R.__, 10)
 *      var lt20 = R.lt(R.__, 20)
 *      var f = R.both(gt10, lt20);
 *      f(15); //=> true
 *      f(30); //=> false
 */
var both = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function both(f, g) {
  return Object(_internal_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(f) ? function _both() {
    return f.apply(this, arguments) && g.apply(this, arguments);
  } : Object(_lift__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_and__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(f, g);
});
/* unused harmony default export */ var _unused_webpack_default_export = (both);

/***/ }),

/***/ "./node_modules/ramda/es/call.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/call.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/ramda/es/curry.js");


/**
 * Returns the result of calling its first argument with the remaining
 * arguments. This is occasionally useful as a converging function for
 * [`R.converge`](#converge): the first branch can produce a function while the
 * remaining branches produce values to be passed to that function as its
 * arguments.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig (*... -> a),*... -> a
 * @param {Function} fn The function to apply to the remaining arguments.
 * @param {...*} args Any number of positional arguments.
 * @return {*}
 * @see R.apply
 * @example
 *
 *      R.call(R.add, 1, 2); //=> 3
 *
 *      var indentN = R.pipe(R.repeat(' '),
 *                           R.join(''),
 *                           R.replace(/^(?!$)/gm));
 *
 *      var format = R.converge(R.call, [
 *                                  R.pipe(R.prop('indent'), indentN),
 *                                  R.prop('value')
 *                              ]);
 *
 *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
 * @symb R.call(f, a, b) = f(a, b)
 */
var call = /*#__PURE__*/Object(_curry__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function call(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});
/* unused harmony default export */ var _unused_webpack_default_export = (call);

/***/ }),

/***/ "./node_modules/ramda/es/chain.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/chain.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_makeFlat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_makeFlat */ "./node_modules/ramda/es/internal/_makeFlat.js");
/* harmony import */ var _internal_xchain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_xchain */ "./node_modules/ramda/es/internal/_xchain.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ "./node_modules/ramda/es/map.js");






/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      var duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */
var chain = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(['fantasy-land/chain', 'chain'], _internal_xchain__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], function chain(fn, monad) {
  if (typeof monad === 'function') {
    return function (x) {
      return fn(monad(x))(x);
    };
  }
  return Object(_internal_makeFlat__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(false)(Object(_map__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(fn, monad));
}));
/* harmony default export */ __webpack_exports__["a"] = (chain);

/***/ }),

/***/ "./node_modules/ramda/es/clamp.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/clamp.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


/**
 * Restricts a number to be within a range.
 *
 * Also works for other ordered types such as Strings and Dates.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Relation
 * @sig Ord a => a -> a -> a -> a
 * @param {Number} minimum The lower limit of the clamp (inclusive)
 * @param {Number} maximum The upper limit of the clamp (inclusive)
 * @param {Number} value Value to be clamped
 * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
 * @example
 *
 *      R.clamp(1, 10, -5) // => 1
 *      R.clamp(1, 10, 15) // => 10
 *      R.clamp(1, 10, 4)  // => 4
 */
var clamp = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function clamp(min, max, value) {
  if (min > max) {
    throw new Error('min must not be greater than max in clamp(min, max, value)');
  }
  return value < min ? min : value > max ? max : value;
});
/* unused harmony default export */ var _unused_webpack_default_export = (clamp);

/***/ }),

/***/ "./node_modules/ramda/es/clone.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/clone.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_clone */ "./node_modules/ramda/es/internal/_clone.js");
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");



/**
 * Creates a deep copy of the value which may contain (nested) `Array`s and
 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
 * assigned by reference rather than copied
 *
 * Dispatches to a `clone` method if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @param {*} value The object or array to clone
 * @return {*} A deeply cloned copy of `val`
 * @example
 *
 *      var objects = [{}, {}, {}];
 *      var objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */
var clone = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function clone(value) {
  return value != null && typeof value.clone === 'function' ? value.clone() : Object(_internal_clone__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value, [], [], true);
});
/* unused harmony default export */ var _unused_webpack_default_export = (clone);

/***/ }),

/***/ "./node_modules/ramda/es/comparator.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/es/comparator.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");


/**
 * Makes a comparator function out of a function that reports whether the first
 * element is less than the second.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b) -> Boolean) -> ((a, b) -> Number)
 * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
 * is less than the second, `false` otherwise
 * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
 * @example
 *
 *      var byAge = R.comparator((a, b) => a.age < b.age);
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByIncreasingAge = R.sort(byAge, people);
 */
var comparator = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function comparator(pred) {
  return function (a, b) {
    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
  };
});
/* unused harmony default export */ var _unused_webpack_default_export = (comparator);

/***/ }),

/***/ "./node_modules/ramda/es/complement.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/es/complement.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lift */ "./node_modules/ramda/es/lift.js");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not */ "./node_modules/ramda/es/not.js");



/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * `R.complement` may be applied to any functor
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @see R.not
 * @example
 *
 *      var isNotNil = R.complement(R.isNil);
 *      isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      isNil(7); //=> false
 *      isNotNil(7); //=> true
 */
var complement = /*#__PURE__*/Object(_lift__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_not__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* unused harmony default export */ var _unused_webpack_default_export = (complement);

/***/ }),

/***/ "./node_modules/ramda/es/compose.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/compose.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compose; });
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipe */ "./node_modules/ramda/es/pipe.js");
/* harmony import */ var _reverse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reverse */ "./node_modules/ramda/es/reverse.js");



/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }
  return _pipe__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].apply(this, Object(_reverse__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arguments));
}

/***/ }),

/***/ "./node_modules/ramda/es/composeK.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/composeK.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return composeK; });
/* harmony import */ var _chain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chain */ "./node_modules/ramda/es/chain.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "./node_modules/ramda/es/compose.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ "./node_modules/ramda/es/map.js");




/**
 * Returns the right-to-left Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (a -> m z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipeK
 * @example
 *
 *       //  get :: String -> Object -> Maybe *
 *       var get = R.curry((propName, obj) => Maybe(obj[propName]))
 *
 *       //  getStateCode :: Maybe String -> Maybe String
 *       var getStateCode = R.composeK(
 *         R.compose(Maybe.of, R.toUpper),
 *         get('state'),
 *         get('address'),
 *         get('user'),
 *       );
 *       getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
 *       getStateCode({}); //=> Maybe.Nothing()
 * @symb R.composeK(f, g, h)(a) = R.chain(f, R.chain(g, h(a)))
 */
function composeK() {
  if (arguments.length === 0) {
    throw new Error('composeK requires at least one argument');
  }
  var init = Array.prototype.slice.call(arguments);
  var last = init.pop();
  return Object(_compose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_compose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].apply(this, Object(_map__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_chain__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], init)), last);
}

/***/ }),

/***/ "./node_modules/ramda/es/composeP.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/composeP.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _pipeP__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipeP */ "./node_modules/ramda/es/pipeP.js");
/* harmony import */ var _reverse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reverse */ "./node_modules/ramda/es/reverse.js");



/**
 * Performs right-to-left composition of one or more Promise-returning
 * functions. The rightmost function may have any arity; the remaining
 * functions must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
 * @param {...Function} functions The functions to compose
 * @return {Function}
 * @see R.pipeP
 * @example
 *
 *      var db = {
 *        users: {
 *          JOE: {
 *            name: 'Joe',
 *            followers: ['STEVE', 'SUZY']
 *          }
 *        }
 *      }
 *
 *      // We'll pretend to do a db lookup which returns a promise
 *      var lookupUser = (userId) => Promise.resolve(db.users[userId])
 *      var lookupFollowers = (user) => Promise.resolve(user.followers)
 *      lookupUser('JOE').then(lookupFollowers)
 *
 *      //  followersForUser :: String -> Promise [UserId]
 *      var followersForUser = R.composeP(lookupFollowers, lookupUser);
 *      followersForUser('JOE').then(followers => console.log('Followers:', followers))
 *      // Followers: ["STEVE","SUZY"]
 */
function composeP() {
  if (arguments.length === 0) {
    throw new Error('composeP requires at least one argument');
  }
  return _pipeP__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].apply(this, Object(_reverse__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arguments));
}

/***/ }),

/***/ "./node_modules/ramda/es/concat.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/concat.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isArray */ "./node_modules/ramda/es/internal/_isArray.js");
/* harmony import */ var _internal_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_isFunction */ "./node_modules/ramda/es/internal/_isFunction.js");
/* harmony import */ var _internal_isString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_isString */ "./node_modules/ramda/es/internal/_isString.js");
/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toString */ "./node_modules/ramda/es/toString.js");






/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 * Can also concatenate two members of a [fantasy-land
 * compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */
var concat = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function concat(a, b) {
  if (Object(_internal_isArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(a)) {
    if (Object(_internal_isArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(b)) {
      return a.concat(b);
    }
    throw new TypeError(Object(_toString__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(b) + ' is not an array');
  }
  if (Object(_internal_isString__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(a)) {
    if (Object(_internal_isString__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(b)) {
      return a + b;
    }
    throw new TypeError(Object(_toString__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(b) + ' is not a string');
  }
  if (a != null && Object(_internal_isFunction__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a['fantasy-land/concat'])) {
    return a['fantasy-land/concat'](b);
  }
  if (a != null && Object(_internal_isFunction__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a.concat)) {
    return a.concat(b);
  }
  throw new TypeError(Object(_toString__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});
/* harmony default export */ __webpack_exports__["a"] = (concat);

/***/ }),

/***/ "./node_modules/ramda/es/cond.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/cond.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_arity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_arity */ "./node_modules/ramda/es/internal/_arity.js");
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ "./node_modules/ramda/es/map.js");
/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./max */ "./node_modules/ramda/es/max.js");
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reduce */ "./node_modules/ramda/es/reduce.js");






/**
 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
 * to `fn` are applied to each of the predicates in turn until one returns a
 * "truthy" value, at which point `fn` returns the result of applying its
 * arguments to the corresponding transformer. If none of the predicates
 * matches, `fn` returns undefined.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Logic
 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
 * @param {Array} pairs A list of [predicate, transformer]
 * @return {Function}
 * @example
 *
 *      var fn = R.cond([
 *        [R.equals(0),   R.always('water freezes at 0°C')],
 *        [R.equals(100), R.always('water boils at 100°C')],
 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
 *      ]);
 *      fn(0); //=> 'water freezes at 0°C'
 *      fn(50); //=> 'nothing special happens at 50°C'
 *      fn(100); //=> 'water boils at 100°C'
 */
var cond = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function cond(pairs) {
  var arity = Object(_reduce__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_max__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], 0, Object(_map__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function (pair) {
    return pair[0].length;
  }, pairs));
  return Object(_internal_arity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arity, function () {
    var idx = 0;
    while (idx < pairs.length) {
      if (pairs[idx][0].apply(this, arguments)) {
        return pairs[idx][1].apply(this, arguments);
      }
      idx += 1;
    }
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (cond);

/***/ }),

/***/ "./node_modules/ramda/es/construct.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/construct.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _constructN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructN */ "./node_modules/ramda/es/constructN.js");



/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> {*}) -> (* -> {*})
 * @param {Function} fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @see R.invoker
 * @example
 *
 *      // Constructor function
 *      function Animal(kind) {
 *        this.kind = kind;
 *      };
 *      Animal.prototype.sighting = function() {
 *        return "It's a " + this.kind + "!";
 *      }
 *
 *      var AnimalConstructor = R.construct(Animal)
 *
 *      // Notice we no longer need the 'new' keyword:
 *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
 *
 *      var animalTypes = ["Lion", "Tiger", "Bear"];
 *      var animalSighting = R.invoker(0, 'sighting');
 *      var sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
 *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
 */
var construct = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function construct(Fn) {
  return Object(_constructN__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Fn.length, Fn);
});
/* unused harmony default export */ var _unused_webpack_default_export = (construct);

/***/ }),

/***/ "./node_modules/ramda/es/constructN.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/es/constructN.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curry */ "./node_modules/ramda/es/curry.js");
/* harmony import */ var _nAry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nAry */ "./node_modules/ramda/es/nAry.js");




/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type. The arity of the function
 * returned is specified to allow using variadic constructor functions.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Function
 * @sig Number -> (* -> {*}) -> (* -> {*})
 * @param {Number} n The arity of the constructor function.
 * @param {Function} Fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Variadic Constructor function
 *      function Salad() {
 *        this.ingredients = arguments;
 *      }
 *
 *      Salad.prototype.recipe = function() {
 *        var instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);
 *        return R.join('\n', instructions);
 *      };
 *
 *      var ThreeLayerSalad = R.constructN(3, Salad);
 *
 *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
 *      var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');
 *
 *      console.log(salad.recipe());
 *      // Add a dollop of Mayonnaise
 *      // Add a dollop of Potato Chips
 *      // Add a dollop of Ketchup
 */
var constructN = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function constructN(n, Fn) {
  if (n > 10) {
    throw new Error('Constructor with greater than ten arguments');
  }
  if (n === 0) {
    return function () {
      return new Fn();
    };
  }
  return Object(_curry__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_nAry__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(n, function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    switch (arguments.length) {
      case 1:
        return new Fn($0);
      case 2:
        return new Fn($0, $1);
      case 3:
        return new Fn($0, $1, $2);
      case 4:
        return new Fn($0, $1, $2, $3);
      case 5:
        return new Fn($0, $1, $2, $3, $4);
      case 6:
        return new Fn($0, $1, $2, $3, $4, $5);
      case 7:
        return new Fn($0, $1, $2, $3, $4, $5, $6);
      case 8:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
      case 9:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
      case 10:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
    }
  }));
});
/* harmony default export */ __webpack_exports__["a"] = (constructN);

/***/ }),

/***/ "./node_modules/ramda/es/contains.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/contains.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_contains */ "./node_modules/ramda/es/internal/_contains.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");



/**
 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
 * terms, to at least one element of the given list; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.contains(3, [1, 2, 3]); //=> true
 *      R.contains(4, [1, 2, 3]); //=> false
 *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.contains([42], [[42]]); //=> true
 */
var contains = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_internal_contains__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* unused harmony default export */ var _unused_webpack_default_export = (contains);

/***/ }),

/***/ "./node_modules/ramda/es/converge.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/converge.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_map */ "./node_modules/ramda/es/internal/_map.js");
/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/es/curryN.js");
/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./max */ "./node_modules/ramda/es/max.js");
/* harmony import */ var _pluck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pluck */ "./node_modules/ramda/es/pluck.js");
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reduce */ "./node_modules/ramda/es/reduce.js");







/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. When invoked, this new function is applied to some
 * arguments, each branching function is applied to those same arguments. The
 * results of each branching function are passed as arguments to the converging
 * function to produce the return value.
 *
 * @func
 * @memberOf R
 * @since v0.4.2
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Array} functions A list of functions.
 * @return {Function} A new function.
 * @see R.useWith
 * @example
 *
 *      var average = R.converge(R.divide, [R.sum, R.length])
 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 *
 *      var strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
 *      strangeConcat("Yodel") //=> "YODELyodel"
 *
 * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
 */
var converge = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function converge(after, fns) {
  return Object(_curryN__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_reduce__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_max__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], 0, Object(_pluck__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('length', fns)), function () {
    var args = arguments;
    var context = this;
    return after.apply(context, Object(_internal_map__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (fn) {
      return fn.apply(context, args);
    }, fns));
  });
});
/* harmony default export */ __webpack_exports__["a"] = (converge);

/***/ }),

/***/ "./node_modules/ramda/es/countBy.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/countBy.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reduceBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reduceBy */ "./node_modules/ramda/es/reduceBy.js");


/**
 * Counts the elements of a list according to how many match each value of a
 * key generated by the supplied function. Returns an object mapping the keys
 * produced by `fn` to the number of occurrences in the list. Note that all
 * keys are coerced to strings because of how JavaScript objects work.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> String) -> [a] -> {*}
 * @param {Function} fn The function used to map values to keys.
 * @param {Array} list The list to count elements from.
 * @return {Object} An object mapping keys to number of occurrences in the list.
 * @example
 *
 *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
 *
 *      var letters = ['a', 'b', 'A', 'a', 'B', 'c'];
 *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
 */
var countBy = /*#__PURE__*/Object(_reduceBy__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (acc, elem) {
  return acc + 1;
}, 0);
/* unused harmony default export */ var _unused_webpack_default_export = (countBy);

/***/ }),

/***/ "./node_modules/ramda/es/curry.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/curry.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/es/curryN.js");



/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN
 * @example
 *
 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
var curry = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function curry(fn) {
  return Object(_curryN__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(fn.length, fn);
});
/* harmony default export */ __webpack_exports__["a"] = (curry);

/***/ }),

/***/ "./node_modules/ramda/es/curryN.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/curryN.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_arity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_arity */ "./node_modules/ramda/es/internal/_arity.js");
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_curryN__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_curryN */ "./node_modules/ramda/es/internal/_curryN.js");





/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      var sumArgs = (...args) => R.sum(args);
 *
 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
var curryN = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function curryN(length, fn) {
  if (length === 1) {
    return Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(fn);
  }
  return Object(_internal_arity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(length, Object(_internal_curryN__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(length, [], fn));
});
/* harmony default export */ __webpack_exports__["a"] = (curryN);

/***/ }),

/***/ "./node_modules/ramda/es/dec.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/dec.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./node_modules/ramda/es/add.js");


/**
 * Decrements its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n - 1
 * @see R.inc
 * @example
 *
 *      R.dec(42); //=> 41
 */
var dec = /*#__PURE__*/Object(_add__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(-1);
/* unused harmony default export */ var _unused_webpack_default_export = (dec);

/***/ }),

/***/ "./node_modules/ramda/es/defaultTo.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/defaultTo.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      var defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */
var defaultTo = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function defaultTo(d, v) {
  return v == null || v !== v ? d : v;
});
/* harmony default export */ __webpack_exports__["a"] = (defaultTo);

/***/ }),

/***/ "./node_modules/ramda/es/descend.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/descend.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


/**
 * Makes a descending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
 * @see R.ascend
 * @example
 *
 *      var byAge = R.descend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByOldestFirst = R.sort(byAge, people);
 */
var descend = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function descend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa > bb ? -1 : aa < bb ? 1 : 0;
});
/* unused harmony default export */ var _unused_webpack_default_export = (descend);

/***/ }),

/***/ "./node_modules/ramda/es/difference.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/es/difference.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_contains */ "./node_modules/ramda/es/internal/_contains.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");



/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared in terms of
 * value equality, not reference equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith, R.without
 * @example
 *
 *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
 */
var difference = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function difference(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!Object(_internal_contains__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(first[idx], second) && !Object(_internal_contains__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(first[idx], out)) {
      out[out.length] = first[idx];
    }
    idx += 1;
  }
  return out;
});
/* harmony default export */ __webpack_exports__["a"] = (difference);

/***/ }),

/***/ "./node_modules/ramda/es/differenceWith.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/es/differenceWith.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_containsWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_containsWith */ "./node_modules/ramda/es/internal/_containsWith.js");
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");



/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
 * @example
 *
 *      var cmp = (x, y) => x.a === y.a;
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
 *      var l2 = [{a: 3}, {a: 4}];
 *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
 */
var differenceWith = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function differenceWith(pred, first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!Object(_internal_containsWith__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(pred, first[idx], second) && !Object(_internal_containsWith__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(pred, first[idx], out)) {
      out.push(first[idx]);
    }
    idx += 1;
  }
  return out;
});
/* harmony default export */ __webpack_exports__["a"] = (differenceWith);

/***/ }),

/***/ "./node_modules/ramda/es/dissoc.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/dissoc.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Object
 * @sig String -> {k: v} -> {k: v}
 * @param {String} prop The name of the property to dissociate
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 * @see R.assoc
 * @example
 *
 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
 */
var dissoc = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function dissoc(prop, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop];
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (dissoc);

/***/ }),

/***/ "./node_modules/ramda/es/dissocPath.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/es/dissocPath.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_isInteger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isInteger */ "./node_modules/ramda/es/internal/_isInteger.js");
/* harmony import */ var _assoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assoc */ "./node_modules/ramda/es/assoc.js");
/* harmony import */ var _dissoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dissoc */ "./node_modules/ramda/es/dissoc.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remove */ "./node_modules/ramda/es/remove.js");
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update */ "./node_modules/ramda/es/update.js");







/**
 * Makes a shallow clone of an object, omitting the property at the given path.
 * Note that this copies and flattens prototype properties onto the new object
 * as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.11.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {k: v} -> {k: v}
 * @param {Array} path The path to the value to omit
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property at path
 * @see R.assocPath
 * @example
 *
 *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 */
var dissocPath = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function dissocPath(path, obj) {
  switch (path.length) {
    case 0:
      return obj;
    case 1:
      return Object(_internal_isInteger__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(path[0]) ? Object(_remove__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(path[0], 1, obj) : Object(_dissoc__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(path[0], obj);
    default:
      var head = path[0];
      var tail = Array.prototype.slice.call(path, 1);
      if (obj[head] == null) {
        return obj;
      } else if (Object(_internal_isInteger__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(path[0])) {
        return Object(_update__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(head, dissocPath(tail, obj[head]), obj);
      } else {
        return Object(_assoc__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(head, dissocPath(tail, obj[head]), obj);
      }
  }
});
/* unused harmony default export */ var _unused_webpack_default_export = (dissocPath);

/***/ }),

/***/ "./node_modules/ramda/es/divide.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/divide.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a / b`.
 * @see R.multiply
 * @example
 *
 *      R.divide(71, 100); //=> 0.71
 *
 *      var half = R.divide(R.__, 2);
 *      half(42); //=> 21
 *
 *      var reciprocal = R.divide(1);
 *      reciprocal(4);   //=> 0.25
 */
var divide = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function divide(a, b) {
  return a / b;
});
/* unused harmony default export */ var _unused_webpack_default_export = (divide);

/***/ }),

/***/ "./node_modules/ramda/es/drop.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/drop.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_xdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xdrop */ "./node_modules/ramda/es/internal/_xdrop.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slice */ "./node_modules/ramda/es/slice.js");





/**
 * Returns all but the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `drop` method).
 *
 * Dispatches to the `drop` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*} A copy of list without the first `n` elements
 * @see R.take, R.transduce, R.dropLast, R.dropWhile
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */
var drop = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(['drop'], _internal_xdrop__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], function drop(n, xs) {
  return Object(_slice__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Math.max(0, n), Infinity, xs);
}));
/* harmony default export */ __webpack_exports__["a"] = (drop);

/***/ }),

/***/ "./node_modules/ramda/es/dropLast.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/dropLast.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_dropLast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_dropLast */ "./node_modules/ramda/es/internal/_dropLast.js");
/* harmony import */ var _internal_xdropLast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_xdropLast */ "./node_modules/ramda/es/internal/_xdropLast.js");





/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} list The list of elements to consider.
 * @return {Array} A copy of the list with only the first `list.length - n` elements
 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
 * @example
 *
 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(3, 'ramda');               //=> 'ra'
 */
var dropLast = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])([], _internal_xdropLast__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _internal_dropLast__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]));
/* unused harmony default export */ var _unused_webpack_default_export = (dropLast);

/***/ }),

/***/ "./node_modules/ramda/es/dropLastWhile.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/dropLastWhile.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_dropLastWhile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_dropLastWhile */ "./node_modules/ramda/es/internal/_dropLastWhile.js");
/* harmony import */ var _internal_xdropLastWhile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_xdropLastWhile */ "./node_modules/ramda/es/internal/_xdropLastWhile.js");





/**
 * Returns a new list excluding all the tailing elements of a given list which
 * satisfy the supplied predicate function. It passes each value from the right
 * to the supplied predicate function, skipping elements until the predicate
 * function returns a `falsy` value. The predicate function is applied to one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} predicate The function to be called on each element
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.
 * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile
 * @example
 *
 *      var lteThree = x => x <= 3;
 *
 *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
 *
 *      R.dropLastWhile(x => x !== 'd' , 'Ramda'); //=> 'Ramd'
 */
var dropLastWhile = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])([], _internal_xdropLastWhile__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _internal_dropLastWhile__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]));
/* unused harmony default export */ var _unused_webpack_default_export = (dropLastWhile);

/***/ }),

/***/ "./node_modules/ramda/es/dropRepeats.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/es/dropRepeats.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_xdropRepeatsWith__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xdropRepeatsWith */ "./node_modules/ramda/es/internal/_xdropRepeatsWith.js");
/* harmony import */ var _dropRepeatsWith__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropRepeatsWith */ "./node_modules/ramda/es/dropRepeatsWith.js");
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./equals */ "./node_modules/ramda/es/equals.js");






/**
 * Returns a new list without any consecutively repeating elements.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
 */
var dropRepeats = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])([], /*#__PURE__*/Object(_internal_xdropRepeatsWith__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_equals__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]), /*#__PURE__*/Object(_dropRepeatsWith__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_equals__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])));
/* unused harmony default export */ var _unused_webpack_default_export = (dropRepeats);

/***/ }),

/***/ "./node_modules/ramda/es/dropRepeatsWith.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/es/dropRepeatsWith.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_xdropRepeatsWith__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xdropRepeatsWith */ "./node_modules/ramda/es/internal/_xdropRepeatsWith.js");
/* harmony import */ var _last__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./last */ "./node_modules/ramda/es/last.js");





/**
 * Returns a new list without any consecutively repeating elements. Equality is
 * determined by applying the supplied predicate to each pair of consecutive elements. The
 * first element in a series of equal elements will be preserved.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig ((a, a) -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *      var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
 *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
 */
var dropRepeatsWith = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])([], _internal_xdropRepeatsWith__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], function dropRepeatsWith(pred, list) {
  var result = [];
  var idx = 1;
  var len = list.length;
  if (len !== 0) {
    result[0] = list[0];
    while (idx < len) {
      if (!pred(Object(_last__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(result), list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
  }
  return result;
}));
/* harmony default export */ __webpack_exports__["a"] = (dropRepeatsWith);

/***/ }),

/***/ "./node_modules/ramda/es/dropWhile.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/dropWhile.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_xdropWhile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xdropWhile */ "./node_modules/ramda/es/internal/_xdropWhile.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slice */ "./node_modules/ramda/es/slice.js");





/**
 * Returns a new list excluding the leading elements of a given list which
 * satisfy the supplied predicate function. It passes each value to the supplied
 * predicate function, skipping elements while the predicate function returns
 * `true`. The predicate function is applied to one argument: *(value)*.
 *
 * Dispatches to the `dropWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.takeWhile, R.transduce, R.addIndex
 * @example
 *
 *      var lteTwo = x => x <= 2;
 *
 *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
 *
 *      R.dropWhile(x => x !== 'd' , 'Ramda'); //=> 'da'
 */
var dropWhile = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(['dropWhile'], _internal_xdropWhile__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], function dropWhile(pred, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && pred(xs[idx])) {
    idx += 1;
  }
  return Object(_slice__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(idx, Infinity, xs);
}));
/* unused harmony default export */ var _unused_webpack_default_export = (dropWhile);

/***/ }),

/***/ "./node_modules/ramda/es/either.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/either.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isFunction */ "./node_modules/ramda/es/internal/_isFunction.js");
/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lift */ "./node_modules/ramda/es/lift.js");
/* harmony import */ var _or__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./or */ "./node_modules/ramda/es/or.js");





/**
 * A function wrapping calls to the two functions in an `||` operation,
 * returning the result of the first function if it is truth-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * truth-y value.
 *
 * In addition to functions, `R.either` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
 * @see R.or
 * @example
 *
 *      var gt10 = x => x > 10;
 *      var even = x => x % 2 === 0;
 *      var f = R.either(gt10, even);
 *      f(101); //=> true
 *      f(8); //=> true
 */
var either = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function either(f, g) {
  return Object(_internal_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(f) ? function _either() {
    return f.apply(this, arguments) || g.apply(this, arguments);
  } : Object(_lift__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_or__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(f, g);
});
/* unused harmony default export */ var _unused_webpack_default_export = (either);

/***/ }),

/***/ "./node_modules/ramda/es/empty.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/empty.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _internal_isArguments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isArguments */ "./node_modules/ramda/es/internal/_isArguments.js");
/* harmony import */ var _internal_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_isArray */ "./node_modules/ramda/es/internal/_isArray.js");
/* harmony import */ var _internal_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_isObject */ "./node_modules/ramda/es/internal/_isObject.js");
/* harmony import */ var _internal_isString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/_isString */ "./node_modules/ramda/es/internal/_isString.js");






/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
 * types are supported if they define `<Type>.empty`,
 * `<Type>.prototype.empty` or implement the
 * [FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));      //=> Nothing()
 *      R.empty([1, 2, 3]);     //=> []
 *      R.empty('unicorns');    //=> ''
 *      R.empty({x: 1, y: 2});  //=> {}
 */
var empty = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function empty(x) {
  return x != null && typeof x['fantasy-land/empty'] === 'function' ? x['fantasy-land/empty']() : x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function' ? x.constructor['fantasy-land/empty']() : x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : Object(_internal_isArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(x) ? [] : Object(_internal_isString__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(x) ? '' : Object(_internal_isObject__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(x) ? {} : Object(_internal_isArguments__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(x) ? function () {
    return arguments;
  }() :
  // else
  void 0;
});
/* harmony default export */ __webpack_exports__["a"] = (empty);

/***/ }),

/***/ "./node_modules/ramda/es/endsWith.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/endsWith.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equals */ "./node_modules/ramda/es/equals.js");
/* harmony import */ var _takeLast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./takeLast */ "./node_modules/ramda/es/takeLast.js");




/**
 * Checks if a list ends with the provided values
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> Boolean
 * @sig String -> Boolean
 * @param {*} suffix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.endsWith('c', 'abc')                //=> true
 *      R.endsWith('b', 'abc')                //=> false
 *      R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
 *      R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
var endsWith = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (suffix, list) {
  return Object(_equals__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_takeLast__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(suffix.length, list), suffix);
});
/* unused harmony default export */ var _unused_webpack_default_export = (endsWith);

/***/ }),

/***/ "./node_modules/ramda/es/eqBy.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/eqBy.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equals */ "./node_modules/ramda/es/equals.js");



/**
 * Takes a function and two values in its domain and returns `true` if the
 * values map to the same value in the codomain; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Relation
 * @sig (a -> b) -> a -> a -> Boolean
 * @param {Function} f
 * @param {*} x
 * @param {*} y
 * @return {Boolean}
 * @example
 *
 *      R.eqBy(Math.abs, 5, -5); //=> true
 */
var eqBy = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function eqBy(f, x, y) {
  return Object(_equals__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(f(x), f(y));
});
/* unused harmony default export */ var _unused_webpack_default_export = (eqBy);

/***/ }),

/***/ "./node_modules/ramda/es/eqProps.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/eqProps.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equals */ "./node_modules/ramda/es/equals.js");



/**
 * Reports whether two objects have the same value, in [`R.equals`](#equals)
 * terms, for the specified property. Useful as a curried predicate.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig k -> {k: v} -> {k: v} -> Boolean
 * @param {String} prop The name of the property to compare
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean}
 *
 * @example
 *
 *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
 *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
 *      R.eqProps('a', o1, o2); //=> false
 *      R.eqProps('c', o1, o2); //=> true
 */
var eqProps = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function eqProps(prop, obj1, obj2) {
  return Object(_equals__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj1[prop], obj2[prop]);
});
/* unused harmony default export */ var _unused_webpack_default_export = (eqProps);

/***/ }),

/***/ "./node_modules/ramda/es/equals.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/equals.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_equals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_equals */ "./node_modules/ramda/es/internal/_equals.js");



/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      var a = {}; a.v = a;
 *      var b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
var equals = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function equals(a, b) {
  return Object(_internal_equals__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(a, b, [], []);
});
/* harmony default export */ __webpack_exports__["a"] = (equals);

/***/ }),

/***/ "./node_modules/ramda/es/evolve.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/evolve.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      var transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      };
 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */
var evolve = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function evolve(transformations, object) {
  var result = {};
  var transformation, key, type;
  for (key in object) {
    transformation = transformations[key];
    type = typeof transformation;
    result[key] = type === 'function' ? transformation(object[key]) : transformation && type === 'object' ? evolve(transformation, object[key]) : object[key];
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (evolve);

/***/ }),

/***/ "./node_modules/ramda/es/filter.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/filter.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_filter */ "./node_modules/ramda/es/internal/_filter.js");
/* harmony import */ var _internal_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_isObject */ "./node_modules/ramda/es/internal/_isObject.js");
/* harmony import */ var _internal_reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/_reduce */ "./node_modules/ramda/es/internal/_reduce.js");
/* harmony import */ var _internal_xfilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internal/_xfilter */ "./node_modules/ramda/es/internal/_xfilter.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./keys */ "./node_modules/ramda/es/keys.js");








/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var filter = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(['filter'], _internal_xfilter__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], function (pred, filterable) {
  return Object(_internal_isObject__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(filterable) ? Object(_internal_reduce__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(function (acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }
    return acc;
  }, {}, Object(_keys__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(filterable)) :
  // else
  Object(_internal_filter__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(pred, filterable);
}));
/* harmony default export */ __webpack_exports__["a"] = (filter);

/***/ }),

/***/ "./node_modules/ramda/es/find.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/find.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_xfind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xfind */ "./node_modules/ramda/es/internal/_xfind.js");




/**
 * Returns the first element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Dispatches to the `find` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 *        desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
 *      R.find(R.propEq('a', 4))(xs); //=> undefined
 */
var find = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(['find'], _internal_xfind__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], function find(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx += 1;
  }
}));
/* unused harmony default export */ var _unused_webpack_default_export = (find);

/***/ }),

/***/ "./node_modules/ramda/es/findIndex.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/findIndex.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_xfindIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xfindIndex */ "./node_modules/ramda/es/internal/_xfindIndex.js");




/**
 * Returns the index of the first element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
 *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
 */
var findIndex = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])([], _internal_xfindIndex__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], function findIndex(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}));
/* unused harmony default export */ var _unused_webpack_default_export = (findIndex);

/***/ }),

/***/ "./node_modules/ramda/es/findLast.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/findLast.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_xfindLast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xfindLast */ "./node_modules/ramda/es/internal/_xfindLast.js");




/**
 * Returns the last element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
 *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
 */
var findLast = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])([], _internal_xfindLast__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], function findLast(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx -= 1;
  }
}));
/* unused harmony default export */ var _unused_webpack_default_export = (findLast);

/***/ }),

/***/ "./node_modules/ramda/es/findLastIndex.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/findLastIndex.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_xfindLastIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xfindLastIndex */ "./node_modules/ramda/es/internal/_xfindLastIndex.js");




/**
 * Returns the index of the last element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
 *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
 */
var findLastIndex = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])([], _internal_xfindLastIndex__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], function findLastIndex(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return idx;
    }
    idx -= 1;
  }
  return -1;
}));
/* unused harmony default export */ var _unused_webpack_default_export = (findLastIndex);

/***/ }),

/***/ "./node_modules/ramda/es/flatten.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/flatten.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _internal_makeFlat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_makeFlat */ "./node_modules/ramda/es/internal/_makeFlat.js");



/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @see R.unnest
 * @example
 *
 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */
var flatten = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/Object(_internal_makeFlat__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(true));
/* unused harmony default export */ var _unused_webpack_default_export = (flatten);

/***/ }),

/***/ "./node_modules/ramda/es/flip.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/flip.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/es/curryN.js");



/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      var mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */
var flip = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function flip(fn) {
  return Object(_curryN__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(fn.length, function (a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});
/* harmony default export */ __webpack_exports__["a"] = (flip);

/***/ }),

/***/ "./node_modules/ramda/es/forEach.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/forEach.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_checkForMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_checkForMethod */ "./node_modules/ramda/es/internal/_checkForMethod.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");



/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
 * the original array. In some libraries this function is named `each`.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @see R.addIndex
 * @example
 *
 *      var printXPlusFive = x => console.log(x + 5);
 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      // logs 6
 *      // logs 7
 *      // logs 8
 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
 */
var forEach = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_internal_checkForMethod__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('forEach', function forEach(fn, list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    fn(list[idx]);
    idx += 1;
  }
  return list;
}));
/* unused harmony default export */ var _unused_webpack_default_export = (forEach);

/***/ }),

/***/ "./node_modules/ramda/es/forEachObjIndexed.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/es/forEachObjIndexed.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ "./node_modules/ramda/es/keys.js");



/**
 * Iterate over an input `object`, calling a provided function `fn` for each
 * key and value in the object.
 *
 * `fn` receives three argument: *(value, key, obj)*.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Object
 * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
 * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The object to iterate over.
 * @return {Object} The original object.
 * @example
 *
 *      var printKeyConcatValue = (value, key) => console.log(key + ':' + value);
 *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
 *      // logs x:1
 *      // logs y:2
 * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
 */
var forEachObjIndexed = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function forEachObjIndexed(fn, obj) {
  var keyList = Object(_keys__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj);
  var idx = 0;
  while (idx < keyList.length) {
    var key = keyList[idx];
    fn(obj[key], key, obj);
    idx += 1;
  }
  return obj;
});
/* unused harmony default export */ var _unused_webpack_default_export = (forEachObjIndexed);

/***/ }),

/***/ "./node_modules/ramda/es/fromPairs.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/fromPairs.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");


/**
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [[k,v]] -> {k: v}
 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @see R.toPairs, R.pair
 * @example
 *
 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 */
var fromPairs = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function fromPairs(pairs) {
  var result = {};
  var idx = 0;
  while (idx < pairs.length) {
    result[pairs[idx][0]] = pairs[idx][1];
    idx += 1;
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (fromPairs);

/***/ }),

/***/ "./node_modules/ramda/es/groupBy.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/groupBy.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_checkForMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_checkForMethod */ "./node_modules/ramda/es/internal/_checkForMethod.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _reduceBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reduceBy */ "./node_modules/ramda/es/reduceBy.js");




/**
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a String-returning function on each element, and grouping the
 * results according to values returned.
 *
 * Dispatches to the `groupBy` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> String) -> [a] -> {String: [a]}
 * @param {Function} fn Function :: a -> String
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
 *         that produced that key when passed to `fn`.
 * @see R.transduce
 * @example
 *
 *      var byGrade = R.groupBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Abby', score: 84},
 *                      {name: 'Eddy', score: 58},
 *                      // ...
 *                      {name: 'Jack', score: 69}];
 *      byGrade(students);
 *      // {
 *      //   'A': [{name: 'Dianne', score: 99}],
 *      //   'B': [{name: 'Abby', score: 84}]
 *      //   // ...,
 *      //   'F': [{name: 'Eddy', score: 58}]
 *      // }
 */
var groupBy = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_internal_checkForMethod__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('groupBy', /*#__PURE__*/Object(_reduceBy__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function (acc, item) {
  if (acc == null) {
    acc = [];
  }
  acc.push(item);
  return acc;
}, null)));
/* unused harmony default export */ var _unused_webpack_default_export = (groupBy);

/***/ }),

/***/ "./node_modules/ramda/es/groupWith.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/groupWith.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Takes a list and returns a list of lists where each sublist's elements are
 * all satisfied pairwise comparison according to the provided function.
 * Only adjacent elements are passed to the comparison function.
 *
 * @func
 * @memberOf R
 * @since v0.21.0
 * @category List
 * @sig ((a, a) → Boolean) → [a] → [[a]]
 * @param {Function} fn Function for determining whether two given (adjacent)
 *        elements should be in the same group
 * @param {Array} list The array to group. Also accepts a string, which will be
 *        treated as a list of characters.
 * @return {List} A list that contains sublists of elements,
 *         whose concatenations are equal to the original list.
 * @example
 *
 * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
 *
 * R.groupWith(R.eqBy(isVowel), 'aestiou')
 * //=> ['ae', 'st', 'iou']
 */
var groupWith = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (fn, list) {
  var res = [];
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    var nextidx = idx + 1;
    while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
      nextidx += 1;
    }
    res.push(list.slice(idx, nextidx));
    idx = nextidx;
  }
  return res;
});
/* unused harmony default export */ var _unused_webpack_default_export = (groupWith);

/***/ }),

/***/ "./node_modules/ramda/es/gt.js":
/*!*************************************!*\
  !*** ./node_modules/ramda/es/gt.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Returns `true` if the first argument is greater than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.lt
 * @example
 *
 *      R.gt(2, 1); //=> true
 *      R.gt(2, 2); //=> false
 *      R.gt(2, 3); //=> false
 *      R.gt('a', 'z'); //=> false
 *      R.gt('z', 'a'); //=> true
 */
var gt = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function gt(a, b) {
  return a > b;
});
/* unused harmony default export */ var _unused_webpack_default_export = (gt);

/***/ }),

/***/ "./node_modules/ramda/es/gte.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/gte.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Returns `true` if the first argument is greater than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.lte
 * @example
 *
 *      R.gte(2, 1); //=> true
 *      R.gte(2, 2); //=> true
 *      R.gte(2, 3); //=> false
 *      R.gte('a', 'z'); //=> false
 *      R.gte('z', 'a'); //=> true
 */
var gte = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function gte(a, b) {
  return a >= b;
});
/* unused harmony default export */ var _unused_webpack_default_export = (gte);

/***/ }),

/***/ "./node_modules/ramda/es/has.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/has.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/es/internal/_has.js");



/**
 * Returns whether or not an object has an own property with the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      var hasName = R.has('name');
 *      hasName({name: 'alice'});   //=> true
 *      hasName({name: 'bob'});     //=> true
 *      hasName({});                //=> false
 *
 *      var point = {x: 0, y: 0};
 *      var pointHas = R.has(R.__, point);
 *      pointHas('x');  //=> true
 *      pointHas('y');  //=> true
 *      pointHas('z');  //=> false
 */
var has = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_internal_has__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* unused harmony default export */ var _unused_webpack_default_export = (has);

/***/ }),

/***/ "./node_modules/ramda/es/hasIn.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/hasIn.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Returns whether or not an object or its prototype chain has a property with
 * the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      function Rectangle(width, height) {
 *        this.width = width;
 *        this.height = height;
 *      }
 *      Rectangle.prototype.area = function() {
 *        return this.width * this.height;
 *      };
 *
 *      var square = new Rectangle(2, 2);
 *      R.hasIn('width', square);  //=> true
 *      R.hasIn('area', square);  //=> true
 */
var hasIn = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function hasIn(prop, obj) {
  return prop in obj;
});
/* unused harmony default export */ var _unused_webpack_default_export = (hasIn);

/***/ }),

/***/ "./node_modules/ramda/es/head.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/head.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nth */ "./node_modules/ramda/es/nth.js");


/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {Array|String} list
 * @return {*}
 * @see R.tail, R.init, R.last
 * @example
 *
 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
 *      R.head([]); //=> undefined
 *
 *      R.head('abc'); //=> 'a'
 *      R.head(''); //=> ''
 */
var head = /*#__PURE__*/Object(_nth__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(0);
/* unused harmony default export */ var _unused_webpack_default_export = (head);

/***/ }),

/***/ "./node_modules/ramda/es/identical.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/identical.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      var o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */
var identical = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function identical(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
});
/* harmony default export */ __webpack_exports__["a"] = (identical);

/***/ }),

/***/ "./node_modules/ramda/es/identity.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/identity.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _internal_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_identity */ "./node_modules/ramda/es/internal/_identity.js");



/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      var obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */
var identity = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_internal_identity__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* harmony default export */ __webpack_exports__["a"] = (identity);

/***/ }),

/***/ "./node_modules/ramda/es/ifElse.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/ifElse.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/es/curryN.js");



/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when
 * @example
 *
 *      var incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */
var ifElse = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function ifElse(condition, onTrue, onFalse) {
  return Object(_curryN__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (ifElse);

/***/ }),

/***/ "./node_modules/ramda/es/inc.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/inc.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./node_modules/ramda/es/add.js");


/**
 * Increments its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n + 1
 * @see R.dec
 * @example
 *
 *      R.inc(42); //=> 43
 */
var inc = /*#__PURE__*/Object(_add__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(1);
/* unused harmony default export */ var _unused_webpack_default_export = (inc);

/***/ }),

/***/ "./node_modules/ramda/es/index.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/index.js ***!
  \****************************************/
/*! exports provided: F, T, __, add, addIndex, adjust, all, allPass, always, and, any, anyPass, ap, aperture, append, apply, applySpec, applyTo, ascend, assoc, assocPath, binary, bind, both, call, chain, clamp, clone, comparator, complement, compose, composeK, composeP, concat, cond, construct, constructN, contains, converge, countBy, curry, curryN, dec, defaultTo, descend, difference, differenceWith, dissoc, dissocPath, divide, drop, dropLast, dropLastWhile, dropRepeats, dropRepeatsWith, dropWhile, either, empty, endsWith, eqBy, eqProps, equals, evolve, filter, find, findIndex, findLast, findLastIndex, flatten, flip, forEach, forEachObjIndexed, fromPairs, groupBy, groupWith, gt, gte, has, hasIn, head, identical, identity, ifElse, inc, indexBy, indexOf, init, innerJoin, insert, insertAll, intersection, intersperse, into, invert, invertObj, invoker, is, isEmpty, isNil, join, juxt, keys, keysIn, last, lastIndexOf, length, lens, lensIndex, lensPath, lensProp, lift, liftN, lt, lte, map, mapAccum, mapAccumRight, mapObjIndexed, match, mathMod, max, maxBy, mean, median, memoize, memoizeWith, merge, mergeAll, mergeDeepLeft, mergeDeepRight, mergeDeepWith, mergeDeepWithKey, mergeWith, mergeWithKey, min, minBy, modulo, multiply, nAry, negate, none, not, nth, nthArg, o, objOf, of, omit, once, or, over, pair, partial, partialRight, partition, path, pathEq, pathOr, pathSatisfies, pick, pickAll, pickBy, pipe, pipeK, pipeP, pluck, prepend, product, project, prop, propEq, propIs, propOr, propSatisfies, props, range, reduce, reduceBy, reduceRight, reduceWhile, reduced, reject, remove, repeat, replace, reverse, scan, sequence, set, slice, sort, sortBy, sortWith, split, splitAt, splitEvery, splitWhen, startsWith, subtract, sum, symmetricDifference, symmetricDifferenceWith, tail, take, takeLast, takeLastWhile, takeWhile, tap, test, times, toLower, toPairs, toPairsIn, toString, toUpper, transduce, transpose, traverse, trim, tryCatch, type, unapply, unary, uncurryN, unfold, union, unionWith, uniq, uniqBy, uniqWith, unless, unnest, until, update, useWith, values, valuesIn, view, when, where, whereEq, without, xprod, zip, zipObj, zipWith */
/*! exports used: isNil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _F__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./F */ "./node_modules/ramda/es/F.js");
/* harmony import */ var _T__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./T */ "./node_modules/ramda/es/T.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./__ */ "./node_modules/ramda/es/__.js");
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add */ "./node_modules/ramda/es/add.js");
/* harmony import */ var _addIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addIndex */ "./node_modules/ramda/es/addIndex.js");
/* harmony import */ var _adjust__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adjust */ "./node_modules/ramda/es/adjust.js");
/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all */ "./node_modules/ramda/es/all.js");
/* harmony import */ var _allPass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./allPass */ "./node_modules/ramda/es/allPass.js");
/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./always */ "./node_modules/ramda/es/always.js");
/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./and */ "./node_modules/ramda/es/and.js");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./any */ "./node_modules/ramda/es/any.js");
/* harmony import */ var _anyPass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./anyPass */ "./node_modules/ramda/es/anyPass.js");
/* harmony import */ var _ap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ap */ "./node_modules/ramda/es/ap.js");
/* harmony import */ var _aperture__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./aperture */ "./node_modules/ramda/es/aperture.js");
/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./append */ "./node_modules/ramda/es/append.js");
/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./apply */ "./node_modules/ramda/es/apply.js");
/* harmony import */ var _applySpec__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./applySpec */ "./node_modules/ramda/es/applySpec.js");
/* harmony import */ var _applyTo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./applyTo */ "./node_modules/ramda/es/applyTo.js");
/* harmony import */ var _ascend__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ascend */ "./node_modules/ramda/es/ascend.js");
/* harmony import */ var _assoc__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assoc */ "./node_modules/ramda/es/assoc.js");
/* harmony import */ var _assocPath__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assocPath */ "./node_modules/ramda/es/assocPath.js");
/* harmony import */ var _binary__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./binary */ "./node_modules/ramda/es/binary.js");
/* harmony import */ var _bind__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bind */ "./node_modules/ramda/es/bind.js");
/* harmony import */ var _both__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./both */ "./node_modules/ramda/es/both.js");
/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./call */ "./node_modules/ramda/es/call.js");
/* harmony import */ var _chain__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./chain */ "./node_modules/ramda/es/chain.js");
/* harmony import */ var _clamp__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./clamp */ "./node_modules/ramda/es/clamp.js");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./clone */ "./node_modules/ramda/es/clone.js");
/* harmony import */ var _comparator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./comparator */ "./node_modules/ramda/es/comparator.js");
/* harmony import */ var _complement__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./complement */ "./node_modules/ramda/es/complement.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./compose */ "./node_modules/ramda/es/compose.js");
/* harmony import */ var _composeK__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./composeK */ "./node_modules/ramda/es/composeK.js");
/* harmony import */ var _composeP__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./composeP */ "./node_modules/ramda/es/composeP.js");
/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./concat */ "./node_modules/ramda/es/concat.js");
/* harmony import */ var _cond__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./cond */ "./node_modules/ramda/es/cond.js");
/* harmony import */ var _construct__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./construct */ "./node_modules/ramda/es/construct.js");
/* harmony import */ var _constructN__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./constructN */ "./node_modules/ramda/es/constructN.js");
/* harmony import */ var _contains__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./contains */ "./node_modules/ramda/es/contains.js");
/* harmony import */ var _converge__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./converge */ "./node_modules/ramda/es/converge.js");
/* harmony import */ var _countBy__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./countBy */ "./node_modules/ramda/es/countBy.js");
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./curry */ "./node_modules/ramda/es/curry.js");
/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/es/curryN.js");
/* harmony import */ var _dec__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./dec */ "./node_modules/ramda/es/dec.js");
/* harmony import */ var _defaultTo__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./defaultTo */ "./node_modules/ramda/es/defaultTo.js");
/* harmony import */ var _descend__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./descend */ "./node_modules/ramda/es/descend.js");
/* harmony import */ var _difference__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./difference */ "./node_modules/ramda/es/difference.js");
/* harmony import */ var _differenceWith__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./differenceWith */ "./node_modules/ramda/es/differenceWith.js");
/* harmony import */ var _dissoc__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./dissoc */ "./node_modules/ramda/es/dissoc.js");
/* harmony import */ var _dissocPath__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./dissocPath */ "./node_modules/ramda/es/dissocPath.js");
/* harmony import */ var _divide__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./divide */ "./node_modules/ramda/es/divide.js");
/* harmony import */ var _drop__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./drop */ "./node_modules/ramda/es/drop.js");
/* harmony import */ var _dropLast__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./dropLast */ "./node_modules/ramda/es/dropLast.js");
/* harmony import */ var _dropLastWhile__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./dropLastWhile */ "./node_modules/ramda/es/dropLastWhile.js");
/* harmony import */ var _dropRepeats__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./dropRepeats */ "./node_modules/ramda/es/dropRepeats.js");
/* harmony import */ var _dropRepeatsWith__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./dropRepeatsWith */ "./node_modules/ramda/es/dropRepeatsWith.js");
/* harmony import */ var _dropWhile__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./dropWhile */ "./node_modules/ramda/es/dropWhile.js");
/* harmony import */ var _either__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./either */ "./node_modules/ramda/es/either.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./empty */ "./node_modules/ramda/es/empty.js");
/* harmony import */ var _endsWith__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./endsWith */ "./node_modules/ramda/es/endsWith.js");
/* harmony import */ var _eqBy__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./eqBy */ "./node_modules/ramda/es/eqBy.js");
/* harmony import */ var _eqProps__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./eqProps */ "./node_modules/ramda/es/eqProps.js");
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./equals */ "./node_modules/ramda/es/equals.js");
/* harmony import */ var _evolve__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./evolve */ "./node_modules/ramda/es/evolve.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./filter */ "./node_modules/ramda/es/filter.js");
/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./find */ "./node_modules/ramda/es/find.js");
/* harmony import */ var _findIndex__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./findIndex */ "./node_modules/ramda/es/findIndex.js");
/* harmony import */ var _findLast__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./findLast */ "./node_modules/ramda/es/findLast.js");
/* harmony import */ var _findLastIndex__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./findLastIndex */ "./node_modules/ramda/es/findLastIndex.js");
/* harmony import */ var _flatten__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./flatten */ "./node_modules/ramda/es/flatten.js");
/* harmony import */ var _flip__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./flip */ "./node_modules/ramda/es/flip.js");
/* harmony import */ var _forEach__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./forEach */ "./node_modules/ramda/es/forEach.js");
/* harmony import */ var _forEachObjIndexed__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./forEachObjIndexed */ "./node_modules/ramda/es/forEachObjIndexed.js");
/* harmony import */ var _fromPairs__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./fromPairs */ "./node_modules/ramda/es/fromPairs.js");
/* harmony import */ var _groupBy__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./groupBy */ "./node_modules/ramda/es/groupBy.js");
/* harmony import */ var _groupWith__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./groupWith */ "./node_modules/ramda/es/groupWith.js");
/* harmony import */ var _gt__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./gt */ "./node_modules/ramda/es/gt.js");
/* harmony import */ var _gte__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./gte */ "./node_modules/ramda/es/gte.js");
/* harmony import */ var _has__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./has */ "./node_modules/ramda/es/has.js");
/* harmony import */ var _hasIn__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./hasIn */ "./node_modules/ramda/es/hasIn.js");
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./head */ "./node_modules/ramda/es/head.js");
/* harmony import */ var _identical__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./identical */ "./node_modules/ramda/es/identical.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./identity */ "./node_modules/ramda/es/identity.js");
/* harmony import */ var _ifElse__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./ifElse */ "./node_modules/ramda/es/ifElse.js");
/* harmony import */ var _inc__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./inc */ "./node_modules/ramda/es/inc.js");
/* harmony import */ var _indexBy__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./indexBy */ "./node_modules/ramda/es/indexBy.js");
/* harmony import */ var _indexOf__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./indexOf */ "./node_modules/ramda/es/indexOf.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./init */ "./node_modules/ramda/es/init.js");
/* harmony import */ var _innerJoin__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./innerJoin */ "./node_modules/ramda/es/innerJoin.js");
/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./insert */ "./node_modules/ramda/es/insert.js");
/* harmony import */ var _insertAll__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./insertAll */ "./node_modules/ramda/es/insertAll.js");
/* harmony import */ var _intersection__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./intersection */ "./node_modules/ramda/es/intersection.js");
/* harmony import */ var _intersperse__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./intersperse */ "./node_modules/ramda/es/intersperse.js");
/* harmony import */ var _into__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./into */ "./node_modules/ramda/es/into.js");
/* harmony import */ var _invert__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./invert */ "./node_modules/ramda/es/invert.js");
/* harmony import */ var _invertObj__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./invertObj */ "./node_modules/ramda/es/invertObj.js");
/* harmony import */ var _invoker__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./invoker */ "./node_modules/ramda/es/invoker.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./is */ "./node_modules/ramda/es/is.js");
/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./isEmpty */ "./node_modules/ramda/es/isEmpty.js");
/* harmony import */ var _isNil__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./isNil */ "./node_modules/ramda/es/isNil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNil__WEBPACK_IMPORTED_MODULE_98__["a"]; });

/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./join */ "./node_modules/ramda/es/join.js");
/* harmony import */ var _juxt__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./juxt */ "./node_modules/ramda/es/juxt.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./keys */ "./node_modules/ramda/es/keys.js");
/* harmony import */ var _keysIn__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./keysIn */ "./node_modules/ramda/es/keysIn.js");
/* harmony import */ var _last__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./last */ "./node_modules/ramda/es/last.js");
/* harmony import */ var _lastIndexOf__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./lastIndexOf */ "./node_modules/ramda/es/lastIndexOf.js");
/* harmony import */ var _length__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./length */ "./node_modules/ramda/es/length.js");
/* harmony import */ var _lens__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./lens */ "./node_modules/ramda/es/lens.js");
/* harmony import */ var _lensIndex__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./lensIndex */ "./node_modules/ramda/es/lensIndex.js");
/* harmony import */ var _lensPath__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./lensPath */ "./node_modules/ramda/es/lensPath.js");
/* harmony import */ var _lensProp__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./lensProp */ "./node_modules/ramda/es/lensProp.js");
/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./lift */ "./node_modules/ramda/es/lift.js");
/* harmony import */ var _liftN__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./liftN */ "./node_modules/ramda/es/liftN.js");
/* harmony import */ var _lt__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./lt */ "./node_modules/ramda/es/lt.js");
/* harmony import */ var _lte__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./lte */ "./node_modules/ramda/es/lte.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./map */ "./node_modules/ramda/es/map.js");
/* harmony import */ var _mapAccum__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./mapAccum */ "./node_modules/ramda/es/mapAccum.js");
/* harmony import */ var _mapAccumRight__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./mapAccumRight */ "./node_modules/ramda/es/mapAccumRight.js");
/* harmony import */ var _mapObjIndexed__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./mapObjIndexed */ "./node_modules/ramda/es/mapObjIndexed.js");
/* harmony import */ var _match__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./match */ "./node_modules/ramda/es/match.js");
/* harmony import */ var _mathMod__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./mathMod */ "./node_modules/ramda/es/mathMod.js");
/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./max */ "./node_modules/ramda/es/max.js");
/* harmony import */ var _maxBy__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./maxBy */ "./node_modules/ramda/es/maxBy.js");
/* harmony import */ var _mean__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./mean */ "./node_modules/ramda/es/mean.js");
/* harmony import */ var _median__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./median */ "./node_modules/ramda/es/median.js");
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./memoize */ "./node_modules/ramda/es/memoize.js");
/* harmony import */ var _memoizeWith__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./memoizeWith */ "./node_modules/ramda/es/memoizeWith.js");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./merge */ "./node_modules/ramda/es/merge.js");
/* harmony import */ var _mergeAll__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./mergeAll */ "./node_modules/ramda/es/mergeAll.js");
/* harmony import */ var _mergeDeepLeft__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./mergeDeepLeft */ "./node_modules/ramda/es/mergeDeepLeft.js");
/* harmony import */ var _mergeDeepRight__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./mergeDeepRight */ "./node_modules/ramda/es/mergeDeepRight.js");
/* harmony import */ var _mergeDeepWith__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./mergeDeepWith */ "./node_modules/ramda/es/mergeDeepWith.js");
/* harmony import */ var _mergeDeepWithKey__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./mergeDeepWithKey */ "./node_modules/ramda/es/mergeDeepWithKey.js");
/* harmony import */ var _mergeWith__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./mergeWith */ "./node_modules/ramda/es/mergeWith.js");
/* harmony import */ var _mergeWithKey__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./mergeWithKey */ "./node_modules/ramda/es/mergeWithKey.js");
/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./min */ "./node_modules/ramda/es/min.js");
/* harmony import */ var _minBy__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./minBy */ "./node_modules/ramda/es/minBy.js");
/* harmony import */ var _modulo__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./modulo */ "./node_modules/ramda/es/modulo.js");
/* harmony import */ var _multiply__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./multiply */ "./node_modules/ramda/es/multiply.js");
/* harmony import */ var _nAry__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./nAry */ "./node_modules/ramda/es/nAry.js");
/* harmony import */ var _negate__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./negate */ "./node_modules/ramda/es/negate.js");
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ./none */ "./node_modules/ramda/es/none.js");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ./not */ "./node_modules/ramda/es/not.js");
/* harmony import */ var _nth__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ./nth */ "./node_modules/ramda/es/nth.js");
/* harmony import */ var _nthArg__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ./nthArg */ "./node_modules/ramda/es/nthArg.js");
/* harmony import */ var _o__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ./o */ "./node_modules/ramda/es/o.js");
/* harmony import */ var _objOf__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ./objOf */ "./node_modules/ramda/es/objOf.js");
/* harmony import */ var _of__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./of */ "./node_modules/ramda/es/of.js");
/* harmony import */ var _omit__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ./omit */ "./node_modules/ramda/es/omit.js");
/* harmony import */ var _once__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ./once */ "./node_modules/ramda/es/once.js");
/* harmony import */ var _or__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./or */ "./node_modules/ramda/es/or.js");
/* harmony import */ var _over__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ./over */ "./node_modules/ramda/es/over.js");
/* harmony import */ var _pair__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ./pair */ "./node_modules/ramda/es/pair.js");
/* harmony import */ var _partial__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ./partial */ "./node_modules/ramda/es/partial.js");
/* harmony import */ var _partialRight__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ./partialRight */ "./node_modules/ramda/es/partialRight.js");
/* harmony import */ var _partition__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ./partition */ "./node_modules/ramda/es/partition.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ./path */ "./node_modules/ramda/es/path.js");
/* harmony import */ var _pathEq__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ./pathEq */ "./node_modules/ramda/es/pathEq.js");
/* harmony import */ var _pathOr__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ./pathOr */ "./node_modules/ramda/es/pathOr.js");
/* harmony import */ var _pathSatisfies__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ./pathSatisfies */ "./node_modules/ramda/es/pathSatisfies.js");
/* harmony import */ var _pick__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! ./pick */ "./node_modules/ramda/es/pick.js");
/* harmony import */ var _pickAll__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! ./pickAll */ "./node_modules/ramda/es/pickAll.js");
/* harmony import */ var _pickBy__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! ./pickBy */ "./node_modules/ramda/es/pickBy.js");
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! ./pipe */ "./node_modules/ramda/es/pipe.js");
/* harmony import */ var _pipeK__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! ./pipeK */ "./node_modules/ramda/es/pipeK.js");
/* harmony import */ var _pipeP__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! ./pipeP */ "./node_modules/ramda/es/pipeP.js");
/* harmony import */ var _pluck__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! ./pluck */ "./node_modules/ramda/es/pluck.js");
/* harmony import */ var _prepend__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! ./prepend */ "./node_modules/ramda/es/prepend.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! ./product */ "./node_modules/ramda/es/product.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! ./project */ "./node_modules/ramda/es/project.js");
/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! ./prop */ "./node_modules/ramda/es/prop.js");
/* harmony import */ var _propEq__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! ./propEq */ "./node_modules/ramda/es/propEq.js");
/* harmony import */ var _propIs__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! ./propIs */ "./node_modules/ramda/es/propIs.js");
/* harmony import */ var _propOr__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! ./propOr */ "./node_modules/ramda/es/propOr.js");
/* harmony import */ var _propSatisfies__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! ./propSatisfies */ "./node_modules/ramda/es/propSatisfies.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! ./props */ "./node_modules/ramda/es/props.js");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! ./range */ "./node_modules/ramda/es/range.js");
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! ./reduce */ "./node_modules/ramda/es/reduce.js");
/* harmony import */ var _reduceBy__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! ./reduceBy */ "./node_modules/ramda/es/reduceBy.js");
/* harmony import */ var _reduceRight__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! ./reduceRight */ "./node_modules/ramda/es/reduceRight.js");
/* harmony import */ var _reduceWhile__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! ./reduceWhile */ "./node_modules/ramda/es/reduceWhile.js");
/* harmony import */ var _reduced__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! ./reduced */ "./node_modules/ramda/es/reduced.js");
/* harmony import */ var _reject__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! ./reject */ "./node_modules/ramda/es/reject.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! ./remove */ "./node_modules/ramda/es/remove.js");
/* harmony import */ var _repeat__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! ./repeat */ "./node_modules/ramda/es/repeat.js");
/* harmony import */ var _replace__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! ./replace */ "./node_modules/ramda/es/replace.js");
/* harmony import */ var _reverse__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! ./reverse */ "./node_modules/ramda/es/reverse.js");
/* harmony import */ var _scan__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! ./scan */ "./node_modules/ramda/es/scan.js");
/* harmony import */ var _sequence__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! ./sequence */ "./node_modules/ramda/es/sequence.js");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! ./set */ "./node_modules/ramda/es/set.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! ./slice */ "./node_modules/ramda/es/slice.js");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(/*! ./sort */ "./node_modules/ramda/es/sort.js");
/* harmony import */ var _sortBy__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(/*! ./sortBy */ "./node_modules/ramda/es/sortBy.js");
/* harmony import */ var _sortWith__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(/*! ./sortWith */ "./node_modules/ramda/es/sortWith.js");
/* harmony import */ var _split__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(/*! ./split */ "./node_modules/ramda/es/split.js");
/* harmony import */ var _splitAt__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(/*! ./splitAt */ "./node_modules/ramda/es/splitAt.js");
/* harmony import */ var _splitEvery__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(/*! ./splitEvery */ "./node_modules/ramda/es/splitEvery.js");
/* harmony import */ var _splitWhen__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(/*! ./splitWhen */ "./node_modules/ramda/es/splitWhen.js");
/* harmony import */ var _startsWith__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(/*! ./startsWith */ "./node_modules/ramda/es/startsWith.js");
/* harmony import */ var _subtract__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(/*! ./subtract */ "./node_modules/ramda/es/subtract.js");
/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(/*! ./sum */ "./node_modules/ramda/es/sum.js");
/* harmony import */ var _symmetricDifference__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(/*! ./symmetricDifference */ "./node_modules/ramda/es/symmetricDifference.js");
/* harmony import */ var _symmetricDifferenceWith__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(/*! ./symmetricDifferenceWith */ "./node_modules/ramda/es/symmetricDifferenceWith.js");
/* harmony import */ var _tail__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(/*! ./tail */ "./node_modules/ramda/es/tail.js");
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(/*! ./take */ "./node_modules/ramda/es/take.js");
/* harmony import */ var _takeLast__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(/*! ./takeLast */ "./node_modules/ramda/es/takeLast.js");
/* harmony import */ var _takeLastWhile__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(/*! ./takeLastWhile */ "./node_modules/ramda/es/takeLastWhile.js");
/* harmony import */ var _takeWhile__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(/*! ./takeWhile */ "./node_modules/ramda/es/takeWhile.js");
/* harmony import */ var _tap__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(/*! ./tap */ "./node_modules/ramda/es/tap.js");
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(/*! ./test */ "./node_modules/ramda/es/test.js");
/* harmony import */ var _times__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(/*! ./times */ "./node_modules/ramda/es/times.js");
/* harmony import */ var _toLower__WEBPACK_IMPORTED_MODULE_210__ = __webpack_require__(/*! ./toLower */ "./node_modules/ramda/es/toLower.js");
/* harmony import */ var _toPairs__WEBPACK_IMPORTED_MODULE_211__ = __webpack_require__(/*! ./toPairs */ "./node_modules/ramda/es/toPairs.js");
/* harmony import */ var _toPairsIn__WEBPACK_IMPORTED_MODULE_212__ = __webpack_require__(/*! ./toPairsIn */ "./node_modules/ramda/es/toPairsIn.js");
/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_213__ = __webpack_require__(/*! ./toString */ "./node_modules/ramda/es/toString.js");
/* harmony import */ var _toUpper__WEBPACK_IMPORTED_MODULE_214__ = __webpack_require__(/*! ./toUpper */ "./node_modules/ramda/es/toUpper.js");
/* harmony import */ var _transduce__WEBPACK_IMPORTED_MODULE_215__ = __webpack_require__(/*! ./transduce */ "./node_modules/ramda/es/transduce.js");
/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_216__ = __webpack_require__(/*! ./transpose */ "./node_modules/ramda/es/transpose.js");
/* harmony import */ var _traverse__WEBPACK_IMPORTED_MODULE_217__ = __webpack_require__(/*! ./traverse */ "./node_modules/ramda/es/traverse.js");
/* harmony import */ var _trim__WEBPACK_IMPORTED_MODULE_218__ = __webpack_require__(/*! ./trim */ "./node_modules/ramda/es/trim.js");
/* harmony import */ var _tryCatch__WEBPACK_IMPORTED_MODULE_219__ = __webpack_require__(/*! ./tryCatch */ "./node_modules/ramda/es/tryCatch.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_220__ = __webpack_require__(/*! ./type */ "./node_modules/ramda/es/type.js");
/* harmony import */ var _unapply__WEBPACK_IMPORTED_MODULE_221__ = __webpack_require__(/*! ./unapply */ "./node_modules/ramda/es/unapply.js");
/* harmony import */ var _unary__WEBPACK_IMPORTED_MODULE_222__ = __webpack_require__(/*! ./unary */ "./node_modules/ramda/es/unary.js");
/* harmony import */ var _uncurryN__WEBPACK_IMPORTED_MODULE_223__ = __webpack_require__(/*! ./uncurryN */ "./node_modules/ramda/es/uncurryN.js");
/* harmony import */ var _unfold__WEBPACK_IMPORTED_MODULE_224__ = __webpack_require__(/*! ./unfold */ "./node_modules/ramda/es/unfold.js");
/* harmony import */ var _union__WEBPACK_IMPORTED_MODULE_225__ = __webpack_require__(/*! ./union */ "./node_modules/ramda/es/union.js");
/* harmony import */ var _unionWith__WEBPACK_IMPORTED_MODULE_226__ = __webpack_require__(/*! ./unionWith */ "./node_modules/ramda/es/unionWith.js");
/* harmony import */ var _uniq__WEBPACK_IMPORTED_MODULE_227__ = __webpack_require__(/*! ./uniq */ "./node_modules/ramda/es/uniq.js");
/* harmony import */ var _uniqBy__WEBPACK_IMPORTED_MODULE_228__ = __webpack_require__(/*! ./uniqBy */ "./node_modules/ramda/es/uniqBy.js");
/* harmony import */ var _uniqWith__WEBPACK_IMPORTED_MODULE_229__ = __webpack_require__(/*! ./uniqWith */ "./node_modules/ramda/es/uniqWith.js");
/* harmony import */ var _unless__WEBPACK_IMPORTED_MODULE_230__ = __webpack_require__(/*! ./unless */ "./node_modules/ramda/es/unless.js");
/* harmony import */ var _unnest__WEBPACK_IMPORTED_MODULE_231__ = __webpack_require__(/*! ./unnest */ "./node_modules/ramda/es/unnest.js");
/* harmony import */ var _until__WEBPACK_IMPORTED_MODULE_232__ = __webpack_require__(/*! ./until */ "./node_modules/ramda/es/until.js");
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_233__ = __webpack_require__(/*! ./update */ "./node_modules/ramda/es/update.js");
/* harmony import */ var _useWith__WEBPACK_IMPORTED_MODULE_234__ = __webpack_require__(/*! ./useWith */ "./node_modules/ramda/es/useWith.js");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_235__ = __webpack_require__(/*! ./values */ "./node_modules/ramda/es/values.js");
/* harmony import */ var _valuesIn__WEBPACK_IMPORTED_MODULE_236__ = __webpack_require__(/*! ./valuesIn */ "./node_modules/ramda/es/valuesIn.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_237__ = __webpack_require__(/*! ./view */ "./node_modules/ramda/es/view.js");
/* harmony import */ var _when__WEBPACK_IMPORTED_MODULE_238__ = __webpack_require__(/*! ./when */ "./node_modules/ramda/es/when.js");
/* harmony import */ var _where__WEBPACK_IMPORTED_MODULE_239__ = __webpack_require__(/*! ./where */ "./node_modules/ramda/es/where.js");
/* harmony import */ var _whereEq__WEBPACK_IMPORTED_MODULE_240__ = __webpack_require__(/*! ./whereEq */ "./node_modules/ramda/es/whereEq.js");
/* harmony import */ var _without__WEBPACK_IMPORTED_MODULE_241__ = __webpack_require__(/*! ./without */ "./node_modules/ramda/es/without.js");
/* harmony import */ var _xprod__WEBPACK_IMPORTED_MODULE_242__ = __webpack_require__(/*! ./xprod */ "./node_modules/ramda/es/xprod.js");
/* harmony import */ var _zip__WEBPACK_IMPORTED_MODULE_243__ = __webpack_require__(/*! ./zip */ "./node_modules/ramda/es/zip.js");
/* harmony import */ var _zipObj__WEBPACK_IMPORTED_MODULE_244__ = __webpack_require__(/*! ./zipObj */ "./node_modules/ramda/es/zipObj.js");
/* harmony import */ var _zipWith__WEBPACK_IMPORTED_MODULE_245__ = __webpack_require__(/*! ./zipWith */ "./node_modules/ramda/es/zipWith.js");























































































































































































































































/***/ }),

/***/ "./node_modules/ramda/es/indexBy.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/indexBy.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reduceBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reduceBy */ "./node_modules/ramda/es/reduceBy.js");


/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
 * @param {Function} fn Function :: a -> String
 * @param {Array} array The array of objects to index
 * @return {Object} An object indexing each array element by the given property.
 * @example
 *
 *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      R.indexBy(R.prop('id'), list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */
var indexBy = /*#__PURE__*/Object(_reduceBy__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (acc, elem) {
  return elem;
}, null);
/* unused harmony default export */ var _unused_webpack_default_export = (indexBy);

/***/ }),

/***/ "./node_modules/ramda/es/indexOf.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/indexOf.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_indexOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_indexOf */ "./node_modules/ramda/es/internal/_indexOf.js");
/* harmony import */ var _internal_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_isArray */ "./node_modules/ramda/es/internal/_isArray.js");




/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.lastIndexOf
 * @example
 *
 *      R.indexOf(3, [1,2,3,4]); //=> 2
 *      R.indexOf(10, [1,2,3,4]); //=> -1
 */
var indexOf = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function indexOf(target, xs) {
  return typeof xs.indexOf === 'function' && !Object(_internal_isArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(xs) ? xs.indexOf(target) : Object(_internal_indexOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(xs, target, 0);
});
/* unused harmony default export */ var _unused_webpack_default_export = (indexOf);

/***/ }),

/***/ "./node_modules/ramda/es/init.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/init.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slice */ "./node_modules/ramda/es/slice.js");


/**
 * Returns all but the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.last, R.head, R.tail
 * @example
 *
 *      R.init([1, 2, 3]);  //=> [1, 2]
 *      R.init([1, 2]);     //=> [1]
 *      R.init([1]);        //=> []
 *      R.init([]);         //=> []
 *
 *      R.init('abc');  //=> 'ab'
 *      R.init('ab');   //=> 'a'
 *      R.init('a');    //=> ''
 *      R.init('');     //=> ''
 */
var init = /*#__PURE__*/Object(_slice__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(0, -1);
/* unused harmony default export */ var _unused_webpack_default_export = (init);

/***/ }),

/***/ "./node_modules/ramda/es/innerJoin.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/innerJoin.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_containsWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_containsWith */ "./node_modules/ramda/es/internal/_containsWith.js");
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _internal_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_filter */ "./node_modules/ramda/es/internal/_filter.js");




/**
 * Takes a predicate `pred`, a list `xs`, and a list `ys`, and returns a list
 * `xs'` comprising each of the elements of `xs` which is equal to one or more
 * elements of `ys` according to `pred`.
 *
 * `pred` must be a binary function expecting an element from each list.
 *
 * `xs`, `ys`, and `xs'` are treated as sets, semantically, so ordering should
 * not be significant, but since `xs'` is ordered the implementation guarantees
 * that its values are in the same order as they appear in `xs`. Duplicates are
 * not removed, so `xs'` may contain duplicates if `xs` contains duplicates.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Relation
 * @sig ((a, b) -> Boolean) -> [a] -> [b] -> [a]
 * @param {Function} pred
 * @param {Array} xs
 * @param {Array} ys
 * @return {Array}
 * @see R.intersection
 * @example
 *
 *      R.innerJoin(
 *        (record, id) => record.id === id,
 *        [{id: 824, name: 'Richie Furay'},
 *         {id: 956, name: 'Dewey Martin'},
 *         {id: 313, name: 'Bruce Palmer'},
 *         {id: 456, name: 'Stephen Stills'},
 *         {id: 177, name: 'Neil Young'}],
 *        [177, 456, 999]
 *      );
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
var innerJoin = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function innerJoin(pred, xs, ys) {
  return Object(_internal_filter__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function (x) {
    return Object(_internal_containsWith__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(pred, x, ys);
  }, xs);
});
/* unused harmony default export */ var _unused_webpack_default_export = (innerJoin);

/***/ }),

/***/ "./node_modules/ramda/es/insert.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/insert.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


/**
 * Inserts the supplied element into the list, at the specified `index`. _Note that

 * this is not destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} index The position to insert the element
 * @param {*} elt The element to insert into the Array
 * @param {Array} list The list to insert into
 * @return {Array} A new Array with `elt` inserted at `index`.
 * @example
 *
 *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
 */
var insert = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function insert(idx, elt, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  var result = Array.prototype.slice.call(list, 0);
  result.splice(idx, 0, elt);
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (insert);

/***/ }),

/***/ "./node_modules/ramda/es/insertAll.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/insertAll.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


/**
 * Inserts the sub-list into the list, at the specified `index`. _Note that this is not
 * destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig Number -> [a] -> [a] -> [a]
 * @param {Number} index The position to insert the sub-list
 * @param {Array} elts The sub-list to insert into the Array
 * @param {Array} list The list to insert the sub-list into
 * @return {Array} A new Array with `elts` inserted starting at `index`.
 * @example
 *
 *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
 */
var insertAll = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function insertAll(idx, elts, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
});
/* unused harmony default export */ var _unused_webpack_default_export = (insertAll);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_Set.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/internal/_Set.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_contains */ "./node_modules/ramda/es/internal/_contains.js");


var _Set = /*#__PURE__*/function () {
  function _Set() {
    /* globals Set */
    this._nativeSet = typeof Set === 'function' ? new Set() : null;
    this._items = {};
  }

  // until we figure out why jsdoc chokes on this
  // @param item The item to add to the Set
  // @returns {boolean} true if the item did not exist prior, otherwise false
  //
  _Set.prototype.add = function (item) {
    return !hasOrAdd(item, true, this);
  };

  //
  // @param item The item to check for existence in the Set
  // @returns {boolean} true if the item exists in the Set, otherwise false
  //
  _Set.prototype.has = function (item) {
    return hasOrAdd(item, false, this);
  };

  //
  // Combines the logic for checking whether an item is a member of the set and
  // for adding a new item to the set.
  //
  // @param item       The item to check or add to the Set instance.
  // @param shouldAdd  If true, the item will be added to the set if it doesn't
  //                   already exist.
  // @param set        The set instance to check or add to.
  // @return {boolean} true if the item already existed, otherwise false.
  //
  return _Set;
}();

function hasOrAdd(item, shouldAdd, set) {
  var type = typeof item;
  var prevSize, newSize;
  switch (type) {
    case 'string':
    case 'number':
      // distinguish between +0 and -0
      if (item === 0 && 1 / item === -Infinity) {
        if (set._items['-0']) {
          return true;
        } else {
          if (shouldAdd) {
            set._items['-0'] = true;
          }
          return false;
        }
      }
      // these types can all utilise the native Set
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = {};
            set._items[type][item] = true;
          }
          return false;
        } else if (item in set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][item] = true;
          }
          return false;
        }
      }

    case 'boolean':
      // set._items['boolean'] holds a two element array
      // representing [ falseExists, trueExists ]
      if (type in set._items) {
        var bIdx = item ? 1 : 0;
        if (set._items[type][bIdx]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][bIdx] = true;
          }
          return false;
        }
      } else {
        if (shouldAdd) {
          set._items[type] = item ? [false, true] : [true, false];
        }
        return false;
      }

    case 'function':
      // compare functions for reference equality
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }
          return false;
        }
        if (!Object(_contains__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }
          return false;
        }
        return true;
      }

    case 'undefined':
      if (set._items[type]) {
        return true;
      } else {
        if (shouldAdd) {
          set._items[type] = true;
        }
        return false;
      }

    case 'object':
      if (item === null) {
        if (!set._items['null']) {
          if (shouldAdd) {
            set._items['null'] = true;
          }
          return false;
        }
        return true;
      }
    /* falls through */
    default:
      // reduce the search size of heterogeneous sets by creating buckets
      // for each type.
      type = Object.prototype.toString.call(item);
      if (!(type in set._items)) {
        if (shouldAdd) {
          set._items[type] = [item];
        }
        return false;
      }
      // scan through all previously applied items
      if (!Object(_contains__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(item, set._items[type])) {
        if (shouldAdd) {
          set._items[type].push(item);
        }
        return false;
      }
      return true;
  }
}

// A simple Set type that honours R.equals semantics
/* harmony default export */ __webpack_exports__["a"] = (_Set);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_aperture.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_aperture.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _aperture; });
function _aperture(n, list) {
  var idx = 0;
  var limit = list.length - (n - 1);
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
    idx += 1;
  }
  return acc;
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_arity.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/es/internal/_arity.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arity; });
function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };
    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_arrayFromIterator.js":
/*!**************************************************************!*\
  !*** ./node_modules/ramda/es/internal/_arrayFromIterator.js ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayFromIterator; });
function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_assign.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_assign.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _objectAssign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_objectAssign */ "./node_modules/ramda/es/internal/_objectAssign.js");


/* harmony default export */ __webpack_exports__["a"] = (typeof Object.assign === 'function' ? Object.assign : _objectAssign__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_checkForMethod.js":
/*!***********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_checkForMethod.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _checkForMethod; });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArray */ "./node_modules/ramda/es/internal/_isArray.js");


/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */
function _checkForMethod(methodname, fn) {
  return function () {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return Object(_isArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_clone.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/es/internal/_clone.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _clone; });
/* harmony import */ var _cloneRegExp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/ramda/es/internal/_cloneRegExp.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type */ "./node_modules/ramda/es/type.js");



/**
 * Copies an object.
 *
 * @private
 * @param {*} value The value to be copied
 * @param {Array} refFrom Array containing the source references
 * @param {Array} refTo Array containing the copied source references
 * @param {Boolean} deep Whether or not to perform deep cloning.
 * @return {*} The copied value.
 */
function _clone(value, refFrom, refTo, deep) {
  var copy = function copy(copiedValue) {
    var len = refFrom.length;
    var idx = 0;
    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }
      idx += 1;
    }
    refFrom[idx + 1] = value;
    refTo[idx + 1] = copiedValue;
    for (var key in value) {
      copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
    }
    return copiedValue;
  };
  switch (Object(_type__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value)) {
    case 'Object':
      return copy({});
    case 'Array':
      return copy([]);
    case 'Date':
      return new Date(value.valueOf());
    case 'RegExp':
      return Object(_cloneRegExp__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value);
    default:
      return value;
  }
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_cloneRegExp.js":
/*!********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_cloneRegExp.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _cloneRegExp; });
function _cloneRegExp(pattern) {
                                  return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_complement.js":
/*!*******************************************************!*\
  !*** ./node_modules/ramda/es/internal/_complement.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _complement; });
function _complement(f) {
  return function () {
    return !f.apply(this, arguments);
  };
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_concat.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_concat.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _concat; });
/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];

  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }
  return result;
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_contains.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_contains.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _contains; });
/* harmony import */ var _indexOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_indexOf */ "./node_modules/ramda/es/internal/_indexOf.js");


function _contains(a, list) {
  return Object(_indexOf__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(list, a, 0) >= 0;
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_containsWith.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_containsWith.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _containsWith; });
function _containsWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_createPartialApplicator.js":
/*!********************************************************************!*\
  !*** ./node_modules/ramda/es/internal/_createPartialApplicator.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createPartialApplicator; });
/* harmony import */ var _arity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arity */ "./node_modules/ramda/es/internal/_arity.js");
/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");



function _createPartialApplicator(concat) {
  return Object(_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (fn, args) {
    return Object(_arity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Math.max(0, fn.length - args.length), function () {
      return fn.apply(this, concat(args, arguments));
    });
  });
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_curry1.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_curry1.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _curry1; });
/* harmony import */ var _isPlaceholder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPlaceholder */ "./node_modules/ramda/es/internal/_isPlaceholder.js");


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_curry2.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_curry2.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _curry2; });
/* harmony import */ var _curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _isPlaceholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isPlaceholder */ "./node_modules/ramda/es/internal/_isPlaceholder.js");



/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(a) ? f2 : Object(_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (_b) {
          return fn(a, _b);
        });
      default:
        return Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(a) && Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(b) ? f2 : Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(a) ? Object(_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (_a) {
          return fn(_a, b);
        }) : Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(b) ? Object(_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_curry3.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_curry3.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _curry3; });
/* harmony import */ var _curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _isPlaceholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isPlaceholder */ "./node_modules/ramda/es/internal/_isPlaceholder.js");




/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a) ? f3 : Object(_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a) && Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(b) ? f3 : Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a) ? Object(_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (_a, _c) {
          return fn(_a, b, _c);
        }) : Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(b) ? Object(_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (_b, _c) {
          return fn(a, _b, _c);
        }) : Object(_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (_c) {
          return fn(a, b, _c);
        });
      default:
        return Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a) && Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(b) && Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(c) ? f3 : Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a) && Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(b) ? Object(_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (_a, _b) {
          return fn(_a, _b, c);
        }) : Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a) && Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(c) ? Object(_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (_a, _c) {
          return fn(_a, b, _c);
        }) : Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(b) && Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(c) ? Object(_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (_b, _c) {
          return fn(a, _b, _c);
        }) : Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a) ? Object(_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (_a) {
          return fn(_a, b, c);
        }) : Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(b) ? Object(_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (_b) {
          return fn(a, _b, c);
        }) : Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(c) ? Object(_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_curryN.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_curryN.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _curryN; });
/* harmony import */ var _arity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arity */ "./node_modules/ramda/es/internal/_arity.js");
/* harmony import */ var _isPlaceholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isPlaceholder */ "./node_modules/ramda/es/internal/_isPlaceholder.js");



/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length && (!Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined) : Object(_arity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(left, _curryN(length, combined, fn));
  };
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_dispatchable.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_dispatchable.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _dispatchable; });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArray */ "./node_modules/ramda/es/internal/_isArray.js");
/* harmony import */ var _isTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isTransformer */ "./node_modules/ramda/es/internal/_isTransformer.js");



/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
function _dispatchable(methodNames, xf, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!Object(_isArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (Object(_isTransformer__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_dropLast.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_dropLast.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dropLast; });
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../take */ "./node_modules/ramda/es/take.js");


function dropLast(n, xs) {
  return Object(_take__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(n < xs.length ? xs.length - n : 0, xs);
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_dropLastWhile.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_dropLastWhile.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dropLastWhile; });
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../slice */ "./node_modules/ramda/es/slice.js");


function dropLastWhile(pred, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && pred(xs[idx])) {
    idx -= 1;
  }
  return Object(_slice__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(0, idx + 1, xs);
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_equals.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_equals.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _equals; });
/* harmony import */ var _arrayFromIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayFromIterator */ "./node_modules/ramda/es/internal/_arrayFromIterator.js");
/* harmony import */ var _containsWith__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_containsWith */ "./node_modules/ramda/es/internal/_containsWith.js");
/* harmony import */ var _functionName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functionName */ "./node_modules/ramda/es/internal/_functionName.js");
/* harmony import */ var _has__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_has */ "./node_modules/ramda/es/internal/_has.js");
/* harmony import */ var _identical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../identical */ "./node_modules/ramda/es/identical.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../keys */ "./node_modules/ramda/es/keys.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type */ "./node_modules/ramda/es/type.js");








/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparision of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */

function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = Object(_arrayFromIterator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(aIterator);
  var b = Object(_arrayFromIterator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(bIterator);

  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }

  // if *a* array contains any element that is not included in *b*
  return !Object(_containsWith__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (b, aItem) {
    return !Object(_containsWith__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(eq, aItem, b);
  }, b, a);
}

function _equals(a, b, stackA, stackB) {
  if (Object(_identical__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(a, b)) {
    return true;
  }

  var typeA = Object(_type__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(a);

  if (typeA !== Object(_type__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }

  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && Object(_functionName__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && Object(_identical__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!Object(_identical__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }

  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }

  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case 'Set':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = Object(_keys__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(a);
  if (keysA.length !== Object(_keys__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(b).length) {
    return false;
  }

  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);

  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(Object(_has__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_filter.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_filter.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _filter; });
function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_flatCat.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_flatCat.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _forceReduced__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_forceReduced */ "./node_modules/ramda/es/internal/_forceReduced.js");
/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike */ "./node_modules/ramda/es/internal/_isArrayLike.js");
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_reduce */ "./node_modules/ramda/es/internal/_reduce.js");
/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/es/internal/_xfBase.js");





var preservingReduced = function (xf) {
  return {
    '@@transducer/init': _xfBase__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].init,
    '@@transducer/result': function (result) {
      return xf['@@transducer/result'](result);
    },
    '@@transducer/step': function (result, input) {
      var ret = xf['@@transducer/step'](result, input);
      return ret['@@transducer/reduced'] ? Object(_forceReduced__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(ret) : ret;
    }
  };
};

var _flatCat = function _xcat(xf) {
  var rxf = preservingReduced(xf);
  return {
    '@@transducer/init': _xfBase__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].init,
    '@@transducer/result': function (result) {
      return rxf['@@transducer/result'](result);
    },
    '@@transducer/step': function (result, input) {
      return !Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(input) ? Object(_reduce__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(rxf, result, [input]) : Object(_reduce__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(rxf, result, input);
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (_flatCat);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_forceReduced.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_forceReduced.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _forceReduced; });
function _forceReduced(x) {
  return {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_functionName.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_functionName.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _functionName; });
function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_has.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/internal/_has.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _has; });
function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_identity.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_identity.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _identity; });
function _identity(x) {
  return x;
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_indexOf.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_indexOf.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _indexOf; });
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../equals */ "./node_modules/ramda/es/equals.js");


function _indexOf(list, a, idx) {
  var inf, item;
  // Array.prototype.indexOf doesn't exist below IE9
  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === 'number' && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        // non-zero numbers can utilise Set
        return list.indexOf(a, idx);

      // all these types can utilise Set
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }
    }
  }
  // anything else not covered above, defer to R.equals
  while (idx < list.length) {
    if (Object(_equals__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isArguments.js":
/*!********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isArguments.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _has__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_has */ "./node_modules/ramda/es/internal/_has.js");


var toString = Object.prototype.toString;
var _isArguments = function () {
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return Object(_has__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('callee', x);
  };
};

/* harmony default export */ __webpack_exports__["a"] = (_isArguments);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isArray.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
/* harmony default export */ __webpack_exports__["a"] = (Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
});

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isArrayLike.js":
/*!********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isArrayLike.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArray */ "./node_modules/ramda/es/internal/_isArray.js");
/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isString */ "./node_modules/ramda/es/internal/_isString.js");




/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
var _isArrayLike = /*#__PURE__*/Object(_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function isArrayLike(x) {
  if (Object(_isArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if (typeof x !== 'object') {
    return false;
  }
  if (Object(_isString__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(x)) {
    return false;
  }
  if (x.nodeType === 1) {
    return !!x.length;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});
/* harmony default export */ __webpack_exports__["a"] = (_isArrayLike);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isFunction.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isFunction; });
function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isInteger.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isInteger.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
/* harmony default export */ __webpack_exports__["a"] = (Number.isInteger || function _isInteger(n) {
  return n << 0 === n;
});

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isNumber.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isNumber.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNumber; });
function _isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isObject.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isObject; });
function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isPlaceholder.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isPlaceholder.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isPlaceholder; });
function _isPlaceholder(a) {
       return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isRegExp.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isRegExp.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isRegExp; });
function _isRegExp(x) {
  return Object.prototype.toString.call(x) === '[object RegExp]';
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isString.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isString.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isString; });
function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isTransformer.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isTransformer.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isTransformer; });
function _isTransformer(obj) {
  return typeof obj['@@transducer/step'] === 'function';
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_makeFlat.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_makeFlat.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _makeFlat; });
/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike */ "./node_modules/ramda/es/internal/_isArrayLike.js");


/**
 * `_makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @private
 */
function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;

    while (idx < ilen) {
      if (Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  };
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_map.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/internal/_map.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _map; });
function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_objectAssign.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_objectAssign.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectAssign; });
/* harmony import */ var _has__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_has */ "./node_modules/ramda/es/internal/_has.js");


// Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
function _objectAssign(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  var idx = 1;
  var length = arguments.length;
  while (idx < length) {
    var source = arguments[idx];
    if (source != null) {
      for (var nextKey in source) {
        if (Object(_has__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
    idx += 1;
  }
  return output;
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_of.js":
/*!***********************************************!*\
  !*** ./node_modules/ramda/es/internal/_of.js ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _of; });
function _of(x) {
  return [x];
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/es/internal/_pipe.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _pipe; });
function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments));
  };
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_pipeP.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/es/internal/_pipeP.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _pipeP; });
function _pipeP(f, g) {
  return function () {
    var ctx = this;
    return f.apply(ctx, arguments).then(function (x) {
      return g.call(ctx, x);
    });
  };
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_quote.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/es/internal/_quote.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _quote; });
function _quote(s) {
  var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
  .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');

  return '"' + escaped.replace(/"/g, '\\"') + '"';
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_reduce.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_reduce.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reduce; });
/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike */ "./node_modules/ramda/es/internal/_isArrayLike.js");
/* harmony import */ var _xwrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_xwrap */ "./node_modules/ramda/es/internal/_xwrap.js");
/* harmony import */ var _bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bind */ "./node_modules/ramda/es/bind.js");




function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx]);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    idx += 1;
  }
  return xf['@@transducer/result'](acc);
}

function _iterableReduce(xf, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    step = iter.next();
  }
  return xf['@@transducer/result'](acc);
}

function _methodReduce(xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName](Object(_bind__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(xf['@@transducer/step'], xf), acc));
}

var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';

function _reduce(fn, acc, list) {
  if (typeof fn === 'function') {
    fn = Object(_xwrap__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(fn);
  }
  if (Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(list)) {
    return _arrayReduce(fn, acc, list);
  }
  if (typeof list['fantasy-land/reduce'] === 'function') {
    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
  }
  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]());
  }
  if (typeof list.next === 'function') {
    return _iterableReduce(fn, acc, list);
  }
  if (typeof list.reduce === 'function') {
    return _methodReduce(fn, acc, list, 'reduce');
  }

  throw new TypeError('reduce: list must be array or iterable');
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_reduced.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_reduced.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reduced; });
function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x : {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_stepCat.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_stepCat.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _stepCat; });
/* harmony import */ var _assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assign */ "./node_modules/ramda/es/internal/_assign.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_identity */ "./node_modules/ramda/es/internal/_identity.js");
/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isArrayLike */ "./node_modules/ramda/es/internal/_isArrayLike.js");
/* harmony import */ var _isTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isTransformer */ "./node_modules/ramda/es/internal/_isTransformer.js");
/* harmony import */ var _objOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../objOf */ "./node_modules/ramda/es/objOf.js");






var _stepCatArray = {
  '@@transducer/init': Array,
  '@@transducer/step': function (xs, x) {
    xs.push(x);
    return xs;
  },
  '@@transducer/result': _identity__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
};
var _stepCatString = {
  '@@transducer/init': String,
  '@@transducer/step': function (a, b) {
    return a + b;
  },
  '@@transducer/result': _identity__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
};
var _stepCatObject = {
  '@@transducer/init': Object,
  '@@transducer/step': function (result, input) {
    return Object(_assign__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(result, Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(input) ? Object(_objOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(input[0], input[1]) : input);
  },
  '@@transducer/result': _identity__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
};

function _stepCat(obj) {
  if (Object(_isTransformer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(obj)) {
    return obj;
  }
  if (Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj)) {
    return _stepCatArray;
  }
  if (typeof obj === 'string') {
    return _stepCatString;
  }
  if (typeof obj === 'object') {
    return _stepCatObject;
  }
  throw new Error('Cannot create transformer for ' + obj);
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_toISOString.js":
/*!********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_toISOString.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
var pad = function pad(n) {
  return (n < 10 ? '0' : '') + n;
};

var _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
  return d.toISOString();
} : function _toISOString(d) {
  return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
};

/* harmony default export */ __webpack_exports__["a"] = (_toISOString);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_toString.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_toString.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toString; });
/* harmony import */ var _contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_contains */ "./node_modules/ramda/es/internal/_contains.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_map */ "./node_modules/ramda/es/internal/_map.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_quote */ "./node_modules/ramda/es/internal/_quote.js");
/* harmony import */ var _toISOString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toISOString */ "./node_modules/ramda/es/internal/_toISOString.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../keys */ "./node_modules/ramda/es/keys.js");
/* harmony import */ var _reject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reject */ "./node_modules/ramda/es/reject.js");







function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return Object(_contains__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(y, xs) ? '<Circular>' : _toString(y, xs);
  };

  //  mapPairs :: (Object, [String]) -> [String]
  var mapPairs = function (obj, keys) {
    return Object(_map__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (k) {
      return Object(_quote__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(k) + ': ' + recur(obj[k]);
    }, keys.slice().sort());
  };

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + Object(_map__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(recur, x).join(', ') + '))';
    case '[object Array]':
      return '[' + Object(_map__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(recur, x).concat(mapPairs(x, Object(_reject__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(function (k) {
        return (/^\d+$/.test(k)
        );
      }, Object(_keys__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(x)))).join(', ') + ']';
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : Object(_quote__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_toISOString__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(x))) + ')';
    case '[object Null]':
      return 'null';
    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : Object(_quote__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(x);
    case '[object Undefined]':
      return 'undefined';
    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();
        if (repr !== '[object Object]') {
          return repr;
        }
      }
      return '{' + mapPairs(x, Object(_keys__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(x)).join(', ') + '}';
  }
}

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xall.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xall.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _reduced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_reduced */ "./node_modules/ramda/es/internal/_reduced.js");
/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/es/internal/_xfBase.js");




var XAll = /*#__PURE__*/function () {
  function XAll(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }
  XAll.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].init;
  XAll.prototype['@@transducer/result'] = function (result) {
    if (this.all) {
      result = this.xf['@@transducer/step'](result, true);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAll.prototype['@@transducer/step'] = function (result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = Object(_reduced__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this.xf['@@transducer/step'](result, false));
    }
    return result;
  };

  return XAll;
}();

var _xall = /*#__PURE__*/Object(_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function _xall(f, xf) {
  return new XAll(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xall);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xany.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xany.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _reduced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_reduced */ "./node_modules/ramda/es/internal/_reduced.js");
/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/es/internal/_xfBase.js");




var XAny = /*#__PURE__*/function () {
  function XAny(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }
  XAny.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].init;
  XAny.prototype['@@transducer/result'] = function (result) {
    if (!this.any) {
      result = this.xf['@@transducer/step'](result, false);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAny.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.any = true;
      result = Object(_reduced__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this.xf['@@transducer/step'](result, true));
    }
    return result;
  };

  return XAny;
}();

var _xany = /*#__PURE__*/Object(_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function _xany(f, xf) {
  return new XAny(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xany);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xaperture.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xaperture.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_concat */ "./node_modules/ramda/es/internal/_concat.js");
/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/es/internal/_xfBase.js");




var XAperture = /*#__PURE__*/function () {
  function XAperture(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XAperture.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].init;
  XAperture.prototype['@@transducer/result'] = function (result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XAperture.prototype['@@transducer/step'] = function (result, input) {
    this.store(input);
    return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
  };
  XAperture.prototype.store = function (input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  XAperture.prototype.getCopy = function () {
    return Object(_concat__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
  };

  return XAperture;
}();

var _xaperture = /*#__PURE__*/Object(_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function _xaperture(n, xf) {
  return new XAperture(n, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xaperture);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xchain.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xchain.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _flatCat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_flatCat */ "./node_modules/ramda/es/internal/_flatCat.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map */ "./node_modules/ramda/es/map.js");




var _xchain = /*#__PURE__*/Object(_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function _xchain(f, xf) {
  return Object(_map__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(f, Object(_flatCat__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(xf));
});
/* harmony default export */ __webpack_exports__["a"] = (_xchain);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xdrop.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xdrop.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/es/internal/_xfBase.js");



var XDrop = /*#__PURE__*/function () {
  function XDrop(n, xf) {
    this.xf = xf;
    this.n = n;
  }
  XDrop.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].init;
  XDrop.prototype['@@transducer/result'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].result;
  XDrop.prototype['@@transducer/step'] = function (result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return XDrop;
}();

var _xdrop = /*#__PURE__*/Object(_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function _xdrop(n, xf) {
  return new XDrop(n, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdrop);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xdropLast.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xdropLast.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/es/internal/_xfBase.js");



var XDropLast = /*#__PURE__*/function () {
  function XDropLast(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XDropLast.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].init;
  XDropLast.prototype['@@transducer/result'] = function (result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLast.prototype['@@transducer/step'] = function (result, input) {
    if (this.full) {
      result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
    }
    this.store(input);
    return result;
  };
  XDropLast.prototype.store = function (input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };

  return XDropLast;
}();

var _xdropLast = /*#__PURE__*/Object(_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function _xdropLast(n, xf) {
  return new XDropLast(n, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdropLast);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xdropLastWhile.js":
/*!***********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xdropLastWhile.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_reduce */ "./node_modules/ramda/es/internal/_reduce.js");
/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/es/internal/_xfBase.js");




var XDropLastWhile = /*#__PURE__*/function () {
  function XDropLastWhile(fn, xf) {
    this.f = fn;
    this.retained = [];
    this.xf = xf;
  }
  XDropLastWhile.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].init;
  XDropLastWhile.prototype['@@transducer/result'] = function (result) {
    this.retained = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLastWhile.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.retain(result, input) : this.flush(result, input);
  };
  XDropLastWhile.prototype.flush = function (result, input) {
    result = Object(_reduce__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this.xf['@@transducer/step'], result, this.retained);
    this.retained = [];
    return this.xf['@@transducer/step'](result, input);
  };
  XDropLastWhile.prototype.retain = function (result, input) {
    this.retained.push(input);
    return result;
  };

  return XDropLastWhile;
}();

var _xdropLastWhile = /*#__PURE__*/Object(_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function _xdropLastWhile(fn, xf) {
  return new XDropLastWhile(fn, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdropLastWhile);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xdropRepeatsWith.js":
/*!*************************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xdropRepeatsWith.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/es/internal/_xfBase.js");



var XDropRepeatsWith = /*#__PURE__*/function () {
  function XDropRepeatsWith(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = undefined;
    this.seenFirstValue = false;
  }

  XDropRepeatsWith.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].init;
  XDropRepeatsWith.prototype['@@transducer/result'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].result;
  XDropRepeatsWith.prototype['@@transducer/step'] = function (result, input) {
    var sameAsLast = false;
    if (!this.seenFirstValue) {
      this.seenFirstValue = true;
    } else if (this.pred(this.lastValue, input)) {
      sameAsLast = true;
    }
    this.lastValue = input;
    return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
  };

  return XDropRepeatsWith;
}();

var _xdropRepeatsWith = /*#__PURE__*/Object(_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function _xdropRepeatsWith(pred, xf) {
  return new XDropRepeatsWith(pred, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdropRepeatsWith);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xdropWhile.js":
/*!*******************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xdropWhile.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/es/internal/_xfBase.js");



var XDropWhile = /*#__PURE__*/function () {
  function XDropWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XDropWhile.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].init;
  XDropWhile.prototype['@@transducer/result'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].result;
  XDropWhile.prototype['@@transducer/step'] = function (result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }
      this.f = null;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return XDropWhile;
}();

var _xdropWhile = /*#__PURE__*/Object(_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function _xdropWhile(f, xf) {
  return new XDropWhile(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdropWhile);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xfBase.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xfBase.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result);
  }
});

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xfilter.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xfilter.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/es/internal/_xfBase.js");



var XFilter = /*#__PURE__*/function () {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].init;
  XFilter.prototype['@@transducer/result'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].result;
  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return XFilter;
}();

var _xfilter = /*#__PURE__*/Object(_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function _xfilter(f, xf) {
  return new XFilter(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfilter);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xfind.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xfind.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _reduced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_reduced */ "./node_modules/ramda/es/internal/_reduced.js");
/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/es/internal/_xfBase.js");




var XFind = /*#__PURE__*/function () {
  function XFind(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }
  XFind.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].init;
  XFind.prototype['@@transducer/result'] = function (result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, void 0);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFind.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.found = true;
      result = Object(_reduced__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this.xf['@@transducer/step'](result, input));
    }
    return result;
  };

  return XFind;
}();

var _xfind = /*#__PURE__*/Object(_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function _xfind(f, xf) {
  return new XFind(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfind);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xfindIndex.js":
/*!*******************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xfindIndex.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _reduced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_reduced */ "./node_modules/ramda/es/internal/_reduced.js");
/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/es/internal/_xfBase.js");




var XFindIndex = /*#__PURE__*/function () {
  function XFindIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.found = false;
  }
  XFindIndex.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].init;
  XFindIndex.prototype['@@transducer/result'] = function (result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, -1);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFindIndex.prototype['@@transducer/step'] = function (result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.found = true;
      result = Object(_reduced__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this.xf['@@transducer/step'](result, this.idx));
    }
    return result;
  };

  return XFindIndex;
}();

var _xfindIndex = /*#__PURE__*/Object(_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function _xfindIndex(f, xf) {
  return new XFindIndex(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfindIndex);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xfindLast.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xfindLast.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/es/internal/_xfBase.js");



var XFindLast = /*#__PURE__*/function () {
  function XFindLast(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFindLast.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].init;
  XFindLast.prototype['@@transducer/result'] = function (result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
  };
  XFindLast.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.last = input;
    }
    return result;
  };

  return XFindLast;
}();

var _xfindLast = /*#__PURE__*/Object(_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function _xfindLast(f, xf) {
  return new XFindLast(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfindLast);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xfindLastIndex.js":
/*!***********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xfindLastIndex.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/es/internal/_xfBase.js");



var XFindLastIndex = /*#__PURE__*/function () {
  function XFindLastIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }
  XFindLastIndex.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].init;
  XFindLastIndex.prototype['@@transducer/result'] = function (result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
  };
  XFindLastIndex.prototype['@@transducer/step'] = function (result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.lastIdx = this.idx;
    }
    return result;
  };

  return XFindLastIndex;
}();

var _xfindLastIndex = /*#__PURE__*/Object(_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function _xfindLastIndex(f, xf) {
  return new XFindLastIndex(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfindLastIndex);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xmap.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xmap.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/es/internal/_xfBase.js");



var XMap = /*#__PURE__*/function () {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].init;
  XMap.prototype['@@transducer/result'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].result;
  XMap.prototype['@@transducer/step'] = function (result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return XMap;
}();

var _xmap = /*#__PURE__*/Object(_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function _xmap(f, xf) {
  return new XMap(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xmap);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xreduceBy.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xreduceBy.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curryN */ "./node_modules/ramda/es/internal/_curryN.js");
/* harmony import */ var _has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_has */ "./node_modules/ramda/es/internal/_has.js");
/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/es/internal/_xfBase.js");




var XReduceBy = /*#__PURE__*/function () {
  function XReduceBy(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].init;
  XReduceBy.prototype['@@transducer/result'] = function (result) {
    var key;
    for (key in this.inputs) {
      if (Object(_has__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(key, this.inputs)) {
        result = this.xf['@@transducer/step'](result, this.inputs[key]);
        if (result['@@transducer/reduced']) {
          result = result['@@transducer/value'];
          break;
        }
      }
    }
    this.inputs = null;
    return this.xf['@@transducer/result'](result);
  };
  XReduceBy.prototype['@@transducer/step'] = function (result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };

  return XReduceBy;
}();

var _xreduceBy = /*#__PURE__*/Object(_curryN__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(4, [], function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
  return new XReduceBy(valueFn, valueAcc, keyFn, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xreduceBy);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xtake.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xtake.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _reduced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_reduced */ "./node_modules/ramda/es/internal/_reduced.js");
/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/es/internal/_xfBase.js");




var XTake = /*#__PURE__*/function () {
  function XTake(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }
  XTake.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].init;
  XTake.prototype['@@transducer/result'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].result;
  XTake.prototype['@@transducer/step'] = function (result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
    return this.n >= 0 && this.i >= this.n ? Object(_reduced__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ret) : ret;
  };

  return XTake;
}();

var _xtake = /*#__PURE__*/Object(_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function _xtake(n, xf) {
  return new XTake(n, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xtake);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xtakeWhile.js":
/*!*******************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xtakeWhile.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _reduced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_reduced */ "./node_modules/ramda/es/internal/_reduced.js");
/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/es/internal/_xfBase.js");




var XTakeWhile = /*#__PURE__*/function () {
  function XTakeWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTakeWhile.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].init;
  XTakeWhile.prototype['@@transducer/result'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].result;
  XTakeWhile.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : Object(_reduced__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(result);
  };

  return XTakeWhile;
}();

var _xtakeWhile = /*#__PURE__*/Object(_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function _xtakeWhile(f, xf) {
  return new XTakeWhile(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xtakeWhile);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xtap.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xtap.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_xfBase */ "./node_modules/ramda/es/internal/_xfBase.js");



var XTap = /*#__PURE__*/function () {
  function XTap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTap.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].init;
  XTap.prototype['@@transducer/result'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].result;
  XTap.prototype['@@transducer/step'] = function (result, input) {
    this.f(input);
    return this.xf['@@transducer/step'](result, input);
  };

  return XTap;
}();

var _xtap = /*#__PURE__*/Object(_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function _xtap(f, xf) {
  return new XTap(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xtap);

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xwrap.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xwrap.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _xwrap; });
var XWrap = /*#__PURE__*/function () {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };
  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };

  return XWrap;
}();

function _xwrap(fn) {
  return new XWrap(fn);
}

/***/ }),

/***/ "./node_modules/ramda/es/intersection.js":
/*!***********************************************!*\
  !*** ./node_modules/ramda/es/intersection.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_contains */ "./node_modules/ramda/es/internal/_contains.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_filter */ "./node_modules/ramda/es/internal/_filter.js");
/* harmony import */ var _flip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flip */ "./node_modules/ramda/es/flip.js");
/* harmony import */ var _uniq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uniq */ "./node_modules/ramda/es/uniq.js");






/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The list of elements found in both `list1` and `list2`.
 * @see R.innerJoin
 * @example
 *
 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 */
var intersection = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function intersection(list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  return Object(_uniq__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(_internal_filter__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_flip__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_internal_contains__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(lookupList), filteredList));
});
/* unused harmony default export */ var _unused_webpack_default_export = (intersection);

/***/ }),

/***/ "./node_modules/ramda/es/intersperse.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/es/intersperse.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_checkForMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_checkForMethod */ "./node_modules/ramda/es/internal/_checkForMethod.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");



/**
 * Creates a new list with the separator interposed between elements.
 *
 * Dispatches to the `intersperse` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} separator The element to add to the list.
 * @param {Array} list The list to be interposed.
 * @return {Array} The new list.
 * @example
 *
 *      R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
 */
var intersperse = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_internal_checkForMethod__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('intersperse', function intersperse(separator, list) {
  var out = [];
  var idx = 0;
  var length = list.length;
  while (idx < length) {
    if (idx === length - 1) {
      out.push(list[idx]);
    } else {
      out.push(list[idx], separator);
    }
    idx += 1;
  }
  return out;
}));
/* unused harmony default export */ var _unused_webpack_default_export = (intersperse);

/***/ }),

/***/ "./node_modules/ramda/es/into.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/into.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_clone */ "./node_modules/ramda/es/internal/_clone.js");
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _internal_isTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_isTransformer */ "./node_modules/ramda/es/internal/_isTransformer.js");
/* harmony import */ var _internal_reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_reduce */ "./node_modules/ramda/es/internal/_reduce.js");
/* harmony import */ var _internal_stepCat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/_stepCat */ "./node_modules/ramda/es/internal/_stepCat.js");






/**
 * Transforms the items of the list with the transducer and appends the
 * transformed items to the accumulator using an appropriate iterator function
 * based on the accumulator type.
 *
 * The accumulator can be an array, string, object or a transformer. Iterated
 * items will be appended to arrays and concatenated to strings. Objects will
 * be merged directly or 2-item arrays will be merged as key, value pairs.
 *
 * The accumulator can also be a transformer object that provides a 2-arity
 * reducing iterator function, step, 0-arity initial value function, init, and
 * 1-arity result extraction function result. The step function is used as the
 * iterator function in reduce. The result function is used to convert the
 * final accumulator into the return type and in most cases is R.identity. The
 * init function is used to provide the initial accumulator.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the
 * transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig a -> (b -> b) -> [c] -> a
 * @param {*} acc The initial accumulator value.
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.into([], transducer, numbers); //=> [2, 3]
 *
 *      var intoArray = R.into([]);
 *      intoArray(transducer, numbers); //=> [2, 3]
 */
var into = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function into(acc, xf, list) {
  return Object(_internal_isTransformer__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(acc) ? Object(_internal_reduce__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(xf(acc), acc['@@transducer/init'](), list) : Object(_internal_reduce__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(xf(Object(_internal_stepCat__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(acc)), Object(_internal_clone__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(acc, [], [], false), list);
});
/* unused harmony default export */ var _unused_webpack_default_export = (into);

/***/ }),

/***/ "./node_modules/ramda/es/invert.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/invert.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _internal_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/es/internal/_has.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys */ "./node_modules/ramda/es/keys.js");




/**
 * Same as [`R.invertObj`](#invertObj), however this accounts for objects with
 * duplicate values by putting the values into an array.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: [ s, ... ]}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object with keys in an array.
 * @see R.invertObj
 * @example
 *
 *      var raceResultsByFirstName = {
 *        first: 'alice',
 *        second: 'jake',
 *        third: 'alice',
 *      };
 *      R.invert(raceResultsByFirstName);
 *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
 */
var invert = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function invert(obj) {
  var props = Object(_keys__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    var val = obj[key];
    var list = Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(val, out) ? out[val] : out[val] = [];
    list[list.length] = key;
    idx += 1;
  }
  return out;
});
/* unused harmony default export */ var _unused_webpack_default_export = (invert);

/***/ }),

/***/ "./node_modules/ramda/es/invertObj.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/invertObj.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ "./node_modules/ramda/es/keys.js");



/**
 * Returns a new object with the keys of the given object as values, and the
 * values of the given object, which are coerced to strings, as keys. Note
 * that the last key found is preferred when handling the same value.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: s}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object
 * @see R.invert
 * @example
 *
 *      var raceResults = {
 *        first: 'alice',
 *        second: 'jake'
 *      };
 *      R.invertObj(raceResults);
 *      //=> { 'alice': 'first', 'jake':'second' }
 *
 *      // Alternatively:
 *      var raceResults = ['alice', 'jake'];
 *      R.invertObj(raceResults);
 *      //=> { 'alice': '0', 'jake':'1' }
 */
var invertObj = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function invertObj(obj) {
  var props = Object(_keys__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    out[obj[key]] = key;
    idx += 1;
  }
  return out;
});
/* unused harmony default export */ var _unused_webpack_default_export = (invertObj);

/***/ }),

/***/ "./node_modules/ramda/es/invoker.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/invoker.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isFunction */ "./node_modules/ramda/es/internal/_isFunction.js");
/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/es/curryN.js");
/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toString */ "./node_modules/ramda/es/toString.js");





/**
 * Turns a named method with a specified arity into a function that can be
 * called directly supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where
 * the final parameter is the target object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of the method to call.
 * @return {Function} A new curried function.
 * @see R.construct
 * @example
 *
 *      var sliceFrom = R.invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *      var sliceFrom6 = R.invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */
var invoker = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function invoker(arity, method) {
  return Object(_curryN__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arity + 1, function () {
    var target = arguments[arity];
    if (target != null && Object(_internal_isFunction__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }
    throw new TypeError(Object(_toString__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target) + ' does not have a method named "' + method + '"');
  });
});
/* harmony default export */ __webpack_exports__["a"] = (invoker);

/***/ }),

/***/ "./node_modules/ramda/es/is.js":
/*!*************************************!*\
  !*** ./node_modules/ramda/es/is.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * See if an object (`val`) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Type
 * @sig (* -> {*}) -> a -> Boolean
 * @param {Object} ctor A constructor
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R.is(Object, {}); //=> true
 *      R.is(Number, 1); //=> true
 *      R.is(Object, 1); //=> false
 *      R.is(String, 's'); //=> true
 *      R.is(String, new String('')); //=> true
 *      R.is(Object, new String('')); //=> true
 *      R.is(Object, 's'); //=> false
 *      R.is(Number, {}); //=> false
 */
var is = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function is(Ctor, val) {
  return val != null && val.constructor === Ctor || val instanceof Ctor;
});
/* harmony default export */ __webpack_exports__["a"] = (is);

/***/ }),

/***/ "./node_modules/ramda/es/isEmpty.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/isEmpty.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ "./node_modules/ramda/es/empty.js");
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equals */ "./node_modules/ramda/es/equals.js");




/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);   //=> false
 *      R.isEmpty([]);          //=> true
 *      R.isEmpty('');          //=> true
 *      R.isEmpty(null);        //=> false
 *      R.isEmpty({});          //=> true
 *      R.isEmpty({length: 0}); //=> false
 */
var isEmpty = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function isEmpty(x) {
  return x != null && Object(_equals__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(x, Object(_empty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(x));
});
/* unused harmony default export */ var _unused_webpack_default_export = (isEmpty);

/***/ }),

/***/ "./node_modules/ramda/es/isNil.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/isNil.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");


/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */
var isNil = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function isNil(x) {
  return x == null;
});
/* harmony default export */ __webpack_exports__["a"] = (isNil);

/***/ }),

/***/ "./node_modules/ramda/es/join.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/join.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _invoker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoker */ "./node_modules/ramda/es/invoker.js");


/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig String -> [a] -> String
 * @param {Number|String} separator The string used to separate the elements.
 * @param {Array} xs The elements to join into a string.
 * @return {String} str The string made by concatenating `xs` with `separator`.
 * @see R.split
 * @example
 *
 *      var spacer = R.join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
 */
var join = /*#__PURE__*/Object(_invoker__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(1, 'join');
/* unused harmony default export */ var _unused_webpack_default_export = (join);

/***/ }),

/***/ "./node_modules/ramda/es/juxt.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/juxt.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _converge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./converge */ "./node_modules/ramda/es/converge.js");



/**
 * juxt applies a list of functions to a list of values.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Function
 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
 * @param {Array} fns An array of functions
 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
 * @see R.applySpec
 * @example
 *
 *      var getRange = R.juxt([Math.min, Math.max]);
 *      getRange(3, 4, 9, -3); //=> [-3, 9]
 * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
 */
var juxt = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function juxt(fns) {
  return Object(_converge__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function () {
    return Array.prototype.slice.call(arguments, 0);
  }, fns);
});
/* harmony default export */ __webpack_exports__["a"] = (juxt);

/***/ }),

/***/ "./node_modules/ramda/es/keys.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/keys.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _internal_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/es/internal/_has.js");
/* harmony import */ var _internal_isArguments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_isArguments */ "./node_modules/ramda/es/internal/_isArguments.js");




// cover IE < 9 keys issues
var hasEnumBug = ! /*#__PURE__*/{ toString: null }.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
// Safari bug
var hasArgsEnumBug = /*#__PURE__*/function () {
  'use strict';

  return arguments.propertyIsEnumerable('length');
}();

var contains = function contains(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};

/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
var _keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
} : function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && Object(_internal_isArguments__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj);
  for (prop in obj) {
    if (Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];
      if (Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }
      nIdx -= 1;
    }
  }
  return ks;
};
var keys = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_keys);
/* harmony default export */ __webpack_exports__["a"] = (keys);

/***/ }),

/***/ "./node_modules/ramda/es/keysIn.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/keysIn.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");


/**
 * Returns a list containing the names of all the properties of the supplied
 * object, including prototype properties.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own and prototype properties.
 * @see R.keys, R.valuesIn
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.keysIn(f); //=> ['x', 'y']
 */
var keysIn = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function keysIn(obj) {
  var prop;
  var ks = [];
  for (prop in obj) {
    ks[ks.length] = prop;
  }
  return ks;
});
/* unused harmony default export */ var _unused_webpack_default_export = (keysIn);

/***/ }),

/***/ "./node_modules/ramda/es/last.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/last.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nth */ "./node_modules/ramda/es/nth.js");


/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */
var last = /*#__PURE__*/Object(_nth__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(-1);
/* harmony default export */ __webpack_exports__["a"] = (last);

/***/ }),

/***/ "./node_modules/ramda/es/lastIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/es/lastIndexOf.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isArray */ "./node_modules/ramda/es/internal/_isArray.js");
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equals */ "./node_modules/ramda/es/equals.js");




/**
 * Returns the position of the last occurrence of an item in an array, or -1 if
 * the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.indexOf
 * @example
 *
 *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
 *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
 */
var lastIndexOf = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function lastIndexOf(target, xs) {
  if (typeof xs.lastIndexOf === 'function' && !Object(_internal_isArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(xs)) {
    return xs.lastIndexOf(target);
  } else {
    var idx = xs.length - 1;
    while (idx >= 0) {
      if (Object(_equals__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(xs[idx], target)) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }
});
/* unused harmony default export */ var _unused_webpack_default_export = (lastIndexOf);

/***/ }),

/***/ "./node_modules/ramda/es/length.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/length.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _internal_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isNumber */ "./node_modules/ramda/es/internal/_isNumber.js");



/**
 * Returns the number of elements in the array by returning `list.length`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [a] -> Number
 * @param {Array} list The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      R.length([]); //=> 0
 *      R.length([1, 2, 3]); //=> 3
 */
var length = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function length(list) {
  return list != null && Object(_internal_isNumber__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(list.length) ? list.length : NaN;
});
/* harmony default export */ __webpack_exports__["a"] = (length);

/***/ }),

/***/ "./node_modules/ramda/es/lens.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/lens.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./node_modules/ramda/es/map.js");



/**
 * Returns a lens for the given getter and setter functions. The getter "gets"
 * the value of the focus; the setter "sets" the value of the focus. The setter
 * should not mutate the data structure.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
 * @param {Function} getter
 * @param {Function} setter
 * @return {Lens}
 * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lens(R.prop('x'), R.assoc('x'));
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
var lens = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function lens(getter, setter) {
  return function (toFunctorFn) {
    return function (target) {
      return Object(_map__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (focus) {
        return setter(focus, target);
      }, toFunctorFn(getter(target)));
    };
  };
});
/* harmony default export */ __webpack_exports__["a"] = (lens);

/***/ }),

/***/ "./node_modules/ramda/es/lensIndex.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/lensIndex.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _lens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lens */ "./node_modules/ramda/es/lens.js");
/* harmony import */ var _nth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nth */ "./node_modules/ramda/es/nth.js");
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update */ "./node_modules/ramda/es/update.js");





/**
 * Returns a lens whose focus is the specified index.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Number -> Lens s a
 * @param {Number} n
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
 *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
 *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
 */
var lensIndex = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function lensIndex(n) {
  return Object(_lens__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_nth__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(n), Object(_update__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(n));
});
/* unused harmony default export */ var _unused_webpack_default_export = (lensIndex);

/***/ }),

/***/ "./node_modules/ramda/es/lensPath.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/lensPath.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _assocPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assocPath */ "./node_modules/ramda/es/assocPath.js");
/* harmony import */ var _lens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lens */ "./node_modules/ramda/es/lens.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./path */ "./node_modules/ramda/es/path.js");





/**
 * Returns a lens whose focus is the specified path.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @typedefn Idx = String | Int
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig [Idx] -> Lens s a
 * @param {Array} path The path to use.
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xHeadYLens = R.lensPath(['x', 0, 'y']);
 *
 *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> 2
 *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
 *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
 */
var lensPath = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function lensPath(p) {
  return Object(_lens__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_path__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(p), Object(_assocPath__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(p));
});
/* unused harmony default export */ var _unused_webpack_default_export = (lensPath);

/***/ }),

/***/ "./node_modules/ramda/es/lensProp.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/lensProp.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _assoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assoc */ "./node_modules/ramda/es/assoc.js");
/* harmony import */ var _lens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lens */ "./node_modules/ramda/es/lens.js");
/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prop */ "./node_modules/ramda/es/prop.js");





/**
 * Returns a lens whose focus is the specified property.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig String -> Lens s a
 * @param {String} k
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
var lensProp = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function lensProp(k) {
  return Object(_lens__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_prop__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(k), Object(_assoc__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(k));
});
/* unused harmony default export */ var _unused_webpack_default_export = (lensProp);

/***/ }),

/***/ "./node_modules/ramda/es/lift.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/lift.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _liftN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liftN */ "./node_modules/ramda/es/liftN.js");



/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.liftN
 * @example
 *
 *      var madd3 = R.lift((a, b, c) => a + b + c);
 *
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 *
 *      var madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 *
 *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
 */
var lift = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function lift(fn) {
  return Object(_liftN__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(fn.length, fn);
});
/* harmony default export */ __webpack_exports__["a"] = (lift);

/***/ }),

/***/ "./node_modules/ramda/es/liftN.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/liftN.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_reduce */ "./node_modules/ramda/es/internal/_reduce.js");
/* harmony import */ var _ap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ap */ "./node_modules/ramda/es/ap.js");
/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/es/curryN.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ "./node_modules/ramda/es/map.js");






/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.lift, R.ap
 * @example
 *
 *      var madd3 = R.liftN(3, (...args) => R.sum(args));
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */
var liftN = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function liftN(arity, fn) {
  var lifted = Object(_curryN__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(arity, fn);
  return Object(_curryN__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(arity, function () {
    return Object(_internal_reduce__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ap__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object(_map__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});
/* harmony default export */ __webpack_exports__["a"] = (liftN);

/***/ }),

/***/ "./node_modules/ramda/es/lt.js":
/*!*************************************!*\
  !*** ./node_modules/ramda/es/lt.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Returns `true` if the first argument is less than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.gt
 * @example
 *
 *      R.lt(2, 1); //=> false
 *      R.lt(2, 2); //=> false
 *      R.lt(2, 3); //=> true
 *      R.lt('a', 'z'); //=> true
 *      R.lt('z', 'a'); //=> false
 */
var lt = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function lt(a, b) {
  return a < b;
});
/* unused harmony default export */ var _unused_webpack_default_export = (lt);

/***/ }),

/***/ "./node_modules/ramda/es/lte.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/lte.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Returns `true` if the first argument is less than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.gte
 * @example
 *
 *      R.lte(2, 1); //=> false
 *      R.lte(2, 2); //=> true
 *      R.lte(2, 3); //=> true
 *      R.lte('a', 'z'); //=> true
 *      R.lte('z', 'a'); //=> false
 */
var lte = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function lte(a, b) {
  return a <= b;
});
/* unused harmony default export */ var _unused_webpack_default_export = (lte);

/***/ }),

/***/ "./node_modules/ramda/es/map.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/map.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_map */ "./node_modules/ramda/es/internal/_map.js");
/* harmony import */ var _internal_reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_reduce */ "./node_modules/ramda/es/internal/_reduce.js");
/* harmony import */ var _internal_xmap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/_xmap */ "./node_modules/ramda/es/internal/_xmap.js");
/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/es/curryN.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./keys */ "./node_modules/ramda/es/keys.js");








/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      var double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
var map = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(['fantasy-land/map', 'map'], _internal_xmap__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return Object(_curryN__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(functor.length, function () {
        return fn.call(this, functor.apply(this, arguments));
      });
    case '[object Object]':
      return Object(_internal_reduce__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(function (acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, Object(_keys__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(functor));
    default:
      return Object(_internal_map__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(fn, functor);
  }
}));
/* harmony default export */ __webpack_exports__["a"] = (map);

/***/ }),

/***/ "./node_modules/ramda/es/mapAccum.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/mapAccum.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


/**
 * The `mapAccum` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from left to right, and returning a final value of this
 * accumulator together with the new list.
 *
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((acc, x) -> (acc, y)) -> acc -> [x] -> (acc, [y])
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccumRight
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var appender = (a, b) => [a + b, a + b];
 *
 *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
 * @symb R.mapAccum(f, a, [b, c, d]) = [
 *   f(f(f(a, b)[0], c)[0], d)[0],
 *   [
 *     f(a, b)[1],
 *     f(f(a, b)[0], c)[1],
 *     f(f(f(a, b)[0], c)[0], d)[1]
 *   ]
 * ]
 */
var mapAccum = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function mapAccum(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var tuple = [acc];
  while (idx < len) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx += 1;
  }
  return [tuple[0], result];
});
/* unused harmony default export */ var _unused_webpack_default_export = (mapAccum);

/***/ }),

/***/ "./node_modules/ramda/es/mapAccumRight.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/mapAccumRight.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


/**
 * The `mapAccumRight` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from right to left, and returning a final value of this
 * accumulator together with the new list.
 *
 * Similar to [`mapAccum`](#mapAccum), except moves through the input list from
 * the right to the left.
 *
 * The iterator function receives two arguments, *value* and *acc*, and should
 * return a tuple *[value, acc]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((x, acc) -> (y, acc)) -> acc -> [x] -> ([y], acc)
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccum
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var append = (a, b) => [a + b, a + b];
 *
 *      R.mapAccumRight(append, 5, digits); //=> [['12345', '2345', '345', '45'], '12345']
 * @symb R.mapAccumRight(f, a, [b, c, d]) = [
 *   [
 *     f(b, f(c, f(d, a)[0])[0])[1],
 *     f(c, f(d, a)[0])[1],
 *     f(d, a)[1],
 *   ]
 *   f(b, f(c, f(d, a)[0])[0])[0],
 * ]
 */
var mapAccumRight = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function mapAccumRight(fn, acc, list) {
  var idx = list.length - 1;
  var result = [];
  var tuple = [acc];
  while (idx >= 0) {
    tuple = fn(list[idx], tuple[0]);
    result[idx] = tuple[1];
    idx -= 1;
  }
  return [result, tuple[0]];
});
/* unused harmony default export */ var _unused_webpack_default_export = (mapAccumRight);

/***/ }),

/***/ "./node_modules/ramda/es/mapObjIndexed.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/mapObjIndexed.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_reduce */ "./node_modules/ramda/es/internal/_reduce.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys */ "./node_modules/ramda/es/keys.js");




/**
 * An Object-specific version of [`map`](#map). The function is applied to three
 * arguments: *(value, key, obj)*. If only the value is significant, use
 * [`map`](#map) instead.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig ((*, String, Object) -> *) -> Object -> Object
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @see R.map
 * @example
 *
 *      var values = { x: 1, y: 2, z: 3 };
 *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);
 *
 *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
 */
var mapObjIndexed = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function mapObjIndexed(fn, obj) {
  return Object(_internal_reduce__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (acc, key) {
    acc[key] = fn(obj[key], key, obj);
    return acc;
  }, {}, Object(_keys__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj));
});
/* unused harmony default export */ var _unused_webpack_default_export = (mapObjIndexed);

/***/ }),

/***/ "./node_modules/ramda/es/match.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/match.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * which returns `null` when there are no matches.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig RegExp -> String -> [String | Undefined]
 * @param {RegExp} rx A regular expression.
 * @param {String} str The string to match against
 * @return {Array} The list of matches or empty array.
 * @see R.test
 * @example
 *
 *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 *      R.match(/a/, 'b'); //=> []
 *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
 */
var match = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function match(rx, str) {
  return str.match(rx) || [];
});
/* unused harmony default export */ var _unused_webpack_default_export = (match);

/***/ }),

/***/ "./node_modules/ramda/es/mathMod.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/mathMod.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_isInteger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isInteger */ "./node_modules/ramda/es/internal/_isInteger.js");



/**
 * `mathMod` behaves like the modulo operator should mathematically, unlike the
 * `%` operator (and by extension, [`R.modulo`](#modulo)). So while
 * `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`. `mathMod` requires Integer
 * arguments, and returns NaN when the modulus is zero or negative.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} m The dividend.
 * @param {Number} p the modulus.
 * @return {Number} The result of `b mod a`.
 * @see R.modulo
 * @example
 *
 *      R.mathMod(-17, 5);  //=> 3
 *      R.mathMod(17, 5);   //=> 2
 *      R.mathMod(17, -5);  //=> NaN
 *      R.mathMod(17, 0);   //=> NaN
 *      R.mathMod(17.2, 5); //=> NaN
 *      R.mathMod(17, 5.3); //=> NaN
 *
 *      var clock = R.mathMod(R.__, 12);
 *      clock(15); //=> 3
 *      clock(24); //=> 0
 *
 *      var seventeenMod = R.mathMod(17);
 *      seventeenMod(3);  //=> 2
 *      seventeenMod(4);  //=> 1
 *      seventeenMod(10); //=> 7
 */
var mathMod = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function mathMod(m, p) {
  if (!Object(_internal_isInteger__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(m)) {
    return NaN;
  }
  if (!Object(_internal_isInteger__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(p) || p < 1) {
    return NaN;
  }
  return (m % p + p) % p;
});
/* unused harmony default export */ var _unused_webpack_default_export = (mathMod);

/***/ }),

/***/ "./node_modules/ramda/es/max.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/max.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */
var max = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function max(a, b) {
  return b > a ? b : a;
});
/* harmony default export */ __webpack_exports__["a"] = (max);

/***/ }),

/***/ "./node_modules/ramda/es/maxBy.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/maxBy.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


/**
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.max, R.minBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.maxBy(square, -3, 2); //=> -3
 *
 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 *      R.reduce(R.maxBy(square), 0, []); //=> 0
 */
var maxBy = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function maxBy(f, a, b) {
  return f(b) > f(a) ? b : a;
});
/* unused harmony default export */ var _unused_webpack_default_export = (maxBy);

/***/ }),

/***/ "./node_modules/ramda/es/mean.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/mean.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sum */ "./node_modules/ramda/es/sum.js");



/**
 * Returns the mean of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.median
 * @example
 *
 *      R.mean([2, 7, 9]); //=> 6
 *      R.mean([]); //=> NaN
 */
var mean = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function mean(list) {
  return Object(_sum__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(list) / list.length;
});
/* harmony default export */ __webpack_exports__["a"] = (mean);

/***/ }),

/***/ "./node_modules/ramda/es/median.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/median.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _mean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mean */ "./node_modules/ramda/es/mean.js");



/**
 * Returns the median of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.mean
 * @example
 *
 *      R.median([2, 9, 7]); //=> 7
 *      R.median([7, 2, 10, 9]); //=> 8
 *      R.median([]); //=> NaN
 */
var median = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function median(list) {
  var len = list.length;
  if (len === 0) {
    return NaN;
  }
  var width = 2 - len % 2;
  var idx = (len - width) / 2;
  return Object(_mean__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Array.prototype.slice.call(list, 0).sort(function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }).slice(idx, idx + width));
});
/* unused harmony default export */ var _unused_webpack_default_export = (median);

/***/ }),

/***/ "./node_modules/ramda/es/memoize.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/memoize.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _memoizeWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memoizeWith */ "./node_modules/ramda/es/memoizeWith.js");
/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toString */ "./node_modules/ramda/es/toString.js");



/**
 * Creates a new function that, when invoked, caches the result of calling `fn`
 * for a given argument set and returns the result. Subsequent calls to the
 * memoized `fn` with the same argument set will not result in an additional
 * call to `fn`; instead, the cached result for that set of arguments will be
 * returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoizeWith
 * @deprecated since v0.25.0
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoize(n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
var memoize = /*#__PURE__*/Object(_memoizeWith__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function () {
  return Object(_toString__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arguments);
});
/* unused harmony default export */ var _unused_webpack_default_export = (memoize);

/***/ }),

/***/ "./node_modules/ramda/es/memoizeWith.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/es/memoizeWith.js ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_arity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_arity */ "./node_modules/ramda/es/internal/_arity.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_has__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/es/internal/_has.js");




/**
 * A customisable version of [`R.memoize`](#memoize). `memoizeWith` takes an
 * additional function that will be applied to a given argument set and used to
 * create the cache key under which the results of the function to be memoized
 * will be stored. Care must be taken when implementing key generation to avoid
 * clashes that may overwrite previous entries erroneously.
 *
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (*... -> String) -> (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to generate the cache key.
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoize
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoizeWith(R.identity, n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
var memoizeWith = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function memoizeWith(mFn, fn) {
  var cache = {};
  return Object(_internal_arity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(fn.length, function () {
    var key = mFn.apply(this, arguments);
    if (!Object(_internal_has__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(key, cache)) {
      cache[key] = fn.apply(this, arguments);
    }
    return cache[key];
  });
});
/* harmony default export */ __webpack_exports__["a"] = (memoizeWith);

/***/ }),

/***/ "./node_modules/ramda/es/merge.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/merge.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_assign */ "./node_modules/ramda/es/internal/_assign.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");



/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepRight, R.mergeWith, R.mergeWithKey
 * @example
 *
 *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      var resetToDefault = R.merge(R.__, {x: 0});
 *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
 * @symb R.merge({ x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: 5, z: 3 }
 */
var merge = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function merge(l, r) {
  return Object(_internal_assign__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, l, r);
});
/* unused harmony default export */ var _unused_webpack_default_export = (merge);

/***/ }),

/***/ "./node_modules/ramda/es/mergeAll.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/mergeAll.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_assign */ "./node_modules/ramda/es/internal/_assign.js");
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");



/**
 * Merges a list of objects together into one object.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig [{k: v}] -> {k: v}
 * @param {Array} list An array of objects
 * @return {Object} A merged object.
 * @see R.reduce
 * @example
 *
 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
 * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
 */
var mergeAll = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function mergeAll(list) {
  return _internal_assign__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].apply(null, [{}].concat(list));
});
/* unused harmony default export */ var _unused_webpack_default_export = (mergeAll);

/***/ }),

/***/ "./node_modules/ramda/es/mergeDeepLeft.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/mergeDeepLeft.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _mergeDeepWithKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeDeepWithKey */ "./node_modules/ramda/es/mergeDeepWithKey.js");



/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the first object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepRight, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                      { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
 */
var mergeDeepLeft = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function mergeDeepLeft(lObj, rObj) {
  return Object(_mergeDeepWithKey__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (k, lVal, rVal) {
    return lVal;
  }, lObj, rObj);
});
/* unused harmony default export */ var _unused_webpack_default_export = (mergeDeepLeft);

/***/ }),

/***/ "./node_modules/ramda/es/mergeDeepRight.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/es/mergeDeepRight.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _mergeDeepWithKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeDeepWithKey */ "./node_modules/ramda/es/mergeDeepWithKey.js");



/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                       { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 */
var mergeDeepRight = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function mergeDeepRight(lObj, rObj) {
  return Object(_mergeDeepWithKey__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});
/* unused harmony default export */ var _unused_webpack_default_export = (mergeDeepRight);

/***/ }),

/***/ "./node_modules/ramda/es/mergeDeepWith.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/mergeDeepWith.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _mergeDeepWithKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeDeepWithKey */ "./node_modules/ramda/es/mergeDeepWithKey.js");



/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to associated values using the
 *   resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWith, R.mergeDeep, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepWith(R.concat,
 *                      { a: true, c: { values: [10, 20] }},
 *                      { b: true, c: { values: [15, 35] }});
 *      //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
 */
var mergeDeepWith = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function mergeDeepWith(fn, lObj, rObj) {
  return Object(_mergeDeepWithKey__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (k, lVal, rVal) {
    return fn(lVal, rVal);
  }, lObj, rObj);
});
/* unused harmony default export */ var _unused_webpack_default_export = (mergeDeepWith);

/***/ }),

/***/ "./node_modules/ramda/es/mergeDeepWithKey.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/mergeDeepWithKey.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _internal_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isObject */ "./node_modules/ramda/es/internal/_isObject.js");
/* harmony import */ var _mergeWithKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeWithKey */ "./node_modules/ramda/es/mergeWithKey.js");




/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeep, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */
var mergeDeepWithKey = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function mergeDeepWithKey(fn, lObj, rObj) {
  return Object(_mergeWithKey__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function (k, lVal, rVal) {
    if (Object(_internal_isObject__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(lVal) && Object(_internal_isObject__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(rVal)) {
      return mergeDeepWithKey(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});
/* harmony default export */ __webpack_exports__["a"] = (mergeDeepWithKey);

/***/ }),

/***/ "./node_modules/ramda/es/mergeWith.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/mergeWith.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _mergeWithKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeWithKey */ "./node_modules/ramda/es/mergeWithKey.js");



/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the values
 * associated with the key in each object, with the result being used as the
 * value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWith, R.merge, R.mergeWithKey
 * @example
 *
 *      R.mergeWith(R.concat,
 *                  { a: true, values: [10, 20] },
 *                  { b: true, values: [15, 35] });
 *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
 */
var mergeWith = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function mergeWith(fn, l, r) {
  return Object(_mergeWithKey__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (_, _l, _r) {
    return fn(_l, _r);
  }, l, r);
});
/* unused harmony default export */ var _unused_webpack_default_export = (mergeWith);

/***/ }),

/***/ "./node_modules/ramda/es/mergeWithKey.js":
/*!***********************************************!*\
  !*** ./node_modules/ramda/es/mergeWithKey.js ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _internal_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/es/internal/_has.js");



/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */
var mergeWithKey = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function mergeWithKey(fn, l, r) {
  var result = {};
  var k;

  for (k in l) {
    if (Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(k, l)) {
      result[k] = Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }

  for (k in r) {
    if (Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(k, r) && !Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(k, result)) {
      result[k] = r[k];
    }
  }

  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (mergeWithKey);

/***/ }),

/***/ "./node_modules/ramda/es/min.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/min.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Returns the smaller of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.minBy, R.max
 * @example
 *
 *      R.min(789, 123); //=> 123
 *      R.min('a', 'b'); //=> 'a'
 */
var min = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function min(a, b) {
  return b < a ? b : a;
});
/* unused harmony default export */ var _unused_webpack_default_export = (min);

/***/ }),

/***/ "./node_modules/ramda/es/minBy.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/minBy.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


/**
 * Takes a function and two values, and returns whichever value produces the
 * smaller result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.min, R.maxBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.minBy(square, -3, 2); //=> 2
 *
 *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
 *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
 */
var minBy = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function minBy(f, a, b) {
  return f(b) < f(a) ? b : a;
});
/* unused harmony default export */ var _unused_webpack_default_export = (minBy);

/***/ }),

/***/ "./node_modules/ramda/es/modulo.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/modulo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Divides the first parameter by the second and returns the remainder. Note
 * that this function preserves the JavaScript-style behavior for modulo. For
 * mathematical modulo see [`mathMod`](#mathMod).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The value to the divide.
 * @param {Number} b The pseudo-modulus
 * @return {Number} The result of `b % a`.
 * @see R.mathMod
 * @example
 *
 *      R.modulo(17, 3); //=> 2
 *      // JS behavior:
 *      R.modulo(-17, 3); //=> -2
 *      R.modulo(17, -3); //=> 2
 *
 *      var isOdd = R.modulo(R.__, 2);
 *      isOdd(42); //=> 0
 *      isOdd(21); //=> 1
 */
var modulo = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function modulo(a, b) {
  return a % b;
});
/* unused harmony default export */ var _unused_webpack_default_export = (modulo);

/***/ }),

/***/ "./node_modules/ramda/es/multiply.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/multiply.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @see R.divide
 * @example
 *
 *      var double = R.multiply(2);
 *      var triple = R.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      R.multiply(2, 5);  //=> 10
 */
var multiply = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function multiply(a, b) {
  return a * b;
});
/* harmony default export */ __webpack_exports__["a"] = (multiply);

/***/ }),

/***/ "./node_modules/ramda/es/nAry.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/nAry.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `n` parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} n The desired arity of the new function.
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity `n`.
 * @see R.binary, R.unary
 * @example
 *
 *      var takesTwoArgs = (a, b) => [a, b];
 *
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.nAry(1, takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only `n` arguments are passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.nAry(0, f)(a, b) = f()
 * @symb R.nAry(1, f)(a, b) = f(a)
 * @symb R.nAry(2, f)(a, b) = f(a, b)
 */
var nAry = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function nAry(n, fn) {
  switch (n) {
    case 0:
      return function () {
        return fn.call(this);
      };
    case 1:
      return function (a0) {
        return fn.call(this, a0);
      };
    case 2:
      return function (a0, a1) {
        return fn.call(this, a0, a1);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.call(this, a0, a1, a2);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.call(this, a0, a1, a2, a3);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.call(this, a0, a1, a2, a3, a4);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.call(this, a0, a1, a2, a3, a4, a5);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      };
    default:
      throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
  }
});
/* harmony default export */ __webpack_exports__["a"] = (nAry);

/***/ }),

/***/ "./node_modules/ramda/es/negate.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/negate.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");


/**
 * Negates its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number}
 * @example
 *
 *      R.negate(42); //=> -42
 */
var negate = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function negate(n) {
  return -n;
});
/* unused harmony default export */ var _unused_webpack_default_export = (negate);

/***/ }),

/***/ "./node_modules/ramda/es/none.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/none.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_complement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_complement */ "./node_modules/ramda/es/internal/_complement.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_xany__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_xany */ "./node_modules/ramda/es/internal/_xany.js");
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./any */ "./node_modules/ramda/es/any.js");






/**
 * Returns `true` if no elements of the list match the predicate, `false`
 * otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
 * @see R.all, R.any
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *      var isOdd = n => n % 2 === 1;
 *
 *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
 *      R.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false
 */
var none = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_internal_complement__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(['any'], _internal_xany__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _any__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])));
/* unused harmony default export */ var _unused_webpack_default_export = (none);

/***/ }),

/***/ "./node_modules/ramda/es/not.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/not.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");


/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig * -> Boolean
 * @param {*} a any value
 * @return {Boolean} the logical inverse of passed argument.
 * @see R.complement
 * @example
 *
 *      R.not(true); //=> false
 *      R.not(false); //=> true
 *      R.not(0); //=> true
 *      R.not(1); //=> false
 */
var not = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function not(a) {
  return !a;
});
/* harmony default export */ __webpack_exports__["a"] = (not);

/***/ }),

/***/ "./node_modules/ramda/es/nth.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/nth.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isString */ "./node_modules/ramda/es/internal/_isString.js");



/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      var list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */
var nth = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return Object(_internal_isString__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(list) ? list.charAt(idx) : list[idx];
});
/* harmony default export */ __webpack_exports__["a"] = (nth);

/***/ }),

/***/ "./node_modules/ramda/es/nthArg.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/nthArg.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/es/curryN.js");
/* harmony import */ var _nth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nth */ "./node_modules/ramda/es/nth.js");




/**
 * Returns a function which returns its nth argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig Number -> *... -> *
 * @param {Number} n
 * @return {Function}
 * @example
 *
 *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
 *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
 * @symb R.nthArg(-1)(a, b, c) = c
 * @symb R.nthArg(0)(a, b, c) = a
 * @symb R.nthArg(1)(a, b, c) = b
 */
var nthArg = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function nthArg(n) {
  var arity = n < 0 ? 1 : n + 1;
  return Object(_curryN__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arity, function () {
    return Object(_nth__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(n, arguments);
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (nthArg);

/***/ }),

/***/ "./node_modules/ramda/es/o.js":
/*!************************************!*\
  !*** ./node_modules/ramda/es/o.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


/**
 * `o` is a curried composition function that returns a unary function.
 * Like [`compose`](#compose), `o` performs right-to-left function composition.
 * Unlike [`compose`](#compose), the rightmost function passed to `o` will be
 * invoked with only one argument.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (b -> c) -> (a -> b) -> a -> c
 * @param {Function} f
 * @param {Function} g
 * @return {Function}
 * @see R.compose, R.pipe
 * @example
 *
 *      var classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + name.last
 *      var yellGreeting = R.o(R.toUpper, classyGreeting);
 *      yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.o(R.multiply(10), R.add(10))(-4) //=> 60
 *
 * @symb R.o(f, g, x) = f(g(x))
 */
var o = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function o(f, g, x) {
  return f(g(x));
});
/* unused harmony default export */ var _unused_webpack_default_export = (o);

/***/ }),

/***/ "./node_modules/ramda/es/objOf.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/objOf.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Creates an object containing a single key:value pair.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @sig String -> a -> {String:a}
 * @param {String} key
 * @param {*} val
 * @return {Object}
 * @see R.pair
 * @example
 *
 *      var matchPhrases = R.compose(
 *        R.objOf('must'),
 *        R.map(R.objOf('match_phrase'))
 *      );
 *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
 */
var objOf = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function objOf(key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
});
/* harmony default export */ __webpack_exports__["a"] = (objOf);

/***/ }),

/***/ "./node_modules/ramda/es/of.js":
/*!*************************************!*\
  !*** ./node_modules/ramda/es/of.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _internal_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_of */ "./node_modules/ramda/es/internal/_of.js");



/**
 * Returns a singleton array containing the value provided.
 *
 * Note this `of` is different from the ES6 `of`; See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> [a]
 * @param {*} x any value
 * @return {Array} An array wrapping `x`.
 * @example
 *
 *      R.of(null); //=> [null]
 *      R.of([42]); //=> [[42]]
 */
var of = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_internal_of__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* unused harmony default export */ var _unused_webpack_default_export = (of);

/***/ }),

/***/ "./node_modules/ramda/es/omit.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/omit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} -> {String: *}
 * @param {Array} names an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @see R.pick
 * @example
 *
 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */
var omit = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function omit(names, obj) {
  var result = {};
  var index = {};
  var idx = 0;
  var len = names.length;

  while (idx < len) {
    index[names[idx]] = 1;
    idx += 1;
  }

  for (var prop in obj) {
    if (!index.hasOwnProperty(prop)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (omit);

/***/ }),

/***/ "./node_modules/ramda/es/once.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/once.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_arity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_arity */ "./node_modules/ramda/es/internal/_arity.js");
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");



/**
 * Accepts a function `fn` and returns a function that guards invocation of
 * `fn` such that `fn` can only ever be called once, no matter how many times
 * the returned function is invoked. The first value calculated is returned in
 * subsequent invocations.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a... -> b) -> (a... -> b)
 * @param {Function} fn The function to wrap in a call-only-once wrapper.
 * @return {Function} The wrapped function.
 * @example
 *
 *      var addOneOnce = R.once(x => x + 1);
 *      addOneOnce(10); //=> 11
 *      addOneOnce(addOneOnce(50)); //=> 11
 */
var once = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function once(fn) {
  var called = false;
  var result;
  return Object(_internal_arity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(fn.length, function () {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, arguments);
    return result;
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (once);

/***/ }),

/***/ "./node_modules/ramda/es/or.js":
/*!*************************************!*\
  !*** ./node_modules/ramda/es/or.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Returns `true` if one or both of its arguments are `true`. Returns `false`
 * if both arguments are `false`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if truthy, otherwise the second argument.
 * @see R.either
 * @example
 *
 *      R.or(true, true); //=> true
 *      R.or(true, false); //=> true
 *      R.or(false, true); //=> true
 *      R.or(false, false); //=> false
 */
var or = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function or(a, b) {
  return a || b;
});
/* harmony default export */ __webpack_exports__["a"] = (or);

/***/ }),

/***/ "./node_modules/ramda/es/over.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/over.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


// `Identity` is a functor that holds a single value, where `map` simply
// transforms the held value with the provided function.
var Identity = function (x) {
  return { value: x, map: function (f) {
      return Identity(f(x));
    } };
};

/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
var over = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function over(lens, f, x) {
  // The value returned by the getter function is first transformed with `f`,
  // then set as the value of an `Identity`. This is then mapped over with the
  // setter function of the lens.
  return lens(function (y) {
    return Identity(f(y));
  })(x).value;
});
/* harmony default export */ __webpack_exports__["a"] = (over);

/***/ }),

/***/ "./node_modules/ramda/es/pair.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/pair.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category List
 * @sig a -> b -> (a,b)
 * @param {*} fst
 * @param {*} snd
 * @return {Array}
 * @see R.objOf, R.of
 * @example
 *
 *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
 */
var pair = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function pair(fst, snd) {
  return [fst, snd];
});
/* unused harmony default export */ var _unused_webpack_default_export = (pair);

/***/ }),

/***/ "./node_modules/ramda/es/partial.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/partial.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_concat */ "./node_modules/ramda/es/internal/_concat.js");
/* harmony import */ var _internal_createPartialApplicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_createPartialApplicator */ "./node_modules/ramda/es/internal/_createPartialApplicator.js");



/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided initially followed by the arguments provided to `g`.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partialRight
 * @example
 *
 *      var multiply2 = (a, b) => a * b;
 *      var double = R.partial(multiply2, [2]);
 *      double(2); //=> 4
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var sayHello = R.partial(greet, ['Hello']);
 *      var sayHelloToMs = R.partial(sayHello, ['Ms.']);
 *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)
 */
var partial = /*#__PURE__*/Object(_internal_createPartialApplicator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_internal_concat__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* unused harmony default export */ var _unused_webpack_default_export = (partial);

/***/ }),

/***/ "./node_modules/ramda/es/partialRight.js":
/*!***********************************************!*\
  !*** ./node_modules/ramda/es/partialRight.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_concat */ "./node_modules/ramda/es/internal/_concat.js");
/* harmony import */ var _internal_createPartialApplicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_createPartialApplicator */ "./node_modules/ramda/es/internal/_createPartialApplicator.js");
/* harmony import */ var _flip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flip */ "./node_modules/ramda/es/flip.js");




/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided to `g` followed by the arguments provided initially.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partial
 * @example
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
 *
 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
 */
var partialRight = /*#__PURE__*/Object(_internal_createPartialApplicator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_flip__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_internal_concat__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]));
/* unused harmony default export */ var _unused_webpack_default_export = (partialRight);

/***/ }),

/***/ "./node_modules/ramda/es/partition.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/partition.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ "./node_modules/ramda/es/filter.js");
/* harmony import */ var _juxt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./juxt */ "./node_modules/ramda/es/juxt.js");
/* harmony import */ var _reject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reject */ "./node_modules/ramda/es/reject.js");




/**
 * Takes a predicate and a list or other `Filterable` object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @param {Function} pred A predicate to determine which side the element belongs to.
 * @param {Array} filterable the list (or other filterable) to partition.
 * @return {Array} An array, containing first the subset of elements that satisfy the
 *         predicate, and second the subset of elements that do not satisfy.
 * @see R.filter, R.reject
 * @example
 *
 *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 *
 *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 */
var partition = /*#__PURE__*/Object(_juxt__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])([_filter__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _reject__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]]);
/* unused harmony default export */ var _unused_webpack_default_export = (partition);

/***/ }),

/***/ "./node_modules/ramda/es/path.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/path.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */
var path = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function path(paths, obj) {
  var val = obj;
  var idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx += 1;
  }
  return val;
});
/* harmony default export */ __webpack_exports__["a"] = (path);

/***/ }),

/***/ "./node_modules/ramda/es/pathEq.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/pathEq.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equals */ "./node_modules/ramda/es/equals.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path */ "./node_modules/ramda/es/path.js");




/**
 * Determines whether a nested path on an object has a specific value, in
 * [`R.equals`](#equals) terms. Most likely used to filter a list.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Relation
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> Boolean
 * @param {Array} path The path of the nested property to use
 * @param {*} val The value to compare the nested property with
 * @param {Object} obj The object to check the nested property in
 * @return {Boolean} `true` if the value equals the nested object property,
 *         `false` otherwise.
 * @example
 *
 *      var user1 = { address: { zipCode: 90210 } };
 *      var user2 = { address: { zipCode: 55555 } };
 *      var user3 = { name: 'Bob' };
 *      var users = [ user1, user2, user3 ];
 *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);
 *      R.filter(isFamous, users); //=> [ user1 ]
 */
var pathEq = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function pathEq(_path, val, obj) {
  return Object(_equals__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_path__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_path, obj), val);
});
/* unused harmony default export */ var _unused_webpack_default_export = (pathEq);

/***/ }),

/***/ "./node_modules/ramda/es/pathOr.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/pathOr.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _defaultTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultTo */ "./node_modules/ramda/es/defaultTo.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path */ "./node_modules/ramda/es/path.js");




/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */
var pathOr = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function pathOr(d, p, obj) {
  return Object(_defaultTo__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(d, Object(_path__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(p, obj));
});
/* unused harmony default export */ var _unused_webpack_default_export = (pathOr);

/***/ }),

/***/ "./node_modules/ramda/es/pathSatisfies.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/pathSatisfies.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ "./node_modules/ramda/es/path.js");



/**
 * Returns `true` if the specified object property at given path satisfies the
 * given predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Logic
 * @typedefn Idx = String | Int
 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
 * @param {Function} pred
 * @param {Array} propPath
 * @param {*} obj
 * @return {Boolean}
 * @see R.propSatisfies, R.path
 * @example
 *
 *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 */
var pathSatisfies = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function pathSatisfies(pred, propPath, obj) {
  return propPath.length > 0 && pred(Object(_path__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(propPath, obj));
});
/* unused harmony default export */ var _unused_webpack_default_export = (pathSatisfies);

/***/ }),

/***/ "./node_modules/ramda/es/pick.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/pick.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */
var pick = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function pick(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (pick);

/***/ }),

/***/ "./node_modules/ramda/es/pickAll.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/pickAll.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for
 * properties that don't exist.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.pick
 * @example
 *
 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 */
var pickAll = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function pickAll(names, obj) {
  var result = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    var name = names[idx];
    result[name] = obj[name];
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (pickAll);

/***/ }),

/***/ "./node_modules/ramda/es/pickBy.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/pickBy.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      var isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */
var pickBy = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function pickBy(test, obj) {
  var result = {};
  for (var prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (pickBy);

/***/ }),

/***/ "./node_modules/ramda/es/pipe.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/pipe.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pipe; });
/* harmony import */ var _internal_arity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_arity */ "./node_modules/ramda/es/internal/_arity.js");
/* harmony import */ var _internal_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_pipe */ "./node_modules/ramda/es/internal/_pipe.js");
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reduce */ "./node_modules/ramda/es/reduce.js");
/* harmony import */ var _tail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tail */ "./node_modules/ramda/es/tail.js");





/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return Object(_internal_arity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arguments[0].length, Object(_reduce__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_internal_pipe__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], arguments[0], Object(_tail__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(arguments)));
}

/***/ }),

/***/ "./node_modules/ramda/es/pipeK.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/pipeK.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _composeK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./composeK */ "./node_modules/ramda/es/composeK.js");
/* harmony import */ var _reverse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reverse */ "./node_modules/ramda/es/reverse.js");



/**
 * Returns the left-to-right Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.pipeK(f, g, h)` is equivalent to `R.pipe(f, R.chain(g), R.chain(h))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (a -> m z)
 * @param {...Function}
 * @return {Function}
 * @see R.composeK
 * @example
 *
 *      //  parseJson :: String -> Maybe *
 *      //  get :: String -> Object -> Maybe *
 *
 *      //  getStateCode :: Maybe String -> Maybe String
 *      var getStateCode = R.pipeK(
 *        parseJson,
 *        get('user'),
 *        get('address'),
 *        get('state'),
 *        R.compose(Maybe.of, R.toUpper)
 *      );
 *
 *      getStateCode('{"user":{"address":{"state":"ny"}}}');
 *      //=> Just('NY')
 *      getStateCode('[Invalid JSON]');
 *      //=> Nothing()
 * @symb R.pipeK(f, g, h)(a) = R.chain(h, R.chain(g, f(a)))
 */
function pipeK() {
  if (arguments.length === 0) {
    throw new Error('pipeK requires at least one argument');
  }
  return _composeK__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].apply(this, Object(_reverse__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arguments));
}

/***/ }),

/***/ "./node_modules/ramda/es/pipeP.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/pipeP.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pipeP; });
/* harmony import */ var _internal_arity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_arity */ "./node_modules/ramda/es/internal/_arity.js");
/* harmony import */ var _internal_pipeP__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_pipeP */ "./node_modules/ramda/es/internal/_pipeP.js");
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reduce */ "./node_modules/ramda/es/reduce.js");
/* harmony import */ var _tail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tail */ "./node_modules/ramda/es/tail.js");





/**
 * Performs left-to-right composition of one or more Promise-returning
 * functions. The leftmost function may have any arity; the remaining functions
 * must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.composeP
 * @example
 *
 *      //  followersForUser :: String -> Promise [User]
 *      var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
 */
function pipeP() {
  if (arguments.length === 0) {
    throw new Error('pipeP requires at least one argument');
  }
  return Object(_internal_arity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arguments[0].length, Object(_reduce__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_internal_pipeP__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], arguments[0], Object(_tail__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(arguments)));
}

/***/ }),

/***/ "./node_modules/ramda/es/pluck.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/pluck.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./node_modules/ramda/es/map.js");
/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prop */ "./node_modules/ramda/es/prop.js");




/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * `pluck` will work on
 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
 * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => k -> f {k: v} -> f v
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} f The array or functor to consider.
 * @return {Array} The list of values for the given key.
 * @see R.props
 * @example
 *
 *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
 *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
 *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */
var pluck = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function pluck(p, list) {
  return Object(_map__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_prop__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(p), list);
});
/* harmony default export */ __webpack_exports__["a"] = (pluck);

/***/ }),

/***/ "./node_modules/ramda/es/prepend.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/prepend.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_concat */ "./node_modules/ramda/es/internal/_concat.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");



/**
 * Returns a new list with the given element at the front, followed by the
 * contents of the list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} list The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @see R.append
 * @example
 *
 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */
var prepend = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function prepend(el, list) {
  return Object(_internal_concat__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])([el], list);
});
/* harmony default export */ __webpack_exports__["a"] = (prepend);

/***/ }),

/***/ "./node_modules/ramda/es/product.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/product.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _multiply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiply */ "./node_modules/ramda/es/multiply.js");
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reduce */ "./node_modules/ramda/es/reduce.js");



/**
 * Multiplies together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The product of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.product([2,4,6,8,100,1]); //=> 38400
 */
var product = /*#__PURE__*/Object(_reduce__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_multiply__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], 1);
/* unused harmony default export */ var _unused_webpack_default_export = (product);

/***/ }),

/***/ "./node_modules/ramda/es/project.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/project.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_map */ "./node_modules/ramda/es/internal/_map.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity */ "./node_modules/ramda/es/identity.js");
/* harmony import */ var _pickAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pickAll */ "./node_modules/ramda/es/pickAll.js");
/* harmony import */ var _useWith__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useWith */ "./node_modules/ramda/es/useWith.js");





/**
 * Reasonable analog to SQL `select` statement.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @category Relation
 * @sig [k] -> [{k: v}] -> [{k: v}]
 * @param {Array} props The property names to project
 * @param {Array} objs The objects to query
 * @return {Array} An array of objects with just the `props` properties.
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
 *      var kids = [abby, fred];
 *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 */
var project = /*#__PURE__*/Object(_useWith__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_internal_map__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], [_pickAll__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _identity__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]]); // passing `identity` gives correct arity
/* unused harmony default export */ var _unused_webpack_default_export = (project);

/***/ }),

/***/ "./node_modules/ramda/es/prop.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/prop.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ "./node_modules/ramda/es/path.js");



/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 */

var prop = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function prop(p, obj) {
  return Object(_path__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])([p], obj);
});
/* harmony default export */ __webpack_exports__["a"] = (prop);

/***/ }),

/***/ "./node_modules/ramda/es/propEq.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/propEq.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equals */ "./node_modules/ramda/es/equals.js");



/**
 * Returns `true` if the specified object property is equal, in
 * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
 * You can test multiple properties with [`R.where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig String -> a -> Object -> Boolean
 * @param {String} name
 * @param {*} val
 * @param {*} obj
 * @return {Boolean}
 * @see R.whereEq, R.propSatisfies, R.equals
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      var kids = [abby, fred, rusty, alois];
 *      var hasBrownHair = R.propEq('hair', 'brown');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */
var propEq = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function propEq(name, val, obj) {
  return Object(_equals__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(val, obj[name]);
});
/* unused harmony default export */ var _unused_webpack_default_export = (propEq);

/***/ }),

/***/ "./node_modules/ramda/es/propIs.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/propIs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is */ "./node_modules/ramda/es/is.js");



/**
 * Returns `true` if the specified object property is of the given type;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Type
 * @sig Type -> String -> Object -> Boolean
 * @param {Function} type
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.is, R.propSatisfies
 * @example
 *
 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
 *      R.propIs(Number, 'x', {});            //=> false
 */
var propIs = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function propIs(type, name, obj) {
  return Object(_is__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(type, obj[name]);
});
/* unused harmony default export */ var _unused_webpack_default_export = (propIs);

/***/ }),

/***/ "./node_modules/ramda/es/propOr.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/propOr.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _internal_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/es/internal/_has.js");



/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var favorite = R.prop('favoriteLibrary');
 *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */
var propOr = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function propOr(val, p, obj) {
  return obj != null && Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(p, obj) ? obj[p] : val;
});
/* unused harmony default export */ var _unused_webpack_default_export = (propOr);

/***/ }),

/***/ "./node_modules/ramda/es/propSatisfies.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/propSatisfies.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise. You can test multiple properties with
 * [`R.where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.where, R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */
var propSatisfies = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function propSatisfies(pred, name, obj) {
  return pred(obj[name]);
});
/* unused harmony default export */ var _unused_webpack_default_export = (propSatisfies);

/***/ }),

/***/ "./node_modules/ramda/es/props.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/props.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> [v]
 * @param {Array} ps The property names to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function.
 * @example
 *
 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 *
 *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
 */
var props = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function props(ps, obj) {
  var len = ps.length;
  var out = [];
  var idx = 0;

  while (idx < len) {
    out[idx] = obj[ps[idx]];
    idx += 1;
  }

  return out;
});
/* unused harmony default export */ var _unused_webpack_default_export = (props);

/***/ }),

/***/ "./node_modules/ramda/es/range.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/range.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isNumber */ "./node_modules/ramda/es/internal/_isNumber.js");



/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> Number -> [Number]
 * @param {Number} from The first number in the list.
 * @param {Number} to One more than the last number in the list.
 * @return {Array} The list of numbers in tthe set `[a, b)`.
 * @example
 *
 *      R.range(1, 5);    //=> [1, 2, 3, 4]
 *      R.range(50, 53);  //=> [50, 51, 52]
 */
var range = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function range(from, to) {
  if (!(Object(_internal_isNumber__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(from) && Object(_internal_isNumber__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(to))) {
    throw new TypeError('Both arguments to range must be numbers');
  }
  var result = [];
  var n = from;
  while (n < to) {
    result.push(n);
    n += 1;
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (range);

/***/ }),

/***/ "./node_modules/ramda/es/reduce.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/reduce.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _internal_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_reduce */ "./node_modules/ramda/es/internal/_reduce.js");



/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
var reduce = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_internal_reduce__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* harmony default export */ __webpack_exports__["a"] = (reduce);

/***/ }),

/***/ "./node_modules/ramda/es/reduceBy.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/reduceBy.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curryN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curryN */ "./node_modules/ramda/es/internal/_curryN.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_has__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/es/internal/_has.js");
/* harmony import */ var _internal_reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_reduce */ "./node_modules/ramda/es/internal/_reduce.js");
/* harmony import */ var _internal_xreduceBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/_xreduceBy */ "./node_modules/ramda/es/internal/_xreduceBy.js");






/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 *
 * This function is basically a more general [`groupBy`](#groupBy) function.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce
 * @example
 *
 *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
 *      var namesByGrade = reduceToNamesBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Lucy', score: 92},
 *                      {name: 'Drew', score: 85},
 *                      // ...
 *                      {name: 'Bart', score: 62}];
 *      namesByGrade(students);
 *      // {
 *      //   'A': ['Lucy'],
 *      //   'B': ['Drew']
 *      //   // ...,
 *      //   'F': ['Bart']
 *      // }
 */
var reduceBy = /*#__PURE__*/Object(_internal_curryN__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(4, [], /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])([], _internal_xreduceBy__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], function reduceBy(valueFn, valueAcc, keyFn, list) {
  return Object(_internal_reduce__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(function (acc, elt) {
    var key = keyFn(elt);
    acc[key] = valueFn(Object(_internal_has__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(key, acc) ? acc[key] : valueAcc, elt);
    return acc;
  }, {}, list);
}));
/* harmony default export */ __webpack_exports__["a"] = (reduceBy);

/***/ }),

/***/ "./node_modules/ramda/es/reduceRight.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/es/reduceRight.js ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * Similar to [`reduce`](#reduce), except moves through the input list from the
 * right to the left.
 *
 * The iterator function receives two values: *(value, acc)*, while the arguments'
 * order of `reduce`'s iterator function is *(acc, value)*.
 *
 * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduceRight` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> b) -> b -> [a] -> b
 * @param {Function} fn The iterator function. Receives two values, the current element from the array
 *        and the accumulator.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.addIndex
 * @example
 *
 *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
 *      //    -               -2
 *      //   / \              / \
 *      //  1   -            1   3
 *      //     / \              / \
 *      //    2   -     ==>    2  -1
 *      //       / \              / \
 *      //      3   -            3   4
 *      //         / \              / \
 *      //        4   0            4   0
 *
 * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
 */
var reduceRight = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function reduceRight(fn, acc, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    acc = fn(list[idx], acc);
    idx -= 1;
  }
  return acc;
});
/* harmony default export */ __webpack_exports__["a"] = (reduceRight);

/***/ }),

/***/ "./node_modules/ramda/es/reduceWhile.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/es/reduceWhile.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curryN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curryN */ "./node_modules/ramda/es/internal/_curryN.js");
/* harmony import */ var _internal_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_reduce */ "./node_modules/ramda/es/internal/_reduce.js");
/* harmony import */ var _internal_reduced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_reduced */ "./node_modules/ramda/es/internal/_reduced.js");




/**
 * Like [`reduce`](#reduce), `reduceWhile` returns a single item by iterating
 * through the list, successively calling the iterator function. `reduceWhile`
 * also takes a predicate that is evaluated before each step. If the predicate
 * returns `false`, it "short-circuits" the iteration and returns the current
 * value of the accumulator.
 *
 * @func
 * @memberOf R
 * @since v0.22.0
 * @category List
 * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} pred The predicate. It is passed the accumulator and the
 *        current element.
 * @param {Function} fn The iterator function. Receives two values, the
 *        accumulator and the current element.
 * @param {*} a The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced
 * @example
 *
 *      var isOdd = (acc, x) => x % 2 === 1;
 *      var xs = [1, 3, 5, 60, 777, 800];
 *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
 *
 *      var ys = [2, 4, 6]
 *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
 */
var reduceWhile = /*#__PURE__*/Object(_internal_curryN__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(4, [], function _reduceWhile(pred, fn, a, list) {
  return Object(_internal_reduce__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (acc, x) {
    return pred(acc, x) ? fn(acc, x) : Object(_internal_reduced__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(acc);
  }, a, list);
});
/* unused harmony default export */ var _unused_webpack_default_export = (reduceWhile);

/***/ }),

/***/ "./node_modules/ramda/es/reduced.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/reduced.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _internal_reduced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_reduced */ "./node_modules/ramda/es/internal/_reduced.js");



/**
 * Returns a value wrapped to indicate that it is the final value of the reduce
 * and transduce functions. The returned value should be considered a black
 * box: the internal structure is not guaranteed to be stable.
 *
 * Note: this optimization is unavailable to functions not explicitly listed
 * above. For instance, it is not currently supported by
 * [`reduceRight`](#reduceRight).
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category List
 * @sig a -> *
 * @param {*} x The final value of the reduce.
 * @return {*} The wrapped value.
 * @see R.reduce, R.transduce
 * @example
 *
 *     R.reduce(
 *       (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
 *       [],
 *       [1, 2, 3, 4, 5]) // [1, 2, 3]
 */
var reduced = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_internal_reduced__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* unused harmony default export */ var _unused_webpack_default_export = (reduced);

/***/ }),

/***/ "./node_modules/ramda/es/reject.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/reject.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_complement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_complement */ "./node_modules/ramda/es/internal/_complement.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ "./node_modules/ramda/es/filter.js");




/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      var isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var reject = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function reject(pred, filterable) {
  return Object(_filter__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_internal_complement__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(pred), filterable);
});
/* harmony default export */ __webpack_exports__["a"] = (reject);

/***/ }),

/***/ "./node_modules/ramda/es/remove.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/remove.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements. _Note that this is not destructive_: it returns a copy of
 * the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} start The position to start removing elements
 * @param {Number} count The number of elements to remove
 * @param {Array} list The list to remove from
 * @return {Array} A new Array with `count` elements from `start` removed.
 * @example
 *
 *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 */
var remove = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function remove(start, count, list) {
  var result = Array.prototype.slice.call(list, 0);
  result.splice(start, count);
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (remove);

/***/ }),

/***/ "./node_modules/ramda/es/repeat.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/repeat.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./always */ "./node_modules/ramda/es/always.js");
/* harmony import */ var _times__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./times */ "./node_modules/ramda/es/times.js");




/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig a -> n -> [a]
 * @param {*} value The value to repeat.
 * @param {Number} n The desired size of the output list.
 * @return {Array} A new array containing `n` `value`s.
 * @see R.times
 * @example
 *
 *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      var obj = {};
 *      var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 * @symb R.repeat(a, 0) = []
 * @symb R.repeat(a, 1) = [a]
 * @symb R.repeat(a, 2) = [a, a]
 */
var repeat = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function repeat(value, n) {
  return Object(_times__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_always__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value), n);
});
/* unused harmony default export */ var _unused_webpack_default_export = (repeat);

/***/ }),

/***/ "./node_modules/ramda/es/replace.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/replace.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category String
 * @sig RegExp|String -> String -> String -> String
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 * @example
 *
 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 *      // Use the "g" (global) flag to replace all occurrences:
 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 */
var replace = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function replace(regex, replacement, str) {
  return str.replace(regex, replacement);
});
/* unused harmony default export */ var _unused_webpack_default_export = (replace);

/***/ }),

/***/ "./node_modules/ramda/es/reverse.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/reverse.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _internal_isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isString */ "./node_modules/ramda/es/internal/_isString.js");



/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
var reverse = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function reverse(list) {
  return Object(_internal_isString__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
});
/* harmony default export */ __webpack_exports__["a"] = (reverse);

/***/ }),

/***/ "./node_modules/ramda/es/scan.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/scan.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


/**
 * Scan is similar to [`reduce`](#reduce), but returns a list of successively
 * reduced values from the left
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> [a]
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {Array} A list of all intermediately reduced values.
 * @see R.reduce
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
 * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
 */
var scan = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function scan(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [acc];
  while (idx < len) {
    acc = fn(acc, list[idx]);
    result[idx + 1] = acc;
    idx += 1;
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (scan);

/***/ }),

/***/ "./node_modules/ramda/es/sequence.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/sequence.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _ap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ap */ "./node_modules/ramda/es/ap.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ "./node_modules/ramda/es/map.js");
/* harmony import */ var _prepend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prepend */ "./node_modules/ramda/es/prepend.js");
/* harmony import */ var _reduceRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reduceRight */ "./node_modules/ramda/es/reduceRight.js");






/**
 * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
 * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
 * Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
 * @param {Function} of
 * @param {*} traversable
 * @return {*}
 * @see R.traverse
 * @example
 *
 *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
 *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
 *
 *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
 *      R.sequence(R.of, Nothing());       //=> [Nothing()]
 */
var sequence = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function sequence(of, traversable) {
  return typeof traversable.sequence === 'function' ? traversable.sequence(of) : Object(_reduceRight__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(function (x, acc) {
    return Object(_ap__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_map__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_prepend__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], x), acc);
  }, of([]), traversable);
});
/* harmony default export */ __webpack_exports__["a"] = (sequence);

/***/ }),

/***/ "./node_modules/ramda/es/set.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/set.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./always */ "./node_modules/ramda/es/always.js");
/* harmony import */ var _over__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./over */ "./node_modules/ramda/es/over.js");




/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> a -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 */
var set = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function set(lens, v, x) {
  return Object(_over__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(lens, Object(_always__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(v), x);
});
/* unused harmony default export */ var _unused_webpack_default_export = (set);

/***/ }),

/***/ "./node_modules/ramda/es/slice.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/slice.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_checkForMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_checkForMethod */ "./node_modules/ramda/es/internal/_checkForMethod.js");
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");



/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
var slice = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_internal_checkForMethod__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));
/* harmony default export */ __webpack_exports__["a"] = (slice);

/***/ }),

/***/ "./node_modules/ramda/es/sort.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/sort.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Returns a copy of the list, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, a) -> Number) -> [a] -> [a]
 * @param {Function} comparator A sorting function :: a -> b -> Int
 * @param {Array} list The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @example
 *
 *      var diff = function(a, b) { return a - b; };
 *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */
var sort = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function sort(comparator, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator);
});
/* unused harmony default export */ var _unused_webpack_default_export = (sort);

/***/ }),

/***/ "./node_modules/ramda/es/sortBy.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/sortBy.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Sorts the list according to the supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord b => (a -> b) -> [a] -> [a]
 * @param {Function} fn
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted by the keys generated by `fn`.
 * @example
 *
 *      var sortByFirstItem = R.sortBy(R.prop(0));
 *      var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
 *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];
 *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var bob = {
 *        name: 'Bob',
 *        age: -10
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 314.159
 *      };
 *      var people = [clara, bob, alice];
 *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
 */
var sortBy = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function sortBy(fn, list) {
  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (sortBy);

/***/ }),

/***/ "./node_modules/ramda/es/sortWith.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/sortWith.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Sorts a list according to a list of comparators.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Relation
 * @sig [(a, a) -> Number] -> [a] -> [a]
 * @param {Array} functions A list of comparator functions.
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted according to the comarator functions.
 * @example
 *
 *      var alice = {
 *        name: 'alice',
 *        age: 40
 *      };
 *      var bob = {
 *        name: 'bob',
 *        age: 30
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 40
 *      };
 *      var people = [clara, bob, alice];
 *      var ageNameSort = R.sortWith([
 *        R.descend(R.prop('age')),
 *        R.ascend(R.prop('name'))
 *      ]);
 *      ageNameSort(people); //=> [alice, clara, bob]
 */
var sortWith = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function sortWith(fns, list) {
  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
    var result = 0;
    var i = 0;
    while (result === 0 && i < fns.length) {
      result = fns[i](a, b);
      i += 1;
    }
    return result;
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (sortWith);

/***/ }),

/***/ "./node_modules/ramda/es/split.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/split.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _invoker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoker */ "./node_modules/ramda/es/invoker.js");


/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} sep The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `str`.
 * @see R.join
 * @example
 *
 *      var pathComponents = R.split('/');
 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 *
 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */
var split = /*#__PURE__*/Object(_invoker__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(1, 'split');
/* unused harmony default export */ var _unused_webpack_default_export = (split);

/***/ }),

/***/ "./node_modules/ramda/es/splitAt.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/splitAt.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _length__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./length */ "./node_modules/ramda/es/length.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slice */ "./node_modules/ramda/es/slice.js");




/**
 * Splits a given list or string at a given index.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig Number -> [a] -> [[a], [a]]
 * @sig Number -> String -> [String, String]
 * @param {Number} index The index where the array/string is split.
 * @param {Array|String} array The array/string to be split.
 * @return {Array}
 * @example
 *
 *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
 *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
 *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
 */
var splitAt = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function splitAt(index, array) {
  return [Object(_slice__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(0, index, array), Object(_slice__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(index, Object(_length__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(array), array)];
});
/* unused harmony default export */ var _unused_webpack_default_export = (splitAt);

/***/ }),

/***/ "./node_modules/ramda/es/splitEvery.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/es/splitEvery.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ "./node_modules/ramda/es/slice.js");



/**
 * Splits a collection into slices of the specified length.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @sig Number -> String -> [String]
 * @param {Number} n
 * @param {Array} list
 * @return {Array}
 * @example
 *
 *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
 *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
 */
var splitEvery = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function splitEvery(n, list) {
  if (n <= 0) {
    throw new Error('First argument to splitEvery must be a positive integer');
  }
  var result = [];
  var idx = 0;
  while (idx < list.length) {
    result.push(Object(_slice__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(idx, idx += n, list));
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (splitEvery);

/***/ }),

/***/ "./node_modules/ramda/es/splitWhen.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/splitWhen.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Takes a list and a predicate and returns a pair of lists with the following properties:
 *
 *  - the result of concatenating the two output lists is equivalent to the input list;
 *  - none of the elements of the first output list satisfies the predicate; and
 *  - if the second output list is non-empty, its first element satisfies the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [[a], [a]]
 * @param {Function} pred The predicate that determines where the array is split.
 * @param {Array} list The array to be split.
 * @return {Array}
 * @example
 *
 *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
 */
var splitWhen = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function splitWhen(pred, list) {
  var idx = 0;
  var len = list.length;
  var prefix = [];

  while (idx < len && !pred(list[idx])) {
    prefix.push(list[idx]);
    idx += 1;
  }

  return [prefix, Array.prototype.slice.call(list, idx)];
});
/* unused harmony default export */ var _unused_webpack_default_export = (splitWhen);

/***/ }),

/***/ "./node_modules/ramda/es/startsWith.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/es/startsWith.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equals */ "./node_modules/ramda/es/equals.js");
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./take */ "./node_modules/ramda/es/take.js");




/**
 * Checks if a list starts with the provided values
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> Boolean
 * @sig String -> Boolean
 * @param {*} prefix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.startsWith('a', 'abc')                //=> true
 *      R.startsWith('b', 'abc')                //=> false
 *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
 *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
var startsWith = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (prefix, list) {
  return Object(_equals__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_take__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(prefix.length, list), prefix);
});
/* unused harmony default export */ var _unused_webpack_default_export = (startsWith);

/***/ }),

/***/ "./node_modules/ramda/es/subtract.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/subtract.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Subtracts its second argument from its first argument.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a - b`.
 * @see R.add
 * @example
 *
 *      R.subtract(10, 8); //=> 2
 *
 *      var minus5 = R.subtract(R.__, 5);
 *      minus5(17); //=> 12
 *
 *      var complementaryAngle = R.subtract(90);
 *      complementaryAngle(30); //=> 60
 *      complementaryAngle(72); //=> 18
 */
var subtract = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function subtract(a, b) {
  return Number(a) - Number(b);
});
/* unused harmony default export */ var _unused_webpack_default_export = (subtract);

/***/ }),

/***/ "./node_modules/ramda/es/sum.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/sum.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./node_modules/ramda/es/add.js");
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reduce */ "./node_modules/ramda/es/reduce.js");



/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.sum([2,4,6,8,100,1]); //=> 121
 */
var sum = /*#__PURE__*/Object(_reduce__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_add__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], 0);
/* harmony default export */ __webpack_exports__["a"] = (sum);

/***/ }),

/***/ "./node_modules/ramda/es/symmetricDifference.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/es/symmetricDifference.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat */ "./node_modules/ramda/es/concat.js");
/* harmony import */ var _difference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./difference */ "./node_modules/ramda/es/difference.js");




/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
 * @example
 *
 *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
 *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
 */
var symmetricDifference = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function symmetricDifference(list1, list2) {
  return Object(_concat__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_difference__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(list1, list2), Object(_difference__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(list2, list1));
});
/* unused harmony default export */ var _unused_webpack_default_export = (symmetricDifference);

/***/ }),

/***/ "./node_modules/ramda/es/symmetricDifferenceWith.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/es/symmetricDifferenceWith.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat */ "./node_modules/ramda/es/concat.js");
/* harmony import */ var _differenceWith__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./differenceWith */ "./node_modules/ramda/es/differenceWith.js");




/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both. Duplication is determined according to the value
 * returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifference, R.difference, R.differenceWith
 * @example
 *
 *      var eqA = R.eqBy(R.prop('a'));
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
 *      var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
 *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
 */
var symmetricDifferenceWith = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function symmetricDifferenceWith(pred, list1, list2) {
  return Object(_concat__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_differenceWith__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(pred, list1, list2), Object(_differenceWith__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(pred, list2, list1));
});
/* unused harmony default export */ var _unused_webpack_default_export = (symmetricDifferenceWith);

/***/ }),

/***/ "./node_modules/ramda/es/tail.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/tail.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_checkForMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_checkForMethod */ "./node_modules/ramda/es/internal/_checkForMethod.js");
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slice */ "./node_modules/ramda/es/slice.js");




/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
var tail = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_internal_checkForMethod__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('tail', /*#__PURE__*/Object(_slice__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(1, Infinity)));
/* harmony default export */ __webpack_exports__["a"] = (tail);

/***/ }),

/***/ "./node_modules/ramda/es/take.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/take.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_xtake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xtake */ "./node_modules/ramda/es/internal/_xtake.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slice */ "./node_modules/ramda/es/slice.js");





/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @see R.drop
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(3, 'ramda');               //=> 'ram'
 *
 *      var personnel = [
 *        'Dave Brubeck',
 *        'Paul Desmond',
 *        'Eugene Wright',
 *        'Joe Morello',
 *        'Gerry Mulligan',
 *        'Bob Bates',
 *        'Joe Dodge',
 *        'Ron Crotty'
 *      ];
 *
 *      var takeFive = R.take(5);
 *      takeFive(personnel);
 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * @symb R.take(-1, [a, b]) = [a, b]
 * @symb R.take(0, [a, b]) = []
 * @symb R.take(1, [a, b]) = [a]
 * @symb R.take(2, [a, b]) = [a, b]
 */
var take = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(['take'], _internal_xtake__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], function take(n, xs) {
  return Object(_slice__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(0, n < 0 ? Infinity : n, xs);
}));
/* harmony default export */ __webpack_exports__["a"] = (take);

/***/ }),

/***/ "./node_modules/ramda/es/takeLast.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/takeLast.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drop */ "./node_modules/ramda/es/drop.js");



/**
 * Returns a new list containing the last `n` elements of the given list.
 * If `n > list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements to return.
 * @param {Array} xs The collection to consider.
 * @return {Array}
 * @see R.dropLast
 * @example
 *
 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(3, 'ramda');               //=> 'mda'
 */
var takeLast = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function takeLast(n, xs) {
  return Object(_drop__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(n >= 0 ? xs.length - n : 0, xs);
});
/* harmony default export */ __webpack_exports__["a"] = (takeLast);

/***/ }),

/***/ "./node_modules/ramda/es/takeLastWhile.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/takeLastWhile.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ "./node_modules/ramda/es/slice.js");



/**
 * Returns a new list containing the last `n` elements of a given list, passing
 * each value to the supplied predicate function, and terminating when the
 * predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropLastWhile, R.addIndex
 * @example
 *
 *      var isNotOne = x => x !== 1;
 *
 *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
 *
 *      R.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'
 */
var takeLastWhile = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function takeLastWhile(fn, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && fn(xs[idx])) {
    idx -= 1;
  }
  return Object(_slice__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(idx + 1, Infinity, xs);
});
/* unused harmony default export */ var _unused_webpack_default_export = (takeLastWhile);

/***/ }),

/***/ "./node_modules/ramda/es/takeWhile.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/takeWhile.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_xtakeWhile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xtakeWhile */ "./node_modules/ramda/es/internal/_xtakeWhile.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slice */ "./node_modules/ramda/es/slice.js");





/**
 * Returns a new list containing the first `n` elements of a given list,
 * passing each value to the supplied predicate function, and terminating when
 * the predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * Dispatches to the `takeWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropWhile, R.transduce, R.addIndex
 * @example
 *
 *      var isNotFour = x => x !== 4;
 *
 *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
 *
 *      R.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'
 */
var takeWhile = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(['takeWhile'], _internal_xtakeWhile__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], function takeWhile(fn, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && fn(xs[idx])) {
    idx += 1;
  }
  return Object(_slice__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(0, idx, xs);
}));
/* unused harmony default export */ var _unused_webpack_default_export = (takeWhile);

/***/ }),

/***/ "./node_modules/ramda/es/tap.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/tap.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ "./node_modules/ramda/es/internal/_dispatchable.js");
/* harmony import */ var _internal_xtap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xtap */ "./node_modules/ramda/es/internal/_xtap.js");




/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * Acts as a transducer if a transformer is given as second parameter.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> *) -> a -> a
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      var sayX = x => console.log('x is ' + x);
 *      R.tap(sayX, 100); //=> 100
 *      // logs 'x is 100'
 * @symb R.tap(f, a) = a
 */
var tap = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/Object(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])([], _internal_xtap__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], function tap(fn, x) {
  fn(x);
  return x;
}));
/* unused harmony default export */ var _unused_webpack_default_export = (tap);

/***/ }),

/***/ "./node_modules/ramda/es/test.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/test.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_cloneRegExp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_cloneRegExp */ "./node_modules/ramda/es/internal/_cloneRegExp.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_isRegExp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_isRegExp */ "./node_modules/ramda/es/internal/_isRegExp.js");
/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toString */ "./node_modules/ramda/es/toString.js");





/**
 * Determines whether a given string matches a given regular expression.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @see R.match
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */
var test = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function test(pattern, str) {
  if (!Object(_internal_isRegExp__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(pattern)) {
    throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + Object(_toString__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(pattern));
  }
  return Object(_internal_cloneRegExp__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(pattern).test(str);
});
/* unused harmony default export */ var _unused_webpack_default_export = (test);

/***/ }),

/***/ "./node_modules/ramda/es/times.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/times.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Calls an input function `n` times, returning an array containing the results
 * of those function calls.
 *
 * `fn` is passed one argument: The current value of `n`, which begins at `0`
 * and is gradually incremented to `n - 1`.
 *
 * @func
 * @memberOf R
 * @since v0.2.3
 * @category List
 * @sig (Number -> a) -> Number -> [a]
 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
 * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
 * @return {Array} An array containing the return values of all calls to `fn`.
 * @see R.repeat
 * @example
 *
 *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
 * @symb R.times(f, 0) = []
 * @symb R.times(f, 1) = [f(0)]
 * @symb R.times(f, 2) = [f(0), f(1)]
 */
var times = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function times(fn, n) {
  var len = Number(n);
  var idx = 0;
  var list;

  if (len < 0 || isNaN(len)) {
    throw new RangeError('n must be a non-negative number');
  }
  list = new Array(len);
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
});
/* harmony default export */ __webpack_exports__["a"] = (times);

/***/ }),

/***/ "./node_modules/ramda/es/toLower.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/toLower.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _invoker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoker */ "./node_modules/ramda/es/invoker.js");


/**
 * The lower case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to lower case.
 * @return {String} The lower case version of `str`.
 * @see R.toUpper
 * @example
 *
 *      R.toLower('XYZ'); //=> 'xyz'
 */
var toLower = /*#__PURE__*/Object(_invoker__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(0, 'toLowerCase');
/* unused harmony default export */ var _unused_webpack_default_export = (toLower);

/***/ }),

/***/ "./node_modules/ramda/es/toPairs.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/toPairs.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _internal_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/es/internal/_has.js");



/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @see R.fromPairs
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */
var toPairs = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function toPairs(obj) {
  var pairs = [];
  for (var prop in obj) {
    if (Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(prop, obj)) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
  }
  return pairs;
});
/* unused harmony default export */ var _unused_webpack_default_export = (toPairs);

/***/ }),

/***/ "./node_modules/ramda/es/toPairsIn.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/toPairsIn.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");


/**
 * Converts an object into an array of key, value arrays. The object's own
 * properties and prototype properties are used. Note that the order of the
 * output array is not guaranteed to be consistent across different JS
 * platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own
 *         and prototype properties.
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
 */
var toPairsIn = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function toPairsIn(obj) {
  var pairs = [];
  for (var prop in obj) {
    pairs[pairs.length] = [prop, obj[prop]];
  }
  return pairs;
});
/* unused harmony default export */ var _unused_webpack_default_export = (toPairsIn);

/***/ }),

/***/ "./node_modules/ramda/es/toString.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/toString.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _internal_toString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_toString */ "./node_modules/ramda/es/internal/_toString.js");



/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */
var toString = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function toString(val) {
  return Object(_internal_toString__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(val, []);
});
/* harmony default export */ __webpack_exports__["a"] = (toString);

/***/ }),

/***/ "./node_modules/ramda/es/toUpper.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/toUpper.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _invoker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoker */ "./node_modules/ramda/es/invoker.js");


/**
 * The upper case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to upper case.
 * @return {String} The upper case version of `str`.
 * @see R.toLower
 * @example
 *
 *      R.toUpper('abc'); //=> 'ABC'
 */
var toUpper = /*#__PURE__*/Object(_invoker__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(0, 'toUpperCase');
/* unused harmony default export */ var _unused_webpack_default_export = (toUpper);

/***/ }),

/***/ "./node_modules/ramda/es/transduce.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/transduce.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_reduce */ "./node_modules/ramda/es/internal/_reduce.js");
/* harmony import */ var _internal_xwrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_xwrap */ "./node_modules/ramda/es/internal/_xwrap.js");
/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/es/curryN.js");




/**
 * Initializes a transducer using supplied iterator function. Returns a single
 * item by iterating through the list, successively calling the transformed
 * iterator function and passing it an accumulator value and the current value
 * from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It will be
 * wrapped as a transformer to initialize the transducer. A transformer can be
 * passed directly in place of an iterator function. In both cases, iteration
 * may be stopped early with the [`R.reduced`](#reduced) function.
 *
 * A transducer is a function that accepts a transformer and returns a
 * transformer and can be composed directly.
 *
 * A transformer is an an object that provides a 2-arity reducing iterator
 * function, step, 0-arity initial value function, init, and 1-arity result
 * extraction function, result. The step function is used as the iterator
 * function in reduce. The result function is used to convert the final
 * accumulator into the return type and in most cases is
 * [`R.identity`](#identity). The init function can be used to provide an
 * initial accumulator, but is ignored by transduce.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (c -> c) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array. Wrapped as transformer, if necessary, and used to
 *        initialize the transducer
 * @param {*} acc The initial accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced, R.into
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 *
 *      var isOdd = (x) => x % 2 === 1;
 *      var firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
 *      R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
 */
var transduce = /*#__PURE__*/Object(_curryN__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(4, function transduce(xf, fn, acc, list) {
  return Object(_internal_reduce__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(xf(typeof fn === 'function' ? Object(_internal_xwrap__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(fn) : fn), acc, list);
});
/* unused harmony default export */ var _unused_webpack_default_export = (transduce);

/***/ }),

/***/ "./node_modules/ramda/es/transpose.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/transpose.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");


/**
 * Transposes the rows and columns of a 2D list.
 * When passed a list of `n` lists of length `x`,
 * returns a list of `x` lists of length `n`.
 *
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [[a]] -> [[a]]
 * @param {Array} list A 2D list
 * @return {Array} A 2D list
 * @example
 *
 *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
 *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 *
 *      // If some of the rows are shorter than the following rows, their elements are skipped:
 *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
 * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
 * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
 * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
 */
var transpose = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function transpose(outerlist) {
  var i = 0;
  var result = [];
  while (i < outerlist.length) {
    var innerlist = outerlist[i];
    var j = 0;
    while (j < innerlist.length) {
      if (typeof result[j] === 'undefined') {
        result[j] = [];
      }
      result[j].push(innerlist[j]);
      j += 1;
    }
    i += 1;
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (transpose);

/***/ }),

/***/ "./node_modules/ramda/es/traverse.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/traverse.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./node_modules/ramda/es/map.js");
/* harmony import */ var _sequence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sequence */ "./node_modules/ramda/es/sequence.js");




/**
 * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 *
 * Dispatches to the `traverse` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
 * @param {Function} of
 * @param {Function} f
 * @param {*} traversable
 * @return {*}
 * @see R.sequence
 * @example
 *
 *      // Returns `Nothing` if the given divisor is `0`
 *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
 *
 *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
 *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
 */
var traverse = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function traverse(of, f, traversable) {
  return typeof traversable['fantasy-land/traverse'] === 'function' ? traversable['fantasy-land/traverse'](f, of) : Object(_sequence__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(of, Object(_map__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(f, traversable));
});
/* unused harmony default export */ var _unused_webpack_default_export = (traverse);

/***/ }),

/***/ "./node_modules/ramda/es/trim.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/trim.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");


var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
var zeroWidth = '\u200b';
var hasProtoTrim = typeof String.prototype.trim === 'function';
/**
 * Removes (strips) whitespace from both ends of the string.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to trim.
 * @return {String} Trimmed version of `str`.
 * @example
 *
 *      R.trim('   xyz  '); //=> 'xyz'
 *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
 */
var _trim = !hasProtoTrim || /*#__PURE__*/ws.trim() || ! /*#__PURE__*/zeroWidth.trim() ? function trim(str) {
  var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
  var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
  return str.replace(beginRx, '').replace(endRx, '');
} : function trim(str) {
  return str.trim();
};
var trim = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_trim);
/* unused harmony default export */ var _unused_webpack_default_export = (trim);

/***/ }),

/***/ "./node_modules/ramda/es/tryCatch.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/tryCatch.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_arity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_arity */ "./node_modules/ramda/es/internal/_arity.js");
/* harmony import */ var _internal_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_concat */ "./node_modules/ramda/es/internal/_concat.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");




/**
 * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
 * function evaluates the `tryer`; if it does not throw, it simply returns the
 * result. If the `tryer` *does* throw, the returned function evaluates the
 * `catcher` function and returns its result. Note that for effective
 * composition with this function, both the `tryer` and `catcher` functions
 * must return the same type of results.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
 * @param {Function} tryer The function that may throw.
 * @param {Function} catcher The function that will be evaluated if `tryer` throws.
 * @return {Function} A new function that will catch exceptions and send then to the catcher.
 * @example
 *
 *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
 *      R.tryCatch(R.prop('x'), R.F)(null);      //=> false
 */
var tryCatch = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function _tryCatch(tryer, catcher) {
  return Object(_internal_arity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(tryer.length, function () {
    try {
      return tryer.apply(this, arguments);
    } catch (e) {
      return catcher.apply(this, Object(_internal_concat__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])([e], arguments));
    }
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (tryCatch);

/***/ }),

/***/ "./node_modules/ramda/es/type.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/type.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");


/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */
var type = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});
/* harmony default export */ __webpack_exports__["a"] = (type);

/***/ }),

/***/ "./node_modules/ramda/es/unapply.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/unapply.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");


/**
 * Takes a function `fn`, which takes a single array argument, and returns a
 * function which:
 *
 *   - takes any number of positional arguments;
 *   - passes these arguments to `fn` as an array; and
 *   - returns the result.
 *
 * In other words, `R.unapply` derives a variadic function from a function which
 * takes an array. `R.unapply` is the inverse of [`R.apply`](#apply).
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Function
 * @sig ([*...] -> a) -> (*... -> a)
 * @param {Function} fn
 * @return {Function}
 * @see R.apply
 * @example
 *
 *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
 * @symb R.unapply(f)(a, b) = f([a, b])
 */
var unapply = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function unapply(fn) {
  return function () {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});
/* unused harmony default export */ var _unused_webpack_default_export = (unapply);

/***/ }),

/***/ "./node_modules/ramda/es/unary.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/unary.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _nAry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nAry */ "./node_modules/ramda/es/nAry.js");



/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 1 parameter. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> b) -> (a -> b)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 1.
 * @see R.binary, R.nAry
 * @example
 *
 *      var takesTwoArgs = function(a, b) {
 *        return [a, b];
 *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.unary(takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only 1 argument is passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.unary(f)(a, b, c) = f(a)
 */
var unary = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function unary(fn) {
  return Object(_nAry__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(1, fn);
});
/* unused harmony default export */ var _unused_webpack_default_export = (unary);

/***/ }),

/***/ "./node_modules/ramda/es/uncurryN.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/uncurryN.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/es/curryN.js");



/**
 * Returns a function of arity `n` from a (manually) curried function.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Function
 * @sig Number -> (a -> b) -> (a -> c)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to uncurry.
 * @return {Function} A new function.
 * @see R.curry
 * @example
 *
 *      var addFour = a => b => c => d => a + b + c + d;
 *
 *      var uncurriedAddFour = R.uncurryN(4, addFour);
 *      uncurriedAddFour(1, 2, 3, 4); //=> 10
 */
var uncurryN = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function uncurryN(depth, fn) {
  return Object(_curryN__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(depth, function () {
    var currentDepth = 1;
    var value = fn;
    var idx = 0;
    var endIdx;
    while (currentDepth <= depth && typeof value === 'function') {
      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
      currentDepth += 1;
      idx = endIdx;
    }
    return value;
  });
});
/* unused harmony default export */ var _unused_webpack_default_export = (uncurryN);

/***/ }),

/***/ "./node_modules/ramda/es/unfold.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/unfold.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Builds a list from a seed value. Accepts an iterator function, which returns
 * either false to stop iteration or an array of length 2 containing the value
 * to add to the resulting list and the seed to be used in the next call to the
 * iterator function.
 *
 * The iterator function receives one argument: *(seed)*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a -> [b]) -> * -> [b]
 * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
 *        either false to quit iteration or an array of length two to proceed. The element
 *        at index 0 of this array will be added to the resulting array, and the element
 *        at index 1 will be passed to the next call to `fn`.
 * @param {*} seed The seed value.
 * @return {Array} The final list.
 * @example
 *
 *      var f = n => n > 50 ? false : [-n, n + 10];
 *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
 * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
 */
var unfold = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function unfold(fn, seed) {
  var pair = fn(seed);
  var result = [];
  while (pair && pair.length) {
    result[result.length] = pair[0];
    pair = fn(pair[1]);
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (unfold);

/***/ }),

/***/ "./node_modules/ramda/es/union.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/union.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_concat */ "./node_modules/ramda/es/internal/_concat.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compose */ "./node_modules/ramda/es/compose.js");
/* harmony import */ var _uniq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uniq */ "./node_modules/ramda/es/uniq.js");





/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @example
 *
 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 */
var union = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(_compose__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_uniq__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _internal_concat__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]));
/* unused harmony default export */ var _unused_webpack_default_export = (union);

/***/ }),

/***/ "./node_modules/ramda/es/unionWith.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/unionWith.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_concat */ "./node_modules/ramda/es/internal/_concat.js");
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _uniqWith__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uniqWith */ "./node_modules/ramda/es/uniqWith.js");




/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list. Duplication is determined according to the value returned by
 * applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [*] -> [*] -> [*]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @see R.union
 * @example
 *
 *      var l1 = [{a: 1}, {a: 2}];
 *      var l2 = [{a: 1}, {a: 4}];
 *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
 */
var unionWith = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function unionWith(pred, list1, list2) {
  return Object(_uniqWith__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(pred, Object(_internal_concat__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(list1, list2));
});
/* unused harmony default export */ var _unused_webpack_default_export = (unionWith);

/***/ }),

/***/ "./node_modules/ramda/es/uniq.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/uniq.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./node_modules/ramda/es/identity.js");
/* harmony import */ var _uniqBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uniqBy */ "./node_modules/ramda/es/uniqBy.js");



/**
 * Returns a new list containing only one copy of each element in the original
 * list. [`R.equals`](#equals) is used to determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */
var uniq = /*#__PURE__*/Object(_uniqBy__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_identity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* harmony default export */ __webpack_exports__["a"] = (uniq);

/***/ }),

/***/ "./node_modules/ramda/es/uniqBy.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/uniqBy.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_Set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_Set */ "./node_modules/ramda/es/internal/_Set.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");



/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. [`R.equals`](#equals) is used for comparison.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */
var uniqBy = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function uniqBy(fn, list) {
  var set = new _internal_Set__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();
  var result = [];
  var idx = 0;
  var appliedItem, item;

  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);
    if (set.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (uniqBy);

/***/ }),

/***/ "./node_modules/ramda/es/uniqWith.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/uniqWith.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_containsWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_containsWith */ "./node_modules/ramda/es/internal/_containsWith.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");



/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied predicate to
 * two list elements. Prefers the first item if two items compare equal based
 * on the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category List
 * @sig ((a, a) -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      var strEq = R.eqBy(String);
 *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
 *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
 *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
 *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
 */
var uniqWith = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function uniqWith(pred, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var item;
  while (idx < len) {
    item = list[idx];
    if (!Object(_internal_containsWith__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(pred, item, result)) {
      result[result.length] = item;
    }
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (uniqWith);

/***/ }),

/***/ "./node_modules/ramda/es/unless.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/unless.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the `whenFalseFn` function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred        A predicate function
 * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
 *                               to a falsy value.
 * @param {*}        x           An object to test with the `pred` function and
 *                               pass to `whenFalseFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
 * @see R.ifElse, R.when
 * @example
 *
 *      let safeInc = R.unless(R.isNil, R.inc);
 *      safeInc(null); //=> null
 *      safeInc(1); //=> 2
 */
var unless = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function unless(pred, whenFalseFn, x) {
  return pred(x) ? x : whenFalseFn(x);
});
/* unused harmony default export */ var _unused_webpack_default_export = (unless);

/***/ }),

/***/ "./node_modules/ramda/es/unnest.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/unnest.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_identity */ "./node_modules/ramda/es/internal/_identity.js");
/* harmony import */ var _chain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chain */ "./node_modules/ramda/es/chain.js");



/**
 * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
 * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain c => c (c a) -> c a
 * @param {*} list
 * @return {*}
 * @see R.flatten, R.chain
 * @example
 *
 *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
 *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
 */
var unnest = /*#__PURE__*/Object(_chain__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_internal_identity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* unused harmony default export */ var _unused_webpack_default_export = (unnest);

/***/ }),

/***/ "./node_modules/ramda/es/until.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/until.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


/**
 * Takes a predicate, a transformation function, and an initial value,
 * and returns a value of the same type as the initial value.
 * It does so by applying the transformation until the predicate is satisfied,
 * at which point it returns the satisfactory value.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred A predicate function
 * @param {Function} fn The iterator function
 * @param {*} init Initial value
 * @return {*} Final value that satisfies predicate
 * @example
 *
 *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
 */
var until = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function until(pred, fn, init) {
  var val = init;
  while (!pred(val)) {
    val = fn(val);
  }
  return val;
});
/* unused harmony default export */ var _unused_webpack_default_export = (until);

/***/ }),

/***/ "./node_modules/ramda/es/update.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/update.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");
/* harmony import */ var _adjust__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adjust */ "./node_modules/ramda/es/adjust.js");
/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./always */ "./node_modules/ramda/es/always.js");




/**
 * Returns a new copy of the array with the element at the provided index
 * replaced with the given value.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} idx The index to update.
 * @param {*} x The value to exist at the given index of the returned array.
 * @param {Array|Arguments} list The source array-like object to be updated.
 * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
 * @see R.adjust
 * @example
 *
 *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
 *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
 * @symb R.update(-1, a, [b, c]) = [b, a]
 * @symb R.update(0, a, [b, c]) = [a, c]
 * @symb R.update(1, a, [b, c]) = [b, a]
 */
var update = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function update(idx, x, list) {
  return Object(_adjust__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_always__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(x), idx, list);
});
/* harmony default export */ __webpack_exports__["a"] = (update);

/***/ }),

/***/ "./node_modules/ramda/es/useWith.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/useWith.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curryN */ "./node_modules/ramda/es/curryN.js");



/**
 * Accepts a function `fn` and a list of transformer functions and returns a
 * new curried function. When the new function is invoked, it calls the
 * function `fn` with parameters consisting of the result of calling each
 * supplied handler on successive arguments to the new function.
 *
 * If more arguments are passed to the returned function than transformer
 * functions, those arguments are passed directly to `fn` as additional
 * parameters. If you expect additional arguments that don't need to be
 * transformed, although you can ignore them, it's best to pass an identity
 * function so that the new function reports the correct arity.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} fn The function to wrap.
 * @param {Array} transformers A list of transformer functions
 * @return {Function} The wrapped function.
 * @see R.converge
 * @example
 *
 *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
 *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
 *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
 *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
 * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
 */
var useWith = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function useWith(fn, transformers) {
  return Object(_curryN__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(transformers.length, function () {
    var args = [];
    var idx = 0;
    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
  });
});
/* harmony default export */ __webpack_exports__["a"] = (useWith);

/***/ }),

/***/ "./node_modules/ramda/es/values.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/values.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ "./node_modules/ramda/es/keys.js");



/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @see R.valuesIn, R.keys
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */
var values = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function values(obj) {
  var props = Object(_keys__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj);
  var len = props.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props[idx]];
    idx += 1;
  }
  return vals;
});
/* harmony default export */ __webpack_exports__["a"] = (values);

/***/ }),

/***/ "./node_modules/ramda/es/valuesIn.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/valuesIn.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ "./node_modules/ramda/es/internal/_curry1.js");


/**
 * Returns a list of all the properties, including prototype properties, of the
 * supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own and prototype properties.
 * @see R.values, R.keysIn
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.valuesIn(f); //=> ['X', 'Y']
 */
var valuesIn = /*#__PURE__*/Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function valuesIn(obj) {
  var prop;
  var vs = [];
  for (prop in obj) {
    vs[vs.length] = obj[prop];
  }
  return vs;
});
/* unused harmony default export */ var _unused_webpack_default_export = (valuesIn);

/***/ }),

/***/ "./node_modules/ramda/es/view.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/view.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


// `Const` is a functor that effectively ignores the function given to `map`.
var Const = function (x) {
  return { value: x, 'fantasy-land/map': function () {
      return this;
    } };
};

/**
 * Returns a "view" of the given data structure, determined by the given lens.
 * The lens's focus determines which portion of the data structure is visible.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> s -> a
 * @param {Lens} lens
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});  //=> 1
 *      R.view(xLens, {x: 4, y: 2});  //=> 4
 */
var view = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function view(lens, x) {
  // Using `Const` effectively ignores the setter function of the `lens`,
  // leaving the value returned by the getter function unmodified.
  return lens(Const)(x).value;
});
/* unused harmony default export */ var _unused_webpack_default_export = (view);

/***/ }),

/***/ "./node_modules/ramda/es/when.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/when.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the `whenTrueFn` function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred       A predicate function
 * @param {Function} whenTrueFn A function to invoke when the `condition`
 *                              evaluates to a truthy value.
 * @param {*}        x          An object to test with the `pred` function and
 *                              pass to `whenTrueFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
 * @see R.ifElse, R.unless
 * @example
 *
 *      // truncate :: String -> String
 *      var truncate = R.when(
 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
 *        R.pipe(R.take(10), R.append('…'), R.join(''))
 *      );
 *      truncate('12345');         //=> '12345'
 *      truncate('0123456789ABC'); //=> '0123456789…'
 */
var when = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function when(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});
/* unused harmony default export */ var _unused_webpack_default_export = (when);

/***/ }),

/***/ "./node_modules/ramda/es/where.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/where.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _internal_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_has */ "./node_modules/ramda/es/internal/_has.js");



/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 *
 * `where` is well suited to declaratively expressing constraints for other
 * functions such as [`filter`](#filter) and [`find`](#find).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.propSatisfies, R.whereEq
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.where({
 *        a: R.equals('foo'),
 *        b: R.complement(R.equals('bar')),
 *        x: R.gt(R.__, 10),
 *        y: R.lt(R.__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 */
var where = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function where(spec, testObj) {
  for (var prop in spec) {
    if (Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(prop, spec) && !spec[prop](testObj[prop])) {
      return false;
    }
  }
  return true;
});
/* harmony default export */ __webpack_exports__["a"] = (where);

/***/ }),

/***/ "./node_modules/ramda/es/whereEq.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/whereEq.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equals */ "./node_modules/ramda/es/equals.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ "./node_modules/ramda/es/map.js");
/* harmony import */ var _where__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./where */ "./node_modules/ramda/es/where.js");





/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec, false otherwise. An object satisfies the spec if, for each of the
 * spec's own properties, accessing that property of the object gives the same
 * value (in [`R.equals`](#equals) terms) as accessing that property of the
 * spec.
 *
 * `whereEq` is a specialization of [`where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @sig {String: *} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.propEq, R.where
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.whereEq({a: 1, b: 2});
 *
 *      pred({a: 1});              //=> false
 *      pred({a: 1, b: 2});        //=> true
 *      pred({a: 1, b: 2, c: 3});  //=> true
 *      pred({a: 1, b: 1});        //=> false
 */
var whereEq = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function whereEq(spec, testObj) {
  return Object(_where__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_map__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_equals__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], spec), testObj);
});
/* unused harmony default export */ var _unused_webpack_default_export = (whereEq);

/***/ }),

/***/ "./node_modules/ramda/es/without.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/without.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_contains */ "./node_modules/ramda/es/internal/_contains.js");
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");
/* harmony import */ var _flip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flip */ "./node_modules/ramda/es/flip.js");
/* harmony import */ var _reject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reject */ "./node_modules/ramda/es/reject.js");





/**
 * Returns a new list without values in the first argument.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} list1 The values to be removed from `list2`.
 * @param {Array} list2 The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @see R.transduce, R.difference
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */
var without = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (xs, list) {
  return Object(_reject__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_flip__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_internal_contains__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(xs), list);
});
/* unused harmony default export */ var _unused_webpack_default_export = (without);

/***/ }),

/***/ "./node_modules/ramda/es/xprod.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/xprod.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Creates a new list out of the two supplied by creating each possible pair
 * from the lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The list made by combining each possible pair from
 *         `as` and `bs` into pairs (`[a, b]`).
 * @example
 *
 *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]
 */
var xprod = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function xprod(a, b) {
  // = xprodWith(prepend); (takes about 3 times as long...)
  var idx = 0;
  var ilen = a.length;
  var j;
  var jlen = b.length;
  var result = [];
  while (idx < ilen) {
    j = 0;
    while (j < jlen) {
      result[result.length] = [a[idx], b[j]];
      j += 1;
    }
    idx += 1;
  }
  return result;
});
/* unused harmony default export */ var _unused_webpack_default_export = (xprod);

/***/ }),

/***/ "./node_modules/ramda/es/zip.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/zip.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Creates a new list out of the two supplied by pairing up equally-positioned
 * items from both lists. The returned list is truncated to the length of the
 * shorter of the two input lists.
 * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
 * @example
 *
 *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
 */
var zip = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function zip(a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = [a[idx], b[idx]];
    idx += 1;
  }
  return rv;
});
/* unused harmony default export */ var _unused_webpack_default_export = (zip);

/***/ }),

/***/ "./node_modules/ramda/es/zipObj.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/zipObj.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/es/internal/_curry2.js");


/**
 * Creates a new object out of a list of keys and a list of values.
 * Key/value pairing is truncated to the length of the shorter of the two lists.
 * Note: `zipObj` is equivalent to `pipe(zip, fromPairs)`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [String] -> [*] -> {String: *}
 * @param {Array} keys The array that will be properties on the output object.
 * @param {Array} values The list of values on the output object.
 * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
 * @example
 *
 *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
 */
var zipObj = /*#__PURE__*/Object(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function zipObj(keys, values) {
  var idx = 0;
  var len = Math.min(keys.length, values.length);
  var out = {};
  while (idx < len) {
    out[keys[idx]] = values[idx];
    idx += 1;
  }
  return out;
});
/* unused harmony default export */ var _unused_webpack_default_export = (zipObj);

/***/ }),

/***/ "./node_modules/ramda/es/zipWith.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/zipWith.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ "./node_modules/ramda/es/internal/_curry3.js");


/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 *
 * @function
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> c) -> [a] -> [b] -> [c]
 * @param {Function} fn The function used to combine the two elements into one value.
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
 *         using `fn`.
 * @example
 *
 *      var f = (x, y) => {
 *        // ...
 *      };
 *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
 */
var zipWith = /*#__PURE__*/Object(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function zipWith(fn, a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = fn(a[idx], b[idx]);
    idx += 1;
  }
  return rv;
});
/* unused harmony default export */ var _unused_webpack_default_export = (zipWith);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map