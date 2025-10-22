// BarGraph.jsx
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

/**
 * Helpers
 */
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const mapRange = (value, inMin, inMax, outMin = 0, outMax = 100) => {
  const norm = (value - inMin) / (inMax - inMin || 1);
  return outMin + clamp(norm, 0, 1) * (outMax - outMin);
};


export default function MetricBar({ metricKey = "cpu_load", value = 0, ranges }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const [inMin, inMax] = (ranges && ranges[metricKey]) || [0, 100];
    const mapped = mapRange(value, inMin, inMax, 0, 100);
    setPct(mapped);
  }, [value, metricKey, ranges]);

  return (
    <div className="w-20 flex flex-col items-center text-white pt-22">
      {/* Outer container */}
      <div className="h-48 w-full bg-gray-800 rounded-xl overflow-hidden flex items-end">
        {/* Inner bar */}
        <div
          className="w-full rounded-t-xl transition-all duration-500 ease-out"
          style={{
            height: `${pct}%`,
            background: "linear-gradient(180deg, #34d399, #10b981)",
          }}
        />
      </div>

      {/* Labels */}
      {/* Consistent text block with fixed height */}
      <div className="h-10 mt-2 text-xs text-center flex flex-col justify-center">
        <div className="truncate w-full">{metricKey.replace(/_/g, " ")}</div>
        <div className="text-sm">{Math.round(value)}</div>
      </div>
  </div>
  );
}