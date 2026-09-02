"use client";

const education = [
  {
    id: "uet-taxila",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Engineering & Technology (UET), Taxila",
    period: "Sep 2022 – Jun 2026",
    grade: "CGPA: 3.83 / 4.00",
    gradeColor: "var(--cyan)",
    icon: "🎓",
    highlights: [
      "Specialization in Artificial Intelligence & Computer Vision",
      "Final Year Project: NextGen Traffic AI-Powered Monitoring System",
      "ACM UET Fellowship — AI Track",
      "Strong academic performance throughout all semesters",
    ],
    color: "var(--cyan)",
    glow: "rgba(0,212,255,0.1)",
  },
  {
    id: "fazaia-inter",
    degree: "FSc Pre-Engineering",
    institution: "Fazaia Inter College Minhas, Kamra",
    period: "Jun 2020 – Jun 2022",
    grade: "94%",
    gradeColor: "var(--green)",
    icon: "🏫",
    highlights: [
      "Pre-Engineering with strong foundation in Mathematics & Physics",
      "Graduated with Distinction — 94% overall",
    ],
    color: "var(--green)",
    glow: "rgba(0,255,136,0.08)",
  },
];

const certifications = [
  {
    title: "Computer Vision: YOLO Custom Object Detection with Colab GPU",
    issuer: "Coursera",
    color: "var(--cyan)",
    icon: "🎯",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM (Coursera)",
    color: "var(--blue-bright)",
    icon: "🐍",
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM (Coursera)",
    color: "var(--purple)",
    icon: "🤖",
  },
  {
    title: "The Complete MySQL from Scratch: Bootcamp",
    issuer: "Udemy",
    color: "#E97316",
    icon: "🗄",
  },
];

export default function EducationSection() {
  return (
    <section id="education">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-subtitle">Academic Background</div>
          <h2 className="section-title">Education & Certifications</h2>
          <div className="gradient-line" style={{ margin: "1rem auto 0" }} />
        </div>

        {/* Education Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          {education.map((edu) => (
            <div
              key={edu.id}
              id={`edu-${edu.id}`}
              className="glass-card"
              style={{ padding: "2rem", background: edu.glow }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.25rem" }}>
                <span
                  style={{
                    fontSize: "2.2rem",
                    padding: "0.5rem",
                    background: `${edu.color}15`,
                    borderRadius: "10px",
                    border: `1px solid ${edu.color}25`,
                  }}
                >
                  {edu.icon}
                </span>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {edu.degree}
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: edu.color, fontWeight: 500, marginBottom: "0.25rem" }}>
                    {edu.institution}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {edu.period}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1rem",
                        fontWeight: 800,
                        color: edu.gradeColor,
                        textShadow: `0 0 15px ${edu.gradeColor}60`,
                      }}
                    >
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {edu.highlights.map((h) => (
                  <li
                    key={h}
                    style={{ display: "flex", gap: "0.5rem", fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}
                  >
                    <span style={{ color: edu.color, flexShrink: 0 }}>›</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Certifications
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="glass-card"
                style={{
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <span
                  style={{
                    fontSize: "1.5rem",
                    padding: "0.4rem",
                    background: `${cert.color}15`,
                    borderRadius: "8px",
                    border: `1px solid ${cert.color}20`,
                    flexShrink: 0,
                  }}
                >
                  {cert.icon}
                </span>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-primary)", fontWeight: 500, lineHeight: 1.5, marginBottom: "0.3rem" }}>
                    {cert.title}
                  </p>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: cert.color,
                      opacity: 0.8,
                    }}
                  >
                    {cert.issuer}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div style={{ marginTop: "4rem" }}>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Achievements
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                icon: "🏆",
                title: "73rd Percentile — NSCT",
                desc: "National Skill Competency Test — Top percentile nationwide performance",
                color: "var(--cyan)",
              },
              {
                icon: "🤝",
                title: "ACM UET Fellowship",
                desc: "AI Track focused on Artificial Intelligence research and interdisciplinary collaboration",
                color: "var(--blue-bright)",
              },
              {
                icon: "📚",
                title: "CGPA 3.83 / 4.00",
                desc: "Maintained exceptional academic performance throughout BS Computer Science program",
                color: "var(--green)",
              },
            ].map((ach) => (
              <div
                key={ach.title}
                className="glass-card"
                style={{ padding: "1.5rem", display: "flex", gap: "1rem" }}
              >
                <span
                  style={{
                    fontSize: "1.75rem",
                    padding: "0.5rem",
                    background: `${ach.color}12`,
                    borderRadius: "10px",
                    height: "fit-content",
                    flexShrink: 0,
                  }}
                >
                  {ach.icon}
                </span>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: ach.color,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {ach.title}
                  </h4>
                  <p style={{ fontSize: "0.83rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{ach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
