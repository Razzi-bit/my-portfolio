import ProjectCard from "@/components/Projects/ProjectCard";
import Image from "next/image";
import Link from "next/link";

import PorjectIamge1 from "../../public/ProjectsImages/ecommerce-1.png";
import PorjectIamge2 from "../../public/ProjectsImages/ecommerce-2.png";
import PorjectIamge3 from "../../public/ProjectsImages/ecommerce-3.png";

const Projects = () => {
  return (
    <section id="projects" className="bg-main w-full h-full py-[105px] px-12 md:px-10 relative">
      <div className="LayoutContainer DefaultText flex flex-col items-center">
        <div className="text-start py-12 w-full max-w-[1400px]">
          <p className="text-secondL">Projecten</p>
          <h1 className="MainTitle">Wat heb ik gedaan</h1>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          <ProjectCard
            ImageSrc={PorjectIamge1}
            P_name={"P_name"}
            P_Description={"project.P_description_sm"}
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
