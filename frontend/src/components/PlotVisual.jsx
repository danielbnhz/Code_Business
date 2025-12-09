import Plot from 'react-plotly.js';
import { useEffect, useState } from 'react';
import React from "react";

function PlotVisual() {
  const [data, setData] = useState(null);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth * 0.9, height: 400 });

  // Update plot data
  useEffect(() => {
    const interval = setInterval(() => {
      const API_BASE = import.meta.env.VITE_API_URL;

      fetch(`${API_BASE}/graph_data`)
        .then(res => res.json())
        .then(json => setData(json));
    }, 250);

    return () => clearInterval(interval);
  }, []);

  // Update dimensions on window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth * 0.9,  // 90% of window width
        height: 400                       // fixed height or calculate dynamically if you want
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!data) return <p className="text-white">Loading...</p>;

  return (
    <div className="flex justify-center items-center">
      <Plot
        data={[{
          x: data.x,
          y: data.y,
          type: data.type,
          mode: data.mode,
          line: { color: 'white' },
          marker: { color: 'white' }
        }]}
        layout={{
          plot_bgcolor: 'black',
          paper_bgcolor: 'black',
          xaxis: { color: 'white' },
          yaxis: { color: 'white' },
          width: dimensions.width,
          height: dimensions.height,
          margin: { t: 20, b: 40, l: 50, r: 20 }
        }}
        config={{ displayModeBar: false }}
      />
    </div>
  );
}

export default PlotVisual;
