import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

interface Message {
    role: 'user' | 'model';
    parts: { text: string }[];
}

const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [input, setInput] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [chatHistory, setChatHistory] = useState<Message[]>([]);
    const [ai, setAI] = useState<any>(null);
    const [chat, setChat] = useState<any>(null);
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDark(darkModeQuery.matches);

        const darkModeListener = (e: MediaQueryListEvent) => setIsDark(e.matches);
        darkModeQuery.addEventListener('change', darkModeListener);

        const genAI = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
        setAI(genAI);

        const initialChat = genAI.chats.create({
            model: "gemini-2.0-flash",
            history: [{
                role: 'user',
                parts: [{ text: 'Hello' }]
            }]
        });
        setChat(initialChat);

        setChatHistory([{
            role: 'model',
            parts: [{ text: 'Hi! I\'m the SoftSell Assistant. How can I help you today?' }]
        }]);

        return () => darkModeQuery.removeEventListener('change', darkModeListener);
    }, []);

    const suggestedQuestions: string[] = [
        "How do I sell my license?",
        "Is this secure?",
        "How long does it take to get paid?",
        "Do you buy licenses for Microsoft or Adobe?",
    ];

    const handleSend = async (text: string) => {
        if (!text.trim() || !chat) return;

        setInput('');
        setLoading(true);

        try {
            const userMessage: Message = {
                role: 'user',
                parts: [{ text }]
            };
            setChatHistory(prev => [...prev, userMessage]);

            const response = await chat.sendMessage({
                message: text
            });

            const botMessage: Message = {
                role: 'model',
                parts: [{ text: response.text }]
            };
            setChatHistory(prev => [...prev, botMessage]);

        } catch (error) {
            console.error('Chat API error:', error);
            const errorMessage: Message = {
                role: 'model',
                parts: [{ text: "Sorry, something went wrong. Please try again later." }]
            };
            setChatHistory(prev => [...prev, errorMessage]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {isOpen && (
                <div className={`w-80 h-[28rem] border shadow-xl rounded-lg flex flex-col overflow-hidden ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                    }`}>
                    <div className={`px-4 py-2 font-semibold ${isDark ? 'bg-gray-900 text-white' : 'bg-blue-600 text-white'
                        }`}>
                        SoftSell Assistant
                    </div>
                    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 text-sm">
                        {chatHistory.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`max-w-[80%] px-3 py-2 rounded-lg ${msg.role === 'user'
                                    ? `ml-auto ${isDark ? 'bg-blue-900 text-white' : 'bg-blue-100'}`
                                    : `mr-auto ${isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-100'}`
                                    }`}
                            >
                                {msg.parts[0].text}
                            </div>
                        ))}
                        {loading && (
                            <div className={`text-xs italic ${isDark ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                Typing...
                            </div>
                        )}
                    </div>
                    <div className="px-4 pb-2">
                        <div className="flex flex-wrap gap-2 mb-2">
                            {suggestedQuestions.map((q, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleSend(q)}
                                    className={`text-xs px-2 py-1 rounded-full ${isDark
                                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                                        : 'bg-gray-200 hover:bg-gray-300'
                                        }`}
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                                className={`flex-1 rounded px-2 py-1 text-sm ${isDark
                                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                                    : 'bg-white border-gray-300'
                                    }`}
                                placeholder="Type your question..."
                            />
                            <button
                                onClick={() => handleSend(input)}
                                className={`text-white text-sm px-3 py-1 rounded ${isDark
                                    ? 'bg-blue-700 hover:bg-blue-800'
                                    : 'bg-blue-600 hover:bg-blue-700'
                                    }`}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`text-white p-3 rounded-full shadow-lg ${isDark
                    ? 'bg-blue-700 hover:bg-blue-800'
                    : 'bg-blue-600 hover:bg-blue-700'
                    }`}
            >
                💬
            </button>
        </div>
    );
};

export default ChatWidget;
