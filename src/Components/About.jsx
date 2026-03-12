import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white dark:bg-black text-black dark:text-white"
    >
      {/* TITLE */}
      <h2 className="text-5xl md:text-8xl font-black uppercase mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        About Me
      </h2>

      {/* DESCRIPTION */}

      <p className="max-w-3xl text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed capitalize">
        I am a passionate{" "}
        <span className="text-black dark:text-white font-semibold">
          Full-Stack Web Developer
        </span>{" "}
        focused on building modern web and mobile applications using scalable
        backend systems and clean user interfaces.
      </p>

      <p className="max-w-2xl mt-4 text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed capitalize">
        I enjoy solving real-world problems by developing performant,
        responsive, and user-friendly digital products.
      </p>

      {/* HIGHLIGHTS */}

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <span className="px-4 py-2 text-sm rounded-full border border-purple-400/40">
          MERN Stack Development
        </span>

        <span className="px-4 py-2 text-sm rounded-full border border-purple-400/40">
          Web & Mobile Applications
        </span>

        <span className="px-4 py-2 text-sm rounded-full border border-purple-400/40">
          Cloud Deployment
        </span>
      </div>

      {/* CTA */}
      <a href="#contact">
        <button className="mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition font-semibold">
          CONTACT ME
        </button>
      </a>
    </section>
  );
}
