import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill, } from "react-icons/ri"

const socials = [
    {
        icon: <RiInstagramFill />,
        path: ""
    },
    {
        icon: <FaFacebook />,
        path: ""
    },
    {
        icon: <FaLinkedin />,
        path: ""
    },
    {
        icon: <FaGithub />,
        path: ""
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