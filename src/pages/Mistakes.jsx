import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/api";

function Mistakes() {
  const user = useSelector((state) => state.registr.login);

  const [mistakes, setMistakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (mistakes.length === 0) {
      const timer = setTimeout(() => {
        navigate("/tests");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [mistakes.length, navigate]);

  useEffect(() => {
    if (!user?.id) {
      setLoading(false);
      return;
    }

    const loadMistakes = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/users/mistakes?userId=${user.id}`,
        );
        const data = await response.json();
        console.log("MISTAKES RESPONSE:", data);
        setMistakes(data.mistakes || []);
      } catch (error) {
        console.error("MISTAKES ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMistakes();
  }, [user?.id]);

  if (loading) {
    return <div className="p-8 text-center">Бор шуда истодааст...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-8">Хатогиҳои ман</h1>
        <button
          className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
          onClick={() => navigate("/mistakes/tests")}
        >
          Тест аз хатогиҳо
        </button>
      </div>

      {mistakes.length === 0 ? (
        <div className="p-8 rounded-2xl bg-green-50">
          Ҳоло ягон хатогӣ сабт нашудааст.
        </div>
      ) : (
        <div className="space-y-6">
          {mistakes.map((mistake) => (
            <article
              key={mistake.id}
              className="p-6 rounded-2xl border bg-white shadow-sm"
            >
              <div className="flex justify-between mb-4">
                <span className="font-semibold">{mistake.technology}</span>

                <span className="text-gray-500 text-sm">
                  {new Date(mistake.date).toLocaleDateString()}
                </span>
              </div>

              <h2 className="text-xl font-semibold mb-4">{mistake.question}</h2>

              <p className="text-red-600 mb-2">
                Ҷавоби шумо: {mistake.selectedAnswer}
              </p>

              <p className="text-green-600">
                Ҷавоби дуруст: {mistake.correctAnswer}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Mistakes;
