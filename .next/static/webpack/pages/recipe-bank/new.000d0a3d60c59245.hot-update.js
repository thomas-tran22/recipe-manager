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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddForm: function() { return /* binding */ AddForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AddForm() {\n    _s();\n    const [validated, setValidated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ingredient, addIngredient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [instruction, addInstruction] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const ingredients = [\n        ...Array(ingredient)\n    ].map((x, i)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Group, {\n                as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                controlId: \"ingredient \" + i,\n                className: \"mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control, {\n                    required: true,\n                    type: \"text\",\n                    placeholder: \"Ingredient \" + (i + 1)\n                }, void 0, false, {\n                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    });\n    const instructions = [\n        ...Array(instruction)\n    ].map((x, i)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Group, {\n                as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                controlId: \"instruction\" + i,\n                className: \"me-5\",\n                lg: \"5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Label, {\n                        children: i + 1\n                    }, void 0, false, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control, {\n                        required: true,\n                        type: \"text\",\n                        placeholder: \"Instructions\"\n                    }, void 0, false, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    });\n    const handleSubmit = (event)=>{\n        const form = event.currentTarget;\n        if (form.checkValidity() === false) {\n            event.preventDefault();\n            event.stopPropagation();\n        }\n        setValidated(true);\n    //send validated form to api endpoint\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            noValidate: true,\n            validated: validated,\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    className: \"mt-3 ms-3 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Group, {\n                        className: \"mb-3\",\n                        as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        md: \"4\",\n                        controlId: \"validationCustom01\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Label, {\n                                children: \"Recipe Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control, {\n                                required: true,\n                                type: \"text\",\n                                placeholder: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control.Feedback, {\n                                children: \"Sounds tasty!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    \"ms-3\": true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: \"mt-3  me-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: \"Ingredients\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this),\n                                ingredients,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    variant: \"success\",\n                                    type: \"button\",\n                                    onClick: ()=>addIngredient(ingredient + 1),\n                                    children: \"Add Ingredients\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    variant: \"danger\",\n                                    type: \"button\",\n                                    onClick: ()=>addIngredient(ingredient - 1),\n                                    children: \"Remove Ingredients\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: \"mt-3 ms-3 me-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: \"Instructions\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this),\n                                instructions,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    variant: \"success\",\n                                    type: \"button\",\n                                    onClick: ()=>addInstruction(instruction + 1),\n                                    children: \"Add Instruction\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    variant: \"danger\",\n                                    type: \"button\",\n                                    onClick: ()=>addInstruction(instruction - 1),\n                                    children: \"Remove Instruction\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(AddForm, \"Q1OxOn1Ws4dWuNakgkP0TBeQs/k=\");\n_c = AddForm;\nvar _c;\n$RefreshReg$(_c, \"AddForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUFRYjtHQXRHZ0JMO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYWRkLWZvcm0uanM/NDljYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0lucHV0R3JvdXBcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEFkZEZvcm0oKSB7XG4gIGNvbnN0IFt2YWxpZGF0ZWQsIHNldFZhbGlkYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbmdyZWRpZW50LCBhZGRJbmdyZWRpZW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaW5zdHJ1Y3Rpb24sIGFkZEluc3RydWN0aW9uXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGluZ3JlZGllbnRzID0gWy4uLkFycmF5KGluZ3JlZGllbnQpXS5tYXAoKHgsIGkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gY29udHJvbElkPXtcImluZ3JlZGllbnQgXCIgKyBpfSBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkluZ3JlZGllbnQgXCIgKyAoaSArIDEpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgIDwvPlxuICAgICk7XG4gIH0pO1xuXG4gIGNvbnN0IGluc3RydWN0aW9ucyA9IFsuLi5BcnJheShpbnN0cnVjdGlvbildLm1hcCgoeCwgaSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8Rm9ybS5Hcm91cFxuICAgICAgICAgIGFzPXtSb3d9XG4gICAgICAgICAgY29udHJvbElkPXtcImluc3RydWN0aW9uXCIgKyBpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1lLTVcIlxuICAgICAgICAgIGxnPVwiNVwiXG4gICAgICAgID5cbiAgICAgICAgICA8Rm9ybS5MYWJlbD57aSArIDF9PC9Gb3JtLkxhYmVsPlxuICAgICAgICAgIDxGb3JtLkNvbnRyb2wgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkluc3RydWN0aW9uc1wiIC8+XG4gICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgIDwvPlxuICAgICk7XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBzZXRWYWxpZGF0ZWQodHJ1ZSk7XG4gICAgLy9zZW5kIHZhbGlkYXRlZCBmb3JtIHRvIGFwaSBlbmRwb2ludFxuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybSBub1ZhbGlkYXRlIHZhbGlkYXRlZD17dmFsaWRhdGVkfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtdC0zIG1zLTMgXCI+XG4gICAgICAgICAgPEZvcm0uR3JvdXBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxuICAgICAgICAgICAgYXM9e0NvbH1cbiAgICAgICAgICAgIG1kPVwiNFwiXG4gICAgICAgICAgICBjb250cm9sSWQ9XCJ2YWxpZGF0aW9uQ3VzdG9tMDFcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPlJlY2lwZSBOYW1lPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIC8+XG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrPlNvdW5kcyB0YXN0eSE8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93IG1zLTM+XG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtdC0zICBtZS0zXCI+XG4gICAgICAgICAgICA8aDQ+SW5ncmVkaWVudHM8L2g0PlxuICAgICAgICAgICAge2luZ3JlZGllbnRzfVxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJbmdyZWRpZW50KGluZ3JlZGllbnQgKyAxKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWRkIEluZ3JlZGllbnRzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cImRhbmdlclwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJbmdyZWRpZW50KGluZ3JlZGllbnQgLSAxKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVtb3ZlIEluZ3JlZGllbnRzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibXQtMyBtcy0zIG1lLTNcIj5cbiAgICAgICAgICAgIDxoND5JbnN0cnVjdGlvbnM8L2g0PlxuICAgICAgICAgICAge2luc3RydWN0aW9uc31cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkSW5zdHJ1Y3Rpb24oaW5zdHJ1Y3Rpb24gKyAxKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWRkIEluc3RydWN0aW9uXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cImRhbmdlclwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJbnN0cnVjdGlvbihpbnN0cnVjdGlvbiAtIDEpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZW1vdmUgSW5zdHJ1Y3Rpb25cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvRm9ybT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNvbCIsIkZvcm0iLCJJbnB1dEdyb3VwIiwiUm93IiwiQWRkRm9ybSIsInZhbGlkYXRlZCIsInNldFZhbGlkYXRlZCIsImluZ3JlZGllbnQiLCJhZGRJbmdyZWRpZW50IiwiaW5zdHJ1Y3Rpb24iLCJhZGRJbnN0cnVjdGlvbiIsImluZ3JlZGllbnRzIiwiQXJyYXkiLCJtYXAiLCJ4IiwiaSIsIkdyb3VwIiwiYXMiLCJjb250cm9sSWQiLCJjbGFzc05hbWUiLCJDb250cm9sIiwicmVxdWlyZWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpbnN0cnVjdGlvbnMiLCJsZyIsIkxhYmVsIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJmb3JtIiwiY3VycmVudFRhcmdldCIsImNoZWNrVmFsaWRpdHkiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm5vVmFsaWRhdGUiLCJvblN1Ym1pdCIsIm1kIiwiRmVlZGJhY2siLCJtcy0zIiwiaDQiLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/add-form.js\n"));

/***/ })

});