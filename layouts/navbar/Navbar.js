import { useState, useEffect } from "react";
import Link from "next/link";

import { AiOutlineMenu } from "react-icons/ai";

import Menu from "./Menu";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const MenuHandel = (boolen) => {
    setMenu(boolen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
      nav.classList.add("shadow-xl");
    } else {
      nav.classList.remove("shadow-xl");
    }
  };

  return (
    <nav
      id="nav"
      className="bg-main w-full flex justify-center items-center py-8 px-4 md:px-10 fixed top-0 z-10"
    >
      <div className="LayoutContainer DefaultText flex justify-between items-center">
        <Link href={"/"} className="font-Poppins md:text-3xl cursor-pointer">
          Olaf<span className="text-[#c3c3c3]"> Kudrewicz</span>
        </Link>
        <ul className="hidden md:flex cursor-pointer gap-6 text-xl lg:text-2xl">
          <li className="hover:text-details hover:underline hover:scale-110 active:scale-100 ease-in duration-300">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-details hover:underline hover:scale-110 active:scale-100 ease-in duration-300">
            <Link href={"/#skills"}>Skills</Link>
          </li>
          <li className="hover:text-details hover:underline hover:scale-110 active:scale-100 ease-in duration-300">
            <Link href={"/#projects"}>Projecten</Link>
          </li>
          <li className="hover:text-details hover:underline hover:scale-110 active:scale-100 ease-in duration-300">
            <Link href={"/#contact"}>Contact</Link>
          </li>
        </ul>
        {!menu && (
          <AiOutlineMenu size={35} className="md:hidden" onClick={() => MenuHandel(true)} />
        )}
      </div>
      <Menu MenuHandel={MenuHandel} menu={menu} />
    </nav>
  );
};

export default NavBar;
