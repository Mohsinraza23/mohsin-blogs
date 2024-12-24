import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center">
      <div className="bg-white sm:p-8 p-4 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-xl rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row items-center">
          {/* Profile Text */}
          <p className="text-sm text-gray-900 text-justify hover:text-orange-400 hover:underline transition-colors duration-200 sm:mr-6">
            Hi! I am <b>Mohsin</b>, a passionate Full-Stack Developer with a deep interest in
            cutting-edge technologies. Currently, I am enhancing my skills by studying <b>Agentic AI</b> through
            the <b>PIAIC program</b>, where I explore the future possibilities of autonomous systems and their
            real-world applications. As a full-stack developer, I specialize in building dynamic, user-friendly,
            and scalable web applications. From designing responsive frontends to implementing efficient backends,
            I strive to deliver seamless digital experiences. My journey in tech is fueled by my curiosity and a
            commitment to continuous learning. Beyond coding, I am fascinated by artificial intelligence and its
            transformative potential. I aim to integrate my development expertise with AI knowledge to create
            innovative solutions that solve real-world problems. Feel free to connect with me to discuss ideas,
            collaborations, or the exciting world of AI and web development. Together, let’s push the boundaries
            of what technology can achieve!
          </p>

          {/* Profile Image */}
          <Image
            src="/m.png"
            alt="Profile picture of Mohsin Raza"
            width={160}
            height={160}
            className="rounded-full mt-4 sm:mt-0"
          />
        </div>

        {/* Name Section */}
        <h3 className="text-gray-800 text-lg font-semibold mt-6 text-center hover:text-orange-400 hover:underline transition-colors duration-200">
          Mohsin Raza
        </h3>
      </div>
    </div>
  );
};

export default AboutPage;
