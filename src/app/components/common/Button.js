"use client";

export default function Button({ text, onClick, type = "button", color = "primary" }) {
  const colorSchemes = {
    primary: {
      background: "var(--color-primary)",
      text: "var(--color-primary-content)",
    },
    secondary: {
      background: "var(--color-secondary)",
      text: "var(--color-secondary-content)",
    },
    accent: {
      background: "var(--color-accent)",
      text: "var(--color-accent-content)",
    },
    success: {
      background: "var(--color-success)",
      text: "var(--color-success-content)",
    },
    warning: {
      background: "var(--color-warning)",
      text: "var(--color-warning-content)",
    },
    error: {
      background: "var(--color-error)",
      text: "var(--color-error-content)",
    },
    neutral: {
      background: "var(--color-neutral)",
      text: "var(--color-neutral-content)",
    },
    info: {
      background: "var(--color-info)",
      text: "var(--color-info-content)",
    },
  };

  const scheme = colorSchemes[color] || colorSchemes.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: scheme.background,
        color: scheme.text,
        padding: "0.5rem 1.25rem",
        borderRadius: "var(--radius-field)",
        border: "var(--border)",
        cursor: "pointer",
      }}
      className="transition-all duration-300 hover:opacity-80"
    >
      {text}
    </button>
  );
}
