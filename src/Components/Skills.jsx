import {
  SiReact,
  SiExpo,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiFigma,
  SiWordpress,
  SiShopify,
  SiWebflow,
  SiPostman,
  SiCloudflare,
  SiNginx,
} from "react-icons/si";

const skills = [
  { name: "React JS", icon: <SiReact /> },
  { name: "React Native", icon: <SiReact /> },
  { name: "Expo", icon: <SiExpo /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  // { name: "Framer Motion", icon: <SiFramer /> },
  { name: "Node JS", icon: <SiNodedotjs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "WordPress", icon: <SiWordpress /> },
  // { name: "Shopify", icon: <SiShopify /> },
  // { name: "Webflow", icon: <SiWebflow /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Cloudflare", icon: <SiCloudflare /> },
  // { name: "Nginx", icon: <SiNginx /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-colors duration-300"
    >
      {/* TITLE */}

      <h2 className="text-5xl md:text-8xl font-black uppercase mb-14 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        Skills
      </h2>

      {/* GRID */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
            flex items-center gap-4 p-5 rounded-xl
            border border-black/10 dark:border-white/10
            bg-black/5 dark:bg-white/5
            backdrop-blur-md
            hover:bg-black/10 dark:hover:bg-white/10
            transition
            "
          >
            <div className="text-3xl text-purple-500">{skill.icon}</div>

            <span className="font-medium text-black dark:text-gray-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
