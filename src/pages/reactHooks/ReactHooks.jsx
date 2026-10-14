import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Code2 } from "lucide-react";
import { API_URL } from "../../config/api";

function ReactHooks() {
  const navigate = useNavigate();
  const [hooks, setHooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHooks = async () => {
      try {
        const response = await fetch(`${API_URL}/api/react-hooks`);

        if (!response.ok) {
          throw new Error("Failed to fetch hooks");
        }

        const data = await response.json();
        setHooks(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getHooks();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <Code2 size={24} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            React Hooks
          </h1>
        </div>

        <p className="max-w-3xl text-gray-600">
          React Hooks функсияҳое мебошанд, ки ба component-ҳои React
          имкониятҳои гуногун медиҳанд. Барои гирифтани маълумоти пурра
          Hook-ро интихоб кунед.
        </p>
      </div>

      {hooks.length === 0 ? (
        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center text-gray-500">
          Hook-ҳо ёфт нашуданд.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {hooks.map((hook) => (
            <div
              key={hook.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Code2 size={23} />
              </div>

              <h2 className="mb-3 text-xl font-bold text-gray-900">
                {hook.name}
              </h2>

              <p className="mb-6 line-clamp-3 min-h-[72px] text-sm leading-6 text-gray-600">
                {hook.description}
              </p>

              <button
                onClick={() => navigate(`hook/${hook.id}`)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                Муфассал
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ReactHooks;