import { motion } from "framer-motion";
import { skillsData } from "../data/skillsData";

const SkillBar = ({ skill, index }) => (
  <div className="mb-3 sm:mb-4">
    <div className="flex justify-between text-sm sm:text-base">
      <span className="text-gray-700">{skill.name}</span>
      <span className="text-gray-700 font-semibold">{skill.level}%</span>
    </div>
    <div className="w-full h-2 sm:h-3 bg-gray-200 rounded-md overflow-hidden mt-1">
      <motion.div
        className="h-full bg-blue-500"
        initial={{ width: 0 }}
        animate={{ width: `${skill.level}%` }}
        transition={{ duration: 1, delay: index * 0.1 }}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-12 px-4 sm:px-6 lg:px-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {category.category}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar 
                  key={skillIndex} 
                  skill={skill} 
                  index={skillIndex} 
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;