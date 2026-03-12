import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-black text-white dark:text-black">
      <div className="w-full bg-[#070707] dark:bg-gray-100 rounded-t-[50px] px-6 md:px-16 lg:px-24 py-20 flex flex-col">
        <div className="grid md:grid-cols-3 gap-14 max-w-7xl mx-auto">
          {/* NAME */}
          <div>
            <h2 className="text-4xl md:text-5xl text-wrap font-black leading-tight lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              SELVA PANDI
            </h2>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] mb-6">SOCIAL</h3>

            <div className="flex flex-col gap-4 text-lg">
              <a
                href="https://github.com/avlesidnapwebdev"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-purple-400 transition"
              >
                <FiGithub />
                Github
              </a>

              <a
                href="https://www.linkedin.com/in/selva-pandi-489981213/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-purple-400 transition"
              >
                <FiLinkedin />
                LinkedIn
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] mb-6">
              CONTACT
            </h3>

            <a
              href="mailto:selvapandi322@gmail.com"
              className="flex items-center gap-3 hover:text-purple-400 transition"
            >
              <FiMail />
              selvapandi322@gmail.com
            </a>

            <p className="text-sm mt-5 max-w-xs opacity-80">
              Available for freelance and internship opportunities.
            </p>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 dark:border-black/10 mt-16 pt-8 text-center text-sm opacity-70">
          © 2026 Selvapandi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
