import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ResumeCard = () => {
  return (
    <a
      href="https://rustamov.dev/CV-Mahammad-Rustamov.pdf"
      className="w-full"
      target="_blank"
    >
      <motion.div
        variants={fadeIn("", "spring", 0.5, 0.75)}
        className="bg-black-200 hover:bg-white hover:text-black cursor-pointer p-8 rounded-3xl w-full flex items-center justify-center "
      >
        <button className="text-2xl font-bold w-full">Download CV</button>
      </motion.div>
    </a>
  );
};

const Resume = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Want to know about me?
          </h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-28 lg:-mt-10 xl:-mt-32 pb-14 flex flex-wrap gap-7 w-full`}
      >
        <ResumeCard />
      </div>
    </div>
  );
};

export default SectionWrapper(Resume, "resume");
