import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Head from "next/head";

type Props = {};

const BlenderPro = () => {
  return (
    <>
      <Head>
        <title>Blender Pro - MyShop</title>
        <meta
          name="description"
          content="Discover the Blender Pro, your ultimate kitchen companion for smoothies, soups, and more."
        />
      </Head>
      <Headder />
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 overflow-x-hidden scroll-smooth">
        {/* 1. Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white min-h-[60vh] w-full px-6 py-16">
          <div className="flex-1 mb-8 md:mb-0" data-aos="fade-right">
            <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
              Blender Pro
            </h1>
            <p className="text-xl max-w-lg opacity-90 mb-6">
              Blend, mix, and create with the powerful Blender Pro. Perfect for
              smoothies, soups, and more—your kitchen's new best friend!
            </p>
            <a
              href="#buy"
              className="inline-block px-8 py-3 rounded-full bg-white text-blue-700 font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-900 dark:text-yellow-200 dark:hover:bg-gray-800"
            >
              Buy Now
            </a>
          </div>
          <Image
            src="/blenderpro-main.png"
            alt="Blender Pro"
            className="w-64 h-64 md:w-100 md:h-100 object-cover  "
            data-aos="fade-left"
            width={320}
            height={320}
          />
        </section>

        {/* 2. About the Product Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <img
              src="/blenderpro-side.png"
              alt="Blender Pro Side"
              className="w-40 h-40 md:w-56 md:h-56 object-contain mb-6 md:mb-0"
              data-aos="fade-right"
            />
            <div className="flex-1" data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-pink-200">
                About Blender Pro
              </h2>
              <p className="mb-4 text-lg text-gray-700 dark:text-gray-200 text-justify">
                Blender Pro is designed for versatility and power, featuring a
                robust motor and sharp blades to handle everything from frozen
                fruits to hot soups. Its sleek design fits any kitchen style.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Easy to clean, safe to use, and built to last—Blender Pro is the
                ultimate kitchen upgrade.
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
                "/blenderpro-main.png",
                "/blenderpro-side.png",
                "/blenderpro-jug.png",
                "/blenderpro-blades.png",
              ].map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`Blender Pro view ${idx + 1}`}
                  className="w-[100%] h-[300px] object-cover rounded-xl shadow animate-zoom-in bg-white dark:bg-gray-900"
                  width={320}
                  height={320}
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
            <div className="flex justify-center gap-8  not-md:flex-wrap not-md:justify-start">
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 text-lg space-y-2">
                <li>Powerful 1200W motor for smooth blending</li>
                <li>6 stainless steel blades for perfect consistency</li>
                <li>Multiple speed settings and pulse function</li>
                <li>Large 2L BPA-free jug</li>
                <li>Ice-crushing and hot blending capability</li>
                <li>Easy-clean detachable parts</li>
              </ul>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 text-lg space-y-2">
                <li>Non-slip base for safety</li>
                <li>Compact, modern design</li>
                <li>Quiet operation</li>
                <li>Overheat protection</li>
                <li>Recipe book included</li>
                <li>2-year warranty</li>
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
                  name: "Ravi S.",
                  review: "Makes smoothies in seconds! Super easy to clean.",
                  img: "/customer/1.jpg",
                },
                {
                  name: "Anita D.",
                  review: "Powerful and quiet. I use it every day!",
                  img: "/customer/2.jpg",
                },
                {
                  name: "Meena K.",
                  review: "Great for soups and sauces. Highly recommend!",
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
                      className="w-10 h-10 rounded-full bg-white object-cover object-top"
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
              Ready to Blend?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Upgrade your kitchen with Blender Pro. Limited stock available!
            </p>
            <Link
              href="/contact-us"
              className="inline-block px-10 py-4 rounded-full bg-white text-blue-700 font-bold text-xl shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-900 dark:text-yellow-200 dark:hover:bg-gray-800"
            >
              Buy Blender Pro
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlenderPro;
