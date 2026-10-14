import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Code2,
  Globe2,
  User,
  Briefcase,
} from "lucide-react";
import { API_URL } from "../../config/api";

function PeopleDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/history/people/${id}`
        );

        if (!response.ok) {
          throw new Error("Шахсият ёфт нашуд");
        }

        const data = await response.json();
        setPerson(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPerson();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !person) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6">
        <p className="text-red-500 text-lg mb-6">
          {error || "Маълумот ёфт нашуд"}
        </p>

        <button
          onClick={() => navigate("/history/people")}
          className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          <ArrowLeft size={18} />
          Бозгашт
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <button
            onClick={() => navigate("/history/people")}
            className="flex items-center gap-2 text-white/80 hover:text-white transition mb-10"
          >
            <ArrowLeft size={20} />
            Бозгашт ба шахсиятҳо
          </button>

          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-24 h-24 rounded-3xl bg-white/15 backdrop-blur flex items-center justify-center shrink-0">
              <User size={48} />
            </div>

            <div>
              <p className="text-white/70 mb-2">
                {person.technology}
              </p>

              <h1 className="text-4xl md:text-5xl font-bold">
                {person.name}
              </h1>

              <p className="text-white/80 text-lg mt-3">
                {person.profession}
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <Calendar className="text-blue-600 mb-3" size={22} />
            <p className="text-sm text-slate-500">
              Соли таваллуд
            </p>
            <p className="font-bold text-lg mt-1">
              {person.birthYear}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <Globe2 className="text-blue-600 mb-3" size={22} />
            <p className="text-sm text-slate-500">
              Кишвар
            </p>
            <p className="font-bold text-lg mt-1">
              {person.country}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <Code2 className="text-blue-600 mb-3" size={22} />
            <p className="text-sm text-slate-500">
              Технология
            </p>
            <p className="font-bold text-lg mt-1">
              {person.technology}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <Briefcase className="text-blue-600 mb-3" size={22} />
            <p className="text-sm text-slate-500">
              Касб
            </p>
            <p className="font-bold text-lg mt-1">
              {person.profession}
            </p>
          </div>
        </div>

        <article className="bg-white border border-slate-200 rounded-3xl p-7 md:p-10 shadow-sm">
          <h2 className="text-3xl font-bold mb-5">
            Дар бораи {person.name}
          </h2>

          <p className="text-slate-600 text-lg leading-8">
            {person.fullDescription}
          </p>

          {person.achievements?.length > 0 && (
            <div className="mt-10 pt-8 border-t border-slate-200">
              <h3 className="text-2xl font-bold mb-6">
                Дастовардҳо
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {person.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-green-600 shrink-0"
                    />

                    <span className="text-slate-700 font-medium">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
    </div>
  );
}

export default PeopleDetails;