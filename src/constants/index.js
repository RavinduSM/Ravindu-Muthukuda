import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer, I thrive on building end-to-end solutions.
  I have honed my skills inmodern front-end technologies like React.js, as well as back-end 
 technologies like Node.js, MySQL, and MongoDB. I am Comfortable working with databases (SQL or NoSQL) and RESTful APIs.
  My goal is to leverage my expertise to create innovative solutions that drive business
  growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. 
I have worked with a variety of technologies, including React, Node.js, MySQL and MongoDB. 
My journey began with curiosity and a love for problem-solving. I’ve worked on exciting projects, collaborated with talented teams, and learned from every line of code,
 and it has evolved into a career where I continuously strive to learn and adapt to new challenges. 
I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active and exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "2023 - present",
    role: "Full Stack Developer",
    company: "INFOWEB",
    description: `Developed and maintained web applications using JavaScript, React.js.  Collaborated with the team to deliver high-quality software products on schedule.`,
    technologies: ["Node Js", "Express Js", "React JS", "MongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Associate Software Engineer",
    company: "Virtusa",
    description: `Contributed to the development of  applications using Pega. . Worked closely with the team on creating features and enhancements.`,
    technologies: ["Pega"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Bootstrap"],
  },

  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "React", "Tailwind CSS"],
  },
  {
    title: "Ecommerce Website Backend",
    image: project3,
    description:
      "A fully functional backend of an e-commerce website with features like product adding, updating and deleting. product reviews  and user authentication.",
    technologies: ["Node", "MongoDB"],
  },
  {
    title: "Computer store Website Backend",
    image: project4,
    description:
      "A fully functional backend of an e-commerce website with features like product adding, updating and deleting product  and user authentication.",
    technologies: ["Node", "MongoDB"],
  },
];

export const CONTACT = {
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
