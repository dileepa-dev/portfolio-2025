import { motion } from "framer-motion";

const stairAnimation = {
    intial: {
        top: "0%",
    },
    animate: {
      top: "100%",
    },
    exit: {
      top: ["100%", "0%"],
    },
}

const revereseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
}
const Stairs = () => {
  return <>
  {/* render and motion divs for each representing a step stairs.
  Each div will have the same animation defined by the object. 
  The delay for each div is calculated dynamicaly based on its 
  reveresed index creating a straggered effect with decreasing 
  delay ofr each step
  */}
  {[...Array(6)].map((_, index) => {
    return (
      <motion.div 
    key={index} 
    variants={stairAnimation} 
    initial="initial" 
    animate="animate" 
    exit="exit" 
    transition={{
      duration: 0.4,
      ease: 'easeInOut',
      delay: revereseIndex(index) * 0.1,
    }}
    className="h-full w-full bg-white relative"
    />
    )
  })}
  </>

}

export default Stairs