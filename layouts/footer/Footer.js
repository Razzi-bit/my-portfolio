import React from "react";
import Link from "next/link";

import { FiGithub, FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const IconsTest = [
    {
      Icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/olaf-kudrewicz-187783261/",
    },
    {
      Icon: FiGithub,
      link: "https://github.com/Razzi-bit",
    },
    {
      Icon: FiTwitter,
      link: "https://twitter.com/RaZzI83837574",
    },
  ];
  return (
    <div className="bg-main w-full flex items-center py-8 px-4">
      <div className="LayoutContainer DefaultText flex flex-col md:flex-row justify-center md:justify-between items-center">
        <Link href={"/"} className="md:w-[300px] py-2">
          Olaf
          <span className="text-[#c3c3c3]"> Kudrewicz</span>
        </Link>
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="text-sm text-center flex flex-col md:flex-row items-center">
            <p className="p-2"> © 2020 Olaf Kudrewicz</p>
            <Link
              href={"https://twitter.com/RaZzI83837574"}
              target="_blank"
              className="hover:text-details hover:underline-offset-2 hover:underline duration-300 ease-in"
            >
              @RaZzI83837574
            </Link>
          </div>
          <p className="text-sm"></p>
          <div className="flex items-center justify-between">
            {IconsTest.map((Icon, index) => {
              return (
                <Link href={Icon.link} key={index} target="_blank">
                  <Icon.Icon
                    size={20}
                    className="m-4 hover:text-details hover:scale-110 duration-300 ease-in"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
