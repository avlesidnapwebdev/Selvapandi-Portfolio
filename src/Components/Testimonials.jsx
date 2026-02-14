import { Star } from "lucide-react";
import TitleHeader from "../Components/TitleHeader";
import GlowCard from "../Components/GlowCard";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
     {
      name: "Mahalakshmi​",
      mentions: "Student - HTML, CSS, JavaScript",
      review:
        "At first, I found it a bit difficult to interact. But as time went on, it became fun and I was able to learn easily. Initially, I was scared to speak up and ask doubts, but gradually I got comfortable. Your teaching skills are excellent! Everything felt easier because you explained it so simply and clearly.",
      rating: 5,
    },
    {
      name: "RamaLakshmi",
      mentions: "Student - Full Stack (MERN)",
      review:
        "You didn’t just teach me to code — you taught me how to think like a developer. From zero knowledge in HTML, CSS, and JS to building real React and Node.js projects, I never thought I could do it. Your teaching style, discipline, and motivation helped me complete everything step-by-step.",
      rating: 5,
    },
  ];

  return (
    <section id="Testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Students feedback highlights ⭐️"
        />
        <div className="w-5/6 mt-4 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3 ">
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
