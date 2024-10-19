"use client"

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";

// Components
import RotatingShape from "./RotatingShape";
import Header from "./Header";

const Hero = () => {
    return (
        <section className="h-[800px] relative bg-accent/10 xl:bg-white">

            {/* Header */}
            <Header />
            <div className="container mx-auto h-full">
                <div className="relative z-20 w-full h-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
                    <h1 className="h1 mb-2 max-w-[320px] xl:max-w-none">
                        <span className="text-accent">I Build And</span> Design Powerful
                        <TypeAnimation 
                            preRenderFirstString={true} 
                            sequence={["Websites", 2000, "Apps", 2000]} 
                            speed={50} 
                            repeat={Infinity} 
                            wrapper="span" 
                            cursor={false} 
                            className="ml-2 xl:ml-4" 
                        />
                    </h1>
                    <p className="lead max-w-[476px] mb-7">
                        Delivering powerful, custom websites that blend aesthetics with performance.
                    </p>
                    <ScrollLink to="contact" smooth>
                        <button className="btn btn-accent mb-8">
                            Contact me
                        </button>
                    </ScrollLink>
                    {/* Stats */}
                    <div>stats</div>
                </div>

                {/* Image */}
                <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent">
                    <div className="absolute  w-[558px] h-[642px] bottom-0 z-40 left-[6.5vw]">
                        <Image src="/assets/hero/img1.png" fill quality="100" priority  className="object-contain"/>
                    </div>

                    {/* Arrow Shape */}
                    <div className="hidden xl:flex absolute top-48 left-[4vw]">
                        <Image src="/assets/hero/arrow.svg" width={160} height={160} alt="Arrow" />
                    </div>

                    {/* Shape 1 */}
                    <div className="absolute top-[600px] left-[3vw]">
                        <RotatingShape 
                            content={<Image src="assets/hero/shape-1.svg" width={38} height={38} alt="Shape 1" />}
                            direction="left"
                            duration={6}
                        />
                    </div>

                    {/* Shape 2 */}
                    <div className="absolute top-[240px] xl:left-[30vw]">
                        <RotatingShape 
                            content={<Image src="assets/hero/shape-2.svg" width={34} height={34} alt="Shape 2" />}
                            direction="right"
                            duration={5}
                        />
                    </div>

                    {/* Shape 3 */}
                    <div className="absolute top-[480px] xl:left-[40vw]">
                        <RotatingShape 
                            content={<Image src="assets/hero/shape-3.svg" width={36} height={36} alt="Shape 3" />}
                            direction="left"
                            duration={7}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero