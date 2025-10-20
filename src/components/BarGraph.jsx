import { useEffect, useState } from "react";
import gsap from "gsap";
import React from "react";

const BarGraph = () => {
  const [metrics, setMetrics] = useState({
    cpu_load: 0,
    memory_usage: 0,
    disk_io: 0,
    network_speed: 0,
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      const res = await fetch("http://localhost:8000/metrics");
      const data = await res.json();
      setMetrics(data);

      // Animate bars to new height
      Object.keys(data).forEach(key => {
        gsap.to(`#${key}`, {
          height: `${data[key]}%`,
          duration: 1.5,
          ease: "power2.out"
        });
      });
    };

    fetchMetrics();
    const interval = setInterval(fetchMetrics, 2000); // update every 2s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-around items-end h-64 bg-gray-900 rounded-2xl p-4">
      {Object.entries(metrics).map(([key, value]) => (
        <div key={key} className="flex flex-col items-center text-white">
          <div
            id={key}
            className="w-8 bg-green-500 rounded-t-xl"
            style={{ height: `${value}%` }}
          />
          <span className="text-xs mt-2">{key.replace("_", " ")}</span>
        </div>
      ))}
    </div>
  );
};

export default BarGraph;
