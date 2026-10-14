import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  User,
  UserLock,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import LOP from "../../assets/LOP.png";

function Header() {
  const user = useSelector((state) => state.registr.login);
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const moreRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setMoreOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        window.innerWidth >= 1024 &&
        moreRef.current &&
        !moreRef.current.contains(event.target)
      ) {
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setMoreOpen(false);
  }, [location.pathname]);

  const moreLinks = [
    {
      name: "Макетҳо аз Figma",
      path: "/figma",
    },
    {
      name: "Каналҳо",
      path: "/channels",
    },
    {
      name: "Таърих",
      path: "/history",
    },
    {
      name: "Имкониятҳо",
      path: "/posibles",
    },
    {
      name: "Схема",
      path: "/architecture",
    },
    {
      name: "Оянда",
      path: "/future",
    },
    {
      name: "Дар бораи мо",
      path: "/about",
    },
  ];

  const isMoreActive = moreLinks.some(
    (link) => location.pathname === link.path
  );

  const mainLinks = [
    {
      name: "Асосӣ",
      path: "/",
    },
    {
      name: "Дарсҳо",
      path: "/lessons",
    },
    {
      name: "Тестҳо",
      path: "/tests",
    },
    {
      name: "Масъалаҳо",
      path: "/tasks",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 w-[94%] max-w-7xl items-center justify-between gap-3 sm:min-h-20">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-2"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14">
            <img
              src={LOP}
              alt="LOP"
              className="h-12 w-12 object-contain sm:h-14 sm:w-14"
            />
          </span>

          <span className="whitespace-nowrap text-lg font-extrabold text-slate-900 sm:text-xl">
            Ё<span className="text-blue-600">-</span>Frontend
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {mainLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition ${
                location.pathname === link.path
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div ref={moreRef} className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen((prev) => !prev)}
              className={`flex items-center gap-1 text-sm font-medium transition ${
                isMoreActive
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              Бештар
              <ChevronDown
                size={17}
                className={`transition-transform ${
                  moreOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {moreOpen && (
              <div className="absolute right-0 top-full z-50 mt-3 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                {moreLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMoreOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                      location.pathname === link.path
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/chatbot"
            className={`whitespace-nowrap text-sm font-medium transition ${
              location.pathname === "/chatbot"
                ? "text-blue-600"
                : "text-slate-600 hover:text-blue-600"
            }`}
          >
            Ё-Aql
            <span className="relative -top-2 ml-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600">
              AI
            </span>
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to={user ? "/profile" : "/login"}
            title={user ? "Профили ман" : "Ворид шудан"}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-500 bg-blue-50 text-blue-600 transition hover:scale-105 hover:bg-blue-100 sm:h-11 sm:w-11"
          >
            {user ? (
              <User size={22} strokeWidth={2} />
            ) : (
              <UserLock size={22} strokeWidth={2} />
            )}
          </Link>

          <button
            onClick={() => {
              setMenuOpen((prev) => !prev);
              setMoreOpen(false);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 lg:hidden"
            aria-label="Меню"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 shadow-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1">
            {mainLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                  location.pathname === link.path
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <button
              type="button"
              onClick={() => setMoreOpen((prev) => !prev)}
              className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition ${
                isMoreActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <span>Бештар</span>

              <ChevronDown
                size={18}
                className={`transition-transform ${
                  moreOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {moreOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l-2 border-slate-100 pl-3">
                {moreLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                      location.pathname === link.path
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/chatbot"
              onClick={closeMenu}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                location.pathname === "/chatbot"
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              Ё-Aql
              <span className="ml-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600">
                AI
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
