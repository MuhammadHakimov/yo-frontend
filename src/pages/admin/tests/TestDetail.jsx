import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Circle,
  FileQuestion,
  Pencil,
  Trash2,
} from "lucide-react";
import { API_URL } from "../../../config/api";

function TestDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTest = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_URL}/api/tests/${id}`);

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Тест ёфт нашуд");
        }

        setTest(data);
      } catch (error) {
        console.error("Fetch test error:", error);
        setError(error.message || "Тестро гирифтан имкон нашуд");
      } finally {
        setLoading(false);
      }
    };

    fetchTest();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`${API_URL}/api/tests/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Тест нест карда нашуд");
      }

      navigate("/admin/tests");
    } catch (error) {
      console.error("Delete test error:", error);
      alert(error.message || "Тест нест карда нашуд");
    }
  };

  const handleEdit = () => {
    navigate(`/admin/add-tests?edit=${test.id}`, {
      state: {
        test,
        technology: test.technology,
      },
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-8">
        <div className="mx-auto flex min-h-[500px] max-w-4xl items-center justify-center">
          <div className="flex items-center gap-3 text-slate-500">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-blue-600" />
            <span className="text-sm">Тест бор шуда истодааст...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error || !test) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <button
            onClick={() => navigate("/admin/tests")}
            className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            <ArrowLeft size={17} />
            Бозгашт ба тестҳо
          </button>

          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-500">
              <FileQuestion size={27} />
            </div>

            <h2 className="text-xl font-semibold text-slate-800">
              Тест ёфт нашуд
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {error || "Ин тест вуҷуд надорад."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-7 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <button
            onClick={() => navigate("/admin/tests")}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            <ArrowLeft size={17} />
            Бозгашт
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleEdit}
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <Pencil size={16} />
              Тағйир додан
            </button>

            <button
              onClick={handleDelete}
              className="flex items-center gap-2 rounded-lg border border-red-100 bg-white px-3.5 py-2 text-sm font-medium text-red-500 shadow-sm transition hover:bg-red-50"
            >
              <Trash2 size={16} />
              Нест кардан
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-6 md:px-7">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FileQuestion size={22} />
              </div>

              <div className="min-w-0">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                    {test.technology}
                  </span>

                  <span className="text-xs text-slate-400">ID: {test.id}</span>
                </div>

                <h1 className="text-xl font-semibold text-slate-800 md:text-2xl">
                  Тафсилоти тест
                </h1>
              </div>
            </div>
          </div>

          <div className="px-5 py-7 md:px-7">
            <section>
              <div className="mb-3 flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-800">
                  Савол
                </span>

                <span className="text-xs text-slate-400">Question</span>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4">
                <p className="text-base font-medium leading-7 text-slate-800 md:text-lg">
                  {test.question}
                </p>
              </div>
            </section>

            <section className="mt-8">
              <div className="mb-4 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-sm font-semibold text-slate-800">
                    Вариантҳои ҷавоб
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    Ҷавоби дуруст бо аломати сабз нишон дода шудааст
                  </p>
                </div>

                <span className="text-xs text-slate-400">
                  {test.options?.length || 0} вариант
                </span>
              </div>

              <div className="space-y-2.5">
                {test.options?.map((option, index) => {
                  const isCorrect = Number(test.answer) === index;

                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 ${
                        isCorrect
                          ? "border-emerald-200 bg-emerald-50/70"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${
                          isCorrect
                            ? "bg-emerald-500 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </div>

                      <span
                        className={`flex-1 text-sm ${
                          isCorrect
                            ? "font-medium text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {option}
                      </span>

                      {isCorrect ? (
                        <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                          <Check size={17} />
                          Дуруст
                        </div>
                      ) : (
                        <Circle size={17} className="text-slate-200" />
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {test.explanation && (
              <section className="mt-8 border-t border-slate-100 pt-7">
                <h2 className="mb-3 text-sm font-semibold text-slate-800">
                  Шарҳи ҷавоб
                </h2>

                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4">
                  <p className="text-sm leading-6 text-slate-600">
                    {test.explanation}
                  </p>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestDetails;
