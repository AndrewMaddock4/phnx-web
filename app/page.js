"use client";
import { useState, useEffect } from "react";
import Header from "@/components/header";

export default function Home() {
  // Dark mode state
  const [dark, setDark] = useState(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    setDark(savedTheme === "dark");
  }, []);

  useEffect(() => {
    if (dark === null) return; // Avoid running this effect on initial render
    if (dark) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [dark]);

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
    <main className={`flex min-h-screen flex-col items-center bg-white dark:bg-gray-800 transition`}>
      {/* Header */}
      <Header dark={dark} setDark={setDark} />
      {/* Hero Section */}
      <section className="w-screen h-[100vh] flex flex-col justify-center items-center bg-[url(/PHNX.png)] bg-center bg-cover relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" aria-hidden="true"></div>
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
      <section
        id="about-me"
        className="w-full max-w-2xl mx-auto mt-12 px-6 py-8
          bg-white dark:bg-gray-900 transition
          rounded-xl shadow
          flex flex-col items-center
          border border-gray-200 dark:border-gray-700
        "
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
          Hi, I&apos;m Phoenix! I&apos;m a passionate developer focused on building modern, accessible, and visually engaging applications. I love
          exploring new technologies and turning ideas into reality through code.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
          I&apos;ve been developing software profressionally for the past 4 years, with a strong background in full-stack and Windows development. I
          have worn many hats in these years, being involved in everything from planning, development, testing, and maintaining software. I have
          worked with a variety of technologies, including React, Node.js, and .NET.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
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
