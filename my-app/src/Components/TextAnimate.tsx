import { motion } from "framer-motion";
const quote = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  
  const singleWord = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

type TextAnimateProp = {
    text: string,
    className: string
   }

const TextAnimate = (prop: TextAnimateProp) => {
  return (
    <div className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden`}>
      <motion.h1 
      className={`inline-block w-full font-bold text-dark capitalize text-8xl  ${prop.className}`}
        variants={quote}
        initial="initial"
        animate="animate">
            {prop.text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}

export default TextAnimate;
