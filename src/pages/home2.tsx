import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
type Props = {};

const Home2 = (props: Props) => {
  return (
    <>
      <Head>
        <title>Home2 - MyShop</title>
        <meta
          name="description"
          content="Welcome to MyShop, your one-stop shop for all your needs."
        />
      </Head>
      <Headder />
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 overflow-x-hidden ">
        {/* Hero Banner */}
        <section className="flex flex-col md:flex-row items-center justify-between mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white min-h-[100vh] w-full px-6 py-20 caret-transparent">
          <div className="flex-1 mb-8 md:mb-0" data-aos="fade-right">
            <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
              Welcome to ShopNext
            </h1>
            <p className="text-xl max-w-lg opacity-90 mb-6">
              Your next-level shopping experience. Discover exclusive deals,
              trending products, and seamless delivery.
            </p>
            <a
              href="#deals"
              className="inline-block px-8 py-3 rounded-full bg-white text-blue-700 font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-900 dark:text-yellow-200 dark:hover:bg-gray-800"
            >
              Shop Now
            </a>
          </div>
          <Image
            src="/welcome-to-our-shop.jpg"
            alt="Shop Banner"
            className="  md:w-[700px] md:h-[450px] object-cover w-[100%] h-auto"
            data-aos="fade-left"
            width={320}
            height={320}
          />
        </section>

        {/* Featured Categories */}
        <section
          className="py-16 px-4 bg-white dark:bg-gray-900"
          id="categories"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-pink-200">
              Featured Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  name: "Electronics",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#ff9800"
                        d="M44 18v-4H34V4h-4v10h-4V4h-4v10h-4V4h-4v10H4v4h10v4H4v4h10v4H4v4h10v10h4V34h4v10h4V34h4v10h4V34h10v-4H34v-4h10v-4H34v-4z"
                      ></path>
                      <path
                        fill="#4caf50"
                        d="M8 12v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4H12c-2.2 0-4 1.8-4 4"
                      ></path>
                      <path
                        fill="#37474f"
                        d="M31 31H17c-1.1 0-2-.9-2-2V19c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2"
                      ></path>
                    </svg>
                  ),
                },
                {
                  name: "Fashion",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#ff4081"
                        d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                      ></path>
                      <path
                        fill="#f50057"
                        d="M24 10c-7.14 0-13 5.86-13 13s5.86 13 13 13 13-5.86 13-13-5.86-13-13-13zm0 24c-6.09 0-11-4.91-11-11S17.91 12 24 12s11 4.91 11 11-4.91 11-11 11z"
                      ></path>
                      <path
                        fill="#c51162"
                        d="M24 14c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                      ></path>
                    </svg>
                  ),
                },
                {
                  name: "Home & Living",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
                      viewBox="0 0 48 48"
                    >
                      <path fill="#e8eaf6" d="M42 39H6V23L24 6l18 17z"></path>
                      <path
                        fill="#c5cae9"
                        d="m39 21l-5-5V9h5zM6 39h36v5H6z"
                      ></path>
                      <path
                        fill="#b71c1c"
                        d="M24 4.3L4 22.9l2 2.2L24 8.4l18 16.7l2-2.2z"
                      ></path>
                      <path fill="#d84315" d="M18 28h12v16H18z"></path>
                      <path fill="#01579b" d="M21 17h6v6h-6z"></path>
                      <path
                        fill="#ff8a65"
                        d="M27.5 35.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5"
                      ></path>
                    </svg>
                  ),
                },
                {
                  name: "Sports",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Layer_1"
                      width={48}
                      height={48}
                      viewBox="0 0 511.998 511.998"
                      xmlSpace="preserve"
                    >
                      <path
                        style={{ fill: "#E1E1E3" }}
                        d="M423.384,0H88.616c-9.213,0-16.683,7.469-16.683,16.683v215.63c0,9.213,7.469,16.683,16.683,16.683  h334.769c9.213,0,16.683-7.469,16.683-16.683V16.683C440.067,7.469,432.598,0,423.384,0z"
                      />
                      <path
                        style={{ fill: "#ACACB2" }}
                        d="M423.384,0H256v248.996h167.384c9.213,0,16.683-7.469,16.683-16.683V16.683  C440.067,7.469,432.598,0,423.384,0z"
                      />
                      <path
                        style={{ fill: "#E61F00" }}
                        d="M399.511,232.195H112.489c-11.196,0-20.306-9.109-20.306-20.306V37.108  c0-11.197,9.109-20.306,20.306-20.306h287.023c11.196,0,20.306,9.109,20.306,20.306v174.781  C419.818,223.085,410.708,232.195,399.511,232.195z M114.426,209.952h283.148V39.044H114.426  C114.426,39.044,114.426,209.952,114.426,209.952z"
                      />
                      <path
                        style={{ fill: "#9D2217" }}
                        d="M399.511,16.8H255.388v22.243h142.186V209.95H255.388v22.243h144.123  c11.196,0,20.306-9.109,20.306-20.306V37.108C419.818,25.91,410.708,16.8,399.511,16.8z"
                      />
                      <path
                        style={{ fill: "#7E4F1F" }}
                        d="M256.659,508.663c-9.213,0-16.683-7.469-16.683-16.683V218.98c0-9.213,7.469-16.683,16.683-16.683  c9.213,0,16.683,7.469,16.683,16.683v273.001C273.342,501.194,265.873,508.663,256.659,508.663z"
                      />
                      <g>
                        <path
                          style={{ fill: "#5E3C16" }}
                          d="M256.659,202.298v306.366c9.213,0,16.683-7.469,16.683-16.683V218.98   C273.342,209.767,265.873,202.298,256.659,202.298z"
                        />
                        <path
                          style={{ fill: "#5E3C16" }}
                          d="M285.703,512h-58.088c-9.213,0-16.683-7.469-16.683-16.683c0-9.213,7.469-16.683,16.683-16.683   h58.088c9.213,0,16.683,7.469,16.683,16.683C302.385,504.531,294.917,512,285.703,512z"
                        />
                      </g>
                      <path
                        style={{ fill: "#474747" }}
                        d="M280.968,196.745h-49.937c-9.213,0-16.683,7.469-16.683,16.683s7.469,16.683,16.683,16.683h49.935  c9.213,0,16.683-7.469,16.683-16.683S290.182,196.745,280.968,196.745z"
                      />
                      <path
                        style={{ fill: "#999898" }}
                        d="M242.77,248.772l-16.873-92.641c-1.65-9.064-10.34-15.073-19.402-13.424  c-9.064,1.65-15.074,10.338-13.424,19.402l16.873,92.642c1.467,8.054,8.488,13.695,16.393,13.695c0.992,0,1.997-0.089,3.008-0.272  C238.411,266.523,244.421,257.836,242.77,248.772z"
                      />
                      <path
                        style={{ fill: "#686868" }}
                        d="M306.825,142.707c-9.068-1.652-17.751,4.359-19.402,13.424l-16.873,92.641  c-1.65,9.064,4.359,17.75,13.423,19.402c1.011,0.185,2.016,0.272,3.008,0.272c7.905,0,14.926-5.642,16.393-13.696l16.873-92.641  C321.898,153.045,315.889,144.358,306.825,142.707z"
                      />
                      <path
                        style={{ fill: "#2D2E30" }}
                        d="M314.96,142.437h-116.6c-9.213,0-16.683,7.469-16.683,16.683c0,9.213,7.469,16.683,16.683,16.683  h116.6c9.213,0,16.683-7.469,16.683-16.683C331.642,149.906,324.173,142.437,314.96,142.437z"
                      />
                    </svg>
                  ),
                },
              ].map((cat) => (
                <div
                  key={cat.name}
                  className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-2xl shadow p-6 hover:scale-105 transition-transform animate-zoom-in"
                  data-aos="zoom-in"
                >
                  {cat.icon}
                  <span className="font-bold text-lg text-blue-700 dark:text-pink-200">
                    {cat.name}
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
              Today's Hot Deals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Smartphone X",
                  price: "$499",
                  img: "/smartphone-x.jpg",
                  desc: "Latest model, unbeatable price!",
                },
                {
                  title: "LED TV",
                  price: "$89",
                  img: "/led-tv.jpg",
                  desc: "Trendy and comfortable.",
                },
                {
                  title: "Blender Pro",
                  price: "$59",
                  img: "/blender-pro.jpg",
                  desc: "Make healthy smoothies at home.",
                },
              ].map((deal, i) => (
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
                Why Shop With Us?
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 text-lg space-y-2">
                <li>Free shipping on orders over $50</li>
                <li>Easy returns & 24/7 support</li>
                <li>Exclusive member discounts</li>
                <li>Secure payments</li>
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
              Customer Reviews
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  name: "Sonia P.",
                  review: "Fast delivery and great prices!",
                  img: "/customer/1.jpg",
                },
                {
                  name: "Amit R.",
                  review: "Love the variety and quality.",
                  img: "/customer/2.jpg",
                },
                {
                  name: "Leena M.",
                  review: "Customer support is top-notch!",
                  img: "/customer/3.jpg",
                },
              ].map((cust, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-8 w-80 animate-zoom-in"
                  data-aos="zoom-in"
                >
                  <p className="italic text-gray-700 dark:text-gray-200 mb-4">
                    “{cust.review}”
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={cust.img}
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
              Stay Updated!
            </h2>
            <p className="mb-8 text-lg text-white/90 caret-transparent">
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

export default Home2;
