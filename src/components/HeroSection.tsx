"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = [
  "AI/ML Engineer",
  "Computer Vision Specialist",
  "Deep Learning Developer",
  "YOLOv11 Expert",
  "Data Analytics Engineer",
  "Full-Stack AI Developer",
];

function useTypingEffect(words: string[]) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= word.length) {
      timeout = setTimeout(() => {
        setDisplayed(word.slice(0, charIdx));
        setCharIdx((c) => c + 1);
        if (charIdx === word.length) {
          timeout = setTimeout(() => setDeleting(true), 2000);
        }
      }, 80);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(word.slice(0, charIdx));
        setCharIdx((c) => c - 1);
        if (charIdx === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
        }
      }, 40);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words]);

  return displayed;
}

const stats = [
  { label: "CGPA", value: "3.83", suffix: "/4.00", color: "var(--cyan)" },
  { label: "Internship", value: "Elevvo", suffix: "", color: "var(--green)" },
  { label: "AI Projects", value: "16", suffix: "+", color: "var(--blue-bright)" },
  { label: "Certifications", value: "4", suffix: "+", color: "var(--purple)" },
];

export default function HeroSection() {
  const typedText = useTypingEffect(WORDS);
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "8rem 1.5rem 4rem",
        overflow: "hidden",
      }}
    >
      {/* Radial glow background */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "600px",
          background:
            "radial-gradient(ellipse at center, rgba(0, 102, 255, 0.12) 0%, rgba(0, 212, 255, 0.06) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Side accent lines */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: 0,
          width: "3px",
          height: "30%",
          background: "linear-gradient(to bottom, transparent, var(--cyan), transparent)",
          opacity: 0.4,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: 0,
          width: "3px",
          height: "25%",
          background: "linear-gradient(to bottom, transparent, var(--blue-bright), transparent)",
          opacity: 0.4,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.4rem 1.25rem",
            background: "rgba(0, 212, 255, 0.07)",
            border: "1px solid rgba(0, 212, 255, 0.25)",
            borderRadius: "100px",
            marginBottom: "2rem",
            animation: "fadeIn 0.6s ease both",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "var(--green)",
              boxShadow: "0 0 10px var(--green)",
              animation: "glow-pulse 2s ease-in-out infinite",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--text-secondary)",
              letterSpacing: "0.08em",
            }}
          >
            Available for opportunities
          </span>
        </div>

        {/* Main Name */}
        <h1
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontFamily: "var(--font-heading)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: "0.5rem",
            background:
              "linear-gradient(135deg, #e8f4ff 0%, #00d4ff 40%, #4488ff 70%, #8844ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "fadeUp 0.7s 0.1s cubic-bezier(0.23,1,0.32,1) both",
          }}
        >
          Uzair Ahmad Khan
        </h1>

        {/* Animated Role */}
        <div
          style={{
            height: "2.8rem",
            marginBottom: "2rem",
            animation: "fadeUp 0.7s 0.2s cubic-bezier(0.23,1,0.32,1) both",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
              color: "var(--cyan)",
              fontWeight: 500,
              letterSpacing: "0.03em",
            }}
          >
            {typedText}
            <span
              style={{
                display: "inline-block",
                width: "2px",
                height: "1.2em",
                background: "var(--cyan)",
                marginLeft: "3px",
                verticalAlign: "middle",
                animation: "typing-cursor 0.8s ease infinite",
              }}
            />
          </span>
        </div>

        {/* Summary */}
        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 2.5rem",
            fontSize: "1.05rem",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            animation: "fadeUp 0.7s 0.3s cubic-bezier(0.23,1,0.32,1) both",
          }}
        >
          CS graduate from <strong style={{ color: "var(--text-primary)" }}>UET Taxila</strong> (CGPA: 3.83)
          specializing in <strong style={{ color: "var(--cyan)" }}>Artificial Intelligence</strong>,{" "}
          <strong style={{ color: "var(--blue-bright)" }}>Computer Vision</strong>, and real-time Deep Learning pipelines.
          Built award-winning traffic monitoring systems with YOLOv11 and full-stack AI dashboards.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "4rem",
            animation: "fadeUp 0.7s 0.4s cubic-bezier(0.23,1,0.32,1) both",
          }}
        >
          <a href="#projects" className="btn-primary" id="view-projects-btn">
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn-outline" id="contact-btn">
            Let&apos;s Connect
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 16 19.79 19.79 0 011.62 7.48 2 2 0 013.6 5.25h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 12.7A16 16 0 0016 20.79l.88-.88a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
          </a>
        </div>

        {/* Stats Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
            maxWidth: "700px",
            margin: "0 auto",
            animation: "fadeUp 0.7s 0.55s cubic-bezier(0.23,1,0.32,1) both",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card"
              style={{ padding: "1.25rem 1rem", textAlign: "center" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: stat.color,
                  lineHeight: 1,
                  textShadow: `0 0 20px ${stat.color}80`,
                }}
              >
                {stat.value}
                <span style={{ fontSize: "1.1rem", fontWeight: 600 }}>{stat.suffix}</span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  marginTop: "0.4rem",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: 0.4,
            animation: "fadeIn 1s 1s both",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.15em", color: "var(--text-secondary)" }}>
            SCROLL
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, var(--cyan), transparent)",
              animation: "float 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
