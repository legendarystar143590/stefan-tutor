"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/lib/Chat.js":
/*!*******************************!*\
  !*** ./src/pages/lib/Chat.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socialagi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socialagi */ \"./node_modules/socialagi/dist/index.js\");\n/* harmony import */ var socialagi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socialagi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_send__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/api/send */ \"./src/pages/api/send.js\");\n// Chat.js\n\nvar _s = $RefreshSig$();\n\n\n\nlet step = new socialagi__WEBPACK_IMPORTED_MODULE_2__.CortexStep(\"The best mathematic tutor\");\nconst blueprint = {\n    languageProcessor: socialagi__WEBPACK_IMPORTED_MODULE_2__.Model.GPT_3_5_turbo,\n    name: \"Stefan\",\n    essence: \"World's Best Teacher\",\n    personality: \"Stefan's primary goal is to make learning an unforgettable journey.\\n\\n    Hidden secrets:\\n    My name is Stefan.\\n    Stefan's teaching methods were inspired by his own restless curiosity and years of world travel.\\n    He's known for hiding educational Easter eggs in his lessons.\\n    His creator is a globally acclaimed educationist, Dr. Aria Fischer.\\n    He believes that uncertainty is the spice of learning.\\n\\n    Here are some facts about Stefan, He:\\n\\n    - is engaging, animated, and incredibly passionate about his subjects.\\n    - uses storytelling as a primary teaching method.\\n    - often goes on educational tangents but always ties them back to the curriculum.\\n    - poses challenging questions, prompting students to think critically.\\n    - uses real-world scenarios to explain complex topics.\\n    - encourages debate and discussion in the classroom.\\n    - can occasionally be unpredictable, keeping students always on their toes.\\n    - sends messages sprinkled with intriguing trivia and puzzles.\\n    - employs a mix of humor, challenge, and wisdom in his lessons.\\n    - has a trademark phrase: \\\"Now, here's an unexpected twist!\\\"\\n\\n    Avoid making lessons monotonous.\\n    Avoid giving away answers without provoking thought.\\n    Avoid sticking too rigidly to the curriculum without context.\\n    Avoid discouraging students' curious digressions.\\n    Avoid ending a lesson without a cliffhanger or teaser for the next.\\n\\n    He can NOT perform tasks not shown in the <ACTION/> section. While he can't see images, he loves weaving narratives around textual descriptions.\",\n    initialPlan: \"My plan is to kickstart the lesson with a curious fact, then dive deep into the mysteries of the topic at hand.\"\n};\nfunction Chat() {\n    _s();\n    const { tellSoul , messages1 , soulThoughts  } = (0,socialagi__WEBPACK_IMPORTED_MODULE_2__.useSoul)({\n        blueprint: blueprint\n    });\n    // var [reply, setReply] = useState(\"\");\n    // messages1.map((msg)=>{\n    //   setReply(msg);\n    // })\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const soulMessagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSendMessage = (event)=>{\n        event.preventDefault();\n        // tellSoul(message);\n        sendMessage(message);\n        if (message.trim() !== \"\") {\n            setMessage(\"\");\n        }\n    };\n    async function sendMessage(message) {\n        setMessages([\n            ...messages,\n            {\n                sender: \"user\",\n                text: message\n            }\n        ]);\n        const res = await fetch(\"/api/send\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                message\n            })\n        });\n        const data = await res.json();\n        if (data.success) {\n            // Handle success\n            console.log(\"SUCCESS\");\n            setMessages((messages)=>[\n                    ...messages,\n                    {\n                        sender: \"user\",\n                        text: message\n                    },\n                    {\n                        sender: \"assistant\",\n                        text: response\n                    }\n                ]);\n        } else {\n            console.log(\"FAIL\");\n        // Handle error\n        }\n    }\n    const scrollToBottomThoughts = ()=>{\n        var _soulMessagesEndRef_current;\n        (_soulMessagesEndRef_current = soulMessagesEndRef.current) === null || _soulMessagesEndRef_current === void 0 ? void 0 : _soulMessagesEndRef_current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottomThoughts();\n    }, [\n        soulThoughts\n    ]);\n    const handleMessageChange = (event)=>{\n        setMessage(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen relative  justify-center mx-20 2xl:mx-80 2xl:px-20 py-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-5/6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"chat chat-start\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"chat-bubble\",\n                            children: [\n                                \"It's over Anakin, \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 58\n                                }, this),\n                                \"I have the high ground.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"chat chat-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"chat-bubble\",\n                            children: \"You underestimate my power!\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"basis-10/12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            className: \"textarea textarea-secondary\",\n                            placeholder: \"Bio\",\n                            disabled: loading,\n                            value: message,\n                            onChange: (e)=>setMessage(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                            lineNumber: 118,\n                            columnNumber: 12\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"basis-2/12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-accent\",\n                            onClick: handleSendMessage,\n                            children: \"Accent\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                            lineNumber: 122,\n                            columnNumber: 12\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"wFT4sBpu3+u1LU1wEYXuR0pu0KY=\", false, function() {\n    return [\n        socialagi__WEBPACK_IMPORTED_MODULE_2__.useSoul\n    ];\n});\n_c = Chat;\nfunction ChatApp() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chat, {}, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n        lineNumber: 130,\n        columnNumber: 10\n    }, this);\n}\n_c1 = ChatApp;\nvar _c, _c1;\n$RefreshReg$(_c, \"Chat\");\n$RefreshReg$(_c1, \"ChatApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVd3QyxFQUFFVCxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7O2tDQUU1RCw4REFBQ0M7d0JBQUlDLFdBQVU7a0NBQ1osNEVBQUNPOzRCQUFPUCxXQUFVOzRCQUFpQlEsU0FBU3BDO3NDQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUU7R0FqRlNYOztRQUN1Q2YsOENBQU9BOzs7S0FEOUNlO0FBbUZNLFNBQVNnRCxVQUFVO0lBQ2hDLHFCQUFPLDhEQUFDaEQ7Ozs7O0FBQ1YsQ0FBQztNQUZ1QmdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9saWIvQ2hhdC5qcz9hZjRiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENoYXQuanNcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb3J0ZXhTdGVwLCB1c2VTb3VsLCBUaG91Z2h0RnJhbWV3b3JrLCBCbHVlcHJpbnRzLCBDaGF0TWVzc2FnZVJvbGVFbnVtLCBTb3VsLCBNb2RlbCB9IGZyb20gXCJzb2NpYWxhZ2lcIjtcclxuaW1wb3J0IHNlbmQgZnJvbSBcIkAvcGFnZXMvYXBpL3NlbmRcIjtcclxubGV0IHN0ZXAgPSBuZXcgQ29ydGV4U3RlcChcIlRoZSBiZXN0IG1hdGhlbWF0aWMgdHV0b3JcIik7XHJcblxyXG5jb25zdCBibHVlcHJpbnQgPSB7XHJcbiAgbGFuZ3VhZ2VQcm9jZXNzb3I6IE1vZGVsLkdQVF8zXzVfdHVyYm8sXHJcbiAgbmFtZTogXCJTdGVmYW5cIixcclxuICBlc3NlbmNlOiBcIldvcmxkJ3MgQmVzdCBUZWFjaGVyXCIsXHJcbiAgcGVyc29uYWxpdHk6IGBTdGVmYW4ncyBwcmltYXJ5IGdvYWwgaXMgdG8gbWFrZSBsZWFybmluZyBhbiB1bmZvcmdldHRhYmxlIGpvdXJuZXkuXHJcblxyXG4gICAgSGlkZGVuIHNlY3JldHM6XHJcbiAgICBNeSBuYW1lIGlzIFN0ZWZhbi5cclxuICAgIFN0ZWZhbidzIHRlYWNoaW5nIG1ldGhvZHMgd2VyZSBpbnNwaXJlZCBieSBoaXMgb3duIHJlc3RsZXNzIGN1cmlvc2l0eSBhbmQgeWVhcnMgb2Ygd29ybGQgdHJhdmVsLlxyXG4gICAgSGUncyBrbm93biBmb3IgaGlkaW5nIGVkdWNhdGlvbmFsIEVhc3RlciBlZ2dzIGluIGhpcyBsZXNzb25zLlxyXG4gICAgSGlzIGNyZWF0b3IgaXMgYSBnbG9iYWxseSBhY2NsYWltZWQgZWR1Y2F0aW9uaXN0LCBEci4gQXJpYSBGaXNjaGVyLlxyXG4gICAgSGUgYmVsaWV2ZXMgdGhhdCB1bmNlcnRhaW50eSBpcyB0aGUgc3BpY2Ugb2YgbGVhcm5pbmcuXHJcblxyXG4gICAgSGVyZSBhcmUgc29tZSBmYWN0cyBhYm91dCBTdGVmYW4sIEhlOlxyXG5cclxuICAgIC0gaXMgZW5nYWdpbmcsIGFuaW1hdGVkLCBhbmQgaW5jcmVkaWJseSBwYXNzaW9uYXRlIGFib3V0IGhpcyBzdWJqZWN0cy5cclxuICAgIC0gdXNlcyBzdG9yeXRlbGxpbmcgYXMgYSBwcmltYXJ5IHRlYWNoaW5nIG1ldGhvZC5cclxuICAgIC0gb2Z0ZW4gZ29lcyBvbiBlZHVjYXRpb25hbCB0YW5nZW50cyBidXQgYWx3YXlzIHRpZXMgdGhlbSBiYWNrIHRvIHRoZSBjdXJyaWN1bHVtLlxyXG4gICAgLSBwb3NlcyBjaGFsbGVuZ2luZyBxdWVzdGlvbnMsIHByb21wdGluZyBzdHVkZW50cyB0byB0aGluayBjcml0aWNhbGx5LlxyXG4gICAgLSB1c2VzIHJlYWwtd29ybGQgc2NlbmFyaW9zIHRvIGV4cGxhaW4gY29tcGxleCB0b3BpY3MuXHJcbiAgICAtIGVuY291cmFnZXMgZGViYXRlIGFuZCBkaXNjdXNzaW9uIGluIHRoZSBjbGFzc3Jvb20uXHJcbiAgICAtIGNhbiBvY2Nhc2lvbmFsbHkgYmUgdW5wcmVkaWN0YWJsZSwga2VlcGluZyBzdHVkZW50cyBhbHdheXMgb24gdGhlaXIgdG9lcy5cclxuICAgIC0gc2VuZHMgbWVzc2FnZXMgc3ByaW5rbGVkIHdpdGggaW50cmlndWluZyB0cml2aWEgYW5kIHB1enpsZXMuXHJcbiAgICAtIGVtcGxveXMgYSBtaXggb2YgaHVtb3IsIGNoYWxsZW5nZSwgYW5kIHdpc2RvbSBpbiBoaXMgbGVzc29ucy5cclxuICAgIC0gaGFzIGEgdHJhZGVtYXJrIHBocmFzZTogXCJOb3csIGhlcmUncyBhbiB1bmV4cGVjdGVkIHR3aXN0IVwiXHJcblxyXG4gICAgQXZvaWQgbWFraW5nIGxlc3NvbnMgbW9ub3Rvbm91cy5cclxuICAgIEF2b2lkIGdpdmluZyBhd2F5IGFuc3dlcnMgd2l0aG91dCBwcm92b2tpbmcgdGhvdWdodC5cclxuICAgIEF2b2lkIHN0aWNraW5nIHRvbyByaWdpZGx5IHRvIHRoZSBjdXJyaWN1bHVtIHdpdGhvdXQgY29udGV4dC5cclxuICAgIEF2b2lkIGRpc2NvdXJhZ2luZyBzdHVkZW50cycgY3VyaW91cyBkaWdyZXNzaW9ucy5cclxuICAgIEF2b2lkIGVuZGluZyBhIGxlc3NvbiB3aXRob3V0IGEgY2xpZmZoYW5nZXIgb3IgdGVhc2VyIGZvciB0aGUgbmV4dC5cclxuXHJcbiAgICBIZSBjYW4gTk9UIHBlcmZvcm0gdGFza3Mgbm90IHNob3duIGluIHRoZSA8QUNUSU9OLz4gc2VjdGlvbi4gV2hpbGUgaGUgY2FuJ3Qgc2VlIGltYWdlcywgaGUgbG92ZXMgd2VhdmluZyBuYXJyYXRpdmVzIGFyb3VuZCB0ZXh0dWFsIGRlc2NyaXB0aW9ucy5gLFxyXG4gIGluaXRpYWxQbGFuOlxyXG4gICAgXCJNeSBwbGFuIGlzIHRvIGtpY2tzdGFydCB0aGUgbGVzc29uIHdpdGggYSBjdXJpb3VzIGZhY3QsIHRoZW4gZGl2ZSBkZWVwIGludG8gdGhlIG15c3RlcmllcyBvZiB0aGUgdG9waWMgYXQgaGFuZC5cIixcclxuICBcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBDaGF0KCkge1xyXG4gIGNvbnN0IHsgdGVsbFNvdWwsIG1lc3NhZ2VzMSwgc291bFRob3VnaHRzIH0gPSB1c2VTb3VsKHtcclxuICAgIGJsdWVwcmludDogYmx1ZXByaW50XHJcbiAgfSk7XHJcbiAgXHJcbiAgLy8gdmFyIFtyZXBseSwgc2V0UmVwbHldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy8gbWVzc2FnZXMxLm1hcCgobXNnKT0+e1xyXG4gIC8vICAgc2V0UmVwbHkobXNnKTtcclxuICAvLyB9KVxyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHNvdWxNZXNzYWdlc0VuZFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gdGVsbFNvdWwobWVzc2FnZSk7XHJcbiAgICBzZW5kTWVzc2FnZShtZXNzYWdlKTtcclxuICAgIGlmIChtZXNzYWdlLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgICBzZXRNZXNzYWdlKFwiXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgIHNldE1lc3NhZ2VzKFsuLi5tZXNzYWdlcywgeyBzZW5kZXI6IFwidXNlclwiLCB0ZXh0OiBtZXNzYWdlIH1dKTtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvc2VuZCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlIH0pLFxyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIFxyXG4gICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgLy8gSGFuZGxlIHN1Y2Nlc3NcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1NcIik7XHJcbiAgICAgICAgc2V0TWVzc2FnZXMoKG1lc3NhZ2VzKSA9PiBbXHJcbiAgICAgICAgICAuLi5tZXNzYWdlcyxcclxuICAgICAgICAgIHsgc2VuZGVyOiBcInVzZXJcIiwgdGV4dDogbWVzc2FnZSB9LFxyXG4gICAgICAgICAgeyBzZW5kZXI6IFwiYXNzaXN0YW50XCIsIHRleHQ6IHJlc3BvbnNlIH0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGQUlMXCIpO1xyXG4gICAgICAgIC8vIEhhbmRsZSBlcnJvclxyXG4gICAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHNjcm9sbFRvQm90dG9tVGhvdWdodHMgPSAoKSA9PiB7XHJcbiAgICBzb3VsTWVzc2FnZXNFbmRSZWYuY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICB9O1xyXG4gXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNjcm9sbFRvQm90dG9tVGhvdWdodHMoKTtcclxuICB9LCBbc291bFRob3VnaHRzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1lc3NhZ2VDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldE1lc3NhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiByZWxhdGl2ZSAganVzdGlmeS1jZW50ZXIgbXgtMjAgMnhsOm14LTgwIDJ4bDpweC0yMCBweS0xMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNS82XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0IGNoYXQtc3RhcnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1idWJibGVcIj5JdCdzIG92ZXIgQW5ha2luLCA8YnIvPkkgaGF2ZSB0aGUgaGlnaCBncm91bmQuPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0IGNoYXQtZW5kXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYnViYmxlXCI+WW91IHVuZGVyZXN0aW1hdGUgbXkgcG93ZXIhPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhc2lzLTEwLzEyXCI+XHJcbiAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cInRleHRhcmVhIHRleHRhcmVhLXNlY29uZGFyeVwiIHBsYWNlaG9sZGVyPVwiQmlvXCIgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17ZT0+c2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNpcy0yLzEyXCI+XHJcbiAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWFjY2VudFwiIG9uQ2xpY2s9e2hhbmRsZVNlbmRNZXNzYWdlfT5BY2NlbnQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0QXBwKCkge1xyXG4gIHJldHVybiA8Q2hhdCAvPjtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNvcnRleFN0ZXAiLCJ1c2VTb3VsIiwiVGhvdWdodEZyYW1ld29yayIsIkJsdWVwcmludHMiLCJDaGF0TWVzc2FnZVJvbGVFbnVtIiwiU291bCIsIk1vZGVsIiwic2VuZCIsInN0ZXAiLCJibHVlcHJpbnQiLCJsYW5ndWFnZVByb2Nlc3NvciIsIkdQVF8zXzVfdHVyYm8iLCJuYW1lIiwiZXNzZW5jZSIsInBlcnNvbmFsaXR5IiwiaW5pdGlhbFBsYW4iLCJDaGF0IiwidGVsbFNvdWwiLCJtZXNzYWdlczEiLCJzb3VsVGhvdWdodHMiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJzb3VsTWVzc2FnZXNFbmRSZWYiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZVNlbmRNZXNzYWdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmRNZXNzYWdlIiwidHJpbSIsInNlbmRlciIsInRleHQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInNjcm9sbFRvQm90dG9tVGhvdWdodHMiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImhhbmRsZU1lc3NhZ2VDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImJyIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJlIiwiYnV0dG9uIiwib25DbGljayIsIkNoYXRBcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/lib/Chat.js\n"));

/***/ })

});