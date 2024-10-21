"use client"

import { motion, AnimatePresence } from "framer-motion";

import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa"
import { TbBrandNextjs } from "react-icons/tb"
import { SiTypescript, SiExpress, SiMongodb, SiMysql, SiPostgresql } from "react-icons/si"

import Card from "./Card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const journey = [
    // Education
    {
        type: "education",
        institution: "Jaywantrao Sawant College of Engineering",
        logoUrl: "/assets/journey/education/institution.svg",
        qualification: "Master's in Computer Application",
        duration: "Nov 2022 - Present",
        description: "Currently pursuing my master's degree in Computer Application from JSCOE, Pune."
    },
    {
        type: "education",
        institution: "Modern College of Arts, Commerce and Science",
        logoUrl: "/assets/journey/education/institution.svg",
        qualification: "Bachelor's in Computer Science",
        duration: "Aug 2019 - Jun 2022",
        description: "Completed my Bachelor's degree in Computer Science from Modern College, Shivaji Nagar."
    },
    {
        type: "education",
        institution: "Lexicon International School",
        logoUrl: "/assets/journey/education/institution.svg",
        qualification: "Senior Secondary Education",
        duration: "Jun 2017 - Mar 2019",
        description: "Completed my Senior Secondary Education (11th & 12th) from Lexicon International School, Wagholi."
    },
    {
        type: "education",
        institution: "The Bishop's Co-Ed School",
        logoUrl: "/assets/journey/education/institution.svg",
        qualification: "Secondary Education",
        duration: "2005 - 2017",
        description: "Completed my Secondary Education (1st to 10th) from The Bishop's Co-Ed School, Kalyani Nagar."
    },
    // Skill
    {
        type: "skill",
        name: "HTML",
        icon: <FaHtml5 />,
        duration: "Learned in 2019",
        description: "Crafted structured  web content using HTML effectively for modern websites, ensuring semantic markup and accessibility"
    },
    {
        type: "skill",
        name: "CSS",
        icon: <FaCss3 />,
        duration: "Learned in 2019",
        description: "Styled responsive web pages using CSS, ensuring an appealing user experiences with modern design principles and layouts."
    },
    {
        type: "skill",
        name: "JavaScript",
        icon: <FaJs />,
        duration: "Learned in 2019",
        description: "Implemented JavaScript to enhance interactivity and user engagement on websites through dynamic content, animations, and event-driven features."
    },
    {
        type: "skill",
        name: "React.js",
        icon: <FaReact />,
        duration: "Learned in 2022",
        description: "Built dynamic and reusable user interfaces using React.js, focusing on component-driven development to deliver efficient, seamless user experiences."
    },
    {
        type: "skill",
        name: "Next.js",
        icon: <TbBrandNextjs />,
        duration: "Learned in 2023",
        description: "Leveraged Next.js for server-side rendering and static site generation, optimizing performance and SEO for modern web applications."
    },
    {
        type: "skill",
        name: "Express.js",
        icon: <SiExpress />,
        duration: "Learned in 2022",
        description: "Developed back-end applications using Express.js, creating robust APIs and managing routing, middleware, and server-side logic."
    },
    {
        type: "skill",
        name: "Node.js",
        icon: <FaNodeJs />,
        duration: "Learned in 2022",
        description: "Built scalable server-side applications with Node.js, implementing event-driven architecture and non-blocking I/O to handle multiple client requests efficiently."
    },
    {
        type: "skill",
        name: "TypeScript",
        icon: <SiTypescript />,
        duration: "Learned in 2023",
        description: "Utilized TypeScript to write cleaner, more maintainable code by adding static types to JavaScript, improving code reliability and reducing runtime errors."
    },
    {
        type: "skill",
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        duration: "Learned in 2022",
        description: "Experienced in designing and managing relational databases with PostgreSQL, optimizing performance and ensuring data integrity."
    },
    {
        type: "skill",
        name: "MongoDB",
        icon: <SiMongodb />,
        duration: "Learned in 2023",
        description: "Worked with MongoDB to design and implement NoSQL databases, handling large datasets and flexible schema structures for modern applications."
    },
    {
        type: "skill",
        name: "MySQL",
        icon: <SiMysql />,
        duration: "Learned in 2021",
        description: "Developed and managed relational databases using MySQL, focusing on queries, data optimization, and secure data handling."
    },

]

const Cards = () => {
    return (
        <>
            <Tabs defaultValue="education" className="w-full flex flex-col items-center">
                <TabsList className="max-w-max mb-[30px]">
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skill">My Skills</TabsTrigger>
                </TabsList>
                {/* Education */}
                <TabsContent value="education" className="w-full">
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {journey
                                .filter((item) => item.type === "education")
                                .map((card, index) => {
                                    return <Card key={index} {...card} />
                                })
                            }
                        </motion.div>
                    </AnimatePresence>
                </TabsContent>
                {/* Skillset */}
                <TabsContent value="skill" className="w-full">
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {journey
                                .filter((item) => item.type === "skill")
                                .map((card, index) => {
                                    return <Card key={index} {...card} />
                                })
                            }
                        </motion.div>
                    </AnimatePresence>
                </TabsContent>
            </Tabs>
        </>
    );
};
export default Cards;