/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/modal.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/modal.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.modal-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2222227a;
  z-index: 2;
}

.modal {
  display: flex;
  flex-direction: column;
  width: min(500px, 80vw);
  border: 1px solid var(--text-color);
  border-radius: .5rem;
  background-color: var(--side-bar-color);
  color: var(--text-color);
}

.modal-header {
  font-size: 1.1rem;
  font-weight: bold;
  padding: .5rem;
}

.content-modal {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
}

.input-container {
  display: flex;
}

.input-container input {
  background-color: transparent;
  border-radius: .2rem;
  border: 1px solid var(--text-color);
  color: var(--text-color);
  padding: .3rem;
  outline: none;
}

.field {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: .5rem 0;
  gap: .5rem;
}

.btns-container {
  display: flex;
  gap: .2rem;
  align-self: flex-end;
}

.btns-container button {
  width: 80px;
  padding: .2rem;
  border: none;
  border-radius: .2rem;
  cursor: pointer;
}

.btns-container .blue {
  background-color: var(--primary-color);
  color: white;
}`, "",{"version":3,"sources":["webpack://./src/style/modal.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,aAAa;EACb,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,2BAA2B;EAC3B,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mCAAmC;EACnC,oBAAoB;EACpB,uCAAuC;EACvC,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,oBAAoB;EACpB,mCAAmC;EACnC,wBAAwB;EACxB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,YAAY;EACZ,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,sCAAsC;EACtC,YAAY;AACd","sourcesContent":[".modal-container {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #2222227a;\r\n  z-index: 2;\r\n}\r\n\r\n.modal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: min(500px, 80vw);\r\n  border: 1px solid var(--text-color);\r\n  border-radius: .5rem;\r\n  background-color: var(--side-bar-color);\r\n  color: var(--text-color);\r\n}\r\n\r\n.modal-header {\r\n  font-size: 1.1rem;\r\n  font-weight: bold;\r\n  padding: .5rem;\r\n}\r\n\r\n.content-modal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.input-container {\r\n  display: flex;\r\n}\r\n\r\n.input-container input {\r\n  background-color: transparent;\r\n  border-radius: .2rem;\r\n  border: 1px solid var(--text-color);\r\n  color: var(--text-color);\r\n  padding: .3rem;\r\n  outline: none;\r\n}\r\n\r\n.field {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: .5rem 0;\r\n  gap: .5rem;\r\n}\r\n\r\n.btns-container {\r\n  display: flex;\r\n  gap: .2rem;\r\n  align-self: flex-end;\r\n}\r\n\r\n.btns-container button {\r\n  width: 80px;\r\n  padding: .2rem;\r\n  border: none;\r\n  border-radius: .2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.btns-container .blue {\r\n  background-color: var(--primary-color);\r\n  color: white;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/side-bar.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/side-bar.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.side-bar-container {
	position: fixed;
	height: calc(100vh - var(--top-bar-height));
	width: var(--side-bar-width);
	background-color: var(--side-bar-color);
	z-index: 1;
	padding-top: 2rem;
	overflow-y: scroll;
	transition: transform var(--transition-time) ease-in-out;
}

.side-bar-shadow {
	height: calc(100vh - var(--top-bar-height));
	width: var(--side-bar-width);
	transition: width var(--transition-time) ease-in-out;
}

.side-bar {
	padding: 0 1rem;
	color: var(--text-color);
}

span {
	display: flex;
	align-items: center;
}

.option {
	display: flex;
	align-items: center;
	gap: 0.3rem;
	padding: 0.5rem;
	border-radius: 0.5rem;
	cursor: pointer;
}

.option:hover {
	background-color: var(--hover-dark-color);
}

.icon {
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 25px;
	cursor: pointer;
	border-radius: 0.5rem;
}

.icon svg {
	height: 25px;
	width: 25px;
	fill: var(--text-color);
	stroke: var(--text-color);
}

.name {
	flex: 1;
}

.standard-options {
	margin-bottom: 2rem;
}

.projects-container {
	flex: 1;
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
}

.projects-header {
	display: flex;
	font-size: 1rem;
	align-items: center;
	padding: 0.5rem;
	border-radius: 0.5rem;
	justify-content: space-between;
}

.projects {
	flex: 1;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	padding-inline: 0.5rem 0;
	word-break: break-all;
}

.open {
	left: 0;
}

.close {
	transform: translateX(calc(-1 * var(--side-bar-width)));
}
`, "",{"version":3,"sources":["webpack://./src/style/side-bar.css"],"names":[],"mappings":"AAAA;CACC,eAAe;CACf,2CAA2C;CAC3C,4BAA4B;CAC5B,uCAAuC;CACvC,UAAU;CACV,iBAAiB;CACjB,kBAAkB;CAClB,wDAAwD;AACzD;;AAEA;CACC,2CAA2C;CAC3C,4BAA4B;CAC5B,oDAAoD;AACrD;;AAEA;CACC,eAAe;CACf,wBAAwB;AACzB;;AAEA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,WAAW;CACX,eAAe;CACf,qBAAqB;CACrB,eAAe;AAChB;;AAEA;CACC,yCAAyC;AAC1C;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,eAAe;CACf,eAAe;CACf,qBAAqB;AACtB;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,uBAAuB;CACvB,yBAAyB;AAC1B;;AAEA;CACC,OAAO;AACR;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,OAAO;CACP,aAAa;CACb,sBAAsB;CACtB,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,eAAe;CACf,mBAAmB;CACnB,eAAe;CACf,qBAAqB;CACrB,8BAA8B;AAC/B;;AAEA;CACC,OAAO;CACP,aAAa;CACb,sBAAsB;CACtB,eAAe;CACf,wBAAwB;CACxB,qBAAqB;AACtB;;AAEA;CACC,OAAO;AACR;;AAEA;CACC,uDAAuD;AACxD","sourcesContent":[".side-bar-container {\r\n\tposition: fixed;\r\n\theight: calc(100vh - var(--top-bar-height));\r\n\twidth: var(--side-bar-width);\r\n\tbackground-color: var(--side-bar-color);\r\n\tz-index: 1;\r\n\tpadding-top: 2rem;\r\n\toverflow-y: scroll;\r\n\ttransition: transform var(--transition-time) ease-in-out;\r\n}\r\n\r\n.side-bar-shadow {\r\n\theight: calc(100vh - var(--top-bar-height));\r\n\twidth: var(--side-bar-width);\r\n\ttransition: width var(--transition-time) ease-in-out;\r\n}\r\n\r\n.side-bar {\r\n\tpadding: 0 1rem;\r\n\tcolor: var(--text-color);\r\n}\r\n\r\nspan {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.option {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 0.3rem;\r\n\tpadding: 0.5rem;\r\n\tborder-radius: 0.5rem;\r\n\tcursor: pointer;\r\n}\r\n\r\n.option:hover {\r\n\tbackground-color: var(--hover-dark-color);\r\n}\r\n\r\n.icon {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 25px;\r\n\tcursor: pointer;\r\n\tborder-radius: 0.5rem;\r\n}\r\n\r\n.icon svg {\r\n\theight: 25px;\r\n\twidth: 25px;\r\n\tfill: var(--text-color);\r\n\tstroke: var(--text-color);\r\n}\r\n\r\n.name {\r\n\tflex: 1;\r\n}\r\n\r\n.standard-options {\r\n\tmargin-bottom: 2rem;\r\n}\r\n\r\n.projects-container {\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmargin-bottom: 1rem;\r\n}\r\n\r\n.projects-header {\r\n\tdisplay: flex;\r\n\tfont-size: 1rem;\r\n\talign-items: center;\r\n\tpadding: 0.5rem;\r\n\tborder-radius: 0.5rem;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.projects {\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tflex-wrap: wrap;\r\n\tpadding-inline: 0.5rem 0;\r\n\tword-break: break-all;\r\n}\r\n\r\n.open {\r\n\tleft: 0;\r\n}\r\n\r\n.close {\r\n\ttransform: translateX(calc(-1 * var(--side-bar-width)));\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/top-bar.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/top-bar.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.top-bar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;
  width: 100%;
  background-color: var(--primary-color);
  position: fixed;
  top: 0;
  left: 0;
  padding: .4rem 1.5rem;
  height: var(--top-bar-height);
}

.top-bar-container svg {
  width: 30px;
  height: 30px;
  fill: #ffffffc7;
}

.burger-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: .2rem;
}

.burger-menu svg{
  stroke: white;
}

.quick-search {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff5d;
  border-radius: .2rem;
  gap: 5px;
  color: #ffffffc7;
} 

.top-bar-container input {
  outline: none;
  border: none;
  background-color: transparent;
  width: 50vw;
  max-width: 500px;
  font-size: .9rem;
  color: var(--text-color);
}

input::placeholder {
  color: white;
  opacity: 1;
}

.quick-search:hover {
  background-color: var(--hover-light-color);
}

.toggle-theme {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffffa8;
  border-radius: 1.2rem;
  padding:  0 .3rem;
  gap: .2rem;
}

.toggle-theme svg {
  width: 23px;
}

.btn {
  cursor: pointer;
}

.toggle-theme .circle {
  position: absolute;
  right: .4rem;
  background-color: var(--secondary-color);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  transition: transform .5s ease;
}

.btn:hover {
  background-color: var(--hover-light-color);
}

@media screen and (max-width: 600px ) {
  .top-bar-container {
    justify-content: left;
    gap: 2rem;
  }
  .quick-search {
    flex: 1;
  }
  input {
    flex: 1;
  }
}`, "",{"version":3,"sources":["webpack://./src/style/top-bar.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,oBAAoB;EACpB,WAAW;EACX,sCAAsC;EACtC,eAAe;EACf,MAAM;EACN,OAAO;EACP,qBAAqB;EACrB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,qBAAqB;EACrB,oBAAoB;EACpB,QAAQ;EACR,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,6BAA6B;EAC7B,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,2BAA2B;EAC3B,qBAAqB;EACrB,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,wCAAwC;EACxC,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE;IACE,qBAAqB;IACrB,SAAS;EACX;EACA;IACE,OAAO;EACT;EACA;IACE,OAAO;EACT;AACF","sourcesContent":[".top-bar-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-inline: 1rem;\r\n  width: 100%;\r\n  background-color: var(--primary-color);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  padding: .4rem 1.5rem;\r\n  height: var(--top-bar-height);\r\n}\r\n\r\n.top-bar-container svg {\r\n  width: 30px;\r\n  height: 30px;\r\n  fill: #ffffffc7;\r\n}\r\n\r\n.burger-menu {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: .2rem;\r\n}\r\n\r\n.burger-menu svg{\r\n  stroke: white;\r\n}\r\n\r\n.quick-search {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: #ffffff5d;\r\n  border-radius: .2rem;\r\n  gap: 5px;\r\n  color: #ffffffc7;\r\n} \r\n\r\n.top-bar-container input {\r\n  outline: none;\r\n  border: none;\r\n  background-color: transparent;\r\n  width: 50vw;\r\n  max-width: 500px;\r\n  font-size: .9rem;\r\n  color: var(--text-color);\r\n}\r\n\r\ninput::placeholder {\r\n  color: white;\r\n  opacity: 1;\r\n}\r\n\r\n.quick-search:hover {\r\n  background-color: var(--hover-light-color);\r\n}\r\n\r\n.toggle-theme {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 1px solid #ffffffa8;\r\n  border-radius: 1.2rem;\r\n  padding:  0 .3rem;\r\n  gap: .2rem;\r\n}\r\n\r\n.toggle-theme svg {\r\n  width: 23px;\r\n}\r\n\r\n.btn {\r\n  cursor: pointer;\r\n}\r\n\r\n.toggle-theme .circle {\r\n  position: absolute;\r\n  right: .4rem;\r\n  background-color: var(--secondary-color);\r\n  border-radius: 50%;\r\n  width: 20px;\r\n  height: 20px;\r\n  transition: transform .5s ease;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: var(--hover-light-color);\r\n}\r\n\r\n@media screen and (max-width: 600px ) {\r\n  .top-bar-container {\r\n    justify-content: left;\r\n    gap: 2rem;\r\n  }\r\n  .quick-search {\r\n    flex: 1;\r\n  }\r\n  input {\r\n    flex: 1;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/modal.css":
/*!*****************************!*\
  !*** ./src/style/modal.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/side-bar.css":
/*!********************************!*\
  !*** ./src/style/side-bar.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_side_bar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./side-bar.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/side-bar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_side_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_side_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_side_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_side_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/top-bar.css":
/*!*******************************!*\
  !*** ./src/style/top-bar.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_top_bar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./top-bar.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/top-bar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_top_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_top_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_top_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_top_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Projects/projects.js":
/*!**********************************!*\
  !*** ./src/Projects/projects.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsModule: () => (/* binding */ ProjectsModule)
/* harmony export */ });
const ProjectsModule = (function ProjectsModule() {
	const Projects = [];

	function addProject(name) {
		Projects.push(Project(name));
	}

	function getAllProjects() {
		return Projects;
	}

	function getProject(name) {
		let index = findIndex(name);
		return Projects[index];
	}

	function findIndex(name) {
		return Projects.findIndex((project) => project.name === name);
	}

	function findProject(name) {
		return Projects.find((project) => project.name === name);
	}

	function removeProject(name) {
		const projectIndex = findIndex(name);
		Projects.splice(projectIndex, 1);
	}

	return {
		addProject,
		getAllProjects,
		getProject,
		findProject,
		removeProject,
	};
})();

function Project(name) {
	const tasks = [];

	function addTask(title, description, dueDate, priority) {
		tasks.push(Task(title, description, dueDate, priority));
	}

	function getTasks() {
		return tasks;
	}

	return {
		name: name,
		addTask,
		getTasks,
	};
}

function Task(title, description, dueDate, priority) {
	return {
		title: title,
		description: description,
		dueDate: dueDate,
		priority: priority,
		addDate: getDate(),
	};
}

function getDate() {
	const fullDate = new Date();
	const day = fullDate.getDate();
	const month = fullDate.getMonth();
	const year = fullDate.getFullYear();

	return {
		day: day,
		month: month + 1,
		year: year,
	};
}




/***/ }),

/***/ "./src/ui-module/UI.js":
/*!*****************************!*\
  !*** ./src/ui-module/UI.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UI: () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _top_bar_top_bar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-bar/top-bar.js */ "./src/ui-module/top-bar/top-bar.js");
/* harmony import */ var _side_bar_side_bar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-bar/side-bar.js */ "./src/ui-module/side-bar/side-bar.js");
/* harmony import */ var _modals_project_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/project-modal.js */ "./src/ui-module/modals/project-modal.js");
/* harmony import */ var _Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Projects/projects.js */ "./src/Projects/projects.js");
/* harmony import */ var _svgs_svgs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svgs/svgs.js */ "./src/ui-module/svgs/svgs.js");






const UI = (function () {
	const page = document.querySelector('.page-container');
	const topBar = (0,_top_bar_top_bar_js__WEBPACK_IMPORTED_MODULE_0__.generateTopBar)();
	const sideBar = (0,_side_bar_side_bar_js__WEBPACK_IMPORTED_MODULE_1__.generateSideBar)();
	const projectModal = (0,_modals_project_modal_js__WEBPACK_IMPORTED_MODULE_2__.generateProjectModal)();

	function init() {
		page.appendChild(topBar);
		page.appendChild(sideBar[1]);
		page.appendChild(sideBar[0]);
		addEvents();
		addAllProjects();
	}

	function addEvents() {
		addMenuEvent();
		addToggleThemeEvent();
		modalProjectEvents();
	}

	function addMenuEvent() {
		const bugerMenu = topBar.querySelector('#burgerMenu');
		bugerMenu.addEventListener('click', openCloseSideBar);
		window.addEventListener('resize', openCloseShadow);
	}

	function openCloseSideBar() {
		const sideBarContainer = sideBar[0];
		if (isOpen(sideBarContainer)) {
			sideBarContainer.classList.add('close');
			sideBarContainer.classList.remove('open');
			openCloseShadow(false);
		} else {
			sideBarContainer.classList.add('open');
			sideBarContainer.classList.remove('close');
			openCloseShadow(true);
		}
	}

	function isOpen(element) {
		return element.classList.contains('open');
	}

	function openCloseShadow(status) {
		const sideBarShadow = sideBar[1];
		const sideBarContainer = sideBar[0];

		if (window.innerWidth < 800 || status === false) {
			sideBarShadow.style.width = '0';
		}

		if (
			window.innerWidth >= 800 &&
			(isOpen(sideBarContainer) || status === true)
		) {
			sideBarShadow.style.width = 'var(--side-bar-width)';
		}
	}

	function addToggleThemeEvent() {
		const toggleBtn = topBar.querySelector('.toggle-theme');
		toggleBtn.addEventListener('click', changeTheme);
	}

	function changeTheme() {
		let theme = document.documentElement;
		if (isTheme('dark')) {
			theme.classList.remove('dark');
			moveToggle();
		} else {
			theme.classList.add('dark');
			moveToggle();
		}
	}

	function isTheme(theme) {
		return document.documentElement.classList.contains(theme);
	}

	function moveToggle() {
		const circle = topBar.querySelector('#toggle-circle');
		if (isTheme('dark')) {
			circle.style.transform = 'translateX(-26.5px)';
		} else {
			circle.style.transform = 'translateX(0)';
		}
	}

	function modalProjectEvents() {
		const plus = sideBar[0].querySelector('#project-modal');
		const cancelBtn = projectModal.querySelector('#close-project-modal');
		const addBtn = projectModal.querySelector('#add-project');

		plus.addEventListener('click', openProjectModal);
		cancelBtn.addEventListener('click', closeProjectModal);
		addBtn.addEventListener('click', addProject);
	}

	function openProjectModal() {
		page.appendChild(projectModal);
		projectModal.querySelector('input').focus();
	}

	function closeProjectModal() {
		page.removeChild(projectModal);
		projectModal.querySelector('input').value = '';
	}

	function addProject() {
		let name = projectModal.querySelector('input').value;

		if (!name) return;
		if (_Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule.findProject(name)) {
			alert('Project name already exist.');
			return;
		}

		_Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule.addProject(name);
		appendProject(_Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule.getProject(name));
		closeProjectModal();
	}

	function appendProject(project) {
		const projectsContainer = sideBar[0].querySelector('.projects');
		projectsContainer.appendChild(createProject(project));
	}

	function createProject(project) {
		const container = document.createElement('div');
		container.classList.add('option');
		container.dataset.name = project.name;

		const projectName = document.createElement('span');
		projectName.classList.add('name');
		projectName.textContent = project.name;

		const remove = document.createElement('span');
		remove.classList.add('icon');
		remove.innerHTML = _svgs_svgs_js__WEBPACK_IMPORTED_MODULE_4__.svgs.close;
		remove.addEventListener('click', removeProject);

		container.appendChild(projectName);
		container.appendChild(remove);

		return container;
	}

	function removeProject(e) {
		const name = e.target.parentElement.parentElement.dataset.name;
		const projects = sideBar[0].querySelector('.projects');
		projects.removeChild(e.target.parentElement.parentElement);
		_Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule.removeProject(name);
	}

	function addAllProjects() {
		const projects = _Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule.getAllProjects();
		const projectsContainer = sideBar[0].querySelector('.projects');
		projects.forEach((project) => {
			projectsContainer.appendChild(createProject(project));
		});
	}

	return {
		init,
	};
})();




/***/ }),

/***/ "./src/ui-module/modals/modal.js":
/*!***************************************!*\
  !*** ./src/ui-module/modals/modal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateModal: () => (/* binding */ generateModal)
/* harmony export */ });
/* harmony import */ var _style_modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/modal.css */ "./src/style/modal.css");


function generateModal() {
	const container = document.createElement('div');
	container.classList.add('modal-container');

	const modal = document.createElement('div');
	modal.classList.add('modal');

	const modalHeader = document.createElement('div');
	modalHeader.classList.add('modal-header');

	const contentModal = document.createElement('div');
	contentModal.classList.add('content-modal');

	const inputContainer = document.createElement('div');
	inputContainer.classList.add('input-container');

	const btnsContainer = document.createElement('div');
	btnsContainer.classList.add('btns-container');

	container.appendChild(modal);
	modal.appendChild(modalHeader);
	modal.appendChild(contentModal);
	contentModal.appendChild(inputContainer);
	contentModal.appendChild(btnsContainer);

	return container;
}




/***/ }),

/***/ "./src/ui-module/modals/project-modal.js":
/*!***********************************************!*\
  !*** ./src/ui-module/modals/project-modal.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateProjectModal: () => (/* binding */ generateProjectModal)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/ui-module/modals/modal.js");
/* harmony import */ var _style_modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style/modal.css */ "./src/style/modal.css");



function generateProjectModal() {
	const modal = (0,_modal__WEBPACK_IMPORTED_MODULE_0__.generateModal)();
	const inputs = createInputs();
	const btns = createBtns();

	modal.querySelector('.modal-header').textContent = 'Add Project';
	modal.querySelector('.input-container').appendChild(inputs);
	btns.forEach((btn) => {
		modal.querySelector('.btns-container').appendChild(btn);
	});

	return modal;
}

function createInputs() {
	const container = document.createElement('div');
	container.classList.add('field');

	const label = document.createElement('label');
	label.htmlFor = '#name';
	label.textContent = 'Name';

	const input = document.createElement('input');
	input.id = 'name';

	container.appendChild(label);
	container.appendChild(input);

	return container;
}

function createBtns() {
	let btns = [];

	const cancel = document.createElement('button');
	cancel.textContent = 'Cancel';
	cancel.id = 'close-project-modal';

	const add = document.createElement('button');
	add.textContent = 'Add';
	add.id = 'add-project';
	add.classList.add('blue');

	btns.push(cancel);
	btns.push(add);

	return btns;
}




/***/ }),

/***/ "./src/ui-module/side-bar/side-bar.js":
/*!********************************************!*\
  !*** ./src/ui-module/side-bar/side-bar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateSideBar: () => (/* binding */ generateSideBar)
/* harmony export */ });
/* harmony import */ var _svgs_svgs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svgs/svgs.js */ "./src/ui-module/svgs/svgs.js");
/* harmony import */ var _style_side_bar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style/side-bar.css */ "./src/style/side-bar.css");



function generateSideBar() {
	const sideBarShadow = createSideShadow();
	const sideBarContainer = document.createElement('div');
	sideBarContainer.classList.add('side-bar-container');
	sideBarContainer.classList.add('open');

	const sideBar = createSideBar();
	sideBarContainer.appendChild(sideBar);

	return [sideBarContainer, sideBarShadow];
}

function createSideShadow() {
	const shadow = document.createElement('div');
	shadow.classList.add('side-bar-shadow');

	return shadow;
}

function createSideBar() {
	const sideBar = document.createElement('div');
	sideBar.classList.add('side-bar');

	const optionsContainer = createOptionsContainer();
	const projectsContainer = createProjctsContainer();

	sideBar.appendChild(optionsContainer);
	sideBar.appendChild(projectsContainer);

	return sideBar;
}

function createOptionsContainer() {
	const optionsContainer = document.createElement('div');
	optionsContainer.classList.add('standard-options');

	let options = [
		{
			name: 'Inbox',
			icon: 'inbox',
			id: 'inbox',
		},
		{
			name: 'Today',
			icon: 'today',
			id: 'today',
		},
		{
			name: 'This week',
			icon: 'calendar',
			id: 'week',
		},
	];

	options.forEach((option) => {
		const optionContainer = createOption(option);
		optionsContainer.appendChild(optionContainer);
	});

	return optionsContainer;
}

function createOption(option) {
	const container = document.createElement('div');
	container.classList.add('option');
	container.id = option.id;

	const spanIcon = document.createElement('span');
	spanIcon.classList.add('icon');
	spanIcon.innerHTML = _svgs_svgs_js__WEBPACK_IMPORTED_MODULE_0__.svgs[option.icon];

	const spanName = document.createElement('span');
	spanName.classList.add('name');
	spanName.textContent = option.name;

	container.appendChild(spanIcon);
	container.appendChild(spanName);

	return container;
}

function createProjctsContainer() {
	const projectsContainer = document.createElement('div');
	projectsContainer.classList.add('projects-container');

	const projectsHeader = createProjectsHeader();
	const projects = createProjects();

	projectsContainer.appendChild(projectsHeader);
	projectsContainer.appendChild(projects);

	return projectsContainer;
}

function createProjectsHeader() {
	const header = document.createElement('div');
	header.classList.add('projects-header');
	header.textContent = 'Projects';

	const span = document.createElement('span');
	span.classList.add('icon');
	span.id = 'project-modal'
	span.innerHTML = _svgs_svgs_js__WEBPACK_IMPORTED_MODULE_0__.svgs.plus;

	header.appendChild(span);

	return header;
}

function createProjects() {
	const projects = document.createElement('div');
	projects.classList.add('projects');

	return projects;
}




/***/ }),

/***/ "./src/ui-module/svgs/svgs.js":
/*!************************************!*\
  !*** ./src/ui-module/svgs/svgs.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   svgs: () => (/* binding */ svgs)
/* harmony export */ });
const svgs = {
	close:
		'<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Menu"><path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></g></svg>',
	today:
		'<svg width="20px"height="20px"viewBox="0 0 512         512"xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke-linejoin="round" stroke-width="20" x="48" y="80" width="416" height="384" rx="48"/><line fill="none"  stroke-linejoin="round" stroke-width="25" stroke-linecap="round" x1="128" y1="48" x2="128" y2="80"/><line fill="none" s stroke-linejoin="round" stroke-width="20" stroke-linecap="round" x1="384" y1="48" x2="384" y2="80"/><rect fill="none"stroke-linejoin="round"stroke-width="30"stroke-linecap="round"x="112"y="224"width="96"height="96"rx="13"/><line fill="none"  stroke-linejoin="round" stroke-width="20" stroke-linecap="round" x1="464" y1="160" x2="48" y2="160"/></svg>',
	inbox:
		'<svg width="64px" height="64px" viewBox="0 0 23.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></g><g id="SVGRepo_iconCarrier"> <path d="M3 12H8.5L10 15H14L16 12H21M3 12V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V12M3 12L5.75667 4.64888C5.90304 4.25857 6.27616 4 6.693 4H17.307C17.7238 4 18.097 4.25857 18.2433 4.64888L21 12" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none"></path> </g></svg>',
	calendar:
		'<svg fill="#000000" width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M266.815 537.708c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.775 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zM266.815 679.347c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.775 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zM266.815 820.988c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.775 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zM228.18 81.918v153.6c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-153.6c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zm528.09 0v153.6c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-153.6c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"/><path d="M890.877 137.517c33.931 0 61.44 27.509 61.44 61.44v703.375c0 33.931-27.509 61.44-61.44 61.44h-757.76c-33.931 0-61.44-27.509-61.44-61.44V198.957c0-33.931 27.509-61.44 61.44-61.44h757.76zm-757.76 40.96c-11.309 0-20.48 9.171-20.48 20.48v703.375c0 11.309 9.171 20.48 20.48 20.48h757.76c11.309 0 20.48-9.171 20.48-20.48V198.957c0-11.309-9.171-20.48-20.48-20.48h-757.76z"/><path d="M575.03 338.288c0-33.93-27.51-61.44-61.44-61.44s-61.44 27.51-61.44 61.44c0 33.93 27.51 61.44 61.44 61.44s61.44-27.51 61.44-61.44zm40.96 0c0 56.551-45.849 102.4-102.4 102.4s-102.4-45.849-102.4-102.4c0-56.551 45.849-102.4 102.4-102.4s102.4 45.849 102.4 102.4z"/></svg>',
	plus: '<svg width="25" height="25"><g transform="translate(6, 6)"><path d="M6 5V.5a.5.5 0 011 0V6h5.5a.5.5 0 110 1H7v5.5a.5.5 0 11-1 0V7H.5a.5.5 0 010-1H6z" fill-rule="round"></path></g></svg>',
	menu: '<svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 17H8M12 17H20M4 12H20M4 7H12M16 7H20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	search:
		'<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C11.381 15 12.6296 14.4415 13.5355 13.5355C14.4415 12.6296 15 11.381 15 10C15 7.23858 12.7614 5 10 5ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5719 16.481 13.0239 15.6063 14.1921L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L14.1921 15.6063C13.0239 16.481 11.5719 17 10 17C6.13401 17 3 13.866 3 10Z" /></svg>',
	sun: '<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="yellow"><circle cx="12" cy="12" r="5.09677"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.9556 3.08065C12.9556 2.55286 12.5277 2.125 12 2.125C11.4722 2.125 11.0443 2.55286 11.0443 3.08065L11.0443 5.64078C11.3561 5.59432 11.6753 5.57024 12 5.57024C12.3247 5.57024 12.6438 5.59431 12.9556 5.64076L12.9556 3.08065ZM12.9556 18.3594C12.6438 18.4059 12.3247 18.4299 12 18.4299C11.6753 18.4299 11.3561 18.4058 11.0443 18.3594L11.0443 20.9194C11.0443 21.4471 11.4722 21.875 12 21.875C12.5277 21.875 12.9556 21.4471 12.9556 20.9194L12.9556 18.3594Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M20.9194 12.9556C21.4471 12.9556 21.875 12.5277 21.875 12C21.875 11.4722 21.4471 11.0443 20.9194 11.0443L18.3592 11.0443C18.4057 11.3561 18.4298 11.6753 18.4298 12C18.4298 12.3247 18.4057 12.6438 18.3592 12.9556L20.9194 12.9556ZM5.6406 12.9556C5.59415 12.6438 5.57008 12.3247 5.57008 12C5.57008 11.6753 5.59416 11.3561 5.64062 11.0443L3.08064 11.0443C2.55286 11.0443 2.125 11.4722 2.125 12C2.125 12.5277 2.55286 12.9556 3.08064 12.9556L5.6406 12.9556Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M18.9828 6.36876C19.356 5.99555 19.356 5.39047 18.9828 5.01727C18.6096 4.64407 18.0045 4.64407 17.6313 5.01727L15.8209 6.82764C16.0743 7.01528 16.3169 7.22391 16.5466 7.45354C16.7762 7.68315 16.9848 7.92581 17.1724 8.17912L18.9828 6.36876ZM8.17898 17.1725C7.92567 16.9849 7.68302 16.7763 7.45341 16.5467C7.22378 16.3171 7.01514 16.0744 6.82751 15.8211L5.01742 17.6311C4.64422 18.0043 4.64422 18.6094 5.01742 18.9826C5.39062 19.3558 5.9957 19.3558 6.36891 18.9826L8.17898 17.1725Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M6.36888 5.01722C5.99568 4.64402 5.3906 4.64402 5.01739 5.01722C4.64419 5.39043 4.64419 5.99551 5.01739 6.36871L6.82776 8.17908C7.0154 7.92574 7.22403 7.68306 7.45366 7.45342C7.68327 7.22381 7.92593 7.0152 8.17924 6.82758L6.36888 5.01722ZM17.1727 15.821C16.9851 16.0743 16.7764 16.317 16.5468 16.5466C16.3172 16.7762 16.0745 16.9849 15.8212 17.1725L17.6313 18.9826C18.0045 19.3558 18.6095 19.3558 18.9828 18.9826C19.356 18.6094 19.356 18.0043 18.9828 17.6311L17.1727 15.821Z" /></svg>',
	moon: '<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="grey"><path d="M12.0557 3.59974C12.2752 3.2813 12.2913 2.86484 12.0972 2.53033C11.9031 2.19582 11.5335 2.00324 11.1481 2.03579C6.02351 2.46868 2 6.76392 2 12C2 17.5228 6.47715 22 12 22C17.236 22 21.5313 17.9764 21.9642 12.8518C21.9967 12.4664 21.8041 12.0968 21.4696 11.9027C21.1351 11.7086 20.7187 11.7248 20.4002 11.9443C19.4341 12.6102 18.2641 13 17 13C13.6863 13 11 10.3137 11 6.99996C11 5.73589 11.3898 4.56587 12.0557 3.59974Z" /></svg>',
	pen: '<svg width="800px" height="800px" viewBox="0 0 28 18"><g id="out" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage" transform="translate(5,0)"><path d="M2.25,12.9378906 L2.25,15.75 L5.06210943,15.75 L13.3559575,7.45615192 L10.5438481,4.64404249 L2.25,12.9378906 L2.25,12.9378906 L2.25,12.9378906 Z M15.5306555,5.28145396 C15.8231148,4.98899458 15.8231148,4.5165602 15.5306555,4.22410082 L13.7758992,2.46934454 C13.4834398,2.17688515 13.0110054,2.17688515 12.718546,2.46934454 L11.3462366,3.84165394 L14.1583461,6.65376337 L15.5306555,5.28145396 L15.5306555,5.28145396 L15.5306555,5.28145396 Z" id="path" fill="#554f4f" sketch:type="MSShapeGroup"></path></g></svg>',
	circle:
		'<svg width="24" height="24" viewBox="0 0 24 24" id="color-mark"><path d="M12 7a5 5 0 110 10 5 5 0 010-10z" ></path></svg>',
};




/***/ }),

/***/ "./src/ui-module/top-bar/top-bar.js":
/*!******************************************!*\
  !*** ./src/ui-module/top-bar/top-bar.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateTopBar: () => (/* binding */ generateTopBar)
/* harmony export */ });
/* harmony import */ var _svgs_svgs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svgs/svgs.js */ "./src/ui-module/svgs/svgs.js");
/* harmony import */ var _style_top_bar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style/top-bar.css */ "./src/style/top-bar.css");



function generateTopBar() {
	const topBarContainer = document.createElement('div');
	topBarContainer.classList.add('top-bar-container');

	const burgerMenu = createburgerMenu();
	const quickSearch = createQuickSearch();
	const toogleTheme = createToggle();

	topBarContainer.appendChild(burgerMenu);
	topBarContainer.appendChild(quickSearch);
	topBarContainer.appendChild(toogleTheme);

	return topBarContainer;
}

function createburgerMenu() {
	const menu = document.createElement('div');
	menu.classList.add('burger-menu');
	menu.classList.add('btn');
	menu.id = 'burgerMenu';
	menu.innerHTML = _svgs_svgs_js__WEBPACK_IMPORTED_MODULE_0__.svgs.menu;

	return menu;
}

function createQuickSearch() {
	const quickSearch = document.createElement('div');
	quickSearch.classList.add('quick-search');
	quickSearch.innerHTML = _svgs_svgs_js__WEBPACK_IMPORTED_MODULE_0__.svgs.search;

	const input = document.createElement('input');
	input.placeholder = 'Search...';

	quickSearch.appendChild(input);

	return quickSearch;
}

function createToggle() {
	const toggle = document.createElement('div');
	toggle.classList.add('toggle-theme');
	toggle.classList.add('btn');
	toggle.innerHTML = _svgs_svgs_js__WEBPACK_IMPORTED_MODULE_0__.svgs.sun;
	toggle.innerHTML += _svgs_svgs_js__WEBPACK_IMPORTED_MODULE_0__.svgs.moon;

	const circle = document.createElement('div');
	circle.classList.add('circle');
	circle.id = 'toggle-circle';

	toggle.appendChild(circle);

	return toggle;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_module_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-module/UI */ "./src/ui-module/UI.js");


_ui_module_UI__WEBPACK_IMPORTED_MODULE_0__.UI.init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lCOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlCZTtBQUNUO0FBQy9CO0FBQ0E7QUFDQSxlQUFlLHFEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRE87QUFDTDtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLCtDQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0NBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMkI7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQnVCO0FBQ047QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtDQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLCtDQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtDQUFJO0FBQ3hCLHFCQUFxQiwrQ0FBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjs7Ozs7OztVQ3pEMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0FvQztBQUNwQztBQUNBLDZDQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUvbW9kYWwuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlL3NpZGUtYmFyLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS90b3AtYmFyLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS9tb2RhbC5jc3M/MTcwNiIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS9zaWRlLWJhci5jc3M/MzhjMyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS90b3AtYmFyLmNzcz85MzNmIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvUHJvamVjdHMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdWktbW9kdWxlL1VJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3VpLW1vZHVsZS9tb2RhbHMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdWktbW9kdWxlL21vZGFscy9wcm9qZWN0LW1vZGFsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3VpLW1vZHVsZS9zaWRlLWJhci9zaWRlLWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy91aS1tb2R1bGUvc3Zncy9zdmdzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3VpLW1vZHVsZS90b3AtYmFyL3RvcC1iYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tb2RhbC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjdhO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiBtaW4oNTAwcHgsIDgwdncpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IC41cmVtO1xyXG59XHJcblxyXG4uY29udGVudC1tb2RhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMnJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyIGlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgcGFkZGluZzogLjNyZW07XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmZpZWxkIHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAuNXJlbSAwO1xyXG4gIGdhcDogLjVyZW07XHJcbn1cclxuXHJcbi5idG5zLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IC4ycmVtO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uYnRucy1jb250YWluZXIgYnV0dG9uIHtcclxuICB3aWR0aDogODBweDtcclxuICBwYWRkaW5nOiAuMnJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogLjJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRucy1jb250YWluZXIgLmJsdWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL21vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1DQUFtQztFQUNuQyxvQkFBb0I7RUFDcEIsdUNBQXVDO0VBQ3ZDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tb2RhbC1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjdhO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IG1pbig1MDBweCwgODB2dyk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1iYXItY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaGVhZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtbW9kYWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIgaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgcGFkZGluZzogLjNyZW07XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGQge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogLjVyZW0gMDtcXHJcXG4gIGdhcDogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5idG5zLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAuMnJlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRucy1jb250YWluZXIgYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgcGFkZGluZzogLjJyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bnMtY29udGFpbmVyIC5ibHVlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zaWRlLWJhci1jb250YWluZXIge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b3AtYmFyLWhlaWdodCkpO1xyXG5cdHdpZHRoOiB2YXIoLS1zaWRlLWJhci13aWR0aCk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1iYXItY29sb3IpO1xyXG5cdHotaW5kZXg6IDE7XHJcblx0cGFkZGluZy10b3A6IDJyZW07XHJcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uLXRpbWUpIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc2lkZS1iYXItc2hhZG93IHtcclxuXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b3AtYmFyLWhlaWdodCkpO1xyXG5cdHdpZHRoOiB2YXIoLS1zaWRlLWJhci13aWR0aCk7XHJcblx0dHJhbnNpdGlvbjogd2lkdGggdmFyKC0tdHJhbnNpdGlvbi10aW1lKSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNpZGUtYmFyIHtcclxuXHRwYWRkaW5nOiAwIDFyZW07XHJcblx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG5zcGFuIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vcHRpb24ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRnYXA6IDAuM3JlbTtcclxuXHRwYWRkaW5nOiAwLjVyZW07XHJcblx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm9wdGlvbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZGFyay1jb2xvcik7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbi5pY29uIHN2ZyB7XHJcblx0aGVpZ2h0OiAyNXB4O1xyXG5cdHdpZHRoOiAyNXB4O1xyXG5cdGZpbGw6IHZhcigtLXRleHQtY29sb3IpO1xyXG5cdHN0cm9rZTogdmFyKC0tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuXHRmbGV4OiAxO1xyXG59XHJcblxyXG4uc3RhbmRhcmQtb3B0aW9ucyB7XHJcblx0bWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLnByb2plY3RzLWNvbnRhaW5lciB7XHJcblx0ZmxleDogMTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0bWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnByb2plY3RzLWhlYWRlciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAwLjVyZW07XHJcblx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnByb2plY3RzIHtcclxuXHRmbGV4OiAxO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0cGFkZGluZy1pbmxpbmU6IDAuNXJlbSAwO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG5cclxuLm9wZW4ge1xyXG5cdGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoLTEgKiB2YXIoLS1zaWRlLWJhci13aWR0aCkpKTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zaWRlLWJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxlQUFlO0NBQ2YsMkNBQTJDO0NBQzNDLDRCQUE0QjtDQUM1Qix1Q0FBdUM7Q0FDdkMsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsd0RBQXdEO0FBQ3pEOztBQUVBO0NBQ0MsMkNBQTJDO0NBQzNDLDRCQUE0QjtDQUM1QixvREFBb0Q7QUFDckQ7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLGVBQWU7Q0FDZixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHlDQUF5QztBQUMxQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLGVBQWU7Q0FDZixlQUFlO0NBQ2YscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCx1QkFBdUI7Q0FDdkIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsT0FBTztBQUNSOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsT0FBTztDQUNQLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLHFCQUFxQjtDQUNyQiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixlQUFlO0NBQ2Ysd0JBQXdCO0NBQ3hCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLE9BQU87QUFDUjs7QUFFQTtDQUNDLHVEQUF1RDtBQUN4RFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2lkZS1iYXItY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tdG9wLWJhci1oZWlnaHQpKTtcXHJcXG5cXHR3aWR0aDogdmFyKC0tc2lkZS1iYXItd2lkdGgpO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyLWNvbG9yKTtcXHJcXG5cXHR6LWluZGV4OiAxO1xcclxcblxcdHBhZGRpbmctdG9wOiAycmVtO1xcclxcblxcdG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tdHJhbnNpdGlvbi10aW1lKSBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYmFyLXNoYWRvdyB7XFxyXFxuXFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tdG9wLWJhci1oZWlnaHQpKTtcXHJcXG5cXHR3aWR0aDogdmFyKC0tc2lkZS1iYXItd2lkdGgpO1xcclxcblxcdHRyYW5zaXRpb246IHdpZHRoIHZhcigtLXRyYW5zaXRpb24tdGltZSkgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhciB7XFxyXFxuXFx0cGFkZGluZzogMCAxcmVtO1xcclxcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAwLjNyZW07XFxyXFxuXFx0cGFkZGluZzogMC41cmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5vcHRpb246aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWRhcmstY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMjVweDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiBzdmcge1xcclxcblxcdGhlaWdodDogMjVweDtcXHJcXG5cXHR3aWR0aDogMjVweDtcXHJcXG5cXHRmaWxsOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG5cXHRzdHJva2U6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZSB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YW5kYXJkLW9wdGlvbnMge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1oZWFkZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMC41cmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdHBhZGRpbmctaW5saW5lOiAwLjVyZW0gMDtcXHJcXG5cXHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxyXFxufVxcclxcblxcclxcbi5vcGVuIHtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2Uge1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKC0xICogdmFyKC0tc2lkZS1iYXItd2lkdGgpKSk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRvcC1iYXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBwYWRkaW5nOiAuNHJlbSAxLjVyZW07XHJcbiAgaGVpZ2h0OiB2YXIoLS10b3AtYmFyLWhlaWdodCk7XHJcbn1cclxuXHJcbi50b3AtYmFyLWNvbnRhaW5lciBzdmcge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBmaWxsOiAjZmZmZmZmYzc7XHJcbn1cclxuXHJcbi5idXJnZXItbWVudSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xyXG59XHJcblxyXG4uYnVyZ2VyLW1lbnUgc3Zne1xyXG4gIHN0cm9rZTogd2hpdGU7XHJcbn1cclxuXHJcbi5xdWljay1zZWFyY2gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmNWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogLjJyZW07XHJcbiAgZ2FwOiA1cHg7XHJcbiAgY29sb3I6ICNmZmZmZmZjNztcclxufSBcclxuXHJcbi50b3AtYmFyLWNvbnRhaW5lciBpbnB1dCB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBmb250LXNpemU6IC45cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnF1aWNrLXNlYXJjaDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQtY29sb3IpO1xyXG59XHJcblxyXG4udG9nZ2xlLXRoZW1lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmZhODtcclxuICBib3JkZXItcmFkaXVzOiAxLjJyZW07XHJcbiAgcGFkZGluZzogIDAgLjNyZW07XHJcbiAgZ2FwOiAuMnJlbTtcclxufVxyXG5cclxuLnRvZ2dsZS10aGVtZSBzdmcge1xyXG4gIHdpZHRoOiAyM3B4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50b2dnbGUtdGhlbWUgLmNpcmNsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAuNHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodC1jb2xvcik7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4ICkge1xyXG4gIC50b3AtYmFyLWNvbnRhaW5lciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgfVxyXG4gIC5xdWljay1zZWFyY2gge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgaW5wdXQge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS90b3AtYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLHFCQUFxQjtFQUNyQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLFFBQVE7RUFDUixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQixTQUFTO0VBQ1g7RUFDQTtJQUNFLE9BQU87RUFDVDtFQUNBO0lBQ0UsT0FBTztFQUNUO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRvcC1iYXItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHBhZGRpbmc6IC40cmVtIDEuNXJlbTtcXHJcXG4gIGhlaWdodDogdmFyKC0tdG9wLWJhci1oZWlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhci1jb250YWluZXIgc3ZnIHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgZmlsbDogI2ZmZmZmZmM3O1xcclxcbn1cXHJcXG5cXHJcXG4uYnVyZ2VyLW1lbnUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnVyZ2VyLW1lbnUgc3Zne1xcclxcbiAgc3Ryb2tlOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnF1aWNrLXNlYXJjaCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjVkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogLjJyZW07XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmYzc7XFxyXFxufSBcXHJcXG5cXHJcXG4udG9wLWJhci1jb250YWluZXIgaW5wdXQge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgZm9udC1zaXplOiAuOXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5xdWljay1zZWFyY2g6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlLXRoZW1lIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmYTg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nOiAgMCAuM3JlbTtcXHJcXG4gIGdhcDogLjJyZW07XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUtdGhlbWUgc3ZnIHtcXHJcXG4gIHdpZHRoOiAyM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZ2dsZS10aGVtZSAuY2lyY2xlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAuNHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4ICkge1xcclxcbiAgLnRvcC1iYXItY29udGFpbmVyIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICB9XFxyXFxuICAucXVpY2stc2VhcmNoIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gIH1cXHJcXG4gIGlucHV0IHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZS1iYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlLWJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9wLWJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvcC1iYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBQcm9qZWN0c01vZHVsZSA9IChmdW5jdGlvbiBQcm9qZWN0c01vZHVsZSgpIHtcclxuXHRjb25zdCBQcm9qZWN0cyA9IFtdO1xyXG5cclxuXHRmdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWUpIHtcclxuXHRcdFByb2plY3RzLnB1c2goUHJvamVjdChuYW1lKSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRBbGxQcm9qZWN0cygpIHtcclxuXHRcdHJldHVybiBQcm9qZWN0cztcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldFByb2plY3QobmFtZSkge1xyXG5cdFx0bGV0IGluZGV4ID0gZmluZEluZGV4KG5hbWUpO1xyXG5cdFx0cmV0dXJuIFByb2plY3RzW2luZGV4XTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGZpbmRJbmRleChuYW1lKSB7XHJcblx0XHRyZXR1cm4gUHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZmluZFByb2plY3QobmFtZSkge1xyXG5cdFx0cmV0dXJuIFByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiByZW1vdmVQcm9qZWN0KG5hbWUpIHtcclxuXHRcdGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRJbmRleChuYW1lKTtcclxuXHRcdFByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGFkZFByb2plY3QsXHJcblx0XHRnZXRBbGxQcm9qZWN0cyxcclxuXHRcdGdldFByb2plY3QsXHJcblx0XHRmaW5kUHJvamVjdCxcclxuXHRcdHJlbW92ZVByb2plY3QsXHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIFByb2plY3QobmFtZSkge1xyXG5cdGNvbnN0IHRhc2tzID0gW107XHJcblxyXG5cdGZ1bmN0aW9uIGFkZFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG5cdFx0dGFza3MucHVzaChUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldFRhc2tzKCkge1xyXG5cdFx0cmV0dXJuIHRhc2tzO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdG5hbWU6IG5hbWUsXHJcblx0XHRhZGRUYXNrLFxyXG5cdFx0Z2V0VGFza3MsXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHRpdGxlOiB0aXRsZSxcclxuXHRcdGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuXHRcdGR1ZURhdGU6IGR1ZURhdGUsXHJcblx0XHRwcmlvcml0eTogcHJpb3JpdHksXHJcblx0XHRhZGREYXRlOiBnZXREYXRlKCksXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcclxuXHRjb25zdCBmdWxsRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0Y29uc3QgZGF5ID0gZnVsbERhdGUuZ2V0RGF0ZSgpO1xyXG5cdGNvbnN0IG1vbnRoID0gZnVsbERhdGUuZ2V0TW9udGgoKTtcclxuXHRjb25zdCB5ZWFyID0gZnVsbERhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGRheTogZGF5LFxyXG5cdFx0bW9udGg6IG1vbnRoICsgMSxcclxuXHRcdHllYXI6IHllYXIsXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IHsgUHJvamVjdHNNb2R1bGUgfTtcclxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVUb3BCYXIgfSBmcm9tICcuL3RvcC1iYXIvdG9wLWJhci5qcyc7XHJcbmltcG9ydCB7IGdlbmVyYXRlU2lkZUJhciB9IGZyb20gJy4vc2lkZS1iYXIvc2lkZS1iYXIuanMnO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVByb2plY3RNb2RhbCB9IGZyb20gJy4vbW9kYWxzL3Byb2plY3QtbW9kYWwuanMnO1xyXG5pbXBvcnQgeyBQcm9qZWN0c01vZHVsZSB9IGZyb20gJy4uL1Byb2plY3RzL3Byb2plY3RzLmpzJztcclxuaW1wb3J0IHsgc3ZncyB9IGZyb20gJy4vc3Zncy9zdmdzLmpzJztcclxuXHJcbmNvbnN0IFVJID0gKGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtY29udGFpbmVyJyk7XHJcblx0Y29uc3QgdG9wQmFyID0gZ2VuZXJhdGVUb3BCYXIoKTtcclxuXHRjb25zdCBzaWRlQmFyID0gZ2VuZXJhdGVTaWRlQmFyKCk7XHJcblx0Y29uc3QgcHJvamVjdE1vZGFsID0gZ2VuZXJhdGVQcm9qZWN0TW9kYWwoKTtcclxuXHJcblx0ZnVuY3Rpb24gaW5pdCgpIHtcclxuXHRcdHBhZ2UuYXBwZW5kQ2hpbGQodG9wQmFyKTtcclxuXHRcdHBhZ2UuYXBwZW5kQ2hpbGQoc2lkZUJhclsxXSk7XHJcblx0XHRwYWdlLmFwcGVuZENoaWxkKHNpZGVCYXJbMF0pO1xyXG5cdFx0YWRkRXZlbnRzKCk7XHJcblx0XHRhZGRBbGxQcm9qZWN0cygpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYWRkRXZlbnRzKCkge1xyXG5cdFx0YWRkTWVudUV2ZW50KCk7XHJcblx0XHRhZGRUb2dnbGVUaGVtZUV2ZW50KCk7XHJcblx0XHRtb2RhbFByb2plY3RFdmVudHMoKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFkZE1lbnVFdmVudCgpIHtcclxuXHRcdGNvbnN0IGJ1Z2VyTWVudSA9IHRvcEJhci5xdWVyeVNlbGVjdG9yKCcjYnVyZ2VyTWVudScpO1xyXG5cdFx0YnVnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkNsb3NlU2lkZUJhcik7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb3BlbkNsb3NlU2hhZG93KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9wZW5DbG9zZVNpZGVCYXIoKSB7XHJcblx0XHRjb25zdCBzaWRlQmFyQ29udGFpbmVyID0gc2lkZUJhclswXTtcclxuXHRcdGlmIChpc09wZW4oc2lkZUJhckNvbnRhaW5lcikpIHtcclxuXHRcdFx0c2lkZUJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xyXG5cdFx0XHRzaWRlQmFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0b3BlbkNsb3NlU2hhZG93KGZhbHNlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNpZGVCYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG5cdFx0XHRzaWRlQmFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlJyk7XHJcblx0XHRcdG9wZW5DbG9zZVNoYWRvdyh0cnVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGlzT3BlbihlbGVtZW50KSB7XHJcblx0XHRyZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9wZW5DbG9zZVNoYWRvdyhzdGF0dXMpIHtcclxuXHRcdGNvbnN0IHNpZGVCYXJTaGFkb3cgPSBzaWRlQmFyWzFdO1xyXG5cdFx0Y29uc3Qgc2lkZUJhckNvbnRhaW5lciA9IHNpZGVCYXJbMF07XHJcblxyXG5cdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgODAwIHx8IHN0YXR1cyA9PT0gZmFsc2UpIHtcclxuXHRcdFx0c2lkZUJhclNoYWRvdy5zdHlsZS53aWR0aCA9ICcwJztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoXHJcblx0XHRcdHdpbmRvdy5pbm5lcldpZHRoID49IDgwMCAmJlxyXG5cdFx0XHQoaXNPcGVuKHNpZGVCYXJDb250YWluZXIpIHx8IHN0YXR1cyA9PT0gdHJ1ZSlcclxuXHRcdCkge1xyXG5cdFx0XHRzaWRlQmFyU2hhZG93LnN0eWxlLndpZHRoID0gJ3ZhcigtLXNpZGUtYmFyLXdpZHRoKSc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhZGRUb2dnbGVUaGVtZUV2ZW50KCkge1xyXG5cdFx0Y29uc3QgdG9nZ2xlQnRuID0gdG9wQmFyLnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtdGhlbWUnKTtcclxuXHRcdHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVRoZW1lKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNoYW5nZVRoZW1lKCkge1xyXG5cdFx0bGV0IHRoZW1lID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cdFx0aWYgKGlzVGhlbWUoJ2RhcmsnKSkge1xyXG5cdFx0XHR0aGVtZS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XHJcblx0XHRcdG1vdmVUb2dnbGUoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoZW1lLmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcclxuXHRcdFx0bW92ZVRvZ2dsZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaXNUaGVtZSh0aGVtZSkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhlbWUpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gbW92ZVRvZ2dsZSgpIHtcclxuXHRcdGNvbnN0IGNpcmNsZSA9IHRvcEJhci5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlLWNpcmNsZScpO1xyXG5cdFx0aWYgKGlzVGhlbWUoJ2RhcmsnKSkge1xyXG5cdFx0XHRjaXJjbGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTI2LjVweCknO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y2lyY2xlLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG1vZGFsUHJvamVjdEV2ZW50cygpIHtcclxuXHRcdGNvbnN0IHBsdXMgPSBzaWRlQmFyWzBdLnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW1vZGFsJyk7XHJcblx0XHRjb25zdCBjYW5jZWxCdG4gPSBwcm9qZWN0TW9kYWwucXVlcnlTZWxlY3RvcignI2Nsb3NlLXByb2plY3QtbW9kYWwnKTtcclxuXHRcdGNvbnN0IGFkZEJ0biA9IHByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKTtcclxuXHJcblx0XHRwbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblByb2plY3RNb2RhbCk7XHJcblx0XHRjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVByb2plY3RNb2RhbCk7XHJcblx0XHRhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9wZW5Qcm9qZWN0TW9kYWwoKSB7XHJcblx0XHRwYWdlLmFwcGVuZENoaWxkKHByb2plY3RNb2RhbCk7XHJcblx0XHRwcm9qZWN0TW9kYWwucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb2N1cygpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2xvc2VQcm9qZWN0TW9kYWwoKSB7XHJcblx0XHRwYWdlLnJlbW92ZUNoaWxkKHByb2plY3RNb2RhbCk7XHJcblx0XHRwcm9qZWN0TW9kYWwucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9ICcnO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcclxuXHRcdGxldCBuYW1lID0gcHJvamVjdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWU7XHJcblxyXG5cdFx0aWYgKCFuYW1lKSByZXR1cm47XHJcblx0XHRpZiAoUHJvamVjdHNNb2R1bGUuZmluZFByb2plY3QobmFtZSkpIHtcclxuXHRcdFx0YWxlcnQoJ1Byb2plY3QgbmFtZSBhbHJlYWR5IGV4aXN0LicpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0UHJvamVjdHNNb2R1bGUuYWRkUHJvamVjdChuYW1lKTtcclxuXHRcdGFwcGVuZFByb2plY3QoUHJvamVjdHNNb2R1bGUuZ2V0UHJvamVjdChuYW1lKSk7XHJcblx0XHRjbG9zZVByb2plY3RNb2RhbCgpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYXBwZW5kUHJvamVjdChwcm9qZWN0KSB7XHJcblx0XHRjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IHNpZGVCYXJbMF0ucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcblx0XHRwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0KHByb2plY3QpKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdCkge1xyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3B0aW9uJyk7XHJcblx0XHRjb250YWluZXIuZGF0YXNldC5uYW1lID0gcHJvamVjdC5uYW1lO1xyXG5cclxuXHRcdGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdFx0cHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xyXG5cdFx0cHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcblxyXG5cdFx0Y29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdFx0cmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuXHRcdHJlbW92ZS5pbm5lckhUTUwgPSBzdmdzLmNsb3NlO1xyXG5cdFx0cmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlUHJvamVjdCk7XHJcblxyXG5cdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmUpO1xyXG5cclxuXHRcdHJldHVybiBjb250YWluZXI7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGUpIHtcclxuXHRcdGNvbnN0IG5hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5uYW1lO1xyXG5cdFx0Y29uc3QgcHJvamVjdHMgPSBzaWRlQmFyWzBdLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xyXG5cdFx0cHJvamVjdHMucmVtb3ZlQ2hpbGQoZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcclxuXHRcdFByb2plY3RzTW9kdWxlLnJlbW92ZVByb2plY3QobmFtZSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhZGRBbGxQcm9qZWN0cygpIHtcclxuXHRcdGNvbnN0IHByb2plY3RzID0gUHJvamVjdHNNb2R1bGUuZ2V0QWxsUHJvamVjdHMoKTtcclxuXHRcdGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gc2lkZUJhclswXS5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuXHRcdHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdFx0cHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdChwcm9qZWN0KSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRpbml0LFxyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBVSSB9O1xyXG4iLCJpbXBvcnQgJy4uLy4uL3N0eWxlL21vZGFsLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZU1vZGFsKCkge1xyXG5cdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250YWluZXInKTtcclxuXHJcblx0Y29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xyXG5cclxuXHRjb25zdCBtb2RhbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdG1vZGFsSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWhlYWRlcicpO1xyXG5cclxuXHRjb25zdCBjb250ZW50TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRjb250ZW50TW9kYWwuY2xhc3NMaXN0LmFkZCgnY29udGVudC1tb2RhbCcpO1xyXG5cclxuXHRjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xyXG5cclxuXHRjb25zdCBidG5zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0YnRuc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidG5zLWNvbnRhaW5lcicpO1xyXG5cclxuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG5cdG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsSGVhZGVyKTtcclxuXHRtb2RhbC5hcHBlbmRDaGlsZChjb250ZW50TW9kYWwpO1xyXG5cdGNvbnRlbnRNb2RhbC5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcik7XHJcblx0Y29udGVudE1vZGFsLmFwcGVuZENoaWxkKGJ0bnNDb250YWluZXIpO1xyXG5cclxuXHRyZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZW5lcmF0ZU1vZGFsIH07XHJcbiIsImltcG9ydCB7IGdlbmVyYXRlTW9kYWwgfSBmcm9tICcuL21vZGFsJztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZS9tb2RhbC5jc3MnO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0TW9kYWwoKSB7XHJcblx0Y29uc3QgbW9kYWwgPSBnZW5lcmF0ZU1vZGFsKCk7XHJcblx0Y29uc3QgaW5wdXRzID0gY3JlYXRlSW5wdXRzKCk7XHJcblx0Y29uc3QgYnRucyA9IGNyZWF0ZUJ0bnMoKTtcclxuXHJcblx0bW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsLWhlYWRlcicpLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcclxuXHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoaW5wdXRzKTtcclxuXHRidG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cdFx0bW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bnMtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIG1vZGFsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVJbnB1dHMoKSB7XHJcblx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Y29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkJyk7XHJcblxyXG5cdGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuXHRsYWJlbC5odG1sRm9yID0gJyNuYW1lJztcclxuXHRsYWJlbC50ZXh0Q29udGVudCA9ICdOYW1lJztcclxuXHJcblx0Y29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdGlucHV0LmlkID0gJ25hbWUnO1xyXG5cclxuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XHJcblxyXG5cdHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJ0bnMoKSB7XHJcblx0bGV0IGJ0bnMgPSBbXTtcclxuXHJcblx0Y29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0Y2FuY2VsLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcblx0Y2FuY2VsLmlkID0gJ2Nsb3NlLXByb2plY3QtbW9kYWwnO1xyXG5cclxuXHRjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRhZGQudGV4dENvbnRlbnQgPSAnQWRkJztcclxuXHRhZGQuaWQgPSAnYWRkLXByb2plY3QnO1xyXG5cdGFkZC5jbGFzc0xpc3QuYWRkKCdibHVlJyk7XHJcblxyXG5cdGJ0bnMucHVzaChjYW5jZWwpO1xyXG5cdGJ0bnMucHVzaChhZGQpO1xyXG5cclxuXHRyZXR1cm4gYnRucztcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVQcm9qZWN0TW9kYWwgfTtcclxuIiwiaW1wb3J0IHsgc3ZncyB9IGZyb20gJy4uL3N2Z3Mvc3Zncy5qcyc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGUvc2lkZS1iYXIuY3NzJztcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU2lkZUJhcigpIHtcclxuXHRjb25zdCBzaWRlQmFyU2hhZG93ID0gY3JlYXRlU2lkZVNoYWRvdygpO1xyXG5cdGNvbnN0IHNpZGVCYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRzaWRlQmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGUtYmFyLWNvbnRhaW5lcicpO1xyXG5cdHNpZGVCYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG5cclxuXHRjb25zdCBzaWRlQmFyID0gY3JlYXRlU2lkZUJhcigpO1xyXG5cdHNpZGVCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XHJcblxyXG5cdHJldHVybiBbc2lkZUJhckNvbnRhaW5lciwgc2lkZUJhclNoYWRvd107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNpZGVTaGFkb3coKSB7XHJcblx0Y29uc3Qgc2hhZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0c2hhZG93LmNsYXNzTGlzdC5hZGQoJ3NpZGUtYmFyLXNoYWRvdycpO1xyXG5cclxuXHRyZXR1cm4gc2hhZG93O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTaWRlQmFyKCkge1xyXG5cdGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGUtYmFyJyk7XHJcblxyXG5cdGNvbnN0IG9wdGlvbnNDb250YWluZXIgPSBjcmVhdGVPcHRpb25zQ29udGFpbmVyKCk7XHJcblx0Y29uc3QgcHJvamVjdHNDb250YWluZXIgPSBjcmVhdGVQcm9qY3RzQ29udGFpbmVyKCk7XHJcblxyXG5cdHNpZGVCYXIuYXBwZW5kQ2hpbGQob3B0aW9uc0NvbnRhaW5lcik7XHJcblx0c2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XHJcblxyXG5cdHJldHVybiBzaWRlQmFyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPcHRpb25zQ29udGFpbmVyKCkge1xyXG5cdGNvbnN0IG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRvcHRpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N0YW5kYXJkLW9wdGlvbnMnKTtcclxuXHJcblx0bGV0IG9wdGlvbnMgPSBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdJbmJveCcsXHJcblx0XHRcdGljb246ICdpbmJveCcsXHJcblx0XHRcdGlkOiAnaW5ib3gnLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ1RvZGF5JyxcclxuXHRcdFx0aWNvbjogJ3RvZGF5JyxcclxuXHRcdFx0aWQ6ICd0b2RheScsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnVGhpcyB3ZWVrJyxcclxuXHRcdFx0aWNvbjogJ2NhbGVuZGFyJyxcclxuXHRcdFx0aWQ6ICd3ZWVrJyxcclxuXHRcdH0sXHJcblx0XTtcclxuXHJcblx0b3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuXHRcdGNvbnN0IG9wdGlvbkNvbnRhaW5lciA9IGNyZWF0ZU9wdGlvbihvcHRpb24pO1xyXG5cdFx0b3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25Db250YWluZXIpO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gb3B0aW9uc0NvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uKG9wdGlvbikge1xyXG5cdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvcHRpb24nKTtcclxuXHRjb250YWluZXIuaWQgPSBvcHRpb24uaWQ7XHJcblxyXG5cdGNvbnN0IHNwYW5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdHNwYW5JY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuXHRzcGFuSWNvbi5pbm5lckhUTUwgPSBzdmdzW29wdGlvbi5pY29uXTtcclxuXHJcblx0Y29uc3Qgc3Bhbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblx0c3Bhbk5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xyXG5cdHNwYW5OYW1lLnRleHRDb250ZW50ID0gb3B0aW9uLm5hbWU7XHJcblxyXG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuSWNvbik7XHJcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW5OYW1lKTtcclxuXHJcblx0cmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamN0c0NvbnRhaW5lcigpIHtcclxuXHRjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWNvbnRhaW5lcicpO1xyXG5cclxuXHRjb25zdCBwcm9qZWN0c0hlYWRlciA9IGNyZWF0ZVByb2plY3RzSGVhZGVyKCk7XHJcblx0Y29uc3QgcHJvamVjdHMgPSBjcmVhdGVQcm9qZWN0cygpO1xyXG5cclxuXHRwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlcik7XHJcblx0cHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xyXG5cclxuXHRyZXR1cm4gcHJvamVjdHNDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzSGVhZGVyKCkge1xyXG5cdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1oZWFkZXInKTtcclxuXHRoZWFkZXIudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xyXG5cclxuXHRjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdHNwYW4uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG5cdHNwYW4uaWQgPSAncHJvamVjdC1tb2RhbCdcclxuXHRzcGFuLmlubmVySFRNTCA9IHN2Z3MucGx1cztcclxuXHJcblx0aGVhZGVyLmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuXHRyZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0cygpIHtcclxuXHRjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzJyk7XHJcblxyXG5cdHJldHVybiBwcm9qZWN0cztcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVTaWRlQmFyIH07XHJcbiIsImNvbnN0IHN2Z3MgPSB7XHJcblx0Y2xvc2U6XHJcblx0XHQnPHN2ZyB3aWR0aD1cIjgwMHB4XCIgaGVpZ2h0PVwiODAwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGcgaWQ9XCJNZW51XCI+PHBhdGggaWQ9XCJWZWN0b3JcIiBkPVwiTTE2IDE2TDEyIDEyTTEyIDEyTDggOE0xMiAxMkwxNiA4TTEyIDEyTDggMTZcIiBzdHJva2Utd2lkdGg9XCIxXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPjwvZz48L3N2Zz4nLFxyXG5cdHRvZGF5OlxyXG5cdFx0Jzxzdmcgd2lkdGg9XCIyMHB4XCJoZWlnaHQ9XCIyMHB4XCJ2aWV3Qm94PVwiMCAwIDUxMiAgICAgICAgIDUxMlwieG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxyZWN0IGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyMFwiIHg9XCI0OFwiIHk9XCI4MFwiIHdpZHRoPVwiNDE2XCIgaGVpZ2h0PVwiMzg0XCIgcng9XCI0OFwiLz48bGluZSBmaWxsPVwibm9uZVwiICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjI1XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHgxPVwiMTI4XCIgeTE9XCI0OFwiIHgyPVwiMTI4XCIgeTI9XCI4MFwiLz48bGluZSBmaWxsPVwibm9uZVwiIHMgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyMFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiB4MT1cIjM4NFwiIHkxPVwiNDhcIiB4Mj1cIjM4NFwiIHkyPVwiODBcIi8+PHJlY3QgZmlsbD1cIm5vbmVcInN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJzdHJva2Utd2lkdGg9XCIzMFwic3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwieD1cIjExMlwieT1cIjIyNFwid2lkdGg9XCI5NlwiaGVpZ2h0PVwiOTZcInJ4PVwiMTNcIi8+PGxpbmUgZmlsbD1cIm5vbmVcIiAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyMFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiB4MT1cIjQ2NFwiIHkxPVwiMTYwXCIgeDI9XCI0OFwiIHkyPVwiMTYwXCIvPjwvc3ZnPicsXHJcblx0aW5ib3g6XHJcblx0XHQnPHN2ZyB3aWR0aD1cIjY0cHhcIiBoZWlnaHQ9XCI2NHB4XCIgdmlld0JveD1cIjAgMCAyMy4wMCAyNC4wMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHRyYW5zZm9ybT1cIm1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiPjxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMVwiPjwvZz48ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj4gPHBhdGggZD1cIk0zIDEySDguNUwxMCAxNUgxNEwxNiAxMkgyMU0zIDEyVjE4QzMgMTkuMTA0NiAzLjg5NTQzIDIwIDUgMjBIMTlDMjAuMTA0NiAyMCAyMSAxOS4xMDQ2IDIxIDE4VjEyTTMgMTJMNS43NTY2NyA0LjY0ODg4QzUuOTAzMDQgNC4yNTg1NyA2LjI3NjE2IDQgNi42OTMgNEgxNy4zMDdDMTcuNzIzOCA0IDE4LjA5NyA0LjI1ODU3IDE4LjI0MzMgNC42NDg4OEwyMSAxMlwiIHN0cm9rZS13aWR0aD1cIjFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBmaWxsPVwibm9uZVwiPjwvcGF0aD4gPC9nPjwvc3ZnPicsXHJcblx0Y2FsZW5kYXI6XHJcblx0XHQnPHN2ZyBmaWxsPVwiIzAwMDAwMFwiIHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCI4MDBweFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMjY2LjgxNSA1MzcuNzA4YzAgMjIuNjItMTguMzQgNDAuOTYtNDAuOTYgNDAuOTZzLTQwLjk2LTE4LjM0LTQwLjk2LTQwLjk2IDE4LjM0LTQwLjk2IDQwLjk2LTQwLjk2IDQwLjk2IDE4LjM0IDQwLjk2IDQwLjk2em0xODIuNzcgMGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnptMTgyLjc3NSAwYzAgMjIuNjItMTguMzQgNDAuOTYtNDAuOTYgNDAuOTZzLTQwLjk2LTE4LjM0LTQwLjk2LTQwLjk2IDE4LjM0LTQwLjk2IDQwLjk2LTQwLjk2IDQwLjk2IDE4LjM0IDQwLjk2IDQwLjk2em0xODIuNzcgMGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnpNMjY2LjgxNSA2NzkuMzQ3YzAgMjIuNjItMTguMzQgNDAuOTYtNDAuOTYgNDAuOTZzLTQwLjk2LTE4LjM0LTQwLjk2LTQwLjk2IDE4LjM0LTQwLjk2IDQwLjk2LTQwLjk2IDQwLjk2IDE4LjM0IDQwLjk2IDQwLjk2em0xODIuNzcgMGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnptMTgyLjc3NSAwYzAgMjIuNjItMTguMzQgNDAuOTYtNDAuOTYgNDAuOTZzLTQwLjk2LTE4LjM0LTQwLjk2LTQwLjk2IDE4LjM0LTQwLjk2IDQwLjk2LTQwLjk2IDQwLjk2IDE4LjM0IDQwLjk2IDQwLjk2em0xODIuNzcgMGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnpNMjY2LjgxNSA4MjAuOTg4YzAgMjIuNjItMTguMzQgNDAuOTYtNDAuOTYgNDAuOTZzLTQwLjk2LTE4LjM0LTQwLjk2LTQwLjk2IDE4LjM0LTQwLjk2IDQwLjk2LTQwLjk2IDQwLjk2IDE4LjM0IDQwLjk2IDQwLjk2em0xODIuNzcgMGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnptMTgyLjc3NSAwYzAgMjIuNjItMTguMzQgNDAuOTYtNDAuOTYgNDAuOTZzLTQwLjk2LTE4LjM0LTQwLjk2LTQwLjk2IDE4LjM0LTQwLjk2IDQwLjk2LTQwLjk2IDQwLjk2IDE4LjM0IDQwLjk2IDQwLjk2em0xODIuNzcgMGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnpNMjI4LjE4IDgxLjkxOHYxNTMuNmMwIDExLjMxMSA5LjE2OSAyMC40OCAyMC40OCAyMC40OHMyMC40OC05LjE2OSAyMC40OC0yMC40OHYtMTUzLjZjMC0xMS4zMTEtOS4xNjktMjAuNDgtMjAuNDgtMjAuNDhzLTIwLjQ4IDkuMTY5LTIwLjQ4IDIwLjQ4em01MjguMDkgMHYxNTMuNmMwIDExLjMxMSA5LjE2OSAyMC40OCAyMC40OCAyMC40OHMyMC40OC05LjE2OSAyMC40OC0yMC40OHYtMTUzLjZjMC0xMS4zMTEtOS4xNjktMjAuNDgtMjAuNDgtMjAuNDhzLTIwLjQ4IDkuMTY5LTIwLjQ4IDIwLjQ4elwiLz48cGF0aCBkPVwiTTg5MC44NzcgMTM3LjUxN2MzMy45MzEgMCA2MS40NCAyNy41MDkgNjEuNDQgNjEuNDR2NzAzLjM3NWMwIDMzLjkzMS0yNy41MDkgNjEuNDQtNjEuNDQgNjEuNDRoLTc1Ny43NmMtMzMuOTMxIDAtNjEuNDQtMjcuNTA5LTYxLjQ0LTYxLjQ0VjE5OC45NTdjMC0zMy45MzEgMjcuNTA5LTYxLjQ0IDYxLjQ0LTYxLjQ0aDc1Ny43NnptLTc1Ny43NiA0MC45NmMtMTEuMzA5IDAtMjAuNDggOS4xNzEtMjAuNDggMjAuNDh2NzAzLjM3NWMwIDExLjMwOSA5LjE3MSAyMC40OCAyMC40OCAyMC40OGg3NTcuNzZjMTEuMzA5IDAgMjAuNDgtOS4xNzEgMjAuNDgtMjAuNDhWMTk4Ljk1N2MwLTExLjMwOS05LjE3MS0yMC40OC0yMC40OC0yMC40OGgtNzU3Ljc2elwiLz48cGF0aCBkPVwiTTU3NS4wMyAzMzguMjg4YzAtMzMuOTMtMjcuNTEtNjEuNDQtNjEuNDQtNjEuNDRzLTYxLjQ0IDI3LjUxLTYxLjQ0IDYxLjQ0YzAgMzMuOTMgMjcuNTEgNjEuNDQgNjEuNDQgNjEuNDRzNjEuNDQtMjcuNTEgNjEuNDQtNjEuNDR6bTQwLjk2IDBjMCA1Ni41NTEtNDUuODQ5IDEwMi40LTEwMi40IDEwMi40cy0xMDIuNC00NS44NDktMTAyLjQtMTAyLjRjMC01Ni41NTEgNDUuODQ5LTEwMi40IDEwMi40LTEwMi40czEwMi40IDQ1Ljg0OSAxMDIuNCAxMDIuNHpcIi8+PC9zdmc+JyxcclxuXHRwbHVzOiAnPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNiwgNilcIj48cGF0aCBkPVwiTTYgNVYuNWEuNS41IDAgMDExIDBWNmg1LjVhLjUuNSAwIDExMCAxSDd2NS41YS41LjUgMCAxMS0xIDBWN0guNWEuNS41IDAgMDEwLTFINnpcIiBmaWxsLXJ1bGU9XCJyb3VuZFwiPjwvcGF0aD48L2c+PC9zdmc+JyxcclxuXHRtZW51OiAnPHN2ZyB3aWR0aD1cIjgwMHB4XCIgaGVpZ2h0PVwiODAwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNCAxN0g4TTEyIDE3SDIwTTQgMTJIMjBNNCA3SDEyTTE2IDdIMjBcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+PC9zdmc+JyxcclxuXHRzZWFyY2g6XHJcblx0XHQnPHN2ZyB3aWR0aD1cIjgwMHB4XCIgaGVpZ2h0PVwiODAwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEwIDVDNy4yMzg1OCA1IDUgNy4yMzg1OCA1IDEwQzUgMTIuNzYxNCA3LjIzODU4IDE1IDEwIDE1QzExLjM4MSAxNSAxMi42Mjk2IDE0LjQ0MTUgMTMuNTM1NSAxMy41MzU1QzE0LjQ0MTUgMTIuNjI5NiAxNSAxMS4zODEgMTUgMTBDMTUgNy4yMzg1OCAxMi43NjE0IDUgMTAgNVpNMyAxMEMzIDYuMTM0MDEgNi4xMzQwMSAzIDEwIDNDMTMuODY2IDMgMTcgNi4xMzQwMSAxNyAxMEMxNyAxMS41NzE5IDE2LjQ4MSAxMy4wMjM5IDE1LjYwNjMgMTQuMTkyMUwyMC43MDcxIDE5LjI5MjlDMjEuMDk3NiAxOS42ODM0IDIxLjA5NzYgMjAuMzE2NiAyMC43MDcxIDIwLjcwNzFDMjAuMzE2NiAyMS4wOTc2IDE5LjY4MzQgMjEuMDk3NiAxOS4yOTI5IDIwLjcwNzFMMTQuMTkyMSAxNS42MDYzQzEzLjAyMzkgMTYuNDgxIDExLjU3MTkgMTcgMTAgMTdDNi4xMzQwMSAxNyAzIDEzLjg2NiAzIDEwWlwiIC8+PC9zdmc+JyxcclxuXHRzdW46ICc8c3ZnIHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCI4MDBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cInllbGxvd1wiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNS4wOTY3N1wiLz48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIuOTU1NiAzLjA4MDY1QzEyLjk1NTYgMi41NTI4NiAxMi41Mjc3IDIuMTI1IDEyIDIuMTI1QzExLjQ3MjIgMi4xMjUgMTEuMDQ0MyAyLjU1Mjg2IDExLjA0NDMgMy4wODA2NUwxMS4wNDQzIDUuNjQwNzhDMTEuMzU2MSA1LjU5NDMyIDExLjY3NTMgNS41NzAyNCAxMiA1LjU3MDI0QzEyLjMyNDcgNS41NzAyNCAxMi42NDM4IDUuNTk0MzEgMTIuOTU1NiA1LjY0MDc2TDEyLjk1NTYgMy4wODA2NVpNMTIuOTU1NiAxOC4zNTk0QzEyLjY0MzggMTguNDA1OSAxMi4zMjQ3IDE4LjQyOTkgMTIgMTguNDI5OUMxMS42NzUzIDE4LjQyOTkgMTEuMzU2MSAxOC40MDU4IDExLjA0NDMgMTguMzU5NEwxMS4wNDQzIDIwLjkxOTRDMTEuMDQ0MyAyMS40NDcxIDExLjQ3MjIgMjEuODc1IDEyIDIxLjg3NUMxMi41Mjc3IDIxLjg3NSAxMi45NTU2IDIxLjQ0NzEgMTIuOTU1NiAyMC45MTk0TDEyLjk1NTYgMTguMzU5NFpcIiAvPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yMC45MTk0IDEyLjk1NTZDMjEuNDQ3MSAxMi45NTU2IDIxLjg3NSAxMi41Mjc3IDIxLjg3NSAxMkMyMS44NzUgMTEuNDcyMiAyMS40NDcxIDExLjA0NDMgMjAuOTE5NCAxMS4wNDQzTDE4LjM1OTIgMTEuMDQ0M0MxOC40MDU3IDExLjM1NjEgMTguNDI5OCAxMS42NzUzIDE4LjQyOTggMTJDMTguNDI5OCAxMi4zMjQ3IDE4LjQwNTcgMTIuNjQzOCAxOC4zNTkyIDEyLjk1NTZMMjAuOTE5NCAxMi45NTU2Wk01LjY0MDYgMTIuOTU1NkM1LjU5NDE1IDEyLjY0MzggNS41NzAwOCAxMi4zMjQ3IDUuNTcwMDggMTJDNS41NzAwOCAxMS42NzUzIDUuNTk0MTYgMTEuMzU2MSA1LjY0MDYyIDExLjA0NDNMMy4wODA2NCAxMS4wNDQzQzIuNTUyODYgMTEuMDQ0MyAyLjEyNSAxMS40NzIyIDIuMTI1IDEyQzIuMTI1IDEyLjUyNzcgMi41NTI4NiAxMi45NTU2IDMuMDgwNjQgMTIuOTU1Nkw1LjY0MDYgMTIuOTU1NlpcIiAvPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xOC45ODI4IDYuMzY4NzZDMTkuMzU2IDUuOTk1NTUgMTkuMzU2IDUuMzkwNDcgMTguOTgyOCA1LjAxNzI3QzE4LjYwOTYgNC42NDQwNyAxOC4wMDQ1IDQuNjQ0MDcgMTcuNjMxMyA1LjAxNzI3TDE1LjgyMDkgNi44Mjc2NEMxNi4wNzQzIDcuMDE1MjggMTYuMzE2OSA3LjIyMzkxIDE2LjU0NjYgNy40NTM1NEMxNi43NzYyIDcuNjgzMTUgMTYuOTg0OCA3LjkyNTgxIDE3LjE3MjQgOC4xNzkxMkwxOC45ODI4IDYuMzY4NzZaTTguMTc4OTggMTcuMTcyNUM3LjkyNTY3IDE2Ljk4NDkgNy42ODMwMiAxNi43NzYzIDcuNDUzNDEgMTYuNTQ2N0M3LjIyMzc4IDE2LjMxNzEgNy4wMTUxNCAxNi4wNzQ0IDYuODI3NTEgMTUuODIxMUw1LjAxNzQyIDE3LjYzMTFDNC42NDQyMiAxOC4wMDQzIDQuNjQ0MjIgMTguNjA5NCA1LjAxNzQyIDE4Ljk4MjZDNS4zOTA2MiAxOS4zNTU4IDUuOTk1NyAxOS4zNTU4IDYuMzY4OTEgMTguOTgyNkw4LjE3ODk4IDE3LjE3MjVaXCIgLz48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNi4zNjg4OCA1LjAxNzIyQzUuOTk1NjggNC42NDQwMiA1LjM5MDYgNC42NDQwMiA1LjAxNzM5IDUuMDE3MjJDNC42NDQxOSA1LjM5MDQzIDQuNjQ0MTkgNS45OTU1MSA1LjAxNzM5IDYuMzY4NzFMNi44Mjc3NiA4LjE3OTA4QzcuMDE1NCA3LjkyNTc0IDcuMjI0MDMgNy42ODMwNiA3LjQ1MzY2IDcuNDUzNDJDNy42ODMyNyA3LjIyMzgxIDcuOTI1OTMgNy4wMTUyIDguMTc5MjQgNi44Mjc1OEw2LjM2ODg4IDUuMDE3MjJaTTE3LjE3MjcgMTUuODIxQzE2Ljk4NTEgMTYuMDc0MyAxNi43NzY0IDE2LjMxNyAxNi41NDY4IDE2LjU0NjZDMTYuMzE3MiAxNi43NzYyIDE2LjA3NDUgMTYuOTg0OSAxNS44MjEyIDE3LjE3MjVMMTcuNjMxMyAxOC45ODI2QzE4LjAwNDUgMTkuMzU1OCAxOC42MDk1IDE5LjM1NTggMTguOTgyOCAxOC45ODI2QzE5LjM1NiAxOC42MDk0IDE5LjM1NiAxOC4wMDQzIDE4Ljk4MjggMTcuNjMxMUwxNy4xNzI3IDE1LjgyMVpcIiAvPjwvc3ZnPicsXHJcblx0bW9vbjogJzxzdmcgd2lkdGg9XCI4MDBweFwiIGhlaWdodD1cIjgwMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiZ3JleVwiPjxwYXRoIGQ9XCJNMTIuMDU1NyAzLjU5OTc0QzEyLjI3NTIgMy4yODEzIDEyLjI5MTMgMi44NjQ4NCAxMi4wOTcyIDIuNTMwMzNDMTEuOTAzMSAyLjE5NTgyIDExLjUzMzUgMi4wMDMyNCAxMS4xNDgxIDIuMDM1NzlDNi4wMjM1MSAyLjQ2ODY4IDIgNi43NjM5MiAyIDEyQzIgMTcuNTIyOCA2LjQ3NzE1IDIyIDEyIDIyQzE3LjIzNiAyMiAyMS41MzEzIDE3Ljk3NjQgMjEuOTY0MiAxMi44NTE4QzIxLjk5NjcgMTIuNDY2NCAyMS44MDQxIDEyLjA5NjggMjEuNDY5NiAxMS45MDI3QzIxLjEzNTEgMTEuNzA4NiAyMC43MTg3IDExLjcyNDggMjAuNDAwMiAxMS45NDQzQzE5LjQzNDEgMTIuNjEwMiAxOC4yNjQxIDEzIDE3IDEzQzEzLjY4NjMgMTMgMTEgMTAuMzEzNyAxMSA2Ljk5OTk2QzExIDUuNzM1ODkgMTEuMzg5OCA0LjU2NTg3IDEyLjA1NTcgMy41OTk3NFpcIiAvPjwvc3ZnPicsXHJcblx0cGVuOiAnPHN2ZyB3aWR0aD1cIjgwMHB4XCIgaGVpZ2h0PVwiODAwcHhcIiB2aWV3Qm94PVwiMCAwIDI4IDE4XCI+PGcgaWQ9XCJvdXRcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHNrZXRjaDp0eXBlPVwiTVNQYWdlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUsMClcIj48cGF0aCBkPVwiTTIuMjUsMTIuOTM3ODkwNiBMMi4yNSwxNS43NSBMNS4wNjIxMDk0MywxNS43NSBMMTMuMzU1OTU3NSw3LjQ1NjE1MTkyIEwxMC41NDM4NDgxLDQuNjQ0MDQyNDkgTDIuMjUsMTIuOTM3ODkwNiBMMi4yNSwxMi45Mzc4OTA2IEwyLjI1LDEyLjkzNzg5MDYgWiBNMTUuNTMwNjU1NSw1LjI4MTQ1Mzk2IEMxNS44MjMxMTQ4LDQuOTg4OTk0NTggMTUuODIzMTE0OCw0LjUxNjU2MDIgMTUuNTMwNjU1NSw0LjIyNDEwMDgyIEwxMy43NzU4OTkyLDIuNDY5MzQ0NTQgQzEzLjQ4MzQzOTgsMi4xNzY4ODUxNSAxMy4wMTEwMDU0LDIuMTc2ODg1MTUgMTIuNzE4NTQ2LDIuNDY5MzQ0NTQgTDExLjM0NjIzNjYsMy44NDE2NTM5NCBMMTQuMTU4MzQ2MSw2LjY1Mzc2MzM3IEwxNS41MzA2NTU1LDUuMjgxNDUzOTYgTDE1LjUzMDY1NTUsNS4yODE0NTM5NiBMMTUuNTMwNjU1NSw1LjI4MTQ1Mzk2IFpcIiBpZD1cInBhdGhcIiBmaWxsPVwiIzU1NGY0ZlwiIHNrZXRjaDp0eXBlPVwiTVNTaGFwZUdyb3VwXCI+PC9wYXRoPjwvZz48L3N2Zz4nLFxyXG5cdGNpcmNsZTpcclxuXHRcdCc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBpZD1cImNvbG9yLW1hcmtcIj48cGF0aCBkPVwiTTEyIDdhNSA1IDAgMTEwIDEwIDUgNSAwIDAxMC0xMHpcIiA+PC9wYXRoPjwvc3ZnPicsXHJcbn07XHJcblxyXG5leHBvcnQgeyBzdmdzIH07XHJcbiIsImltcG9ydCB7IHN2Z3MgfSBmcm9tICcuLi9zdmdzL3N2Z3MuanMnO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlL3RvcC1iYXIuY3NzJztcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVG9wQmFyKCkge1xyXG5cdGNvbnN0IHRvcEJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHRvcEJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b3AtYmFyLWNvbnRhaW5lcicpO1xyXG5cclxuXHRjb25zdCBidXJnZXJNZW51ID0gY3JlYXRlYnVyZ2VyTWVudSgpO1xyXG5cdGNvbnN0IHF1aWNrU2VhcmNoID0gY3JlYXRlUXVpY2tTZWFyY2goKTtcclxuXHRjb25zdCB0b29nbGVUaGVtZSA9IGNyZWF0ZVRvZ2dsZSgpO1xyXG5cclxuXHR0b3BCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYnVyZ2VyTWVudSk7XHJcblx0dG9wQmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1aWNrU2VhcmNoKTtcclxuXHR0b3BCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQodG9vZ2xlVGhlbWUpO1xyXG5cclxuXHRyZXR1cm4gdG9wQmFyQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVidXJnZXJNZW51KCkge1xyXG5cdGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRtZW51LmNsYXNzTGlzdC5hZGQoJ2J1cmdlci1tZW51Jyk7XHJcblx0bWVudS5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuXHRtZW51LmlkID0gJ2J1cmdlck1lbnUnO1xyXG5cdG1lbnUuaW5uZXJIVE1MID0gc3Zncy5tZW51O1xyXG5cclxuXHRyZXR1cm4gbWVudTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUXVpY2tTZWFyY2goKSB7XHJcblx0Y29uc3QgcXVpY2tTZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRxdWlja1NlYXJjaC5jbGFzc0xpc3QuYWRkKCdxdWljay1zZWFyY2gnKTtcclxuXHRxdWlja1NlYXJjaC5pbm5lckhUTUwgPSBzdmdzLnNlYXJjaDtcclxuXHJcblx0Y29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdGlucHV0LnBsYWNlaG9sZGVyID0gJ1NlYXJjaC4uLic7XHJcblxyXG5cdHF1aWNrU2VhcmNoLmFwcGVuZENoaWxkKGlucHV0KTtcclxuXHJcblx0cmV0dXJuIHF1aWNrU2VhcmNoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb2dnbGUoKSB7XHJcblx0Y29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS10aGVtZScpO1xyXG5cdHRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuXHR0b2dnbGUuaW5uZXJIVE1MID0gc3Zncy5zdW47XHJcblx0dG9nZ2xlLmlubmVySFRNTCArPSBzdmdzLm1vb247XHJcblxyXG5cdGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGNpcmNsZS5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcclxuXHRjaXJjbGUuaWQgPSAndG9nZ2xlLWNpcmNsZSc7XHJcblxyXG5cdHRvZ2dsZS5hcHBlbmRDaGlsZChjaXJjbGUpO1xyXG5cclxuXHRyZXR1cm4gdG9nZ2xlO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZW5lcmF0ZVRvcEJhciB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBVSSB9IGZyb20gJy4vdWktbW9kdWxlL1VJJztcclxuXHJcblVJLmluaXQoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9