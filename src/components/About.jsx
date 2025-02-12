import { motion } from "framer-motion";
import profileImage from "../assets/clifford.png";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Image & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-sm hover:scale-105 transition-transform duration-500">
              <img
                src={profileImage}
                alt="Clifford Ondieki"
                className="rounded-lg shadow-lg w-full"
              />

              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4"
              >
                <div className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md text-sm font-semibold animate-float">
                  5+ Years Experience
                </div>
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md text-sm font-semibold animate-float delay-200">
                  50+ Projects Completed
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
            Motivated MSc Engineering Management student with experience in project operations, 
            customer service, and technology. Strong problem-solving, teamwork, and communication skills. 
            Looking for a part-time job in Berlin to gain international work experience while studying.
            </p>

            {/* Key Metrics */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
              className="mt-6 grid grid-cols-2 gap-6"
            >
              {[
                { value: "5+", label: "Years Experience", color: "text-blue-500" },
                { value: "50+", label: "Projects Handled", color: "text-green-500" },
                { value: "98%", label: "Customer Satisfaction", color: "text-purple-500" },
                { value: "5", label: "Industry Awards", color: "text-yellow-500" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="p-6 bg-white rounded-lg shadow-lg text-center"
                >
                  <p className={`text-4xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
