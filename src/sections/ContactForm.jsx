import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { z } from "zod";
import { trackEvent } from "../sections/Analytics.js";
// ---------------- ZOD SCHEMA ----------------
const schema = z.object({
  name: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(8, "Phone number too short"),
  subject: z.string().min(3, "Subject too short"),
  message: z.string().min(10, "Message too short"),
  botField: z.string().optional(),
});
console.log("check", import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    botField: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // 🔐 HONEYPOT
    if (formData.botField) {
      toast.error("Spam detected!");
      return;
    }
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.phone ||
      !formData.subject
    ) {
      toast.error("Fill all detail");
      return;
    }
    // 📩 VALIDATION
    const result = schema.safeParse(formData);
    console.log(result);
    if (!result.success) {
      result.error.issues.forEach((err) => {
        toast.error(err.message);
      });
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      trackEvent("Contact Form", "Form Submitted Successfully");

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        botField: "",
      });
    } catch (error) {
      console.log(error);
      trackEvent("Contact Form", "Form Submission Failed");
      toast.error("Failed to send message!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl"
      >
        <div className="flex justify-center mb-10">
          <div className="inline-flex  text-center items-center justify-center  border border-purple-200 rounded-full px-4 py-1 text-purple-600 text-md">
            Sign up for free
          </div>
        </div>

        <form onSubmit={sendEmail} className="space-y-4">
          {/* 🔐 HONEYPOT */}
          <input
            type="text"
            name="botField"
            value={formData.botField}
            onChange={handleChange}
            className="hidden"
            autoComplete="off"
          />

          {/* NAME */}
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          {/* EMAIL */}
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          {/* PHONE (NEW LIBRARY FIXED) */}
          <PhoneInput
            international
            defaultCountry="IN"
            value={formData.phone}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, phone: value || "" }))
            }
            className="w-full border rounded-lg px-4 py-2"
          />

          {/* SUBJECT */}
          <input
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white transition ${
              loading
                ? "bg-purple-300 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
