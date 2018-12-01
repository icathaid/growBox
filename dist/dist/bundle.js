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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/grow.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/grow.js":
/*!*********************!*\
  !*** ./src/grow.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lights_lights_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lights/lights.js */ \"./src/lights/lights.js\");\n/* harmony import */ var _lights_lights_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lights_lights_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _water_water_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./water/water.js */ \"./src/water/water.js\");\n\n\nconsole.log('HEY LOOK AT ME');\nconsole.log(_lights_lights_js__WEBPACK_IMPORTED_MODULE_0__[\"person\"].name);\n\nObject(_water_water_js__WEBPACK_IMPORTED_MODULE_1__[\"water\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3Jvdy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ncm93LmpzPzA3ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwZXJzb259IGZyb20gJy4vbGlnaHRzL2xpZ2h0cy5qcyc7XG5pbXBvcnQge3dhdGVyfSBmcm9tICcuL3dhdGVyL3dhdGVyLmpzJztcbmNvbnNvbGUubG9nKCdIRVkgTE9PSyBBVCBNRScpO1xuY29uc29sZS5sb2cocGVyc29uLm5hbWUpO1xuXG53YXRlcigpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/grow.js\n");

/***/ }),

/***/ "./src/lights/lights.js":
/*!******************************!*\
  !*** ./src/lights/lights.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let person = {\n  name: 'bill'\n};\n\nmodule.exports = {person};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlnaHRzL2xpZ2h0cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9saWdodHMvbGlnaHRzLmpzPzc2ZjgiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHBlcnNvbiA9IHtcbiAgbmFtZTogJ2JpbGwnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtwZXJzb259OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lights/lights.js\n");

/***/ }),

/***/ "./src/water/water.js":
/*!****************************!*\
  !*** ./src/water/water.js ***!
  \****************************/
/*! exports provided: water */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"water\", function() { return water; });\nfunction water(){\n  return console.log('water running');\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2F0ZXIvd2F0ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2F0ZXIvd2F0ZXIuanM/OGMyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3YXRlcigpe1xuICByZXR1cm4gY29uc29sZS5sb2coJ3dhdGVyIHJ1bm5pbmcnKTtcbn1cblxuZXhwb3J0IHt3YXRlcn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/water/water.js\n");

/***/ })

/******/ });