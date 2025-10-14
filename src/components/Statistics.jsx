import React from "react";
import { useState, useEffect } from "react";




export default function Statistics() {
    const [stats, setStats] = useState({ users: 2000, uptime_percent: 99.5, tasks_completed: 500, revenue: 25000 });

    useEffect(() => {
    const interval = setInterval(async () => {
        const res = await fetch("http://127.0.0.1:8000/api/random_metrics_continuous");
        const data = await res.json();

        setStats(prev => ({
        users: Math.round(prev.users + (data.users - prev.users) * 0.2, .2),
        uptime_percent: Math.round(prev.uptime_percent + (data.uptime_percent - prev.uptime_percent) * 0.2, .2),
        tasks_completed: Math.round(prev.tasks_completed + (data.tasks_completed - prev.tasks_completed) * 0.2, .2),
        revenue: Math.round(prev.revenue + (data.revenue - prev.revenue) * 0.2 , .2)
        }));
    }, 1000);
    return () => clearInterval(interval);
    }, []);
  return (
    <div className="p-8">
      <h1 className="text-3xl  font-bold text-[#00ffff] mb-4">Our Services Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border rounded shadow text-[#00ffff]">
          <p className="font-semibold">stats.users</p>
          <p>{stats.users ?? "Loading..."}</p>
        </div>
        <div className="p-4 border rounded text-[#00ffff] shadow">
          <p className="font-semibold">stats.uptime_percent %</p>
          <p>{stats.uptime_percent ?? "Loading..."}</p>
        </div>
        <div className="p-4 border rounded shadow text-[#00ffff]">
          <p className="font-semibold">Tasks Completed</p>
          <p>{stats.tasks_completed ?? "Loading..."}</p>
        </div>
        <div className="p-4 border rounded shadow text-[#00ffff]">
          <p className="font-semibold">Revenue</p>
          <p>${stats.revenue ?? "Loading..."}</p>
        </div>
      </div>
    </div>
  );
}
