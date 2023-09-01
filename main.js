/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContactTab: () => (/* binding */ loadContactTab)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\nfunction loadContactTab() {\n    const contentDiv = document.getElementById('content');\n    contentDiv.innerHTML = ''; \n\n\n    const contactContainer = document.createElement('div');\n    contactContainer.classList.add('tab-container'); \n\n   \n    const contactHeading = document.createElement('h2');\n    contactHeading.textContent = 'Contact Us';\n    contactHeading.classList.add('tab-heading'); \n\n    \n    const contactInfo = document.createElement('p');\n    contactInfo.innerHTML = `\n        Address: 133 Main Street<br>\n        Phone: (33) 456-7890<br>\n        Email: chinesrestaurant@example.com\n    `;\n    contactInfo.classList.add('tab-text'); \n\n    const homeButton = document.createElement('button');\n    homeButton.textContent = 'Home';\n    homeButton.addEventListener('click', () => {\n        location.reload(); \n    });\n    // Create a \"Menu\" button\n    const menuButton = document.createElement('button');\n    menuButton.textContent = 'Menu';\n    menuButton.addEventListener('click', () => {\n        (0,_menu__WEBPACK_IMPORTED_MODULE_0__.loadMenuTab)();\n    });\n    contactContainer.appendChild(homeButton);\n    contactContainer.appendChild(menuButton);\n    contactContainer.appendChild(contactHeading);\n    contactContainer.appendChild(contactInfo);\n    \n\n    \n    contentDiv.appendChild(contactContainer);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\n// Function to clear content\nfunction clearContent() {\n    const contentDiv = document.getElementById('content');\n    contentDiv.innerHTML = ''; // Remove all child elements\n}\n\n// Event listener for Contact tab button\ndocument.getElementById('contact-tab').addEventListener('click', () => {\n    clearContent();\n    (0,_contact__WEBPACK_IMPORTED_MODULE_1__.loadContactTab)();\n});\n\n// Event listener for Menu tab button\ndocument.getElementById('menu-tab').addEventListener('click', () => {\n    clearContent();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenuTab)();\n});\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.loadPage)();\n});\n\n\ndocument.getElementById('home-button').addEventListener('click', () => {\n    location.reload();\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenuTab: () => (/* binding */ loadMenuTab)\n/* harmony export */ });\n\n\nfunction loadMenuTab() {\n    const contentDiv = document.getElementById('content');\n    contentDiv.innerHTML = ''; \n    \n    const menuContainer = document.createElement('div');\n    menuContainer.classList.add('tab-container'); \n\n    const menuHeading = document.createElement('h2');\n    menuHeading.textContent = 'Menu';\n    menuHeading.classList.add('tab-heading'); \n\n  \n    const menuList = document.createElement('ul');\n    menuList.classList.add('menu-list'); \n\n    \n    const menuItem1 = document.createElement('li');\n    menuItem1.textContent = '1. Special Dish - $12.99';\n\n    const menuItem2 = document.createElement('li');\n    menuItem2.textContent = '2. Chef\\'s Recommendation - $74.99';\n\n    \n    const homeButton = document.createElement('button');\n    homeButton.textContent = 'Home';\n    homeButton.addEventListener('click', () => {\n        location.reload(); \n    });\n    \n\n    menuList.appendChild(menuItem1);\n    menuList.appendChild(menuItem2);\n\n    \n    menuContainer.appendChild(menuHeading);\n    menuContainer.appendChild(menuList);\n\n    contentDiv.appendChild(homeButton);\n    contentDiv.appendChild(menuContainer);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadPage: () => (/* binding */ loadPage)\n/* harmony export */ });\nfunction loadPage() {\n    const contentDiv = document.getElementById('content');\n\n    // Create a headline (h1) element\n    const heading1 = document.createElement('h1');\n    heading1.textContent = 'Welcome to Our Restaurant'; // Fix variable name here\n    contentDiv.appendChild(heading1);\n\n    // Create an image element\n    const restaurantImage = document.createElement('img');\n    restaurantImage.id = 'restaurant-image';\n    restaurantImage.src = './images/restaurant-image.jpg';\n    restaurantImage.alt = 'Restaurant Interior';\n    restaurantImage.style.maxWidth = '100%';\n    restaurantImage.style.height = 'auto';\n    contentDiv.appendChild(restaurantImage);\n\n    // Create a headline (h2) element\n    const headline = document.createElement('h2'); // Declare 'headline' here\n    headline.textContent = 'About Us';\n    contentDiv.appendChild(headline);\n\n    // Create a paragraph (p) element for the restaurant description\n    const description = document.createElement('p');\n    description.textContent = 'We are a welcoming restaurant that offers a delightful dining experience. Our menu is made up of dishes prepared with the freshest ingredients. Come with your friends and family.';\n    contentDiv.appendChild(description);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;