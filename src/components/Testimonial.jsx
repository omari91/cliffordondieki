import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials, linkedInPosts, blogPosts } from "../data/testimonialsData";

const BlogsAndLinkedIn = () => {
  const [activeTab, setActiveTab] = useState("linkedin");

  return (
    <section className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Blogs & LinkedIn Insights</h2>

      {/* Toggle between LinkedIn and Blog Tabs */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 mx-2 rounded-md transition-colors duration-200 ${
            activeTab === "linkedin" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("linkedin")}
        >
          LinkedIn Posts
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-md transition-colors duration-200 ${
            activeTab === "blogs" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("blogs")}
        >
          Personal Blogs
        </button>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activeTab === "linkedin" ? (
          linkedInPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
              <iframe
                src={post.src}
                title={post.title}
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ))
        ) : blogPosts.length > 0 ? (
          blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-40 object-cover rounded-md mb-4" 
              />
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-600">{post.description}</p>
              <a 
                href={post.link} 
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Read More →
              </a>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center">
            <h3 className="text-2xl font-semibold text-gray-700">Coming Soon...</h3>
            <p className="text-gray-500 mt-2">Stay tuned for exciting blog content!</p>
          </div>
        )}
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => (
  <motion.div
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
);

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
    <>
      <BlogsAndLinkedIn />
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Testimonials
          </h2>
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <TestimonialCard 
                key={testimonials[current].id}
                testimonial={testimonials[current]} 
              />
            </AnimatePresence>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === current ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;