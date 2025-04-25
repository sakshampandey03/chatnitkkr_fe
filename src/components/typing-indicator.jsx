export default function TypingIndicator() {
    return (
      <div className="flex justify-start mt-4">
        <div className="bg-black/40 border border-purple-500/30 text-white rounded-2xl rounded-tl-none p-4 max-w-[80%] backdrop-blur-md shadow-message">
          <div className="flex space-x-2">
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
          </div>
        </div>
      </div>
    )
  }
  