"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/active-recipes",{

/***/ "./components/recipe.js":
/*!******************************!*\
  !*** ./components/recipe.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GenerateTest: function() { return /* binding */ GenerateTest; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Collapse */ \"./node_modules/react-bootstrap/esm/Collapse.js\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nclass recipe {\n    constructor(name, ingredients, instructions){\n        this.id = 0;\n        this.name = name;\n        this.ingredients = ingredients;\n        this.instructions = instructions;\n    }\n}\nfunction GenerateTest() {\n    const testRecipe = new recipe(\"Test Name\", [\n        \"One code segment\",\n        \"One Computer\",\n        \"Some programming knowledge\"\n    ], \"Use the programming knowledge to code the segment into your computer\");\n    return MakeRecipe(testRecipe);\n}\n_c = GenerateTest;\nfunction MakeRecipe(props) {\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onClick: ()=>setOpen(!open),\n                    \"aria-controls\": \"recipeInfo\",\n                    \"aria-expanded\": open,\n                    children: props.name\n                }, void 0, false, {\n                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                in: open,\n                dimension: \"width\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"recipeInfo\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        body: true,\n                        style: {\n                            width: \"400px\"\n                        },\n                        children: \"test\"\n                    }, void 0, false, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MakeRecipe, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c1 = MakeRecipe;\nvar _c, _c1;\n$RefreshReg$(_c, \"GenerateTest\");\n$RefreshReg$(_c1, \"MakeRecipe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlY2lwZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ1c7QUFDSTtBQUNSO0FBR3hDLE1BQU1JO0lBS0pDLFlBQVlDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxZQUFZLENBQUU7YUFEN0NDLEtBQUs7UUFFSCxJQUFJLENBQUNILElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO0lBQ3RCO0FBQ0Y7QUFFTyxTQUFTRTtJQUNkLE1BQU1DLGFBQWEsSUFBSVAsT0FDckIsYUFDQTtRQUFDO1FBQW9CO1FBQWdCO0tBQTZCLEVBQ2xFO0lBRUYsT0FBT1EsV0FBV0Q7QUFDcEI7S0FQZ0JEO0FBU2hCLFNBQVNFLFdBQVdDLEtBQUs7O0lBQ3JCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNuQyxxQkFDRTs7MEJBQ0UsOERBQUNHLDREQUFJQTswQkFDSCw0RUFBQ0YsOERBQU1BO29CQUNIZSxTQUFTLElBQU1ELFFBQVEsQ0FBQ0Q7b0JBQ3hCRyxpQkFBYztvQkFDZEMsaUJBQWVKOzhCQUVoQkQsTUFBTVAsSUFBSTs7Ozs7Ozs7Ozs7MEJBR2YsOERBQUNKLGdFQUFRQTtnQkFBQ2lCLElBQUlMO2dCQUFNTSxXQUFVOzBCQUMxQiw0RUFBQ0M7b0JBQUlaLElBQUc7OEJBQ04sNEVBQUNOLDREQUFJQTt3QkFBQ21CLElBQUk7d0JBQUNDLE9BQU87NEJBQUVDLE9BQU87d0JBQVE7a0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05QztHQXJCS1o7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWNpcGUuanM/ZTlkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbGxhcHNlJztcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcblxuXG5jbGFzcyByZWNpcGUge1xuICBuYW1lO1xuICBpbmdyZWRpZW50cztcbiAgaW5zdHJ1Y3Rpb25zO1xuICBpZCA9IDA7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGluZ3JlZGllbnRzLCBpbnN0cnVjdGlvbnMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaW5ncmVkaWVudHMgPSBpbmdyZWRpZW50cztcbiAgICB0aGlzLmluc3RydWN0aW9ucyA9IGluc3RydWN0aW9ucztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gR2VuZXJhdGVUZXN0KCkge1xuICBjb25zdCB0ZXN0UmVjaXBlID0gbmV3IHJlY2lwZShcbiAgICBcIlRlc3QgTmFtZVwiLFxuICAgIFtcIk9uZSBjb2RlIHNlZ21lbnRcIiwgXCJPbmUgQ29tcHV0ZXJcIiwgXCJTb21lIHByb2dyYW1taW5nIGtub3dsZWRnZVwiXSxcbiAgICBcIlVzZSB0aGUgcHJvZ3JhbW1pbmcga25vd2xlZGdlIHRvIGNvZGUgdGhlIHNlZ21lbnQgaW50byB5b3VyIGNvbXB1dGVyXCJcbiAgKTtcbiAgcmV0dXJuIE1ha2VSZWNpcGUodGVzdFJlY2lwZSk7XG59XG5cbmZ1bmN0aW9uIE1ha2VSZWNpcGUocHJvcHMpIHtcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDYXJkPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX1cbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJyZWNpcGVJbmZvXCJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e29wZW59XG4gICAgICAgID5cbiAgICAgICAgICB7cHJvcHMubmFtZX1cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9DYXJkPlxuICAgICAgPENvbGxhcHNlIGluPXtvcGVufSBkaW1lbnNpb249XCJ3aWR0aFwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJyZWNpcGVJbmZvXCI+XG4gICAgICAgICAgICA8Q2FyZCBib2R5IHN0eWxlPXt7IHdpZHRoOiAnNDAwcHgnIH19PlxuICAgICAgICAgICAgICAgIHRlc3RcbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2xsYXBzZT5cbiAgICA8Lz5cbiAgKTt9XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCdXR0b24iLCJDb2xsYXBzZSIsIkNhcmQiLCJyZWNpcGUiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJpbmdyZWRpZW50cyIsImluc3RydWN0aW9ucyIsImlkIiwiR2VuZXJhdGVUZXN0IiwidGVzdFJlY2lwZSIsIk1ha2VSZWNpcGUiLCJwcm9wcyIsIm9wZW4iLCJzZXRPcGVuIiwib25DbGljayIsImFyaWEtY29udHJvbHMiLCJhcmlhLWV4cGFuZGVkIiwiaW4iLCJkaW1lbnNpb24iLCJkaXYiLCJib2R5Iiwic3R5bGUiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/recipe.js\n"));

/***/ })

});