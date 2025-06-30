import { motion } from "framer-motion";
import { educationData } from "../data/educationData";

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Education
        </h2>

        {/* Scrollable Container */}
        <motion.div
          className="overflow-x-auto scrollbar-hide flex space-x-6 py-4 px-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md p-6 border border-gray-200"
            >
              {/* University Logo */}
              <div className="flex items-center space-x-4">
                <img
                  src={edu.logo}
                  alt={edu.university}
                  className="w-12 h-12 rounded-full shadow-md object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {edu.university}
                </h3>
              </div>

              {/* Degree & Year */}
              <p className="text-gray-600 mt-2 text-sm font-medium">{edu.degree}</p>
              <p className="text-blue-500 font-semibold mt-1">{edu.year}</p>

              {/* Activities */}
              {edu.activities.length > 0 && (
                <ul className="mt-4 space-y-1 text-sm text-gray-700">
                  {edu.activities.map((activity, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {activity}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;