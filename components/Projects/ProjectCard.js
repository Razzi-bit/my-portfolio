import React from "react";
import Image from "next/image";
import Link from "next/link";

import { TbWorldWww } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({
  ImageSrc,
  P_name,
  P_Description,
  P_Description_small,
  P_Language,
  P_Link,
}) => {
  return (
    <div className="w-full my-12 h-[400px] max-w-[500px] bg-transparent justify-self-center group perspective">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="w-full h-full absolute backface-hidden rounded-xl">
          <Image
            src={ImageSrc}
            alt="project"
            width={500}
            height={400}
            className="object-cover object-top"
          />
          <div className="w-full h-[200px] bg-second p-4 duration-200 ease-in">
            <h2 className="text-base  text-details">{P_name}</h2>
            <p className="text-sm">{P_Description_small}</p>
          </div>
        </div>
        <div className="w-full h-full absolute bg-second backface-hidden my-rotate-y-180 rounded-xl">
          <div className="w-full h-full px-8 flex flex-col justify-center items-center ">
            <h2 className="text-2xl text-secondL py-4 text-center">{P_name}</h2>
            <p className="text-sm font-light">{P_Description}</p>
            <ul className="w-full text-sm flex py-4 flex-wrap">
              {P_Language.map((lan, index) => {
                return (
                  <li
                    key={index}
                    className="px-3 my-1 mr-2 border border-details rounded-xl text-details"
                  >
                    <p>{lan}</p>
                  </li>
                );
              })}
            </ul>
            <div className="w-full text-base py-4">
              {P_Link.map(({ link, live }, index) => {
                return (
                  <Link href={link} target="_blank" key={index}>
                    <p className="flex items-center group/item">
                      Bekijk
                      <span className="text-details px-2  group-hover/item:underline group-hover/item:underline-offset-1">
                        {live ? "Live" : "Gihub"}
                      </span>
                      {live ? <TbWorldWww size={30} /> : <BsGithub size={30} />}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
