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
  flex-direction: column;
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
}`, "",{"version":3,"sources":["webpack://./src/style/modal.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,aAAa;EACb,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,2BAA2B;EAC3B,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mCAAmC;EACnC,oBAAoB;EACpB,uCAAuC;EACvC,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;EAC7B,oBAAoB;EACpB,mCAAmC;EACnC,wBAAwB;EACxB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,YAAY;EACZ,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,sCAAsC;EACtC,YAAY;AACd","sourcesContent":[".modal-container {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #2222227a;\r\n  z-index: 2;\r\n}\r\n\r\n.modal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: min(500px, 80vw);\r\n  border: 1px solid var(--text-color);\r\n  border-radius: .5rem;\r\n  background-color: var(--side-bar-color);\r\n  color: var(--text-color);\r\n}\r\n\r\n.modal-header {\r\n  font-size: 1.1rem;\r\n  font-weight: bold;\r\n  padding: .5rem;\r\n}\r\n\r\n.content-modal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.input-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.input-container input {\r\n  background-color: transparent;\r\n  border-radius: .2rem;\r\n  border: 1px solid var(--text-color);\r\n  color: var(--text-color);\r\n  padding: .3rem;\r\n  outline: none;\r\n}\r\n\r\n.field {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: .5rem 0;\r\n  gap: .5rem;\r\n}\r\n\r\n.btns-container {\r\n  display: flex;\r\n  gap: .2rem;\r\n  align-self: flex-end;\r\n}\r\n\r\n.btns-container button {\r\n  width: 80px;\r\n  padding: .2rem;\r\n  border: none;\r\n  border-radius: .2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.btns-container .blue {\r\n  background-color: var(--primary-color);\r\n  color: white;\r\n}"],"sourceRoot":""}]);
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

.active {
	background-color: var(--hover-dark-color);
}

@media screen and (max-width: 800px) {
	.side-bar-shadow {
		width: 0;
	}
}
`, "",{"version":3,"sources":["webpack://./src/style/side-bar.css"],"names":[],"mappings":"AAAA;CACC,eAAe;CACf,2CAA2C;CAC3C,4BAA4B;CAC5B,uCAAuC;CACvC,UAAU;CACV,iBAAiB;CACjB,kBAAkB;CAClB,wDAAwD;AACzD;;AAEA;CACC,2CAA2C;CAC3C,4BAA4B;CAC5B,oDAAoD;AACrD;;AAEA;CACC,eAAe;CACf,wBAAwB;AACzB;;AAEA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,WAAW;CACX,eAAe;CACf,qBAAqB;CACrB,eAAe;AAChB;;AAEA;CACC,yCAAyC;AAC1C;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,eAAe;CACf,eAAe;CACf,qBAAqB;AACtB;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,uBAAuB;CACvB,yBAAyB;AAC1B;;AAEA;CACC,OAAO;AACR;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,OAAO;CACP,aAAa;CACb,sBAAsB;CACtB,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,eAAe;CACf,mBAAmB;CACnB,eAAe;CACf,qBAAqB;CACrB,8BAA8B;AAC/B;;AAEA;CACC,OAAO;CACP,aAAa;CACb,sBAAsB;CACtB,eAAe;CACf,wBAAwB;CACxB,qBAAqB;AACtB;;AAEA;CACC,OAAO;AACR;;AAEA;CACC,uDAAuD;AACxD;;AAEA;CACC,yCAAyC;AAC1C;;AAEA;CACC;EACC,QAAQ;CACT;AACD","sourcesContent":[".side-bar-container {\r\n\tposition: fixed;\r\n\theight: calc(100vh - var(--top-bar-height));\r\n\twidth: var(--side-bar-width);\r\n\tbackground-color: var(--side-bar-color);\r\n\tz-index: 1;\r\n\tpadding-top: 2rem;\r\n\toverflow-y: scroll;\r\n\ttransition: transform var(--transition-time) ease-in-out;\r\n}\r\n\r\n.side-bar-shadow {\r\n\theight: calc(100vh - var(--top-bar-height));\r\n\twidth: var(--side-bar-width);\r\n\ttransition: width var(--transition-time) ease-in-out;\r\n}\r\n\r\n.side-bar {\r\n\tpadding: 0 1rem;\r\n\tcolor: var(--text-color);\r\n}\r\n\r\nspan {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.option {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 0.3rem;\r\n\tpadding: 0.5rem;\r\n\tborder-radius: 0.5rem;\r\n\tcursor: pointer;\r\n}\r\n\r\n.option:hover {\r\n\tbackground-color: var(--hover-dark-color);\r\n}\r\n\r\n.icon {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 25px;\r\n\tcursor: pointer;\r\n\tborder-radius: 0.5rem;\r\n}\r\n\r\n.icon svg {\r\n\theight: 25px;\r\n\twidth: 25px;\r\n\tfill: var(--text-color);\r\n\tstroke: var(--text-color);\r\n}\r\n\r\n.name {\r\n\tflex: 1;\r\n}\r\n\r\n.standard-options {\r\n\tmargin-bottom: 2rem;\r\n}\r\n\r\n.projects-container {\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmargin-bottom: 1rem;\r\n}\r\n\r\n.projects-header {\r\n\tdisplay: flex;\r\n\tfont-size: 1rem;\r\n\talign-items: center;\r\n\tpadding: 0.5rem;\r\n\tborder-radius: 0.5rem;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.projects {\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tflex-wrap: wrap;\r\n\tpadding-inline: 0.5rem 0;\r\n\tword-break: break-all;\r\n}\r\n\r\n.open {\r\n\tleft: 0;\r\n}\r\n\r\n.close {\r\n\ttransform: translateX(calc(-1 * var(--side-bar-width)));\r\n}\r\n\r\n.active {\r\n\tbackground-color: var(--hover-dark-color);\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n\t.side-bar-shadow {\r\n\t\twidth: 0;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _date_date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date/date.js */ "./src/date/date.js");


const ProjectsModule = (function () {
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

	function getAllTasks() {
		const projects = getAllProjects();
		const tasks = [];
		projects.forEach((project) => {
			tasks.push(...project.getTasks());
		});

		return tasks;
	}

	return {
		addProject,
		getAllProjects,
		getProject,
		findProject,
		removeProject,
		getAllTasks,
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
		addDate: (0,_date_date_js__WEBPACK_IMPORTED_MODULE_0__.getDate)(),
	};
}

ProjectsModule.addProject('Make');
const make = ProjectsModule.getProject('Make');
make.addTask('test1', 'dasd', '24-05-2024', 'p1');
make.addTask('test2', 'dasd', '24-05-2024', 'p1');
make.addTask('test3', 'dasd', '24-05-2024', 'p1');
make.addTask('test4', 'dasd', '24-05-2024', 'p1');

ProjectsModule.addProject('new');
const newProject = ProjectsModule.getProject('new');
newProject.addTask('test5', 'dasd', '24-05-2024', 'p2');
newProject.addTask('test6', 'dasd', '24-05-2024', 'p1');
newProject.addTask('test7', 'dasd', '24-05-2024', 'p3');
newProject.addTask('test8', 'dasd', '24-05-2024', 'p1');





/***/ }),

/***/ "./src/date/date.js":
/*!**************************!*\
  !*** ./src/date/date.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDate: () => (/* binding */ getDate)
/* harmony export */ });
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
/* harmony import */ var _date_date_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../date/date.js */ "./src/date/date.js");
/* harmony import */ var _modals_modal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/modal.js */ "./src/ui-module/modals/modal.js");








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
		changePageModule.init();
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

	const changePageModule = (function () {
		const Pages = [];
		const sideBarContainer = sideBar[0];
		let currentPage = null;

		function createPage(name) {
			const page = createMainPage(name);
			return {
				name: name,
				page: page,
			};
		}

		function createMainPage(title) {
			const main = document.createElement('main');
			main.id = title;

			const header = document.createElement('div');
			header.classList.add('header');

			const headerTitle = document.createElement('div');
			headerTitle.classList.add('project-name');
			headerTitle.textContent = title;

			const mainContent = document.createElement('div');
			mainContent.classList.add('main-content');

			const tasksContainer = document.createElement('div');
			tasksContainer.classList.add('tasks');

			mainContent.appendChild(tasksContainer);
			header.appendChild(headerTitle);
			main.appendChild(header);
			main.appendChild(mainContent);

			return main;
		}

		function createDefalutPages() {
			const inboxPage = createPage('Inbox');
			const todayPage = createPage('Today');
			const weekPage = createPage('Week');

			Pages.push(inboxPage);
			Pages.push(todayPage);
			Pages.push(weekPage);
		}

		function addDefalutProjectsEvents() {
			const inbox = sideBarContainer.querySelector('#inbox');
			const todayProjects = sideBarContainer.querySelector('#today');
			const weekProjects = sideBarContainer.querySelector('#week');

			inbox.addEventListener('click', () => {
				openDefalutPage('Inbox', getAllTasks);
			});
			todayProjects.addEventListener('click', () => {
				openDefalutPage('Today', getTodayTasks);
			});
			weekProjects.addEventListener('click', () => {
				openDefalutPage('Week', getWeekTasks);
			});
		}

		function openDefalutPage(pageName, fun) {
			const defaultPage = findPage(pageName);
			appendTasks(fun, defaultPage);
			openPage(pageName);
		}

		function closeCurrentpage() {
			if (!currentPage) return;
			page.removeChild(currentPage);
		}

		function findIndex(name) {
			return Pages.findIndex((page) => page.name === name);
		}

		function findPage(name) {
			const index = findIndex(name);
			return Pages[index].page;
		}

		function appendTasks(fun, element) {
			const tasksContaier = element.querySelector('.tasks');
			tasksContaier.innerHTML = '';
			const tasks = fun();
			tasks.forEach((task) => {
				const container = createTask(task);
				tasksContaier.appendChild(container);
			});
		}

		function getAllTasks() {
			const tasks = _Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule.getAllTasks();
			return tasks;
		}

		function getTodayTasks() {
			const tasks = getAllTasks();
			const todayTasks = tasks.filter(({ addDate }) => {
				const actualDate = (0,_date_date_js__WEBPACK_IMPORTED_MODULE_5__.getDate)();
				return (
					actualDate.year === addDate.year &&
					actualDate.month === addDate.month &&
					actualDate.day === addDate.day
				);
			});

			return todayTasks;
		}

		function getWeekTasks() {
			const tasks = getAllTasks();
			const weekTasks = tasks.filter(({ addDate }) => {
				const actualDate = (0,_date_date_js__WEBPACK_IMPORTED_MODULE_5__.getDate)();
				return (
					actualDate.year === addDate.year &&
					actualDate.month === addDate.month &&
					actualDate.day <= addDate.day + 7
				);
			});

			return weekTasks;
		}

		function createTask(task) {
			const taskContainer = document.createElement('div');
			taskContainer.classList.add('task');

			const circle = document.createElement('span');
			circle.classList.add('circle');

			const taskName = document.createElement('span');
			taskName.classList.add('name');
			taskName.textContent = task.title;

			taskContainer.appendChild(circle);
			taskContainer.appendChild(taskName);

			return taskContainer;
		}

		function active() {
			const triggers = sideBarContainer.querySelectorAll('.option');
			const currentPageId = currentPage.id;

			triggers.forEach((trigger) => {
				if (trigger.id.toLowerCase() === currentPageId.toLowerCase()) {
					trigger.classList.add('active');
				} else {
					trigger.classList.remove('active');
				}
			});
		}

		function appendProject(project) {
			const projectsContainer = sideBarContainer.querySelector('.projects');
			projectsContainer.appendChild(createProject(project));
		}

		function createProject(project) {
			const container = document.createElement('div');
			container.classList.add('option');
			container.id = project.name;

			const projectName = document.createElement('span');
			projectName.classList.add('name');
			projectName.textContent = project.name;

			const remove = document.createElement('span');
			remove.classList.add('icon');
			remove.innerHTML = _svgs_svgs_js__WEBPACK_IMPORTED_MODULE_4__.svgs.close;
			remove.addEventListener('click', () => {
				removeProject(container);
			});

			container.appendChild(projectName);
			container.appendChild(remove);

			container.addEventListener('click', (e) => {
				if (e.target === container || e.target === projectName) {
					openPage(container.id);
				}
			});

			createNewPage(project);
			return container;
		}

		function removeProject(container) {
			const projects = sideBarContainer.querySelector('.projects');
			const pageIndex = findIndex(container.id);

			projects.removeChild(container);
			_Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule.removeProject(container.id);

			if (currentPage === findPage(container.id)) {
				openDefalutPage('Inbox', getAllTasks);
			}
			removeProjectPage(pageIndex);
			updateDefaultPages();
		}

		function updateDefaultPages() {
			Pages.forEach((object) => {
				if (object.name === 'Inbox') {
					appendTasks(getAllTasks, object.page);
				}
				if (object.name === 'Today') {
					appendTasks(getTodayTasks, object.page);
				}
				if (object.name === 'This Week') {
					appendTasks(getWeekTasks, object.page);
				}
			});
		}

		function removeProjectPage(index) {
			Pages.splice(index, 1);
		}

		function addAllProjects() {
			const projects = _Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule.getAllProjects();
			const projectsContainer = sideBarContainer.querySelector('.projects');
			projects.forEach((project) => {
				projectsContainer.appendChild(createProject(project));
			});
		}

		function createNewPage(project) {
			const newPage = createPage(project.name);
			const btn = document.createElement('button');
			btn.classList.add('btn-add');
			const icon = document.createElement('span');
			icon.classList.add('icon');
			icon.innerHTML = _svgs_svgs_js__WEBPACK_IMPORTED_MODULE_4__.svgs.plus;
			const span = document.createElement('span');
			span.textContent = 'Add Task';

			btn.appendChild(icon);
			btn.appendChild(span);

			btn.addEventListener('click', () => {
				addTask(newPage.page);
			});
			newPage.page.appendChild(btn);

			if (_Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule.findProject(project.name)) {
				const tasks = getProjectTasks(project.name);
				const tasksPlace = newPage.page.querySelector('.tasks');

				tasks.forEach((task) => {
					let taskContainer = createTask(task);
					tasksPlace.appendChild(taskContainer);
				});
			}
			Pages.push(newPage);
		}

		function getProjectTasks(projectName) {
			const project = _Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule.getProject(projectName);
			const tasks = project.getTasks();
			return tasks;
		}

		function addTask(PageName) {
			openTaskModal();
		}

		function openTaskModal() {
			const modal = (0,_modals_modal_js__WEBPACK_IMPORTED_MODULE_6__.generateModal)();
			const header = modal.querySelector('.modal-header');
			header.textContent = 'Add Task';
			const inputs = [
				{
					type: 'text',
					id: 'title',
					title: 'Title',
				},
				{
					type: 'text',
					id: 'description',
					title: 'Description',
				},
				{
					type: 'date',
					id: 'dueDate',
					title: 'dueDate',
				},
				{
					type: 'select',
					id: 'priority',
					title: 'priority',
				},
			];

			createInputs(inputs, modal);

			page.appendChild(modal);
		}

		function createInputs(inputs, modal) {
			const inputContainer = modal.querySelector('.input-container');

			inputs.forEach((element) => {
				const field = document.createElement('div');
				field.classList.add('field');

				const input = document.createElement('input');
				input.type = element.type;
				input.id = element.id;

				const label = document.createElement('label');
				label.textContent = element.title;
				label.htmlFor = element.id;

				field.appendChild(label);
				field.appendChild(input);

				inputContainer.appendChild(field);
			});
		}

		function openPage(pageName) {
			const projectPage = findPage(pageName);
			closeCurrentpage();
			currentPage = projectPage;
			page.appendChild(projectPage);
			active();
		}

		function init() {
			createDefalutPages();
			addDefalutProjectsEvents();
			openDefalutPage('Inbox', getAllTasks);
			addAllProjects();
		}

		return {
			init,
			appendProject,
		};
	})();

	function addProject() {
		let name = projectModal.querySelector('input').value;
		if (!name) return;
		if (_Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule.findProject(name)) {
			alert('Project name already exist.');
			return;
		}

		_Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule.addProject(name);
		changePageModule.appendProject(_Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule.getProject(name));
		closeProjectModal();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYjBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzREFBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEI7Ozs7Ozs7Ozs7Ozs7OztBQzlGMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNibUM7QUFDRztBQUNRO0FBQ1I7QUFDbkI7QUFDSTtBQUNRO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtRUFBYztBQUM5QixpQkFBaUIsc0VBQWU7QUFDaEMsc0JBQXNCLDhFQUFvQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpRUFBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFNBQVM7QUFDL0MsdUJBQXVCLHNEQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUMsdUJBQXVCLHNEQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQUk7QUFDMUI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEI7Ozs7Ozs7VUN6RDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7QUNBb0M7QUFDcEM7QUFDQSw2Q0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlL21vZGFsLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS9zaWRlLWJhci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUvdG9wLWJhci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUvbW9kYWwuY3NzPzE3MDYiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUvc2lkZS1iYXIuY3NzPzM4YzMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUvdG9wLWJhci5jc3M/OTMzZiIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL1Byb2plY3RzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2RhdGUvZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy91aS1tb2R1bGUvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdWktbW9kdWxlL21vZGFscy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy91aS1tb2R1bGUvbW9kYWxzL3Byb2plY3QtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdWktbW9kdWxlL3NpZGUtYmFyL3NpZGUtYmFyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3VpLW1vZHVsZS9zdmdzL3N2Z3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdWktbW9kdWxlL3RvcC1iYXIvdG9wLWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyN2E7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IG1pbig1MDBweCwgODB2dyk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1iYXItY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbn1cclxuXHJcbi5jb250ZW50LW1vZGFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAycmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5pbnB1dC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lciBpbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogLjJyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIHBhZGRpbmc6IC4zcmVtO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5maWVsZCB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogLjVyZW0gMDtcclxuICBnYXA6IC41cmVtO1xyXG59XHJcblxyXG4uYnRucy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAuMnJlbTtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmJ0bnMtY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgcGFkZGluZzogLjJyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bnMtY29udGFpbmVyIC5ibHVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9tb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQ0FBbUM7RUFDbkMsb0JBQW9CO0VBQ3BCLHVDQUF1QztFQUN2Qyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1vZGFsLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyN2E7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogbWluKDUwMHB4LCA4MHZ3KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLWJhci1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1oZWFkZXIge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmc6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIgaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgcGFkZGluZzogLjNyZW07XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGQge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogLjVyZW0gMDtcXHJcXG4gIGdhcDogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5idG5zLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAuMnJlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRucy1jb250YWluZXIgYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgcGFkZGluZzogLjJyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bnMtY29udGFpbmVyIC5ibHVlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zaWRlLWJhci1jb250YWluZXIge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b3AtYmFyLWhlaWdodCkpO1xyXG5cdHdpZHRoOiB2YXIoLS1zaWRlLWJhci13aWR0aCk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1iYXItY29sb3IpO1xyXG5cdHotaW5kZXg6IDE7XHJcblx0cGFkZGluZy10b3A6IDJyZW07XHJcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uLXRpbWUpIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc2lkZS1iYXItc2hhZG93IHtcclxuXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b3AtYmFyLWhlaWdodCkpO1xyXG5cdHdpZHRoOiB2YXIoLS1zaWRlLWJhci13aWR0aCk7XHJcblx0dHJhbnNpdGlvbjogd2lkdGggdmFyKC0tdHJhbnNpdGlvbi10aW1lKSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNpZGUtYmFyIHtcclxuXHRwYWRkaW5nOiAwIDFyZW07XHJcblx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG5zcGFuIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vcHRpb24ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRnYXA6IDAuM3JlbTtcclxuXHRwYWRkaW5nOiAwLjVyZW07XHJcblx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm9wdGlvbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZGFyay1jb2xvcik7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbi5pY29uIHN2ZyB7XHJcblx0aGVpZ2h0OiAyNXB4O1xyXG5cdHdpZHRoOiAyNXB4O1xyXG5cdGZpbGw6IHZhcigtLXRleHQtY29sb3IpO1xyXG5cdHN0cm9rZTogdmFyKC0tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuXHRmbGV4OiAxO1xyXG59XHJcblxyXG4uc3RhbmRhcmQtb3B0aW9ucyB7XHJcblx0bWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLnByb2plY3RzLWNvbnRhaW5lciB7XHJcblx0ZmxleDogMTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0bWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnByb2plY3RzLWhlYWRlciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAwLjVyZW07XHJcblx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnByb2plY3RzIHtcclxuXHRmbGV4OiAxO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0cGFkZGluZy1pbmxpbmU6IDAuNXJlbSAwO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG5cclxuLm9wZW4ge1xyXG5cdGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoLTEgKiB2YXIoLS1zaWRlLWJhci13aWR0aCkpKTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZGFyay1jb2xvcik7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcblx0LnNpZGUtYmFyLXNoYWRvdyB7XHJcblx0XHR3aWR0aDogMDtcclxuXHR9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc2lkZS1iYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsZUFBZTtDQUNmLDJDQUEyQztDQUMzQyw0QkFBNEI7Q0FDNUIsdUNBQXVDO0NBQ3ZDLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLHdEQUF3RDtBQUN6RDs7QUFFQTtDQUNDLDJDQUEyQztDQUMzQyw0QkFBNEI7Q0FDNUIsb0RBQW9EO0FBQ3JEOztBQUVBO0NBQ0MsZUFBZTtDQUNmLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxlQUFlO0NBQ2YscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyx5Q0FBeUM7QUFDMUM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixlQUFlO0NBQ2YsZUFBZTtDQUNmLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsdUJBQXVCO0NBQ3ZCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLE9BQU87QUFDUjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixxQkFBcUI7Q0FDckIsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsT0FBTztDQUNQLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsZUFBZTtDQUNmLHdCQUF3QjtDQUN4QixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxPQUFPO0FBQ1I7O0FBRUE7Q0FDQyx1REFBdUQ7QUFDeEQ7O0FBRUE7Q0FDQyx5Q0FBeUM7QUFDMUM7O0FBRUE7Q0FDQztFQUNDLFFBQVE7Q0FDVDtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zaWRlLWJhci1jb250YWluZXIge1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b3AtYmFyLWhlaWdodCkpO1xcclxcblxcdHdpZHRoOiB2YXIoLS1zaWRlLWJhci13aWR0aCk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1iYXItY29sb3IpO1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxuXFx0cGFkZGluZy10b3A6IDJyZW07XFxyXFxuXFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcblxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uLXRpbWUpIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXItc2hhZG93IHtcXHJcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b3AtYmFyLWhlaWdodCkpO1xcclxcblxcdHdpZHRoOiB2YXIoLS1zaWRlLWJhci13aWR0aCk7XFxyXFxuXFx0dHJhbnNpdGlvbjogd2lkdGggdmFyKC0tdHJhbnNpdGlvbi10aW1lKSBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYmFyIHtcXHJcXG5cXHRwYWRkaW5nOiAwIDFyZW07XFxyXFxuXFx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5vcHRpb24ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDAuM3JlbTtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZGFyay1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAyNXB4O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5pY29uIHN2ZyB7XFxyXFxuXFx0aGVpZ2h0OiAyNXB4O1xcclxcblxcdHdpZHRoOiAyNXB4O1xcclxcblxcdGZpbGw6IHZhcigtLXRleHQtY29sb3IpO1xcclxcblxcdHN0cm9rZTogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5uYW1lIHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhbmRhcmQtb3B0aW9ucyB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWhlYWRlciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0cGFkZGluZy1pbmxpbmU6IDAuNXJlbSAwO1xcclxcblxcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wZW4ge1xcclxcblxcdGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZSB7XFxyXFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoLTEgKiB2YXIoLS1zaWRlLWJhci13aWR0aCkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZGFyay1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuXFx0LnNpZGUtYmFyLXNoYWRvdyB7XFxyXFxuXFx0XFx0d2lkdGg6IDA7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50b3AtYmFyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcGFkZGluZzogLjRyZW0gMS41cmVtO1xyXG4gIGhlaWdodDogdmFyKC0tdG9wLWJhci1oZWlnaHQpO1xyXG59XHJcblxyXG4udG9wLWJhci1jb250YWluZXIgc3ZnIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZmlsbDogI2ZmZmZmZmM3O1xyXG59XHJcblxyXG4uYnVyZ2VyLW1lbnUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcclxufVxyXG5cclxuLmJ1cmdlci1tZW51IHN2Z3tcclxuICBzdHJva2U6IHdoaXRlO1xyXG59XHJcblxyXG4ucXVpY2stc2VhcmNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xyXG4gIGdhcDogNXB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmYzc7XHJcbn0gXHJcblxyXG4udG9wLWJhci1jb250YWluZXIgaW5wdXQge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgZm9udC1zaXplOiAuOXJlbTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbmlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5xdWljay1zZWFyY2g6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0LWNvbG9yKTtcclxufVxyXG5cclxuLnRvZ2dsZS10aGVtZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmYTg7XHJcbiAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xyXG4gIHBhZGRpbmc6ICAwIC4zcmVtO1xyXG4gIGdhcDogLjJyZW07XHJcbn1cclxuXHJcbi50b2dnbGUtdGhlbWUgc3ZnIHtcclxuICB3aWR0aDogMjNweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udG9nZ2xlLXRoZW1lIC5jaXJjbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLjRyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZTtcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQtY29sb3IpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCApIHtcclxuICAudG9wLWJhci1jb250YWluZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gIH1cclxuICAucXVpY2stc2VhcmNoIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG4gIGlucHV0IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvdG9wLWJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLHNDQUFzQztFQUN0QyxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxxQkFBcUI7RUFDckIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixRQUFRO0VBQ1IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7SUFDckIsU0FBUztFQUNYO0VBQ0E7SUFDRSxPQUFPO0VBQ1Q7RUFDQTtJQUNFLE9BQU87RUFDVDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50b3AtYmFyLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBwYWRkaW5nOiAuNHJlbSAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IHZhcigtLXRvcC1iYXItaGVpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1iYXItY29udGFpbmVyIHN2ZyB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGZpbGw6ICNmZmZmZmZjNztcXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlci1tZW51IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlci1tZW51IHN2Z3tcXHJcXG4gIHN0cm9rZTogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5xdWljay1zZWFyY2gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY1ZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBjb2xvcjogI2ZmZmZmZmM3O1xcclxcbn0gXFxyXFxuXFxyXFxuLnRvcC1iYXItY29udGFpbmVyIGlucHV0IHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogLjlyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucXVpY2stc2VhcmNoOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZ2dsZS10aGVtZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZmE4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xcclxcbiAgcGFkZGluZzogIDAgLjNyZW07XFxyXFxuICBnYXA6IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlLXRoZW1lIHN2ZyB7XFxyXFxuICB3aWR0aDogMjNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUtdGhlbWUgLmNpcmNsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogLjRyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCApIHtcXHJcXG4gIC50b3AtYmFyLWNvbnRhaW5lciB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgfVxcclxcbiAgLnF1aWNrLXNlYXJjaCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICB9XFxyXFxuICBpbnB1dCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZGUtYmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZS1iYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvcC1iYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b3AtYmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2V0RGF0ZSB9IGZyb20gJy4uL2RhdGUvZGF0ZS5qcyc7XHJcblxyXG5jb25zdCBQcm9qZWN0c01vZHVsZSA9IChmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgUHJvamVjdHMgPSBbXTtcclxuXHJcblx0ZnVuY3Rpb24gYWRkUHJvamVjdChuYW1lKSB7XHJcblx0XHRQcm9qZWN0cy5wdXNoKFByb2plY3QobmFtZSkpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0QWxsUHJvamVjdHMoKSB7XHJcblx0XHRyZXR1cm4gUHJvamVjdHM7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRQcm9qZWN0KG5hbWUpIHtcclxuXHRcdGxldCBpbmRleCA9IGZpbmRJbmRleChuYW1lKTtcclxuXHRcdHJldHVybiBQcm9qZWN0c1tpbmRleF07XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBmaW5kSW5kZXgobmFtZSkge1xyXG5cdFx0cmV0dXJuIFByb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGZpbmRQcm9qZWN0KG5hbWUpIHtcclxuXHRcdHJldHVybiBQcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChuYW1lKSB7XHJcblx0XHRjb25zdCBwcm9qZWN0SW5kZXggPSBmaW5kSW5kZXgobmFtZSk7XHJcblx0XHRQcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldEFsbFRhc2tzKCkge1xyXG5cdFx0Y29uc3QgcHJvamVjdHMgPSBnZXRBbGxQcm9qZWN0cygpO1xyXG5cdFx0Y29uc3QgdGFza3MgPSBbXTtcclxuXHRcdHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdFx0dGFza3MucHVzaCguLi5wcm9qZWN0LmdldFRhc2tzKCkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHRhc2tzO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGFkZFByb2plY3QsXHJcblx0XHRnZXRBbGxQcm9qZWN0cyxcclxuXHRcdGdldFByb2plY3QsXHJcblx0XHRmaW5kUHJvamVjdCxcclxuXHRcdHJlbW92ZVByb2plY3QsXHJcblx0XHRnZXRBbGxUYXNrcyxcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gUHJvamVjdChuYW1lKSB7XHJcblx0Y29uc3QgdGFza3MgPSBbXTtcclxuXHJcblx0ZnVuY3Rpb24gYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcblx0XHR0YXNrcy5wdXNoKFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0VGFza3MoKSB7XHJcblx0XHRyZXR1cm4gdGFza3M7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0bmFtZTogbmFtZSxcclxuXHRcdGFkZFRhc2ssXHJcblx0XHRnZXRUYXNrcyxcclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dGl0bGU6IHRpdGxlLFxyXG5cdFx0ZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG5cdFx0ZHVlRGF0ZTogZHVlRGF0ZSxcclxuXHRcdHByaW9yaXR5OiBwcmlvcml0eSxcclxuXHRcdGFkZERhdGU6IGdldERhdGUoKSxcclxuXHR9O1xyXG59XHJcblxyXG5Qcm9qZWN0c01vZHVsZS5hZGRQcm9qZWN0KCdNYWtlJyk7XHJcbmNvbnN0IG1ha2UgPSBQcm9qZWN0c01vZHVsZS5nZXRQcm9qZWN0KCdNYWtlJyk7XHJcbm1ha2UuYWRkVGFzaygndGVzdDEnLCAnZGFzZCcsICcyNC0wNS0yMDI0JywgJ3AxJyk7XHJcbm1ha2UuYWRkVGFzaygndGVzdDInLCAnZGFzZCcsICcyNC0wNS0yMDI0JywgJ3AxJyk7XHJcbm1ha2UuYWRkVGFzaygndGVzdDMnLCAnZGFzZCcsICcyNC0wNS0yMDI0JywgJ3AxJyk7XHJcbm1ha2UuYWRkVGFzaygndGVzdDQnLCAnZGFzZCcsICcyNC0wNS0yMDI0JywgJ3AxJyk7XHJcblxyXG5Qcm9qZWN0c01vZHVsZS5hZGRQcm9qZWN0KCduZXcnKTtcclxuY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3RzTW9kdWxlLmdldFByb2plY3QoJ25ldycpO1xyXG5uZXdQcm9qZWN0LmFkZFRhc2soJ3Rlc3Q1JywgJ2Rhc2QnLCAnMjQtMDUtMjAyNCcsICdwMicpO1xyXG5uZXdQcm9qZWN0LmFkZFRhc2soJ3Rlc3Q2JywgJ2Rhc2QnLCAnMjQtMDUtMjAyNCcsICdwMScpO1xyXG5uZXdQcm9qZWN0LmFkZFRhc2soJ3Rlc3Q3JywgJ2Rhc2QnLCAnMjQtMDUtMjAyNCcsICdwMycpO1xyXG5uZXdQcm9qZWN0LmFkZFRhc2soJ3Rlc3Q4JywgJ2Rhc2QnLCAnMjQtMDUtMjAyNCcsICdwMScpO1xyXG5cclxuXHJcbmV4cG9ydCB7IFByb2plY3RzTW9kdWxlIH07XHJcbiIsImZ1bmN0aW9uIGdldERhdGUoKSB7XHJcblx0Y29uc3QgZnVsbERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdGNvbnN0IGRheSA9IGZ1bGxEYXRlLmdldERhdGUoKTtcclxuXHRjb25zdCBtb250aCA9IGZ1bGxEYXRlLmdldE1vbnRoKCk7XHJcblx0Y29uc3QgeWVhciA9IGZ1bGxEYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRkYXk6IGRheSxcclxuXHRcdG1vbnRoOiBtb250aCArIDEsXHJcblx0XHR5ZWFyOiB5ZWFyLFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldERhdGUgfTtcclxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVUb3BCYXIgfSBmcm9tICcuL3RvcC1iYXIvdG9wLWJhci5qcyc7XHJcbmltcG9ydCB7IGdlbmVyYXRlU2lkZUJhciB9IGZyb20gJy4vc2lkZS1iYXIvc2lkZS1iYXIuanMnO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVByb2plY3RNb2RhbCB9IGZyb20gJy4vbW9kYWxzL3Byb2plY3QtbW9kYWwuanMnO1xyXG5pbXBvcnQgeyBQcm9qZWN0c01vZHVsZSB9IGZyb20gJy4uL1Byb2plY3RzL3Byb2plY3RzLmpzJztcclxuaW1wb3J0IHsgc3ZncyB9IGZyb20gJy4vc3Zncy9zdmdzLmpzJztcclxuaW1wb3J0IHsgZ2V0RGF0ZSB9IGZyb20gJy4uL2RhdGUvZGF0ZS5qcyc7XHJcbmltcG9ydCB7IGdlbmVyYXRlTW9kYWwgfSBmcm9tICcuL21vZGFscy9tb2RhbC5qcyc7XHJcblxyXG5jb25zdCBVSSA9IChmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWNvbnRhaW5lcicpO1xyXG5cdGNvbnN0IHRvcEJhciA9IGdlbmVyYXRlVG9wQmFyKCk7XHJcblx0Y29uc3Qgc2lkZUJhciA9IGdlbmVyYXRlU2lkZUJhcigpO1xyXG5cdGNvbnN0IHByb2plY3RNb2RhbCA9IGdlbmVyYXRlUHJvamVjdE1vZGFsKCk7XHJcblxyXG5cdGZ1bmN0aW9uIGluaXQoKSB7XHJcblx0XHRwYWdlLmFwcGVuZENoaWxkKHRvcEJhcik7XHJcblx0XHRwYWdlLmFwcGVuZENoaWxkKHNpZGVCYXJbMV0pO1xyXG5cdFx0cGFnZS5hcHBlbmRDaGlsZChzaWRlQmFyWzBdKTtcclxuXHRcdGFkZEV2ZW50cygpO1xyXG5cdFx0Y2hhbmdlUGFnZU1vZHVsZS5pbml0KCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhZGRFdmVudHMoKSB7XHJcblx0XHRhZGRNZW51RXZlbnQoKTtcclxuXHRcdGFkZFRvZ2dsZVRoZW1lRXZlbnQoKTtcclxuXHRcdG1vZGFsUHJvamVjdEV2ZW50cygpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYWRkTWVudUV2ZW50KCkge1xyXG5cdFx0Y29uc3QgYnVnZXJNZW51ID0gdG9wQmFyLnF1ZXJ5U2VsZWN0b3IoJyNidXJnZXJNZW51Jyk7XHJcblx0XHRidWdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuQ2xvc2VTaWRlQmFyKTtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvcGVuQ2xvc2VTaGFkb3cpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gb3BlbkNsb3NlU2lkZUJhcigpIHtcclxuXHRcdGNvbnN0IHNpZGVCYXJDb250YWluZXIgPSBzaWRlQmFyWzBdO1xyXG5cdFx0aWYgKGlzT3BlbihzaWRlQmFyQ29udGFpbmVyKSkge1xyXG5cdFx0XHRzaWRlQmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XHJcblx0XHRcdHNpZGVCYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG5cdFx0XHRvcGVuQ2xvc2VTaGFkb3coZmFsc2UpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2lkZUJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcblx0XHRcdHNpZGVCYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2UnKTtcclxuXHRcdFx0b3BlbkNsb3NlU2hhZG93KHRydWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaXNPcGVuKGVsZW1lbnQpIHtcclxuXHRcdHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gb3BlbkNsb3NlU2hhZG93KHN0YXR1cykge1xyXG5cdFx0Y29uc3Qgc2lkZUJhclNoYWRvdyA9IHNpZGVCYXJbMV07XHJcblx0XHRjb25zdCBzaWRlQmFyQ29udGFpbmVyID0gc2lkZUJhclswXTtcclxuXHJcblx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPCA4MDAgfHwgc3RhdHVzID09PSBmYWxzZSkge1xyXG5cdFx0XHRzaWRlQmFyU2hhZG93LnN0eWxlLndpZHRoID0gJzAnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChcclxuXHRcdFx0d2luZG93LmlubmVyV2lkdGggPj0gODAwICYmXHJcblx0XHRcdChpc09wZW4oc2lkZUJhckNvbnRhaW5lcikgfHwgc3RhdHVzID09PSB0cnVlKVxyXG5cdFx0KSB7XHJcblx0XHRcdHNpZGVCYXJTaGFkb3cuc3R5bGUud2lkdGggPSAndmFyKC0tc2lkZS1iYXItd2lkdGgpJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFkZFRvZ2dsZVRoZW1lRXZlbnQoKSB7XHJcblx0XHRjb25zdCB0b2dnbGVCdG4gPSB0b3BCYXIucXVlcnlTZWxlY3RvcignLnRvZ2dsZS10aGVtZScpO1xyXG5cdFx0dG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVGhlbWUpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2hhbmdlVGhlbWUoKSB7XHJcblx0XHRsZXQgdGhlbWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblx0XHRpZiAoaXNUaGVtZSgnZGFyaycpKSB7XHJcblx0XHRcdHRoZW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcclxuXHRcdFx0bW92ZVRvZ2dsZSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhlbWUuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xyXG5cdFx0XHRtb3ZlVG9nZ2xlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpc1RoZW1lKHRoZW1lKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGVtZSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBtb3ZlVG9nZ2xlKCkge1xyXG5cdFx0Y29uc3QgY2lyY2xlID0gdG9wQmFyLnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGUtY2lyY2xlJyk7XHJcblx0XHRpZiAoaXNUaGVtZSgnZGFyaycpKSB7XHJcblx0XHRcdGNpcmNsZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMjYuNXB4KSc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjaXJjbGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gbW9kYWxQcm9qZWN0RXZlbnRzKCkge1xyXG5cdFx0Y29uc3QgcGx1cyA9IHNpZGVCYXJbMF0ucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbW9kYWwnKTtcclxuXHRcdGNvbnN0IGNhbmNlbEJ0biA9IHByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtcHJvamVjdC1tb2RhbCcpO1xyXG5cdFx0Y29uc3QgYWRkQnRuID0gcHJvamVjdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdCcpO1xyXG5cclxuXHRcdHBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuUHJvamVjdE1vZGFsKTtcclxuXHRcdGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUHJvamVjdE1vZGFsKTtcclxuXHRcdGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gb3BlblByb2plY3RNb2RhbCgpIHtcclxuXHRcdHBhZ2UuYXBwZW5kQ2hpbGQocHJvamVjdE1vZGFsKTtcclxuXHRcdHByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmZvY3VzKCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjbG9zZVByb2plY3RNb2RhbCgpIHtcclxuXHRcdHBhZ2UucmVtb3ZlQ2hpbGQocHJvamVjdE1vZGFsKTtcclxuXHRcdHByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlID0gJyc7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjaGFuZ2VQYWdlTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IFBhZ2VzID0gW107XHJcblx0XHRjb25zdCBzaWRlQmFyQ29udGFpbmVyID0gc2lkZUJhclswXTtcclxuXHRcdGxldCBjdXJyZW50UGFnZSA9IG51bGw7XHJcblxyXG5cdFx0ZnVuY3Rpb24gY3JlYXRlUGFnZShuYW1lKSB7XHJcblx0XHRcdGNvbnN0IHBhZ2UgPSBjcmVhdGVNYWluUGFnZShuYW1lKTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRuYW1lOiBuYW1lLFxyXG5cdFx0XHRcdHBhZ2U6IHBhZ2UsXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gY3JlYXRlTWFpblBhZ2UodGl0bGUpIHtcclxuXHRcdFx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHRcdFx0bWFpbi5pZCA9IHRpdGxlO1xyXG5cclxuXHRcdFx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcclxuXHJcblx0XHRcdGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdGhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xyXG5cdFx0XHRoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cclxuXHRcdFx0Y29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0bWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XHJcblxyXG5cdFx0XHRjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHR0YXNrc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrcycpO1xyXG5cclxuXHRcdFx0bWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpO1xyXG5cdFx0XHRoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xyXG5cdFx0XHRtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblx0XHRcdG1haW4uYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xyXG5cclxuXHRcdFx0cmV0dXJuIG1haW47XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gY3JlYXRlRGVmYWx1dFBhZ2VzKCkge1xyXG5cdFx0XHRjb25zdCBpbmJveFBhZ2UgPSBjcmVhdGVQYWdlKCdJbmJveCcpO1xyXG5cdFx0XHRjb25zdCB0b2RheVBhZ2UgPSBjcmVhdGVQYWdlKCdUb2RheScpO1xyXG5cdFx0XHRjb25zdCB3ZWVrUGFnZSA9IGNyZWF0ZVBhZ2UoJ1dlZWsnKTtcclxuXHJcblx0XHRcdFBhZ2VzLnB1c2goaW5ib3hQYWdlKTtcclxuXHRcdFx0UGFnZXMucHVzaCh0b2RheVBhZ2UpO1xyXG5cdFx0XHRQYWdlcy5wdXNoKHdlZWtQYWdlKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBhZGREZWZhbHV0UHJvamVjdHNFdmVudHMoKSB7XHJcblx0XHRcdGNvbnN0IGluYm94ID0gc2lkZUJhckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjaW5ib3gnKTtcclxuXHRcdFx0Y29uc3QgdG9kYXlQcm9qZWN0cyA9IHNpZGVCYXJDb250YWluZXIucXVlcnlTZWxlY3RvcignI3RvZGF5Jyk7XHJcblx0XHRcdGNvbnN0IHdlZWtQcm9qZWN0cyA9IHNpZGVCYXJDb250YWluZXIucXVlcnlTZWxlY3RvcignI3dlZWsnKTtcclxuXHJcblx0XHRcdGluYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdG9wZW5EZWZhbHV0UGFnZSgnSW5ib3gnLCBnZXRBbGxUYXNrcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0b2RheVByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdG9wZW5EZWZhbHV0UGFnZSgnVG9kYXknLCBnZXRUb2RheVRhc2tzKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHdlZWtQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0XHRvcGVuRGVmYWx1dFBhZ2UoJ1dlZWsnLCBnZXRXZWVrVGFza3MpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBvcGVuRGVmYWx1dFBhZ2UocGFnZU5hbWUsIGZ1bikge1xyXG5cdFx0XHRjb25zdCBkZWZhdWx0UGFnZSA9IGZpbmRQYWdlKHBhZ2VOYW1lKTtcclxuXHRcdFx0YXBwZW5kVGFza3MoZnVuLCBkZWZhdWx0UGFnZSk7XHJcblx0XHRcdG9wZW5QYWdlKHBhZ2VOYW1lKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBjbG9zZUN1cnJlbnRwYWdlKCkge1xyXG5cdFx0XHRpZiAoIWN1cnJlbnRQYWdlKSByZXR1cm47XHJcblx0XHRcdHBhZ2UucmVtb3ZlQ2hpbGQoY3VycmVudFBhZ2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGZpbmRJbmRleChuYW1lKSB7XHJcblx0XHRcdHJldHVybiBQYWdlcy5maW5kSW5kZXgoKHBhZ2UpID0+IHBhZ2UubmFtZSA9PT0gbmFtZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZmluZFBhZ2UobmFtZSkge1xyXG5cdFx0XHRjb25zdCBpbmRleCA9IGZpbmRJbmRleChuYW1lKTtcclxuXHRcdFx0cmV0dXJuIFBhZ2VzW2luZGV4XS5wYWdlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGFwcGVuZFRhc2tzKGZ1biwgZWxlbWVudCkge1xyXG5cdFx0XHRjb25zdCB0YXNrc0NvbnRhaWVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcclxuXHRcdFx0dGFza3NDb250YWllci5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0Y29uc3QgdGFza3MgPSBmdW4oKTtcclxuXHRcdFx0dGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZVRhc2sodGFzayk7XHJcblx0XHRcdFx0dGFza3NDb250YWllci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBnZXRBbGxUYXNrcygpIHtcclxuXHRcdFx0Y29uc3QgdGFza3MgPSBQcm9qZWN0c01vZHVsZS5nZXRBbGxUYXNrcygpO1xyXG5cdFx0XHRyZXR1cm4gdGFza3M7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0VG9kYXlUYXNrcygpIHtcclxuXHRcdFx0Y29uc3QgdGFza3MgPSBnZXRBbGxUYXNrcygpO1xyXG5cdFx0XHRjb25zdCB0b2RheVRhc2tzID0gdGFza3MuZmlsdGVyKCh7IGFkZERhdGUgfSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGFjdHVhbERhdGUgPSBnZXREYXRlKCk7XHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdGFjdHVhbERhdGUueWVhciA9PT0gYWRkRGF0ZS55ZWFyICYmXHJcblx0XHRcdFx0XHRhY3R1YWxEYXRlLm1vbnRoID09PSBhZGREYXRlLm1vbnRoICYmXHJcblx0XHRcdFx0XHRhY3R1YWxEYXRlLmRheSA9PT0gYWRkRGF0ZS5kYXlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB0b2RheVRhc2tzO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldFdlZWtUYXNrcygpIHtcclxuXHRcdFx0Y29uc3QgdGFza3MgPSBnZXRBbGxUYXNrcygpO1xyXG5cdFx0XHRjb25zdCB3ZWVrVGFza3MgPSB0YXNrcy5maWx0ZXIoKHsgYWRkRGF0ZSB9KSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgYWN0dWFsRGF0ZSA9IGdldERhdGUoKTtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0YWN0dWFsRGF0ZS55ZWFyID09PSBhZGREYXRlLnllYXIgJiZcclxuXHRcdFx0XHRcdGFjdHVhbERhdGUubW9udGggPT09IGFkZERhdGUubW9udGggJiZcclxuXHRcdFx0XHRcdGFjdHVhbERhdGUuZGF5IDw9IGFkZERhdGUuZGF5ICsgN1xyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHdlZWtUYXNrcztcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2spIHtcclxuXHRcdFx0Y29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHR0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuXHJcblx0XHRcdGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRcdFx0Y2lyY2xlLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpO1xyXG5cclxuXHRcdFx0Y29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblx0XHRcdHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcclxuXHRcdFx0dGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xyXG5cclxuXHRcdFx0dGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaXJjbGUpO1xyXG5cdFx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcclxuXHJcblx0XHRcdHJldHVybiB0YXNrQ29udGFpbmVyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGFjdGl2ZSgpIHtcclxuXHRcdFx0Y29uc3QgdHJpZ2dlcnMgPSBzaWRlQmFyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHRpb24nKTtcclxuXHRcdFx0Y29uc3QgY3VycmVudFBhZ2VJZCA9IGN1cnJlbnRQYWdlLmlkO1xyXG5cclxuXHRcdFx0dHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xyXG5cdFx0XHRcdGlmICh0cmlnZ2VyLmlkLnRvTG93ZXJDYXNlKCkgPT09IGN1cnJlbnRQYWdlSWQudG9Mb3dlckNhc2UoKSkge1xyXG5cdFx0XHRcdFx0dHJpZ2dlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dHJpZ2dlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGFwcGVuZFByb2plY3QocHJvamVjdCkge1xyXG5cdFx0XHRjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IHNpZGVCYXJDb250YWluZXIucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcblx0XHRcdHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3QocHJvamVjdCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdCkge1xyXG5cdFx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0Y29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ29wdGlvbicpO1xyXG5cdFx0XHRjb250YWluZXIuaWQgPSBwcm9qZWN0Lm5hbWU7XHJcblxyXG5cdFx0XHRjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRcdFx0cHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xyXG5cdFx0XHRwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuXHJcblx0XHRcdGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRcdFx0cmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuXHRcdFx0cmVtb3ZlLmlubmVySFRNTCA9IHN2Z3MuY2xvc2U7XHJcblx0XHRcdHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0XHRyZW1vdmVQcm9qZWN0KGNvbnRhaW5lcik7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuXHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZSk7XHJcblxyXG5cdFx0XHRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChlLnRhcmdldCA9PT0gY29udGFpbmVyIHx8IGUudGFyZ2V0ID09PSBwcm9qZWN0TmFtZSkge1xyXG5cdFx0XHRcdFx0b3BlblBhZ2UoY29udGFpbmVyLmlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y3JlYXRlTmV3UGFnZShwcm9qZWN0KTtcclxuXHRcdFx0cmV0dXJuIGNvbnRhaW5lcjtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGNvbnRhaW5lcikge1xyXG5cdFx0XHRjb25zdCBwcm9qZWN0cyA9IHNpZGVCYXJDb250YWluZXIucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcblx0XHRcdGNvbnN0IHBhZ2VJbmRleCA9IGZpbmRJbmRleChjb250YWluZXIuaWQpO1xyXG5cclxuXHRcdFx0cHJvamVjdHMucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcclxuXHRcdFx0UHJvamVjdHNNb2R1bGUucmVtb3ZlUHJvamVjdChjb250YWluZXIuaWQpO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSBmaW5kUGFnZShjb250YWluZXIuaWQpKSB7XHJcblx0XHRcdFx0b3BlbkRlZmFsdXRQYWdlKCdJbmJveCcsIGdldEFsbFRhc2tzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZW1vdmVQcm9qZWN0UGFnZShwYWdlSW5kZXgpO1xyXG5cdFx0XHR1cGRhdGVEZWZhdWx0UGFnZXMoKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiB1cGRhdGVEZWZhdWx0UGFnZXMoKSB7XHJcblx0XHRcdFBhZ2VzLmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG5cdFx0XHRcdGlmIChvYmplY3QubmFtZSA9PT0gJ0luYm94Jykge1xyXG5cdFx0XHRcdFx0YXBwZW5kVGFza3MoZ2V0QWxsVGFza3MsIG9iamVjdC5wYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKG9iamVjdC5uYW1lID09PSAnVG9kYXknKSB7XHJcblx0XHRcdFx0XHRhcHBlbmRUYXNrcyhnZXRUb2RheVRhc2tzLCBvYmplY3QucGFnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChvYmplY3QubmFtZSA9PT0gJ1RoaXMgV2VlaycpIHtcclxuXHRcdFx0XHRcdGFwcGVuZFRhc2tzKGdldFdlZWtUYXNrcywgb2JqZWN0LnBhZ2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gcmVtb3ZlUHJvamVjdFBhZ2UoaW5kZXgpIHtcclxuXHRcdFx0UGFnZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBhZGRBbGxQcm9qZWN0cygpIHtcclxuXHRcdFx0Y29uc3QgcHJvamVjdHMgPSBQcm9qZWN0c01vZHVsZS5nZXRBbGxQcm9qZWN0cygpO1xyXG5cdFx0XHRjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IHNpZGVCYXJDb250YWluZXIucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcblx0XHRcdHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdFx0XHRwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0KHByb2plY3QpKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gY3JlYXRlTmV3UGFnZShwcm9qZWN0KSB7XHJcblx0XHRcdGNvbnN0IG5ld1BhZ2UgPSBjcmVhdGVQYWdlKHByb2plY3QubmFtZSk7XHJcblx0XHRcdGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0XHRidG4uY2xhc3NMaXN0LmFkZCgnYnRuLWFkZCcpO1xyXG5cdFx0XHRjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdFx0XHRpY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuXHRcdFx0aWNvbi5pbm5lckhUTUwgPSBzdmdzLnBsdXM7XHJcblx0XHRcdGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblx0XHRcdHNwYW4udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xyXG5cclxuXHRcdFx0YnRuLmFwcGVuZENoaWxkKGljb24pO1xyXG5cdFx0XHRidG4uYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0YWRkVGFzayhuZXdQYWdlLnBhZ2UpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0bmV3UGFnZS5wYWdlLmFwcGVuZENoaWxkKGJ0bik7XHJcblxyXG5cdFx0XHRpZiAoUHJvamVjdHNNb2R1bGUuZmluZFByb2plY3QocHJvamVjdC5uYW1lKSkge1xyXG5cdFx0XHRcdGNvbnN0IHRhc2tzID0gZ2V0UHJvamVjdFRhc2tzKHByb2plY3QubmFtZSk7XHJcblx0XHRcdFx0Y29uc3QgdGFza3NQbGFjZSA9IG5ld1BhZ2UucGFnZS5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcclxuXHJcblx0XHRcdFx0dGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHRhc2tDb250YWluZXIgPSBjcmVhdGVUYXNrKHRhc2spO1xyXG5cdFx0XHRcdFx0dGFza3NQbGFjZS5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRQYWdlcy5wdXNoKG5ld1BhZ2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldFByb2plY3RUYXNrcyhwcm9qZWN0TmFtZSkge1xyXG5cdFx0XHRjb25zdCBwcm9qZWN0ID0gUHJvamVjdHNNb2R1bGUuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcblx0XHRcdGNvbnN0IHRhc2tzID0gcHJvamVjdC5nZXRUYXNrcygpO1xyXG5cdFx0XHRyZXR1cm4gdGFza3M7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gYWRkVGFzayhQYWdlTmFtZSkge1xyXG5cdFx0XHRvcGVuVGFza01vZGFsKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gb3BlblRhc2tNb2RhbCgpIHtcclxuXHRcdFx0Y29uc3QgbW9kYWwgPSBnZW5lcmF0ZU1vZGFsKCk7XHJcblx0XHRcdGNvbnN0IGhlYWRlciA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1oZWFkZXInKTtcclxuXHRcdFx0aGVhZGVyLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcclxuXHRcdFx0Y29uc3QgaW5wdXRzID0gW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHR5cGU6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdGlkOiAndGl0bGUnLFxyXG5cdFx0XHRcdFx0dGl0bGU6ICdUaXRsZScsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0eXBlOiAndGV4dCcsXHJcblx0XHRcdFx0XHRpZDogJ2Rlc2NyaXB0aW9uJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAnRGVzY3JpcHRpb24nLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dHlwZTogJ2RhdGUnLFxyXG5cdFx0XHRcdFx0aWQ6ICdkdWVEYXRlJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAnZHVlRGF0ZScsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0eXBlOiAnc2VsZWN0JyxcclxuXHRcdFx0XHRcdGlkOiAncHJpb3JpdHknLFxyXG5cdFx0XHRcdFx0dGl0bGU6ICdwcmlvcml0eScsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XTtcclxuXHJcblx0XHRcdGNyZWF0ZUlucHV0cyhpbnB1dHMsIG1vZGFsKTtcclxuXHJcblx0XHRcdHBhZ2UuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGNyZWF0ZUlucHV0cyhpbnB1dHMsIG1vZGFsKSB7XHJcblx0XHRcdGNvbnN0IGlucHV0Q29udGFpbmVyID0gbW9kYWwucXVlcnlTZWxlY3RvcignLmlucHV0LWNvbnRhaW5lcicpO1xyXG5cclxuXHRcdFx0aW5wdXRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuXHRcdFx0XHRjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRcdGZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkJyk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHRcdFx0XHRpbnB1dC50eXBlID0gZWxlbWVudC50eXBlO1xyXG5cdFx0XHRcdGlucHV0LmlkID0gZWxlbWVudC5pZDtcclxuXHJcblx0XHRcdFx0Y29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5cdFx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZTtcclxuXHRcdFx0XHRsYWJlbC5odG1sRm9yID0gZWxlbWVudC5pZDtcclxuXHJcblx0XHRcdFx0ZmllbGQuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG5cdFx0XHRcdGZpZWxkLmFwcGVuZENoaWxkKGlucHV0KTtcclxuXHJcblx0XHRcdFx0aW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBvcGVuUGFnZShwYWdlTmFtZSkge1xyXG5cdFx0XHRjb25zdCBwcm9qZWN0UGFnZSA9IGZpbmRQYWdlKHBhZ2VOYW1lKTtcclxuXHRcdFx0Y2xvc2VDdXJyZW50cGFnZSgpO1xyXG5cdFx0XHRjdXJyZW50UGFnZSA9IHByb2plY3RQYWdlO1xyXG5cdFx0XHRwYWdlLmFwcGVuZENoaWxkKHByb2plY3RQYWdlKTtcclxuXHRcdFx0YWN0aXZlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gaW5pdCgpIHtcclxuXHRcdFx0Y3JlYXRlRGVmYWx1dFBhZ2VzKCk7XHJcblx0XHRcdGFkZERlZmFsdXRQcm9qZWN0c0V2ZW50cygpO1xyXG5cdFx0XHRvcGVuRGVmYWx1dFBhZ2UoJ0luYm94JywgZ2V0QWxsVGFza3MpO1xyXG5cdFx0XHRhZGRBbGxQcm9qZWN0cygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGluaXQsXHJcblx0XHRcdGFwcGVuZFByb2plY3QsXHJcblx0XHR9O1xyXG5cdH0pKCk7XHJcblxyXG5cdGZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcblx0XHRsZXQgbmFtZSA9IHByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlO1xyXG5cdFx0aWYgKCFuYW1lKSByZXR1cm47XHJcblx0XHRpZiAoUHJvamVjdHNNb2R1bGUuZmluZFByb2plY3QobmFtZSkpIHtcclxuXHRcdFx0YWxlcnQoJ1Byb2plY3QgbmFtZSBhbHJlYWR5IGV4aXN0LicpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0UHJvamVjdHNNb2R1bGUuYWRkUHJvamVjdChuYW1lKTtcclxuXHRcdGNoYW5nZVBhZ2VNb2R1bGUuYXBwZW5kUHJvamVjdChQcm9qZWN0c01vZHVsZS5nZXRQcm9qZWN0KG5hbWUpKTtcclxuXHRcdGNsb3NlUHJvamVjdE1vZGFsKCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0aW5pdCxcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgVUkgfTtcclxuIiwiaW1wb3J0ICcuLi8uLi9zdHlsZS9tb2RhbC5jc3MnO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVNb2RhbCgpIHtcclxuXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGFpbmVyJyk7XHJcblxyXG5cdGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0bW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuXHJcblx0Y29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRtb2RhbEhlYWRlci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1oZWFkZXInKTtcclxuXHJcblx0Y29uc3QgY29udGVudE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Y29udGVudE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtbW9kYWwnKTtcclxuXHJcblx0Y29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcclxuXHJcblx0Y29uc3QgYnRuc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGJ0bnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRucy1jb250YWluZXInKTtcclxuXHJcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcclxuXHRtb2RhbC5hcHBlbmRDaGlsZChtb2RhbEhlYWRlcik7XHJcblx0bW9kYWwuYXBwZW5kQ2hpbGQoY29udGVudE1vZGFsKTtcclxuXHRjb250ZW50TW9kYWwuYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpO1xyXG5cdGNvbnRlbnRNb2RhbC5hcHBlbmRDaGlsZChidG5zQ29udGFpbmVyKTtcclxuXHJcblx0cmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVNb2RhbCB9O1xyXG4iLCJpbXBvcnQgeyBnZW5lcmF0ZU1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGUvbW9kYWwuY3NzJztcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdE1vZGFsKCkge1xyXG5cdGNvbnN0IG1vZGFsID0gZ2VuZXJhdGVNb2RhbCgpO1xyXG5cdGNvbnN0IGlucHV0cyA9IGNyZWF0ZUlucHV0cygpO1xyXG5cdGNvbnN0IGJ0bnMgPSBjcmVhdGVCdG5zKCk7XHJcblxyXG5cdG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1oZWFkZXInKS50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XHJcblx0bW9kYWwucXVlcnlTZWxlY3RvcignLmlucHV0LWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGlucHV0cyk7XHJcblx0YnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuXHRcdG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5idG5zLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGJ0bik7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiBtb2RhbDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSW5wdXRzKCkge1xyXG5cdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmaWVsZCcpO1xyXG5cclxuXHRjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcblx0bGFiZWwuaHRtbEZvciA9ICcjbmFtZSc7XHJcblx0bGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZSc7XHJcblxyXG5cdGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHRpbnB1dC5pZCA9ICduYW1lJztcclxuXHJcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cclxuXHRyZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCdG5zKCkge1xyXG5cdGxldCBidG5zID0gW107XHJcblxyXG5cdGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdGNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG5cdGNhbmNlbC5pZCA9ICdjbG9zZS1wcm9qZWN0LW1vZGFsJztcclxuXHJcblx0Y29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0YWRkLnRleHRDb250ZW50ID0gJ0FkZCc7XHJcblx0YWRkLmlkID0gJ2FkZC1wcm9qZWN0JztcclxuXHRhZGQuY2xhc3NMaXN0LmFkZCgnYmx1ZScpO1xyXG5cclxuXHRidG5zLnB1c2goY2FuY2VsKTtcclxuXHRidG5zLnB1c2goYWRkKTtcclxuXHJcblx0cmV0dXJuIGJ0bnM7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdlbmVyYXRlUHJvamVjdE1vZGFsIH07XHJcbiIsImltcG9ydCB7IHN2Z3MgfSBmcm9tICcuLi9zdmdzL3N2Z3MuanMnO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlL3NpZGUtYmFyLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVNpZGVCYXIoKSB7XHJcblx0Y29uc3Qgc2lkZUJhclNoYWRvdyA9IGNyZWF0ZVNpZGVTaGFkb3coKTtcclxuXHRjb25zdCBzaWRlQmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0c2lkZUJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaWRlLWJhci1jb250YWluZXInKTtcclxuXHRzaWRlQmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuXHJcblx0Y29uc3Qgc2lkZUJhciA9IGNyZWF0ZVNpZGVCYXIoKTtcclxuXHRzaWRlQmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVCYXIpO1xyXG5cclxuXHRyZXR1cm4gW3NpZGVCYXJDb250YWluZXIsIHNpZGVCYXJTaGFkb3ddO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTaWRlU2hhZG93KCkge1xyXG5cdGNvbnN0IHNoYWRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHNoYWRvdy5jbGFzc0xpc3QuYWRkKCdzaWRlLWJhci1zaGFkb3cnKTtcclxuXHJcblx0cmV0dXJuIHNoYWRvdztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2lkZUJhcigpIHtcclxuXHRjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0c2lkZUJhci5jbGFzc0xpc3QuYWRkKCdzaWRlLWJhcicpO1xyXG5cclxuXHRjb25zdCBvcHRpb25zQ29udGFpbmVyID0gY3JlYXRlT3B0aW9uc0NvbnRhaW5lcigpO1xyXG5cdGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gY3JlYXRlUHJvamN0c0NvbnRhaW5lcigpO1xyXG5cclxuXHRzaWRlQmFyLmFwcGVuZENoaWxkKG9wdGlvbnNDb250YWluZXIpO1xyXG5cdHNpZGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNDb250YWluZXIpO1xyXG5cclxuXHRyZXR1cm4gc2lkZUJhcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uc0NvbnRhaW5lcigpIHtcclxuXHRjb25zdCBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0b3B0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdGFuZGFyZC1vcHRpb25zJyk7XHJcblxyXG5cdGxldCBvcHRpb25zID0gW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnSW5ib3gnLFxyXG5cdFx0XHRpY29uOiAnaW5ib3gnLFxyXG5cdFx0XHRpZDogJ2luYm94JyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdUb2RheScsXHJcblx0XHRcdGljb246ICd0b2RheScsXHJcblx0XHRcdGlkOiAndG9kYXknLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ1RoaXMgd2VlaycsXHJcblx0XHRcdGljb246ICdjYWxlbmRhcicsXHJcblx0XHRcdGlkOiAnd2VlaycsXHJcblx0XHR9LFxyXG5cdF07XHJcblxyXG5cdG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcblx0XHRjb25zdCBvcHRpb25Db250YWluZXIgPSBjcmVhdGVPcHRpb24ob3B0aW9uKTtcclxuXHRcdG9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uQ29udGFpbmVyKTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIG9wdGlvbnNDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbihvcHRpb24pIHtcclxuXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3B0aW9uJyk7XHJcblx0Y29udGFpbmVyLmlkID0gb3B0aW9uLmlkO1xyXG5cclxuXHRjb25zdCBzcGFuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRzcGFuSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcblx0c3Bhbkljb24uaW5uZXJIVE1MID0gc3Znc1tvcHRpb24uaWNvbl07XHJcblxyXG5cdGNvbnN0IHNwYW5OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdHNwYW5OYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcclxuXHRzcGFuTmFtZS50ZXh0Q29udGVudCA9IG9wdGlvbi5uYW1lO1xyXG5cclxuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoc3Bhbkljb24pO1xyXG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuTmFtZSk7XHJcblxyXG5cdHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2pjdHNDb250YWluZXIoKSB7XHJcblx0Y29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRwcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1jb250YWluZXInKTtcclxuXHJcblx0Y29uc3QgcHJvamVjdHNIZWFkZXIgPSBjcmVhdGVQcm9qZWN0c0hlYWRlcigpO1xyXG5cdGNvbnN0IHByb2plY3RzID0gY3JlYXRlUHJvamVjdHMoKTtcclxuXHJcblx0cHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpO1xyXG5cdHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzKTtcclxuXHJcblx0cmV0dXJuIHByb2plY3RzQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0c0hlYWRlcigpIHtcclxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRoZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtaGVhZGVyJyk7XHJcblx0aGVhZGVyLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcclxuXHJcblx0Y29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRzcGFuLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuXHRzcGFuLmlkID0gJ3Byb2plY3QtbW9kYWwnXHJcblx0c3Bhbi5pbm5lckhUTUwgPSBzdmdzLnBsdXM7XHJcblxyXG5cdGhlYWRlci5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcblx0cmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdHMoKSB7XHJcblx0Y29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xyXG5cclxuXHRyZXR1cm4gcHJvamVjdHM7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdlbmVyYXRlU2lkZUJhciB9O1xyXG4iLCJjb25zdCBzdmdzID0ge1xyXG5cdGNsb3NlOlxyXG5cdFx0Jzxzdmcgd2lkdGg9XCI4MDBweFwiIGhlaWdodD1cIjgwMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnIGlkPVwiTWVudVwiPjxwYXRoIGlkPVwiVmVjdG9yXCIgZD1cIk0xNiAxNkwxMiAxMk0xMiAxMkw4IDhNMTIgMTJMMTYgOE0xMiAxMkw4IDE2XCIgc3Ryb2tlLXdpZHRoPVwiMVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz48L2c+PC9zdmc+JyxcclxuXHR0b2RheTpcclxuXHRcdCc8c3ZnIHdpZHRoPVwiMjBweFwiaGVpZ2h0PVwiMjBweFwidmlld0JveD1cIjAgMCA1MTIgICAgICAgICA1MTJcInhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cmVjdCBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIiB4PVwiNDhcIiB5PVwiODBcIiB3aWR0aD1cIjQxNlwiIGhlaWdodD1cIjM4NFwiIHJ4PVwiNDhcIi8+PGxpbmUgZmlsbD1cIm5vbmVcIiAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiB4MT1cIjEyOFwiIHkxPVwiNDhcIiB4Mj1cIjEyOFwiIHkyPVwiODBcIi8+PGxpbmUgZmlsbD1cIm5vbmVcIiBzIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgeDE9XCIzODRcIiB5MT1cIjQ4XCIgeDI9XCIzODRcIiB5Mj1cIjgwXCIvPjxyZWN0IGZpbGw9XCJub25lXCJzdHJva2UtbGluZWpvaW49XCJyb3VuZFwic3Ryb2tlLXdpZHRoPVwiMzBcInN0cm9rZS1saW5lY2FwPVwicm91bmRcIng9XCIxMTJcInk9XCIyMjRcIndpZHRoPVwiOTZcImhlaWdodD1cIjk2XCJyeD1cIjEzXCIvPjxsaW5lIGZpbGw9XCJub25lXCIgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMjBcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgeDE9XCI0NjRcIiB5MT1cIjE2MFwiIHgyPVwiNDhcIiB5Mj1cIjE2MFwiLz48L3N2Zz4nLFxyXG5cdGluYm94OlxyXG5cdFx0Jzxzdmcgd2lkdGg9XCI2NHB4XCIgaGVpZ2h0PVwiNjRweFwiIHZpZXdCb3g9XCIwIDAgMjMuMDAgMjQuMDBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB0cmFuc2Zvcm09XCJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMClcIj48ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjFcIj48L2c+PGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+IDxwYXRoIGQ9XCJNMyAxMkg4LjVMMTAgMTVIMTRMMTYgMTJIMjFNMyAxMlYxOEMzIDE5LjEwNDYgMy44OTU0MyAyMCA1IDIwSDE5QzIwLjEwNDYgMjAgMjEgMTkuMTA0NiAyMSAxOFYxMk0zIDEyTDUuNzU2NjcgNC42NDg4OEM1LjkwMzA0IDQuMjU4NTcgNi4yNzYxNiA0IDYuNjkzIDRIMTcuMzA3QzE3LjcyMzggNCAxOC4wOTcgNC4yNTg1NyAxOC4yNDMzIDQuNjQ4ODhMMjEgMTJcIiBzdHJva2Utd2lkdGg9XCIxXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgZmlsbD1cIm5vbmVcIj48L3BhdGg+IDwvZz48L3N2Zz4nLFxyXG5cdGNhbGVuZGFyOlxyXG5cdFx0JzxzdmcgZmlsbD1cIiMwMDAwMDBcIiB3aWR0aD1cIjgwMHB4XCIgaGVpZ2h0PVwiODAwcHhcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTI2Ni44MTUgNTM3LjcwOGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnptMTgyLjc3IDBjMCAyMi42Mi0xOC4zNCA0MC45Ni00MC45NiA0MC45NnMtNDAuOTYtMTguMzQtNDAuOTYtNDAuOTYgMTguMzQtNDAuOTYgNDAuOTYtNDAuOTYgNDAuOTYgMTguMzQgNDAuOTYgNDAuOTZ6bTE4Mi43NzUgMGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnptMTgyLjc3IDBjMCAyMi42Mi0xOC4zNCA0MC45Ni00MC45NiA0MC45NnMtNDAuOTYtMTguMzQtNDAuOTYtNDAuOTYgMTguMzQtNDAuOTYgNDAuOTYtNDAuOTYgNDAuOTYgMTguMzQgNDAuOTYgNDAuOTZ6TTI2Ni44MTUgNjc5LjM0N2MwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnptMTgyLjc3IDBjMCAyMi42Mi0xOC4zNCA0MC45Ni00MC45NiA0MC45NnMtNDAuOTYtMTguMzQtNDAuOTYtNDAuOTYgMTguMzQtNDAuOTYgNDAuOTYtNDAuOTYgNDAuOTYgMTguMzQgNDAuOTYgNDAuOTZ6bTE4Mi43NzUgMGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnptMTgyLjc3IDBjMCAyMi42Mi0xOC4zNCA0MC45Ni00MC45NiA0MC45NnMtNDAuOTYtMTguMzQtNDAuOTYtNDAuOTYgMTguMzQtNDAuOTYgNDAuOTYtNDAuOTYgNDAuOTYgMTguMzQgNDAuOTYgNDAuOTZ6TTI2Ni44MTUgODIwLjk4OGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnptMTgyLjc3IDBjMCAyMi42Mi0xOC4zNCA0MC45Ni00MC45NiA0MC45NnMtNDAuOTYtMTguMzQtNDAuOTYtNDAuOTYgMTguMzQtNDAuOTYgNDAuOTYtNDAuOTYgNDAuOTYgMTguMzQgNDAuOTYgNDAuOTZ6bTE4Mi43NzUgMGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnptMTgyLjc3IDBjMCAyMi42Mi0xOC4zNCA0MC45Ni00MC45NiA0MC45NnMtNDAuOTYtMTguMzQtNDAuOTYtNDAuOTYgMTguMzQtNDAuOTYgNDAuOTYtNDAuOTYgNDAuOTYgMTguMzQgNDAuOTYgNDAuOTZ6TTIyOC4xOCA4MS45MTh2MTUzLjZjMCAxMS4zMTEgOS4xNjkgMjAuNDggMjAuNDggMjAuNDhzMjAuNDgtOS4xNjkgMjAuNDgtMjAuNDh2LTE1My42YzAtMTEuMzExLTkuMTY5LTIwLjQ4LTIwLjQ4LTIwLjQ4cy0yMC40OCA5LjE2OS0yMC40OCAyMC40OHptNTI4LjA5IDB2MTUzLjZjMCAxMS4zMTEgOS4xNjkgMjAuNDggMjAuNDggMjAuNDhzMjAuNDgtOS4xNjkgMjAuNDgtMjAuNDh2LTE1My42YzAtMTEuMzExLTkuMTY5LTIwLjQ4LTIwLjQ4LTIwLjQ4cy0yMC40OCA5LjE2OS0yMC40OCAyMC40OHpcIi8+PHBhdGggZD1cIk04OTAuODc3IDEzNy41MTdjMzMuOTMxIDAgNjEuNDQgMjcuNTA5IDYxLjQ0IDYxLjQ0djcwMy4zNzVjMCAzMy45MzEtMjcuNTA5IDYxLjQ0LTYxLjQ0IDYxLjQ0aC03NTcuNzZjLTMzLjkzMSAwLTYxLjQ0LTI3LjUwOS02MS40NC02MS40NFYxOTguOTU3YzAtMzMuOTMxIDI3LjUwOS02MS40NCA2MS40NC02MS40NGg3NTcuNzZ6bS03NTcuNzYgNDAuOTZjLTExLjMwOSAwLTIwLjQ4IDkuMTcxLTIwLjQ4IDIwLjQ4djcwMy4zNzVjMCAxMS4zMDkgOS4xNzEgMjAuNDggMjAuNDggMjAuNDhoNzU3Ljc2YzExLjMwOSAwIDIwLjQ4LTkuMTcxIDIwLjQ4LTIwLjQ4VjE5OC45NTdjMC0xMS4zMDktOS4xNzEtMjAuNDgtMjAuNDgtMjAuNDhoLTc1Ny43NnpcIi8+PHBhdGggZD1cIk01NzUuMDMgMzM4LjI4OGMwLTMzLjkzLTI3LjUxLTYxLjQ0LTYxLjQ0LTYxLjQ0cy02MS40NCAyNy41MS02MS40NCA2MS40NGMwIDMzLjkzIDI3LjUxIDYxLjQ0IDYxLjQ0IDYxLjQ0czYxLjQ0LTI3LjUxIDYxLjQ0LTYxLjQ0em00MC45NiAwYzAgNTYuNTUxLTQ1Ljg0OSAxMDIuNC0xMDIuNCAxMDIuNHMtMTAyLjQtNDUuODQ5LTEwMi40LTEwMi40YzAtNTYuNTUxIDQ1Ljg0OS0xMDIuNCAxMDIuNC0xMDIuNHMxMDIuNCA0NS44NDkgMTAyLjQgMTAyLjR6XCIvPjwvc3ZnPicsXHJcblx0cGx1czogJzxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDYsIDYpXCI+PHBhdGggZD1cIk02IDVWLjVhLjUuNSAwIDAxMSAwVjZoNS41YS41LjUgMCAxMTAgMUg3djUuNWEuNS41IDAgMTEtMSAwVjdILjVhLjUuNSAwIDAxMC0xSDZ6XCIgZmlsbC1ydWxlPVwicm91bmRcIj48L3BhdGg+PC9nPjwvc3ZnPicsXHJcblx0bWVudTogJzxzdmcgd2lkdGg9XCI4MDBweFwiIGhlaWdodD1cIjgwMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTQgMTdIOE0xMiAxN0gyME00IDEySDIwTTQgN0gxMk0xNiA3SDIwXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPjwvc3ZnPicsXHJcblx0c2VhcmNoOlxyXG5cdFx0Jzxzdmcgd2lkdGg9XCI4MDBweFwiIGhlaWdodD1cIjgwMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMCA1QzcuMjM4NTggNSA1IDcuMjM4NTggNSAxMEM1IDEyLjc2MTQgNy4yMzg1OCAxNSAxMCAxNUMxMS4zODEgMTUgMTIuNjI5NiAxNC40NDE1IDEzLjUzNTUgMTMuNTM1NUMxNC40NDE1IDEyLjYyOTYgMTUgMTEuMzgxIDE1IDEwQzE1IDcuMjM4NTggMTIuNzYxNCA1IDEwIDVaTTMgMTBDMyA2LjEzNDAxIDYuMTM0MDEgMyAxMCAzQzEzLjg2NiAzIDE3IDYuMTM0MDEgMTcgMTBDMTcgMTEuNTcxOSAxNi40ODEgMTMuMDIzOSAxNS42MDYzIDE0LjE5MjFMMjAuNzA3MSAxOS4yOTI5QzIxLjA5NzYgMTkuNjgzNCAyMS4wOTc2IDIwLjMxNjYgMjAuNzA3MSAyMC43MDcxQzIwLjMxNjYgMjEuMDk3NiAxOS42ODM0IDIxLjA5NzYgMTkuMjkyOSAyMC43MDcxTDE0LjE5MjEgMTUuNjA2M0MxMy4wMjM5IDE2LjQ4MSAxMS41NzE5IDE3IDEwIDE3QzYuMTM0MDEgMTcgMyAxMy44NjYgMyAxMFpcIiAvPjwvc3ZnPicsXHJcblx0c3VuOiAnPHN2ZyB3aWR0aD1cIjgwMHB4XCIgaGVpZ2h0PVwiODAwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJ5ZWxsb3dcIj48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjUuMDk2NzdcIi8+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEyLjk1NTYgMy4wODA2NUMxMi45NTU2IDIuNTUyODYgMTIuNTI3NyAyLjEyNSAxMiAyLjEyNUMxMS40NzIyIDIuMTI1IDExLjA0NDMgMi41NTI4NiAxMS4wNDQzIDMuMDgwNjVMMTEuMDQ0MyA1LjY0MDc4QzExLjM1NjEgNS41OTQzMiAxMS42NzUzIDUuNTcwMjQgMTIgNS41NzAyNEMxMi4zMjQ3IDUuNTcwMjQgMTIuNjQzOCA1LjU5NDMxIDEyLjk1NTYgNS42NDA3NkwxMi45NTU2IDMuMDgwNjVaTTEyLjk1NTYgMTguMzU5NEMxMi42NDM4IDE4LjQwNTkgMTIuMzI0NyAxOC40Mjk5IDEyIDE4LjQyOTlDMTEuNjc1MyAxOC40Mjk5IDExLjM1NjEgMTguNDA1OCAxMS4wNDQzIDE4LjM1OTRMMTEuMDQ0MyAyMC45MTk0QzExLjA0NDMgMjEuNDQ3MSAxMS40NzIyIDIxLjg3NSAxMiAyMS44NzVDMTIuNTI3NyAyMS44NzUgMTIuOTU1NiAyMS40NDcxIDEyLjk1NTYgMjAuOTE5NEwxMi45NTU2IDE4LjM1OTRaXCIgLz48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjAuOTE5NCAxMi45NTU2QzIxLjQ0NzEgMTIuOTU1NiAyMS44NzUgMTIuNTI3NyAyMS44NzUgMTJDMjEuODc1IDExLjQ3MjIgMjEuNDQ3MSAxMS4wNDQzIDIwLjkxOTQgMTEuMDQ0M0wxOC4zNTkyIDExLjA0NDNDMTguNDA1NyAxMS4zNTYxIDE4LjQyOTggMTEuNjc1MyAxOC40Mjk4IDEyQzE4LjQyOTggMTIuMzI0NyAxOC40MDU3IDEyLjY0MzggMTguMzU5MiAxMi45NTU2TDIwLjkxOTQgMTIuOTU1NlpNNS42NDA2IDEyLjk1NTZDNS41OTQxNSAxMi42NDM4IDUuNTcwMDggMTIuMzI0NyA1LjU3MDA4IDEyQzUuNTcwMDggMTEuNjc1MyA1LjU5NDE2IDExLjM1NjEgNS42NDA2MiAxMS4wNDQzTDMuMDgwNjQgMTEuMDQ0M0MyLjU1Mjg2IDExLjA0NDMgMi4xMjUgMTEuNDcyMiAyLjEyNSAxMkMyLjEyNSAxMi41Mjc3IDIuNTUyODYgMTIuOTU1NiAzLjA4MDY0IDEyLjk1NTZMNS42NDA2IDEyLjk1NTZaXCIgLz48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTguOTgyOCA2LjM2ODc2QzE5LjM1NiA1Ljk5NTU1IDE5LjM1NiA1LjM5MDQ3IDE4Ljk4MjggNS4wMTcyN0MxOC42MDk2IDQuNjQ0MDcgMTguMDA0NSA0LjY0NDA3IDE3LjYzMTMgNS4wMTcyN0wxNS44MjA5IDYuODI3NjRDMTYuMDc0MyA3LjAxNTI4IDE2LjMxNjkgNy4yMjM5MSAxNi41NDY2IDcuNDUzNTRDMTYuNzc2MiA3LjY4MzE1IDE2Ljk4NDggNy45MjU4MSAxNy4xNzI0IDguMTc5MTJMMTguOTgyOCA2LjM2ODc2Wk04LjE3ODk4IDE3LjE3MjVDNy45MjU2NyAxNi45ODQ5IDcuNjgzMDIgMTYuNzc2MyA3LjQ1MzQxIDE2LjU0NjdDNy4yMjM3OCAxNi4zMTcxIDcuMDE1MTQgMTYuMDc0NCA2LjgyNzUxIDE1LjgyMTFMNS4wMTc0MiAxNy42MzExQzQuNjQ0MjIgMTguMDA0MyA0LjY0NDIyIDE4LjYwOTQgNS4wMTc0MiAxOC45ODI2QzUuMzkwNjIgMTkuMzU1OCA1Ljk5NTcgMTkuMzU1OCA2LjM2ODkxIDE4Ljk4MjZMOC4xNzg5OCAxNy4xNzI1WlwiIC8+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTYuMzY4ODggNS4wMTcyMkM1Ljk5NTY4IDQuNjQ0MDIgNS4zOTA2IDQuNjQ0MDIgNS4wMTczOSA1LjAxNzIyQzQuNjQ0MTkgNS4zOTA0MyA0LjY0NDE5IDUuOTk1NTEgNS4wMTczOSA2LjM2ODcxTDYuODI3NzYgOC4xNzkwOEM3LjAxNTQgNy45MjU3NCA3LjIyNDAzIDcuNjgzMDYgNy40NTM2NiA3LjQ1MzQyQzcuNjgzMjcgNy4yMjM4MSA3LjkyNTkzIDcuMDE1MiA4LjE3OTI0IDYuODI3NThMNi4zNjg4OCA1LjAxNzIyWk0xNy4xNzI3IDE1LjgyMUMxNi45ODUxIDE2LjA3NDMgMTYuNzc2NCAxNi4zMTcgMTYuNTQ2OCAxNi41NDY2QzE2LjMxNzIgMTYuNzc2MiAxNi4wNzQ1IDE2Ljk4NDkgMTUuODIxMiAxNy4xNzI1TDE3LjYzMTMgMTguOTgyNkMxOC4wMDQ1IDE5LjM1NTggMTguNjA5NSAxOS4zNTU4IDE4Ljk4MjggMTguOTgyNkMxOS4zNTYgMTguNjA5NCAxOS4zNTYgMTguMDA0MyAxOC45ODI4IDE3LjYzMTFMMTcuMTcyNyAxNS44MjFaXCIgLz48L3N2Zz4nLFxyXG5cdG1vb246ICc8c3ZnIHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCI4MDBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImdyZXlcIj48cGF0aCBkPVwiTTEyLjA1NTcgMy41OTk3NEMxMi4yNzUyIDMuMjgxMyAxMi4yOTEzIDIuODY0ODQgMTIuMDk3MiAyLjUzMDMzQzExLjkwMzEgMi4xOTU4MiAxMS41MzM1IDIuMDAzMjQgMTEuMTQ4MSAyLjAzNTc5QzYuMDIzNTEgMi40Njg2OCAyIDYuNzYzOTIgMiAxMkMyIDE3LjUyMjggNi40NzcxNSAyMiAxMiAyMkMxNy4yMzYgMjIgMjEuNTMxMyAxNy45NzY0IDIxLjk2NDIgMTIuODUxOEMyMS45OTY3IDEyLjQ2NjQgMjEuODA0MSAxMi4wOTY4IDIxLjQ2OTYgMTEuOTAyN0MyMS4xMzUxIDExLjcwODYgMjAuNzE4NyAxMS43MjQ4IDIwLjQwMDIgMTEuOTQ0M0MxOS40MzQxIDEyLjYxMDIgMTguMjY0MSAxMyAxNyAxM0MxMy42ODYzIDEzIDExIDEwLjMxMzcgMTEgNi45OTk5NkMxMSA1LjczNTg5IDExLjM4OTggNC41NjU4NyAxMi4wNTU3IDMuNTk5NzRaXCIgLz48L3N2Zz4nLFxyXG5cdHBlbjogJzxzdmcgd2lkdGg9XCI4MDBweFwiIGhlaWdodD1cIjgwMHB4XCIgdmlld0JveD1cIjAgMCAyOCAxOFwiPjxnIGlkPVwib3V0XCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBza2V0Y2g6dHlwZT1cIk1TUGFnZVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1LDApXCI+PHBhdGggZD1cIk0yLjI1LDEyLjkzNzg5MDYgTDIuMjUsMTUuNzUgTDUuMDYyMTA5NDMsMTUuNzUgTDEzLjM1NTk1NzUsNy40NTYxNTE5MiBMMTAuNTQzODQ4MSw0LjY0NDA0MjQ5IEwyLjI1LDEyLjkzNzg5MDYgTDIuMjUsMTIuOTM3ODkwNiBMMi4yNSwxMi45Mzc4OTA2IFogTTE1LjUzMDY1NTUsNS4yODE0NTM5NiBDMTUuODIzMTE0OCw0Ljk4ODk5NDU4IDE1LjgyMzExNDgsNC41MTY1NjAyIDE1LjUzMDY1NTUsNC4yMjQxMDA4MiBMMTMuNzc1ODk5MiwyLjQ2OTM0NDU0IEMxMy40ODM0Mzk4LDIuMTc2ODg1MTUgMTMuMDExMDA1NCwyLjE3Njg4NTE1IDEyLjcxODU0NiwyLjQ2OTM0NDU0IEwxMS4zNDYyMzY2LDMuODQxNjUzOTQgTDE0LjE1ODM0NjEsNi42NTM3NjMzNyBMMTUuNTMwNjU1NSw1LjI4MTQ1Mzk2IEwxNS41MzA2NTU1LDUuMjgxNDUzOTYgTDE1LjUzMDY1NTUsNS4yODE0NTM5NiBaXCIgaWQ9XCJwYXRoXCIgZmlsbD1cIiM1NTRmNGZcIiBza2V0Y2g6dHlwZT1cIk1TU2hhcGVHcm91cFwiPjwvcGF0aD48L2c+PC9zdmc+JyxcclxuXHRjaXJjbGU6XHJcblx0XHQnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgaWQ9XCJjb2xvci1tYXJrXCI+PHBhdGggZD1cIk0xMiA3YTUgNSAwIDExMCAxMCA1IDUgMCAwMTAtMTB6XCIgPjwvcGF0aD48L3N2Zz4nLFxyXG59O1xyXG5cclxuZXhwb3J0IHsgc3ZncyB9O1xyXG4iLCJpbXBvcnQgeyBzdmdzIH0gZnJvbSAnLi4vc3Zncy9zdmdzLmpzJztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZS90b3AtYmFyLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVRvcEJhcigpIHtcclxuXHRjb25zdCB0b3BCYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR0b3BCYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9wLWJhci1jb250YWluZXInKTtcclxuXHJcblx0Y29uc3QgYnVyZ2VyTWVudSA9IGNyZWF0ZWJ1cmdlck1lbnUoKTtcclxuXHRjb25zdCBxdWlja1NlYXJjaCA9IGNyZWF0ZVF1aWNrU2VhcmNoKCk7XHJcblx0Y29uc3QgdG9vZ2xlVGhlbWUgPSBjcmVhdGVUb2dnbGUoKTtcclxuXHJcblx0dG9wQmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1cmdlck1lbnUpO1xyXG5cdHRvcEJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWlja1NlYXJjaCk7XHJcblx0dG9wQmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvb2dsZVRoZW1lKTtcclxuXHJcblx0cmV0dXJuIHRvcEJhckNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlYnVyZ2VyTWVudSgpIHtcclxuXHRjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0bWVudS5jbGFzc0xpc3QuYWRkKCdidXJnZXItbWVudScpO1xyXG5cdG1lbnUuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcblx0bWVudS5pZCA9ICdidXJnZXJNZW51JztcclxuXHRtZW51LmlubmVySFRNTCA9IHN2Z3MubWVudTtcclxuXHJcblx0cmV0dXJuIG1lbnU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVF1aWNrU2VhcmNoKCkge1xyXG5cdGNvbnN0IHF1aWNrU2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0cXVpY2tTZWFyY2guY2xhc3NMaXN0LmFkZCgncXVpY2stc2VhcmNoJyk7XHJcblx0cXVpY2tTZWFyY2guaW5uZXJIVE1MID0gc3Zncy5zZWFyY2g7XHJcblxyXG5cdGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHRpbnB1dC5wbGFjZWhvbGRlciA9ICdTZWFyY2guLi4nO1xyXG5cclxuXHRxdWlja1NlYXJjaC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcblxyXG5cdHJldHVybiBxdWlja1NlYXJjaDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9nZ2xlKCkge1xyXG5cdGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHRvZ2dsZS5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtdGhlbWUnKTtcclxuXHR0b2dnbGUuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcblx0dG9nZ2xlLmlubmVySFRNTCA9IHN2Z3Muc3VuO1xyXG5cdHRvZ2dsZS5pbm5lckhUTUwgKz0gc3Zncy5tb29uO1xyXG5cclxuXHRjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRjaXJjbGUuY2xhc3NMaXN0LmFkZCgnY2lyY2xlJyk7XHJcblx0Y2lyY2xlLmlkID0gJ3RvZ2dsZS1jaXJjbGUnO1xyXG5cclxuXHR0b2dnbGUuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcclxuXHJcblx0cmV0dXJuIHRvZ2dsZTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVUb3BCYXIgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgVUkgfSBmcm9tICcuL3VpLW1vZHVsZS9VSSc7XHJcblxyXG5VSS5pbml0KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==