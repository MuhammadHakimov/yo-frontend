import { useEffect, useState } from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import {
  ArrowLeft,
  Check,
  ChevronDown,
  FileQuestion,
  Save,
} from "lucide-react";

import { API_URL } from "../../../config/api";

const technologies = ["HTML", "CSS", "Tailwind", "JavaScript", "React"];

const emptyForm = {
  technology: "HTML",
  question: "",
  options: ["", "", "", ""],
  answer: 0,
  explanation: "",
};

function AddTests() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id: editId } = useParams();
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [loadingTest, setLoadingTest] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const isEdit = Boolean(editId);

  useEffect(() => {
    if (!editId) {
      setForm(emptyForm);
      setError("");
      setSuccess("");
      return;
    }
    const stateTest = location.state?.test;

    if (stateTest) {
      setForm({
        technology: stateTest.technology || "HTML",

        question: stateTest.question || "",

        options: [
          stateTest.options?.[0] || "",
          stateTest.options?.[1] || "",
          stateTest.options?.[2] || "",
          stateTest.options?.[3] || "",
        ],
        answer: Number(stateTest.answer ?? 0),
        explanation: stateTest.explanation || "",
      });
      return;
    }

    const fetchTest = async () => {
      try {
        setLoadingTest(true);

        setError("");

        const response = await fetch(`${API_URL}/api/tests/${editId}`);

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Тест ёфт нашуд");
        }

        setForm({
          technology: data.technology || "HTML",

          question: data.question || "",

          options: [
            data.options?.[0] || "",

            data.options?.[1] || "",

            data.options?.[2] || "",

            data.options?.[3] || "",
          ],

          answer: Number(data.answer ?? 0),

          explanation: data.explanation || "",
        });
      } catch (error) {
        console.error("Fetch test error:", error);

        setError(error.message || "Тестро гирифтан имкон нашуд");
      } finally {
        setLoadingTest(false);
      }
    };

    fetchTest();
  }, [editId, location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,

      [name]: value,
    }));

    setError("");

    setSuccess("");
  };

  const handleOptionChange = (index, value) => {
    setForm((prev) => ({
      ...prev,

      options: prev.options.map((option, i) => (i === index ? value : option)),
    }));

    setError("");

    setSuccess("");
  };

  const handleAnswerChange = (index) => {
    setForm((prev) => ({
      ...prev,

      answer: index,
    }));

    setError("");

    setSuccess("");
  };

  const validateForm = () => {
    if (!form.technology) {
      return "Технологияро интихоб кунед";
    }

    if (!form.question.trim()) {
      return "Саволро нависед";
    }

    const emptyOption = form.options.some((option) => !option.trim());

    if (emptyOption) {
      return "Ҳамаи вариантҳои ҷавобро пур кунед";
    }

    if (form.answer < 0 || form.answer >= form.options.length) {
      return "Ҷавоби дурустро интихоб кунед";
    }

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    setSuccess("");

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);

      return;
    }

    try {
      setLoading(true);

      const payload = {
        technology: form.technology,

        question: form.question.trim(),

        options: form.options.map((option) => option.trim()),

        answer: Number(form.answer),

        explanation: form.explanation.trim(),
      };

      const url = isEdit
        ? `${API_URL}/api/tests/${editId}`
        : `${API_URL}/api/tests`;

      const response = await fetch(url, {
        method: isEdit ? "PUT" : "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            (isEdit ? "Тест тағйир дода нашуд" : "Тест илова карда нашуд"),
        );
      }

      setSuccess(
        isEdit
          ? "Тест бомуваффақият тағйир дода шуд"
          : "Тест бомуваффақият илова шуд",
      );

      setTimeout(() => {
        navigate("/admin/tests");
      }, 1000);
    } catch (error) {
      console.error("Save test error:", error);

      setError(
        error.message ||
          (isEdit ? "Тест тағйир дода нашуд" : "Тест илова карда нашуд"),
      );
    } finally {
      setLoading(false);
    }
  };

  if (loadingTest) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-8">
        <div className="mx-auto flex min-h-[500px] max-w-3xl items-center justify-center">
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-blue-600" />
            Тест бор шуда истодааст...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-7 md:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => navigate("/admin/tests")}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            <ArrowLeft size={17} />
            Бозгашт
          </button>

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <FileQuestion size={17} />

            {isEdit ? "Тағйири тест" : "Тести нав"}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-6 md:px-7">
            <h1 className="text-xl font-semibold text-slate-800">
              {isEdit ? "Тағйири савол" : "Иловаи саволи нав"}
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              {isEdit
                ? "Маълумоти саволро тағйир диҳед."
                : "Маълумоти саволи навро ворид кунед."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-5 py-6 md:px-7">
            {error && (
              <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-600">
                {success}
              </div>
            )}

            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Технология
              </label>

              <div className="relative">
                <select
                  name="technology"
                  value={form.technology}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3.5 py-3 pr-10 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  {technologies.map((technology) => (
                    <option key={technology} value={technology}>
                      {technology}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={17}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>
            </div>

            <div className="mb-7">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Савол
              </label>

              <textarea
                name="question"
                value={form.question}
                onChange={handleChange}
                rows={4}
                placeholder="Масалан: HTML барои чӣ истифода мешавад?"
                className="w-full resize-none rounded-lg border border-slate-200 px-3.5 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mb-7">
              <div className="mb-3">
                <label className="text-sm font-medium text-slate-700">
                  Вариантҳои ҷавоб
                </label>

                <p className="mt-1 text-xs text-slate-400">
                  Ҷавоби дурустро бо пахши тугмаи тарафи рост интихоб кунед.
                </p>
              </div>

              <div className="space-y-3">
                {form.options.map((option, index) => {
                  const isCorrect = Number(form.answer) === index;

                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-3 rounded-lg border p-2 transition ${
                        isCorrect
                          ? "border-emerald-300 bg-emerald-50/50"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-sm font-semibold ${
                          isCorrect
                            ? "bg-emerald-500 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </div>

                      <input
                        type="text"
                        value={option}
                        onChange={(e) =>
                          handleOptionChange(index, e.target.value)
                        }
                        placeholder={`Варианти ${String.fromCharCode(
                          65 + index,
                        )}`}
                        className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                      />

                      <button
                        type="button"
                        onClick={() => handleAnswerChange(index)}
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border transition ${
                          isCorrect
                            ? "border-emerald-500 bg-emerald-500 text-white"
                            : "border-slate-200 bg-white text-slate-300 hover:border-emerald-300 hover:text-emerald-500"
                        }`}
                        title="Ҷавоби дуруст"
                      >
                        <Check size={17} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mb-7">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Шарҳ
                <span className="ml-2 text-xs font-normal text-slate-400">
                  ихтиёрӣ
                </span>
              </label>

              <textarea
                name="explanation"
                value={form.explanation}
                onChange={handleChange}
                rows={4}
                placeholder="Шарҳи кӯтоҳи ҷавоби дуруст..."
                className="w-full resize-none rounded-lg border border-slate-200 px-3.5 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => navigate("/admin/tests")}
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
              >
                Бекор кардан
              </button>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Нигоҳ доштан...
                  </>
                ) : (
                  <>
                    <Save size={17} />

                    {isEdit ? "Нигоҳ доштани тағйирот" : "Илова кардани тест"}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTests;
