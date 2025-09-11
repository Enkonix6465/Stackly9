import React from "react";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import Image from "next/image";
import Head from "next/head";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

const BlogPage = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] as {
    blog: {
      title: string;
      metaDescription: string;
      hero: {
        title: string;
        subtitle: string;
      };
      featuredBlogs: Array<{
        title: string;
        img: string;
        excerpt: string;
        link: string;
      }>;
      tips: {
        title: string;
        items: string[];
      };
      customerStories: {
        title: string;
        items: Array<{ name: string; story: string; img: string }>;
      };
      newsletter: {
        title: string;
        description: string;
        placeholder: string;
        buttonLabel: string;
      };
      cta: {
        title: string;
        description: string;
        buttonLabel: string;
      };
    };
  };

  return (
    <>
      <Head>
        <title>{t.blog.title}</title>
        <meta name="description" content={t.blog.metaDescription} />
      </Head>
      <Headder />
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 overflow-x-hidden scroll-smooth">
        {/* 1. Hero Section */}
        <section className="flex flex-col items-center justify-center mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white min-h-[50vh] w-full py-16">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg text-center">
            {t.blog.hero.title}
          </h1>
          <p className="text-xl max-w-2xl text-center opacity-90">
            {t.blog.hero.subtitle}
          </p>
        </section>

        {/* 2. Featured Blogs Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-pink-200">
              {language === "ar"
                ? "أحدث المقالات"
                : language === "he"
                  ? "פוסטים אחרונים"
                  : "Latest Blog Posts"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.blog.featuredBlogs.map((blog, i) => (
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
                    {language === "ar"
                      ? "اقرأ المزيد"
                      : language === "he"
                        ? "קרא עוד"
                        : "Read More"}
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
              {t.blog.tips.title}
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 text-lg space-y-2 text-left inline-block">
              {t.blog.tips.items.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Customer Stories Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-pink-200">
              {t.blog.customerStories.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {t.blog.customerStories.items.map((cust, i) => (
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
              {t.blog.newsletter.title}
            </h2>
            <p className="mb-8 text-lg text-white/90">
              {t.blog.newsletter.description}
            </p>
            <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <input
                type="email"
                placeholder={t.blog.newsletter.placeholder}
                className="flex-1 px-4 py-3 rounded-full border outline-none text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-pink-500 transition"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-white text-blue-700 font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-900 dark:text-yellow-200 dark:hover:bg-gray-800"
              >
                {t.blog.newsletter.buttonLabel}
              </button>
            </form>
          </div>
        </section>

        {/* 6. Contact/CTA Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-pink-200">
              {t.blog.cta.title}
            </h2>
            <p className="mb-8 text-lg text-gray-700 dark:text-gray-200">
              {t.blog.cta.description}
            </p>
            <a
              href="/contact-us"
              className="inline-block px-10 py-4 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg hover:scale-105 hover:bg-blue-700 transition-all duration-300 dark:bg-pink-400 dark:text-gray-900 dark:hover:bg-pink-600"
            >
              {t.blog.cta.buttonLabel}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
