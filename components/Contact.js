'use client'

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaTelegram
} from "react-icons/fa"

import { MdEmail } from "react-icons/md"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-cream">
      <div className="max-w-5xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="text-gradient">Contact Me</span>
        </h2>

        {/* MESSAGE FORM */}
        <div className="max-w-xl mx-auto bg-beige p-6 rounded-2xl shadow-md">

          <h3 className="text-xl font-semibold mb-4 text-darkbrown">
            Send Me a Message
          </h3>

          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-cream border border-beige focus:outline-none focus:ring-2 focus:ring-mocha"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-cream border border-beige focus:outline-none focus:ring-2 focus:ring-mocha"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="p-3 rounded-lg bg-cream border border-beige focus:outline-none focus:ring-2 focus:ring-mocha"
            ></textarea>

            <button
              type="submit"
              className="bg-mocha text-cream py-3 rounded-full font-bold hover:scale-105 transition"
            >
              Send
            </button>

          </form>
        </div>

        {/* ICONS (ONE LINE BELOW) */}
        <div className="flex justify-center gap-8 mt-10 flex-wrap">

          <a href="mailto:saremhanan44@gmail.com" className="hover:scale-110 transition">
            <MdEmail className="text-red-500 text-2xl" />
          </a>

          <a href="tel:0934953627" className="hover:scale-110 transition">
            <FaPhoneAlt className="text-green-600 text-2xl" />
          </a>

          <a href="https://t.me/sarem55" target="_blank" className="hover:scale-110 transition">
            <FaTelegram className="text-blue-500 text-2xl" />
          </a>

          <a href="https://instagram.com/makegirls1851" target="_blank" className="hover:scale-110 transition">
            <FaInstagram className="text-pink-500 text-2xl" />
          </a>

          <a href="https://linkedin.com/in/hanan-siraj-1807053b1" target="_blank" className="hover:scale-110 transition">
            <FaLinkedin className="text-blue-700 text-2xl" />
          </a>

          <a href="https://github.com/hanan866" target="_blank" className="hover:scale-110 transition">
            <FaGithub className="text-black text-2xl" />
          </a>

        </div>

      </div>
     <p className="mt-6 text-center text-darkbrown font-semibold text-sm md:text-base tracking-wide">
  Open to remote work. Please feel free to contact me through any of the platforms.
    </p>
    </section>
  )
}