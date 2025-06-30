import { motion } from "framer-motion";
import { educationData } from "../data/educationData";

const Education = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Education</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey has provided me with a strong foundation in engineering, 
            project management, and leadership skills essential for driving innovation.
          </p>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* University Logo */}
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={edu.logo}
                  alt={edu.university}
                  className="w-16 h-16 rounded-full shadow-md object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {edu.university}
                  </h3>
                  <p className="text-blue-500 font-semibold text-sm">{edu.year}</p>
                </div>
              </div>

              {/* Degree */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {edu.degree}
                </h4>
              </div>

              {/* Activities */}
              {edu.activities.length > 0 && (
                <div>
                  <h5 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Highlights
                  </h5>
                  <ul className="space-y-2">
                    {edu.activities.map((activity, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Continuous Learning Philosophy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              My educational journey reflects a commitment to continuous learning and professional development. 
              From my foundational engineering studies to advanced management education, I've consistently 
              sought opportunities to expand my knowledge and skills. This academic foundation, combined with 
              practical experience, enables me to bridge the gap between technical expertise and strategic 
              business thinking.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;