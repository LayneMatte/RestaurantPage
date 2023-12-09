/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pageWipe: () => (/* binding */ pageWipe),
/* harmony export */   tabListener: () => (/* binding */ tabListener)
/* harmony export */ });
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);




(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.aboutPageCreation)()

function pageWipe(){
    (function(){
        let body = document.querySelector('body')
        let count = body.childElementCount
        for (let i=0;i < count;i++){
            body.removeChild(body.children[0])
        }
    })()
}
function tabListener(){
    let tabs = document.querySelectorAll('.tab')

    tabs.forEach(
        (tabs) => tabs.addEventListener(
            'click', (e)=> {
                let text = e.target.textContent
                if(text === 'About'){(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.aboutPageCreation)()}
                    else if(text === 'Menu'){(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuPageCreation)()}
                    else if(text === 'Contact'){(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contactPageCreation)()}
            }
        )
    )
}







/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutPageCreation: () => (/* binding */ aboutPageCreation),
/* harmony export */   createA: () => (/* binding */ createA),
/* harmony export */   createDiv: () => (/* binding */ createDiv),
/* harmony export */   createImg: () => (/* binding */ createImg)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _src_restaurant_rachel_claire_4992835_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _src_github_mark_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);







function createDiv(element,className,text) {
    element = document.querySelector(`${element}`);
    let el = document.createElement('div');
    el.classList.add(`${className}`);
        if(!text){}
        else {
            el.textContent = `${text}`;
        }
    element.appendChild(el)
}
function createA(element,className,href,text) {
    element = document.querySelector(`${element}`);
    let el = document.createElement('a');
    el.classList.add(`${className}`);
        if(!text){}
        else {
            el.textContent = `${text}`;
        }
    el.href = `${href}`
    element.appendChild(el)
}
function createImg(element, className, imgSrc) {
    element = document.querySelector(`${element}`);
    let el = document.createElement('img');
    el.classList.add(`${className}`)
    el.src = `${imgSrc}`; 
    element.appendChild(el)
}
function aboutPageCreation(){
(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.pageWipe)()
// Creating Page Structure
createDiv('body','header')
createDiv('body','main')
createDiv('body','footer')
// Creating Header Content
createDiv('.header','tab','About');
createDiv('.header','tab','Menu');
createDiv('.header','tab','Contact');
// Creating Main Content
createDiv('.main','headline','Restaurant - Est. 1438')
createDiv('.main','container')
createImg('.container','rest-img',`${_src_restaurant_rachel_claire_4992835_jpg__WEBPACK_IMPORTED_MODULE_2__}`)
// createDiv('.container','imgText','photo by rachel claire')
createDiv('.container','about-text','This is a restaurant. A place to eat food. Anyone is welcome! There are tables and chairs to sit down. People called waiters will wait on you. They can bring you drinks and food. They will ask you want to eat and you tell them! Restaurant has been in business since 1438. Generations of people have owned restaurant. Food style food has been a staple of restaurant since its conception. Restaurant will continue to serve its customers as long as humans eat food.')
// Creating Footer Content
createA('.footer','github','https://github.com/LayneMatte','Github @ LayneMatte')
createImg('.footer','logo',`${_src_github_mark_png__WEBPACK_IMPORTED_MODULE_3__}`)
;(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.tabListener)()
}




/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(13), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {

    font-family: 'Oswald';
  
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2');
    
    font-style: normal;
  
  }
html {
    height: clamp(70vh,85vh,auto) ;
    font-family: 'Oswald';
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
body {
    box-sizing: border-box;
    height: clamp(70vh,85vh,auto);
    width: clamp(70vw,75vw,80vw);
    background-color: #fff0db;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;}
.header {
    width: 100%;
    font-size: 1.7rem;
    background-color:  #705c5f;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10%;
    border-radius: 10px 10px 0px 0px;
}
.main {
    box-sizing: border-box;
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.container {
    width: clamp(70vw,75vw,80vw);
    height:clamp(20vw,30vw,40vw);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5%;
}
.headline {
    font-weight: 600;
    font-size: 2rem;
    font-style: italic;
}
.about-text {
    width: clamp(20vw,28vw,40vw);
    height: clamp(30vh,50vh,55vh);
    font-weight: 300;
    font-size: 1.4rem;
    text-align: start;
}
.rest-img{
    box-sizing: border-box;
    width: clamp(20vw,35vw,40vw);
    height: clamp(45vh,50vh,50vh);
    border-radius: 30px;
}
.tab{
    transition-duration: .2s;

}
.tab:hover {
    transform: scale(110%);
}
.tab.tab:active {
    transform: scale(100%);
}
.footer {
    width: 100%;
    height: 8%;
    padding-bottom: 1%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;

}
.logo {
    height: 25px;
    width: 25px;
    padding-left: 1%;
}
a {
    text-decoration: none;
}
a:visited {
    color: black;
}
.foodPic{
    height: 100%;
    width: 100%;
    border-radius: 5px 0px 0px 5px;
}
.card-container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: auto;
    row-gap: 1rem;
    column-gap: 1rem;
    padding: 5%;
}
.card-container > * {
    display: grid;
    grid-template-columns: 1.5fr 1.3fr .5fr;
    height: 25vh;
    max-width: 35vw;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 5px;
}
.foodText {
    padding: 2%;
}
.imgText {
    text-align: center;
    min-width: 15%;
    height: 4%;
    background-color: white;
    color: black;
    position: relative;
    right: 40%;
    top: 35%;
}
.textContainer > *{
    width: 100%;
    height: 100%;
}
.priceContainer > * {
    height: 100%;
    width: 100%;
}
div[class="title"]{
    text-align: end;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
}
div[class="body"]{
    font-size: 18px;
    font-weight: 200;
    text-align: center;
    padding: 10%;
}
div[class="price"]{
    font-size: 20px;
    font-weight: 300;
    color: grey;
    text-align: center;
}
div[class="number"]{
    font-size: 18px;
    color: black;
    font-style: italic;
    font-weight: 200;
    text-align: center;
}
.contactUs {
    padding-left: 2%;
    padding-right: 2%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: 25vh;
    width: 60vh;
    font-size: 30px;
    border-bottom: solid black 2px;
}
.contactUs > * {
    font-size: 18px;
    padding-top: 2%;
    text-decoration: none;
}
.resthours {
    padding-left: 2%;
    padding-right: 2%;
    height: 25vh;
    width: 60vh;
    text-align: center;
    font-size: 30px;
    border-bottom:  solid black 2px;
}
.resthours > * {
    font-size: 18px;
    text-align: center;
    padding-top: 2%;
}
.medialogo {
    gap: 5%;
    height: 8vh;
    width: 8vh;
    padding-right: 3%;
}
.medialinks {
    padding-left: 2%;
    padding-right: 2%;
    height: 8vh;
    width: 80vh;
    text-align: center;
    font-size: 25px;
}
.imgcontainer {
    height: 12vh;
    display:flex;
    flex-direction: row;
    justify-content: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,qBAAqB;;IAErB,4DAAwC;;IAExC,kBAAkB;;EAEpB;AACF;IACI,8BAA8B;IAC9B,qBAAqB;IACrB,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,sBAAsB;IACtB,6BAA6B;IAC7B,4BAA4B;IAC5B,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;IACnB,uHAAuH,CAAC;AAC5H;IACI,WAAW;IACX,iBAAiB;IACjB,0BAA0B;IAC1B,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;IACR,gCAAgC;AACpC;AACA;IACI,sBAAsB;IACtB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,4BAA4B;IAC5B,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,OAAO;AACX;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,4BAA4B;IAC5B,6BAA6B;IAC7B,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,4BAA4B;IAC5B,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,wBAAwB;;AAE5B;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;;AAEtB;AACA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,WAAW;IACX,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,oBAAoB;IACpB,aAAa;IACb,gBAAgB;IAChB,WAAW;AACf;AACA;IACI,aAAa;IACb,uCAAuC;IACvC,YAAY;IACZ,eAAe;IACf,2CAA2C;IAC3C,kBAAkB;AACtB;AACA;IACI,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,cAAc;IACd,UAAU;IACV,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,QAAQ;AACZ;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,YAAY;IACZ,WAAW;AACf;AACA;IACI,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,eAAe;IACf,8BAA8B;AAClC;AACA;IACI,eAAe;IACf,eAAe;IACf,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,+BAA+B;AACnC;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,OAAO;IACP,WAAW;IACX,UAAU;IACV,iBAAiB;AACrB;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;AAC3B","sourcesContent":["@font-face {\n\n    font-family: 'Oswald';\n  \n    src: url('./Oswald.ttf') format('woff2');\n    \n    font-style: normal;\n  \n  }\nhtml {\n    height: clamp(70vh,85vh,auto) ;\n    font-family: 'Oswald';\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\nbody {\n    box-sizing: border-box;\n    height: clamp(70vh,85vh,auto);\n    width: clamp(70vw,75vw,80vw);\n    background-color: #fff0db;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 10px;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;}\n.header {\n    width: 100%;\n    font-size: 1.7rem;\n    background-color:  #705c5f;\n    color: white;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    gap: 10%;\n    border-radius: 10px 10px 0px 0px;\n}\n.main {\n    box-sizing: border-box;\n    margin: 0px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.container {\n    width: clamp(70vw,75vw,80vw);\n    height:clamp(20vw,30vw,40vw);\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n}\n.headline {\n    font-weight: 600;\n    font-size: 2rem;\n    font-style: italic;\n}\n.about-text {\n    width: clamp(20vw,28vw,40vw);\n    height: clamp(30vh,50vh,55vh);\n    font-weight: 300;\n    font-size: 1.4rem;\n    text-align: start;\n}\n.rest-img{\n    box-sizing: border-box;\n    width: clamp(20vw,35vw,40vw);\n    height: clamp(45vh,50vh,50vh);\n    border-radius: 30px;\n}\n.tab{\n    transition-duration: .2s;\n\n}\n.tab:hover {\n    transform: scale(110%);\n}\n.tab.tab:active {\n    transform: scale(100%);\n}\n.footer {\n    width: 100%;\n    height: 8%;\n    padding-bottom: 1%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n\n}\n.logo {\n    height: 25px;\n    width: 25px;\n    padding-left: 1%;\n}\na {\n    text-decoration: none;\n}\na:visited {\n    color: black;\n}\n.foodPic{\n    height: 100%;\n    width: 100%;\n    border-radius: 5px 0px 0px 5px;\n}\n.card-container{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-auto-flow: auto;\n    row-gap: 1rem;\n    column-gap: 1rem;\n    padding: 5%;\n}\n.card-container > * {\n    display: grid;\n    grid-template-columns: 1.5fr 1.3fr .5fr;\n    height: 25vh;\n    max-width: 35vw;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n    border-radius: 5px;\n}\n.foodText {\n    padding: 2%;\n}\n.imgText {\n    text-align: center;\n    min-width: 15%;\n    height: 4%;\n    background-color: white;\n    color: black;\n    position: relative;\n    right: 40%;\n    top: 35%;\n}\n.textContainer > *{\n    width: 100%;\n    height: 100%;\n}\n.priceContainer > * {\n    height: 100%;\n    width: 100%;\n}\ndiv[class=\"title\"]{\n    text-align: end;\n    font-size: 22px;\n    font-weight: 500;\n    text-align: center;\n}\ndiv[class=\"body\"]{\n    font-size: 18px;\n    font-weight: 200;\n    text-align: center;\n    padding: 10%;\n}\ndiv[class=\"price\"]{\n    font-size: 20px;\n    font-weight: 300;\n    color: grey;\n    text-align: center;\n}\ndiv[class=\"number\"]{\n    font-size: 18px;\n    color: black;\n    font-style: italic;\n    font-weight: 200;\n    text-align: center;\n}\n.contactUs {\n    padding-left: 2%;\n    padding-right: 2%;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    height: 25vh;\n    width: 60vh;\n    font-size: 30px;\n    border-bottom: solid black 2px;\n}\n.contactUs > * {\n    font-size: 18px;\n    padding-top: 2%;\n    text-decoration: none;\n}\n.resthours {\n    padding-left: 2%;\n    padding-right: 2%;\n    height: 25vh;\n    width: 60vh;\n    text-align: center;\n    font-size: 30px;\n    border-bottom:  solid black 2px;\n}\n.resthours > * {\n    font-size: 18px;\n    text-align: center;\n    padding-top: 2%;\n}\n.medialogo {\n    gap: 5%;\n    height: 8vh;\n    width: 8vh;\n    padding-right: 3%;\n}\n.medialinks {\n    padding-left: 2%;\n    padding-right: 2%;\n    height: 8vh;\n    width: 80vh;\n    text-align: center;\n    font-size: 25px;\n}\n.imgcontainer {\n    height: 12vh;\n    display:flex;\n    flex-direction: row;\n    justify-content: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7cecd0da606d25b0905d.ttf";

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5d7c219eb89a2555ed4.jpg";

/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3524c849ab38de4be923.png";

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuPageCreation: () => (/* binding */ menuPageCreation)
/* harmony export */ });
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _src_github_mark_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _src_burger_robin_stickel_70497_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _src_burrito_pixabay_461198_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _src_bisque_foodie_factor_539451_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _src_dumplings_cats_coming_955137_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _src_frenchfries_dzenina_lukac_1583884_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var _src_sandwhich_rajesh_tp_1603901_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22);
/* harmony import */ var _src_pancakes_ash_376464_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23);
/* harmony import */ var _src_macarons_arminas_raudys_808941_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24);












function menuPageCreation(){
(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.pageWipe)()
// Creating Page Structure
;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('body','header')
;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('body','main')
;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('body','footer')
// Creating Header Content
;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('.header','tab','About');
(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('.header','tab','Menu  ');
(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('.header','tab','Contact');
// // Main Content
const foodFactory = (title,body,number,imgSrc) => {
    return {
       title,
       body,
       number,
       imgSrc
    }
   } 
   let menu = [];
   const burger = foodFactory('Borger!','Its a BORGER!','10.55',`${_src_burger_robin_stickel_70497_jpg__WEBPACK_IMPORTED_MODULE_3__}`)
   const burrito = foodFactory('Burrito','Flour tortilla with beans','4.22',`${_src_burrito_pixabay_461198_jpg__WEBPACK_IMPORTED_MODULE_4__}`)
   const bisque = foodFactory('Tomato Bisque','A Pureed mix of tomato and bisque!','8.55',`${_src_bisque_foodie_factor_539451_jpg__WEBPACK_IMPORTED_MODULE_5__}`)
   const dumplings = foodFactory('Pork Dumplings','Pork filled dumplings','2.40',`${_src_dumplings_cats_coming_955137_jpg__WEBPACK_IMPORTED_MODULE_6__}`)
   const frenchFries = foodFactory('French Fries','Fried potato sticks','4.22',`${_src_frenchfries_dzenina_lukac_1583884_jpg__WEBPACK_IMPORTED_MODULE_7__}`)
   const sandwhich = foodFactory('Sandwhich','Two pieces of bread with stuff in between','5.44',`${_src_sandwhich_rajesh_tp_1603901_jpg__WEBPACK_IMPORTED_MODULE_8__}`)
   const pancakes = foodFactory('Pancakes','Batter Cakes','3.22',`${_src_pancakes_ash_376464_jpg__WEBPACK_IMPORTED_MODULE_9__}`)
   const macarons = foodFactory('Macarons','French cookies yo','2.55',`${_src_macarons_arminas_raudys_808941_jpg__WEBPACK_IMPORTED_MODULE_10__}`)
   menu = [burger,burrito,bisque,dumplings,frenchFries,sandwhich,pancakes,macarons]
   function menuGeneration (){
   ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('.main','card-container')
       for(let i=0;i < menu.length; i++){
           (0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('.card-container',`card-${i}`)
               ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createImg)(`.card-${i}`,'foodPic',menu[i].imgSrc)
               ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)(`.card-${i}`,`textContainer-${i}`)
                   ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)(`.textContainer-${i}`,'title',`${menu[i].title}`)
                   ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)(`.textContainer-${i}`,'body',`${menu[i].body}`)
               ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)(`.card-${i}`,`priceContainer-${i}`)
                   ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)(`.priceContainer-${i}`,`price`,`Price`)
                   ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)(`.priceContainer-${i}`,'number',`${menu[i].number}`)
       }
   }
menuGeneration()
// Creating Footer Content
;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createA)('.footer','github','https://github.com/LayneMatte','Github @ LayneMatte')
;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createImg)('.footer','logo',`${_src_github_mark_png__WEBPACK_IMPORTED_MODULE_2__}`)
;(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.tabListener)()
}


/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6692b3b56f0e6b5a02a3.jpg";

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9b4fce6be2f1da887f9.jpg";

/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "202404704b6ec068ecea.jpg";

/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43ae9646e65680e04e90.jpg";

/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3aeacb9a6d629ed992c.jpg";

/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec0f584117e3f42c27bd.jpg";

/***/ }),
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba6bd9f6f428639452a3.jpg";

/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2093647f3eb209fc3bb1.jpg";

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactPageCreation: () => (/* binding */ contactPageCreation)
/* harmony export */ });
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _src_github_mark_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _src_facebook_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
/* harmony import */ var _src_twitter_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var _src_instagram_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);







function contactPageCreation(){
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.pageWipe)()
// Creating Page Structure
;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('body','header')
;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('body','main')
;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('body','footer')
// Creating Header Content
;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('.header','tab','About');
(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('.header','tab','Menu');
(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('.header','tab','Contact');
// Creating Main Content
(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('.main','contactUs','Contact Us')
    ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('.contactUs','address','123 Bistro Way,Town,State,Zip Code')
    ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('.contactUs','phone','823-999-00021')
    ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('.contactUs','email','restaurant@rest.com')
;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('.main','resthours','Restaurant Hours')
    ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('.resthours','hours','M-F: 4-8')
    ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('.resthours','hours','Sat: 2-8')
    ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('.resthours','hours','Sun: Closed')
;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('.main','followUs')
    ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('.followUs','medialinks','Follow us on all major social media platforms!')
    ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('.followUs','imgcontainer')
        ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createImg)('.imgcontainer','medialogo',`${_src_facebook_png__WEBPACK_IMPORTED_MODULE_3__}`)
        ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createImg)('.imgcontainer','medialogo',`${_src_twitter_png__WEBPACK_IMPORTED_MODULE_4__}`)
        ;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createImg)('.imgcontainer','medialogo',`${_src_instagram_png__WEBPACK_IMPORTED_MODULE_5__}`)
// Creating Footer Content
;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createA)('.footer','github','https://github.com/LayneMatte','Github @ LayneMatte')
;(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createImg)('.footer','logo',`${_src_github_mark_png__WEBPACK_IMPORTED_MODULE_2__}`)
;(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.tabListener)()
}

/***/ }),
/* 26 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6193007d6158d2ce56e0.png";

/***/ }),
/* 27 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f990c447077b874f281.png";

/***/ }),
/* 28 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b7ee16e018ef098aac7.png";

/***/ })
/******/ 	]);
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixhQUFhLGNBQWMsY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsa0JBQWtCLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVks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O0FBQ2IsUUFBUSxxREFBUyxnQ0FBZ0MsOENBQVEsQ0FBQztBQUMxRCxRQUFRLHFEQUFTLGdDQUFnQyw2Q0FBTyxDQUFDO0FBQ3pELFFBQVEscURBQVMsZ0NBQWdDLCtDQUFTLENBQUM7QUFDM0Q7QUFDQSxtREFBTztBQUNQLHFEQUFTLHFCQUFxQixpREFBTSxDQUFDO0FBQ3JDLHVEQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFib3V0UGFnZUNyZWF0aW9uIH0gZnJvbSBcIi4vYWJvdXQuanNcIjtcbmltcG9ydCB7IG1lbnVQYWdlQ3JlYXRpb24gfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQge2NvbnRhY3RQYWdlQ3JlYXRpb259IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcblxuYWJvdXRQYWdlQ3JlYXRpb24oKVxuXG5leHBvcnQgZnVuY3Rpb24gcGFnZVdpcGUoKXtcbiAgICAoZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICAgICAgbGV0IGNvdW50ID0gYm9keS5jaGlsZEVsZW1lbnRDb3VudFxuICAgICAgICBmb3IgKGxldCBpPTA7aSA8IGNvdW50O2krKyl7XG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGJvZHkuY2hpbGRyZW5bMF0pXG4gICAgICAgIH1cbiAgICB9KSgpXG59XG5leHBvcnQgZnVuY3Rpb24gdGFiTGlzdGVuZXIoKXtcbiAgICBsZXQgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKVxuXG4gICAgdGFicy5mb3JFYWNoKFxuICAgICAgICAodGFicykgPT4gdGFicy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2NsaWNrJywgKGUpPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gZS50YXJnZXQudGV4dENvbnRlbnRcbiAgICAgICAgICAgICAgICBpZih0ZXh0ID09PSAnQWJvdXQnKXthYm91dFBhZ2VDcmVhdGlvbigpfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHRleHQgPT09ICdNZW51Jyl7bWVudVBhZ2VDcmVhdGlvbigpfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHRleHQgPT09ICdDb250YWN0Jyl7Y29udGFjdFBhZ2VDcmVhdGlvbigpfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgKVxufVxuXG5cblxuXG5cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcGFnZVdpcGUsIHRhYkxpc3RlbmVyIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCByZXN0YXVyYW50IGZyb20gJy4uL3NyYy9yZXN0YXVyYW50LXJhY2hlbC1jbGFpcmUtNDk5MjgzNS5qcGcnO1xuaW1wb3J0IGdpdGh1YiBmcm9tICcuLi9zcmMvZ2l0aHViLW1hcmsucG5nJ1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpdihlbGVtZW50LGNsYXNzTmFtZSx0ZXh0KSB7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7ZWxlbWVudH1gKTtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKTtcbiAgICAgICAgaWYoIXRleHQpe31cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IGAke3RleHR9YDtcbiAgICAgICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWwpXG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQShlbGVtZW50LGNsYXNzTmFtZSxocmVmLHRleHQpIHtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtlbGVtZW50fWApO1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKTtcbiAgICAgICAgaWYoIXRleHQpe31cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IGAke3RleHR9YDtcbiAgICAgICAgfVxuICAgIGVsLmhyZWYgPSBgJHtocmVmfWBcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsKVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltZyhlbGVtZW50LCBjbGFzc05hbWUsIGltZ1NyYykge1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2VsZW1lbnR9YCk7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9YClcbiAgICBlbC5zcmMgPSBgJHtpbWdTcmN9YDsgXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbClcbn1cbmV4cG9ydCBmdW5jdGlvbiBhYm91dFBhZ2VDcmVhdGlvbigpe1xucGFnZVdpcGUoKVxuLy8gQ3JlYXRpbmcgUGFnZSBTdHJ1Y3R1cmVcbmNyZWF0ZURpdignYm9keScsJ2hlYWRlcicpXG5jcmVhdGVEaXYoJ2JvZHknLCdtYWluJylcbmNyZWF0ZURpdignYm9keScsJ2Zvb3RlcicpXG4vLyBDcmVhdGluZyBIZWFkZXIgQ29udGVudFxuY3JlYXRlRGl2KCcuaGVhZGVyJywndGFiJywnQWJvdXQnKTtcbmNyZWF0ZURpdignLmhlYWRlcicsJ3RhYicsJ01lbnUnKTtcbmNyZWF0ZURpdignLmhlYWRlcicsJ3RhYicsJ0NvbnRhY3QnKTtcbi8vIENyZWF0aW5nIE1haW4gQ29udGVudFxuY3JlYXRlRGl2KCcubWFpbicsJ2hlYWRsaW5lJywnUmVzdGF1cmFudCAtIEVzdC4gMTQzOCcpXG5jcmVhdGVEaXYoJy5tYWluJywnY29udGFpbmVyJylcbmNyZWF0ZUltZygnLmNvbnRhaW5lcicsJ3Jlc3QtaW1nJyxgJHtyZXN0YXVyYW50fWApXG4vLyBjcmVhdGVEaXYoJy5jb250YWluZXInLCdpbWdUZXh0JywncGhvdG8gYnkgcmFjaGVsIGNsYWlyZScpXG5jcmVhdGVEaXYoJy5jb250YWluZXInLCdhYm91dC10ZXh0JywnVGhpcyBpcyBhIHJlc3RhdXJhbnQuIEEgcGxhY2UgdG8gZWF0IGZvb2QuIEFueW9uZSBpcyB3ZWxjb21lISBUaGVyZSBhcmUgdGFibGVzIGFuZCBjaGFpcnMgdG8gc2l0IGRvd24uIFBlb3BsZSBjYWxsZWQgd2FpdGVycyB3aWxsIHdhaXQgb24geW91LiBUaGV5IGNhbiBicmluZyB5b3UgZHJpbmtzIGFuZCBmb29kLiBUaGV5IHdpbGwgYXNrIHlvdSB3YW50IHRvIGVhdCBhbmQgeW91IHRlbGwgdGhlbSEgUmVzdGF1cmFudCBoYXMgYmVlbiBpbiBidXNpbmVzcyBzaW5jZSAxNDM4LiBHZW5lcmF0aW9ucyBvZiBwZW9wbGUgaGF2ZSBvd25lZCByZXN0YXVyYW50LiBGb29kIHN0eWxlIGZvb2QgaGFzIGJlZW4gYSBzdGFwbGUgb2YgcmVzdGF1cmFudCBzaW5jZSBpdHMgY29uY2VwdGlvbi4gUmVzdGF1cmFudCB3aWxsIGNvbnRpbnVlIHRvIHNlcnZlIGl0cyBjdXN0b21lcnMgYXMgbG9uZyBhcyBodW1hbnMgZWF0IGZvb2QuJylcbi8vIENyZWF0aW5nIEZvb3RlciBDb250ZW50XG5jcmVhdGVBKCcuZm9vdGVyJywnZ2l0aHViJywnaHR0cHM6Ly9naXRodWIuY29tL0xheW5lTWF0dGUnLCdHaXRodWIgQCBMYXluZU1hdHRlJylcbmNyZWF0ZUltZygnLmZvb3RlcicsJ2xvZ28nLGAke2dpdGh1Yn1gKVxudGFiTGlzdGVuZXIoKVxufVxuXG5cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vT3N3YWxkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG5cbiAgICBmb250LWZhbWlseTogJ09zd2FsZCc7XG4gIFxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnd29mZjInKTtcbiAgICBcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIFxuICB9XG5odG1sIHtcbiAgICBoZWlnaHQ6IGNsYW1wKDcwdmgsODV2aCxhdXRvKSA7XG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuYm9keSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IGNsYW1wKDcwdmgsODV2aCxhdXRvKTtcbiAgICB3aWR0aDogY2xhbXAoNzB2dyw3NXZ3LDgwdncpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYwZGI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAycHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDdweCAxM3B4IC0zcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggLTNweCAwcHggaW5zZXQ7fVxuLmhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM3MDVjNWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcbn1cbi5tYWluIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IGNsYW1wKDcwdncsNzV2dyw4MHZ3KTtcbiAgICBoZWlnaHQ6Y2xhbXAoMjB2dywzMHZ3LDQwdncpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNSU7XG59XG4uaGVhZGxpbmUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5hYm91dC10ZXh0IHtcbiAgICB3aWR0aDogY2xhbXAoMjB2dywyOHZ3LDQwdncpO1xuICAgIGhlaWdodDogY2xhbXAoMzB2aCw1MHZoLDU1dmgpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG4ucmVzdC1pbWd7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogY2xhbXAoMjB2dywzNXZ3LDQwdncpO1xuICAgIGhlaWdodDogY2xhbXAoNDV2aCw1MHZoLDUwdmgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4udGFie1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcblxufVxuLnRhYjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMTAlKTtcbn1cbi50YWIudGFiOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMDAlKTtcbn1cbi5mb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOCU7XG4gICAgcGFkZGluZy1ib3R0b206IDElO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuLmxvZ28ge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xufVxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4uZm9vZFBpY3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xufVxuLmNhcmQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtYXV0by1mbG93OiBhdXRvO1xuICAgIHJvdy1nYXA6IDFyZW07XG4gICAgY29sdW1uLWdhcDogMXJlbTtcbiAgICBwYWRkaW5nOiA1JTtcbn1cbi5jYXJkLWNvbnRhaW5lciA+ICoge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVmciAxLjNmciAuNWZyO1xuICAgIGhlaWdodDogMjV2aDtcbiAgICBtYXgtd2lkdGg6IDM1dnc7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uZm9vZFRleHQge1xuICAgIHBhZGRpbmc6IDIlO1xufVxuLmltZ1RleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDQlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDQwJTtcbiAgICB0b3A6IDM1JTtcbn1cbi50ZXh0Q29udGFpbmVyID4gKntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4ucHJpY2VDb250YWluZXIgPiAqIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5kaXZbY2xhc3M9XCJ0aXRsZVwiXXtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZGl2W2NsYXNzPVwiYm9keVwiXXtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTAlO1xufVxuZGl2W2NsYXNzPVwicHJpY2VcIl17XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZGl2W2NsYXNzPVwibnVtYmVyXCJde1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhY3RVcyB7XG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgaGVpZ2h0OiAyNXZoO1xuICAgIHdpZHRoOiA2MHZoO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCBibGFjayAycHg7XG59XG4uY29udGFjdFVzID4gKiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ucmVzdGhvdXJzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xuICAgIGhlaWdodDogMjV2aDtcbiAgICB3aWR0aDogNjB2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGJvcmRlci1ib3R0b206ICBzb2xpZCBibGFjayAycHg7XG59XG4ucmVzdGhvdXJzID4gKiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMiU7XG59XG4ubWVkaWFsb2dvIHtcbiAgICBnYXA6IDUlO1xuICAgIGhlaWdodDogOHZoO1xuICAgIHdpZHRoOiA4dmg7XG4gICAgcGFkZGluZy1yaWdodDogMyU7XG59XG4ubWVkaWFsaW5rcyB7XG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcbiAgICBoZWlnaHQ6IDh2aDtcbiAgICB3aWR0aDogODB2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuLmltZ2NvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMnZoO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSxxQkFBcUI7O0lBRXJCLDREQUF3Qzs7SUFFeEMsa0JBQWtCOztFQUVwQjtBQUNGO0lBQ0ksOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1SEFBdUgsQ0FBQztBQUM1SDtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1IsZ0NBQWdDO0FBQ3BDO0FB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ZmFtaWx5OiAnT3N3YWxkJztcXG4gIFxcbiAgICBzcmM6IHVybCgnLi9Pc3dhbGQudHRmJykgZm9ybWF0KCd3b2ZmMicpO1xcbiAgICBcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgXFxuICB9XFxuaHRtbCB7XFxuICAgIGhlaWdodDogY2xhbXAoNzB2aCw4NXZoLGF1dG8pIDtcXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmJvZHkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IGNsYW1wKDcwdmgsODV2aCxhdXRvKTtcXG4gICAgd2lkdGg6IGNsYW1wKDcwdncsNzV2dyw4MHZ3KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjBkYjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDJweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggN3B4IDEzcHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAtM3B4IDBweCBpbnNldDt9XFxuLmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM3MDVjNWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcXG59XFxuLm1haW4ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jb250YWluZXIge1xcbiAgICB3aWR0aDogY2xhbXAoNzB2dyw3NXZ3LDgwdncpO1xcbiAgICBoZWlnaHQ6Y2xhbXAoMjB2dywzMHZ3LDQwdncpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1JTtcXG59XFxuLmhlYWRsaW5lIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi5hYm91dC10ZXh0IHtcXG4gICAgd2lkdGg6IGNsYW1wKDIwdncsMjh2dyw0MHZ3KTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgzMHZoLDUwdmgsNTV2aCk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLnJlc3QtaW1ne1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogY2xhbXAoMjB2dywzNXZ3LDQwdncpO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDQ1dmgsNTB2aCw1MHZoKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuLnRhYntcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xcblxcbn1cXG4udGFiOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMTAlKTtcXG59XFxuLnRhYi50YWI6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMDAlKTtcXG59XFxuLmZvb3RlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDglO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcbi5sb2dvIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcXG59XFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuYTp2aXNpdGVkIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG4uZm9vZFBpY3tcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xcbn1cXG4uY2FyZC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtYXV0by1mbG93OiBhdXRvO1xcbiAgICByb3ctZ2FwOiAxcmVtO1xcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiA1JTtcXG59XFxuLmNhcmQtY29udGFpbmVyID4gKiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41ZnIgMS4zZnIgLjVmcjtcXG4gICAgaGVpZ2h0OiAyNXZoO1xcbiAgICBtYXgtd2lkdGg6IDM1dnc7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmZvb2RUZXh0IHtcXG4gICAgcGFkZGluZzogMiU7XFxufVxcbi5pbWdUZXh0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IDE1JTtcXG4gICAgaGVpZ2h0OiA0JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDogNDAlO1xcbiAgICB0b3A6IDM1JTtcXG59XFxuLnRleHRDb250YWluZXIgPiAqe1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ucHJpY2VDb250YWluZXIgPiAqIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuZGl2W2NsYXNzPVxcXCJ0aXRsZVxcXCJde1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5kaXZbY2xhc3M9XFxcImJvZHlcXFwiXXtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwJTtcXG59XFxuZGl2W2NsYXNzPVxcXCJwcmljZVxcXCJde1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmRpdltjbGFzcz1cXFwibnVtYmVyXFxcIl17XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNvbnRhY3RVcyB7XFxuICAgIHBhZGRpbmctbGVmdDogMiU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGhlaWdodDogMjV2aDtcXG4gICAgd2lkdGg6IDYwdmg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgYmxhY2sgMnB4O1xcbn1cXG4uY29udGFjdFVzID4gKiB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZy10b3A6IDIlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5yZXN0aG91cnMge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcXG4gICAgaGVpZ2h0OiAyNXZoO1xcbiAgICB3aWR0aDogNjB2aDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGJvcmRlci1ib3R0b206ICBzb2xpZCBibGFjayAycHg7XFxufVxcbi5yZXN0aG91cnMgPiAqIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAyJTtcXG59XFxuLm1lZGlhbG9nbyB7XFxuICAgIGdhcDogNSU7XFxuICAgIGhlaWdodDogOHZoO1xcbiAgICB3aWR0aDogOHZoO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcXG59XFxuLm1lZGlhbGlua3Mge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcXG4gICAgaGVpZ2h0OiA4dmg7XFxuICAgIHdpZHRoOiA4MHZoO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuLmltZ2NvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTJ2aDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiaW1wb3J0IHsgY3JlYXRlRGl2LCBjcmVhdGVBLCBjcmVhdGVJbWcgfSBmcm9tIFwiLi9hYm91dC5qc1wiO1xuaW1wb3J0IHsgcGFnZVdpcGUsIHRhYkxpc3RlbmVyIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBnaXRodWIgZnJvbSAnLi4vc3JjL2dpdGh1Yi1tYXJrLnBuZyc7XG5pbXBvcnQgZm9vZDEgZnJvbSAnLi4vc3JjL2J1cmdlci1yb2Jpbi1zdGlja2VsLTcwNDk3LmpwZyc7XG5pbXBvcnQgZm9vZDIgZnJvbSAnLi4vc3JjL2J1cnJpdG8tcGl4YWJheS00NjExOTguanBnJztcbmltcG9ydCBmb29kMyBmcm9tICcuLi9zcmMvYmlzcXVlLWZvb2RpZS1mYWN0b3ItNTM5NDUxLmpwZyc7XG5pbXBvcnQgZm9vZDQgZnJvbSAnLi4vc3JjL2R1bXBsaW5ncy1jYXRzLWNvbWluZy05NTUxMzcuanBnJztcbmltcG9ydCBmb29kNSBmcm9tICcuLi9zcmMvZnJlbmNoZnJpZXMtZHplbmluYS1sdWthYy0xNTgzODg0LmpwZyc7XG5pbXBvcnQgZm9vZDYgZnJvbSAnLi4vc3JjL3NhbmR3aGljaC1yYWplc2gtdHAtMTYwMzkwMS5qcGcnO1xuaW1wb3J0IGZvb2Q3IGZyb20gJy4uL3NyYy9wYW5jYWtlcy1hc2gtMzc2NDY0LmpwZyc7XG5pbXBvcnQgZm9vZDggZnJvbSAnLi4vc3JjL21hY2Fyb25zLWFybWluYXMtcmF1ZHlzLTgwODk0MS5qcGcnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVudVBhZ2VDcmVhdGlvbigpe1xucGFnZVdpcGUoKVxuLy8gQ3JlYXRpbmcgUGFnZSBTdHJ1Y3R1cmVcbmNyZWF0ZURpdignYm9keScsJ2hlYWRlcicpXG5jcmVhdGVEaXYoJ2JvZHknLCdtYWluJylcbmNyZWF0ZURpdignYm9keScsJ2Zvb3RlcicpXG4vLyBDcmVhdGluZyBIZWFkZXIgQ29udGVudFxuY3JlYXRlRGl2KCcuaGVhZGVyJywndGFiJywnQWJvdXQnKTtcbmNyZWF0ZURpdignLmhlYWRlcicsJ3RhYicsJ01lbnUgICcpO1xuY3JlYXRlRGl2KCcuaGVhZGVyJywndGFiJywnQ29udGFjdCcpO1xuLy8gLy8gTWFpbiBDb250ZW50XG5jb25zdCBmb29kRmFjdG9yeSA9ICh0aXRsZSxib2R5LG51bWJlcixpbWdTcmMpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgIHRpdGxlLFxuICAgICAgIGJvZHksXG4gICAgICAgbnVtYmVyLFxuICAgICAgIGltZ1NyY1xuICAgIH1cbiAgIH0gXG4gICBsZXQgbWVudSA9IFtdO1xuICAgY29uc3QgYnVyZ2VyID0gZm9vZEZhY3RvcnkoJ0JvcmdlciEnLCdJdHMgYSBCT1JHRVIhJywnMTAuNTUnLGAke2Zvb2QxfWApXG4gICBjb25zdCBidXJyaXRvID0gZm9vZEZhY3RvcnkoJ0J1cnJpdG8nLCdGbG91ciB0b3J0aWxsYSB3aXRoIGJlYW5zJywnNC4yMicsYCR7Zm9vZDJ9YClcbiAgIGNvbnN0IGJpc3F1ZSA9IGZvb2RGYWN0b3J5KCdUb21hdG8gQmlzcXVlJywnQSBQdXJlZWQgbWl4IG9mIHRvbWF0byBhbmQgYmlzcXVlIScsJzguNTUnLGAke2Zvb2QzfWApXG4gICBjb25zdCBkdW1wbGluZ3MgPSBmb29kRmFjdG9yeSgnUG9yayBEdW1wbGluZ3MnLCdQb3JrIGZpbGxlZCBkdW1wbGluZ3MnLCcyLjQwJyxgJHtmb29kNH1gKVxuICAgY29uc3QgZnJlbmNoRnJpZXMgPSBmb29kRmFjdG9yeSgnRnJlbmNoIEZyaWVzJywnRnJpZWQgcG90YXRvIHN0aWNrcycsJzQuMjInLGAke2Zvb2Q1fWApXG4gICBjb25zdCBzYW5kd2hpY2ggPSBmb29kRmFjdG9yeSgnU2FuZHdoaWNoJywnVHdvIHBpZWNlcyBvZiBicmVhZCB3aXRoIHN0dWZmIGluIGJldHdlZW4nLCc1LjQ0JyxgJHtmb29kNn1gKVxuICAgY29uc3QgcGFuY2FrZXMgPSBmb29kRmFjdG9yeSgnUGFuY2FrZXMnLCdCYXR0ZXIgQ2FrZXMnLCczLjIyJyxgJHtmb29kN31gKVxuICAgY29uc3QgbWFjYXJvbnMgPSBmb29kRmFjdG9yeSgnTWFjYXJvbnMnLCdGcmVuY2ggY29va2llcyB5bycsJzIuNTUnLGAke2Zvb2Q4fWApXG4gICBtZW51ID0gW2J1cmdlcixidXJyaXRvLGJpc3F1ZSxkdW1wbGluZ3MsZnJlbmNoRnJpZXMsc2FuZHdoaWNoLHBhbmNha2VzLG1hY2Fyb25zXVxuICAgZnVuY3Rpb24gbWVudUdlbmVyYXRpb24gKCl7XG4gICBjcmVhdGVEaXYoJy5tYWluJywnY2FyZC1jb250YWluZXInKVxuICAgICAgIGZvcihsZXQgaT0wO2kgPCBtZW51Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgY3JlYXRlRGl2KCcuY2FyZC1jb250YWluZXInLGBjYXJkLSR7aX1gKVxuICAgICAgICAgICAgICAgY3JlYXRlSW1nKGAuY2FyZC0ke2l9YCwnZm9vZFBpYycsbWVudVtpXS5pbWdTcmMpXG4gICAgICAgICAgICAgICBjcmVhdGVEaXYoYC5jYXJkLSR7aX1gLGB0ZXh0Q29udGFpbmVyLSR7aX1gKVxuICAgICAgICAgICAgICAgICAgIGNyZWF0ZURpdihgLnRleHRDb250YWluZXItJHtpfWAsJ3RpdGxlJyxgJHttZW51W2ldLnRpdGxlfWApXG4gICAgICAgICAgICAgICAgICAgY3JlYXRlRGl2KGAudGV4dENvbnRhaW5lci0ke2l9YCwnYm9keScsYCR7bWVudVtpXS5ib2R5fWApXG4gICAgICAgICAgICAgICBjcmVhdGVEaXYoYC5jYXJkLSR7aX1gLGBwcmljZUNvbnRhaW5lci0ke2l9YClcbiAgICAgICAgICAgICAgICAgICBjcmVhdGVEaXYoYC5wcmljZUNvbnRhaW5lci0ke2l9YCxgcHJpY2VgLGBQcmljZWApXG4gICAgICAgICAgICAgICAgICAgY3JlYXRlRGl2KGAucHJpY2VDb250YWluZXItJHtpfWAsJ251bWJlcicsYCR7bWVudVtpXS5udW1iZXJ9YClcbiAgICAgICB9XG4gICB9XG5tZW51R2VuZXJhdGlvbigpXG4vLyBDcmVhdGluZyBGb290ZXIgQ29udGVudFxuY3JlYXRlQSgnLmZvb3RlcicsJ2dpdGh1YicsJ2h0dHBzOi8vZ2l0aHViLmNvbS9MYXluZU1hdHRlJywnR2l0aHViIEAgTGF5bmVNYXR0ZScpXG5jcmVhdGVJbWcoJy5mb290ZXInLCdsb2dvJyxgJHtnaXRodWJ9YClcbnRhYkxpc3RlbmVyKClcbn1cbiIsImltcG9ydCB7IGNyZWF0ZURpdiwgY3JlYXRlQSwgY3JlYXRlSW1nIH0gZnJvbSBcIi4vYWJvdXQuanNcIjtcbmltcG9ydCB7IHBhZ2VXaXBlLCB0YWJMaXN0ZW5lciB9IGZyb20gXCIuL2luZGV4LmpzXCJcbmltcG9ydCBnaXRodWIgZnJvbSAnLi4vc3JjL2dpdGh1Yi1tYXJrLnBuZyc7XG5pbXBvcnQgZmFjZWJvb2sgZnJvbSAnLi4vc3JjL2ZhY2Vib29rLnBuZyc7XG5pbXBvcnQgdHdpdHRlciBmcm9tICcuLi9zcmMvdHdpdHRlci5wbmcnO1xuaW1wb3J0IGluc3RhZ3JhbSBmcm9tICcuLi9zcmMvaW5zdGFncmFtLnBuZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWN0UGFnZUNyZWF0aW9uKCl7XG4gICAgcGFnZVdpcGUoKVxuLy8gQ3JlYXRpbmcgUGFnZSBTdHJ1Y3R1cmVcbmNyZWF0ZURpdignYm9keScsJ2hlYWRlcicpXG5jcmVhdGVEaXYoJ2JvZHknLCdtYWluJylcbmNyZWF0ZURpdignYm9keScsJ2Zvb3RlcicpXG4vLyBDcmVhdGluZyBIZWFkZXIgQ29udGVudFxuY3JlYXRlRGl2KCcuaGVhZGVyJywndGFiJywnQWJvdXQnKTtcbmNyZWF0ZURpdignLmhlYWRlcicsJ3RhYicsJ01lbnUnKTtcbmNyZWF0ZURpdignLmhlYWRlcicsJ3RhYicsJ0NvbnRhY3QnKTtcbi8vIENyZWF0aW5nIE1haW4gQ29udGVudFxuY3JlYXRlRGl2KCcubWFpbicsJ2NvbnRhY3RVcycsJ0NvbnRhY3QgVXMnKVxuICAgIGNyZWF0ZURpdignLmNvbnRhY3RVcycsJ2FkZHJlc3MnLCcxMjMgQmlzdHJvIFdheSxUb3duLFN0YXRlLFppcCBDb2RlJylcbiAgICBjcmVhdGVEaXYoJy5jb250YWN0VXMnLCdwaG9uZScsJzgyMy05OTktMDAwMjEnKVxuICAgIGNyZWF0ZURpdignLmNvbnRhY3RVcycsJ2VtYWlsJywncmVzdGF1cmFudEByZXN0LmNvbScpXG5jcmVhdGVEaXYoJy5tYWluJywncmVzdGhvdXJzJywnUmVzdGF1cmFudCBIb3VycycpXG4gICAgY3JlYXRlRGl2KCcucmVzdGhvdXJzJywnaG91cnMnLCdNLUY6IDQtOCcpXG4gICAgY3JlYXRlRGl2KCcucmVzdGhvdXJzJywnaG91cnMnLCdTYXQ6IDItOCcpXG4gICAgY3JlYXRlRGl2KCcucmVzdGhvdXJzJywnaG91cnMnLCdTdW46IENsb3NlZCcpXG5jcmVhdGVEaXYoJy5tYWluJywnZm9sbG93VXMnKVxuICAgIGNyZWF0ZURpdignLmZvbGxvd1VzJywnbWVkaWFsaW5rcycsJ0ZvbGxvdyB1cyBvbiBhbGwgbWFqb3Igc29jaWFsIG1lZGlhIHBsYXRmb3JtcyEnKVxuICAgIGNyZWF0ZURpdignLmZvbGxvd1VzJywnaW1nY29udGFpbmVyJylcbiAgICAgICAgY3JlYXRlSW1nKCcuaW1nY29udGFpbmVyJywnbWVkaWFsb2dvJyxgJHtmYWNlYm9va31gKVxuICAgICAgICBjcmVhdGVJbWcoJy5pbWdjb250YWluZXInLCdtZWRpYWxvZ28nLGAke3R3aXR0ZXJ9YClcbiAgICAgICAgY3JlYXRlSW1nKCcuaW1nY29udGFpbmVyJywnbWVkaWFsb2dvJyxgJHtpbnN0YWdyYW19YClcbi8vIENyZWF0aW5nIEZvb3RlciBDb250ZW50XG5jcmVhdGVBKCcuZm9vdGVyJywnZ2l0aHViJywnaHR0cHM6Ly9naXRodWIuY29tL0xheW5lTWF0dGUnLCdHaXRodWIgQCBMYXluZU1hdHRlJylcbmNyZWF0ZUltZygnLmZvb3RlcicsJ2xvZ28nLGAke2dpdGh1Yn1gKVxudGFiTGlzdGVuZXIoKVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQwOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=