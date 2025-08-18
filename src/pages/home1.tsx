import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import { BellElectric } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Home1 = (props: Props) => {
  return (
    <>
      <Head>
        <title>Home1 - MyShop</title>
        <meta
          name="description"
          content="Welcome to MyShop, your one-stop shop for all your needs."
        />
      </Head>
      <main className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-500 caret-transparent">
        <Headder />
        {/* Hero Section - Full width, gradient, text centered */}
        <section className="flex flex-col items-center justify-center     bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white  min-h-[100vh]">
          <h1 className="text-5xl text-center font-extrabold mb-4 drop-shadow-lg">
            Welcome to MyShop
          </h1>
          <p className="text-xl mb-8 max-w-2xl text-center opacity-90">
            Your one-stop shop for electronics, fashion, and more. Enjoy
            exclusive deals and fast, secure delivery!
          </p>
          <Link
            href={"/about-us"}
            className="px-8 py-3 rounded-full bg-white text-blue-600 font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-700 dark:text-yellow-200 dark:hover:bg-gray-800"
          >
            About Us
          </Link>
        </section>

        {/* About Section - e-commerce info and CTA, left image right content */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 animate-fade-left">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="flex-1 flex justify-center mb-8 md:mb-0">
              <Image
                src="/about-myshop.png"
                alt="About MyShop"
                width={240}
                height={240}
                className="w-[100%] h-[410px] object-cover rounded-lg shadow-lg animate-zoom-in"
              />
            </div>
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-pink-200">
                About MyShop
              </h2>
              <p className="mb-6 text-justify text-lg text-gray-700 dark:text-gray-200">
                MyShop is your trusted online destination for the latest
                electronics, fashion, home essentials, and more. We are
                committed to delivering quality products, unbeatable prices, and
                a seamless shopping experience. Our mission is to make online
                shopping easy, secure, and enjoyable for everyone.
              </p>
              <p className="mb-8 text-base text-justify text-gray-600 dark:text-gray-300">
                With fast shipping, dedicated customer support, and a wide range
                of products, MyShop is here to help you find exactly what you
                need. Discover why thousands of customers choose us for their
                everyday shopping!
              </p>
              <Link
                href="/about-us"
                className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-700 transition-all duration-300 dark:bg-pink-500 dark:text-white dark:hover:bg-pink-600 "
              >
                Learn More About Us
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
                name: "Home",

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
                name: "Beauty",

                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Layer_1"
                    width={48}
                    height={48}
                    viewBox="0 0 511.998 511.998"
                    xmlSpace="preserve"
                  >
                    <polygon
                      style={{ fill: "#F95428" }}
                      points="78.043,256.016 50.959,230.735 50.959,298.722 78.043,298.722 "
                    />
                    <polyline
                      style={{ fill: "#4A6F93" }}
                      points="98.062,341.428 30.94,341.428 30.94,440.346 98.062,440.346 "
                    />
                    <path
                      style={{ fill: "#5D9EBA" }}
                      d="M289.552,322.847H178.495c-40.222,0-72.829,32.606-72.829,72.829v106.903H362.38V395.676  C362.381,355.453,329.774,322.847,289.552,322.847z"
                    />
                    <path
                      style={{ fill: "#508DA3" }}
                      d="M223.368,322.847h-44.873c-40.222,0-72.829,32.606-72.829,72.829v106.903h44.873V395.676  C150.539,355.453,183.147,322.847,223.368,322.847z"
                    />
                    <path
                      style={{ fill: "#F7CBA4" }}
                      d="M321.955,330.443l-87.93,86.364l-87.942-86.364c9.762-4.863,20.761-7.595,32.407-7.595h111.058  C301.194,322.847,312.193,325.578,321.955,330.443z"
                    />
                    <path
                      style={{ fill: "#E0B394" }}
                      d="M109.884,223.306c-14.602-0.648-26.225-12.694-26.225-27.45c0-15.167,12.294-27.473,27.473-27.473  c1.366,0,2.708,0.094,4.027,0.294"
                    />
                    <path
                      style={{ fill: "#F7CBA4" }}
                      d="M358.698,239.824c-1.472,26.496-14.743,51.237-36.599,67.111l-10.975,7.972l-3.309,2.402  l-34.056,24.753c-23.693,17.216-55.782,17.216-79.487,0l-48.34-35.127c-25.542-18.559-39.355-49.247-36.317-80.677l8.384-86.765  c0.236-2.496,0.565-4.969,0.954-7.407c9.032-56.077,57.537-97.94,115.062-97.94c30.017,0,57.584,11.399,78.368,30.264  c20.773,18.865,34.774,45.208,37.659,75.083l8.384,86.765C358.864,230.803,358.958,235.337,358.698,239.824z"
                    />
                    <path
                      style={{ fill: "#E0B394" }}
                      d="M139.693,243.36c-0.813,13.742,3.662,27.261,12.518,37.801l50.522,62.082  c2.638,3.144,5.629,5.782,8.867,7.89c-6.076-2.12-11.917-5.158-17.322-9.079l-48.34-35.116  c-25.542-18.559-39.355-49.247-36.317-80.677l8.373-86.765c5.723-59.174,55.017-104.464,114.285-105.323  c-36.505,0.883-77.842,35.292-79.997,71.939L139.693,243.36z"
                    />
                    <path
                      style={{ fill: "#9691C6" }}
                      d="M332.556,298.032c19.218-57.325,16.875-157.432-76.155-151.544  c-23.823,1.507-42.935-8.714-56.371-19.76c-14.614-12-22.527-24.988-22.527-24.988s-27.932,50.554-61.659,60.022l-0.671,6.912  h-0.012c-1.319-0.2-2.661-0.294-4.027-0.294c-5.358,0-10.363,1.531-14.59,4.192c-14.873-29.758-8.255-74.388,3.238-96.739  c21.197-41.216,67.017-20.349,67.017-20.349c0-10.987,5.464-19.501,13.271-26.072C199.665,12.926,234.027,8.71,234.027,8.71  c126.661-1.967,158.28,94.984,164.144,117.865C423.171,224.185,332.556,298.032,332.556,298.032z"
                    />
                    <path
                      style={{ fill: "#7F7DAD" }}
                      d="M200.031,126.728c-14.614-12-22.527-24.988-22.527-24.988s-27.932,50.554-61.659,60.022l-0.671,6.912  h-0.012c-1.319-0.2-2.661-0.294-4.027-0.294c-5.358,0-10.363,1.531-14.59,4.192c-14.873-29.758-8.255-74.388,3.238-96.739  c21.197-41.216,67.017-20.349,67.017-20.349c0-10.987,5.464-19.501,13.271-26.072C147.899,78.66,200.031,126.728,200.031,126.728z"
                    />
                    <rect
                      x="357.032"
                      y="414.674"
                      style={{ fill: "#E070B3" }}
                      width="70.276"
                      height="87.895"
                    />
                    <path
                      style={{ fill: "#4A6F93" }}
                      d="M397.064,344.442h-9.788c-6.632,0-12.009,5.377-12.009,12.009v58.227h33.805v-58.227  C409.073,349.819,403.696,344.442,397.064,344.442z"
                    />
                    <rect
                      x="43.148"
                      y="298.717"
                      style={{ fill: "#FCEA81" }}
                      width="42.711"
                      height="42.711"
                    />
                    <path d="M151.128,494.335h-36.04V392.014c0-19.887,10.165-37.93,27.193-48.268c4.17-2.532,5.497-7.964,2.966-12.133  s-7.963-5.497-12.133-2.966c-22.348,13.567-35.69,37.257-35.69,63.367v111.152c0,4.878,3.954,8.832,8.832,8.832h44.872  c4.878,0,8.832-3.954,8.832-8.832C159.96,498.289,156.006,494.335,151.128,494.335z" />
                    {/* --- rest of paths remain the same --- */}
                    <circle cx="265.451" cy="432.927" r="8.832" />
                  </svg>
                ),
              },
              {
                name: "Toys",

                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={48}
                    height={48}
                    viewBox="0 0 511.998 511.998"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path
                          fill="#7BA9D6"
                          d="M316.492,40.658c-17.956-9.852-38.57-15.46-60.494-15.46c-21.929,0-42.542,5.608-60.497,15.46    c-7.965-17.682-25.741-29.991-46.393-29.991c-28.086,0-50.855,22.771-50.855,50.857c0,23.789,16.333,43.76,38.396,49.316    c-4.27,12.651-6.585,26.201-6.585,40.289c0,26.966,8.477,51.951,22.909,72.439c0.005,0.006,0.014,0.013,0.02,0.019    c10.068,14.295,23.039,26.398,38.055,35.452c18.96,11.441,41.186,18.023,64.951,18.023c23.759,0,45.986-6.582,64.95-18.023    c15.015-9.053,27.986-21.154,38.053-35.452c0.01-0.006,0.018-0.017,0.023-0.023c14.432-20.486,22.904-45.47,22.904-72.435    c0-14.088-2.315-27.637-6.584-40.289c22.064-5.556,38.398-25.528,38.398-49.316c-0.001-28.086-22.77-50.857-50.858-50.857    C342.235,10.667,324.457,22.976,316.492,40.658z"
                        />
                        <path
                          fill="#7BA9D6"
                          d="M191.048,259.039c-15.016-9.053-27.988-21.156-38.055-35.452c-0.009-0.004-0.015-0.013-0.02-0.019    c-8.111-8.039-19.273-13.003-31.59-13.003c-24.789,0-44.886,20.097-44.886,44.885c0,24.79,20.097,44.885,44.886,44.885    c1.113,0,2.215-0.042,3.308-0.122c-1.675,9.678-2.558,19.683-2.558,29.922c0,19.538,3.202,38.219,9.023,55.399    c28.677,3.57,50.869,28.031,50.869,57.674c0,4.627-0.541,9.128-1.565,13.443c21.5,16.853,47.51,26.716,75.539,26.716    c28.024,0,54.036-9.865,75.538-26.716c6.064,25.618,29.084,44.683,56.556,44.683c32.102,0,58.125-26.025,58.125-58.125    c0-32.098-26.023-58.123-58.125-58.123c-2.457,0-4.877,0.155-7.255,0.449c5.825-17.181,9.023-35.861,9.023-55.399    c0-10.238-0.885-20.243-2.558-29.922c1.093,0.08,2.196,0.122,3.31,0.122c24.788,0,44.885-20.095,44.885-44.885    c0-24.788-20.097-44.885-44.885-44.885c-12.319,0-23.478,4.962-31.586,12.999c-10.073,14.304-23.053,26.414-38.077,35.475    c4.656,13.156,7.271,27.939,7.271,43.563c0,54.958-32.335,99.512-72.221,99.512c-39.89,0-72.227-44.553-72.227-99.512    C183.771,286.977,186.388,272.195,191.048,259.039z"
                        />
                      </g>
                      <path
                        fill="#F9EACD"
                        d="M191.048,259.039c-4.659,13.156-7.276,27.939-7.276,43.563c0,54.958,32.337,99.512,72.227,99.512   c39.887,0,72.221-44.553,72.221-99.512c0-15.625-2.615-30.408-7.271-43.563c-15.592,9.401-32.76,15.128-50.272,17.176   c-4.875,0.571-9.778,0.855-14.678,0.846c-4.992,0.009-9.983-0.286-14.947-0.879C222.923,274.041,205.974,268.047,191.048,259.039z"
                      />
                      <path
                        fill="#7BA9D6"
                        d="M123.901,501.331c32.012,0,58.123-26.109,58.123-58.121c0-32.014-26.111-58.125-58.123-58.125   c-32.014,0-58.122,26.111-58.122,58.125C65.78,475.221,91.888,501.331,123.901,501.331z"
                      />
                    </g>
                    <g>
                      <path d="M395.103,374.772c3.603-14.459,5.424-29.416,5.424-44.637c0-6.622-0.353-13.259-1.054-19.839   c26.433-4.256,46.69-27.23,46.69-54.846c0-30.631-24.92-55.552-55.552-55.552c-2.429,0-4.832,0.171-7.204,0.476   c5.928-15.285,9.188-31.891,9.188-49.244c0-11.405-1.401-22.669-4.169-33.608c21.633-9.833,35.983-31.523,35.983-55.997   C424.41,27.599,396.811,0,362.885,0c-20.418,0-39.312,10.167-50.667,26.615c-17.578-7.929-36.815-12.084-56.22-12.084   c-19.407,0-38.646,4.155-56.224,12.084C188.419,10.167,169.526,0,149.108,0c-33.924,0-61.522,27.599-61.522,61.525   c0,24.474,14.347,46.164,35.98,55.997c-2.769,10.936-4.169,22.2-4.169,33.608c0,17.354,3.261,33.959,9.188,49.244   c-2.371-0.306-4.774-0.476-7.203-0.476c-30.632,0-55.553,24.921-55.553,55.552c0,27.615,20.256,50.59,46.691,54.846   c-0.7,6.576-1.054,13.212-1.054,19.839c0,15.224,1.821,30.18,5.424,44.637c-0.001,0-0.003,0-0.005,0   c-0.059,0.006-0.116,0.016-0.175,0.022c-1.062,0.111-2.116,0.244-3.165,0.403c-0.361,0.054-0.715,0.126-1.072,0.187   c-0.74,0.125-1.483,0.249-2.216,0.397c-0.422,0.085-0.837,0.187-1.257,0.281c-0.661,0.146-1.323,0.291-1.977,0.458   c-0.441,0.111-0.876,0.238-1.312,0.357c-0.624,0.172-1.247,0.342-1.864,0.531c-0.446,0.135-0.885,0.284-1.326,0.429   c-0.598,0.196-1.195,0.394-1.787,0.606c-0.444,0.159-0.881,0.329-1.321,0.496c-0.579,0.221-1.155,0.446-1.726,0.682   c-0.436,0.18-0.868,0.369-1.301,0.558c-0.562,0.246-1.123,0.498-1.677,0.76c-0.427,0.201-0.85,0.406-1.273,0.617   c-0.548,0.272-1.09,0.55-1.63,0.836c-0.416,0.22-0.828,0.442-1.238,0.67c-0.535,0.298-1.065,0.605-1.592,0.916   c-0.4,0.237-0.798,0.474-1.194,0.718c-0.525,0.325-1.043,0.661-1.558,1.001c-0.381,0.251-0.763,0.499-1.139,0.757   c-0.517,0.356-1.027,0.723-1.534,1.092c-0.359,0.261-0.72,0.52-1.074,0.787c-0.515,0.389-1.019,0.793-1.523,1.197   c-0.332,0.266-0.667,0.527-0.994,0.799c-0.523,0.436-1.034,0.886-1.544,1.338c-0.291,0.257-0.588,0.507-0.874,0.768   c-0.57,0.522-1.124,1.059-1.677,1.599c-0.211,0.207-0.43,0.405-0.64,0.616c-1.515,1.519-2.959,3.107-4.329,4.761   c-0.201,0.241-0.387,0.492-0.583,0.735c-0.474,0.589-0.947,1.178-1.402,1.784c-0.24,0.319-0.467,0.646-0.702,0.971   c-0.394,0.543-0.788,1.086-1.167,1.641c-0.245,0.359-0.479,0.729-0.719,1.093c-0.348,0.532-0.697,1.065-1.032,1.607   c-0.24,0.388-0.467,0.784-0.698,1.177c-0.315,0.533-0.627,1.068-0.927,1.61c-0.227,0.411-0.444,0.826-0.662,1.241   c-0.284,0.539-0.564,1.078-0.833,1.625c-0.211,0.429-0.415,0.862-0.619,1.295c-0.254,0.547-0.505,1.096-0.746,1.65   c-0.194,0.443-0.381,0.89-0.564,1.338c-0.229,0.557-0.45,1.118-0.665,1.683c-0.173,0.456-0.341,0.911-0.507,1.372   c-0.202,0.57-0.395,1.144-0.583,1.721c-0.151,0.464-0.301,0.929-0.443,1.397c-0.176,0.585-0.34,1.174-0.502,1.764   c-0.128,0.47-0.257,0.94-0.377,1.414c-0.151,0.602-0.287,1.211-0.421,1.819c-0.105,0.471-0.212,0.943-0.308,1.419   c-0.124,0.627-0.231,1.261-0.338,1.893c-0.078,0.465-0.164,0.928-0.235,1.396c-0.099,0.667-0.177,1.34-0.256,2.013   c-0.052,0.443-0.114,0.882-0.158,1.327c-0.074,0.747-0.123,1.5-0.172,2.253c-0.025,0.379-0.063,0.754-0.081,1.135   c-0.057,1.136-0.086,2.279-0.086,3.427c0,2.371,0.119,4.714,0.355,7.023c3.53,34.645,32.873,61.767,68.434,61.767   c0.001,0,0.002,0,0.002,0l0,0c0.002,0,0.004,0,0.005,0c1.066,0,2.126-0.033,3.18-0.081c0.26-0.012,0.517-0.027,0.777-0.041   c0.965-0.054,1.929-0.127,2.884-0.221c0.079-0.007,0.158-0.013,0.238-0.021c23.887-2.425,44.467-16.995,54.764-38.212   c21.4,13.525,45.423,20.609,70.249,20.609c24.821,0,48.845-7.085,70.248-20.61c11.301,23.29,34.99,38.577,61.847,38.577   c37.932,0,68.79-30.859,68.79-68.79C456.883,407.643,429.754,378.294,395.103,374.772z M108.92,61.525   c0-22.161,18.028-40.19,40.188-40.19c15.789,0,30.181,9.305,36.667,23.705c1.222,2.713,3.52,4.792,6.341,5.736   c2.823,0.944,5.91,0.667,8.517-0.764c16.864-9.254,36.009-14.145,55.365-14.145c19.355,0,38.498,4.891,55.362,14.145   c2.609,1.43,5.695,1.709,8.516,0.764c2.821-0.944,5.12-3.023,6.342-5.735c6.488-14.401,20.88-23.706,36.669-23.706   c22.16,0,40.19,18.029,40.19,40.19c0,18.449-12.474,34.474-30.336,38.972c-2.885,0.726-5.336,2.625-6.761,5.237   s-1.694,5.7-0.742,8.519c3.997,11.847,6.024,24.254,6.024,36.878c0,63.558-51.707,115.265-115.263,115.265   c-63.558,0-115.267-51.707-115.267-115.265c0-12.445,1.978-24.673,5.861-36.36c0.067-0.167,0.135-0.333,0.194-0.506   c2.468-7.311,5.687-14.4,9.563-21.068c2.96-5.094,1.231-11.623-3.86-14.583c-5.095-2.96-11.623-1.232-14.584,3.862   c-2.752,4.736-5.219,9.653-7.388,14.696C117.459,90.379,108.92,76.784,108.92,61.525z M317.554,302.603   c0,24.347-6.79,47.111-19.12,64.1c-11.581,15.956-26.651,24.745-42.435,24.745c-15.786,0-30.858-8.788-42.44-24.745   c-12.33-16.988-19.12-39.752-19.12-64.099c0-9.656,1.084-19.021,3.179-27.994c17.713,8.408,37.505,13.121,58.381,13.121   c20.874,0,40.665-4.713,58.377-13.121C316.47,283.582,317.554,292.947,317.554,302.603z M169.904,454.869   c-0.033,0.132-0.068,0.262-0.102,0.394c-4.739,18.037-19.853,31.913-38.553,34.832c-0.102,0.016-0.206,0.031-0.308,0.046   c-0.617,0.092-1.236,0.169-1.859,0.237c-0.191,0.02-0.38,0.043-0.572,0.061c-0.564,0.054-1.134,0.095-1.705,0.13   c-0.206,0.013-0.413,0.03-0.619,0.039c-0.754,0.036-1.512,0.058-2.275,0.058c-0.003,0-0.006,0-0.011,0   c-22.897-0.001-42.059-16.3-46.492-37.904c-0.633-3.086-0.964-6.281-0.964-9.551s0.333-6.465,0.964-9.553   c4.433-21.604,23.595-37.904,46.492-37.905c0.912,0,1.832,0.033,2.75,0.085c0.277,0.016,0.553,0.043,0.829,0.064   c0.628,0.047,1.254,0.103,1.879,0.175c23.605,2.717,41.998,22.812,41.998,47.133C171.357,447.232,170.85,451.137,169.904,454.869z    M388.093,490.665c-22.104,0-41.091-14.998-46.178-36.474c-0.117-0.5-0.279-0.982-0.465-1.453   c-0.644-3.135-0.989-6.331-0.989-9.529c0-5.185,0.844-10.307,2.507-15.22c1.889-5.58-1.102-11.636-6.682-13.525   c-5.579-1.889-11.636,1.102-13.526,6.682c-2.412,7.123-3.634,14.545-3.634,22.063c0,2.975,0.213,5.948,0.598,8.899   c-19.203,13.48-41.1,20.591-63.728,20.591c-22.695,0-44.651-7.148-63.887-20.699c0.369-2.881,0.58-5.81,0.58-8.79   c0-32.606-22.81-59.966-53.304-67.013c-4.371-14.787-6.588-30.251-6.588-46.062c0-9.437,0.809-18.893,2.402-28.102   c0.56-3.236-0.401-6.55-2.606-8.983c-2.206-2.433-5.415-3.715-8.684-3.474c-0.84,0.062-1.692,0.093-2.529,0.093   c-18.868,0-34.218-15.35-34.218-34.217s15.351-34.217,34.218-34.217c8.921,0,17.328,3.406,23.739,9.589   c9.155,12.7,20.434,23.769,33.314,32.687c-3.537,12.443-5.331,25.556-5.331,39.094c0,28.813,8.236,56.028,23.189,76.63   c15.702,21.633,36.907,33.548,59.706,33.548c22.797,0,44-11.914,59.703-33.548c14.953-20.603,23.187-47.817,23.187-76.63   c0-13.539-1.792-26.651-5.329-39.094c12.88-8.917,24.159-19.985,33.313-32.686c6.41-6.183,14.817-9.59,23.739-9.59   c18.868,0,34.217,15.35,34.217,34.217s-15.35,34.217-34.217,34.217c-0.841,0-1.691-0.031-2.528-0.093   c-3.271-0.242-6.478,1.041-8.684,3.473c-2.206,2.433-3.169,5.746-2.608,8.982c1.594,9.222,2.402,18.677,2.402,28.104   c0,17.925-2.846,35.412-8.459,51.976c-1.179,3.478-0.485,7.317,1.835,10.163c2.32,2.846,5.938,4.3,9.585,3.847   c1.965-0.244,3.963-0.368,5.94-0.368c26.168,0,47.455,21.29,47.455,47.458C435.549,469.377,414.261,490.665,388.093,490.665z" />
                      <path d="M211.966,145.7c8.813,0,16-7.188,16-16.001c0-8.81-7.187-15.998-16-15.998s-16,7.188-16,15.998   C195.966,138.512,203.153,145.7,211.966,145.7z" />
                      <path d="M300.03,145.7c8.813,0,16.001-7.188,16.001-16.001c0-8.81-7.188-15.998-16.001-15.998   c-8.813,0-16.001,7.188-16.001,15.998C284.029,138.512,291.216,145.7,300.03,145.7z" />
                      <path d="M255.998,186.917c8.813,0,16-7.185,16-15.998c0-8.813-7.187-16.001-16-16.001   c-8.813,0-16.001,7.188-16.001,16.001C239.997,179.732,247.185,186.917,255.998,186.917z" />
                      <path d="M343.874,390.365l-0.192,0.163c-4.557,3.735-5.224,10.456-1.488,15.012   c2.109,2.573,5.169,3.905,8.255,3.905c2.378,0,4.773-0.793,6.756-2.418l0.371-0.311c4.515-3.784,5.109-10.512,1.325-15.027   C355.118,387.176,348.389,386.581,343.874,390.365z" />
                      <path d="M164.885,74.863c2.811,0,5.617-1.104,7.712-3.295l0.174-0.186c4.048-4.281,3.859-11.032-0.421-15.08   c-4.281-4.047-11.033-3.859-15.08,0.421c-0.012,0.013-0.089,0.094-0.117,0.126c-4.048,4.259-3.888,10.994,0.363,15.057   C159.582,73.881,162.235,74.863,164.885,74.863z" />
                    </g>
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
                className="flex flex-col items-center justify-center px-6 py-8 rounded-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 text-blue-700 dark:text-yellow-100 font-semibold hover:scale-105 transition-transform "
              >
                {cat.icon}

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
                Hot Deals & Offers
              </h2>
              <p className="text-lg not-md:text-center text-gray-700 dark:text-gray-200">
                Save big on electronics, fashion, and more. Limited time only!
              </p>
            </div>
            <div className="flex-1 flex flex-wrap justify-center gap-8">
              {[
                {
                  label: "30% OFF",
                  img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1vbml0b3Itc21hcnRwaG9uZS1pY29uIGx1Y2lkZS1tb25pdG9yLXNtYXJ0cGhvbmUiPjxwYXRoIGQ9Ik0xOCA4VjZhMiAyIDAgMCAwLTItMkg0YTIgMiAwIDAgMC0yIDJ2N2EyIDIgMCAwIDAgMiAyaDgiLz48cGF0aCBkPSJNMTAgMTl2LTMuOTYgMy4xNSIvPjxwYXRoIGQ9Ik03IDE5aDUiLz48cmVjdCB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgeD0iMTYiIHk9IjEyIiByeD0iMiIvPjwvc3ZnPg==",
                  desc: "On all electronics",
                },
                {
                  label: "40% OFF",
                  img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhhbmRiYWctaWNvbiBsdWNpZGUtaGFuZGJhZyI+PHBhdGggZD0iTTIuMDQ4IDE4LjU2NkEyIDIgMCAwIDAgNCAyMWgxNmEyIDIgMCAwIDAgMS45NTItMi40MzRsLTItOUEyIDIgMCAwIDAgMTggOEg2YTIgMiAwIDAgMC0xLjk1MiAxLjU2NnoiLz48cGF0aCBkPSJNOCAxMVY2YTQgNCAwIDAgMSA4IDB2NSIvPjwvc3ZnPg==",
                  desc: "Trendy fashion sale",
                },
                {
                  label: "50% OFF",
                  img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvdXNlLXBsdWctaWNvbiBsdWNpZGUtaG91c2UtcGx1ZyI+PHBhdGggZD0iTTEwIDEyVjguOTY0Ii8+PHBhdGggZD0iTTE0IDEyVjguOTY0Ii8+PHBhdGggZD0iTTE1IDEyYTEgMSAwIDAgMSAxIDF2MmEyIDIgMCAwIDEtMiAyaC00YTIgMiAwIDAgMS0yLTJ2LTJhMSAxIDAgMCAxIDEtMXoiLz48cGF0aCBkPSJNOC41IDIxSDVhMiAyIDAgMCAxLTItMnYtOWEyIDIgMCAwIDEgLjcwOS0xLjUyOGw3LTUuOTk5YTIgMiAwIDAgMSAyLjU4MiAwbDcgNS45OTlBMiAyIDAgMCAxIDIxIDEwdjlhMiAyIDAgMCAxLTIgMmgtNWEyIDIgMCAwIDEtMi0ydi0yIi8+PC9zdmc+",
                  desc: "Home essentials discount",
                },
              ].map((deal, i) => (
                <div
                  key={i}
                  className="rounded-2xl border-2 border-pink-300 dark:border-yellow-300 bg-white/90 dark:bg-gray-900/90 shadow p-6 w-64 flex flex-col items-center "
                >
                  <Image
                    src={deal.img}
                    alt={deal.label}
                    width={96}
                    height={96}
                    className="w-16 h-16 mb-2"
                  />
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
                    Grab Deal
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - carousel style, colored bg, no card */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-700 dark:text-yellow-200">
            What Our Customers Say
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Priya S.",
                img: "/customer/1.jpg",
                review:
                  "Amazing service and fast delivery! Highly recommend MyShop.",
              },
              {
                name: "Rahul K.",
                img: "/customer/2.jpg",
                review:
                  "Great deals on electronics. The headphones I bought are fantastic!",
              },
              {
                name: "Ayesha M.",
                img: "/customer/3.jpg",
                review: "Loved the fashion collection. Will shop again!",
              },
            ].map((cust, i) => (
              <div
                key={i}
                className="rounded-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-8 w-80 "
              >
                <p className="italic text-gray-700 dark:text-gray-200 mb-4">
                  “{cust.review}”
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={cust.img}
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
              Ready to Experience the Best Shopping?
            </h2>
            <p className="mb-8 text-lg text-justify text-white/90">
              Join thousands of happy customers and get exclusive access to the
              latest products, deals, and more. Shop with confidence at MyShop!
            </p>
            <Link
              href="/contact-us"
              className="inline-block px-10 py-4 rounded-full bg-white text-blue-700 font-bold text-xl shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-900 dark:text-yellow-200 dark:hover:bg-gray-800 "
            >
              Get Started
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Home1;
