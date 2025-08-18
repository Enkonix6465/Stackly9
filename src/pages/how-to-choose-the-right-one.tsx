import React from "react";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import Head from "next/head";

const HowToChooseTheRightOne = () => {
  return (
    <>
      <Head>
        <title>How to Choose the Right One - MyShop</title>
        <meta
          name="description"
          content="A practical guide to picking the best electronics and appliances for your needs and budget."
        />
      </Head>
      <Headder />
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 overflow-x-hidden scroll-smooth">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white min-h-[40vh] w-full py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-center">
            How to Choose the Right One
          </h1>
          <p className="text-xl max-w-2xl text-center opacity-90">
            A practical guide to picking the best electronics and appliances for
            your needs and budget.
          </p>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-pink-200">
              Tips for Making the Right Choice
            </h2>
            <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-200 text-lg space-y-4">
              <li>
                <span className="font-semibold">Define Your Needs:</span>{" "}
                Consider what features are most important for your
                lifestyle—screen size, battery life, storage, or smart features.
              </li>
              <li>
                <span className="font-semibold">Set a Realistic Budget:</span>{" "}
                Decide how much you want to spend and compare products within
                your price range.
              </li>
              <li>
                <span className="font-semibold">Read Reviews and Ratings:</span>{" "}
                Check customer feedback and expert reviews to learn about
                real-world performance and reliability.
              </li>
              <li>
                <span className="font-semibold">Compare Specifications:</span>{" "}
                Look at the specs side by side—processor, display, warranty, and
                after-sales support.
              </li>
              <li>
                <span className="font-semibold">
                  Check for Deals and Offers:
                </span>{" "}
                Take advantage of seasonal sales, bundle deals, and cashback
                offers to get the best value.
              </li>
            </ol>
            <p className="mt-8 text-lg text-blue-700 dark:text-pink-200 font-semibold">
              With a little research, you can find the perfect product for your
              needs and budget!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HowToChooseTheRightOne;
