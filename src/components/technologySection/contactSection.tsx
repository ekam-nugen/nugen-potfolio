"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactUsSection = () => {
  // Animation variants for the form section (title, subtitle, inputs)
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Animation variants for form inputs (staggered)
  const inputVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Staggered entrance for inputs
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  // Animation variants for contact info section
  const contactVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
  };

  // Animation variants for map
  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
    },
  };

  // Animation variants for button hover
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Animation variants for link hover (phone, email)
  const linkVariants = {
    hover: {
      backgroundSize: "100% 1px",
      backgroundPosition: "0 100%",
      backgroundRepeat: "no-repeat",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-gradient-to-r from-white via-[#fff1eb] to-white text-gray-800 px-6 py-16 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Form Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={formVariants}
        >
          <motion.h2
            className="text-4xl font-bold mb-3 leading-snug text-gray-900"
            variants={formVariants}
          >
            Let’s Build Something Great Together!
          </motion.h2>
          <motion.p
            className="text-base text-gray-600 mb-8"
            variants={formVariants}
          >
            Reach out and we’ll get back to you within a few hours.
          </motion.p>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Full Name *", "Email *"].map((placeholder, index) => (
                <motion.input
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={inputVariants}
                  type={placeholder.includes("Email") ? "email" : "text"}
                  placeholder={placeholder}
                  className="p-4 rounded-xl bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all shadow-sm"
                  whileFocus={{ scale: 1.02 }}
                />
              ))}
            </div>
            <motion.input
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={inputVariants}
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all shadow-sm"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={inputVariants}
              placeholder="Your Message *"
              rows={5}
              className="w-full p-4 rounded-xl bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all resize-none shadow-sm"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              variants={buttonVariants}
              whileHover="hover"
              className="w-72 hover:bg-gradient-to-r from-orange-400 to-purple-500 hover:text-white bg-white text-black hover:opacity-90 transition-colors py-4 text-lg rounded-xl font-semibold shadow-md"
            >
              Send Your Query →
            </motion.button>

            <motion.p
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={inputVariants}
              className="text-sm text-gray-500 mt-2"
            >
              ✅ 100% Confidential | 📝 We Sign NDA
            </motion.p>
          </form>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={contactVariants}
          className="bg-white text-gray-900 p-6 rounded-2xl shadow-xl border border-gray-200"
        >
          <motion.h3
            className="text-2xl font-semibold mb-4"
            variants={contactVariants}
          >
            Contact Information
          </motion.h3>
          <motion.p
            className="mb-4 leading-relaxed text-sm"
            variants={contactVariants}
          >
            <strong>📍 Address:</strong>
            <br />
            C-196/A, Times Square Building,
            <br />
            Ground Floor, Sector 74, SAS Nagar,
            <br />
            Mohali, Punjab, 160071
          </motion.p>
          <motion.p
            className="mb-2 text-sm"
            variants={contactVariants}
            whileHover="hover"
          >
            <strong>📞 Phone :</strong>{" "}
            <motion.a
              href="tel:+917814852571"
              variants={linkVariants}
              className="relative"
            >
              +91 78148 52571
            </motion.a>
          </motion.p>
          <motion.p
            className="mb-6 text-sm"
            variants={contactVariants}
            whileHover="hover"
          >
            <strong>📧 Email :</strong>{" "}
            <motion.a
              href="mailto:info@nugeninfo.com"
              variants={linkVariants}
              className="relative"
            >
              info@nugeninfo.com
            </motion.a>
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={mapVariants}
            className="rounded overflow-hidden border border-purple-300 shadow-md"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13716.007378245253!2d76.69593763440173!3d30.70334136422268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feef113b57669%3A0x7b7d3b65b84f9b19!2sNugen%20I.T.%20Services!5e0!3m2!1sen!2sin!4v1681234567890!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen
              loading="lazy"
              className="rounded"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsSection;
