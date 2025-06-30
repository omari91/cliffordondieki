import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences, elephantHealthcare, otherExperiences } from "../data/experienceData";

const ExperienceCard = ({ experience, index }) => (
  <motion.div 
    key={index} 
    className="mb-6 p-4 border-l-4 border-blue-500 bg-gray-100 rounded-lg hover:shadow-md transition-shadow"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex items-center gap-4">
      <img 
        src={experience.logo} 
        alt={experience.company} 
        className="w-12 h-12 rounded-full object-cover" 
      />
      <div>
        <h3 className="text-lg font-semibold">{experience.position}</h3>
        <p className="text-gray-600">{experience.company}</p>
        <p className="text-sm text-gray-500">{experience.duration}</p>
        {experience.location && (
          <p className="text-sm text-gray-500">{experience.location}</p>
        )}
      </div>
    </div>
    {experience.description && (
      <p className="mt-2 text-gray-700">{experience.description}</p>
    )}
    {experience.achievements && (
      <ul className="mt-2 list-disc ml-6 text-gray-700">
        {experience.achievements.map((achievement, i) => (
          <li key={i}>{achievement}</li>
        ))}
      </ul>
    )}
  </motion.div>
);

const CollapsibleSection = ({ title, isOpen, onToggle, children, borderColor = "border-green-500" }) => (
  <motion.div className={`mb-6 p-4 border-l-4 ${borderColor} bg-gray-100 rounded-lg hover:shadow-md transition-shadow`}>
    <div 
      className="flex items-center gap-4 cursor-pointer" 
      onClick={onToggle}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="ml-auto"
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
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>

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
                className="w-12 h-12 rounded-full object-cover" 
              />
              <span>Elephant Healthcare</span>
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
              className="mt-4 p-3 bg-white rounded-md"
            >
              <p className="text-gray-600 font-medium">{role.position}</p>
              <p className="text-sm text-gray-500 mb-2">{role.duration}</p>
              <ul className="list-disc ml-6 text-gray-700">
                {role.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </CollapsibleSection>

        {/* Other Experience (Collapsible) */}
        <CollapsibleSection
          title="More Experience"
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
              className="mt-4 p-3 bg-white rounded-md"
            >
              <div className="flex items-center gap-4 mb-2">
                <img 
                  src={exp.logo} 
                  alt={exp.company} 
                  className="w-10 h-10 rounded-full object-cover" 
                />
                <div>
                  <h4 className="font-semibold">{exp.position}</h4>
                  <p className="text-gray-600 text-sm">{exp.company}</p>
                  <p className="text-xs text-gray-500">{exp.duration}</p>
                </div>
              </div>
              <ul className="list-disc ml-6 text-gray-700">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </CollapsibleSection>
      </div>
    </section>
  );
}