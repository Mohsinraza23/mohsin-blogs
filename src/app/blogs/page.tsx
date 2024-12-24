"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogPage = () => {
  const router = useRouter();

  const blogPosts = [
    {
      id: 1,
      title: "What is AI?",
      content:
        "Artificial Intelligence (AI) is a transformative technology that mimics human intelligence to perform tasks...",
      date: "25 December 2024",
      image: "/ai.png",
    },
    {
      id: 2,
      title: "What is Agentic AI?",
      content:
        "Agentic AI refers to artificial intelligence systems designed to act as autonomous agents...",
      date: "25 December 2024",
      image: "/Agentic.png",
    },
    {
      id: 3,
      title: "What is Next.js 15?",
      content:
        "Next.js is a popular open-source React framework that simplifies the development of modern web applications...",
      date: "25 December 2024",
      image: "/next.png",
    },
    {
      id: 4,
      title: "What is Python?",
      content:
        "Python is a high-level, versatile programming language widely recognized for its simplicity and readability...",
      date: "25 December 2024",
      image: "/python.png",
    },
    {
      id: 5,
      title: "What Are LLMs?",
      content:
        "Large Language Models (LLMs) are advanced artificial intelligence systems trained on massive datasets...",
      date: "25 December 2024",
      image: "/llms.png",
    },
    {
      id: 6,
      title: "Machine Learning is Fun",
      content:
        "Machine Learning (ML) is one of the most exciting fields in technology, enabling computers to learn from data...",
      date: "25 December 2024",
      image: "https://readymadeui.com/team-image.webp",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 font-[sans-serif]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded overflow-hidden group shadow-md transition-shadow hover:shadow-lg"
            >
              {/* Clickable Image */}
              <div
                onClick={() => router.push(`/blog/${post.id}`)}
                className="cursor-pointer"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                {/* Clickable Title */}
                <h3
                  onClick={() => router.push(`/blog/${post.id}`)}
                  className="cursor-pointer text-lg font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-orange-500"
                >
                  {post.title}
                </h3>

                {/* Clickable Content */}
                <p
                  onClick={() => router.push(`/blog/${post.id}`)}
                  className="cursor-pointer text-gray-500 text-sm truncate transition-colors duration-300 group-hover:text-orange-500"
                >
                  {post.content}
                </p>

                <p className="text-orange-500 text-[13px] font-semibold mt-4">
                  {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

