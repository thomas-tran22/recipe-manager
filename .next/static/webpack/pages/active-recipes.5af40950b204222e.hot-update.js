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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GenerateTest: function() { return /* binding */ GenerateTest; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Collapse */ \"./node_modules/react-bootstrap/esm/Collapse.js\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/ListGroup */ \"./node_modules/react-bootstrap/esm/ListGroup.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nclass recipe {\n    constructor(name, ingredients, instructions){\n        this.id = 0;\n        this.name = name;\n        this.ingredients = ingredients;\n        this.instructions = instructions;\n    }\n}\nfunction GenerateTest() {\n    const testRecipe = new recipe(\"Test Name\", [\n        \"One code segment\",\n        \"One Computer\",\n        \"Some programming knowledge\"\n    ], \"Use the programming knowledge to code the segment into your computer\");\n    return MakeRecipe(testRecipe);\n}\n_c = GenerateTest;\nfunction MakeRecipe(props) {\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        md: 6,\n                        className: \"justify-content-md-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                onClick: ()=>setOpen(!open),\n                                \"aria-controls\": \"recipeInfo\",\n                                \"aria-expanded\": open,\n                                children: props.name\n                            }, void 0, false, {\n                                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    in: open,\n                    dimension: \"height\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"recipeInfo\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            children: [\n                                props.ingredients.map((ingredient)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Item, {\n                                        children: ingredient\n                                    }, void 0, false, {\n                                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, this)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Item, {\n                                    children: props.instructions\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(MakeRecipe, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c1 = MakeRecipe;\nvar _c, _c1;\n$RefreshReg$(_c, \"GenerateTest\");\n$RefreshReg$(_c1, \"MakeRecipe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlY2lwZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ1c7QUFDSTtBQUNSO0FBQ1U7QUFDWjtBQUNZO0FBRWxELE1BQU1PO0lBS0pDLFlBQVlDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxZQUFZLENBQUU7YUFEN0NDLEtBQUs7UUFFSCxJQUFJLENBQUNILElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO0lBQ3RCO0FBQ0Y7QUFFTyxTQUFTRTtJQUNkLE1BQU1DLGFBQWEsSUFBSVAsT0FDckIsYUFDQTtRQUFDO1FBQW9CO1FBQWdCO0tBQTZCLEVBQ2xFO0lBRUYsT0FBT1EsV0FBV0Q7QUFDcEI7S0FQZ0JEO0FBU2hCLFNBQVNFLFdBQVdDLEtBQUs7O0lBQ3ZCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHbEIsK0NBQVFBLENBQUM7SUFDakMscUJBQ0U7a0JBQ0UsNEVBQUNNLGlFQUFTQTs7OEJBQ1IsOERBQUNhOzhCQUNDLDRFQUFDZCwyREFBR0E7d0JBQUNlLElBQUk7d0JBQUdDLFdBQVU7a0NBQ3BCLDRFQUFDbEIsNERBQUlBO3NDQUNILDRFQUFDRiw4REFBTUE7Z0NBQ0xxQixTQUFTLElBQU1KLFFBQVEsQ0FBQ0Q7Z0NBQ3hCTSxpQkFBYztnQ0FDZEMsaUJBQWVQOzBDQUVkRCxNQUFNUCxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS25CLDhEQUFDUCxnRUFBUUE7b0JBQUN1QixJQUFJUjtvQkFBTVMsV0FBVTs4QkFDNUIsNEVBQUNDO3dCQUFJZixJQUFHO2tDQUNOLDRFQUFDUixpRUFBU0E7O2dDQUNQWSxNQUFNTixXQUFXLENBQUNrQixHQUFHLENBQUMsQ0FBQ0MsMkJBQ3RCLDhEQUFDekIsc0VBQWM7a0RBQUV5Qjs7Ozs7OzhDQUVuQiw4REFBQ3pCLHNFQUFjOzhDQUFFWSxNQUFNTCxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qRDtHQS9CU0k7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWNpcGUuanM/ZTlkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xuaW1wb3J0IENvbGxhcHNlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sbGFwc2VcIjtcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xuaW1wb3J0IExpc3RHcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0xpc3RHcm91cFwiO1xuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xuXG5jbGFzcyByZWNpcGUge1xuICBuYW1lO1xuICBpbmdyZWRpZW50cztcbiAgaW5zdHJ1Y3Rpb25zO1xuICBpZCA9IDA7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGluZ3JlZGllbnRzLCBpbnN0cnVjdGlvbnMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaW5ncmVkaWVudHMgPSBpbmdyZWRpZW50cztcbiAgICB0aGlzLmluc3RydWN0aW9ucyA9IGluc3RydWN0aW9ucztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gR2VuZXJhdGVUZXN0KCkge1xuICBjb25zdCB0ZXN0UmVjaXBlID0gbmV3IHJlY2lwZShcbiAgICBcIlRlc3QgTmFtZVwiLFxuICAgIFtcIk9uZSBjb2RlIHNlZ21lbnRcIiwgXCJPbmUgQ29tcHV0ZXJcIiwgXCJTb21lIHByb2dyYW1taW5nIGtub3dsZWRnZVwiXSxcbiAgICBcIlVzZSB0aGUgcHJvZ3JhbW1pbmcga25vd2xlZGdlIHRvIGNvZGUgdGhlIHNlZ21lbnQgaW50byB5b3VyIGNvbXB1dGVyXCJcbiAgKTtcbiAgcmV0dXJuIE1ha2VSZWNpcGUodGVzdFJlY2lwZSk7XG59XG5cbmZ1bmN0aW9uIE1ha2VSZWNpcGUocHJvcHMpIHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgbWQ9ezZ9IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9XG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInJlY2lwZUluZm9cIlxuICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e29wZW59XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59IGRpbWVuc2lvbj1cImhlaWdodFwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJyZWNpcGVJbmZvXCI+XG4gICAgICAgICAgICA8TGlzdEdyb3VwPlxuICAgICAgICAgICAgICB7cHJvcHMuaW5ncmVkaWVudHMubWFwKChpbmdyZWRpZW50KSA9PiAoXG4gICAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtPntpbmdyZWRpZW50fTwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0+e3Byb3BzLmluc3RydWN0aW9uc308L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICAgPC9MaXN0R3JvdXA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNvbGxhcHNlIiwiQ2FyZCIsIkxpc3RHcm91cCIsIkNvbCIsIkNvbnRhaW5lciIsInJlY2lwZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImluZ3JlZGllbnRzIiwiaW5zdHJ1Y3Rpb25zIiwiaWQiLCJHZW5lcmF0ZVRlc3QiLCJ0ZXN0UmVjaXBlIiwiTWFrZVJlY2lwZSIsInByb3BzIiwib3BlbiIsInNldE9wZW4iLCJSb3ciLCJtZCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1leHBhbmRlZCIsImluIiwiZGltZW5zaW9uIiwiZGl2IiwibWFwIiwiaW5ncmVkaWVudCIsIkl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/recipe.js\n"));

/***/ })

});