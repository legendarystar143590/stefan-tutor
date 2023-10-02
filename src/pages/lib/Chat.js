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
  const [messages, setMessages] = useState([{ sender: "start", text: "Welcome to my class. I'm Stefan, the best tutor in the world. Please tell me what you want to learn today?" }]);
  // const soulMessagesEndRef = useRef(null);
  const messagesEndRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const handleSendMessage = (event) => {
    event.preventDefault();
    // tellSoul(message);
    sendMessage(message);
    if (message.trim() !== "") {
      setMessage("");
    }
  };

  async function sendMessage(message) {
      setMessages([...messages, { sender: "end", text: message }]);
      setLoading(true)

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
        // console.log("SUCCESS");
        setMessages((messages) => [
          ...messages,
          // { sender: "start", text: message },
          { sender: "start", text: data.message },
        ]);
        setLoading(false)

      } else {
        console.log("FAIL");
        // Handle error
      }
  }
  const scrollToBottom = () => {
    // messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    const cont = document.querySelector("#cont")
    // window.scrollTo(0, cont.scrollHeight);
    cont.scrollTop = cont.scrollHeight;
  };
 
  useEffect(() => {
    // scrollToBottomThoughts();
    setTimeout(() => scrollToBottom(), 100);

  }, [messages]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <div className="h-screen relative  justify-center mx-20 2xl:mx-80 2xl:px-20 py-10 bg-white">
      <div className="h-5/6 overflow-y-scroll px-4" ref={messagesEndRef} id="cont">
        {/* <div className="chat chat-start">
          <div className="chat-bubble">It's over Anakin, <br/>I have the high ground.</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div> */}
        {messages.map((message, i)=>(
          <div key={i}>
            <div className={`chat chat-${message.sender}`}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src={`${message.sender}.png`} />
                </div>
              </div>
              <div className="chat-bubble bg-slate-700">{message.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div>
          {loading?
          <div className="flex">
            <div className="pl-5">Stepan is typing</div> 
            <span className="mt-3 ml-5 dot-flashing"></span>
          </div>:""}
        </div>
        <div className="flex flex-row">
          {/* <div className="basis-10/12"> */}
            <textarea className="textarea textarea-secondary w-5/6 mx-2" placeholder="Bio"  disabled={loading}
                onKeyDown={e=>e.keyCode==13?handleSendMessage(e):""}

                value={message} onChange={e=>setMessage(e.target.value)}></textarea>
          {/* </div> */}
          {/* <div className="basis-2/12"> */}
              <button className="btn btn-accent w-1/6 my-auto" onClick={handleSendMessage}><i className="fa fa-send"></i></button>
          {/* </div> */}
        </div>
      </div>
      
    </div>
  );
}

export default function ChatApp() {
  return <Chat />;
}
