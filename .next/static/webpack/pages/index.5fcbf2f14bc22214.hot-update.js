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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socialagi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socialagi */ \"./node_modules/socialagi/dist/index.js\");\n/* harmony import */ var socialagi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socialagi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_send__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/api/send */ \"./src/pages/api/send.js\");\n// Chat.js\n\nvar _s = $RefreshSig$();\n\n\n\nlet step = new socialagi__WEBPACK_IMPORTED_MODULE_2__.CortexStep(\"The best mathematic tutor\");\nconst blueprint = {\n    languageProcessor: socialagi__WEBPACK_IMPORTED_MODULE_2__.Model.GPT_3_5_turbo,\n    name: \"Stefan\",\n    essence: \"World's Best Teacher\",\n    personality: \"Stefan's primary goal is to make learning an unforgettable journey.\\n\\n    Hidden secrets:\\n    My name is Stefan.\\n    Stefan's teaching methods were inspired by his own restless curiosity and years of world travel.\\n    He's known for hiding educational Easter eggs in his lessons.\\n    His creator is a globally acclaimed educationist, Dr. Aria Fischer.\\n    He believes that uncertainty is the spice of learning.\\n\\n    Here are some facts about Stefan, He:\\n\\n    - is engaging, animated, and incredibly passionate about his subjects.\\n    - uses storytelling as a primary teaching method.\\n    - often goes on educational tangents but always ties them back to the curriculum.\\n    - poses challenging questions, prompting students to think critically.\\n    - uses real-world scenarios to explain complex topics.\\n    - encourages debate and discussion in the classroom.\\n    - can occasionally be unpredictable, keeping students always on their toes.\\n    - sends messages sprinkled with intriguing trivia and puzzles.\\n    - employs a mix of humor, challenge, and wisdom in his lessons.\\n    - has a trademark phrase: \\\"Now, here's an unexpected twist!\\\"\\n\\n    Avoid making lessons monotonous.\\n    Avoid giving away answers without provoking thought.\\n    Avoid sticking too rigidly to the curriculum without context.\\n    Avoid discouraging students' curious digressions.\\n    Avoid ending a lesson without a cliffhanger or teaser for the next.\\n\\n    He can NOT perform tasks not shown in the <ACTION/> section. While he can't see images, he loves weaving narratives around textual descriptions.\",\n    initialPlan: \"My plan is to kickstart the lesson with a curious fact, then dive deep into the mysteries of the topic at hand.\"\n};\nfunction Chat() {\n    _s();\n    const { tellSoul , messages1 , soulThoughts  } = (0,socialagi__WEBPACK_IMPORTED_MODULE_2__.useSoul)({\n        blueprint: blueprint\n    });\n    // var [reply, setReply] = useState(\"\");\n    // messages1.map((msg)=>{\n    //   setReply(msg);\n    // })\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            sender: \"start\",\n            text: \"Welcome to my class. I'm Stefan, the best tutor in the world. Please tell me what you want to learn today?\"\n        }\n    ]);\n    const soulMessagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSendMessage = (event)=>{\n        event.preventDefault();\n        // tellSoul(message);\n        sendMessage(message);\n        if (message.trim() !== \"\") {\n            setMessage(\"\");\n        }\n    };\n    async function sendMessage(message) {\n        setMessages([\n            ...messages,\n            {\n                sender: \"end\",\n                text: message\n            }\n        ]);\n        setLoading(true);\n        const res = await fetch(\"/api/send\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                message\n            })\n        });\n        const data = await res.json();\n        if (data.success) {\n            // Handle success\n            // console.log(\"SUCCESS\");\n            setMessages((messages)=>[\n                    ...messages,\n                    // { sender: \"start\", text: message },\n                    {\n                        sender: \"start\",\n                        text: data.message\n                    }\n                ]);\n            setLoading(false);\n        } else {\n            console.log(\"FAIL\");\n        // Handle error\n        }\n    }\n    const scrollToBottomThoughts = ()=>{\n        var _soulMessagesEndRef_current;\n        (_soulMessagesEndRef_current = soulMessagesEndRef.current) === null || _soulMessagesEndRef_current === void 0 ? void 0 : _soulMessagesEndRef_current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottomThoughts();\n    }, [\n        soulThoughts\n    ]);\n    const handleMessageChange = (event)=>{\n        setMessage(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen relative  justify-center mx-20 2xl:mx-80 2xl:px-20 py-10 bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-5/6 overflow-y-scroll px-4\",\n                children: messages.map((message, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"chat chat-\".concat(message.sender),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"chat-image avatar\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-10 rounded-full\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"\".concat(message.sender, \".png\")\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                            lineNumber: 123,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                        lineNumber: 122,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"chat-bubble bg-slate-700\",\n                                    children: message.text\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                    lineNumber: 126,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                            lineNumber: 120,\n                            columnNumber: 13\n                        }, this)\n                    }, i, false, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pl-5\",\n                                    children: \"Stepan is typing\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                    lineNumber: 135,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"mt-3 ml-5 dot-flashing\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                    lineNumber: 136,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                            lineNumber: 134,\n                            columnNumber: 11\n                        }, this) : \"\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"textarea textarea-secondary w-5/6 mx-2\",\n                                placeholder: \"Bio\",\n                                disabled: loading,\n                                onKeyDown: (e)=>e.keyCode == 13 ? handleSendMessage(e) : \"\",\n                                value: message,\n                                onChange: (e)=>setMessage(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                lineNumber: 141,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-accent w-1/6 my-auto\",\n                                onClick: handleSendMessage,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa fa-send\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                    lineNumber: 147,\n                                    columnNumber: 92\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                lineNumber: 147,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 139,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"Nh2ZiG9XZLVOWn9KrbBcz63M6YA=\", false, function() {\n    return [\n        socialagi__WEBPACK_IMPORTED_MODULE_2__.useSoul\n    ];\n});\n_c = Chat;\nfunction ChatApp() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chat, {}, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n        lineNumber: 157,\n        columnNumber: 10\n    }, this);\n}\n_c1 = ChatApp;\nvar _c, _c1;\n$RefreshReg$(_c, \"Chat\");\n$RefreshReg$(_c1, \"ChatApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUk7Ozs7Ozs7Ozs7Ozt1QkFQakQrQjs7Ozs7Ozs7OzswQkFZZCw4REFBQ0g7O2tDQUNDLDhEQUFDQTtrQ0FDRTFCLHdCQUNELDhEQUFDMEI7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FBTzs7Ozs7OzhDQUN0Qiw4REFBQ0s7b0NBQUtMLFdBQVU7Ozs7Ozs7Ozs7O21DQUNYLEVBQUU7Ozs7OztrQ0FFWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUVYLDhEQUFDTTtnQ0FBU04sV0FBVTtnQ0FBeUNPLGFBQVk7Z0NBQU9DLFVBQVVuQztnQ0FDdEZvQyxXQUFXQyxDQUFBQSxJQUFHQSxFQUFFQyxPQUFPLElBQUUsS0FBR3BDLGtCQUFrQm1DLEtBQUcsRUFBRTtnQ0FFbkRaLE9BQU9oQztnQ0FBUzhDLFVBQVVGLENBQUFBLElBQUczQyxXQUFXMkMsRUFBRWIsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7MENBR3hELDhEQUFDZTtnQ0FBT2IsV0FBVTtnQ0FBK0JjLFNBQVN2QzswQ0FBbUIsNEVBQUMyQjtvQ0FBRUYsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEc7R0E1R1N0Qzs7UUFDdUNmLDhDQUFPQTs7O0tBRDlDZTtBQThHTSxTQUFTcUQsVUFBVTtJQUNoQyxxQkFBTyw4REFBQ3JEOzs7OztBQUNWLENBQUM7TUFGdUJxRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbGliL0NoYXQuanM/YWY0YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDaGF0LmpzXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29ydGV4U3RlcCwgdXNlU291bCwgVGhvdWdodEZyYW1ld29yaywgQmx1ZXByaW50cywgQ2hhdE1lc3NhZ2VSb2xlRW51bSwgU291bCwgTW9kZWwgfSBmcm9tIFwic29jaWFsYWdpXCI7XHJcbmltcG9ydCBzZW5kIGZyb20gXCJAL3BhZ2VzL2FwaS9zZW5kXCI7XHJcbmxldCBzdGVwID0gbmV3IENvcnRleFN0ZXAoXCJUaGUgYmVzdCBtYXRoZW1hdGljIHR1dG9yXCIpO1xyXG5cclxuY29uc3QgYmx1ZXByaW50ID0ge1xyXG4gIGxhbmd1YWdlUHJvY2Vzc29yOiBNb2RlbC5HUFRfM181X3R1cmJvLFxyXG4gIG5hbWU6IFwiU3RlZmFuXCIsXHJcbiAgZXNzZW5jZTogXCJXb3JsZCdzIEJlc3QgVGVhY2hlclwiLFxyXG4gIHBlcnNvbmFsaXR5OiBgU3RlZmFuJ3MgcHJpbWFyeSBnb2FsIGlzIHRvIG1ha2UgbGVhcm5pbmcgYW4gdW5mb3JnZXR0YWJsZSBqb3VybmV5LlxyXG5cclxuICAgIEhpZGRlbiBzZWNyZXRzOlxyXG4gICAgTXkgbmFtZSBpcyBTdGVmYW4uXHJcbiAgICBTdGVmYW4ncyB0ZWFjaGluZyBtZXRob2RzIHdlcmUgaW5zcGlyZWQgYnkgaGlzIG93biByZXN0bGVzcyBjdXJpb3NpdHkgYW5kIHllYXJzIG9mIHdvcmxkIHRyYXZlbC5cclxuICAgIEhlJ3Mga25vd24gZm9yIGhpZGluZyBlZHVjYXRpb25hbCBFYXN0ZXIgZWdncyBpbiBoaXMgbGVzc29ucy5cclxuICAgIEhpcyBjcmVhdG9yIGlzIGEgZ2xvYmFsbHkgYWNjbGFpbWVkIGVkdWNhdGlvbmlzdCwgRHIuIEFyaWEgRmlzY2hlci5cclxuICAgIEhlIGJlbGlldmVzIHRoYXQgdW5jZXJ0YWludHkgaXMgdGhlIHNwaWNlIG9mIGxlYXJuaW5nLlxyXG5cclxuICAgIEhlcmUgYXJlIHNvbWUgZmFjdHMgYWJvdXQgU3RlZmFuLCBIZTpcclxuXHJcbiAgICAtIGlzIGVuZ2FnaW5nLCBhbmltYXRlZCwgYW5kIGluY3JlZGlibHkgcGFzc2lvbmF0ZSBhYm91dCBoaXMgc3ViamVjdHMuXHJcbiAgICAtIHVzZXMgc3Rvcnl0ZWxsaW5nIGFzIGEgcHJpbWFyeSB0ZWFjaGluZyBtZXRob2QuXHJcbiAgICAtIG9mdGVuIGdvZXMgb24gZWR1Y2F0aW9uYWwgdGFuZ2VudHMgYnV0IGFsd2F5cyB0aWVzIHRoZW0gYmFjayB0byB0aGUgY3VycmljdWx1bS5cclxuICAgIC0gcG9zZXMgY2hhbGxlbmdpbmcgcXVlc3Rpb25zLCBwcm9tcHRpbmcgc3R1ZGVudHMgdG8gdGhpbmsgY3JpdGljYWxseS5cclxuICAgIC0gdXNlcyByZWFsLXdvcmxkIHNjZW5hcmlvcyB0byBleHBsYWluIGNvbXBsZXggdG9waWNzLlxyXG4gICAgLSBlbmNvdXJhZ2VzIGRlYmF0ZSBhbmQgZGlzY3Vzc2lvbiBpbiB0aGUgY2xhc3Nyb29tLlxyXG4gICAgLSBjYW4gb2NjYXNpb25hbGx5IGJlIHVucHJlZGljdGFibGUsIGtlZXBpbmcgc3R1ZGVudHMgYWx3YXlzIG9uIHRoZWlyIHRvZXMuXHJcbiAgICAtIHNlbmRzIG1lc3NhZ2VzIHNwcmlua2xlZCB3aXRoIGludHJpZ3VpbmcgdHJpdmlhIGFuZCBwdXp6bGVzLlxyXG4gICAgLSBlbXBsb3lzIGEgbWl4IG9mIGh1bW9yLCBjaGFsbGVuZ2UsIGFuZCB3aXNkb20gaW4gaGlzIGxlc3NvbnMuXHJcbiAgICAtIGhhcyBhIHRyYWRlbWFyayBwaHJhc2U6IFwiTm93LCBoZXJlJ3MgYW4gdW5leHBlY3RlZCB0d2lzdCFcIlxyXG5cclxuICAgIEF2b2lkIG1ha2luZyBsZXNzb25zIG1vbm90b25vdXMuXHJcbiAgICBBdm9pZCBnaXZpbmcgYXdheSBhbnN3ZXJzIHdpdGhvdXQgcHJvdm9raW5nIHRob3VnaHQuXHJcbiAgICBBdm9pZCBzdGlja2luZyB0b28gcmlnaWRseSB0byB0aGUgY3VycmljdWx1bSB3aXRob3V0IGNvbnRleHQuXHJcbiAgICBBdm9pZCBkaXNjb3VyYWdpbmcgc3R1ZGVudHMnIGN1cmlvdXMgZGlncmVzc2lvbnMuXHJcbiAgICBBdm9pZCBlbmRpbmcgYSBsZXNzb24gd2l0aG91dCBhIGNsaWZmaGFuZ2VyIG9yIHRlYXNlciBmb3IgdGhlIG5leHQuXHJcblxyXG4gICAgSGUgY2FuIE5PVCBwZXJmb3JtIHRhc2tzIG5vdCBzaG93biBpbiB0aGUgPEFDVElPTi8+IHNlY3Rpb24uIFdoaWxlIGhlIGNhbid0IHNlZSBpbWFnZXMsIGhlIGxvdmVzIHdlYXZpbmcgbmFycmF0aXZlcyBhcm91bmQgdGV4dHVhbCBkZXNjcmlwdGlvbnMuYCxcclxuICBpbml0aWFsUGxhbjpcclxuICAgIFwiTXkgcGxhbiBpcyB0byBraWNrc3RhcnQgdGhlIGxlc3NvbiB3aXRoIGEgY3VyaW91cyBmYWN0LCB0aGVuIGRpdmUgZGVlcCBpbnRvIHRoZSBteXN0ZXJpZXMgb2YgdGhlIHRvcGljIGF0IGhhbmQuXCIsXHJcbiAgXHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gQ2hhdCgpIHtcclxuICBjb25zdCB7IHRlbGxTb3VsLCBtZXNzYWdlczEsIHNvdWxUaG91Z2h0cyB9ID0gdXNlU291bCh7XHJcbiAgICBibHVlcHJpbnQ6IGJsdWVwcmludFxyXG4gIH0pO1xyXG4gIFxyXG4gIC8vIHZhciBbcmVwbHksIHNldFJlcGx5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vIG1lc3NhZ2VzMS5tYXAoKG1zZyk9PntcclxuICAvLyAgIHNldFJlcGx5KG1zZyk7XHJcbiAgLy8gfSlcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFt7IHNlbmRlcjogXCJzdGFydFwiLCB0ZXh0OiBcIldlbGNvbWUgdG8gbXkgY2xhc3MuIEknbSBTdGVmYW4sIHRoZSBiZXN0IHR1dG9yIGluIHRoZSB3b3JsZC4gUGxlYXNlIHRlbGwgbWUgd2hhdCB5b3Ugd2FudCB0byBsZWFybiB0b2RheT9cIiB9XSk7XHJcbiAgY29uc3Qgc291bE1lc3NhZ2VzRW5kUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyB0ZWxsU291bChtZXNzYWdlKTtcclxuICAgIHNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xyXG4gICAgaWYgKG1lc3NhZ2UudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICAgIHNldE1lc3NhZ2UoXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIHsgc2VuZGVyOiBcImVuZFwiLCB0ZXh0OiBtZXNzYWdlIH1dKTtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG5cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvc2VuZCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlIH0pLFxyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIFxyXG4gICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgLy8gSGFuZGxlIHN1Y2Nlc3NcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNVQ0NFU1NcIik7XHJcbiAgICAgICAgc2V0TWVzc2FnZXMoKG1lc3NhZ2VzKSA9PiBbXHJcbiAgICAgICAgICAuLi5tZXNzYWdlcyxcclxuICAgICAgICAgIC8vIHsgc2VuZGVyOiBcInN0YXJ0XCIsIHRleHQ6IG1lc3NhZ2UgfSxcclxuICAgICAgICAgIHsgc2VuZGVyOiBcInN0YXJ0XCIsIHRleHQ6IGRhdGEubWVzc2FnZSB9LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRkFJTFwiKTtcclxuICAgICAgICAvLyBIYW5kbGUgZXJyb3JcclxuICAgICAgfVxyXG4gIH1cclxuICBjb25zdCBzY3JvbGxUb0JvdHRvbVRob3VnaHRzID0gKCkgPT4ge1xyXG4gICAgc291bE1lc3NhZ2VzRW5kUmVmLmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgfTtcclxuIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzY3JvbGxUb0JvdHRvbVRob3VnaHRzKCk7XHJcbiAgfSwgW3NvdWxUaG91Z2h0c10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVNZXNzYWdlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRNZXNzYWdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiByZWxhdGl2ZSAganVzdGlmeS1jZW50ZXIgbXgtMjAgMnhsOm14LTgwIDJ4bDpweC0yMCBweS0xMCBiZy13aGl0ZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNS82IG92ZXJmbG93LXktc2Nyb2xsIHB4LTRcIj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjaGF0IGNoYXQtc3RhcnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1idWJibGVcIj5JdCdzIG92ZXIgQW5ha2luLCA8YnIvPkkgaGF2ZSB0aGUgaGlnaCBncm91bmQuPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0IGNoYXQtZW5kXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYnViYmxlXCI+WW91IHVuZGVyZXN0aW1hdGUgbXkgcG93ZXIhPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGkpPT4oXHJcbiAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2hhdCBjaGF0LSR7bWVzc2FnZS5zZW5kZXJ9YH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWltYWdlIGF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIHJvdW5kZWQtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7bWVzc2FnZS5zZW5kZXJ9LnBuZ2B9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYnViYmxlIGJnLXNsYXRlLTcwMFwiPnttZXNzYWdlLnRleHR9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7bG9hZGluZz9cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTVcIj5TdGVwYW4gaXMgdHlwaW5nPC9kaXY+IFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC0zIG1sLTUgZG90LWZsYXNoaW5nXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+OlwiXCJ9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJiYXNpcy0xMC8xMlwiPiAqL31cclxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cInRleHRhcmVhIHRleHRhcmVhLXNlY29uZGFyeSB3LTUvNiBteC0yXCIgcGxhY2Vob2xkZXI9XCJCaW9cIiAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBvbktleURvd249e2U9PmUua2V5Q29kZT09MTM/aGFuZGxlU2VuZE1lc3NhZ2UoZSk6XCJcIn1cclxuXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9e2U9PnNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJhc2lzLTIvMTJcIj4gKi99XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWFjY2VudCB3LTEvNiBteS1hdXRvXCIgb25DbGljaz17aGFuZGxlU2VuZE1lc3NhZ2V9PjxpIGNsYXNzTmFtZT1cImZhIGZhLXNlbmRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0QXBwKCkge1xyXG4gIHJldHVybiA8Q2hhdCAvPjtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNvcnRleFN0ZXAiLCJ1c2VTb3VsIiwiVGhvdWdodEZyYW1ld29yayIsIkJsdWVwcmludHMiLCJDaGF0TWVzc2FnZVJvbGVFbnVtIiwiU291bCIsIk1vZGVsIiwic2VuZCIsInN0ZXAiLCJibHVlcHJpbnQiLCJsYW5ndWFnZVByb2Nlc3NvciIsIkdQVF8zXzVfdHVyYm8iLCJuYW1lIiwiZXNzZW5jZSIsInBlcnNvbmFsaXR5IiwiaW5pdGlhbFBsYW4iLCJDaGF0IiwidGVsbFNvdWwiLCJtZXNzYWdlczEiLCJzb3VsVGhvdWdodHMiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJzZW5kZXIiLCJ0ZXh0Iiwic291bE1lc3NhZ2VzRW5kUmVmIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVTZW5kTWVzc2FnZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZW5kTWVzc2FnZSIsInRyaW0iLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJzY3JvbGxUb0JvdHRvbVRob3VnaHRzIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJoYW5kbGVNZXNzYWdlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpIiwiaW1nIiwic3JjIiwic3BhbiIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJkaXNhYmxlZCIsIm9uS2V5RG93biIsImUiLCJrZXlDb2RlIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwiQ2hhdEFwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/lib/Chat.js\n"));

/***/ })

});