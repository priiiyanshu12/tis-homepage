"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";

const enquiryTopics = [
  "Campus & Facilities",
  "Academics & Learning",
  "Sports & Activities",
  "School Environment",
  "Boarding / Hostel",
  "Fees & General Information",
  "Something Else",
];

export default function LocationContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeModal = () => {
    setIsOpen(false);

    setTimeout(() => {
      setSubmitted(false);
    }, 300);
  };

  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden bg-(--dark-section) text-(--dark-section-text)"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=90"
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/75" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"
          >
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d4ad70]">
                Contact
              </p>

              <h2 className="mt-3 max-w-3xl text-4xl font-medium leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Let&apos;s start a
                <br />
                <span className="text-white/40">conversation.</span>
              </h2>
            </div>

            <p className="max-w-sm text-xs leading-5 text-white/55 sm:text-sm sm:leading-6 lg:justify-self-end">
              Have a question about TIS? Get in touch with us for general
              information about the school, campus, academics and student life.
            </p>
          </motion.div>

          {/* Contact + Map */}
          <div className="mt-8 grid gap-3 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex min-h-[300px] flex-col rounded-xl border border-white/15 bg-black/20 p-5 backdrop-blur-sm sm:p-6 lg:min-h-[320px]"
            >
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#d4ad70]">
                  Get in touch
                </p>

                <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em] text-white sm:text-3xl">
                  We&apos;re here to help.
                </h3>

                <p className="mt-3 max-w-md text-xs leading-5 text-white/45 sm:text-sm sm:leading-6">
                  Reach out to the school team for information and general
                  enquiries. We&apos;ll be happy to assist you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d4ad70]/30 text-[#d4ad70]">
                    <MapPin size={14} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                      Address
                    </p>

                    <p className="mt-1 max-w-xs text-xs leading-5 text-white/70">
                      Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun –
                      248011, Uttarakhand
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d4ad70]/30 text-[#d4ad70]">
                      <Phone size={14} strokeWidth={1.5} />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                        Phone
                      </p>

                      <p className="mt-1 text-xs text-white/70">
                        Contact the school office
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d4ad70]/30 text-[#d4ad70]">
                      <Mail size={14} strokeWidth={1.5} />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                        Email
                      </p>

                      <p className="mt-1 text-xs text-white/70">
                        General school enquiries
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-6">
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="group flex items-center gap-2 rounded-full bg-[#d4ad70] px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#17251f] transition-all duration-300 hover:bg-white"
                >
                  Get in Touch

                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative min-h-[300px] overflow-hidden rounded-xl border border-white/15 bg-black/20 backdrop-blur-sm sm:min-h-[320px]"
            >
              <iframe
                title="Tulas International School location"
                src="https://www.google.com/maps?q=Tulas%20International%20School%2C%20Dehradun&output=embed"
                className="absolute inset-0 h-full w-full border-0 grayscale-[20%]"
                loading="lazy"
              />

              <div className="pointer-events-none absolute inset-0 border border-white/5" />

              <div className="pointer-events-none absolute left-4 top-4 rounded-lg border border-white/15 bg-black/55 px-3 py-2 backdrop-blur-md">
                <p className="text-[8px] uppercase tracking-[0.2em] text-[#d4ad70]">
                  Find us
                </p>

                <p className="mt-1 text-[10px] text-white">
                  Tulas International School
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 border-t border-white/10 pt-5"
          >
            <p className="text-[9px] uppercase tracking-[0.25em] text-[#d4ad70]">
              Visit TIS
            </p>

            <p className="mt-3 max-w-3xl text-lg font-medium leading-[1.2] tracking-[-0.025em] text-white sm:text-xl lg:text-2xl">
              A place to learn, explore and{" "}
              <span className="text-[#d4ad70]">grow together.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeModal();
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/10 bg-[#17251f] p-5 text-white shadow-2xl sm:p-7"
            >
              {/* Close */}
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close enquiry form"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-[#d4ad70]/50 hover:text-[#d4ad70]"
              >
                <X size={15} />
              </button>

              {!submitted ? (
                <>
                  {/* Modal Header */}
                  <div className="pr-10">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#d4ad70]">
                      General Enquiry
                    </p>

                    <h3 className="mt-2 text-3xl font-medium tracking-[-0.04em]">
                      How can we help?
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-white/45">
                      Send us your enquiry and our team can assist you with
                      general school information.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                          Name
                        </label>

                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your name"
                          className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#d4ad70]/60"
                        />
                      </div>

                      <div>
                        <label className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                          Phone
                        </label>

                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="Phone number"
                          className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#d4ad70]/60"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                        Email
                      </label>

                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email address"
                        className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#d4ad70]/60"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                        Topic
                      </label>

                      <select
                        name="topic"
                        required
                        defaultValue=""
                        className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none focus:border-[#d4ad70]/60"
                      >
                        <option value="" disabled className="bg-[#17251f]">
                          Select a topic
                        </option>

                        {enquiryTopics.map((topic) => (
                          <option
                            key={topic}
                            value={topic}
                            className="bg-[#17251f]"
                          >
                            {topic}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                        Message
                      </label>

                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="How can we help?"
                        className="mt-1.5 w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#d4ad70]/60"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#d4ad70] py-3 text-[10px] font-medium uppercase tracking-[0.15em] text-[#17251f] transition-all duration-300 hover:bg-white"
                    >
                      Send Enquiry

                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </button>
                  </form>
                </>
              ) : (
                /* Success State */
                <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d4ad70]/40 text-[#d4ad70]">
                    <CheckCircle2 size={25} strokeWidth={1.4} />
                  </div>

                  <h3 className="mt-5 text-2xl font-medium tracking-[-0.04em]">
                    Enquiry received.
                  </h3>

                  <p className="mt-2 max-w-sm text-xs leading-5 text-white/45">
                    Thank you for reaching out to Tulas International School.
                    Our team will get back to you with the information you
                    need.
                  </p>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="mt-6 rounded-full border border-white/15 px-5 py-2.5 text-[10px] uppercase tracking-[0.15em] text-white/70 transition-all hover:border-[#d4ad70] hover:text-[#d4ad70]"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}