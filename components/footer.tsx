import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Samuel Abebayehu. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <span className="text-sm text-muted-foreground mr-2">Theme:</span>
              <ModeToggle />
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/samuelabebayehu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/samuel-abebayehu-a82807a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:samuelabebayehu@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
