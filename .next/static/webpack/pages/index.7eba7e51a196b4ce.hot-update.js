"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/sections/Keys.jsx":
/*!**************************************!*\
  !*** ./components/sections/Keys.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Keys; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_keyCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/keyCard */ \"./components/common/keyCard.jsx\");\n/* harmony import */ var _data_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/keys */ \"./data/keys.json\");\n\n\n\nfunction Keys() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-4 md:py-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 lg:grid-cols-2 items-start gap-28 lg:gap-20 text-lg font-semibold\",\n                children: _data_keys__WEBPACK_IMPORTED_MODULE_2__.map((key, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_keyCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        title: key.title,\n                        downloadLocation: key.downloadLocation,\n                        importCommand: key.importCommand,\n                        keys: key.key\n                    }, i, false, {\n                        fileName: \"/Users/charliealgert/Downloads/keys_funished/components/sections/Keys.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 25\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/charliealgert/Downloads/keys_funished/components/sections/Keys.jsx\",\n                lineNumber: 8,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/charliealgert/Downloads/keys_funished/components/sections/Keys.jsx\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/charliealgert/Downloads/keys_funished/components/sections/Keys.jsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n_c = Keys;\nvar _c;\n$RefreshReg$(_c, \"Keys\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb25zL0tleXMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDTDtBQUVuQixTQUFTRSxPQUFPO0lBQzNCLHFCQUNJLDhEQUFDQztRQUFRQyxXQUFVO2tCQUNmLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNYLDRFQUFDQztnQkFBSUQsV0FBVTswQkFDVkgsMkNBQVEsQ0FBQyxDQUFDTSxLQUFLQyxrQkFDWiw4REFBQ1IsdURBQU9BO3dCQUVKUyxPQUFPRixJQUFJRSxLQUFLO3dCQUNoQkMsa0JBQWtCSCxJQUFJRyxnQkFBZ0I7d0JBQ3RDQyxlQUFlSixJQUFJSSxhQUFhO3dCQUNoQ1YsTUFBTU0sSUFBSUEsR0FBRzt1QkFKUkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV2pDLENBQUM7S0FsQnVCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NlY3Rpb25zL0tleXMuanN4Pzk1NjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEtleUNhcmQgZnJvbSAnLi4vY29tbW9uL2tleUNhcmQnXG5pbXBvcnQga2V5cyBmcm9tICcuLi8uLi9kYXRhL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtleXMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktNCBtZDpweS0xMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTIgaXRlbXMtc3RhcnQgZ2FwLTI4IGxnOmdhcC0yMCB0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAge2tleXMubWFwKChrZXksIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxLZXlDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtrZXkudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRMb2NhdGlvbj17a2V5LmRvd25sb2FkTG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0Q29tbWFuZD17a2V5LmltcG9ydENvbW1hbmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17a2V5LmtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiS2V5Q2FyZCIsImtleXMiLCJLZXlzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsIm1hcCIsImtleSIsImkiLCJ0aXRsZSIsImRvd25sb2FkTG9jYXRpb24iLCJpbXBvcnRDb21tYW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sections/Keys.jsx\n"));

/***/ })

});