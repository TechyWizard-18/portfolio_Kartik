// Portfolio Data Configuration
// TODO: Update with your personal information

export const personal = {
  name: "Kartik Gupta", // TODO: Replace with your name
  title: "Backend Developer", // TODO: Update your title
  tagline: "Specializing in Spring Boot and REST APIs",
  description: "Backend Developer specializing in Spring Boot and REST APIs, with experience in building scalable, secure, and high-performance web applications.",
  location: "Gurgaon, Haryana",
  email: "itskartik098@gmail.com", // TODO: Replace with your email
  phone: "7042319289", // TODO: Replace with your phone
  photo: "/photo.jpg", // TODO: Replace with your photo in public/photo.jpg
  resumeUrl: "/resume.pdf", // TODO: Place your resume in public/resume.pdf
  enableSplashAnimation: true, // Set to false to disable splash screen
  preferredTheme: "dark" // "dark" or "light"
};

export const socials = [
  // TODO: Add your social media links
  {
    name: "GitHub",
    url: "https://github.com/kartik-gupta", // TODO: Replace with your GitHub
    icon: "FaGithub"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/kartik-gupta", // TODO: Replace with your LinkedIn
    icon: "FaLinkedin"
  },
  {
    name: "Email",
    url: "mailto:itskartik098@gmail.com",
    icon: "FaEnvelope"
  },
  {
    name: "Phone",
    url: "tel:7042319289",
    icon: "FaPhone"
  }
];

export const skills = [
  // TODO: Add/remove skills as needed
  {
    category: "Programming Languages",
    items: ["Java", "JavaScript", "Python", "SQL"]
  },
  {
    category: "Backend Technologies",
    items: ["Spring Boot", "Spring Security", "REST APIs", "Microservices"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    category: "Tools & Frameworks",
    items: ["Git", "Docker", "Maven", "Postman", "IntelliJ IDEA"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "CI/CD", "Linux"]
  },
  {
    category: "Other Skills",
    items: ["Data Structures & Algorithms", "System Design", "Problem Solving"]
  }
];

export const projects = [
  // TODO: Replace with your actual projects
  {
    title: "User Review System",
    description: "Developed a backend application using Spring Boot where users can submit movie reviews along with ratings and related details. Integrated the system with IMDb API to fetch and display official ratings, ensuring accurate comparison with user reviews.",
    technologies: ["Spring Boot", "REST API", "IMDb API", "MySQL", "Spring Security"],
    githubUrl: "https://github.com/kartik-gupta/user-review-system", // TODO: Replace with actual URL
    demoUrl: "", // TODO: Add demo URL if available
    image: "/project1.jpg", // TODO: Add project image to public folder
    featured: true
  },
  {
    title: "AI-Powered Yoga Website",
    description: "Developed an innovative AI-powered Yoga Website as part of KR Mangalam University Hackathon where our team achieved Top 10 ranking. The project combines AI recommendations with yoga practice guidance.",
    technologies: ["Java", "Spring Boot", "AI/ML", "REST API", "MySQL"],
    githubUrl: "https://github.com/kartik-gupta/ai-yoga-website", // TODO: Replace with actual URL
    demoUrl: "", // TODO: Add demo URL if available
    image: "/project2.jpg", // TODO: Add project image to public folder
    featured: true
  },
  {
    title: "Email Notification Service",
    description: "Built a robust email notification service with automated email sending capabilities, template management, and delivery tracking for enhanced user communication.",
    technologies: ["Spring Boot", "JavaMail API", "Thymeleaf", "MySQL", "Scheduler"],
    githubUrl: "https://github.com/kartik-gupta/email-service", // TODO: Replace with actual URL
    demoUrl: "", // TODO: Add demo URL if available
    image: "/project3.jpg", // TODO: Add project image to public folder
    featured: false
  }
];

export const education = [
  // TODO: Add your education details
  {
    degree: "Java With DSA and System Design",
    institution: "PW Skills",
    duration: "March 2021 - March 2022",
    description: "Comprehensive program covering Java programming, Data Structures & Algorithms, and System Design principles.",
    grade: "" // TODO: Add grade if available
  }
];

export const experience = [
  // TODO: Add your work experience
  {
    title: "Software Developer Fresher",
    company: "Recent Graduate", // TODO: Replace with actual company when employed
    duration: "March 2019 - March 2020",
    location: "Gurgaon, Haryana",
    description: [
      "Learning and developing expertise in backend technologies",
      "Building projects with Spring Boot and REST APIs",
      "Participating in hackathons and coding competitions"
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "REST APIs"]
  }
];

export const achievements = [
  // TODO: Add your achievements
  {
    title: "Top 10 Rank in KRMU HACKERTHORN",
    description: "Achieved Top 10 Rank in a Hackathon organized by KR Mangalam University, where our team developed an innovative AI-powered Yoga Website.",
    date: "2022",
    category: "Competition"
  }
];

export const certifications = [
  // TODO: Add your certifications
  {
    title: "Java With DSA and System Design",
    issuer: "PW Skills",
    date: "March 2022",
    url: "", // TODO: Add certificate URL if available
    description: "Comprehensive certification in Java programming, Data Structures, Algorithms, and System Design"
  }
];

// Contact form configuration
export const contactConfig = {
  // TODO: Replace with your actual form endpoint (EmailJS, Formspree, Netlify Forms, etc.)
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID", // Example endpoint - replace with actual
  emailService: "EmailJS", // Options: "EmailJS", "Formspree", "Netlify", "Custom"
  
  // EmailJS configuration (if using EmailJS)
  emailJS: {
    serviceId: "YOUR_SERVICE_ID", // TODO: Replace with EmailJS service ID
    templateId: "YOUR_TEMPLATE_ID", // TODO: Replace with EmailJS template ID
    publicKey: "YOUR_PUBLIC_KEY" // TODO: Replace with EmailJS public key
  }
};

// Theme configuration
export const themeConfig = {
  colors: {
    primary: "#00d4ff",
    secondary: "#ff006e",
    accent: "#8338ec",
    background: "rgba(15, 23, 42, 0.95)",
    surface: "rgba(30, 41, 59, 0.8)",
    text: "#f8fafc",
    textSecondary: "#cbd5e1"
  },
  animations: {
    splashDuration: 3000, // milliseconds
    reducedMotionDuration: 1200 // for users who prefer reduced motion
  }
};

// Navigation configuration
export const navigation = [
  { name: "Home", href: "#home", icon: "FaHome" },
  { name: "About", href: "#about", icon: "FaUser" },
  { name: "Skills", href: "#skills", icon: "FaCode" },
  { name: "Projects", href: "#projects", icon: "FaProjectDiagram" },
  { name: "Experience", href: "#experience", icon: "FaBriefcase" },
  { name: "Contact", href: "#contact", icon: "FaEnvelope" }
];