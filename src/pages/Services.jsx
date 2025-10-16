import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import React from "react";
import MetricsPrimer from "../components/MetricsPrimer.jsx";
import Statistics from "../components/Statistics.jsx";
import Banner_3 from "../components/banner_3.jsx";
import PlotVisual from "../components/PlotVisual.jsx"

export default function Services() {

  return (
    <>
    <Navbar />
    <Banner_3 />
    <MetricsPrimer />
    <Statistics />
    <PlotVisual />
    <Footer />
    </>
  );
}
