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

	function setProjectName(project, newName) {
		project.name = newName;
		project.updateProjectName(newName);
	}

	return {
		addProject,
		getAllProjects,
		getProject,
		findProject,
		removeProject,
		getAllTasks,
		setProjectName,
	};
})();

function Project(name) {
	const tasks = [];
	let projectName = name;

	function addTask(title, description, dueDate, priority) {
		tasks.push(Task(title, description, dueDate, priority, projectName));
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

	function updateProjectName(newName) {
		projectName = newName;
		updateTaskProject();
	}

	function updateTaskProject() {
		tasks.forEach((task) => {
			task.project = projectName;
		});
	}

	function updateTask(task, obj) {
		task.title = obj.title;
		task.description = obj.description;
		task.dueDate = obj.dueDate;
		task.priority = obj.priority;
	}

	return {
		name: projectName,
		addTask,
		getTasks,
		findTask,
		findTaskIndex,
		updateTask,
		updateProjectName,
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
				console.log(task);
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

			if (project.findTask(newData.title) && newData.title !== task.title) {
				alert('Task name already exist.');
				return false;
			}
			project.updateTask(task, newData);
			updateDefaultPages();
			updatePage(getPage(task));
			closeModal(modal);
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
			const newpage = createNewPage(project);
			Pages.push(newpage);
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
				const newpage = createNewPage(project);
				Pages.push(newpage);
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

			addPageFunction(newPage);

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
			return newPage;
		}

		function addPageFunction(pageData) {
			const header = pageData.page.querySelector('.header');
			const editIcon = document.createElement('span');
			editIcon.innerHTML = _svgs_svgs_js__WEBPACK_IMPORTED_MODULE_4__.svgs.pen;
			editIcon.classList.add('icon');
			editIcon.classList.add('hidden');

			header.addEventListener('mouseover', () => {
				editIcon.classList.remove('hidden');
			});
			header.addEventListener('mouseout', () => {
				editIcon.classList.add('hidden');
			});

			editIcon.addEventListener('click', () => {
				openEditProjectModal(pageData.name);
			});

			header.appendChild(editIcon);
		}

		function openEditProjectModal(projectName) {
			const modal = (0,_modals_project_modal_js__WEBPACK_IMPORTED_MODULE_2__.generateProjectModal)();
			const header = modal.querySelector('.modal-header');
			const input = modal.querySelector('input');
			const save = modal.querySelector('#add-project');
			const cancel = modal.querySelector('#close-project-modal');

			header.textContent = 'Editing Project';
			input.value = projectName;
			save.textContent = 'save';

			save.addEventListener('click', () => {
				updateProjectName(input.value, projectName, modal);
			});
			cancel.addEventListener('click', () => {
				closeModal(modal);
			});

			page.appendChild(modal);
			input.focus();
		}

		function updateProjectName(newName, projectName, modal) {
			if (!isvalidProject(newName) && newName !== projectName) {
				alert('Project name already exist or is a invalid name');
				return;
			}

			if (!newName) return;

			const project = _Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule.findProject(projectName);
			_Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule.setProjectName(project, newName);
			const pageIndex = Pages.findIndex((page) => page.name === projectName);
			const newPage = createNewPage(project);
			Pages.splice(pageIndex, 1, newPage);
			updateSidebar();
			openPage(newPage.name);
			closeModal(modal);
		}

		function updateSidebar() {
			const projects = _Projects_projects_js__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule.getAllProjects();
			const projectsTriggers = sideBarContainer.querySelector('.projects');
			projectsTriggers.innerHTML = '';
			projects.forEach((project) => {
				projectsTriggers.appendChild(createProject(project));
			});
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

		function isInvalidName(name) {
			const isValid = Pages.find(
				(page) => page.name.toLowerCase() === name.toLowerCase()
			)
				? true
				: false;

			return isValid;
		}

		function isvalidProject(name) {
			if (isInvalidName(name)) {
				return false;
			}

			return true;
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
			isvalidProject,
		};
	})();

	function addProject() {
		let name = projectModal.querySelector('input').value;
		if (!name) return;
		if (!changePageModule.isvalidProject(name)) {
			alert('Project name already exist or is a invalid name');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpRUFBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFNBQVM7QUFDL0MsdUJBQXVCLHNEQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUMsdUJBQXVCLHNEQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsK0NBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtDQUFJO0FBQzVCO0FB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QSxlQUFlLHFEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEVztBQUMzQztBQUNBO0FBQ0EsZUFBZSx3REFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1R1U7QUFDTDtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLCtDQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0NBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMkI7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnQjtBQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnVDO0FBQ047QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtDQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLCtDQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtDQUFJO0FBQ3hCLHFCQUFxQiwrQ0FBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjs7Ozs7OztVQ3pEMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0FvQztBQUNwQztBQUNBLDZDQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUvbW9kYWwuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlL3NpZGUtYmFyLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS90b3AtYmFyLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS9tb2RhbC5jc3M/MTcwNiIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS9zaWRlLWJhci5jc3M/MzhjMyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS90b3AtYmFyLmNzcz85MzNmIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvUHJvamVjdHMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvZGF0ZS9kYXRlLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3VpLW1vZHVsZS9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy91aS1tb2R1bGUvbW9kYWxzL21vZGFsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3VpLW1vZHVsZS9tb2RhbHMvcHJvamVjdC1tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy91aS1tb2R1bGUvbW9kYWxzL3Rhc2stbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdWktbW9kdWxlL3NpZGUtYmFyL3NpZGUtYmFyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3VpLW1vZHVsZS9zdmdzL3N2Z3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdWktbW9kdWxlL3RvcC1iYXIvdG9wLWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyN2E7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IG1pbig1MDBweCwgODB2dyk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1iYXItY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbn1cclxuXHJcbi5jb250ZW50LW1vZGFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAycmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5pbnB1dC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lciBpbnB1dCxcclxuLmlucHV0LWNvbnRhaW5lciBzZWxlY3R7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogLjJyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIHBhZGRpbmc6IC4zcmVtO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5maWVsZCB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogLjVyZW0gMDtcclxuICBnYXA6IC41cmVtO1xyXG59XHJcblxyXG4uYnRucy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAuMnJlbTtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmJ0bnMtY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgcGFkZGluZzogLjJyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bnMtY29udGFpbmVyIC5ibHVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9tb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQ0FBbUM7RUFDbkMsb0JBQW9CO0VBQ3BCLHVDQUF1QztFQUN2Qyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tb2RhbC1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjdhO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IG1pbig1MDBweCwgODB2dyk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1iYXItY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaGVhZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtbW9kYWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyIGlucHV0LFxcclxcbi5pbnB1dC1jb250YWluZXIgc2VsZWN0e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgcGFkZGluZzogLjNyZW07XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGQge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogLjVyZW0gMDtcXHJcXG4gIGdhcDogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5idG5zLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAuMnJlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRucy1jb250YWluZXIgYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgcGFkZGluZzogLjJyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bnMtY29udGFpbmVyIC5ibHVlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zaWRlLWJhci1jb250YWluZXIge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b3AtYmFyLWhlaWdodCkpO1xyXG5cdHdpZHRoOiB2YXIoLS1zaWRlLWJhci13aWR0aCk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1iYXItY29sb3IpO1xyXG5cdHotaW5kZXg6IDE7XHJcblx0cGFkZGluZy10b3A6IDJyZW07XHJcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uLXRpbWUpIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc2lkZS1iYXItc2hhZG93IHtcclxuXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b3AtYmFyLWhlaWdodCkpO1xyXG5cdHdpZHRoOiB2YXIoLS1zaWRlLWJhci13aWR0aCk7XHJcblx0dHJhbnNpdGlvbjogd2lkdGggdmFyKC0tdHJhbnNpdGlvbi10aW1lKSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNpZGUtYmFyIHtcclxuXHRwYWRkaW5nOiAwIDFyZW07XHJcblx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG5zcGFuIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vcHRpb24ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRnYXA6IDAuM3JlbTtcclxuXHRwYWRkaW5nOiAwLjVyZW07XHJcblx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm9wdGlvbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZGFyay1jb2xvcik7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbi5pY29uIHN2ZyB7XHJcblx0aGVpZ2h0OiAyNXB4O1xyXG5cdHdpZHRoOiAyNXB4O1xyXG5cdGZpbGw6IHZhcigtLXRleHQtY29sb3IpO1xyXG5cdHN0cm9rZTogdmFyKC0tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuXHRmbGV4OiAxO1xyXG59XHJcblxyXG4uc3RhbmRhcmQtb3B0aW9ucyB7XHJcblx0bWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLnByb2plY3RzLWNvbnRhaW5lciB7XHJcblx0ZmxleDogMTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0bWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnByb2plY3RzLWhlYWRlciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAwLjVyZW07XHJcblx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnByb2plY3RzIHtcclxuXHRmbGV4OiAxO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0cGFkZGluZy1pbmxpbmU6IDAuNXJlbSAwO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG5cclxuLm9wZW4ge1xyXG5cdGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoLTEgKiB2YXIoLS1zaWRlLWJhci13aWR0aCkpKTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZGFyay1jb2xvcik7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcblx0LnNpZGUtYmFyLXNoYWRvdyB7XHJcblx0XHR3aWR0aDogMDtcclxuXHR9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc2lkZS1iYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsZUFBZTtDQUNmLDJDQUEyQztDQUMzQyw0QkFBNEI7Q0FDNUIsdUNBQXVDO0NBQ3ZDLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLHdEQUF3RDtBQUN6RDs7QUFFQTtDQUNDLDJDQUEyQztDQUMzQyw0QkFBNEI7Q0FDNUIsb0RBQW9EO0FBQ3JEOztBQUVBO0NBQ0MsZUFBZTtDQUNmLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxlQUFlO0NBQ2YscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyx5Q0FBeUM7QUFDMUM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixlQUFlO0NBQ2YsZUFBZTtDQUNmLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsdUJBQXVCO0NBQ3ZCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLE9BQU87QUFDUjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixxQkFBcUI7Q0FDckIsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsT0FBTztDQUNQLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsZUFBZTtDQUNmLHdCQUF3QjtDQUN4QixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxPQUFPO0FBQ1I7O0FBRUE7Q0FDQyx1REFBdUQ7QUFDeEQ7O0FBRUE7Q0FDQyx5Q0FBeUM7QUFDMUM7O0FBRUE7Q0FDQztFQUNDLFFBQVE7Q0FDVDtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zaWRlLWJhci1jb250YWluZXIge1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b3AtYmFyLWhlaWdodCkpO1xcclxcblxcdHdpZHRoOiB2YXIoLS1zaWRlLWJhci13aWR0aCk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1iYXItY29sb3IpO1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxuXFx0cGFkZGluZy10b3A6IDJyZW07XFxyXFxuXFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcblxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uLXRpbWUpIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXItc2hhZG93IHtcXHJcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b3AtYmFyLWhlaWdodCkpO1xcclxcblxcdHdpZHRoOiB2YXIoLS1zaWRlLWJhci13aWR0aCk7XFxyXFxuXFx0dHJhbnNpdGlvbjogd2lkdGggdmFyKC0tdHJhbnNpdGlvbi10aW1lKSBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYmFyIHtcXHJcXG5cXHRwYWRkaW5nOiAwIDFyZW07XFxyXFxuXFx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5vcHRpb24ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDAuM3JlbTtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZGFyay1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAyNXB4O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5pY29uIHN2ZyB7XFxyXFxuXFx0aGVpZ2h0OiAyNXB4O1xcclxcblxcdHdpZHRoOiAyNXB4O1xcclxcblxcdGZpbGw6IHZhcigtLXRleHQtY29sb3IpO1xcclxcblxcdHN0cm9rZTogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5uYW1lIHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhbmRhcmQtb3B0aW9ucyB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWhlYWRlciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0cGFkZGluZy1pbmxpbmU6IDAuNXJlbSAwO1xcclxcblxcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wZW4ge1xcclxcblxcdGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZSB7XFxyXFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoLTEgKiB2YXIoLS1zaWRlLWJhci13aWR0aCkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZGFyay1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuXFx0LnNpZGUtYmFyLXNoYWRvdyB7XFxyXFxuXFx0XFx0d2lkdGg6IDA7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50b3AtYmFyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcGFkZGluZzogLjRyZW0gMS41cmVtO1xyXG4gIGhlaWdodDogdmFyKC0tdG9wLWJhci1oZWlnaHQpO1xyXG59XHJcblxyXG4udG9wLWJhci1jb250YWluZXIgc3ZnIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZmlsbDogI2ZmZmZmZmM3O1xyXG59XHJcblxyXG4uYnVyZ2VyLW1lbnUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcclxufVxyXG5cclxuLmJ1cmdlci1tZW51IHN2Z3tcclxuICBzdHJva2U6IHdoaXRlO1xyXG59XHJcblxyXG4ucXVpY2stc2VhcmNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xyXG4gIGdhcDogNXB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmYzc7XHJcbn0gXHJcblxyXG4udG9wLWJhci1jb250YWluZXIgaW5wdXQge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgZm9udC1zaXplOiAuOXJlbTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbmlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5xdWljay1zZWFyY2g6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0LWNvbG9yKTtcclxufVxyXG5cclxuLnRvZ2dsZS10aGVtZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmYTg7XHJcbiAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xyXG4gIHBhZGRpbmc6ICAwIC4zcmVtO1xyXG4gIGdhcDogLjJyZW07XHJcbn1cclxuXHJcbi50b2dnbGUtdGhlbWUgc3ZnIHtcclxuICB3aWR0aDogMjNweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udG9nZ2xlLXRoZW1lIC5jaXJjbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLjRyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZTtcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQtY29sb3IpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCApIHtcclxuICAudG9wLWJhci1jb250YWluZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gIH1cclxuICAucXVpY2stc2VhcmNoIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG4gIGlucHV0IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvdG9wLWJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLHNDQUFzQztFQUN0QyxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxxQkFBcUI7RUFDckIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixRQUFRO0VBQ1IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7SUFDckIsU0FBUztFQUNYO0VBQ0E7SUFDRSxPQUFPO0VBQ1Q7RUFDQTtJQUNFLE9BQU87RUFDVDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50b3AtYmFyLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBwYWRkaW5nOiAuNHJlbSAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IHZhcigtLXRvcC1iYXItaGVpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1iYXItY29udGFpbmVyIHN2ZyB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGZpbGw6ICNmZmZmZmZjNztcXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlci1tZW51IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlci1tZW51IHN2Z3tcXHJcXG4gIHN0cm9rZTogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5xdWljay1zZWFyY2gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY1ZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBjb2xvcjogI2ZmZmZmZmM3O1xcclxcbn0gXFxyXFxuXFxyXFxuLnRvcC1iYXItY29udGFpbmVyIGlucHV0IHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogLjlyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucXVpY2stc2VhcmNoOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZ2dsZS10aGVtZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZmE4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xcclxcbiAgcGFkZGluZzogIDAgLjNyZW07XFxyXFxuICBnYXA6IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlLXRoZW1lIHN2ZyB7XFxyXFxuICB3aWR0aDogMjNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUtdGhlbWUgLmNpcmNsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogLjRyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCApIHtcXHJcXG4gIC50b3AtYmFyLWNvbnRhaW5lciB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgfVxcclxcbiAgLnF1aWNrLXNlYXJjaCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICB9XFxyXFxuICBpbnB1dCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZGUtYmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZS1iYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvcC1iYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b3AtYmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2V0RGF0ZSB9IGZyb20gJy4uL2RhdGUvZGF0ZS5qcyc7XHJcblxyXG5jb25zdCBQcm9qZWN0c01vZHVsZSA9IChmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgUHJvamVjdHMgPSBbXTtcclxuXHJcblx0ZnVuY3Rpb24gYWRkUHJvamVjdChuYW1lKSB7XHJcblx0XHRQcm9qZWN0cy5wdXNoKFByb2plY3QobmFtZSkpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0QWxsUHJvamVjdHMoKSB7XHJcblx0XHRyZXR1cm4gUHJvamVjdHM7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRQcm9qZWN0KG5hbWUpIHtcclxuXHRcdGxldCBpbmRleCA9IGZpbmRJbmRleChuYW1lKTtcclxuXHRcdHJldHVybiBQcm9qZWN0c1tpbmRleF07XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBmaW5kSW5kZXgobmFtZSkge1xyXG5cdFx0cmV0dXJuIFByb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGZpbmRQcm9qZWN0KG5hbWUpIHtcclxuXHRcdHJldHVybiBQcm9qZWN0cy5maW5kKFxyXG5cdFx0XHQocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHJlbW92ZVByb2plY3QobmFtZSkge1xyXG5cdFx0Y29uc3QgcHJvamVjdEluZGV4ID0gZmluZEluZGV4KG5hbWUpO1xyXG5cdFx0UHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRBbGxUYXNrcygpIHtcclxuXHRcdGNvbnN0IHByb2plY3RzID0gZ2V0QWxsUHJvamVjdHMoKTtcclxuXHRcdGNvbnN0IHRhc2tzID0gW107XHJcblx0XHRwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcblx0XHRcdHRhc2tzLnB1c2goLi4ucHJvamVjdC5nZXRUYXNrcygpKTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHRhc2tzO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2V0UHJvamVjdE5hbWUocHJvamVjdCwgbmV3TmFtZSkge1xyXG5cdFx0cHJvamVjdC5uYW1lID0gbmV3TmFtZTtcclxuXHRcdHByb2plY3QudXBkYXRlUHJvamVjdE5hbWUobmV3TmFtZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0YWRkUHJvamVjdCxcclxuXHRcdGdldEFsbFByb2plY3RzLFxyXG5cdFx0Z2V0UHJvamVjdCxcclxuXHRcdGZpbmRQcm9qZWN0LFxyXG5cdFx0cmVtb3ZlUHJvamVjdCxcclxuXHRcdGdldEFsbFRhc2tzLFxyXG5cdFx0c2V0UHJvamVjdE5hbWUsXHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIFByb2plY3QobmFtZSkge1xyXG5cdGNvbnN0IHRhc2tzID0gW107XHJcblx0bGV0IHByb2plY3ROYW1lID0gbmFtZTtcclxuXHJcblx0ZnVuY3Rpb24gYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcblx0XHR0YXNrcy5wdXNoKFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdE5hbWUpKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGZpbmRUYXNrKHRpdGxlKSB7XHJcblx0XHRyZXR1cm4gdGFza3MuZmluZCgodGFzaykgPT4gdGFzay50aXRsZSA9PT0gdGl0bGUpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZmluZFRhc2tJbmRleCh0aXRsZSkge1xyXG5cdFx0cmV0dXJuIHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay50aXRsZSA9PT0gdGl0bGUpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0VGFza3MoKSB7XHJcblx0XHRyZXR1cm4gdGFza3M7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB1cGRhdGVQcm9qZWN0TmFtZShuZXdOYW1lKSB7XHJcblx0XHRwcm9qZWN0TmFtZSA9IG5ld05hbWU7XHJcblx0XHR1cGRhdGVUYXNrUHJvamVjdCgpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdXBkYXRlVGFza1Byb2plY3QoKSB7XHJcblx0XHR0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcblx0XHRcdHRhc2sucHJvamVjdCA9IHByb2plY3ROYW1lO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB1cGRhdGVUYXNrKHRhc2ssIG9iaikge1xyXG5cdFx0dGFzay50aXRsZSA9IG9iai50aXRsZTtcclxuXHRcdHRhc2suZGVzY3JpcHRpb24gPSBvYmouZGVzY3JpcHRpb247XHJcblx0XHR0YXNrLmR1ZURhdGUgPSBvYmouZHVlRGF0ZTtcclxuXHRcdHRhc2sucHJpb3JpdHkgPSBvYmoucHJpb3JpdHk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0bmFtZTogcHJvamVjdE5hbWUsXHJcblx0XHRhZGRUYXNrLFxyXG5cdFx0Z2V0VGFza3MsXHJcblx0XHRmaW5kVGFzayxcclxuXHRcdGZpbmRUYXNrSW5kZXgsXHJcblx0XHR1cGRhdGVUYXNrLFxyXG5cdFx0dXBkYXRlUHJvamVjdE5hbWUsXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHRpdGxlOiB0aXRsZSxcclxuXHRcdGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuXHRcdGR1ZURhdGU6IGR1ZURhdGUsXHJcblx0XHRwcmlvcml0eTogcHJpb3JpdHksXHJcblx0XHRhZGREYXRlOiBnZXREYXRlKCksXHJcblx0XHRwcm9qZWN0LFxyXG5cdH07XHJcbn1cclxuXHJcblByb2plY3RzTW9kdWxlLmFkZFByb2plY3QoJ1RvZG8gQXBwJyk7XHJcbmNvbnN0IGFwcCA9IFByb2plY3RzTW9kdWxlLmdldFByb2plY3QoJ1RvZG8gQXBwJyk7XHJcbmFwcC5hZGRUYXNrKCdzaG93IGRldGFpbHMnLCAnZm9yIHRoZSB0b2RvIGFwcCcsICcyMDIzLTA2LTI3JywgJ3AxJyk7XHJcbmFwcC5hZGRUYXNrKCd0YXNrIGRvbmUnLCAnZm9yIHRoZSB0b2RvIGFwcCcsICcyMDIzLTA2LTI3JywgJ3AxJyk7XHJcbmFwcC5hZGRUYXNrKCdjb2xvciBwYWxldGUnLCAnZm9yIHRoZSB0b2RvIGFwcCcsICcyMDIzLTA2LTI3JywgJ3AyJyk7XHJcbmFwcC5hZGRUYXNrKCdob3ZlciBlZmZlY3RzJywgJ2ZvciB0aGUgdG9kbyBhcHAnLCAnMjAyMy0wNi0yNycsICdwMicpO1xyXG5hcHAuYWRkVGFzaygnc3RvcmFnZSBNb2R1bGUnLCAnZm9yIHRoZSB0b2RvIGFwcCcsICcyMDIzLTA2LTI3JywgJ3AxJyk7XHJcblxyXG5leHBvcnQgeyBQcm9qZWN0c01vZHVsZSB9O1xyXG4iLCJmdW5jdGlvbiBnZXREYXRlKCkge1xyXG5cdGNvbnN0IGZ1bGxEYXRlID0gbmV3IERhdGUoKTtcclxuXHRjb25zdCBkYXkgPSBmdWxsRGF0ZS5nZXREYXRlKCk7XHJcblx0Y29uc3QgbW9udGggPSBmdWxsRGF0ZS5nZXRNb250aCgpO1xyXG5cdGNvbnN0IHllYXIgPSBmdWxsRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0ZGF5OiBkYXksXHJcblx0XHRtb250aDogbW9udGggKyAxLFxyXG5cdFx0eWVhcjogeWVhcixcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgeyBnZXREYXRlIH07XHJcbiIsImltcG9ydCB7IGdlbmVyYXRlVG9wQmFyIH0gZnJvbSAnLi90b3AtYmFyL3RvcC1iYXIuanMnO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVNpZGVCYXIgfSBmcm9tICcuL3NpZGUtYmFyL3NpZGUtYmFyLmpzJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVQcm9qZWN0TW9kYWwgfSBmcm9tICcuL21vZGFscy9wcm9qZWN0LW1vZGFsLmpzJztcclxuaW1wb3J0IHsgUHJvamVjdHNNb2R1bGUgfSBmcm9tICcuLi9Qcm9qZWN0cy9wcm9qZWN0cy5qcyc7XHJcbmltcG9ydCB7IHN2Z3MgfSBmcm9tICcuL3N2Z3Mvc3Zncy5qcyc7XHJcbmltcG9ydCB7IGdldERhdGUgfSBmcm9tICcuLi9kYXRlL2RhdGUuanMnO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVRhc2tNb2RhbCB9IGZyb20gJy4vbW9kYWxzL3Rhc2stbW9kYWwuanMnO1xyXG5cclxuY29uc3QgVUkgPSAoZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1jb250YWluZXInKTtcclxuXHRjb25zdCB0b3BCYXIgPSBnZW5lcmF0ZVRvcEJhcigpO1xyXG5cdGNvbnN0IHNpZGVCYXIgPSBnZW5lcmF0ZVNpZGVCYXIoKTtcclxuXHRjb25zdCBwcm9qZWN0TW9kYWwgPSBnZW5lcmF0ZVByb2plY3RNb2RhbCgpO1xyXG5cclxuXHRmdW5jdGlvbiBpbml0KCkge1xyXG5cdFx0cGFnZS5hcHBlbmRDaGlsZCh0b3BCYXIpO1xyXG5cdFx0cGFnZS5hcHBlbmRDaGlsZChzaWRlQmFyWzFdKTtcclxuXHRcdHBhZ2UuYXBwZW5kQ2hpbGQoc2lkZUJhclswXSk7XHJcblx0XHRhZGRFdmVudHMoKTtcclxuXHRcdGNoYW5nZVBhZ2VNb2R1bGUuaW5pdCgpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYWRkRXZlbnRzKCkge1xyXG5cdFx0YWRkTWVudUV2ZW50KCk7XHJcblx0XHRhZGRUb2dnbGVUaGVtZUV2ZW50KCk7XHJcblx0XHRtb2RhbFByb2plY3RFdmVudHMoKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFkZE1lbnVFdmVudCgpIHtcclxuXHRcdGNvbnN0IGJ1Z2VyTWVudSA9IHRvcEJhci5xdWVyeVNlbGVjdG9yKCcjYnVyZ2VyTWVudScpO1xyXG5cdFx0YnVnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkNsb3NlU2lkZUJhcik7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb3BlbkNsb3NlU2hhZG93KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9wZW5DbG9zZVNpZGVCYXIoKSB7XHJcblx0XHRjb25zdCBzaWRlQmFyQ29udGFpbmVyID0gc2lkZUJhclswXTtcclxuXHRcdGlmIChpc09wZW4oc2lkZUJhckNvbnRhaW5lcikpIHtcclxuXHRcdFx0c2lkZUJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xyXG5cdFx0XHRzaWRlQmFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0b3BlbkNsb3NlU2hhZG93KGZhbHNlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNpZGVCYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG5cdFx0XHRzaWRlQmFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlJyk7XHJcblx0XHRcdG9wZW5DbG9zZVNoYWRvdyh0cnVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGlzT3BlbihlbGVtZW50KSB7XHJcblx0XHRyZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9wZW5DbG9zZVNoYWRvdyhzdGF0dXMpIHtcclxuXHRcdGNvbnN0IHNpZGVCYXJTaGFkb3cgPSBzaWRlQmFyWzFdO1xyXG5cdFx0Y29uc3Qgc2lkZUJhckNvbnRhaW5lciA9IHNpZGVCYXJbMF07XHJcblxyXG5cdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgODAwIHx8IHN0YXR1cyA9PT0gZmFsc2UpIHtcclxuXHRcdFx0c2lkZUJhclNoYWRvdy5zdHlsZS53aWR0aCA9ICcwJztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoXHJcblx0XHRcdHdpbmRvdy5pbm5lcldpZHRoID49IDgwMCAmJlxyXG5cdFx0XHQoaXNPcGVuKHNpZGVCYXJDb250YWluZXIpIHx8IHN0YXR1cyA9PT0gdHJ1ZSlcclxuXHRcdCkge1xyXG5cdFx0XHRzaWRlQmFyU2hhZG93LnN0eWxlLndpZHRoID0gJ3ZhcigtLXNpZGUtYmFyLXdpZHRoKSc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhZGRUb2dnbGVUaGVtZUV2ZW50KCkge1xyXG5cdFx0Y29uc3QgdG9nZ2xlQnRuID0gdG9wQmFyLnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtdGhlbWUnKTtcclxuXHRcdHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVRoZW1lKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNoYW5nZVRoZW1lKCkge1xyXG5cdFx0bGV0IHRoZW1lID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cdFx0aWYgKGlzVGhlbWUoJ2RhcmsnKSkge1xyXG5cdFx0XHR0aGVtZS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XHJcblx0XHRcdG1vdmVUb2dnbGUoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoZW1lLmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcclxuXHRcdFx0bW92ZVRvZ2dsZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaXNUaGVtZSh0aGVtZSkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhlbWUpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gbW92ZVRvZ2dsZSgpIHtcclxuXHRcdGNvbnN0IGNpcmNsZSA9IHRvcEJhci5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlLWNpcmNsZScpO1xyXG5cdFx0aWYgKGlzVGhlbWUoJ2RhcmsnKSkge1xyXG5cdFx0XHRjaXJjbGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTI2LjVweCknO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y2lyY2xlLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG1vZGFsUHJvamVjdEV2ZW50cygpIHtcclxuXHRcdGNvbnN0IHBsdXMgPSBzaWRlQmFyWzBdLnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW1vZGFsJyk7XHJcblx0XHRjb25zdCBjYW5jZWxCdG4gPSBwcm9qZWN0TW9kYWwucXVlcnlTZWxlY3RvcignI2Nsb3NlLXByb2plY3QtbW9kYWwnKTtcclxuXHRcdGNvbnN0IGFkZEJ0biA9IHByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKTtcclxuXHJcblx0XHRwbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblByb2plY3RNb2RhbCk7XHJcblx0XHRjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVByb2plY3RNb2RhbCk7XHJcblx0XHRhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9wZW5Qcm9qZWN0TW9kYWwoKSB7XHJcblx0XHRwYWdlLmFwcGVuZENoaWxkKHByb2plY3RNb2RhbCk7XHJcblx0XHRwcm9qZWN0TW9kYWwucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb2N1cygpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2xvc2VQcm9qZWN0TW9kYWwoKSB7XHJcblx0XHRwYWdlLnJlbW92ZUNoaWxkKHByb2plY3RNb2RhbCk7XHJcblx0XHRwcm9qZWN0TW9kYWwucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9ICcnO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2hhbmdlUGFnZU1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBQYWdlcyA9IFtdO1xyXG5cdFx0Y29uc3Qgc2lkZUJhckNvbnRhaW5lciA9IHNpZGVCYXJbMF07XHJcblx0XHRsZXQgY3VycmVudFBhZ2UgPSBudWxsO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGNyZWF0ZVBhZ2UobmFtZSkge1xyXG5cdFx0XHRjb25zdCBwYWdlID0gY3JlYXRlTWFpblBhZ2UobmFtZSk7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bmFtZTogbmFtZSxcclxuXHRcdFx0XHRwYWdlOiBwYWdlLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGNyZWF0ZU1haW5QYWdlKHRpdGxlKSB7XHJcblx0XHRcdGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcblx0XHRcdG1haW4uaWQgPSB0aXRsZTtcclxuXHJcblx0XHRcdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcblxyXG5cdFx0XHRjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRoZWFkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcclxuXHRcdFx0aGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcblx0XHRcdGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xyXG5cclxuXHRcdFx0Y29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0dGFza3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFza3MnKTtcclxuXHJcblx0XHRcdG1haW5Db250ZW50LmFwcGVuZENoaWxkKHRhc2tzQ29udGFpbmVyKTtcclxuXHRcdFx0aGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcclxuXHRcdFx0bWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cdFx0XHRtYWluLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcclxuXHJcblx0XHRcdHJldHVybiBtYWluO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGNyZWF0ZURlZmFsdXRQYWdlcygpIHtcclxuXHRcdFx0Y29uc3QgaW5ib3hQYWdlID0gY3JlYXRlUGFnZSgnSW5ib3gnKTtcclxuXHRcdFx0Y29uc3QgdG9kYXlQYWdlID0gY3JlYXRlUGFnZSgnVG9kYXknKTtcclxuXHRcdFx0Y29uc3Qgd2Vla1BhZ2UgPSBjcmVhdGVQYWdlKCdXZWVrJyk7XHJcblxyXG5cdFx0XHRQYWdlcy5wdXNoKGluYm94UGFnZSk7XHJcblx0XHRcdFBhZ2VzLnB1c2godG9kYXlQYWdlKTtcclxuXHRcdFx0UGFnZXMucHVzaCh3ZWVrUGFnZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gYWRkRGVmYWx1dFByb2plY3RzRXZlbnRzKCkge1xyXG5cdFx0XHRjb25zdCBpbmJveCA9IHNpZGVCYXJDb250YWluZXIucXVlcnlTZWxlY3RvcignI2luYm94Jyk7XHJcblx0XHRcdGNvbnN0IHRvZGF5UHJvamVjdHMgPSBzaWRlQmFyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpO1xyXG5cdFx0XHRjb25zdCB3ZWVrUHJvamVjdHMgPSBzaWRlQmFyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyN3ZWVrJyk7XHJcblxyXG5cdFx0XHRpbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0XHRvcGVuRGVmYWx1dFBhZ2UoJ0luYm94JywgZ2V0QWxsVGFza3MpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dG9kYXlQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0XHRvcGVuRGVmYWx1dFBhZ2UoJ1RvZGF5JywgZ2V0VG9kYXlUYXNrcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR3ZWVrUHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0b3BlbkRlZmFsdXRQYWdlKCdXZWVrJywgZ2V0V2Vla1Rhc2tzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gb3BlbkRlZmFsdXRQYWdlKHBhZ2VOYW1lLCBmdW4pIHtcclxuXHRcdFx0Y29uc3QgZGVmYXVsdFBhZ2UgPSBmaW5kUGFnZShwYWdlTmFtZSk7XHJcblx0XHRcdGFwcGVuZFRhc2tzKGZ1biwgZGVmYXVsdFBhZ2UpO1xyXG5cdFx0XHRvcGVuUGFnZShwYWdlTmFtZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gY2xvc2VDdXJyZW50cGFnZSgpIHtcclxuXHRcdFx0aWYgKCFjdXJyZW50UGFnZSkgcmV0dXJuO1xyXG5cdFx0XHRwYWdlLnJlbW92ZUNoaWxkKGN1cnJlbnRQYWdlKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBmaW5kSW5kZXgobmFtZSkge1xyXG5cdFx0XHRyZXR1cm4gUGFnZXMuZmluZEluZGV4KChwYWdlKSA9PiBwYWdlLm5hbWUgPT09IG5hbWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGZpbmRQYWdlKG5hbWUpIHtcclxuXHRcdFx0Y29uc3QgaW5kZXggPSBmaW5kSW5kZXgobmFtZSk7XHJcblx0XHRcdHJldHVybiBQYWdlc1tpbmRleF0ucGFnZTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBhcHBlbmRUYXNrcyhmdW4sIGVsZW1lbnQpIHtcclxuXHRcdFx0Y29uc3QgdGFza3NDb250YWllciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XHJcblx0XHRcdHRhc2tzQ29udGFpZXIuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdGNvbnN0IHRhc2tzID0gZnVuKCk7XHJcblx0XHRcdHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuXHRcdFx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGVUYXNrKHRhc2spO1xyXG5cdFx0XHRcdHRhc2tzQ29udGFpZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0QWxsVGFza3MoKSB7XHJcblx0XHRcdGNvbnN0IHRhc2tzID0gUHJvamVjdHNNb2R1bGUuZ2V0QWxsVGFza3MoKTtcclxuXHRcdFx0cmV0dXJuIHRhc2tzO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldFRvZGF5VGFza3MoKSB7XHJcblx0XHRcdGNvbnN0IHRhc2tzID0gZ2V0QWxsVGFza3MoKTtcclxuXHRcdFx0Y29uc3QgdG9kYXlUYXNrcyA9IHRhc2tzLmZpbHRlcigoeyBhZGREYXRlIH0pID0+IHtcclxuXHRcdFx0XHRjb25zdCBhY3R1YWxEYXRlID0gZ2V0RGF0ZSgpO1xyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRhY3R1YWxEYXRlLnllYXIgPT09IGFkZERhdGUueWVhciAmJlxyXG5cdFx0XHRcdFx0YWN0dWFsRGF0ZS5tb250aCA9PT0gYWRkRGF0ZS5tb250aCAmJlxyXG5cdFx0XHRcdFx0YWN0dWFsRGF0ZS5kYXkgPT09IGFkZERhdGUuZGF5XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdG9kYXlUYXNrcztcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBnZXRXZWVrVGFza3MoKSB7XHJcblx0XHRcdGNvbnN0IHRhc2tzID0gZ2V0QWxsVGFza3MoKTtcclxuXHRcdFx0Y29uc3Qgd2Vla1Rhc2tzID0gdGFza3MuZmlsdGVyKCh7IGFkZERhdGUgfSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGFjdHVhbERhdGUgPSBnZXREYXRlKCk7XHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdGFjdHVhbERhdGUueWVhciA9PT0gYWRkRGF0ZS55ZWFyICYmXHJcblx0XHRcdFx0XHRhY3R1YWxEYXRlLm1vbnRoID09PSBhZGREYXRlLm1vbnRoICYmXHJcblx0XHRcdFx0XHRhY3R1YWxEYXRlLmRheSA8PSBhZGREYXRlLmRheSArIDdcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB3ZWVrVGFza3M7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrKSB7XHJcblx0XHRcdGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0dGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcblxyXG5cdFx0XHRjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblx0XHRcdGNpcmNsZS5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcclxuXHJcblx0XHRcdGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdFx0XHR0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XHJcblx0XHRcdHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcclxuXHJcblx0XHRcdGNvbnN0IHJlbW92ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblx0XHRcdHJlbW92ZUljb24uaW5uZXJIVE1MID0gc3Zncy5jbG9zZTtcclxuXHRcdFx0cmVtb3ZlSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcblxyXG5cdFx0XHRjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRcdFx0ZWRpdEljb24uaW5uZXJIVE1MID0gc3Zncy5wZW47XHJcblx0XHRcdGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuXHJcblx0XHRcdHJlbW92ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0cmVtb3ZlVGFzayh0YXNrKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0XHRlZGl0VGFzayh0YXNrKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0YXNrKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpcmNsZSk7XHJcblx0XHRcdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xyXG5cdFx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcclxuXHRcdFx0dGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVJY29uKTtcclxuXHJcblx0XHRcdHJldHVybiB0YXNrQ29udGFpbmVyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFzaykge1xyXG5cdFx0XHRjb25zdCBwcm9qZWN0ID0gUHJvamVjdHNNb2R1bGUuZ2V0UHJvamVjdCh0YXNrLnByb2plY3QpO1xyXG5cdFx0XHRjb25zdCB0YXNrcyA9IHByb2plY3QuZ2V0VGFza3MoKTtcclxuXHRcdFx0Y29uc3QgdGFza0luZGV4ID0gcHJvamVjdC5maW5kVGFza0luZGV4KHRhc2sudGl0bGUpO1xyXG5cclxuXHRcdFx0dGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XHJcblxyXG5cdFx0XHRjb25zdCBwYWdlRGF0YSA9IGdldFBhZ2UodGFzayk7XHJcblxyXG5cdFx0XHR1cGRhdGVEZWZhdWx0UGFnZXMoKTtcclxuXHRcdFx0dXBkYXRlUGFnZShwYWdlRGF0YSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0UGFnZSh0YXNrKSB7XHJcblx0XHRcdHJldHVybiBQYWdlcy5maW5kKChwYWdlKSA9PiBwYWdlLm5hbWUgPT09IHRhc2sucHJvamVjdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZWRpdFRhc2sodGFzaykge1xyXG5cdFx0XHRjb25zdCBtb2RhbCA9IGdlbmVyYXRlVGFza01vZGFsKCk7XHJcblx0XHRcdGNvbnN0IHRpdGxlID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsLWhlYWRlcicpO1xyXG5cdFx0XHRjb25zdCBzYXZlQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2FkZFRhc2snKTtcclxuXHRcdFx0Y29uc3QgY2FuY2VsQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2Nsb3NlTW9kYWwnKTtcclxuXHJcblx0XHRcdHRpdGxlLnRleHRDb250ZW50ID0gJ0VkaXRpbmcnO1xyXG5cdFx0XHRzYXZlQnRuLnRleHRDb250ZW50ID0gJ3NhdmUnO1xyXG5cclxuXHRcdFx0ZmlsbElucHV0cyh0YXNrLCBtb2RhbCk7XHJcblxyXG5cdFx0XHRzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdHVwZGF0ZVRhc2sodGFzaywgbW9kYWwpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdGNsb3NlTW9kYWwobW9kYWwpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHBhZ2UuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG5cdFx0XHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS5mb2N1cygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldElucHV0c1ZhbHVlcyhtb2RhbCkge1xyXG5cdFx0XHRjb25zdCB0aXRsZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xyXG5cdFx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xyXG5cdFx0XHRjb25zdCBkdWVEYXRlID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcclxuXHRcdFx0Y29uc3QgcHJpb3JpdHkgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dGl0bGU6IHRpdGxlLnZhbHVlLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbi52YWx1ZSxcclxuXHRcdFx0XHRkdWVEYXRlOiBkdWVEYXRlLnZhbHVlLFxyXG5cdFx0XHRcdHByaW9yaXR5OiBwcmlvcml0eS52YWx1ZSxcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBmaWxsSW5wdXRzKHRhc2ssIG1vZGFsKSB7XHJcblx0XHRcdGNvbnN0IHRpdGxlID0gbW9kYWwucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XHJcblx0XHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XHJcblx0XHRcdGNvbnN0IGR1ZURhdGUgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpO1xyXG5cdFx0XHRjb25zdCBwcmlvcml0eSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xyXG5cclxuXHRcdFx0dGl0bGUudmFsdWUgPSB0YXNrLnRpdGxlO1xyXG5cdFx0XHRkZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XHJcblx0XHRcdGR1ZURhdGUudmFsdWUgPSB0YXNrLmR1ZURhdGU7XHJcblx0XHRcdHByaW9yaXR5LnZhbHVlID0gdGFzay5wcmlvcml0eTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiB1cGRhdGVUYXNrKHRhc2ssIG1vZGFsKSB7XHJcblx0XHRcdGNvbnN0IHByb2plY3QgPSBQcm9qZWN0c01vZHVsZS5nZXRQcm9qZWN0KHRhc2sucHJvamVjdCk7XHJcblx0XHRcdGNvbnN0IG5ld0RhdGEgPSBnZXRJbnB1dHNWYWx1ZXMobW9kYWwpO1xyXG5cclxuXHRcdFx0aWYgKHByb2plY3QuZmluZFRhc2sobmV3RGF0YS50aXRsZSkgJiYgbmV3RGF0YS50aXRsZSAhPT0gdGFzay50aXRsZSkge1xyXG5cdFx0XHRcdGFsZXJ0KCdUYXNrIG5hbWUgYWxyZWFkeSBleGlzdC4nKTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0cHJvamVjdC51cGRhdGVUYXNrKHRhc2ssIG5ld0RhdGEpO1xyXG5cdFx0XHR1cGRhdGVEZWZhdWx0UGFnZXMoKTtcclxuXHRcdFx0dXBkYXRlUGFnZShnZXRQYWdlKHRhc2spKTtcclxuXHRcdFx0Y2xvc2VNb2RhbChtb2RhbCk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gYWN0aXZlKCkge1xyXG5cdFx0XHRjb25zdCB0cmlnZ2VycyA9IHNpZGVCYXJDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLm9wdGlvbicpO1xyXG5cdFx0XHRjb25zdCBjdXJyZW50UGFnZUlkID0gY3VycmVudFBhZ2UuaWQ7XHJcblxyXG5cdFx0XHR0cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XHJcblx0XHRcdFx0aWYgKHRyaWdnZXIuaWQudG9Mb3dlckNhc2UoKSA9PT0gY3VycmVudFBhZ2VJZC50b0xvd2VyQ2FzZSgpKSB7XHJcblx0XHRcdFx0XHR0cmlnZ2VyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0cmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gYXBwZW5kUHJvamVjdChwcm9qZWN0KSB7XHJcblx0XHRcdGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gc2lkZUJhckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuXHRcdFx0cHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdChwcm9qZWN0KSk7XHJcblx0XHRcdGNvbnN0IG5ld3BhZ2UgPSBjcmVhdGVOZXdQYWdlKHByb2plY3QpO1xyXG5cdFx0XHRQYWdlcy5wdXNoKG5ld3BhZ2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdCkge1xyXG5cdFx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0Y29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ29wdGlvbicpO1xyXG5cdFx0XHRjb250YWluZXIuaWQgPSBwcm9qZWN0Lm5hbWU7XHJcblxyXG5cdFx0XHRjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRcdFx0cHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xyXG5cdFx0XHRwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuXHJcblx0XHRcdGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRcdFx0cmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuXHRcdFx0cmVtb3ZlLmlubmVySFRNTCA9IHN2Z3MuY2xvc2U7XHJcblx0XHRcdHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0XHRyZW1vdmVQcm9qZWN0KGNvbnRhaW5lcik7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuXHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZSk7XHJcblxyXG5cdFx0XHRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChlLnRhcmdldCA9PT0gY29udGFpbmVyIHx8IGUudGFyZ2V0ID09PSBwcm9qZWN0TmFtZSkge1xyXG5cdFx0XHRcdFx0b3BlblBhZ2UoY29udGFpbmVyLmlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIGNvbnRhaW5lcjtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGNvbnRhaW5lcikge1xyXG5cdFx0XHRjb25zdCBwcm9qZWN0cyA9IHNpZGVCYXJDb250YWluZXIucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcblx0XHRcdGNvbnN0IHBhZ2VJbmRleCA9IGZpbmRJbmRleChjb250YWluZXIuaWQpO1xyXG5cclxuXHRcdFx0cHJvamVjdHMucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcclxuXHRcdFx0UHJvamVjdHNNb2R1bGUucmVtb3ZlUHJvamVjdChjb250YWluZXIuaWQpO1xyXG5cclxuXHRcdFx0aWYgKGN1cnJlbnRQYWdlID09PSBmaW5kUGFnZShjb250YWluZXIuaWQpKSB7XHJcblx0XHRcdFx0b3BlbkRlZmFsdXRQYWdlKCdJbmJveCcsIGdldEFsbFRhc2tzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZW1vdmVQcm9qZWN0UGFnZShwYWdlSW5kZXgpO1xyXG5cdFx0XHR1cGRhdGVEZWZhdWx0UGFnZXMoKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiB1cGRhdGVEZWZhdWx0UGFnZXMoKSB7XHJcblx0XHRcdFBhZ2VzLmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG5cdFx0XHRcdGlmIChvYmplY3QubmFtZSA9PT0gJ0luYm94Jykge1xyXG5cdFx0XHRcdFx0YXBwZW5kVGFza3MoZ2V0QWxsVGFza3MsIG9iamVjdC5wYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKG9iamVjdC5uYW1lID09PSAnVG9kYXknKSB7XHJcblx0XHRcdFx0XHRhcHBlbmRUYXNrcyhnZXRUb2RheVRhc2tzLCBvYmplY3QucGFnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChvYmplY3QubmFtZSA9PT0gJ1dlZWsnKSB7XHJcblx0XHRcdFx0XHRhcHBlbmRUYXNrcyhnZXRXZWVrVGFza3MsIG9iamVjdC5wYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHJlbW92ZVByb2plY3RQYWdlKGluZGV4KSB7XHJcblx0XHRcdFBhZ2VzLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gYWRkQWxsUHJvamVjdHMoKSB7XHJcblx0XHRcdGNvbnN0IHByb2plY3RzID0gUHJvamVjdHNNb2R1bGUuZ2V0QWxsUHJvamVjdHMoKTtcclxuXHRcdFx0Y29uc3QgcHJvamVjdHNDb250YWluZXIgPSBzaWRlQmFyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xyXG5cdFx0XHRwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcblx0XHRcdFx0cHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdChwcm9qZWN0KSk7XHJcblx0XHRcdFx0Y29uc3QgbmV3cGFnZSA9IGNyZWF0ZU5ld1BhZ2UocHJvamVjdCk7XHJcblx0XHRcdFx0UGFnZXMucHVzaChuZXdwYWdlKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gY3JlYXRlTmV3UGFnZShwcm9qZWN0KSB7XHJcblx0XHRcdGNvbnN0IG5ld1BhZ2UgPSBjcmVhdGVQYWdlKHByb2plY3QubmFtZSk7XHJcblx0XHRcdGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0XHRidG4uY2xhc3NMaXN0LmFkZCgnYnRuLWFkZCcpO1xyXG5cdFx0XHRjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdFx0XHRpY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuXHRcdFx0aWNvbi5pbm5lckhUTUwgPSBzdmdzLnBsdXM7XHJcblx0XHRcdGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblx0XHRcdHNwYW4udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xyXG5cclxuXHRcdFx0YWRkUGFnZUZ1bmN0aW9uKG5ld1BhZ2UpO1xyXG5cclxuXHRcdFx0YnRuLmFwcGVuZENoaWxkKGljb24pO1xyXG5cdFx0XHRidG4uYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0b3BlblRhc2tNb2RhbChuZXdQYWdlKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdG5ld1BhZ2UucGFnZS5hcHBlbmRDaGlsZChidG4pO1xyXG5cclxuXHRcdFx0aWYgKFByb2plY3RzTW9kdWxlLmZpbmRQcm9qZWN0KHByb2plY3QubmFtZSkpIHtcclxuXHRcdFx0XHRjb25zdCB0YXNrcyA9IGdldFByb2plY3RUYXNrcyhwcm9qZWN0Lm5hbWUpO1xyXG5cdFx0XHRcdGNvbnN0IHRhc2tzUGxhY2UgPSBuZXdQYWdlLnBhZ2UucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XHJcblxyXG5cdFx0XHRcdHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuXHRcdFx0XHRcdGxldCB0YXNrQ29udGFpbmVyID0gY3JlYXRlVGFzayh0YXNrKTtcclxuXHRcdFx0XHRcdHRhc2tzUGxhY2UuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIG5ld1BhZ2U7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gYWRkUGFnZUZ1bmN0aW9uKHBhZ2VEYXRhKSB7XHJcblx0XHRcdGNvbnN0IGhlYWRlciA9IHBhZ2VEYXRhLnBhZ2UucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xyXG5cdFx0XHRjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRcdFx0ZWRpdEljb24uaW5uZXJIVE1MID0gc3Zncy5wZW47XHJcblx0XHRcdGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuXHRcdFx0ZWRpdEljb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG5cdFx0XHRoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG5cdFx0XHRcdGVkaXRJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0aGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xyXG5cdFx0XHRcdGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdG9wZW5FZGl0UHJvamVjdE1vZGFsKHBhZ2VEYXRhLm5hbWUpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGhlYWRlci5hcHBlbmRDaGlsZChlZGl0SWNvbik7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gb3BlbkVkaXRQcm9qZWN0TW9kYWwocHJvamVjdE5hbWUpIHtcclxuXHRcdFx0Y29uc3QgbW9kYWwgPSBnZW5lcmF0ZVByb2plY3RNb2RhbCgpO1xyXG5cdFx0XHRjb25zdCBoZWFkZXIgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtaGVhZGVyJyk7XHJcblx0XHRcdGNvbnN0IGlucHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuXHRcdFx0Y29uc3Qgc2F2ZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdCcpO1xyXG5cdFx0XHRjb25zdCBjYW5jZWwgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtcHJvamVjdC1tb2RhbCcpO1xyXG5cclxuXHRcdFx0aGVhZGVyLnRleHRDb250ZW50ID0gJ0VkaXRpbmcgUHJvamVjdCc7XHJcblx0XHRcdGlucHV0LnZhbHVlID0gcHJvamVjdE5hbWU7XHJcblx0XHRcdHNhdmUudGV4dENvbnRlbnQgPSAnc2F2ZSc7XHJcblxyXG5cdFx0XHRzYXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdHVwZGF0ZVByb2plY3ROYW1lKGlucHV0LnZhbHVlLCBwcm9qZWN0TmFtZSwgbW9kYWwpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdGNsb3NlTW9kYWwobW9kYWwpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHBhZ2UuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG5cdFx0XHRpbnB1dC5mb2N1cygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHVwZGF0ZVByb2plY3ROYW1lKG5ld05hbWUsIHByb2plY3ROYW1lLCBtb2RhbCkge1xyXG5cdFx0XHRpZiAoIWlzdmFsaWRQcm9qZWN0KG5ld05hbWUpICYmIG5ld05hbWUgIT09IHByb2plY3ROYW1lKSB7XHJcblx0XHRcdFx0YWxlcnQoJ1Byb2plY3QgbmFtZSBhbHJlYWR5IGV4aXN0IG9yIGlzIGEgaW52YWxpZCBuYW1lJyk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIW5ld05hbWUpIHJldHVybjtcclxuXHJcblx0XHRcdGNvbnN0IHByb2plY3QgPSBQcm9qZWN0c01vZHVsZS5maW5kUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcblx0XHRcdFByb2plY3RzTW9kdWxlLnNldFByb2plY3ROYW1lKHByb2plY3QsIG5ld05hbWUpO1xyXG5cdFx0XHRjb25zdCBwYWdlSW5kZXggPSBQYWdlcy5maW5kSW5kZXgoKHBhZ2UpID0+IHBhZ2UubmFtZSA9PT0gcHJvamVjdE5hbWUpO1xyXG5cdFx0XHRjb25zdCBuZXdQYWdlID0gY3JlYXRlTmV3UGFnZShwcm9qZWN0KTtcclxuXHRcdFx0UGFnZXMuc3BsaWNlKHBhZ2VJbmRleCwgMSwgbmV3UGFnZSk7XHJcblx0XHRcdHVwZGF0ZVNpZGViYXIoKTtcclxuXHRcdFx0b3BlblBhZ2UobmV3UGFnZS5uYW1lKTtcclxuXHRcdFx0Y2xvc2VNb2RhbChtb2RhbCk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gdXBkYXRlU2lkZWJhcigpIHtcclxuXHRcdFx0Y29uc3QgcHJvamVjdHMgPSBQcm9qZWN0c01vZHVsZS5nZXRBbGxQcm9qZWN0cygpO1xyXG5cdFx0XHRjb25zdCBwcm9qZWN0c1RyaWdnZXJzID0gc2lkZUJhckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuXHRcdFx0cHJvamVjdHNUcmlnZ2Vycy5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0cHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG5cdFx0XHRcdHByb2plY3RzVHJpZ2dlcnMuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdChwcm9qZWN0KSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldFByb2plY3RUYXNrcyhwcm9qZWN0TmFtZSkge1xyXG5cdFx0XHRjb25zdCBwcm9qZWN0ID0gUHJvamVjdHNNb2R1bGUuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcblx0XHRcdGNvbnN0IHRhc2tzID0gcHJvamVjdC5nZXRUYXNrcygpO1xyXG5cdFx0XHRyZXR1cm4gdGFza3M7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gb3BlblRhc2tNb2RhbChwYWdlRGF0YSkge1xyXG5cdFx0XHRjb25zdCBtb2RhbCA9IGdlbmVyYXRlVGFza01vZGFsKCk7XHJcblx0XHRcdGFkZEV2ZW50c1Rhc2tNb2RhbChtb2RhbCwgcGFnZURhdGEpO1xyXG5cdFx0XHRwYWdlLmFwcGVuZENoaWxkKG1vZGFsKTtcclxuXHRcdFx0bW9kYWwucXVlcnlTZWxlY3RvcignI3RpdGxlJykuZm9jdXMoKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBhZGRFdmVudHNUYXNrTW9kYWwobW9kYWwsIHBhZ2VEYXRhKSB7XHJcblx0XHRcdGNvbnN0IGFkZEJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrJyk7XHJcblx0XHRcdGNvbnN0IGNhbmNlbEJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZU1vZGFsJyk7XHJcblx0XHRcdGNvbnN0IGlucHV0cyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1jb250YWluZXInKTtcclxuXHJcblx0XHRcdGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0XHRhZGRUYXNrKGlucHV0cywgcGFnZURhdGEpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdGNsb3NlTW9kYWwobW9kYWwpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBhZGRUYXNrKGlucHV0cywgcGFnZURhdGEpIHtcclxuXHRcdFx0Y29uc3QgdGl0bGUgPSBpbnB1dHMucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XHJcblx0XHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gaW5wdXRzLnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xyXG5cdFx0XHRjb25zdCBkYXRlID0gaW5wdXRzLnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XHJcblx0XHRcdGNvbnN0IHByaW9yaXR5ID0gaW5wdXRzLnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xyXG5cdFx0XHRjb25zdCBwcm9qZWN0ID0gUHJvamVjdHNNb2R1bGUuZ2V0UHJvamVjdChwYWdlRGF0YS5uYW1lKTtcclxuXHJcblx0XHRcdGlmICghdGl0bGUudmFsdWUpIHtcclxuXHRcdFx0XHRhbGVydCgnVGhlIHRhc2sgbXVzdCBoYXZlIGF0IGxlYXN0IGEgdGl0bGUnKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChwcm9qZWN0LmZpbmRUYXNrKHRpdGxlLnZhbHVlKSkge1xyXG5cdFx0XHRcdGFsZXJ0KCdUaGUgdGFzayB0aXRsZSBhbHJlYWR5IGV4aXN0Jyk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwcm9qZWN0LmFkZFRhc2soXHJcblx0XHRcdFx0dGl0bGUudmFsdWUsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb24udmFsdWUsXHJcblx0XHRcdFx0ZGF0ZS52YWx1ZSxcclxuXHRcdFx0XHRwcmlvcml0eS52YWx1ZVxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0Y2xlYXJJbnB1dHMoW3RpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZV0pO1xyXG5cdFx0XHRwcmlvcml0eS52YWx1ZSA9ICdwMSc7XHJcblx0XHRcdHVwZGF0ZVBhZ2UocGFnZURhdGEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGNsZWFySW5wdXRzKGlucHV0cykge1xyXG5cdFx0XHRpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IChpbnB1dC52YWx1ZSA9ICcnKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xyXG5cdFx0XHRwYWdlLnJlbW92ZUNoaWxkKG1vZGFsKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiB1cGRhdGVQYWdlKHBhZ2VEYXRhKSB7XHJcblx0XHRcdGNvbnN0IHRhc2tDb250YWluZXIgPSBwYWdlRGF0YS5wYWdlLnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xyXG5cdFx0XHRjb25zdCB0YXNrcyA9IFByb2plY3RzTW9kdWxlLmdldFByb2plY3QocGFnZURhdGEubmFtZSkuZ2V0VGFza3MoKTtcclxuXHJcblx0XHRcdHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cdFx0XHR0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcblx0XHRcdFx0dGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUYXNrKHRhc2spKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gb3BlblBhZ2UocGFnZU5hbWUpIHtcclxuXHRcdFx0Y29uc3QgcHJvamVjdFBhZ2UgPSBmaW5kUGFnZShwYWdlTmFtZSk7XHJcblx0XHRcdGNsb3NlQ3VycmVudHBhZ2UoKTtcclxuXHRcdFx0Y3VycmVudFBhZ2UgPSBwcm9qZWN0UGFnZTtcclxuXHRcdFx0cGFnZS5hcHBlbmRDaGlsZChwcm9qZWN0UGFnZSk7XHJcblx0XHRcdGFjdGl2ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGlzSW52YWxpZE5hbWUobmFtZSkge1xyXG5cdFx0XHRjb25zdCBpc1ZhbGlkID0gUGFnZXMuZmluZChcclxuXHRcdFx0XHQocGFnZSkgPT4gcGFnZS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKVxyXG5cdFx0XHQpXHJcblx0XHRcdFx0PyB0cnVlXHJcblx0XHRcdFx0OiBmYWxzZTtcclxuXHJcblx0XHRcdHJldHVybiBpc1ZhbGlkO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGlzdmFsaWRQcm9qZWN0KG5hbWUpIHtcclxuXHRcdFx0aWYgKGlzSW52YWxpZE5hbWUobmFtZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGluaXQoKSB7XHJcblx0XHRcdGNyZWF0ZURlZmFsdXRQYWdlcygpO1xyXG5cdFx0XHRhZGREZWZhbHV0UHJvamVjdHNFdmVudHMoKTtcclxuXHRcdFx0b3BlbkRlZmFsdXRQYWdlKCdJbmJveCcsIGdldEFsbFRhc2tzKTtcclxuXHRcdFx0YWRkQWxsUHJvamVjdHMoKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRpbml0LFxyXG5cdFx0XHRhcHBlbmRQcm9qZWN0LFxyXG5cdFx0XHRpc3ZhbGlkUHJvamVjdCxcclxuXHRcdH07XHJcblx0fSkoKTtcclxuXHJcblx0ZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcclxuXHRcdGxldCBuYW1lID0gcHJvamVjdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWU7XHJcblx0XHRpZiAoIW5hbWUpIHJldHVybjtcclxuXHRcdGlmICghY2hhbmdlUGFnZU1vZHVsZS5pc3ZhbGlkUHJvamVjdChuYW1lKSkge1xyXG5cdFx0XHRhbGVydCgnUHJvamVjdCBuYW1lIGFscmVhZHkgZXhpc3Qgb3IgaXMgYSBpbnZhbGlkIG5hbWUnKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdFByb2plY3RzTW9kdWxlLmFkZFByb2plY3QobmFtZSk7XHJcblx0XHRjaGFuZ2VQYWdlTW9kdWxlLmFwcGVuZFByb2plY3QoUHJvamVjdHNNb2R1bGUuZ2V0UHJvamVjdChuYW1lKSk7XHJcblx0XHRjbG9zZVByb2plY3RNb2RhbCgpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGluaXQsXHJcblx0fTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IFVJIH07XHJcbiIsImltcG9ydCAnLi4vLi4vc3R5bGUvbW9kYWwuY3NzJztcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlTW9kYWwoKSB7XHJcblx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Y29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRhaW5lcicpO1xyXG5cclxuXHRjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcblxyXG5cdGNvbnN0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0bW9kYWxIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJyk7XHJcblxyXG5cdGNvbnN0IGNvbnRlbnRNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGNvbnRlbnRNb2RhbC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LW1vZGFsJyk7XHJcblxyXG5cdGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0aW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XHJcblxyXG5cdGNvbnN0IGJ0bnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRidG5zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J0bnMtY29udGFpbmVyJyk7XHJcblxyXG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XHJcblx0bW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxIZWFkZXIpO1xyXG5cdG1vZGFsLmFwcGVuZENoaWxkKGNvbnRlbnRNb2RhbCk7XHJcblx0Y29udGVudE1vZGFsLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKTtcclxuXHRjb250ZW50TW9kYWwuYXBwZW5kQ2hpbGQoYnRuc0NvbnRhaW5lcik7XHJcblxyXG5cdHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdlbmVyYXRlTW9kYWwgfTtcclxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlL21vZGFsLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RNb2RhbCgpIHtcclxuXHRjb25zdCBtb2RhbCA9IGdlbmVyYXRlTW9kYWwoKTtcclxuXHRjb25zdCBpbnB1dHMgPSBjcmVhdGVJbnB1dHMoKTtcclxuXHRjb25zdCBidG5zID0gY3JlYXRlQnRucygpO1xyXG5cclxuXHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtaGVhZGVyJykudGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xyXG5cdG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1jb250YWluZXInKS5hcHBlbmRDaGlsZChpbnB1dHMpO1xyXG5cdGJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcblx0XHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcuYnRucy1jb250YWluZXInKS5hcHBlbmRDaGlsZChidG4pO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gbW9kYWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUlucHV0cygpIHtcclxuXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmllbGQnKTtcclxuXHJcblx0Y29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5cdGxhYmVsLmh0bWxGb3IgPSAnI25hbWUnO1xyXG5cdGxhYmVsLnRleHRDb250ZW50ID0gJ05hbWUnO1xyXG5cclxuXHRjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0aW5wdXQuaWQgPSAnbmFtZSc7XHJcblxyXG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcclxuXHJcblx0cmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQnRucygpIHtcclxuXHRsZXQgYnRucyA9IFtdO1xyXG5cclxuXHRjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRjYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuXHRjYW5jZWwuaWQgPSAnY2xvc2UtcHJvamVjdC1tb2RhbCc7XHJcblxyXG5cdGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdGFkZC50ZXh0Q29udGVudCA9ICdBZGQnO1xyXG5cdGFkZC5pZCA9ICdhZGQtcHJvamVjdCc7XHJcblx0YWRkLmNsYXNzTGlzdC5hZGQoJ2JsdWUnKTtcclxuXHJcblx0YnRucy5wdXNoKGNhbmNlbCk7XHJcblx0YnRucy5wdXNoKGFkZCk7XHJcblxyXG5cdHJldHVybiBidG5zO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZW5lcmF0ZVByb2plY3RNb2RhbCB9O1xyXG4iLCJpbXBvcnQgeyBnZW5lcmF0ZU1vZGFsIH0gZnJvbSAnLi9tb2RhbC5qcyc7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVRhc2tNb2RhbCgpIHtcclxuXHRjb25zdCBtb2RhbCA9IGdlbmVyYXRlTW9kYWwoKTtcclxuXHRjb25zdCBoZWFkZXIgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtaGVhZGVyJyk7XHJcblx0Y29uc3QgaW5wdXRzQ29udGFpbmVyID0gbW9kYWwucXVlcnlTZWxlY3RvcignLmlucHV0LWNvbnRhaW5lcicpO1xyXG5cdGNvbnN0IGlucHV0c0RhdGEgPSBbXHJcblx0XHR7XHJcblx0XHRcdHR5cGU6ICd0ZXh0JyxcclxuXHRcdFx0aWQ6ICd0aXRsZScsXHJcblx0XHRcdHRpdGxlOiAnVGl0bGUnLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0dHlwZTogJ3RleHQnLFxyXG5cdFx0XHRpZDogJ2Rlc2NyaXB0aW9uJyxcclxuXHRcdFx0dGl0bGU6ICdEZXNjcmlwdGlvbicsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR0eXBlOiAnZGF0ZScsXHJcblx0XHRcdGlkOiAnZHVlRGF0ZScsXHJcblx0XHRcdHRpdGxlOiAnZHVlRGF0ZScsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR0eXBlOiAnc2VsZWN0JyxcclxuXHRcdFx0aWQ6ICdwcmlvcml0eScsXHJcblx0XHRcdHRpdGxlOiAncHJpb3JpdHknLFxyXG5cdFx0XHRvcHRpb25zOiBbJ3AxJywgJ3AyJywgJ3AzJ10sXHJcblx0XHR9LFxyXG5cdF07XHJcblxyXG5cdGNvbnN0IGlucHV0c0hUTUwgPSBbXHJcblx0XHRjcmVhdGVJbnB1dChpbnB1dHNEYXRhWzBdKSxcclxuXHRcdGNyZWF0ZUlucHV0KGlucHV0c0RhdGFbMV0pLFxyXG5cdFx0Y3JlYXRlSW5wdXQoaW5wdXRzRGF0YVsyXSksXHJcblx0XHRjcmVhdGVTZWxlY3RJbnB1dChpbnB1dHNEYXRhWzNdKSxcclxuXHRdO1xyXG5cclxuXHRoZWFkZXIudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xyXG5cclxuXHRjb25zdCBhZGRCdG4gPSBjcmVhdGVBZGRCdG4oKTtcclxuXHRjb25zdCBjYW5jZWxCdG4gPSBjcmVhdGVDYW5jZWxCdG4oKTtcclxuXHJcblx0bW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bnMtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcclxuXHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcuYnRucy1jb250YWluZXInKS5hcHBlbmRDaGlsZChhZGRCdG4pO1xyXG5cclxuXHRpbnB1dHNIVE1MLmZvckVhY2goKGlucHV0KSA9PiBpbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpKTtcclxuXHJcblx0cmV0dXJuIG1vZGFsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCYXNpY0lucHV0RmllbGQob2JqKSB7XHJcblx0Y29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRmaWVsZC5jbGFzc0xpc3QuYWRkKCdmaWVsZCcpO1xyXG5cclxuXHRjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcblx0bGFiZWwudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XHJcblx0bGFiZWwuaHRtbEZvciA9IG9iai5pZDtcclxuXHJcblx0ZmllbGQuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG5cclxuXHRyZXR1cm4gZmllbGQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUlucHV0KG9iaikge1xyXG5cdGNvbnN0IGJhc2ljSW5wdXQgPSBjcmVhdGVCYXNpY0lucHV0RmllbGQob2JqKTtcclxuXHJcblx0Y29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdGlucHV0LnR5cGUgPSBvYmoudHlwZTtcclxuXHRpbnB1dC5pZCA9IG9iai5pZDtcclxuXHJcblx0YmFzaWNJbnB1dC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcblxyXG5cdHJldHVybiBiYXNpY0lucHV0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RJbnB1dChvYmopIHtcclxuXHRjb25zdCBiYXNpY0lucHV0ID0gY3JlYXRlQmFzaWNJbnB1dEZpZWxkKG9iaik7XHJcblx0Y29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcblx0c2VsZWN0LmlkID0gb2JqLmlkO1xyXG5cclxuXHRvYmoub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG5cdFx0Y29udGFpbmVyLnRleHRDb250ZW50ID0gb3B0aW9uO1xyXG5cdFx0c2VsZWN0LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblx0fSk7XHJcblxyXG5cdGJhc2ljSW5wdXQuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcclxuXHJcblx0cmV0dXJuIGJhc2ljSW5wdXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFkZEJ0bigpIHtcclxuXHRjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRidG4uY2xhc3NMaXN0LmFkZCgnYmx1ZScpO1xyXG5cdGJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xyXG5cdGJ0bi5pZCA9ICdhZGRUYXNrJztcclxuXHJcblx0cmV0dXJuIGJ0bjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FuY2VsQnRuKCkge1xyXG5cdGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdGJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG5cdGJ0bi5pZCA9ICdjbG9zZU1vZGFsJztcclxuXHJcblx0cmV0dXJuIGJ0bjtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVUYXNrTW9kYWwgfTtcclxuIiwiaW1wb3J0IHsgc3ZncyB9IGZyb20gJy4uL3N2Z3Mvc3Zncy5qcyc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGUvc2lkZS1iYXIuY3NzJztcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU2lkZUJhcigpIHtcclxuXHRjb25zdCBzaWRlQmFyU2hhZG93ID0gY3JlYXRlU2lkZVNoYWRvdygpO1xyXG5cdGNvbnN0IHNpZGVCYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRzaWRlQmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGUtYmFyLWNvbnRhaW5lcicpO1xyXG5cdHNpZGVCYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG5cclxuXHRjb25zdCBzaWRlQmFyID0gY3JlYXRlU2lkZUJhcigpO1xyXG5cdHNpZGVCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XHJcblxyXG5cdHJldHVybiBbc2lkZUJhckNvbnRhaW5lciwgc2lkZUJhclNoYWRvd107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNpZGVTaGFkb3coKSB7XHJcblx0Y29uc3Qgc2hhZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0c2hhZG93LmNsYXNzTGlzdC5hZGQoJ3NpZGUtYmFyLXNoYWRvdycpO1xyXG5cclxuXHRyZXR1cm4gc2hhZG93O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTaWRlQmFyKCkge1xyXG5cdGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGUtYmFyJyk7XHJcblxyXG5cdGNvbnN0IG9wdGlvbnNDb250YWluZXIgPSBjcmVhdGVPcHRpb25zQ29udGFpbmVyKCk7XHJcblx0Y29uc3QgcHJvamVjdHNDb250YWluZXIgPSBjcmVhdGVQcm9qY3RzQ29udGFpbmVyKCk7XHJcblxyXG5cdHNpZGVCYXIuYXBwZW5kQ2hpbGQob3B0aW9uc0NvbnRhaW5lcik7XHJcblx0c2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XHJcblxyXG5cdHJldHVybiBzaWRlQmFyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPcHRpb25zQ29udGFpbmVyKCkge1xyXG5cdGNvbnN0IG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRvcHRpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N0YW5kYXJkLW9wdGlvbnMnKTtcclxuXHJcblx0bGV0IG9wdGlvbnMgPSBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdJbmJveCcsXHJcblx0XHRcdGljb246ICdpbmJveCcsXHJcblx0XHRcdGlkOiAnaW5ib3gnLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ1RvZGF5JyxcclxuXHRcdFx0aWNvbjogJ3RvZGF5JyxcclxuXHRcdFx0aWQ6ICd0b2RheScsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnVGhpcyB3ZWVrJyxcclxuXHRcdFx0aWNvbjogJ2NhbGVuZGFyJyxcclxuXHRcdFx0aWQ6ICd3ZWVrJyxcclxuXHRcdH0sXHJcblx0XTtcclxuXHJcblx0b3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuXHRcdGNvbnN0IG9wdGlvbkNvbnRhaW5lciA9IGNyZWF0ZU9wdGlvbihvcHRpb24pO1xyXG5cdFx0b3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25Db250YWluZXIpO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gb3B0aW9uc0NvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uKG9wdGlvbikge1xyXG5cdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvcHRpb24nKTtcclxuXHRjb250YWluZXIuaWQgPSBvcHRpb24uaWQ7XHJcblxyXG5cdGNvbnN0IHNwYW5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdHNwYW5JY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuXHRzcGFuSWNvbi5pbm5lckhUTUwgPSBzdmdzW29wdGlvbi5pY29uXTtcclxuXHJcblx0Y29uc3Qgc3Bhbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblx0c3Bhbk5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xyXG5cdHNwYW5OYW1lLnRleHRDb250ZW50ID0gb3B0aW9uLm5hbWU7XHJcblxyXG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuSWNvbik7XHJcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW5OYW1lKTtcclxuXHJcblx0cmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamN0c0NvbnRhaW5lcigpIHtcclxuXHRjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWNvbnRhaW5lcicpO1xyXG5cclxuXHRjb25zdCBwcm9qZWN0c0hlYWRlciA9IGNyZWF0ZVByb2plY3RzSGVhZGVyKCk7XHJcblx0Y29uc3QgcHJvamVjdHMgPSBjcmVhdGVQcm9qZWN0cygpO1xyXG5cclxuXHRwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlcik7XHJcblx0cHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xyXG5cclxuXHRyZXR1cm4gcHJvamVjdHNDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzSGVhZGVyKCkge1xyXG5cdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1oZWFkZXInKTtcclxuXHRoZWFkZXIudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xyXG5cclxuXHRjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdHNwYW4uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG5cdHNwYW4uaWQgPSAncHJvamVjdC1tb2RhbCdcclxuXHRzcGFuLmlubmVySFRNTCA9IHN2Z3MucGx1cztcclxuXHJcblx0aGVhZGVyLmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuXHRyZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0cygpIHtcclxuXHRjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzJyk7XHJcblxyXG5cdHJldHVybiBwcm9qZWN0cztcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVTaWRlQmFyIH07XHJcbiIsImNvbnN0IHN2Z3MgPSB7XHJcblx0Y2xvc2U6XHJcblx0XHQnPHN2ZyB3aWR0aD1cIjgwMHB4XCIgaGVpZ2h0PVwiODAwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGcgaWQ9XCJNZW51XCI+PHBhdGggaWQ9XCJWZWN0b3JcIiBkPVwiTTE2IDE2TDEyIDEyTTEyIDEyTDggOE0xMiAxMkwxNiA4TTEyIDEyTDggMTZcIiBzdHJva2Utd2lkdGg9XCIxXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPjwvZz48L3N2Zz4nLFxyXG5cdHRvZGF5OlxyXG5cdFx0Jzxzdmcgd2lkdGg9XCIyMHB4XCJoZWlnaHQ9XCIyMHB4XCJ2aWV3Qm94PVwiMCAwIDUxMiAgICAgICAgIDUxMlwieG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxyZWN0IGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyMFwiIHg9XCI0OFwiIHk9XCI4MFwiIHdpZHRoPVwiNDE2XCIgaGVpZ2h0PVwiMzg0XCIgcng9XCI0OFwiLz48bGluZSBmaWxsPVwibm9uZVwiICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjI1XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHgxPVwiMTI4XCIgeTE9XCI0OFwiIHgyPVwiMTI4XCIgeTI9XCI4MFwiLz48bGluZSBmaWxsPVwibm9uZVwiIHMgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyMFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiB4MT1cIjM4NFwiIHkxPVwiNDhcIiB4Mj1cIjM4NFwiIHkyPVwiODBcIi8+PHJlY3QgZmlsbD1cIm5vbmVcInN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJzdHJva2Utd2lkdGg9XCIzMFwic3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwieD1cIjExMlwieT1cIjIyNFwid2lkdGg9XCI5NlwiaGVpZ2h0PVwiOTZcInJ4PVwiMTNcIi8+PGxpbmUgZmlsbD1cIm5vbmVcIiAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyMFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiB4MT1cIjQ2NFwiIHkxPVwiMTYwXCIgeDI9XCI0OFwiIHkyPVwiMTYwXCIvPjwvc3ZnPicsXHJcblx0aW5ib3g6XHJcblx0XHQnPHN2ZyB3aWR0aD1cIjY0cHhcIiBoZWlnaHQ9XCI2NHB4XCIgdmlld0JveD1cIjAgMCAyMy4wMCAyNC4wMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHRyYW5zZm9ybT1cIm1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiPjxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMVwiPjwvZz48ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj4gPHBhdGggZD1cIk0zIDEySDguNUwxMCAxNUgxNEwxNiAxMkgyMU0zIDEyVjE4QzMgMTkuMTA0NiAzLjg5NTQzIDIwIDUgMjBIMTlDMjAuMTA0NiAyMCAyMSAxOS4xMDQ2IDIxIDE4VjEyTTMgMTJMNS43NTY2NyA0LjY0ODg4QzUuOTAzMDQgNC4yNTg1NyA2LjI3NjE2IDQgNi42OTMgNEgxNy4zMDdDMTcuNzIzOCA0IDE4LjA5NyA0LjI1ODU3IDE4LjI0MzMgNC42NDg4OEwyMSAxMlwiIHN0cm9rZS13aWR0aD1cIjFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBmaWxsPVwibm9uZVwiPjwvcGF0aD4gPC9nPjwvc3ZnPicsXHJcblx0Y2FsZW5kYXI6XHJcblx0XHQnPHN2ZyBmaWxsPVwiIzAwMDAwMFwiIHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCI4MDBweFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMjY2LjgxNSA1MzcuNzA4YzAgMjIuNjItMTguMzQgNDAuOTYtNDAuOTYgNDAuOTZzLTQwLjk2LTE4LjM0LTQwLjk2LTQwLjk2IDE4LjM0LTQwLjk2IDQwLjk2LTQwLjk2IDQwLjk2IDE4LjM0IDQwLjk2IDQwLjk2em0xODIuNzcgMGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnptMTgyLjc3NSAwYzAgMjIuNjItMTguMzQgNDAuOTYtNDAuOTYgNDAuOTZzLTQwLjk2LTE4LjM0LTQwLjk2LTQwLjk2IDE4LjM0LTQwLjk2IDQwLjk2LTQwLjk2IDQwLjk2IDE4LjM0IDQwLjk2IDQwLjk2em0xODIuNzcgMGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnpNMjY2LjgxNSA2NzkuMzQ3YzAgMjIuNjItMTguMzQgNDAuOTYtNDAuOTYgNDAuOTZzLTQwLjk2LTE4LjM0LTQwLjk2LTQwLjk2IDE4LjM0LTQwLjk2IDQwLjk2LTQwLjk2IDQwLjk2IDE4LjM0IDQwLjk2IDQwLjk2em0xODIuNzcgMGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnptMTgyLjc3NSAwYzAgMjIuNjItMTguMzQgNDAuOTYtNDAuOTYgNDAuOTZzLTQwLjk2LTE4LjM0LTQwLjk2LTQwLjk2IDE4LjM0LTQwLjk2IDQwLjk2LTQwLjk2IDQwLjk2IDE4LjM0IDQwLjk2IDQwLjk2em0xODIuNzcgMGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnpNMjY2LjgxNSA4MjAuOTg4YzAgMjIuNjItMTguMzQgNDAuOTYtNDAuOTYgNDAuOTZzLTQwLjk2LTE4LjM0LTQwLjk2LTQwLjk2IDE4LjM0LTQwLjk2IDQwLjk2LTQwLjk2IDQwLjk2IDE4LjM0IDQwLjk2IDQwLjk2em0xODIuNzcgMGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnptMTgyLjc3NSAwYzAgMjIuNjItMTguMzQgNDAuOTYtNDAuOTYgNDAuOTZzLTQwLjk2LTE4LjM0LTQwLjk2LTQwLjk2IDE4LjM0LTQwLjk2IDQwLjk2LTQwLjk2IDQwLjk2IDE4LjM0IDQwLjk2IDQwLjk2em0xODIuNzcgMGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnpNMjI4LjE4IDgxLjkxOHYxNTMuNmMwIDExLjMxMSA5LjE2OSAyMC40OCAyMC40OCAyMC40OHMyMC40OC05LjE2OSAyMC40OC0yMC40OHYtMTUzLjZjMC0xMS4zMTEtOS4xNjktMjAuNDgtMjAuNDgtMjAuNDhzLTIwLjQ4IDkuMTY5LTIwLjQ4IDIwLjQ4em01MjguMDkgMHYxNTMuNmMwIDExLjMxMSA5LjE2OSAyMC40OCAyMC40OCAyMC40OHMyMC40OC05LjE2OSAyMC40OC0yMC40OHYtMTUzLjZjMC0xMS4zMTEtOS4xNjktMjAuNDgtMjAuNDgtMjAuNDhzLTIwLjQ4IDkuMTY5LTIwLjQ4IDIwLjQ4elwiLz48cGF0aCBkPVwiTTg5MC44NzcgMTM3LjUxN2MzMy45MzEgMCA2MS40NCAyNy41MDkgNjEuNDQgNjEuNDR2NzAzLjM3NWMwIDMzLjkzMS0yNy41MDkgNjEuNDQtNjEuNDQgNjEuNDRoLTc1Ny43NmMtMzMuOTMxIDAtNjEuNDQtMjcuNTA5LTYxLjQ0LTYxLjQ0VjE5OC45NTdjMC0zMy45MzEgMjcuNTA5LTYxLjQ0IDYxLjQ0LTYxLjQ0aDc1Ny43NnptLTc1Ny43NiA0MC45NmMtMTEuMzA5IDAtMjAuNDggOS4xNzEtMjAuNDggMjAuNDh2NzAzLjM3NWMwIDExLjMwOSA5LjE3MSAyMC40OCAyMC40OCAyMC40OGg3NTcuNzZjMTEuMzA5IDAgMjAuNDgtOS4xNzEgMjAuNDgtMjAuNDhWMTk4Ljk1N2MwLTExLjMwOS05LjE3MS0yMC40OC0yMC40OC0yMC40OGgtNzU3Ljc2elwiLz48cGF0aCBkPVwiTTU3NS4wMyAzMzguMjg4YzAtMzMuOTMtMjcuNTEtNjEuNDQtNjEuNDQtNjEuNDRzLTYxLjQ0IDI3LjUxLTYxLjQ0IDYxLjQ0YzAgMzMuOTMgMjcuNTEgNjEuNDQgNjEuNDQgNjEuNDRzNjEuNDQtMjcuNTEgNjEuNDQtNjEuNDR6bTQwLjk2IDBjMCA1Ni41NTEtNDUuODQ5IDEwMi40LTEwMi40IDEwMi40cy0xMDIuNC00NS44NDktMTAyLjQtMTAyLjRjMC01Ni41NTEgNDUuODQ5LTEwMi40IDEwMi40LTEwMi40czEwMi40IDQ1Ljg0OSAxMDIuNCAxMDIuNHpcIi8+PC9zdmc+JyxcclxuXHRwbHVzOiAnPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNiwgNilcIj48cGF0aCBkPVwiTTYgNVYuNWEuNS41IDAgMDExIDBWNmg1LjVhLjUuNSAwIDExMCAxSDd2NS41YS41LjUgMCAxMS0xIDBWN0guNWEuNS41IDAgMDEwLTFINnpcIiBmaWxsLXJ1bGU9XCJyb3VuZFwiPjwvcGF0aD48L2c+PC9zdmc+JyxcclxuXHRtZW51OiAnPHN2ZyB3aWR0aD1cIjgwMHB4XCIgaGVpZ2h0PVwiODAwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNCAxN0g4TTEyIDE3SDIwTTQgMTJIMjBNNCA3SDEyTTE2IDdIMjBcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+PC9zdmc+JyxcclxuXHRzZWFyY2g6XHJcblx0XHQnPHN2ZyB3aWR0aD1cIjgwMHB4XCIgaGVpZ2h0PVwiODAwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEwIDVDNy4yMzg1OCA1IDUgNy4yMzg1OCA1IDEwQzUgMTIuNzYxNCA3LjIzODU4IDE1IDEwIDE1QzExLjM4MSAxNSAxMi42Mjk2IDE0LjQ0MTUgMTMuNTM1NSAxMy41MzU1QzE0LjQ0MTUgMTIuNjI5NiAxNSAxMS4zODEgMTUgMTBDMTUgNy4yMzg1OCAxMi43NjE0IDUgMTAgNVpNMyAxMEMzIDYuMTM0MDEgNi4xMzQwMSAzIDEwIDNDMTMuODY2IDMgMTcgNi4xMzQwMSAxNyAxMEMxNyAxMS41NzE5IDE2LjQ4MSAxMy4wMjM5IDE1LjYwNjMgMTQuMTkyMUwyMC43MDcxIDE5LjI5MjlDMjEuMDk3NiAxOS42ODM0IDIxLjA5NzYgMjAuMzE2NiAyMC43MDcxIDIwLjcwNzFDMjAuMzE2NiAyMS4wOTc2IDE5LjY4MzQgMjEuMDk3NiAxOS4yOTI5IDIwLjcwNzFMMTQuMTkyMSAxNS42MDYzQzEzLjAyMzkgMTYuNDgxIDExLjU3MTkgMTcgMTAgMTdDNi4xMzQwMSAxNyAzIDEzLjg2NiAzIDEwWlwiIC8+PC9zdmc+JyxcclxuXHRzdW46ICc8c3ZnIHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCI4MDBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cInllbGxvd1wiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNS4wOTY3N1wiLz48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIuOTU1NiAzLjA4MDY1QzEyLjk1NTYgMi41NTI4NiAxMi41Mjc3IDIuMTI1IDEyIDIuMTI1QzExLjQ3MjIgMi4xMjUgMTEuMDQ0MyAyLjU1Mjg2IDExLjA0NDMgMy4wODA2NUwxMS4wNDQzIDUuNjQwNzhDMTEuMzU2MSA1LjU5NDMyIDExLjY3NTMgNS41NzAyNCAxMiA1LjU3MDI0QzEyLjMyNDcgNS41NzAyNCAxMi42NDM4IDUuNTk0MzEgMTIuOTU1NiA1LjY0MDc2TDEyLjk1NTYgMy4wODA2NVpNMTIuOTU1NiAxOC4zNTk0QzEyLjY0MzggMTguNDA1OSAxMi4zMjQ3IDE4LjQyOTkgMTIgMTguNDI5OUMxMS42NzUzIDE4LjQyOTkgMTEuMzU2MSAxOC40MDU4IDExLjA0NDMgMTguMzU5NEwxMS4wNDQzIDIwLjkxOTRDMTEuMDQ0MyAyMS40NDcxIDExLjQ3MjIgMjEuODc1IDEyIDIxLjg3NUMxMi41Mjc3IDIxLjg3NSAxMi45NTU2IDIxLjQ0NzEgMTIuOTU1NiAyMC45MTk0TDEyLjk1NTYgMTguMzU5NFpcIiAvPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yMC45MTk0IDEyLjk1NTZDMjEuNDQ3MSAxMi45NTU2IDIxLjg3NSAxMi41Mjc3IDIxLjg3NSAxMkMyMS44NzUgMTEuNDcyMiAyMS40NDcxIDExLjA0NDMgMjAuOTE5NCAxMS4wNDQzTDE4LjM1OTIgMTEuMDQ0M0MxOC40MDU3IDExLjM1NjEgMTguNDI5OCAxMS42NzUzIDE4LjQyOTggMTJDMTguNDI5OCAxMi4zMjQ3IDE4LjQwNTcgMTIuNjQzOCAxOC4zNTkyIDEyLjk1NTZMMjAuOTE5NCAxMi45NTU2Wk01LjY0MDYgMTIuOTU1NkM1LjU5NDE1IDEyLjY0MzggNS41NzAwOCAxMi4zMjQ3IDUuNTcwMDggMTJDNS41NzAwOCAxMS42NzUzIDUuNTk0MTYgMTEuMzU2MSA1LjY0MDYyIDExLjA0NDNMMy4wODA2NCAxMS4wNDQzQzIuNTUyODYgMTEuMDQ0MyAyLjEyNSAxMS40NzIyIDIuMTI1IDEyQzIuMTI1IDEyLjUyNzcgMi41NTI4NiAxMi45NTU2IDMuMDgwNjQgMTIuOTU1Nkw1LjY0MDYgMTIuOTU1NlpcIiAvPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xOC45ODI4IDYuMzY4NzZDMTkuMzU2IDUuOTk1NTUgMTkuMzU2IDUuMzkwNDcgMTguOTgyOCA1LjAxNzI3QzE4LjYwOTYgNC42NDQwNyAxOC4wMDQ1IDQuNjQ0MDcgMTcuNjMxMyA1LjAxNzI3TDE1LjgyMDkgNi44Mjc2NEMxNi4wNzQzIDcuMDE1MjggMTYuMzE2OSA3LjIyMzkxIDE2LjU0NjYgNy40NTM1NEMxNi43NzYyIDcuNjgzMTUgMTYuOTg0OCA3LjkyNTgxIDE3LjE3MjQgOC4xNzkxMkwxOC45ODI4IDYuMzY4NzZaTTguMTc4OTggMTcuMTcyNUM3LjkyNTY3IDE2Ljk4NDkgNy42ODMwMiAxNi43NzYzIDcuNDUzNDEgMTYuNTQ2N0M3LjIyMzc4IDE2LjMxNzEgNy4wMTUxNCAxNi4wNzQ0IDYuODI3NTEgMTUuODIxMUw1LjAxNzQyIDE3LjYzMTFDNC42NDQyMiAxOC4wMDQzIDQuNjQ0MjIgMTguNjA5NCA1LjAxNzQyIDE4Ljk4MjZDNS4zOTA2MiAxOS4zNTU4IDUuOTk1NyAxOS4zNTU4IDYuMzY4OTEgMTguOTgyNkw4LjE3ODk4IDE3LjE3MjVaXCIgLz48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNi4zNjg4OCA1LjAxNzIyQzUuOTk1NjggNC42NDQwMiA1LjM5MDYgNC42NDQwMiA1LjAxNzM5IDUuMDE3MjJDNC42NDQxOSA1LjM5MDQzIDQuNjQ0MTkgNS45OTU1MSA1LjAxNzM5IDYuMzY4NzFMNi44Mjc3NiA4LjE3OTA4QzcuMDE1NCA3LjkyNTc0IDcuMjI0MDMgNy42ODMwNiA3LjQ1MzY2IDcuNDUzNDJDNy42ODMyNyA3LjIyMzgxIDcuOTI1OTMgNy4wMTUyIDguMTc5MjQgNi44Mjc1OEw2LjM2ODg4IDUuMDE3MjJaTTE3LjE3MjcgMTUuODIxQzE2Ljk4NTEgMTYuMDc0MyAxNi43NzY0IDE2LjMxNyAxNi41NDY4IDE2LjU0NjZDMTYuMzE3MiAxNi43NzYyIDE2LjA3NDUgMTYuOTg0OSAxNS44MjEyIDE3LjE3MjVMMTcuNjMxMyAxOC45ODI2QzE4LjAwNDUgMTkuMzU1OCAxOC42MDk1IDE5LjM1NTggMTguOTgyOCAxOC45ODI2QzE5LjM1NiAxOC42MDk0IDE5LjM1NiAxOC4wMDQzIDE4Ljk4MjggMTcuNjMxMUwxNy4xNzI3IDE1LjgyMVpcIiAvPjwvc3ZnPicsXHJcblx0bW9vbjogJzxzdmcgd2lkdGg9XCI4MDBweFwiIGhlaWdodD1cIjgwMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiZ3JleVwiPjxwYXRoIGQ9XCJNMTIuMDU1NyAzLjU5OTc0QzEyLjI3NTIgMy4yODEzIDEyLjI5MTMgMi44NjQ4NCAxMi4wOTcyIDIuNTMwMzNDMTEuOTAzMSAyLjE5NTgyIDExLjUzMzUgMi4wMDMyNCAxMS4xNDgxIDIuMDM1NzlDNi4wMjM1MSAyLjQ2ODY4IDIgNi43NjM5MiAyIDEyQzIgMTcuNTIyOCA2LjQ3NzE1IDIyIDEyIDIyQzE3LjIzNiAyMiAyMS41MzEzIDE3Ljk3NjQgMjEuOTY0MiAxMi44NTE4QzIxLjk5NjcgMTIuNDY2NCAyMS44MDQxIDEyLjA5NjggMjEuNDY5NiAxMS45MDI3QzIxLjEzNTEgMTEuNzA4NiAyMC43MTg3IDExLjcyNDggMjAuNDAwMiAxMS45NDQzQzE5LjQzNDEgMTIuNjEwMiAxOC4yNjQxIDEzIDE3IDEzQzEzLjY4NjMgMTMgMTEgMTAuMzEzNyAxMSA2Ljk5OTk2QzExIDUuNzM1ODkgMTEuMzg5OCA0LjU2NTg3IDEyLjA1NTcgMy41OTk3NFpcIiAvPjwvc3ZnPicsXHJcblx0cGVuOiAnPHN2ZyAgd2lkdGg9XCI2NHB4XCIgaGVpZ2h0PVwiNjRweFwiIHZpZXdCb3g9XCItMy40OCAtMy40OCAzMS45NiAzMS45NlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHJva2U9XCJcIiBzdHJva2Utd2lkdGg9XCIwLjUwMDI0MDAwMDAwMDAwMDAwMDAzXCI+PGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+PGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2U9XCIjQ0NDQ0NDXCIgc3Ryb2tlLXdpZHRoPVwiMC4wNDhcIj48L2c+PGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+IDxwYXRoIGQ9XCJNMTUuNSw2LjIwNzEwNjc4IEw0LDE3LjcwNzEwNjggTDQsMjAgTDYuMjkyODkzMjIsMjAgTDE3Ljc5Mjg5MzIsOC41IEwxNS41LDYuMjA3MTA2NzggWiBNMTYuMjA3MTA2OCw1LjUgTDE4LjUsNy43OTI4OTMyMiBMMTkuNzkyODkzMiw2LjUgTDE3LjUsNC4yMDcxMDY3OCBMMTYuMjA3MTA2OCw1LjUgTDE2LjIwNzEwNjgsNS41IFogTTMsMjAuNSBMMywxNy41IEMzLDE3LjM2NzM5MTggMy4wNTI2Nzg0MiwxNy4yNDAyMTQ4IDMuMTQ2NDQ2NjEsMTcuMTQ2NDQ2NiBMMTcuMTQ2NDQ2NiwzLjE0NjQ0NjYxIEMxNy4zNDE3MDg4LDIuOTUxMTg0NDYgMTcuNjU4MjkxMiwyLjk1MTE4NDQ2IDE3Ljg1MzU1MzQsMy4xNDY0NDY2MSBMMjAuODUzNTUzNCw2LjE0NjQ0NjYxIEMyMS4wNDg4MTU1LDYuMzQxNzA4NzYgMjEuMDQ4ODE1NSw2LjY1ODI5MTI0IDIwLjg1MzU1MzQsNi44NTM1NTMzOSBMNi44NTM1NTMzOSwyMC44NTM1NTM0IEM2Ljc1OTc4NTIsMjAuOTQ3MzIxNiA2LjYzMjYwODI0LDIxIDYuNSwyMSBMMy41LDIxIEMzLjIyMzg1NzYzLDIxIDMsMjAuNzc2MTQyNCAzLDIwLjUgWlwiPjwvcGF0aD4gPC9nPjwvc3ZnPicsXHJcblx0Y2lyY2xlOlxyXG5cdFx0Jzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGlkPVwiY29sb3ItbWFya1wiPjxwYXRoIGQ9XCJNMTIgN2E1IDUgMCAxMTAgMTAgNSA1IDAgMDEwLTEwelwiID48L3BhdGg+PC9zdmc+JyxcclxufTtcclxuXHJcbmV4cG9ydCB7IHN2Z3MgfTtcclxuXHJcbiIsImltcG9ydCB7IHN2Z3MgfSBmcm9tICcuLi9zdmdzL3N2Z3MuanMnO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlL3RvcC1iYXIuY3NzJztcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVG9wQmFyKCkge1xyXG5cdGNvbnN0IHRvcEJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHRvcEJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b3AtYmFyLWNvbnRhaW5lcicpO1xyXG5cclxuXHRjb25zdCBidXJnZXJNZW51ID0gY3JlYXRlYnVyZ2VyTWVudSgpO1xyXG5cdGNvbnN0IHF1aWNrU2VhcmNoID0gY3JlYXRlUXVpY2tTZWFyY2goKTtcclxuXHRjb25zdCB0b29nbGVUaGVtZSA9IGNyZWF0ZVRvZ2dsZSgpO1xyXG5cclxuXHR0b3BCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYnVyZ2VyTWVudSk7XHJcblx0dG9wQmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1aWNrU2VhcmNoKTtcclxuXHR0b3BCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQodG9vZ2xlVGhlbWUpO1xyXG5cclxuXHRyZXR1cm4gdG9wQmFyQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVidXJnZXJNZW51KCkge1xyXG5cdGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRtZW51LmNsYXNzTGlzdC5hZGQoJ2J1cmdlci1tZW51Jyk7XHJcblx0bWVudS5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuXHRtZW51LmlkID0gJ2J1cmdlck1lbnUnO1xyXG5cdG1lbnUuaW5uZXJIVE1MID0gc3Zncy5tZW51O1xyXG5cclxuXHRyZXR1cm4gbWVudTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUXVpY2tTZWFyY2goKSB7XHJcblx0Y29uc3QgcXVpY2tTZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRxdWlja1NlYXJjaC5jbGFzc0xpc3QuYWRkKCdxdWljay1zZWFyY2gnKTtcclxuXHRxdWlja1NlYXJjaC5pbm5lckhUTUwgPSBzdmdzLnNlYXJjaDtcclxuXHJcblx0Y29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdGlucHV0LnBsYWNlaG9sZGVyID0gJ1NlYXJjaC4uLic7XHJcblxyXG5cdHF1aWNrU2VhcmNoLmFwcGVuZENoaWxkKGlucHV0KTtcclxuXHJcblx0cmV0dXJuIHF1aWNrU2VhcmNoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb2dnbGUoKSB7XHJcblx0Y29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS10aGVtZScpO1xyXG5cdHRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuXHR0b2dnbGUuaW5uZXJIVE1MID0gc3Zncy5zdW47XHJcblx0dG9nZ2xlLmlubmVySFRNTCArPSBzdmdzLm1vb247XHJcblxyXG5cdGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGNpcmNsZS5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcclxuXHRjaXJjbGUuaWQgPSAndG9nZ2xlLWNpcmNsZSc7XHJcblxyXG5cdHRvZ2dsZS5hcHBlbmRDaGlsZChjaXJjbGUpO1xyXG5cclxuXHRyZXR1cm4gdG9nZ2xlO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZW5lcmF0ZVRvcEJhciB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBVSSB9IGZyb20gJy4vdWktbW9kdWxlL1VJJztcclxuXHJcblVJLmluaXQoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9