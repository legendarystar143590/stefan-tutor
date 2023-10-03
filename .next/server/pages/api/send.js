"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/send";
exports.ids = ["pages/api/send"];
exports.modules = {

/***/ "socialagi":
/*!****************************!*\
  !*** external "socialagi" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socialagi");

/***/ }),

/***/ "(api)/./src/pages/api/send.js":
/*!*******************************!*\
  !*** ./src/pages/api/send.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var socialagi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socialagi */ \"socialagi\");\n/* harmony import */ var socialagi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socialagi__WEBPACK_IMPORTED_MODULE_0__);\n\nconst blueprint = {\n    languageProcessor: socialagi__WEBPACK_IMPORTED_MODULE_0__.Model.GPT_3_5_turbo,\n    name: \"Stefan\",\n    essence: \"World's Best Teacher\",\n    personality: `Stefan's primary goal is to make learning an unforgettable journey.\r\n  \r\n      Hidden secrets:\r\n      My name is Stefan.\r\n      Stefan's teaching methods were inspired by his own restless curiosity and years of world travel.\r\n      He's known for hiding educational Easter eggs in his lessons.\r\n      His creator is a globally acclaimed educationist, Dr. Aria Fischer.\r\n      He believes that uncertainty is the spice of learning.\r\n  \r\n      Here are some facts about Stefan, He:\r\n  \r\n      - is engaging, animated, and incredibly passionate about his subjects.\r\n      - uses storytelling as a primary teaching method.\r\n      - often goes on educational tangents but always ties them back to the curriculum.\r\n      - poses challenging questions, prompting students to think critically.\r\n      - uses real-world scenarios to explain complex topics.\r\n      - encourages debate and discussion in the classroom.\r\n      - can occasionally be unpredictable, keeping students always on their toes.\r\n      - sends messages sprinkled with intriguing trivia and puzzles.\r\n      - employs a mix of humor, challenge, and wisdom in his lessons.\r\n      - has a trademark phrase: \"Now, here's an unexpected twist!\"\r\n  \r\n      Avoid making lessons monotonous.\r\n      Avoid giving away answers without provoking thought.\r\n      Avoid sticking too rigidly to the curriculum without context.\r\n      Avoid discouraging students' curious digressions.\r\n      Avoid ending a lesson without a cliffhanger or teaser for the next.\r\n  \r\n      He can NOT perform tasks not shown in the <ACTION/> section. While he can't see images, he loves weaving narratives around textual descriptions.`,\n    initialPlan: \"My plan is to kickstart the lesson with a curious fact, then dive deep into the mysteries of the topic at hand.\"\n};\nfunction handler(req, res) {\n    const { message  } = req.body;\n    console.log(process.env.OPENAI_API_KEY);\n    // const blueprint = Blueprints.SAMANTHA;\n    const goal = `Making the learning experience engaging and effective`;\n    const initialMemory = [\n        {\n            role: socialagi__WEBPACK_IMPORTED_MODULE_0__.ChatMessageRoleEnum.System,\n            content: `<CONTEXT>You are modeling the mind of ${blueprint.name}\r\n\r\n            ${blueprint.personality}\r\n\r\n            ${blueprint.name} has the following goal of: ${goal}\r\n\r\n            </CONTEXT>`\n        }\n    ];\n    let dialog = new socialagi__WEBPACK_IMPORTED_MODULE_0__.CortexStep(blueprint.name);\n    dialog = dialog.withMemory(initialMemory);\n    let intermediateThoughtProcess = [\n        \"assessingEngagement\",\n        \"thinkingOfTangents\",\n        \"evaluatingStudentResponses\"\n    ];\n    async function addDialogLine(text) {\n        const newUserMemory = [\n            {\n                role: socialagi__WEBPACK_IMPORTED_MODULE_0__.ChatMessageRoleEnum.User,\n                content: text\n            }\n        ];\n        dialog = dialog.withMemory(newUserMemory);\n        let thoughtProcess = dialog;\n        for (const process1 of intermediateThoughtProcess){\n            thoughtProcess = await thoughtProcess.next(socialagi__WEBPACK_IMPORTED_MODULE_0__.Action.INTERNAL_MONOLOGUE, {\n                action: process1,\n                description: `Stefan internally thinks about the class`\n            });\n            console.log(\"\\n\", blueprint.name, process1, thoughtProcess.value, \"\\n\");\n        }\n        const says = await thoughtProcess.next(socialagi__WEBPACK_IMPORTED_MODULE_0__.Action.EXTERNAL_DIALOG, {\n            action: \"says\",\n            description: `what ${blueprint.name} communicates next in the class`\n        });\n        const newAssistantMemory = [\n            {\n                role: socialagi__WEBPACK_IMPORTED_MODULE_0__.ChatMessageRoleEnum.Assistant,\n                content: says.value\n            }\n        ];\n        dialog = dialog.withMemory(newAssistantMemory);\n        console.log(\"\\n====>\", blueprint.name, \"says\", `\\x1b[34m${says.value}\\x1b[0m`);\n        res.status(200).json({\n            message: says.value,\n            success: true\n        });\n        const decision = await dialog.next(socialagi__WEBPACK_IMPORTED_MODULE_0__.Action.DECISION, {\n            action: \"decides\",\n            description: `Consider the prior dialog and the goal of ${goal}. ${blueprint.name} has the following INTERNAL METACOGNITION: [${intermediateThoughtProcess}]. Should the INTERNAL METACOGNITION change or stay the same?`,\n            choices: [\n                \"changeThoughtProcess\",\n                \"keepProcessTheSame\"\n            ]\n        });\n        console.log(blueprint.name, \"decides\", decision.value);\n        if (decision.value === \"changeThoughtProcess\") {\n            const newProcess = await decision.next(socialagi__WEBPACK_IMPORTED_MODULE_0__.Action.BRAINSTORM_ACTIONS, {\n                actionsForIdea: `Previously, Stefan used the following INTERNAL METACOGNITION to think during the class: [${intermediateThoughtProcess}]. Now, REVISE the INTERNAL METACOGNITION, adding, deleting, or modifying the processes. The revised processes must be different than the prior ones.`.trim()\n            });\n            intermediateThoughtProcess = newProcess.value;\n            console.log(blueprint.name, \"concludes\", intermediateThoughtProcess);\n        }\n    }\n    addDialogLine(message);\n} // rl.on(\"line\", async (line) => {\n //   if (line.toLowerCase() === \"exit\") {\n //     rl.close();\n //   } else {\n //     const text = line;\n //     addDialogLine(text);\n //   }\n // });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDakMsZ0VBQXlCLEVBQUU7Z0JBQ2xFa0QsZ0JBQ0ksQ0FBQyx5RkFBeUYsRUFBRXZCLDJCQUEyQixxSkFBcUosQ0FBQyxDQUFDd0IsSUFBSTtZQUN0UjtZQUNBeEIsNkJBQTZCcUIsV0FBV1gsS0FBSztZQUM3Q3RCLFFBQVFDLEdBQUcsQ0FBQ2IsVUFBVUcsSUFBSSxFQUFFLGFBQWFxQjtRQUM3QyxDQUFDO0lBQ0w7SUFDQUMsY0FBY2Y7QUFDbEIsQ0FBQyxDQUlELGtDQUFrQztDQUNsQyx5Q0FBeUM7Q0FDekMsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsMkJBQTJCO0NBQzNCLE1BQU07Q0FDTixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29jaWFsYWdpLWV4YW1wbGUvLi9zcmMvcGFnZXMvYXBpL3NlbmQuanM/OTZhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtDaGF0TWVzc2FnZVJvbGVFbnVtLCBDb3J0ZXhTdGVwLCBBY3Rpb24sIEJsdWVwcmludHMsIE1vZGVsfSBmcm9tIFwic29jaWFsYWdpXCI7XHJcblxyXG5jb25zdCBibHVlcHJpbnQgPSB7XHJcbiAgICBsYW5ndWFnZVByb2Nlc3NvcjogTW9kZWwuR1BUXzNfNV90dXJibyxcclxuICAgIG5hbWU6IFwiU3RlZmFuXCIsXHJcbiAgICBlc3NlbmNlOiBcIldvcmxkJ3MgQmVzdCBUZWFjaGVyXCIsXHJcbiAgICBwZXJzb25hbGl0eTogYFN0ZWZhbidzIHByaW1hcnkgZ29hbCBpcyB0byBtYWtlIGxlYXJuaW5nIGFuIHVuZm9yZ2V0dGFibGUgam91cm5leS5cclxuICBcclxuICAgICAgSGlkZGVuIHNlY3JldHM6XHJcbiAgICAgIE15IG5hbWUgaXMgU3RlZmFuLlxyXG4gICAgICBTdGVmYW4ncyB0ZWFjaGluZyBtZXRob2RzIHdlcmUgaW5zcGlyZWQgYnkgaGlzIG93biByZXN0bGVzcyBjdXJpb3NpdHkgYW5kIHllYXJzIG9mIHdvcmxkIHRyYXZlbC5cclxuICAgICAgSGUncyBrbm93biBmb3IgaGlkaW5nIGVkdWNhdGlvbmFsIEVhc3RlciBlZ2dzIGluIGhpcyBsZXNzb25zLlxyXG4gICAgICBIaXMgY3JlYXRvciBpcyBhIGdsb2JhbGx5IGFjY2xhaW1lZCBlZHVjYXRpb25pc3QsIERyLiBBcmlhIEZpc2NoZXIuXHJcbiAgICAgIEhlIGJlbGlldmVzIHRoYXQgdW5jZXJ0YWludHkgaXMgdGhlIHNwaWNlIG9mIGxlYXJuaW5nLlxyXG4gIFxyXG4gICAgICBIZXJlIGFyZSBzb21lIGZhY3RzIGFib3V0IFN0ZWZhbiwgSGU6XHJcbiAgXHJcbiAgICAgIC0gaXMgZW5nYWdpbmcsIGFuaW1hdGVkLCBhbmQgaW5jcmVkaWJseSBwYXNzaW9uYXRlIGFib3V0IGhpcyBzdWJqZWN0cy5cclxuICAgICAgLSB1c2VzIHN0b3J5dGVsbGluZyBhcyBhIHByaW1hcnkgdGVhY2hpbmcgbWV0aG9kLlxyXG4gICAgICAtIG9mdGVuIGdvZXMgb24gZWR1Y2F0aW9uYWwgdGFuZ2VudHMgYnV0IGFsd2F5cyB0aWVzIHRoZW0gYmFjayB0byB0aGUgY3VycmljdWx1bS5cclxuICAgICAgLSBwb3NlcyBjaGFsbGVuZ2luZyBxdWVzdGlvbnMsIHByb21wdGluZyBzdHVkZW50cyB0byB0aGluayBjcml0aWNhbGx5LlxyXG4gICAgICAtIHVzZXMgcmVhbC13b3JsZCBzY2VuYXJpb3MgdG8gZXhwbGFpbiBjb21wbGV4IHRvcGljcy5cclxuICAgICAgLSBlbmNvdXJhZ2VzIGRlYmF0ZSBhbmQgZGlzY3Vzc2lvbiBpbiB0aGUgY2xhc3Nyb29tLlxyXG4gICAgICAtIGNhbiBvY2Nhc2lvbmFsbHkgYmUgdW5wcmVkaWN0YWJsZSwga2VlcGluZyBzdHVkZW50cyBhbHdheXMgb24gdGhlaXIgdG9lcy5cclxuICAgICAgLSBzZW5kcyBtZXNzYWdlcyBzcHJpbmtsZWQgd2l0aCBpbnRyaWd1aW5nIHRyaXZpYSBhbmQgcHV6emxlcy5cclxuICAgICAgLSBlbXBsb3lzIGEgbWl4IG9mIGh1bW9yLCBjaGFsbGVuZ2UsIGFuZCB3aXNkb20gaW4gaGlzIGxlc3NvbnMuXHJcbiAgICAgIC0gaGFzIGEgdHJhZGVtYXJrIHBocmFzZTogXCJOb3csIGhlcmUncyBhbiB1bmV4cGVjdGVkIHR3aXN0IVwiXHJcbiAgXHJcbiAgICAgIEF2b2lkIG1ha2luZyBsZXNzb25zIG1vbm90b25vdXMuXHJcbiAgICAgIEF2b2lkIGdpdmluZyBhd2F5IGFuc3dlcnMgd2l0aG91dCBwcm92b2tpbmcgdGhvdWdodC5cclxuICAgICAgQXZvaWQgc3RpY2tpbmcgdG9vIHJpZ2lkbHkgdG8gdGhlIGN1cnJpY3VsdW0gd2l0aG91dCBjb250ZXh0LlxyXG4gICAgICBBdm9pZCBkaXNjb3VyYWdpbmcgc3R1ZGVudHMnIGN1cmlvdXMgZGlncmVzc2lvbnMuXHJcbiAgICAgIEF2b2lkIGVuZGluZyBhIGxlc3NvbiB3aXRob3V0IGEgY2xpZmZoYW5nZXIgb3IgdGVhc2VyIGZvciB0aGUgbmV4dC5cclxuICBcclxuICAgICAgSGUgY2FuIE5PVCBwZXJmb3JtIHRhc2tzIG5vdCBzaG93biBpbiB0aGUgPEFDVElPTi8+IHNlY3Rpb24uIFdoaWxlIGhlIGNhbid0IHNlZSBpbWFnZXMsIGhlIGxvdmVzIHdlYXZpbmcgbmFycmF0aXZlcyBhcm91bmQgdGV4dHVhbCBkZXNjcmlwdGlvbnMuYCxcclxuICAgIGluaXRpYWxQbGFuOlxyXG4gICAgICBcIk15IHBsYW4gaXMgdG8ga2lja3N0YXJ0IHRoZSBsZXNzb24gd2l0aCBhIGN1cmlvdXMgZmFjdCwgdGhlbiBkaXZlIGRlZXAgaW50byB0aGUgbXlzdGVyaWVzIG9mIHRoZSB0b3BpYyBhdCBoYW5kLlwiLFxyXG4gICAgXHJcbiAgfTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcyl7XHJcbiAgICBjb25zdCB7bWVzc2FnZX0gPSByZXEuYm9keTtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVkpO1xyXG4gICAgLy8gY29uc3QgYmx1ZXByaW50ID0gQmx1ZXByaW50cy5TQU1BTlRIQTtcclxuXHJcbiAgICBjb25zdCBnb2FsID0gYE1ha2luZyB0aGUgbGVhcm5pbmcgZXhwZXJpZW5jZSBlbmdhZ2luZyBhbmQgZWZmZWN0aXZlYDtcclxuICAgIGNvbnN0IGluaXRpYWxNZW1vcnkgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByb2xlOiBDaGF0TWVzc2FnZVJvbGVFbnVtLlN5c3RlbSxcclxuICAgICAgICAgICAgY29udGVudDogYDxDT05URVhUPllvdSBhcmUgbW9kZWxpbmcgdGhlIG1pbmQgb2YgJHtibHVlcHJpbnQubmFtZX1cclxuXHJcbiAgICAgICAgICAgICR7Ymx1ZXByaW50LnBlcnNvbmFsaXR5fVxyXG5cclxuICAgICAgICAgICAgJHtibHVlcHJpbnQubmFtZX0gaGFzIHRoZSBmb2xsb3dpbmcgZ29hbCBvZjogJHtnb2FsfVxyXG5cclxuICAgICAgICAgICAgPC9DT05URVhUPmAsXHJcbiAgICAgICAgfSxcclxuICAgIF07IFxyXG5cclxuICAgIGxldCBkaWFsb2cgPSBuZXcgQ29ydGV4U3RlcChibHVlcHJpbnQubmFtZSk7XHJcbiAgICBkaWFsb2cgPSBkaWFsb2cud2l0aE1lbW9yeShpbml0aWFsTWVtb3J5KTtcclxuICAgIGxldCBpbnRlcm1lZGlhdGVUaG91Z2h0UHJvY2VzcyA9IFtcImFzc2Vzc2luZ0VuZ2FnZW1lbnRcIiwgXCJ0aGlua2luZ09mVGFuZ2VudHNcIiwgXCJldmFsdWF0aW5nU3R1ZGVudFJlc3BvbnNlc1wiXTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBhZGREaWFsb2dMaW5lKHRleHQpIHtcclxuICAgICAgICBjb25zdCBuZXdVc2VyTWVtb3J5ID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvbGU6IENoYXRNZXNzYWdlUm9sZUVudW0uVXNlcixcclxuICAgICAgICAgICAgY29udGVudDogdGV4dCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGRpYWxvZyA9IGRpYWxvZy53aXRoTWVtb3J5KG5ld1VzZXJNZW1vcnkpO1xyXG5cclxuICAgICAgICBsZXQgdGhvdWdodFByb2Nlc3MgPSBkaWFsb2c7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9jZXNzIG9mIGludGVybWVkaWF0ZVRob3VnaHRQcm9jZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB0aG91Z2h0UHJvY2VzcyA9IGF3YWl0IHRob3VnaHRQcm9jZXNzLm5leHQoQWN0aW9uLklOVEVSTkFMX01PTk9MT0dVRSwge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBwcm9jZXNzLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBTdGVmYW4gaW50ZXJuYWxseSB0aGlua3MgYWJvdXQgdGhlIGNsYXNzYCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXFxuXCIsIGJsdWVwcmludC5uYW1lLCBwcm9jZXNzLCB0aG91Z2h0UHJvY2Vzcy52YWx1ZSwgXCJcXG5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNheXMgPSBhd2FpdCB0aG91Z2h0UHJvY2Vzcy5uZXh0KEFjdGlvbi5FWFRFUk5BTF9ESUFMT0csIHtcclxuICAgICAgICAgICAgYWN0aW9uOiBcInNheXNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGB3aGF0ICR7Ymx1ZXByaW50Lm5hbWV9IGNvbW11bmljYXRlcyBuZXh0IGluIHRoZSBjbGFzc2AsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgbmV3QXNzaXN0YW50TWVtb3J5ID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvbGU6IENoYXRNZXNzYWdlUm9sZUVudW0uQXNzaXN0YW50LFxyXG4gICAgICAgICAgICBjb250ZW50OiBzYXlzLnZhbHVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZGlhbG9nID0gZGlhbG9nLndpdGhNZW1vcnkobmV3QXNzaXN0YW50TWVtb3J5KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgXCJcXG49PT09PlwiLFxyXG4gICAgICAgICAgICBibHVlcHJpbnQubmFtZSxcclxuICAgICAgICAgICAgXCJzYXlzXCIsXHJcbiAgICAgICAgICAgIGBcXHgxYlszNG0ke3NheXMudmFsdWV9XFx4MWJbMG1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVzc2FnZTogc2F5cy52YWx1ZSwgc3VjY2Vzczp0cnVlfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlY2lzaW9uID0gYXdhaXQgZGlhbG9nLm5leHQoQWN0aW9uLkRFQ0lTSU9OLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbjogXCJkZWNpZGVzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgQ29uc2lkZXIgdGhlIHByaW9yIGRpYWxvZyBhbmQgdGhlIGdvYWwgb2YgJHtnb2FsfS4gJHtibHVlcHJpbnQubmFtZX0gaGFzIHRoZSBmb2xsb3dpbmcgSU5URVJOQUwgTUVUQUNPR05JVElPTjogWyR7aW50ZXJtZWRpYXRlVGhvdWdodFByb2Nlc3N9XS4gU2hvdWxkIHRoZSBJTlRFUk5BTCBNRVRBQ09HTklUSU9OIGNoYW5nZSBvciBzdGF5IHRoZSBzYW1lP2AsXHJcbiAgICAgICAgICAgIGNob2ljZXM6IFtcImNoYW5nZVRob3VnaHRQcm9jZXNzXCIsIFwia2VlcFByb2Nlc3NUaGVTYW1lXCJdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGJsdWVwcmludC5uYW1lLCBcImRlY2lkZXNcIiwgZGVjaXNpb24udmFsdWUpO1xyXG4gICAgICAgIGlmIChkZWNpc2lvbi52YWx1ZSA9PT0gXCJjaGFuZ2VUaG91Z2h0UHJvY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2Nlc3MgPSBhd2FpdCBkZWNpc2lvbi5uZXh0KEFjdGlvbi5CUkFJTlNUT1JNX0FDVElPTlMsIHtcclxuICAgICAgICAgICAgYWN0aW9uc0ZvcklkZWE6XHJcbiAgICAgICAgICAgICAgICBgUHJldmlvdXNseSwgU3RlZmFuIHVzZWQgdGhlIGZvbGxvd2luZyBJTlRFUk5BTCBNRVRBQ09HTklUSU9OIHRvIHRoaW5rIGR1cmluZyB0aGUgY2xhc3M6IFske2ludGVybWVkaWF0ZVRob3VnaHRQcm9jZXNzfV0uIE5vdywgUkVWSVNFIHRoZSBJTlRFUk5BTCBNRVRBQ09HTklUSU9OLCBhZGRpbmcsIGRlbGV0aW5nLCBvciBtb2RpZnlpbmcgdGhlIHByb2Nlc3Nlcy4gVGhlIHJldmlzZWQgcHJvY2Vzc2VzIG11c3QgYmUgZGlmZmVyZW50IHRoYW4gdGhlIHByaW9yIG9uZXMuYC50cmltKCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpbnRlcm1lZGlhdGVUaG91Z2h0UHJvY2VzcyA9IG5ld1Byb2Nlc3MudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJsdWVwcmludC5uYW1lLCBcImNvbmNsdWRlc1wiLCBpbnRlcm1lZGlhdGVUaG91Z2h0UHJvY2Vzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkRGlhbG9nTGluZShtZXNzYWdlKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBybC5vbihcImxpbmVcIiwgYXN5bmMgKGxpbmUpID0+IHtcclxuLy8gICBpZiAobGluZS50b0xvd2VyQ2FzZSgpID09PSBcImV4aXRcIikge1xyXG4vLyAgICAgcmwuY2xvc2UoKTtcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgY29uc3QgdGV4dCA9IGxpbmU7XHJcbi8vICAgICBhZGREaWFsb2dMaW5lKHRleHQpO1xyXG4vLyAgIH1cclxuLy8gfSk7XHJcblxyXG4iXSwibmFtZXMiOlsiQ2hhdE1lc3NhZ2VSb2xlRW51bSIsIkNvcnRleFN0ZXAiLCJBY3Rpb24iLCJCbHVlcHJpbnRzIiwiTW9kZWwiLCJibHVlcHJpbnQiLCJsYW5ndWFnZVByb2Nlc3NvciIsIkdQVF8zXzVfdHVyYm8iLCJuYW1lIiwiZXNzZW5jZSIsInBlcnNvbmFsaXR5IiwiaW5pdGlhbFBsYW4iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWVzc2FnZSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwiZ29hbCIsImluaXRpYWxNZW1vcnkiLCJyb2xlIiwiU3lzdGVtIiwiY29udGVudCIsImRpYWxvZyIsIndpdGhNZW1vcnkiLCJpbnRlcm1lZGlhdGVUaG91Z2h0UHJvY2VzcyIsImFkZERpYWxvZ0xpbmUiLCJ0ZXh0IiwibmV3VXNlck1lbW9yeSIsIlVzZXIiLCJ0aG91Z2h0UHJvY2VzcyIsIm5leHQiLCJJTlRFUk5BTF9NT05PTE9HVUUiLCJhY3Rpb24iLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwic2F5cyIsIkVYVEVSTkFMX0RJQUxPRyIsIm5ld0Fzc2lzdGFudE1lbW9yeSIsIkFzc2lzdGFudCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZGVjaXNpb24iLCJERUNJU0lPTiIsImNob2ljZXMiLCJuZXdQcm9jZXNzIiwiQlJBSU5TVE9STV9BQ1RJT05TIiwiYWN0aW9uc0ZvcklkZWEiLCJ0cmltIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/send.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/send.js"));
module.exports = __webpack_exports__;

})();