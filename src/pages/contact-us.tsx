import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import AOS from "aos";
import "aos/dist/aos.css";
import { Building2, Mail, PhoneCall } from "lucide-react";
import Head from "next/head";
import React from "react";

type Props = {};

const ContactUsPage = (props: Props) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const [success, setSuccess] = React.useState(false);
  React.useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 80 });
  }, []);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const action = form.getAttribute("action");

    if (!action) {
      alert("Form action URL not found.");
      return;
    }

    try {
      const response = await fetch(action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      const content = await response.json();
      console.log("Form submission successful:", content);

      if (response.ok) {
        form.reset();
        setSuccess(true);
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Oops! Something went wrong.");
    }
  };
  return (
    <>
      <Head>
        <title>Contact Us - MyShop</title>
        <meta
          name="description"
          content="Get in touch with MyShop for any inquiries or support."
        />
      </Head>
      <Headder />
      <main className="bg-white dark:bg-gray-900 transition-colors duration-500 not-md:overflow-x-hidden">
        {/* 1. Hero Section */}
        <section className="flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white min-h-[100vh]">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-center">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-center opacity-90">
            We'd love to hear from you! Reach out for support, partnership, or
            any questions about MyShop.
          </p>
        </section>

        {/* 2. Contact Info Section */}
        <section
          data-aos="fade-up"
          className="py-12 px-4 bg-gray-50 max-w-screen dark:bg-gray-800"
        >
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="mb-2 text-blue-600 dark:text-pink-400 flex justify-center text-3xl">
                <PhoneCall size={35} />
              </div>
              <h3 className="font-bold mb-1">Phone</h3>
              <p className="text-gray-700 dark:text-gray-200">
                +1 800 123 4567
              </p>
            </div>
            <div>
              <div className="mb-2 text-blue-600 dark:text-pink-400 flex justify-center text-3xl">
                <Mail size={35} />
              </div>
              <h3 className="font-bold mb-1">Email</h3>
              <p className="text-gray-700 dark:text-gray-200">
                support@myshop.com
              </p>
            </div>
            <div>
              <div className="mb-2 text-blue-600 dark:text-pink-400 flex justify-center text-3xl">
                <Building2 size={35} />
              </div>
              <h3 className="font-bold mb-1">Address</h3>
              <p className="text-gray-700 dark:text-gray-200">
                123 Market St, City, Country
              </p>
            </div>
          </div>
        </section>

        {/* 3. Contact Form Section */}
        <section
          data-aos="fade-left"
          className="py-12 px-4 bg-white max-w-screen dark:bg-gray-900"
        >
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-pink-200 text-center">
              Send Us a Message
            </h2>
            <form
              className="flex flex-col  gap-4 "
              ref={formRef}
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xovlekvg"
              method="POST"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                name="message"
                rows={4}
                className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 dark:bg-pink-500 dark:hover:bg-pink-600 transition"
              >
                Send Message
              </button>
            </form>
            {success && (
              <p
                id="successMessage"
                style={{ color: "green", marginTop: "10px" }}
              >
                Message sent successfully!
              </p>
            )}
          </div>
        </section>

        {/* 4. Map Section */}
        <section
          data-aos="fade-up"
          className="py-12 px-4 bg-gray-50 dark:bg-gray-800 max-w-screen"
        >
          <div className="mx-auto rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="MyShop Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.5946%2C12.9716%2C77.5946%2C12.9716&amp;layer=mapnik"
              className="w-full h-64 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* 5. FAQ Section */}
        <section
          data-aos="fade-left"
          className="py-12   max-w-screen bg-white dark:bg-gray-900"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-pink-200 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold mb-1">
                  How can I track my order?
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  You can track your order status in your MyShop account
                  dashboard under 'Orders'.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold mb-1">
                  What is your return policy?
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  We offer a 30-day return policy on most products. Please see
                  our Returns page for details.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold mb-1">
                  How do I contact support?
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  You can email us at support@myshop.com or use the contact form
                  above for assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Newsletter/CTA Section */}
        <section
          data-aos="fade-up"
          className="py-12  bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        >
          <div className="max-w-xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">
              Stay Connected
            </h2>
            <p className="mb-6 text-white/90">
              Subscribe to our newsletter for the latest updates, offers, and
              news from MyShop!
            </p>
            <form className="flex w-full justify-center gap-2 items-center  max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border outline-none text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-pink-500 transition"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-white text-blue-700 font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-900 dark:text-yellow-200 dark:hover:bg-gray-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUsPage;
