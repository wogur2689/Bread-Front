import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "bread",
  description: "사랑과 정성으로 구운 달콤한 시간",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
