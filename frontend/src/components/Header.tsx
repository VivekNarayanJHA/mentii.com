'use client';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600">
          Mentor
        </div>
        <div className="flex gap-6">
          <a href="/" className="text-gray-700 hover:text-indigo-600">Home</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="text-gray-700 hover:text-indigo-600">
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
