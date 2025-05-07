import Link from "next/link";
import { FaGithub, FaFacebook, FaMedium, FaLinkedin } from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub />,
        url: "https://github.com/dileepa-dev"
    },
    {
        icon: <FaFacebook />,
        url: "https://www.facebook.com/share/15zMP2E1rb/?mibextid=wwXIfr"
    },
    {
        icon: <FaMedium />,
        url: "https://medium.com/@dlpmalshan"
    },
    {
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/in/dileepa-malshan/"
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