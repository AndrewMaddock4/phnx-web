import Header from "@/components/header";
import Link from "next/link";

const posts = [
  {
    slug: "cyborg",
    title: "Cyborgs, Technology, and The Future",
    excerpt: "An exploration of humanity & technology in the modern world.",
    date: "2025-08-10",
  },
  {
    slug: "powersync",
    title: "PowerSync: Creating Apps for Users Anywhere",
    excerpt: "Looking at creating a web app that works offline and online seamlessly.",
    date: "2025-08-09",
  },
];

function Blog() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-16 relative">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen w-full pt-16">
        <div className="w-full max-w-2xl flex flex-col gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-xl shadow hover:shadow-lg transition p-6 border border-gray-100 hover:border-blue-300"
            >
              <h2 className="text-2xl font-semibold mb-1 text-blue-700">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-2">{new Date(post.date).toLocaleDateString()}</p>
              <p className="text-gray-700">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
