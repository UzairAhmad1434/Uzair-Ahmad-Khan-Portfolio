"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "relative",
        borderTop: "1px solid var(--border-subtle)",
        padding: "2.5rem 1.5rem",
        textAlign: "center",
      }}
    >
      {/* Top gradient line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--cyan), transparent)",
        }}
      />

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Logo */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "var(--cyan)",
            marginBottom: "1rem",
            textShadow: "0 0 15px rgba(0,212,255,0.4)",
          }}
        >
          <span style={{ color: "var(--text-muted)" }}>&lt;</span>
          UAK
          <span style={{ color: "var(--text-muted)" }}>/&gt;</span>
        </div>

        {/* Nav links */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "1.5rem",
          }}
        >
          {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--cyan)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            lineHeight: 1.6,
          }}
        >
          © {year} Uzair Ahmad Khan. Built with{" "}
          <span style={{ color: "var(--blue-bright)" }}>Next.js</span> &{" "}
          <span style={{ color: "var(--cyan)" }}>passion for AI</span>.
        </p>
      </div>
    </footer>
  );
}
