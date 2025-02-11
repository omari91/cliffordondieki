import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Importing company logos
import productLedAlliance from "../assets/product_led_alliance_logo.jpeg";
import imagineFoundation from "../assets/imagine_foundation.jpeg";
import ilaraHealth from "../assets/ilarahealth.jpeg";
import elephantHealthcareLogo from "../assets/elephant_healthcare_logo.jpeg";
import alx from "../assets/alxafrica_logo.jpeg";
import geothermalDevelopment from "../assets/geo.jpeg";
import kengenKenya from "../assets/kengenkenya_logo.jpeg";
import kenyaPower from "../assets/kenya_power.jpeg";
import iplusEastAfrica from "../assets/iplus_east_africa.webp";

// Experience data
const experiences = [
  {
    company: "Product-Led Alliance",
    logo: productLedAlliance,
    position: "Member",
    duration: "Apr 2024 - Present (11 mos)",
    description: "Driving company-wide alignment around product-led growth."
  },
  {
    company: "Imagine Foundation e.V.",
    logo: imagineFoundation,
    position: "Fellow",
    duration: "Oct 2023 - Present (1 yr 5 mos)",
    location: "Berlin, Germany",
    achievements: [
      "Completed a challenging 4-week European Tech digital boot camp",
      "Attended a coaching session",
      "Received a 360 feedback including my resume, LinkedIn, and technical skills",
      "Graduated in the top 20% of my class"
    ]
  },
  {
    company: "Ilara Health",
    logo: ilaraHealth,
    position: "Senior Product Operations Lead",
    duration: "Jan 2022 - Apr 2024 (2 yrs 4 mos)",
    location: "Nairobi County, Kenya",
    achievements: [
      "Revamped team processes, increasing productivity by 33%",
      "Reduced product delivery time by 50% using Agile methodologies",
      "Managed a 10-person team, boosting satisfaction & retention"
    ]
  }
];

const elephantHealthcare = {
  company: "Elephant Healthcare",
  logo: elephantHealthcareLogo,
  roles: [
    {
      position: "Business Development Coordinator",
      duration: "Jun 2021 - Dec 2021 (7 mos)",
      achievements: [
        "Increased new business acquisition by 40%",
        "Boosted user retention rates by 50%",
        "Led cross-functional data analysis for strategic planning"
      ]
    },
    {
      position: "Customer Success Coordinator",
      duration: "Jan 2021 - Jun 2021 (6 mos)",
      achievements: [
        "Reduced issue resolution time by 40%",
        "Resolved product issues for 500+ medical practitioners",
        "Contributed to market penetration in 3 new regions"
      ]
    }
  ]
};

// Additional experiences (Collapsible)
const otherExperiences = [
  {
    company: "Geothermal Development Company",
    logo: geothermalDevelopment,
    position: "Engineering Intern",
    duration: "Feb 2015 - May 2015 (4 mos)",
    achievements: [
      "Reduced equipment downtime for efficiency",
      "Optimized oil usage, preventing spills",
      "Ensured stock for fast equipment replacements"
    ]
  },
  {
    company: "KenGen Kenya",
    logo: kengenKenya,
    position: "Engineering Intern",
    duration: "Jan 2014 - Apr 2014 (4 mos)",
    achievements: [
      "Extended motor lifespan, reducing costs",
      "Tested transformers for optimal cooling",
      "Implemented safety protocols preventing hazards"
    ]
  },
  {
    company: "Kenya Power",
    logo: kenyaPower,
    position: "Engineering Intern",
    duration: "Jan 2013 - Mar 2013 (3 mos)",
    achievements: [
      "Constructed overhead power lines for better coverage",
      "Cleared feeder obstructions preventing outages",
      "Installed and repaired electrical switches"
    ]
  }
];

export default function Experience() {
  const [isElephantOpen, setIsElephantOpen] = useState(false);
  const [isOtherExperienceOpen, setIsOtherExperienceOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>

      {/* Individual Experiences */}
      {experiences.map((exp, idx) => (
        <motion.div key={idx} className="mb-6 p-4 border-l-4 border-blue-500 bg-gray-100 rounded-lg hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded-full" />
            <div>
              <h3 className="text-lg font-semibold">{exp.position}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.duration}</p>
            </div>
          </div>
          {exp.achievements && (
            <ul className="mt-2 list-disc ml-6 text-gray-700">
              {exp.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
            </ul>
          )}
        </motion.div>
      ))}

      {/* Elephant Healthcare (Collapsible) */}
      <motion.div className="mb-6 p-4 border-l-4 border-green-500 bg-gray-100 rounded-lg hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => setIsElephantOpen(!isElephantOpen)}>
          <img src={elephantHealthcare.logo} alt="Elephant Healthcare" className="w-12 h-12 rounded-full" />
          <h3 className="text-lg font-semibold">Elephant Healthcare</h3>
        </div>
        <AnimatePresence>
          {isElephantOpen && elephantHealthcare.roles.map((role, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
              <p className="text-gray-600 mt-2">{role.position} ({role.duration})</p>
              <ul className="list-disc ml-6 text-gray-700">
                {role.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
              </ul>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Other Experience (Collapsible) */}
      <motion.div className="mb-6 p-4 border-l-4 border-purple-500 bg-gray-100 rounded-lg hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => setIsOtherExperienceOpen(!isOtherExperienceOpen)}>
          <h3 className="text-lg font-semibold">More Experience</h3>
        </div>
        <AnimatePresence>
          {isOtherExperienceOpen && otherExperiences.map((exp, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
              <div className="flex items-center gap-4 mt-4">
                <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.duration}</p>
                </div>
              </div>
              <ul className="list-disc ml-6 text-gray-700">
                {exp.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
              </ul>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
