import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Plus,
  Pencil,
  Trash2,
  FileQuestion,
  ChevronRight,
} from "lucide-react";
import { API_URL } from "../../../config/api";

function AdminTests() {
  const navigate = useNavigate();

  const [tests, setTests] = useState([]);
  const [activeTechnology, setActiveTechnology] = useState("html");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reRender, setReRender] = useState(0);

  const technologies = ["html", "css", "tailwind", "javascript", "react"];

  useEffect(() => {
    const fetchTests = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_URL}/api/tests?technology=${activeTechnology}`,
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Хатогӣ ҳангоми гирифтани тестҳо",
          );
        }

        setTests(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Fetch tests error:", error);
        setError(error.message || "Тестҳоро гирифтан имкон нашуд");
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, [activeTechnology, reRender]);

  const handleDelete = async (e, id) => {
    e.stopPropagation();

    try {
      const response = await fetch(`${API_URL}/api/tests/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Тест нест карда нашуд");
      }

      setTests((prev) =>
        prev.filter((test) => String(test.id) !== String(id)),
      );
    } catch (error) {
      console.error("Delete test error:", error);
      alert(error.message || "Тест нест карда нашуд");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Тестҳо</h1>
          <p className="mt-1 text-slate-500">
            Идоракунии тестҳои платформа
          </p>
        </div>

        <Link
          to="/admin/add-tests"
          className="mt-5 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
        >
          <Plus size={18} />
          Иловаи тест
        </Link>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {technologies.map((technology) => (
          <button
            key={technology}
            onClick={() => setActiveTechnology(technology)}
            className={`rounded-xl px-5 py-2.5 font-medium transition ${
              activeTechnology === technology
                ? "bg-blue-600 text-white shadow"
                : "bg-white text-slate-600 hover:bg-slate-100"
            }`}
          >
            {technology.charAt(0).toUpperCase() + technology.slice(1)}
          </button>
        ))}
      </div>

      {loading && (
        <div className="py-20 text-center text-slate-500">
          Тестҳо бор шуда истодаанд...
        </div>
      )}

      {!loading && error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
          <p className="font-medium text-red-600">{error}</p>

          <button
            onClick={() => setReRender((prev) => prev + 1)}
            className="mt-4 rounded-xl bg-red-600 px-5 py-2.5 font-medium text-white hover:bg-red-700"
          >
            Аз нав кӯшиш кардан
          </button>
        </div>
      )}

      {!loading && !error && tests.length === 0 && (
        <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white">
          <FileQuestion size={52} className="mb-4 text-slate-300" />

          <h2 className="text-xl font-semibold text-slate-700">
            Тестҳо нестанд
          </h2>

          <p className="mt-2 text-slate-500">
            Барои {activeTechnology} ҳоло тест илова нашудааст.
          </p>

          <Link
            to="/admin/add-tests"
            className="mt-5 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
          >
            <Plus size={18} />
            Иловаи тест
          </Link>
        </div>
      )}

      {!loading && !error && tests.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tests.map((test, index) => (
            <div
              onClick={() =>
                navigate(`/admin/test-details/${test.id}`)
              }
              key={test.id}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="cursor-pointer p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white">
                      <FileQuestion size={23} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                        {test.technology}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400">
                        Савол №{index + 1}
                      </p>
                    </div>
                  </div>

                  <span className="flex h-9 min-w-9 items-center justify-center rounded-xl bg-slate-100 px-3 text-sm font-bold text-slate-500 transition group-hover:bg-blue-50 group-hover:text-blue-600">
                    #{index + 1}
                  </span>
                </div>

                <div className="mb-5">
                  <p className="mb-2 text-xs font-medium text-slate-400">
                    САВОЛ
                  </p>

                  <h2 className="min-h-[64px] text-lg font-bold leading-7 text-slate-800 transition group-hover:text-blue-600">
                    {test.question}
                  </h2>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 transition group-hover:bg-blue-50/50">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      Вариантҳои ҷавоб
                    </span>

                    <span className="rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-slate-500 shadow-sm">
                      {test.options?.length || 0} вариант
                    </span>
                  </div>

                  <div className="space-y-2">
                    {test.options?.slice(0, 2).map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className="flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 text-sm text-slate-600 shadow-sm"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-500">
                          {String.fromCharCode(65 + optionIndex)}
                        </span>

                        <span className="truncate">{option}</span>
                      </div>
                    ))}

                    {test.options?.length > 2 && (
                      <p className="pt-1 text-center text-xs font-medium text-slate-400">
                        +{test.options.length - 2} варианти дигар
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    ID: {test.id}
                  </span>

                  <span className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-all group-hover:gap-2.5">
                    Тафсилот
                    <ChevronRight size={17} />
                  </span>
                </div>
              </div>

              <div className="flex border-t border-slate-100 bg-slate-50/50">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/admin/add-tests/${test.id}`, {
                      state: { test },
                    });
                  }}
                  className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                >
                  <Pencil size={17} />
                  Edit
                </button>

                <div className="w-px bg-slate-200" />

                <button
                  onClick={(e) => handleDelete(e, test.id)}
                  className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
                >
                  <Trash2 size={17} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminTests;