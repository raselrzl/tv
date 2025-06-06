"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Globe,
  MonitorSpeaker,
  Check,
  BicepsFlexed,
  Axe,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ContactForm from "./component/ContactForm";
import { Modal } from "./component/Modal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <div className="overflow-x-hidden">
      <div className="min-h-screen bg-black">
        {/* Navbar */}
        <nav className="w-full h-24 md:h-36 bg-black z-10 relative">
          <div className="max-w-full mx-auto px-4 py-4 flex items-center justify-between h-full">
            <motion.div
              className="flex items-center pl-2 md:pl-24"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Image
                src="/8k.png"
                alt="Logo"
                width={0}
                height={0}
                sizes="(max-width: 768px) 80px, 120px"
                className="w-[70px] md:w-[120px] h-auto"
              />
            </motion.div>

            <div className="pr-4 md:pr-32 hidden md:block">
              <button
                onClick={() => setModalOpen(true)}
                className="py-4 px-6 text-white font-mono bg-black border-[#D4AF37] border-2 text-md hover:text-gray-300 transition uppercase rounded-none"
              >
                Get free trial
              </button>
            </div>
          </div>
        </nav>

        {/* Body with background image */}
        <div className="relative h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
          <Image
            src="/888k.jpeg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="z-0 object-cover rotate-180"
          />
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Bottom fade to black for smooth transition */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-20" />

          {/* Animated Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }} // triggers when 30% visible, repeats every time in view
            transition={{ duration: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-30 px-4"
          >
            <p className="text-sm md:text-base font-[600] text-[#d4bd71] mb-6 uppercase">
              Strong8k Supplier
            </p>
            <h1 className="text-[40px] md:text-[80px] font-[900] mb-4">
              Real Strong8k
              <br /> subscriptions.
            </h1>
            <Link
              href="#pricing"
              className="mt-2 px-6 py-3 border-2 border-[#d4bd71] text-white font-mono uppercase hover:text-gray-300 transition rounded-none"
            >
              Check Pricing
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent z-0" />

      {/* Feature Section */}
      <section className="min-h-screen w-full bg-black text-white flex items-center justify-center px-4">
        <div className="flex flex-col max-w-6xl w-full">
          <div className="mb-30">
            <div className="flex gap-4 mb-4">
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl md:text-4xl font-[900]"
              >
                <span className="text-5xl md:text-6xl text-[#D4AF37] mr-2">
                  —
                </span>
                Why us?
              </motion.h1>
            </div>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-base md:text-lg text-[#D4AF37]"
            >
              WHY OUR CLIENTS CHOOSE US AS THEIR IPTV PROVIDER?
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-25">
            <div className="col-span-1 grid grid-cols-1 gap-8">
              <div className="flex items-center flex-col md:items-start md:flex-row gap-4">
                <Clock className="w-8 h-8 text-[#D4AF37] mt-1 animate-spin" />
                <div className="text-center md:text-start">
                  <motion.h2
                    className="text-2xl md:text-3xl font-[900] mb-2"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    Fast Response
                  </motion.h2>

                  <motion.p
                    className="text-base md:text-lg text-gray-300"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  >
                    Swift support, when you need it.
                  </motion.p>
                </div>
              </div>

              <div className="flex items-center flex-col md:flex-row md:items-start gap-4">
                <Globe className="w-8 h-8 text-[#D4AF37] mt-1 animate-spin" />
                <div className="text-center md:text-start">
                  <motion.h2
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-2xl md:text-3xl font-[900] mb-2"
                  >
                    Global Availability
                  </motion.h2>

                  <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="text-base md:text-lg text-gray-300"
                  >
                    Access our IPTV services worldwide.
                  </motion.p>
                </div>
              </div>

              <div className="flex items-center flex-col md:flex-row md:items-start gap-4">
                <Sparkles className="w-8 h-8 text-[#D4AF37] mt-1 animate-spin" />
                <div className="text-center md:text-start">
                  <motion.h2
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-2xl md:text-3xl font-[900] mb-2"
                  >
                    Best Quality
                  </motion.h2>

                  <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="text-base md:text-lg text-gray-300"
                  >
                    Superior picture and sound for the best viewing.
                  </motion.p>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="flex-1 flex justify-center z-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }} // ← every time in view
                  transition={{ duration: 1 }}
                >
                  <Image
                    src="/tv2.webp"
                    alt="IPTV Service"
                    width={600}
                    height={400}
                    className="w-full max-w-md h-auto rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* pricing Section */}
      <section
        id="pricing"
        className="min-h-screen w-full bg-black text-white flex items-center justify-center px-4 "
      >
        <div className="flex flex-col max-w-6xl w-full">
          <div className="mb-12">
            <div className="flex gap-4 mb-4">
              <motion.h1
                className="text-3xl md:text-4xl font-[900]"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="text-5xl md:text-6xl text-[#D4AF37] mr-2">
                  —
                </span>
                Pricing.
              </motion.h1>
            </div>
            <motion.p
              className="text-base md:text-lg text-[#D4AF37]"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              We are more than a digital agency
            </motion.p>
          </div>
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-items-center text-center">
            {[
              { title: "6 months", price: "$29", link: "/pricing/6-months" },
              { title: "12 months", price: "$39", link: "/pricing/12-months" },
              { title: "24 months", price: "$59", link: "/pricing/24-months" },
            ].map((plan, index) => {
              const isRecommended = index === 1;

              return (
                <motion.div
                  key={index}
                  className={`relative border border-[#D4AF37] p-6 rounded-none flex flex-col items-center gap-4 md:gap-10 max-w-sm w-full ${
                    isRecommended ? "bg-[#a88c32] border-0" : ""
                  }`}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Recommended Badge */}
                  {isRecommended && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#cdb60d] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                      Recommended
                    </div>
                  )}

                  <motion.h2
                    className={`text-2xl md:text-3xl font-[900] mb-2 ${
                      isRecommended ? "text-white" : ""
                    }`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 20,
                      duration: 0.6,
                    }}
                  >
                    {plan.title}
                  </motion.h2>

                  <motion.p
                    className={`text-base md:text-lg ${
                      isRecommended ? "text-white" : "text-[#D4AF37]"
                    } mb-2`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 20,
                      duration: 0.6,
                      delay: 0.1,
                    }}
                  >
                    {plan.price}
                  </motion.p>

                  {[
                    "4K UHD+ UHD streaming",
                    "99.99% Server Uptime",
                    "Live TV channels",
                    "No Buffering",
                    "24/7 support",
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-2"
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: idx * 0.1,
                      }}
                    >
                      <Check className="w-5 h-5 text-[#D4AF37]" />
                      <p
                        className={`text-sm md:text-base ${
                          isRecommended ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {feature}
                      </p>
                    </motion.div>
                  ))}

                  <Link href={plan.link}>
                    <button
                      className={`mt-4 border-2 px-4 py-2 uppercase transition cursor-pointer ${
                        isRecommended
                          ? "border-white text-white hover:text-[#D4AF37]"
                          : "border-[#D4AF37] hover:text-gray-300"
                      }`}
                    >
                      Choose plan
                    </button>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          ;
        </div>
      </section>

      <section
        className="relative w-full min-h-screen text-white bg-no-repeat bg-center bg-black"
        style={{
          backgroundImage: "url('/gl4.avif')",
          backgroundSize: "cover", // cover for mobile
        }}
      >
        {/* Top gradient fade from black */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10" />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 z-20">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent"></div>
        </div>

        {/* Main layout */}
        <div className="relative z-10 flex flex-col min-h-screen max-w-6xl w-full mx-auto px-4">
          {/* Main content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center py-16">
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-extrabold mb-4"
            >
              Request Your <br />
              Free
              <br />
              Strong8K <br />
              Trial!
            </motion.h1>
            <motion.button
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-4 border-2 border-[#D4AF37] cursor-pointer px-4 py-2 uppercase hover:text-gray-300 transition"
              onClick={() => setModalOpen(true)}
            >
              Get free trial
            </motion.button>
          </div>

          {/* Contact section */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full py-10 items-center">
            {/* Logo - animate from right */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center md:justify-start mb-6 md:mb-0"
            >
              <img src="/8k.png" alt="Strong8K Logo" className="h-28" />
            </motion.div>

            {/* Contact Info - animate from right */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-right space-y-3"
            >
              <p className="font-semibold text-lg">Contact Us</p>

              {/* WhatsApp */}
              <div className="flex justify-center md:justify-end items-center gap-2">
                <a
                  href="https://wa.me/12121212121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:scale-110 transition-transform"
                  aria-label="WhatsApp"
                >
                  {/* Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A12 12 0 0 0 12 0..." />
                  </svg>
                </a>
                <p className="text-white">+12121212121</p>
              </div>

              {/* Email */}
              <div className="flex justify-center md:justify-end items-center gap-2">
                <a
                  href="mailto:contact@website.website"
                  className="text-[#D4AF37] hover:scale-110 transition-transform"
                  aria-label="Email"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4a2 2 0 0 0-2 2..." />
                  </svg>
                </a>
                <p className="text-white">contact@website.website</p>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <div className="relative w-full py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-300">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 border-t border-[#D4AF37]/50"></div>

            <motion.p
              initial={{ x: -100, y: 30, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              © 2025 Strong8K.website – All Rights Reserved
            </motion.p>

            <motion.div
              initial={{ x: 100, y: 30, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="flex gap-4"
            >
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <ContactForm />
      </Modal>
    </div>
  );
}
