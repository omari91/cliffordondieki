// Importing company logos
import productLedAlliance from "../assets/product_led_alliance_logo.jpeg";
import imagineFoundation from "../assets/imagine_foundation.jpeg";
import ilaraHealth from "../assets/ilarahealth.jpeg";
import elephantHealthcareLogo from "../assets/elephant_healthcare_logo.jpeg";
import geothermalDevelopment from "../assets/geo.jpeg";
import kengenKenya from "../assets/kengenkenya_logo.jpeg";
import kenyaPower from "../assets/kenya_power.jpeg";

// Main experiences
export const experiences = [
  {
    company: "Product-Led Alliance",
    logo: productLedAlliance,
    position: "Member",
    duration: "Apr 2024 - Present (11 mon)",
    description: "Driving company-wide alignment around product-led growth."
  },
  {
    company: "Imagine Foundation e.V.",
    logo: imagineFoundation,
    position: "Fellow",
    duration: "Oct 2023 - Present (1 yr 5 mon)",
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
    duration: "Jan 2022 - Apr 2024 (2 yrs 4 mon)",
    location: "Nairobi County, Kenya",
    achievements: [
      "Revamped team processes, increasing productivity by 33%",
      "Reduced product delivery time by 50% using Agile methodologies",
      "Managed a 10-person team, boosting satisfaction & retention to over 70%"
    ]
  }
];

// Elephant Healthcare with multiple roles
export const elephantHealthcare = {
  company: "Elephant Healthcare",
  logo: elephantHealthcareLogo,
  roles: [
    {
      position: "Business Development Coordinator",
      duration: "Jun 2021 - Dec 2021 (7 mon)",
      achievements: [
        "Increased new business acquisition by 40%",
        "Boosted user retention rates by 50%",
        "Led cross-functional data analysis for strategic planning"
      ]
    },
    {
      position: "Customer Success Coordinator",
      duration: "Jan 2021 - Jun 2021 (6 mon)",
      achievements: [
        "Reduced issue resolution time by 40%",
        "Resolved product issues for 500+ medical practitioners",
        "Contributed to market penetration in 3 new regions"
      ]
    },
    {
      position: "Change Manager",
      duration: "Jan 2020 - Jun 2020 (12 mon)",
      achievements: [
        "Acted as a bridge between the IT department and end-users, ensuring a smooth software transition with a 90% increase in user acceptance.",
        "Led training sessions to teach system functionalities, reducing user errors by 95% in the first month.",
        "Collaborated with cross-functional teams to gather feedback and drive improvements, achieving a 92% user satisfaction rate."
      ]
    },
    {
      position: "Project Manager",
      duration: "Aug 2019 - Jul 2021 (5 mon)",
      achievements: [
        "Conducted detailed training sessions on the Elephant system for healthcare staff, achieving 100% adoption and a 20% increase in efficiency.",
        "Analyzed feedback and data to identify challenges and opportunities, resulting in a 15% boost in user satisfaction.",
        "Developed tailored training programs for specific roles, ensuring a smooth transition to the Elephant system and reducing errors by 30%."
      ]
    },
  ]
};

// Additional experiences
export const otherExperiences = [
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