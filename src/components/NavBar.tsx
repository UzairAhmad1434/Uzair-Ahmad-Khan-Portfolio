"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // Detect active section
      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "0.75rem 2rem" : "1.25rem 2rem",
        background: scrolled
          ? "rgba(5, 10, 20, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0, 212, 255, 0.1)" : "none",
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "var(--cyan)",
          textDecoration: "none",
          letterSpacing: "0.1em",
          textShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
        }}
      >
        <span style={{ color: "var(--text-secondary)" }}>&lt;</span>
        UAK
        <span style={{ color: "var(--text-secondary)" }}>/&gt;</span>
      </a>

      {/* Desktop Nav Links */}
      <div
        className="desktop-nav"
        style={{
          display: "flex",
          gap: "0.25rem",
          alignItems: "center",
        }}
      >
        {navItems.map((item) => {
          const isActive = active === item.href.slice(1);
          return (
            <a
              key={item.href}
              href={item.href}
              style={{
                padding: "0.5rem 1rem",
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: isActive ? "var(--cyan)" : "var(--text-secondary)",
                textDecoration: "none",
                borderRadius: "6px",
                background: isActive ? "rgba(0, 212, 255, 0.08)" : "transparent",
                border: isActive ? "1px solid rgba(0, 212, 255, 0.2)" : "1px solid transparent",
                transition: "all 0.25s ease",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  (e.target as HTMLElement).style.color = "var(--text-primary)";
                  (e.target as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  (e.target as HTMLElement).style.color = "var(--text-secondary)";
                  (e.target as HTMLElement).style.background = "transparent";
                }
              }}
            >
              {item.label}
            </a>
          );
        })}
        <a
          href="/uzair (1).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ marginLeft: "0.5rem", padding: "0.5rem 1.25rem", fontSize: "0.88rem" }}
        >
          Resume ↗
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        id="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "transparent",
          border: "1px solid var(--border-subtle)",
          borderRadius: "6px",
          padding: "0.5rem",
          color: "var(--cyan)",
          cursor: "pointer",
          fontSize: "1.2rem",
        }}
        aria-label="Toggle mobile menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(5, 10, 20, 0.98)",
            backdropFilter: "blur(20px)",
            zIndex: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "transparent",
              border: "none",
              color: "var(--cyan)",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--cyan)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-primary)")
              }
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          #mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
