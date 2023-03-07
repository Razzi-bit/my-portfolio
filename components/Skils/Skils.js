import { FaSass, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const OverMij = () => {
  return (
    <section id="skills" className="bg-second w-full h-full px-4 md:px-10 relative py-[105px]">
      <div className="LayoutContainer DefaultText flex flex-col justify-center items-center">
        <div className="text-start py-12 w-full max-w-[1400px]">
          <p className="text-secondL">Skills</p>
          <h1 className="MainTitle">Wat ik kan</h1>
        </div>

        <div className="flex flex-col gap-12 ">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="SkillsBox flex-1 bg-main flex-col group">
              <h2 className="md:text-2xl text-xl group-hover:text-details">
                Systemen automatiseren
              </h2>
              <p className="text-secondL">
                Ik vind het leuk om allerdaagse bezigheden om te zetten in code.
              </p>
            </div>
            <div className="SkillsBox flex-1 bg-main  flex-col group">
              <h2 className="md:text-2xl text-xl group-hover:text-details">Communiceren</h2>
              <p className="text-secondL">
                Ik vind het leuk om in teams te werken en samen iets moois neer te zetten.
              </p>
            </div>
          </div>

          <div className="flex gap-11 flex-wrap justify-center w-full">
            <div className="flex flex-wrap justify-around flex-1 gap-4">
              <div className="SkillsBox items-center flex-1 p-4 min-w-[155px] bg-main hover:text-details">
                <FaSass size={35} />
                <p>Scss </p>
              </div>
              <div className="SkillsBox items-center flex-1 p-4 min-w-[155px] bg-main hover:text-details">
                <IoLogoCss3 size={35} />
                <p>Css </p>
              </div>
              <div className="SkillsBox items-center flex-1 p-4 min-w-[155px] bg-main hover:text-details">
                <SiTailwindcss size={35} />
                <p>Tailwind</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-around flex-1 gap-4">
              <div className="SkillsBox items-center flex-1 p-4 min-w-[155px] bg-main hover:text-details">
                <FaReact size={35} />
                <p>React</p>
              </div>
              <div className="SkillsBox items-center flex-1 p-4 min-w-[155px] bg-main hover:text-details">
                <TbBrandNextjs size={35} />
                <p>NextJS</p>
              </div>
              <div className="SkillsBox items-center flex-1 p-4 min-w-[155px] bg-main hover:text-details">
                <SiTypescript size={35} />
                <p>TypeScript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverMij;
