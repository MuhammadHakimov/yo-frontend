import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Plus, Save, Trash2 } from "lucide-react";
import { API_URL } from "../../../config/api";

function AddTasks() {
  const navigate = useNavigate();
  const { id, technology: routeTechnology } = useParams();

  const isEdit = Boolean(id);

  const [technology, setTechnology] = useState(routeTechnology || "HTML");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState([""]);
  const [answer, setAnswer] = useState("");
  const [xp, setXp] = useState(20);
  const [loading, setLoading] = useState(false);

  const technologies = ["HTML", "CSS", "Tailwind", "JavaScript", "React"];

  useEffect(() => {
    if (!isEdit) {
      setTechnology(routeTechnology || "HTML");
      return;
    }

    const getTask = async () => {
      try {
        setLoading(true);

        const response = await fetch(`${API_URL}/api/tasks/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch task");
        }

        const data = await response.json();

        setTechnology(data.technology || "HTML");
        setTitle(data.title || "");
        setDescription(data.description || "");
        setRequirements(data.requirements?.length ? data.requirements : [""]);
        setAnswer(data.answer || "");
        setXp(data.xp ?? 20);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getTask();
  }, [id, isEdit, routeTechnology]);

  const handleRequirementChange = (index, value) => {
    setRequirements((prev) =>
      prev.map((item, i) => (i === index ? value : item)),
    );
  };

  const addRequirement = () => {
    setRequirements((prev) => [...prev, ""]);
  };

  const removeRequirement = (index) => {
    setRequirements((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      return updated.length ? updated : [""];
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      technology,
      title,
      description,
      requirements: requirements.filter((item) => item.trim() !== ""),
      answer,
      xp: Number(xp),
    };

    try {
      setLoading(true);

      const response = await fetch(
        isEdit ? `${API_URL}/api/tasks/${id}` : `${API_URL}/api/tasks`,
        {
          method: isEdit ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to save task");
      }

      navigate("/admin/tasks");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading && isEdit && !title) {
    return (
      <div className="p-6">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-500 shadow-sm">
          Боргирӣ шуда истодааст...
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mx-auto max-w-4xl">
        <button
          onClick={() => navigate("/admin/tasks")}
          className="flex items-center gap-2 text-slate-600 transition hover:text-blue-600"
        >
          <ArrowLeft size={20} />
          Бозгашт ба масъалаҳо
        </button>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              {isEdit ? "Тағйир додани масъала" : "Иловаи масъала"}
            </h1>

            <p className="mt-2 text-slate-500">
              {isEdit
                ? "Маълумоти масъалаи интихобшударо тағйир диҳед."
                : "Масъалаи нави омӯзиширо илова кунед."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Технология
              </label>

              <div className="flex flex-wrap gap-3">
                {technologies.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTechnology(item)}
                    className={`rounded-xl px-5 py-2.5 font-medium transition ${
                      technology === item
                        ? "bg-blue-600 text-white"
                        : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Номи масъала
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Масалан: Корти шахсӣ"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Тавсиф
              </label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Тавсифи масъала..."
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <label className="font-medium text-slate-700">Талабот</label>

                <button
                  type="button"
                  onClick={addRequirement}
                  className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100"
                >
                  <Plus size={16} />
                  Илова
                </button>
              </div>

              <div className="space-y-3">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex gap-3">
                    <input
                      type="text"
                      value={requirement}
                      onChange={(e) =>
                        handleRequirementChange(index, e.target.value)
                      }
                      placeholder={`Талаботи ${index + 1}`}
                      className="flex-1 rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />

                    <button
                      type="button"
                      onClick={() => removeRequirement(index)}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-slate-400 transition hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 size={19} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Ҷавоб
              </label>

              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Коди ҷавобро ин ҷо нависед..."
                rows={12}
                required
                className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-mono text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isEdit ? <Save size={19} /> : <Plus size={19} />}
              {loading
                ? "Захира шуда истодааст..."
                : isEdit
                  ? "Захира кардани тағйирот"
                  : "Илова кардани масъала"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTasks;
