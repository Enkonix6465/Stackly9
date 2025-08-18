import React from "react";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
const WirelessEarbuds = () => {
  return (
    <>
      <Head>
        <title>Wireless Earbuds - MyShop</title>
        <meta
          name="description"
          content="Discover the features and specifications of our latest Wireless Earbuds."
        />
      </Head>
      <Headder />
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 overflow-x-hidden scroll-smooth">
        {/* 1. Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white min-h-[60vh] w-full px-6 py-16">
          <div className="flex-1 mb-8 md:mb-0" data-aos="fade-right">
            <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
              Wireless Earbuds
            </h1>
            <p className="text-xl max-w-lg opacity-90 mb-6">
              Enjoy true freedom with our Wireless Earbuds. Crystal clear sound,
              long battery life, and a comfortable fit for music on the go.
            </p>
            <a
              href="#buy"
              className="inline-block px-8 py-3 rounded-full bg-white text-blue-700 font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-900 dark:text-yellow-200 dark:hover:bg-gray-800"
            >
              Buy Now
            </a>
          </div>
          <img
            src="/earbuds-main.png"
            alt="Wireless Earbuds"
            className="w-64 h-64 md:w-80 md:h-80 object-contain animate-zoom-in"
            data-aos="fade-left"
          />
        </section>

        {/* 2. About the Product Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <img
              src="/earbuds-case.png"
              alt="Earbuds Case"
              className="w-40 h-40 md:w-56 md:h-56 object-contain mb-6 md:mb-0"
              data-aos="fade-right"
            />
            <div className="flex-1" data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-pink-200">
                About Wireless Earbuds
              </h2>
              <p className="mb-4 text-lg text-gray-700 dark:text-gray-200 text-justify">
                Our Wireless Earbuds deliver high-fidelity audio with deep bass
                and crisp highs. Designed for comfort and stability, they are
                perfect for workouts, commutes, and everyday use.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                The compact charging case keeps your earbuds powered all day
                long.
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
                "/earbuds-main.png",
                "/earbuds-case.png",
                "/earbuds-in-ear.png",
                "/earbuds-charging.png",
              ].map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`Wireless Earbuds view ${idx + 1}`}
                  className="w-[100%] h-[300px]  object-cover object-center rounded-xl shadow   bg-white dark:bg-gray-900"
                  width={400}
                  height={400}
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
                <li>Bluetooth 5.2 for stable, fast connection</li>
                <li>Up to 8 hours playtime per charge</li>
                <li>Touch controls for music and calls</li>
                <li>IPX5 water and sweat resistance</li>
                <li>Noise isolation for immersive sound</li>
                <li>Quick charge support</li>
              </ul>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 text-lg space-y-2">
                <li>Compact charging case with LED indicator</li>
                <li>Voice assistant compatible</li>
                <li>Lightweight, ergonomic design</li>
                <li>Auto-pairing and mono/stereo modes</li>
                <li>Available in black and white</li>
                <li>1-year warranty</li>
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
                  name: "Kiran S.",
                  review: "Great sound and battery life. Super comfortable!",
                  img: "/customer/2.jpg",
                },
                {
                  name: "Priya M.",
                  review:
                    "Perfect for workouts. Stays in place and sounds amazing.",
                  img: "/customer/1.jpg",
                },
                {
                  name: "kiya K.",
                  review: "Easy to pair and use. Love the charging case!",
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
              Ready to Go Wireless?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Upgrade your audio experience with our Wireless Earbuds. Limited
              stock available!
            </p>
            <Link
              href="/contact-us"
              className="inline-block px-10 py-4 rounded-full bg-white text-blue-700 font-bold text-xl shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-900 dark:text-yellow-200 dark:hover:bg-gray-800"
            >
              Buy Wireless Earbuds
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WirelessEarbuds;
