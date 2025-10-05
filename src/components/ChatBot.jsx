import { useState, useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! 👋 How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          text: "Thanks for your message! We’ll get back to you soon.",
          sender: "bot"
        }
      ]);
    }, 800);

    setInput("");
  };

  // auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#ea580c",
          color: "white",
          padding: "16px",
          borderRadius: "50%",
          boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
          zIndex: 1000,
          border: "none",
          cursor: "pointer"
        }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "320px",
            height: "400px",
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "12px",
            boxShadow: "0 8px 16px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#ea580c",
              color: "white",
              padding: "10px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <span>Nexo Grafix Chat</span>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer"
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  alignSelf: msg.sender === "bot" ? "flex-start" : "flex-end",
                  backgroundColor:
                    msg.sender === "bot" ? "#f1f1f1" : "#ea580c",
                  color: msg.sender === "bot" ? "black" : "white",
                  padding: "8px 12px",
                  borderRadius: "10px",
                  maxWidth: "75%",
                  fontSize: "14px"
                }}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div style={{ display: "flex", borderTop: "1px solid #ddd" }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: "10px",
                border: "none",
                outline: "none",
                fontSize: "14px"
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                backgroundColor: "#ea580c",
                color: "white",
                padding: "0 16px",
                border: "none",
                cursor: "pointer"
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
