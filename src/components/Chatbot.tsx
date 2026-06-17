import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Anchor, Compass, Heart, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Splash! 🧜‍♀️ Welcome to Voonna Jenila's ocean domain! I'm Marina, her friendly mermaid AI companion. Ask me anything about her Machine Learning voyages, Computer Vision projects, or academic treasures!",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to end of conversations
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    if (!textToSend) {
      setInputValue("");
    }

    // Add user message
    const newMessages = [...messages, { role: "user" as const, content: text }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        throw new Error("Ocean current failed to deliver the response.");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.text }]);
    } catch (error) {
      console.error("Chatbot transmission error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "A sudden undersea current interrupted our link. Let me adjust my sea shells—please try sending your pearl of wisdom again! 🐚",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestClick = (suggestion: string) => {
    handleSend(suggestion);
  };

  const suggestions = [
    "Tell me about her AI Projects!",
    "Show me her Skills & Tooling",
    "Where did she do her AI/ML Internship?"
  ];

  return (
    <div id="mermaid-assistant" className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            className="w-[340px] sm:w-[380px] h-[500px] glass-card border border-white/10 rounded-2xl flex flex-col overflow-hidden mb-4 shadow-[0_20px_50px_rgba(6,182,212,0.3)] relative z-20 backdrop-blur-2xl"
          >
            {/* Header section with water rays background */}
            <div className="p-4 bg-gradient-to-r from-cyan-950/80 to-blue-950/85 border-b border-white/5 flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(110deg,transparent,transparent_20px,rgba(34,211,238,0.25)_30px,transparent_40px)] pointer-events-none" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-400/20 border border-cyan-400/50 flex items-center justify-center relative overflow-hidden shrink-0 shadow-[0_0_12px_rgba(34,211,238,0.4)]">
                  {/* Miniature Mermaid SVG representing Marina */}
                  <svg viewBox="0 0 100 100" className="w-8 h-8 text-cyan-300 animate-pulse">
                    {/* Crown */}
                    <path d="M40 18 L50 8 L60 18 L50 21 Z" fill="currentColor" />
                    <circle cx="50" cy="5" r="1.5" fill="currentColor" />
                    {/* Elegant Face */}
                    <circle cx="50" cy="30" r="8" fill="currentColor" />
                    {/* Hair */}
                    <path d="M38 30 C30 42, 32 60, 42 68" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M62 30 C70 42, 68 60, 58 68" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Torso */}
                    <path d="M44 38 L56 38 C56 50, 54 55, 52 58 L48 58 C46 55, 44 50, 44 38 Z" fill="currentColor" />
                    {/* Tail */}
                    <path d="M50 56 Q55 68, 42 78 T50 92 Q53 82, 50 56" fill="currentColor" />
                    {/* Fins */}
                    <path d="M50 92 C44 94, 36 88, 40 82 C45 86, 48 90, 50 92 Z" fill="currentColor" />
                    <path d="M50 92 C56 94, 64 88, 60 82 C55 86, 52 90, 50 92 Z" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300 font-display flex items-center gap-1">
                    Marina
                    <span className="text-[10px] uppercase tracking-wider bg-cyan-400/10 text-cyan-400 px-1.5 py-0.5 rounded border border-cyan-400/20 font-mono">
                      Mermaid AI
                    </span>
                  </h4>
                  <p className="text-[10px] text-cyan-200/50 font-mono">Undersea Guide Node</p>
                </div>
              </div>
              <button
                id="close-mermaid-assistant"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-white/5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body messages stream */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-br from-cyan-500/15 via-blue-900/20 to-indigo-950/20 border border-cyan-500/25 text-cyan-50 rounded-tr-none ml-8 shadow-[0_4px_12px_rgba(6,182,212,0.1)]"
                        : "bg-white/5 border border-white/10 text-gray-100 rounded-tl-none mr-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-3 text-xs max-w-[85%] rounded-tl-none mr-8 shadow-inner flex items-center gap-2 text-cyan-300/70 font-mono">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Marina dives into data reefs...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Suggestions panel */}
            {messages.length === 1 && !isLoading && (
              <div className="px-4 pb-1 pt-2 space-y-2">
                <p className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/50 px-1">
                  💡 Pearls to investigate
                </p>
                <div className="flex flex-col gap-1.5">
                  {suggestions.map((sug) => (
                    <button
                      key={sug}
                      onClick={() => handleSuggestClick(sug)}
                      className="w-full text-left p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-400/30 text-[11px] text-cyan-200/80 transition-all font-sans block truncate"
                    >
                      ⚓ {sug}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat Input Console for messages dispatch */}
            <div className="p-3 border-t border-white/5 bg-black/20">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  id="assistant-textbox"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isLoading}
                  placeholder="Ask Marina about Voonna's code..."
                  className="flex-1 px-3.5 py-2 rounded-xl bg-white/5 text-white text-xs placeholder:text-gray-500 border border-white/10 focus:border-cyan-400/40 focus:outline-none transition-all font-sans"
                />
                <button
                  id="assistant-send-button"
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-[#020b18] hover:scale-105 active:scale-95 disabled:scale-100 disabled:opacity-40 transition-all cursor-pointer shadow-[0_0_12px_rgba(6,182,212,0.3)] shrink-0 flex items-center justify-center"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating launcher launcher button representing glowing Mermaid */}
      <motion.button
        id="toggle-mermaid-assistant-button"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#020b18]/90 to-cyan-950/95 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 hover:text-white cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all overflow-hidden group"
      >
        {/* Animated breathing/pulse outer glow indicator */}
        <span className="absolute inset-0 rounded-full border border-cyan-400 animate-ping opacity-35" />

        {/* Ambient Sea Waves background effect within the bubble */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.8),transparent)] pointer-events-none" />

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="mermaid-icon"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              className="flex items-center justify-center w-full h-full"
            >
              {/* Premium custom high fidelity Mermaid SVG vector */}
              <svg viewBox="0 0 100 100" className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 drop-shadow-[0_0_6px_currentColor]">
                {/* Crown */}
                <path d="M40 18 L50 8 L60 18 L50 21 Z" fill="currentColor" />
                <circle cx="50" cy="5" r="1.5" fill="currentColor" />
                {/* Elegant Face */}
                <circle cx="50" cy="30" r="8" fill="currentColor" />
                {/* Hair Flowing */}
                <path d="M38 30 C30 42, 32 60, 42 68" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M62 30 C70 42, 68 60, 58 68" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M45 20 C25 20, 20 50, 35 70 C30 55, 32 40, 45 35" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                <path d="M55 20 C75 20, 80 50, 65 70 C70 55, 68 40, 55 35" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                {/* Torso */}
                <path d="M44 38 L56 38 C56 50, 54 55, 52 58 L48 58 C46 55, 44 50, 44 38 Z" fill="currentColor" />
                {/* Tail scaling contour */}
                <path d="M50 56 Q55 68, 42 78 T50 92 Q53 82, 50 56" fill="currentColor" />
                {/* Split Fins */}
                <path d="M50 92 C44 94, 36 88, 40 82 C45 86, 48 90, 50 92 Z" fill="currentColor" />
                <path d="M50 92 C56 94, 64 88, 60 82 C55 86, 52 90, 50 92 Z" fill="currentColor" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
