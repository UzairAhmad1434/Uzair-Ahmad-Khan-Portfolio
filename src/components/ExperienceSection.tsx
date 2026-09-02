"use client";

const experiences = [
  {
    id: "ml-intern-elevvo",
    title: "Machine Learning Intern",
    company: "Elevvo",
    type: "Remote",
    period: "Sep 2025 – Oct 2025",
    color: "var(--cyan)",
    glow: "rgba(0,212,255,0.15)",
    icon: "🧠",
    responsibilities: [
      "Developed a CNN-based Traffic Sign Recognition model for autonomous driving applications",
      "Built predictive analytics models including Loan Approval Prediction system",
      "Created Student Score Prediction models using advanced machine learning techniques",
      "Worked with real-world datasets and applied model evaluation methodologies",
    ],
    tags: ["CNN", "Traffic Signs", "Predictive Analytics", "Python", "Machine Learning"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-subtitle">Work History</div>
          <h2 className="section-title">Experience</h2>
          <div className="gradient-line" style={{ margin: "1rem auto 0" }} />
        </div>

        {/* Timeline */}
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
          {/* Vertical timeline line */}
          <div
            style={{
              position: "absolute",
              left: "28px",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(to bottom, var(--cyan) 0%, rgba(0,212,255,0.1) 100%)",
            }}
          />

          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              id={`exp-${exp.id}`}
              style={{
                display: "flex",
                gap: "2rem",
                marginBottom: "2rem",
                animation: `fadeUp 0.7s ${idx * 0.15}s cubic-bezier(0.23,1,0.32,1) both`,
              }}
            >
              {/* Timeline dot */}
              <div style={{ flexShrink: 0, position: "relative", zIndex: 2 }}>
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${exp.glow} 0%, rgba(10,22,40,0.9) 100%)`,
                    border: `2px solid ${exp.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    boxShadow: `0 0 20px ${exp.color}40`,
                  }}
                >
                  {exp.icon}
                </div>
              </div>

              {/* Card */}
              <div className="glass-card" style={{ flex: 1, padding: "2rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                      }}
                    >
                      {exp.title}
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.25rem" }}>
                      <span style={{ fontWeight: 600, color: exp.color, fontSize: "0.95rem" }}>
                        {exp.company}
                      </span>
                      <span
                        style={{
                          padding: "0.1rem 0.5rem",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "4px",
                          fontSize: "0.72rem",
                          color: "var(--text-muted)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "6px",
                      padding: "0.3rem 0.75rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.25rem" }}>
                  {exp.responsibilities.map((r) => (
                    <li
                      key={r}
                      style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}
                    >
                      <span style={{ color: exp.color, fontSize: "0.55rem", marginTop: "0.45rem", flexShrink: 0 }}>◆</span>
                      {r}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {exp.tags.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* "Looking for opportunities" card */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <div style={{ flexShrink: 0 }}>
              <div
                style={{
                  width: "58px",
                  height: "58px",
                  borderRadius: "50%",
                  background: "rgba(0,255,136,0.08)",
                  border: "2px dashed rgba(0,255,136,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  animation: "glow-pulse 2.5s ease-in-out infinite",
                }}
              >
                ✨
              </div>
            </div>
            <div
              className="glass-card"
              style={{
                flex: 1,
                padding: "1.5rem 2rem",
                borderColor: "rgba(0,255,136,0.2)",
                background: "rgba(0,255,136,0.04)",
              }}
            >
              <p style={{ color: "var(--green)", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.25rem" }}>
                🟢 Open to New Opportunities
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                Actively seeking AI/ML Engineer, Computer Vision, or Data Analytics roles. Ready to contribute from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
