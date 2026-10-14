import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Code2,
  User,
  BookOpen,
} from "lucide-react";
import { API_URL } from "../../config/api";

function HistoryDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getHistoryDetails = async () => {
      try {
        const response = await fetch(`${API_URL}/api/history/${id}`);

        if (!response.ok) {
          throw new Error("Маълумоти таърихӣ ёфт нашуд");
        }

        const data = await response.json();
        setItem(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getHistoryDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex items-center gap-3 text-slate-600">
          <div className="w-6 h-6 border-2 border-slate-300 border-t-blue-600 rounded-full animate-spin" />
          <span>Маълумот бор шуда истодааст...</span>
        </div>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white border border-red-200 rounded-2xl p-6 text-center">
          <div className="text-red-500 font-semibold mb-3">
            Маълумот ёфт нашуд
          </div>

          <p className="text-sm text-slate-500 mb-5">{error}</p>

          <button
            onClick={() => navigate("/history")}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <ArrowLeft size={18} />
            Бозгашт
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600">
        <div className="absolute inset-0 bg-white/5" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <button
            onClick={() => navigate("/history")}
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition"
          >
            <ArrowLeft size={20} />
            Бозгашт ба таърих
          </button>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm">
              <Calendar size={17} />
              {item.year}
            </span>

            {item.category && (
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm">
                {item.category}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            {item.title}
          </h1>

          {item.person && (
            <div className="flex items-center gap-2 mt-6 text-blue-100">
              <User size={19} />
              <span>{item.person}</span>
            </div>
          )}
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-8">
          <article className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                <BookOpen className="text-blue-600" size={24} />
              </div>

              <div>
                <p className="text-sm text-slate-500">Маълумоти пурра</p>

                <h2 className="text-xl font-bold text-slate-800">
                  Дар бораи ин рӯйдод
                </h2>
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 leading-8">
                {item.description}
              </p>
            </div>
            {item.fullDescription && (
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Маълумоти пурра
                </h3>

                <p className="text-slate-600 leading-8 whitespace-pre-line">
                  {item.fullDescription}
                </p>
              </div>
            )}
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-bold text-slate-800 mb-5">Маълумоти асосӣ</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Calendar size={18} className="text-blue-600" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Сол</p>

                    <p className="font-semibold text-slate-700">{item.year}</p>
                  </div>
                </div>

                {item.technology && (
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Code2 size={18} className="text-blue-600" />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">Технология</p>

                      <p className="font-semibold text-slate-700">
                        {item.technology}
                      </p>
                    </div>
                  </div>
                )}

                {item.person && (
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <User size={18} className="text-blue-600" />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">Шахс</p>

                      <p className="font-semibold text-slate-700">
                        {item.person}
                      </p>
                    </div>
                  </div>
                )}

                {item.category && (
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-blue-600" />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">Категория</p>

                      <p className="font-semibold text-slate-700">
                        {item.category}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => navigate("/history")}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium hover:border-blue-300 hover:text-blue-600 transition"
            >
              <ArrowLeft size={18} />
              Ҳамаи таърих
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default HistoryDetails;
