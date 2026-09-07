import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uzair Ahmad Khan | AI/ML Engineer & Computer Vision Specialist",
  description:
    "Portfolio of Uzair Ahmad Khan – Computer Science graduate from UET Taxila specializing in Artificial Intelligence, Computer Vision, Deep Learning, and end-to-end Machine Learning pipelines. Experienced in YOLOv11, TensorFlow, PyTorch, and React.",
  keywords: [
    "Uzair Ahmad Khan",
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "Deep Learning",
    "YOLOv11",
    "YOLO",
    "TensorFlow",
    "PyTorch",
    "NLP",
    "UET Taxila",
    "Data Analytics",
    "Portfolio",
  ],
  authors: [{ name: "Uzair Ahmad Khan" }],
  openGraph: {
    title: "Uzair Ahmad Khan | AI/ML Engineer",
    description:
      "Specializing in Computer Vision, Deep Learning, and Real-Time AI Systems. CS Graduate from UET Taxila with CGPA 3.83.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
