import { useState } from "react";
import LOP from "../assets/LOP.png";
import {Link} from 'react-router-dom'
function Footer() {
  return (
<footer className="border-t border-slate-200 bg-white">
  <div className="mx-auto w-[92%] max-w-7xl py-4 sm:py-5 lg:py-4">
    <div className="grid md:grid-cols-3 gap-4">
      <div>
        <a
          href="#home"
          className="group inline-flex items-center gap-3"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 group-hover:scale-105 group-hover:rotate-3">
            &lt;/&gt;
          </span>

          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            Ё<span className="text-blue-600">-</span>Frontend
          </span>
        </a>

        <p className="mt-2.5 max-w-sm text-sm leading-7 text-slate-500">
          Веб-сайти омӯзишӣ ва хизматрасонии Ё-FrontEnd барои барномасозон.
        </p>

        <div className="mt-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
          <span className="text-xs font-medium text-slate-500">
            Платформа фаъол аст
          </span>
        </div>
      </div>
      <div className='min-w-6 flex flex-row justify-between'>
        <div>
        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-900">
          Пайвандҳо
        </h3>

        <div className="flex flex-col gap-3.5 text-sm text-slate-500">
          <a
            href="/"
            className="w-fit transition duration-200 hover:translate-x-1 hover:text-blue-600"
          >
            Асосӣ
          </a>

          <a
            href="/lessons"
            className="w-fit transition duration-200 hover:translate-x-1 hover:text-blue-600"
          >
            Дарсҳо
          </a>

          <a
            href="/channels"
            className="w-fit transition duration-200 hover:translate-x-1 hover:text-blue-600"
          >
            Каналҳо
          </a>

          <a
            href="/tasks"
            className="w-fit transition duration-200 hover:translate-x-1 hover:text-blue-600"
          >
            Масъалаҳо
          </a>

          <a
            href="/tests"
            className="w-fit transition duration-200 hover:translate-x-1 hover:text-blue-600"
          >
            Тестҳо
          </a>
        </div>
      </div>

      <div>
        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-900">
          Омӯзиш
        </h3>

        <div className="flex flex-col gap-3.5 text-sm text-slate-500">
          <a
            href="/lessons"
            className="w-fit transition duration-200 hover:translate-x-1 hover:text-blue-600"
          >
            HTML
          </a>

          <a
            href="/lessons"
            className="w-fit transition duration-200 hover:translate-x-1 hover:text-blue-600"
          >
            CSS
          </a>

          <a
            href="/lessons"
            className="w-fit transition duration-200 hover:translate-x-1 hover:text-blue-600"
          >
            Tailwind CSS
          </a>

          <a
            href="/lessons"
            className="w-fit transition duration-200 hover:translate-x-1 hover:text-blue-600"
          >
            JavaScript
          </a>

          <a
            href="/lessons"
            className={`w-fit transition duration-200 hover:translate-x-1 hover:text-blue-600`}

          >
            React
          </a>
        </div>
      </div>
      </div>
      
      <div className="hidden md:block ml-4">
        <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">

          <h3 className="font-bold text-slate-900">
            Аз Frontend оғоз кунед
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Дарсҳоро омӯзед, тестҳоро супоред ва сатҳи худро баланд бардоред.
          </p>

          <a
            href="/lessons"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Оғози омӯзиш
          </a>
        </div>
      </div>

    </div>

    <div className="mt-1 border-t border-slate-200 pt-7">
          <p className="text-xs text-slate-400 sm:text-sm">
            © 2026 Ё-Frontend. Ҳамаи ҳуқуқҳо ҳифз шудаанд.
          </p>
    </div>
  </div>
</footer>
  );
}

export default Footer;