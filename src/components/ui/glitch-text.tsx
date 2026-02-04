import { useState, useEffect } from "react";

export const GlitchText = ({ text, className = "" }: { text: string; className?: string }) => {
  const [glitchText, setGlitchText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  useEffect(() => {
    const originalText = text;
    let iterations = 0;
    
    // Only glitch on hover or mount
    const interval = setInterval(() => {
        setGlitchText(
            text
            .split("")
            .map((_char, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
        
        if (iterations >= text.length) {
            clearInterval(interval);
        }
        
        iterations += 1 / 3;
    }, 30);
    
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={`relative inline-block group ${className}`}>
      <span className="relative z-10">{glitchText}</span>
      <span className="absolute top-0 left-0 -translate-x-[2px] opacity-0 group-hover:opacity-100 text-red-500 animate-pulse z-0">{text}</span>
      <span className="absolute top-0 left-0 translate-x-[2px] opacity-0 group-hover:opacity-100 text-blue-500 animate-pulse z-0">{text}</span>
    </span>
  );
};
