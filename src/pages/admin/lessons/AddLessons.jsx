import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { API_URL } from "../../../config/api";

function AddLessons() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [technology, setTechnology] = useState(
    location.state?.technology || "HTML",
  );

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [topics, setTopics] = useState([
    {
      title: "",
      info: "",
      explanation: "",
      example: "",
      practice: "",
      video: "",
    },
  ]);

  const [homework, setHomework] = useState({
    title: "Вазифаи хонагӣ",
    description: "",
    code: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isEdit) {
      return;
    }

    const loadLesson = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(`${API_URL}/api/lessons/${technology}/${id}`);

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Хатогӣ ҳангоми гирифтани дарс");
        }

        setTitle(data.title || "");
        setDescription(data.description || "");
        console.log(data.title);
        console.log(data.description);
        console.log(data.topics);

        setTopics(
          data.topics?.length
            ? data.topics.map((topic) => ({
                id: topic.id,
                title: topic.title || "",
                info: topic.info || "",
                explanation: topic.explanation || "",
                example: topic.example || "",
                practice: topic.practice || "",
                video: topic.video || "",
              }))
            : [
                {
                  title: "",
                  info: "",
                  explanation: "",
                  example: "",
                  practice: "",
                  video: "",
                },
              ],
        );

        setHomework({
          title: data.homework?.title || "Вазифаи хонагӣ",
          description: data.homework?.description || "",
          code: data.homework?.code || "",
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadLesson();
  }, [id, isEdit, technology]);

  const addTopic = () => {
    setTopics([
      ...topics,
      {
        title: "",
        info: "",
        explanation: "",
        example: "",
        practice: "",
        video: "",
      },
    ]);
  };

  const removeTopic = (index) => {
    setTopics(topics.filter((e, i) => i !== index));
  };

  const updateTopic = (index, field, value) => {
    setTopics(
      topics.map((topic, i) =>
        i === index ? { ...topic, [field]: value } : topic,
      ),
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const lesson = {
      title,
      description,
      topics: topics.map((topic, index) => ({
        ...topic,
        id: topic.id || `content_${index}`,
      })),
      homework,
    };

    try {
      const res = await fetch(
        isEdit ? `${API_URL}/api/lessons/${id}` : `${API_URL}/api/lessons`,
        {
          method: isEdit ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            technology,
            lesson,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Хатогӣ ҳангоми илова кардани дарс");
      }

      navigate("/admin/lessons");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate("/admin/lessons")}
            className="rounded-xl border border-slate-200 bg-white p-3 text-slate-600 transition hover:bg-slate-100"
          >
            <ArrowLeft size={20} />
          </button>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              {isEdit ? "Таҳрири дарс" : "Илова кардани дарс"}
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              {isEdit
                ? "Маълумоти дарсро тағйир диҳед"
                : "Дарси навро ба платформа илова кунед"}
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-slate-900">
              Маълумоти асосӣ
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Технология
                </label>

                <select
                  value={technology}
                  onChange={(e) => setTechnology(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                >
                  <option value="HTML">HTML</option>
                  <option value="CSS">CSS</option>
                  <option value="Tailwind">Tailwind</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="React">React</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Номи дарс
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Масалан: Дарси 1: Муқаддима ба HTML"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Тавсифи дарс
              </label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Тавсифи кӯтоҳи дарс..."
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Мавзӯъҳо</h2>

                <p className="mt-1 text-sm text-slate-500">
                  Мавзӯъҳои дохили дарсро илова кунед
                </p>
              </div>

              <button
                type="button"
                onClick={addTopic}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                <Plus size={18} />
                Мавзуъ
              </button>
            </div>

            <div className="space-y-6">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-bold text-slate-800">
                      Мавзӯъ {index + 1}
                    </h3>

                    {topics.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeTopic(index)}
                        className="rounded-lg p-2 text-red-500 transition hover:bg-red-50"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>

                  <div className="grid gap-5">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Номи мавзӯъ
                      </label>

                      <input
                        type="text"
                        value={topic.title}
                        onChange={(e) =>
                          updateTopic(index, "title", e.target.value)
                        }
                        placeholder="HTML чист?"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Info
                      </label>

                      <textarea
                        value={topic.info}
                        onChange={(e) =>
                          updateTopic(index, "info", e.target.value)
                        }
                        rows={3}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Explanation
                      </label>

                      <textarea
                        value={topic.explanation}
                        onChange={(e) =>
                          updateTopic(index, "explanation", e.target.value)
                        }
                        rows={4}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Example
                      </label>

                      <textarea
                        value={topic.example}
                        onChange={(e) =>
                          updateTopic(index, "example", e.target.value)
                        }
                        rows={7}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-mono text-sm outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Practice
                      </label>

                      <textarea
                        value={topic.practice}
                        onChange={(e) =>
                          updateTopic(index, "practice", e.target.value)
                        }
                        rows={3}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Video URL
                      </label>

                      <input
                        type="url"
                        value={topic.video}
                        onChange={(e) =>
                          updateTopic(index, "video", e.target.value)
                        }
                        placeholder="https://www.youtube.com/..."
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-5 text-lg font-bold text-slate-900">
              Вазифаи хонагӣ
            </h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Номи вазифа
                </label>

                <input
                  type="text"
                  value={homework.title}
                  onChange={(e) =>
                    setHomework({
                      ...homework,
                      title: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Тавсифи вазифа
                </label>

                <textarea
                  value={homework.description}
                  onChange={(e) =>
                    setHomework({
                      ...homework,
                      description: e.target.value,
                    })
                  }
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Code
                </label>

                <textarea
                  value={homework.code}
                  onChange={(e) =>
                    setHomework({
                      ...homework,
                      code: e.target.value,
                    })
                  }
                  rows={12}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 font-mono text-sm outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? isEdit
                  ? "Сабт шуда истодааст..."
                  : "Илова шуда истодааст..."
                : isEdit
                  ? "Сабти тағйирот"
                  : "Илова кардани дарс"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddLessons;
