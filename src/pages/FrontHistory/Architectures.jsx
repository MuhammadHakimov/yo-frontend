import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Code2,
  Database,
  FileCode2,
  Globe,
  GraduationCap,
  Layers3,
  Laptop,
  MessageSquare,
  Monitor,
  Network,
  Palette,
  Projector,
  Rocket,
  Server,
  Settings,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TestTube,
  Trophy,
  Users,
  Zap,
  ProjectorIcon,
} from "lucide-react";

function Architectures() {
  const technologies = [
    {
      name: "HTML",
      description: "Сохтори веб",
      icon: FileCode2,
    },
    {
      name: "CSS",
      description: "Ороиши интерфейс",
      icon: Palette,
    },
    {
      name: "Tailwind CSS",
      description: "UI-и муосир",
      icon: Layers3,
    },
    {
      name: "JavaScript",
      description: "Мантиқ ва интерактивӣ",
      icon: Code2,
    },
    {
      name: "React",
      description: "Китобхонаи Frontend",
      icon: Network,
    },
  ];

  const learningSystem = [
    {
      title: "Дарсҳо",
      description: "Маводи таълимӣ ва мавзӯъҳо",
      icon: GraduationCap,
    },
    {
      title: "Тестҳо",
      description: "Санҷиши дониш",
      icon: TestTube,
    },
    {
      title: "Масъалаҳо",
      description: "Амалиёти барномасозӣ",
      icon: Target,
    },
    {
      title: "XP ва Level",
      description: "Пешрафт ва сатҳи корбар",
      icon: Trophy,
    },
  ];

  const platformParts = [
    {
      title: "Профил",
      description: "Маълумот ва пешрафти корбар",
      icon: Users,
    },
    {
      title: "Таърих",
      description: "Рушди технологияҳои Frontend",
      icon: Globe,
    },
    {
      title: "Макетҳо",
      description: "Кор бо Figma ва дизайн",
      icon: Projector,
    },
    {
      title: "Каналҳо",
      description: "Манбаъҳо ва ҷомеа",
      icon: MessageSquare,
    },
    {
      title: "Фактҳо",
      description: "Маълумоти ҷолиби технологӣ",
      icon: Sparkles,
    },
    {
      title: "Имкониятҳо",
      description: "Имкониятҳои рушди платформа",
      icon: Rocket,
    },
  ];

  const aiParts = [
    {
      title: "Ё-Aql",
      description: "AI Assistant",
      icon: Bot,
    },
    {
      title: "AI Lessons",
      description: "Тавсияи маводи омӯзишӣ",
      icon: BrainCircuit,
    },
    {
      title: "AI Evaluation",
      description: "Арзёбии ҷавобҳо",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-700">
        <div className="absolute inset-0 bg-white/5" />


        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Network size={17} />
              Архитектураи платформа
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Сохтори пурраи
              <span className="block text-blue-100">Ё-барномасоз</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-blue-100 sm:text-lg">
              Схемаи умумии платформа, самтҳои таълимӣ, технологияҳо, системаи
              омӯзиш, AI ва қисмҳои асосии экосистемаи Ё-барномасоз.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-3 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="rounded-3xl border border-blue-200 bg-white p-6 text-center shadow-xl shadow-blue-100">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
                <Laptop size={30} />
              </div>

              <h2 className="text-2xl font-extrabold text-slate-900">
                Ё-барномасоз
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Платформаи ягона барои омӯзиш, амалия ва рушди барномасозон
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                  Learning
                </span>
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                  Practice
                </span>
                <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-600">
                  AI
                </span>
              </div>
            </div>

            <div className="absolute left-1/2 top-full h-10 w-px -translate-x-1/2 bg-slate-300" />
          </div>
        </div>

        <section className="mt-16">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Level 01
            </span>

            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Самтҳои асосии платформа
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-slate-300 md:block" />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Ё-Фронтенд",
                  text: "Таҳияи интерфейс ва веб-барномаҳо",
                  icon: Monitor,
                  active: true,
                },
                {
                  title: "Ё-Бэкенд",
                  text: "Сервер, API ва маълумот",
                  icon: Server,
                },
                {
                  title: "Ё-Python",
                  text: "Барномасозии Python",
                  icon: Code2,
                },
                {
                  title: "Ё-C# / C++",
                  text: "Барномасозии системавӣ",
                  icon: Settings,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`relative z-10 rounded-2xl border bg-white p-5 shadow-sm transition ${
                      item.active
                        ? "border-blue-300 shadow-lg shadow-blue-100"
                        : "border-slate-200"
                    }`}
                  >
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
                        item.active
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <Icon size={23} />
                    </div>

                    <h3 className="font-bold text-slate-900">{item.title}</h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
              Level 02
            </span>

            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Ё-Фронтенд
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500">
              Самти ҳозираи фаъол, ки корбар аз он оғоз карда, технологияҳои
              Frontend-ро пай дар пай меомӯзад.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-200 lg:block" />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {technologies.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon size={21} />
                      </div>

                      <span className="text-xs font-bold text-slate-300">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900">{item.name}</h3>

                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
              Level 03
            </span>

            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Системаи омӯзиш
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-slate-200 lg:block" />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {learningSystem.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="relative z-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                        <Icon size={23} />
                      </div>

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-500">
                        {index + 1}
                      </span>
                    </div>

                    <h3 className="mt-4 font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50 p-5 text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-blue-700">
              <span>User</span>
              <ArrowRight size={17} />
              <span>Дарс</span>
              <ArrowRight size={17} />
              <span>Тест</span>
              <ArrowRight size={17} />
              <span>Масъала</span>
              <ArrowRight size={17} />
              <span>XP</span>
              <ArrowRight size={17} />
              <span>Level</span>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
               04
            </span>

            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Қисмҳои платформа
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {platformParts.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition group-hover:bg-blue-50 group-hover:text-blue-600">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>

                      <p className="mt-1 text-sm leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-20">
          <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6 sm:p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1.5 text-xs font-bold text-indigo-700">
                  <Bot size={15} />
                  AI SYSTEM
                </div>

                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  Қабати зеҳнии Ё-барномасоз
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Қисми AI-и платформа барои кӯмак ба омӯзиш, таҳлили ҷавобҳо,
                  тавсияи мавзӯъҳо ва ҳамкории интерактивӣ бо корбар истифода
                  мешавад.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:w-[560px]">
                {aiParts.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm backdrop-blur"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                        <Icon size={20} />
                      </div>

                      <h3 className="mt-3 text-sm font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Level 05
            </span>

            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Архитектураи техникии платформа
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Monitor size={23} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-900">Client</h3>

              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div className="rounded-lg bg-slate-50 px-3 py-2">React</div>
                <div className="rounded-lg bg-slate-50 px-3 py-2">
                  React Router
                </div>
                <div className="rounded-lg bg-slate-50 px-3 py-2">
                  Redux Toolkit
                </div>
                <div className="rounded-lg bg-slate-50 px-3 py-2">
                  Tailwind CSS
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Server size={23} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-900">Backend</h3>

              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div className="rounded-lg bg-slate-50 px-3 py-2">Node.js</div>
                <div className="rounded-lg bg-slate-50 px-3 py-2">
                  Express.js
                </div>
                <div className="rounded-lg bg-slate-50 px-3 py-2">REST API</div>
                <div className="rounded-lg bg-slate-50 px-3 py-2">
                  Authentication
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <Database size={23} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Data & Services
              </h3>

              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div className="rounded-lg bg-slate-50 px-3 py-2">Users</div>
                <div className="rounded-lg bg-slate-50 px-3 py-2">
                  Lessons / Tests / Tasks
                </div>
                <div className="rounded-lg bg-slate-50 px-3 py-2">
                  History / Facts
                </div>
                <div className="rounded-lg bg-slate-50 px-3 py-2">
                  AI Services
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Future
            </span>

            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Платформа дар чанд муҳит
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Web",
                description: "Версияи асосии веб",
                icon: Globe,
              },
              {
                title: "Desktop",
                description: "Барномаи компютерӣ",
                icon: Monitor,
              },
              {
                title: "Mobile",
                description: "Барномаи Android / Mobile",
                icon: Smartphone,
              },
              {
                title: "Bot",
                description: "Ёрдамчии ботӣ",
                icon: Bot,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-4 font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-20">
          <div className="rounded-3xl bg-slate-900 p-6 text-center sm:p-10">
            <div className="mx-auto max-w-3xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                <Zap size={27} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                Схемаи умумии кор
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Ҳамаи қисмҳои платформа ба як системаи ягона пайваст мешаванд.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold sm:text-sm">
                {[
                  "User",
                  "Ё-барномасоз",
                  "Technology",
                  "Lessons",
                  "Tests",
                  "Tasks",
                  "XP",
                  "Сатҳ",
                  "Пешравӣ",
                ].map((item, index, array) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="rounded-lg bg-white/10 px-3 py-2 text-slate-200">
                      {item}
                    </span>

                    {index !== array.length - 1 && (
                      <ArrowRight size={15} className="text-slate-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Architectures;
