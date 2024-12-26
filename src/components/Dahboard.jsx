import { useState, useEffect, useRef, useContext } from "react";
import "../styling/dashboard.css";
import { UserContext } from "./UserProvider";

const Dashboard = () => {
  const { userData } = useContext(UserContext);
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = () => {
    let userPrompt = inputRef.current.value;
    setUserInput(userPrompt);
    if (userData && userData._id) {
      const setData = {
        _id: userData._id,
        sender: "user",
        text: userPrompt,
      };
      fetch("http://localhost:3551/chat/history", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(setData),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    inputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setLoading(true);
    const newUserChat = {
      sender: "user",
      text: userInput,
    };
    setChatHistory((prev) => [...prev, newUserChat]);
    setUserInput("");
    try {
      const response = await fetch("http://localhost:3551/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userInput }),
      });
      const data = await response.json();
      const newAiChat = {
        sender: "ai",
        text: data.response,
      };
      setChatHistory((prev) => [...prev, newAiChat]);
      if (userData && userData._id) {
        const setData = {
          _id: userData._id,
          sender: "ai",
          text: data.response,
        };
        fetch("http://localhost:3551/chat/history", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(setData),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const newAiChat = {
        sender: "ai",
        text: "Failed to get response from server",
      };
      setChatHistory((prev) => [...prev, newAiChat]);
      if (userData && userData._id) {
        const setData = {
          _id: userData._id,
          sender: "ai",
          text: "Failed to get response from server",
        };
        fetch("http://localhost:3551/chat/history", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(setData),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="dashboard-container"
      style={{ backgroundColor: "transparent !important" }}
    >
      <div className="chat-area">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`chat-bubble ${
              chat.sender === "user" ? "user-bubble" : "ai-bubble"
            }`}
          >
            {chat.text}
          </div>
        ))}
        {loading && <div className="loading">loading ...</div>}
      </div>
      <form onSubmit={handleSubmit} className="input-area">
        <input type="text" ref={inputRef} placeholder="Type your query..." />
        <button type="submit" onClick={handleInputChange}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
