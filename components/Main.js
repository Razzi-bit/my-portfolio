import Link from "next/link";
import { FiArrowDown } from "react-icons/fi";

const Main = () => {
  return (
    <main className="bg-main h-screen px-4 md:px-10 relative">
      <div className="LayoutContainer DefaultText flex flex-col text-center justify-center items-center h-full">
        <p className="text-base uppercase tracking-widest font-Roboto">
          LETS BUILD SOMETHING TOGHTER
        </p>
        <h1 className="text-3xl sm:text-6xl py-4  font-Poppins">
          HI, Ik ben <span className="text-details">Olaf</span>
        </h1>
        <h2 className="text-3xl sm:text-6xl py-4  font-Poppins">Front-End Web Developer</h2>
        <p className="text-base py-4 max-w-[800px] font-Roboto">
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum dolores beatae
            corrupti tenetur voluptatem cupiditate exercitationem reprehenderit? Laudantium iure
            pariatur quidem magni magnam officia, iusto tempora fuga aperiam unde. */}
          Junior programmeur met ervaring in React, Next.js, TypeScript, HTML, JavaScript, CSS/SCSS,
          Tailwind en Style Components, en ik ben vertrouwd met werken op GitHub. Ik ben altijd op
          zoek naar nieuwe uitdagingen en ben vastbesloten om mijn vaardigheden en kennis verder te
          ontwikkelen om software van hoge kwaliteit te bouwen die de verwachtingen van gebruikers
          overtreft.
        </p>
        <Link href={"/#skills"}>
          <div className="h-10 w-10 text-details rounded-full bg-main border border-details animate-bounce m-8 cursor-pointer flex items-center justify-center">
            <FiArrowDown size={30} />
          </div>
        </Link>
      </div>
      <div className="hidden lg:flex absolute bottom-0 top-0 left-0 right-0 ClipPath1 bg-second w-full h-full z-[1]"></div>
    </main>
  );
};

export default Main;
