import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, Video, Code2, ClipboardList } from "lucide-react";

function LesDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const { lesson, technology, edit } = location.state || {};

  if (!lesson) {
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-600">
            Маълумоти дарс дастрас нест.
          </div>

          <button
            onClick={() => navigate(-1)}
            className="mt-4 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:bg-slate-100"
          >
            <ArrowLeft size={18} />
            Бозгашт
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:bg-slate-100"
        >
          <ArrowLeft size={18} />
          Бозгашт
        </button>

        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-600">
              {technology}
            </span>

            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-500">
              ID: {lesson.id}
            </span>

            {edit && (
              <span className="rounded-lg bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-600">
                Ҳолати тағйир
              </span>
            )}
          </div>

          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {lesson.title}
          </h1>

          <p className="mt-3 leading-7 text-slate-500">
            {lesson.description}
          </p>
        </div>

        <div className="space-y-6">
          {lesson.topics?.map((topic, index) => (
            <div
              key={topic.id ?? index}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-600">
                  {index + 1}
                </div>

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Мавзӯъ
                  </p>

                  <h2 className="text-xl font-bold text-slate-900">
                    {topic.title}
                  </h2>
                </div>
              </div>

              {topic.info && (
                <div className="mb-5">
                  <h3 className="mb-2 font-semibold text-slate-800">
                    Маълумот
                  </h3>

                  <p className="leading-7 text-slate-600">
                    {topic.info}
                  </p>
                </div>
              )}

              {topic.explanation && (
                <div className="mb-5">
                  <h3 className="mb-2 font-semibold text-slate-800">
                    Шарҳ
                  </h3>

                  <p className="leading-7 text-slate-600">
                    {topic.explanation}
                  </p>
                </div>
              )}

              {topic.example && (
                <div className="mb-5">
                  <div className="mb-2 flex items-center gap-2">
                    <Code2 size={18} className="text-blue-600" />

                    <h3 className="font-semibold text-slate-800">
                      Example
                    </h3>
                  </div>

                  <pre className="overflow-x-auto rounded-xl bg-slate-950 p-5 text-sm leading-6 text-slate-200">
                    <code>{topic.example}</code>
                  </pre>
                </div>
              )}

              {topic.practice && (
                <div className="mb-5 rounded-xl bg-amber-50 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <ClipboardList size={18} className="text-amber-600" />

                    <h3 className="font-semibold text-amber-800">
                      Амалия
                    </h3>
                  </div>

                  <p className="leading-7 text-amber-700">
                    {topic.practice}
                  </p>
                </div>
              )}

              {topic.video && (
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Video size={18} className="text-red-600" />

                    <h3 className="font-semibold text-slate-800">
                      Видео
                    </h3>
                  </div>

                  <a
                    href={topic.video}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-xl bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                  >
                    Дидани видео
                  </a>
                </div>
              )}
            </div>
          ))}

          {lesson.homework && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <BookOpen size={21} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Homework
                  </p>

                  <h2 className="text-xl font-bold text-slate-900">
                    {lesson.homework.title}
                  </h2>
                </div>
              </div>

              <p className="mb-5 leading-7 text-slate-600">
                {lesson.homework.description}
              </p>

              {lesson.homework.code && (
                <pre className="overflow-x-auto rounded-xl bg-slate-950 p-5 text-sm leading-6 text-slate-200">
                  <code>{lesson.homework.code}</code>
                </pre>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LesDetails;