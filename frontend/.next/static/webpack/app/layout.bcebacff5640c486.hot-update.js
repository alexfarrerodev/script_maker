"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"be96984aff4a\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzcyODciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJiZTk2OTg0YWZmNGFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/layout.tsx":
/*!************************!*\
  !*** ./app/layout.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_local_target_css_path_app_layout_tsx_import_arguments_src_fonts_GeistVF_woff_variable_font_geist_sans_weight_100_900_variableName_geistSans___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/font/local/target.css?{\"path\":\"app/layout.tsx\",\"import\":\"\",\"arguments\":[{\"src\":\"./fonts/GeistVF.woff\",\"variable\":\"--font-geist-sans\",\"weight\":\"100 900\"}],\"variableName\":\"geistSans\"} */ \"(app-pages-browser)/./node_modules/next/font/local/target.css?{\\\"path\\\":\\\"app/layout.tsx\\\",\\\"import\\\":\\\"\\\",\\\"arguments\\\":[{\\\"src\\\":\\\"./fonts/GeistVF.woff\\\",\\\"variable\\\":\\\"--font-geist-sans\\\",\\\"weight\\\":\\\"100 900\\\"}],\\\"variableName\\\":\\\"geistSans\\\"}\");\n/* harmony import */ var next_font_local_target_css_path_app_layout_tsx_import_arguments_src_fonts_GeistVF_woff_variable_font_geist_sans_weight_100_900_variableName_geistSans___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_font_local_target_css_path_app_layout_tsx_import_arguments_src_fonts_GeistVF_woff_variable_font_geist_sans_weight_100_900_variableName_geistSans___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_font_local_target_css_path_app_layout_tsx_import_arguments_src_fonts_GeistMonoVF_woff_variable_font_geist_mono_weight_100_900_variableName_geistMono___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/font/local/target.css?{\"path\":\"app/layout.tsx\",\"import\":\"\",\"arguments\":[{\"src\":\"./fonts/GeistMonoVF.woff\",\"variable\":\"--font-geist-mono\",\"weight\":\"100 900\"}],\"variableName\":\"geistMono\"} */ \"(app-pages-browser)/./node_modules/next/font/local/target.css?{\\\"path\\\":\\\"app/layout.tsx\\\",\\\"import\\\":\\\"\\\",\\\"arguments\\\":[{\\\"src\\\":\\\"./fonts/GeistMonoVF.woff\\\",\\\"variable\\\":\\\"--font-geist-mono\\\",\\\"weight\\\":\\\"100 900\\\"}],\\\"variableName\\\":\\\"geistMono\\\"}\");\n/* harmony import */ var next_font_local_target_css_path_app_layout_tsx_import_arguments_src_fonts_GeistMonoVF_woff_variable_font_geist_mono_weight_100_900_variableName_geistMono___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_font_local_target_css_path_app_layout_tsx_import_arguments_src_fonts_GeistMonoVF_woff_variable_font_geist_mono_weight_100_900_variableName_geistMono___WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./app/globals.css\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n// app/layout.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n // Importar el componente Link\nfunction Layout(param) {\n    let { children } = param;\n    _s();\n    const [prevScrollY, setPrevScrollY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isHeaderVisible, setIsHeaderVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleScroll = ()=>{\n        const currentScrollY = window.scrollY;\n        setIsHeaderVisible(currentScrollY < prevScrollY || currentScrollY === 0);\n        setPrevScrollY(currentScrollY);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        prevScrollY\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            className: \"\".concat((next_font_local_target_css_path_app_layout_tsx_import_arguments_src_fonts_GeistVF_woff_variable_font_geist_sans_weight_100_900_variableName_geistSans___WEBPACK_IMPORTED_MODULE_4___default().variable), \" \").concat((next_font_local_target_css_path_app_layout_tsx_import_arguments_src_fonts_GeistMonoVF_woff_variable_font_geist_mono_weight_100_900_variableName_geistMono___WEBPACK_IMPORTED_MODULE_5___default().variable), \" antialiased\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    style: {\n                        backgroundColor: \"rgba(10, 10, 10, 0.85)\",\n                        position: \"fixed\",\n                        top: 0,\n                        left: 0,\n                        right: 0,\n                        transition: \"transform 0.3s ease ,  backdrop-filter 0.3s ease\",\n                        transform: isHeaderVisible ? \"translateY(0)\" : \"translateY(-100%)\",\n                        zIndex: 1000,\n                        backdropFilter: \"blur(12px)\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/3 mb-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-end mr-12\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"/\",\n                                        className: \"flex items-center max-w-xs transition mr-5 transform duration-150 hover:scale-95 text-white text-xl font-normal px-4 py-2 rounded-full\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"/icon_page.png\",\n                                                alt: \"ico\",\n                                                className: \"transition transform duration-150 hover:scale-95 w-8.5 h-7 mr-2\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 19\n                                            }, this),\n                                            \"ScriptMaker\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/3 mt-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-center space-x-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"flex items-center space-x-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"flex items-center\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    href: \"/\",\n                                                    className: \"transition transform duration-150 hover:scale-95 text-white hover:bg-white hover:text-black font-medium px-4 py-2 rounded-full\",\n                                                    children: \"Docs\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"flex items-center\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    href: \"/faq\",\n                                                    className: \"transition transform duration-150 hover:scale-95 text-white hover:bg-white hover:text-black font-medium px-4 py-2 rounded-full\",\n                                                    children: \"FAQ\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"flex items-center\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    href: \"/\",\n                                                    className: \"transition transform duration-150 hover:scale-95 text-white hover:bg-white hover:text-black font-medium px-4 py-2 rounded-full\",\n                                                    children: \"Script builder\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"flex items-center\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    href: \"/about\",\n                                                    className: \"transition transform duration-150 hover:scale-95 text-white hover:bg-white hover:text-black font-medium px-4 py-2 rounded-full\",\n                                                    children: \"About\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"flex items-center\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    href: \"/start\",\n                                                    className: \"transition transform duration-150 hover:scale-95 text-white hover:bg-white hover:text-black font-medium px-4 py-2 rounded-full\",\n                                                    children: \"Start\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1/3 mt-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-end mr-[350px]\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Search...\",\n                                        className: \"bg-white text-gray-800 py-0.5  text-center rounded-full border border-white-300 focus:outline-none focus:text-start focus:ring-2 focus:ring-white-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    style: {\n                        marginTop: \"60px\"\n                    },\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                    style: {\n                        backgroundColor: \"#0a0a0a\",\n                        padding: \"1rem\",\n                        marginTop: \"auto\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            color: \"#fff\",\n                            textAlign: \"center\"\n                        },\n                        children: \"\\xa9 2024 Alex Farrero script_maker dev\"\n                    }, void 0, false, {\n                        fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/farre/script_maker/frontend/app/layout.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Layout, \"w3Xfzg5KWDOeVz5uJCyPCGo3Yxw=\");\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQ0c7d0JBQUV4QixPQUFPOzRCQUFFeUIsT0FBTzs0QkFBUUMsV0FBVzt3QkFBUztrQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1RDtHQXRHd0I1QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbGF5b3V0LnRzeD85OTg4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9sYXlvdXQudHN4XG5cInVzZSBjbGllbnRcIjsgLy8gQ2xpZW50IGNvbXBvbmVudCBwb2xpY3kgdXNhZ2VcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ldGFkYXRhIH0gZnJvbSBcIi4vbWV0YWRhdGFcIjsgLy8gSW1wb3J0cyBtZXRhZGF0YSBmcm9tIGEgbmV3IGZpbGVcbmltcG9ydCBsb2NhbEZvbnQgZnJvbSBcIm5leHQvZm9udC9sb2NhbFwiO1xuaW1wb3J0IFwiLi9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiOyAvLyBJbXBvcnRhciBlbCBjb21wb25lbnRlIExpbmtcblxuY29uc3QgZ2Vpc3RTYW5zID0gbG9jYWxGb250KHtcbiAgc3JjOiBcIi4vZm9udHMvR2Vpc3RWRi53b2ZmXCIsXG4gIHZhcmlhYmxlOiBcIi0tZm9udC1nZWlzdC1zYW5zXCIsXG4gIHdlaWdodDogXCIxMDAgOTAwXCIsXG59KTtcbmNvbnN0IGdlaXN0TW9ubyA9IGxvY2FsRm9udCh7XG4gIHNyYzogXCIuL2ZvbnRzL0dlaXN0TW9ub1ZGLndvZmZcIixcbiAgdmFyaWFibGU6IFwiLS1mb250LWdlaXN0LW1vbm9cIixcbiAgd2VpZ2h0OiBcIjEwMCA5MDBcIixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe1xuICBjaGlsZHJlbixcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn0pIHtcbiAgY29uc3QgW3ByZXZTY3JvbGxZLCBzZXRQcmV2U2Nyb2xsWV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzSGVhZGVyVmlzaWJsZSwgc2V0SXNIZWFkZXJWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIHNldElzSGVhZGVyVmlzaWJsZShjdXJyZW50U2Nyb2xsWSA8IHByZXZTY3JvbGxZIHx8IGN1cnJlbnRTY3JvbGxZID09PSAwKTtcbiAgICBzZXRQcmV2U2Nyb2xsWShjdXJyZW50U2Nyb2xsWSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtwcmV2U2Nyb2xsWV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8Ym9keVxuICAgICAgICBjbGFzc05hbWU9e2Ake2dlaXN0U2Fucy52YXJpYWJsZX0gJHtnZWlzdE1vbm8udmFyaWFibGV9IGFudGlhbGlhc2VkYH1cbiAgICAgID5cbiAgICAgICAgey8qIEJsYWNrIGJhciAqL31cbiAgICAgICAgPGhlYWRlclxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgxMCwgMTAsIDEwLCAwLjg1KVwiLCAvLyBDb2xvciBuZWdybyBjb24gODAlIGRlIG9wYWNpZGFkICAgICAgICAgICAgXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC4zcyBlYXNlICwgIGJhY2tkcm9wLWZpbHRlciAwLjNzIGVhc2VcIixcbiAgICAgICAgICAgIHRyYW5zZm9ybTogaXNIZWFkZXJWaXNpYmxlID8gXCJ0cmFuc2xhdGVZKDApXCIgOiBcInRyYW5zbGF0ZVkoLTEwMCUpXCIsXG4gICAgICAgICAgICB6SW5kZXg6IDEwMDAsIC8vIFB1dCBpbiB0aGUgZmlyc3QgbGF5ZXJcbiAgICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoMTJweClcIlxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8zIG1iLTFcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIG1yLTEyXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYXgtdy14cyB0cmFuc2l0aW9uIG1yLTUgdHJhbnNmb3JtIGR1cmF0aW9uLTE1MCBob3ZlcjpzY2FsZS05NSB0ZXh0LXdoaXRlIHRleHQteGwgZm9udC1ub3JtYWwgcHgtNCBweS0yIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbl9wYWdlLnBuZ1wiIGFsdD1cImljb1wiIGNsYXNzTmFtZT1cInRyYW5zaXRpb24gdHJhbnNmb3JtIGR1cmF0aW9uLTE1MCBob3ZlcjpzY2FsZS05NSB3LTguNSBoLTcgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgICBTY3JpcHRNYWtlclxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgbXQtMVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNVwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRyYW5zaXRpb24gdHJhbnNmb3JtIGR1cmF0aW9uLTE1MCBob3ZlcjpzY2FsZS05NSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtYmxhY2sgZm9udC1tZWRpdW0gcHgtNCBweS0yIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIERvY3NcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2ZhcVwiIGNsYXNzTmFtZT1cInRyYW5zaXRpb24gdHJhbnNmb3JtIGR1cmF0aW9uLTE1MCBob3ZlcjpzY2FsZS05NSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtYmxhY2sgZm9udC1tZWRpdW0gcHgtNCBweS0yIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIEZBUVxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidHJhbnNpdGlvbiB0cmFuc2Zvcm0gZHVyYXRpb24tMTUwIGhvdmVyOnNjYWxlLTk1IHRleHQtd2hpdGUgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1ibGFjayBmb250LW1lZGl1bSBweC00IHB5LTIgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgU2NyaXB0IGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwidHJhbnNpdGlvbiB0cmFuc2Zvcm0gZHVyYXRpb24tMTUwIGhvdmVyOnNjYWxlLTk1IHRleHQtd2hpdGUgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1ibGFjayBmb250LW1lZGl1bSBweC00IHB5LTIgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3N0YXJ0XCIgY2xhc3NOYW1lPVwidHJhbnNpdGlvbiB0cmFuc2Zvcm0gZHVyYXRpb24tMTUwIGhvdmVyOnNjYWxlLTk1IHRleHQtd2hpdGUgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1ibGFjayBmb250LW1lZGl1bSBweC00IHB5LTIgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgU3RhcnRcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMyBtdC0yXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBtci1bMzUwcHhdXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LWdyYXktODAwIHB5LTAuNSAgdGV4dC1jZW50ZXIgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItd2hpdGUtMzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czp0ZXh0LXN0YXJ0IGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXdoaXRlLTUwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgey8qIHByaW1hcnkgY29udGFpbmVyICovfVxuICAgICAgICA8bWFpbiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNjBweFwiIH19PntjaGlsZHJlbn08L21haW4+XG5cbiAgICAgICAgey8qIGZvb3QgcGFnZSBiYXIgKi99XG4gICAgICAgIDxmb290ZXIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMwYTBhMGFcIiwgcGFkZGluZzogXCIxcmVtXCIsIG1hcmdpblRvcDogXCJhdXRvXCIgfX0+XG4gICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwiI2ZmZlwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+wqkgMjAyNCBBbGV4IEZhcnJlcm8gc2NyaXB0X21ha2VyIGRldjwvcD5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImdlaXN0U2FucyIsImdlaXN0TW9ubyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJwcmV2U2Nyb2xsWSIsInNldFByZXZTY3JvbGxZIiwiaXNIZWFkZXJWaXNpYmxlIiwic2V0SXNIZWFkZXJWaXNpYmxlIiwiaGFuZGxlU2Nyb2xsIiwiY3VycmVudFNjcm9sbFkiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJodG1sIiwibGFuZyIsImJvZHkiLCJjbGFzc05hbWUiLCJ2YXJpYWJsZSIsImhlYWRlciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwiekluZGV4IiwiYmFja2Ryb3BGaWx0ZXIiLCJkaXYiLCJocmVmIiwiaW1nIiwic3JjIiwiYWx0IiwidWwiLCJsaSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwibWFpbiIsIm1hcmdpblRvcCIsImZvb3RlciIsInBhZGRpbmciLCJwIiwiY29sb3IiLCJ0ZXh0QWxpZ24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layout.tsx\n"));

/***/ })

});