"use client"

import { Link as ScrollLink } from "react-scroll";

// components
import Logo from "./Logo";
import Nav from "./Nav";

const links = [
    {
        name: "home",
    },
    {
        name: "about",
    },
    {
        name: "journey",
    },
    {
        name: "work",
    },
    {
        name: "contact",
    },
];

const Header = () => {
    return (
        <header className="w-full absolute py-8 xl:py-[48px] z-30">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:justify-between">
                    {/* Logo */}
                    <Logo />
                    <div className="flex items-center gap-12">
                        {/* Nav and socials */}
                        <Nav 
                            containerStyles="hidden xl:flex" 
                            listStyles="flex gap-6" 
                            linkStyles="text-primary font-primary text-lg tracking-[1.4px] transition-all duration-300 cursor-pointer" 
                        />
                        <div>socials</div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header