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

/**
 * Example usage: pass an object with metrics and optionally min/max ranges per metric.
 */
export default function MetricBar({ metricKey = "cpu_load", value = 0, ranges }) {
  // ranges: { cpu_load: [0,100], disk_io: [0,1000], network_speed: [0,2000] }
  const barRef = useRef(null);

  useEffect(() => {
    // decide input range and map to percentage 0..1 for scaleY
    const [inMin, inMax] = (ranges && ranges[metricKey]) || [0, 100];

    // map to 0..100 percent
    const pct = mapRange(value, inMin, inMax, 0, 100);

    // convert pct to scaleY (0..1)
    const scaleY = pct / 100;

    // animate using transform (origin: bottom)
    gsap.killTweensOf(barRef.current);
    gsap.set(barRef.current, { transformOrigin: "bottom center" });

    // animate up and then back down (yoyo)
    gsap.to(barRef.current, {
      scaleY,
      duration: 1.2,
      ease: "power2.out",
      repeat: 1,       // play forward then repeat once
      yoyo: true,      // reverse on repeat
      repeatDelay: 1,  // wait 1s at top before returning
    });
  }, [value, metricKey, ranges]);

  return (
    <div className="w-20 flex flex-col items-center text-white">
      <div className="h-48 w-full bg-gray-800 rounded-xl overflow-hidden flex items-end">
        {/* inner bar: initial scaleY 0 */}
        <div
          ref={barRef}
          className="w-full rounded-t-xl"
          style={{
            background: "linear-gradient(180deg,#34d399,#10b981)",
            transform: "scaleY(0)", // start collapsed
          }}
        />
      </div>
      <div className="mt-2 text-xs text-center">
        <div>{metricKey.replace(/_/g, " ")}</div>
        <div className="text-sm">{Math.round(value)}</div>
      </div>
    </div>
  );
}
