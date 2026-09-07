"use client";

const contacts = [
  {
    id: "email-link",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "uzairahmadkhanmalik@gmail.com",
    href: "mailto:uzairahmadkhanmalik@gmail.com",
    color: "var(--cyan)",
    glow: "rgba(0,212,255,0.15)",
  },
  {
    id: "phone-link",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 16 19.79 19.79 0 011.62 7.48 2 2 0 013.6 5.25h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 12.7A16 16 0 0016 20.79l.88-.88a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "+92 313 5167976",
    href: "tel:+923135167976",
    color: "var(--green)",
    glow: "rgba(0,255,136,0.15)",
  },
  {
    id: "linkedin-link",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/uzair1434",
    href: "https://www.linkedin.com/in/uzair1434/",
    color: "#0A66C2",
    glow: "rgba(10,102,194,0.15)",
  },
  {
    id: "github-link",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/UzairAhmad1434",
    href: "https://github.com/UzairAhmad1434",
    color: "var(--text-secondary)",
    glow: "rgba(125,163,200,0.1)",
  },
];

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-subtitle">Get In Touch</div>
          <h2 className="section-title">Let&apos;s Connect</h2>
          <div className="gradient-line" style={{ margin: "1rem auto 1.5rem" }} />
          <p
            style={{
              maxWidth: "550px",
              margin: "0 auto",
              color: "var(--text-secondary)",
              fontSize: "1rem",
              lineHeight: 1.8,
            }}
          >
            I&apos;m actively seeking AI/ML, Computer Vision, and Data Analytics roles. Whether you have an
            opportunity, a collaboration idea, or just want to talk AI — I&apos;d love to hear from you!
          </p>
        </div>

        {/* Contact Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
            maxWidth: "900px",
            margin: "0 auto 4rem",
          }}
        >
          {contacts.map((contact) => (
            <a
              key={contact.id}
              id={contact.id}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass-card"
              style={{
                padding: "1.75rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                textDecoration: "none",
                background: contact.glow,
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  background: `${contact.color}15`,
                  border: `1px solid ${contact.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: contact.color,
                  flexShrink: 0,
                }}
              >
                {contact.icon}
              </div>
              <div style={{ overflow: "hidden" }}>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: contact.color,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.3rem",
                  }}
                >
                  {contact.label}
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-primary)",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div
          className="glass-card"
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            padding: "3rem",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(0,212,255,0.05) 0%, rgba(0,102,255,0.05) 100%)",
            borderColor: "rgba(0,212,255,0.2)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--cyan)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Ready to collaborate?
          </div>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.75rem",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            Let&apos;s build something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--cyan), var(--blue-bright))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              amazing
            </span>{" "}
            together
          </h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", lineHeight: 1.7 }}>
            I bring deep expertise in AI/ML systems, a track record of high-accuracy models, and a passion for
            turning complex data into real-world impact.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:uzairahmadkhanmalik@gmail.com"
              className="btn-primary"
              id="send-email-btn"
            >
              Send Email
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <a
              href="/Uzair-Ahmad-Khan-Resume.pdf"
              download="Uzair-Ahmad-Khan-Resume.pdf"
              className="btn-outline"
              id="download-resume-btn"
            >
              Download Resume
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
