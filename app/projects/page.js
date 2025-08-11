"use client";
import Header from "@/components/header";
import { useEffect, useState } from "react";

function Projects() {
  const [dark, setDark] = useState(window.localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [dark]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-800 px-4 relative">
      <Header dark={dark} setDark={setDark} />
      <div className="flex flex-col items-center justify-center min-h-screen w-full pt-32">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h1>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 text-center max-w-xl">This page is under construction. Please check back soon!</p>
      </div>
    </div>
  );
}

export default Projects;
