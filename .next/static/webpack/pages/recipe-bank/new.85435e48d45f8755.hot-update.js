"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/recipe-bank/new",{

/***/ "./components/add-form.js":
/*!********************************!*\
  !*** ./components/add-form.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddForm: function() { return /* binding */ AddForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AddForm() {\n    _s();\n    const [validated, setValidated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ingredient, addIngredient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const ingredients = [\n        ...Array(ingredient)\n    ].map((x, i)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Group, {\n                as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                controlId: i,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Label, {\n                        children: [\n                            \"Ingredient \",\n                            i + 1\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control, {\n                        required: true,\n                        type: \"text\",\n                        placeholder: \"Ingredient\"\n                    }, void 0, false, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    });\n    const handleSubmit = (event)=>{\n        const form = event.currentTarget;\n        if (form.checkValidity() === false) {\n            event.preventDefault();\n            event.stopPropagation();\n        }\n        setValidated(true);\n    //send validated form to api endpoint\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            noValidate: true,\n            validated: validated,\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"mt-3 ms-3 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Group, {\n                        className: \"mb-3\",\n                        as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        md: \"4\",\n                        controlId: \"validationCustom01\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Label, {\n                                children: \"Recipe Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control, {\n                                required: true,\n                                type: \"text\",\n                                placeholder: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control.Feedback, {\n                                children: \"Sounds tasty!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"mt-3 ms-3 me-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: \"Ingredients\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this),\n                                ingredients,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    variant: \"secondary\",\n                                    size: \"lg\",\n                                    type: \"button\",\n                                    onClick: ()=>addIngredient(ingredient + 1),\n                                    children: \"Add Ingredients\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    variant: \"secondary\",\n                                    size: \"lg\",\n                                    type: \"button\",\n                                    onClick: ()=>addIngredient(ingredient - 1),\n                                    children: \"Remove Ingredients\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Instructions\"\n                            }, void 0, false, {\n                                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(AddForm, \"XIDokeaJHJCDW16Nuvamj4GHm7U=\");\n_c = AddForm;\nvar _c;\n$RefreshReg$(_c, \"AddForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FkZC1mb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ1c7QUFDTjtBQUNFO0FBQ1k7QUFDZDtBQUUvQixTQUFTTTs7SUFDZCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1XLGNBQWM7V0FBSUMsTUFBTUg7S0FBWSxDQUFDSSxHQUFHLENBQUMsQ0FBQ0MsR0FBR0M7UUFDakQscUJBQ0U7c0JBQ0UsNEVBQUNaLGtFQUFVO2dCQUFDYyxJQUFJZiwyREFBR0E7Z0JBQUVnQixXQUFXSDs7a0NBQzlCLDhEQUFDWixrRUFBVTs7NEJBQUM7NEJBQVlZLElBQUk7Ozs7Ozs7a0NBQzVCLDhEQUFDWixvRUFBWTt3QkFBQ2tCLFFBQVE7d0JBQUNDLE1BQUs7d0JBQU9DLGFBQVk7Ozs7Ozs7Ozs7Ozs7SUFJdkQ7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU1DLE9BQU9ELE1BQU1FLGFBQWE7UUFDaEMsSUFBSUQsS0FBS0UsYUFBYSxPQUFPLE9BQU87WUFDbENILE1BQU1JLGNBQWM7WUFDcEJKLE1BQU1LLGVBQWU7UUFDdkI7UUFFQXRCLGFBQWE7SUFDYixxQ0FBcUM7SUFDdkM7SUFDQSxxQkFDRTtrQkFDRSw0RUFBQ0wsNERBQUlBO1lBQUM0QixVQUFVO1lBQUN4QixXQUFXQTtZQUFXeUIsVUFBVVI7OzhCQUMvQyw4REFBQ25CLDJEQUFHQTtvQkFBQzRCLFdBQVU7OEJBQ2IsNEVBQUM5QixrRUFBVTt3QkFDVDhCLFdBQVU7d0JBQ1ZoQixJQUFJZiwyREFBR0E7d0JBQ1BnQyxJQUFHO3dCQUNIaEIsV0FBVTs7MENBRVYsOERBQUNmLGtFQUFVOzBDQUFDOzs7Ozs7MENBQ1osOERBQUNBLG9FQUFZO2dDQUFDa0IsUUFBUTtnQ0FBQ0MsTUFBSztnQ0FBT0MsYUFBWTs7Ozs7OzBDQUMvQyw4REFBQ3BCLG9FQUFZLENBQUNnQyxRQUFROzBDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHM0IsOERBQUM5QiwyREFBR0E7O3NDQUNGLDhEQUFDSCwyREFBR0E7NEJBQUMrQixXQUFVOzs4Q0FDYiw4REFBQ0c7OENBQUc7Ozs7OztnQ0FDSHpCOzhDQUNELDhEQUFDViw4REFBTUE7b0NBQ0xvQyxTQUFRO29DQUNSQyxNQUFLO29DQUNMaEIsTUFBSztvQ0FDTGlCLFNBQVMsSUFBTTdCLGNBQWNELGFBQWE7OENBQzNDOzs7Ozs7OENBR0QsOERBQUNSLDhEQUFNQTtvQ0FDTG9DLFNBQVE7b0NBQ1JDLE1BQUs7b0NBQ0xoQixNQUFLO29DQUNMaUIsU0FBUyxJQUFNN0IsY0FBY0QsYUFBYTs4Q0FDM0M7Ozs7Ozs7Ozs7OztzQ0FLSCw4REFBQ1AsMkRBQUdBO3NDQUNGLDRFQUFDa0M7MENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQjtHQXJFZ0I5QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FkZC1mb3JtLmpzPzQ5Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9JbnB1dEdyb3VwXCI7XG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvUm93XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBBZGRGb3JtKCkge1xuICBjb25zdCBbdmFsaWRhdGVkLCBzZXRWYWxpZGF0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5ncmVkaWVudCwgYWRkSW5ncmVkaWVudF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBpbmdyZWRpZW50cyA9IFsuLi5BcnJheShpbmdyZWRpZW50KV0ubWFwKCh4LCBpKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxGb3JtLkdyb3VwIGFzPXtDb2x9IGNvbnRyb2xJZD17aX0+XG4gICAgICAgICAgPEZvcm0uTGFiZWw+SW5ncmVkaWVudCB7aSArIDF9PC9Gb3JtLkxhYmVsPlxuICAgICAgICAgIDxGb3JtLkNvbnRyb2wgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkluZ3JlZGllbnRcIiAvPlxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICA8Lz5cbiAgICApO1xuICB9KTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgc2V0VmFsaWRhdGVkKHRydWUpO1xuICAgIC8vc2VuZCB2YWxpZGF0ZWQgZm9ybSB0byBhcGkgZW5kcG9pbnRcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZvcm0gbm9WYWxpZGF0ZSB2YWxpZGF0ZWQ9e3ZhbGlkYXRlZH0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXQtMyBtcy0zIFwiPlxuICAgICAgICAgIDxGb3JtLkdyb3VwXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcbiAgICAgICAgICAgIGFzPXtDb2x9XG4gICAgICAgICAgICBtZD1cIjRcIlxuICAgICAgICAgICAgY29udHJvbElkPVwidmFsaWRhdGlvbkN1c3RvbTAxXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5SZWNpcGUgTmFtZTwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiAvPlxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjaz5Tb3VuZHMgdGFzdHkhPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm10LTMgbXMtMyBtZS0zXCI+XG4gICAgICAgICAgICA8aDQ+SW5ncmVkaWVudHM8L2g0PlxuICAgICAgICAgICAge2luZ3JlZGllbnRzfVxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEluZ3JlZGllbnQoaW5ncmVkaWVudCArIDEpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGQgSW5ncmVkaWVudHNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEluZ3JlZGllbnQoaW5ncmVkaWVudCAtIDEpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZW1vdmUgSW5ncmVkaWVudHNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgPENvbD5cbiAgICAgICAgICAgIDxoND5JbnN0cnVjdGlvbnM8L2g0PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvRm9ybT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNvbCIsIkZvcm0iLCJJbnB1dEdyb3VwIiwiUm93IiwiQWRkRm9ybSIsInZhbGlkYXRlZCIsInNldFZhbGlkYXRlZCIsImluZ3JlZGllbnQiLCJhZGRJbmdyZWRpZW50IiwiaW5ncmVkaWVudHMiLCJBcnJheSIsIm1hcCIsIngiLCJpIiwiR3JvdXAiLCJhcyIsImNvbnRyb2xJZCIsIkxhYmVsIiwiQ29udHJvbCIsInJlcXVpcmVkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJmb3JtIiwiY3VycmVudFRhcmdldCIsImNoZWNrVmFsaWRpdHkiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm5vVmFsaWRhdGUiLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsIm1kIiwiRmVlZGJhY2siLCJoNCIsInZhcmlhbnQiLCJzaXplIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/add-form.js\n"));

/***/ })

});