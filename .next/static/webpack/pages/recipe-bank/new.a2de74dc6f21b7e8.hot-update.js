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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddForm: function() { return /* binding */ AddForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AddForm() {\n    _s();\n    const [validated, setValidated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ingredient, addIngredient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [instruction, addInstruction] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const ingredients = [\n        ...Array(ingredient)\n    ].map((x, i)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Group, {\n                as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                controlId: \"ingredient \" + i,\n                className: \"mb-3 me-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control, {\n                    required: true,\n                    type: \"text\",\n                    placeholder: \"Ingredient \" + (i + 1)\n                }, void 0, false, {\n                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    });\n    const instructions = [\n        ...Array(instruction)\n    ].map((x, i)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Group, {\n                as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                controlId: \"instruction\" + i,\n                className: \"me-5\",\n                lg: \"5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Label, {\n                        children: [\n                            \" \",\n                            i + 1\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control, {\n                        required: true,\n                        type: \"text\",\n                        placeholder: \"Instructions\"\n                    }, void 0, false, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    });\n    const handleSubmit = (event)=>{\n        const form = event.currentTarget;\n        if (form.checkValidity() === false) {\n            event.preventDefault();\n            event.stopPropagation();\n        }\n        setValidated(true);\n    //send validated form to api endpoint\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            noValidate: true,\n            validated: validated,\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    className: \"mt-3 ms-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Group, {\n                        className: \"mb-3\",\n                        as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        md: \"4\",\n                        controlId: \"validationCustom01\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Label, {\n                                children: \"Recipe Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control, {\n                                required: true,\n                                type: \"text\",\n                                placeholder: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control.Feedback, {\n                                children: \"Sounds tasty!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    className: \"ms-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: \"mt-3  me-3\",\n                            md: \"4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: \"Ingredients\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this),\n                                ingredients,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    variant: \"success\",\n                                    type: \"button\",\n                                    onClick: ()=>addIngredient(ingredient + 1),\n                                    children: \"Add Ingredients\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    variant: \"danger\",\n                                    type: \"button\",\n                                    onClick: ()=>addIngredient(ingredient - 1),\n                                    children: \"Remove Ingredients\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: \"mt-3 ms-3 me-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: \"Instructions\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, this),\n                                instructions,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    variant: \"success\",\n                                    type: \"button\",\n                                    onClick: ()=>addInstruction(instruction + 1),\n                                    children: \"Add Instruction\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    variant: \"danger\",\n                                    type: \"button\",\n                                    onClick: ()=>addInstruction(instruction - 1),\n                                    children: \"Remove Instruction\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(AddForm, \"Q1OxOn1Ws4dWuNakgkP0TBeQs/k=\");\n_c = AddForm;\nvar _c;\n$RefreshReg$(_c, \"AddForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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N0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtHQTFHZ0JMO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYWRkLWZvcm0uanM/NDljYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0lucHV0R3JvdXBcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEFkZEZvcm0oKSB7XG4gIGNvbnN0IFt2YWxpZGF0ZWQsIHNldFZhbGlkYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbmdyZWRpZW50LCBhZGRJbmdyZWRpZW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaW5zdHJ1Y3Rpb24sIGFkZEluc3RydWN0aW9uXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGluZ3JlZGllbnRzID0gWy4uLkFycmF5KGluZ3JlZGllbnQpXS5tYXAoKHgsIGkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEZvcm0uR3JvdXBcbiAgICAgICAgICBhcz17Um93fVxuICAgICAgICAgIGNvbnRyb2xJZD17XCJpbmdyZWRpZW50IFwiICsgaX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zIG1lLWF1dG9cIlxuICAgICAgICA+XG4gICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkluZ3JlZGllbnQgXCIgKyAoaSArIDEpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgIDwvPlxuICAgICk7XG4gIH0pO1xuXG4gIGNvbnN0IGluc3RydWN0aW9ucyA9IFsuLi5BcnJheShpbnN0cnVjdGlvbildLm1hcCgoeCwgaSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8Rm9ybS5Hcm91cFxuICAgICAgICAgIGFzPXtSb3d9XG4gICAgICAgICAgY29udHJvbElkPXtcImluc3RydWN0aW9uXCIgKyBpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1lLTVcIlxuICAgICAgICAgIGxnPVwiNVwiXG4gICAgICAgID5cbiAgICAgICAgICA8Rm9ybS5MYWJlbD4ge2kgKyAxfTwvRm9ybS5MYWJlbD5cbiAgICAgICAgICA8Rm9ybS5Db250cm9sIHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJbnN0cnVjdGlvbnNcIiAvPlxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICA8Lz5cbiAgICApO1xuICB9KTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgc2V0VmFsaWRhdGVkKHRydWUpO1xuICAgIC8vc2VuZCB2YWxpZGF0ZWQgZm9ybSB0byBhcGkgZW5kcG9pbnRcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZvcm0gbm9WYWxpZGF0ZSB2YWxpZGF0ZWQ9e3ZhbGlkYXRlZH0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXQtMyBtcy0zXCI+XG4gICAgICAgICAgPEZvcm0uR3JvdXBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxuICAgICAgICAgICAgYXM9e0NvbH1cbiAgICAgICAgICAgIG1kPVwiNFwiXG4gICAgICAgICAgICBjb250cm9sSWQ9XCJ2YWxpZGF0aW9uQ3VzdG9tMDFcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPlJlY2lwZSBOYW1lPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIC8+XG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrPlNvdW5kcyB0YXN0eSE8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm1zLTNcIj5cbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm10LTMgIG1lLTNcIiBtZD1cIjRcIj5cbiAgICAgICAgICAgIDxoND5JbmdyZWRpZW50czwvaDQ+XG4gICAgICAgICAgICB7aW5ncmVkaWVudHN9XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEluZ3JlZGllbnQoaW5ncmVkaWVudCArIDEpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGQgSW5ncmVkaWVudHNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEluZ3JlZGllbnQoaW5ncmVkaWVudCAtIDEpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZW1vdmUgSW5ncmVkaWVudHNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtdC0zIG1zLTMgbWUtM1wiPlxuICAgICAgICAgICAgPGg0Pkluc3RydWN0aW9uczwvaDQ+XG4gICAgICAgICAgICB7aW5zdHJ1Y3Rpb25zfVxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJbnN0cnVjdGlvbihpbnN0cnVjdGlvbiArIDEpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGQgSW5zdHJ1Y3Rpb25cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEluc3RydWN0aW9uKGluc3RydWN0aW9uIC0gMSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlbW92ZSBJbnN0cnVjdGlvblxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Gb3JtPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQnV0dG9uIiwiQ29sIiwiRm9ybSIsIklucHV0R3JvdXAiLCJSb3ciLCJBZGRGb3JtIiwidmFsaWRhdGVkIiwic2V0VmFsaWRhdGVkIiwiaW5ncmVkaWVudCIsImFkZEluZ3JlZGllbnQiLCJpbnN0cnVjdGlvbiIsImFkZEluc3RydWN0aW9uIiwiaW5ncmVkaWVudHMiLCJBcnJheSIsIm1hcCIsIngiLCJpIiwiR3JvdXAiLCJhcyIsImNvbnRyb2xJZCIsImNsYXNzTmFtZSIsIkNvbnRyb2wiLCJyZXF1aXJlZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImluc3RydWN0aW9ucyIsImxnIiwiTGFiZWwiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsImZvcm0iLCJjdXJyZW50VGFyZ2V0IiwiY2hlY2tWYWxpZGl0eSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwibm9WYWxpZGF0ZSIsIm9uU3VibWl0IiwibWQiLCJGZWVkYmFjayIsImg0IiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/add-form.js\n"));

/***/ })

});