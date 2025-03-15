import React from "react";
import { useParams, Link } from "react-router-dom"; // Import Link for navigation
import blogPosts from "../../data/blogdata";
import { Icon } from "@iconify/react"; // Import Iconify for icons

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return (
      <div className="text-center text-red-500 text-2xl mt-10">
        Post not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100 relative z-50 py-28 px-4 sm:px-6 lg:px-8 ">
      {/* Page Title */}
      <div className="max-w-7xl mx-auto text-center ">
        <h1 className="text-5xl font-bold text-neutral-900">Blog Details</h1>
        <p className="mt-4 text-lg text-neutral-600">
          Dive deeper into our latest blog posts.
        </p>
      </div>

      {/* Flex Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 mt-16">
        {/* Left Side: Sticky Image */}
        <div className="lg:w-1/2 sticky top-20   h-[calc(100vh-10rem)] flex items-center">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto max-h-[80vh] object-cover object-center rounded-lg shadow-2xl"
          />
        </div>

        {/* Right Side: Scrollable Details */}
        <div className="lg:w-1/2 bg-white rounded-lg shadow-2xl z-50 p-8">
          {/* Title */}
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            {post.title}
          </h1>

          {/* Author and Date */}
          <div className="flex items-center text-neutral-600 mb-6">
            {/* Avatar */}
            <img
              src={post.avatar}
              alt={post.author}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <span className="block font-medium">{post.author}</span>
              <span className="block text-sm text-neutral-500">{post.date}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-neutral-700 mb-8">{post.description}</p>

          {/* Content */}
          <div className="prose prose-lg text-neutral-700">{post.content}</div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col lg:flex-row gap-4">
            {/* Back Button */}
            <Link to="/" className="w-full lg:w-auto">
              <button className="flex items-center justify-center px-6 py-3 bg-gradient-to-tr from-neutral-700 to-neutral-950 text-white text-xl  transform hover:scale-95 transition-all hover:shadow-2xl duration-500 gap-2 w-full">
                <Icon icon="mdi:arrow-left" className="text-xl" />
                Back to Home
              </button>
            </Link>

            {/* Shop Button */}
            <Link
              to="/shop" // Replace with your actual shop route
              className="w-full lg:w-auto"
            >
              <button className="flex items-center justify-center px-6 py-3 bg-gradient-to-tr from-neutral-700 to-neutral-950 text-white text-xl transform hover:scale-95 transition-all hover:shadow-2xl duration-500 gap-2 w-full">
                <Icon icon="weui:shop-outlined" className="text-xl" />
                <span className="leading-7">Shop Now</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
