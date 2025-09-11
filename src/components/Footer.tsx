import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/translations/translations";

type Props = {};

const Footer = (props: Props) => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].footer;

  return (
    <footer className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-lg px-4 py-10 caret-transparent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
        {/* Logo/Brand */}
        <div className="flex flex-col items-start">
          <Image
            src={"/logo.png"}
            alt="E-commerce Hero"
            width={150}
            height={150}
          />
          <span className="text-sm opacity-80 mb-4">{t.brandDescription}</span>
          <span className="text-xs opacity-60">
            {t.copyright.replace("{year}", new Date().getFullYear().toString())}
          </span>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-xl mb-3 text-yellow-200">
            {t.quickLinks}
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/home1"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                {t.links.home1}
              </Link>
            </li>
            <li>
              <Link
                href="/home2"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                {t.links.home2}
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                {t.links.aboutUs}
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                {t.links.products}
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                {t.links.blog}
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                {t.links.contactUs}
              </Link>
            </li>
          </ul>
        </div>
        {/* Products */}
        <div>
          <h3 className="font-bold text-xl mb-3 text-yellow-200">
            {t.products}
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/iphone-13"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                {t.productLinks.iphone13}
              </Link>
            </li>
            <li>
              <Link
                href="/led-tv"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                {t.productLinks.ledTv}
              </Link>
            </li>
            <li>
              <Link
                href="/blender-pro"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                {t.productLinks.blenderPro}
              </Link>
            </li>
            <li>
              <Link
                href="/vacum-cleaner"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                {t.productLinks.vacuumCleaner}
              </Link>
            </li>
            <li>
              <Link
                href="/wireless-earbuds"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                {t.productLinks.wirelessEarbuds}
              </Link>
            </li>
            <li>
              <Link
                href="/coffee-maker"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                {t.productLinks.coffeeMaker}
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-xl mb-3 text-yellow-200">
            {t.contactUs}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              {t.contact.email}: {t.contact.email_content}
            </li>
            <li>
              {t.contact.phone}: {t.contact.phone_content}
            </li>
            <li>
              {t.contact.address}: {t.contact.address_content}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
