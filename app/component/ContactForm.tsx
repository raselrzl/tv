import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link"; // import Link for routing

type ContactMethod = "whatsapp" | "email";

interface FormData {
  name: string;
  email: string;
  phone: string;
  contactMethod: ContactMethod;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    contactMethod: "whatsapp",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Submitted data:", formData);
    setSubmitted(true);
  }

  return (
    <div className="w-full mx-auto py-6 px-4 md:px-6 rounded-xl shadow-lg border border-neutral-700 text-white">
      <div className="flex flex-col items-center mb-6">
        <img src="/8k.png" alt="Logo" className="h-12 mb-2" />
        <h2 className="text-2xl font-bold text-center text-[#D4AF37]">
          For Trial Subscription.
        </h2>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-neutral-800 border border-neutral-600 text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-neutral-800 border border-neutral-600 text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1 font-medium">
              Phone Number:
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 rounded bg-neutral-800 border border-neutral-600 text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <p className="block mb-1 font-medium">Preferred Contact Method:</p>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    contactMethod: "whatsapp",
                  }))
                }
                className={`flex items-center justify-center w-10 h-10 rounded-full border transition
                ${
                  formData.contactMethod === "whatsapp"
                    ? "bg-[#D4AF37] text-black font-semibold"
                    : "bg-neutral-800 text-white border-neutral-600 hover:border-[#D4AF37]"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-green-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A12 12 0 0 0 12 0C5.37 0 0 5.37 0 12a11.95 11.95 0 0 0 1.65 6.03L0 24l6.38-1.68A11.95 11.95 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zm-8.52 19.2c-2.1 0-4.18-.54-6.03-1.59l-.43-.25-3.78 1 1-3.68-.28-.46A9.97 9.97 0 0 1 2 12c0-5.52 4.48-10 10-10 2.63 0 5.18 1.03 7.07 2.93A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.07-7.93c-.27-.14-1.62-.8-1.87-.9s-.43-.14-.61.14-.7.9-.86 1.08-.32.21-.59.07c-.27-.14-1.14-.42-2.17-1.34-.8-.72-1.34-1.6-1.5-1.87s-.02-.41.12-.55c.12-.12.27-.32.4-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.02-.22-.52-.45-.45-.61-.45h-.52c-.18 0-.45.07-.68.34s-.89.87-.89 2.14.91 2.48 1.03 2.66c.12.18 1.78 2.73 4.33 3.83.6.26 1.07.41 1.44.52.61.2 1.17.17 1.61.1.49-.07 1.62-.66 1.85-1.29.23-.63.23-1.17.16-1.29-.09-.14-.23-.21-.5-.34z" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    contactMethod: "email",
                  }))
                }
                className={`flex items-center justify-center w-10 h-10 rounded-full border transition
                ${
                  formData.contactMethod === "email"
                    ? "bg-[#D4AF37] text-black font-semibold"
                    : "bg-neutral-800 text-white border-neutral-600 hover:border-[#D4AF37]"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
                </svg>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 bg-[#D4AF37] text-black font-bold py-2 rounded hover:bg-yellow-600 transition"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="text-center text-[#D4AF37] mt-6 space-y-4">
          <p className="text-lg font-medium">Thank You for requesting trial subscription. We will respond as soon as possible.</p>
        </div>
      )}
    </div>
  );
}
