import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

type Props = {};

const Home1 = (props: Props) => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] as {
    hedder: {
      home: string;
      aboutUs: string;
      products: string;
      productsDropdown: { label: string; href: string }[];
      blog: string;
      contactUs: string;
      languages: string;
    };
    home1: {
      title: string;
      metaDescription: string;
      heroTitle: string;
      heroSubtitle: string;
      heroLink: { label: string; href: string };
      aboutSection: {
        imageAlt: string;
        title: string;
        description1: string;
        description2: string;
        link: { label: string; href: string };
      };
      categories: { name: string }[];
      deals: {
        title: string;
        description: string;
        grap_deal: string;
        items: { label: string; desc: string }[];
      };
      testimonials: {
        title: string;
        items: {
          name: string;
          review: string;
        }[];
      };
      ctaSection: {
        title: string;
        description: string;
        buttonLabel: string;
      };
    };
  };

  return (
    <>
      <Head>
        <title>{t.home1.title}</title>
        <meta name="description" content={t.home1.metaDescription} />
      </Head>
      <main className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-500 caret-transparent">
        <Headder />
        {/* Hero Section - Full width, gradient, text centered */}
        <section className="flex flex-col items-center justify-center     bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white  min-h-[100vh]">
          <h1 className="text-5xl text-center font-extrabold mb-4 drop-shadow-lg">
            {t.home1.heroTitle}
          </h1>
          <p className="text-xl mb-8 max-w-2xl text-center opacity-90">
            {t.home1.heroSubtitle}
          </p>
          <Link
            href={t.home1.heroLink.href}
            className="px-8 py-3 rounded-full bg-white text-blue-600 font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-700 dark:text-yellow-200 dark:hover:bg-gray-800"
          >
            {t.home1.heroLink.label}
          </Link>
        </section>

        {/* About Section - e-commerce info and CTA, left image right content */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 animate-fade-left">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="flex-1 flex justify-center mb-8 md:mb-0">
              <Image
                src="/about-myshop.png"
                alt={t.home1.aboutSection.imageAlt}
                width={240}
                height={240}
                className="w-[100%] h-[410px] object-cover rounded-lg shadow-lg animate-zoom-in"
              />
            </div>
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-pink-200">
                {t.home1.aboutSection.title}
              </h2>
              <p className="mb-6 text-justify text-lg text-gray-700 dark:text-gray-200">
                {t.home1.aboutSection.description1}
              </p>
              <p className="mb-8 text-base text-justify text-gray-600 dark:text-gray-300">
                {t.home1.aboutSection.description2}
              </p>
              <Link
                href={t.home1.aboutSection.link.href}
                className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-700 transition-all duration-300 dark:bg-pink-500 dark:text-white dark:hover:bg-pink-600 "
              >
                {t.home1.aboutSection.link.label}
              </Link>
            </div>
          </div>
        </section>

        {/* Categories - grid, colored backgrounds, no card shadow */}
        <section className="py-16 px-4 bg-gradient-to-r from-pink-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ">
          <h2 className="text-3xl font-bold text-center mb-8 text-pink-600 dark:text-yellow-200">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {t.home1.categories.map((cat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center px-6 py-8 rounded-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 text-blue-700 dark:text-yellow-100 font-semibold hover:scale-105 transition-transform "
              >
                <span className="text-2xl mb-2">{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Deals & Offers - split background, left text, right deals */}
        <section className="py-16 px-4 bg-gradient-to-l from-blue-100 via-pink-100 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-fade-left">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-purple-700 dark:text-yellow-200 not-md:text-center">
                {t.home1.deals.title}
              </h2>
              <p className="text-lg not-md:text-center text-gray-700 dark:text-gray-200">
                {t.home1.deals.description}
              </p>
            </div>
            <div className="flex-1 flex flex-wrap justify-center gap-8">
              {t.home1.deals.items.map((deal, i) => (
                <div
                  key={i}
                  className="rounded-2xl border-2 border-pink-300 dark:border-yellow-300 bg-white/90 dark:bg-gray-900/90 shadow p-6 w-64 flex flex-col items-center "
                >
                  <span className="text-2xl font-bold text-pink-500 dark:text-yellow-200 mb-2">
                    {deal.label}
                  </span>
                  <p className="text-gray-700 dark:text-gray-200 mb-2 text-center">
                    {deal.desc}
                  </p>
                  <Link
                    href={"/products"}
                    className="px-4 py-2 rounded bg-blue-500 text-white dark:bg-pink-500 dark:text-white hover:bg-blue-600 dark:hover:bg-pink-600 transition"
                  >
                    {t.home1.deals.grap_deal}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - carousel style, colored bg, no card */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-700 dark:text-yellow-200">
            {t.home1.testimonials.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {t.home1.testimonials.items.map((cust, i) => (
              <div
                key={i}
                className="rounded-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-8 w-80 "
              >
                <p className="italic text-gray-700 dark:text-gray-200 mb-4">
                  “{cust.review}”
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={`/customer/${i + 1}.jpg`}
                    alt={cust.name}
                    width={96}
                    height={96}
                    className="w-10 h-10 rounded-full object-cover object-top bg-white"
                  />
                  <span className="font-bold text-blue-700 dark:text-yellow-100">
                    {cust.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section - modern, bold, center */}
        <section className="py-20 m-0 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-fade-left">
          <div className="  mx-auto flex flex-col items-center text-center">
            <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow-lg">
              {t.home1.ctaSection.title}
            </h2>
            <p className="mb-8 text-lg text-justify text-white/90">
              {t.home1.ctaSection.description}
            </p>
            <Link
              href="/contact-us"
              className="inline-block px-10 py-4 rounded-full bg-white text-blue-700 font-bold text-xl shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-900 dark:text-yellow-200 dark:hover:bg-gray-800 "
            >
              {t.home1.ctaSection.buttonLabel}
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Home1;
