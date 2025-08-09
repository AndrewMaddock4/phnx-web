"use client";
import Link from "next/link";

export default function Home() {
  // Scroll to About Me section with offset for header
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about-me");
    if (aboutSection) {
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight + 24 : 80; // 24px for top-6
      const sectionTop = aboutSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      {/* Floating Header */}
      <header className="w-full flex justify-center fixed top-6 left-0 z-50">
        <nav className="flex gap-8 text-lg font-semibold bg-white/90 px-8 py-3 rounded-full shadow text-black">
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
      {/* Hero Section */}
      <section className="w-screen h-[100vh] flex flex-col justify-center items-center bg-[url(/PHNX.png)] bg-center bg-cover relative overflow-hidden">
        {/* Overlay FIRST, lower z-index */}
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" aria-hidden="true"></div>
        {/* Hero content ABOVE overlay */}
        <div className="flex flex-col items-center justify-center h-full relative z-20">
          <h1 className="text-white font-bold text-6xl drop-shadow-lg">Phoenix Null</h1>
          <p className="text-white text-xl mt-4 drop-shadow">Software Developer | Tech Enthusiast</p>
          <button
            onClick={handleScrollToAbout}
            className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition"
          >
            Learn More
          </button>
        </div>
      </section>
      {/* About Me Section */}
      <section id="about-me" className="w-full max-w-2xl mx-auto mt-12 px-6 py-8 bg-white/90 rounded-xl shadow flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          Hi, I&apos;m Phoenix! I&apos;m a passionate developer focused on building modern, accessible, and visually engaging applications. I love
          exploring new technologies and turning ideas into reality through code.
        </p>
        <p className="text-lg text-gray-700 text-center mb-6">
          I&apos;ve been developing software profressionally for the past 4 years, with a strong background in full-stack and Windows development. I
          have worn many hats in these years, being involved in everything from planning, development, testing, and maintaining software. I have
          worked with a variety of technologies, including React, Node.js, and .NET.
        </p>
        <p className="text-lg text-gray-700 text-center mb-6">
          I&apos;m always eager to learn more, recently learning game development in the Godot engine. This has been a fun and exciting journey, and I
          look forward to continuing to grow as a developer
        </p>
        <a href="/contact" className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition">
          Contact Me
        </a>
      </section>
    </main>
  );
}
