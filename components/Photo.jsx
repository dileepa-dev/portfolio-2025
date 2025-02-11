"useClient";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full flex items-center justify-center relative">
            {/* Image Container */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { duration: 0.4, delay: 2, ease: "easeInOut" },
                }}
                className="w-[400px] h-[400px] xl:w-[500px] xl:h-[500px] flex items-center justify-center relative"
            >
                <Image
                    src="/assets/dileepa.JPG"
                    priority
                    quality={100}
                    width={500}
                    height={500}
                    alt="Profile Image"
                    className="object-cover rounded-full"
                />

                {/* Spinning Circle Animation */}
                <motion.svg
                    className="absolute w-[420px] h-[420px] xl:w-[520px] xl:h-[520px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle 
                        cx="253" 
                        cy="253" 
                        r="248" 
                        stroke="#A8DCE7" 
                        strokeWidth="8" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        strokeDasharray="20 40"
                        animate={{ rotate: [10, 360] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;
