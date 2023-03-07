import Image from "next/image";
import React from "react";

import PorjectIamge1 from "../../public/ProjectsImages/ecommerce-1.png";
import PorjectIamge2 from "../../public/ProjectsImages/ecommerce-2.png";
import PorjectIamge3 from "../../public/ProjectsImages/ecommerce-3.png";

const Project = ({ project }) => (
  <div className="h-screen bg-main pt-[100px]">
    <div className="relative w-full h-[300px] ">
      <Image
        src={PorjectIamge1}
        fill
        alt="project"
        className="object-cover object-top"
        quality={100}
      />
      <div className="h-full w-full absolute top-0 bg-main/60" />
    </div>
    <div className="px-4 md:px-10">
      <div className="LayoutContainer DefaultText flex flex-col items-center pt-[105px] relative">
        <ul className="absolute top-[-50px] left-0 flex font-Poppins">
          <li className="px-2">
            <span className="text-details">R</span>eact
          </li>
          <li className="px-2">
            <span className="text-details">N</span>extJS
          </li>
        </ul>
        <div className="h-full w-full border border-[red]">
          <h2 className="text-details text-2xl py-4 font-Roboto font-medium">Project Naam</h2>
          <div className="flex flex-col font-Poppins">
            <p className="flex-1 text-base font-light">OlafawfaF AWFAWAF AWfAW</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Project;
