import Link from "next/link";
import { FaGithub, FaFacebook, FaMedium, FaInstagram } from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub />,
        url: ""
    },
    {
        icon: <FaFacebook />,
        url: ""
    },
    {
        icon: <FaMedium />,
        url: ""
    },
    {
        icon: <FaInstagram />,
        url: ""
    }
]

const Socials = ({ containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => (
                <Link href={social.url} key={index}
                    className={iconStyles}>{social.icon}
                </Link>
            ))}
        </div>
    );
}
export default Socials;