import Head from "next/head";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="Shop the latest products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div>
          <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-700">
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 flex flex-col items-center ">
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-yellow-200 dark:via-pink-400 dark:to-pink-600 mb-6 animate-gradient-x">
                Welcome Back!
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 text-center max-w-md ">
                Ready to shop? Please login to continue.
              </p>
              <button
                onClick={() => router.push("/auth")}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-pink-400/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Go to Login
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
