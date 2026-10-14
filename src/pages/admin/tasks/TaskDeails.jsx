import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Pencil, FileText, Trash2 } from "lucide-react";
import { API_URL } from "../../../config/api";

function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTask = async () => {
      try {
        const response = await fetch(`${API_URL}/api/tasks/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch task");
        }

        const data = await response.json();
        setTask(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getTask();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`${API_URL}/api/tasks/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      navigate("/admin/tasks");
    } catch (error) {
      console.error("Delete test error:", error);
    }
  };
  if (loading) {
    return (
      <div className="p-6">
        <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-500 shadow-sm">
          Боргирӣ шуда истодааст...
        </div>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="p-6">
        <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">
            Масъала ёфт нашуд
          </h2>

          <button
            onClick={() => navigate("/admin/tasks")}
            className="mt-5 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
          >
            Бозгашт
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => navigate("/admin/tasks")}
            className="flex items-center gap-2 text-slate-600 transition hover:text-blue-600"
          >
            <ArrowLeft size={20} />
            Бозгашт ба масъалаҳо
          </button>

          <button
            onClick={() =>
              navigate(
                `/admin/tasks/add?edit=${task.id}&technology=${task.technology || "HTML"}`,
              )
            }
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            <Pencil size={18} />
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

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FileText size={24} />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-bold text-slate-900">
                  {task.title}
                </h1>
              </div>

              <p className="mt-2 text-sm text-slate-400">ID: {task.id}</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-slate-900">
              Тавсифи масъала
            </h2>

            <p className="mt-3 leading-7 text-slate-600">{task.description}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-slate-900">Талабот</h2>

            <div className="mt-4 space-y-3">
              {task.requirements?.map((requirement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-slate-700"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-sm font-semibold text-blue-600">
                    {index + 1}
                  </span>

                  {requirement}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-slate-900">Ҷавоб</h2>

            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-sm leading-7 text-slate-100">
              <code>{task.answer}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
