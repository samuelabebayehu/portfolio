import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GlitchText } from '@/components/ui/glitch-text';

export default function TerminalHero() {
  const [output, setOutput] = useState<Array<{ type: 'command' | 'response'; content: string }>>([
    { type: 'response', content: 'Welcome to SamuelOS v1.0.0' },
    { type: 'response', content: 'Type "help" for available commands.' },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [output]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newOutput = [...output, { type: 'command' as const, content: cmd }];

    switch (trimmedCmd) {
      case 'help':
        newOutput.push({ type: 'response', content: 'Available commands:\n  ls       - List directory contents\n  cd [dir] - Change directory (navigate)\n  cat [file] - Display file content\n  wget cv.pdf - Download CV\n  clear    - Clear terminal\n  contact  - Get contact info' });
        break;
      case 'ls':
        newOutput.push({ type: 'response', content: 'about.txt  projects/  skills/  contact.sh  cv.pdf' });
        break;
      case 'clear':
        setOutput([]);
        return;
      case 'cd projects':
        newOutput.push({ type: 'response', content: 'Navigating to /var/www/html...' });
        scrollToSection('projects');
        break;
      case 'cd skills':
        newOutput.push({ type: 'response', content: 'Navigating to /etc/profile...' });
        scrollToSection('skills');
        break;
      case 'cat about.txt':
        newOutput.push({ type: 'response', content: 'Hi, I\'m Samuel Abebayehu. A Software Developer passionate about building robust web applications and system integrations.' });
        scrollToSection('about');
        break;
      case 'contact':
      case './contact.sh':
        newOutput.push({ type: 'response', content: 'Opening communication channels...' });
        scrollToSection('contact');
        break;
      case 'wget cv.pdf':
      case 'curl -O cv.pdf':
        newOutput.push({ type: 'response', content: 'Downloading Samuel_Abebayehu_CV.pdf... [100%]' });
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'Samuel_Abebayehu_CV.pdf';
        link.click();
        break;
      default:
        if (trimmedCmd.startsWith('cd ')) {
             newOutput.push({ type: 'response', content: `bash: cd: ${trimmedCmd.replace('cd ', '')}: No such file or directory` });
        } else if (trimmedCmd !== '') {
             newOutput.push({ type: 'response', content: `bash: ${trimmedCmd}: command not found` });
        }
    }
    setOutput(newOutput);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center p-4 pt-20">
      <div className="max-w-4xl w-full">
         <div className="mb-10 text-center">
             <h1 className="text-4xl md:text-6xl font-bold mb-4">
                 <GlitchText text="> SAMUEL_ABEBAYEHU" />
             </h1>
             <p className="text-xl text-muted-foreground animate-pulse">System Online. Awaiting Input.</p>
         </div>

         {/* Terminal Window */}
         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full bg-black border-2 border-primary rounded-none shadow-[0_0_20px_rgba(74,246,38,0.2)] overflow-hidden"
         >
             {/* Terminal Header */}
             <div className="bg-primary/20 p-2 border-b border-primary flex justify-between items-center">
                 <div className="flex space-x-2">
                     <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                     <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                     <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                 </div>
                 <div className="text-xs font-mono text-primary">samuel@portfolio:~</div>
                 <div className="w-10"></div>
             </div>

             {/* Terminal Body */}
             <div 
                ref={scrollRef}
                className="p-4 h-[400px] overflow-y-auto font-mono text-sm md:text-base scrollbar-hide"
                onClick={() => inputRef.current?.focus()}
             >
                 {output.map((line, i) => (
                     <div key={i} className={`mb-2 ${line.type === 'command' ? 'text-white' : 'text-primary/80 whitespace-pre-wrap'}`}>
                         {line.type === 'command' ? (
                            <span><span className="text-primary">samuel@portfolio:~$</span> {line.content}</span>
                         ) : (
                            line.content
                         )}
                     </div>
                 ))}
                 
                 <div className="flex items-center">
                     <span className="text-primary mr-2">samuel@portfolio:~$</span>
                     <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="bg-transparent border-none outline-none text-white flex-grow font-mono caret-primary"
                        autoFocus
                     />
                 </div>
             </div>
         </motion.div>

         {/* Fallback Controls */}
         <div className="mt-8 flex justify-center gap-4">
            <Button variant="outline" onClick={() => handleCommand('help')}>[ HELP ]</Button>
            <Button variant="outline" onClick={() => handleCommand('ls')}>[ LIST FILES ]</Button>
         </div>
      </div>
    </section>
  );
}
