import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useRouter } from "next/navigation";
import { useLanguage, languages } from "../context/LanguageContext";
import translations from "../translations/translations";

type TranslationType = {
  hedder: {
    home: string;
    aboutUs: string;
    products: string;
    productsDropdown: { label: string; href: string }[];
    blog: string;
    contactUs: string;
    languages: string;
  };
};

type User = {
  firstName: string;
  lastName: string;
  email: string;
};

type Props = {};

const Headder = (props: Props) => {
  const router = useRouter();
  const { language, setLanguage } = useLanguage();

  const t = translations[
    language as keyof typeof translations
  ] as TranslationType;
  const [userInitials, setUserInitials] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const userData = localStorage.getItem("currentUser");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setCurrentUser(user);
        const firstInitial = user.firstName?.[0]?.toUpperCase() || "R";
        const lastInitial = user.lastName?.[0]?.toUpperCase() || "B";
        setUserInitials(firstInitial + lastInitial);
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }
  }, []);
  const [desktopHomeOpen, setDesktopHomeOpen] = React.useState(false);
  const [desktopShopOpen, setDesktopShopOpen] = React.useState(false);
  const [desktopLanguageOpen, setDesktopLanguageOpen] = React.useState(false);
  const desktopHomeRef = React.useRef<HTMLDivElement>(null);
  const desktopShopRef = React.useRef<HTMLDivElement>(null);
  const desktopLanguageRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        desktopHomeOpen &&
        desktopHomeRef.current &&
        !desktopHomeRef.current.contains(event.target as Node)
      ) {
        setDesktopHomeOpen(false);
      }
      if (
        desktopShopOpen &&
        desktopShopRef.current &&
        !desktopShopRef.current.contains(event.target as Node)
      ) {
        setDesktopShopOpen(false);
      }
      if (
        desktopLanguageOpen &&
        desktopLanguageRef.current &&
        !desktopLanguageRef.current.contains(event.target as Node)
      ) {
        setDesktopLanguageOpen(false);
      }
    }
    if (desktopHomeOpen || desktopShopOpen || desktopLanguageOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [desktopHomeOpen, desktopShopOpen, desktopLanguageOpen]);

  const [mobileHomeOpen, setMobileHomeOpen] = React.useState(false);
  const [mobileShopOpen, setMobileShopOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [mobileLanguageOpen, setMobileLanguageOpen] = React.useState(false);
  const mobileHomeRef = React.useRef<HTMLDivElement>(null);
  const mobileShopRef = React.useRef<HTMLDivElement>(null);
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);
  const mobileMenuBtnRef = React.useRef<HTMLButtonElement>(null);
  const mobileLanguageRef = React.useRef<HTMLDivElement>(null);
  const [desktopProfileDropdownOpen, setDesktopProfileDropdownOpen] =
    React.useState(false);
  const [mobileProfileDropdownOpen, setMobileProfileDropdownOpen] =
    React.useState(false);
  const desktopProfileDropdownRef = React.useRef<HTMLDivElement>(null);
  const mobileProfileDropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileHomeOpen &&
        mobileHomeRef.current &&
        !mobileHomeRef.current.contains(event.target as Node)
      ) {
        setMobileHomeOpen(false);
      }
      if (
        mobileShopOpen &&
        mobileShopRef.current &&
        !mobileShopRef.current.contains(event.target as Node)
      ) {
        setMobileShopOpen(false);
      }
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        mobileMenuBtnRef.current &&
        !mobileMenuBtnRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
        const menu = document.getElementById("mobile-menu");
        if (menu && !menu.classList.contains("hidden"))
          menu.classList.add("hidden");
      }
      if (
        mobileProfileDropdownOpen &&
        mobileProfileDropdownRef.current &&
        !mobileProfileDropdownRef.current.contains(event.target as Node)
      ) {
        setMobileProfileDropdownOpen(false);
      }
      if (
        desktopProfileDropdownOpen &&
        desktopProfileDropdownRef.current &&
        !desktopProfileDropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopProfileDropdownOpen(false);
      }
      if (
        mobileLanguageOpen &&
        mobileLanguageRef.current &&
        !mobileLanguageRef.current.contains(event.target as Node)
      ) {
        setMobileLanguageOpen(false);
      }
    }
    if (
      mobileHomeOpen ||
      mobileShopOpen ||
      mobileMenuOpen ||
      mobileProfileDropdownOpen ||
      desktopProfileDropdownOpen ||
      mobileLanguageOpen
    ) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    mobileHomeOpen,
    mobileShopOpen,
    mobileMenuOpen,
    mobileProfileDropdownOpen,
    desktopProfileDropdownOpen,
    mobileLanguageOpen,
  ]);

  return (
    <header className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-lg px-4 py-3 flex items-center justify-between sticky caret-transparent top-0 z-50">
      <div className="flex items-center gap-2">
        <Link href="/home1">
          <Image
            src={"/logo.png"}
            alt="E-commerce Hero"
            width={200}
            height={200}
          />
        </Link>
      </div>
      <nav className="hidden lg:flex gap-6 items-center">
        <div className="relative" ref={desktopHomeRef}>
          <button
            className="text-white hover:text-yellow-300 dark:text-yellow-200 dark:hover:text-pink-400 transition font-semibold flex justify-center items-center"
            onClick={() => setDesktopHomeOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={desktopHomeOpen}
          >
            {t.hedder.home}
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {desktopHomeOpen && (
            <div className="absolute left-0 mt-2 w-32 bg-gradient-to-br from-white via-blue-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl shadow-2xl z-50 border border-blue-200 dark:border-pink-900">
              <Link
                href="/home1"
                className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
              >
                {t.hedder.home} 1
              </Link>
              <Link
                href="/home2"
                className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
              >
                {t.hedder.home} 2
              </Link>
            </div>
          )}
        </div>
        <Link
          href="/about-us"
          className="text-white hover:text-yellow-300 dark:text-yellow-200 dark:hover:text-pink-400 transition font-semibold"
        >
          {t.hedder.aboutUs}
        </Link>
        <div className="relative" ref={desktopShopRef}>
          <button
            className="text-white hover:text-yellow-300 dark:text-yellow-200 dark:hover:text-pink-400 transition font-semibold flex justify-center items-center"
            onClick={() => setDesktopShopOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={desktopShopOpen}
          >
            {t.hedder.products}
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {desktopShopOpen && (
            <div className="absolute left-0 mt-2 w-40 bg-gradient-to-br from-white via-blue-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl shadow-2xl z-50 border border-blue-200 dark:border-pink-900">
              <Link
                href={"/products"}
                className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
              >
                All Products
              </Link>
              {t.hedder.productsDropdown.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
                >
                  {product.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link
          href="/blog"
          className="text-white hover:text-yellow-300 dark:text-yellow-200 dark:hover:text-pink-400 transition font-semibold"
        >
          {t.hedder.blog}
        </Link>
        <Link
          href="/contact-us"
          className="text-white hover:text-yellow-300 dark:text-yellow-200 dark:hover:text-pink-400 transition font-semibold"
        >
          {t.hedder.contactUs}
        </Link>
        {currentUser && currentUser.email === "admin@enkonix.in" && (
          <Link
            href="/admin-dashbord"
            className="text-white hover:text-yellow-300 dark:text-yellow-200 dark:hover:text-pink-400 transition font-semibold"
          >
            Admin Dashboard
          </Link>
        )}
        <div className="relative" ref={desktopLanguageRef}>
          <button
            className="text-white hover:text-yellow-300 dark:text-yellow-200 dark:hover:text-pink-400 transition font-semibold flex justify-center items-center"
            onClick={() => setDesktopLanguageOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={desktopLanguageOpen}
          >
            {t.hedder.languages}
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {desktopLanguageOpen && (
            <div className="absolute left-0 mt-2 w-32 bg-gradient-to-br from-white via-blue-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl shadow-2xl z-50 border border-blue-200 dark:border-pink-900">
              {Object.entries(languages).map(([langCode, langName]) => (
                <button
                  key={langCode}
                  className="block w-full text-left px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
                  onClick={() => {
                    setLanguage(langCode);
                    setDesktopLanguageOpen(false);
                  }}
                >
                  {langName}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
      <div className="lg:hidden flex items-center">
        <button
          ref={mobileMenuBtnRef}
          type="button"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
          aria-label="Open menu"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            if (menu) menu.classList.toggle("hidden");
            setMobileMenuOpen((open) => !open);
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className="hidden absolute top-16 left-0 w-full bg-gradient-to-br from-white via-blue-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-2xl gap-4 px-4 py-3 lg:hidden z-50 border-t-4 border-pink-400 dark:border-pink-900"
      >
        <div className="relative" ref={mobileHomeRef}>
          <button
            className="w-full flex items-center justify-between text-blue-700 dark:text-pink-200 py-2 hover:text-yellow-600 dark:hover:text-pink-400 transition focus:outline-none font-semibold"
            onClick={() => setMobileHomeOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={mobileHomeOpen}
          >
            {t.hedder.home}
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {mobileHomeOpen && (
            <div className="ml-4 mt-1 flex flex-col bg-gradient-to-br from-white via-blue-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl shadow-2xl border border-blue-200 dark:border-pink-900">
              <Link
                href="/home1"
                className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
              >
                {t.hedder.home} 1
              </Link>
              <Link
                href="/home2"
                className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
              >
                {t.hedder.home} 2
              </Link>
            </div>
          )}
        </div>
        <Link
          href="/about-us"
          className="block text-blue-700 dark:text-pink-200 py-2 hover:text-yellow-600 dark:hover:text-pink-400 transition font-semibold"
        >
          {t.hedder.aboutUs}
        </Link>
        <div className="relative" ref={mobileShopRef}>
          <button
            className="w-full flex items-center justify-between text-blue-700 dark:text-pink-200 py-2 hover:text-yellow-600 dark:hover:text-pink-400 transition focus:outline-none font-semibold"
            onClick={() => setMobileShopOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={mobileShopOpen}
          >
            {t.hedder.products}
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {mobileShopOpen && (
            <div className="ml-4 mt-1 flex flex-col bg-gradient-to-br from-white via-blue-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl shadow-2xl border border-blue-200 dark:border-pink-900">
              <Link
                href={"/products"}
                className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
              >
                All Products
              </Link>
              {t.hedder.productsDropdown.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
                >
                  {product.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link
          href="/contact-us"
          className="block text-blue-700 dark:text-pink-200 py-2 hover:text-yellow-600 dark:hover:text-pink-400 transition font-semibold"
        >
          {t.hedder.contactUs}
        </Link>
        {currentUser && currentUser.email === "admin@enkonix.in" && (
          <Link
            href="/admin-dashbord"
            className="block text-blue-700 dark:text-pink-200 py-2 hover:text-yellow-600 dark:hover:text-pink-400 transition font-semibold"
          >
            Admin Dashboard
          </Link>
        )}
        <div className="flex gap-2.5 items-center mt-4 border-t pt-4 relative">
          <ModeToggle />
          <div ref={mobileProfileDropdownRef} className="relative">
            <button
              className="focus:outline-none"
              onClick={() => setMobileProfileDropdownOpen((open) => !open)}
              aria-haspopup="true"
              aria-expanded={mobileProfileDropdownOpen}
            >
              <Avatar className="w-10 h-10">
                <AvatarFallback>{userInitials || "RB"}</AvatarFallback>
              </Avatar>
            </button>
            {mobileProfileDropdownOpen && (
              <div className="absolute left-0 mt-2 w-32 bg-gradient-to-br from-white via-blue-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl shadow-2xl z-50 border border-blue-200 dark:border-pink-900">
                {currentUser && currentUser.email === "admin@enkonix.in" && (
                  <Link
                    href="/admin-dashbord"
                    className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
                  >
                    Admin
                  </Link>
                )}
                <button
                  className="block w-full text-left px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
                  onClick={() => {
                    const currentUserStr = localStorage.getItem("currentUser");
                    if (currentUserStr) {
                      const currentUser = JSON.parse(currentUserStr);
                      const users = JSON.parse(
                        localStorage.getItem("users") || "[]"
                      );
                      const idx = users.findIndex(
                        (u: any) => u.email === currentUser.email
                      );
                      if (idx !== -1) {
                        users[idx].lastLogoutAt = new Date().toISOString();
                        localStorage.setItem("users", JSON.stringify(users));
                      }
                    }
                    localStorage.removeItem("currentUser");
                    router.push("/auth");
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          <div>
            <div ref={mobileLanguageRef} className="relative">
              <button
                className=" text-blue-700  hover:text-yellow-300 dark:text-yellow-200 dark:hover:text-pink-400 transition font-semibold flex justify-center items-center"
                onClick={() => setMobileLanguageOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={mobileLanguageOpen}
              >
                {t.hedder.languages}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {mobileLanguageOpen && (
                <div className=" absolute  left-0 mt-2 w-32 bg-gradient-to-br from-white via-blue-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl shadow-2xl z-50 border border-blue-200 dark:border-pink-900">
                  {Object.entries(languages).map(([langCode, langName]) => (
                    <button
                      key={langCode}
                      className="block w-full text-left px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
                      onClick={() => {
                        setLanguage(langCode);
                        setDesktopLanguageOpen(false);
                      }}
                    >
                      {langName}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex hidden gap-2.5 items-center relative">
        <ModeToggle />
        <div ref={desktopProfileDropdownRef} className="relative">
          <button
            className="focus:outline-none"
            onClick={() => setDesktopProfileDropdownOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={desktopProfileDropdownOpen}
          >
            <Avatar className="w-10 h-10">
              <AvatarFallback>{userInitials || "RB"}</AvatarFallback>
            </Avatar>
          </button>
          {desktopProfileDropdownOpen && (
            <div className=" absolute -right-10 -left-10 w-fit  mt-2   bg-gradient-to-br from-white via-blue-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl shadow-2xl z-50 border border-blue-200 dark:border-pink-900">
              {currentUser && currentUser.email === "admin@enkonix.in" && (
                <Link
                  href="/admin-dashbord"
                  className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
                >
                  Admin
                </Link>
              )}
              <button
                className="block w-full text-left px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
                onClick={() => {
                  const currentUserStr = localStorage.getItem("currentUser");
                  if (currentUserStr) {
                    const currentUser = JSON.parse(currentUserStr);
                    const users = JSON.parse(
                      localStorage.getItem("users") || "[]"
                    );
                    const idx = users.findIndex(
                      (u: any) => u.email === currentUser.email
                    );
                    if (idx !== -1) {
                      users[idx].lastLogoutAt = new Date().toISOString();
                      localStorage.setItem("users", JSON.stringify(users));
                    }
                  }
                  localStorage.removeItem("currentUser");
                  router.push("/auth");
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Headder;