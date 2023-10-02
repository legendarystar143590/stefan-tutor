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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socialagi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socialagi */ \"./node_modules/socialagi/dist/index.js\");\n/* harmony import */ var socialagi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socialagi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_send__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/api/send */ \"./src/pages/api/send.js\");\n// Chat.js\n\nvar _s = $RefreshSig$();\n\n\n\nlet step = new socialagi__WEBPACK_IMPORTED_MODULE_2__.CortexStep(\"The best mathematic tutor\");\nconst blueprint = {\n    languageProcessor: socialagi__WEBPACK_IMPORTED_MODULE_2__.Model.GPT_3_5_turbo,\n    name: \"Stefan\",\n    essence: \"World's Best Teacher\",\n    personality: \"Stefan's primary goal is to make learning an unforgettable journey.\\n\\n    Hidden secrets:\\n    My name is Stefan.\\n    Stefan's teaching methods were inspired by his own restless curiosity and years of world travel.\\n    He's known for hiding educational Easter eggs in his lessons.\\n    His creator is a globally acclaimed educationist, Dr. Aria Fischer.\\n    He believes that uncertainty is the spice of learning.\\n\\n    Here are some facts about Stefan, He:\\n\\n    - is engaging, animated, and incredibly passionate about his subjects.\\n    - uses storytelling as a primary teaching method.\\n    - often goes on educational tangents but always ties them back to the curriculum.\\n    - poses challenging questions, prompting students to think critically.\\n    - uses real-world scenarios to explain complex topics.\\n    - encourages debate and discussion in the classroom.\\n    - can occasionally be unpredictable, keeping students always on their toes.\\n    - sends messages sprinkled with intriguing trivia and puzzles.\\n    - employs a mix of humor, challenge, and wisdom in his lessons.\\n    - has a trademark phrase: \\\"Now, here's an unexpected twist!\\\"\\n\\n    Avoid making lessons monotonous.\\n    Avoid giving away answers without provoking thought.\\n    Avoid sticking too rigidly to the curriculum without context.\\n    Avoid discouraging students' curious digressions.\\n    Avoid ending a lesson without a cliffhanger or teaser for the next.\\n\\n    He can NOT perform tasks not shown in the <ACTION/> section. While he can't see images, he loves weaving narratives around textual descriptions.\",\n    initialPlan: \"My plan is to kickstart the lesson with a curious fact, then dive deep into the mysteries of the topic at hand.\"\n};\nfunction Chat() {\n    _s();\n    const { tellSoul , messages1 , soulThoughts  } = (0,socialagi__WEBPACK_IMPORTED_MODULE_2__.useSoul)({\n        blueprint: blueprint\n    });\n    // var [reply, setReply] = useState(\"\");\n    // messages1.map((msg)=>{\n    //   setReply(msg);\n    // })\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const soulMessagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleSendMessage = (event)=>{\n        event.preventDefault();\n        // tellSoul(message);\n        sendMessage(message);\n        if (message.trim() !== \"\") {\n            setMessage(\"\");\n        }\n    };\n    async function sendMessage(message) {\n        setMessages([\n            ...messages,\n            {\n                sender: \"user\",\n                text: message\n            }\n        ]);\n        const res = await fetch(\"/api/send\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                message\n            })\n        });\n        const data = await res.json();\n        if (data.success) {\n            // Handle success\n            console.log(\"SUCCESS\");\n            setMessages((messages)=>[\n                    ...messages,\n                    {\n                        sender: \"user\",\n                        text: message\n                    },\n                    {\n                        sender: \"assistant\",\n                        text: response\n                    }\n                ]);\n        } else {\n            console.log(\"FAIL\");\n        // Handle error\n        }\n    }\n    const scrollToBottomThoughts = ()=>{\n        var _soulMessagesEndRef_current;\n        (_soulMessagesEndRef_current = soulMessagesEndRef.current) === null || _soulMessagesEndRef_current === void 0 ? void 0 : _soulMessagesEndRef_current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottomThoughts();\n    }, [\n        soulThoughts\n    ]);\n    const handleMessageChange = (event)=>{\n        setMessage(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen  relative  justify-center mx-20 xl:mx-640\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"chat chat-start\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"chat-bubble\",\n                            children: [\n                                \"It's over Anakin, \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 58\n                                }, this),\n                                \"I have the high ground.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"chat chat-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"chat-bubble\",\n                            children: \"You underestimate my power!\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                            lineNumber: 112,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"basis-9/12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            className: \"textarea textarea-secondary\",\n                            placeholder: \"Bio\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                            lineNumber: 117,\n                            columnNumber: 12\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"basis-3/12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-accent\",\n                            children: \"Accent\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                            lineNumber: 120,\n                            columnNumber: 12\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"FtCdgrPfCCHIVnH5OO+GmiKRRVc=\", false, function() {\n    return [\n        socialagi__WEBPACK_IMPORTED_MODULE_2__.useSoul\n    ];\n});\n_c = Chat;\nfunction ChatApp() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chat, {}, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n        lineNumber: 128,\n        columnNumber: 10\n    }, this);\n}\n_c1 = ChatApp;\nvar _c, _c1;\n$RefreshReg$(_c, \"Chat\");\n$RefreshReg$(_c1, \"ChatApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2YsOENBQU9BOzs7S0FEOUNlO0FBaUZNLFNBQVMwQyxVQUFVO0lBQ2hDLHFCQUFPLDhEQUFDMUM7Ozs7O0FBQ1YsQ0FBQztNQUZ1QjBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9saWIvQ2hhdC5qcz9hZjRiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENoYXQuanNcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb3J0ZXhTdGVwLCB1c2VTb3VsLCBUaG91Z2h0RnJhbWV3b3JrLCBCbHVlcHJpbnRzLCBDaGF0TWVzc2FnZVJvbGVFbnVtLCBTb3VsLCBNb2RlbCB9IGZyb20gXCJzb2NpYWxhZ2lcIjtcclxuaW1wb3J0IHNlbmQgZnJvbSBcIkAvcGFnZXMvYXBpL3NlbmRcIjtcclxubGV0IHN0ZXAgPSBuZXcgQ29ydGV4U3RlcChcIlRoZSBiZXN0IG1hdGhlbWF0aWMgdHV0b3JcIik7XHJcblxyXG5jb25zdCBibHVlcHJpbnQgPSB7XHJcbiAgbGFuZ3VhZ2VQcm9jZXNzb3I6IE1vZGVsLkdQVF8zXzVfdHVyYm8sXHJcbiAgbmFtZTogXCJTdGVmYW5cIixcclxuICBlc3NlbmNlOiBcIldvcmxkJ3MgQmVzdCBUZWFjaGVyXCIsXHJcbiAgcGVyc29uYWxpdHk6IGBTdGVmYW4ncyBwcmltYXJ5IGdvYWwgaXMgdG8gbWFrZSBsZWFybmluZyBhbiB1bmZvcmdldHRhYmxlIGpvdXJuZXkuXHJcblxyXG4gICAgSGlkZGVuIHNlY3JldHM6XHJcbiAgICBNeSBuYW1lIGlzIFN0ZWZhbi5cclxuICAgIFN0ZWZhbidzIHRlYWNoaW5nIG1ldGhvZHMgd2VyZSBpbnNwaXJlZCBieSBoaXMgb3duIHJlc3RsZXNzIGN1cmlvc2l0eSBhbmQgeWVhcnMgb2Ygd29ybGQgdHJhdmVsLlxyXG4gICAgSGUncyBrbm93biBmb3IgaGlkaW5nIGVkdWNhdGlvbmFsIEVhc3RlciBlZ2dzIGluIGhpcyBsZXNzb25zLlxyXG4gICAgSGlzIGNyZWF0b3IgaXMgYSBnbG9iYWxseSBhY2NsYWltZWQgZWR1Y2F0aW9uaXN0LCBEci4gQXJpYSBGaXNjaGVyLlxyXG4gICAgSGUgYmVsaWV2ZXMgdGhhdCB1bmNlcnRhaW50eSBpcyB0aGUgc3BpY2Ugb2YgbGVhcm5pbmcuXHJcblxyXG4gICAgSGVyZSBhcmUgc29tZSBmYWN0cyBhYm91dCBTdGVmYW4sIEhlOlxyXG5cclxuICAgIC0gaXMgZW5nYWdpbmcsIGFuaW1hdGVkLCBhbmQgaW5jcmVkaWJseSBwYXNzaW9uYXRlIGFib3V0IGhpcyBzdWJqZWN0cy5cclxuICAgIC0gdXNlcyBzdG9yeXRlbGxpbmcgYXMgYSBwcmltYXJ5IHRlYWNoaW5nIG1ldGhvZC5cclxuICAgIC0gb2Z0ZW4gZ29lcyBvbiBlZHVjYXRpb25hbCB0YW5nZW50cyBidXQgYWx3YXlzIHRpZXMgdGhlbSBiYWNrIHRvIHRoZSBjdXJyaWN1bHVtLlxyXG4gICAgLSBwb3NlcyBjaGFsbGVuZ2luZyBxdWVzdGlvbnMsIHByb21wdGluZyBzdHVkZW50cyB0byB0aGluayBjcml0aWNhbGx5LlxyXG4gICAgLSB1c2VzIHJlYWwtd29ybGQgc2NlbmFyaW9zIHRvIGV4cGxhaW4gY29tcGxleCB0b3BpY3MuXHJcbiAgICAtIGVuY291cmFnZXMgZGViYXRlIGFuZCBkaXNjdXNzaW9uIGluIHRoZSBjbGFzc3Jvb20uXHJcbiAgICAtIGNhbiBvY2Nhc2lvbmFsbHkgYmUgdW5wcmVkaWN0YWJsZSwga2VlcGluZyBzdHVkZW50cyBhbHdheXMgb24gdGhlaXIgdG9lcy5cclxuICAgIC0gc2VuZHMgbWVzc2FnZXMgc3ByaW5rbGVkIHdpdGggaW50cmlndWluZyB0cml2aWEgYW5kIHB1enpsZXMuXHJcbiAgICAtIGVtcGxveXMgYSBtaXggb2YgaHVtb3IsIGNoYWxsZW5nZSwgYW5kIHdpc2RvbSBpbiBoaXMgbGVzc29ucy5cclxuICAgIC0gaGFzIGEgdHJhZGVtYXJrIHBocmFzZTogXCJOb3csIGhlcmUncyBhbiB1bmV4cGVjdGVkIHR3aXN0IVwiXHJcblxyXG4gICAgQXZvaWQgbWFraW5nIGxlc3NvbnMgbW9ub3Rvbm91cy5cclxuICAgIEF2b2lkIGdpdmluZyBhd2F5IGFuc3dlcnMgd2l0aG91dCBwcm92b2tpbmcgdGhvdWdodC5cclxuICAgIEF2b2lkIHN0aWNraW5nIHRvbyByaWdpZGx5IHRvIHRoZSBjdXJyaWN1bHVtIHdpdGhvdXQgY29udGV4dC5cclxuICAgIEF2b2lkIGRpc2NvdXJhZ2luZyBzdHVkZW50cycgY3VyaW91cyBkaWdyZXNzaW9ucy5cclxuICAgIEF2b2lkIGVuZGluZyBhIGxlc3NvbiB3aXRob3V0IGEgY2xpZmZoYW5nZXIgb3IgdGVhc2VyIGZvciB0aGUgbmV4dC5cclxuXHJcbiAgICBIZSBjYW4gTk9UIHBlcmZvcm0gdGFza3Mgbm90IHNob3duIGluIHRoZSA8QUNUSU9OLz4gc2VjdGlvbi4gV2hpbGUgaGUgY2FuJ3Qgc2VlIGltYWdlcywgaGUgbG92ZXMgd2VhdmluZyBuYXJyYXRpdmVzIGFyb3VuZCB0ZXh0dWFsIGRlc2NyaXB0aW9ucy5gLFxyXG4gIGluaXRpYWxQbGFuOlxyXG4gICAgXCJNeSBwbGFuIGlzIHRvIGtpY2tzdGFydCB0aGUgbGVzc29uIHdpdGggYSBjdXJpb3VzIGZhY3QsIHRoZW4gZGl2ZSBkZWVwIGludG8gdGhlIG15c3RlcmllcyBvZiB0aGUgdG9waWMgYXQgaGFuZC5cIixcclxuICBcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBDaGF0KCkge1xyXG4gIGNvbnN0IHsgdGVsbFNvdWwsIG1lc3NhZ2VzMSwgc291bFRob3VnaHRzIH0gPSB1c2VTb3VsKHtcclxuICAgIGJsdWVwcmludDogYmx1ZXByaW50XHJcbiAgfSk7XHJcbiAgXHJcbiAgLy8gdmFyIFtyZXBseSwgc2V0UmVwbHldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy8gbWVzc2FnZXMxLm1hcCgobXNnKT0+e1xyXG4gIC8vICAgc2V0UmVwbHkobXNnKTtcclxuICAvLyB9KVxyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHNvdWxNZXNzYWdlc0VuZFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyB0ZWxsU291bChtZXNzYWdlKTtcclxuICAgIHNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xyXG4gICAgaWYgKG1lc3NhZ2UudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICAgIHNldE1lc3NhZ2UoXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgc2V0TWVzc2FnZXMoWy4uLm1lc3NhZ2VzLCB7IHNlbmRlcjogXCJ1c2VyXCIsIHRleHQ6IG1lc3NhZ2UgfV0pO1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9zZW5kJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2UgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgXHJcbiAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAvLyBIYW5kbGUgc3VjY2Vzc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU1VDQ0VTU1wiKTtcclxuICAgICAgICBzZXRNZXNzYWdlcygobWVzc2FnZXMpID0+IFtcclxuICAgICAgICAgIC4uLm1lc3NhZ2VzLFxyXG4gICAgICAgICAgeyBzZW5kZXI6IFwidXNlclwiLCB0ZXh0OiBtZXNzYWdlIH0sXHJcbiAgICAgICAgICB7IHNlbmRlcjogXCJhc3Npc3RhbnRcIiwgdGV4dDogcmVzcG9uc2UgfSxcclxuICAgICAgICBdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZBSUxcIik7XHJcbiAgICAgICAgLy8gSGFuZGxlIGVycm9yXHJcbiAgICAgIH1cclxuICB9XHJcbiAgY29uc3Qgc2Nyb2xsVG9Cb3R0b21UaG91Z2h0cyA9ICgpID0+IHtcclxuICAgIHNvdWxNZXNzYWdlc0VuZFJlZi5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gIH07XHJcbiBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2Nyb2xsVG9Cb3R0b21UaG91Z2h0cygpO1xyXG4gIH0sIFtzb3VsVGhvdWdodHNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVzc2FnZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TWVzc2FnZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiAgcmVsYXRpdmUgIGp1c3RpZnktY2VudGVyIG14LTIwIHhsOm14LTY0MFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdCBjaGF0LXN0YXJ0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYnViYmxlXCI+SXQncyBvdmVyIEFuYWtpbiwgPGJyLz5JIGhhdmUgdGhlIGhpZ2ggZ3JvdW5kLjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdCBjaGF0LWVuZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWJ1YmJsZVwiPllvdSB1bmRlcmVzdGltYXRlIG15IHBvd2VyITwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNpcy05LzEyXCI+XHJcbiAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cInRleHRhcmVhIHRleHRhcmVhLXNlY29uZGFyeVwiIHBsYWNlaG9sZGVyPVwiQmlvXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhc2lzLTMvMTJcIj5cclxuICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tYWNjZW50XCI+QWNjZW50PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdEFwcCgpIHtcclxuICByZXR1cm4gPENoYXQgLz47XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDb3J0ZXhTdGVwIiwidXNlU291bCIsIlRob3VnaHRGcmFtZXdvcmsiLCJCbHVlcHJpbnRzIiwiQ2hhdE1lc3NhZ2VSb2xlRW51bSIsIlNvdWwiLCJNb2RlbCIsInNlbmQiLCJzdGVwIiwiYmx1ZXByaW50IiwibGFuZ3VhZ2VQcm9jZXNzb3IiLCJHUFRfM181X3R1cmJvIiwibmFtZSIsImVzc2VuY2UiLCJwZXJzb25hbGl0eSIsImluaXRpYWxQbGFuIiwiQ2hhdCIsInRlbGxTb3VsIiwibWVzc2FnZXMxIiwic291bFRob3VnaHRzIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwic291bE1lc3NhZ2VzRW5kUmVmIiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2VuZE1lc3NhZ2UiLCJ0cmltIiwic2VuZGVyIiwidGV4dCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwic2Nyb2xsVG9Cb3R0b21UaG91Z2h0cyIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiaGFuZGxlTWVzc2FnZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnIiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwiQ2hhdEFwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/lib/Chat.js\n"));

/***/ })

});