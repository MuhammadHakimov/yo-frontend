import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Atom,
  Code2,
  Palette,
  Paintbrush,
  Settings,
  ArrowRight,
  Target,
  Layers,
} from "lucide-react";

import TestHistory from "../components/TestHistory";
import TestComponent from "../components/TestComponent";
import H2 from "../Typography/H2";
import { API_URL } from "../config/api";
import { useNavigate } from "react-router-dom";

function Tests() {
  const user = useSelector((state) => state.registr.login);
  const navigate = useNavigate();

  const [tests, setTests] = useState({});
  const [loadingTests, setLoadingTests] = useState(true);
  const [technology, setTechnology] = useState("");
  const [questionCount, setQuestionCount] = useState(10);

  useEffect(() => {
    async function loadTests() {
      try {
        const response = await fetch(`${API_URL}/api/tests`);

        if (!response.ok) {
          throw new Error("Тестҳоро гирифтан нашуд");
        }

        const data = await response.json();

        const groupedTests = {};

        if (Array.isArray(data)) {
          data.forEach((test) => {
            if (!test?.technology) {
              return;
            }

            if (!groupedTests[test.technology]) {
              groupedTests[test.technology] = [];
            }

            groupedTests[test.technology].push({
              id: test.id,
              question: test.question,
              options: Array.isArray(test.options) ? test.options : [],
              answer: Number(test.answer),
              explanation: test.explanation || "",
            });
          });
        }
        setTests(groupedTests);
      } catch (error) {
        console.error("TESTS FETCH ERROR:", error);
        setTests({});
      } finally {
        setLoadingTests(false);
      }
    }

    loadTests();
  }, []);

  function imageOfTest(name) {
    if (name === "JavaScript") {
      return <Settings size={24} />;
    }

    if (name === "HTML") {
      return <Code2 size={24} />;
    }

    if (name === "CSS") {
      return <Paintbrush size={24} />;
    }

    if (name === "Tailwind") {
      return <Palette size={24} />;
    }

    if (name === "React") {
      return <Atom size={24} />;
    }

    return <Code2 size={24} />;
  }

  if (loadingTests) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

              <p className="mt-4 font-bold text-slate-500">
                Тестҳо бор шуда истодаанд...
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (technology) {
    return (
      <TestComponent
        questions={Array.isArray(tests[technology]) ? tests[technology] : []}
        technology={technology}
        testName={`${technology} Test`}
        questionCount={questionCount}
        onBack={() => setTechnology("")}
      />
    );
  }

  const technologyNames = Object.keys(tests);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <section className="mb-8 rounded-2xl border border-slate-200 border-l-4 border-l-blue-600 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
                <Target className="h-4 w-4" />
                <span>Модули арзёбии дониш</span>
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Донишатро санҷ, пешрафтатро бубин.
              </h1>

              <p className="pt-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                Ҳар як тест ба ту нишон медиҳад, ки чиро хуб медонӣ ва дар кадом
                мавзӯъҳо бояд бештар машқ кунӣ.
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-center gap-4 border-t border-slate-100 pt-4 md:items-end md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <Layers className="h-4 w-4 text-slate-400" />
                <span>5 Технология</span>
              </div>

              <button
                className="cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-base font-black text-slate-800 outline-none transition hover:border-blue-300 hover:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                onClick={() => navigate("/mistakes")}
              >
                Хатогиҳои ман
              </button>

              <select
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
                className="cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-base font-black text-slate-800 outline-none transition hover:border-blue-300 hover:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              >
                <option value={10}>10 савол</option>
                <option value={15}>15 савол</option>
                <option value={20}>20 савол</option>
                <option value={25}>25 савол</option>
                <option value={30}>30 савол</option>
              </select>
            </div>
          </div>
        </section>

        {technologyNames.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <p className="font-bold text-slate-500">
              Ҳоло тестҳо мавҷуд нестанд.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {technologyNames.map((name) => (
              <button
                key={name}
                onClick={() => setTechnology(name)}
                className="group rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  {imageOfTest(name)}
                </div>

                <H2>{name}</H2>

                <div>
                  <p className="mt-2 text-sm text-slate-500">
                    {Array.isArray(tests[name]) ? tests[name].length : 0} савол
                  </p>

                  <div className="flex items-center text-sm font-bold text-blue-600">
                    Оғози тест
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        <TestHistory userId={user?.id} />
      </div>
    </main>
  );
}

export default Tests;
