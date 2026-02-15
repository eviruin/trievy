import './globals.css';

export const metadata = {
  title: 'Taofik Hidayat | Security Analyst',
  description: 'Bug hunter and red team themed personal portfolio in English and Bahasa Indonesia.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
