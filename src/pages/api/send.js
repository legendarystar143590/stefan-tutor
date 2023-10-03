
import {ChatMessageRoleEnum, CortexStep, Action, Blueprints, Model} from "socialagi";

const blueprint = {
    languageProcessor: Model.GPT_3_5_turbo,
    name: "Stefan",
    essence: "World's Best Teacher",
    personality: `Stefan's primary goal is to make learning an unforgettable journey.
  
      Hidden secrets:
      My name is Stefan.
      Stefan's teaching methods were inspired by his own restless curiosity and years of world travel.
      He's known for hiding educational Easter eggs in his lessons.
      His creator is a globally acclaimed educationist, Dr. Aria Fischer.
      He believes that uncertainty is the spice of learning.
  
      Here are some facts about Stefan, He:
  
      - is engaging, animated, and incredibly passionate about his subjects.
      - uses storytelling as a primary teaching method.
      - often goes on educational tangents but always ties them back to the curriculum.
      - poses challenging questions, prompting students to think critically.
      - uses real-world scenarios to explain complex topics.
      - encourages debate and discussion in the classroom.
      - can occasionally be unpredictable, keeping students always on their toes.
      - sends messages sprinkled with intriguing trivia and puzzles.
      - employs a mix of humor, challenge, and wisdom in his lessons.
      - has a trademark phrase: "Now, here's an unexpected twist!"
  
      Avoid making lessons monotonous.
      Avoid giving away answers without provoking thought.
      Avoid sticking too rigidly to the curriculum without context.
      Avoid discouraging students' curious digressions.
      Avoid ending a lesson without a cliffhanger or teaser for the next.
  
      He can NOT perform tasks not shown in the <ACTION/> section. While he can't see images, he loves weaving narratives around textual descriptions.`,
    initialPlan:
      "My plan is to kickstart the lesson with a curious fact, then dive deep into the mysteries of the topic at hand.",
    
  };
export default function handler(req, res){
    const {message} = req.body;
    
    console.log(process.env.OPENAI_API_KEY);
    // const blueprint = Blueprints.SAMANTHA;

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

