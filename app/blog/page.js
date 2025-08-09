import Link from "next/link";

function Blog() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 relative">
      {/* Floating Header */}
      <header className="w-full flex justify-center fixed top-6 left-0 z-50">
        <nav className="flex gap-8 text-lg font-semibold bg-white/90 px-8 py-3 rounded-full shadow">
          <Link href="/" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-blue-600 transition">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-blue-600 transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </nav>
      </header>
      <div className="flex flex-col items-center justify-center min-h-screen w-full pt-32">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Blog</h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">This page is under construction. Please check back soon!</p>
      </div>
    </div>
  );
}

export default Blog;
