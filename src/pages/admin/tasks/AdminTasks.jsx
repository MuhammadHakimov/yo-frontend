import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Pencil,
  Trash2,
  FileText,
  ChevronRight,
} from "lucide-react";
import { API_URL } from "../../../config/api";

function AdminTasks() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [technology, setTechnology] = useState("HTML");
  const [loading, setLoading] = useState(true);

  const technologies = ["HTML", "CSS", "Tailwind", "JavaScript", "React"];

  const getTasks = useCallback(async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${API_URL}/api/tasks?technology=${technology}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }

      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [technology]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/tasks/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      await getTasks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Масъалаҳо
            </h1>

            <p className="mt-2 text-slate-500">
              Масъалаҳои омӯзиширо идора кунед.
            </p>
          </div>

          <button
            onClick={() => navigate(`/admin/add-task/${technology}`)}
            className="flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            <Plus size={20} />
            Иловаи масъала
          </button>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {technologies.map((item) => (
            <button
              key={item}
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

        <div className="mt-6">
          {loading ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-500 shadow-sm">
              Боргирӣ шуда истодааст...
            </div>
          ) : tasks.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
              <FileText
                size={42}
                className="mx-auto text-slate-300"
              />

              <h2 className="mt-4 text-xl font-semibold text-slate-800">
                Масъала вуҷуд надорад
              </h2>

              <p className="mt-2 text-slate-500">
                Барои {technology} ҳоло масъала илова нашудааст.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() =>
                    navigate(`/admin/task-details/${task.id}`)
                  }
                  className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <FileText size={22} />
                    </div>
                  </div>

                  <h2 className="mt-5 line-clamp-1 text-xl font-bold text-slate-900">
                    {task.title}
                  </h2>

                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
                    {task.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-sm text-slate-400">
                      ID: {task.id}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/admin/edit-task/${task.id}`);
                        }}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
                        title="Тағйир додан"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(task.id);
                        }}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-red-50 hover:text-red-600"
                        title="Нест кардан"
                      >
                        <Trash2 size={18} />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/admin/task-details/${task.id}`);
                        }}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                        title="Дидан"
                      >
                        <ChevronRight size={19} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminTasks;