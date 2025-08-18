import React from "react";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Iphone13 = () => {
  return (
    <>
      <Head>
        <title>iPhone 13 - MyShop</title>
        <meta
          name="description"
          content="Discover the features and specifications of the iPhone 13."
        />
      </Head>
      <Headder />
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 overflow-x-hidden">
        {/* 1. Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white min-h-[60vh] w-full px-6 py-16">
          <div className="flex-1 mb-8 md:mb-0" data-aos="fade-right">
            <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
              iPhone 13
            </h1>
            <p className="text-xl max-w-lg opacity-90 mb-6">
              Experience the next generation of smartphone technology with the
              iPhone 13. Stunning design, powerful performance, and advanced
              camera features.
            </p>
            <a
              href="#buy"
              className="inline-block px-8 py-3 rounded-full bg-white text-blue-700 font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-900 dark:text-yellow-200 dark:hover:bg-gray-800"
            >
              Buy Now
            </a>
          </div>
          <Image
            src="/iphone13-main.png"
            alt="iPhone 13"
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
              src="/iphone13-side.png"
              alt="iPhone 13 Side"
              className="w-40 h-40 md:w-56 md:h-56 object-contain mb-6 md:mb-0"
              data-aos="fade-right"
            />
            <div className="flex-1" data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-pink-200">
                About iPhone 13
              </h2>
              <p className="mb-4 text-lg text-gray-700 dark:text-gray-200 text-justify">
                The iPhone 13 is Apple’s latest smartphone, featuring a sleek
                flat-edge design, Ceramic Shield front, and aerospace-grade
                aluminum edges. It’s engineered for durability and style, making
                it the perfect companion for everyday life.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Available in multiple colors and storage options, the iPhone 13
                delivers both beauty and performance in one device.
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
                "/iphone13-main.png",
                "/iphone13-side.png",
                "/iphone13-back.png",
                "/iphone13-camera.png",
              ].map((img, idx) => (
                <Image
                  width={400}
                  height={400}
                  key={idx}
                  src={img}
                  alt={`iPhone 13 view ${idx + 1}`}
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
                <li>6.1-inch Super Retina XDR display</li>
                <li>A15 Bionic chip for lightning-fast performance</li>
                <li>Dual 12MP camera system with Night mode</li>
                <li>5G capable for ultra-fast downloads</li>
                <li>Up to 19 hours of video playback</li>
                <li>Available in five stunning colors</li>
              </ul>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 text-lg space-y-2">
                <li>Ceramic Shield, tougher than any smartphone glass</li>
                <li>Water and dust resistance (IP68)</li>
                <li>iOS 15 with new features and privacy controls</li>
                <li>
                  MagSafe accessories for easy attach and faster wireless
                  charging
                </li>
                <li>Storage options up to 512GB</li>
                <li>Face ID for secure authentication</li>
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
                  name: "Priya S.",
                  review:
                    "The iPhone 13 camera is amazing! Battery lasts all day.",
                  img: "/customer/1.jpg",
                },
                {
                  name: "Rahul K.",
                  review:
                    "Super fast and the display is gorgeous. Love the new design!",
                  img: "/customer/2.jpg",
                },
                {
                  name: "Ayesha M.",
                  review:
                    "Face ID is so convenient and secure. Highly recommend!",
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
              Ready to Upgrade?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Get your iPhone 13 today and enjoy the latest in smartphone
              innovation. Limited stock available!
            </p>
            <Link
              href="/contact-us"
              className="inline-block px-10 py-4 rounded-full bg-white text-blue-700 font-bold text-xl shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-900 dark:text-yellow-200 dark:hover:bg-gray-800"
            >
              Buy iPhone 13
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Iphone13;
