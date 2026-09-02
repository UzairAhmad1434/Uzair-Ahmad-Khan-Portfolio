"use client";

const skillGroups = [
  {
    category: "AI / Machine Learning",
    icon: "🧠",
    color: "var(--cyan)",
    glow: "rgba(0, 212, 255, 0.15)",
    skills: [
      { name: "Deep Learning (CNNs)", level: 92 },
      { name: "YOLOv11 / Object Detection", level: 95 },
      { name: "Computer Vision", level: 93 },
      { name: "NLP & Text Analysis", level: 82 },
      { name: "TensorFlow / Keras", level: 88 },
      { name: "PyTorch", level: 80 },
      { name: "Scikit-Learn", level: 85 },
      { name: "OpenCV", level: 90 },
      { name: "EasyOCR", level: 87 },
    ],
  },
  {
    category: "Data Analytics",
    icon: "📊",
    color: "var(--green)",
    glow: "rgba(0, 255, 136, 0.15)",
    skills: [
      { name: "Power BI", level: 88 },
      { name: "Tableau", level: 82 },
      { name: "SQL", level: 85 },
      { name: "Pandas / NumPy", level: 90 },
      { name: "Matplotlib / Visualization", level: 85 },
      { name: "Power Query", level: 80 },
    ],
  },
  {
    category: "Programming & Dev",
    icon: "⚡",
    color: "var(--blue-bright)",
    glow: "rgba(68, 136, 255, 0.15)",
    skills: [
      { name: "Python", level: 95 },
      { name: "React", level: 78 },
      { name: "Flask", level: 80 },
      { name: "Streamlit", level: 88 },
      { name: "JavaScript", level: 75 },
      { name: "TypeScript", level: 70 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠",
    color: "var(--purple)",
    glow: "rgba(136, 68, 255, 0.15)",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "n8n Automation", level: 78 },
      { name: "AI Agents", level: 80 },
      { name: "Google Colab / GPU", level: 88 },
      { name: "Docker", level: 65 },
    ],
  },
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div style={{ marginBottom: "0.9rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
        <span style={{ fontSize: "0.88rem", color: "var(--text-primary)", fontWeight: 500 }}>{name}</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color, opacity: 0.8 }}>{level}%</span>
      </div>
      <div
        style={{
          width: "100%",
          height: "4px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${level}%`,
            height: "100%",
            borderRadius: "4px",
            background: `linear-gradient(90deg, ${color}80 0%, ${color} 100%)`,
            boxShadow: `0 0 8px ${color}60`,
            transition: "width 1.5s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-subtitle">Technical Expertise</div>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="gradient-line" style={{ margin: "1rem auto 0" }} />
        </div>

        {/* Skill Groups Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="glass-card"
              style={{ padding: "2rem", background: group.glow }}
            >
              {/* Category Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{group.icon}</span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: group.color,
                      textShadow: `0 0 12px ${group.color}60`,
                    }}
                  >
                    {group.category}
                  </h3>
                </div>
              </div>

              {/* Skill Bars */}
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} color={group.color} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech Tags row */}
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            Also experienced with
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
            {[
              "SORT Tracking", "License Plate Recognition", "Custom Model Training",
              "Hyperparameter Tuning", "TF-IDF Vectorization", "Naive Bayes",
              "SVM", "CNN Architecture", "Transfer Learning", "Data Augmentation",
              "Real-Time Inference", "UTKFace Dataset", "Autonomous Driving AI",
            ].map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
