import H2 from "./../Typography/H2";
import {
  BrainCircuit,
  BookOpenCheck,
  Code2,
  FileCheck,
  Lightbulb,
  Puzzle,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";

const aiFeatures = [
  {
    icon: BookOpenCheck,
    title: "Тайёр кардани дарсҳо",
    description:
      "Зеҳни сунъӣ метавонад аз рӯйи мавзӯъ ва сатҳи корбар дарсҳои нав омода кунад.",
  },
  {
    icon: Target,
    title: "Дарс аз рӯйи хатогиҳо",
    description:
      "Система ҷавобҳои нодурусти корбарро таҳлил карда, мавзӯъҳои душворро муайян мекунад.",
  },
  {
    icon: Puzzle,
    title: "5 хатогӣ = 1 дарси иловагӣ",
    description:
      "Пас аз ҷамъ шудани 5 хатогии вобаста ба мавзӯъҳои гуногун, зеҳни сунъӣ як дарси иловагӣ месозад.",
  },
  {
    icon: FileCheck,
    title: "Санҷиши вазифаи хонагӣ",
    description:
      "Зеҳни сунъӣ метавонад коди корбарро санҷад, хатоҳоро нишон диҳад ва барои беҳтар кардан маслиҳат диҳад.",
  },
  {
    icon: Lightbulb,
    title: "Мисолҳо ва супоришҳои шавқовар",
    description:
      "Система мисолҳои нав, саволҳо, мини-лоиҳаҳо ва супоришҳои интерактивӣ генератсия мекунад.",
  },
  {
    icon: Trophy,
    title: "Омӯзиши шахсӣ",
    description:
      "Мазмун ва душвории дарсҳо мувофиқи сатҳ, натиҷаҳо ва пешрафти ҳар корбар интихоб мешавад.",
  },
];

const platformPlans = [
  {
    title: "Frontend",
    status: "Қисми ҷорӣ",
    description:
      "HTML, CSS, Tailwind CSS, JavaScript ва React. Дар ин қисм дарсҳо, тестҳо, вазифаҳо ва XУ сохта мешаванд.",
    icon: Code2,
    active: true,
  },
  {
    title: "Python",
    status: "Нақшаи оянда",
    description:
      "Сохтани бахши алоҳидаи Python бо дарсҳо, тестҳо, супоришҳо ва лоиҳаҳои амалӣ.",
    icon: Code2,
  },
  {
    title: "C#",
    status: "Нақшаи оянда",
    description:
      "Илова кардани омӯзиши C# аз сатҳи Beginner то сатҳҳои пешрафта.",
    icon: Code2,
  },
  {
    title: "Технологияҳои дигар",
    status: "Нақшаи оянда",
    description:
      "Дар оянда технологияҳо ва забонҳои дигари барномасозӣ низ ба платформа илова карда мешаванд.",
    icon: Sparkles,
  },
];

function FuturePlans() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-8 text-white shadow-xl md:p-12">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
              <Sparkles size={18} />
              Нақшаҳои ояндаи Ё-Frontend
            </div>

            <H2 className="text-4xl font-black leading-tight md:text-5xl">
              Платформае, ки ба ҳар корбар мувофиқ мешавад
            </H2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100 md:text-lg">
              Дар оянда мехоҳем зеҳни сунъиро илова кунем, то платформа танҳо
              дарс нишон надиҳад, балки натиҷаҳои корбарро таҳлил карда, барои ӯ
              омӯзиши шахсӣ созад.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-6">
            <p className="font-semibold uppercase tracking-wide text-blue-600">
              Нақшаи якум
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Илова кардани зеҳни сунъӣ ҳамчун ассистент.
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Зеҳни сунъӣ метавонад ҳамчун ёвари омӯзишӣ кор кунад: дарсҳо омода
              созад, хатогиҳоро таҳлил кунад, вазифаҳои хонагиро санҷад ва ба
              корбар супоришҳои нав пешниҳод намояд.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {aiFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-xl font-bold">{feature.title}</h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
              <BrainCircuit size={34} />
            </div>

            <div>
              <h2 className="text-2xl font-black">
                Чӣ гуна системаи хатогиҳо кор мекунад?
              </h2>

              <p className="mt-2 leading-7 text-slate-600">
                Агар корбар дар тест ба саволҳои марбут ба якчанд элемент ҷавоби
                нодуруст диҳад, платформа хатогиҳоро ҷамъ мекунад ва барои
                бартараф кардани камбудиҳо дарси иловагӣ месозад.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <span className="text-3xl font-black text-blue-600">01</span>
              <h3 className="mt-3 font-bold">Тест</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Корбар ба саволҳо ҷавоб медиҳад.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <span className="text-3xl font-black text-blue-600">02</span>
              <h3 className="mt-3 font-bold">Таҳлил</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Система ҷавобҳои нодурустро муайян мекунад.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <span className="text-3xl font-black text-blue-600">03</span>
              <h3 className="mt-3 font-bold">5 хатогӣ</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Панҷ хатои муҳим ҷамъ карда мешавад.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <span className="text-3xl font-black text-blue-600">04</span>
              <h3 className="mt-3 font-bold">Дарси нав</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Барои корбар дарси иловагӣ сохта мешавад.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-6">
            <p className="font-semibold uppercase tracking-wide text-blue-600">
              Нақшаи дуюм
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Васеъ кардани қисмҳои платформа
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Ҳоло қисми Frontend таҳия шуда истодааст. Дар оянда мехоҳем ҳамин
              системаро барои Python, C# ва дигар забонҳои баномасозӣ истифода
              барем.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {platformPlans.map((plan) => {
              const Icon = plan.icon;

              return (
                <article
                  key={plan.title}
                  className={`rounded-3xl border p-6 shadow-sm ${
                    plan.active
                      ? "border-blue-300 bg-blue-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                      <Icon size={25} />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        plan.active
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {plan.status}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-black">{plan.title}</h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {plan.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-gradient-to-br from-indigo-300 via-green-200  to-violet-500 p-8 text-center shadow-sm">
          <h2 className="text-2xl font-black">Ҳадафи асосии мо</h2>

          <p className="mx-auto mt-3 max-w-3xl leading-8 text-slate-600 ">
            Сохтани платформаи ягонаи омӯзишӣ ва хизматрасонӣ, ки маводҳои
            лозима дар як муҳит ба корбар дастрас бошад.
          </p>
        </section>
      </div>
    </main>
  );
}

export default FuturePlans;
