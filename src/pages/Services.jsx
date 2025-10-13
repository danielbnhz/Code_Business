import { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import React from "react";
import MetricsPrimer from "../components/MetricsPrimer.jsx";


export default function Services() {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/api/random_metrics")
      .then((res) => res.json())
      .then((data) => setMetrics(data))
      .catch((err) => console.error("Failed to fetch metrics:", err));
  }, []);

  return (
    <>
    <Navbar />
    <MetricsPrimer />
    <div className="p-8">
      <h1 className="text-3xl  font-bold text-[#00ffff] mb-4">Our Services Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border rounded shadow text-[#00ffff]">
          <p className="font-semibold">Users</p>
          <p>{metrics.users ?? "Loading..."}</p>
        </div>
        <div className="p-4 border rounded text-[#00ffff] shadow">
          <p className="font-semibold">Uptime %</p>
          <p>{metrics.uptime_percent ?? "Loading..."}</p>
        </div>
        <div className="p-4 border rounded shadow text-[#00ffff]">
          <p className="font-semibold">Tasks Completed</p>
          <p>{metrics.tasks_completed ?? "Loading..."}</p>
        </div>
        <div className="p-4 border rounded shadow text-[#00ffff]">
          <p className="font-semibold">Revenue</p>
          <p>${metrics.revenue ?? "Loading..."}</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
