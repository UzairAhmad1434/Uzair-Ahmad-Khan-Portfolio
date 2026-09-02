"use client";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Left: Text content */}
          <div>
            <div className="section-subtitle">Who I Am</div>
            <h2 className="section-title">About Me</h2>
            <div className="gradient-line" />

            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.9,
                marginBottom: "1.5rem",
                fontSize: "1rem",
              }}
            >
              I&apos;m a <strong style={{ color: "var(--text-primary)" }}>Computer Science graduate</strong> from{" "}
              <strong style={{ color: "var(--cyan)" }}>University of Engineering & Technology (UET), Taxila</strong>{" "}
              with a CGPA of 3.83/4.00. My passion lies at the intersection of deep learning theory and
              real-world deployable AI systems.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.9,
                marginBottom: "1.5rem",
                fontSize: "1rem",
              }}
            >
              I specialize in <strong style={{ color: "var(--blue-bright)" }}>Computer Vision</strong>, building
              real-time systems with YOLOv11 for object detection, tracking, and classification. My Final Year
              Project — <strong style={{ color: "var(--cyan)" }}>NextGen Traffic</strong> — is a complete
              intelligent traffic monitoring platform with violation detection, LPR, and a live React dashboard.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              I also work extensively in <strong style={{ color: "var(--green)" }}>Data Analytics</strong> with
              Power BI and Tableau, and love building end-to-end pipelines that go from raw data to business
              insights. I&apos;m actively seeking <strong style={{ color: "var(--text-primary)" }}>AI/ML, Computer Vision,
              or Data Analytics</strong> roles to apply my skills to real-world impact.
            </p>

            {/* Quick facts */}
            <div
              style={{
                marginTop: "2rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {[
                { label: "Location", value: "Pakistan 🇵🇰" },
                { label: "Email", value: "uzairahmadkhanmalik@gmail.com" },
                { label: "Degree", value: "BS Computer Science" },
                { label: "Status", value: "Open to Work ✅" },
              ].map((item) => (
                <div key={item.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--cyan)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-primary)",
                      fontWeight: 500,
                      wordBreak: "break-all",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual panel */}
          <div style={{ position: "relative" }}>
            {/* Profile visual */}
            <div
              className="glass-card"
              style={{
                padding: "2.5rem",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Rotating ring */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "300px",
                  height: "300px",
                  border: "1px dashed rgba(0,212,255,0.15)",
                  borderRadius: "50%",
                  animation: "spin-slow 30s linear infinite",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "240px",
                  height: "240px",
                  border: "1px dashed rgba(0,102,255,0.12)",
                  borderRadius: "50%",
                  animation: "spin-slow 20s linear infinite reverse",
                  pointerEvents: "none",
                }}
              />

              {/* Avatar circle */}
              <div
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(0,212,255,0.2) 0%, rgba(0,102,255,0.2) 100%)",
                  border: "2px solid rgba(0,212,255,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 2rem",
                  fontSize: "3.5rem",
                  boxShadow: "var(--glow-cyan), inset 0 0 40px rgba(0,212,255,0.1)",
                  animation: "animate-float 6s ease-in-out infinite",
                }}
              >
                🤖
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "0.25rem",
                }}
              >
                Uzair Ahmad Khan
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "var(--cyan)",
                  marginBottom: "2rem",
                }}
              >
                AI / ML Engineer
              </p>

              {/* Mini metrics */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {[
                  { label: "CGPA", val: "3.83", icon: "🎓" },
                  { label: "Grad Year", val: "2026", icon: "📅" },
                  { label: "Projects", val: "8+", icon: "🚀" },
                  { label: "University", val: "UET", icon: "🏛" },
                ].map((m) => (
                  <div
                    key={m.label}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "10px",
                      padding: "0.75rem",
                    }}
                  >
                    <div style={{ fontSize: "1.1rem", marginBottom: "0.2rem" }}>{m.icon}</div>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--text-primary)", fontSize: "1.1rem" }}>{m.val}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)" }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
