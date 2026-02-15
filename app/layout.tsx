import './globals.css';
import React from 'react'; // penting untuk tipe ReactNode

export const metadata = {
  title: 'Taofik Hidayat | Security Analyst',
  description: 'Bug hunter | Pentester',
};

// kasih tipe ReactNode ke children
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}