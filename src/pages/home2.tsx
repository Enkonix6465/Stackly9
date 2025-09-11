import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

type Props = {};

const Home2 = (props: Props) => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] as {
    home2: {
      title: string;
      metaDescription: string;
      hero: {
        title: string;
        subtitle: string;
        buttonLabel: string;
      };
      featuredCategories: {
        title: string;
        categories: string[];
      };
      dailyDeals: {
        title: string;
        items: { title: string; price: string; desc: string; img: string }[];
      };
      whyShopWithUs: {
        title: string;
        points: string[];
      };
      customerReviews: {
        title: string;
        items: { name: string; review: string }[];
      };
      newsletter: {
        title: string;
        description: string;
        buttonLabel: string;
      };
    };
  };

  return (
    <>
      <Head>
        <title>{t.home2.title}</title>
        <meta name="description" content={t.home2.metaDescription} />
      </Head>
      <Headder />
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 overflow-x-hidden ">
        {/* Hero Banner */}
    <section className="flex flex-col md:flex-row items-center justify-between mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white min-h-[100vh] px-6 py-20 caret-transparent">
  <div className="flex-1 mb-8 md:mb-0 text-center md:text-left" data-aos="fade-right">
    <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
      {t.home2.hero.title}
    </h1>
    <p className="text-xl max-w-lg mx-auto md:mx-0 opacity-90 mb-6">
      {t.home2.hero.subtitle}
    </p>
    <a
      href="#deals"
      className="inline-block px-8 py-3 rounded-full bg-white text-blue-700 font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-900 dark:text-yellow-200 dark:hover:bg-gray-800"
    >
      {t.home2.hero.buttonLabel}
    </a>
  </div>
  <Image
    src="/welcome-to-our-shop.jpg"
    alt="Shop Banner"
    className="w-full md:w-1/2 object-cover rounded-lg shadow-lg"
    data-aos="fade-left"
    width={700}
    height={450}
  />
</section>

        {/* Featured Categories */}
        <section
          className="py-16 px-4 bg-white dark:bg-gray-900"
          id="categories"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-pink-200">
              {t.home2.featuredCategories.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {t.home2.featuredCategories.categories.map((category) => (
                <div
                  key={category}
                  className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-2xl shadow p-6 hover:scale-105 transition-transform animate-zoom-in"
                  data-aos="zoom-in"
                >
                  {/* Replace with dynamic icons if available */}
                  <span className="text-4xl mb-4 text-blue-700 dark:text-pink-200">
                    {/* Icon placeholder */}
                  </span>
                  <span className="font-bold text-lg text-blue-700 dark:text-pink-200">
                    {category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Deals */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800" id="deals">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-green-600 dark:text-pink-200">
              {t.home2.dailyDeals.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.home2.dailyDeals.items.map((deal, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-2xl shadow p-8 flex flex-col items-center animate-zoom-in"
                  data-aos="fade-up"
                >
                  <Image
                    src={deal.img}
                    alt={deal.title}
                    className="w-[100%] h-[220px] mb-4 object-cover rounded-lg object-center"
                    width={96}
                    height={96}
                  />
                  <span className="font-bold text-xl mb-2 text-green-700 dark:text-pink-200">
                    {deal.title}
                  </span>
                  <span className="text-lg mb-2 text-gray-700 dark:text-gray-200">
                    {deal.desc}
                  </span>
                  <span className="text-2xl font-extrabold text-blue-700 dark:text-yellow-200 mb-4">
                    {deal.price}
                  </span>
                  <Link
                    href={"/products"}
                    className="px-6 py-2 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
                  >
                    Buy Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Shop With Us */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-pink-200">
                {t.home2.whyShopWithUs.title}
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 text-lg space-y-2">
                {t.home2.whyShopWithUs.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex justify-center" data-aos="fade-left">
              <Image
                src="/why-shop-with-us.jpg"
                alt="Why Shop"
                className="w-[100%] h-[224px] object-cover rounded-lg"
                width={224}
                height={224}
              />
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
     <section className="caret-transparent py-16 px-4 bg-gray-50 dark:bg-gray-800">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-pink-200">
      {t.home2.customerReviews.title}
    </h2>
    <div className="flex flex-nowrap gap-8 overflow-x-auto p-4 md:p-0">
      {t.home2.customerReviews.items.map((cust, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-80 rounded-2xl bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-8 animate-zoom-in"
          data-aos="zoom-in"
        >
          <p className="italic text-gray-700 dark:text-gray-200 mb-4">
            “{cust.review}”
          </p>
          <div className="flex items-center gap-3">
            <Image
              src={`/customer/${i + 1}.jpg`}
              alt={cust.name}
              className="w-10 h-10 rounded-full object-cover bg-white object-top"
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

        {/* Newsletter Signup */}
        <section className="  py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow-lg caret-transparent ">
              {t.home2.newsletter.title}
            </h2>
            <p className="mb-8 text-lg text-white/90 caret-transparent">
              {t.home2.newsletter.description}
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
                {t.home2.newsletter.buttonLabel}
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home2;
