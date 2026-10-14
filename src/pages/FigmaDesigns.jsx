import { useEffect, useMemo, useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import H2 from "./../Typography/H2";
import { API_URL } from "../config/api";

function FigmaDesigns() {
  const [figmaDesigns, setFigmaDesigns] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadFigmaDesigns = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_URL}/api/figmas`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Хатогӣ ҳангоми гирифтани макетҳо");
        }

        const data = await response.json();

        setFigmaDesigns(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message || "Хатогӣ ҳангоми гирифтани макетҳо");
        setFigmaDesigns([]);
      } finally {
        setLoading(false);
      }
    };

    loadFigmaDesigns();
  }, []);

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(
        figmaDesigns
          .map((design) => design.category)
          .filter(Boolean)
      ),
    ];
  }, [figmaDesigns]);

  const filteredDesigns = useMemo(() => {
    return figmaDesigns.filter((design) => {
      const search = searchValue.toLowerCase().trim();

      const matchesSearch =
        design.title?.toLowerCase().includes(search) ||
        design.description?.toLowerCase().includes(search) ||
        design.technologies?.some((technology) =>
          technology.toLowerCase().includes(search)
        );

      const matchesCategory =
        selectedCategory === "All" ||
        design.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [figmaDesigns, searchValue, selectedCategory]);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-100 px-4 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-slate-500">
            Макетҳо бор шуда истодаанд...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-100 px-4 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <H2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Макетҳо аз Figma
          </H2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Макетҳоро интихоб кун, сохтори онҳоро омӯз ва баъд бо HTML,
            CSS, JavaScript ё React ба код табдил деҳ.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm md:flex-row">
          <div className="relative flex-1">
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Ҷустуҷӯи макет..."
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "All"
                  ? "Ҳамаи категорияҳо"
                  : category}
              </option>
            ))}
          </select>
        </div>

        {filteredDesigns.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center">
            <h2 className="text-xl font-bold text-slate-800">
              Макет ёфт нашуд
            </h2>

            <p className="mt-2 text-slate-500">
              Калимаи ҷустуҷӯро дигар кун.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDesigns.map((design) => (
              <article
                key={design.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden bg-slate-200">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-violet-700 backdrop-blur">
                    {design.category}
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {design.level}
                    </span>

                    <span className="text-sm font-bold text-amber-600">
                      +{design.xp} XУ
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900">
                    {design.title}
                  </h2>

                  <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">
                    {design.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {design.technologies?.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    href={design.figmaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 font-semibold text-white transition hover:bg-violet-700"
                  >
                    Кушодани макет дар Figma
                    <ExternalLink size={18} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default FigmaDesigns;