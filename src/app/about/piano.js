"use client";
import React, { useEffect, useState } from "react";

const keyMap = {
  a: { note: "A", label: "A" },
  s: { note: "F", label: "S" },
  d: { note: "C", label: "D" },
  f: { note: "E", label: "F" },
};

export default function PianoGame() {
  const [activeKey, setActiveKey] = useState(null);

  const playNote = (note) => {
    const audio = new Audio(`/sounds/${note}.wav`);
    audio.play();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (keyMap[key]) {
        setActiveKey(key);
        playNote(keyMap[key].note);
      }
    };

    const handleKeyUp = () => {
      setActiveKey(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="w-1/3 flex flex-col items-center gap-4 py-10 px-5 bg-primary rounded-xl">
      <div className="flex justify-center gap-4">
        {Object.entries(keyMap).map(([key, { note, label }]) => (
          <div
            key={key}
            className={`w-16 h-16 flex items-end justify-center rounded-lg shadow-md border-2
          transition-all duration-150 ${
            activeKey === key
              ? "bg-pink-500 scale-105 text-white"
              : "bg-black text-white shadow-lg"
          }`}
          >
            <span className="mb-2 font-bold">{label}</span>
          </div>
        ))}
      </div>

      <p className="text-center text-white text-md font-medium">
        🎶 Built this playful mini piano using React and sound hooks—because
        coding should be *fun* too! Inspired by interactive UIs, I love turning
        small ideas into delightful experiences. 🚀 Give it a try: tap{" "}
        <strong>A, S, D, F</strong> on your keyboard. 🎉
      </p>
    </div>
  );
}
