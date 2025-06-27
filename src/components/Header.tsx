import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          📝 Blog 
        </Link>
        <div className="space-x-4">
          <Link href="/posts" className="text-gray-700 hover:text-blue-600 transition">
            Posts
          </Link>
        </div>
      </nav>
    </header>
  );
}