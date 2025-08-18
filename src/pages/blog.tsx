import React from "react";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import Image from "next/image";
import Head from "next/head";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>E-Commerce Blog - MyShop</title>
        <meta
          name="description"
          content="Stay updated with the latest trends and tips in e-commerce."
        />
      </Head>
      <Headder />
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 overflow-x-hidden scroll-smooth">
        {/* 1. Hero Section */}
        <section className="flex flex-col items-center justify-center mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white min-h-[50vh] w-full py-16">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg text-center">
            E-Commerce Blog
          </h1>
          <p className="text-xl max-w-2xl text-center opacity-90">
            Insights, tips, and the latest trends in online shopping and
            e-commerce.
          </p>
        </section>

        {/* 2. Featured Blogs Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-pink-200">
              Latest Blog Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "5 Tips for Safe Online Shopping",
                  img: "/blog/5-tips-for-safe-online-shopping.png",
                  excerpt:
                    "Learn how to protect your data and shop securely on any e-commerce platform.",
                  link: "/5-tips-for-safe-online-shopping",
                },
                {
                  title: "How to Choose the Right one ",
                  img: "/blog/how-to-choose-the-right-one.png",
                  excerpt:
                    "A guide to picking the best gadgets for your needs and budget.",
                  link: "/how-to-choose-the-right-one",
                },
                {
                  title: "The Future of E-Commerce",
                  img: "/blog/the-future-of-e-commerce.png",
                  excerpt:
                    "Discover the innovations shaping the next generation of online shopping.",
                  link: "/the-future-of-e-commerce",
                },
              ].map((blog, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow p-6 flex flex-col items-center animate-zoom-in"
                >
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    className="w-[100%] h-[180px] mb-4 object-cover object-center rounded-lg"
                    width={96}
                    height={96}
                  />
                  <h3 className="font-bold text-xl mb-2 text-blue-700 dark:text-pink-200 text-center">
                    {blog.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 mb-4 text-center">
                    {blog.excerpt}
                  </p>
                  <a
                    href={blog.link}
                    className="px-6 py-2 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
                  >
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. E-Commerce Tips Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-700 dark:text-pink-200">
              E-Commerce Tips
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 text-lg space-y-2 text-left inline-block">
              <li>
                Always check for secure payment options before purchasing.
              </li>
              <li>Read product reviews and ratings from other customers.</li>
              <li>
                Compare prices across multiple platforms for the best deals.
              </li>
              <li>
                Sign up for newsletters to get exclusive offers and updates.
              </li>
            </ul>
          </div>
        </section>

        {/* 4. Customer Stories Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-pink-200">
              Customer Stories
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  name: "Amit R.",
                  story:
                    "I found the perfect laptop for my work at a great price! Fast delivery and excellent support.",
                  img: "/customer/1.jpg",
                },
                {
                  name: "Leena M.",
                  story:
                    "Shopping for home appliances was so easy. The product recommendations were spot on!",
                  img: "/customer/2.jpg",
                },
                {
                  name: "Sonia P.",
                  story:
                    "I love the deals and discounts. My go-to site for all my shopping needs!",
                  img: "/customer/3.jpg",
                },
              ].map((cust, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-8 w-80 animate-zoom-in"
                >
                  <p className="italic text-gray-700 dark:text-gray-200 mb-4">
                    “{cust.story}”
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

        {/* 5. Newsletter Signup Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow-lg">
              Stay Updated!
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Sign up for our newsletter and never miss a blog post or deal.
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

        {/* 6. Contact/CTA Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-pink-200">
              Have Questions or Suggestions?
            </h2>
            <p className="mb-8 text-lg text-gray-700 dark:text-gray-200">
              Contact us for more information, to share your story, or to
              suggest a blog topic!
            </p>
            <a
              href="/contact-us"
              className="inline-block px-10 py-4 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg hover:scale-105 hover:bg-blue-700 transition-all duration-300 dark:bg-pink-400 dark:text-gray-900 dark:hover:bg-pink-600"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
