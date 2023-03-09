import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const SkillsCard = ({ index, name, icon }) => {
  return (
    <Tilt className="w-28 h-28">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-full shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-full py-5 flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={name} className="w-16 h-16 object-contain" />
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tehcnology, index) => (
        <div className="w-28 h-28" key={tehcnology.name}>
          <div className="hidden">
            <BallCanvas icon={tehcnology.icon} />
          </div>
          <div className="block">
            <SkillsCard key={tehcnology.name} index={index} {...tehcnology} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
