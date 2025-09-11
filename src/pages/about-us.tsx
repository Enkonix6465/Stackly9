import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/translations/translations";

const AboutUsPage = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] as {
    aboutUs: {
      title: string;
      metaDescription: string;
      hero: {
        title: string;
        subtitle: string;
      };
      whoWeAre: {
        title: string;
        description1: string;
        description2: string;
      };
      mission: {
        title: string;
        description: string;
        points: string[];
      };
      milestones: {
        title: string;
        counters: { label: string; end: number }[];
      };
      team: {
        title: string;
        members: { name: string; role: string; img: string }[];
      };
      testimonials: {
        title: string;
        items: { name: string; review: string; img: string }[];
      };
      cta: {
        title: string;
        description: string;
        buttonLabel: string;
      };
    };
  };

  const counters = t.aboutUs.milestones.counters;

  const counterRefs = React.useRef<(HTMLSpanElement | null)[]>([]);

  React.useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 80 });

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ref = entry.target as HTMLSpanElement;
            if (ref.dataset.animated === "true") return;
            ref.dataset.animated = "true";
            const idx = counterRefs.current.findIndex((el) => el === ref);
            if (idx === -1) return;
            const end = counters[idx].end;
            const duration = 1200;
            const startTime = performance.now();
            const animate = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const value = Math.floor(progress * end);
              ref.textContent = value.toLocaleString();
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                ref.textContent = end.toLocaleString();
              }
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 },
    );
    counterRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, [counters]);

  return (
    <>
      <Head>
        <title>{t.aboutUs.title}</title>
        <meta name="description" content={t.aboutUs.metaDescription} />
      </Head>
      <Headder />
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 overflow-x-hidden caret-transparent ">
        {/* 1. Hero Section */}
        <section className="flex flex-col items-center justify-center mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white min-h-[100vh] w-full">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg text-center">
            {t.aboutUs.hero.title}
          </h1>
          <p className="text-xl max-w-2xl text-center opacity-90">
            {t.aboutUs.hero.subtitle}
          </p>
        </section>

        {/* 2. About Our Store Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <Image
              src="/who-we-are.jpg"
              alt="Our Store"
              data-aos="fade-right"
              width={300}
              height={300}
            />
            <div className="flex-1" data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-pink-200">
                {t.aboutUs.whoWeAre.title}
              </h2>
              <p className="mb-4 text-lg text-gray-700 dark:text-gray-200 text-justify">
                {t.aboutUs.whoWeAre.description1}
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                {t.aboutUs.whoWeAre.description2}
              </p>
            </div>
          </div>
        </section>

        {/* 2. Our Mission */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div
              className="flex-1 flex flex-col items-center md:items-start   md:text-left "
              data-aos="fade-right"
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-pink-200">
                {t.aboutUs.mission.title}
              </h2>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-200 text-justify">
                {t.aboutUs.mission.description}
              </p>
              <ul className="list-disc md:pl-5  text-gray-600  dark:text-gray-300  ">
                {t.aboutUs.mission.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex justify-center" data-aos="fade-left">
              <Image
                src="/our-mission.jpg"
                alt="Mission"
                width={300}
                height={300}
              />
            </div>
          </div>
        </section>

        {/* 3. Milestones & Counters */}
        <section
          data-aos="fade-up"
          className="py-16 px-4 bg-gray-50 dark:bg-gray-800"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-pink-200">
              {t.aboutUs.milestones.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {counters.map((counter, idx) => (
                <div
                  key={counter.label}
                  className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-2xl shadow p-6"
                >
                  <span
                    ref={(el) => {
                      counterRefs.current[idx] = el;
                    }}
                    className="text-4xl font-extrabold text-blue-600 dark:text-pink-400"
                    data-animated="false"
                  >
                    0
                  </span>
                  <span className="mt-2 text-lg font-semibold text-gray-700 dark:text-gray-200">
                    {counter.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Meet Our Team */}
        <section
          data-aos="fade-left"
          className="py-16 px-4 bg-white dark:bg-gray-900"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-pink-200">
              {t.aboutUs.team.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {t.aboutUs.team.members.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-2xl shadow p-6 animate-zoom-in"
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mb-4 object-cover"
                    width={80}
                    height={80}
                  />
                  <span className="font-bold text-lg text-blue-700 dark:text-pink-200">
                    {member.name}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {member.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Testimonials */}
        <section
          data-aos="fade-up"
          className="py-16 px-4 bg-gray-50 dark:bg-gray-800"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-pink-200">
              {t.aboutUs.testimonials.title}
            </h2>
            <div className="flex flex-nowrap md:flex wrap gap-8 justify-start py-4 snap-x snap-mandatory">
              {t.aboutUs.testimonials.items.map((cust, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-8 w-80 flex-shrink-0 snap-center"
                >
                  <p className="italic text-gray-700 dark:text-gray-200 mb-4">
                    “{cust.review}”
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={cust.img}
                      alt={cust.name}
                      className="w-10 h-10 rounded-full bg-white object-cover object-top"
                      width={300}
                      height={300}
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

        {/* 6. CTA Section */}
        <section
          data-aos="fade-up"
          className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        >
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow-lg">
              {t.aboutUs.cta.title}
            </h2>
            <p className="mb-8 text-lg text-white/90">
              {t.aboutUs.cta.description}
            </p>
            <Link
              href="contact-us"
              className="inline-block px-10 py-4 rounded-full bg-white text-blue-700 font-bold text-xl shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-900 dark:text-yellow-200 dark:hover:bg-gray-800 animate-zoom-in"
            >
              {t.aboutUs.cta.buttonLabel}
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default AboutUsPage;