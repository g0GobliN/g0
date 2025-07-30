import React, { useState } from "react";
import TextReveal from "./TextReveal";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"; // or outline if you prefer lighter style

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/grgvishal.gurung17@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.success === "true") {
        setSubmitStatus("✅ Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitStatus(
        "❌ Error sending message. Please check your connection."
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 5000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-16">
      <TextReveal delay={300}>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl mb-6 text-gray-900 dark:text-white text-center font-gotham-book">
            Send me a message
          </h3>

          {submitStatus && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg text-green-800 dark:text-green-200 text-center transition-all duration-300">
              {submitStatus}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-gotham-book"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-colors
                     font-gotham-book"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-gotham-book"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border font-gotham-book border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium font-gotham-book text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 font-gotham-book border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-colors resize-none"
                placeholder="Tell me about your project or just say hello..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-gotham-medium flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ease-in-out
              ${
                isSubmitting
                  ? "bg-gray-400 dark:bg-gray-600 text-white animate-pulse cursor-wait"
                  : "bg-gradient-to-r from-zinc-500 to-neutral-400 text-white dark:from-white dark:to-gray-300 dark:text-black hover:brightness-110 hover:scale-[1.02] active:scale-95 shadow-md"
              }
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
            >
              {isSubmitting ? (
                <>
                  Sending...
                  <PaperAirplaneIcon className="w-5 h-5 animate-spin" />
                </>
              ) : (
                <>
                  Commit Message
                  <PaperAirplaneIcon className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </TextReveal>
    </div>
  );
};

export default ContactForm;
