import { useEffect, useState } from "react";
import {
  Code2,
  Palette,
  Braces,
  Wind,
  Atom,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  RotateCcw,
  Trophy,
  LoaderCircle,
} from "lucide-react";
import H2 from "../Typography/H2";
import P from "../Typography/P";
import { API_URL } from "../config/api";

const technologies = [
  {
    id: "html",
    name: "HTML",
    description: "Сохтори саҳифаҳои веб",
    icon: Code2,
    className:
      "border-orange-200 bg-orange-50 hover:border-orange-400 hover:bg-orange-100",
    iconClass: "bg-orange-500 text-white",
  },
  {
    id: "css",
    name: "CSS",
    description: "Дизайн ва намуди веб",
    icon: Palette,
    className:
      "border-blue-200 bg-blue-50 hover:border-blue-400 hover:bg-blue-100",
    iconClass: "bg-blue-500 text-white",
  },
  {
    id: "javascript",
    name: "JavaScript",
    description: "Мантиқ ва интерактивӣ",
    icon: Braces,
    className:
      "border-yellow-200 bg-yellow-50 hover:border-yellow-400 hover:bg-yellow-100",
    iconClass: "bg-yellow-400 text-slate-900",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    description: "UI бо utility classes",
    icon: Wind,
    className:
      "border-cyan-200 bg-cyan-50 hover:border-cyan-400 hover:bg-cyan-100",
    iconClass: "bg-cyan-500 text-white",
  },
  {
    id: "react",
    name: "React",
    description: "Сохтани интерфейсҳои муосир",
    icon: Atom,
    className: "border-sky-200 bg-sky-50 hover:border-sky-400 hover:bg-sky-100",
    iconClass: "bg-sky-600 text-white",
  },
];

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [technology, setTechnology] = useState("");
  const [taskIndex, setTaskIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [taskCount, setTaskCount] = useState(10);

  useEffect(() => {
    async function loadTasks() {
      setLoading(true);
      setError("");
      setTasks([]);
      setTaskIndex(0);
      setShowAnswer(false);

      try {
        const response = await fetch(
          `${API_URL}/api/tasks?technology=${technology}&count=${taskCount}`,
        );

        if (!response.ok) {
          throw new Error("Хатогӣ ҳангоми гирифтани масъалаҳо");
        }

        const data = await response.json();

        const selectedTasks = Array.isArray(data)
          ? data
          : data[technology.toUpperCase()] || [];

        setTasks(selectedTasks);
      } catch (err) {
        setTasks([]);
        setError(err.message || "Масъалаҳоро гирифтан имконнопазир аст.");
      } finally {
        setLoading(false);
      }
    }

    if (technology) {
      loadTasks();
    }
  }, [technology]);

  function chooseTechnology(value) {
    setTechnology(value);
    setTaskIndex(0);
    setShowAnswer(false);
    setError("");
  }

  function nextTask() {
    if (taskIndex + 1 >= tasks.length) {
      setTechnology("");
      setTasks([]);
      setTaskIndex(0);
      setShowAnswer(false);
      return;
    }

    setTaskIndex((previousIndex) => previousIndex + 1);
    setShowAnswer(false);
  }

  function changeTechnology() {
    setTechnology("");
    setTasks([]);
    setTaskIndex(0);
    setShowAnswer(false);
    setError("");
  }

  const task = tasks[taskIndex];

  if (!technology) {
    return (
      <main className="min-h-screen bg-slate-100 px-4 py-10">
        <div className="mx-auto max-w-5xl">
          <section className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 px-6 py-12 text-white sm:px-10">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                  <Trophy size={32} />
                </div>

                <H2 textColor="text-white">Масъалаҳоро оғоз кунед</H2>

                <H2 textColor="text-slate-300" size="text-[1rem]">
                  Технологияро интихоб кунед ва малакаҳои худро бо масъалаҳои
                  амалии худ санҷед.
                </H2>
              </div>
            </div>

            <div className="p-6 sm:p-10">
              <div className="mb-6 flex items-center justify-between gap-4">
                <P>Технологияро интихоб кунед</P>
                <select
                  value={taskCount}
                  onChange={(e) => setTaskCount(Number(e.target.value))}
                  className="cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-base font-black text-slate-800 outline-none transition hover:border-blue-300 hover:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                >
                  <option value={10}>10 савол</option>
                  <option value={15}>15 савол</option>
                  <option value={20}>20 савол</option>
                  <option value={25}>25 савол</option>
                  <option value={30}>30 савол</option>
                </select>
              </div>

              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {technologies.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => chooseTechnology(item.id)}
                      className={`group rounded-2xl border p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${item.className}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.iconClass}`}
                        >
                          <Icon size={24} />
                        </div>

                        <ArrowRight
                          size={20}
                          className="text-slate-400 transition-transform group-hover:translate-x-1"
                        />
                      </div>

                      <h3 className="mt-5 text-lg font-bold text-slate-900">
                        {item.name}
                      </h3>

                      <p className="mt-1 hidden text-sm text-slate-500 sm:inline-block">
                        {item.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-100 px-4 py-10">
        <div className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center">
          <div className="rounded-3xl bg-white px-10 py-12 text-center shadow-xl ring-1 ring-slate-200">
            <LoaderCircle
              size={42}
              className="mx-auto animate-spin text-blue-600"
            />

            <h2 className="mt-5 text-xl font-bold text-slate-900">
              Масъалаҳо бор шуда истодаанд
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Лутфан каме интизор шавед...
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-100 px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl bg-white p-8 text-center shadow-xl ring-1 ring-slate-200">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-xl font-bold text-red-600">
              !
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-900">
              Хатогӣ рӯй дод
            </h2>

            <p className="mt-2 text-sm text-red-500">{error}</p>

            <button
              onClick={changeTechnology}
              className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Тағйир додани технология
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (!task) {
    return (
      <main className="min-h-screen bg-slate-100 px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl bg-white p-8 text-center shadow-xl ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Масъалаҳо ёфт нашуданд
            </h2>

            <p className="mt-3 text-slate-500">
              Барои
              <span className="font-semibold text-slate-700">
                {technology.toUpperCase()}
              </span>
              ҳоло масъала мавҷуд нест.
            </p>

            <button
              onClick={changeTechnology}
              className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Интихоби технологияи дигар
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-5 flex items-center justify-between gap-3">
          <button
            onClick={changeTechnology}
            className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
          >
            <RotateCcw size={17} />
            Тағйир додани технология
          </button>

          <div className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200">
            {technology.toUpperCase()}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
          <div className="border-b border-slate-100 bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-6 text-white sm:px-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Масъала
                </span>

                <h1 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                  {task.title}
                </h1>
              </div>

              <div className="rounded-2xl bg-white/10 px-4 py-3 text-center backdrop-blur">
                <p className="text-xs text-blue-100">Пешрафт</p>

                <p className="mt-1 font-bold">
                  {taskIndex + 1} / {tasks.length}
                </p>
              </div>
            </div>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-white transition-all duration-300"
                style={{
                  width: `${((taskIndex + 1) / tasks.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-base leading-8 text-slate-600">
              {task.description}
            </p>

            {Array.isArray(task.requirements) &&
              task.requirements.length > 0 && (
                <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                    <CheckCircle2 size={20} className="text-blue-600" />
                    Талабот
                  </h2>

                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                    {task.requirements.map((requirement, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />

                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            <div className="mt-7 border-t border-slate-100 pt-6">
              <button
                onClick={() => setShowAnswer((value) => !value)}
                className="flex items-center gap-2 rounded-xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
              >
                {showAnswer ? (
                  <>
                    <EyeOff size={18} />
                    Пинҳон кардани ҷавоб
                  </>
                ) : (
                  <>
                    <Eye size={18} />
                    Нишон додани ҷавоб
                  </>
                )}
              </button>

              {showAnswer && (
                <pre className="mt-4 overflow-x-auto rounded-2xl bg-slate-950 p-5 text-sm leading-7 text-green-300 shadow-inner">
                    {task.answer}
                  </pre>
              )}
            </div>

            <div className="mt-7 flex justify-end border-t border-slate-100 pt-6">
              <button
                onClick={nextTask}
                className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-semibold text-white shadow-md transition hover:bg-green-700"
              >
                {taskIndex + 1 >= tasks.length
                  ? "Ба интихоби масъалаҳо"
                  : "Масъалаи навбатӣ"}

                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Tasks;
