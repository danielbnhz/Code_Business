// frontend/src/components/Disclaimer.jsx
import React from "react";

export default function Disclaimer() {
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 py-2 pb-12 rounded-md shadow-sm">
      <p className="font-semibold">Disclaimer:</p>
      <p>
        The form on this page is currently for demonstration purposes only
        and is <strong>not programmed to submit data anywhere</strong>.
      </p>
    </div>
  );
}
