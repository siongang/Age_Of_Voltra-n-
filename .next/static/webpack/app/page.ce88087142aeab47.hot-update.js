"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [jsonData, setJsonData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1); // Track active tab state\n    // Handle file input\n    const handleFileChange = (e)=>{\n        const selectedFile = e.target.files ? e.target.files[0] : null;\n        if (selectedFile && selectedFile.type === \"application/json\") {\n            const reader = new FileReader();\n            reader.onload = ()=>{\n                try {\n                    const fileContent = reader.result;\n                    setJsonData(fileContent); // Store raw file content\n                    setError(null);\n                } catch (err) {\n                    setError(\"Failed to read the JSON file.\");\n                    setJsonData(null);\n                }\n            };\n            reader.readAsText(selectedFile);\n            setFile(selectedFile);\n        } else {\n            setError(\"Please select a valid JSON file.\");\n        }\n    };\n    // Handle Generate button click\n    const handleGenerate = async ()=>{\n        if (!jsonData) {\n            setError(\"No JSON data to send.\");\n            return;\n        }\n        setLoading(true);\n        setError(null);\n        // deleted localhost8000\n        try {\n            const response = await fetch(\"https://age-of-voltra-backend.vercel.app/api/py/your-endpoint\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: jsonData\n            });\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            // Get the CSV file as a blob from the response\n            const blob = await response.blob();\n            const url = window.URL.createObjectURL(blob);\n            // Create a download link and trigger it\n            const a = document.createElement(\"a\");\n            a.href = url;\n            a.download = \"data.csv\"; // Set the filename\n            document.body.appendChild(a);\n            a.click();\n            a.remove();\n        } catch (err) {\n            setError(\"Failed to send data to the backend.\");\n            console.error(\"Error:\", err); // Log any errors\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            minHeight: \"100vh\",\n            backgroundColor: \"#ffffff\",\n            fontFamily: \"Helvetica, Arial, sans-serif\",\n            padding: \"20px\",\n            color: \"#333\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    fontSize: \"3rem\",\n                    fontWeight: \"700\",\n                    color: \"#222\",\n                    textAlign: \"center\",\n                    marginBottom: \"40px\",\n                    lineHeight: \"1.3\",\n                    transition: \"transform 0.5s ease-in-out\"\n                },\n                children: \"Age of Voltra(n) Energy\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"https://www.voltra.energy/\",\n                target: \"_blank\",\n                rel: \"noopener noreferrer\",\n                style: {\n                    color: \"#4C51BF\",\n                    fontSize: \"1.2rem\",\n                    textDecoration: \"none\",\n                    marginBottom: \"30px\",\n                    transition: \"color 0.3s\"\n                },\n                onMouseEnter: (e)=>e.currentTarget.style.color = \"#0a3c77\",\n                onMouseLeave: (e)=>e.currentTarget.style.color = \"#4C51BF\",\n                children: \"Visit Voltra Energy Website\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    borderBottom: \"2px solid #4C51BF\",\n                    marginBottom: \"40px\",\n                    width: \"100%\",\n                    maxWidth: \"800px\",\n                    boxShadow: \"0px 4px 8px rgba(0, 0, 0, 0.1)\",\n                    borderRadius: \"10px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>setActiveTab(1),\n                        style: {\n                            flex: 1,\n                            textAlign: \"center\",\n                            padding: \"15px\",\n                            cursor: \"pointer\",\n                            backgroundColor: activeTab === 1 ? \"#4C51BF\" : \"#f5f5f5\",\n                            color: activeTab === 1 ? \"white\" : \"#333\",\n                            fontWeight: activeTab === 1 ? \"bold\" : \"normal\",\n                            transition: \"background-color 0.3s, transform 0.3s\",\n                            transform: activeTab === 1 ? \"scale(1.05)\" : \"scale(1)\",\n                            borderTopLeftRadius: \"10px\",\n                            borderTopRightRadius: \"10px\"\n                        },\n                        children: \"Solution 1: JSON Domain Extraction\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>setActiveTab(2),\n                        style: {\n                            flex: 1,\n                            textAlign: \"center\",\n                            padding: \"15px\",\n                            cursor: \"pointer\",\n                            backgroundColor: activeTab === 2 ? \"#4C51BF\" : \"#f5f5f5\",\n                            color: activeTab === 2 ? \"white\" : \"#333\",\n                            fontWeight: activeTab === 2 ? \"bold\" : \"normal\",\n                            transition: \"background-color 0.3s, transform 0.3s\",\n                            transform: activeTab === 2 ? \"scale(1.05)\" : \"scale(1)\",\n                            borderTopLeftRadius: \"10px\",\n                            borderTopRightRadius: \"10px\"\n                        },\n                        children: \"Solution 2: TBD\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                        lineNumber: 153,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, this),\n            activeTab === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    width: \"100%\",\n                    maxWidth: \"800px\",\n                    textAlign: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        style: {\n                            marginBottom: \"50px\"\n                        },\n                        children: [\n                            \"  \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                style: {\n                                    fontSize: \"1.5rem\",\n                                    fontWeight: \"600\"\n                                },\n                                children: \"JSON Domain Extraction\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                                lineNumber: 186,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Upload a JSON file containing information about charging stations. We'll help you extract the web domains of the companies that own these stations.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                                lineNumber: 189,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                        lineNumber: 185,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        accept: \".json\",\n                        onChange: handleFileChange,\n                        style: {\n                            padding: \"15px\",\n                            borderRadius: \"8px\",\n                            border: \"2px solid #4C51BF\",\n                            fontSize: \"16px\",\n                            width: \"250px\",\n                            textAlign: \"center\",\n                            marginBottom: \"40px\",\n                            transition: \"0.3s\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                        lineNumber: 197,\n                        columnNumber: 11\n                    }, this),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            color: \"red\",\n                            fontSize: \"14px\",\n                            fontWeight: \"bold\"\n                        },\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                        lineNumber: 216,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleGenerate,\n                        disabled: loading,\n                        style: {\n                            padding: \"15px 40px\",\n                            backgroundColor: \"#4C51BF\",\n                            color: \"white\",\n                            border: \"none\",\n                            borderRadius: \"10px\",\n                            cursor: \"pointer\",\n                            fontSize: \"18px\",\n                            fontWeight: \"600\",\n                            transition: \"background-color 0.3s, transform 0.3s\",\n                            opacity: loading ? 0.6 : 1,\n                            boxShadow: \"0 4px 8px rgba(0, 0, 0, 0.1)\"\n                        },\n                        children: loading ? \"Generating...\" : \"Generate\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                        lineNumber: 222,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                lineNumber: 175,\n                columnNumber: 9\n            }, this),\n            activeTab === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    width: \"100%\",\n                    maxWidth: \"800px\",\n                    textAlign: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    style: {\n                        marginBottom: \"50px\"\n                    },\n                    children: [\n                        \"  \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            style: {\n                                fontSize: \"1.5rem\",\n                                fontWeight: \"600\"\n                            },\n                            children: \"Solution 2: TBD\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                            lineNumber: 257,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Stay tuned for the second solution coming soon.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                            lineNumber: 260,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                    lineNumber: 256,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                lineNumber: 246,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"aIp4tVobXp1+GCmXsEsYf9NBbtY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29CQUFPOzt3QkFBRztzQ0FDeEMsOERBQUNvQjs0QkFBR2xDLE9BQU87Z0NBQUVXLFVBQVU7Z0NBQVVDLFlBQVk7NEJBQU07c0NBQUc7Ozs7OztzQ0FHdEQsOERBQUN1QjtzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNZjtHQXRRd0JsRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlPEZpbGUgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2pzb25EYXRhLCBzZXRKc29uRGF0YV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGU8bnVtYmVyPigxKTsgLy8gVHJhY2sgYWN0aXZlIHRhYiBzdGF0ZVxuXG4gIC8vIEhhbmRsZSBmaWxlIGlucHV0XG4gIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEZpbGUgPSBlLnRhcmdldC5maWxlcyA/IGUudGFyZ2V0LmZpbGVzWzBdIDogbnVsbDtcbiAgICBpZiAoc2VsZWN0ZWRGaWxlICYmIHNlbGVjdGVkRmlsZS50eXBlID09PSBcImFwcGxpY2F0aW9uL2pzb25cIikge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZmlsZUNvbnRlbnQgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZztcbiAgICAgICAgICBzZXRKc29uRGF0YShmaWxlQ29udGVudCk7IC8vIFN0b3JlIHJhdyBmaWxlIGNvbnRlbnRcbiAgICAgICAgICBzZXRFcnJvcihudWxsKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgc2V0RXJyb3IoXCJGYWlsZWQgdG8gcmVhZCB0aGUgSlNPTiBmaWxlLlwiKTtcbiAgICAgICAgICBzZXRKc29uRGF0YShudWxsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJlYWRlci5yZWFkQXNUZXh0KHNlbGVjdGVkRmlsZSk7XG4gICAgICBzZXRGaWxlKHNlbGVjdGVkRmlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVycm9yKFwiUGxlYXNlIHNlbGVjdCBhIHZhbGlkIEpTT04gZmlsZS5cIik7XG4gICAgfVxuICB9O1xuXG4gIC8vIEhhbmRsZSBHZW5lcmF0ZSBidXR0b24gY2xpY2tcbiAgY29uc3QgaGFuZGxlR2VuZXJhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFqc29uRGF0YSkge1xuICAgICAgc2V0RXJyb3IoXCJObyBKU09OIGRhdGEgdG8gc2VuZC5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRFcnJvcihudWxsKTtcbiAgICAvLyBkZWxldGVkIGxvY2FsaG9zdDgwMDBcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYWdlLW9mLXZvbHRyYS1iYWNrZW5kLnZlcmNlbC5hcHAvYXBpL3B5L3lvdXItZW5kcG9pbnRcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IGpzb25EYXRhLCAvLyBTZW5kIHJhdyBKU09OIGRhdGEgYXMgYSBzdHJpbmdcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBva1wiKTtcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IHRoZSBDU1YgZmlsZSBhcyBhIGJsb2IgZnJvbSB0aGUgcmVzcG9uc2VcbiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG4gICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuICAgICAgLy8gQ3JlYXRlIGEgZG93bmxvYWQgbGluayBhbmQgdHJpZ2dlciBpdFxuICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgYS5ocmVmID0gdXJsO1xuICAgICAgYS5kb3dubG9hZCA9IFwiZGF0YS5jc3ZcIjsgIC8vIFNldCB0aGUgZmlsZW5hbWVcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICBhLmNsaWNrKCk7XG4gICAgICBhLnJlbW92ZSgpO1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcihcIkZhaWxlZCB0byBzZW5kIGRhdGEgdG8gdGhlIGJhY2tlbmQuXCIpO1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpOyAvLyBMb2cgYW55IGVycm9yc1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICBmb250RmFtaWx5OiBcIkhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWZcIixcbiAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXG4gICAgICAgIGNvbG9yOiBcIiMzMzNcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgey8qIE1haW4gVGl0bGUgKi99XG4gICAgICA8aDFcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBmb250U2l6ZTogXCIzcmVtXCIsXG4gICAgICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcbiAgICAgICAgICBjb2xvcjogXCIjMjIyXCIsXG4gICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI0MHB4XCIsICAvLyBJbmNyZWFzZWQgdmVydGljYWwgc3BhY2luZ1xuICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS4zXCIsXG4gICAgICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBBZ2Ugb2YgVm9sdHJhKG4pIEVuZXJneVxuICAgICAgPC9oMT5cblxuICAgICAgey8qIFBhcmVudCBXZWJzaXRlIExpbmsgKi99XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cudm9sdHJhLmVuZXJneS9cIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBjb2xvcjogXCIjNEM1MUJGXCIsXG4gICAgICAgICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXG4gICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzMHB4XCIsICAvLyBJbmNyZWFzZWQgdmVydGljYWwgc3BhY2luZ1xuICAgICAgICAgIHRyYW5zaXRpb246IFwiY29sb3IgMC4zc1wiLFxuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiAoZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmNvbG9yID0gXCIjMGEzYzc3XCIpfVxuICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiAoZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmNvbG9yID0gXCIjNEM1MUJGXCIpfVxuICAgICAgPlxuICAgICAgICBWaXNpdCBWb2x0cmEgRW5lcmd5IFdlYnNpdGVcbiAgICAgIDwvYT5cblxuICAgICAgey8qIFRhYnMgZm9yIFNvbHV0aW9ucyAqL31cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBib3JkZXJCb3R0b206IFwiMnB4IHNvbGlkICM0QzUxQkZcIixcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNDBweFwiLCAgLy8gSW5jcmVhc2VkIHZlcnRpY2FsIHNwYWNpbmdcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgbWF4V2lkdGg6IFwiODAwcHhcIixcbiAgICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYigxKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTVweFwiLFxuICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlVGFiID09PSAxID8gXCIjNEM1MUJGXCIgOiBcIiNmNWY1ZjVcIixcbiAgICAgICAgICAgIGNvbG9yOiBhY3RpdmVUYWIgPT09IDEgPyBcIndoaXRlXCIgOiBcIiMzMzNcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IGFjdGl2ZVRhYiA9PT0gMSA/IFwiYm9sZFwiIDogXCJub3JtYWxcIixcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYmFja2dyb3VuZC1jb2xvciAwLjNzLCB0cmFuc2Zvcm0gMC4zc1wiLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBhY3RpdmVUYWIgPT09IDEgPyBcInNjYWxlKDEuMDUpXCIgOiBcInNjYWxlKDEpXCIsXG4gICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBcIjEwcHhcIixcbiAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcIjEwcHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgU29sdXRpb24gMTogSlNPTiBEb21haW4gRXh0cmFjdGlvblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYigyKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTVweFwiLFxuICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlVGFiID09PSAyID8gXCIjNEM1MUJGXCIgOiBcIiNmNWY1ZjVcIixcbiAgICAgICAgICAgIGNvbG9yOiBhY3RpdmVUYWIgPT09IDIgPyBcIndoaXRlXCIgOiBcIiMzMzNcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IGFjdGl2ZVRhYiA9PT0gMiA/IFwiYm9sZFwiIDogXCJub3JtYWxcIixcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYmFja2dyb3VuZC1jb2xvciAwLjNzLCB0cmFuc2Zvcm0gMC4zc1wiLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBhY3RpdmVUYWIgPT09IDIgPyBcInNjYWxlKDEuMDUpXCIgOiBcInNjYWxlKDEpXCIsXG4gICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBcIjEwcHhcIixcbiAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcIjEwcHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgU29sdXRpb24gMjogVEJEXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBTb2x1dGlvbiAxOiBKU09OIERvbWFpbiBFeHRyYWN0aW9uICovfVxuICAgICAge2FjdGl2ZVRhYiA9PT0gMSAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIG1heFdpZHRoOiBcIjgwMHB4XCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI1MHB4XCIgfX0+ICB7LyogSW5jcmVhc2VkIHZlcnRpY2FsIHNwYWNpbmcgKi99XG4gICAgICAgICAgICA8aDMgc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIsIGZvbnRXZWlnaHQ6IFwiNjAwXCIgfX0+XG4gICAgICAgICAgICAgIEpTT04gRG9tYWluIEV4dHJhY3Rpb25cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVXBsb2FkIGEgSlNPTiBmaWxlIGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgY2hhcmdpbmcgc3RhdGlvbnMuXG4gICAgICAgICAgICAgIFdlJ2xsIGhlbHAgeW91IGV4dHJhY3QgdGhlIHdlYiBkb21haW5zIG9mIHRoZSBjb21wYW5pZXMgdGhhdCBvd25cbiAgICAgICAgICAgICAgdGhlc2Ugc3RhdGlvbnMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgey8qIEZpbGUgSW5wdXQgKi99XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBhY2NlcHQ9XCIuanNvblwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxuICAgICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICM0QzUxQkZcIixcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCIyNTBweFwiLFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI0MHB4XCIsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiMC4zc1wiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgey8qIEVycm9yIG1lc3NhZ2UgKi99XG4gICAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiLCBmb250U2l6ZTogXCIxNHB4XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlxuICAgICAgICAgICAgICB7ZXJyb3J9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHsvKiBHZW5lcmF0ZSBCdXR0b24gKi99XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlR2VuZXJhdGV9XG4gICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTVweCA0MHB4XCIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNEM1MUJGXCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI2MDBcIixcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIHRyYW5zZm9ybSAwLjNzXCIsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IGxvYWRpbmcgPyAwLjYgOiAxLFxuICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bG9hZGluZyA/IFwiR2VuZXJhdGluZy4uLlwiIDogXCJHZW5lcmF0ZVwifVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBTb2x1dGlvbiAyIChQbGFjZWhvbGRlciBmb3Igbm93KSAqL31cbiAgICAgIHthY3RpdmVUYWIgPT09IDIgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBtYXhXaWR0aDogXCI4MDBweFwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNTBweFwiIH19PiAgey8qIEluY3JlYXNlZCB2ZXJ0aWNhbCBzcGFjaW5nICovfVxuICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiLCBmb250V2VpZ2h0OiBcIjYwMFwiIH19PlxuICAgICAgICAgICAgICBTb2x1dGlvbiAyOiBUQkRcbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8cD5TdGF5IHR1bmVkIGZvciB0aGUgc2Vjb25kIHNvbHV0aW9uIGNvbWluZyBzb29uLjwvcD5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJmaWxlIiwic2V0RmlsZSIsImpzb25EYXRhIiwic2V0SnNvbkRhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZSIsInNlbGVjdGVkRmlsZSIsInRhcmdldCIsImZpbGVzIiwidHlwZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJmaWxlQ29udGVudCIsInJlc3VsdCIsImVyciIsInJlYWRBc1RleHQiLCJoYW5kbGVHZW5lcmF0ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIm9rIiwiRXJyb3IiLCJibG9iIiwidXJsIiwid2luZG93IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJkb3dubG9hZCIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmUiLCJjb25zb2xlIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1pbkhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImZvbnRGYW1pbHkiLCJwYWRkaW5nIiwiY29sb3IiLCJoMSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsImxpbmVIZWlnaHQiLCJ0cmFuc2l0aW9uIiwicmVsIiwidGV4dERlY29yYXRpb24iLCJvbk1vdXNlRW50ZXIiLCJjdXJyZW50VGFyZ2V0Iiwib25Nb3VzZUxlYXZlIiwiYm9yZGVyQm90dG9tIiwid2lkdGgiLCJtYXhXaWR0aCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsIm9uQ2xpY2siLCJmbGV4IiwiY3Vyc29yIiwidHJhbnNmb3JtIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwic2VjdGlvbiIsImgzIiwicCIsImlucHV0IiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJib3JkZXIiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9wYWNpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});