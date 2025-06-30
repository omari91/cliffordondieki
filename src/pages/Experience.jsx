import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences, elephantHealthcare, otherExperiences } from "../data/experienceData";

const ExperienceCard = ({ experience, index }) => (
  <motion.div 
    key={index} 
    className="mb-6 p-6 border-l-4 border-blue-500 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex items-center gap-4 mb-4">
      <img 
        src={experience.logo} 
        alt={experience.company} 
        className="w-16 h-16 rounded-full object-cover shadow-md" 
      />
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{experience.position}</h3>
        <p className="text-blue-600 font-medium">{experience.company}</p>
        <p className="text-sm text-gray-500">{experience.duration}</p>
        {experience.location && (
          <p className="text-sm text-gray-500">{experience.location}</p>
        )}
      </div>
    </div>
    {experience.description && (
      <p className="mb-4 text-gray-700">{experience.description}</p>
    )}
    {experience.achievements && (
      <ul className="space-y-2 text-gray-700">
        {experience.achievements.map((achievement, i) => (
          <li key={i} className="flex items-start">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
            {achievement}
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

const CollapsibleSection = ({ title, isOpen, onToggle, children, borderColor = "border-green-500" }) => (
  <motion.div className={`mb-6 p-6 border-l-4 ${borderColor} bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
    <div 
      className="flex items-center gap-4 cursor-pointer" 
      onClick={onToggle}
    >
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="ml-auto text-blue-500"
      >
        ▼
      </motion.div>
    </div>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export default function Experience() {
  const [isElephantOpen, setIsElephantOpen] = useState(false);
  const [isOtherExperienceOpen, setIsOtherExperienceOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Professional Experience</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my professional journey, highlighting key roles and achievements 
            across various organizations in the technology and healthcare sectors.
          </p>
        </motion.div>

        {/* Individual Experiences */}
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} experience={exp} index={idx} />
        ))}

        {/* Elephant Healthcare (Collapsible) */}
        <CollapsibleSection
          title={
            <div className="flex items-center gap-4">
              <img 
                src={elephantHealthcare.logo} 
                alt="Elephant Healthcare" 
                className="w-16 h-16 rounded-full object-cover shadow-md" 
              />
              <span>Elephant Healthcare - Multiple Roles</span>
            </div>
          }
          isOpen={isElephantOpen}
          onToggle={() => setIsElephantOpen(!isElephantOpen)}
        >
          {elephantHealthcare.roles.map((role, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="mt-6 p-4 bg-gray-50 rounded-md border-l-2 border-blue-300"
            >
              <p className="text-lg font-semibold text-gray-800">{role.position}</p>
              <p className="text-sm text-gray-500 mb-3">{role.duration}</p>
              <ul className="space-y-2 text-gray-700">
                {role.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </CollapsibleSection>

        {/* Other Experience (Collapsible) */}
        <CollapsibleSection
          title="Additional Experience"
          isOpen={isOtherExperienceOpen}
          onToggle={() => setIsOtherExperienceOpen(!isOtherExperienceOpen)}
          borderColor="border-purple-500"
        >
          {otherExperiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="mt-6 p-4 bg-gray-50 rounded-md border-l-2 border-purple-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <img 
                  src={exp.logo} 
                  alt={exp.company} 
                  className="w-12 h-12 rounded-full object-cover shadow-md" 
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{exp.position}</h4>
                  <p className="text-blue-600 font-medium text-sm">{exp.company}</p>
                  <p className="text-xs text-gray-500">{exp.duration}</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </CollapsibleSection>
      </div>
    </div>
  );
}