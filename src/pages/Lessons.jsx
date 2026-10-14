import { useEffect, useState } from "react";
import { API_URL } from "../config/api";
import { useNavigate } from "react-router-dom";

function Lessons() {
  const [lessons, setLessons] = useState({});
  const [selectedTechnology, setSelectedTechnology] = useState("HTML");
  const [selectedLesson, setSelectedLesson] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/api/lessons`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Хатогӣ ҳангоми гирифтани дарсҳо");
        }

        return res.json();
      })
      .then((data) => {
        setLessons(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100">
        <p className="text-lg font-semibold text-slate-600">
          Дарсҳо бор шуда истодаанд...
        </p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100">
        <p className="text-lg font-semibold text-red-600">{error}</p>
      </main>
    );
  }

  const technology = lessons[selectedTechnology];

  const currentLesson = technology?.lessons?.[selectedLesson];

  const currentTopic = currentLesson?.topics?.[selectedTopic];

  function changeTechnology(technologyName) {
    setSelectedTechnology(technologyName);
    setSelectedLesson(0);
    setSelectedTopic(0);
  }

  function changeLesson(index) {
    setSelectedLesson(index);
    setSelectedTopic(0);
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-2 font-semibold uppercase tracking-wide text-blue-600">
            Ё-Frontend
          </p>

          <h1 className="text-4xl font-black tracking-tight">Дарсҳо</h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Технологияро интихоб кунед ва дарсҳои онро омӯзед.
          </p>
        </div>

        <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex justify-between">
            <h2 className="mb-4 text-xl font-bold">Интихоби технология</h2>
            <button
              onClick={() => navigate("/react-hooks")}
              className="mb-5 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-2.5 py-1.5  font-bold text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >
              Хукҳои реакт
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-200/30 blur-2xl transition-all duration-300 group-hover:scale-150" />
            </button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {Object.keys(lessons).map((technologyName) => {
              const isActive = selectedTechnology === technologyName;
              return (
                <button
                  key={technologyName}
                  onClick={() => changeTechnology(technologyName)}
                  className={`rounded-2xl border px-4 py-4 text-left font-bold transition ${
                    isActive
                      ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-200"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  {lessons[technologyName].title}
                </button>
              );
            })}
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-bold">
              Дарсҳои {technology?.title}
            </h2>

            {!technology?.lessons?.length ? (
              <div className="rounded-2xl bg-slate-100 p-4 text-sm text-slate-600">
                Барои ин технология ҳоло дарс омода нашудааст.
              </div>
            ) : (
              <div className="space-y-3">
                {technology.lessons.map((lesson, index) => {
                  const isActive = selectedLesson === index;

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => changeLesson(index)}
                      className={`w-full rounded-2xl border p-4 text-left transition ${
                        isActive
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                      }`}
                    >
                      <p className="text-sm font-bold">{lesson.title}</p>

                      <p className="mt-1 text-xs text-slate-500">
                        {lesson.topics.length} мавзӯъ
                      </p>
                    </button>
                  );
                })}
              </div>
            )}
          </aside>

          <section className="min-w-0">
            {!currentLesson ? (
              <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
                <h2 className="text-2xl font-bold">
                  Дарсҳо ҳоло омода нестанд
                </h2>

                <p className="mt-3 text-slate-600">
                  Барои ин технология ҳоло маълумоти дарс вуҷуд надорад.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 p-7 text-white shadow-lg">
                  <p className="mb-2 text-sm font-semibold text-blue-100">
                    {technology.title}
                  </p>

                  <h2 className="text-3xl font-black">{currentLesson.title}</h2>

                  <p className="mt-3 max-w-2xl text-blue-100">
                    {currentLesson.description}
                  </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-[230px_1fr]">
                  <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                    <h3 className="mb-3 font-bold">Мавзӯъҳои дарс</h3>

                    <div className="space-y-2">
                      {currentLesson.topics.map((topic, index) => {
                        const isActive = selectedTopic === index;

                        return (
                          <button
                            key={topic.id}
                            onClick={() => setSelectedTopic(index)}
                            className={`w-full rounded-xl px-3 py-3 text-left text-sm transition ${
                              isActive
                                ? "bg-blue-600 font-semibold text-white"
                                : "bg-slate-50 text-slate-700 hover:bg-blue-50"
                            }`}
                          >
                            {index + 1}. {topic.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <article className="min-w-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">
                        Мавзӯъ {selectedTopic + 1}
                      </span>

                      <span className="text-sm text-slate-500">
                        {selectedTopic + 1} / {currentLesson.topics.length}
                      </span>
                    </div>

                    <h2 className="text-2xl font-black">
                      {currentTopic.title}
                    </h2>

                    <div className="mt-6 space-y-6">
                      <section>
                        <h3 className="mb-2 text-lg font-bold">Маълумот</h3>

                        <p className="leading-8 text-slate-600">
                          {currentTopic.info}
                        </p>
                      </section>

                      <section>
                        <h3 className="mb-2 text-lg font-bold">Шарҳ</h3>

                        <p className="leading-8 text-slate-600">
                          {currentTopic.explanation}
                        </p>
                      </section>

                      {currentTopic.example && (
                        <section>
                          <h3 className="mb-2 text-lg font-bold">Мисол</h3>

                          <pre className="overflow-x-auto rounded-2xl bg-slate-900 p-5 text-sm leading-7 text-green-300">
                            {currentTopic.example}
                          </pre>
                        </section>
                      )}

                      {currentTopic.practice && (
                        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                          <h3 className="mb-2 font-bold text-amber-900">
                            Амалия
                          </h3>

                          <p className="text-sm leading-7 text-amber-800">
                            {currentTopic.practice}
                          </p>
                        </section>
                      )}

                      {currentTopic.video && (
                        <a
                          href={currentTopic.video}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex rounded-xl bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700"
                        >
                          Тамошои видеодарс
                        </a>
                      )}
                    </div>

                    <div className="mt-8 flex flex-wrap justify-between gap-3 border-t border-slate-200 pt-6">
                      <button
                        disabled={selectedTopic === 0}
                        onClick={() => setSelectedTopic((prev) => prev - 1)}
                        className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Мавзӯи гузашта
                      </button>

                      <button
                        disabled={
                          selectedTopic === currentLesson.topics.length - 1
                        }
                        onClick={() => setSelectedTopic((prev) => prev + 1)}
                        className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Мавзӯи баъдӣ
                      </button>
                    </div>
                  </article>
                </div>

                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4">
                    <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-bold text-violet-700">
                      Вазифаи хонагӣ
                    </span>

                    <h2 className="mt-3 text-2xl font-black">
                      {currentLesson.homework.title}
                    </h2>
                  </div>

                  <p className="leading-8 text-slate-600">
                    {currentLesson.homework.description}
                  </p>

                  <pre className="mt-5 overflow-x-auto rounded-2xl bg-slate-900 p-5 text-sm leading-7 text-green-300">
                    {currentLesson.homework.code}
                  </pre>
                </section>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default Lessons;
