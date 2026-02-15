import './globals.css';

export const metadata = {
  title: 'Taofik Hidayat | Security Analyst',
  description: 'Bug hunter | Penetration Tester',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
