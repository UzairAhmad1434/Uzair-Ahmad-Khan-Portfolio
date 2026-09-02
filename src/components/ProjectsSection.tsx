"use client";

const projects = [
  {
    id: "nextgen-traffic",
    title: "NextGen Traffic",
    subtitle: "AI-Powered Smart Traffic Monitoring System",
    badge: "Final Year Project",
    badgeColor: "var(--cyan)",
    badgeBg: "rgba(0,212,255,0.12)",
    description:
      "Real-time intelligent traffic monitoring system using YOLOv11 and SORT for vehicle detection, tracking, counting, and violation detection. Features license plate recognition, helmet detection, wrong-way driving, triple-riding, and accident detection modules.",
    tech: ["Python", "YOLOv11", "SORT", "EasyOCR", "React", "OpenCV"],
    highlights: [
      "Real-time vehicle detection & tracking",
      "Custom local vehicle category training",
      "License Plate Recognition (LPR)",
      "Helmet & Violation Detection",
      "Live React Monitoring Dashboard",
    ],
    accent: "var(--cyan)",
    glow: "rgba(0,212,255,0.12)",
    link: "https://linkedin.com/posts/uzair1434",
    icon: "🚦",
  },
  {
    id: "deepfake-detection",
    title: "DeepFake Detection System",
    subtitle: "99% Accuracy AI-Generated Image Detector",
    badge: "99% Accuracy",
    badgeColor: "var(--green)",
    badgeBg: "rgba(0,255,136,0.12)",
    description:
      "Custom CNN model achieving 99% accuracy in detecting AI-generated images (deepfakes). Integrated into a Streamlit web app for real-time image testing and classification.",
    tech: ["Python", "CNN", "TensorFlow", "Streamlit", "Deep Learning"],
    highlights: [
      "99% detection accuracy",
      "Custom CNN architecture",
      "Real-time image testing via Streamlit",
      "Binary classification model",
    ],
    accent: "var(--green)",
    glow: "rgba(0,255,136,0.12)",
    link: "https://linkedin.com/posts/uzair1434",
    icon: "🔍",
  },
  {
    id: "age-gender-prediction",
    title: "Age & Gender Prediction",
    subtitle: "90% Accuracy Multi-Task CNN",
    badge: "90% Accuracy",
    badgeColor: "var(--blue-bright)",
    badgeBg: "rgba(68,136,255,0.12)",
    description:
      "Multi-task CNN model for simultaneous age and gender prediction using the UTKFace dataset. Achieved 90% accuracy through hyperparameter tuning and robust preprocessing.",
    tech: ["TensorFlow", "Keras", "OpenCV", "Python", "UTKFace"],
    highlights: [
      "90% accuracy on age & gender",
      "UTKFace dataset training",
      "Hyperparameter optimization",
      "Multi-task learning architecture",
    ],
    accent: "var(--blue-bright)",
    glow: "rgba(68,136,255,0.12)",
    link: "https://linkedin.com/posts/uzair1434",
    icon: "👤",
  },
  {
    id: "sms-spam",
    title: "SMS Spam Classifier",
    subtitle: "98%+ Accuracy NLP System",
    badge: "98%+ Accuracy",
    badgeColor: "var(--purple)",
    badgeBg: "rgba(136,68,255,0.12)",
    description:
      "NLP-based spam detection model using TF-IDF vectorization. Trained and compared Naive Bayes, SVM, and Logistic Regression models, achieving 98%+ accuracy.",
    tech: ["Python", "NLP", "Scikit-Learn", "TF-IDF", "SVM", "Naive Bayes"],
    highlights: [
      "98%+ spam detection accuracy",
      "TF-IDF vectorization pipeline",
      "Multi-model comparison",
      "SVM, Naive Bayes, Logistic Regression",
    ],
    accent: "var(--purple)",
    glow: "rgba(136,68,255,0.12)",
    link: "https://linkedin.com/posts/uzair1434",
    icon: "📱",
  },
  {
    id: "car-sales-powerbi",
    title: "Car Sales Analytics (Power BI)",
    subtitle: "Multi-Page Interactive Dashboard",
    badge: "Power BI",
    badgeColor: "#F2C811",
    badgeBg: "rgba(242,200,17,0.1)",
    description:
      "Dynamic multi-page Power BI dashboard for car sales analytics featuring interactive slicers, KPIs, pricing analysis, mileage trends, and fuel-type market share visualizations.",
    tech: ["Power BI", "Power Query", "DAX", "Data Analytics"],
    highlights: [
      "Multi-page interactive dashboard",
      "Dynamic KPI tracking",
      "Fuel-type market share",
      "Pricing & mileage analysis",
    ],
    accent: "#F2C811",
    glow: "rgba(242,200,17,0.1)",
    link: "https://linkedin.com/posts/uzair1434",
    icon: "📈",
  },
  {
    id: "people-counting",
    title: "Real-Time People Counter",
    subtitle: "Retail Analytics with YOLO11n + SORT",
    badge: "YOLO11n + SORT",
    badgeColor: "#ff6644",
    badgeBg: "rgba(255,100,68,0.1)",
    description:
      "Retail analytics system to detect, track, and count people entering and exiting a store using YOLO11n and SORT tracking algorithm. Real-time occupancy intelligence.",
    tech: ["YOLO11n", "SORT", "Python", "OpenCV", "Computer Vision"],
    highlights: [
      "Real-time people counting",
      "Direction-aware tracking",
      "Entry/Exit analytics",
      "Retail occupancy intelligence",
    ],
    accent: "#ff6644",
    glow: "rgba(255,100,68,0.1)",
    link: "https://linkedin.com/posts/uzair1434",
    icon: "👥",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      id={`project-${project.id}`}
      className="glass-card"
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        background: `linear-gradient(135deg, ${project.glow} 0%, rgba(10,22,40,0.9) 100%)`,
        cursor: "default",
      }}
    >
      {/* Card Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ fontSize: "2rem" }}>{project.icon}</span>
          <div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                lineHeight: 1.3,
              }}
            >
              {project.title}
            </h3>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>
              {project.subtitle}
            </p>
          </div>
        </div>
        <span
          style={{
            padding: "0.25rem 0.75rem",
            background: project.badgeBg,
            border: `1px solid ${project.badgeColor}30`,
            borderRadius: "100px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            color: project.badgeColor,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {project.badge}
        </span>
      </div>

      {/* Description */}
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
        {project.description}
      </p>

      {/* Highlights */}
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        {project.highlights.map((h) => (
          <li key={h} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.83rem", color: "var(--text-secondary)" }}>
            <span style={{ color: project.accent, fontSize: "0.6rem", flexShrink: 0 }}>▶</span>
            {h}
          </li>
        ))}
      </ul>

      {/* Tech Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              padding: "0.2rem 0.6rem",
              background: `${project.accent}10`,
              border: `1px solid ${project.accent}25`,
              borderRadius: "100px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              color: project.accent,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Link */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          color: project.accent,
          textDecoration: "none",
          fontSize: "0.85rem",
          fontWeight: 600,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "1rem",
          marginTop: "auto",
          transition: "opacity 0.2s",
          opacity: 0.8,
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.8")}
      >
        View on LinkedIn
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
        </svg>
      </a>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-subtitle">What I&apos;ve Built</div>
          <h2 className="section-title">Featured Projects</h2>
          <div className="gradient-line" style={{ margin: "1rem auto 0" }} />
          <p style={{ color: "var(--text-secondary)", marginTop: "1.5rem", maxWidth: "550px", margin: "1rem auto 0" }}>
            Real-world AI systems spanning computer vision, NLP, and data analytics. All built from scratch with production-quality code.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
