import React, { useState } from "react";
import { useRouter } from "next/router";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Head from "next/head";
import { ModeToggle } from "@/components/ModeToggle";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/translations/translations";
import translations from "@/translations/translations";

const AuthPage = () => {
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const t = translations[language as Language].auth;
  const [mode, setMode] = useState<"login" | "register">("login");
  // Login state
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [loginShowPassword, setLoginShowPassword] = useState(false);
  // Register state
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [registerShowPassword, setRegisterShowPassword] = useState(false);

  // Handlers for login
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      loginForm.email === "admin@enkonix.in" &&
      loginForm.password === "admin123"
    ) {
      const now = new Date().toISOString();
      const adminUser = {
        email: loginForm.email,
        password: loginForm.password,
        firstName: "Admin",
        lastName: "User",
        registeredAt: now,
        lastLoginAt: now,
      };
      localStorage.setItem("currentUser", JSON.stringify(adminUser));
      router.push("/admin-dashbord");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userIndex = users.findIndex(
      (u: any) =>
        u.email === loginForm.email && u.password === loginForm.password,
    );
    if (userIndex === -1) {
      setLoginError("Invalid email or password.");
      return;
    }
    // Update lastLoginAt for the user
    const now = new Date().toISOString();
    users[userIndex].lastLoginAt = now;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(users[userIndex]));
    router.push("/home1");
  };

  // Handlers for register
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !registerForm.firstName ||
      !registerForm.lastName ||
      !registerForm.email ||
      !registerForm.password
    ) {
      setRegisterError("All fields are required.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((u: any) => u.email === registerForm.email)) {
      setRegisterError("Email already registered.");
      return;
    }
    const now = new Date().toISOString();
    users.push({ ...registerForm, registeredAt: now, lastLoginAt: null });
    localStorage.setItem("users", JSON.stringify(users));
    setRegisterSuccess("Registration successful! Redirecting to login...");
    setTimeout(() => {
      setMode("login");
      setRegisterSuccess("");
    }, 1500);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-700">
        <div
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-0 w-full max-w-3xl overflow-hidden relative"
          style={{ minHeight: 500 }}
        >
          {/* Language Dropdown and Dark Mode Toggle */}
          <div className="flex justify-between items-center p-4">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded px-3 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
              <option value="he">Hebrew</option>
            </select>
            <ModeToggle />
          </div>

          {/* Product Logo - Fix for Issue #2 */}
          <div className="flex justify-center items-center">
            <Image
              src="/logo.png"
              alt="Product Logo"
              width={120}
              height={120}
              className="drop-shadow-lg"
            />
          </div>

          {/* Animated Forms Container */}
          <div className="md:relative w-full md:h-[500px] min-h-[400px] h-[700px]">
            {/* Login Side */}
            <div
              className={`absolute top-0 left-0 w-full h-full flex flex-row not-md:flex-col-reverse items-center justify-center p-10 transition-all duration-700 ease-in-out
              ${
                mode === "login"
                  ? "opacity-100 translate-x-0 z-20 pointer-events-auto"
                  : "opacity-0 -translate-x-10 z-10 pointer-events-none"
              }
            `}
              style={{ minWidth: 340 }}
            >
              <div className="flex-1 flex flex-col justify-center h-full">
                <form
                  onSubmit={handleLoginSubmit}
                  className="flex flex-col justify-center"
                >
                  <h2 className="text-3xl font-extrabold text-blue-600 dark:text-yellow-200 mb-6 text-center">
                    {t.login.title}
                  </h2>
                  {loginError && (
                    <div className="mb-4 text-red-500">{loginError}</div>
                  )}
                  <div className="mb-4">
                    <label
                      htmlFor="login-email"
                      className="mb-1 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {t.login.emailPlaceholder}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="login-email"
                      name="email"
                      value={loginForm.email}
                      onChange={handleLoginChange}
                      type="email"
                      className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 mb-2"
                    />
                    <label
                      htmlFor="login-password"
                      className="mb-1 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {t.login.passwordPlaceholder}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="login-password"
                        name="password"
                        value={loginForm.password}
                        onChange={handleLoginChange}
                        type={loginShowPassword ? "text" : "password"}
                        className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 pr-10"
                      />
                      <button
                        type="button"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 text-sm"
                        tabIndex={-1}
                        onClick={() => setLoginShowPassword((v) => !v)}
                      >
                        {loginShowPassword ? (
                          <EyeOff size={19} />
                        ) : (
                          <Eye size={19} />
                        )}
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-pink-400/40 transition-all duration-300"
                  >
                    {t.login.submitButton}
                  </button>
                </form>
                <div className="mt-6 text-center">
                  <span className="text-gray-600 dark:text-gray-300">
                    {t.login.noAccount}{" "}
                    <button
                      className="text-blue-600 dark:text-yellow-200 hover:underline transition-colors duration-300"
                      onClick={() => setMode("register")}
                    >
                      {t.login.registerLink}
                    </button>
                  </span>
                </div>
              </div>
              <Image
                src="/login-side.png"
                alt={t.login.imageAlt}
                className="object-contain ml-8 drop-shadow-xl animate-fade-in"
                draggable="false"
                width={300}
                height={300}
              />
            </div>
            {/* Register Side */}
            <div
              className={`absolute top-0 left-0 w-full h-full flex md:flex-row not-md:flex-col items-center justify-center p-10 transition-all duration-700 ease-in-out
              ${
                mode === "register"
                  ? "opacity-100 translate-x-0 z-20 pointer-events-auto"
                  : "opacity-0 translate-x-10 z-10 pointer-events-none"
              }
            `}
              style={{ minWidth: 340 }}
            >
              <div className="flex-1 flex justify-center items-center">
                <Image
                  src="/register-side.png"
                  alt={t.register.imageAlt}
                  className="object-contain drop-shadow-xl animate-fade-in"
                  draggable="false"
                  width={300}
                  height={300}
                />
              </div>
              <div className="flex-1 flex flex-col justify-center h-full">
                <form
                  onSubmit={handleRegisterSubmit}
                  className="flex flex-col justify-center"
                >
                  <h2 className="text-3xl font-extrabold text-blue-600 dark:text-yellow-200 mb-6 text-center">
                    {t.register.title}
                  </h2>
                  {registerError && (
                    <div className="mb-4 text-red-500">{registerError}</div>
                  )}
                  {registerSuccess && (
                    <div className="mb-4 text-green-500">{registerSuccess}</div>
                  )}
                  <div className="mb-4">
                    <label
                      htmlFor="register-firstname"
                      className="mb-1 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {t.register.firstNamePlaceholder}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="register-firstname"
                      name="firstName"
                      value={registerForm.firstName}
                      onChange={handleRegisterChange}
                      type="text"
                      className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 mb-2"
                    />
                    <label
                      htmlFor="register-lastname"
                      className="mb-1 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {t.register.lastNamePlaceholder}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="register-lastname"
                      name="lastName"
                      value={registerForm.lastName}
                      onChange={handleRegisterChange}
                      type="text"
                      className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 mb-2"
                    />
                    <label
                      htmlFor="register-email"
                      className="mb-1 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {t.register.emailPlaceholder}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="register-email"
                      name="email"
                      value={registerForm.email}
                      onChange={handleRegisterChange}
                      type="email"
                      className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 mb-2"
                    />
                    <label
                      htmlFor="register-password"
                      className="mb-1 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {t.register.passwordPlaceholder}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative mb-2">
                      <input
                        id="register-password"
                        name="password"
                        value={registerForm.password}
                        onChange={handleRegisterChange}
                        type={registerShowPassword ? "text" : "password"}
                        className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 pr-10"
                      />
                      <button
                        type="button"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 text-sm"
                        tabIndex={-1}
                        onClick={() => setRegisterShowPassword((v) => !v)}
                      >
                        {registerShowPassword ? (
                          <EyeOff size={19} />
                        ) : (
                          <Eye size={19} />
                        )}
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-pink-400/40 transition-all duration-300"
                  >
                    {t.register.submitButton}
                  </button>
                </form>
                <div className="mt-6 text-center">
                  <span className="text-gray-600 dark:text-gray-300">
                    {t.register.alreadyHaveAccount}{" "}
                    <button
                      className="text-blue-600 dark:text-yellow-200 hover:underline transition-colors duration-300"
                      onClick={() => setMode("login")}
                    >
                      {t.register.loginLink}
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>{`
          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
          }
          @keyframes gradient-x {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    </>
  );
};

export default AuthPage;