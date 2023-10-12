// Chat.js
import React, { useState, useEffect, useRef } from "react";
import { CortexStep, useSoul, ThoughtFramework, Blueprints, ChatMessageRoleEnum, Soul, Model } from "socialagi";

let step = new CortexStep("The best mathematic tutor");



function Chat() {
  
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([{ sender: "start", text: "Welcome to my class. I'm Stefan, the best tutor in the world. Please tell me what you want to learn today?" }]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const soulMessagesEndRef = useRef(null);
  const [soulThoughts, setSoulThoughts] = useState(
    [{ sender: "start", text: "Welcome to my class. I'm Stefan, the best tutor in the world. Please tell me what you want to learn today?" }]
  );
  
  const scrollToBottomThoughts = () => {
    soulMessagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
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
        setSoulThoughts((messages=> [
          ...messages,
          {sender:"start", text: `Stefan feels: ${data.feels}`},
        ]));
        setSoulThoughts((messages=> [
          ...messages,
          {sender:"start", text: `Stefan decides: ${data.decides}`},
        ]));
        setSoulThoughts((messages=> [
          ...messages,
          {sender:"start", text: `Stefan sent message: ${data.message}`},
        ]));
        setLoading(false);
      }
      
  }
  const scrollToBottom = () => {
    const cont = document.querySelector("#cont");
    cont.scrollTop = cont.scrollHeight;
  };
 
  useEffect(() => {
    setTimeout(() => scrollToBottom(), 100);
  }, [messages]);
  useEffect(()=> {
    scrollToBottomThoughts();
  }, [soulThoughts]);
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 relative flex justify-center">
      <div className="flex container px-4 py-12 justify-center">
        <div>
          <h1 className={`text-4xl text-white font-semibold mb-4 text-center pb-7 orbitron`}>
              MEET STEFAN
          </h1>
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-96" ref={messagesEndRef}>
            <div className="flex flex-col space-y-4 h-96 overflow-y-auto mb-4 min-h-40 hide-scrollbar"  id="cont">
              {/* <div className="chat chat-start">
                  <div className="chat-bubble">It's over Anakin, <br/>I have the high ground.</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble"></div>
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
            <div />
            <div>
              <div className="flex flex-row">
                <div className="basis-10/12">
                  <input className="text-black w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Bio"  disabled={loading}
                      onKeyDown={e=>e.keyCode==13?handleSendMessage(e):""}
                      value={message} onChange={e=>setMessage(e.target.value)}/>
                </div> 
                    <button className="rounded-lg bg-purple-600 text-white px-4 py-2 font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600" onClick={handleSendMessage}><i className="fa fa-send"></i></button>
              </div>
            </div>
          </div>
          
        </div>
        <div className="bg-white bg-opacity-0 rounded-lg w-96">
          <div className="h-full overflow-y-auto fixed ml-10 w-96 mx-auto hide-scrollbar">
            <div className="flex-col space-y-4 overflow-y-auto mb-4 hide-scrollbar pb-60 mr-4">
              {soulThoughts.map((message, index) => (
                <div
                  key={index}
                  className="flex justify-end"
                >
                <div
                  className={`text-white bg-purple-100 bg-opacity-30 px-4 py-2 rounded-[35px] shadow-sm opacity-0 transition-all duration-500 ease-in-out animate-fade-in`}
                  >
                  {message.text}
                  </div>
                </div>
              ))}
              <div ref={soulMessagesEndRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default function ChatApp() {
  return <Chat />;
}
