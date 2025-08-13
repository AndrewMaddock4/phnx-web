"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function Header({ dark, setDark }) {
  const [show, setShow] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  // Close sidebar on route change (optional, if using Next.js router events)
  useEffect(() => {
    if (!sidebarOpen) return;
    const handleRoute = () => setSidebarOpen(false);
    window.addEventListener("hashchange", handleRoute);
    window.addEventListener("popstate", handleRoute);
    return () => {
      window.removeEventListener("hashchange", handleRoute);
      window.removeEventListener("popstate", handleRoute);
    };
  }, [sidebarOpen]);

  return (
    <>
      {/* Mobile sidebar button */}
      <button
        className={`fixed top-6 left-4 z-[100] aspect-square w-12 sm:hidden bg-white/90 dark:bg-gray-900/90 rounded-full p-2 shadow transition-transform duration-300 ${
          !sidebarOpen ? "translate-x-0" : "-translate-x-32"
        }`}
        aria-label="Open menu"
        onClick={() => setSidebarOpen(true)}
      >
        <i className="fas fa-bars text-gray-900 dark:text-white"></i>
      </button>

      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 z-[99] bg-black/40 transition-opacity duration-300 sm:hidden ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden={!sidebarOpen}
      >
        <nav
          className={`absolute top-0 left-0 h-full w-64 font-bold bg-white dark:bg-gray-800 text-black border-r border-r-gray-200 dark:border-r-gray-700 dark:text-white  shadow-2xl flex flex-col gap-6 p-8 transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="self-end mb-8 text-2xl" aria-label="Close menu" onClick={() => setSidebarOpen(false)}>
            &times;
          </button>
          <Link href="/" className="hover:text-blue-600 transition" onClick={() => setSidebarOpen(false)}>
            About
          </Link>
          <Link href="/projects" className="hover:text-blue-600 transition" onClick={() => setSidebarOpen(false)}>
            Projects
          </Link>
          <Link href="/blog" className="hover:text-blue-600 transition" onClick={() => setSidebarOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition" onClick={() => setSidebarOpen(false)}>
            Contact
          </Link>
          <button
            className="mt-4 bg-blue-600 text-white rounded-full px-6 py-2 font-semibold shadow hover:bg-blue-700 transition"
            onClick={() => {
              setDark(!dark);
              setSidebarOpen(false);
            }}
          >
            Toggle Dark Mode
          </button>
        </nav>
      </div>

      {/* Desktop header */}
      <header
        className={`w-full flex justify-center fixed top-6 left-0 z-50 px-2 sm:px-4 transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-32"
        }`}
      >
        <nav className="hidden sm:flex justify-center gap-8 text-lg font-semibold bg-white/90 dark:bg-gray-900/90 px-8 py-3 rounded-full shadow-2xl text-black dark:text-white transition max-w-fit">
          <Link href="/" className="hover:text-blue-600 transition text-center py-auto">
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
        <button
          className="hidden sm:block aspect-square w-12 ml-8 rounded-full bg-blue-300 dark:bg-blue-600 text-black dark:text-white font-semibold shadow hover:bg-blue-700 hover:text-white transition"
          onClick={() => setDark(!dark)}
        >
          {dark ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
        </button>
      </header>
    </>
  );
}

export default Header;
