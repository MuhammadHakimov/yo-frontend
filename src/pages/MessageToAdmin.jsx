import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, Lightbulb, CheckCircle } from "lucide-react";
import { API_URL } from "../config/api";

function MessageToAdmin() {
  const user = useSelector((state) => state.registr.login);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      setError("Лутфан паёматонро нависед.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(
         `${API_URL}/api/messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user?.id,
            name: user?.name,
            email: user?.email,
            message: message.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Мактуб фиристода нашуд");
      }

      setMessage("");
      setSuccess(true);
    } catch (err) {
      setError(err.message || "Мактуб фиристода нашуд.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">

        <Link
          to="/profile"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 mb-6"
        >
          <ArrowLeft size={20} />
          Бозгашт ба профил
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Lightbulb className="text-blue-600" size={26} />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-slate-800">
                  Мактуб ба админ
                </h1>

                <p className="text-slate-500 text-sm mt-1">
                  Идея ва пешниҳодҳои худро бо мо мубодила кунед
                </p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
              <p className="text-slate-700 leading-7">
                Агар шумо барои беҳтар кардани платформа ягон
                <span className="font-semibold text-blue-600">
                  идеяи ҷолиб
                </span>
                дошта бошед, ё хоҳед дар ягон қисми платформа
                тағйирот ё илова ворид карда шавад, метавонед
                пешниҳоди худро дар ин ҷо нависед.
              </p>

              <p className="text-slate-600 mt-2">
                Паёми шумо мустақиман ба администратор фиристода мешавад.
              </p>
            </div>

            {user && (
              <div className="mb-5 p-4 bg-slate-50 rounded-xl">
                <p className="text-sm text-slate-500">
                  Паём аз:
                </p>

                <p className="font-semibold text-slate-800 mt-1">
                  {user.name} {user.surename || ""}
                </p>

                <p className="text-sm text-slate-500">
                  {user.email}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Пешниҳод ё идеяи шумо
              </label>

              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Масалан: Ман пешниҳод мекунам, ки ба қисми тестҳо имкони дидани ҷавобҳои нодуруст илова карда шавад..."
                className="w-full border border-slate-300 rounded-xl p-4 outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />

              {error && (
                <div className="mt-3 p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="mt-3 p-3 rounded-lg bg-green-50 text-green-700 flex items-center gap-2">
                  <CheckCircle size={20} />
                  Паёми шумо ба администратор фиристода шуд.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-5 w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white rounded-xl flex items-center justify-center gap-2 transition"
              >
                <Send size={19} />

                {loading
                  ? "Фиристода истодааст..."
                  : "Фиристодан"}
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageToAdmin;