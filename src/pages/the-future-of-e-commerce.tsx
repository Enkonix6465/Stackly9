import React from "react";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import Head from "next/head";

const TheFutureOfECommerce = () => {
  return (
    <>
      <Head>
        <title>The Future of E-Commerce - MyShop</title>
        <meta
          name="description"
          content="Explore the trends and innovations shaping the future of online shopping."
        />
      </Head>
      <Headder />
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 overflow-x-hidden scroll-smooth">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white min-h-[40vh] w-full py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-center">
            The Future of E-Commerce: Trends to Watch
          </h1>
          <p className="text-xl max-w-2xl text-center opacity-90">
            Discover the innovations and trends shaping the next generation of
            online shopping.
          </p>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-pink-200">
              Emerging Trends in E-Commerce
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 text-lg space-y-4">
              <li>
                <span className="font-semibold">
                  AI-Powered Personalization:
                </span>{" "}
                Online stores are using artificial intelligence to recommend
                products, personalize offers, and enhance the customer
                experience.
              </li>
              <li>
                <span className="font-semibold">Voice and Visual Search:</span>{" "}
                Shoppers can now search for products using voice commands or
                images, making it easier to find exactly what they want.
              </li>
              <li>
                <span className="font-semibold">
                  Augmented Reality (AR) Shopping:
                </span>{" "}
                AR lets customers visualize products in their home before
                buying, boosting confidence and reducing returns.
              </li>
              <li>
                <span className="font-semibold">Sustainable Shopping:</span>{" "}
                Eco-friendly packaging, carbon-neutral shipping, and ethical
                sourcing are becoming priorities for both brands and consumers.
              </li>
              <li>
                <span className="font-semibold">Faster, Smarter Delivery:</span>{" "}
                Same-day delivery, drone shipping, and smart lockers are making
                online shopping more convenient than ever.
              </li>
            </ul>
            <p className="mt-8 text-lg text-blue-700 dark:text-pink-200 font-semibold">
              Stay tuned as technology continues to transform the way we shop
              online!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TheFutureOfECommerce;
