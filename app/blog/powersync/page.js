"use client";
import Header from "@/components/header";
import { useEffect, useState } from "react";

function Page() {
  const [dark, setDark] = useState(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    setDark(savedTheme === "dark");
  }, []);

  useEffect(() => {
    if (dark === null) return;

    if (dark) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [dark]);
  return (
    <main className="flex min-h-screen flex-col items-center bg-[url(/PHNX-bg.png)] bg-center bg-cover">
      <Header dark={dark} setDark={setDark} />
      <div className="fixed inset-0 bg-black/40 z-10 pointer-events-none" aria-hidden="true"></div>
      <section
        id="about-me"
        className=" w-11/12 max-w-2xl mx-auto mt-24 px-6 py-8 bg-white/90 dark:bg-gray-900/90 z-30 rounded-xl shadow flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">PowerSync: Creating Apps for Users Anywhere</h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </section>
    </main>
  );
}

export default Page;
