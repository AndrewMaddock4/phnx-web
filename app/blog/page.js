import Header from "@/components/header";

function Blog() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 relative">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen w-full pt-32">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Blog</h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">This page is under construction. Please check back soon!</p>
      </div>
    </div>
  );
}

export default Blog;
