import React, { useState } from "react";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const allProducts = [
  {
    id: 1,
    name: "Iphone 13",
    category: "Electronics",
    price: "$499",
    img: "/iphone13-main.png",
    link: "/iphone-13",
    desc: "Latest model, unbeatable price!",
  },
  {
    id: 2,
    name: "LED TV",
    category: "Electronics",
    price: "$799",
    link: "/led-tv",
    img: "/ledtv-main.png",
    desc: "Crystal clear display.",
  },
  {
    id: 3,
    name: "Blender Pro",
    category: "Home Appliances",
    price: "$59",
    link: "/blender-pro",
    img: "/blenderpro-main.png",
    desc: "Make healthy smoothies at home.",
  },

  {
    id: 4,
    name: "Vacum Cleaner",
    category: "Home Appliances",
    price: "$120",
    link: "/vacum-cleaner",
    img: "/vacum-main.png",
    desc: "Powerful and silent.",
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: "$99",
    link: "/wireless-earbuds",
    img: "/earbuds-main.png",
    desc: "Crystal clear sound.",
  },
  {
    id: 6,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: "$75",
    link: "/coffee-maker",
    img: "/coffeemaker-main.png",
    desc: "Fresh coffee every morning.",
  },
];

const categories = ["All", "Electronics", "Home Appliances"];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Products - MyShop</title>
        <meta
          name="description"
          content="Explore our wide range of products including electronics, home appliances, and more."
        />
      </Head>
      <Headder />

      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 overflow-x-hidden">
        {/* 1. Hero Section */}
        <section className="flex flex-col items-center justify-center mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white min-h-[100vh] w-full py-16">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg text-center">
            Our Products
          </h1>
          <p className="text-xl max-w-2xl text-center opacity-90">
            Browse our wide range of electronics, home appliances, and
            accessories. Find the best deals and top brands in one place!
          </p>
        </section>

        {/* 3. Product Listing Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-pink-200">
              All Products
            </h2>
            <div className="max-w-4xl pb-5 mx-auto flex flex-wrap gap-4 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-6 py-2 rounded-full font-semibold border transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white border-blue-600 dark:bg-pink-400 dark:text-gray-900 dark:border-pink-400"
                      : "bg-gray-100 text-blue-700 border-blue-200 dark:bg-gray-800 dark:text-pink-200 dark:border-pink-900 hover:bg-blue-100 dark:hover:bg-pink-900"
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {filteredProducts.length === 0 ? (
                <div className="col-span-full text-center text-lg text-gray-500 dark:text-gray-300">
                  No products found in this category.
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white dark:bg-gray-900 rounded-2xl shadow p-6 flex flex-col items-center animate-zoom-in"
                  >
                    <Image
                      src={product.img}
                      alt={product.name}
                      className="w-[100%] h-[300px] object-cover mb-4"
                      width={96}
                      height={96}
                    />
                    <span className="font-bold text-xl mb-2 text-blue-700 dark:text-pink-200">
                      {product.name}
                    </span>
                    <span className="text-lg mb-2 text-gray-700 dark:text-gray-200">
                      {product.desc}
                    </span>
                    <span className="text-2xl font-extrabold text-blue-700 dark:text-yellow-200 mb-4">
                      {product.price}
                    </span>
                    <Link
                      href={product.link}
                      className="px-6 py-2 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
                    >
                      Get it now
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* 4. How It Works Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-pink-200">
                How It Works
              </h2>
              <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-200 text-lg space-y-2">
                <li>Browse our curated selection of products by category.</li>
                <li>
                  Add your favorite items to the cart with a single click.
                </li>
                <li>Checkout securely and track your order in real time.</li>
                <li>Enjoy fast delivery and top-notch customer support.</li>
              </ol>
            </div>
            <div className="flex-1 flex justify-center" data-aos="fade-left">
              <Image
                src="/how-it-works.png"
                alt="How It Works"
                className="w-[100%] h-56 md:w-72 md:h-72 object-contain"
                width={288}
                height={288}
              />
            </div>
          </div>
        </section>

        {/* 5. Why Shop With Us Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 flex justify-center" data-aos="fade-right">
              <Image
                src="/why-shop-with-us.png"
                alt="Why Shop With Us"
                className="w-[100%] h-56 md:w-72 md:h-72 object-cover"
                width={224}
                height={224}
              />
            </div>
            <div className="flex-1" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-pink-200">
                Why Shop With Us?
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 text-lg space-y-2">
                <li>Wide range of top-quality products</li>
                <li>Secure and easy checkout</li>
                <li>24/7 customer support</li>
                <li>Fast, reliable shipping</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Newsletter Signup Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow-lg">
              Stay Updated!
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Sign up for our newsletter and never miss a deal or new arrival.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
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

export default ProductsPage;
