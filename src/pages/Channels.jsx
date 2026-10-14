import { useEffect, useMemo, useState } from "react";
import {
  FaYoutube,
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { API_URL } from "../config/api";

function Channels() {
  const [channels, setChannels] = useState([]);
  const [technology, setTechnology] = useState("Frontend");
  const [platform, setPlatform] = useState("Ҳамаи каналҳо");
  const [loading, setLoading] = useState(true);

  const technologies = [
    "HTML",
    "CSS",
    "Tailwind",
    "JavaScript",
    "React",
    "Frontend",
  ];

  const platforms = [
    "Ҳамаи каналҳо",
    "YouTube",
    "Telegram",
    "Instagram",
    "Facebook",
  ];

  useEffect(() => {
    const getChannels = async () => {
      try {
        const response = await fetch(`${API_URL}/api/channels`);

        if (!response.ok) {
          throw new Error("Failed to fetch channels");
        }

        const data = await response.json();
        setChannels(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getChannels();
  }, []);

  const filteredChannels = useMemo(() => {
    return channels.filter((channel) => {
      const technologyMatch = channel.technology?.includes(technology);

      const platformMatch =
        platform === "Ҳамаи каналҳо" || channel.platform === platform;

      return technologyMatch && platformMatch;
    });
  }, [channels, technology, platform]);

const getPlatformIcon = (name) => {
  if (name === "YouTube") {
    return <FaYoutube size={18} />;
  }

  if (name === "Telegram") {
    return <FaTelegramPlane size={18} />;
  }

  if (name === "Instagram") {
    return <FaInstagram size={18} />;
  }

  if (name === "Facebook") {
    return <FaFacebookF size={18} />;
  }

  return <FaExternalLinkAlt size={18} />;
};

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Каналҳои омӯзишӣ
          </h1>

          <p className="mt-2 max-w-2xl text-slate-600">
            Каналҳои муфид барои омӯзиши frontend аз платформаҳои гуногун.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-4 flex flex-wrap gap-2">
            {technologies.map((item) => (
              <button
                key={item}
                onClick={() => setTechnology(item)}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  technology === item
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-700">
                Технология:{" "}
                <span className="text-blue-600">{technology}</span>
              </p>
            </div>

            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:w-56"
            >
              {platforms.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="py-20 text-center">
            <p className="text-slate-500">Каналҳо бор шуда истодаанд...</p>
          </div>
        ) : filteredChannels.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center">
            <p className="text-lg font-semibold text-slate-800">
              Канал ёфт нашуд
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Барои ин технология ва платформа ҳоло канал мавҷуд нест.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredChannels.map((channel) => (
              <div
                key={channel.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={channel.image}
                    alt={channel.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                    {getPlatformIcon(channel.platform)}
                    {channel.platform}
                  </div>
                </div>

                <div className="p-5">
                  <h2 className="line-clamp-2 text-lg font-bold text-slate-900">
                    {channel.title}
                  </h2>

                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
                    {channel.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {channel.technology?.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
                  >
                    Дидани канал
                    <FaExternalLinkAlt size={17} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Channels;