import Head from "next/head";
import Main from "../components/Main";
import NavBar from "../layouts/navbar/Navbar";
import OverMij from "../components/Skils/Skils";
import Projects from "../components/Projects/projects";
import Contact from "../components/Contact/Contact";
import Footer from "../layouts/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Olaf kudrewicz</title>
        <meta name="description" content="Ik ben olaf, front-end developer" />
      </Head>
      <Main />
      <OverMij />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
