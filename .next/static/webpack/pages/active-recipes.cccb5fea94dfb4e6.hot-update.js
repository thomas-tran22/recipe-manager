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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GenerateTest: function() { return /* binding */ GenerateTest; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Collapse */ \"./node_modules/react-bootstrap/esm/Collapse.js\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/ListGroup */ \"./node_modules/react-bootstrap/esm/ListGroup.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nclass recipe {\n    constructor(name, ingredients, instructions){\n        this.id = 0;\n        this.name = name;\n        this.ingredients = ingredients;\n        this.instructions = instructions;\n    }\n}\nfunction GenerateTest() {\n    const testRecipe = new recipe(\"Test Name\", [\n        \"One code segment\",\n        \"One Computer\",\n        \"Some programming knowledge\"\n    ], \"Use the programming knowledge to code the segment into your computer\");\n    return MakeRecipe(testRecipe);\n}\n_c = GenerateTest;\nfunction MakeRecipe(props) {\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"justify-content-md-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: ()=>setOpen(!open),\n                        \"aria-controls\": \"recipeInfo\",\n                        \"aria-expanded\": open,\n                        children: props.name\n                    }, void 0, false, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                in: open,\n                dimension: \"height\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"recipeInfo\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: [\n                            props.ingredients.map((ingredient)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                                    children: ingredient\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 56\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                                children: props.instructions\n                            }, void 0, false, {\n                                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                                lineNumber: 50,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/recipe.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MakeRecipe, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c1 = MakeRecipe;\nvar _c, _c1;\n$RefreshReg$(_c, \"GenerateTest\");\n$RefreshReg$(_c1, \"MakeRecipe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlY2lwZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNXO0FBQ0k7QUFDUjtBQUNVO0FBQ1o7QUFJdEMsTUFBTU07SUFLSkMsWUFBWUMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLFlBQVksQ0FBRTthQUQ3Q0MsS0FBSztRQUVILElBQUksQ0FBQ0gsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFlBQVksR0FBR0E7SUFDdEI7QUFDRjtBQUVPLFNBQVNFO0lBQ2QsTUFBTUMsYUFBYSxJQUFJUCxPQUNyQixhQUNBO1FBQUM7UUFBb0I7UUFBZ0I7S0FBNkIsRUFDbEU7SUFFRixPQUFPUSxXQUFXRDtBQUNwQjtLQVBnQkQ7QUFTaEIsU0FBU0UsV0FBV0MsS0FBSzs7SUFDckIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNuQyxxQkFDRTs7MEJBQ0EsOERBQUNrQjswQkFDQyw0RUFBQ2YsNERBQUlBO29CQUFDZ0IsV0FBVTs4QkFDZCw0RUFBQ2xCLDhEQUFNQTt3QkFDSG1CLFNBQVMsSUFBTUgsUUFBUSxDQUFDRDt3QkFDeEJLLGlCQUFjO3dCQUNkQyxpQkFBZU47a0NBRWhCRCxNQUFNUCxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUlmLDhEQUFDTixnRUFBUUE7Z0JBQUNxQixJQUFJUDtnQkFBTVEsV0FBVTswQkFDMUIsNEVBQUNDO29CQUFJZCxJQUFHOzhCQUNOLDRFQUFDUCxpRUFBU0E7OzRCQUNMVyxNQUFNTixXQUFXLENBQUNpQixHQUFHLENBQUMsQ0FBQ0MsMkJBQWUsOERBQUN2QixzRUFBYzs4Q0FBRXVCOzs7Ozs7MENBQ3hELDhEQUFDdkIsc0VBQWM7MENBQUVXLE1BQU1MLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0vQztHQXpCS0k7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWNpcGUuanM/ZTlkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbGxhcHNlJztcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcbmltcG9ydCBMaXN0R3JvdXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0xpc3RHcm91cCc7XG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xuXG5cblxuY2xhc3MgcmVjaXBlIHtcbiAgbmFtZTtcbiAgaW5ncmVkaWVudHM7XG4gIGluc3RydWN0aW9ucztcbiAgaWQgPSAwO1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpbmdyZWRpZW50cywgaW5zdHJ1Y3Rpb25zKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gaW5ncmVkaWVudHM7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSBpbnN0cnVjdGlvbnM7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEdlbmVyYXRlVGVzdCgpIHtcbiAgY29uc3QgdGVzdFJlY2lwZSA9IG5ldyByZWNpcGUoXG4gICAgXCJUZXN0IE5hbWVcIixcbiAgICBbXCJPbmUgY29kZSBzZWdtZW50XCIsIFwiT25lIENvbXB1dGVyXCIsIFwiU29tZSBwcm9ncmFtbWluZyBrbm93bGVkZ2VcIl0sXG4gICAgXCJVc2UgdGhlIHByb2dyYW1taW5nIGtub3dsZWRnZSB0byBjb2RlIHRoZSBzZWdtZW50IGludG8geW91ciBjb21wdXRlclwiXG4gICk7XG4gIHJldHVybiBNYWtlUmVjaXBlKHRlc3RSZWNpcGUpO1xufVxuXG5mdW5jdGlvbiBNYWtlUmVjaXBlKHByb3BzKSB7XG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPFJvdz5cbiAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9XG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicmVjaXBlSW5mb1wiXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtvcGVufVxuICAgICAgICA+XG4gICAgICAgICAge3Byb3BzLm5hbWV9XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ2FyZD5cbiAgICAgIDwvUm93PlxuICAgICAgPENvbGxhcHNlIGluPXtvcGVufSBkaW1lbnNpb249XCJoZWlnaHRcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwicmVjaXBlSW5mb1wiPlxuICAgICAgICAgICAgPExpc3RHcm91cD5cbiAgICAgICAgICAgICAgICB7cHJvcHMuaW5ncmVkaWVudHMubWFwKChpbmdyZWRpZW50KSA9PiA8TGlzdEdyb3VwLkl0ZW0+e2luZ3JlZGllbnR9PC9MaXN0R3JvdXAuSXRlbT4pfVxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbT57cHJvcHMuaW5zdHJ1Y3Rpb25zfTwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICA8L0xpc3RHcm91cD5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbGxhcHNlPlxuICAgIDwvPlxuICApO31cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNvbGxhcHNlIiwiQ2FyZCIsIkxpc3RHcm91cCIsIkNvbCIsInJlY2lwZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImluZ3JlZGllbnRzIiwiaW5zdHJ1Y3Rpb25zIiwiaWQiLCJHZW5lcmF0ZVRlc3QiLCJ0ZXN0UmVjaXBlIiwiTWFrZVJlY2lwZSIsInByb3BzIiwib3BlbiIsInNldE9wZW4iLCJSb3ciLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiYXJpYS1jb250cm9scyIsImFyaWEtZXhwYW5kZWQiLCJpbiIsImRpbWVuc2lvbiIsImRpdiIsIm1hcCIsImluZ3JlZGllbnQiLCJJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/recipe.js\n"));

/***/ })

});