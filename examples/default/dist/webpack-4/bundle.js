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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

/***/ "./assert.js":
/*!*******************!*\
  !*** ./assert.js ***!
  \*******************/
/*! exports provided: equal, deepEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"equal\", function() { return equal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepEqual\", function() { return deepEqual; });\n\nfunction equal(a, b) {\n  return true;\n}\n\nfunction deepEqual(a, b) {\n  return true;\n}\n\n\n//# sourceURL=webpack:///./assert.js?");

/***/ }),

/***/ "./example.js":
/*!********************!*\
  !*** ./example.js ***!
  \********************/
/*! exports provided: myFunction, aaa, myFun, ExportCls1, ExportCls2, default, equal, deepEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myFunction\", function() { return myFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aaa\", function() { return aaa; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myFun\", function() { return hisFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExportCls1\", function() { return ExportCls1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExportCls2\", function() { return ExportCls2; });\n/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert */ \"./assert.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"equal\", function() { return _assert__WEBPACK_IMPORTED_MODULE_0__[\"equal\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepEqual\", function() { return _assert__WEBPACK_IMPORTED_MODULE_0__[\"deepEqual\"]; });\n\n// const assert = require('./assert')\n\n\nfunction myFunction() {\n  function it() {\n    Object(_assert__WEBPACK_IMPORTED_MODULE_0__[\"equal\"])(1, arguments[0]);\n  }\n  Object(_assert__WEBPACK_IMPORTED_MODULE_0__[\"deepEqual\"])(1, 1);\n  it();\n}\n\nfunction hisFunction() {\n  console.log(\"his\");\n}\n\nconst what = function () {\n  Object(_assert__WEBPACK_IMPORTED_MODULE_0__[\"equal\"])();\n}\n\nconst bb = hisFunction() + Object(_assert__WEBPACK_IMPORTED_MODULE_0__[\"equal\"])();\n\nconst aaa = hisFunction() + Object(_assert__WEBPACK_IMPORTED_MODULE_0__[\"equal\"])()\n\n\n\n\n// export default aa  = 3;\n// export default function aaa () {}\n\nfunction fun1() {\n  Object(_assert__WEBPACK_IMPORTED_MODULE_0__[\"deepEqual\"])(1, 1);\n}\n\nfunction fun2() {\n  fun1();\n}\n\nfunction fun3() {\n  fun2();\n}\n\nfunction fun4() {\n  fun3();\n}\n\nclass ExportCls1 {\n\n  constructor() {\n    fun4();\n  }\n\n}\n\nclass ExportCls2 {\n\n  add() {\n    this.name = equal;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n\n});\n\n\n//# sourceURL=webpack:///./example.js?");

/***/ })

/******/ });