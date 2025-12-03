import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles, Paperclip, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Halo! Saya asisten AI Anda. Ada yang bisa saya bantu hari ini? Saya bisa membantu Anda merancang website, menulis konten, atau sekadar brainstorming ide.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Itu ide yang menarik! Bisa ceritakan lebih lanjut?",
        "Saya mengerti. Mari kita coba kembangkan konsep tersebut.",
        "Tentu, saya bisa membantu dengan itu. Berikut adalah beberapa saran...",
        "Hmm, saya perlu berpikir sebentar tentang itu. Bagaimana jika kita mencoba pendekatan lain?",
        "Bagus sekali! Apakah Anda ingin saya membuatkan draft untuk itu?",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: randomResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-10 flex flex-col h-[calc(100vh-80px)]">
        <Card className="flex-1 flex flex-col overflow-hidden shadow-xl border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl">
          {/* Chat Header */}
          <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3 bg-white/50 dark:bg-slate-900/50">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Bot size={24} />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg leading-tight">AI Assistant</h1>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Online
              </p>
            </div>
          </div>

          {/* Messages Area */}
          <ScrollArea className="flex-1 p-4 sm:p-6">
            <div className="flex flex-col gap-6 max-w-3xl mx-auto">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border border-slate-200 dark:border-slate-800">
                    {msg.role === "assistant" ? (
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary">
                        <Sparkles size={16} />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-foreground">
                        <User size={16} />
                      </div>
                    )}
                  </Avatar>
                  
                  <div className={`flex flex-col gap-1 max-w-[80%] sm:max-w-[70%] ${msg.role === "user" ? "items-end" : "items-start"}`}>
                    <div
                      className={`px-4 py-2.5 rounded-2xl text-sm sm:text-base leading-relaxed shadow-sm ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-sm"
                          : "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-tl-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                    <span className="text-[10px] text-muted-foreground px-1 opacity-50">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border border-slate-200 dark:border-slate-800">
                    <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary">
                      <Sparkles size={16} />
                    </div>
                  </Avatar>
                  <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl rounded-tl-sm px-4 py-4 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                  </div>
                </motion.div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="max-w-3xl mx-auto relative flex items-end gap-2">
              <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground hover:text-foreground rounded-full">
                <Paperclip size={20} />
              </Button>
              
              <div className="relative flex-1">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Tulis pesan Anda..."
                  className="pr-12 py-6 rounded-full border-slate-200 dark:border-slate-700 focus-visible:ring-primary/20 bg-slate-50 dark:bg-slate-950/50"
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground rounded-full h-8 w-8"
                >
                  <Mic size={18} />
                </Button>
              </div>

              <Button 
                onClick={handleSend} 
                disabled={!input.trim() || isTyping}
                className="shrink-0 rounded-full w-12 h-12 p-0 shadow-md shadow-primary/20"
              >
                <Send size={20} className={input.trim() ? "ml-0.5" : ""} />
              </Button>
            </div>
            <p className="text-center text-[10px] text-muted-foreground mt-3">
              AI dapat membuat kesalahan. Mohon verifikasi informasi penting.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
