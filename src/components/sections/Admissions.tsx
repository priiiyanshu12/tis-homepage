"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  GraduationCap,
  X,
} from "lucide-react";

const heardFromOptions = [
  "Google / Search",
  "Social Media",
  "Friend or Family",
  "School Website",
  "Education Consultant",
  "Other",
];

export default function Admissions() {
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
      {/* =========================================================
          ADMISSIONS SECTION
      ========================================================= */}
      <section
        id="admissions"
        className="relative overflow-hidden bg-(--dark-section) text-(--dark-section-text)"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2200&q=90"
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/80" />
        </div>

        {/* Main Content */}
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
                Admissions
              </p>

              <h2 className="mt-3 max-w-3xl text-4xl font-medium leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Begin your
                <br />
                <span className="text-white/40">journey with TIS.</span>
              </h2>
            </div>

            <p className="max-w-sm text-xs leading-5 text-white/55 sm:text-sm sm:leading-6 lg:justify-self-end">
              Take the first step towards a school experience built around
              learning, exploration, confidence and opportunity.
            </p>
          </motion.div>

          {/* Admission CTA + Quick Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-7 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {/* Main CTA */}
            <div className="group rounded-xl border border-white/15 bg-black/20 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#d4ad70]/40 hover:bg-white/10 sm:col-span-2 lg:col-span-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4ad70]/35 text-[#d4ad70]">
                <GraduationCap size={16} strokeWidth={1.5} />
              </div>

              <h3 className="mt-5 text-2xl font-medium tracking-[-0.04em] text-white">
                Ready to take the next step?
              </h3>

              <p className="mt-2 max-w-lg text-xs leading-5 text-white/45 sm:text-sm sm:leading-6">
                Explore the TIS experience and begin your admission application.
                Our team is here to guide you through the process.
              </p>

              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="group mt-5 flex items-center gap-2 rounded-full bg-[#d4ad70] px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#17251f] transition-all duration-300 hover:bg-white"
              >
                Apply for Admission

                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-xl border border-white/15 bg-black/20 p-4 backdrop-blur-sm">
                <p className="text-3xl font-medium tracking-[-0.06em] text-white">
                  22
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/35">
                  Acres Campus
                </p>
              </div>

              <div className="rounded-xl border border-white/15 bg-black/20 p-4 backdrop-blur-sm">
                <p className="text-3xl font-medium tracking-[-0.06em] text-white">
                  16+
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/35">
                  Sports
                </p>
              </div>

              <div className="rounded-xl border border-white/15 bg-black/20 p-4 backdrop-blur-sm">
                <p className="text-3xl font-medium tracking-[-0.06em] text-white">
                  6:1
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/35">
                  Student–Teacher
                </p>
              </div>

              <div className="rounded-xl border border-white/15 bg-black/20 p-4 backdrop-blur-sm">
                <p className="text-3xl font-medium tracking-[-0.06em] text-white">
                  24×7
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/35">
                  Medical Assistance
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 border-t border-white/10 pt-5"
          >
            <p className="text-[9px] uppercase tracking-[0.25em] text-[#d4ad70]">
              Your next chapter
            </p>

            <p className="mt-3 max-w-3xl text-lg font-medium leading-[1.2] tracking-[-0.025em] text-white sm:text-xl lg:text-2xl">
              Every journey begins with a{" "}
              <span className="text-[#d4ad70]">first step.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          ADMISSION MODAL
      ========================================================= */}
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
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#17251f] p-5 text-white shadow-2xl sm:p-7"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close admission form"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-[#d4ad70]/50 hover:text-[#d4ad70]"
              >
                <X size={15} />
              </button>

              {!submitted ? (
                <>
                  {/* Modal Header */}
                  <div className="pr-10">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#d4ad70]">
                      Admission Application
                    </p>

                    <h3 className="mt-2 text-3xl font-medium tracking-[-0.04em]">
                      Start your application.
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-white/45">
                      Please provide the details below and the school team can
                      get in touch with you regarding the admission process.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-7 space-y-7">
                    {/* =================================================
                        01 — PARENT / GUARDIAN
                    ================================================= */}
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <span className="text-[9px] tracking-[0.15em] text-[#d4ad70]">
                          01
                        </span>

                        <h4 className="text-sm font-medium text-white">
                          Parent / Guardian
                        </h4>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                            Full Name
                          </label>

                          <input
                            type="text"
                            name="parentName"
                            required
                            placeholder="Parent / guardian name"
                            className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#d4ad70]/60"
                          />
                        </div>

                        <div>
                          <label className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                            Relationship
                          </label>

                          <input
                            type="text"
                            name="relationship"
                            required
                            placeholder="e.g. Father / Mother"
                            className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#d4ad70]/60"
                          />
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
                    </div>

                    {/* =================================================
                        02 — STUDENT INFORMATION
                    ================================================= */}
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <span className="text-[9px] tracking-[0.15em] text-[#d4ad70]">
                          02
                        </span>

                        <h4 className="text-sm font-medium text-white">
                          Student Information
                        </h4>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <label className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                            Student Name
                          </label>

                          <input
                            type="text"
                            name="studentName"
                            required
                            placeholder="Student full name"
                            className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#d4ad70]/60"
                          />
                        </div>

                        <div>
                          <label className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                            Date of Birth
                          </label>

                          <input
                            type="date"
                            name="dateOfBirth"
                            required
                            className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none focus:border-[#d4ad70]/60"
                          />
                        </div>

                        <div>
                          <label className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                            Gender
                          </label>

                          <select
                            name="gender"
                            required
                            defaultValue=""
                            className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none focus:border-[#d4ad70]/60"
                          >
                            <option value="" disabled className="bg-[#17251f]">
                              Select gender
                            </option>

                            <option value="Male" className="bg-[#17251f]">
                              Male
                            </option>

                            <option value="Female" className="bg-[#17251f]">
                              Female
                            </option>

                            <option value="Other" className="bg-[#17251f]">
                              Other
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                        03 — ACADEMIC INFORMATION
                    ================================================= */}
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <span className="text-[9px] tracking-[0.15em] text-[#d4ad70]">
                          03
                        </span>

                        <h4 className="text-sm font-medium text-white">
                          Academic Information
                        </h4>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                            Current School
                          </label>

                          <input
                            type="text"
                            name="currentSchool"
                            placeholder="Current school"
                            className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#d4ad70]/60"
                          />
                        </div>

                        <div>
                          <label className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                            Current Grade
                          </label>

                          <input
                            type="text"
                            name="currentGrade"
                            placeholder="Current grade / class"
                            className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#d4ad70]/60"
                          />
                        </div>

                        <div>
                          <label className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                            Applying For
                          </label>

                          <input
                            type="text"
                            name="applyingGrade"
                            required
                            placeholder="Grade / class"
                            className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#d4ad70]/60"
                          />
                        </div>

                        <div>
                          <label className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                            Academic Year
                          </label>

                          <input
                            type="text"
                            name="academicYear"
                            required
                            placeholder="e.g. 2027–28"
                            className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#d4ad70]/60"
                          />
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                        04 — ADDRESS
                    ================================================= */}
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <span className="text-[9px] tracking-[0.15em] text-[#d4ad70]">
                          04
                        </span>

                        <h4 className="text-sm font-medium text-white">
                          Address
                        </h4>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <label className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                            Address
                          </label>

                          <input
                            type="text"
                            name="address"
                            required
                            placeholder="Residential address"
                            className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#d4ad70]/60"
                          />
                        </div>

                        <div>
                          <label className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                            City
                          </label>

                          <input
                            type="text"
                            name="city"
                            required
                            placeholder="City"
                            className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#d4ad70]/60"
                          />
                        </div>

                        <div>
                          <label className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                            PIN Code
                          </label>

                          <input
                            type="text"
                            name="pinCode"
                            required
                            placeholder="PIN code"
                            className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#d4ad70]/60"
                          />
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                        05 — PREFERENCES
                    ================================================= */}
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <span className="text-[9px] tracking-[0.15em] text-[#d4ad70]">
                          05
                        </span>

                        <h4 className="text-sm font-medium text-white">
                          Preferences
                        </h4>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                            Student Type
                          </label>

                          <select
                            name="studentType"
                            required
                            defaultValue=""
                            className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none focus:border-[#d4ad70]/60"
                          >
                            <option value="" disabled className="bg-[#17251f]">
                              Select option
                            </option>

                            <option
                              value="Day Scholar"
                              className="bg-[#17251f]"
                            >
                              Day Scholar
                            </option>

                            <option
                              value="Boarding"
                              className="bg-[#17251f]"
                            >
                              Boarding
                            </option>
                          </select>
                        </div>

                        <div>
                          <label className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                            How did you hear about TIS?
                          </label>

                          <select
                            name="heardFrom"
                            required
                            defaultValue=""
                            className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none focus:border-[#d4ad70]/60"
                          >
                            <option value="" disabled className="bg-[#17251f]">
                              Select option
                            </option>

                            {heardFromOptions.map((option) => (
                              <option
                                key={option}
                                value={option}
                                className="bg-[#17251f]"
                              >
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                        06 — ADDITIONAL INFORMATION
                    ================================================= */}
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <span className="text-[9px] tracking-[0.15em] text-[#d4ad70]">
                          06
                        </span>

                        <h4 className="text-sm font-medium text-white">
                          Additional Information
                        </h4>
                      </div>

                      <textarea
                        name="additionalInformation"
                        rows={4}
                        placeholder="Anything else you would like us to know?"
                        className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#d4ad70]/60"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#d4ad70] py-3.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#17251f] transition-all duration-300 hover:bg-white"
                    >
                      Submit Application

                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </button>
                  </form>
                </>
              ) : (
                /* =====================================================
                   SUCCESS STATE
                ===================================================== */
                <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d4ad70]/40 text-[#d4ad70]">
                    <CheckCircle2 size={28} strokeWidth={1.4} />
                  </div>

                  <h3 className="mt-6 text-3xl font-medium tracking-[-0.04em]">
                    Application received.
                  </h3>

                  <p className="mt-3 max-w-md text-xs leading-5 text-white/45 sm:text-sm sm:leading-6">
                    Thank you for your interest in Tulas International School.
                    Your application details have been recorded for this
                    demonstration.
                  </p>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="mt-7 rounded-full border border-white/15 px-6 py-2.5 text-[10px] uppercase tracking-[0.15em] text-white/70 transition-all hover:border-[#d4ad70] hover:text-[#d4ad70]"
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