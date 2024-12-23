"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "What is Ai ?",
    content:
      "Artificial Intelligence (AI) is a transformative technology that mimics human intelligence to perform tasks such as learning, problem-solving, and decision-making. It leverages algorithms and vast datasets to identify patterns, make predictions, and automate processes....",
    date: "25 December 2024",
    image: "/ai.png",
  },
  {
    id: 2,
    title: "What is Agentic Ai ?",
    content:
      "Agentic AI refers to artificial intelligence systems designed to act as autonomous agents, capable of making decisions, taking actions, and achieving goals independently. These systems possess a high level of adaptability and can interact dynamically with their environment....",
    date: "25 December 2024",
    image: "/Agentic.png",
  },
  {
    id: 3,
    title: "What is Next.js 15 ?",
    content:
      "Next.js is a popular open-source React framework that simplifies the development of modern web applications. Built on top of React, it provides powerful features like server-side rendering (SSR), static site generation (SSG), and dynamic routing, making it ideal for building high-performance websites and applications....",
    date: "25 December 2024",
    image: "/next.png",
  },
  {
    id: 4,
    title: "Why Learn Python ?",
    content:
      "Python is a high-level, versatile programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, it has become one of the most popular programming languages in the world. Python's clean syntax makes it beginner-friendly, yet powerful enough for advanced programming tasks...",
    date: "25 December 2024",
    image: "/python.png",
  },
  {
    id: 5,
    title: "What Are LLMs ?",
    content:
      "Large Language Models (LLMs) are advanced AI systems trained on vast amounts of text data to understand, generate, and manipulate human language. These models, such as OpenAI's GPT series, are built using deep learning techniques, particularly transformers, which enable them to process and generate coherent and contextually relevant text....",
    date: "25 December 2024",
    image: "/llms.png",
  },
  {
    id: 6,
    title: "Machine Learning is Fun..",
    content:
      "Machine Learning (ML) is one of the most exciting fields in technology, enabling computers to learn from data and make decisions without being explicitly programmed. It’s like teaching a computer to think, analyze, and predict, making it a thrilling journey for tech enthusiasts. From recommending your favorite songs to recognizing faces in photos, ML powers countless aspects of our daily lives...",
    date: "25 December 2024",
    image: "https://readymadeui.com/team-image.webp",
  },
];

const Card = () => {
  const router = useRouter();

  const handleReadMore = (id: number) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
      <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden group">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400} // Adjust as needed
                  height={200} // Adjust as needed
                  className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-lg font-bold text-gray-800 mb-3 hover:text-orange-500 hover:underline transition-colors duration-200"
                >
                  {post.title}
                </h3>
                <p
                  className="text-gray-500 text-sm hover:text-orange-500 hover:underline transition-colors duration-200"
                >
                  {post.content}
                </p>
                <p className="text-orange-500 text-[13px] font-semibold mt-4">
                  {post.date}
                </p>
                <button
                  onClick={() => handleReadMore(post.id)}
                  className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px] transition-transform transform hover:scale-105"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;




