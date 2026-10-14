import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Code2, Play } from "lucide-react";
import { API_URL } from "../../config/api";

function HookDetails() {
  const { id } = useParams();
  const [hook, setHook] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const getHook = async () => {
      try {
        const response = await fetch(`${API_URL}/api/react-hooks/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch hook");
        }

        const data = await response.json();
        setHook(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getHook();
  }, [id]);

  const getYouTubeEmbedUrl = (url) => {
    try {
      const parsedUrl = new URL(url);
      let videoId = "";

      if (parsedUrl.hostname.includes("youtu.be")) {
        videoId = parsedUrl.pathname.slice(1);
      } else if (parsedUrl.pathname === "/watch") {
        videoId = parsedUrl.searchParams.get("v") || "";
      } else if (parsedUrl.pathname.startsWith("/embed/")) {
        videoId = parsedUrl.pathname.split("/embed/")[1];
      } else if (parsedUrl.pathname.startsWith("/shorts/")) {
        videoId = parsedUrl.pathname.split("/shorts/")[1];
      }

      videoId = videoId.split("/")[0].split("?")[0];

      return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
    } catch {
      return "";
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
      </div>
    );
  }

  if (!hook) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Hook ёфт нашуд</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <button
        onClick={() => navigate("/react-hooks")}
        className="mb-8 flex items-center gap-2 text-gray-600 transition hover:text-blue-600"
      >
        <ArrowLeft size={19} />
        Ба Hook-ҳо
      </button>

      <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-5 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <Code2 size={28} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">{hook.name}</h1>
        </div>

        <p className="text-lg leading-8 text-gray-600">{hook.description}</p>
      </div>

      <div className="space-y-6">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Маълумот</h2>

          <p className="leading-8 text-gray-700">{hook.explanation}</p>
        </section>
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Синтаксис</h2>

          <pre className="overflow-x-auto rounded-xl bg-gray-950 p-5 text-sm leading-7 text-gray-100">
            <code>{hook.syntax}</code>
          </pre>
        </section>
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Мисол</h2>

          <pre className="overflow-x-auto rounded-xl bg-gray-950 p-5 text-sm leading-7 text-gray-100">
            <code>{hook.example}</code>
          </pre>
        </section>
        {hook.video && (
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <Play size={22} className="text-red-600" />

              <h2 className="text-2xl font-bold text-gray-900">Видеодарс</h2>
            </div>

            <div className="aspect-video overflow-hidden rounded-xl">
              {getYouTubeEmbedUrl(hook.video) ? (
                <iframe
                  src={getYouTubeEmbedUrl(hook.video)}
                  title="Видеодарс"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <p className="p-4 text-red-600">Пайванди видео нодуруст аст.</p>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default HookDetails;
