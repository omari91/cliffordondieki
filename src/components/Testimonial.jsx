import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import avatars from your assets folder
import gethsunAvatar from "../assets/gethsun1.jpeg";    // Replace with actual file name
import valerieAvatar from "../assets/Valarie.jpeg";      // Replace with actual file name
import alishaAvatar from "../assets/Alisha.jpeg";        // Replace with actual file name
import darrenAvatar from "../assets/darren.jpeg";        // Replace with actual file name
import yukabethAvatar from "../assets/yukabeth.jpeg";    // Replace with actual file name

const testimonials = [
  {
    id: 1,
    name: "Gethsun Misesi",
    role: "Web3 Developer & Blockchain Advocate",
    date: "August 2, 2024",
    text: "A sales and product aficionado... Clifford embodies leadership with his hands on approach to execute and deliver on set objectives.",
    avatar: gethsunAvatar,
  },
  {
    id: 2,
    name: "Valerie O.",
    role: "Customer Success | Change Management | Project Management",
    date: "January 6, 2022",
    text: "Clifford is a reliable sales representative, who supported his colleagues to ensure the entire team succeeded. Caring and dynamic, Clifford looked after his clients well and executed his job successfully. He would be an asset to any sales organisation, and I’m sure there are many more areas of business Clifford could excel in given the opportunity.",
    avatar: valerieAvatar,
  },
  {
    id: 3,
    name: "Alisha Eberle",
    role: "Marketing Manager at Pembroke",
    date: "January 5, 2022",
    text: "Clifford is a committed and result oriented individual. Enjoyed working together and learning from each other during our interaction.",
    avatar: alishaAvatar,
  },
  {
    id: 4,
    name: "Darren Oyoo",
    role: "Head of Sales at gtxn Co.",
    date: "January 5, 2022",
    text: "Clifford is a very focused young professional with an eagerness to learn and a willingness to go the extra mile to ensure delivery of high quality outcomes. Clifford is well organised and possesses a unique growth mindset that has enabled him to take on unique challenges.",
    avatar: darrenAvatar,
  },
  {
    id: 5,
    name: "Yukabeth Kidenda",
    role: "Co-Founder & CEO at Teach For Kenya",
    date: "January 29, 2020",
    text: "I highly recommend Clifford Ondieki for any role that requires a blend of technical expertise, strategic thinking, and leadership. His commitment to driving customer satisfaction and enabling social innovation makes him a standout professional in his field.",
    avatar: yukabethAvatar,
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  // Auto-slide testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Testimonials
        </h2>
        <div className="relative overflow-hidden">
          <AnimatePresence>
            {testimonials.map(
              (testimonial, index) =>
                index === current && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover shadow-md"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        <p className="text-gray-500 text-xs">{testimonial.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
