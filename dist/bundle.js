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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./images/view-icon-dark.svg */ \"./src/images/view-icon-dark.svg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./images/star-icon-color.svg */ \"./src/images/star-icon-color.svg\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./images/view-icon.svg */ \"./src/images/view-icon.svg\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ./images/star-icon.svg */ \"./src/images/star-icon.svg\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ./images/search-icon.svg */ \"./src/images/search-icon.svg\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ./images/instagram-icon.svg */ \"./src/images/instagram-icon.svg\");\nvar ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ./images/quote.svg */ \"./src/images/quote.svg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);\n// Module\nexports.push([module.i, \"@charset \\\"UTF-8\\\";\\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n/* Document\\n   ========================================================================== */\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\nhtml {\\n  line-height: 1.15;\\n  /* 1 */\\n  -webkit-text-size-adjust: 100%;\\n  /* 2 */ }\\n\\n/* Sections\\n   ========================================================================== */\\n/**\\n * Remove the margin in all browsers.\\n */\\nbody {\\n  margin: 0; }\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\nmain {\\n  display: block; }\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0; }\\n\\n/* Grouping content\\n   ========================================================================== */\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\nhr {\\n  box-sizing: content-box;\\n  /* 1 */\\n  height: 0;\\n  /* 1 */\\n  overflow: visible;\\n  /* 2 */ }\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\npre {\\n  font-family: monospace, monospace;\\n  /* 1 */\\n  font-size: 1em;\\n  /* 2 */ }\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\na {\\n  background-color: transparent;\\n  /* Add some by Sasha Good */\\n  text-decoration: none;\\n  transition: .25s ease-in-out; }\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\nabbr[title] {\\n  border-bottom: none;\\n  /* 1 */\\n  text-decoration: underline;\\n  /* 2 */\\n  text-decoration: underline dotted;\\n  /* 2 */ }\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\nb,\\nstrong {\\n  font-weight: bolder; }\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace;\\n  /* 1 */\\n  font-size: 1em;\\n  /* 2 */ }\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\nsmall {\\n  font-size: 80%; }\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline; }\\n\\nsub {\\n  bottom: -0.25em; }\\n\\nsup {\\n  top: -0.5em; }\\n\\n/* Embedded content\\n   ========================================================================== */\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\nimg {\\n  border-style: none; }\\n\\n/* Forms\\n   ========================================================================== */\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit;\\n  /* 1 */\\n  font-size: 100%;\\n  /* 1 */\\n  line-height: 1.15;\\n  /* 1 */\\n  margin: 0;\\n  /* 2 */ }\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\nbutton,\\ninput {\\n  /* 1 */\\n  overflow: visible; }\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\nbutton,\\nselect {\\n  /* 1 */\\n  text-transform: none; }\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button; }\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0; }\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText; }\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em; }\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\nlegend {\\n  box-sizing: border-box;\\n  /* 1 */\\n  color: inherit;\\n  /* 2 */\\n  display: table;\\n  /* 1 */\\n  max-width: 100%;\\n  /* 1 */\\n  padding: 0;\\n  /* 3 */\\n  white-space: normal;\\n  /* 1 */ }\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\nprogress {\\n  vertical-align: baseline; }\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\ntextarea {\\n  overflow: auto; }\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  box-sizing: border-box;\\n  /* 1 */\\n  padding: 0;\\n  /* 2 */ }\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto; }\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield;\\n  /* 1 */\\n  outline-offset: -2px;\\n  /* 2 */ }\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none; }\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button;\\n  /* 1 */\\n  font: inherit;\\n  /* 2 */ }\\n\\n/* Interactive\\n   ========================================================================== */\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\ndetails {\\n  display: block; }\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\nsummary {\\n  display: list-item; }\\n\\n/* Misc\\n   ========================================================================== */\\n/**\\n * Add the correct display in IE 10+.\\n */\\ntemplate {\\n  display: none; }\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n[hidden] {\\n  display: none; }\\n\\nul,\\nol {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0; }\\n  ul li,\\n  ol li {\\n    margin: 0;\\n    padding: 0; }\\n\\nbutton,\\ninput[type=\\\"submit\\\"],\\n[role=\\\"button\\\"] {\\n  background: transparent;\\n  border: none;\\n  padding: 0;\\n  margin: 0;\\n  font-size: \\\"Montserrat\\\", sans-serif;\\n  cursor: pointer; }\\n  button:hover, button:focus,\\n  input[type=\\\"submit\\\"]:hover,\\n  input[type=\\\"submit\\\"]:focus,\\n  [role=\\\"button\\\"]:hover,\\n  [role=\\\"button\\\"]:focus {\\n    outline: none;\\n    border: none; }\\n\\nimg {\\n  display: block; }\\n\\n.text-color-main {\\n  color: #1F1F1F; }\\n  .text-color-main a {\\n    color: #1F1F1F; }\\n\\n.text-color-second {\\n  color: #525252; }\\n  .text-color-second a {\\n    color: #525252; }\\n\\n.text-color-white {\\n  color: #fff; }\\n  .text-color-white a {\\n    color: #fff; }\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-size: 56px;\\n  font-weight: 700;\\n  line-height: 1.2;\\n  margin: 0;\\n  padding: 0; }\\n\\n.color-btn {\\n  max-width: 400px;\\n  width: auto;\\n  height: 48px;\\n  background: #F6E336;\\n  border-radius: 2px;\\n  text-align: center;\\n  font-size: 12px;\\n  font-weight: 500;\\n  line-height: 1.5;\\n  line-height: 48px;\\n  font-weight: bold;\\n  text-transform: uppercase;\\n  letter-spacing: 1.5px;\\n  word-spacing: .5px;\\n  color: #1F1F1F;\\n  box-shadow: 1px 1px 12px #DAC826;\\n  transition: .25s ease-in-out; }\\n  .color-btn a {\\n    color: #1F1F1F;\\n    padding: 0 30px;\\n    display: block; }\\n  .color-btn:hover {\\n    box-shadow: 2px 2px 24px #DAC826; }\\n\\n.br_small {\\n  border-radius: 2px; }\\n\\n.br_middle {\\n  border-radius: 8px; }\\n\\n.br_circle {\\n  border-radius: 100%; }\\n\\n.main-card-title {\\n  font-size: 18px;\\n  line-height: 1.5;\\n  font-weight: bold; }\\n  .main-card-title a {\\n    color: #1F1F1F; }\\n    .main-card-title a:hover {\\n      color: #525252;\\n      border-bottom: 1px solid #525252; }\\n\\n.main-card-desc {\\n  font-size: 14px;\\n  font-weight: 500;\\n  line-height: 1.5;\\n  font-weight: 400;\\n  color: #525252; }\\n\\n.main-block-heading {\\n  font-size: 32px;\\n  font-weight: 700;\\n  line-height: 1.4;\\n  color: #1F1F1F;\\n  margin-bottom: 18px; }\\n\\n.mb24 {\\n  margin-bottom: 24px; }\\n\\n.mb34 {\\n  margin-bottom: 34px; }\\n\\n.mb78 {\\n  margin-bottom: 78px; }\\n\\n.block-padding {\\n  padding: 78px 0; }\\n\\n.font-medium {\\n  font-weight: 500; }\\n\\n.font-semibold {\\n  font-weight: 600; }\\n\\n.font-bold {\\n  font-weight: 700; }\\n\\n.bg {\\n  background: #FDF7f7; }\\n\\n.trn {\\n  transition: .25s ease-in-out; }\\n  .trn a {\\n    transition: .25s ease-in-out; }\\n\\n.posrelative {\\n  position: relative; }\\n\\n.overhidden {\\n  overflow: hidden; }\\n\\n.paragraphs p:not(:last-child) {\\n  margin-bottom: 24px; }\\n\\n.post-data {\\n  font-size: 12px;\\n  font-weight: 500;\\n  line-height: 1.5;\\n  color: #1F1F1F; }\\n  .post-data .views,\\n  .post-data .star {\\n    min-height: 20px;\\n    padding-left: 20px; }\\n  .post-data .views {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat left center;\\n    background-size: 14px;\\n    margin-right: 24px; }\\n  .post-data .star {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat left center;\\n    background-size: 14px; }\\n  .post-data .category {\\n    margin-left: 24px; }\\n    .post-data .category a {\\n      color: #1F1F1F;\\n      border-bottom: 1px solid transparent;\\n      transition: .25s ease-in-out; }\\n      .post-data .category a:hover {\\n        color: #525252;\\n        border-color: #525252; }\\n  .post-data.-opacity {\\n    color: #C4C4C4; }\\n    .post-data.-opacity .views {\\n      background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") no-repeat left center;\\n      background-size: 14px; }\\n    .post-data.-opacity .star {\\n      background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") no-repeat left center;\\n      background-size: 14px; }\\n\\n.hover-block {\\n  transition: .25s ease-in-out; }\\n  .hover-block:hover {\\n    transform: scale(1.005);\\n    box-shadow: 0 1px 18px rgba(0, 0, 0, 0.1); }\\n\\nfont-14 {\\n  font-size: 14px; }\\n\\nbody {\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-size: 16px;\\n  line-height: 1.6;\\n  color: #1F1F1F;\\n  /* -webkit-appearance: none; для отображения элемента, используя\\n       базовые стили платформы на основе темы операционной системы.\\n    */\\n  -webkit-appearance: none; }\\n\\n*,\\n*:after,\\n*:before {\\n  box-sizing: border-box; }\\n\\n.container {\\n  max-width: 1214px;\\n  width: 100%;\\n  padding: 0 20px;\\n  margin-left: auto;\\n  margin-right: auto; }\\n\\n.main-header .main-header--row {\\n  padding: 24px 0;\\n  border-bottom: 1px solid #EFE5E5;\\n  display: grid;\\n  grid-template-columns: 1fr max-content;\\n  grid-gap: 34px;\\n  align-items: center; }\\n\\n.main-header .main-header__logo img {\\n  display: block; }\\n\\n.main-header .main-header__nav {\\n  position: absolute;\\n  left: 50%;\\n  transform: translateX(-50%); }\\n  .main-header .main-header__nav ul {\\n    display: flex; }\\n  .main-header .main-header__nav li:not(:last-child) {\\n    margin-right: 40px; }\\n  .main-header .main-header__nav li a {\\n    border-bottom: 1px solid transparent; }\\n    .main-header .main-header__nav li a:hover {\\n      color: #525252;\\n      border-color: #525252; }\\n\\n.main-header .main-header__search-icon {\\n  width: 17px;\\n  height: 17px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") no-repeat center;\\n  background-size: contain; }\\n  .main-header .main-header__search-icon:hover {\\n    opacity: .75; }\\n\\n.home-banner .home-banner--row {\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  grid-gap: 34px;\\n  align-items: center; }\\n\\n.home-banner h1 {\\n  font-size: 46px;\\n  margin-bottom: 24px; }\\n\\n.home-banner .paragraphs {\\n  max-width: 540px; }\\n\\n.home-banner .color-btn {\\n  max-width: 210px; }\\n\\n.home-popular {\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  grid-gap: 34px; }\\n  .home-popular .block {\\n    display: inline-table;\\n    border-radius: 8px;\\n    overflow: hidden; }\\n    .home-popular .block:nth-child(1), .home-popular .block:nth-child(3) {\\n      margin-top: -34px; }\\n    .home-popular .block img {\\n      width: 100%;\\n      display: block;\\n      -o-object-fit: cover;\\n      object-fit: cover;\\n      -o-object-position: middle;\\n      object-position: middle; }\\n    .home-popular .block .over-data {\\n      width: 100%;\\n      height: 100%;\\n      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(41, 41, 41, 0.7) 100%);\\n      position: absolute;\\n      left: 0;\\n      top: 0; }\\n      .home-popular .block .over-data .w {\\n        padding: 0 14px;\\n        position: absolute;\\n        bottom: 20px;\\n        left: 0; }\\n      .home-popular .block .over-data .title {\\n        margin-bottom: 10px; }\\n        .home-popular .block .over-data .title a:hover {\\n          opacity: .75; }\\n\\n.all-tags--wrapper {\\n  overflow-x: auto;\\n  padding-bottom: 16px; }\\n\\n.all-tags {\\n  display: grid;\\n  grid-template-columns: repeat(10, 1fr);\\n  grid-gap: 24px; }\\n  .all-tags .block img {\\n    border-radius: 8px; }\\n  .all-tags .block span {\\n    font-size: 14px;\\n    font-weight: 500;\\n    line-height: 1.5;\\n    background: #fff;\\n    border-radius: 8px;\\n    padding: 0 7px;\\n    position: absolute;\\n    left: 8px;\\n    bottom: 14px; }\\n\\n.main-content-post {\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  grid-gap: 34px; }\\n  .main-content-post .block img {\\n    border-radius: 8px;\\n    width: 100%;\\n    -o-object-fit: cover;\\n    object-fit: cover;\\n    -o-object-position: middle;\\n    object-position: middle;\\n    margin-bottom: 14px; }\\n  .main-content-post .block .post-data {\\n    margin: 12px 0; }\\n\\n.author-block .author-block--content {\\n  max-width: 600px;\\n  width: 100%;\\n  margin: 0 auto; }\\n  .author-block .author-block--content img {\\n    width: 140px;\\n    margin-left: auto;\\n    margin-right: auto;\\n    border: 8px solid #EFE5E5;\\n    box-sizing: border-box;\\n    box-shadow: 0 0 48px #C6B6B6; }\\n  .author-block .author-block--content .author-name {\\n    font-size: 18px;\\n    text-transform: uppercase;\\n    text-align: center; }\\n  .author-block .author-block--content .social-link {\\n    text-align: center; }\\n    .author-block .author-block--content .social-link a {\\n      display: inline-block;\\n      line-height: 24px;\\n      grid-template-columns: 24px 1fr;\\n      align-items: center;\\n      grid-gap: 8px; }\\n      .author-block .author-block--content .social-link a:hover {\\n        opacity: .75; }\\n    .author-block .author-block--content .social-link .icon {\\n      width: 24px;\\n      height: 24px;\\n      display: inline-block;\\n      margin-right: 8px; }\\n      .author-block .author-block--content .social-link .icon.-icon-instagram {\\n        background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \") no-repeat center;\\n        background-size: contain; }\\n  .author-block .author-block--content .main-card-desc {\\n    text-align: center; }\\n  .author-block .author-block--content .color-btn {\\n    max-width: 290px;\\n    margin: 0 auto; }\\n\\n.author-quote {\\n  padding: 24px 20px;\\n  background: linear-gradient(265.78deg, #F8A0A0 0.26%, #F8C4C4 100%); }\\n  .author-quote .author-quote__text {\\n    max-width: 460px;\\n    margin: 0 auto;\\n    padding-top: 42px;\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \") no-repeat center top;\\n    background-size: 30px;\\n    font-family: \\\"PT Serif\\\", serif;\\n    font-size: 18px;\\n    font-weight: bold;\\n    font-style: italic;\\n    text-align: center; }\\n\\n.main-footer {\\n  margin-top: 70px; }\\n  .main-footer .footer-menu {\\n    text-align: center; }\\n    .main-footer .footer-menu ul {\\n      display: inline-flex; }\\n    .main-footer .footer-menu li {\\n      font-size: 14px; }\\n      .main-footer .footer-menu li:not(:last-child) {\\n        margin-right: 54px; }\\n      .main-footer .footer-menu li a {\\n        color: #1F1F1F;\\n        border-bottom: 1px solid transparent; }\\n        .main-footer .footer-menu li a:hover {\\n          color: #525252;\\n          border-color: #525252; }\\n  .main-footer .copyr {\\n    padding: 34px 0;\\n    border-top: 1px solid #EFE5E5; }\\n    .main-footer .copyr .copyr__content {\\n      max-width: 520px;\\n      text-align: center;\\n      margin: 0 auto;\\n      font-size: 12px;\\n      font-weight: 500;\\n      line-height: 1.5;\\n      font-weight: 400; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nconsole.log('Hello world');\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/images/instagram-icon.svg":
/*!***************************************!*\
  !*** ./src/images/instagram-icon.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"./images/instagram-icon.svg\");\n\n//# sourceURL=webpack:///./src/images/instagram-icon.svg?");

/***/ }),

/***/ "./src/images/quote.svg":
/*!******************************!*\
  !*** ./src/images/quote.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"./images/quote.svg\");\n\n//# sourceURL=webpack:///./src/images/quote.svg?");

/***/ }),

/***/ "./src/images/search-icon.svg":
/*!************************************!*\
  !*** ./src/images/search-icon.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"./images/search-icon.svg\");\n\n//# sourceURL=webpack:///./src/images/search-icon.svg?");

/***/ }),

/***/ "./src/images/star-icon-color.svg":
/*!****************************************!*\
  !*** ./src/images/star-icon-color.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"./images/star-icon-color.svg\");\n\n//# sourceURL=webpack:///./src/images/star-icon-color.svg?");

/***/ }),

/***/ "./src/images/star-icon.svg":
/*!**********************************!*\
  !*** ./src/images/star-icon.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"./images/star-icon.svg\");\n\n//# sourceURL=webpack:///./src/images/star-icon.svg?");

/***/ }),

/***/ "./src/images/view-icon-dark.svg":
/*!***************************************!*\
  !*** ./src/images/view-icon-dark.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"./images/view-icon-dark.svg\");\n\n//# sourceURL=webpack:///./src/images/view-icon-dark.svg?");

/***/ }),

/***/ "./src/images/view-icon.svg":
/*!**********************************!*\
  !*** ./src/images/view-icon.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"./images/view-icon.svg\");\n\n//# sourceURL=webpack:///./src/images/view-icon.svg?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/main.scss?");

/***/ })

/******/ });