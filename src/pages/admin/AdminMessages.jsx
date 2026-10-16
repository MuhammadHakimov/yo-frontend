import { useEffect, useState } from "react";
import { API_URL } from "../../config/api";
import { Trash } from "lucide-react";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getToken = () => localStorage.getItem("token");

  const fetchMessages = async () => {
    const token = getToken();

    if (!token) {
      setError("Аввал ҳамчун администратор ворид шавед.");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}/api/messages`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      

      if (!response.ok) {
        throw new Error(
          data.message || "Мактубҳоро гирифтан муяссар нашуд."
        );
      }

      setMessages(Array.isArray(data) ? data : data.messages || []);
    } catch (err) {
      setError(err.message || "Хатогии сервер.");
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {

    const token = getToken();

    if (!token) {
      setError("Аввал ҳамчун администратор ворид шавед.");
      return;
    }

    try {
      setError("");

      const response = await fetch(`${API_URL}/api/messages/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Нест кардани мактуб муяссар нашуд."
        );
      }

      setMessages((prev) =>
        prev.filter((message) => message.id !== id && message._id !== id)
      );
    } catch (err) {
      setError(err.message || "Хатогии сервер.");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="p-4 sm:p-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Мактубҳо
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Шумораи мактубҳо: {messages.length}
          </p>
        </div>

        <button
          onClick={fetchMessages}
          disabled={loading}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Бор шуда истодааст..." : "Навсозӣ"}
        </button>
      </div>

      {error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {loading ? (
        <p className="py-8 text-center text-gray-500">
          Мактубҳо бор шуда истодаанд...
        </p>
      ) : messages.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
          <p className="text-gray-500">
            Ҳоло ягон мактуб нест.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {messages.map((message) => {
            const id = message.id ?? message._id;

            return (
              <div
                key={id}
                className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5"
              >
                <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="font-semibold text-gray-800">
                      {message.name || "Беном"}
                    </h2>

                    {message.email && (
                      <p className="mt-1 text-sm text-gray-500">
                        {message.email}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => deleteMessage(id)}
                    className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
                  >
                    <Trash />
                  </button>
                </div>

                {message.subject && (
                  <h3 className="mb-2 font-medium text-gray-700">
                    {message.subject}
                  </h3>
                )}

                <p className="whitespace-pre-wrap break-words text-gray-600">
                  {message.message || message.text || "Матни мактуб нест."}
                </p>

                {message.createdAt && (
                  <p className="mt-3 text-xs text-gray-400">
                    {new Date(message.createdAt).toLocaleString("tg-TJ")}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminMessages;