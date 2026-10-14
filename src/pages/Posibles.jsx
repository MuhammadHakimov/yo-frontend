import {
  BookOpen,
  BrainCircuit,
  Code2,
  Flame,
  Gamepad2,
  GraduationCap,
  LayoutDashboard,
  LockKeyhole,
  Medal,
  MessageCircle,
  Rocket,
  School,
  School2,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Дарсҳои интерактивӣ",
    description:
      "HTML, CSS, JavaScript, Tailwind ва React-ро бо дарсҳои кӯтоҳ ва фаҳмо омӯзед.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code2,
    title: "Масъалаҳои амалӣ",
    description:
      "Донишро бо масъалаҳои воқеӣ санҷед ва ҷавобҳои намунавиро омӯзед.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: BrainCircuit,
    title: "Омӯзиши оқилона",
    description:
      "Мавзӯъҳои душворро муайян кунед ва барои беҳтар кардани дониш нақша гиред.",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: Trophy,
    title: "XУ ва сатҳҳо",
    description:
      "Барои иҷрои тестҳо ва масъалаҳо XУ гиред ва аз Beginner то Senior расед.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Gamepad2,
    title: "Омӯзиш бо бозӣ",
    description:
      "Бо холҳо, сатҳҳо, нишонҳо ва натиҷаҳо омӯзишро шавқовар кунед.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Users,
    title: "Ҷомеаи барномасозон",
    description: "Бо дигар омӯзандагон ва барномасозон таҷриба мубодила кунед.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: LayoutDashboard,
    title: "Профили шахсӣ",
    description:
      "XУ, сатҳ, натиҷаи тестҳо ва пешрафти худро дар як саҳифа бинед.",
    color: "from-slate-500 to-slate-700",
  },
  {
    icon: MessageCircle,
    title: "Ёрдамчии AI",
    description: "Савол диҳед, хатогиҳоро фаҳмед ва барои омӯзиш тавсия гиред.",
    color: "from-rose-500 to-red-500",
  },
];

const benefits = [
  "Дарсҳои зина ба зина",
  "Тестҳои сатҳбандӣ",
  "30+ масъалаи амалӣ",
  "Системаи XУ ва Сатҳ",
  "Профили шахсӣ",
  "Омӯзиш дар ҳар вақт",
];

function Features() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="w-full py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
              Имконияти нав
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-gray-900">
              Аз омӯзиш то сертификат
            </h2>

            <p className="mt-4 text-gray-600 text-base md:text-lg leading-7">
              Пас аз омӯзиши фронтенд дар платформаи Ё-Фронтенд, шумо метавонед
              дониши худро дар академияи шарик санҷед ва барои гирифтани
              сертификат кӯшиш намоед.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-white border border-gray-200 rounded-3xl p-7 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden">
                  <School2 />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Академияи Rushd
                  </h3>
                  <p className="text-sm text-gray-500">
                    Санҷиши дониши фронтенд
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                  <p>Анҷом додани омӯзиши фронтенд дар платформа</p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                  <p>Супоридани тести ниҳоӣ дар академия</p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                  <p>Ба назар гирифтани натиҷаи тест ва холҳои умумӣ</p>
                </div>
              </div>
            </div>
            <div className="group bg-white border border-gray-200 rounded-3xl p-7 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="mt-6 space-y-3 text-gray-600">
                <div className="flex items-start gap-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    Сертификат бар асоси натиҷа
                  </h3>
                </div>

                <div className="flex items-start gap-3">
                  <p>
                    Натиҷаи тести ниҳоӣ ва холҳои умумии донишҷӯ, ки дар
                    платформа ба даст овардааст метавонад ҳамчун яке аз меъёрҳои
                    арзёбӣ истифода шавад. Қарори ниҳоӣ оид ба додани сертификат
                    ба талаботи академия вобаста аст.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Имкониятҳо
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Ҳама чиз барои рушди барномасоз
            </h2>

            <p className="mt-4 text-slate-600">
              Аз аввалин сатҳ то сохтани лоиҳаҳои воқеӣ, ҳамаи асбобҳо дар як
              платформа ҷамъ шудаанд.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}
                  >
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>

                  <div className="mt-6 h-1 w-10 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-20 group-hover:bg-blue-500" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Чаро Ё-Frontend?
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Омӯзиш бо нақша, натиҷа ва пешрафт
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Платформа барои он сохта шудааст, ки корбар танҳо маълумот
              нахонад, балки онро дар амал истифода барад ва натиҷаи худро
              бинад.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <Zap size={17} />
                  </div>

                  <span className="text-sm font-medium text-slate-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                <LockKeyhole size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Системаи сатҳбандӣ
                </h3>

                <p className="text-sm text-slate-500">Аз Beginner то Senior</p>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-semibold text-slate-700">Beginner</span>
                  <span className="text-slate-500">0–1500 XУ</span>
                </div>

                <div className="h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-1/4 rounded-full bg-emerald-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-semibold text-slate-700">Junior</span>
                  <span className="text-slate-500">1501–3100 XУ</span>
                </div>

                <div className="h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-2/4 rounded-full bg-blue-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-semibold text-slate-700">Middle</span>
                  <span className="text-slate-500">3101–4700 XУ</span>
                </div>

                <div className="h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-3/4 rounded-full bg-violet-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-semibold text-slate-700">Senior</span>
                  <span className="text-slate-500">4700+ XУ</span>
                </div>

                <div className="h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-full rounded-full bg-amber-500" />
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm leading-6 text-blue-700">
              Ҳар як масъала, тест ва дарс шуморо ба сатҳи нав наздик мекунад.
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 via-violet-50 to-cyan-50 p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <Rocket size={32} />
          </div>

          <h2 className="mt-6 text-3xl font-black text-slate-900 sm:text-4xl">
            Қадами аввалро имрӯз гузор
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Омӯзиши барномасозиро ба одати ҳаррӯза табдил деҳ ва ҳар рӯз каме
            бештар пеш рав.
          </p>

          <a
            href="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-700"
          >
            Бақайдгирӣ
            <Sparkles size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Features;
