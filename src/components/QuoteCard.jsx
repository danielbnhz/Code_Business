import React from "react";

export default function QuoteCard({ name, title, quote }) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <p className="text-white italic mb-4">&ldquo;{quote}&rdquo;</p>
      <p className="font-semibold text-blue-600">{name}</p>
      <p className="text-sm text-gray-400">{title}</p>
    </div>
  );
}
