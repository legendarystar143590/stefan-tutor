// Chat.js
import React, { useState, useEffect, useRef } from "react";
import { CortexStep, useSoul, ThoughtFramework, Blueprints, ChatMessageRoleEnum, Soul, Model } from "socialagi";
import send from "@/pages/api/send";
let step = new CortexStep("The best mathematic tutor");

function Chat() {
  
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([{ sender: "start", text: "Welcome to my class. I'm Stefan, the best tutor in the world. Please tell me what you want to learn today?" }]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSendMessage = (event) => {
    event.preventDefault();
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
        setMessages((messages) => [
          ...messages,
          { sender: "start", text: data.message },
        ]);
        setLoading(false)

      } else {
        console.log("FAIL");
      }
  }
  const scrollToBottom = () => {
    const cont = document.querySelector("#cont");
    cont.scrollTop = cont.scrollHeight;
  };
 
  useEffect(() => {
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
