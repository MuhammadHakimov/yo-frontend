import {
  LayoutDashboard,
  Users,
  BookOpen,
  ClipboardCheck,
  Target,
  Home,
  User2,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function AdminSidebar() {
  const menu = [
    {
      title: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Корбарон",
      path: "/admin/users",
      icon: Users,
    },
    {
      title: "Дарсҳо",
      path: "/admin/lessons",
      icon: BookOpen,
    },
    {
      title: "Тестҳо",
      path: "/admin/tests",
      icon: ClipboardCheck,
    },
    {
      title: "Масъалаҳо",
      path: "/admin/tasks",
      icon: Target,
    },
    {
      title: "Мактубҳо",
      path: "/admin/messages",
      icon: Mail,
    },
    {
      title: "Профил",
      path: "/profile",
      icon: User2,
    },
  ];

  return (
    <aside
  className="
    fixed left-0 top-0 z-50 h-screen
    w-64 border-r border-slate-200 bg-white p-2 md:p-4
    transition-all duration-300
    max-md:w-20 max-md:p-3
  "
>
  <div className="mb-8 px-3 max-md:px-0">
    <Link
      to="/"
      className="
        text-xl font-bold text-indigo-600
        max-md:flex max-md:justify-center
      "
    >
      <span className="max-md:hidden">Ё-фронтенд</span>
      <span className="inline-block md:hidden"><Home/></span>
    </Link>

    <p className="mt-1 text-sm text-slate-400 max-md:hidden">
      Admin Panel
    </p>
  </div>

  <nav className="space-y-2">
    {menu.map((item) => {
      const Icon = item.icon;

      return (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === "/admin"}
          title={item.title}
          className={({ isActive }) =>
            `
            group relative
            flex items-center gap-3
            rounded-xl px-4 py-3
            text-sm font-medium
            transition-all duration-200

            max-md:justify-center
            max-md:px-0

            ${
              isActive
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100"
            }
            `
          }
        >
          <Icon className="h-5 w-5 shrink-0" />

          <span className="max-md:hidden">
            {item.title}
          </span>

          {/* Tooltip дар mobile */}
          <span
            className="
              pointer-events-none
              absolute left-full ml-3
              hidden whitespace-nowrap
              rounded-lg bg-slate-900
              px-3 py-2 text-xs text-white
              shadow-lg
              group-hover:block
              max-md:group-hover:block
            "
          >
            {item.title}
          </span>
        </NavLink>
      );
    })}
  </nav>
</aside>
  );
}

export default AdminSidebar;