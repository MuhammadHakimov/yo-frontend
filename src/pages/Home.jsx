import { Link } from "react-router-dom";
import MainBanner from "../components/banners/MainBanner";
import TopHighUsers from "../components/banners/TopHighUsers";
import Reklamma from "../components/banners/Reklamma";
import {
  BookOpenCheck,
  ClipboardList,
  GraduationCap,
  LayoutTemplate,
  LibraryBig,
  Rocket,
  SpellCheck2,
  Tv,
} from "lucide-react";
function Home() {
  const technologies = [
    {
      name: "HTML",
      icon: "</>",
      description: "Сохтори саҳифаҳои веб",
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: "CSS",
      icon: "🎨",
      description: "Дизайн ва намуди сайт",
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Tailwind CSS",
      icon: "🌀",
      description: "Системаи тарроҳии муосир",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      name: "JavaScript",
      icon: "{}",
      description: "Мантиқ ва интерактивӣ",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      name: "React",
      icon: "⚛",
      description: "Сохтани интерфейсҳои замонавӣ",
      color: "bg-cyan-100 text-cyan-600",
    },
  ];

  return (
    <main>
      <MainBanner />

      <section id="technologies" className="bg-white py-20 md:py-24">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Технологияҳо
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Чӣ меомӯзем?
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-slate-500">
              Аз элементҳо сар карда, то сохтани лоиҳаҳои воқеӣ.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {technologies.map((technology) => (
              <a
                href="#lessons"
                key={technology.name}
                className="group relative rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div
                  className={`mb-6 flex h-10 w-12 items-center justify-center rounded-xl text-xl font-extrabold ${technology.color}`}
                >
                  {technology.icon}
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  {technology.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {technology.description}
                </p>
                <span className="absolute right-6 top-7 text-lg text-slate-400 transition group-hover:text-blue-600">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <TopHighUsers />
      <section id="lessons" className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto w-[90%] max-w-7xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Тарзи омӯзиш
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Қадам ба қадам омӯз
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                <LibraryBig className="text-blue-500" />,
                "Дарсҳо",
                "Маводҳои фаҳмо ва мисолҳои код барои ҳар як технология.",
                "/lessons",
              ],
              [
                "02",
                <BookOpenCheck className="text-emerald-500" />,
                "Тестҳо",
                "Дониши худро санҷ ва барои ҷавобҳои дуруст XP гир.",
                "/tests",
              ],
              [
                "03",
                <ClipboardList className="text-orange-500" />,
                "Масъалаҳо",
                "Бо код кор кун ва малакаҳои худро дар лоиҳаҳои амалӣ зиёд намо.",
                "/tasks",
              ],
              [
                "04",
                <Rocket className="text-violet-500" />,
                "Пешрафт",
                "Сатҳи худро баланд бардор ва пешрафти омӯзишии худро пайгирӣ кун.",
                "/profile",
              ],
              [
                "05",
                <Tv className="text-red-500" />,
                "Каналҳо",
                "Каналҳои омӯзиширо пайдо кун ва маводҳои муфидро барои омӯзиш тамошо намо.",
                "/channels",
              ],
              [
                "06",
                <LayoutTemplate className="text-cyan-500" />,
                "Макетҳо",
                "Макетҳои омодаи интерфейсро омӯз ва тарзи сохтани веб-дизайнҳои муосирро беҳтар фаҳм.",
                "/figma",
              ],
              [
                "07",
                <SpellCheck2 className="text-rose-500" />,
                "Хатогиҳо",
                "Ҷавобҳои нодурусти худро аз назар гузарон ва бо такрори онҳо дониши худро мустаҳкам кун.",
                "/mistakes",
              ],
              [
                "08",
                <GraduationCap className="text-yellow-500" />,
                "Имкониятҳо",
                "Имкониятҳои нави омӯзишӣ, санҷиши сатҳ ва роҳҳои рушди худро дар барномасозӣ кашф кун.",
                "/posibles",
              ],
            ].map(([number, icon, title, description, page]) => (
              <Link
                key={number}
                to={page}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <span className="text-xs font-extrabold text-slate-300">
                  {number}
                </span>
                <div className="my-6 text-3xl">{icon}</div>
                <h3 className="font-extrabold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Reklamma />
      <section id="about" className="bg-slate-900 py-16">
        <div className="mx-auto flex w-[90%] max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Омӯзишро оғоз кун
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Имрӯз як қадам ба
              <br />
              барномасоз шудан.
            </h2>
          </div>
          <a
            href="#lessons"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Оғози омӯзиш →
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
