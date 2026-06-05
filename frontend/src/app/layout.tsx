import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mentor - Full Stack App',
  description: 'A modern full-stack application with Express.js backend and Next.js frontend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          {children}
        </div>
      </body>
    </html>
  );
}
