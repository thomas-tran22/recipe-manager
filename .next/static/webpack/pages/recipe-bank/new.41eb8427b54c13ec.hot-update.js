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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddForm: function() { return /* binding */ AddForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AddForm() {\n    _s();\n    const [validated, setValidated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ingredient, addIngredient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [instruction, addInstruction] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const ingredients = [\n        ...Array(ingredient)\n    ].map((x, i)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Group, {\n                as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                controlId: i,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Label, {\n                        children: [\n                            \"Ingredient \",\n                            i + 1\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control, {\n                        required: true,\n                        type: \"text\",\n                        placeholder: \"Ingredient\"\n                    }, void 0, false, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    });\n    const instructions = [\n        ...Array(instruction)\n    ].map((x, i)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Group, {\n                as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                controlId: i,\n                className: \"me-5\",\n                lg: \"5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Label, {\n                        children: i + 1\n                    }, void 0, false, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control, {\n                        required: true,\n                        type: \"text\",\n                        placeholder: \"Instructions\"\n                    }, void 0, false, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    });\n    const handleSubmit = (event)=>{\n        const form = event.currentTarget;\n        if (form.checkValidity() === false) {\n            event.preventDefault();\n            event.stopPropagation();\n        }\n        setValidated(true);\n    //send validated form to api endpoint\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            noValidate: true,\n            validated: validated,\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"mt-3 ms-3 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Group, {\n                        className: \"mb-3\",\n                        as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        md: \"4\",\n                        controlId: \"validationCustom01\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Label, {\n                                children: \"Recipe Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control, {\n                                required: true,\n                                type: \"text\",\n                                placeholder: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control.Feedback, {\n                                children: \"Sounds tasty!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"mt-3 ms-3 me-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: \"Ingredients\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this),\n                                ingredients,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    variant: \"success\",\n                                    type: \"button\",\n                                    onClick: ()=>addIngredient(ingredient + 1),\n                                    children: \"Add Ingredients\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    variant: \"danger\",\n                                    type: \"button\",\n                                    onClick: ()=>addIngredient(ingredient - 1),\n                                    children: \"Remove Ingredients\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"mt-3 ms-3 me-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: \"Instructions\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this),\n                                instructions,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    variant: \"success\",\n                                    type: \"button\",\n                                    onClick: ()=>addInstruction(instruction + 1),\n                                    children: \"Add Instruction\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    variant: \"danger\",\n                                    type: \"button\",\n                                    onClick: ()=>addInstruction(instruction - 1),\n                                    children: \"Remove Instruction\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(AddForm, \"Q1OxOn1Ws4dWuNakgkP0TBeQs/k=\");\n_c = AddForm;\nvar _c;\n$RefreshReg$(_c, \"AddForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OUZnQkw7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZGQtZm9ybS5qcz80OWNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSW5wdXRHcm91cFwiO1xuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gQWRkRm9ybSgpIHtcbiAgY29uc3QgW3ZhbGlkYXRlZCwgc2V0VmFsaWRhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2luZ3JlZGllbnQsIGFkZEluZ3JlZGllbnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpbnN0cnVjdGlvbiwgYWRkSW5zdHJ1Y3Rpb25dID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaW5ncmVkaWVudHMgPSBbLi4uQXJyYXkoaW5ncmVkaWVudCldLm1hcCgoeCwgaSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Q29sfSBjb250cm9sSWQ9e2l9PlxuICAgICAgICAgIDxGb3JtLkxhYmVsPkluZ3JlZGllbnQge2kgKyAxfTwvRm9ybS5MYWJlbD5cbiAgICAgICAgICA8Rm9ybS5Db250cm9sIHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJbmdyZWRpZW50XCIgLz5cbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfSk7XG5cbiAgY29uc3QgaW5zdHJ1Y3Rpb25zID0gWy4uLkFycmF5KGluc3RydWN0aW9uKV0ubWFwKCh4LCBpKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IGNvbnRyb2xJZD17aX0gY2xhc3NOYW1lPVwibWUtNVwiIGxnPVwiNVwiPlxuICAgICAgICAgIDxGb3JtLkxhYmVsPntpICsgMX08L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgPEZvcm0uQ29udHJvbCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSW5zdHJ1Y3Rpb25zXCIgLz5cbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHNldFZhbGlkYXRlZCh0cnVlKTtcbiAgICAvL3NlbmQgdmFsaWRhdGVkIGZvcm0gdG8gYXBpIGVuZHBvaW50XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGb3JtIG5vVmFsaWRhdGUgdmFsaWRhdGVkPXt2YWxpZGF0ZWR9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm10LTMgbXMtMyBcIj5cbiAgICAgICAgICA8Rm9ybS5Hcm91cFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXG4gICAgICAgICAgICBhcz17Q29sfVxuICAgICAgICAgICAgbWQ9XCI0XCJcbiAgICAgICAgICAgIGNvbnRyb2xJZD1cInZhbGlkYXRpb25DdXN0b20wMVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+UmVjaXBlIE5hbWU8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sIHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgLz5cbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2s+U291bmRzIHRhc3R5ITwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtdC0zIG1zLTMgbWUtM1wiPlxuICAgICAgICAgICAgPGg0PkluZ3JlZGllbnRzPC9oND5cbiAgICAgICAgICAgIHtpbmdyZWRpZW50c31cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkSW5ncmVkaWVudChpbmdyZWRpZW50ICsgMSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFkZCBJbmdyZWRpZW50c1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkSW5ncmVkaWVudChpbmdyZWRpZW50IC0gMSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlbW92ZSBJbmdyZWRpZW50c1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm10LTMgbXMtMyBtZS0zXCI+XG4gICAgICAgICAgICA8aDQ+SW5zdHJ1Y3Rpb25zPC9oND5cbiAgICAgICAgICAgIHtpbnN0cnVjdGlvbnN9XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEluc3RydWN0aW9uKGluc3RydWN0aW9uICsgMSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFkZCBJbnN0cnVjdGlvblxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkSW5zdHJ1Y3Rpb24oaW5zdHJ1Y3Rpb24gLSAxKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVtb3ZlIEluc3RydWN0aW9uXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0Zvcm0+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCdXR0b24iLCJDb2wiLCJGb3JtIiwiSW5wdXRHcm91cCIsIlJvdyIsIkFkZEZvcm0iLCJ2YWxpZGF0ZWQiLCJzZXRWYWxpZGF0ZWQiLCJpbmdyZWRpZW50IiwiYWRkSW5ncmVkaWVudCIsImluc3RydWN0aW9uIiwiYWRkSW5zdHJ1Y3Rpb24iLCJpbmdyZWRpZW50cyIsIkFycmF5IiwibWFwIiwieCIsImkiLCJHcm91cCIsImFzIiwiY29udHJvbElkIiwiTGFiZWwiLCJDb250cm9sIiwicmVxdWlyZWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpbnN0cnVjdGlvbnMiLCJjbGFzc05hbWUiLCJsZyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwiZm9ybSIsImN1cnJlbnRUYXJnZXQiLCJjaGVja1ZhbGlkaXR5IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJub1ZhbGlkYXRlIiwib25TdWJtaXQiLCJtZCIsIkZlZWRiYWNrIiwiaDQiLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/add-form.js\n"));

/***/ })

});