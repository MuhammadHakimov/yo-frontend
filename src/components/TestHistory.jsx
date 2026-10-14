import { useEffect, useState } from "react";
import { Clock, CalendarDays, Trophy, X } from "lucide-react";
import { API_URL } from "../config/api";

function TestHistory({ userId }) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const getHistory = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/tests/history/${userId}`
        );

        const data = await response.json();

        if (response.ok) {
          setHistory(data.history || []);
        } else {
          console.error("History error:", data);
        }
      } catch (error) {
        console.error("TEST HISTORY ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    getHistory();
  }, [userId]);

  const deleteHistory = async (id) => {
    try {
      setDeletingId(id);

      const response = await fetch(
        `${API_URL}/api/tests/history/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (response.ok) {
        setHistory((prev) =>
          prev.filter((test) => test.id !== id)
        );
      } else {
        console.error("Delete history error:", data);
      }
    } catch (error) {
      console.error("DELETE TEST HISTORY ERROR:", error);
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-slate-500">
          Таърихи тестҳо бор шуда истодааст...
        </p>
      </div>
    );
  }
  
if (history.length === 0) {
  return null;
}

return (
  <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Таърихи тестҳо
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Ҳамаи тестҳои супоридаи корбар
        </p>
      </div>

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
        <Trophy
          className="text-blue-600"
          size={24}
        />
      </div>
    </div>

    <div className="mt-6 space-y-4">
      {history.map((test) => {
        const date = new Date(test.createdAt);

        const dateText = date.toLocaleDateString("tg-TJ");

        const timeText = date.toLocaleTimeString("tg-TJ", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });

        return (
          <div
            key={test.id}
            className="group relative rounded-xl border border-slate-200 p-5 transition hover:bg-slate-50"
          >
            <button
              type="button"
              onClick={() => deleteHistory(test.id)}
              disabled={deletingId === test.id}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-500 opacity-0 transition-all duration-200 hover:bg-red-100 hover:text-red-600 group-hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-50"
              title="Удалить"
            >
              <X size={17} />
            </button>

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="pr-10">
                <h3 className="text-lg font-bold text-slate-800">
                  {test.testName}
                </h3>

                <p className="mt-1 text-sm text-blue-600">
                  {test.technology}
                </p>
              </div>

              <div className="flex flex-wrap gap-5">
                <div>
                  <p className="text-xs text-slate-400">
                    Натиҷа
                  </p>

                  <p className="font-bold text-slate-700">
                    {test.score} / {test.totalQuestions}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    XP
                  </p>

                  <p className="font-bold text-blue-600">
                    +{test.xp}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <CalendarDays size={14} />
                    Сана
                  </div>

                  <p className="font-semibold text-slate-700">
                    {dateText}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock size={14} />
                    Соат
                  </div>

                  <p className="font-semibold text-slate-700">
                    {timeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
}

export default TestHistory;