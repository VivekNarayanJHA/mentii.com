'use client';

import { useEffect, useState } from 'react';
import { apiClient } from '@/services/api';
import Header from '@/components/Header';
import HealthStatus from '@/components/HealthStatus';

export default function Home() {
  const [status, setStatus] = useState<{ status: string; message: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await apiClient.get('/health');
        setStatus(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to connect to backend');
        console.error('Health check failed:', err);
      } finally {
        setLoading(false);
      }
    };

    checkHealth();
  }, []);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Mentor
          </h1>
          <p className="text-xl text-gray-600">
            A modern full-stack application built with Express.js and Next.js
          </p>
        </section>

        <HealthStatus status={status} loading={loading} error={error} />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Backend</h2>
            <ul className="text-gray-700 space-y-2">
              <li>✓ Express.js server</li>
              <li>✓ RESTful API</li>
              <li>✓ CORS enabled</li>
              <li>✓ Morgan logging</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Frontend</h2>
            <ul className="text-gray-700 space-y-2">
              <li>✓ Next.js 14</li>
              <li>✓ React 18</li>
              <li>✓ TypeScript</li>
              <li>✓ Tailwind CSS</li>
            </ul>
          </div>
        </section>

        <section className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Backend Setup</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`cd backend
npm install
npm run dev`}
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Frontend Setup</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`cd frontend
npm install
npm run dev`}
              </pre>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
