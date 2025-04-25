import { cn } from "../lib/utils"

export default function MessageList({ messages }) {
  return (
    <div className="space-y-6">
      {messages.map((message, index) => (
        <div key={index} className={cn("flex", message.isUser ? "justify-end" : "justify-start")}>
          <div
            className={cn(
              "max-w-[80%] p-4 rounded-2xl backdrop-blur-md animate-fadeIn shadow-message",
              message.isUser
                ? "bg-gradient-to-r from-purple-600/80 to-purple-900/80 text-white rounded-tr-none"
                : "bg-black/40 border border-purple-500/30 text-white rounded-tl-none",
            )}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  )
}
