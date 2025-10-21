import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import React from "react";
import MetricsPrimer from "../components/MetricsPrimer.jsx";
import Statistics from "../components/Statistics.jsx";
import Banner_3 from "../components/banner_3.jsx";
import PlotVisual from "../components/PlotVisual.jsx"
import BarGraph from "../components/BarGraph.jsx";
import { useState, useEffect } from "react";


const RANGES = {
  cpu_load: [0, 100],
  memory_usage: [0, 100],
  disk_io: [0, 900],        // adjust to expected maxs
  network_speed: [0, 1000],
};


export default function Services() {

  const [metrics, setMetrics] = useState({ cpu_load: 0, memory_usage: 0, disk_io: 0, network_speed: 0 });

  useEffect(() => {
    const fetchMetrics = async () => {
      const res = await fetch("http://localhost:8000/get_2nd_metrics");
      const json = await res.json();
      setMetrics(json);
    };
    fetchMetrics();
    const id = setInterval(fetchMetrics, 2000);
    return () => clearInterval(id);
  }, []);


  return (
    <>
    <Navbar />
    <Banner_3 />
    <MetricsPrimer />
    <Statistics />
    <PlotVisual />
    <div className="flex gap-4 pb-24">

      <BarGraph metricKey="cpu_load" value={metrics.cpu_load} ranges={RANGES}/>
      <BarGraph metricKey="memory_usage" value={metrics.memory_usage} ranges={RANGES}/>
      <BarGraph metricKey="disk_io" value={metrics.disk_io} ranges={RANGES}/>
      <BarGraph metricKey="network_speed" value={metrics.network_speed} ranges={RANGES}/>
    </div>    
    <Footer />
    </>
  );
}
