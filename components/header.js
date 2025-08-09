"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function Header() {
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const current = window.scrollY;
          if (current < 10) {
            setShow(true);
          } else if (current > lastScroll.current) {
            setShow(false);
          } else {
            setShow(true);
          }
          lastScroll.current = current;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full flex justify-center fixed top-6 left-0 z-50 px-2 sm:px-4 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-32"
      }`}
    >
      <nav className="flex justify-center gap-4 sm:gap-8 text-lg font-semibold bg-white/90 px-4 sm:px-8 py-3 rounded-full shadow-2xl text-black w-full max-w-xs sm:max-w-fit">
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
