import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "JeyaSurya M | Full Stack Developer & AI Engineer",
  description: "Portfolio of JeyaSurya M - Full Stack Developer, AI & ML Engineer, and IoT Enthusiast aimed at building real-world scalable applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
