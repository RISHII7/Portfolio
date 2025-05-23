import Image from "next/image";
import { motion } from "framer-motion";

// components
import AnimatedText from "./AnimatedText";

const About = () => {
    return (
        <section className="relative pt-12 pb-24" id="about">
            <div className="container mx-auto h-full">
                <div className="h-full flex items-center justify-center">
                    {/* image + shape */}
                    <div className="hidden xl:flex flex-1 pl-8">
                        <div className="relative w-full max-w-[380px]">
                            {/* Shape */}
                            <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
                            {/* Image */}
                            <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e5f8f6] min-h-[480px] flex items-end justify-center">
                                <Image 
                                    src="/assets/about/img4.png"
                                    width={350}
                                    height={478}
                                    quality={100}
                                    priority
                                    alt="Rushikesh"
                                />
                            </div>
                            {/* Rotating Shape */}
                            <div className="absolute top-2/4 -right-[65px] flex items-center justify-center">
                                <motion.div 
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 10,
                                        ease: "linear",
                                        repeat: Infinity
                                    }}
                                >
                                    <Image 
                                        src="/assets/about/shape-1.svg"
                                        width={160}
                                        height={160}
                                        alt="Rotating Shape"
                                        
                                        />
                                </motion.div>
                                <div className="absolute text-center text-white">
                                    <div className="text-5xl font-bold leading-none">25+</div>
                                    <div className="leading-none text-center mt-1">
                                        Websites <br /> Built
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Text */}
                    <div className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6">
                        <div>
                            <AnimatedText 
                                text="My name is RISHII"
                                textStyles="h2 mb-2"
                            />
                            <p className="text-lg">Web Developer</p>
                        </div>
                        <p className="max-w-[680px] mx-auto xl:mx-0 mb-2">
                            I create visually stunning and functional websites using modern frontend technologies and design principles. Explore my work to see how I combine creativity with technical skills to deliver exceptional digital experiences.
                        </p>
                        {/* info items */}
                        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 max-w-max mx-auto xl:mx-0 items-center">
                            {/* Item 1  */}
                            <div className="max-w-max">
                                <div className="uppercase font-bold text-primary">Age</div>
                                <p>24 Years</p>
                            </div>

                            {/* Item 2  */}
                            <div className="max-w-max">
                                <div className="uppercase font-bold text-primary">Born in</div>
                                <p>Pune, Maharashtra</p>
                            </div>

                            {/* Item 3  */}
                            <div className="max-w-max">
                                <div className="uppercase font-bold text-primary">Phone</div>
                                <p>8459972812</p>
                            </div>

                            {/* Item 4  */}
                            <div className="max-w-max">
                                <div className="uppercase font-bold text-primary">Email</div>
                                <p>rishikesh.palande07@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;