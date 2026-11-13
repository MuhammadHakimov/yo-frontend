
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Code2,
  Bot,
  Trophy,
  Target,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Layers,
  BrainCircuit,
  UserRound,
  Sparkles,
  Monitor,
  Smartphone,
  CircleHelp,
  Play,
  Rocket,
  LockKeyhole,
} from "lucide-react";

const tracks = [
  {
    name: "Ё-Frontend",
    description: "Омӯзиши сохтани намуди зоҳирии вебсайтҳо ва интерфейсҳои корбар.",
    technologies: "HTML, CSS, Tailwind, JavaScript, React",
    icon: Monitor,
    available: true,
  },
  {
    name: "Ё-Backend",
    description: "Омӯзиши сервер, API, пойгоҳи додаҳо ва мантиқи дохилии барномаҳо.",
    technologies: "Node.js, Express, PostgreSQL",
    icon: Layers,
    available: false,
  },
  {
    name: "Ё-Python",
    description: "Омӯзиши забони Python ва истифодаи он барои сохтани барномаҳо.",
    technologies: "Python",
    icon: Code2,
    available: false,
  },
  {
    name: "Ё-C++",
    description: "Омӯзиши асосҳои барномасозӣ ва ҳалли масъалаҳо бо C++.",
    technologies: "C++",
    icon: Code2,
    available: false,
  },
  {
    name: "Ё-C#",
    description: "Омӯзиши барномасозӣ бо забони C#.",
    technologies: "C#",
    icon: Code2,
    available: false,
  },
];

const steps = [
  {
    number: "01",
    title: "Самти омӯзишро интихоб кун",
    description:
      "Самти барномасозиро интихоб намо. Ҳар самт барои омӯзиши технологияҳои муайян пешбинӣ шудааст.",
    icon: Target,
  },
  {
    number: "02",
    title: "Дарсҳоро омӯз",
    description:
      "Мавзӯъҳоро пайдарпай омӯз. Аз асосҳо оғоз карда, тадриҷан ба мавзӯъҳои мураккабтар гузар.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Донишатро санҷ",
    description:
      "Тестҳоро иҷро намо, ба саволҳо ҷавоб деҳ ва фаҳмиши худро мустаҳкам кун.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Супоришҳоро иҷро кун",
    description:
      "Дониши назариявиро дар амал истифода бар ва малакаи барномасозии худро инкишоф деҳ.",
    icon: Code2,
  },
  {
    number: "05",
    title: "XP ҷамъ кун ва пешравӣ намо",
    description:
      "Барои фаъолияти омӯзишӣ холҳои XP гир, сатҳи худро баланд бардор ва натиҷаҳоятро пайгирӣ кун.",
    icon: Trophy,
  },
];

const features = [
  {
    icon: BookOpen,
    title: "Дарсҳои омӯзишӣ",
    description: "Маводҳои омӯзишӣ барои аз худ кардани технологияҳо.",
  },
  {
    icon: CheckCircle2,
    title: "Тестҳо",
    description: "Санҷиши дониш ва муайян кардани сатҳи фаҳмиш.",
  },
  {
    icon: Code2,
    title: "Супоришҳои амалӣ",
    description: "Мустаҳкам кардани дониш тавассути иҷрои супоришҳо.",
  },
  {
    icon: Trophy,
    title: "XP ва сатҳҳо",
    description: "Пайгирии пешравӣ ва баланд бардоштани сатҳи омӯзиш.",
  },
  {
    icon: BrainCircuit,
    title: "Ё-Aql",
    description: "Ёрдамчии зеҳни сунъӣ барои саволҳо ва кӯмак дар омӯзиш.",
  },
  {
    icon: UserRound,
    title: "Профили шахсӣ",
    description: "Дидани маълумот ва натиҷаҳои омӯзиши худ.",
  },
];

const faqs = [
  {
    question: "Ё-FullStack чист?",
    answer:
      "Ё-FullStack платформаи омӯзиши барномасозӣ мебошад, ки ба корбарон барои аз худ кардани технологияҳои гуногун тавассути дарсҳо, тестҳо ва супоришҳои амалӣ кӯмак мекунад.",
  },
  {
    question: "Оё барои истифодаи платформа таҷрибаи барномасозӣ лозим аст?",
    answer:
      "Не. Омӯзиш метавонад аз асосҳо оғоз шавад. Муҳим он аст, ки дарсҳоро пайдарпай омӯзед ва супоришҳоро иҷро кунед.",
  },
  {
    question: "XP чист?",
    answer:
      "XP холҳои таҷриба мебошанд. Корбар тавассути фаъолияти омӯзишӣ XP ҷамъ мекунад ва метавонад сатҳи худро баланд бардорад.",
  },
  {
    question: "Ё-Aql барои чӣ лозим аст?",
    answer:
      "Ё-Aql ёрдамчии зеҳни сунъӣ мебошад. Шумо метавонед аз он барои фаҳмидани мавзӯъҳо, гирифтани шарҳ ва роҳнамоӣ дар омӯзиш истифода баред.",
  },
  {
    question: "Оё метавонам аз телефон истифода барам?",
    answer:
      "Бале. Саҳифаҳои платформа барои экранҳои телефон, планшет ва компютер мутобиқ карда мешаванд.",
  },
];

export default function Guide() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-indigo-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
              <Sparkles size={16} />
              Хуш омадед ба Ё-FullStack
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Роҳи омӯзиши худро
              <span className="block text-indigo-600">аз ҳамин ҷо оғоз кун!</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Ин роҳнамо ба ту кӯмак мекунад, ки бо имкониятҳои платформа
              шинос шавӣ, самти омӯзишро интихоб кунӣ ва қадам ба қадам
              барномасозиро омӯзӣ.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/lessons"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
                Оғози омӯзиш
                <ArrowRight size={19} />
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50"
              >
                Чӣ тавр истифода бурдан?
                <CircleHelp size={19} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-green-600" />
                Омӯзиш қадам ба қадам
              </span>
              <span className="flex items-center gap-2">
                <Smartphone size={17} className="text-indigo-600" />
                Барои телефон ва компютер
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-indigo-600">
              Дар бораи платформа
            </p>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Ё-FullStack чист?
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Ё-FullStack платформаи омӯзишии барномасозӣ мебошад. Ҳадафи он
              фароҳам овардани муҳити фаҳмо ва дастрас барои омӯзиши
              технологияҳои муосир аст.
            </p>
            <p className="mt-3 leading-8 text-slate-600">
              Дар платформа корбар метавонад самти омӯзишро интихоб кунад,
              дарсҳоро омӯзад, донишашро тавассути тестҳо бисанҷад, супоришҳоро
              иҷро намояд ва пешравии худро пайгирӣ кунад.
            </p>
          </div>

          <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-6 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
              <GraduationCap size={29} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Омӯзиш. Амал. Пешравӣ.
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Ҳар қадам туро ба дониши нав наздик мекунад. Аз сатҳи ибтидоӣ
              оғоз намо ва бо таҷриба малакаҳои худро инкишоф деҳ.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Омӯзиш", "Машқ", "Санҷиш", "Пешравӣ"].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-indigo-100 bg-white px-3 py-2 text-sm font-medium text-indigo-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section id="tracks" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-indigo-600">
              Самтҳои омӯзиш
            </p>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Самти худро интихоб намо
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Ё-FullStack барои омӯзиши якчанд самти барномасозӣ пешбинӣ
              шудааст. Самтҳои ҳоло дастрас ва самтҳои дар нақша бударо дар
              поён мебинӣ.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tracks.map((track) => {
              const Icon = track.icon;

              return (
                <div
                  key={track.name}
                  className={`rounded-2xl border p-5 transition ${
                    track.available
                      ? "border-indigo-200 bg-indigo-50/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                      <Icon size={24} />
                    </div>

                    {track.available ? (
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        Дастрас
                      </span>
                    ) : (
                      <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                        Ба наздикӣ
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {track.name}
                  </h3>
                  <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-600">
                    {track.description}
                  </p>
                  <p className="mt-4 text-xs font-medium text-slate-500">
                    {track.technologies}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-indigo-600">
            Роҳнамои корбар
          </p>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Омӯзишро чӣ тавр оғоз кунӣ?
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Барои истифодаи дурусти платформа ин панҷ қадамро иҷро намо.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-200 hover:shadow-lg hover:shadow-slate-100"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Icon size={24} />
                  </div>
                  <span className="text-3xl font-extrabold text-slate-100">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-indigo-600">
              Имкониятҳо
            </p>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Дар платформа чӣ ҳаст?
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-indigo-200 hover:bg-indigo-50/40"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* XP */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-indigo-600 p-7 text-white sm:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <Trophy size={25} />
              </div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Пешравии худро пайгирӣ кун!
              </h2>
              <p className="mt-4 leading-7 text-indigo-100">
                XP холҳои таҷриба мебошанд. Бо иҷрои фаъолиятҳои омӯзишӣ
                пешравии худро нишон деҳ ва ба сатҳҳои нав бирас.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {["Beginner", "Junior", "Middle", "Senior"].map(
                (level, index) => (
                  <div
                    key={level}
                    className="rounded-xl border border-white/15 bg-white/10 p-4"
                  >
                    <div className="text-xs text-indigo-100">
                      Сатҳи {index + 1}
                    </div>
                    <div className="mt-1 font-bold">{level}</div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-3xl border border-indigo-100 bg-indigo-50/60 p-6 sm:p-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
                <Bot size={30} />
              </div>
              <p className="mt-5 text-sm font-bold uppercase tracking-wider text-indigo-600">
                Ёрдамчии зеҳни сунъӣ
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Бо Ё-Aql шинос шав!
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Ё-Aql ёрдамчии зеҳни сунъии платформа мебошад. Ҳангоми
                омӯзиш савол пайдо шуд? Мавзӯъро нафаҳмидӣ? Метавонӣ ба
                Ё-Aql муроҷиат кунӣ ва шарҳу роҳнамоӣ гирӣ.
              </p>
              <Link
                to="/chatbot"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                <Bot size={19} />
                Ба Ё-Aql гузаштан
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                  <Bot size={23} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Ё-Aql</div>
                  <div className="text-xs text-green-600">
                    Ёрдамчии омӯзишӣ
                  </div>
                </div>
              </div>
              <div className="mt-5 rounded-2xl rounded-tl-none bg-slate-100 p-4 text-sm leading-6 text-slate-700">
                Салом! Ман Ё-Aql ҳастам. Дар омӯзиши барномасозӣ ба ту кӯмак
                мекунам. Саволатро навис!
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-400">
                Саволи худро навис...
                <Sparkles size={17} className="ml-auto text-indigo-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-indigo-600">
            Саволҳои маъмул
          </p>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Ҷавоб ба саволҳои ту
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-800">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp
                      size={20}
                      className="shrink-0 text-indigo-600"
                    />
                  ) : (
                    <ChevronDown
                      size={20}
                      className="shrink-0 text-slate-400"
                    />
                  )}
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white px-6 py-10 text-center sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
            <Rocket size={28} />
          </div>
          <h2 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
            Омодаӣ ба оғоз?
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
            Қадами аввалро гузор. Самти омӯзишро интихоб намо ва саёҳати худро
            дар ҷаҳони барномасозӣ оғоз кун!
          </p>
          <Link
            to="/lessons"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 font-semibold text-white transition hover:bg-indigo-700"
          >
            Оғози омӯзиш
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
