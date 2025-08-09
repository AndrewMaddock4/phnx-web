import Link from "next/link";

function Header() {
  return (
    <header className="w-full flex justify-center fixed top-6 left-0 z-50">
      <nav className="flex gap-4 max-w-11/12 text-sm sm:text-lg font-semibold bg-white/90 px-8 py-3 rounded-full shadow text-black">
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
  );
}

export default Header;
