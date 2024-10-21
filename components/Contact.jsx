import { useState, useEffect } from "react";
import Image from "next/image"

// @formspree
import { useForm, ValidationError } from "@formspree/react";

// components
import AnimatedText from "./AnimatedText";

import { FaCheckCircle } from "react-icons/fa";

const Contact = () => {

    const [state, handleSubmit] = useForm("mnnqnjvb");

    // state for form inputs
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    // state to control icon visibility
    const [showIcon, setShowIcon] = useState(false);

    // handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };

    // clear the form after submission and handle message visibility
    useEffect(() => {
        if (state.succeeded) {
            setShowIcon(true);      //show the success icon

            // clear the inputs
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
            });

            // hide the icon and revert button after 3 sec
            const timer = setTimeout(() => {
                setShowIcon(false);
            }, 3000);

            // clean up the timer on component unmount or before re-running effect
            return () => clearTimeout(timer);
        }
    }, [state.succeeded]);

    // handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();         // prevent default form submission
        handleSubmit(formData);     // call form spree submit handler with form data
    }

    return (
        <section className="pt-8 xl:pt-12 pb-32" id="contact">
            <div className="container mx-auto">
                <div className="flex flex-col items-center xl:flex-row gap-16">
                    <div className="flex-1 mx-auto xl:mx-0 flex flex-col">
                        <AnimatedText
                            text="Let's Work Together"
                            textStyles="h2 mb-12 text-center xl:text-left"
                        />
                        {/* form */}
                        <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 w-full max-w-[480px]">
                            {/* First name and Last name */}
                            <div className="flex gap-8">

                                {/* First Name */}
                                <div className="flex-1">
                                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-primary">
                                        First Name <span className="text-accent">*</span>
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        className="input" 
                                        placeholder="First Name"
                                        required
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="flex-1">
                                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-primary">
                                        Last Name <span className="text-accent">*</span>
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        className="input" 
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email field */}
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-primary">
                                    Email <span className="text-accent">*</span>
                                </label>
                                <input
                                    onChange={handleChange}
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    className="input" 
                                    placeholder="youremail@yourdomain.com"
                                    required
                                />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>

                            {/* Phone field */}
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-primary">
                                    Mobile Number <span className="text-accent">*</span>
                                </label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    className="input" 
                                    placeholder="+91 8459972XXX"
                                />
                            </div>

                            {/* message field */}
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-primary">
                                    Message <span className="text-accent">*</span>
                                </label>
                                <textarea
                                    onChange={handleChange}
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    className="textarea" 
                                    placeholder="Leave me a message..."
                                    rows="5"
                                    required
                                />
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>

                            {/* Submit button */}
                            <button type="submit" disabled={state.submitting} className="btn btn-accent flex items-center justify-center gap-2">
                                {state.submitting ? (
                                    <span>Sending...</span>
                                ) : (
                                    <>
                                        {/* Shoe icon with opacity transition */}
                                        <FaCheckCircle className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out ${showIcon ? "opacity-100" : "opacity-0"}`} />
                                        {/* button text */}
                                        <span className={`transition-opacity duration-500 ease-in-out ${showIcon ? "opacity-0" : "opacity-100"}`}>Send message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                    {/* Image */}
                    <div className="hidden xl:flex relative w-[577px] h-[664px] rounded-lg overflow-hidden">
                        <Image 
                        src="/assets/contact/img.png"
                        className="object-cover"
                        fill
                        quality={100}
                        alt="Image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;