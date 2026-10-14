import { Link, NavLink, useNavigate } from "react-router-dom";
import { Globe2, Menu, X } from "lucide-react";
import { useState } from "react";
import LOP from "../../assets/LOP.png";

function HistoryHeader() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/history", label: "Таърих" },
    { to: "/history/tajikistan", label: "Тоҷикистон" },
    { to: "/facts", label: "Фактҳо" },
    { to: "/history/people", label: "Барномасозон" },
    { to: "/architecture", label: "Схема" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <div className="flex h-[76px] items-center justify-between">

 <Link
          to="/"
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

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/history"}
                className={({ isActive }) =>
                  `relative rounded-xl px-4 py-2.5 text-xs font-black transition ${
                    isActive
                      ? "bg-slate-950 text-white"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-950"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 sm:flex">
              <Globe2 size={15} className="text-slate-500" />
              <span className="text-[10px] font-black tracking-wider text-slate-500">
                TJ
              </span>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 lg:hidden"
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-slate-200 py-3 lg:hidden">
            <nav className="grid gap-1">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/history"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-black transition ${
                      isActive
                        ? "bg-slate-950 text-white"
                        : "text-slate-600 hover:bg-slate-100"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default HistoryHeader;