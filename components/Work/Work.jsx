import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

// components
import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";

const data = [
    {
        href: "https://fizzie.vercel.app/",
        category: "frontend",
        img: "/assets/work/frontend1.png",
        title: "Fizzi",
    },
    {
        href: "https://apple-gilt.vercel.app/",
        category: "frontend",
        img: "/assets/work/frontend2.png",
        title: "Apple Website",
    },
    {
        href: "https://rushikesh-portfolio-six.vercel.app/",
        category: "frontend",
        img: "/assets/work/frontend4.png",
        title: "Portfolio Website",
    },
    {
        href: "https://space-portfolio-pi.vercel.app/",
        category: "frontend",
        img: "/assets/work/frontend5.png",
        title: "Space Website",
    },
    {
        href: "https://finance-two-ecru.vercel.app/",
        category: "fullstack",
        img: "/assets/work/fullstack5.png",
        title: "Finance",
    },
    {
        href: "https://yoom-ruddy.vercel.app/",
        category: "fullstack",
        img: "/assets/work/fullstack2.png",
        title: "Yoom - Video Conferencing App",
    },
    {
        href: "https://lingo-two.vercel.app/",
        category: "fullstack",
        img: "/assets/work/fullstack3.png",
        title: "Lingo",
    },
    {
        href: "https://casecobra-chi.vercel.app/",
        category: "fullstack",
        img: "/assets/work/fullstack4.png",
        title: "CaseCobra",
    },
]

const Work = () => {
    // Extract unique categories from the data
    const uniqueCategories = Array.from(
        new Set(data.map((item) => item.category))
    );

    // create tab data with "all" categories and unique categories from data
    const tabData = [
        { category: "all" },
        ...uniqueCategories.map((category) => ({ category })),
    ];

    // state to manage the currently selected tab
    const [tabValue, setTabValue] = useState("all");

    // number of items show initially
    const [visibleItems, setVisibleItems] = useState(6);

    // filter work items based on selected tab
    const filterWork = tabValue === "all" 
        ? data.filter((item) => item.category !== "all") 
        : data.filter((item) => item.category === tabValue);
    
    // handle loading more items
    const loadMoreItems = () => {
        // adjust the number to control how many items are loaded at a time
        setVisibleItems((prev) => prev + 2);
    };


    return (
        <div className="pt-24 min-h-[1000px]" id="work">
            <div className="container mx-auto">
                <Tabs defaultValue="all" className="w-full flex flex-col">
                    <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]">
                        <AnimatedText 
                            text="My Latest Work" 
                            textStyles="h2 mb-[30px] xl:mb-0"
                        />
                        {/* Render tab triggers */}
                        <TabsList className="max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0">
                            {tabData.map((item,index) => {
                                return (
                                    <TabsTrigger 
                                        value={item.category} 
                                        key={index} 
                                        className="capitalize w-[120px]"
                                        onClick={() => setTabValue(item.category)}
                                    >
                                        {item.category}
                                    </TabsTrigger>
                                )
                            })}
                        </TabsList>
                    </div>

                    {/* Render content for the selected tabs */}
                    <TabsContent value={tabValue} className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
                            <AnimatePresence>
                                {filterWork.slice(0, visibleItems).map((item,index) =>(
                                    <motion.div 
                                        key={index} 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <WorkItem {...item} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                        {/* Load more button */}
                        {visibleItems < filterWork.length && (
                            <div className="flex justify-center mt-12">
                                <button onClick={loadMoreItems} className="btn btn-accent">Load more</button>
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};
export default Work;