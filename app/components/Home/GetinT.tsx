"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Pbutton from "../share/Pbutton";

// ⚠️ EmailJS dashboard theke ei 3 ta value niye emngo (https://www.emailjs.com)
// Service create korbe -> gmail connect korbe (hasan.cse570@gmail.com)
// Template create korbe -> variable name: from_name, from_email, subject, message
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const CONTACT_EMAIL = "hasan.cse570@gmail.com";

// ── animation variants (same pattern as other sections) ────────────────────
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const GetinT = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || "New message from portfolio",
          message: form.message,
          to_email: CONTACT_EMAIL,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      toast.success("Message sent successfully! I'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto font-lato">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        variants={headerVariants}
        className="flex flex-col items-center text-center mb-14 w-full"
      >
        <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#1E1E1E] dark:text-white leading-none tracking-[0.03em]">
          Get In Touch
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="h-[4px] bg-[linear-gradient(94.36deg,#FD6F00_3.1%,#E46400_94.54%)] mt-3 mb-4 rounded-full"
        />

        <p className="font-lato font-medium text-[15px] sm:text-[17px] md:text-[20px] text-[#707070] dark:text-[#A0A0A0] leading-[1.6] tracking-[0.03em] text-center max-w-3xl px-2">
          Have a project in mind or just want to say hi? Fill out the form below and I&apos;ll get back to you.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* ── LEFT: Contact info ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="lg:w-[35%] flex flex-col gap-5"
        >
          <motion.div
            variants={fadeUp}
            style={{ background: "#FFFFFF0A" }}
            className="flex items-center gap-4 p-5 rounded-[8px] backdrop-blur-sm border border-gray-800/40"
          >
            <div className="w-11 h-11 shrink-0 rounded-full bg-[#FD6F00]/10 flex items-center justify-center">
              <Mail size={18} className="text-[#FD6F00]" />
            </div>
            <div>
              <p className="font-lato font-semibold text-[13px] text-[#959595]">Email</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-lato font-medium text-[14px] text-[#1E1E1E] dark:text-white hover:text-[#FD6F00] transition-colors break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            style={{ background: "#FFFFFF0A" }}
            className="flex items-center gap-4 p-5 rounded-[8px] backdrop-blur-sm border border-gray-800/40"
          >
            <div className="w-11 h-11 shrink-0 rounded-full bg-[#FD6F00]/10 flex items-center justify-center">
              <Phone size={18} className="text-[#FD6F00]" />
            </div>
            <div>
              <p className="font-lato font-semibold text-[13px] text-[#959595]">Phone</p>
              <p className="font-lato font-medium text-[14px] text-[#1E1E1E] dark:text-white">
                +880 XXXXXXXXXX
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            style={{ background: "#FFFFFF0A" }}
            className="flex items-center gap-4 p-5 rounded-[8px] backdrop-blur-sm border border-gray-800/40"
          >
            <div className="w-11 h-11 shrink-0 rounded-full bg-[#FD6F00]/10 flex items-center justify-center">
              <MapPin size={18} className="text-[#FD6F00]" />
            </div>
            <div>
              <p className="font-lato font-semibold text-[13px] text-[#959595]">Location</p>
              <p className="font-lato font-medium text-[14px] text-[#1E1E1E] dark:text-white">
                Barishal, Bangladesh
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Form ── */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ background: "#FFFFFF0A" }}
          className="lg:w-[65%] flex flex-col gap-5 p-6 md:p-8 rounded-[8px] backdrop-blur-sm border border-gray-800/40"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-lato font-medium text-[13px] text-[#959595]">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="font-lato text-[14px] text-[#1E1E1E] dark:text-white bg-white dark:bg-[#1E1E1E] border border-[#959595]/30 rounded-[8px] px-4 py-3 outline-none focus:border-[#FD6F00]/60 transition-colors placeholder:text-[#959595]/60"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-lato font-medium text-[13px] text-[#959595]">
                Your Email *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="font-lato text-[14px] text-[#1E1E1E] dark:text-white bg-white dark:bg-[#1E1E1E] border border-[#959595]/30 rounded-[8px] px-4 py-3 outline-none focus:border-[#FD6F00]/60 transition-colors placeholder:text-[#959595]/60"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-lato font-medium text-[13px] text-[#959595]">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Let's work together"
              className="font-lato text-[14px] text-[#1E1E1E] dark:text-white bg-white dark:bg-[#1E1E1E] border border-[#959595]/30 rounded-[8px] px-4 py-3 outline-none focus:border-[#FD6F00]/60 transition-colors placeholder:text-[#959595]/60"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-lato font-medium text-[13px] text-[#959595]">
              Message *
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell me about your project..."
              className="font-lato text-[14px] text-[#1E1E1E] dark:text-white bg-white dark:bg-[#1E1E1E] border border-[#959595]/30 rounded-[8px] px-4 py-3 outline-none focus:border-[#FD6F00]/60 transition-colors placeholder:text-[#959595]/60 resize-none"
            />
          </div>

          <div className="pt-2">
            <Pbutton
              type="submit"
              disabled={sending}
              logo={Send}
              className="w-full sm:w-auto font-medium disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Send Message"}
            </Pbutton>
          </div>
        </motion.form>
      </div>

      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default GetinT;