import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import AOS from "aos";
import "aos/dist/aos.css";
import { Building2, Mail, PhoneCall } from "lucide-react";
import Head from "next/head";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/translations/translations";

type Language = keyof typeof translations;

type Props = {};

const ContactUsPage = (props: Props) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const [success, setSuccess] = React.useState(false);
  const { language } = useLanguage();
  const t = translations[language as Language].contactUsPage;

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
        <title>{t.heroTitle} - MyShop</title>
        <meta name="description" content={t.heroSubtitle} />
      </Head>
      <Headder />
      <main className="bg-white dark:bg-gray-900 transition-colors duration-500  overflow-hidden">
        {/* 1. Hero Section */}
        <section className="flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white min-h-[100vh]">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-center">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-center opacity-90">
            {t.heroSubtitle}
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
              <h3 className="font-bold mb-1">{t.phone}</h3>
              <p className="text-gray-700 dark:text-gray-200">
                {t.phoneNumber}
              </p>
            </div>
            <div>
              <div className="mb-2 text-blue-600 dark:text-pink-400 flex justify-center text-3xl">
                <Mail size={35} />
              </div>
              <h3 className="font-bold mb-1">{t.email}</h3>
              <p className="text-gray-700 dark:text-gray-200">
                {t.emailAddress}
              </p>
            </div>
            <div>
              <div className="mb-2 text-blue-600 dark:text-pink-400 flex justify-center text-3xl">
                <Building2 size={35} />
              </div>
              <h3 className="font-bold mb-1">{t.address}</h3>
              <p className="text-gray-700 dark:text-gray-200">
                {t.addressDetails}
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
              {t.formTitle}
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
                placeholder={t.namePlaceholder}
                className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder={t.emailPlaceholder}
                className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none"
              />
              <textarea
                placeholder={t.messagePlaceholder}
                name="message"
                rows={4}
                className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 dark:bg-pink-500 dark:hover:bg-pink-600 transition"
              >
                {t.sendButton}
              </button>
            </form>
            {success && (
              <p
                id="successMessage"
                style={{ color: "green", marginTop: "10px" }}
              >
                {t.successMessage}
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
              {t.faqTitle}
            </h2>
            <div className="space-y-4">
              {t.faqs.map(
                (faq: { question: string; answer: string }, index: number) => (
                  <div
                    key={index}
                    className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4"
                  >
                    <h3 className="font-semibold mb-1">{faq.question}</h3>
                    <p className="text-gray-700 dark:text-gray-200">
                      {faq.answer}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* 6. Newsletter/CTA Section */}
        <section
          data-aos="fade-up"
          className="py-12  bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 max-w-screen"
        >
          <div className="  mx-auto flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">
              {t.newsletterTitle}
            </h2>
            <p className="mb-6 text-white/90">{t.newsletterSubtitle}</p>
            <form className="md:flex w-full justify-center gap-2 items-center     max-w-md">
              <input
                type="email"
                placeholder={t.newsletterPlaceholder}
                className="  px-4 py-3 rounded-full border outline-none not-md:my-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-pink-500 transition"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-white text-blue-700 font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-900 dark:text-yellow-200 dark:hover:bg-gray-800"
              >
                {t.newsletterButton}
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