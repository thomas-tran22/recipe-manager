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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddForm: function() { return /* binding */ AddForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction AddForm() {\n    _s();\n    const [validated, setValidated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ingredient, addIngredient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [instruction, addInstruction] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const ingredients = [\n        ...Array(ingredient)\n    ].map((x, i)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Group, {\n                controlId: \"ingredient \" + i,\n                className: \"mb-3 me-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control, {\n                    required: true,\n                    type: \"text\",\n                    placeholder: \"Ingredient \" + (i + 1)\n                }, void 0, false, {\n                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    });\n    const instructions = [\n        ...Array(instruction)\n    ].map((x, i)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Group, {\n                as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                controlId: \"instruction\" + i,\n                className: \"me-5\",\n                lg: \"5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        md: \"2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Label, {\n                            children: [\n                                i + 1,\n                                \". \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        md: \"auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control, {\n                            required: true,\n                            type: \"text\",\n                            placeholder: \"Instructions\"\n                        }, void 0, false, {\n                            fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    });\n    const handleSubmit = (event)=>{\n        const form = event.currentTarget;\n        if (form.checkValidity() === false) {\n            event.preventDefault();\n            event.stopPropagation();\n        }\n        setValidated(true);\n    //send validated form to api endpoint\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            noValidate: true,\n            validated: validated,\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    className: \"mt-3 ms-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Group, {\n                        className: \"mb-3\",\n                        as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        md: \"4\",\n                        controlId: \"validationCustom01\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Label, {\n                                children: \"Recipe Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control, {\n                                required: true,\n                                type: \"text\",\n                                placeholder: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Control.Feedback, {\n                                children: \"Sounds tasty!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    className: \"ms-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: \"mt-3  me-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: \"Ingredients\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this),\n                                ingredients,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    variant: \"success\",\n                                    type: \"button\",\n                                    onClick: ()=>addIngredient(ingredient + 1),\n                                    children: \"Add Ingredients\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    variant: \"danger\",\n                                    type: \"button\",\n                                    onClick: ()=>addIngredient(ingredient - 1),\n                                    children: \"Remove Ingredients\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: \"mt-3 ms-3 me-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: \"Instructions\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this),\n                                instructions,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    variant: \"success\",\n                                    type: \"button\",\n                                    onClick: ()=>addInstruction(instruction + 1),\n                                    children: \"Add Instruction\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    variant: \"danger\",\n                                    type: \"button\",\n                                    onClick: ()=>addInstruction(instruction - 1),\n                                    children: \"Remove Instruction\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/panda/Home/Coding Projects/web-projects/recipe-manager/components/add-form.js\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(AddForm, \"Q1OxOn1Ws4dWuNakgkP0TBeQs/k=\");\n_c = AddForm;\nvar _c;\n$RefreshReg$(_c, \"AddForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQ1JsQixNQUFLO29DQUNMbUIsU0FBUyxJQUFNOUIsZUFBZUQsY0FBYzs4Q0FDN0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtHQTFHZ0JMO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYWRkLWZvcm0uanM/NDljYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0lucHV0R3JvdXBcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEFkZEZvcm0oKSB7XG4gIGNvbnN0IFt2YWxpZGF0ZWQsIHNldFZhbGlkYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbmdyZWRpZW50LCBhZGRJbmdyZWRpZW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaW5zdHJ1Y3Rpb24sIGFkZEluc3RydWN0aW9uXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGluZ3JlZGllbnRzID0gWy4uLkFycmF5KGluZ3JlZGllbnQpXS5tYXAoKHgsIGkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPXtcImluZ3JlZGllbnQgXCIgKyBpfSBjbGFzc05hbWU9XCJtYi0zIG1lLWF1dG9cIj5cbiAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiSW5ncmVkaWVudCBcIiArIChpICsgMSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfSk7XG5cbiAgY29uc3QgaW5zdHJ1Y3Rpb25zID0gWy4uLkFycmF5KGluc3RydWN0aW9uKV0ubWFwKCh4LCBpKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxGb3JtLkdyb3VwXG4gICAgICAgICAgYXM9e1Jvd31cbiAgICAgICAgICBjb250cm9sSWQ9e1wiaW5zdHJ1Y3Rpb25cIiArIGl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWUtNVwiXG4gICAgICAgICAgbGc9XCI1XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxDb2wgbWQ9XCIyXCI+XG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD57aSArIDF9LiA8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBtZD1cImF1dG9cIj5cbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkluc3RydWN0aW9uc1wiIC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgIDwvPlxuICAgICk7XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBzZXRWYWxpZGF0ZWQodHJ1ZSk7XG4gICAgLy9zZW5kIHZhbGlkYXRlZCBmb3JtIHRvIGFwaSBlbmRwb2ludFxuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybSBub1ZhbGlkYXRlIHZhbGlkYXRlZD17dmFsaWRhdGVkfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtdC0zIG1zLTNcIj5cbiAgICAgICAgICA8Rm9ybS5Hcm91cFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXG4gICAgICAgICAgICBhcz17Q29sfVxuICAgICAgICAgICAgbWQ9XCI0XCJcbiAgICAgICAgICAgIGNvbnRyb2xJZD1cInZhbGlkYXRpb25DdXN0b20wMVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+UmVjaXBlIE5hbWU8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sIHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgLz5cbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2s+U291bmRzIHRhc3R5ITwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXMtM1wiPlxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibXQtMyAgbWUtM1wiPlxuICAgICAgICAgICAgPGg0PkluZ3JlZGllbnRzPC9oND5cbiAgICAgICAgICAgIHtpbmdyZWRpZW50c31cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkSW5ncmVkaWVudChpbmdyZWRpZW50ICsgMSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFkZCBJbmdyZWRpZW50c1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkSW5ncmVkaWVudChpbmdyZWRpZW50IC0gMSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlbW92ZSBJbmdyZWRpZW50c1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm10LTMgbXMtMyBtZS0zXCI+XG4gICAgICAgICAgICA8aDQ+SW5zdHJ1Y3Rpb25zPC9oND5cbiAgICAgICAgICAgIHtpbnN0cnVjdGlvbnN9XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEluc3RydWN0aW9uKGluc3RydWN0aW9uICsgMSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFkZCBJbnN0cnVjdGlvblxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkSW5zdHJ1Y3Rpb24oaW5zdHJ1Y3Rpb24gLSAxKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVtb3ZlIEluc3RydWN0aW9uXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0Zvcm0+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDb250YWluZXIiLCJCdXR0b24iLCJDb2wiLCJGb3JtIiwiSW5wdXRHcm91cCIsIlJvdyIsIkFkZEZvcm0iLCJ2YWxpZGF0ZWQiLCJzZXRWYWxpZGF0ZWQiLCJpbmdyZWRpZW50IiwiYWRkSW5ncmVkaWVudCIsImluc3RydWN0aW9uIiwiYWRkSW5zdHJ1Y3Rpb24iLCJpbmdyZWRpZW50cyIsIkFycmF5IiwibWFwIiwieCIsImkiLCJHcm91cCIsImNvbnRyb2xJZCIsImNsYXNzTmFtZSIsIkNvbnRyb2wiLCJyZXF1aXJlZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImluc3RydWN0aW9ucyIsImFzIiwibGciLCJtZCIsIkxhYmVsIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJmb3JtIiwiY3VycmVudFRhcmdldCIsImNoZWNrVmFsaWRpdHkiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm5vVmFsaWRhdGUiLCJvblN1Ym1pdCIsIkZlZWRiYWNrIiwiaDQiLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/add-form.js\n"));

/***/ })

});