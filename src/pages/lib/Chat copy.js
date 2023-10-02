// Chat.js
import React, { useState, useEffect, useRef } from "react";
import { CortexStep, useSoul, ThoughtFramework, Blueprints, ChatMessageRoleEnum, Soul, Model } from "socialagi";
import send from "@/pages/api/send";
let step = new CortexStep("The best mathematic tutor");

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


function Chat() {
  const { tellSoul, messages1, soulThoughts } = useSoul({
    blueprint: blueprint
  });
  
  // var [reply, setReply] = useState("");
  // messages1.map((msg)=>{
  //   setReply(msg);
  // })
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const soulMessagesEndRef = useRef(null);

  const handleSendMessage = (event) => {
    event.preventDefault();
    // tellSoul(message);
    sendMessage(message);
    if (message.trim() !== "") {
      setMessage("");
    }
  };

  async function sendMessage(message) {
    setMessages([...messages, { sender: "user", text: message }]);
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
    
      const data = await res.json();
    
      if (data.success) {
        // Handle success
        console.log("SUCCESS");
        setMessages((messages) => [
          ...messages,
          { sender: "user", text: message },
          { sender: "assistant", text: response },
        ]);
      } else {
        console.log("FAIL");
        // Handle error
      }
  }
  const scrollToBottomThoughts = () => {
    soulMessagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
 
  // useEffect(() => {
  //   scrollToBottomThoughts();
  // }, [soulThoughts]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 relative flex justify-center">
      <div className="flex container px-4 py-12 justify-center">
        <div>
          <h1
            className={`text-4xl text-white font-semibold mb-4 text-center pb-7 orbitron`}
          >
            Social AGI
          </h1>
          <Messages
            handleMessageChange={handleMessageChange}
            message={message}
            messages={messages}
            handleSendMessage={handleSendMessage}
          />
        </div>
        {/* <SoulThoughts
          soulThoughts={soulThoughts}
          soulMessagesEndRef={soulMessagesEndRef}
        /> */}
      </div>
    </div>
  );
}

function Messages({
  handleMessageChange,
  message,
  reply,
  handleSendMessage,
}) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setTimeout(() => scrollToBottom(), 100);
    setTimeout(() => scrollToBottom(), 250);
  }, [reply]);
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-96">
      <h1 className="text-xl font-semibold mb-4 text-center">
        Share with Stefan
      </h1>
      <div className="flex flex-col space-y-4 h-96 overflow-y-auto mb-4 min-h-40 hide-scrollbar">
        <div className={`flex ${
              message.sender === "user" ? "justify-end" : ""
            }`}>

            <img
              src={"/samantha.png"}
              style={{
                height: "35px",
                width: "35px",
                objectFit: "cover",
                borderRadius: "50%",
                marginRight: 7,
                marginTop: 2,
              }}
              alt="description"
            />
            <div
              className={`${
                message.sender === "assistant"
                  ? "bg-purple-200 text-black"
                  : "bg-purple-600 text-white"
              } px-4 py-2 rounded-lg shadow-md`}
            >
              {message.text}
            </div>
          </div>
        <div />
        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={handleSendMessage}
        className="flex items-center space-x-4"
      >
        <input
          type="text"
          className="text-black w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Type your message here..."
          value={message}
          onChange={handleMessageChange}
        />
        <button
          type="submit"
          className="rounded-lg bg-purple-600 text-white px-4 py-2 font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          Send
        </button>
      </form>
    </div>
  );
}

// function SoulThoughts({ soulThoughts, soulMessagesEndRef }) {
//   return (
//     <div className="bg-white bg-opacity-0 rounded-lg w-96">
//       <div className="h-full overflow-y-auto fixed ml-10 w-96 mx-auto hide-scrollbar">
//         <div className="flex-col space-y-4 overflow-y-auto mb-4 hide-scrollbar pb-60 mr-4">
//           {soulThoughts.map((message, index) => (
//             <div
//               key={index}
//               className={`flex ${
//                 message.sender === "soul" ? "" : "justify-end"
//               }`}
//             >
//               <div
//                 className={`text-white bg-purple-100 bg-opacity-30 px-4 py-2 rounded-[35px] shadow-sm opacity-0 transition-all duration-500 ease-in-out animate-fade-in`}
//               >
//                 {message.text}
//               </div>
//             </div>
//           ))}
//           <div ref={soulMessagesEndRef} />
//         </div>
//       </div>
//     </div>
//   );
// }

export default function ChatApp() {
  return <Chat />;
}
