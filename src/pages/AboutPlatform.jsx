import {
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  Globe,
  Laptop,
  Smartphone,
  Monitor,
  BookOpen,
  ClipboardCheck,
  FileCode2,
  GraduationCap,
  Search,
  Users,
  Radio,
  UserRound,
  Target,
  Layers3,
  CheckCircle2,
} from "lucide-react";

const platformParts = [
  {
    id: 1,
    name: "Ё-Фронтенд",
    title: "Ёрдамчии Frontend",
    description:
      "Қисми асосии ҳозираи платформа барои омӯзиши сохтани интерфейс ва вебсайтҳо.",
    icon: Globe,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    status: "Сохта шудааст",
  },
  {
    id: 2,
    name: "Ё-Бекенд",
    title: "Ёрдамчии Backend",
    description:
      "Қисми ояндаи платформа барои омӯзиши сервер, API, базаи маълумот ва мантиқи барномаҳо.",
    icon: Cpu,
    technologies: ["Node.js", "Express", "API", "Database"],
    status: "Дар нақша",
  },
  {
    id: 3,
    name: "Ё-Python",
    title: "Ёрдамчии Python",
    description:
      "Қисми оянда барои омӯзиши Python, алгоритмҳо, автоматизатсия ва сохтани барномаҳо.",
    icon: Code2,
    technologies: ["Python", "Algorithms", "Automation"],
    status: "Дар нақша",
  },
  {
    id: 4,
    name: "Ё-C#",
    title: "Ёрдамчии C#",
    description:
      "Қисми оянда барои омӯзиши C#, .NET ва сохтани барномаҳои муосир.",
    icon: Laptop,
    technologies: ["C#", ".NET", "OOP"],
    status: "Дар нақша",
  },
  {
    id: 5,
    name: "Ё-C++",
    title: "Ёрдамчии C++",
    description:
      "Қисми оянда барои омӯзиши алгоритмҳо, сохтори маълумот ва барномасозии сатҳи паст.",
    icon: BrainCircuit,
    technologies: ["C++", "Algorithms", "Data Structures"],
    status: "Дар нақша",
  },
];

const frontendFunctions = [
  {
    title: "Дарсҳо",
    description:
      "Дарсҳои марҳила ба марҳила барои омӯзиши технологияҳои Frontend.",
    icon: BookOpen,
  },
  {
    title: "Тестҳо",
    description:
      "Саволҳои сатҳбандӣ барои санҷиши дониш ва гирифтани XP.",
    icon: ClipboardCheck,
  },
  {
    title: "Масъалаҳо",
    description:
      "Вазифаҳои амалӣ барои навиштани код ва мустаҳкам кардани дониш.",
    icon: FileCode2,
  },
  {
    title: "Пешниҳоди макетҳо",
    description:
      "Макетҳои Figma барои табдил додани дизайн ба HTML, CSS ва React.",
    icon: FileCode2,
  },
  {
    title: "Пешниҳоди лексияҳо",
    description:
      "Маводи иловагӣ барои мавзӯъҳое, ки корбар бояд бештар омӯзад.",
    icon: GraduationCap,
  },
  {
    title: "Никнейми барномасозон",
    description:
      "Имконияти шиносоӣ ва муошират бо барномасозон тавассути никнейм.",
    icon: Users,
  },
  {
    title: "Каналҳои Frontend",
    description:
      "Пешниҳоди каналҳои муфид аз Telegram, Instagram, YouTube ва Facebook.",
    icon: Radio,
  },
  {
    title: "Ҷустуҷӯи элемент аз YouTube",
    description:
      "Ёфтани видеоҳо ва шарҳҳо дар бораи элемент ё мавзӯи мушаххаси Frontend.",
    icon: FileCode2,
  },
];

const accessTypes = [
  {
    title: "Telegram Bot",
    description: "Омӯзиш ва гирифтани вазифаҳо тавассути бот.",
    icon: Bot,
  },
  {
    title: "Web Platform",
    description: "Версияи вебӣ бо интерфейси пурра ва замонавӣ.",
    icon: Globe,
  },
  {
    title: "Desktop",
    description: "Версияи компютерӣ барои истифода дар Windows ва дигар системаҳо.",
    icon: Monitor,
  },
  {
    title: "Mobile",
    description: "Версияи мобилӣ барои омӯзиш аз телефон.",
    icon: Smartphone,
  },
];

function AboutPlatform() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-700 px-4 py-20 text-white">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              <Layers3 size={18} />
              Дар бораи лоиҳаи Ё-Барномасоз
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Ё-Барномасоз
            </h1>

            <p className="mt-5 text-xl font-medium text-blue-100 md:text-2xl">
              Платформаи ягона барои омӯзиш, таҷриба ва рушди барномасозон
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-blue-100 md:text-lg">
              Номи «Ё-Барномасоз» аз ду маъно иборат аст: «Ё» ҳамчун
              кӯтоҳшудаи калимаи «ёрдамчӣ» ва «барномасоз» ҳамчун шахсе,
              ки барномаҳо месозад. Яъне, Ё-Барномасоз маънои
              «ёрдамчии барномасоз»-ро дорад.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-indigo-700">
                5 самти барномасозӣ
              </span>

              <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white">
                4 шакли дастрасӣ
              </span>

              <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white">
                Омӯзиш + Амалия
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <Target size={28} />
            </div>

            <h2 className="text-3xl font-extrabold">
              Сабаби сохтани платформа
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              1. Ё-Барномасоз барои он сохта мешавад, ки омӯзиши барномасозӣ
              барои навомӯзон осонтар, фаҳмотар ва амалӣ гардад. Бисёр
              омӯзандагон танҳо видео тамошо мекунанд, аммо имконияти
              санҷидани дониш, иҷрои масъала ва дидани натиҷаи кори худро
              надоранд.
            </p>
            <p className="mt-5 leading-8 text-slate-600">
              2. Ё-Барномасоз барои он сохта мешавад, ки ҳамаи маводҳо дар як муҳит барои истифодабарандагон дастрас бошад.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Ҳадафи платформа пешниҳод кардани дарсҳо, тестҳо, масъалаҳои
              амалӣ, макетҳо, каналҳо, кумаки ЗИ ва манбаъҳои муфид мебошад,
              то корбар аз омӯзиш ба амалия гузарад.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Омӯзиши содда ва марҳилавӣ",
                "Санҷиши дониши корбар",
                "Вазифаҳои амалӣ",
                "Пешрафт ва гирифтани XУ",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-sm font-semibold text-slate-700"
                >
                  <CheckCircle2 size={18} className="text-emerald-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-sm md:p-10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <UserRound size={28} />
            </div>

            <h2 className="text-3xl font-extrabold">
              Созандаи платформа
            </h2>

            <p className="mt-4 text-2xl font-bold text-blue-300">
              Ҳакимов Муҳаммад
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Ё-Барномасоз ҳамчун лоиҳаи омӯзишӣ ва технологӣ аз ҷониби
              Ҳакимов Муҳаммад таҳия шудааст. Мақсади созанда сохтани
              муҳити ягона барои омӯзиши барномасозӣ, рушди малакаҳои
              амалӣ ва дастраси ба маводҳо мебошад.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-wider text-slate-400">
                Идеяи асосӣ
              </p>

              <p className="mt-2 text-lg font-semibold leading-8">
                Омӯзиш бояд танҳо хондани дарс набошад. Омӯзиш бояд ба
                навиштани код, иҷрои масъала ва сохтани лоиҳаҳои ҳақиқи оварда расонад.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Сохтори платформа
            </span>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Ё-Барномасоз аз 5 қисм иборат аст
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Ҳар қисм барои як самти барномасозӣ ҳамчун ёрдамчии алоҳида
              фаъолият мекунад.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {platformParts.map((part) => {
              const Icon = part.icon;

              return (
                <article
                  key={part.id}
                  className={`rounded-2xl border p-5 ${
                    part.status === "Сохта шудааст"
                      ? "border-blue-200 bg-blue-50"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                      <Icon size={25} />
                    </div>

                    <span
                      className={`rounded-full px-2 py-1 text-[10px] font-bold ${
                        part.status === "Сохта шудааст"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {part.status}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold">
                    {part.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-blue-700">
                    {part.title}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {part.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {part.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-slate-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 p-8 text-white md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-blue-100">
                Ҳолати ҳозира
              </span>

              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                Ҳоло Ё-Фронтенд сохта шудааст
              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-blue-100">
                Дар марҳилаи аввал қисми Ё-Фронтенд таҳия шудааст. Ин қисм
                ҳамчун ёрдамчии Frontend ба корбарон дар омӯзиши HTML, CSS,
                Tailwind, JavaScript ва React кӯмак мерасонад.
              </p>
            </div>

            <div className="rounded-2xl bg-white/15 p-6 text-center backdrop-blur">
              <div className="text-5xl font-extrabold">1/5</div>
              <p className="mt-2 text-sm font-semibold text-blue-100">
                Қисмҳои таҳияшуда
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-violet-600">
              Дастрасӣ
            </span>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Платформа дар 4 шакл дастрас мешавад
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {accessTypes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Функсияҳои асосӣ
          </span>

          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Ё-Фронтенд аз якчанд функсия иборат аст
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Ҳамаи функсияҳо барои он сохта шудаанд, ки корбар ҳам дониш
            гирад ва ҳам онро дар амал истифода барад.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {frontendFunctions.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-lg font-extrabold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>



      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Аз як қисми Frontend то экосистемаи пурраи барномасозӣ
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Ё-Барномасоз бо Ё-Фронтенд оғоз шудааст, аммо ҳадафи ниҳоӣ
            сохтани платформаест, ки дар он омӯзандагон метавонанд
            якчанд самти барномасозиро аз як ҷой омӯзанд ва малакаҳои
            худро бо амалия инкишоф диҳанд.
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutPlatform;