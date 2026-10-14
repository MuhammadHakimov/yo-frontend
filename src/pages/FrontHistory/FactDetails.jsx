import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Lightbulb,
  Loader2,
  CalendarDays,
} from "lucide-react";
import { API_URL } from "../../config/api";

function FactDetails() {
  const { id } = useParams();

  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFact = async () => {
      try {
        const response = await fetch(`${API_URL}/api/facts/${id}`);

        if (!response.ok) {
          throw new Error("Факт ёфт нашуд");
        }

        const data = await response.json();

        setFact(data.fact || data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchFact();
    }
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-slate-500" size={34} />
      </main>
    );
  }

  if (error || !fact) {
    return (
      <main className="min-h-screen bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <Lightbulb
            size={40}
            className="mx-auto mb-5 text-slate-300"
          />

          <h1 className="text-2xl font-bold text-slate-900">
            Факт ёфт нашуд
          </h1>

          <p className="mt-3 text-slate-500">
            {error || "Маълумоти дархостшуда вуҷуд надорад."}
          </p>

          <Link
            to="/facts"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-700"
          >
            <ArrowLeft size={18} />
            Ба фактҳо баргаштан
          </Link>
        </div>
      </main>
    );
  }

  const content =
    fact.content && typeof fact.content === "object"
      ? fact.content
      : null;

  const title =
    typeof fact.title === "string"
      ? fact.title
      : typeof content?.title === "string"
        ? content.title
        : "Факти ҷолиб";

  const text =
    typeof content?.text === "string"
      ? content.text
      : typeof fact.description === "string"
        ? fact.description
        : typeof fact.content === "string"
          ? fact.content
          : "";

  const facts = Array.isArray(content?.facts)
    ? content.facts
    : [];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1100px] px-5 py-8 sm:px-8 lg:px-12">
          <Link
            to="/facts"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            <ArrowLeft size={18} />
            Ҳамаи фактҳо
          </Link>
        </div>
      </section>

      <article className="mx-auto max-w-[1000px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-14">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
              <Lightbulb size={27} />
            </div>

            {typeof fact.category === "string" && (
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
                {fact.category}
              </span>
            )}

            {fact.createdAt && (
              <span className="flex items-center gap-2 text-sm text-slate-400">
                <CalendarDays size={16} />
                {new Date(fact.createdAt).toLocaleDateString("tg-TJ")}
              </span>
            )}
          </div>

          <h1 className="mt-8 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          {typeof fact.shortDescription === "string" && (
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {fact.shortDescription}
            </p>
          )}

          <div className="my-10 h-px bg-slate-200" />

          <div className="space-y-8">
            {text && (
              <p className="whitespace-pre-line text-base leading-8 text-slate-700 sm:text-lg">
                {text}
              </p>
            )}

            {facts.length > 0 && (
              <div className="space-y-5">
                {facts.map((item, index) => {
                  if (typeof item === "string") {
                    return (
                      <div
                        key={index}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                      >
                        <p className="whitespace-pre-line text-base leading-8 text-slate-700">
                          {item}
                        </p>
                      </div>
                    );
                  }

                  if (!item || typeof item !== "object") {
                    return null;
                  }

                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      {typeof item.title === "string" && (
                        <h3 className="mb-2 text-lg font-semibold text-slate-900">
                          {item.title}
                        </h3>
                      )}

                      {typeof item.text === "string" && (
                        <p className="whitespace-pre-line text-base leading-8 text-slate-700">
                          {item.text}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {!text && facts.length === 0 && (
              <p className="text-slate-500">
                Барои ин факт маълумоти муфассал вуҷуд надорад.
              </p>
            )}
          </div>

          {typeof fact.source === "string" && (
            <div className="mt-10 rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-700">
                Манбаъ
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {fact.source}
              </p>
            </div>
          )}
        </div>

        <div className="mt-8">
          <Link
            to="/facts"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
          >
            <ArrowLeft size={17} />
            Бозгашт ба фактҳо
          </Link>
        </div>
      </article>
    </main>
  );
}

export default FactDetails;
