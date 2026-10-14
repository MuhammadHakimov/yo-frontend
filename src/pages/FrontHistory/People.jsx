import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Code2,
  Globe2,
  User,
  Users,
} from "lucide-react";
import { API_URL } from "../../config/api";

function People() {
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await fetch(`${API_URL}/api/history/people`);

        if (!response.ok) {
          throw new Error("Маълумот гирифта нашуд");
        }

        const data = await response.json();
        setPeople(data);
        console.log("DATA:", data);
        console.log("IS ARRAY:", Array.isArray(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white">
        <div className="absolute inset-0 bg-white/5" />

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <button
            onClick={() => navigate("/history")}
            className="flex items-center gap-2 mb-10 text-white/80 hover:text-white transition"
          >
            <ArrowLeft size={20} />
            Бозгашт ба таърих
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center">
              <Users size={30} />
            </div>

            <div>
              <p className="text-white/70 text-sm">Ё-БАРНОМАСОЗ</p>

              <h1 className="text-4xl md:text-5xl font-bold">
                Шахсиятҳои Frontend
              </h1>
            </div>
          </div>

          <p className="max-w-3xl text-lg md:text-xl text-white/80 leading-8">
            Одамоне, ки дар рушди Web, JavaScript, CSS, React ва дигар
            технологияҳои муосири Frontend саҳми муҳим гузоштаанд.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-14">
        {loading && (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="max-w-xl mx-auto bg-red-50 border border-red-200 text-red-600 rounded-2xl p-6 text-center">
            {error}
          </div>
        )}

        {!loading && !error && people.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            Шахсиятҳо ёфт нашуданд.
          </div>
        )}

        {!loading && !error && people.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {people.map((person) => (
              <article
                key={person.id}
                className="group bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <User size={28} />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    {person.technology}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-slate-800 mt-6">
                  {person.name}
                </h2>

                <p className="text-slate-500 mt-2">{person.profession}</p>

                <div className="flex flex-wrap gap-3 mt-5 text-sm text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    {person.birthYear}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Globe2 size={16} />
                    {person.country}
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-5 text-blue-600">
                  <Code2 size={17} />
                  <span className="text-sm font-medium">
                    {person.technology}
                  </span>
                </div>

                <p className="text-slate-600 leading-7 mt-5 line-clamp-3">
                  {person.shortDescription}
                </p>

                <button
                  onClick={() => navigate(`/history/people/${person.id}`)}
                  className="flex items-center gap-2 mt-7 text-blue-600 font-semibold group-hover:gap-3 transition-all"
                >
                  Дидани маълумот
                  <ArrowRight size={18} />
                </button>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default People;
