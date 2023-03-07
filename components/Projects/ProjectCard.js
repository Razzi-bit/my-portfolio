import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ ImageSrc, P_name, P_Description }) => {
  return (
    <Link
      href={"/project/1"}
      className="w-full h-[300px] rounded-xl bg-second relative overflow-hidden cursor-pointer"
    >
      <Image src={ImageSrc} alt="project" fill className="rounded-xl object-cover object-top" />
      <div className="w-full absolute bottom-0 left-0 right-0 top-0 bg-main/20" />

      <div className="w-full absolute bottom-0 left-0 right-0 h-[100px] bg-main/60 backdrop-blur-md py-4 px-6 duration-200 ease-in group/item">
        <h2 className="text-base  text-details group-hover/item:underline-offset-2 group-hover/item:underline">
          {P_name}
        </h2>
        <p className="text-sm">{P_Description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
