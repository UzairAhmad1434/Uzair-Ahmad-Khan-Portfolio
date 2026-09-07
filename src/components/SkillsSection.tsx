"use client";

const skillGroups = [
  {
    category: "AI & Computer Vision",
    icon: "🧠",
    color: "var(--cyan)",
    glow: "rgba(0, 212, 255, 0.15)",
    skills: [
      { name: "Deep Learning & CNNs", level: 92 },
      { name: "Computer Vision", level: 95 },
      { name: "Object Detection & Tracking", level: 95 },
      { name: "Image Processing", level: 90 },
      { name: "Pose Estimation", level: 88 },
      { name: "Custom Model Training", level: 93 },
      { name: "YOLOv11 / YOLOv12 / YOLO26", level: 95 },
      { name: "YOLOv11-OBB", level: 88 },
      { name: "EasyOCR", level: 87 },
    ],
  },
  {
    category: "Machine Learning & NLP",
    icon: "📊",
    color: "var(--green)",
    glow: "rgba(0, 255, 136, 0.15)",
    skills: [
      { name: "Machine Learning", level: 90 },
      { name: "Natural Language Processing", level: 85 },
      { name: "TF-IDF", level: 88 },
      { name: "Naive Bayes", level: 85 },
      { name: "SVM", level: 87 },
      { name: "Logistic Regression", level: 85 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "⚡",
    color: "var(--blue-bright)",
    glow: "rgba(68, 136, 255, 0.15)",
    skills: [
      { name: "Python", level: 95 },
      { name: "TensorFlow", level: 88 },
      { name: "Keras", level: 88 },
      { name: "PyTorch", level: 85 },
      { name: "OpenCV", level: 93 },
      { name: "Ultralytics", level: 95 },
      { name: "NumPy", level: 90 },
      { name: "Pandas", level: 88 },
      { name: "Scikit-Learn", level: 87 },
    ],
  },
  {
    category: "Deployment & Tools",
    icon: "🛠",
    color: "var(--purple)",
    glow: "rgba(136, 68, 255, 0.15)",
    skills: [
      { name: "React", level: 80 },
      { name: "Flask", level: 82 },
      { name: "Streamlit", level: 88 },
      { name: "Git / GitHub", level: 88 },
      { name: "SORT / ByteTrack / BoT-SORT", level: 90 },
      { name: "Supervision", level: 85 },
      { name: "n8n Automation", level: 78 },
      { name: "AI Agents", level: 80 },
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
              "Data Annotation", "Image Annotation", "Object Detection Annotation", 
              "Custom Dataset Preparation", "Data Labeling", "Traffic Sign Recognition",
              "Loan Approval Prediction", "Student Score Prediction", "Real-Time Inference",
              "Healthcare AI", "Industrial Safety", "Agriculture AI", "Fire Detection",
              "Parking Management", "Automated Quality Inspection", "Drone Footage Analysis",
            ].map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
