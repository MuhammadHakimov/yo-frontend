import { useEffect, useRef, useState } from "react";
import { Calendar, ChevronRight, Clock, Code2, User } from "lucide-react";
import { API_URL } from "../../config/api";
import { useNavigate } from "react-router-dom";

function History() {
  const [history, setHistory] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const itemRefs = useRef({});
  const timelineRef = useRef(null);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const response = await fetch(`${API_URL}/api/history`);

        if (!response.ok) {
          throw new Error("Маълумотро гирифтан нашуд");
        }

        const data = await response.json();
        const sortedData = [...data].sort((a, b) => a.year - b.year);

        setHistory(sortedData);

        if (sortedData.length > 0) {
          setSelected(sortedData[0]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getHistory();
  }, []);

  const selectHistory = (item) => {
    setSelected(item);

    setTimeout(() => {
      const element = itemRefs.current[item.id];

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 50);
  };

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

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white border border-red-200 rounded-2xl p-6 text-center">
          <div className="text-red-500 mb-3">Маълумотро гирифтан нашуд</div>

          <p className="text-sm text-slate-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600">
        <div className="absolute inset-0 bg-white/5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm mb-6">
              <Clock size={17} />
              Таърихи Frontend
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Саёҳат дар таърихи
              <span className="block text-blue-100">Frontend</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
              Аз пайдоиши World Wide Web то технологияҳои муосири Frontend.
              Ҳодисаҳо ва технологияҳои муҳимро аз рӯи сол омӯзед.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-[90px_minmax(0,1fr)] sm:grid-cols-[150px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)] gap-3 sm:gap-5 lg:gap-8">
          <aside className="sticky top-24 self-start">
            <div className="relative bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-3 sm:px-5 pt-4 sm:pt-5 pb-3 sm:pb-4">
                <div className="flex items-center gap-2">
                  <Calendar
                    size={17}
                    className="text-blue-600 shrink-0"
                  />
                  <h2 className="font-bold text-slate-800 text-xs sm:text-base">
                    Timeline
                  </h2>
                </div>
              </div>

              <div className="relative h-[420px] sm:h-[500px]">
                <div
                  ref={timelineRef}
                  className="h-full overflow-y-auto px-1 sm:px-3 pb-6 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent"
                >
                  <div className="relative pt-2">
                    <div className="absolute left-[13px] sm:left-[17px] top-3 bottom-3 w-px bg-slate-200" />

                    <div className="space-y-2">
                      {history.map((item) => {
                        const active = selected?.id === item.id;

                        return (
                          <button
                            key={item.id}
                            onClick={() => selectHistory(item)}
                            className={`relative w-full flex items-center gap-2 sm:gap-4 text-left px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all ${
                              active
                                ? "bg-blue-50 text-blue-700"
                                : "text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            <span
                              className={`relative z-10 flex-shrink-0 flex items-center justify-center w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 bg-white ${
                                active
                                  ? "border-blue-600"
                                  : "border-slate-300"
                              }`}
                            >
                              {active && (
                                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-600" />
                              )}
                            </span>

                            <span className="font-semibold text-[10px] sm:text-sm">
                              {item.year}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white via-white/80 to-transparent" />

                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent" />
              </div>
            </div>
          </aside>

          <section className="min-w-0">
            <div className="relative">
              <div className="relative h-[650px] sm:h-[700px] overflow-hidden rounded-2xl sm:rounded-3xl">
                <div className="h-full overflow-y-auto pr-1 sm:pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                  <div className="relative space-y-4 sm:space-y-8 py-4 sm:py-8">
                    <div className="absolute left-4 sm:left-6 top-6 sm:top-8 bottom-6 sm:bottom-8 w-px bg-slate-200" />

                    {history.map((item) => {
                      const active = selected?.id === item.id;

                      return (
                        <div
                          key={item.id}
                          ref={(element) => {
                            itemRefs.current[item.id] = element;
                          }}
                          className="relative pl-9 sm:pl-16 scroll-mt-20"
                        >
                          <button
                            onClick={() => selectHistory(item)}
                            className={`absolute left-0 top-1 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-4 border-slate-50 transition-all ${
                              active
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                                : "bg-white text-slate-400 border border-slate-200"
                            }`}
                          >
                            <Clock
                              size={14}
                              className="sm:hidden"
                            />
                            <Clock
                              size={18}
                              className="hidden sm:block"
                            />
                          </button>

                          <button
                            onClick={() => selectHistory(item)}
                            className={`w-full text-left bg-white rounded-xl sm:rounded-2xl border transition-all p-3 sm:p-6 ${
                              active
                                ? "border-blue-300 shadow-lg shadow-blue-100"
                                : "border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"
                            }`}
                          >
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                              <span className="text-xl sm:text-3xl font-bold text-blue-600">
                                {item.year}
                              </span>

                              <span className="px-2 sm:px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] sm:text-xs font-medium">
                                {item.category}
                              </span>
                            </div>

                            <h3 className="text-base sm:text-xl md:text-2xl font-bold text-slate-800 mb-2 sm:mb-3">
                              {item.title}
                            </h3>

                            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
                              {item.description}
                            </p>

                            <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-5 text-[10px] sm:text-sm text-slate-500">
                              {item.technology && (
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                  <Code2
                                    size={14}
                                    className="text-blue-600"
                                  />
                                  <span>{item.technology}</span>
                                </div>
                              )}

                              {item.person && (
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                  <User
                                    size={14}
                                    className="text-blue-600"
                                  />
                                  <span>{item.person}</span>
                                </div>
                              )}
                            </div>

                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/history/${item.id}`);
                              }}
                              className="flex items-center gap-1 mt-4 sm:mt-6 text-blue-600 font-medium text-xs sm:text-sm cursor-pointer"
                            >
                              Дидани маълумот
                              <ChevronRight size={15} />
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pointer-events-none absolute top-0 left-0 right-1 sm:right-2 h-16 sm:h-20 bg-gradient-to-b from-slate-50 via-slate-50/80 to-transparent" />

                <div className="pointer-events-none absolute bottom-0 left-0 right-1 sm:right-2 h-20 sm:h-24 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default History;
