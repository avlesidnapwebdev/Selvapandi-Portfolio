import React, { useState } from "react";

import Aqua from "../assets/Aquariumshop.webp";
import pilotHorizons from "../assets/pilotHorizons.webp";
import expense from "../assets/expensesracker.webp";
import prabazone from "../assets/prabazone.webp";

export default function Projects() {

  const [activeCard, setActiveCard] = useState(null);

  const projectList = [
    {
      id: "01",
      subtitle: "Web & Mobile Application",
      title: "Expenses Tracker",
      tech: "React JS, Node JS, Express JS, MongoDB",

      image: expense,

      live: "https://expensestra.selvapandi.com/",
      githubWeb: "https://github.com/avlesidnapwebdev/ExpenseTracker",
      githubMobile: "https://github.com/avlesidnapwebdev/ExpenseTracker-Mobile",
    },

    {
      id: "02",
      subtitle: "Web Application",
      title: "Aquarium Shop",
      tech: "React JS, Node JS, Express JS, MongoDB",

      image: Aqua,

      live: "https://aquariumshop.selvapandi.com/",
      githubWeb: "https://github.com/avlesidnapwebdev/AquariumShop",
    },

    {
      id: "03",
      subtitle: "WordPress Project",
      title: "Pilot Horizons",
      tech: "WordPress",

      image: pilotHorizons,

      live: "https://pilothorizons.infinityfreeapp.com/",
    },

    {
      id: "04",
      subtitle: "WordPress Project",
      title: "PrabaZone",
      tech: "WordPress",

      image: prabazone,

      live: "https://prabazone.com",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300"
    >

      {/* TITLE */}

      <div className="text-center mb-16 md:mb-24">

        <h2 className="text-4xl md:text-8xl font-black uppercase">
          PROJECTS
        </h2>

      </div>


      {/* STACK CONTAINER */}

      <div className="max-w-6xl mx-auto px-3 relative h-[360vh]">

        {projectList.map((p, index) => {

          const offset = index * 145;
          const baseZ = 10 + index;

          const zIndex =
            activeCard === index
              ? 100
              : baseZ;

          return (

            <div
              key={p.id}
              className="sticky transition-transform duration-300"
              style={{ top: `${100 + offset}px`, zIndex }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >

              <div className="bg-neutral-100 dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-3xl p-5 md:p-8 my-6 shadow-xl hover:scale-[1.02] transition duration-300">

                {/* HEADER */}

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">

                  <div className="flex gap-3 items-start">

                    <span className="text-2xl md:text-5xl font-bold">
                      {p.id}
                    </span>

                    <div>

                      <p className="text-xs uppercase opacity-60">
                        {p.subtitle}
                      </p>

                      <h3 className="text-lg md:text-xl font-semibold">
                        {p.title}
                      </h3>

                      <p className="text-xs md:text-sm opacity-60">
                        {p.tech}
                      </p>

                    </div>

                  </div>


                  {/* BUTTONS */}

                  <div className="flex flex-wrap gap-2">

                    {p.githubWeb && (
                      <a
                        href={p.githubWeb}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-black/20 dark:border-white/20 rounded-full px-4 py-2 text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                      >
                        GITHUB WEB
                      </a>
                    )}

                    {p.githubMobile && (
                      <a
                        href={p.githubMobile}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-black/20 dark:border-white/20 rounded-full px-4 py-2 text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                      >
                        GITHUB MOBILE
                      </a>
                    )}

                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-black/20 dark:border-white/20 rounded-full px-4 py-2 text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                      >
                        LIVE PROJECT
                      </a>
                    )}

                  </div>

                </div>


                {/* IMAGE GRID */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                  <img
                    src={p.image}
                    alt={p.title}
                    className="rounded-xl md:col-span-2"
                  />

                  <div className="grid grid-cols-2 md:grid-cols-1 gap-4">

                    <img
                      src={p.image}
                      alt={p.title}
                      className="rounded-xl"
                    />

                    <img
                      src={p.image}
                      alt={p.title}
                      className="rounded-xl"
                    />

                  </div>

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}