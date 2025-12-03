import type { Metadata } from "next";
import { ThemeProvider } from "../context/ThemeContext";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Bookmark Landing Page",
  description: "Frontend Mentor challenge built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <link rel="icon" href="/favicon.png" type="image/png" />
      <body
        className={`${rubik.variable} ${rubik.variable} antialiased`}
      >
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>

      </body>
    </html>
  );
}
