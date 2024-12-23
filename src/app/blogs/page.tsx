import React from "react";
import Image from "next/image"; 

const page = () => {
  return (
    <div>
      <div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
        <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded overflow-hidden group">
              <Image
                src="/ai.png"
                alt="Blog Post 1"
                width={500}
                height={300}
                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-orange-500 relative">
                  What is AI?
                  <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <p className="text-gray-500 text-sm relative transition-colors duration-300 group-hover:text-orange-500">
                  Artificial Intelligence (AI) is a transformative technology
                  that mimics human intelligence to perform tasks such as
                  learning, problem-solving, and decision-making. It leverages
                  algorithms and vast datasets to identify patterns, make
                  predictions, and automate processes. AI has become integral to
                  industries like healthcare, education, and entertainment,
                  revolutionizing how we interact with technology. From virtual
                  assistants like Siri and Alexa to self-driving cars and
                  personalized recommendations, AI is shaping our daily
                  lives.The core of AI lies in machine learning and deep
                  learning, where systems improve themselves based on data. For
                  instance, in healthcare, AI helps in early disease detection
                  by analyzing medical images and patient histories. In
                  business, it streamlines operations through chatbots,
                  predictive analytics, and fraud detection. Education has also
                  benefited, with AI creating personalized learning paths for
                  students.Despite its advantages, AI raises ethical concerns
                  about job displacement, data privacy, and decision-making
                  transparency. As technology evolves, addressing these
                  challenges is crucial to ensure AI remains a force for good.
                  With ongoing advancements, AI continues to push boundaries,
                  promising a future where machines enhance human capabilities
                  and drive innovation.
                </p>
                <p className="text-orange-500 text-[13px] font-semibold mt-4">
                  25 December 2024
                </p>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded overflow-hidden group">
              <Image
                src="/Agentic.png"
                alt="Blog Post 2"
                width={500}
                height={300}
                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-orange-500 relative">
                  What is Agentic AI?
                  <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <p className="text-gray-500 text-sm relative transition-colors duration-300 group-hover:text-orange-500">
                  Agentic AI refers to artificial intelligence systems designed
                  to act as autonomous agents, capable of making decisions,
                  taking actions, and achieving goals independently. These
                  systems possess a high level of adaptability and can interact
                  dynamically with their environment. Unlike traditional AI,
                  which requires direct input or predefined rules, agentic AI
                  can learn from its surroundings, assess situations, and
                  execute tasks with minimal human intervention.The core feature
                  of agentic AI is its ability to function with agency, meaning
                  it can set objectives, plan strategies, and modify its
                  behavior to meet changing conditions. For example, in
                  robotics, an agentic AI can navigate a new environment,
                  avoiding obstacles and completing tasks without explicit
                  programming. Similarly, in customer service, it can
                  proactively assist users by understanding their needs and
                  offering solutions.Agentic AI relies heavily on advanced
                  algorithms, reinforcement learning, and neural networks. These
                  technologies enable it to process vast amounts of data,
                  predict outcomes, and improve performance over time. While it
                  opens new possibilities in automation and efficiency, it also
                  poses ethical concerns about control, accountability, and the
                  potential for unintended consequences. As agentic AI continues
                  to evolve..
                </p>
                <p className="text-orange-500 text-[13px] font-semibold mt-4">
                  25 December 2024
                </p>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded overflow-hidden group">
              <Image
                src="/next.png"
                alt="Blog Post 3"
                width={500}
                height={300}
                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-orange-500 relative">
                  What is Next.js 15?
                  <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <p className="text-gray-500 text-sm relative transition-colors duration-300 group-hover:text-orange-500">
                  Next.js is a popular open-source React framework that
                  simplifies the development of modern web applications. Built
                  on top of React, it provides powerful features like
                  server-side rendering (SSR), static site generation (SSG), and
                  dynamic routing, making it ideal for building high-performance
                  websites and applications. With Next.js, developers can create
                  seamless, user-friendly interfaces while optimizing for speed
                  and scalability.One of the standout features of Next.js is its
                  ability to render pages on the server, which improves search
                  engine optimization (SEO) and provides faster page load times.
                  It also supports hybrid applications, allowing developers to
                  combine server-side and static rendering within the same
                  project. This flexibility makes it suitable for various use
                  cases, from e-commerce platforms to content management
                  systems.Next.js comes with built-in routing, automatic code
                  splitting, and easy integration of APIs. It also supports
                  incremental static regeneration (ISR), enabling websites to
                  update static content without redeployment. Moreover, its hot
                  reloading feature speeds up the development process by
                  instantly reflecting changes in the browser.With a robust
                  community and comprehensive documentation, Next.js continues
                  to grow as a go-to framework for modern web development.
                </p>
                <p className="text-orange-500 text-[13px] font-semibold mt-4">
                  25 December 2024
                </p>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="bg-white rounded overflow-hidden group">
              <Image
                src="/python.png"
                alt="Blog Post 4"
                width={500}
                height={300}
                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-orange-500 relative">
                  What is Python?
                  <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <p className="text-gray-500 text-sm relative transition-colors duration-300 group-hover:text-orange-500">
                  Python is a high-level versatile programming language widely
                  recognized for its simplicity and readability. Created by
                  Guido van Rossum in 1991. Python has grown into one of the
                  most popular languages in the world. Its clean syntax makes it
                  beginner-friendly while its powerful libraries and frameworks
                  make it suitable for advanced programming tasks. Python is
                  applications are vast ranging from web development with
                  frameworks like Django and Flask to data analysis and
                  visualization with libraries like Pandas, NumPy and
                  Matplotlib. In artificial intelligence and machine learning
                  Python shines with tools like TensorFlow and PyTorch. It is
                  also used for automation, scripting and game development.
                  Python is cross-platform compatibility allows developers to
                  write code that runs seamlessly on different operating
                  systems. The language supports multiple programming paradigms,
                  including object-oriented procedural, and functional
                  programming, offering flexibility for various projects. Its
                  interactive interpreter makes it ideal for prototyping and
                  experimentation. Python is extensive standard library
                  simplifies common tasks like file handling web scraping and
                  database management. Additionally its vibrant community
                  provides vast resources tutorials and support, making it an
                  excellent choice for learners and professionals alike. Python
                  is not only a tool for building software but also a catalyst
                  for innovation enabling developers to turn their ideas into
                  reality efficiently and effectively.
                </p>
                <p className="text-orange-500 text-[13px] font-semibold mt-4">
                  25 December 2024
                </p>
              </div>
            </div>

            {/* Blog Post 5 */}
            <div className="bg-white rounded overflow-hidden group">
              <Image
                src="/llms.png"
                alt="Blog Post 5"
                width={500}
                height={300}
                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-orange-500 relative">
                  What Are LLMs?
                  <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <p className="text-gray-500 text-sm relative transition-colors duration-300 group-hover:text-orange-500">
                  Large Language Models (LLMs) are advanced artificial
                  intelligence systems trained on massive datasets of text to
                  understand, generate, and manipulate human language. These
                  models such as OpenAI is GPT series, leverage deep learning
                  techniques particularly transformers, to process and produce
                  coherent contextually relevant text. LLMs excel in natural
                  language processing (NLP) tasks like text completion
                  summarization translation, and question-answering. They power
                  applications such as chatbots virtual assistants and
                  automated content creation. By analyzing patterns in data
                  LLMs can generate human-like responses, enabling seamless and
                  engaging interactions. Training LLMs involves vast amounts of
                  textual data sourced from books articles and the internet
                  which equips them with the ability to predict word sequences
                  and generate logical content. Despite their capabilities, LLMs
                  are not perfect they can produce inaccurate or biased
                  outputs reflecting the limitations of their training data.
                  Their versatility has transformed industries like customer
                  service education, and healthcare automating repetitive
                  tasks and enhancing productivity. However their deployment
                  also raises ethical concerns, including misuse
                  misinformation and data privacy issues. As the technology
                  evolves addressing these challenges is crucial to ensure LLMs
                  are used responsibly
                </p>
                <p className="text-orange-500 text-[13px] font-semibold mt-4">
                  25 December 2024
                </p>
              </div>
            </div>

            {/* Blog Post 6 */}
            <div className="bg-white rounded overflow-hidden group">
              <Image
                src="https://readymadeui.com/team-image.webp"
                alt="Blog Post 6"
                width={500}
                height={300}
                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-orange-500 relative">
                  Machine Learning is Fun
                  <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <p className="text-gray-500 text-sm relative transition-colors duration-300 group-hover:text-orange-500">
                  Machine Learning (ML) is one of the most exciting fields in
                  technology enabling computers to learn from data and make
                  decisions without explicit programming. It is like teaching a
                  computer to think analyze and predict opening up endless
                  possibilities for innovation. From recommending your favorite
                  songs to recognizing faces in photos, ML powers countless
                  aspects of our daily lives. The magic of ML lies in its
                  algorithms which help systems identify patterns improve over
                  time and adapt to new data. Supervised learning unsupervised
                  learning, and reinforcement learning are the key approaches in
                  ML each suited for solving different types of problems. For
                  instance supervised learning predicts outcomes like house
                  prices while unsupervised learning finds hidden patterns
                  such as customer segments. Reinforcement learning trains
                  systems through trial and error often applied in robotics and
                  game AI. What makes ML even more fun is its creative
                  applications. Whether building chatbots, designing
                  self-driving cars or generating art ML provides
                  opportunities for innovation and exploration.
                  Beginner-friendly tools like Scikit-learn and TensorFlow make
                  it easier than ever to dive into the world of ML. Beyond its
                  technical aspects ML fosters curiosity and creativity,
                  enabling developers to turn ideas into reality. With every
                  breakthrough, ML continues to redefine technology making it a
                  thrilling journey for enthusiasts and professionals alike.
                </p>
                <p className="text-orange-500 text-[13px] font-semibold mt-4">
                  25 December 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
