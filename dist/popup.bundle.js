/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ (() => {

eval("console.log(\"loading...\")\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const loginBtn = document.getElementById(\"loginBtn\");\n\n  loginBtn.addEventListener(\"click\", async () => {\n    const email = document.getElementById(\"email\").value.trim();\n    const password = document.getElementById(\"password\").value.trim();\n\n    if (!email || !password) {\n      alert(\"Please enter both email and password.\");\n      return;\n    }\n\n    try {\n      const response = await fetch(\"https://your-auth-server.com/api/login\", {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({ email, password })\n      });\n\n      if (response.ok) {\n        const data = await response.json();\n        const token = data.token;\n\n        if (token) {\n          chrome.storage.local.set({ jwt: token }, () => {\n            alert(\"Login successful!\");\n          });\n        } else {\n          alert(\"Token not received.\");\n        }\n      } else {\n        alert(\"Login failed. Please check your credentials.\");\n      }\n    } catch (error) {\n      console.error(\"Login error:\", error);\n      alert(\"An error occurred during login. Please try again.\");\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/popup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/popup.js"]();
/******/ 	
/******/ })()
;