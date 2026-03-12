import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail } from "react-icons/fi";

export default function Contact() {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6
      bg-white text-black
      dark:bg-black dark:text-white
      transition-colors duration-300"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16">
        {/* LEFT SIDE */}

        <div>
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            LET'S
            <br />
            GET IN
            <br />
            TOUCH
          </h2>

          <div className="mt-8 flex items-center gap-3 text-lg opacity-80">
            <FiMail />

            <a
              href="mailto:selvapandi322@gmail.com"
              className="hover:text-purple-500 transition"
            >
              selvapandi322@gmail.com
            </a>
          </div>
        </div>

        {/* CONTACT FORM */}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="border-b border-gray-400 py-3 outline-none bg-transparent
            dark:border-gray-600"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="border-b border-gray-400 py-3 outline-none bg-transparent
            dark:border-gray-600"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            required
            className="border-b border-gray-400 py-3 outline-none resize-none bg-transparent
            dark:border-gray-600"
          />

          <button
            type="submit"
            disabled={loading}
            className="border border-black dark:border-white rounded-full py-3 mt-4
            hover:bg-black hover:text-white
            dark:hover:bg-white dark:hover:text-black
            transition"
          >
            {loading ? "Sending..." : "SEND"}
          </button>

          {/* STATUS MESSAGE */}

          {status === "success" && (
            <p className="text-green-500 text-center text-sm mt-2 font-medium">
             Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-500  text-center text-sm mt-2 font-medium">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
