import { useState, useEffect } from "react";
import { Home, User, Code, Folder, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", icon: <Home size={18} />, label: "Home", link: "#" },
    { id: "about", icon: <User size={18} />, label: "About", link: "#about" },
    {
      id: "skills",
      icon: <Code size={18} />,
      label: "Skills",
      link: "#skills",
    },
    {
      id: "projects",
      icon: <Folder size={18} />,
      label: "Projects",
      link: "#projects",
    },
    {
      id: "contact",
      icon: <Mail size={18} />,
      label: "Contact",
      link: "#contact",
    },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="hidden md:flex items-center justify-center gap-12 py-6 text-xs tracking-[0.25em] text-black dark:text-white uppercase font-bold">
          <a href="#">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>

          <ThemeToggle />
        </nav>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-3 px-4 py-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              onClick={() => setActive(item.id)}
              className={`flex flex-col items-center justify-center px-3 py-2 rounded-full transition duration-300

              ${
                active === item.id
                  ? "bg-white/20 text-black dark:text-white"
                  : "text-gray-400"
              }

              hover:bg-white/20`}
            >
              {item.icon}

              <span className="text-[10px] mt-1">{item.label}</span>
            </a>
          ))}

          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
