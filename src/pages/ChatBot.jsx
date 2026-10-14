import { useEffect, useRef, useState } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { API_URL } from "../config/api";

function ChatBot() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesContainerRef = useRef(null);
  const textareaRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Салом! Ман **Ё-Aql** ҳастам.\n\nДар бораи HTML, CSS, JavaScript, React, Tailwind, Python, C#, C++ ё дигар мавзӯъҳои барномасозӣ саволатро навис.",
    },
  ]);

  useEffect(() => {
    const container = messagesContainerRef.current;

    if (!container) return;

    container.scrollTop = container.scrollHeight;
  }, [messages, loading]);

  const handleSend = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Хатогӣ");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: data.answer,
        },
      ]);
    } catch (error) {
      console.error("CHAT ERROR:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Ҳангоми пайваст шудан ба Ё-Устод хато шуд. Серверро санҷед.",
        },
      ]);
    } finally {
      setLoading(false);

      setTimeout(() => {
        textareaRef.current?.focus();
      }, 100);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-screen flex-col bg-white">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
              <Bot size={19} />

              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
                  Ё-Aql
                </h1>

                <span className="rounded-md bg-blue-50 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-blue-600">
                  AI
                </span>
              </div>

              <p className="text-[11px] text-slate-400 sm:text-xs">
                Ёвари зеҳнии барномасозӣ
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-500 sm:flex">
            <Sparkles size={13} className="text-blue-500" />
            Барои омӯзиш
          </div>
        </div>
      </header>

      <main
        ref={messagesContainerRef}
        className="min-h-0 flex-1 overflow-y-auto scroll-smooth"
      >
        <div className="mx-auto w-full max-w-3xl px-4 pb-8 pt-8 sm:px-6 sm:pt-10">
          {messages.length === 1 && (
            <div className="mb-10 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-100">
                <Bot size={28} />
              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Чӣ тавр метавонам кӯмак кунам?
              </h2>

              <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
                Саволи худро дар бораи барномасозӣ нависед ва Ё-Aql ба шумо
                кӯмак мекунад.
              </p>
            </div>
          )}

          <div className="space-y-8">
            {messages.map((item, index) => {
              const isUser = item.role === "user";

              return (
                <div
                  key={index}
                  className={`flex gap-3 ${
                    isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  {!isUser && (
                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                      <Bot size={15} />
                    </div>
                  )}

                  <div
                    className={`max-w-[88%] text-[14px] leading-7 sm:max-w-[78%] ${
                      isUser
                        ? "rounded-2xl rounded-br-md bg-slate-100 px-4 py-2.5 text-slate-800"
                        : "text-slate-700"
                    }`}
                  >
                    {isUser ? (
                      <p className="whitespace-pre-wrap">{item.text}</p>
                    ) : (
                      <div className="prose prose-sm max-w-none prose-headings:font-semibold prose-headings:text-slate-900 prose-p:my-2 prose-p:leading-7 prose-li:leading-7 prose-strong:text-slate-900 prose-pre:my-4 prose-pre:p-0">
                        <ReactMarkdown
                          components={{
                            code({
                              inline,
                              className,
                              children,
                              ...props
                            }) {
                              return inline ? (
                                <code
                                  className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-[13px] text-blue-600"
                                  {...props}
                                >
                                  {children}
                                </code>
                              ) : (
                                <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-4 text-xs leading-6 text-slate-100 shadow-sm">
                                  <code
                                    className={className}
                                    {...props}
                                  >
                                    {children}
                                  </code>
                                </pre>
                              );
                            },
                          }}
                        >
                          {item.text}
                        </ReactMarkdown>
                      </div>
                    )}
                  </div>

                  {isUser && (
                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-white">
                      <User size={14} />
                    </div>
                  )}
                </div>
              );
            })}

            {loading && (
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                  <Bot size={15} />
                </div>

                <div className="flex items-center gap-1.5 pt-2">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="mx-auto w-full max-w-3xl px-3 pb-3 pt-2 sm:px-6 sm:pb-5">
          <div className="relative rounded-2xl border border-slate-300 bg-white shadow-sm transition-all duration-200 focus-within:border-blue-400 focus-within:shadow-md focus-within:shadow-blue-100">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Саволатонро нависед..."
              disabled={loading}
              rows={1}
              className="max-h-40 min-h-[54px] w-full resize-none bg-transparent px-4 py-4 pr-14 text-sm text-slate-700 outline-none placeholder:text-slate-400 disabled:opacity-50"
            />

            <button
              onClick={handleSend}
              disabled={loading || !message.trim()}
              aria-label="Фиристодан"
              className="absolute bottom-2.5 right-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white transition-all hover:bg-blue-600 active:scale-95 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
            >
              <Send size={16} />
            </button>
          </div>

          <p className="mt-2 text-center text-[10px] text-slate-400 sm:text-xs">
            Ё-Aql метавонад баъзан хато кунад. Маълумоти муҳимро санҷед.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ChatBot;