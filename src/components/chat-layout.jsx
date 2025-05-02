"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import Sidebar from "./sidebar"
import MessageList from "./message-list"
import Navbar from "./navbar"
import TypingIndicator from "./typing-indicator"

export default function ChatLayout() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    { text: "Welcome to chatNITKKR! How can I help you today?", isUser: false },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({ name: "John Doe", avatar: "/placeholder.svg?height=100&width=100" })

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      // Add user message
      setMessages(prev => [...prev, { text: input, isUser: true }]);
      setInput("");
      setIsLoading(true);
  
      try {
        const res = await fetch('https://chatnitkkr-production.up.railway.app/query', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: input }) // Changed from 'input' to 'question'
        });
  
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
  
        const data = await res.json(); // Moved inside try block
        setMessages(prev => [...prev, { text: data.response, isUser: false }]);
      } catch (error) {
        setMessages(prev => [...prev, { 
          text: `Error: ${error.message || 'Failed to get response'}`,
          isUser: false 
        }]);
        console.error('API Error:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-900/20 rounded-full filter blur-3xl"></div>
      </div>

      {/* Navbar */}
      <Navbar isLoggedIn={isLoggedIn} user={user} onLogin={handleLogin} onLogout={handleLogout} />

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden relative z-10">
        {/* Sidebar - 20% */}
        <Sidebar />

        {/* Chat area - 80% */}
        <main className="flex-1 flex flex-col bg-black/40 backdrop-blur-md border-l border-purple-500/20">
          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-6 bg-chat-pattern">
            <MessageList messages={messages} />
            {isLoading && <TypingIndicator />}
          </div>

          {/* Input area */}
          <div className="p-4 border-t border-purple-500/20 backdrop-blur-md bg-black/60">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message here..."
                className="flex-1 bg-black/40 border-purple-500/30 text-white placeholder:text-white/50 focus-visible:ring-purple-500 h-12 rounded-full px-6"
              />
              <Button
                type="submit"
                size="icon"
                className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-800 shadow-purple transition-all duration-300"
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}
