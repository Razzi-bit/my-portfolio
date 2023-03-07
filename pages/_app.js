import NavBar from "../layouts/navbar/Navbar";
import "@/styles/globals.css";
import Footer from "../layouts/footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
