import React from "react";

// Shared wrapper styles (optional but nice)
const linkClasses =
  "inline-flex items-center justify-center hover:text-cyan-300 transition-colors duration-200";

// Facebook Icon
export const FacebookIcon = ({ size = 28, className = "text-cyan-400" }) => (
  <a
    href="https://www.facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className={linkClasses}
    aria-label="Facebook"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.89h-2.3v6.99C18.34 21.13 22 17 22 12z" />
    </svg>
  </a>
);

// Instagram Icon
export const InstagramIcon = ({ size = 28, className = "text-cyan-400" }) => (
  <a
    href="https://www.instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className={linkClasses}
    aria-label="Instagram"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Outer rounded square */}
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />

      {/* Inner circle */}
      <circle cx="12" cy="12" r="4" />

      {/* Camera dot */}
      <circle cx="17" cy="7" r="1" />
    </svg>
  </a>
);

// Twitter (X) Icon
export const TwitterIcon = ({ size = 28, className = "text-cyan-400" }) => (
  <a
    href="https://x.com"
    target="_blank"
    rel="noopener noreferrer"
    className={linkClasses}
    aria-label="X (Twitter)"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  </a>
);
