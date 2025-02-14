import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Product Management",
    skills: [
      { name: "Product Operations", level: 90 },
      { name: "Product Strategy", level: 85 },
      { name: "Go-To-Market (GTM) Strategy", level: 80 },
      { name: "Agile & Scrum Methodologies", level: 75 },
      { name: "Stakeholder Management", level: 88 },
    ],
  },
  {
    category: "AI & Data Analytics",
    skills: [
      { name: "AI Product Strategy", level: 85 },
      { name: "Product Analytics", level: 80 },
      { name: "Data-Driven Decision Making", level: 85 },
      { name: "A/B Testing", level: 75 },
      { name: "User Research & Feedback Analysis", level: 90 },
    ],
  },
  {
    category: "Business & Market Insights",
    skills: [
      { name: "Market Research", level: 85 },
      { name: "Competitive Analysis", level: 80 },
      { name: "Customer Journey Mapping", level: 88 },
      { name: "Monetization & Pricing Strategy", level: 75 },
      { name: "Business Development", level: 85 },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication", level: 95 },
      { name: "Problem Solving", level: 90 },
      { name: "Interpersonal Skills", level: 85 },
      { name: "Customer-Centric Thinking", level: 92 },
      { name: "Time Management", level: 90 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 px-4 sm:px-6 lg:px-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {category.category}
              </h3>
              {category.skills.map((skill, i) => (
                <div key={i} className="mb-3 sm:mb-4">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-700 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <motion.div
                    className="w-full h-2 sm:h-3 bg-gray-200 rounded-md overflow-hidden mt-1"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                  >
                    <div className="h-full bg-blue-500"></div>
                  </motion.div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
