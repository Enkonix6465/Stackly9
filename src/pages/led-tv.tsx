import React from "react";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const LedTv = () => {
  return (
    <>
      <Head>
        <title>LED TV - MyShop</title>
        <meta
          name="description"
          content="Discover the features and specifications of our latest LED TV."
        />
      </Head>
      <Headder />

      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 overflow-x-hidden ">
        {/* 1. Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white min-h-[60vh] w-full px-6 py-16">
          <div className="  mb-8 md:mb-0" data-aos="fade-right">
            <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
              LED TV
            </h1>
            <p className="text-xl max-w-xl opacity-90 mb-6">
              Experience cinematic visuals at home with our latest LED TV.
              Stunning clarity, vibrant colors, and smart features for the
              modern home.
            </p>
            <a
              href="#buy"
              className="inline-block   px-8 py-3 rounded-full bg-white text-blue-700 font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-900 dark:text-yellow-200 dark:hover:bg-gray-800"
            >
              Buy Now
            </a>
          </div>
          <Image
            src="/ledtv-main.png"
            alt="LED TV"
            className="w-64 h-64 md:w-100 md:h-100 object-cover  "
            data-aos="fade-left"
            width={400}
            height={400}
          />
        </section>

        {/* 2. About the Product Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <img
              src="/ledtv-side.png"
              alt="LED TV Side"
              className="w-40 h-40 md:w-56 md:h-56 object-contain mb-6 md:mb-0"
              data-aos="fade-right"
            />
            <div className="flex-1" data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-pink-200">
                About LED TV
              </h2>
              <p className="mb-4 text-lg text-gray-700 dark:text-gray-200 text-justify">
                Our LED TV combines sleek design with advanced display
                technology, delivering lifelike images and immersive sound.
                Perfect for movies, sports, and gaming.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Available in multiple sizes and resolutions, it fits any room
                and entertainment need.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Product Images Gallery Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-pink-200">
              Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "/ledtv-main.png",
                "/ledtv-side.png",
                "/ledtv-back.png",
                "/ledtv-remote.png",
              ].map((img, idx) => (
                <Image
                  width={400}
                  height={400}
                  key={idx}
                  src={img}
                  alt={`LED TV view ${idx + 1}`}
                  className="w-[100%] h-[300px] object-cover rounded-xl shadow   bg-white dark:bg-gray-900"
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. Features Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-pink-200">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 text-lg space-y-2">
                <li>Ultra HD 4K resolution for crystal-clear images</li>
                <li>Smart TV with built-in streaming apps</li>
                <li>HDR10+ for vibrant colors and deep contrast</li>
                <li>Dolby Audio for immersive sound</li>
                <li>Multiple HDMI and USB ports</li>
                <li>Energy efficient and eco-friendly</li>
              </ul>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 text-lg space-y-2">
                <li>Ultra-slim bezel design</li>
                <li>Voice control and smart remote</li>
                <li>Screen mirroring from mobile devices</li>
                <li>Wall-mountable and tabletop options</li>
                <li>Available in 43", 55", and 65" sizes</li>
                <li>1-year warranty included</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Customer Reviews Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-pink-200">
              Customer Reviews
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  name: "Sonia P.",
                  review:
                    "The picture quality is stunning! Streaming is super easy.",
                  img: "/customer/1.jpg",
                },
                {
                  name: "Amit R.",
                  review: "Great value for money. The sound is amazing.",
                  img: "/customer/2.jpg",
                },
                {
                  name: "Leena M.",
                  review: "Love the smart features and slim design!",
                  img: "/customer/3.jpg",
                },
              ].map((cust, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-8 w-80 animate-zoom-in"
                >
                  <p className="italic text-gray-700 dark:text-gray-200 mb-4">
                    “{cust.review}”
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={cust.img}
                      alt={cust.name}
                      className="w-10 h-10 rounded-full object-cover object-top bg-white"
                      width={40}
                      height={40}
                    />
                    <span className="font-bold text-blue-700 dark:text-yellow-100">
                      {cust.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Call to Action Section */}
        <section
          id="buy"
          className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        >
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow-lg">
              Ready for a Home Theater?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Upgrade your entertainment setup with our latest LED TV. Limited
              stock available!
            </p>
            <Link
              href="/contact-us"
              className="inline-block px-10 py-4 rounded-full bg-white text-blue-700 font-bold text-xl shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-900 dark:text-yellow-200 dark:hover:bg-gray-800"
            >
              Buy LED TV
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LedTv;
