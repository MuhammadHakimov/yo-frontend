import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Braces,
  Building2,
  CalendarDays,
  Code2,
  Component,
  ExternalLink,
  FileCode2,
  Globe2,
  Layers3,
  MapPin,
  Monitor,
  Network,
  Rocket,
  Smartphone,
  Users,
  Wifi,
  Zap,
} from "lucide-react";

function Tajikistan() {
  const navigate = useNavigate();

  const timeline = [
    {
      year: "1990–1997",
      title: "Оғози интернет",
      text: "Интернет тадриҷан ба Тоҷикистон ворид шуд ва замина барои пайдоиши хизматрасониҳои онлайн ва веб фароҳам омад.",
      icon: Wifi,
    },
    {
      year: "1997",
      title: "Пайдоиши .TJ",
      text: "Домени миллии .TJ 11 декабри соли 1997 ба қайд гирифта шуд ва ба нишонаи рақамии Тоҷикистон табдил ёфт.",
      icon: Globe2,
    },
    {
      year: "2000–2009",
      title: "Аввалин вебсайтҳо",
      text: "Вебсайтҳои иттилоотӣ, давлатӣ ва тиҷоратӣ тадриҷан бештар шуданд. HTML ва CSS асоси бисёр сайтҳои аввал буданд.",
      icon: FileCode2,
    },
    {
      year: "2010–2015",
      title: "Веби интерактивӣ",
      text: "JavaScript, responsive design ва интерфейсҳои интерактивӣ нақши бештар гирифтанд.",
      icon: Braces,
    },
    {
      year: "2020–2026",
      title: "Frontend-и муосир",
      text: "React, Next.js, TypeScript, Tailwind CSS, API ва системаҳои component-based дар рушди веб нақши муҳим доранд.",
      icon: Layers3,
    },
  ];

  const developers = [
    {
      name: "Шаҳром Комилов",
      role: "Frontend Engineer",
      location: "Душанбе, Тоҷикистон",
      stack: "React · Next.js · TypeScript · Tailwind",
      text: "Frontend Engineer бо тамаркуз ба интерфейсҳои баландсамар ва design systems. Дар профили оммавии худ таҷриба бо React, Next.js, TypeScript ва Tailwind нишон медиҳад.",
      number: "01",
      link: "https://github.com/komilovsg",
    },
    {
      name: "Хушанг Мирзо",
      role: "Senior Frontend Engineer",
      location: "Душанбе, Тоҷикистон",
      stack: "React · TypeScript · Frontend Architecture",
      text: "Дар профили касбии худ ҳамчун Senior Frontend Engineer муаррифӣ шудааст ва таҷрибаи кор бо маҳсулоти вебӣ ва React/TypeScript дорад.",
      number: "02",
      link: "https://khushangmirzo.resumehero.io/",
    },
    {
      name: "Муслим Меликзода",
      role: "Frontend Developer",
      location: "Душанбе, Тоҷикистон",
      stack: "HTML · CSS · Tailwind · JavaScript · React",
      text: "Frontend Developer аз Душанбе, ки дар профили оммавии худ сохтани интерфейсҳои responsive бо React, TypeScript ва REST API-ро нишон медиҳад.",
      number: "03",
      link: "https://github.com/Melikzoda-Muslihiddin",
    }
  ];

  const websites = [
    {
      title: "Somon.tj",
      category: "Marketplace",
      text: "Яке аз платформаҳои шинохтаи рақамии Тоҷикистон барои эълонҳо, хизматрасониҳо ва бозори онлайн.",
      domain: "somon.tj",
      icon: Globe2,
      accent: "bg-orange-50 text-orange-600",
    },
    {
      title: "Asia-Plus",
      category: "Digital Media",
      text: "Платформаи рақамии маъруфи хабарӣ, ки фаъолияти худро дар Тоҷикистон аз соли 1996 идома медиҳад.",
      domain: "asiaplus.news",
      icon: Monitor,
      accent: "bg-red-50 text-red-600",
    },
    {
      title: "Khovar",
      category: "News Platform",
      text: "Платформаи хабарии миллӣ бо ҳузури вебӣ ва маводи иттилоотии онлайн.",
      domain: "khovar.tj",
      icon: Network,
      accent: "bg-blue-50 text-blue-600",
    }
  ];

  const companies = [
    {
      name: "RowTech",
      city: "Душанбе",
      text: "Ширкати таҳияи сайт ва software, ки дар stack-и Front-end худ JavaScript, React, HTML, CSS ва TypeScript-ро нишон медиҳад.",
      stack: ["React", "JavaScript", "TypeScript", "HTML", "CSS"],
      link: "https://row.tj/",
    },
    {
      name: "СайТсоз",
      city: "Душанбе",
      text: "Web studio, ки website development ва web development пешниҳод мекунад ва React, Next.js ва Vue-ро дар технологияҳои худ нишон медиҳад.",
      stack: ["React", "Next.js", "Vue"],
      link: "https://sitesoz.tj/",
    },
    {
      name: "ADMIN.TJ",
      city: "Тоҷикистон",
      text: "Фаъолият дар самти сохтани websites, web applications, CRM ва online stores.",
      stack: ["Web", "CRM", "E-commerce"],
      link: "https://admin.tj/",
    }
  ];

  const frontendJobs = [
    {
      company: "Babilon-Mobile",
      technology: "React · Angular · TypeScript · HTML · CSS",
      text: "Дар эълони корӣ барои Frontend Developer таҷриба бо JavaScript, React/Angular, TypeScript, HTML ва CSS талаб шуда буд.",
    },
    {
      company: "zypl.ai",
      technology: "React · TypeScript · Next.js",
      text: "Эълонҳои Frontend-и ширкат истифодаи React, TypeScript ва Next.js-ро барои маҳсулоти вебӣ нишон медиҳанд.",
    },
    {
      company: "planet9",
      technology: "React · TypeScript · Redux · Next.js",
      text: "Дар эълони Frontend Developer барои Душанбе React, TypeScript, Redux ва технологияҳои муосири веб зикр шудаанд.",
    },
    {
      company: "Vatan ICT",
      technology: "React · JavaScript · HTML · CSS",
      text: "Яке аз эълонҳои Frontend Developer дар Душанбе ба рушди хизматрасониҳои рақамӣ бо React, JavaScript, HTML ва CSS вобаста буд.",
    },
  ];

  const statistics = [
    {
      value: "1997",
      label: "Соли пайдоиши .TJ",
      icon: CalendarDays,
    },
    {
      value: "8,931",
      label: "Домени .TJ дар маълумоти соли 2026",
      icon: Globe2,
    },
    {
      value: "1996",
      label: "Оғози фаъолияти Asia-Plus",
      icon: Monitor,
    },
    {
      value: "50+",
      label: "Мутахассис дар RowTech",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-slate-950">
      <main>
        <section
          id="history"
          className="mx-auto max-w-[1450px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
          <div className="grid gap-14 lg:grid-cols-[.55fr_1.45fr]">
            <div>
              <div className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                01 / Timeline
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Роҳи веби Тоҷикистон
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
                Ин timeline рушди муҳити вебро аз пайдоиши интернет ва домени
                миллӣ то технологияҳои муосири Frontend нишон медиҳад.
              </p>

              <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white">
                <Globe2 size={24} className="text-blue-400" />
                <div className="mt-6 text-2xl font-black">.TJ</div>
                <p className="mt-2 text-xs leading-6 text-white/40">
                  Нишонаи миллии вебии Тоҷикистон.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute bottom-5 left-[23px] top-5 w-px bg-slate-200" />

              <div className="space-y-3">
                {timeline.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.year}
                      className="group relative grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg sm:grid-cols-[90px_55px_1fr] sm:items-start"
                    >
                      <div className="relative z-10 text-sm font-black text-blue-600">
                        {item.year}
                      </div>

                      <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-blue-600 group-hover:text-white">
                        <Icon size={19} />
                      </div>

                      <div>
                        <h3 className="text-lg font-black">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-500">
                          {item.text}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          id="developers"
          className="bg-slate-950 text-white"
        >
          <div className="mx-auto max-w-[1450px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div>
                <div className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-cyan-400">
                  02 / People
                </div>
                <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
                  Барномасозони Frontend
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45">
                  Як қисми мутахассисоне, ки профилҳои касбӣ ё GitHub-и оммавӣ
                  доранд ва бо Frontend дар Тоҷикистон алоқаманданд.
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-bold text-white/30">
                <Award size={18} />
                Public profiles
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {developers.map((person) => (
                <article
                  key={person.name}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-sm font-black text-slate-950">
                      {person.number}
                    </div>

                    <a
                      href={person.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/40 transition hover:bg-white hover:text-slate-950"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-xl font-black">{person.name}</h3>
                    <div className="mt-1 text-xs font-bold text-cyan-400">
                      {person.role}
                    </div>

                    <div className="mt-5 flex items-center gap-2 text-xs text-white/35">
                      <MapPin size={13} />
                      {person.location}
                    </div>

                    <p className="mt-5 text-sm leading-7 text-white/45">
                      {person.text}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {person.stack.split(" · ").map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white/5 px-3 py-1.5 text-[10px] font-bold text-white/45"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="websites"
          className="mx-auto max-w-[1450px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
          <div className="mb-14">
            <div className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-orange-600">
              03 / Websites
            </div>
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
              Вебсайтҳои шинохтаи Тоҷикистон
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
              Намунаҳое аз веб-лоиҳаҳо ва платформаҳое, ки ҳузури рақамии
              Тоҷикистонро нишон медиҳанд.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {websites.map((site, index) => {
              const Icon = site.icon;

              return (
                <article
                  key={site.title}
                  className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative flex h-44 items-center justify-center overflow-hidden bg-slate-100">
                    <div className="absolute inset-0 opacity-40">
                      <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-blue-200 blur-2xl" />
                      <div className="absolute bottom-4 right-8 h-28 w-28 rounded-full bg-cyan-200 blur-2xl" />
                    </div>

                    <div
                      className={`relative flex h-20 w-20 items-center justify-center rounded-3xl ${site.accent} shadow-sm`}
                    >
                      <Icon size={35} />
                    </div>

                    <div className="absolute left-5 top-5 text-xs font-black text-slate-300">
                      0{index + 1}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                      {site.category}
                    </div>

                    <h3 className="mt-3 text-xl font-black">
                      {site.title}
                    </h3>

                    <div className="mt-1 text-xs font-bold text-slate-400">
                      {site.domain}
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      {site.text}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-black text-slate-700">
                      Web Platform
                      <ArrowUpRight
                        size={15}
                        className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="companies"
          className="border-y border-slate-200 bg-white"
        >
          <div className="mx-auto max-w-[1450px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-[.6fr_1.4fr]">
              <div>
                <div className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-violet-600">
                  04 / Companies
                </div>

                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                  Ширкатҳое, ки веб месозанд
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
                  Дар Тоҷикистон ширкатҳо ва студияҳое фаъоланд, ки website,
                  web application, e-commerce, CRM ва дигар маҳсулоти вебӣ
                  таҳия мекунанд.
                </p>

                <div className="mt-8 flex items-center gap-3 rounded-2xl bg-violet-50 p-5 text-violet-700">
                  <Building2 size={22} />
                  <span className="text-xs font-black">
                    Web Development Ecosystem
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {companies.map((company, index) => (
                  <a
                    key={company.name}
                    href={company.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group grid gap-5 rounded-2xl border border-slate-200 p-6 transition hover:border-slate-300 hover:shadow-lg sm:grid-cols-[50px_1fr_auto] sm:items-center"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-xs font-black text-white">
                      0{index + 1}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-black">
                          {company.name}
                        </h3>
                        <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
                          <MapPin size={11} />
                          {company.city}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {company.text}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {company.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold text-slate-500"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-slate-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-slate-950"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7fa]">
          <div className="mx-auto max-w-[1450px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="mb-12">
              <div className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-green-600">
                05 / Real market
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Frontend дар бозори кори Тоҷикистон
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                Эълонҳои воқеии корӣ нишон медиҳанд, ки ширкатҳо барои рушди
                веб-барномаҳо технологияҳои муосири Frontend-ро истифода мебаранд.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {frontendJobs.map((job) => (
                <article
                  key={job.company}
                  className="rounded-3xl border border-slate-200 bg-white p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                      <Code2 size={20} />
                    </div>

                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                      Frontend Job
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-black">
                    {job.company}
                  </h3>

                  <div className="mt-3 rounded-xl bg-slate-50 p-3 font-mono text-xs text-slate-600">
                    {job.technology}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {job.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>




      </main>
    </div>
  );
}



export default Tajikistan;