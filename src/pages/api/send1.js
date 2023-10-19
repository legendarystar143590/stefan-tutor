
import {ChatMessageRoleEnum, CortexStep, Action, CortexScheduler, OpenAILanguageProgramProcessor} from "socialagi";


const blueprint = {
    name: "Stefan",
    essence: "World's Best Tutor",
    personality: `Stefan's primary goal is to make learning an unforgettable journey. He is the best 6th grade mathematics tutor in the world.\
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
        - Reply with as short sentences as possible\
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

const teachingSteps = ["Suggest a new topic", "Introduce the topic briefly", "Explain the definition with a real world example"];

let stepIndex = 0;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const goal = `Teaching the user about the topic like the best tutor in the real classroom`;
let initialMemory = [
    {
        role: ChatMessageRoleEnum.System,
        content: `<CONTEXT>You are modeling the mind of ${blueprint.name}\
        ${blueprint.personality}\
        ${blueprint.name} has the following goal of: ${goal}</CONTEXT>`,
    },
]; 
let dialog = new CortexStep(blueprint.name, {processor: new OpenAILanguageProgramProcessor({},{model:"GPT_3_5_turbo_16k_0613"})});

function init(){
  
}
export default async function handler(req, res){
    const message = req.body.message;
    const index = req.body.index;
    
    // const blueprint = Blueprints.SAMANTHA;

    let says = "";
    let feels = "";
    let decides = "";
    let thoughtProcess = null;
    if(stepIndex==0){
        dialog = dialog.withMemory(initialMemory);
    }
    if(index ==0){
        
    }

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
        action: "thinks of user's reply",
        description: `Thinks to themselves about internally A:`,
    });
    console.log("\n", blueprint.name, thoughtProcess.value, "\n");
    feels = thoughtProcess.value;
    await sleep(20000);

    const decision = await thoughtProcess.next(Action.DECISION, {
        action: "decides",
        description: `Q: Decises if Stefan got the goal of ${teachingSteps[stepIndex]} or User understands the step based on the last message? A:`,
        choices: ["yes", "no"],
    });
    console.log("\n", blueprint.name, decision.value, "\n");
    await sleep(20000);

    if(decision.value=="yes"){
        decides = "Stefan decides to move forward the lesson."
        if(stepIndex==2){
            stepIndex=0;
            says = await thoughtProcess.next(Action.EXTERNAL_DIALOG, {
                action: "says",
                description: `Suggest to ${teachingSteps[stepIndex]} newly.`,
            });
        } else{
            stepIndex+=1;
            says = await thoughtProcess.next(Action.EXTERNAL_DIALOG, {
                action: "says",
                description: `Give a compliment for good understanding and suggest to ${teachingSteps[stepIndex]} and give a question to see if user understands his sayings or not in the last.`,
            });
        }
        says = await thoughtProcess.next(Action.EXTERNAL_DIALOG, {
            action: "says",
            description: `Q:Suggest to ${teachingSteps[stepIndex]} and give a question to see if user understands his sayings or not in the last. A:`,
        });
    } else {
        decides = "Stefan decides to explain again.";
        if(stepIndex==0){
            says = await thoughtProcess.next(Action.EXTERNAL_DIALOG, {
                action: "says",
                description: `Suggest a new lesson topic in 6th grade mathematics lecture and ask if you agree with the topic or not.`,
            });
        }
        says = await thoughtProcess.next(Action.EXTERNAL_DIALOG, {
            action: "says",
            description: `Suggest to ${teachingSteps[stepIndex]} in other way and give a question to see if user understands his sayings or not in the last.`,
        });
    }
        
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

        await sleep(20000);
        console.log(stepIndex);

        res.status(200).json({message: says.value, success:true, feels: feels, decides:decides});

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

