import React from "react";


export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-between px-12 py-4 bg-black border-t border-[#222] text-[#ccc] text-sm">
            <div>
                <p className="m-0">&copy; 2025 Code Business</p>
            </div>
            <div className="flex gap-6">
                <a href="#" className="text-[#ccc] hover:text-white transition-colors">Privacy</a>
                <a href="#" className="text-[#ccc] hover:text-white transition-colors">Terms</a>
                <a href="#" className="text-[#ccc] hover:text-white transition-colors">Contact</a>
            </div>
        </footer>
    );
}
