import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexorian AI Productivity Automator",
  description: "AI-enhanced task automation, prioritization, and workflow optimization.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}