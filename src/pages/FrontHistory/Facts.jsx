import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Loader2 } from "lucide-react";
import { API_URL } from './../../config/api';

function Facts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

useEffect(() => {
  const fetchFacts = async () => {
    try {
      const response = await fetch(`${API_URL}/api/facts`);

      if (!response.ok) {
        throw new Error("Хатогӣ ҳангоми гирифтани фактҳо");
      }

      const data = await response.json();

      setFacts(Array.isArray(data) ? data : data.facts || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchFacts();
}, []);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1450px] px-5 py-16 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
              <Lightbulb size={17} />
              Фактҳои ҷолибро
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Чизҳои ҷолибро кашф кун
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Маълумоти кӯтоҳ, ҷолиб ва омӯзанда дар бораи технология,
              барномасозӣ, интернет ва таърихи ҷаҳони IT.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1450px] px-5 py-12 sm:px-8 lg:px-12">
        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">
            <Loader2 className="animate-spin text-slate-500" size={32} />
          </div>
        )}

        {!loading && error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-600">
            {error}
          </div>
        )}

        {!loading && !error && facts.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <p className="text-slate-500">Ҳоло фактҳо вуҷуд надоранд.</p>
          </div>
        )}

        {!loading && !error && facts.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {facts.map((fact, index) => (
              <Link
                key={fact._id || fact.id || index}
                to={`/facts/${fact._id || fact.id}`}
                className="group flex min-h-[250px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                    <Lightbulb size={23} />
                  </div>

                  <span className="text-sm font-semibold text-slate-300">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-6 flex-1">
                  <h2 className="line-clamp-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-amber-600">
                    {fact.title}
                  </h2>

                  {fact.shortDescription && (
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                      {fact.shortDescription}
                    </p>
                  )}

                  {!fact.shortDescription && fact.description && (
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                      {fact.description}
                    </p>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-sm font-medium text-slate-500">
                    Муфассал хондан
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all group-hover:bg-amber-500 group-hover:text-white">
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Facts;