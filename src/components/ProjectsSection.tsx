"use client";

const projects = [
  {
    id: "nextgen-traffic",
    title: "NextGen Traffic: Smart Traffic Monitoring System",
    subtitle: "YOLOv11, SORT, EasyOCR, React",
    badge: "FYP",
    badgeColor: "var(--cyan)",
    badgeBg: "rgba(0,212,255,0.12)",
    description:
      "Built a real-time traffic monitoring system using YOLOv11 and SORT, with custom-trained models for rickshaws, cars, buses, trucks, and motorcycles, direction-aware counting, and traffic-flow analytics. Integrated License Plate Recognition (EasyOCR) and helmet, wrong-way, triple-riding, and accident detection modules; built a React dashboard for live statistics and violation alerts.",
    tech: ["YOLOv11", "SORT", "EasyOCR", "React", "Python", "OpenCV"],
    highlights: [
      "Real-time traffic monitoring with YOLOv11 and SORT",
      "Custom-trained models for local vehicle categories",
      "License Plate Recognition (EasyOCR)",
      "Helmet, wrong-way, triple-riding detection",
      "Live React dashboard for statistics and alerts",
    ],
    accent: "var(--cyan)",
    glow: "rgba(0,212,255,0.12)",
    link: "https://www.linkedin.com/posts/uzair1434_fyp-finalyearproject-nextgentraffic-activity-7479601219775127553-ZvX5",
    icon: "🚦",
  },
  {
    id: "bottle-cap-detection",
    title: "AI-Powered Bottle Cap Detection & Counting System",
    subtitle: "Python, YOLO, Computer Vision, OpenCV",
    badge: "Quality Control",
    badgeColor: "var(--green)",
    badgeBg: "rgba(0,255,136,0.12)",
    description:
      "Developed a real-time inspection system classifying bottles as Capped/Uncapped with object tracking and virtual-line counting to count each bottle once. Added live statistics and color-coded bounding boxes for automated quality inspection.",
    tech: ["Python", "YOLO", "Computer Vision", "OpenCV"],
    highlights: [
      "Real-time bottle cap detection system",
      "Capped/Uncapped classification",
      "Object tracking with virtual-line counting",
      "Live statistics and color-coded bounding boxes",
      "Automated quality inspection",
    ],
    accent: "var(--green)",
    glow: "rgba(0,255,136,0.12)",
    link: "https://www.linkedin.com/posts/uzair1434_artificialintelligence-computervision-machinelearning-activity-7501714488044449792-Fj4B",
    icon: "🍼",
  },
  {
    id: "skipping-counter",
    title: "AI-Based Skipping Counter using YOLO Pose Estimation",
    subtitle: "YOLO Pose, Ultralytics, OpenCV, NumPy",
    badge: "Pose AI",
    badgeColor: "var(--blue-bright)",
    badgeBg: "rgba(68,136,255,0.12)",
    description:
      "Built a real-time skipping counter using pose estimation and ankle keypoint tracking, with dynamic counting-line positioning, movement smoothing, and re-arm logic. Added jumps-per-minute calculation and skeleton visualization.",
    tech: ["YOLO Pose", "Ultralytics", "OpenCV", "NumPy", "Python"],
    highlights: [
      "Real-time skipping counter with pose estimation",
      "Ankle keypoint tracking for accurate counting",
      "Dynamic counting-line positioning",
      "Movement smoothing and re-arm logic",
      "Jumps-per-minute calculation with skeleton visualization",
    ],
    accent: "var(--blue-bright)",
    glow: "rgba(68,136,255,0.12)",
    link: "https://www.linkedin.com/posts/uzair1434_computervision-yolo-yolopose-activity-7499536931530268672-3Tlk",
    icon: "🏃‍♂️",
  },
  {
    id: "iv-drip-monitoring",
    title: "Real-Time IV Drip Chamber Monitoring System",
    subtitle: "Python, Custom YOLO, OpenCV",
    badge: "Medical AI",
    badgeColor: "var(--purple)",
    badgeBg: "rgba(136,68,255,0.12)",
    description:
      "Developed a custom-trained YOLO system to detect the drip chamber, fluid drops, and tube in real time, with drop tracking, drop counting, and flow-rate calculation. Added Normal/Slow/Fast flow classification with low-fluid and stopped-flow alerts.",
    tech: ["Python", "Custom YOLO", "OpenCV", "Healthcare AI"],
    highlights: [
      "Custom-trained YOLO for medical equipment detection",
      "Real-time drip chamber and fluid drop detection",
      "Drop tracking, counting, and flow-rate calculation",
      "Normal/Slow/Fast flow classification",
      "Low-fluid and stopped-flow alert system",
    ],
    accent: "var(--purple)",
    glow: "rgba(136,68,255,0.12)",
    link: "https://www.linkedin.com/posts/uzair1434_yolo-computervision-objectdetection-activity-7496998343538233344-aK81",
    icon: "🏥",
  },
  {
    id: "skysight-ai",
    title: "SkySight AI — Aerial Traffic Monitoring & Tracking",
    subtitle: "Python, YOLOv12, OpenCV, Supervision, ByteTrack",
    badge: "Drone AI",
    badgeColor: "#F2C811",
    badgeBg: "rgba(242,200,17,0.1)",
    description:
      "Developed a custom YOLOv12 system for vehicle detection and tracking in high-altitude drone footage with Small/Large vehicle classification and traffic-density heatmaps. Used ByteTrack for stable tracking and optimized real-time video processing.",
    tech: ["Python", "YOLOv12", "OpenCV", "Supervision", "ByteTrack"],
    highlights: [
      "Custom YOLOv12 for high-altitude drone footage",
      "Vehicle detection and tracking from aerial view",
      "Small/Large vehicle classification",
      "Traffic-density heatmaps generation",
      "ByteTrack for stable tracking",
    ],
    accent: "#F2C811",
    glow: "rgba(242,200,17,0.1)",
    link: "https://www.linkedin.com/posts/uzair1434_computervision-yolov12-machinelearning-activity-7496605705353879552-GKtF",
    icon: "🚁",
  },
  {
    id: "ppe-tracking",
    title: "Smart PPE Tracking & Compliance System",
    subtitle: "Python, Custom YOLO26, Computer Vision",
    badge: "Safety AI",
    badgeColor: "#ff6644",
    badgeBg: "rgba(255,100,68,0.1)",
    description:
      "Developed a custom YOLO26 system to detect workers and PPE, with real-time personnel tracking and per-worker safety equipment association. Generated automated PPE compliance statistics for industrial safety and site monitoring.",
    tech: ["Python", "Custom YOLO26", "Computer Vision", "Safety AI"],
    highlights: [
      "Custom YOLO26 for worker and PPE detection",
      "Real-time personnel tracking system",
      "Per-worker safety equipment association",
      "Automated PPE compliance statistics",
      "Industrial safety and site monitoring",
    ],
    accent: "#ff6644",
    glow: "rgba(255,100,68,0.1)",
    link: "https://www.linkedin.com/posts/uzair1434_ai-artificialintelligence-computervision-activity-7490883721991057408-N_-J",
    icon: "👷‍♂️",
  },
  {
    id: "livestock-tracking",
    title: "Smart Livestock Tracking & Counting System",
    subtitle: "Python, YOLOv12, BoT-SORT",
    badge: "Agriculture",
    badgeColor: "var(--green)",
    badgeBg: "rgba(0,255,136,0.12)",
    description:
      "Built a real-time livestock detection and tracking system counting sheep across a virtual boundary, using BoT-SORT to handle occlusion in crowded scenes. Added a live statistics dashboard and Picture-in-Picture view of the last counted animal.",
    tech: ["Python", "YOLOv12", "BoT-SORT", "Computer Vision"],
    highlights: [
      "Real-time livestock detection and tracking",
      "Sheep counting across virtual boundaries",
      "BoT-SORT for handling occlusion in crowds",
      "Live statistics dashboard",
      "Picture-in-Picture view of counted animals",
    ],
    accent: "var(--green)",
    glow: "rgba(0,255,136,0.12)",
    link: "https://www.linkedin.com/posts/uzair1434_ai-computervision-yolov12-activity-7489639858441818112-Rn9e",
    icon: "🐑",
  },
  {
    id: "fire-smoke-detection",
    title: "Real-Time Fire & Smoke Detection System",
    subtitle: "Python, Custom YOLO26, OpenCV",
    badge: "Fire Detection",
    badgeColor: "#ff4444",
    badgeBg: "rgba(255,68,68,0.1)",
    description:
      "Developed a custom YOLO26 fire/smoke detection system with temporal voting to reduce false positives from steam, fog, and dust. Added multi-channel alarm, email, and SMS alerts with live video inference.",
    tech: ["Python", "Custom YOLO26", "OpenCV", "Alert Systems"],
    highlights: [
      "Custom YOLO26 for fire and smoke detection",
      "Temporal voting to reduce false positives",
      "Handles steam, fog, and dust interference",
      "Multi-channel alarm system (email, SMS)",
      "Live video inference with real-time alerts",
    ],
    accent: "#ff4444",
    glow: "rgba(255,68,68,0.1)",
    link: "https://www.linkedin.com/posts/uzair1434_ai-artificialintelligence-computervision-activity-7485273743989198849-DL_j",
    icon: "🔥",
  },
  {
    id: "smart-parking",
    title: "AI Smart Parking System",
    subtitle: "Python, YOLOv11-OBB, OpenCV, ByteTrack",
    badge: "Smart Parking",
    badgeColor: "var(--cyan)",
    badgeBg: "rgba(0,212,255,0.12)",
    description:
      "Developed an AI parking system using YOLOv11-OBB for angled vehicle detection, dynamic slot mapping, and automatic zone-wise space calculation. Added a real-time parking statistics heatmap using ByteTrack.",
    tech: ["Python", "YOLOv11-OBB", "OpenCV", "ByteTrack"],
    highlights: [
      "YOLOv11-OBB for angled vehicle detection",
      "Dynamic parking slot mapping",
      "Automatic zone-wise space calculation",
      "Real-time parking statistics heatmap",
      "ByteTrack integration for vehicle tracking",
    ],
    accent: "var(--cyan)",
    glow: "rgba(0,212,255,0.12)",
    link: "https://www.linkedin.com/posts/uzair1434_computervision-yolov11-opencv-activity-7486883769648537600-KxhS",
    icon: "🅿️",
  },
  {
    id: "people-counting",
    title: "Real-Time People Counting System",
    subtitle: "YOLO11n, SORT, Python",
    badge: "Retail Analytics",
    badgeColor: "var(--purple)",
    badgeBg: "rgba(136,68,255,0.12)",
    description:
      "Built a real-time retail analytics system to detect, track, and count people entering/exiting a store with consistent identity tracking for automated people-flow monitoring.",
    tech: ["YOLO11n", "SORT", "Python", "OpenCV", "Retail Analytics"],
    highlights: [
      "Real-time people detection and tracking",
      "Entry/exit counting with direction awareness",
      "Consistent identity tracking across frames",
      "Automated people-flow monitoring",
      "Retail analytics and occupancy intelligence",
    ],
    accent: "var(--purple)",
    glow: "rgba(136,68,255,0.12)",
    link: "https://www.linkedin.com/posts/uzair1434_artificialintelligence-computervision-yolo11n-activity-7344730967544143873-urXG",
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
            AI systems spanning computer vision, NLP, healthcare monitoring, industrial safety, and real-time analytics. All projects feature custom-trained YOLO models and production-quality implementations.
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
