import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill, } from "react-icons/ri"

const socials = [
    {
        icon: <RiInstagramFill />,
        path: "https://www.instagram.com/rishiii__0702/"
    },
    {
        icon: <FaFacebook />,
        path: "https://www.facebook.com/rishikesh.palande.9?mibextid=ZbWKwL"
    },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/rushikeshpalande07"
    },
    {
        icon: <FaGithub />,
        path: "https://github.com/RISHII7"
    },
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link href={item.path} key={index} className={iconStyles}>
                        <span>{item.icon}</span>
                    </Link>
                )
            })}
        </div>
    )
}
export default Socials