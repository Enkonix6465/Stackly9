import React from "react";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/translations/translations";

type Language = keyof typeof translations;

const HowToChooseTheRightOne = () => {
  const { language } = useLanguage();
  const t = translations[language as Language].howToChooseTheRightOne;

  return (
    <>
      <Head>
        <title>{t.title} - MyShop</title>
        <meta name="description" content={t.metaDescription} />
      </Head>
      <Headder />
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 overflow-x-hidden scroll-smooth">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white min-h-[40vh] w-full py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-center">
            {t.heroTitle}
          </h1>
          <p className="text-xl max-w-2xl text-center opacity-90">
            {t.heroSubtitle}
          </p>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-pink-200">
              {t.contentTitle}
            </h2>
            <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-200 text-lg space-y-4">
              {t.tips.map(
                (
                  tip: { title: string; description: string },
                  index: number,
                ) => (
                  <li key={index}>
                    <span className="font-semibold">{tip.title}</span>{" "}
                    {tip.description}
                  </li>
                ),
              )}
            </ol>
            <p className="mt-8 text-lg text-blue-700 dark:text-pink-200 font-semibold">
              {t.conclusion}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HowToChooseTheRightOne;
