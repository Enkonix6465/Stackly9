import React from "react";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import Head from "next/head";

const FiveTipsForSafeOnlineShopping = () => {
  return (
    <>
      <Head>
        <title>5 Tips for Safe Online Shopping</title>
        <meta
          name="description"
          content="Learn essential tips for safe online shopping and protecting your personal information."
        />
      </Head>

      <Headder />

      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 overflow-x-hidden scroll-smooth">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white min-h-[40vh] w-full py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-center">
            5 Tips for Safe Online Shopping
          </h1>
          <p className="text-xl max-w-2xl text-center opacity-90">
            Protect your data and enjoy a secure e-commerce experience with
            these essential tips.
          </p>
        </section>

        {/* Tips Content Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-pink-200">
              Stay Safe While Shopping Online
            </h2>
            <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-200 text-lg space-y-4">
              <li>
                <span className="font-semibold">Shop on Secure Websites:</span>{" "}
                Always look for HTTPS in the website URL and a padlock icon in
                the address bar before entering your payment details.
              </li>
              <li>
                <span className="font-semibold">
                  Use Strong, Unique Passwords:
                </span>{" "}
                Create passwords that are hard to guess and avoid reusing them
                across multiple sites. Consider using a password manager.
              </li>
              <li>
                <span className="font-semibold">Beware of Phishing Scams:</span>{" "}
                Don’t click on suspicious links in emails or messages. Always
                access your favorite stores by typing the URL directly into your
                browser.
              </li>
              <li>
                <span className="font-semibold">
                  Check Reviews and Seller Ratings:
                </span>{" "}
                Read product reviews and check seller ratings to ensure you’re
                buying from a reputable source.
              </li>
              <li>
                <span className="font-semibold">
                  Monitor Your Bank Statements:
                </span>{" "}
                Regularly review your bank and credit card statements for
                unauthorized transactions and report any suspicious activity
                immediately.
              </li>
            </ol>
            <p className="mt-8 text-lg text-blue-700 dark:text-pink-200 font-semibold">
              Stay vigilant and enjoy a safe, stress-free online shopping
              experience!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FiveTipsForSafeOnlineShopping;
