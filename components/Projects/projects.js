import ProjectCard from "@/components/Projects/ProjectCard";
import Image from "next/image";
import Link from "next/link";

import PorjectIamge1 from "../../public/ProjectsImages/Project1.png";
import PorjectIamge2 from "../../public/ProjectsImages/Project2.jpg";
import PorjectIamge3 from "../../public/ProjectsImages/Project3.jpg";

const Projects = () => {
  return (
    <section id="projects" className="bg-main w-full h-full py-[105px] px-4 md:px-10 relative">
      <div className="LayoutContainer DefaultText flex flex-col items-center">
        <div className="text-start py-12 w-full max-w-[1400px]">
          <p className="text-secondL">Projecten</p>
          <h1 className="MainTitle">Wat heb ik gedaan</h1>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          <ProjectCard
            ImageSrc={PorjectIamge1}
            P_name={"my-portfolio"}
            P_Description={
              "Dit project is gebouwd met moderne tools zoals Nextjs en Tailwindcss, wat heeft geresulteerd in een professionele uitstraling en snelle laadtijden."
            }
            P_Description_small={"Mijn portfolio"}
            P_Language={["Nextjs", "Tailwind"]}
            P_Link={[
              { link: "https://my-portfolio-cyan-iota.vercel.app/", live: true },
              { link: "https://github.com/Razzi-bit/my-portfolio", live: false },
            ]}
          />
          <ProjectCard
            ImageSrc={PorjectIamge2}
            P_name={"Portfolio-Anthenny"}
            P_Description={"Een weergave van mijn passie voor creativiteit en ontwikkeling"}
            P_Description_small={"Hier heb ik Portfolio voor mijn friend gebouwd"}
            P_Language={["Nextjs", "Tailwind"]}
            P_Link={[
              { link: "https://anthennydehoon.nl/", live: true },
              { link: "https://github.com/Anthenny", live: false },
            ]}
          />
          <ProjectCard
            ImageSrc={PorjectIamge3}
            P_name={"CryptoPanel"}
            P_Description={
              "Crypto panel die aantal cryptocurrencies weergeef, ook is er search en sort functionaliteit waarmee je een crypto coin kan zoeken."
            }
            P_Description_small={"Crypto panel die aantal cryptocurrencies weergeef"}
            P_Language={["Nextjs", "NodeJS", "Style-Componets", "TypeScript"]}
            P_Link={[{ link: "https://annasaccessoires.nl/", live: true }]}
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
