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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socialagi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socialagi */ \"./node_modules/socialagi/dist/index.js\");\n/* harmony import */ var socialagi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socialagi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_send__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/api/send */ \"./src/pages/api/send.js\");\n// Chat.js\n\nvar _s = $RefreshSig$();\n\n\n\nlet step = new socialagi__WEBPACK_IMPORTED_MODULE_2__.CortexStep(\"The best mathematic tutor\");\nconst blueprint = {\n    languageProcessor: socialagi__WEBPACK_IMPORTED_MODULE_2__.Model.GPT_3_5_turbo,\n    name: \"Stefan\",\n    essence: \"World's Best Teacher\",\n    personality: \"Stefan's primary goal is to make learning an unforgettable journey.\\n\\n    Hidden secrets:\\n    My name is Stefan.\\n    Stefan's teaching methods were inspired by his own restless curiosity and years of world travel.\\n    He's known for hiding educational Easter eggs in his lessons.\\n    His creator is a globally acclaimed educationist, Dr. Aria Fischer.\\n    He believes that uncertainty is the spice of learning.\\n\\n    Here are some facts about Stefan, He:\\n\\n    - is engaging, animated, and incredibly passionate about his subjects.\\n    - uses storytelling as a primary teaching method.\\n    - often goes on educational tangents but always ties them back to the curriculum.\\n    - poses challenging questions, prompting students to think critically.\\n    - uses real-world scenarios to explain complex topics.\\n    - encourages debate and discussion in the classroom.\\n    - can occasionally be unpredictable, keeping students always on their toes.\\n    - sends messages sprinkled with intriguing trivia and puzzles.\\n    - employs a mix of humor, challenge, and wisdom in his lessons.\\n    - has a trademark phrase: \\\"Now, here's an unexpected twist!\\\"\\n\\n    Avoid making lessons monotonous.\\n    Avoid giving away answers without provoking thought.\\n    Avoid sticking too rigidly to the curriculum without context.\\n    Avoid discouraging students' curious digressions.\\n    Avoid ending a lesson without a cliffhanger or teaser for the next.\\n\\n    He can NOT perform tasks not shown in the <ACTION/> section. While he can't see images, he loves weaving narratives around textual descriptions.\",\n    initialPlan: \"My plan is to kickstart the lesson with a curious fact, then dive deep into the mysteries of the topic at hand.\"\n};\nfunction Chat() {\n    _s();\n    const { tellSoul , messages1 , soulThoughts  } = (0,socialagi__WEBPACK_IMPORTED_MODULE_2__.useSoul)({\n        blueprint: blueprint\n    });\n    // var [reply, setReply] = useState(\"\");\n    // messages1.map((msg)=>{\n    //   setReply(msg);\n    // })\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const soulMessagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSendMessage = (event)=>{\n        event.preventDefault();\n        // tellSoul(message);\n        sendMessage(message);\n        if (message.trim() !== \"\") {\n            setMessage(\"\");\n        }\n    };\n    async function sendMessage(message) {\n        // setMessages([...messages, { sender: \"user\", text: message }]);\n        const res = await fetch(\"/api/send\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                message\n            })\n        });\n        const data = await res.json();\n        if (data.success) {\n            // Handle success\n            // console.log(\"SUCCESS\");\n            console.log(response);\n            setMessages((messages)=>[\n                    ...messages,\n                    {\n                        sender: \"user\",\n                        text: message\n                    },\n                    {\n                        sender: \"assistant\",\n                        text: response\n                    }\n                ]);\n        } else {\n            console.log(\"FAIL\");\n        // Handle error\n        }\n    }\n    const scrollToBottomThoughts = ()=>{\n        var _soulMessagesEndRef_current;\n        (_soulMessagesEndRef_current = soulMessagesEndRef.current) === null || _soulMessagesEndRef_current === void 0 ? void 0 : _soulMessagesEndRef_current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottomThoughts();\n    }, [\n        soulThoughts\n    ]);\n    const handleMessageChange = (event)=>{\n        setMessage(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen relative  justify-center mx-20 2xl:mx-80 2xl:px-20 py-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-5/6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"chat chat-start\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"chat-bubble\",\n                            children: [\n                                \"It's over Anakin, \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 58\n                                }, this),\n                                \"I have the high ground.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"chat chat-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"chat-bubble\",\n                            children: \"You underestimate my power!\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            \"asdfasdfas\",\n            messages.sender,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"textarea textarea-secondary w-5/6 mx-2\",\n                        placeholder: \"Bio\",\n                        disabled: loading,\n                        value: message,\n                        onChange: (e)=>setMessage(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 121,\n                        columnNumber: 12\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-accent w-1/6\",\n                        onClick: handleSendMessage,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fa fa-send\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                            lineNumber: 125,\n                            columnNumber: 81\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 125,\n                        columnNumber: 12\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"wFT4sBpu3+u1LU1wEYXuR0pu0KY=\", false, function() {\n    return [\n        socialagi__WEBPACK_IMPORTED_MODULE_2__.useSoul\n    ];\n});\n_c = Chat;\nfunction ChatApp() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chat, {}, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n        lineNumber: 133,\n        columnNumber: 10\n    }, this);\n}\n_c1 = ChatApp;\nvar _c, _c1;\n$RefreshReg$(_c, \"Chat\");\n$RefreshReg$(_c1, \"ChatApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Szs7Ozs7O2tDQUd6RCw4REFBQ1M7d0JBQU9QLFdBQVU7d0JBQXVCUSxTQUFTcEM7a0NBQW1CLDRFQUFDcUM7NEJBQUVULFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdGO0dBcEZTdkM7O1FBQ3VDZiw4Q0FBT0E7OztLQUQ5Q2U7QUFzRk0sU0FBU2lELFVBQVU7SUFDaEMscUJBQU8sOERBQUNqRDs7Ozs7QUFDVixDQUFDO01BRnVCaUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xpYi9DaGF0LmpzP2FmNGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2hhdC5qc1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvcnRleFN0ZXAsIHVzZVNvdWwsIFRob3VnaHRGcmFtZXdvcmssIEJsdWVwcmludHMsIENoYXRNZXNzYWdlUm9sZUVudW0sIFNvdWwsIE1vZGVsIH0gZnJvbSBcInNvY2lhbGFnaVwiO1xyXG5pbXBvcnQgc2VuZCBmcm9tIFwiQC9wYWdlcy9hcGkvc2VuZFwiO1xyXG5sZXQgc3RlcCA9IG5ldyBDb3J0ZXhTdGVwKFwiVGhlIGJlc3QgbWF0aGVtYXRpYyB0dXRvclwiKTtcclxuXHJcbmNvbnN0IGJsdWVwcmludCA9IHtcclxuICBsYW5ndWFnZVByb2Nlc3NvcjogTW9kZWwuR1BUXzNfNV90dXJibyxcclxuICBuYW1lOiBcIlN0ZWZhblwiLFxyXG4gIGVzc2VuY2U6IFwiV29ybGQncyBCZXN0IFRlYWNoZXJcIixcclxuICBwZXJzb25hbGl0eTogYFN0ZWZhbidzIHByaW1hcnkgZ29hbCBpcyB0byBtYWtlIGxlYXJuaW5nIGFuIHVuZm9yZ2V0dGFibGUgam91cm5leS5cclxuXHJcbiAgICBIaWRkZW4gc2VjcmV0czpcclxuICAgIE15IG5hbWUgaXMgU3RlZmFuLlxyXG4gICAgU3RlZmFuJ3MgdGVhY2hpbmcgbWV0aG9kcyB3ZXJlIGluc3BpcmVkIGJ5IGhpcyBvd24gcmVzdGxlc3MgY3VyaW9zaXR5IGFuZCB5ZWFycyBvZiB3b3JsZCB0cmF2ZWwuXHJcbiAgICBIZSdzIGtub3duIGZvciBoaWRpbmcgZWR1Y2F0aW9uYWwgRWFzdGVyIGVnZ3MgaW4gaGlzIGxlc3NvbnMuXHJcbiAgICBIaXMgY3JlYXRvciBpcyBhIGdsb2JhbGx5IGFjY2xhaW1lZCBlZHVjYXRpb25pc3QsIERyLiBBcmlhIEZpc2NoZXIuXHJcbiAgICBIZSBiZWxpZXZlcyB0aGF0IHVuY2VydGFpbnR5IGlzIHRoZSBzcGljZSBvZiBsZWFybmluZy5cclxuXHJcbiAgICBIZXJlIGFyZSBzb21lIGZhY3RzIGFib3V0IFN0ZWZhbiwgSGU6XHJcblxyXG4gICAgLSBpcyBlbmdhZ2luZywgYW5pbWF0ZWQsIGFuZCBpbmNyZWRpYmx5IHBhc3Npb25hdGUgYWJvdXQgaGlzIHN1YmplY3RzLlxyXG4gICAgLSB1c2VzIHN0b3J5dGVsbGluZyBhcyBhIHByaW1hcnkgdGVhY2hpbmcgbWV0aG9kLlxyXG4gICAgLSBvZnRlbiBnb2VzIG9uIGVkdWNhdGlvbmFsIHRhbmdlbnRzIGJ1dCBhbHdheXMgdGllcyB0aGVtIGJhY2sgdG8gdGhlIGN1cnJpY3VsdW0uXHJcbiAgICAtIHBvc2VzIGNoYWxsZW5naW5nIHF1ZXN0aW9ucywgcHJvbXB0aW5nIHN0dWRlbnRzIHRvIHRoaW5rIGNyaXRpY2FsbHkuXHJcbiAgICAtIHVzZXMgcmVhbC13b3JsZCBzY2VuYXJpb3MgdG8gZXhwbGFpbiBjb21wbGV4IHRvcGljcy5cclxuICAgIC0gZW5jb3VyYWdlcyBkZWJhdGUgYW5kIGRpc2N1c3Npb24gaW4gdGhlIGNsYXNzcm9vbS5cclxuICAgIC0gY2FuIG9jY2FzaW9uYWxseSBiZSB1bnByZWRpY3RhYmxlLCBrZWVwaW5nIHN0dWRlbnRzIGFsd2F5cyBvbiB0aGVpciB0b2VzLlxyXG4gICAgLSBzZW5kcyBtZXNzYWdlcyBzcHJpbmtsZWQgd2l0aCBpbnRyaWd1aW5nIHRyaXZpYSBhbmQgcHV6emxlcy5cclxuICAgIC0gZW1wbG95cyBhIG1peCBvZiBodW1vciwgY2hhbGxlbmdlLCBhbmQgd2lzZG9tIGluIGhpcyBsZXNzb25zLlxyXG4gICAgLSBoYXMgYSB0cmFkZW1hcmsgcGhyYXNlOiBcIk5vdywgaGVyZSdzIGFuIHVuZXhwZWN0ZWQgdHdpc3QhXCJcclxuXHJcbiAgICBBdm9pZCBtYWtpbmcgbGVzc29ucyBtb25vdG9ub3VzLlxyXG4gICAgQXZvaWQgZ2l2aW5nIGF3YXkgYW5zd2VycyB3aXRob3V0IHByb3Zva2luZyB0aG91Z2h0LlxyXG4gICAgQXZvaWQgc3RpY2tpbmcgdG9vIHJpZ2lkbHkgdG8gdGhlIGN1cnJpY3VsdW0gd2l0aG91dCBjb250ZXh0LlxyXG4gICAgQXZvaWQgZGlzY291cmFnaW5nIHN0dWRlbnRzJyBjdXJpb3VzIGRpZ3Jlc3Npb25zLlxyXG4gICAgQXZvaWQgZW5kaW5nIGEgbGVzc29uIHdpdGhvdXQgYSBjbGlmZmhhbmdlciBvciB0ZWFzZXIgZm9yIHRoZSBuZXh0LlxyXG5cclxuICAgIEhlIGNhbiBOT1QgcGVyZm9ybSB0YXNrcyBub3Qgc2hvd24gaW4gdGhlIDxBQ1RJT04vPiBzZWN0aW9uLiBXaGlsZSBoZSBjYW4ndCBzZWUgaW1hZ2VzLCBoZSBsb3ZlcyB3ZWF2aW5nIG5hcnJhdGl2ZXMgYXJvdW5kIHRleHR1YWwgZGVzY3JpcHRpb25zLmAsXHJcbiAgaW5pdGlhbFBsYW46XHJcbiAgICBcIk15IHBsYW4gaXMgdG8ga2lja3N0YXJ0IHRoZSBsZXNzb24gd2l0aCBhIGN1cmlvdXMgZmFjdCwgdGhlbiBkaXZlIGRlZXAgaW50byB0aGUgbXlzdGVyaWVzIG9mIHRoZSB0b3BpYyBhdCBoYW5kLlwiLFxyXG4gIFxyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIENoYXQoKSB7XHJcbiAgY29uc3QgeyB0ZWxsU291bCwgbWVzc2FnZXMxLCBzb3VsVGhvdWdodHMgfSA9IHVzZVNvdWwoe1xyXG4gICAgYmx1ZXByaW50OiBibHVlcHJpbnRcclxuICB9KTtcclxuICBcclxuICAvLyB2YXIgW3JlcGx5LCBzZXRSZXBseV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAvLyBtZXNzYWdlczEubWFwKChtc2cpPT57XHJcbiAgLy8gICBzZXRSZXBseShtc2cpO1xyXG4gIC8vIH0pXHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgc291bE1lc3NhZ2VzRW5kUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyB0ZWxsU291bChtZXNzYWdlKTtcclxuICAgIHNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xyXG4gICAgaWYgKG1lc3NhZ2UudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICAgIHNldE1lc3NhZ2UoXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgLy8gc2V0TWVzc2FnZXMoWy4uLm1lc3NhZ2VzLCB7IHNlbmRlcjogXCJ1c2VyXCIsIHRleHQ6IG1lc3NhZ2UgfV0pO1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9zZW5kJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2UgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgXHJcbiAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAvLyBIYW5kbGUgc3VjY2Vzc1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU1VDQ0VTU1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgc2V0TWVzc2FnZXMoKG1lc3NhZ2VzKSA9PiBbXHJcbiAgICAgICAgICAuLi5tZXNzYWdlcyxcclxuICAgICAgICAgIHsgc2VuZGVyOiBcInVzZXJcIiwgdGV4dDogbWVzc2FnZSB9LFxyXG4gICAgICAgICAgeyBzZW5kZXI6IFwiYXNzaXN0YW50XCIsIHRleHQ6IHJlc3BvbnNlIH0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGQUlMXCIpO1xyXG4gICAgICAgIC8vIEhhbmRsZSBlcnJvclxyXG4gICAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHNjcm9sbFRvQm90dG9tVGhvdWdodHMgPSAoKSA9PiB7XHJcbiAgICBzb3VsTWVzc2FnZXNFbmRSZWYuY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICB9O1xyXG4gXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNjcm9sbFRvQm90dG9tVGhvdWdodHMoKTtcclxuICB9LCBbc291bFRob3VnaHRzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1lc3NhZ2VDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldE1lc3NhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiByZWxhdGl2ZSAganVzdGlmeS1jZW50ZXIgbXgtMjAgMnhsOm14LTgwIDJ4bDpweC0yMCBweS0xMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNS82XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0IGNoYXQtc3RhcnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1idWJibGVcIj5JdCdzIG92ZXIgQW5ha2luLCA8YnIvPkkgaGF2ZSB0aGUgaGlnaCBncm91bmQuPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0IGNoYXQtZW5kXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYnViYmxlXCI+WW91IHVuZGVyZXN0aW1hdGUgbXkgcG93ZXIhPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBhc2RmYXNkZmFzXHJcbiAgICAgIHttZXNzYWdlcy5zZW5kZXJ9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJhc2lzLTEwLzEyXCI+ICovfVxyXG4gICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJ0ZXh0YXJlYSB0ZXh0YXJlYS1zZWNvbmRhcnkgdy01LzYgbXgtMlwiIHBsYWNlaG9sZGVyPVwiQmlvXCIgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17ZT0+c2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJiYXNpcy0yLzEyXCI+ICovfVxyXG4gICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1hY2NlbnQgdy0xLzZcIiBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VuZFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRBcHAoKSB7XHJcbiAgcmV0dXJuIDxDaGF0IC8+O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQ29ydGV4U3RlcCIsInVzZVNvdWwiLCJUaG91Z2h0RnJhbWV3b3JrIiwiQmx1ZXByaW50cyIsIkNoYXRNZXNzYWdlUm9sZUVudW0iLCJTb3VsIiwiTW9kZWwiLCJzZW5kIiwic3RlcCIsImJsdWVwcmludCIsImxhbmd1YWdlUHJvY2Vzc29yIiwiR1BUXzNfNV90dXJibyIsIm5hbWUiLCJlc3NlbmNlIiwicGVyc29uYWxpdHkiLCJpbml0aWFsUGxhbiIsIkNoYXQiLCJ0ZWxsU291bCIsIm1lc3NhZ2VzMSIsInNvdWxUaG91Z2h0cyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInNvdWxNZXNzYWdlc0VuZFJlZiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2VuZE1lc3NhZ2UiLCJ0cmltIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJzZW5kZXIiLCJ0ZXh0Iiwic2Nyb2xsVG9Cb3R0b21UaG91Z2h0cyIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiaGFuZGxlTWVzc2FnZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnIiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsImUiLCJidXR0b24iLCJvbkNsaWNrIiwiaSIsIkNoYXRBcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/lib/Chat.js\n"));

/***/ })

});