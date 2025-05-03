"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="w-full flex flex-col md:flex-row justify-between items-center px-6 py-6 mt-12"
      style={{
        backgroundColor: "var(--color-base-200)",
        color: "var(--color-base-content)",
      }}
    >
      <p className="text-sm mb-4 md:mb-0">
        © {new Date().getFullYear()} Bansari Panchal
      </p>

      <div className="flex gap-6">
        <a
          href="https://github.com/meow-20"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:opacity-80 transition"
        >
          <Github size={20} />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:opacity-80 transition"
        >
          <Linkedin size={20} />
        </a>

        <a
          href="mailto:you@example.com"
          aria-label="Email"
          className="hover:opacity-80 transition"
        >
          <Mail size={20} />
        </a>
      </div>
    </footer>
  );
}
