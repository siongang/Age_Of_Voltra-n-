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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [jsonData, setJsonData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [showNote, setShowNote] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // State for showing Important Note\n    const [textInput, setTextInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        single: \"\",\n        multiple: \"\" // Error for Multiple Property Finder tab\n    });\n    const tabRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]); // Reference for both tabs\n    const underlineRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // Reference for the underline\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (tabRefs.current[activeTab - 1] && underlineRef.current) {\n            const activeTabElement = tabRefs.current[activeTab - 1];\n            const activeTabWidth = activeTabElement.offsetWidth;\n            const activeTabLeft = activeTabElement.offsetLeft;\n            // Dynamically adjust the underline's width and position\n            underlineRef.current.style.width = \"\".concat(activeTabWidth, \"px\");\n            underlineRef.current.style.left = \"\".concat(activeTabLeft, \"px\");\n        }\n    }, [\n        activeTab\n    ]);\n    const handleFileChange = (e)=>{\n        const selectedFile = e.target.files ? e.target.files[0] : null;\n        if (selectedFile && selectedFile.type === \"application/json\") {\n            const reader = new FileReader();\n            reader.onload = ()=>{\n                try {\n                    const fileContent = reader.result;\n                    setJsonData(fileContent);\n                    setErrors({\n                        single: \"\",\n                        multiple: \"\"\n                    });\n                } catch (err) {\n                    setErrors((prevErrors)=>({\n                            ...prevErrors,\n                            multiple: \"Failed to read the JSON file.\"\n                        }));\n                    setJsonData(null);\n                }\n            };\n            reader.readAsText(selectedFile);\n            setFile(selectedFile);\n        } else {\n            setErrors((prevErrors)=>({\n                    ...prevErrors,\n                    multiple: \"Please select a valid JSON file.\"\n                }));\n        }\n    };\n    const handleTextGenerate = async ()=>{\n        if (textInput === \"\") {\n            setErrors((prevErrors)=>({\n                    ...prevErrors,\n                    single: \"Please type an address\"\n                }));\n            return;\n        }\n        setErrors({\n            single: \"\",\n            multiple: \"\"\n        });\n        setLoading(true);\n        const input = '{\"address\":\"'.concat(textInput, '\"}');\n        const response = await fetch(\"/api/py/your-endpoint\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: input\n        });\n        const blob = await response.blob();\n        setLoading(false);\n        const url = window.URL.createObjectURL(blob);\n        const a = document.createElement(\"a\");\n        a.href = url;\n        a.download = \"data.csv\";\n        document.body.appendChild(a);\n        a.click();\n        a.remove();\n    };\n    const handleTextInputChange = (e)=>{\n        setTextInput(e.target.value);\n    };\n    const handleGenerate = async ()=>{\n        if (!jsonData) {\n            setErrors((prevErrors)=>({\n                    ...prevErrors,\n                    multiple: \"No JSON data to send.\"\n                }));\n            return;\n        }\n        setLoading(true);\n        setErrors({\n            single: \"\",\n            multiple: \"\"\n        });\n        try {\n            const response = await fetch(\"/api/py/your-endpoint\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: jsonData\n            });\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const blob = await response.blob();\n            const url = window.URL.createObjectURL(blob);\n            const a = document.createElement(\"a\");\n            a.href = url;\n            a.download = \"data.csv\";\n            document.body.appendChild(a);\n            a.click();\n            a.remove();\n        } catch (err) {\n            setErrors((prevErrors)=>({\n                    ...prevErrors,\n                    multiple: \"Failed to send data to the backend.\"\n                }));\n            console.error(\"Error:\", err);\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            justifyContent: \"flex-center\",\n            minHeight: \"100vh\",\n            backgroundColor: \"#ffffff\",\n            fontFamily: \"Helvetica, Arial, sans-serif\",\n            padding: \"100px\",\n            color: \"#333\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    fontSize: \"3rem\",\n                    fontWeight: \"700\",\n                    color: \"#222\",\n                    textAlign: \"center\",\n                    marginBottom: \"40px\",\n                    lineHeight: \"1.3\"\n                },\n                children: \"Property Tools\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                lineNumber: 161,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    borderBottom: \"2px solid #4C51BF\",\n                    marginBottom: \"40px\",\n                    width: \"100%\",\n                    maxWidth: \"800px\",\n                    boxShadow: \"0px 4px 8px rgba(0, 0, 0, 0.1)\",\n                    borderRadius: \"10px\",\n                    position: \"relative\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: (el)=>tabRefs.current[0] = el,\n                        onClick: ()=>setActiveTab(1),\n                        style: {\n                            flex: 1,\n                            textAlign: \"center\",\n                            padding: \"15px\",\n                            cursor: \"pointer\",\n                            backgroundColor: activeTab === 1 ? \"#4C51BF\" : \"#f5f5f5\",\n                            color: activeTab === 1 ? \"white\" : \"#333\",\n                            fontWeight: activeTab === 1 ? \"bold\" : \"normal\",\n                            transition: \"background-color 0.3s, transform 0.3s\",\n                            transform: activeTab === 1 ? \"scale(1.05)\" : \"scale(1)\",\n                            borderTopLeftRadius: \"10px\",\n                            borderTopRightRadius: \"10px\",\n                            zIndex: activeTab === 1 ? 2 : 1\n                        },\n                        children: \"Multiple Property Finder\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                        lineNumber: 181,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: (el)=>tabRefs.current[1] = el,\n                        onClick: ()=>setActiveTab(2),\n                        style: {\n                            flex: 1,\n                            textAlign: \"center\",\n                            padding: \"15px\",\n                            cursor: \"pointer\",\n                            backgroundColor: activeTab === 2 ? \"#4C51BF\" : \"#f5f5f5\",\n                            color: activeTab === 2 ? \"white\" : \"#333\",\n                            fontWeight: activeTab === 2 ? \"bold\" : \"normal\",\n                            transition: \"background-color 0.3s, transform 0.3s\",\n                            transform: activeTab === 2 ? \"scale(1.05)\" : \"scale(1)\",\n                            borderTopLeftRadius: \"10px\",\n                            borderTopRightRadius: \"10px\",\n                            zIndex: activeTab === 2 ? 2 : 1\n                        },\n                        children: \"Single Property Finder\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                        lineNumber: 201,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                lineNumber: 171,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: underlineRef,\n                style: {\n                    position: \"absolute\",\n                    bottom: 0,\n                    height: \"3px\",\n                    backgroundColor: \"#4C51BF\",\n                    transition: \"left 0.3s, width 0.3s\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n                lineNumber: 224,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\siong\\\\Documents\\\\GitHub\\\\Vercel\\\\Age_of_Voltra\\\\app\\\\page.tsx\",\n        lineNumber: 150,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"VYzXNQbO42bLNScZEXi91NQAaF0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBR3dFO3dCQUNoQ0MsU0FBUyxJQUFNcEYsYUFBYTt3QkFDNUJpQixPQUFPOzRCQUNMb0UsTUFBTTs0QkFDTlgsV0FBVzs0QkFDWEwsU0FBUzs0QkFDVGlCLFFBQVE7NEJBQ1JuQixpQkFBaUJwRSxjQUFjLElBQUksWUFBWTs0QkFDL0N1RSxPQUFPdkUsY0FBYyxJQUFJLFVBQVU7NEJBQ25DMEUsWUFBWTFFLGNBQWMsSUFBSSxTQUFTOzRCQUN2Q3dGLFlBQVk7NEJBQ1pDLFdBQVd6RixjQUFjLElBQUksZ0JBQWdCOzRCQUM3QzBGLHFCQUFxQjs0QkFDckJDLHNCQUFzQjs0QkFDdEJDLFFBQVE1RixjQUFjLElBQUksSUFBSTt3QkFDaEM7a0NBQ0Q7Ozs7Ozs7Ozs7OzswQkFNSCw4REFBQzhEO2dCQUNDcUIsS0FBS3hFO2dCQUNMTyxPQUFPO29CQUNMZ0UsVUFBVTtvQkFDVlcsUUFBUTtvQkFDUkMsUUFBUTtvQkFDUjFCLGlCQUFpQjtvQkFDakJvQixZQUFZO2dCQUNkOzs7Ozs7Ozs7Ozs7QUFNUjtHQTFPd0IvRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZTxGaWxlIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtqc29uRGF0YSwgc2V0SnNvbkRhdGFdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG4gIGNvbnN0IFtzaG93Tm90ZSwgc2V0U2hvd05vdGVdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBTdGF0ZSBmb3Igc2hvd2luZyBJbXBvcnRhbnQgTm90ZVxuICBjb25zdCBbdGV4dElucHV0LCBzZXRUZXh0SW5wdXRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7XG4gICAgc2luZ2xlOiBcIlwiLCAgLy8gRXJyb3IgZm9yIFNpbmdsZSBQcm9wZXJ0eSBGaW5kZXIgdGFiXG4gICAgbXVsdGlwbGU6IFwiXCIgLy8gRXJyb3IgZm9yIE11bHRpcGxlIFByb3BlcnR5IEZpbmRlciB0YWJcbiAgfSk7XG5cbiAgY29uc3QgdGFiUmVmcyA9IHVzZVJlZjwoSFRNTERpdkVsZW1lbnQgfCBudWxsKVtdPihbXSk7IC8vIFJlZmVyZW5jZSBmb3IgYm90aCB0YWJzXG4gIGNvbnN0IHVuZGVybGluZVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpOyAvLyBSZWZlcmVuY2UgZm9yIHRoZSB1bmRlcmxpbmVcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0YWJSZWZzLmN1cnJlbnRbYWN0aXZlVGFiIC0gMV0gJiYgdW5kZXJsaW5lUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZVRhYkVsZW1lbnQgPSB0YWJSZWZzLmN1cnJlbnRbYWN0aXZlVGFiIC0gMV07XG4gICAgICBjb25zdCBhY3RpdmVUYWJXaWR0aCA9IGFjdGl2ZVRhYkVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICBjb25zdCBhY3RpdmVUYWJMZWZ0ID0gYWN0aXZlVGFiRWxlbWVudC5vZmZzZXRMZWZ0O1xuICAgICAgXG4gICAgICAvLyBEeW5hbWljYWxseSBhZGp1c3QgdGhlIHVuZGVybGluZSdzIHdpZHRoIGFuZCBwb3NpdGlvblxuICAgICAgdW5kZXJsaW5lUmVmLmN1cnJlbnQuc3R5bGUud2lkdGggPSBgJHthY3RpdmVUYWJXaWR0aH1weGA7XG4gICAgICB1bmRlcmxpbmVSZWYuY3VycmVudC5zdHlsZS5sZWZ0ID0gYCR7YWN0aXZlVGFiTGVmdH1weGA7XG4gICAgfVxuICB9LCBbYWN0aXZlVGFiXSk7XG5cbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IGUudGFyZ2V0LmZpbGVzID8gZS50YXJnZXQuZmlsZXNbMF0gOiBudWxsO1xuICAgIGlmIChzZWxlY3RlZEZpbGUgJiYgc2VsZWN0ZWRGaWxlLnR5cGUgPT09IFwiYXBwbGljYXRpb24vanNvblwiKSB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBmaWxlQ29udGVudCA9IHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nO1xuICAgICAgICAgIHNldEpzb25EYXRhKGZpbGVDb250ZW50KTtcbiAgICAgICAgICBzZXRFcnJvcnMoe1xuICAgICAgICAgICAgc2luZ2xlOiBcIlwiLFxuICAgICAgICAgICAgbXVsdGlwbGU6IFwiXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgc2V0RXJyb3JzKChwcmV2RXJyb3JzKSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldkVycm9ycyxcbiAgICAgICAgICAgIG11bHRpcGxlOiBcIkZhaWxlZCB0byByZWFkIHRoZSBKU09OIGZpbGUuXCJcbiAgICAgICAgICB9KSk7XG4gICAgICAgICAgc2V0SnNvbkRhdGEobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZWFkZXIucmVhZEFzVGV4dChzZWxlY3RlZEZpbGUpO1xuICAgICAgc2V0RmlsZShzZWxlY3RlZEZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvcnMoKHByZXZFcnJvcnMpID0+ICh7XG4gICAgICAgIC4uLnByZXZFcnJvcnMsXG4gICAgICAgIG11bHRpcGxlOiBcIlBsZWFzZSBzZWxlY3QgYSB2YWxpZCBKU09OIGZpbGUuXCJcbiAgICAgIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVGV4dEdlbmVyYXRlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh0ZXh0SW5wdXQgPT09IFwiXCIpIHtcbiAgICAgIHNldEVycm9ycygocHJldkVycm9ycykgPT4gKHtcbiAgICAgICAgLi4ucHJldkVycm9ycyxcbiAgICAgICAgc2luZ2xlOiBcIlBsZWFzZSB0eXBlIGFuIGFkZHJlc3NcIlxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldEVycm9ycyh7XG4gICAgICBzaW5nbGU6IFwiXCIsXG4gICAgICBtdWx0aXBsZTogXCJcIlxuICAgIH0pO1xuXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCBpbnB1dCA9IGB7XFxcImFkZHJlc3NcXFwiOlxcXCIke3RleHRJbnB1dH1cXFwifWA7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvcHkveW91ci1lbmRwb2ludFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBpbnB1dCxcbiAgICB9KTtcblxuICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYS5ocmVmID0gdXJsO1xuICAgIGEuZG93bmxvYWQgPSBcImRhdGEuY3N2XCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcbiAgICBhLmNsaWNrKCk7XG4gICAgYS5yZW1vdmUoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUZXh0SW5wdXRDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRUZXh0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUdlbmVyYXRlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghanNvbkRhdGEpIHtcbiAgICAgIHNldEVycm9ycygocHJldkVycm9ycykgPT4gKHtcbiAgICAgICAgLi4ucHJldkVycm9ycyxcbiAgICAgICAgbXVsdGlwbGU6IFwiTm8gSlNPTiBkYXRhIHRvIHNlbmQuXCJcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9ycyh7XG4gICAgICBzaW5nbGU6IFwiXCIsXG4gICAgICBtdWx0aXBsZTogXCJcIlxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3B5L3lvdXItZW5kcG9pbnRcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IGpzb25EYXRhLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rXCIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBibG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cbiAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgIGEuaHJlZiA9IHVybDtcbiAgICAgIGEuZG93bmxvYWQgPSBcImRhdGEuY3N2XCI7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgICAgYS5jbGljaygpO1xuICAgICAgYS5yZW1vdmUoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9ycygocHJldkVycm9ycykgPT4gKHtcbiAgICAgICAgLi4ucHJldkVycm9ycyxcbiAgICAgICAgbXVsdGlwbGU6IFwiRmFpbGVkIHRvIHNlbmQgZGF0YSB0byB0aGUgYmFja2VuZC5cIlxuICAgICAgfSkpO1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1jZW50ZXJcIixcbiAgICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgIGZvbnRGYW1pbHk6IFwiSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZlwiLFxuICAgICAgcGFkZGluZzogXCIxMDBweFwiLFxuICAgICAgY29sb3I6IFwiIzMzM1wiLFxuICAgIH19PlxuICAgICAgPGgxIHN0eWxlPXt7XG4gICAgICAgIGZvbnRTaXplOiBcIjNyZW1cIixcbiAgICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcbiAgICAgICAgY29sb3I6IFwiIzIyMlwiLFxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCI0MHB4XCIsXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiMS4zXCIsXG4gICAgICB9fT5Qcm9wZXJ0eSBUb29sczwvaDE+XG5cbiAgICAgIHsvKiBUYWJzIGZvciBTb2x1dGlvbnMgKi99XG4gICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBib3JkZXJCb3R0b206IFwiMnB4IHNvbGlkICM0QzUxQkZcIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjQwcHhcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBtYXhXaWR0aDogXCI4MDBweFwiLFxuICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICB9fT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17ZWwgPT4gdGFiUmVmcy5jdXJyZW50WzBdID0gZWx9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKDEpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgcGFkZGluZzogXCIxNXB4XCIsXG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY3RpdmVUYWIgPT09IDEgPyBcIiM0QzUxQkZcIiA6IFwiI2Y1ZjVmNVwiLFxuICAgICAgICAgICAgY29sb3I6IGFjdGl2ZVRhYiA9PT0gMSA/IFwid2hpdGVcIiA6IFwiIzMzM1wiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogYWN0aXZlVGFiID09PSAxID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIHRyYW5zZm9ybSAwLjNzXCIsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGFjdGl2ZVRhYiA9PT0gMSA/IFwic2NhbGUoMS4wNSlcIiA6IFwic2NhbGUoMSlcIixcbiAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgICAgICAgekluZGV4OiBhY3RpdmVUYWIgPT09IDEgPyAyIDogMSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgTXVsdGlwbGUgUHJvcGVydHkgRmluZGVyXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXtlbCA9PiB0YWJSZWZzLmN1cnJlbnRbMV0gPSBlbH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoMil9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjE1cHhcIixcbiAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZVRhYiA9PT0gMiA/IFwiIzRDNTFCRlwiIDogXCIjZjVmNWY1XCIsXG4gICAgICAgICAgICBjb2xvcjogYWN0aXZlVGFiID09PSAyID8gXCJ3aGl0ZVwiIDogXCIjMzMzXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBhY3RpdmVUYWIgPT09IDIgPyBcImJvbGRcIiA6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQtY29sb3IgMC4zcywgdHJhbnNmb3JtIDAuM3NcIixcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYWN0aXZlVGFiID09PSAyID8gXCJzY2FsZSgxLjA1KVwiIDogXCJzY2FsZSgxKVwiLFxuICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogXCIxMHB4XCIsXG4gICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogXCIxMHB4XCIsXG4gICAgICAgICAgICB6SW5kZXg6IGFjdGl2ZVRhYiA9PT0gMiA/IDIgOiAxLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBTaW5nbGUgUHJvcGVydHkgRmluZGVyXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBVbmRlcmxpbmUgZm9yIGFjdGl2ZSB0YWIgKi99XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17dW5kZXJsaW5lUmVmfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgIGhlaWdodDogXCIzcHhcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzRDNTFCRlwiLFxuICAgICAgICAgIHRyYW5zaXRpb246IFwibGVmdCAwLjNzLCB3aWR0aCAwLjNzXCIsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgey8qIFJlc3Qgb2YgdGhlIGNvbnRlbnQgKi99XG4gICAgICB7LyogRHluYW1pYyBjb250ZW50IHJlbmRlcmluZyBiYXNlZCBvbiBhY3RpdmVUYWIgKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJIb21lIiwiZmlsZSIsInNldEZpbGUiLCJqc29uRGF0YSIsInNldEpzb25EYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJzaG93Tm90ZSIsInNldFNob3dOb3RlIiwidGV4dElucHV0Iiwic2V0VGV4dElucHV0IiwiZXJyb3JzIiwic2V0RXJyb3JzIiwic2luZ2xlIiwibXVsdGlwbGUiLCJ0YWJSZWZzIiwidW5kZXJsaW5lUmVmIiwiY3VycmVudCIsImFjdGl2ZVRhYkVsZW1lbnQiLCJhY3RpdmVUYWJXaWR0aCIsIm9mZnNldFdpZHRoIiwiYWN0aXZlVGFiTGVmdCIsIm9mZnNldExlZnQiLCJzdHlsZSIsIndpZHRoIiwibGVmdCIsImhhbmRsZUZpbGVDaGFuZ2UiLCJlIiwic2VsZWN0ZWRGaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJ0eXBlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImZpbGVDb250ZW50IiwicmVzdWx0IiwiZXJyIiwicHJldkVycm9ycyIsInJlYWRBc1RleHQiLCJoYW5kbGVUZXh0R2VuZXJhdGUiLCJpbnB1dCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImJsb2IiLCJ1cmwiLCJ3aW5kb3ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZSIsImhhbmRsZVRleHRJbnB1dENoYW5nZSIsInZhbHVlIiwiaGFuZGxlR2VuZXJhdGUiLCJvayIsIkVycm9yIiwiY29uc29sZSIsImVycm9yIiwiZGl2IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtaW5IZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250RmFtaWx5IiwicGFkZGluZyIsImNvbG9yIiwiaDEiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJsaW5lSGVpZ2h0IiwiYm9yZGVyQm90dG9tIiwibWF4V2lkdGgiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsInJlZiIsImVsIiwib25DbGljayIsImZsZXgiLCJjdXJzb3IiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiekluZGV4IiwiYm90dG9tIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});