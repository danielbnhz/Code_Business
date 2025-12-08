import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Disclaimer_2 from "../components/Disclaimer_2.jsx";
import Divider from "../components/Divider.jsx";
import email_img from "../images/EmailImage.jpg";

export default function Contact() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row max-w-6xl w-full gap-8">
        {/* Left side: Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={email_img}
            alt="Decorative"
            className="rounded-xl object-cover w-full h-full max-h-[500px]"
          />
        </div>

        {/* Right side: Contact Form */}
        <div className="md:w-1/2 flex justify-center items-center">
          <ContactForm />
        </div>
      </div>
    </div>
    <Divider />
    <Disclaimer_2 />
    <Divider />
    <Footer />
    </>
  );
}
