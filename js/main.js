/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n//-------------------Scroll-----------------------\r\nconst scroll = document.querySelector('#scroll');\r\nconst content = document.querySelector('#content');\r\nscroll.addEventListener('click', scrollDown);\r\nfunction scrollDown(e) {\r\n    e.preventDefault();\r\n    let elemCord = content.getBoundingClientRect();\r\n    let elemTop = Math.abs(elemCord.top - 150);\r\n    scrollBy({\r\n        top: elemTop,\r\n        left: 0,\r\n        behavior: 'smooth'\r\n    });\r\n}\r\n//-------------------Parallax--------------------\r\nwindow.onload = function() {\r\n    const parallax = document.querySelector('#parallax');\r\n    if(parallax) {\r\n        const clouds = document.querySelector('#clouds');\r\n        const mountain = document.querySelector('#mountain');\r\n        const human = document.querySelector('#human');\r\n\r\n        //Coefficient\r\n        const forClouds = 40;\r\n        const forMountain = 20;\r\n        const forHuman = 10;\r\n\r\n        //Speed Animation\r\n        const speed = 0.05;\r\n\r\n        let positionX = 0;\r\n        let positionY = 0;\r\n        let coordXprocent = 0;\r\n        let coordYprocent = 0;\r\n\r\n        function setMouseParallaxStyle() {\r\n            const distX = coordXprocent - positionX;\r\n            const distY = coordYprocent - positionY;\r\n\r\n            positionX = positionX + (distX * speed);\r\n            positionY = positionY + (distY * speed);\r\n\r\n            //Style\r\n            clouds.style.cssText = `transform: translate(${positionX / forClouds}%,${positionY / forClouds}%);`;\r\n            mountain.style.cssText = `transform: translate(${positionX / forMountain}%,${positionY / forMountain}%);`;\r\n            human.style.cssText = `transform: translate(${positionX / forHuman}%,${positionY / forHuman}%);`;\r\n\r\n            requestAnimationFrame(setMouseParallaxStyle);\r\n        }\r\n        setMouseParallaxStyle();\r\n\r\n        parallax.addEventListener('mousemove', function(e) {\r\n            const parallaxWidth = parallax.offsetWidth;\r\n            const parallaxHeight = parallax.offsetHeight;\r\n\r\n            const coordX = e.pageX - parallaxWidth / 2;\r\n            const coordY = e.pageY - parallaxHeight / 2;\r\n\r\n            coordXprocent = coordX / parallaxWidth * 100;\r\n            coordYprocent = coordY / parallaxHeight * 100;\r\n        });\r\n\r\n        // Parallax Scroll\r\n        let thresholdSets = [];\r\n        for (let i = 0; i <= 1.0; i += 0.005) {\r\n            thresholdSets.push(i);\r\n        }\r\n        const callback = function () {\r\n            const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;\r\n            setParallaxItemsStyle(scrollTopProcent);\r\n        };\r\n        const observer = new IntersectionObserver(callback, {\r\n            threshold: thresholdSets\r\n        });\r\n\r\n        observer.observe(content);\r\n\r\n        function setParallaxItemsStyle(scrollTopProcent) {\r\n            mountain.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 6}%);`;\r\n            human.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 3}%);`;\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;