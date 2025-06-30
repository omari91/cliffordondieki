import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials, linkedInPosts, blogPosts } from "../data/testimonialsData";

const BlogsAndLinkedIn = () => {
  const [activeTab, setActiveTab] = useState("linkedin");

  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Blogs & LinkedIn Insights</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore my thoughts on technology, healthcare innovation, and professional insights 
          through my LinkedIn posts and personal blog content.
        </p>
      </motion.div>

      {/* Toggle between LinkedIn and Blog Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg shadow-md p-1 flex">
          <button
            className={`px-6 py-3 rounded-md transition-all duration-200 font-medium ${
              activeTab === "linkedin" 
                ? "bg-blue-500 text-white shadow-md" 
                : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("linkedin")}
          >
            LinkedIn Posts
          </button>
          <button
            className={`px-6 py-3 rounded-md transition-all duration-200 font-medium ${
              activeTab === "blogs" 
                ? "bg-blue-500 text-white shadow-md" 
                : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("blogs")}
          >
            Personal Blogs
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {activeTab === "linkedin" ? (
          linkedInPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <iframe
                src={post.src}
                title={post.title}
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                className="w-full"
              />
            </motion.div>
          ))
        ) : blogPosts.length > 0 ? (
          blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <a 
                  href={post.link} 
                  className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Read More 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-2 text-center py-16"
          >
            <div className="bg-white rounded-xl shadow-lg p-12">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-700 mb-4">Coming Soon...</h3>
              <p className="text-gray-500 text-lg">Stay tuned for exciting blog content covering technology trends, healthcare innovation, and professional insights!</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.8 }}
    className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 max-w-4xl mx-auto"
  >
    <div className="flex items-center space-x-6 mb-6">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-20 h-20 rounded-full object-cover shadow-md"
      />
      <div>
        <h3 className="text-2xl font-bold text-gray-900">
          {testimonial.name}
        </h3>
        <p className="text-blue-600 font-medium">{testimonial.role}</p>
        <p className="text-gray-500 text-sm">{testimonial.date}</p>
      </div>
    </div>
    <blockquote className="text-gray-700 leading-relaxed text-lg italic">
      "{testimonial.text}"
    </blockquote>
  </motion.div>
);

const BlogsTestimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  // Auto-slide testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Insights & Testimonials</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover my professional insights through LinkedIn posts and read what colleagues 
            and collaborators have to say about working with me.
          </p>
        </motion.div>

        <BlogsAndLinkedIn />
        
        <div className="border-t border-gray-200 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What People Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testimonials from colleagues, clients, and collaborators who have experienced 
              my work ethic and professional capabilities firsthand.
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <TestimonialCard 
                key={testimonials[current].id}
                testimonial={testimonials[current]} 
              />
            </AnimatePresence>
            
            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 text-gray-600 hover:text-blue-500"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === current ? 'bg-blue-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 text-gray-600 hover:text-blue-500"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsTestimonials;