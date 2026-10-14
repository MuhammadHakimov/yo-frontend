import { useEffect, useState } from "react";
import { Plus, BookOpen, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../config/api";

function AdminLessons() {
  const navigate = useNavigate();

  const [lessons, setLessons] = useState({});
  const [selectedTechnology, setSelectedTechnology] = useState("HTML");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const technologies = ["HTML", "CSS", "Tailwind", "JavaScript", "React"];

  const getToken = () => localStorage.getItem("token");
  

  useEffect(() => {
    const controller = new AbortController();

    const fetchLessons = async () => {
      try {
        setLoading(true);
        setError("");

        const token = getToken();

        const res = await fetch(`${API_URL}/api/lessons`, {
          headers: token
            ? { Authorization: `Bearer ${token}` }
            : {},
          signal: controller.signal,
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(
            data.message || "Хатогӣ ҳангоми гирифтани дарсҳо",
          );
        }

        setLessons(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Ба сервер пайваст шуда натавонист");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchLessons();

    return () => controller.abort();
  }, []);

  const currentLessons = lessons[selectedTechnology]?.lessons || [];

  const deleteLesson = async (id) => {
    try {
      setError("");

      const token = getToken();

      const res = await fetch(`${API_URL}/api/lessons/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          technology: selectedTechnology,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || "Хатогӣ ҳангоми нест кардани дарс",
        );
      }

      setLessons((prev) => ({
        ...prev,
        [selectedTechnology]: {
          ...prev[selectedTechnology],
          lessons: (prev[selectedTechnology]?.lessons || []).filter(
            (lesson) => String(lesson.id) !== String(id),
          ),
        },
      }));
    } catch (err) {
      setError(err.message || "Хатогӣ ҳангоми нест кардани дарс");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="mx-auto flex min-h-[400px] max-w-7xl items-center justify-center">
          <div className="text-sm font-medium text-slate-500">
            Дарсҳо бор шуда истодаанд...
          </div>
        </div>
      </div>
    );
  }

  if (error && Object.keys(lessons).length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-600">
            Хато рух дод: {error}
            <button
              onClick={() => window.location.reload()}
              className="mx-auto mt-4 block rounded-lg bg-red-600 px-4 py-2 text-white"
            >
              Аз нав кӯшиш кардан
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Дарсҳо</h1>
            <p className="mt-1 text-sm text-slate-500">
              Идоракунии дарсҳои платформа
            </p>
          </div>

          <button
            onClick={() =>
              navigate("/admin/add-lesson", {
                state: { technology: selectedTechnology },
              })
            }
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <Plus size={19} />
            Add
          </button>
        </div>

        {error && (
          <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {technologies.map((technology) => (
              <button
                key={technology}
                onClick={() => setSelectedTechnology(technology)}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  selectedTechnology === technology
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {technology}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Дарсҳои {selectedTechnology}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {lessons[selectedTechnology]?.description ||
                "Дарсҳои технологияи интихобшуда"}
            </p>
          </div>

          <div className="shrink-0 rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-600">
            {currentLessons.length} дарс
          </div>
        </div>

        {currentLessons.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <BookOpen
              className="mx-auto mb-4 text-slate-400"
              size={40}
            />
            <h3 className="text-lg font-semibold text-slate-800">
              Дарс ёфт нашуд
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Барои {selectedTechnology} ҳоло дарс мавҷуд нест.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {currentLessons.map((lesson) => (
              <div
                key={lesson.id}
                onClick={() =>
                  navigate(`/admin/les-details/${lesson.id}`, {
                    state: {
                      technology: selectedTechnology,
                      lesson,
                      edit: true,
                    },
                  })
                }
                className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <BookOpen size={21} />
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/admin/lesson-edit/${lesson.id}`, {
                          state: {
                            technology: selectedTechnology,
                            lesson,
                            edit: true,
                          },
                        });
                      }}
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
                      aria-label="Таҳрири дарс"
                    >
                      <Pencil size={17} />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteLesson(lesson.id);
                      }}
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
                      aria-label="Нест кардани дарс"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </div>

                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                    {selectedTechnology}
                  </span>
                  <span className="text-xs text-slate-400">
                    ID: {lesson.id}
                  </span>
                </div>

                <h3 className="mb-2 line-clamp-2 text-lg font-bold text-slate-900">
                  {lesson.title}
                </h3>

                <p className="mb-5 line-clamp-3 text-sm leading-6 text-slate-500">
                  {lesson.description}
                </p>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm text-slate-500">Мавзӯъҳо</span>
                  <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-600">
                    {lesson.topics?.length || 0}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminLessons;