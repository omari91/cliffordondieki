import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Product & Business",
    skills: [
      { name: "Product Operations", level: 90 },
      { name: "Business Development", level: 85 },
      { name: "Strategic Planning", level: 65 },
      { name: "Change Management", level: 75 },
      { name: "Team Leadership", level: 88 },
    ],
  },
  {
    category: "Software & Technology",
    skills: [
      { name: "Software as a Service (SaaS)", level: 90 },
      { name: "CRM", level: 85 },
      { name: "Technical Support", level: 80 },
      { name: "System Administration", level: 75 },
      { name: "Microsoft Office", level: 95 },
    ],
  },
  {
    category: "Engineering & Research",
    skills: [
      { name: "Electrical Engineering", level: 85 },
      { name: "Power Systems", level: 80 },
      { name: "Power Electronics", level: 75 },
      { name: "Transformer", level: 70 },
      { name: "Wind Power", level: 65 },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication", level: 95 },
      { name: "Problem Solving", level: 90 },
      { name: "Interpersonal Skills", level: 85 },
      { name: "Customer Satisfaction", level: 88 },
      { name: "Time Management", level: 92 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
              {category.skills.map((skill, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-700 font-semibold">{skill.level}%</span>
                  </div>
                  <motion.div
                    className="w-full h-2 bg-gray-200 rounded-md overflow-hidden mt-1"
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
