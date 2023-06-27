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

.input-container input,
.input-container select{
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
}`, "",{"version":3,"sources":["webpack://./src/style/modal.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,aAAa;EACb,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,2BAA2B;EAC3B,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mCAAmC;EACnC,oBAAoB;EACpB,uCAAuC;EACvC,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,6BAA6B;EAC7B,oBAAoB;EACpB,mCAAmC;EACnC,wBAAwB;EACxB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,YAAY;EACZ,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,sCAAsC;EACtC,YAAY;AACd","sourcesContent":[".modal-container {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #2222227a;\r\n  z-index: 2;\r\n}\r\n\r\n.modal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: min(500px, 80vw);\r\n  border: 1px solid var(--text-color);\r\n  border-radius: .5rem;\r\n  background-color: var(--side-bar-color);\r\n  color: var(--text-color);\r\n}\r\n\r\n.modal-header {\r\n  font-size: 1.1rem;\r\n  font-weight: bold;\r\n  padding: .5rem;\r\n}\r\n\r\n.content-modal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.input-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.input-container input,\r\n.input-container select{\r\n  background-color: transparent;\r\n  border-radius: .2rem;\r\n  border: 1px solid var(--text-color);\r\n  color: var(--text-color);\r\n  padding: .3rem;\r\n  outline: none;\r\n}\r\n\r\n.field {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: .5rem 0;\r\n  gap: .5rem;\r\n}\r\n\r\n.btns-container {\r\n  display: flex;\r\n  gap: .2rem;\r\n  align-self: flex-end;\r\n}\r\n\r\n.btns-container button {\r\n  width: 80px;\r\n  padding: .2rem;\r\n  border: none;\r\n  border-radius: .2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.btns-container .blue {\r\n  background-color: var(--primary-color);\r\n  color: white;\r\n}"],"sourceRoot":""}]);
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
		return Projects.find(
			(project) => project.name.toLowerCase() === name.toLowerCase()
		);
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
		tasks.push(Task(title, description, dueDate, priority, name));
	}

	function findTask(title) {
		return tasks.find((task) => task.title === title);
	}

	function findTaskIndex(title) {
		return tasks.findIndex((task) => task.title === title);
	}

	function getTasks() {
		return tasks;
	}

	function updateTask(task, obj) {
		task.title = obj.title;
		task.description = obj.description;
		task.dueDate = obj.dueDate;
		task.priority = obj.priority;
	}

	return {
		name: name,
		addTask,
		getTasks,
		findTask,
		findTaskIndex,
		updateTask
	};
}

function Task(title, description, dueDate, priority, project) {
	return {
		title: title,
		description: description,
		dueDate: dueDate,
		priority: priority,
		addDate: (0,_date_date_js__WEBPACK_IMPORTED_MODULE_0__.getDate)(),
		project,
	};
}

ProjectsModule.addProject('Todo App');
const app = ProjectsModule.getProject('Todo App');
app.addTask('edit tasks', 'for the todo app', '2023-06-27', 'p1');
app.addTask('edit project Name', 'for the todo app', '2023-06-27', 'p1');
app.addTask('show details', 'for the todo app', '2023-06-27', 'p1');
app.addTask('task done', 'for the todo app', '2023-06-27', 'p1');
app.addTask('color palete', 'for the todo app', '2023-06-27', 'p2');
app.addTask('hover effects', 'for the todo app', '2023-06-27', 'p2');
app.addTask('storage Module', 'for the todo app', '2023-06-27', 'p1');




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
/* harmony import */ var _modals_task_modal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/task-modal.js */ "./src/ui-module/modals/task-modal.js");








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

			const removeIcon = document.createElement('span');
			removeIcon.innerHTML = _svgs_svgs_js__WEBPACK_IMPORTED_MODULE_4__.svgs.close;
			removeIcon.classList.add('icon');

			const editIcon = document.createElement('span');
			editIcon.innerHTML = _svgs_svgs_js__WEBPACK_IMPORTED_MODULE_4__.svgs.pen;
			editIcon.classList.add('icon');

			removeIcon.addEventListener('click', () => {
				removeTask(task);
			});

			editIcon.addEventListener('click', () => {
				editTask(task);
			});

			taskContainer.appendChild(circle);
			taskContainer.appendChild(taskName);
			taskContainer.appendChild(editIcon);
			taskContainer.appendChild(removeIcon);

			return taskContainer;
		}

		function removeTask(task) {
			const project = _Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule.getProject(task.project);
			const tasks = project.getTasks();
			const taskIndex = project.findTaskIndex(task.title);

			tasks.splice(taskIndex, 1);

			const pageData = getPage(task);

			updateDefaultPages();
			updatePage(pageData);
		}

		function getPage(task) {
			return Pages.find((page) => page.name === task.project);
		}

		function editTask(task) {
			const modal = (0,_modals_task_modal_js__WEBPACK_IMPORTED_MODULE_6__.generateTaskModal)();
			const title = modal.querySelector('.modal-header');
			const saveBtn = modal.querySelector('#addTask');
			const cancelBtn = modal.querySelector('#closeModal');

			title.textContent = 'Editing';
			saveBtn.textContent = 'save';

			fillInputs(task, modal);

			saveBtn.addEventListener('click', () => {
				updateTask(task, modal);
			});
			cancelBtn.addEventListener('click', () => {
				closeModal(modal);
			});

			page.appendChild(modal);
			modal.querySelector('#title').focus();
		}

		function getInputsValues(modal) {
			const title = modal.querySelector('#title');
			const description = modal.querySelector('#description');
			const dueDate = modal.querySelector('#dueDate');
			const priority = modal.querySelector('#priority');

			return {
				title: title.value,
				description: description.value,
				dueDate: dueDate.value,
				priority: priority.value,
			};
		}

		function fillInputs(task, modal) {
			const title = modal.querySelector('#title');
			const description = modal.querySelector('#description');
			const dueDate = modal.querySelector('#dueDate');
			const priority = modal.querySelector('#priority');

			title.value = task.title;
			description.value = task.description;
			dueDate.value = task.dueDate;
			priority.value = task.priority;
		}

		function updateTask(task, modal) {
			const project = _Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule.getProject(task.project);
			const newData = getInputsValues(modal);

			if (project.findTask(newData.title)) {
				alert('Task name already exist.');
				return false;
			}
			project.updateTask(task, newData);
			closeModal(modal);
			updateDefaultPages();
			updatePage(getPage(task));
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
				if (object.name === 'Week') {
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
				openTaskModal(newPage);
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

		function openTaskModal(pageData) {
			const modal = (0,_modals_task_modal_js__WEBPACK_IMPORTED_MODULE_6__.generateTaskModal)();
			addEventsTaskModal(modal, pageData);
			page.appendChild(modal);
			modal.querySelector('#title').focus();
		}

		function addEventsTaskModal(modal, pageData) {
			const addBtn = modal.querySelector('#addTask');
			const cancelBtn = modal.querySelector('#closeModal');
			const inputs = modal.querySelector('.input-container');

			addBtn.addEventListener('click', () => {
				addTask(inputs, pageData);
			});
			cancelBtn.addEventListener('click', () => {
				closeModal(modal);
			});
		}

		function addTask(inputs, pageData) {
			const title = inputs.querySelector('#title');
			const description = inputs.querySelector('#description');
			const date = inputs.querySelector('#dueDate');
			const priority = inputs.querySelector('#priority');
			const project = _Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule.getProject(pageData.name);

			if (!title.value) {
				alert('The task must have at least a title');
				return;
			}

			if (project.findTask(title.value)) {
				alert('The task title already exist');
				return;
			}

			project.addTask(
				title.value,
				description.value,
				date.value,
				priority.value
			);

			clearInputs([title, description, date]);
			priority.value = 'p1';
			updatePage(pageData);
		}

		function clearInputs(inputs) {
			inputs.forEach((input) => (input.value = ''));
		}

		function closeModal(modal) {
			page.removeChild(modal);
		}

		function updatePage(pageData) {
			const taskContainer = pageData.page.querySelector('.tasks');
			const tasks = _Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule.getProject(pageData.name).getTasks();

			taskContainer.innerHTML = '';

			tasks.forEach((task) => {
				taskContainer.appendChild(createTask(task));
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

/***/ "./src/ui-module/modals/task-modal.js":
/*!********************************************!*\
  !*** ./src/ui-module/modals/task-modal.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateTaskModal: () => (/* binding */ generateTaskModal)
/* harmony export */ });
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ "./src/ui-module/modals/modal.js");


function generateTaskModal() {
	const modal = (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.generateModal)();
	const header = modal.querySelector('.modal-header');
	const inputsContainer = modal.querySelector('.input-container');
	const inputsData = [
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
			options: ['p1', 'p2', 'p3'],
		},
	];

	const inputsHTML = [
		createInput(inputsData[0]),
		createInput(inputsData[1]),
		createInput(inputsData[2]),
		createSelectInput(inputsData[3]),
	];

	header.textContent = 'Add Task';

	const addBtn = createAddBtn();
	const cancelBtn = createCancelBtn();

	modal.querySelector('.btns-container').appendChild(cancelBtn);
	modal.querySelector('.btns-container').appendChild(addBtn);

	inputsHTML.forEach((input) => inputsContainer.appendChild(input));

	return modal;
}

function createBasicInputField(obj) {
	const field = document.createElement('div');
	field.classList.add('field');

	const label = document.createElement('label');
	label.textContent = obj.title;
	label.htmlFor = obj.id;

	field.appendChild(label);

	return field;
}

function createInput(obj) {
	const basicInput = createBasicInputField(obj);

	const input = document.createElement('input');
	input.type = obj.type;
	input.id = obj.id;

	basicInput.appendChild(input);

	return basicInput;
}

function createSelectInput(obj) {
	const basicInput = createBasicInputField(obj);
	const select = document.createElement('select');
	select.id = obj.id;

	obj.options.forEach((option) => {
		const container = document.createElement('option');
		container.textContent = option;
		select.appendChild(container);
	});

	basicInput.appendChild(select);

	return basicInput;
}

function createAddBtn() {
	const btn = document.createElement('button');
	btn.classList.add('blue');
	btn.textContent = 'Add';
	btn.id = 'addTask';

	return btn;
}

function createCancelBtn() {
	const btn = document.createElement('button');
	btn.textContent = 'Cancel';
	btn.id = 'closeModal';

	return btn;
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
	pen: '<svg  width="64px" height="64px" viewBox="-3.48 -3.48 31.96 31.96" xmlns="http://www.w3.org/2000/svg" stroke="" stroke-width="0.50024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M15.5,6.20710678 L4,17.7071068 L4,20 L6.29289322,20 L17.7928932,8.5 L15.5,6.20710678 Z M16.2071068,5.5 L18.5,7.79289322 L19.7928932,6.5 L17.5,4.20710678 L16.2071068,5.5 L16.2071068,5.5 Z M3,20.5 L3,17.5 C3,17.3673918 3.05267842,17.2402148 3.14644661,17.1464466 L17.1464466,3.14644661 C17.3417088,2.95118446 17.6582912,2.95118446 17.8535534,3.14644661 L20.8535534,6.14644661 C21.0488155,6.34170876 21.0488155,6.65829124 20.8535534,6.85355339 L6.85355339,20.8535534 C6.7597852,20.9473216 6.63260824,21 6.5,21 L3.5,21 C3.22385763,21 3,20.7761424 3,20.5 Z"></path> </g></svg>',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlFQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdFQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpRUFBYztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQ0FBSTtBQUMxQjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGlFQUFjO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlFQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtDQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE9BQU8saUVBQWM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUVBQWM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3RUFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUVBQWM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlFQUFjO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxpRUFBYztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUVBQWM7QUFDaEIsaUNBQWlDLGlFQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNjOzs7Ozs7Ozs7Ozs7Ozs7O0FDM2tCaUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmU7QUFDVDtBQUMvQjtBQUNBO0FBQ0EsZUFBZSxxREFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRFc7QUFDM0M7QUFDQTtBQUNBLGVBQWUsd0RBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdVO0FBQ0w7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQ0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtDQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCOzs7Ozs7Ozs7Ozs7Ozs7QUN2SDNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0I7QUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJ1QztBQUNOO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwrQ0FBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwrQ0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBSTtBQUN4QixxQkFBcUIsK0NBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEI7Ozs7Ozs7VUN6RDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7QUNBb0M7QUFDcEM7QUFDQSw2Q0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlL21vZGFsLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS9zaWRlLWJhci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUvdG9wLWJhci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUvbW9kYWwuY3NzPzE3MDYiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUvc2lkZS1iYXIuY3NzPzM4YzMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUvdG9wLWJhci5jc3M/OTMzZiIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL1Byb2plY3RzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2RhdGUvZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy91aS1tb2R1bGUvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdWktbW9kdWxlL21vZGFscy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy91aS1tb2R1bGUvbW9kYWxzL3Byb2plY3QtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdWktbW9kdWxlL21vZGFscy90YXNrLW1vZGFsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3VpLW1vZHVsZS9zaWRlLWJhci9zaWRlLWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy91aS1tb2R1bGUvc3Zncy9zdmdzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3VpLW1vZHVsZS90b3AtYmFyL3RvcC1iYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tb2RhbC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjdhO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiBtaW4oNTAwcHgsIDgwdncpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IC41cmVtO1xyXG59XHJcblxyXG4uY29udGVudC1tb2RhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMnJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5pbnB1dC1jb250YWluZXIgaW5wdXQsXHJcbi5pbnB1dC1jb250YWluZXIgc2VsZWN0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICBwYWRkaW5nOiAuM3JlbTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZmllbGQge1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IC41cmVtIDA7XHJcbiAgZ2FwOiAuNXJlbTtcclxufVxyXG5cclxuLmJ0bnMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogLjJyZW07XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5idG5zLWNvbnRhaW5lciBidXR0b24ge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIHBhZGRpbmc6IC4ycmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG5zLWNvbnRhaW5lciAuYmx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUNBQW1DO0VBQ25DLG9CQUFvQjtFQUNwQix1Q0FBdUM7RUFDdkMsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLG1DQUFtQztFQUNuQyx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9kYWwtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI3YTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiBtaW4oNTAwcHgsIDgwdncpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWhlYWRlciB7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZzogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LW1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciBpbnB1dCxcXHJcXG4uaW5wdXQtY29udGFpbmVyIHNlbGVjdHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXJhZGl1czogLjJyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IC4zcmVtO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpZWxkIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IC41cmVtIDA7XFxyXFxuICBnYXA6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRucy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogLjJyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bnMtY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIHBhZGRpbmc6IC4ycmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogLjJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG5zLWNvbnRhaW5lciAuYmx1ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2lkZS1iYXItY29udGFpbmVyIHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tdG9wLWJhci1oZWlnaHQpKTtcclxuXHR3aWR0aDogdmFyKC0tc2lkZS1iYXItd2lkdGgpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyLWNvbG9yKTtcclxuXHR6LWluZGV4OiAxO1xyXG5cdHBhZGRpbmctdG9wOiAycmVtO1xyXG5cdG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tdHJhbnNpdGlvbi10aW1lKSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNpZGUtYmFyLXNoYWRvdyB7XHJcblx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tdG9wLWJhci1oZWlnaHQpKTtcclxuXHR3aWR0aDogdmFyKC0tc2lkZS1iYXItd2lkdGgpO1xyXG5cdHRyYW5zaXRpb246IHdpZHRoIHZhcigtLXRyYW5zaXRpb24tdGltZSkgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5zaWRlLWJhciB7XHJcblx0cGFkZGluZzogMCAxcmVtO1xyXG5cdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxuc3BhbiB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ub3B0aW9uIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Z2FwOiAwLjNyZW07XHJcblx0cGFkZGluZzogMC41cmVtO1xyXG5cdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5vcHRpb246aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWRhcmstY29sb3IpO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMjVweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG4uaWNvbiBzdmcge1xyXG5cdGhlaWdodDogMjVweDtcclxuXHR3aWR0aDogMjVweDtcclxuXHRmaWxsOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuXHRzdHJva2U6IHZhcigtLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcblx0ZmxleDogMTtcclxufVxyXG5cclxuLnN0YW5kYXJkLW9wdGlvbnMge1xyXG5cdG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1jb250YWluZXIge1xyXG5cdGZsZXg6IDE7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1oZWFkZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0cGFkZGluZzogMC41cmVtO1xyXG5cdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5wcm9qZWN0cyB7XHJcblx0ZmxleDogMTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdHBhZGRpbmctaW5saW5lOiAwLjVyZW0gMDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbi5vcGVuIHtcclxuXHRsZWZ0OiAwO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKC0xICogdmFyKC0tc2lkZS1iYXItd2lkdGgpKSk7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWRhcmstY29sb3IpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG5cdC5zaWRlLWJhci1zaGFkb3cge1xyXG5cdFx0d2lkdGg6IDA7XHJcblx0fVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3NpZGUtYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGVBQWU7Q0FDZiwyQ0FBMkM7Q0FDM0MsNEJBQTRCO0NBQzVCLHVDQUF1QztDQUN2QyxVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQix3REFBd0Q7QUFDekQ7O0FBRUE7Q0FDQywyQ0FBMkM7Q0FDM0MsNEJBQTRCO0NBQzVCLG9EQUFvRDtBQUNyRDs7QUFFQTtDQUNDLGVBQWU7Q0FDZix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsZUFBZTtDQUNmLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MseUNBQXlDO0FBQzFDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsZUFBZTtDQUNmLGVBQWU7Q0FDZixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLHVCQUF1QjtDQUN2Qix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxPQUFPO0FBQ1I7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YscUJBQXFCO0NBQ3JCLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGVBQWU7Q0FDZix3QkFBd0I7Q0FDeEIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsT0FBTztBQUNSOztBQUVBO0NBQ0MsdURBQXVEO0FBQ3hEOztBQUVBO0NBQ0MseUNBQXlDO0FBQzFDOztBQUVBO0NBQ0M7RUFDQyxRQUFRO0NBQ1Q7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2lkZS1iYXItY29udGFpbmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tdG9wLWJhci1oZWlnaHQpKTtcXHJcXG5cXHR3aWR0aDogdmFyKC0tc2lkZS1iYXItd2lkdGgpO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyLWNvbG9yKTtcXHJcXG5cXHR6LWluZGV4OiAxO1xcclxcblxcdHBhZGRpbmctdG9wOiAycmVtO1xcclxcblxcdG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tdHJhbnNpdGlvbi10aW1lKSBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYmFyLXNoYWRvdyB7XFxyXFxuXFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tdG9wLWJhci1oZWlnaHQpKTtcXHJcXG5cXHR3aWR0aDogdmFyKC0tc2lkZS1iYXItd2lkdGgpO1xcclxcblxcdHRyYW5zaXRpb246IHdpZHRoIHZhcigtLXRyYW5zaXRpb24tdGltZSkgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhciB7XFxyXFxuXFx0cGFkZGluZzogMCAxcmVtO1xcclxcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAwLjNyZW07XFxyXFxuXFx0cGFkZGluZzogMC41cmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5vcHRpb246aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWRhcmstY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMjVweDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiBzdmcge1xcclxcblxcdGhlaWdodDogMjVweDtcXHJcXG5cXHR3aWR0aDogMjVweDtcXHJcXG5cXHRmaWxsOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG5cXHRzdHJva2U6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZSB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YW5kYXJkLW9wdGlvbnMge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1oZWFkZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMC41cmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdHBhZGRpbmctaW5saW5lOiAwLjVyZW0gMDtcXHJcXG5cXHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxyXFxufVxcclxcblxcclxcbi5vcGVuIHtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2Uge1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKC0xICogdmFyKC0tc2lkZS1iYXItd2lkdGgpKSk7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWRhcmstY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcblxcdC5zaWRlLWJhci1zaGFkb3cge1xcclxcblxcdFxcdHdpZHRoOiAwO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudG9wLWJhci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHBhZGRpbmc6IC40cmVtIDEuNXJlbTtcclxuICBoZWlnaHQ6IHZhcigtLXRvcC1iYXItaGVpZ2h0KTtcclxufVxyXG5cclxuLnRvcC1iYXItY29udGFpbmVyIHN2ZyB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGZpbGw6ICNmZmZmZmZjNztcclxufVxyXG5cclxuLmJ1cmdlci1tZW51IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogLjJyZW07XHJcbn1cclxuXHJcbi5idXJnZXItbWVudSBzdmd7XHJcbiAgc3Ryb2tlOiB3aGl0ZTtcclxufVxyXG5cclxuLnF1aWNrLXNlYXJjaCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY1ZDtcclxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcclxuICBnYXA6IDVweDtcclxuICBjb2xvcjogI2ZmZmZmZmM3O1xyXG59IFxyXG5cclxuLnRvcC1iYXItY29udGFpbmVyIGlucHV0IHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogNTB2dztcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ucXVpY2stc2VhcmNoOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodC1jb2xvcik7XHJcbn1cclxuXHJcbi50b2dnbGUtdGhlbWUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZmE4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuMnJlbTtcclxuICBwYWRkaW5nOiAgMCAuM3JlbTtcclxuICBnYXA6IC4ycmVtO1xyXG59XHJcblxyXG4udG9nZ2xlLXRoZW1lIHN2ZyB7XHJcbiAgd2lkdGg6IDIzcHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRvZ2dsZS10aGVtZSAuY2lyY2xlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IC40cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2U7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0LWNvbG9yKTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHggKSB7XHJcbiAgLnRvcC1iYXItY29udGFpbmVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGdhcDogMnJlbTtcclxuICB9XHJcbiAgLnF1aWNrLXNlYXJjaCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3RvcC1iYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AscUJBQXFCO0VBQ3JCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsUUFBUTtFQUNSLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLFNBQVM7RUFDWDtFQUNBO0lBQ0UsT0FBTztFQUNUO0VBQ0E7SUFDRSxPQUFPO0VBQ1Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudG9wLWJhci1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcGFkZGluZzogLjRyZW0gMS41cmVtO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS10b3AtYmFyLWhlaWdodCk7XFxyXFxufVxcclxcblxcclxcbi50b3AtYmFyLWNvbnRhaW5lciBzdmcge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBmaWxsOiAjZmZmZmZmYzc7XFxyXFxufVxcclxcblxcclxcbi5idXJnZXItbWVudSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5idXJnZXItbWVudSBzdmd7XFxyXFxuICBzdHJva2U6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucXVpY2stc2VhcmNoIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmNWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgY29sb3I6ICNmZmZmZmZjNztcXHJcXG59IFxcclxcblxcclxcbi50b3AtYmFyLWNvbnRhaW5lciBpbnB1dCB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB3aWR0aDogNTB2dztcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICBmb250LXNpemU6IC45cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnF1aWNrLXNlYXJjaDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUtdGhlbWUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmZhODtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEuMnJlbTtcXHJcXG4gIHBhZGRpbmc6ICAwIC4zcmVtO1xcclxcbiAgZ2FwOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZ2dsZS10aGVtZSBzdmcge1xcclxcbiAgd2lkdGg6IDIzcHg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlLXRoZW1lIC5jaXJjbGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IC40cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHggKSB7XFxyXFxuICAudG9wLWJhci1jb250YWluZXIge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gIH1cXHJcXG4gIC5xdWljay1zZWFyY2gge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgfVxcclxcbiAgaW5wdXQge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlLWJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZGUtYmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b3AtYmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9wLWJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdldERhdGUgfSBmcm9tICcuLi9kYXRlL2RhdGUuanMnO1xyXG5cclxuY29uc3QgUHJvamVjdHNNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IFByb2plY3RzID0gW107XHJcblxyXG5cdGZ1bmN0aW9uIGFkZFByb2plY3QobmFtZSkge1xyXG5cdFx0UHJvamVjdHMucHVzaChQcm9qZWN0KG5hbWUpKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldEFsbFByb2plY3RzKCkge1xyXG5cdFx0cmV0dXJuIFByb2plY3RzO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0UHJvamVjdChuYW1lKSB7XHJcblx0XHRsZXQgaW5kZXggPSBmaW5kSW5kZXgobmFtZSk7XHJcblx0XHRyZXR1cm4gUHJvamVjdHNbaW5kZXhdO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZmluZEluZGV4KG5hbWUpIHtcclxuXHRcdHJldHVybiBQcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBmaW5kUHJvamVjdChuYW1lKSB7XHJcblx0XHRyZXR1cm4gUHJvamVjdHMuZmluZChcclxuXHRcdFx0KHByb2plY3QpID0+IHByb2plY3QubmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKClcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiByZW1vdmVQcm9qZWN0KG5hbWUpIHtcclxuXHRcdGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRJbmRleChuYW1lKTtcclxuXHRcdFByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0QWxsVGFza3MoKSB7XHJcblx0XHRjb25zdCBwcm9qZWN0cyA9IGdldEFsbFByb2plY3RzKCk7XHJcblx0XHRjb25zdCB0YXNrcyA9IFtdO1xyXG5cdFx0cHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG5cdFx0XHR0YXNrcy5wdXNoKC4uLnByb2plY3QuZ2V0VGFza3MoKSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gdGFza3M7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0YWRkUHJvamVjdCxcclxuXHRcdGdldEFsbFByb2plY3RzLFxyXG5cdFx0Z2V0UHJvamVjdCxcclxuXHRcdGZpbmRQcm9qZWN0LFxyXG5cdFx0cmVtb3ZlUHJvamVjdCxcclxuXHRcdGdldEFsbFRhc2tzLFxyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0KG5hbWUpIHtcclxuXHRjb25zdCB0YXNrcyA9IFtdO1xyXG5cclxuXHRmdW5jdGlvbiBhZGRUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuXHRcdHRhc2tzLnB1c2goVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBuYW1lKSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBmaW5kVGFzayh0aXRsZSkge1xyXG5cdFx0cmV0dXJuIHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2sudGl0bGUgPT09IHRpdGxlKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGZpbmRUYXNrSW5kZXgodGl0bGUpIHtcclxuXHRcdHJldHVybiB0YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2sudGl0bGUgPT09IHRpdGxlKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldFRhc2tzKCkge1xyXG5cdFx0cmV0dXJuIHRhc2tzO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdXBkYXRlVGFzayh0YXNrLCBvYmopIHtcclxuXHRcdHRhc2sudGl0bGUgPSBvYmoudGl0bGU7XHJcblx0XHR0YXNrLmRlc2NyaXB0aW9uID0gb2JqLmRlc2NyaXB0aW9uO1xyXG5cdFx0dGFzay5kdWVEYXRlID0gb2JqLmR1ZURhdGU7XHJcblx0XHR0YXNrLnByaW9yaXR5ID0gb2JqLnByaW9yaXR5O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdG5hbWU6IG5hbWUsXHJcblx0XHRhZGRUYXNrLFxyXG5cdFx0Z2V0VGFza3MsXHJcblx0XHRmaW5kVGFzayxcclxuXHRcdGZpbmRUYXNrSW5kZXgsXHJcblx0XHR1cGRhdGVUYXNrXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHRpdGxlOiB0aXRsZSxcclxuXHRcdGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuXHRcdGR1ZURhdGU6IGR1ZURhdGUsXHJcblx0XHRwcmlvcml0eTogcHJpb3JpdHksXHJcblx0XHRhZGREYXRlOiBnZXREYXRlKCksXHJcblx0XHRwcm9qZWN0LFxyXG5cdH07XHJcbn1cclxuXHJcblByb2plY3RzTW9kdWxlLmFkZFByb2plY3QoJ1RvZG8gQXBwJyk7XHJcbmNvbnN0IGFwcCA9IFByb2plY3RzTW9kdWxlLmdldFByb2plY3QoJ1RvZG8gQXBwJyk7XHJcbmFwcC5hZGRUYXNrKCdlZGl0IHRhc2tzJywgJ2ZvciB0aGUgdG9kbyBhcHAnLCAnMjAyMy0wNi0yNycsICdwMScpO1xyXG5hcHAuYWRkVGFzaygnZWRpdCBwcm9qZWN0IE5hbWUnLCAnZm9yIHRoZSB0b2RvIGFwcCcsICcyMDIzLTA2LTI3JywgJ3AxJyk7XHJcbmFwcC5hZGRUYXNrKCdzaG93IGRldGFpbHMnLCAnZm9yIHRoZSB0b2RvIGFwcCcsICcyMDIzLTA2LTI3JywgJ3AxJyk7XHJcbmFwcC5hZGRUYXNrKCd0YXNrIGRvbmUnLCAnZm9yIHRoZSB0b2RvIGFwcCcsICcyMDIzLTA2LTI3JywgJ3AxJyk7XHJcbmFwcC5hZGRUYXNrKCdjb2xvciBwYWxldGUnLCAnZm9yIHRoZSB0b2RvIGFwcCcsICcyMDIzLTA2LTI3JywgJ3AyJyk7XHJcbmFwcC5hZGRUYXNrKCdob3ZlciBlZmZlY3RzJywgJ2ZvciB0aGUgdG9kbyBhcHAnLCAnMjAyMy0wNi0yNycsICdwMicpO1xyXG5hcHAuYWRkVGFzaygnc3RvcmFnZSBNb2R1bGUnLCAnZm9yIHRoZSB0b2RvIGFwcCcsICcyMDIzLTA2LTI3JywgJ3AxJyk7XHJcblxyXG5leHBvcnQgeyBQcm9qZWN0c01vZHVsZSB9O1xyXG4iLCJmdW5jdGlvbiBnZXREYXRlKCkge1xyXG5cdGNvbnN0IGZ1bGxEYXRlID0gbmV3IERhdGUoKTtcclxuXHRjb25zdCBkYXkgPSBmdWxsRGF0ZS5nZXREYXRlKCk7XHJcblx0Y29uc3QgbW9udGggPSBmdWxsRGF0ZS5nZXRNb250aCgpO1xyXG5cdGNvbnN0IHllYXIgPSBmdWxsRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0ZGF5OiBkYXksXHJcblx0XHRtb250aDogbW9udGggKyAxLFxyXG5cdFx0eWVhcjogeWVhcixcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgeyBnZXREYXRlIH07XHJcbiIsImltcG9ydCB7IGdlbmVyYXRlVG9wQmFyIH0gZnJvbSAnLi90b3AtYmFyL3RvcC1iYXIuanMnO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVNpZGVCYXIgfSBmcm9tICcuL3NpZGUtYmFyL3NpZGUtYmFyLmpzJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVQcm9qZWN0TW9kYWwgfSBmcm9tICcuL21vZGFscy9wcm9qZWN0LW1vZGFsLmpzJztcclxuaW1wb3J0IHsgUHJvamVjdHNNb2R1bGUgfSBmcm9tICcuLi9Qcm9qZWN0cy9wcm9qZWN0cy5qcyc7XHJcbmltcG9ydCB7IHN2Z3MgfSBmcm9tICcuL3N2Z3Mvc3Zncy5qcyc7XHJcbmltcG9ydCB7IGdldERhdGUgfSBmcm9tICcuLi9kYXRlL2RhdGUuanMnO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVRhc2tNb2RhbCB9IGZyb20gJy4vbW9kYWxzL3Rhc2stbW9kYWwuanMnO1xyXG5cclxuY29uc3QgVUkgPSAoZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1jb250YWluZXInKTtcclxuXHRjb25zdCB0b3BCYXIgPSBnZW5lcmF0ZVRvcEJhcigpO1xyXG5cdGNvbnN0IHNpZGVCYXIgPSBnZW5lcmF0ZVNpZGVCYXIoKTtcclxuXHRjb25zdCBwcm9qZWN0TW9kYWwgPSBnZW5lcmF0ZVByb2plY3RNb2RhbCgpO1xyXG5cclxuXHRmdW5jdGlvbiBpbml0KCkge1xyXG5cdFx0cGFnZS5hcHBlbmRDaGlsZCh0b3BCYXIpO1xyXG5cdFx0cGFnZS5hcHBlbmRDaGlsZChzaWRlQmFyWzFdKTtcclxuXHRcdHBhZ2UuYXBwZW5kQ2hpbGQoc2lkZUJhclswXSk7XHJcblx0XHRhZGRFdmVudHMoKTtcclxuXHRcdGNoYW5nZVBhZ2VNb2R1bGUuaW5pdCgpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYWRkRXZlbnRzKCkge1xyXG5cdFx0YWRkTWVudUV2ZW50KCk7XHJcblx0XHRhZGRUb2dnbGVUaGVtZUV2ZW50KCk7XHJcblx0XHRtb2RhbFByb2plY3RFdmVudHMoKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFkZE1lbnVFdmVudCgpIHtcclxuXHRcdGNvbnN0IGJ1Z2VyTWVudSA9IHRvcEJhci5xdWVyeVNlbGVjdG9yKCcjYnVyZ2VyTWVudScpO1xyXG5cdFx0YnVnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkNsb3NlU2lkZUJhcik7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb3BlbkNsb3NlU2hhZG93KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9wZW5DbG9zZVNpZGVCYXIoKSB7XHJcblx0XHRjb25zdCBzaWRlQmFyQ29udGFpbmVyID0gc2lkZUJhclswXTtcclxuXHRcdGlmIChpc09wZW4oc2lkZUJhckNvbnRhaW5lcikpIHtcclxuXHRcdFx0c2lkZUJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xyXG5cdFx0XHRzaWRlQmFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0b3BlbkNsb3NlU2hhZG93KGZhbHNlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNpZGVCYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG5cdFx0XHRzaWRlQmFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlJyk7XHJcblx0XHRcdG9wZW5DbG9zZVNoYWRvdyh0cnVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGlzT3BlbihlbGVtZW50KSB7XHJcblx0XHRyZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9wZW5DbG9zZVNoYWRvdyhzdGF0dXMpIHtcclxuXHRcdGNvbnN0IHNpZGVCYXJTaGFkb3cgPSBzaWRlQmFyWzFdO1xyXG5cdFx0Y29uc3Qgc2lkZUJhckNvbnRhaW5lciA9IHNpZGVCYXJbMF07XHJcblxyXG5cdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgODAwIHx8IHN0YXR1cyA9PT0gZmFsc2UpIHtcclxuXHRcdFx0c2lkZUJhclNoYWRvdy5zdHlsZS53aWR0aCA9ICcwJztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoXHJcblx0XHRcdHdpbmRvdy5pbm5lcldpZHRoID49IDgwMCAmJlxyXG5cdFx0XHQoaXNPcGVuKHNpZGVCYXJDb250YWluZXIpIHx8IHN0YXR1cyA9PT0gdHJ1ZSlcclxuXHRcdCkge1xyXG5cdFx0XHRzaWRlQmFyU2hhZG93LnN0eWxlLndpZHRoID0gJ3ZhcigtLXNpZGUtYmFyLXdpZHRoKSc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhZGRUb2dnbGVUaGVtZUV2ZW50KCkge1xyXG5cdFx0Y29uc3QgdG9nZ2xlQnRuID0gdG9wQmFyLnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtdGhlbWUnKTtcclxuXHRcdHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVRoZW1lKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNoYW5nZVRoZW1lKCkge1xyXG5cdFx0bGV0IHRoZW1lID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cdFx0aWYgKGlzVGhlbWUoJ2RhcmsnKSkge1xyXG5cdFx0XHR0aGVtZS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XHJcblx0XHRcdG1vdmVUb2dnbGUoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoZW1lLmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcclxuXHRcdFx0bW92ZVRvZ2dsZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaXNUaGVtZSh0aGVtZSkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhlbWUpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gbW92ZVRvZ2dsZSgpIHtcclxuXHRcdGNvbnN0IGNpcmNsZSA9IHRvcEJhci5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlLWNpcmNsZScpO1xyXG5cdFx0aWYgKGlzVGhlbWUoJ2RhcmsnKSkge1xyXG5cdFx0XHRjaXJjbGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTI2LjVweCknO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y2lyY2xlLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG1vZGFsUHJvamVjdEV2ZW50cygpIHtcclxuXHRcdGNvbnN0IHBsdXMgPSBzaWRlQmFyWzBdLnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW1vZGFsJyk7XHJcblx0XHRjb25zdCBjYW5jZWxCdG4gPSBwcm9qZWN0TW9kYWwucXVlcnlTZWxlY3RvcignI2Nsb3NlLXByb2plY3QtbW9kYWwnKTtcclxuXHRcdGNvbnN0IGFkZEJ0biA9IHByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKTtcclxuXHJcblx0XHRwbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblByb2plY3RNb2RhbCk7XHJcblx0XHRjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVByb2plY3RNb2RhbCk7XHJcblx0XHRhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9wZW5Qcm9qZWN0TW9kYWwoKSB7XHJcblx0XHRwYWdlLmFwcGVuZENoaWxkKHByb2plY3RNb2RhbCk7XHJcblx0XHRwcm9qZWN0TW9kYWwucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb2N1cygpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2xvc2VQcm9qZWN0TW9kYWwoKSB7XHJcblx0XHRwYWdlLnJlbW92ZUNoaWxkKHByb2plY3RNb2RhbCk7XHJcblx0XHRwcm9qZWN0TW9kYWwucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9ICcnO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2hhbmdlUGFnZU1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBQYWdlcyA9IFtdO1xyXG5cdFx0Y29uc3Qgc2lkZUJhckNvbnRhaW5lciA9IHNpZGVCYXJbMF07XHJcblx0XHRsZXQgY3VycmVudFBhZ2UgPSBudWxsO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGNyZWF0ZVBhZ2UobmFtZSkge1xyXG5cdFx0XHRjb25zdCBwYWdlID0gY3JlYXRlTWFpblBhZ2UobmFtZSk7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bmFtZTogbmFtZSxcclxuXHRcdFx0XHRwYWdlOiBwYWdlLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGNyZWF0ZU1haW5QYWdlKHRpdGxlKSB7XHJcblx0XHRcdGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcblx0XHRcdG1haW4uaWQgPSB0aXRsZTtcclxuXHJcblx0XHRcdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcblxyXG5cdFx0XHRjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRoZWFkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcclxuXHRcdFx0aGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcblx0XHRcdGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xyXG5cclxuXHRcdFx0Y29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0dGFza3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFza3MnKTtcclxuXHJcblx0XHRcdG1haW5Db250ZW50LmFwcGVuZENoaWxkKHRhc2tzQ29udGFpbmVyKTtcclxuXHRcdFx0aGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcclxuXHRcdFx0bWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cdFx0XHRtYWluLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcclxuXHJcblx0XHRcdHJldHVybiBtYWluO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGNyZWF0ZURlZmFsdXRQYWdlcygpIHtcclxuXHRcdFx0Y29uc3QgaW5ib3hQYWdlID0gY3JlYXRlUGFnZSgnSW5ib3gnKTtcclxuXHRcdFx0Y29uc3QgdG9kYXlQYWdlID0gY3JlYXRlUGFnZSgnVG9kYXknKTtcclxuXHRcdFx0Y29uc3Qgd2Vla1BhZ2UgPSBjcmVhdGVQYWdlKCdXZWVrJyk7XHJcblxyXG5cdFx0XHRQYWdlcy5wdXNoKGluYm94UGFnZSk7XHJcblx0XHRcdFBhZ2VzLnB1c2godG9kYXlQYWdlKTtcclxuXHRcdFx0UGFnZXMucHVzaCh3ZWVrUGFnZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gYWRkRGVmYWx1dFByb2plY3RzRXZlbnRzKCkge1xyXG5cdFx0XHRjb25zdCBpbmJveCA9IHNpZGVCYXJDb250YWluZXIucXVlcnlTZWxlY3RvcignI2luYm94Jyk7XHJcblx0XHRcdGNvbnN0IHRvZGF5UHJvamVjdHMgPSBzaWRlQmFyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpO1xyXG5cdFx0XHRjb25zdCB3ZWVrUHJvamVjdHMgPSBzaWRlQmFyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyN3ZWVrJyk7XHJcblxyXG5cdFx0XHRpbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0XHRvcGVuRGVmYWx1dFBhZ2UoJ0luYm94JywgZ2V0QWxsVGFza3MpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dG9kYXlQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0XHRvcGVuRGVmYWx1dFBhZ2UoJ1RvZGF5JywgZ2V0VG9kYXlUYXNrcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR3ZWVrUHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0b3BlbkRlZmFsdXRQYWdlKCdXZWVrJywgZ2V0V2Vla1Rhc2tzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gb3BlbkRlZmFsdXRQYWdlKHBhZ2VOYW1lLCBmdW4pIHtcclxuXHRcdFx0Y29uc3QgZGVmYXVsdFBhZ2UgPSBmaW5kUGFnZShwYWdlTmFtZSk7XHJcblx0XHRcdGFwcGVuZFRhc2tzKGZ1biwgZGVmYXVsdFBhZ2UpO1xyXG5cdFx0XHRvcGVuUGFnZShwYWdlTmFtZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gY2xvc2VDdXJyZW50cGFnZSgpIHtcclxuXHRcdFx0aWYgKCFjdXJyZW50UGFnZSkgcmV0dXJuO1xyXG5cdFx0XHRwYWdlLnJlbW92ZUNoaWxkKGN1cnJlbnRQYWdlKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBmaW5kSW5kZXgobmFtZSkge1xyXG5cdFx0XHRyZXR1cm4gUGFnZXMuZmluZEluZGV4KChwYWdlKSA9PiBwYWdlLm5hbWUgPT09IG5hbWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGZpbmRQYWdlKG5hbWUpIHtcclxuXHRcdFx0Y29uc3QgaW5kZXggPSBmaW5kSW5kZXgobmFtZSk7XHJcblx0XHRcdHJldHVybiBQYWdlc1tpbmRleF0ucGFnZTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBhcHBlbmRUYXNrcyhmdW4sIGVsZW1lbnQpIHtcclxuXHRcdFx0Y29uc3QgdGFza3NDb250YWllciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XHJcblx0XHRcdHRhc2tzQ29udGFpZXIuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdGNvbnN0IHRhc2tzID0gZnVuKCk7XHJcblx0XHRcdHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuXHRcdFx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGVUYXNrKHRhc2spO1xyXG5cdFx0XHRcdHRhc2tzQ29udGFpZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0QWxsVGFza3MoKSB7XHJcblx0XHRcdGNvbnN0IHRhc2tzID0gUHJvamVjdHNNb2R1bGUuZ2V0QWxsVGFza3MoKTtcclxuXHRcdFx0cmV0dXJuIHRhc2tzO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldFRvZGF5VGFza3MoKSB7XHJcblx0XHRcdGNvbnN0IHRhc2tzID0gZ2V0QWxsVGFza3MoKTtcclxuXHRcdFx0Y29uc3QgdG9kYXlUYXNrcyA9IHRhc2tzLmZpbHRlcigoeyBhZGREYXRlIH0pID0+IHtcclxuXHRcdFx0XHRjb25zdCBhY3R1YWxEYXRlID0gZ2V0RGF0ZSgpO1xyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRhY3R1YWxEYXRlLnllYXIgPT09IGFkZERhdGUueWVhciAmJlxyXG5cdFx0XHRcdFx0YWN0dWFsRGF0ZS5tb250aCA9PT0gYWRkRGF0ZS5tb250aCAmJlxyXG5cdFx0XHRcdFx0YWN0dWFsRGF0ZS5kYXkgPT09IGFkZERhdGUuZGF5XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdG9kYXlUYXNrcztcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBnZXRXZWVrVGFza3MoKSB7XHJcblx0XHRcdGNvbnN0IHRhc2tzID0gZ2V0QWxsVGFza3MoKTtcclxuXHRcdFx0Y29uc3Qgd2Vla1Rhc2tzID0gdGFza3MuZmlsdGVyKCh7IGFkZERhdGUgfSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGFjdHVhbERhdGUgPSBnZXREYXRlKCk7XHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdGFjdHVhbERhdGUueWVhciA9PT0gYWRkRGF0ZS55ZWFyICYmXHJcblx0XHRcdFx0XHRhY3R1YWxEYXRlLm1vbnRoID09PSBhZGREYXRlLm1vbnRoICYmXHJcblx0XHRcdFx0XHRhY3R1YWxEYXRlLmRheSA8PSBhZGREYXRlLmRheSArIDdcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB3ZWVrVGFza3M7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrKSB7XHJcblx0XHRcdGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0dGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcblxyXG5cdFx0XHRjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblx0XHRcdGNpcmNsZS5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcclxuXHJcblx0XHRcdGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdFx0XHR0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XHJcblx0XHRcdHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcclxuXHJcblx0XHRcdGNvbnN0IHJlbW92ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblx0XHRcdHJlbW92ZUljb24uaW5uZXJIVE1MID0gc3Zncy5jbG9zZTtcclxuXHRcdFx0cmVtb3ZlSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcblxyXG5cdFx0XHRjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRcdFx0ZWRpdEljb24uaW5uZXJIVE1MID0gc3Zncy5wZW47XHJcblx0XHRcdGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuXHJcblx0XHRcdHJlbW92ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0cmVtb3ZlVGFzayh0YXNrKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0XHRlZGl0VGFzayh0YXNrKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpcmNsZSk7XHJcblx0XHRcdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xyXG5cdFx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcclxuXHRcdFx0dGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVJY29uKTtcclxuXHJcblx0XHRcdHJldHVybiB0YXNrQ29udGFpbmVyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFzaykge1xyXG5cdFx0XHRjb25zdCBwcm9qZWN0ID0gUHJvamVjdHNNb2R1bGUuZ2V0UHJvamVjdCh0YXNrLnByb2plY3QpO1xyXG5cdFx0XHRjb25zdCB0YXNrcyA9IHByb2plY3QuZ2V0VGFza3MoKTtcclxuXHRcdFx0Y29uc3QgdGFza0luZGV4ID0gcHJvamVjdC5maW5kVGFza0luZGV4KHRhc2sudGl0bGUpO1xyXG5cclxuXHRcdFx0dGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XHJcblxyXG5cdFx0XHRjb25zdCBwYWdlRGF0YSA9IGdldFBhZ2UodGFzayk7XHJcblxyXG5cdFx0XHR1cGRhdGVEZWZhdWx0UGFnZXMoKTtcclxuXHRcdFx0dXBkYXRlUGFnZShwYWdlRGF0YSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0UGFnZSh0YXNrKSB7XHJcblx0XHRcdHJldHVybiBQYWdlcy5maW5kKChwYWdlKSA9PiBwYWdlLm5hbWUgPT09IHRhc2sucHJvamVjdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZWRpdFRhc2sodGFzaykge1xyXG5cdFx0XHRjb25zdCBtb2RhbCA9IGdlbmVyYXRlVGFza01vZGFsKCk7XHJcblx0XHRcdGNvbnN0IHRpdGxlID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsLWhlYWRlcicpO1xyXG5cdFx0XHRjb25zdCBzYXZlQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2FkZFRhc2snKTtcclxuXHRcdFx0Y29uc3QgY2FuY2VsQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2Nsb3NlTW9kYWwnKTtcclxuXHJcblx0XHRcdHRpdGxlLnRleHRDb250ZW50ID0gJ0VkaXRpbmcnO1xyXG5cdFx0XHRzYXZlQnRuLnRleHRDb250ZW50ID0gJ3NhdmUnO1xyXG5cclxuXHRcdFx0ZmlsbElucHV0cyh0YXNrLCBtb2RhbCk7XHJcblxyXG5cdFx0XHRzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdHVwZGF0ZVRhc2sodGFzaywgbW9kYWwpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdGNsb3NlTW9kYWwobW9kYWwpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHBhZ2UuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG5cdFx0XHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS5mb2N1cygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldElucHV0c1ZhbHVlcyhtb2RhbCkge1xyXG5cdFx0XHRjb25zdCB0aXRsZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xyXG5cdFx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xyXG5cdFx0XHRjb25zdCBkdWVEYXRlID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcclxuXHRcdFx0Y29uc3QgcHJpb3JpdHkgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dGl0bGU6IHRpdGxlLnZhbHVlLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbi52YWx1ZSxcclxuXHRcdFx0XHRkdWVEYXRlOiBkdWVEYXRlLnZhbHVlLFxyXG5cdFx0XHRcdHByaW9yaXR5OiBwcmlvcml0eS52YWx1ZSxcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBmaWxsSW5wdXRzKHRhc2ssIG1vZGFsKSB7XHJcblx0XHRcdGNvbnN0IHRpdGxlID0gbW9kYWwucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XHJcblx0XHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XHJcblx0XHRcdGNvbnN0IGR1ZURhdGUgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpO1xyXG5cdFx0XHRjb25zdCBwcmlvcml0eSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xyXG5cclxuXHRcdFx0dGl0bGUudmFsdWUgPSB0YXNrLnRpdGxlO1xyXG5cdFx0XHRkZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XHJcblx0XHRcdGR1ZURhdGUudmFsdWUgPSB0YXNrLmR1ZURhdGU7XHJcblx0XHRcdHByaW9yaXR5LnZhbHVlID0gdGFzay5wcmlvcml0eTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiB1cGRhdGVUYXNrKHRhc2ssIG1vZGFsKSB7XHJcblx0XHRcdGNvbnN0IHByb2plY3QgPSBQcm9qZWN0c01vZHVsZS5nZXRQcm9qZWN0KHRhc2sucHJvamVjdCk7XHJcblx0XHRcdGNvbnN0IG5ld0RhdGEgPSBnZXRJbnB1dHNWYWx1ZXMobW9kYWwpO1xyXG5cclxuXHRcdFx0aWYgKHByb2plY3QuZmluZFRhc2sobmV3RGF0YS50aXRsZSkpIHtcclxuXHRcdFx0XHRhbGVydCgnVGFzayBuYW1lIGFscmVhZHkgZXhpc3QuJyk7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHByb2plY3QudXBkYXRlVGFzayh0YXNrLCBuZXdEYXRhKTtcclxuXHRcdFx0Y2xvc2VNb2RhbChtb2RhbCk7XHJcblx0XHRcdHVwZGF0ZURlZmF1bHRQYWdlcygpO1xyXG5cdFx0XHR1cGRhdGVQYWdlKGdldFBhZ2UodGFzaykpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGFjdGl2ZSgpIHtcclxuXHRcdFx0Y29uc3QgdHJpZ2dlcnMgPSBzaWRlQmFyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHRpb24nKTtcclxuXHRcdFx0Y29uc3QgY3VycmVudFBhZ2VJZCA9IGN1cnJlbnRQYWdlLmlkO1xyXG5cclxuXHRcdFx0dHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xyXG5cdFx0XHRcdGlmICh0cmlnZ2VyLmlkLnRvTG93ZXJDYXNlKCkgPT09IGN1cnJlbnRQYWdlSWQudG9Mb3dlckNhc2UoKSkge1xyXG5cdFx0XHRcdFx0dHJpZ2dlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dHJpZ2dlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGFwcGVuZFByb2plY3QocHJvamVjdCkge1xyXG5cdFx0XHRjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IHNpZGVCYXJDb250YWluZXIucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcblx0XHRcdHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3QocHJvamVjdCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdCkge1xyXG5cdFx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0Y29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ29wdGlvbicpO1xyXG5cdFx0XHRjb250YWluZXIuaWQgPSBwcm9qZWN0Lm5hbWU7XHJcblxyXG5cdFx0XHRjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRcdFx0cHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xyXG5cdFx0XHRwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuXHJcblx0XHRcdGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRcdFx0cmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuXHRcdFx0cmVtb3ZlLmlubmVySFRNTCA9IHN2Z3MuY2xvc2U7XHJcblx0XHRcdHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0XHRyZW1vdmVQcm9qZWN0KGNvbnRhaW5lcik7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuXHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZSk7XHJcblxyXG5cdFx0XHRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChlLnRhcmdldCA9PT0gY29udGFpbmVyIHx8IGUudGFyZ2V0ID09PSBwcm9qZWN0TmFtZSkge1xyXG5cdFx0XHRcdFx0b3BlblBhZ2UoY29udGFpbmVyLmlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y3JlYXRlTmV3UGFnZShwcm9qZWN0KTtcclxuXHRcdFx0cmV0dXJuIGNvbnRhaW5lcjtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGNvbnRhaW5lcikge1xyXG5cdFx0XHRjb25zdCBwcm9qZWN0cyA9IHNpZGVCYXJDb250YWluZXIucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcblx0XHRcdGNvbnN0IHBhZ2VJbmRleCA9IGZpbmRJbmRleChjb250YWluZXIuaWQpO1xyXG5cclxuXHRcdFx0cHJvamVjdHMucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcclxuXHRcdFx0UHJvamVjdHNNb2R1bGUucmVtb3ZlUHJvamVjdChjb250YWluZXIuaWQpO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSBmaW5kUGFnZShjb250YWluZXIuaWQpKSB7XHJcblx0XHRcdFx0b3BlbkRlZmFsdXRQYWdlKCdJbmJveCcsIGdldEFsbFRhc2tzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZW1vdmVQcm9qZWN0UGFnZShwYWdlSW5kZXgpO1xyXG5cdFx0XHR1cGRhdGVEZWZhdWx0UGFnZXMoKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiB1cGRhdGVEZWZhdWx0UGFnZXMoKSB7XHJcblx0XHRcdFBhZ2VzLmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG5cdFx0XHRcdGlmIChvYmplY3QubmFtZSA9PT0gJ0luYm94Jykge1xyXG5cdFx0XHRcdFx0YXBwZW5kVGFza3MoZ2V0QWxsVGFza3MsIG9iamVjdC5wYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKG9iamVjdC5uYW1lID09PSAnVG9kYXknKSB7XHJcblx0XHRcdFx0XHRhcHBlbmRUYXNrcyhnZXRUb2RheVRhc2tzLCBvYmplY3QucGFnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChvYmplY3QubmFtZSA9PT0gJ1dlZWsnKSB7XHJcblx0XHRcdFx0XHRhcHBlbmRUYXNrcyhnZXRXZWVrVGFza3MsIG9iamVjdC5wYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHJlbW92ZVByb2plY3RQYWdlKGluZGV4KSB7XHJcblx0XHRcdFBhZ2VzLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gYWRkQWxsUHJvamVjdHMoKSB7XHJcblx0XHRcdGNvbnN0IHByb2plY3RzID0gUHJvamVjdHNNb2R1bGUuZ2V0QWxsUHJvamVjdHMoKTtcclxuXHRcdFx0Y29uc3QgcHJvamVjdHNDb250YWluZXIgPSBzaWRlQmFyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xyXG5cdFx0XHRwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcblx0XHRcdFx0cHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdChwcm9qZWN0KSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGNyZWF0ZU5ld1BhZ2UocHJvamVjdCkge1xyXG5cdFx0XHRjb25zdCBuZXdQYWdlID0gY3JlYXRlUGFnZShwcm9qZWN0Lm5hbWUpO1xyXG5cdFx0XHRjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1hZGQnKTtcclxuXHRcdFx0Y29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRcdFx0aWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcblx0XHRcdGljb24uaW5uZXJIVE1MID0gc3Zncy5wbHVzO1xyXG5cdFx0XHRjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdFx0XHRzcGFuLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcclxuXHJcblx0XHRcdGJ0bi5hcHBlbmRDaGlsZChpY29uKTtcclxuXHRcdFx0YnRuLmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdG9wZW5UYXNrTW9kYWwobmV3UGFnZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRuZXdQYWdlLnBhZ2UuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHJcblx0XHRcdGlmIChQcm9qZWN0c01vZHVsZS5maW5kUHJvamVjdChwcm9qZWN0Lm5hbWUpKSB7XHJcblx0XHRcdFx0Y29uc3QgdGFza3MgPSBnZXRQcm9qZWN0VGFza3MocHJvamVjdC5uYW1lKTtcclxuXHRcdFx0XHRjb25zdCB0YXNrc1BsYWNlID0gbmV3UGFnZS5wYWdlLnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xyXG5cclxuXHRcdFx0XHR0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgdGFza0NvbnRhaW5lciA9IGNyZWF0ZVRhc2sodGFzayk7XHJcblx0XHRcdFx0XHR0YXNrc1BsYWNlLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdFBhZ2VzLnB1c2gobmV3UGFnZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0UHJvamVjdFRhc2tzKHByb2plY3ROYW1lKSB7XHJcblx0XHRcdGNvbnN0IHByb2plY3QgPSBQcm9qZWN0c01vZHVsZS5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuXHRcdFx0Y29uc3QgdGFza3MgPSBwcm9qZWN0LmdldFRhc2tzKCk7XHJcblx0XHRcdHJldHVybiB0YXNrcztcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBvcGVuVGFza01vZGFsKHBhZ2VEYXRhKSB7XHJcblx0XHRcdGNvbnN0IG1vZGFsID0gZ2VuZXJhdGVUYXNrTW9kYWwoKTtcclxuXHRcdFx0YWRkRXZlbnRzVGFza01vZGFsKG1vZGFsLCBwYWdlRGF0YSk7XHJcblx0XHRcdHBhZ2UuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG5cdFx0XHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS5mb2N1cygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGFkZEV2ZW50c1Rhc2tNb2RhbChtb2RhbCwgcGFnZURhdGEpIHtcclxuXHRcdFx0Y29uc3QgYWRkQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2FkZFRhc2snKTtcclxuXHRcdFx0Y29uc3QgY2FuY2VsQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2Nsb3NlTW9kYWwnKTtcclxuXHRcdFx0Y29uc3QgaW5wdXRzID0gbW9kYWwucXVlcnlTZWxlY3RvcignLmlucHV0LWNvbnRhaW5lcicpO1xyXG5cclxuXHRcdFx0YWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdGFkZFRhc2soaW5wdXRzLCBwYWdlRGF0YSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0Y2xvc2VNb2RhbChtb2RhbCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGFkZFRhc2soaW5wdXRzLCBwYWdlRGF0YSkge1xyXG5cdFx0XHRjb25zdCB0aXRsZSA9IGlucHV0cy5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcclxuXHRcdFx0Y29uc3QgZGVzY3JpcHRpb24gPSBpbnB1dHMucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XHJcblx0XHRcdGNvbnN0IGRhdGUgPSBpbnB1dHMucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcclxuXHRcdFx0Y29uc3QgcHJpb3JpdHkgPSBpbnB1dHMucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XHJcblx0XHRcdGNvbnN0IHByb2plY3QgPSBQcm9qZWN0c01vZHVsZS5nZXRQcm9qZWN0KHBhZ2VEYXRhLm5hbWUpO1xyXG5cclxuXHRcdFx0aWYgKCF0aXRsZS52YWx1ZSkge1xyXG5cdFx0XHRcdGFsZXJ0KCdUaGUgdGFzayBtdXN0IGhhdmUgYXQgbGVhc3QgYSB0aXRsZScpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHByb2plY3QuZmluZFRhc2sodGl0bGUudmFsdWUpKSB7XHJcblx0XHRcdFx0YWxlcnQoJ1RoZSB0YXNrIHRpdGxlIGFscmVhZHkgZXhpc3QnKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHByb2plY3QuYWRkVGFzayhcclxuXHRcdFx0XHR0aXRsZS52YWx1ZSxcclxuXHRcdFx0XHRkZXNjcmlwdGlvbi52YWx1ZSxcclxuXHRcdFx0XHRkYXRlLnZhbHVlLFxyXG5cdFx0XHRcdHByaW9yaXR5LnZhbHVlXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRjbGVhcklucHV0cyhbdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlXSk7XHJcblx0XHRcdHByaW9yaXR5LnZhbHVlID0gJ3AxJztcclxuXHRcdFx0dXBkYXRlUGFnZShwYWdlRGF0YSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gY2xlYXJJbnB1dHMoaW5wdXRzKSB7XHJcblx0XHRcdGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gKGlucHV0LnZhbHVlID0gJycpKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XHJcblx0XHRcdHBhZ2UucmVtb3ZlQ2hpbGQobW9kYWwpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHVwZGF0ZVBhZ2UocGFnZURhdGEpIHtcclxuXHRcdFx0Y29uc3QgdGFza0NvbnRhaW5lciA9IHBhZ2VEYXRhLnBhZ2UucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XHJcblx0XHRcdGNvbnN0IHRhc2tzID0gUHJvamVjdHNNb2R1bGUuZ2V0UHJvamVjdChwYWdlRGF0YS5uYW1lKS5nZXRUYXNrcygpO1xyXG5cclxuXHRcdFx0dGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuXHJcblx0XHRcdHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuXHRcdFx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2sodGFzaykpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBvcGVuUGFnZShwYWdlTmFtZSkge1xyXG5cdFx0XHRjb25zdCBwcm9qZWN0UGFnZSA9IGZpbmRQYWdlKHBhZ2VOYW1lKTtcclxuXHRcdFx0Y2xvc2VDdXJyZW50cGFnZSgpO1xyXG5cdFx0XHRjdXJyZW50UGFnZSA9IHByb2plY3RQYWdlO1xyXG5cdFx0XHRwYWdlLmFwcGVuZENoaWxkKHByb2plY3RQYWdlKTtcclxuXHRcdFx0YWN0aXZlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gaW5pdCgpIHtcclxuXHRcdFx0Y3JlYXRlRGVmYWx1dFBhZ2VzKCk7XHJcblx0XHRcdGFkZERlZmFsdXRQcm9qZWN0c0V2ZW50cygpO1xyXG5cdFx0XHRvcGVuRGVmYWx1dFBhZ2UoJ0luYm94JywgZ2V0QWxsVGFza3MpO1xyXG5cdFx0XHRhZGRBbGxQcm9qZWN0cygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGluaXQsXHJcblx0XHRcdGFwcGVuZFByb2plY3QsXHJcblx0XHR9O1xyXG5cdH0pKCk7XHJcblxyXG5cdGZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcblx0XHRsZXQgbmFtZSA9IHByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlO1xyXG5cdFx0aWYgKCFuYW1lKSByZXR1cm47XHJcblx0XHRpZiAoUHJvamVjdHNNb2R1bGUuZmluZFByb2plY3QobmFtZSkpIHtcclxuXHRcdFx0YWxlcnQoJ1Byb2plY3QgbmFtZSBhbHJlYWR5IGV4aXN0LicpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0UHJvamVjdHNNb2R1bGUuYWRkUHJvamVjdChuYW1lKTtcclxuXHRcdGNoYW5nZVBhZ2VNb2R1bGUuYXBwZW5kUHJvamVjdChQcm9qZWN0c01vZHVsZS5nZXRQcm9qZWN0KG5hbWUpKTtcclxuXHRcdGNsb3NlUHJvamVjdE1vZGFsKCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0aW5pdCxcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgVUkgfTtcclxuIiwiaW1wb3J0ICcuLi8uLi9zdHlsZS9tb2RhbC5jc3MnO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVNb2RhbCgpIHtcclxuXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGFpbmVyJyk7XHJcblxyXG5cdGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0bW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuXHJcblx0Y29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRtb2RhbEhlYWRlci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1oZWFkZXInKTtcclxuXHJcblx0Y29uc3QgY29udGVudE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Y29udGVudE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtbW9kYWwnKTtcclxuXHJcblx0Y29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcclxuXHJcblx0Y29uc3QgYnRuc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGJ0bnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRucy1jb250YWluZXInKTtcclxuXHJcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcclxuXHRtb2RhbC5hcHBlbmRDaGlsZChtb2RhbEhlYWRlcik7XHJcblx0bW9kYWwuYXBwZW5kQ2hpbGQoY29udGVudE1vZGFsKTtcclxuXHRjb250ZW50TW9kYWwuYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpO1xyXG5cdGNvbnRlbnRNb2RhbC5hcHBlbmRDaGlsZChidG5zQ29udGFpbmVyKTtcclxuXHJcblx0cmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVNb2RhbCB9O1xyXG4iLCJpbXBvcnQgeyBnZW5lcmF0ZU1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGUvbW9kYWwuY3NzJztcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdE1vZGFsKCkge1xyXG5cdGNvbnN0IG1vZGFsID0gZ2VuZXJhdGVNb2RhbCgpO1xyXG5cdGNvbnN0IGlucHV0cyA9IGNyZWF0ZUlucHV0cygpO1xyXG5cdGNvbnN0IGJ0bnMgPSBjcmVhdGVCdG5zKCk7XHJcblxyXG5cdG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1oZWFkZXInKS50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XHJcblx0bW9kYWwucXVlcnlTZWxlY3RvcignLmlucHV0LWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGlucHV0cyk7XHJcblx0YnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuXHRcdG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5idG5zLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGJ0bik7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiBtb2RhbDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSW5wdXRzKCkge1xyXG5cdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmaWVsZCcpO1xyXG5cclxuXHRjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcblx0bGFiZWwuaHRtbEZvciA9ICcjbmFtZSc7XHJcblx0bGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZSc7XHJcblxyXG5cdGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHRpbnB1dC5pZCA9ICduYW1lJztcclxuXHJcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cclxuXHRyZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCdG5zKCkge1xyXG5cdGxldCBidG5zID0gW107XHJcblxyXG5cdGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdGNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG5cdGNhbmNlbC5pZCA9ICdjbG9zZS1wcm9qZWN0LW1vZGFsJztcclxuXHJcblx0Y29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0YWRkLnRleHRDb250ZW50ID0gJ0FkZCc7XHJcblx0YWRkLmlkID0gJ2FkZC1wcm9qZWN0JztcclxuXHRhZGQuY2xhc3NMaXN0LmFkZCgnYmx1ZScpO1xyXG5cclxuXHRidG5zLnB1c2goY2FuY2VsKTtcclxuXHRidG5zLnB1c2goYWRkKTtcclxuXHJcblx0cmV0dXJuIGJ0bnM7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdlbmVyYXRlUHJvamVjdE1vZGFsIH07XHJcbiIsImltcG9ydCB7IGdlbmVyYXRlTW9kYWwgfSBmcm9tICcuL21vZGFsLmpzJztcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGFza01vZGFsKCkge1xyXG5cdGNvbnN0IG1vZGFsID0gZ2VuZXJhdGVNb2RhbCgpO1xyXG5cdGNvbnN0IGhlYWRlciA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1oZWFkZXInKTtcclxuXHRjb25zdCBpbnB1dHNDb250YWluZXIgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtY29udGFpbmVyJyk7XHJcblx0Y29uc3QgaW5wdXRzRGF0YSA9IFtcclxuXHRcdHtcclxuXHRcdFx0dHlwZTogJ3RleHQnLFxyXG5cdFx0XHRpZDogJ3RpdGxlJyxcclxuXHRcdFx0dGl0bGU6ICdUaXRsZScsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR0eXBlOiAndGV4dCcsXHJcblx0XHRcdGlkOiAnZGVzY3JpcHRpb24nLFxyXG5cdFx0XHR0aXRsZTogJ0Rlc2NyaXB0aW9uJyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHR5cGU6ICdkYXRlJyxcclxuXHRcdFx0aWQ6ICdkdWVEYXRlJyxcclxuXHRcdFx0dGl0bGU6ICdkdWVEYXRlJyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHR5cGU6ICdzZWxlY3QnLFxyXG5cdFx0XHRpZDogJ3ByaW9yaXR5JyxcclxuXHRcdFx0dGl0bGU6ICdwcmlvcml0eScsXHJcblx0XHRcdG9wdGlvbnM6IFsncDEnLCAncDInLCAncDMnXSxcclxuXHRcdH0sXHJcblx0XTtcclxuXHJcblx0Y29uc3QgaW5wdXRzSFRNTCA9IFtcclxuXHRcdGNyZWF0ZUlucHV0KGlucHV0c0RhdGFbMF0pLFxyXG5cdFx0Y3JlYXRlSW5wdXQoaW5wdXRzRGF0YVsxXSksXHJcblx0XHRjcmVhdGVJbnB1dChpbnB1dHNEYXRhWzJdKSxcclxuXHRcdGNyZWF0ZVNlbGVjdElucHV0KGlucHV0c0RhdGFbM10pLFxyXG5cdF07XHJcblxyXG5cdGhlYWRlci50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XHJcblxyXG5cdGNvbnN0IGFkZEJ0biA9IGNyZWF0ZUFkZEJ0bigpO1xyXG5cdGNvbnN0IGNhbmNlbEJ0biA9IGNyZWF0ZUNhbmNlbEJ0bigpO1xyXG5cclxuXHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcuYnRucy1jb250YWluZXInKS5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xyXG5cdG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5idG5zLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGFkZEJ0bik7XHJcblxyXG5cdGlucHV0c0hUTUwuZm9yRWFjaCgoaW5wdXQpID0+IGlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCkpO1xyXG5cclxuXHRyZXR1cm4gbW9kYWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJhc2ljSW5wdXRGaWVsZChvYmopIHtcclxuXHRjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkJyk7XHJcblxyXG5cdGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuXHRsYWJlbC50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcclxuXHRsYWJlbC5odG1sRm9yID0gb2JqLmlkO1xyXG5cclxuXHRmaWVsZC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG5cdHJldHVybiBmaWVsZDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSW5wdXQob2JqKSB7XHJcblx0Y29uc3QgYmFzaWNJbnB1dCA9IGNyZWF0ZUJhc2ljSW5wdXRGaWVsZChvYmopO1xyXG5cclxuXHRjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0aW5wdXQudHlwZSA9IG9iai50eXBlO1xyXG5cdGlucHV0LmlkID0gb2JqLmlkO1xyXG5cclxuXHRiYXNpY0lucHV0LmFwcGVuZENoaWxkKGlucHV0KTtcclxuXHJcblx0cmV0dXJuIGJhc2ljSW5wdXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdElucHV0KG9iaikge1xyXG5cdGNvbnN0IGJhc2ljSW5wdXQgPSBjcmVhdGVCYXNpY0lucHV0RmllbGQob2JqKTtcclxuXHRjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuXHRzZWxlY3QuaWQgPSBvYmouaWQ7XHJcblxyXG5cdG9iai5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcblx0XHRjb250YWluZXIudGV4dENvbnRlbnQgPSBvcHRpb247XHJcblx0XHRzZWxlY3QuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHR9KTtcclxuXHJcblx0YmFzaWNJbnB1dC5hcHBlbmRDaGlsZChzZWxlY3QpO1xyXG5cclxuXHRyZXR1cm4gYmFzaWNJbnB1dDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWRkQnRuKCkge1xyXG5cdGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdGJ0bi5jbGFzc0xpc3QuYWRkKCdibHVlJyk7XHJcblx0YnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XHJcblx0YnRuLmlkID0gJ2FkZFRhc2snO1xyXG5cclxuXHRyZXR1cm4gYnRuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYW5jZWxCdG4oKSB7XHJcblx0Y29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0YnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcblx0YnRuLmlkID0gJ2Nsb3NlTW9kYWwnO1xyXG5cclxuXHRyZXR1cm4gYnRuO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZW5lcmF0ZVRhc2tNb2RhbCB9O1xyXG4iLCJpbXBvcnQgeyBzdmdzIH0gZnJvbSAnLi4vc3Zncy9zdmdzLmpzJztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZS9zaWRlLWJhci5jc3MnO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVTaWRlQmFyKCkge1xyXG5cdGNvbnN0IHNpZGVCYXJTaGFkb3cgPSBjcmVhdGVTaWRlU2hhZG93KCk7XHJcblx0Y29uc3Qgc2lkZUJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHNpZGVCYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZS1iYXItY29udGFpbmVyJyk7XHJcblx0c2lkZUJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcblxyXG5cdGNvbnN0IHNpZGVCYXIgPSBjcmVhdGVTaWRlQmFyKCk7XHJcblx0c2lkZUJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlQmFyKTtcclxuXHJcblx0cmV0dXJuIFtzaWRlQmFyQ29udGFpbmVyLCBzaWRlQmFyU2hhZG93XTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2lkZVNoYWRvdygpIHtcclxuXHRjb25zdCBzaGFkb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRzaGFkb3cuY2xhc3NMaXN0LmFkZCgnc2lkZS1iYXItc2hhZG93Jyk7XHJcblxyXG5cdHJldHVybiBzaGFkb3c7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNpZGVCYXIoKSB7XHJcblx0Y29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnc2lkZS1iYXInKTtcclxuXHJcblx0Y29uc3Qgb3B0aW9uc0NvbnRhaW5lciA9IGNyZWF0ZU9wdGlvbnNDb250YWluZXIoKTtcclxuXHRjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGNyZWF0ZVByb2pjdHNDb250YWluZXIoKTtcclxuXHJcblx0c2lkZUJhci5hcHBlbmRDaGlsZChvcHRpb25zQ29udGFpbmVyKTtcclxuXHRzaWRlQmFyLmFwcGVuZENoaWxkKHByb2plY3RzQ29udGFpbmVyKTtcclxuXHJcblx0cmV0dXJuIHNpZGVCYXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnNDb250YWluZXIoKSB7XHJcblx0Y29uc3Qgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdG9wdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3RhbmRhcmQtb3B0aW9ucycpO1xyXG5cclxuXHRsZXQgb3B0aW9ucyA9IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ0luYm94JyxcclxuXHRcdFx0aWNvbjogJ2luYm94JyxcclxuXHRcdFx0aWQ6ICdpbmJveCcsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnVG9kYXknLFxyXG5cdFx0XHRpY29uOiAndG9kYXknLFxyXG5cdFx0XHRpZDogJ3RvZGF5JyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdUaGlzIHdlZWsnLFxyXG5cdFx0XHRpY29uOiAnY2FsZW5kYXInLFxyXG5cdFx0XHRpZDogJ3dlZWsnLFxyXG5cdFx0fSxcclxuXHRdO1xyXG5cclxuXHRvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG5cdFx0Y29uc3Qgb3B0aW9uQ29udGFpbmVyID0gY3JlYXRlT3B0aW9uKG9wdGlvbik7XHJcblx0XHRvcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbkNvbnRhaW5lcik7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiBvcHRpb25zQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPcHRpb24ob3B0aW9uKSB7XHJcblx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Y29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ29wdGlvbicpO1xyXG5cdGNvbnRhaW5lci5pZCA9IG9wdGlvbi5pZDtcclxuXHJcblx0Y29uc3Qgc3Bhbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblx0c3Bhbkljb24uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG5cdHNwYW5JY29uLmlubmVySFRNTCA9IHN2Z3Nbb3B0aW9uLmljb25dO1xyXG5cclxuXHRjb25zdCBzcGFuTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRzcGFuTmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XHJcblx0c3Bhbk5hbWUudGV4dENvbnRlbnQgPSBvcHRpb24ubmFtZTtcclxuXHJcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW5JY29uKTtcclxuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoc3Bhbk5hbWUpO1xyXG5cclxuXHRyZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qY3RzQ29udGFpbmVyKCkge1xyXG5cdGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0cHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtY29udGFpbmVyJyk7XHJcblxyXG5cdGNvbnN0IHByb2plY3RzSGVhZGVyID0gY3JlYXRlUHJvamVjdHNIZWFkZXIoKTtcclxuXHRjb25zdCBwcm9qZWN0cyA9IGNyZWF0ZVByb2plY3RzKCk7XHJcblxyXG5cdHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyKTtcclxuXHRwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XHJcblxyXG5cdHJldHVybiBwcm9qZWN0c0NvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdHNIZWFkZXIoKSB7XHJcblx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWhlYWRlcicpO1xyXG5cdGhlYWRlci50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XHJcblxyXG5cdGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblx0c3Bhbi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcblx0c3Bhbi5pZCA9ICdwcm9qZWN0LW1vZGFsJ1xyXG5cdHNwYW4uaW5uZXJIVE1MID0gc3Zncy5wbHVzO1xyXG5cclxuXHRoZWFkZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG5cdHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzKCkge1xyXG5cdGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0cHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcclxuXHJcblx0cmV0dXJuIHByb2plY3RzO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZW5lcmF0ZVNpZGVCYXIgfTtcclxuIiwiY29uc3Qgc3ZncyA9IHtcclxuXHRjbG9zZTpcclxuXHRcdCc8c3ZnIHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCI4MDBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZyBpZD1cIk1lbnVcIj48cGF0aCBpZD1cIlZlY3RvclwiIGQ9XCJNMTYgMTZMMTIgMTJNMTIgMTJMOCA4TTEyIDEyTDE2IDhNMTIgMTJMOCAxNlwiIHN0cm9rZS13aWR0aD1cIjFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+PC9nPjwvc3ZnPicsXHJcblx0dG9kYXk6XHJcblx0XHQnPHN2ZyB3aWR0aD1cIjIwcHhcImhlaWdodD1cIjIwcHhcInZpZXdCb3g9XCIwIDAgNTEyICAgICAgICAgNTEyXCJ4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHJlY3QgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjIwXCIgeD1cIjQ4XCIgeT1cIjgwXCIgd2lkdGg9XCI0MTZcIiBoZWlnaHQ9XCIzODRcIiByeD1cIjQ4XCIvPjxsaW5lIGZpbGw9XCJub25lXCIgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgeDE9XCIxMjhcIiB5MT1cIjQ4XCIgeDI9XCIxMjhcIiB5Mj1cIjgwXCIvPjxsaW5lIGZpbGw9XCJub25lXCIgcyBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjIwXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHgxPVwiMzg0XCIgeTE9XCI0OFwiIHgyPVwiMzg0XCIgeTI9XCI4MFwiLz48cmVjdCBmaWxsPVwibm9uZVwic3Ryb2tlLWxpbmVqb2luPVwicm91bmRcInN0cm9rZS13aWR0aD1cIjMwXCJzdHJva2UtbGluZWNhcD1cInJvdW5kXCJ4PVwiMTEyXCJ5PVwiMjI0XCJ3aWR0aD1cIjk2XCJoZWlnaHQ9XCI5Nlwicng9XCIxM1wiLz48bGluZSBmaWxsPVwibm9uZVwiICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjIwXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHgxPVwiNDY0XCIgeTE9XCIxNjBcIiB4Mj1cIjQ4XCIgeTI9XCIxNjBcIi8+PC9zdmc+JyxcclxuXHRpbmJveDpcclxuXHRcdCc8c3ZnIHdpZHRoPVwiNjRweFwiIGhlaWdodD1cIjY0cHhcIiB2aWV3Qm94PVwiMCAwIDIzLjAwIDI0LjAwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdHJhbnNmb3JtPVwibWF0cml4KDEsIDAsIDAsIDEsIDAsIDApXCI+PGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+PGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPiA8cGF0aCBkPVwiTTMgMTJIOC41TDEwIDE1SDE0TDE2IDEySDIxTTMgMTJWMThDMyAxOS4xMDQ2IDMuODk1NDMgMjAgNSAyMEgxOUMyMC4xMDQ2IDIwIDIxIDE5LjEwNDYgMjEgMThWMTJNMyAxMkw1Ljc1NjY3IDQuNjQ4ODhDNS45MDMwNCA0LjI1ODU3IDYuMjc2MTYgNCA2LjY5MyA0SDE3LjMwN0MxNy43MjM4IDQgMTguMDk3IDQuMjU4NTcgMTguMjQzMyA0LjY0ODg4TDIxIDEyXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGZpbGw9XCJub25lXCI+PC9wYXRoPiA8L2c+PC9zdmc+JyxcclxuXHRjYWxlbmRhcjpcclxuXHRcdCc8c3ZnIGZpbGw9XCIjMDAwMDAwXCIgd2lkdGg9XCI4MDBweFwiIGhlaWdodD1cIjgwMHB4XCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0yNjYuODE1IDUzNy43MDhjMCAyMi42Mi0xOC4zNCA0MC45Ni00MC45NiA0MC45NnMtNDAuOTYtMTguMzQtNDAuOTYtNDAuOTYgMTguMzQtNDAuOTYgNDAuOTYtNDAuOTYgNDAuOTYgMTguMzQgNDAuOTYgNDAuOTZ6bTE4Mi43NyAwYzAgMjIuNjItMTguMzQgNDAuOTYtNDAuOTYgNDAuOTZzLTQwLjk2LTE4LjM0LTQwLjk2LTQwLjk2IDE4LjM0LTQwLjk2IDQwLjk2LTQwLjk2IDQwLjk2IDE4LjM0IDQwLjk2IDQwLjk2em0xODIuNzc1IDBjMCAyMi42Mi0xOC4zNCA0MC45Ni00MC45NiA0MC45NnMtNDAuOTYtMTguMzQtNDAuOTYtNDAuOTYgMTguMzQtNDAuOTYgNDAuOTYtNDAuOTYgNDAuOTYgMTguMzQgNDAuOTYgNDAuOTZ6bTE4Mi43NyAwYzAgMjIuNjItMTguMzQgNDAuOTYtNDAuOTYgNDAuOTZzLTQwLjk2LTE4LjM0LTQwLjk2LTQwLjk2IDE4LjM0LTQwLjk2IDQwLjk2LTQwLjk2IDQwLjk2IDE4LjM0IDQwLjk2IDQwLjk2ek0yNjYuODE1IDY3OS4zNDdjMCAyMi42Mi0xOC4zNCA0MC45Ni00MC45NiA0MC45NnMtNDAuOTYtMTguMzQtNDAuOTYtNDAuOTYgMTguMzQtNDAuOTYgNDAuOTYtNDAuOTYgNDAuOTYgMTguMzQgNDAuOTYgNDAuOTZ6bTE4Mi43NyAwYzAgMjIuNjItMTguMzQgNDAuOTYtNDAuOTYgNDAuOTZzLTQwLjk2LTE4LjM0LTQwLjk2LTQwLjk2IDE4LjM0LTQwLjk2IDQwLjk2LTQwLjk2IDQwLjk2IDE4LjM0IDQwLjk2IDQwLjk2em0xODIuNzc1IDBjMCAyMi42Mi0xOC4zNCA0MC45Ni00MC45NiA0MC45NnMtNDAuOTYtMTguMzQtNDAuOTYtNDAuOTYgMTguMzQtNDAuOTYgNDAuOTYtNDAuOTYgNDAuOTYgMTguMzQgNDAuOTYgNDAuOTZ6bTE4Mi43NyAwYzAgMjIuNjItMTguMzQgNDAuOTYtNDAuOTYgNDAuOTZzLTQwLjk2LTE4LjM0LTQwLjk2LTQwLjk2IDE4LjM0LTQwLjk2IDQwLjk2LTQwLjk2IDQwLjk2IDE4LjM0IDQwLjk2IDQwLjk2ek0yNjYuODE1IDgyMC45ODhjMCAyMi42Mi0xOC4zNCA0MC45Ni00MC45NiA0MC45NnMtNDAuOTYtMTguMzQtNDAuOTYtNDAuOTYgMTguMzQtNDAuOTYgNDAuOTYtNDAuOTYgNDAuOTYgMTguMzQgNDAuOTYgNDAuOTZ6bTE4Mi43NyAwYzAgMjIuNjItMTguMzQgNDAuOTYtNDAuOTYgNDAuOTZzLTQwLjk2LTE4LjM0LTQwLjk2LTQwLjk2IDE4LjM0LTQwLjk2IDQwLjk2LTQwLjk2IDQwLjk2IDE4LjM0IDQwLjk2IDQwLjk2em0xODIuNzc1IDBjMCAyMi42Mi0xOC4zNCA0MC45Ni00MC45NiA0MC45NnMtNDAuOTYtMTguMzQtNDAuOTYtNDAuOTYgMTguMzQtNDAuOTYgNDAuOTYtNDAuOTYgNDAuOTYgMTguMzQgNDAuOTYgNDAuOTZ6bTE4Mi43NyAwYzAgMjIuNjItMTguMzQgNDAuOTYtNDAuOTYgNDAuOTZzLTQwLjk2LTE4LjM0LTQwLjk2LTQwLjk2IDE4LjM0LTQwLjk2IDQwLjk2LTQwLjk2IDQwLjk2IDE4LjM0IDQwLjk2IDQwLjk2ek0yMjguMTggODEuOTE4djE1My42YzAgMTEuMzExIDkuMTY5IDIwLjQ4IDIwLjQ4IDIwLjQ4czIwLjQ4LTkuMTY5IDIwLjQ4LTIwLjQ4di0xNTMuNmMwLTExLjMxMS05LjE2OS0yMC40OC0yMC40OC0yMC40OHMtMjAuNDggOS4xNjktMjAuNDggMjAuNDh6bTUyOC4wOSAwdjE1My42YzAgMTEuMzExIDkuMTY5IDIwLjQ4IDIwLjQ4IDIwLjQ4czIwLjQ4LTkuMTY5IDIwLjQ4LTIwLjQ4di0xNTMuNmMwLTExLjMxMS05LjE2OS0yMC40OC0yMC40OC0yMC40OHMtMjAuNDggOS4xNjktMjAuNDggMjAuNDh6XCIvPjxwYXRoIGQ9XCJNODkwLjg3NyAxMzcuNTE3YzMzLjkzMSAwIDYxLjQ0IDI3LjUwOSA2MS40NCA2MS40NHY3MDMuMzc1YzAgMzMuOTMxLTI3LjUwOSA2MS40NC02MS40NCA2MS40NGgtNzU3Ljc2Yy0zMy45MzEgMC02MS40NC0yNy41MDktNjEuNDQtNjEuNDRWMTk4Ljk1N2MwLTMzLjkzMSAyNy41MDktNjEuNDQgNjEuNDQtNjEuNDRoNzU3Ljc2em0tNzU3Ljc2IDQwLjk2Yy0xMS4zMDkgMC0yMC40OCA5LjE3MS0yMC40OCAyMC40OHY3MDMuMzc1YzAgMTEuMzA5IDkuMTcxIDIwLjQ4IDIwLjQ4IDIwLjQ4aDc1Ny43NmMxMS4zMDkgMCAyMC40OC05LjE3MSAyMC40OC0yMC40OFYxOTguOTU3YzAtMTEuMzA5LTkuMTcxLTIwLjQ4LTIwLjQ4LTIwLjQ4aC03NTcuNzZ6XCIvPjxwYXRoIGQ9XCJNNTc1LjAzIDMzOC4yODhjMC0zMy45My0yNy41MS02MS40NC02MS40NC02MS40NHMtNjEuNDQgMjcuNTEtNjEuNDQgNjEuNDRjMCAzMy45MyAyNy41MSA2MS40NCA2MS40NCA2MS40NHM2MS40NC0yNy41MSA2MS40NC02MS40NHptNDAuOTYgMGMwIDU2LjU1MS00NS44NDkgMTAyLjQtMTAyLjQgMTAyLjRzLTEwMi40LTQ1Ljg0OS0xMDIuNC0xMDIuNGMwLTU2LjU1MSA0NS44NDktMTAyLjQgMTAyLjQtMTAyLjRzMTAyLjQgNDUuODQ5IDEwMi40IDEwMi40elwiLz48L3N2Zz4nLFxyXG5cdHBsdXM6ICc8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg2LCA2KVwiPjxwYXRoIGQ9XCJNNiA1Vi41YS41LjUgMCAwMTEgMFY2aDUuNWEuNS41IDAgMTEwIDFIN3Y1LjVhLjUuNSAwIDExLTEgMFY3SC41YS41LjUgMCAwMTAtMUg2elwiIGZpbGwtcnVsZT1cInJvdW5kXCI+PC9wYXRoPjwvZz48L3N2Zz4nLFxyXG5cdG1lbnU6ICc8c3ZnIHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCI4MDBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk00IDE3SDhNMTIgMTdIMjBNNCAxMkgyME00IDdIMTJNMTYgN0gyMFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz48L3N2Zz4nLFxyXG5cdHNlYXJjaDpcclxuXHRcdCc8c3ZnIHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCI4MDBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAgNUM3LjIzODU4IDUgNSA3LjIzODU4IDUgMTBDNSAxMi43NjE0IDcuMjM4NTggMTUgMTAgMTVDMTEuMzgxIDE1IDEyLjYyOTYgMTQuNDQxNSAxMy41MzU1IDEzLjUzNTVDMTQuNDQxNSAxMi42Mjk2IDE1IDExLjM4MSAxNSAxMEMxNSA3LjIzODU4IDEyLjc2MTQgNSAxMCA1Wk0zIDEwQzMgNi4xMzQwMSA2LjEzNDAxIDMgMTAgM0MxMy44NjYgMyAxNyA2LjEzNDAxIDE3IDEwQzE3IDExLjU3MTkgMTYuNDgxIDEzLjAyMzkgMTUuNjA2MyAxNC4xOTIxTDIwLjcwNzEgMTkuMjkyOUMyMS4wOTc2IDE5LjY4MzQgMjEuMDk3NiAyMC4zMTY2IDIwLjcwNzEgMjAuNzA3MUMyMC4zMTY2IDIxLjA5NzYgMTkuNjgzNCAyMS4wOTc2IDE5LjI5MjkgMjAuNzA3MUwxNC4xOTIxIDE1LjYwNjNDMTMuMDIzOSAxNi40ODEgMTEuNTcxOSAxNyAxMCAxN0M2LjEzNDAxIDE3IDMgMTMuODY2IDMgMTBaXCIgLz48L3N2Zz4nLFxyXG5cdHN1bjogJzxzdmcgd2lkdGg9XCI4MDBweFwiIGhlaWdodD1cIjgwMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwieWVsbG93XCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1LjA5Njc3XCIvPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMi45NTU2IDMuMDgwNjVDMTIuOTU1NiAyLjU1Mjg2IDEyLjUyNzcgMi4xMjUgMTIgMi4xMjVDMTEuNDcyMiAyLjEyNSAxMS4wNDQzIDIuNTUyODYgMTEuMDQ0MyAzLjA4MDY1TDExLjA0NDMgNS42NDA3OEMxMS4zNTYxIDUuNTk0MzIgMTEuNjc1MyA1LjU3MDI0IDEyIDUuNTcwMjRDMTIuMzI0NyA1LjU3MDI0IDEyLjY0MzggNS41OTQzMSAxMi45NTU2IDUuNjQwNzZMMTIuOTU1NiAzLjA4MDY1Wk0xMi45NTU2IDE4LjM1OTRDMTIuNjQzOCAxOC40MDU5IDEyLjMyNDcgMTguNDI5OSAxMiAxOC40Mjk5QzExLjY3NTMgMTguNDI5OSAxMS4zNTYxIDE4LjQwNTggMTEuMDQ0MyAxOC4zNTk0TDExLjA0NDMgMjAuOTE5NEMxMS4wNDQzIDIxLjQ0NzEgMTEuNDcyMiAyMS44NzUgMTIgMjEuODc1QzEyLjUyNzcgMjEuODc1IDEyLjk1NTYgMjEuNDQ3MSAxMi45NTU2IDIwLjkxOTRMMTIuOTU1NiAxOC4zNTk0WlwiIC8+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIwLjkxOTQgMTIuOTU1NkMyMS40NDcxIDEyLjk1NTYgMjEuODc1IDEyLjUyNzcgMjEuODc1IDEyQzIxLjg3NSAxMS40NzIyIDIxLjQ0NzEgMTEuMDQ0MyAyMC45MTk0IDExLjA0NDNMMTguMzU5MiAxMS4wNDQzQzE4LjQwNTcgMTEuMzU2MSAxOC40Mjk4IDExLjY3NTMgMTguNDI5OCAxMkMxOC40Mjk4IDEyLjMyNDcgMTguNDA1NyAxMi42NDM4IDE4LjM1OTIgMTIuOTU1NkwyMC45MTk0IDEyLjk1NTZaTTUuNjQwNiAxMi45NTU2QzUuNTk0MTUgMTIuNjQzOCA1LjU3MDA4IDEyLjMyNDcgNS41NzAwOCAxMkM1LjU3MDA4IDExLjY3NTMgNS41OTQxNiAxMS4zNTYxIDUuNjQwNjIgMTEuMDQ0M0wzLjA4MDY0IDExLjA0NDNDMi41NTI4NiAxMS4wNDQzIDIuMTI1IDExLjQ3MjIgMi4xMjUgMTJDMi4xMjUgMTIuNTI3NyAyLjU1Mjg2IDEyLjk1NTYgMy4wODA2NCAxMi45NTU2TDUuNjQwNiAxMi45NTU2WlwiIC8+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE4Ljk4MjggNi4zNjg3NkMxOS4zNTYgNS45OTU1NSAxOS4zNTYgNS4zOTA0NyAxOC45ODI4IDUuMDE3MjdDMTguNjA5NiA0LjY0NDA3IDE4LjAwNDUgNC42NDQwNyAxNy42MzEzIDUuMDE3MjdMMTUuODIwOSA2LjgyNzY0QzE2LjA3NDMgNy4wMTUyOCAxNi4zMTY5IDcuMjIzOTEgMTYuNTQ2NiA3LjQ1MzU0QzE2Ljc3NjIgNy42ODMxNSAxNi45ODQ4IDcuOTI1ODEgMTcuMTcyNCA4LjE3OTEyTDE4Ljk4MjggNi4zNjg3NlpNOC4xNzg5OCAxNy4xNzI1QzcuOTI1NjcgMTYuOTg0OSA3LjY4MzAyIDE2Ljc3NjMgNy40NTM0MSAxNi41NDY3QzcuMjIzNzggMTYuMzE3MSA3LjAxNTE0IDE2LjA3NDQgNi44Mjc1MSAxNS44MjExTDUuMDE3NDIgMTcuNjMxMUM0LjY0NDIyIDE4LjAwNDMgNC42NDQyMiAxOC42MDk0IDUuMDE3NDIgMTguOTgyNkM1LjM5MDYyIDE5LjM1NTggNS45OTU3IDE5LjM1NTggNi4zNjg5MSAxOC45ODI2TDguMTc4OTggMTcuMTcyNVpcIiAvPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk02LjM2ODg4IDUuMDE3MjJDNS45OTU2OCA0LjY0NDAyIDUuMzkwNiA0LjY0NDAyIDUuMDE3MzkgNS4wMTcyMkM0LjY0NDE5IDUuMzkwNDMgNC42NDQxOSA1Ljk5NTUxIDUuMDE3MzkgNi4zNjg3MUw2LjgyNzc2IDguMTc5MDhDNy4wMTU0IDcuOTI1NzQgNy4yMjQwMyA3LjY4MzA2IDcuNDUzNjYgNy40NTM0MkM3LjY4MzI3IDcuMjIzODEgNy45MjU5MyA3LjAxNTIgOC4xNzkyNCA2LjgyNzU4TDYuMzY4ODggNS4wMTcyMlpNMTcuMTcyNyAxNS44MjFDMTYuOTg1MSAxNi4wNzQzIDE2Ljc3NjQgMTYuMzE3IDE2LjU0NjggMTYuNTQ2NkMxNi4zMTcyIDE2Ljc3NjIgMTYuMDc0NSAxNi45ODQ5IDE1LjgyMTIgMTcuMTcyNUwxNy42MzEzIDE4Ljk4MjZDMTguMDA0NSAxOS4zNTU4IDE4LjYwOTUgMTkuMzU1OCAxOC45ODI4IDE4Ljk4MjZDMTkuMzU2IDE4LjYwOTQgMTkuMzU2IDE4LjAwNDMgMTguOTgyOCAxNy42MzExTDE3LjE3MjcgMTUuODIxWlwiIC8+PC9zdmc+JyxcclxuXHRtb29uOiAnPHN2ZyB3aWR0aD1cIjgwMHB4XCIgaGVpZ2h0PVwiODAwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJncmV5XCI+PHBhdGggZD1cIk0xMi4wNTU3IDMuNTk5NzRDMTIuMjc1MiAzLjI4MTMgMTIuMjkxMyAyLjg2NDg0IDEyLjA5NzIgMi41MzAzM0MxMS45MDMxIDIuMTk1ODIgMTEuNTMzNSAyLjAwMzI0IDExLjE0ODEgMi4wMzU3OUM2LjAyMzUxIDIuNDY4NjggMiA2Ljc2MzkyIDIgMTJDMiAxNy41MjI4IDYuNDc3MTUgMjIgMTIgMjJDMTcuMjM2IDIyIDIxLjUzMTMgMTcuOTc2NCAyMS45NjQyIDEyLjg1MThDMjEuOTk2NyAxMi40NjY0IDIxLjgwNDEgMTIuMDk2OCAyMS40Njk2IDExLjkwMjdDMjEuMTM1MSAxMS43MDg2IDIwLjcxODcgMTEuNzI0OCAyMC40MDAyIDExLjk0NDNDMTkuNDM0MSAxMi42MTAyIDE4LjI2NDEgMTMgMTcgMTNDMTMuNjg2MyAxMyAxMSAxMC4zMTM3IDExIDYuOTk5OTZDMTEgNS43MzU4OSAxMS4zODk4IDQuNTY1ODcgMTIuMDU1NyAzLjU5OTc0WlwiIC8+PC9zdmc+JyxcclxuXHRwZW46ICc8c3ZnICB3aWR0aD1cIjY0cHhcIiBoZWlnaHQ9XCI2NHB4XCIgdmlld0JveD1cIi0zLjQ4IC0zLjQ4IDMxLjk2IDMxLjk2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHN0cm9rZT1cIlwiIHN0cm9rZS13aWR0aD1cIjAuNTAwMjQwMDAwMDAwMDAwMDAwMDNcIj48ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZT1cIiNDQ0NDQ0NcIiBzdHJva2Utd2lkdGg9XCIwLjA0OFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj4gPHBhdGggZD1cIk0xNS41LDYuMjA3MTA2NzggTDQsMTcuNzA3MTA2OCBMNCwyMCBMNi4yOTI4OTMyMiwyMCBMMTcuNzkyODkzMiw4LjUgTDE1LjUsNi4yMDcxMDY3OCBaIE0xNi4yMDcxMDY4LDUuNSBMMTguNSw3Ljc5Mjg5MzIyIEwxOS43OTI4OTMyLDYuNSBMMTcuNSw0LjIwNzEwNjc4IEwxNi4yMDcxMDY4LDUuNSBMMTYuMjA3MTA2OCw1LjUgWiBNMywyMC41IEwzLDE3LjUgQzMsMTcuMzY3MzkxOCAzLjA1MjY3ODQyLDE3LjI0MDIxNDggMy4xNDY0NDY2MSwxNy4xNDY0NDY2IEwxNy4xNDY0NDY2LDMuMTQ2NDQ2NjEgQzE3LjM0MTcwODgsMi45NTExODQ0NiAxNy42NTgyOTEyLDIuOTUxMTg0NDYgMTcuODUzNTUzNCwzLjE0NjQ0NjYxIEwyMC44NTM1NTM0LDYuMTQ2NDQ2NjEgQzIxLjA0ODgxNTUsNi4zNDE3MDg3NiAyMS4wNDg4MTU1LDYuNjU4MjkxMjQgMjAuODUzNTUzNCw2Ljg1MzU1MzM5IEw2Ljg1MzU1MzM5LDIwLjg1MzU1MzQgQzYuNzU5Nzg1MiwyMC45NDczMjE2IDYuNjMyNjA4MjQsMjEgNi41LDIxIEwzLjUsMjEgQzMuMjIzODU3NjMsMjEgMywyMC43NzYxNDI0IDMsMjAuNSBaXCI+PC9wYXRoPiA8L2c+PC9zdmc+JyxcclxuXHRjaXJjbGU6XHJcblx0XHQnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgaWQ9XCJjb2xvci1tYXJrXCI+PHBhdGggZD1cIk0xMiA3YTUgNSAwIDExMCAxMCA1IDUgMCAwMTAtMTB6XCIgPjwvcGF0aD48L3N2Zz4nLFxyXG59O1xyXG5cclxuZXhwb3J0IHsgc3ZncyB9O1xyXG5cclxuIiwiaW1wb3J0IHsgc3ZncyB9IGZyb20gJy4uL3N2Z3Mvc3Zncy5qcyc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGUvdG9wLWJhci5jc3MnO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVUb3BCYXIoKSB7XHJcblx0Y29uc3QgdG9wQmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dG9wQmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvcC1iYXItY29udGFpbmVyJyk7XHJcblxyXG5cdGNvbnN0IGJ1cmdlck1lbnUgPSBjcmVhdGVidXJnZXJNZW51KCk7XHJcblx0Y29uc3QgcXVpY2tTZWFyY2ggPSBjcmVhdGVRdWlja1NlYXJjaCgpO1xyXG5cdGNvbnN0IHRvb2dsZVRoZW1lID0gY3JlYXRlVG9nZ2xlKCk7XHJcblxyXG5cdHRvcEJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChidXJnZXJNZW51KTtcclxuXHR0b3BCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQocXVpY2tTZWFyY2gpO1xyXG5cdHRvcEJhckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b29nbGVUaGVtZSk7XHJcblxyXG5cdHJldHVybiB0b3BCYXJDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZWJ1cmdlck1lbnUoKSB7XHJcblx0Y29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdG1lbnUuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyLW1lbnUnKTtcclxuXHRtZW51LmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG5cdG1lbnUuaWQgPSAnYnVyZ2VyTWVudSc7XHJcblx0bWVudS5pbm5lckhUTUwgPSBzdmdzLm1lbnU7XHJcblxyXG5cdHJldHVybiBtZW51O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVRdWlja1NlYXJjaCgpIHtcclxuXHRjb25zdCBxdWlja1NlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHF1aWNrU2VhcmNoLmNsYXNzTGlzdC5hZGQoJ3F1aWNrLXNlYXJjaCcpO1xyXG5cdHF1aWNrU2VhcmNoLmlubmVySFRNTCA9IHN2Z3Muc2VhcmNoO1xyXG5cclxuXHRjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0aW5wdXQucGxhY2Vob2xkZXIgPSAnU2VhcmNoLi4uJztcclxuXHJcblx0cXVpY2tTZWFyY2guYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cclxuXHRyZXR1cm4gcXVpY2tTZWFyY2g7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZ2dsZSgpIHtcclxuXHRjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR0b2dnbGUuY2xhc3NMaXN0LmFkZCgndG9nZ2xlLXRoZW1lJyk7XHJcblx0dG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG5cdHRvZ2dsZS5pbm5lckhUTUwgPSBzdmdzLnN1bjtcclxuXHR0b2dnbGUuaW5uZXJIVE1MICs9IHN2Z3MubW9vbjtcclxuXHJcblx0Y29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Y2lyY2xlLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpO1xyXG5cdGNpcmNsZS5pZCA9ICd0b2dnbGUtY2lyY2xlJztcclxuXHJcblx0dG9nZ2xlLmFwcGVuZENoaWxkKGNpcmNsZSk7XHJcblxyXG5cdHJldHVybiB0b2dnbGU7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdlbmVyYXRlVG9wQmFyIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFVJIH0gZnJvbSAnLi91aS1tb2R1bGUvVUknO1xyXG5cclxuVUkuaW5pdCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=