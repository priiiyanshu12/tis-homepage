import type { Metadata } from "next";
import ThemeProvider from "../src/components/ui/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tulas International School",
  description:
    "Tulas International School — shaping minds and building futures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}