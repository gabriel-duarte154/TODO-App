/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  left: 0;
  height: calc(100vh - var(--top-bar-height));
  width: 300px;
  background-color: var(--side-bar-color);
  z-index: 1;
  padding-top: 2rem;
  overflow-y: scroll;
}

.side-bar-shadow {
  height: calc(100vh - var(--top-bar-height));
  width: 300px;
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
  gap: .3rem;
  padding: .5rem;
  border-radius: .5rem;
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
  border-radius: .5rem;
}

.icon svg {
  height: 25px;
  width: 25px;
  fill: var(--text-color);
  stroke-width: 10;
}

.name {
  flex: 1;
}

.standard-options {
  margin-bottom: 2rem;
}

.projects-container {
  margin-bottom: 1rem;
}

.projects-header {
  display: flex;
  font-size: 1rem;
  align-items: center;
  padding: .5rem;
  border-radius: .5rem;
  justify-content: space-between;
}

.projects {
  padding-inline: .5rem 0;
}`, "",{"version":3,"sources":["webpack://./src/style/side-bar.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,OAAO;EACP,2CAA2C;EAC3C,YAAY;EACZ,uCAAuC;EACvC,UAAU;EACV,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,2CAA2C;EAC3C,YAAY;AACd;;AAEA;EACE,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,UAAU;EACV,cAAc;EACd,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,cAAc;EACd,oBAAoB;EACpB,8BAA8B;AAChC;;AAEA;EACE,uBAAuB;AACzB","sourcesContent":[".side-bar-container {\r\n  position: fixed;\r\n  left: 0;\r\n  height: calc(100vh - var(--top-bar-height));\r\n  width: 300px;\r\n  background-color: var(--side-bar-color);\r\n  z-index: 1;\r\n  padding-top: 2rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.side-bar-shadow {\r\n  height: calc(100vh - var(--top-bar-height));\r\n  width: 300px;\r\n} \r\n\r\n.side-bar {\r\n  padding: 0 1rem;\r\n  color: var(--text-color);\r\n}\r\n\r\nspan {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.option {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: .3rem;\r\n  padding: .5rem;\r\n  border-radius: .5rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.option:hover {\r\n  background-color: var(--hover-dark-color);\r\n}\r\n\r\n.icon {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 25px;\r\n  cursor: pointer;\r\n  border-radius: .5rem;\r\n}\r\n\r\n.icon svg {\r\n  height: 25px;\r\n  width: 25px;\r\n  fill: var(--text-color);\r\n  stroke-width: 10;\r\n}\r\n\r\n.name {\r\n  flex: 1;\r\n}\r\n\r\n.standard-options {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.projects-container {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.projects-header {\r\n  display: flex;\r\n  font-size: 1rem;\r\n  align-items: center;\r\n  padding: .5rem;\r\n  border-radius: .5rem;\r\n  justify-content: space-between;\r\n}\r\n\r\n.projects {\r\n  padding-inline: .5rem 0;\r\n}"],"sourceRoot":""}]);
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

input {
  outline: none;
  border: none;
  background-color: transparent;
  width: 50vw;
  max-width: 500px;
  font-size: .9rem;
}

input::placeholder {
  color: white;
  opacity: 1;
}

.quick-search:hover {
  background-color: var(--hover-light-color);
}

.togle-theme {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffffa8;
  border-radius: 1.2rem;
  padding:  0 .2rem ;
  gap: .2rem;
}

.togle-theme svg {
  width: 25px;
}

.btn {
  cursor: pointer;
}

.togle-theme .circle {
  position: absolute;
  right: .2rem;
  background-color: var(--secondary-color);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  transition: translate .5s;
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
}`, "",{"version":3,"sources":["webpack://./src/style/top-bar.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,oBAAoB;EACpB,WAAW;EACX,sCAAsC;EACtC,eAAe;EACf,MAAM;EACN,OAAO;EACP,qBAAqB;EACrB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,qBAAqB;EACrB,oBAAoB;EACpB,QAAQ;EACR,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,6BAA6B;EAC7B,WAAW;EACX,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,2BAA2B;EAC3B,qBAAqB;EACrB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,wCAAwC;EACxC,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE;IACE,qBAAqB;IACrB,SAAS;EACX;EACA;IACE,OAAO;EACT;EACA;IACE,OAAO;EACT;AACF","sourcesContent":[".top-bar-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-inline: 1rem;\r\n  width: 100%;\r\n  background-color: var(--primary-color);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  padding: .4rem 1.5rem;\r\n  height: var(--top-bar-height);\r\n}\r\n\r\n.top-bar-container svg {\r\n  width: 30px;\r\n  height: 30px;\r\n  fill: #ffffffc7;\r\n}\r\n\r\n.burger-menu {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: .2rem;\r\n}\r\n\r\n.burger-menu svg{\r\n  stroke: white;\r\n}\r\n\r\n.quick-search {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: #ffffff5d;\r\n  border-radius: .2rem;\r\n  gap: 5px;\r\n  color: #ffffffc7;\r\n} \r\n\r\ninput {\r\n  outline: none;\r\n  border: none;\r\n  background-color: transparent;\r\n  width: 50vw;\r\n  max-width: 500px;\r\n  font-size: .9rem;\r\n}\r\n\r\ninput::placeholder {\r\n  color: white;\r\n  opacity: 1;\r\n}\r\n\r\n.quick-search:hover {\r\n  background-color: var(--hover-light-color);\r\n}\r\n\r\n.togle-theme {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 1px solid #ffffffa8;\r\n  border-radius: 1.2rem;\r\n  padding:  0 .2rem ;\r\n  gap: .2rem;\r\n}\r\n\r\n.togle-theme svg {\r\n  width: 25px;\r\n}\r\n\r\n.btn {\r\n  cursor: pointer;\r\n}\r\n\r\n.togle-theme .circle {\r\n  position: absolute;\r\n  right: .2rem;\r\n  background-color: var(--secondary-color);\r\n  border-radius: 50%;\r\n  width: 25px;\r\n  height: 25px;\r\n  transition: translate .5s;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: var(--hover-light-color);\r\n}\r\n\r\n@media screen and (max-width: 600px ) {\r\n  .top-bar-container {\r\n    justify-content: left;\r\n    gap: 2rem;\r\n  }\r\n  .quick-search {\r\n    flex: 1;\r\n  }\r\n  input {\r\n    flex: 1;\r\n  }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/side-bar/side-bar.js":
/*!**********************************!*\
  !*** ./src/side-bar/side-bar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateSideBar: () => (/* binding */ generateSideBar)
/* harmony export */ });
/* harmony import */ var _svgs_svgs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svgs/svgs.js */ "./src/svgs/svgs.js");
/* harmony import */ var _style_side_bar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/side-bar.css */ "./src/style/side-bar.css");



function generateSideBar() {
	const sideBarShadow = createSideShadow();
	const sideBarContainer = document.createElement('div');
	sideBarContainer.classList.add('side-bar-container');

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
		},
		{
			name: 'Today',
			icon: 'today',
		},
		{
			name: 'This week',
			icon: 'calendar',
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

/***/ "./src/svgs/svgs.js":
/*!**************************!*\
  !*** ./src/svgs/svgs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   svgs: () => (/* binding */ svgs)
/* harmony export */ });
const svgs = {
	close:
		'<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Menu"><path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></g></svg>',
	today:
		'<svg width="20px"height="20px"viewBox="0 0 512         512"xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000000" stroke-linejoin="round" stroke-width="25" x="48" y="80" width="416" height="384" rx="48"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-width="25" stroke-linecap="round" x1="128" y1="48" x2="128" y2="80"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-width="25" stroke-linecap="round" x1="384" y1="48" x2="384" y2="80"/><rect fill="none"stroke="#000000"stroke-linejoin="round"stroke-width="32"stroke-linecap="round"x="112"y="224"width="96"height="96"rx="13"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-width="25" stroke-linecap="round" x1="464" y1="160" x2="48" y2="160"/></svg>',
	inbox:
		'<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 20H6C5.63886 20 5.28127 19.9289 4.94762 19.7907C4.61398 19.6525 4.31082 19.4499 4.05546 19.1945C3.8001 18.9392 3.59753 18.636 3.45933 18.3024C3.32113 17.9687 3.25 17.6111 3.25 17.25V11.25C3.25 11.0511 3.32902 10.8603 3.46967 10.7197C3.61032 10.579 3.80109 10.5 4 10.5C4.19891 10.5 4.38968 10.579 4.53033 10.7197C4.67098 10.8603 4.75 11.0511 4.75 11.25V17.25C4.746 17.4167 4.77538 17.5824 4.8364 17.7376C4.89742 17.8927 4.98886 18.0341 5.10534 18.1533C5.22181 18.2726 5.36097 18.3674 5.51461 18.4321C5.66826 18.4967 5.83329 18.53 6 18.53H18C18.3315 18.53 18.6495 18.3983 18.8839 18.1639C19.1183 17.9295 19.25 17.6115 19.25 17.28V11.28C19.25 11.0811 19.329 10.8903 19.4697 10.7497C19.6103 10.609 19.8011 10.53 20 10.53C20.1989 10.53 20.3897 10.609 20.5303 10.7497C20.671 10.8903 20.75 11.0811 20.75 11.28V17.28C20.7421 18.0041 20.4489 18.6959 19.934 19.2052C19.4191 19.7144 18.7242 20 18 20Z" fill="#000000"/><path d="M12 15.2499C11.0926 15.2505 10.2159 14.9211 9.53334 14.3232C8.85078 13.7252 8.40889 12.8995 8.29 11.9999H4C3.8654 12.001 3.73301 11.9657 3.61672 11.8979C3.50043 11.8301 3.40452 11.7323 3.33907 11.6147C3.27361 11.4971 3.24101 11.364 3.2447 11.2294C3.24838 11.0949 3.28821 10.9638 3.36 10.8499L7.09 4.84995C7.24314 4.5821 7.46668 4.36129 7.73639 4.21145C8.0061 4.06162 8.31168 3.98847 8.62 3.99995H15.38C15.7095 4.00086 16.032 4.09533 16.31 4.27236C16.5879 4.44939 16.8099 4.7017 16.95 4.99995L20.64 10.9399C20.6906 11.0509 20.7134 11.1726 20.7064 11.2944C20.6993 11.4161 20.6627 11.5344 20.5997 11.6388C20.5366 11.7432 20.449 11.8307 20.3445 11.8936C20.2401 11.9566 20.1218 11.9931 20 11.9999H15.71C15.5911 12.8995 15.1492 13.7252 14.4667 14.3232C13.7841 14.9211 12.9074 15.2505 12 15.2499ZM5.35 10.5299H9C9.19891 10.5299 9.38968 10.609 9.53033 10.7496C9.67098 10.8903 9.75 11.081 9.75 11.2799V11.4999C9.75 12.0967 9.98705 12.669 10.409 13.0909C10.831 13.5129 11.4033 13.7499 12 13.7499C12.5967 13.7499 13.169 13.5129 13.591 13.0909C14.0129 12.669 14.25 12.0967 14.25 11.4999V11.2799C14.25 11.081 14.329 10.8903 14.4697 10.7496C14.6103 10.609 14.8011 10.5299 15 10.5299H18.65L15.65 5.66995C15.57 5.52995 15.49 5.46995 15.39 5.46995H8.62C8.57276 5.47112 8.52666 5.48467 8.4863 5.50923C8.44594 5.5338 8.41274 5.56853 8.39 5.60995L5.35 10.5299Z" fill="#000000"/></svg>',
	calendar:
    '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M266.815 537.708c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.775 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zM266.815 679.347c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.775 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zM266.815 820.988c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.775 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zM228.18 81.918v153.6c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-153.6c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zm528.09 0v153.6c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-153.6c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"/><path d="M890.877 137.517c33.931 0 61.44 27.509 61.44 61.44v703.375c0 33.931-27.509 61.44-61.44 61.44h-757.76c-33.931 0-61.44-27.509-61.44-61.44V198.957c0-33.931 27.509-61.44 61.44-61.44h757.76zm-757.76 40.96c-11.309 0-20.48 9.171-20.48 20.48v703.375c0 11.309 9.171 20.48 20.48 20.48h757.76c11.309 0 20.48-9.171 20.48-20.48V198.957c0-11.309-9.171-20.48-20.48-20.48h-757.76z"/><path d="M575.03 338.288c0-33.93-27.51-61.44-61.44-61.44s-61.44 27.51-61.44 61.44c0 33.93 27.51 61.44 61.44 61.44s61.44-27.51 61.44-61.44zm40.96 0c0 56.551-45.849 102.4-102.4 102.4s-102.4-45.849-102.4-102.4c0-56.551 45.849-102.4 102.4-102.4s102.4 45.849 102.4 102.4z"/></svg>',
  plus: '<svg width="25" height="25"><g transform="translate(6, 6)"><path d="M6 5V.5a.5.5 0 011 0V6h5.5a.5.5 0 110 1H7v5.5a.5.5 0 11-1 0V7H.5a.5.5 0 010-1H6z" fill="#000000" fill-rule="round"></path></g></svg>',
  menu: '<svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 17H8M12 17H20M4 12H20M4 7H12M16 7H20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  search: '<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C11.381 15 12.6296 14.4415 13.5355 13.5355C14.4415 12.6296 15 11.381 15 10C15 7.23858 12.7614 5 10 5ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5719 16.481 13.0239 15.6063 14.1921L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L14.1921 15.6063C13.0239 16.481 11.5719 17 10 17C6.13401 17 3 13.866 3 10Z" /></svg>',
  sun: '<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="yellow"><circle cx="12" cy="12" r="5.09677"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.9556 3.08065C12.9556 2.55286 12.5277 2.125 12 2.125C11.4722 2.125 11.0443 2.55286 11.0443 3.08065L11.0443 5.64078C11.3561 5.59432 11.6753 5.57024 12 5.57024C12.3247 5.57024 12.6438 5.59431 12.9556 5.64076L12.9556 3.08065ZM12.9556 18.3594C12.6438 18.4059 12.3247 18.4299 12 18.4299C11.6753 18.4299 11.3561 18.4058 11.0443 18.3594L11.0443 20.9194C11.0443 21.4471 11.4722 21.875 12 21.875C12.5277 21.875 12.9556 21.4471 12.9556 20.9194L12.9556 18.3594Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M20.9194 12.9556C21.4471 12.9556 21.875 12.5277 21.875 12C21.875 11.4722 21.4471 11.0443 20.9194 11.0443L18.3592 11.0443C18.4057 11.3561 18.4298 11.6753 18.4298 12C18.4298 12.3247 18.4057 12.6438 18.3592 12.9556L20.9194 12.9556ZM5.6406 12.9556C5.59415 12.6438 5.57008 12.3247 5.57008 12C5.57008 11.6753 5.59416 11.3561 5.64062 11.0443L3.08064 11.0443C2.55286 11.0443 2.125 11.4722 2.125 12C2.125 12.5277 2.55286 12.9556 3.08064 12.9556L5.6406 12.9556Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M18.9828 6.36876C19.356 5.99555 19.356 5.39047 18.9828 5.01727C18.6096 4.64407 18.0045 4.64407 17.6313 5.01727L15.8209 6.82764C16.0743 7.01528 16.3169 7.22391 16.5466 7.45354C16.7762 7.68315 16.9848 7.92581 17.1724 8.17912L18.9828 6.36876ZM8.17898 17.1725C7.92567 16.9849 7.68302 16.7763 7.45341 16.5467C7.22378 16.3171 7.01514 16.0744 6.82751 15.8211L5.01742 17.6311C4.64422 18.0043 4.64422 18.6094 5.01742 18.9826C5.39062 19.3558 5.9957 19.3558 6.36891 18.9826L8.17898 17.1725Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M6.36888 5.01722C5.99568 4.64402 5.3906 4.64402 5.01739 5.01722C4.64419 5.39043 4.64419 5.99551 5.01739 6.36871L6.82776 8.17908C7.0154 7.92574 7.22403 7.68306 7.45366 7.45342C7.68327 7.22381 7.92593 7.0152 8.17924 6.82758L6.36888 5.01722ZM17.1727 15.821C16.9851 16.0743 16.7764 16.317 16.5468 16.5466C16.3172 16.7762 16.0745 16.9849 15.8212 17.1725L17.6313 18.9826C18.0045 19.3558 18.6095 19.3558 18.9828 18.9826C19.356 18.6094 19.356 18.0043 18.9828 17.6311L17.1727 15.821Z" /></svg>',
  moon: '<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="grey"><path d="M12.0557 3.59974C12.2752 3.2813 12.2913 2.86484 12.0972 2.53033C11.9031 2.19582 11.5335 2.00324 11.1481 2.03579C6.02351 2.46868 2 6.76392 2 12C2 17.5228 6.47715 22 12 22C17.236 22 21.5313 17.9764 21.9642 12.8518C21.9967 12.4664 21.8041 12.0968 21.4696 11.9027C21.1351 11.7086 20.7187 11.7248 20.4002 11.9443C19.4341 12.6102 18.2641 13 17 13C13.6863 13 11 10.3137 11 6.99996C11 5.73589 11.3898 4.56587 12.0557 3.59974Z" /></svg>',
  pen: '<svg width="800px" height="800px" viewBox="0 0 28 18"><g id="out" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage" transform="translate(5,0)"><path d="M2.25,12.9378906 L2.25,15.75 L5.06210943,15.75 L13.3559575,7.45615192 L10.5438481,4.64404249 L2.25,12.9378906 L2.25,12.9378906 L2.25,12.9378906 Z M15.5306555,5.28145396 C15.8231148,4.98899458 15.8231148,4.5165602 15.5306555,4.22410082 L13.7758992,2.46934454 C13.4834398,2.17688515 13.0110054,2.17688515 12.718546,2.46934454 L11.3462366,3.84165394 L14.1583461,6.65376337 L15.5306555,5.28145396 L15.5306555,5.28145396 L15.5306555,5.28145396 Z" id="path" fill="#554f4f" sketch:type="MSShapeGroup"></path></g></svg>',
  circle: '<svg width="24" height="24" viewBox="0 0 24 24" id="color-mark"><path d="M12 7a5 5 0 110 10 5 5 0 010-10z" ></path></svg>',
};



/***/ }),

/***/ "./src/top-bar/top-bar.js":
/*!********************************!*\
  !*** ./src/top-bar/top-bar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateTopBar: () => (/* binding */ generateTopBar)
/* harmony export */ });
/* harmony import */ var _svgs_svgs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svgs/svgs.js */ "./src/svgs/svgs.js");
/* harmony import */ var _style_top_bar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/top-bar.css */ "./src/style/top-bar.css");



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
 const toggle =  document.createElement('div');
	toggle.classList.add('togle-theme');
	toggle.classList.add('btn');
	toggle.innerHTML = _svgs_svgs_js__WEBPACK_IMPORTED_MODULE_0__.svgs.sun;
  toggle.innerHTML += _svgs_svgs_js__WEBPACK_IMPORTED_MODULE_0__.svgs.moon;
  
	const circle = document.createElement('div');
  circle.classList.add('circle');
  
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
/* harmony import */ var _top_bar_top_bar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-bar/top-bar.js */ "./src/top-bar/top-bar.js");
/* harmony import */ var _side_bar_side_bar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-bar/side-bar.js */ "./src/side-bar/side-bar.js");



const page = document.querySelector('.page-container');
const topBar = (0,_top_bar_top_bar_js__WEBPACK_IMPORTED_MODULE_0__.generateTopBar)();
const sideBar = (0,_side_bar_side_bar_js__WEBPACK_IMPORTED_MODULE_1__.generateSideBar)();
console.log(sideBar);

page.appendChild(topBar);
page.appendChild(sideBar[1]);
page.appendChild(sideBar[0]);

console.log("it's up to start");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJ1QztBQUNWO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0NBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0NBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0NBQUk7QUFDeEIsc0JBQXNCLCtDQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjs7Ozs7OztVQ3ZEMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBc0Q7QUFDRztBQUN6RDtBQUNBO0FBQ0EsZUFBZSxtRUFBYztBQUM3QixnQkFBZ0Isc0VBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS9zaWRlLWJhci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUvdG9wLWJhci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUvc2lkZS1iYXIuY3NzPzM4YzMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUvdG9wLWJhci5jc3M/OTMzZiIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3NpZGUtYmFyL3NpZGUtYmFyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N2Z3Mvc3Zncy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90b3AtYmFyL3RvcC1iYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zaWRlLWJhci1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLXRvcC1iYXItaGVpZ2h0KSk7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyLWNvbG9yKTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLnNpZGUtYmFyLXNoYWRvdyB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tdG9wLWJhci1oZWlnaHQpKTtcclxuICB3aWR0aDogMzAwcHg7XHJcbn0gXHJcblxyXG4uc2lkZS1iYXIge1xyXG4gIHBhZGRpbmc6IDAgMXJlbTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm9wdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogLjNyZW07XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ub3B0aW9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1kYXJrLWNvbG9yKTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG59XHJcblxyXG4uaWNvbiBzdmcge1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBmaWxsOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICBzdHJva2Utd2lkdGg6IDEwO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnN0YW5kYXJkLW9wdGlvbnMge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1jb250YWluZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucHJvamVjdHMge1xyXG4gIHBhZGRpbmctaW5saW5lOiAuNXJlbSAwO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc2lkZS1iYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCwyQ0FBMkM7RUFDM0MsWUFBWTtFQUNaLHVDQUF1QztFQUN2QyxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNpZGUtYmFyLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tdG9wLWJhci1oZWlnaHQpKTtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyLWNvbG9yKTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYmFyLXNoYWRvdyB7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b3AtYmFyLWhlaWdodCkpO1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbn0gXFxyXFxuXFxyXFxuLnNpZGUtYmFyIHtcXHJcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogLjNyZW07XFxyXFxuICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWRhcmstY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5pY29uIHN2ZyB7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGZpbGw6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgc3Ryb2tlLXdpZHRoOiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUge1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YW5kYXJkLW9wdGlvbnMge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAuNXJlbSAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50b3AtYmFyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcGFkZGluZzogLjRyZW0gMS41cmVtO1xyXG4gIGhlaWdodDogdmFyKC0tdG9wLWJhci1oZWlnaHQpO1xyXG59XHJcblxyXG4udG9wLWJhci1jb250YWluZXIgc3ZnIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZmlsbDogI2ZmZmZmZmM3O1xyXG59XHJcblxyXG4uYnVyZ2VyLW1lbnUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcclxufVxyXG5cclxuLmJ1cmdlci1tZW51IHN2Z3tcclxuICBzdHJva2U6IHdoaXRlO1xyXG59XHJcblxyXG4ucXVpY2stc2VhcmNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xyXG4gIGdhcDogNXB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmYzc7XHJcbn0gXHJcblxyXG5pbnB1dCB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBmb250LXNpemU6IC45cmVtO1xyXG59XHJcblxyXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ucXVpY2stc2VhcmNoOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodC1jb2xvcik7XHJcbn1cclxuXHJcbi50b2dsZS10aGVtZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmYTg7XHJcbiAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xyXG4gIHBhZGRpbmc6ICAwIC4ycmVtIDtcclxuICBnYXA6IC4ycmVtO1xyXG59XHJcblxyXG4udG9nbGUtdGhlbWUgc3ZnIHtcclxuICB3aWR0aDogMjVweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udG9nbGUtdGhlbWUgLmNpcmNsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAuMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNsYXRlIC41cztcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQtY29sb3IpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCApIHtcclxuICAudG9wLWJhci1jb250YWluZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gIH1cclxuICAucXVpY2stc2VhcmNoIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG4gIGlucHV0IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvdG9wLWJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLHNDQUFzQztFQUN0QyxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxxQkFBcUI7RUFDckIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixRQUFRO0VBQ1IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQixTQUFTO0VBQ1g7RUFDQTtJQUNFLE9BQU87RUFDVDtFQUNBO0lBQ0UsT0FBTztFQUNUO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRvcC1iYXItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHBhZGRpbmc6IC40cmVtIDEuNXJlbTtcXHJcXG4gIGhlaWdodDogdmFyKC0tdG9wLWJhci1oZWlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWJhci1jb250YWluZXIgc3ZnIHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgZmlsbDogI2ZmZmZmZmM3O1xcclxcbn1cXHJcXG5cXHJcXG4uYnVyZ2VyLW1lbnUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnVyZ2VyLW1lbnUgc3Zne1xcclxcbiAgc3Ryb2tlOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnF1aWNrLXNlYXJjaCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjVkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogLjJyZW07XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmYzc7XFxyXFxufSBcXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB3aWR0aDogNTB2dztcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICBmb250LXNpemU6IC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnF1aWNrLXNlYXJjaDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi50b2dsZS10aGVtZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZmE4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xcclxcbiAgcGFkZGluZzogIDAgLjJyZW0gO1xcclxcbiAgZ2FwOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZ2xlLXRoZW1lIHN2ZyB7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2dsZS10aGVtZSAuY2lyY2xlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAuMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zbGF0ZSAuNXM7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCApIHtcXHJcXG4gIC50b3AtYmFyLWNvbnRhaW5lciB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgfVxcclxcbiAgLnF1aWNrLXNlYXJjaCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICB9XFxyXFxuICBpbnB1dCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZGUtYmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZS1iYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvcC1iYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b3AtYmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgc3ZncyB9IGZyb20gJy4uL3N2Z3Mvc3Zncy5qcyc7XHJcbmltcG9ydCAnLi4vc3R5bGUvc2lkZS1iYXIuY3NzJ1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVTaWRlQmFyKCkge1xyXG5cdGNvbnN0IHNpZGVCYXJTaGFkb3cgPSBjcmVhdGVTaWRlU2hhZG93KCk7XHJcblx0Y29uc3Qgc2lkZUJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHNpZGVCYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZS1iYXItY29udGFpbmVyJyk7XHJcblxyXG5cdGNvbnN0IHNpZGVCYXIgPSBjcmVhdGVTaWRlQmFyKCk7XHJcblx0c2lkZUJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlQmFyKTtcclxuXHJcblx0cmV0dXJuIFtzaWRlQmFyQ29udGFpbmVyLCBzaWRlQmFyU2hhZG93XTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2lkZVNoYWRvdygpIHtcclxuXHRjb25zdCBzaGFkb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRzaGFkb3cuY2xhc3NMaXN0LmFkZCgnc2lkZS1iYXItc2hhZG93Jyk7XHJcblxyXG5cdHJldHVybiBzaGFkb3c7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNpZGVCYXIoKSB7XHJcblx0Y29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnc2lkZS1iYXInKTtcclxuXHJcblx0Y29uc3Qgb3B0aW9uc0NvbnRhaW5lciA9IGNyZWF0ZU9wdGlvbnNDb250YWluZXIoKTtcclxuXHRjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGNyZWF0ZVByb2pjdHNDb250YWluZXIoKTtcclxuXHJcblx0c2lkZUJhci5hcHBlbmRDaGlsZChvcHRpb25zQ29udGFpbmVyKTtcclxuXHRzaWRlQmFyLmFwcGVuZENoaWxkKHByb2plY3RzQ29udGFpbmVyKTtcclxuXHJcblx0cmV0dXJuIHNpZGVCYXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnNDb250YWluZXIoKSB7XHJcblx0Y29uc3Qgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdG9wdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3RhbmRhcmQtb3B0aW9ucycpO1xyXG5cclxuXHRsZXQgb3B0aW9ucyA9IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ0luYm94JyxcclxuXHRcdFx0aWNvbjogJ2luYm94JyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdUb2RheScsXHJcblx0XHRcdGljb246ICd0b2RheScsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnVGhpcyB3ZWVrJyxcclxuXHRcdFx0aWNvbjogJ2NhbGVuZGFyJyxcclxuXHRcdH0sXHJcblx0XTtcclxuXHJcblx0b3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuXHRcdGNvbnN0IG9wdGlvbkNvbnRhaW5lciA9IGNyZWF0ZU9wdGlvbihvcHRpb24pO1xyXG5cdFx0b3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25Db250YWluZXIpO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gb3B0aW9uc0NvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uKG9wdGlvbikge1xyXG5cdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvcHRpb24nKTtcclxuXHJcblx0Y29uc3Qgc3Bhbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblx0c3Bhbkljb24uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG5cdHNwYW5JY29uLmlubmVySFRNTCA9IHN2Z3Nbb3B0aW9uLmljb25dO1xyXG5cclxuXHRjb25zdCBzcGFuTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRzcGFuTmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XHJcblx0c3Bhbk5hbWUudGV4dENvbnRlbnQgPSBvcHRpb24ubmFtZTtcclxuXHJcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW5JY29uKTtcclxuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoc3Bhbk5hbWUpO1xyXG5cclxuXHRyZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qY3RzQ29udGFpbmVyKCkge1xyXG5cdGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0cHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtY29udGFpbmVyJyk7XHJcblxyXG5cdGNvbnN0IHByb2plY3RzSGVhZGVyID0gY3JlYXRlUHJvamVjdHNIZWFkZXIoKTtcclxuXHRjb25zdCBwcm9qZWN0cyA9IGNyZWF0ZVByb2plY3RzKCk7XHJcblxyXG5cdHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyKTtcclxuXHRwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XHJcblxyXG5cdHJldHVybiBwcm9qZWN0c0NvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdHNIZWFkZXIoKSB7XHJcblx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWhlYWRlcicpO1xyXG5cdGhlYWRlci50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XHJcblxyXG5cdGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblx0c3Bhbi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcblx0c3Bhbi5pbm5lckhUTUwgPSBzdmdzLnBsdXM7XHJcblxyXG5cdGhlYWRlci5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcblx0cmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdHMoKSB7XHJcblx0Y29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xyXG5cclxuXHRyZXR1cm4gcHJvamVjdHM7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdlbmVyYXRlU2lkZUJhciB9O1xyXG4iLCJjb25zdCBzdmdzID0ge1xyXG5cdGNsb3NlOlxyXG5cdFx0Jzxzdmcgd2lkdGg9XCI4MDBweFwiIGhlaWdodD1cIjgwMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnIGlkPVwiTWVudVwiPjxwYXRoIGlkPVwiVmVjdG9yXCIgZD1cIk0xNiAxNkwxMiAxMk0xMiAxMkw4IDhNMTIgMTJMMTYgOE0xMiAxMkw4IDE2XCIgc3Ryb2tlPVwiIzAwMDAwMFwiIHN0cm9rZS13aWR0aD1cIjFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+PC9nPjwvc3ZnPicsXHJcblx0dG9kYXk6XHJcblx0XHQnPHN2ZyB3aWR0aD1cIjIwcHhcImhlaWdodD1cIjIwcHhcInZpZXdCb3g9XCIwIDAgNTEyICAgICAgICAgNTEyXCJ4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHJlY3QgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyNVwiIHg9XCI0OFwiIHk9XCI4MFwiIHdpZHRoPVwiNDE2XCIgaGVpZ2h0PVwiMzg0XCIgcng9XCI0OFwiLz48bGluZSBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjI1XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHgxPVwiMTI4XCIgeTE9XCI0OFwiIHgyPVwiMTI4XCIgeTI9XCI4MFwiLz48bGluZSBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjI1XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHgxPVwiMzg0XCIgeTE9XCI0OFwiIHgyPVwiMzg0XCIgeTI9XCI4MFwiLz48cmVjdCBmaWxsPVwibm9uZVwic3Ryb2tlPVwiIzAwMDAwMFwic3Ryb2tlLWxpbmVqb2luPVwicm91bmRcInN0cm9rZS13aWR0aD1cIjMyXCJzdHJva2UtbGluZWNhcD1cInJvdW5kXCJ4PVwiMTEyXCJ5PVwiMjI0XCJ3aWR0aD1cIjk2XCJoZWlnaHQ9XCI5Nlwicng9XCIxM1wiLz48bGluZSBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjI1XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHgxPVwiNDY0XCIgeTE9XCIxNjBcIiB4Mj1cIjQ4XCIgeTI9XCIxNjBcIi8+PC9zdmc+JyxcclxuXHRpbmJveDpcclxuXHRcdCc8c3ZnIHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCI4MDBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE4IDIwSDZDNS42Mzg4NiAyMCA1LjI4MTI3IDE5LjkyODkgNC45NDc2MiAxOS43OTA3QzQuNjEzOTggMTkuNjUyNSA0LjMxMDgyIDE5LjQ0OTkgNC4wNTU0NiAxOS4xOTQ1QzMuODAwMSAxOC45MzkyIDMuNTk3NTMgMTguNjM2IDMuNDU5MzMgMTguMzAyNEMzLjMyMTEzIDE3Ljk2ODcgMy4yNSAxNy42MTExIDMuMjUgMTcuMjVWMTEuMjVDMy4yNSAxMS4wNTExIDMuMzI5MDIgMTAuODYwMyAzLjQ2OTY3IDEwLjcxOTdDMy42MTAzMiAxMC41NzkgMy44MDEwOSAxMC41IDQgMTAuNUM0LjE5ODkxIDEwLjUgNC4zODk2OCAxMC41NzkgNC41MzAzMyAxMC43MTk3QzQuNjcwOTggMTAuODYwMyA0Ljc1IDExLjA1MTEgNC43NSAxMS4yNVYxNy4yNUM0Ljc0NiAxNy40MTY3IDQuNzc1MzggMTcuNTgyNCA0LjgzNjQgMTcuNzM3NkM0Ljg5NzQyIDE3Ljg5MjcgNC45ODg4NiAxOC4wMzQxIDUuMTA1MzQgMTguMTUzM0M1LjIyMTgxIDE4LjI3MjYgNS4zNjA5NyAxOC4zNjc0IDUuNTE0NjEgMTguNDMyMUM1LjY2ODI2IDE4LjQ5NjcgNS44MzMyOSAxOC41MyA2IDE4LjUzSDE4QzE4LjMzMTUgMTguNTMgMTguNjQ5NSAxOC4zOTgzIDE4Ljg4MzkgMTguMTYzOUMxOS4xMTgzIDE3LjkyOTUgMTkuMjUgMTcuNjExNSAxOS4yNSAxNy4yOFYxMS4yOEMxOS4yNSAxMS4wODExIDE5LjMyOSAxMC44OTAzIDE5LjQ2OTcgMTAuNzQ5N0MxOS42MTAzIDEwLjYwOSAxOS44MDExIDEwLjUzIDIwIDEwLjUzQzIwLjE5ODkgMTAuNTMgMjAuMzg5NyAxMC42MDkgMjAuNTMwMyAxMC43NDk3QzIwLjY3MSAxMC44OTAzIDIwLjc1IDExLjA4MTEgMjAuNzUgMTEuMjhWMTcuMjhDMjAuNzQyMSAxOC4wMDQxIDIwLjQ0ODkgMTguNjk1OSAxOS45MzQgMTkuMjA1MkMxOS40MTkxIDE5LjcxNDQgMTguNzI0MiAyMCAxOCAyMFpcIiBmaWxsPVwiIzAwMDAwMFwiLz48cGF0aCBkPVwiTTEyIDE1LjI0OTlDMTEuMDkyNiAxNS4yNTA1IDEwLjIxNTkgMTQuOTIxMSA5LjUzMzM0IDE0LjMyMzJDOC44NTA3OCAxMy43MjUyIDguNDA4ODkgMTIuODk5NSA4LjI5IDExLjk5OTlINEMzLjg2NTQgMTIuMDAxIDMuNzMzMDEgMTEuOTY1NyAzLjYxNjcyIDExLjg5NzlDMy41MDA0MyAxMS44MzAxIDMuNDA0NTIgMTEuNzMyMyAzLjMzOTA3IDExLjYxNDdDMy4yNzM2MSAxMS40OTcxIDMuMjQxMDEgMTEuMzY0IDMuMjQ0NyAxMS4yMjk0QzMuMjQ4MzggMTEuMDk0OSAzLjI4ODIxIDEwLjk2MzggMy4zNiAxMC44NDk5TDcuMDkgNC44NDk5NUM3LjI0MzE0IDQuNTgyMSA3LjQ2NjY4IDQuMzYxMjkgNy43MzYzOSA0LjIxMTQ1QzguMDA2MSA0LjA2MTYyIDguMzExNjggMy45ODg0NyA4LjYyIDMuOTk5OTVIMTUuMzhDMTUuNzA5NSA0LjAwMDg2IDE2LjAzMiA0LjA5NTMzIDE2LjMxIDQuMjcyMzZDMTYuNTg3OSA0LjQ0OTM5IDE2LjgwOTkgNC43MDE3IDE2Ljk1IDQuOTk5OTVMMjAuNjQgMTAuOTM5OUMyMC42OTA2IDExLjA1MDkgMjAuNzEzNCAxMS4xNzI2IDIwLjcwNjQgMTEuMjk0NEMyMC42OTkzIDExLjQxNjEgMjAuNjYyNyAxMS41MzQ0IDIwLjU5OTcgMTEuNjM4OEMyMC41MzY2IDExLjc0MzIgMjAuNDQ5IDExLjgzMDcgMjAuMzQ0NSAxMS44OTM2QzIwLjI0MDEgMTEuOTU2NiAyMC4xMjE4IDExLjk5MzEgMjAgMTEuOTk5OUgxNS43MUMxNS41OTExIDEyLjg5OTUgMTUuMTQ5MiAxMy43MjUyIDE0LjQ2NjcgMTQuMzIzMkMxMy43ODQxIDE0LjkyMTEgMTIuOTA3NCAxNS4yNTA1IDEyIDE1LjI0OTlaTTUuMzUgMTAuNTI5OUg5QzkuMTk4OTEgMTAuNTI5OSA5LjM4OTY4IDEwLjYwOSA5LjUzMDMzIDEwLjc0OTZDOS42NzA5OCAxMC44OTAzIDkuNzUgMTEuMDgxIDkuNzUgMTEuMjc5OVYxMS40OTk5QzkuNzUgMTIuMDk2NyA5Ljk4NzA1IDEyLjY2OSAxMC40MDkgMTMuMDkwOUMxMC44MzEgMTMuNTEyOSAxMS40MDMzIDEzLjc0OTkgMTIgMTMuNzQ5OUMxMi41OTY3IDEzLjc0OTkgMTMuMTY5IDEzLjUxMjkgMTMuNTkxIDEzLjA5MDlDMTQuMDEyOSAxMi42NjkgMTQuMjUgMTIuMDk2NyAxNC4yNSAxMS40OTk5VjExLjI3OTlDMTQuMjUgMTEuMDgxIDE0LjMyOSAxMC44OTAzIDE0LjQ2OTcgMTAuNzQ5NkMxNC42MTAzIDEwLjYwOSAxNC44MDExIDEwLjUyOTkgMTUgMTAuNTI5OUgxOC42NUwxNS42NSA1LjY2OTk1QzE1LjU3IDUuNTI5OTUgMTUuNDkgNS40Njk5NSAxNS4zOSA1LjQ2OTk1SDguNjJDOC41NzI3NiA1LjQ3MTEyIDguNTI2NjYgNS40ODQ2NyA4LjQ4NjMgNS41MDkyM0M4LjQ0NTk0IDUuNTMzOCA4LjQxMjc0IDUuNTY4NTMgOC4zOSA1LjYwOTk1TDUuMzUgMTAuNTI5OVpcIiBmaWxsPVwiIzAwMDAwMFwiLz48L3N2Zz4nLFxyXG5cdGNhbGVuZGFyOlxyXG4gICAgJzxzdmcgZmlsbD1cIiMwMDAwMDBcIiB3aWR0aD1cIjgwMHB4XCIgaGVpZ2h0PVwiODAwcHhcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTI2Ni44MTUgNTM3LjcwOGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnptMTgyLjc3IDBjMCAyMi42Mi0xOC4zNCA0MC45Ni00MC45NiA0MC45NnMtNDAuOTYtMTguMzQtNDAuOTYtNDAuOTYgMTguMzQtNDAuOTYgNDAuOTYtNDAuOTYgNDAuOTYgMTguMzQgNDAuOTYgNDAuOTZ6bTE4Mi43NzUgMGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnptMTgyLjc3IDBjMCAyMi42Mi0xOC4zNCA0MC45Ni00MC45NiA0MC45NnMtNDAuOTYtMTguMzQtNDAuOTYtNDAuOTYgMTguMzQtNDAuOTYgNDAuOTYtNDAuOTYgNDAuOTYgMTguMzQgNDAuOTYgNDAuOTZ6TTI2Ni44MTUgNjc5LjM0N2MwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnptMTgyLjc3IDBjMCAyMi42Mi0xOC4zNCA0MC45Ni00MC45NiA0MC45NnMtNDAuOTYtMTguMzQtNDAuOTYtNDAuOTYgMTguMzQtNDAuOTYgNDAuOTYtNDAuOTYgNDAuOTYgMTguMzQgNDAuOTYgNDAuOTZ6bTE4Mi43NzUgMGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnptMTgyLjc3IDBjMCAyMi42Mi0xOC4zNCA0MC45Ni00MC45NiA0MC45NnMtNDAuOTYtMTguMzQtNDAuOTYtNDAuOTYgMTguMzQtNDAuOTYgNDAuOTYtNDAuOTYgNDAuOTYgMTguMzQgNDAuOTYgNDAuOTZ6TTI2Ni44MTUgODIwLjk4OGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnptMTgyLjc3IDBjMCAyMi42Mi0xOC4zNCA0MC45Ni00MC45NiA0MC45NnMtNDAuOTYtMTguMzQtNDAuOTYtNDAuOTYgMTguMzQtNDAuOTYgNDAuOTYtNDAuOTYgNDAuOTYgMTguMzQgNDAuOTYgNDAuOTZ6bTE4Mi43NzUgMGMwIDIyLjYyLTE4LjM0IDQwLjk2LTQwLjk2IDQwLjk2cy00MC45Ni0xOC4zNC00MC45Ni00MC45NiAxOC4zNC00MC45NiA0MC45Ni00MC45NiA0MC45NiAxOC4zNCA0MC45NiA0MC45NnptMTgyLjc3IDBjMCAyMi42Mi0xOC4zNCA0MC45Ni00MC45NiA0MC45NnMtNDAuOTYtMTguMzQtNDAuOTYtNDAuOTYgMTguMzQtNDAuOTYgNDAuOTYtNDAuOTYgNDAuOTYgMTguMzQgNDAuOTYgNDAuOTZ6TTIyOC4xOCA4MS45MTh2MTUzLjZjMCAxMS4zMTEgOS4xNjkgMjAuNDggMjAuNDggMjAuNDhzMjAuNDgtOS4xNjkgMjAuNDgtMjAuNDh2LTE1My42YzAtMTEuMzExLTkuMTY5LTIwLjQ4LTIwLjQ4LTIwLjQ4cy0yMC40OCA5LjE2OS0yMC40OCAyMC40OHptNTI4LjA5IDB2MTUzLjZjMCAxMS4zMTEgOS4xNjkgMjAuNDggMjAuNDggMjAuNDhzMjAuNDgtOS4xNjkgMjAuNDgtMjAuNDh2LTE1My42YzAtMTEuMzExLTkuMTY5LTIwLjQ4LTIwLjQ4LTIwLjQ4cy0yMC40OCA5LjE2OS0yMC40OCAyMC40OHpcIi8+PHBhdGggZD1cIk04OTAuODc3IDEzNy41MTdjMzMuOTMxIDAgNjEuNDQgMjcuNTA5IDYxLjQ0IDYxLjQ0djcwMy4zNzVjMCAzMy45MzEtMjcuNTA5IDYxLjQ0LTYxLjQ0IDYxLjQ0aC03NTcuNzZjLTMzLjkzMSAwLTYxLjQ0LTI3LjUwOS02MS40NC02MS40NFYxOTguOTU3YzAtMzMuOTMxIDI3LjUwOS02MS40NCA2MS40NC02MS40NGg3NTcuNzZ6bS03NTcuNzYgNDAuOTZjLTExLjMwOSAwLTIwLjQ4IDkuMTcxLTIwLjQ4IDIwLjQ4djcwMy4zNzVjMCAxMS4zMDkgOS4xNzEgMjAuNDggMjAuNDggMjAuNDhoNzU3Ljc2YzExLjMwOSAwIDIwLjQ4LTkuMTcxIDIwLjQ4LTIwLjQ4VjE5OC45NTdjMC0xMS4zMDktOS4xNzEtMjAuNDgtMjAuNDgtMjAuNDhoLTc1Ny43NnpcIi8+PHBhdGggZD1cIk01NzUuMDMgMzM4LjI4OGMwLTMzLjkzLTI3LjUxLTYxLjQ0LTYxLjQ0LTYxLjQ0cy02MS40NCAyNy41MS02MS40NCA2MS40NGMwIDMzLjkzIDI3LjUxIDYxLjQ0IDYxLjQ0IDYxLjQ0czYxLjQ0LTI3LjUxIDYxLjQ0LTYxLjQ0em00MC45NiAwYzAgNTYuNTUxLTQ1Ljg0OSAxMDIuNC0xMDIuNCAxMDIuNHMtMTAyLjQtNDUuODQ5LTEwMi40LTEwMi40YzAtNTYuNTUxIDQ1Ljg0OS0xMDIuNCAxMDIuNC0xMDIuNHMxMDIuNCA0NS44NDkgMTAyLjQgMTAyLjR6XCIvPjwvc3ZnPicsXHJcbiAgcGx1czogJzxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDYsIDYpXCI+PHBhdGggZD1cIk02IDVWLjVhLjUuNSAwIDAxMSAwVjZoNS41YS41LjUgMCAxMTAgMUg3djUuNWEuNS41IDAgMTEtMSAwVjdILjVhLjUuNSAwIDAxMC0xSDZ6XCIgZmlsbD1cIiMwMDAwMDBcIiBmaWxsLXJ1bGU9XCJyb3VuZFwiPjwvcGF0aD48L2c+PC9zdmc+JyxcclxuICBtZW51OiAnPHN2ZyB3aWR0aD1cIjgwMHB4XCIgaGVpZ2h0PVwiODAwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNCAxN0g4TTEyIDE3SDIwTTQgMTJIMjBNNCA3SDEyTTE2IDdIMjBcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+PC9zdmc+JyxcclxuICBzZWFyY2g6ICc8c3ZnIHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCI4MDBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAgNUM3LjIzODU4IDUgNSA3LjIzODU4IDUgMTBDNSAxMi43NjE0IDcuMjM4NTggMTUgMTAgMTVDMTEuMzgxIDE1IDEyLjYyOTYgMTQuNDQxNSAxMy41MzU1IDEzLjUzNTVDMTQuNDQxNSAxMi42Mjk2IDE1IDExLjM4MSAxNSAxMEMxNSA3LjIzODU4IDEyLjc2MTQgNSAxMCA1Wk0zIDEwQzMgNi4xMzQwMSA2LjEzNDAxIDMgMTAgM0MxMy44NjYgMyAxNyA2LjEzNDAxIDE3IDEwQzE3IDExLjU3MTkgMTYuNDgxIDEzLjAyMzkgMTUuNjA2MyAxNC4xOTIxTDIwLjcwNzEgMTkuMjkyOUMyMS4wOTc2IDE5LjY4MzQgMjEuMDk3NiAyMC4zMTY2IDIwLjcwNzEgMjAuNzA3MUMyMC4zMTY2IDIxLjA5NzYgMTkuNjgzNCAyMS4wOTc2IDE5LjI5MjkgMjAuNzA3MUwxNC4xOTIxIDE1LjYwNjNDMTMuMDIzOSAxNi40ODEgMTEuNTcxOSAxNyAxMCAxN0M2LjEzNDAxIDE3IDMgMTMuODY2IDMgMTBaXCIgLz48L3N2Zz4nLFxyXG4gIHN1bjogJzxzdmcgd2lkdGg9XCI4MDBweFwiIGhlaWdodD1cIjgwMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwieWVsbG93XCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1LjA5Njc3XCIvPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMi45NTU2IDMuMDgwNjVDMTIuOTU1NiAyLjU1Mjg2IDEyLjUyNzcgMi4xMjUgMTIgMi4xMjVDMTEuNDcyMiAyLjEyNSAxMS4wNDQzIDIuNTUyODYgMTEuMDQ0MyAzLjA4MDY1TDExLjA0NDMgNS42NDA3OEMxMS4zNTYxIDUuNTk0MzIgMTEuNjc1MyA1LjU3MDI0IDEyIDUuNTcwMjRDMTIuMzI0NyA1LjU3MDI0IDEyLjY0MzggNS41OTQzMSAxMi45NTU2IDUuNjQwNzZMMTIuOTU1NiAzLjA4MDY1Wk0xMi45NTU2IDE4LjM1OTRDMTIuNjQzOCAxOC40MDU5IDEyLjMyNDcgMTguNDI5OSAxMiAxOC40Mjk5QzExLjY3NTMgMTguNDI5OSAxMS4zNTYxIDE4LjQwNTggMTEuMDQ0MyAxOC4zNTk0TDExLjA0NDMgMjAuOTE5NEMxMS4wNDQzIDIxLjQ0NzEgMTEuNDcyMiAyMS44NzUgMTIgMjEuODc1QzEyLjUyNzcgMjEuODc1IDEyLjk1NTYgMjEuNDQ3MSAxMi45NTU2IDIwLjkxOTRMMTIuOTU1NiAxOC4zNTk0WlwiIC8+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIwLjkxOTQgMTIuOTU1NkMyMS40NDcxIDEyLjk1NTYgMjEuODc1IDEyLjUyNzcgMjEuODc1IDEyQzIxLjg3NSAxMS40NzIyIDIxLjQ0NzEgMTEuMDQ0MyAyMC45MTk0IDExLjA0NDNMMTguMzU5MiAxMS4wNDQzQzE4LjQwNTcgMTEuMzU2MSAxOC40Mjk4IDExLjY3NTMgMTguNDI5OCAxMkMxOC40Mjk4IDEyLjMyNDcgMTguNDA1NyAxMi42NDM4IDE4LjM1OTIgMTIuOTU1NkwyMC45MTk0IDEyLjk1NTZaTTUuNjQwNiAxMi45NTU2QzUuNTk0MTUgMTIuNjQzOCA1LjU3MDA4IDEyLjMyNDcgNS41NzAwOCAxMkM1LjU3MDA4IDExLjY3NTMgNS41OTQxNiAxMS4zNTYxIDUuNjQwNjIgMTEuMDQ0M0wzLjA4MDY0IDExLjA0NDNDMi41NTI4NiAxMS4wNDQzIDIuMTI1IDExLjQ3MjIgMi4xMjUgMTJDMi4xMjUgMTIuNTI3NyAyLjU1Mjg2IDEyLjk1NTYgMy4wODA2NCAxMi45NTU2TDUuNjQwNiAxMi45NTU2WlwiIC8+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE4Ljk4MjggNi4zNjg3NkMxOS4zNTYgNS45OTU1NSAxOS4zNTYgNS4zOTA0NyAxOC45ODI4IDUuMDE3MjdDMTguNjA5NiA0LjY0NDA3IDE4LjAwNDUgNC42NDQwNyAxNy42MzEzIDUuMDE3MjdMMTUuODIwOSA2LjgyNzY0QzE2LjA3NDMgNy4wMTUyOCAxNi4zMTY5IDcuMjIzOTEgMTYuNTQ2NiA3LjQ1MzU0QzE2Ljc3NjIgNy42ODMxNSAxNi45ODQ4IDcuOTI1ODEgMTcuMTcyNCA4LjE3OTEyTDE4Ljk4MjggNi4zNjg3NlpNOC4xNzg5OCAxNy4xNzI1QzcuOTI1NjcgMTYuOTg0OSA3LjY4MzAyIDE2Ljc3NjMgNy40NTM0MSAxNi41NDY3QzcuMjIzNzggMTYuMzE3MSA3LjAxNTE0IDE2LjA3NDQgNi44Mjc1MSAxNS44MjExTDUuMDE3NDIgMTcuNjMxMUM0LjY0NDIyIDE4LjAwNDMgNC42NDQyMiAxOC42MDk0IDUuMDE3NDIgMTguOTgyNkM1LjM5MDYyIDE5LjM1NTggNS45OTU3IDE5LjM1NTggNi4zNjg5MSAxOC45ODI2TDguMTc4OTggMTcuMTcyNVpcIiAvPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk02LjM2ODg4IDUuMDE3MjJDNS45OTU2OCA0LjY0NDAyIDUuMzkwNiA0LjY0NDAyIDUuMDE3MzkgNS4wMTcyMkM0LjY0NDE5IDUuMzkwNDMgNC42NDQxOSA1Ljk5NTUxIDUuMDE3MzkgNi4zNjg3MUw2LjgyNzc2IDguMTc5MDhDNy4wMTU0IDcuOTI1NzQgNy4yMjQwMyA3LjY4MzA2IDcuNDUzNjYgNy40NTM0MkM3LjY4MzI3IDcuMjIzODEgNy45MjU5MyA3LjAxNTIgOC4xNzkyNCA2LjgyNzU4TDYuMzY4ODggNS4wMTcyMlpNMTcuMTcyNyAxNS44MjFDMTYuOTg1MSAxNi4wNzQzIDE2Ljc3NjQgMTYuMzE3IDE2LjU0NjggMTYuNTQ2NkMxNi4zMTcyIDE2Ljc3NjIgMTYuMDc0NSAxNi45ODQ5IDE1LjgyMTIgMTcuMTcyNUwxNy42MzEzIDE4Ljk4MjZDMTguMDA0NSAxOS4zNTU4IDE4LjYwOTUgMTkuMzU1OCAxOC45ODI4IDE4Ljk4MjZDMTkuMzU2IDE4LjYwOTQgMTkuMzU2IDE4LjAwNDMgMTguOTgyOCAxNy42MzExTDE3LjE3MjcgMTUuODIxWlwiIC8+PC9zdmc+JyxcclxuICBtb29uOiAnPHN2ZyB3aWR0aD1cIjgwMHB4XCIgaGVpZ2h0PVwiODAwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJncmV5XCI+PHBhdGggZD1cIk0xMi4wNTU3IDMuNTk5NzRDMTIuMjc1MiAzLjI4MTMgMTIuMjkxMyAyLjg2NDg0IDEyLjA5NzIgMi41MzAzM0MxMS45MDMxIDIuMTk1ODIgMTEuNTMzNSAyLjAwMzI0IDExLjE0ODEgMi4wMzU3OUM2LjAyMzUxIDIuNDY4NjggMiA2Ljc2MzkyIDIgMTJDMiAxNy41MjI4IDYuNDc3MTUgMjIgMTIgMjJDMTcuMjM2IDIyIDIxLjUzMTMgMTcuOTc2NCAyMS45NjQyIDEyLjg1MThDMjEuOTk2NyAxMi40NjY0IDIxLjgwNDEgMTIuMDk2OCAyMS40Njk2IDExLjkwMjdDMjEuMTM1MSAxMS43MDg2IDIwLjcxODcgMTEuNzI0OCAyMC40MDAyIDExLjk0NDNDMTkuNDM0MSAxMi42MTAyIDE4LjI2NDEgMTMgMTcgMTNDMTMuNjg2MyAxMyAxMSAxMC4zMTM3IDExIDYuOTk5OTZDMTEgNS43MzU4OSAxMS4zODk4IDQuNTY1ODcgMTIuMDU1NyAzLjU5OTc0WlwiIC8+PC9zdmc+JyxcclxuICBwZW46ICc8c3ZnIHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCI4MDBweFwiIHZpZXdCb3g9XCIwIDAgMjggMThcIj48ZyBpZD1cIm91dFwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc2tldGNoOnR5cGU9XCJNU1BhZ2VcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNSwwKVwiPjxwYXRoIGQ9XCJNMi4yNSwxMi45Mzc4OTA2IEwyLjI1LDE1Ljc1IEw1LjA2MjEwOTQzLDE1Ljc1IEwxMy4zNTU5NTc1LDcuNDU2MTUxOTIgTDEwLjU0Mzg0ODEsNC42NDQwNDI0OSBMMi4yNSwxMi45Mzc4OTA2IEwyLjI1LDEyLjkzNzg5MDYgTDIuMjUsMTIuOTM3ODkwNiBaIE0xNS41MzA2NTU1LDUuMjgxNDUzOTYgQzE1LjgyMzExNDgsNC45ODg5OTQ1OCAxNS44MjMxMTQ4LDQuNTE2NTYwMiAxNS41MzA2NTU1LDQuMjI0MTAwODIgTDEzLjc3NTg5OTIsMi40NjkzNDQ1NCBDMTMuNDgzNDM5OCwyLjE3Njg4NTE1IDEzLjAxMTAwNTQsMi4xNzY4ODUxNSAxMi43MTg1NDYsMi40NjkzNDQ1NCBMMTEuMzQ2MjM2NiwzLjg0MTY1Mzk0IEwxNC4xNTgzNDYxLDYuNjUzNzYzMzcgTDE1LjUzMDY1NTUsNS4yODE0NTM5NiBMMTUuNTMwNjU1NSw1LjI4MTQ1Mzk2IEwxNS41MzA2NTU1LDUuMjgxNDUzOTYgWlwiIGlkPVwicGF0aFwiIGZpbGw9XCIjNTU0ZjRmXCIgc2tldGNoOnR5cGU9XCJNU1NoYXBlR3JvdXBcIj48L3BhdGg+PC9nPjwvc3ZnPicsXHJcbiAgY2lyY2xlOiAnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgaWQ9XCJjb2xvci1tYXJrXCI+PHBhdGggZD1cIk0xMiA3YTUgNSAwIDExMCAxMCA1IDUgMCAwMTAtMTB6XCIgPjwvcGF0aD48L3N2Zz4nLFxyXG59O1xyXG5cclxuZXhwb3J0IHsgc3ZncyB9OyIsImltcG9ydCB7IHN2Z3MgfSBmcm9tICcuLi9zdmdzL3N2Z3MuanMnO1xyXG5pbXBvcnQgJy4uL3N0eWxlL3RvcC1iYXIuY3NzJ1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVUb3BCYXIoKSB7XHJcblx0Y29uc3QgdG9wQmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dG9wQmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvcC1iYXItY29udGFpbmVyJyk7XHJcblxyXG5cdGNvbnN0IGJ1cmdlck1lbnUgPSBjcmVhdGVidXJnZXJNZW51KCk7XHJcbiAgY29uc3QgcXVpY2tTZWFyY2ggPSBjcmVhdGVRdWlja1NlYXJjaCgpO1xyXG4gIGNvbnN0IHRvb2dsZVRoZW1lID0gY3JlYXRlVG9nZ2xlKCk7XHJcblxyXG5cdHRvcEJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChidXJnZXJNZW51KTtcclxuXHR0b3BCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQocXVpY2tTZWFyY2gpO1xyXG5cdHRvcEJhckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b29nbGVUaGVtZSk7XHJcblxyXG5cdHJldHVybiB0b3BCYXJDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZWJ1cmdlck1lbnUoKSB7XHJcblx0Y29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdG1lbnUuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyLW1lbnUnKTtcclxuXHRtZW51LmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG5cdG1lbnUuaW5uZXJIVE1MID0gc3Zncy5tZW51O1xyXG5cclxuXHRyZXR1cm4gbWVudTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUXVpY2tTZWFyY2goKSB7XHJcblx0Y29uc3QgcXVpY2tTZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRxdWlja1NlYXJjaC5jbGFzc0xpc3QuYWRkKCdxdWljay1zZWFyY2gnKTtcclxuXHRxdWlja1NlYXJjaC5pbm5lckhUTUwgPSBzdmdzLnNlYXJjaDtcclxuXHJcblx0Y29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdGlucHV0LnBsYWNlaG9sZGVyID0gJ1NlYXJjaC4uLic7XHJcblxyXG5cdHF1aWNrU2VhcmNoLmFwcGVuZENoaWxkKGlucHV0KTtcclxuXHJcblx0cmV0dXJuIHF1aWNrU2VhcmNoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb2dnbGUoKSB7XHJcbiBjb25zdCB0b2dnbGUgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ3RvZ2xlLXRoZW1lJyk7XHJcblx0dG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG5cdHRvZ2dsZS5pbm5lckhUTUwgPSBzdmdzLnN1bjtcclxuICB0b2dnbGUuaW5uZXJIVE1MICs9IHN2Z3MubW9vbjtcclxuICBcclxuXHRjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjaXJjbGUuY2xhc3NMaXN0LmFkZCgnY2lyY2xlJyk7XHJcbiAgXHJcbiAgdG9nZ2xlLmFwcGVuZENoaWxkKGNpcmNsZSk7XHJcbiAgXHJcbiAgcmV0dXJuIHRvZ2dsZTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVUb3BCYXIgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgZ2VuZXJhdGVUb3BCYXIgfSBmcm9tICcuL3RvcC1iYXIvdG9wLWJhci5qcyc7XHJcbmltcG9ydCB7IGdlbmVyYXRlU2lkZUJhciB9IGZyb20gJy4vc2lkZS1iYXIvc2lkZS1iYXIuanMnO1xyXG5cclxuY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWNvbnRhaW5lcicpO1xyXG5jb25zdCB0b3BCYXIgPSBnZW5lcmF0ZVRvcEJhcigpO1xyXG5jb25zdCBzaWRlQmFyID0gZ2VuZXJhdGVTaWRlQmFyKCk7XHJcbmNvbnNvbGUubG9nKHNpZGVCYXIpO1xyXG5cclxucGFnZS5hcHBlbmRDaGlsZCh0b3BCYXIpO1xyXG5wYWdlLmFwcGVuZENoaWxkKHNpZGVCYXJbMV0pO1xyXG5wYWdlLmFwcGVuZENoaWxkKHNpZGVCYXJbMF0pO1xyXG5cclxuY29uc29sZS5sb2coXCJpdCdzIHVwIHRvIHN0YXJ0XCIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=