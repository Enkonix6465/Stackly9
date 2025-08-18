import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const counters = [
  { label: "Happy Customers", end: 12000 },
  { label: "Products Sold", end: 50000 },
  { label: "Brands", end: 120 },
  { label: "Countries Shipped", end: 35 },
];

const AboutUsPage = () => {
  const counterRefs = React.useRef<(HTMLSpanElement | null)[]>([]);

  React.useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 80 });

    // Counter animation using IntersectionObserver for accuracy
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
  }, []);

  return (
    <>
      <Head>
        <title>About Us - MyShop</title>
        <meta
          name="description"
          content="Learn more about MyShop, our mission, and the team behind your favorite online store."
        />
      </Head>
      <Headder />
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 overflow-x-hidden caret-transparent ">
        {/* 1. Hero Section */}
        <section className="flex flex-col items-center justify-center mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white min-h-[100vh] w-full">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg text-center">
            About MyShop
          </h1>
          <p className="text-xl max-w-2xl text-center opacity-90">
            Discover our journey, values, and the people behind your favorite
            online store.
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
                Who We Are
              </h2>
              <p className="mb-4 text-lg text-gray-700 dark:text-gray-200 text-justify">
                MyShop is a leading e-commerce platform offering a wide range of
                products from electronics and fashion to home essentials. Our
                mission is to make shopping easy, affordable, and enjoyable for
                everyone.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Founded in 2020, we have served thousands of happy customers and
                continue to grow with a focus on quality, customer satisfaction,
                and innovation.
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
                Our Mission
              </h2>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-200 text-justify">
                To empower shoppers with the best products, fast delivery, and
                exceptional customer service. We believe in quality,
                transparency, and building lasting relationships with our
                customers and partners.
              </p>
              <ul className="list-disc md:pl-5  text-gray-600  dark:text-gray-300  ">
                <li>Wide range of top-quality products</li>
                <li>Secure and easy checkout</li>
                <li>24/7 customer support</li>
                <li>Fast, reliable shipping</li>
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
              Our Milestones
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
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  name: "Ramesh B.",
                  role: "Founder & CEO",
                  img: "/agents/1.jpg",
                },
                {
                  name: "Priya S.",
                  role: "Head of Marketing",
                  img: "/agents/2.jpg",
                },
                {
                  name: "Rahul K.",
                  role: "Lead Developer",
                  img: "/agents/3.jpg",
                },
                {
                  name: "Ayesha M.",
                  role: "Customer Success",
                  img: "/agents/4.jpg",
                },
              ].map((member) => (
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
              What Our Customers Say
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  name: "Priya S.",
                  review:
                    "Amazing service and fast delivery! Highly recommend MyShop.",
                  img: "/customer/1.jpg",
                },
                {
                  name: "Rahul K.",
                  review:
                    "Great deals on electronics. The headphones I bought are fantastic!",
                  img: "/customer/2.jpg",
                },
                {
                  name: "Ayesha M.",
                  review: "Loved the fashion collection. Will shop again!",
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
              Ready to Shop with Us?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Join thousands of happy customers and get exclusive access to the
              latest products, deals, and more. Shop with confidence at MyShop!
            </p>
            <Link
              href="contact-us"
              className="inline-block px-10 py-4 rounded-full bg-white text-blue-700 font-bold text-xl shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-900 dark:text-yellow-200 dark:hover:bg-gray-800 animate-zoom-in"
            >
              Start Shopping
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default AboutUsPage;
