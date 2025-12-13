import React from "react";
import PrivacyModal from "./PrivacyModal"; // adjust path if needed
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./SocialMediaIcons";


export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-between px-12 py-4 bg-black border-t border-[#222] text-[#ccc] text-sm">
      <div>
        <p className="m-0">&copy; 2025 Code Business</p>
      </div>
      <div className="flex gap-6 items-center">
        {/* Footer links */}
        <FacebookIcon className="hover:text-sky-500 transition-colors" />
        <InstagramIcon className="hover:text-cyan-400 transition-colors" />
        <TwitterIcon className="hover:text-sky-500 transition-colors" />
        <PrivacyModal />

        <a
          href="#"
          className="text-[#ccc] hover:text-white transition-colors"
        >
          Terms
        </a>

      </div>
    </footer>
  );
}
