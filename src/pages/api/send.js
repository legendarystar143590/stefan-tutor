
import {ChatMessageRoleEnum, CortexStep, Action, Blueprints} from "socialagi";


export default function handler(req, res){
    const {message} = req.body;
    
    console.log(process.env.OPENAI_API_KEY);
    const blueprint = Blueprints.SAMANTHA;

    const goal = `Making the learning experience engaging and effective`;
    const initialMemory = [
        {
            role: ChatMessageRoleEnum.System,
            content: `<CONTEXT>You are modeling the mind of ${blueprint.name}

            ${blueprint.personality}

            ${blueprint.name} has the following goal of: ${goal}

            </CONTEXT>`,
        },
    ]; 

    // const rl = readline.createInterface({
    //   input: process.stdin,
    //   output: process.stdout,
    // });

    let dialog = new CortexStep(blueprint.name);
    dialog = dialog.withMemory(initialMemory);
    let intermediateThoughtProcess = ["assessingEngagement", "thinkingOfTangents", "evaluatingStudentResponses"];

    async function addDialogLine(text) {
        const newUserMemory = [
            {
            role: ChatMessageRoleEnum.User,
            content: text,
            },
        ];
        dialog = dialog.withMemory(newUserMemory);

        let thoughtProcess = dialog;
        for (const process of intermediateThoughtProcess) {
                thoughtProcess = await thoughtProcess.next(Action.INTERNAL_MONOLOGUE, {
                action: process,
                description: `Stefan internally thinks about the class`,
            });
            console.log("\n", blueprint.name, process, thoughtProcess.value, "\n");
        }
        const says = await thoughtProcess.next(Action.EXTERNAL_DIALOG, {
            action: "says",
            description: `what ${blueprint.name} communicates next in the class`,
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
        res.status(200).json({message: says.value, success:true});

        const decision = await dialog.next(Action.DECISION, {
            action: "decides",
            description: `Consider the prior dialog and the goal of ${goal}. ${blueprint.name} has the following INTERNAL METACOGNITION: [${intermediateThoughtProcess}]. Should the INTERNAL METACOGNITION change or stay the same?`,
            choices: ["changeThoughtProcess", "keepProcessTheSame"],
        });
        console.log(blueprint.name, "decides", decision.value);
        if (decision.value === "changeThoughtProcess") {
            const newProcess = await decision.next(Action.BRAINSTORM_ACTIONS, {
            actionsForIdea:
                `Previously, Stefan used the following INTERNAL METACOGNITION to think during the class: [${intermediateThoughtProcess}]. Now, REVISE the INTERNAL METACOGNITION, adding, deleting, or modifying the processes. The revised processes must be different than the prior ones.`.trim(),
            });
            intermediateThoughtProcess = newProcess.value;
            console.log(blueprint.name, "concludes", intermediateThoughtProcess);
        }
    }

    console.log(
    '- Type a message to send to Soul\n- Type "reset" to reset\n- Type "exit" to quit\n'
    );
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

