import Link from "next/link";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

function Contact() {
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
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Contact</h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
          Feel free to reach out! You can email me at{" "}
          <a href="mailto:phoenyx004@gmail.com" className="text-blue-600 underline hover:text-blue-800">
            phoenyx004@gmail.com
          </a>
          .
        </p>
        <form
          action={`https://formspree.io/f/${formspreeId}`}
          method="POST"
          className="w-full max-w-md bg-white/90 rounded-xl shadow px-8 py-6 flex flex-col gap-4"
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
