'use client';

interface HealthStatusProps {
  status: { status: string; message: string } | null;
  loading: boolean;
  error: string | null;
}

export default function HealthStatus({ status, loading, error }: HealthStatusProps) {
  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        <p className="text-gray-600 mt-2">Checking backend connection...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
        <p className="text-red-800 font-semibold">⚠️ Connection Error</p>
        <p className="text-red-600">{error}</p>
        <p className="text-sm text-red-500 mt-2">Make sure the backend is running on http://localhost:5000</p>
      </div>
    );
  }

  if (status) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
        <p className="text-green-800 font-semibold">✓ Backend Connected</p>
        <p className="text-green-600">{status.message}</p>
        <p className="text-sm text-green-500 mt-2">Status: {status.status}</p>
      </div>
    );
  }

  return null;
}
