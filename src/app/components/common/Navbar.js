"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="w-full flex justify-between items-center px-6 py-4"
      style={{
        backgroundColor: "var(--color-base-200)",
        color: "var(--color-base-content)",
      }}
    >
      <Link href="/" className="text-xl font-bold">
        Bansari.dev
      </Link>

      <ul className="flex gap-6">
        <li>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
