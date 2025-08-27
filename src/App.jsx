import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import Intro from "./components/Intro.jsx";
import Carousel from "./components/Carousel.jsx";
import Footer from "./components/Footer.jsx";
import React from "react";
import Divider from "./components/Divider";
import FourCardSection from "./components/FourCardSection";


export default function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Divider />
      <Intro />
      <Divider />
      <Carousel />
      <Divider />
      <FourCardSection />
      <Footer />

    </>
  );
}
