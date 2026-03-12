import { Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import image from "../assets/pic.webp";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const roles = [
    "Full Stack Web Developer",
    "React Native Developer",
    "Web & Mobile App Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center px-6">
      <div className="max-w-7xl w-full">
        {/* TITLE */}
        <div className="text-center pt-36 md:pt-24 mb-12 md:mb-20">
          <h1 className="text-4xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            HI, I'M
          </h1>

          <h1 className="text-4xl md:text-8xl font-black">SELVAPANDI</h1>

          {/* ROLE SWITCH ANIMATION */}
          <div className="mt-6 h-10 flex justify-center items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-black dark:text-white text-lg md:text-4xl font-medium"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid md:grid-cols-3 items-center gap-10 p-5">
          {/* LEFT SIDE */}
          <div className="space-y-6 text-black dark:text-gray-300 text-sm md:text-xl text-center md:text-left">
            <p className="max-w-[320px] mx-auto md:mx-0">
              Full-stack developer passionate about building modern web and
              mobile applications with clean UI and scalable backend systems.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center md:justify-start gap-6">
              <a
                href="https://github.com/avlesidnapwebdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github
                  className="hover:text-purple-400 transition cursor-pointer"
                  size={28}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/selva-pandi-489981213/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  className="hover:text-purple-400 transition cursor-pointer"
                  size={28}
                />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=selvapandi322@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail
                  className="hover:text-purple-400 transition cursor-pointer"
                  size={28}
                />
              </a>
            </div>
          </div>

          {/* CENTER AVATAR */}
          <div className="flex justify-center order-first md:order-none">
            <img
              src={image}
              alt="avatar"
              className="w-[220px] sm:w-[260px] md:w-[420px] animate-float drop-shadow-xl"
            />
          </div>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <a href="#contact">
              <button className="px-14 py-4 text-lg rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition font-semibold shadow-lg">
                CONTACT ME
              </button>
            </a>
            <a href="#projects">
              <button className="px-10 py-4 text-lg rounded-full border border-black/20 dark:border-white/20 hover:bg-white/10 hover:scale-105 transition font-semibold">
                VIEW PROJECTS
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
