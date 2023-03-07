import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const Menu = ({ MenuHandel, menu }) => {
  return (
    <div
      className={
        menu
          ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] z-60 md:w-[45%] h-screen p-10 ease-in duration-300 bg-second "
          : "fixed left-[-200%] top-0 p-4 h-screen ease-in duration-300"
      }
    >
      {menu && (
        <AiOutlineClose
          size={35}
          className="text-[#fff] absolute right-4 top-8"
          onClick={() => MenuHandel(false)}
        />
      )}
      <p className="font-Poppins py-4 text-3xl cursor-pointer text-[#fff]">
        Olaf<span className="text-[#c3c3c3]"> Kudrewicz</span>
      </p>
      <div className="border-b border-details my-4">
        <p className="w-[85%] md:w-[90%] py-4 text-[#fff]">Let build something together</p>
      </div>
      <ul className="flex flex-col uppercase justify-start items-start py-12 gap-6 text-[#fff]">
        <li onClick={() => MenuHandel(false)}>
          <Link href={"/"}>Home</Link>
        </li>
        <li onClick={() => MenuHandel(false)}>
          <Link href={"/#skills"}>Skills</Link>
        </li>
        <li onClick={() => MenuHandel(false)}>
          <Link href={"/#projects"}>Projects</Link>
        </li>
        <li onClick={() => MenuHandel(false)}>
          <Link href={"/#contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
