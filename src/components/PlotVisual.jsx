import Plot from 'react-plotly.js';
import { useEffect, useState } from 'react';
import React from "react";

function PlotVisual() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://127.0.0.1:8000/graph_data")
        .then(res => res.json())
        .then(json => setData(json));
    }, 250); // refresh every 100ms

    return () => clearInterval(interval);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
          width: 1000,   // set a fixed width
          height: 400,  // set a fixed height
          margin: { t: 20, b: 40, l: 50, r: 20 }
        }}
      />
    </div>

  );
}

export default PlotVisual;
