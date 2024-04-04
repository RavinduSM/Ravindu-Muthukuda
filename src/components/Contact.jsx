import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "543dc412-970e-44ab-83ff-b8826f53934c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Contact
      </motion.h2>
      <div class=" flex items-center justify-center">
        <div class="rounded-2xl border-2 p-12 border-purple-300 max-w-sm w-full">
          <div class="flex justify-center mb-6"></div>

          <form onSubmit={onSubmit}>
            <div class="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                class="form-input w-full px-4  bg-transparent  border-purple-300 py-2 border rounded-lg text-gray-100 focus:ring-blue-500"
                required
                placeholder="Your Name"
              />
            </div>
            <div class="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                class="form-input w-full px-4 bg-transparent py-2 border-purple-300 border rounded-lg text-gray-100 focus:border-purple-500"
                required
                placeholder="Email"
              />
            </div>
            <div class="mb-6">
              <textarea
                id="message"
                name="message"
                class="form-input w-full h-36 px-4 bg-transparent border-purple-300 py-2 border rounded-lg text-gray-100 focus:ring-blue-500"
                required
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              class="w-full bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Send
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
