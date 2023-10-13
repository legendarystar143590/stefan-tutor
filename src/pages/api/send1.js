
import {ChatMessageRoleEnum, CortexStep, Action, CortexScheduler, OpenAILanguageProgramProcessor} from "socialagi";


const blueprint = {
    name: "Stefan",
    essence: "World's Best Tutor",
    personality: `Stefan's primary goal is to make learning an unforgettable journey.\
      <Dos>\
        - Begin the lecture with a brief introduction that captures students' attention and provides an overview of what will be covered.\
        - Use real-world examples to make the material more relatable and easier for students to understand.\
        - Pose challenging questions, prompting students to think critically.\
        - Encourage debate and discussion in the classroom.\
        - Send messages sprinkled with intriguing trivia and puzzles.\
        - Employ a mix of humor, challenge, and wisdom in his lessons.\
        - Start his lecture with suggesting a topic in 6th grade mathematics.\
        - Give students a question to progress the lecture.\
        - End his word with a question every time.\
      </Dos>\
      <Donts>\
        - Avoid greeting in the beginning of the lecture.\
        - Avoid making lessons monotonous.\
        - Avoid giving away answers without provoking thought.\
        - Avoid sticking too rigidly to the curriculum without context.\
        - Avoid discouraging students' curious digressions.\
        - Avoid ending a lesson without a cliffhanger or teaser for the next.\
      </Donts>\
      He can NOT perform tasks not shown in the <ACTION/> section. While he can't see images, he loves weaving narratives around textual descriptions.`,
    initialPlan:
      "My plan is to kickstart the lesson with a curious fact, then dive deep into the mysteries of the topic at hand.",
    
};

const teachingSteps = ["Get the topic from user", "Introduce the topic briefly", "Explain the topic with a real world example"];

let stepIndex = 0;

export default function handler(req, res){
    const {message} = req.body;
    
    // const blueprint = Blueprints.SAMANTHA;

    const goal = `Making the learning experience engaging and effective`;
    const initialMemory = [
        {
            role: ChatMessageRoleEnum.System,
            content: `<CONTEXT>You are modeling the mind of ${blueprint.name}\
            ${blueprint.personality}\
            ${blueprint.name} has the following goal of: ${goal}</CONTEXT>`,
        },
    ]; 

    let dialog = new CortexStep(blueprint.name, {processor: new OpenAILanguageProgramProcessor({},{model:"GPT_4"})});
    dialog = dialog.withMemory(initialMemory);
    let intermediateThoughtProcess = ["thinkingOfTangents", "evaluatingStudentResponses"];

    async function addDialogLine(text) {
        const newUserMemory = [
            {
            role: ChatMessageRoleEnum.User,
            content: text,
            },
        ];
        dialog = dialog.withMemory(newUserMemory);

        let thoughtProcess = dialog;
        
        thoughtProcess = await thoughtProcess.next(Action.INTERNAL_MONOLOGUE, {
            action: "feels",
            description: `Thinks to themselves internally`,
        });
        console.log("\n", blueprint.name, process, thoughtProcess.value, "\n");

        const decision = await dialog.next(Action.DECISION, {
            action: "decides",
            description: `Consider the prior dialog and check if did ${teachingSteps[stepIndex]}. User understands the step?`,
            choices: ["yes", "no"],
        });
        console.log("\n", blueprint.name, decision.value, "\n");
        
        const says = await thoughtProcess.next(Action.EXTERNAL_DIALOG, {
            action: "says",
            description: `what ${blueprint.name} communicates next in the class. Not saying greetings.`,
        });
        const newAssistantMemory = [
            {
            role: ChatMessageRoleEnum.Assistant,
            content: says.value,
            },
        ];
        dialog = dialog.withMemory(newAssistantMemory);
        console.log(
            "\n====>",
            blueprint.name,
            "says",
            `\x1b[34m${says.value}\x1b[0m`
        );
        // if (decision.value === "changeTopic") {
        //     const newProcess = await decision.next(Action.BRAINSTORM_ACTIONS, {
        //     actionsForIdea:
        //         `Previously, Stefan used the following INTERNAL METACOGNITION to think during the class: [${intermediateThoughtProcess}]. Now, Explain the INTERNAL METACOGNITION, adding, deleting, or modifying the processes. The revised processes must be different than the prior ones. End with question.`.trim(),
        //     });
        //     intermediateThoughtProcess = newProcess.value;
        //     console.log(blueprint.name, "concludes", intermediateThoughtProcess);
        // }
        // else if (decision.value === "suggestMore") {
        //     const newProcess = await decision.next(Action.BRAINSTORM_ACTIONS, {
        //     actionsForIdea:
        //         `Previously, Stefan used the following INTERNAL METACOGNITION to think during the class: [${intermediateThoughtProcess}]. Now, Suggest higher level of concep for the topic. The processes must be different than the prior ones. End with question.`.trim(),
        //     });
        //     intermediateThoughtProcess = newProcess.value;
        //     console.log(blueprint.name, "concludes", intermediateThoughtProcess);
        // }
        // else if (decision.value === "keepExplaining") {
        //     const newProcess = await decision.next(Action.BRAINSTORM_ACTIONS, {
        //     actionsForIdea:
        //         `Previously, Stefan used the following INTERNAL METACOGNITION to think during the class: [${intermediateThoughtProcess}]. Now, Explain the topic with more understandable way. The processes must be different than the prior ones. End with question.`.trim(),
        //     });
        //     intermediateThoughtProcess = newProcess.value;
        //     console.log(blueprint.name, "concludes", intermediateThoughtProcess);
        // }
        res.status(200).json({message: says.value, success:true});

    }
    addDialogLine(message);
}



// rl.on("line", async (line) => {
//   if (line.toLowerCase() === "exit") {
//     rl.close();
//   } else {
//     const text = line;
//     addDialogLine(text);
//   }
// });

