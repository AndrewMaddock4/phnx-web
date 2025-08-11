"use client";
import Header from "@/components/header";
import { useEffect, useState } from "react";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

function Contact() {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-800 px-4 relative text-black dark:text-white">
      <Header dark={dark} setDark={setDark} />
      <div className="flex flex-col items-center justify-center min-h-screen w-full pt-32">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-200">Contact</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center max-w-xl">
          Feel free to reach out! You can email me at{" "}
          <a href="mailto:phoenyx004@gmail.com" className="text-blue-600 underline hover:text-blue-800">
            phoenyx004@gmail.com
          </a>
          .
        </p>
        <form
          action={`https://formspree.io/f/${formspreeId}`}
          method="POST"
          className="w-full max-w-md bg-white/90 dark:bg-gray-900/90 rounded-xl shadow px-8 py-6 flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <button type="submit" className="bg-blue-600 text-white rounded-full px-6 py-2 font-semibold shadow hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
