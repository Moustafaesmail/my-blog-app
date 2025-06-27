import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#EEEEEE] dark:bg-[#121212] text-gray-900 dark:text-gray-100 p-4">
      <Image
        src="/blog-hero.png"
        alt="Blog illustration"
        width={400}
        height={300}
        className="w-full max-w-md rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
      />

      <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-10">
        Welcome to the Blog Viewer
      </h1>
      <p className="text-lg text-gray-700 mb-6 max-w-xl">
        Browse a collection of blog posts . Click below to start exploring!
      </p>

      <Link
        href="/posts"
        className="mt-6 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        View Posts
      </Link>
    </main>
  );
}