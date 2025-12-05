import React, { useState } from "react";

export default function PrivacyModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Privacy Notice
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 text-black flex items-center justify-center">
          {/* Greyed-out background */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Modal content */}
          <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-md mx-4">
            <h2 className="text-lg font-bold mb-4">Privacy Notice</h2>
            <p className="mb-4">
              This website does <strong>not</strong> track users or store any
              personal information. No analytics or cookies are used.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
