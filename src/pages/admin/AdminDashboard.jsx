import { Users, BookOpen, ClipboardCheck, Target, Mail } from "lucide-react";
import {
  useGetUsersQuery,
  useGetLessonsQuery,
  useGetTestsQuery,
  useGetTasksQuery,
} from "../../store/admin/adminApi";
import { Link } from "react-router-dom";
import H2 from "../../Typography/H2";

function getArray(data, key) {
  if (Array.isArray(data)) return data;

  if (key && Array.isArray(data?.[key])) {
    return data[key];
  }

  if (!data || typeof data !== "object") {
    return [];
  }

  return Object.values(data).flatMap((item) => {
    if (Array.isArray(item)) return item;

    if (item && typeof item === "object") {
      if (Array.isArray(item[key])) return item[key];
      return Object.values(item).filter(
        (value) => value && typeof value === "object"
      ).flatMap((value) => Array.isArray(value) ? value : []);
    }

    return [];
  });
}

function AdminDashboard() {
  const {
    data: usersData,
    error: usersError,
    isLoading: usersLoading,
  } = useGetUsersQuery();

  const {
    data: lessonsData,
    error: lessonsError,
    isLoading: lessonsLoading,
  } = useGetLessonsQuery();

  const {
    data: testsData,
    error: testsError,
    isLoading: testsLoading,
  } = useGetTestsQuery();

  const {
    data: tasksData,
    error: tasksError,
    isLoading: tasksLoading,
  } = useGetTasksQuery();

  const users = getArray(usersData, "users");
  const lessons = getArray(lessonsData, "lessons");
  const tests = getArray(testsData, "tests");
  const tasks = getArray(tasksData, "tasks");

  const stats = [
    {
      title: "Корбарон",
      value: users.length,
      icon: Users,
      path: "/admin/users",
      loading: usersLoading,
      error: usersError,
    },
    {
      title: "Дарсҳо",
      value: lessons.length,
      icon: BookOpen,
      path: "/admin/lessons",
      loading: lessonsLoading,
      error: lessonsError,
    },
    {
      title: "Тестҳо",
      value: tests.length,
      icon: ClipboardCheck,
      path: "/admin/tests",
      loading: testsLoading,
      error: testsError,
    },
    {
      title: "Масъалаҳо",
      value: tasks.length,
      icon: Target,
      path: "/admin/tasks",
      loading: tasksLoading,
      error: tasksError,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <H2>Панели идоракунӣ</H2>

          <p className="mt-2 text-slate-500">
            Идоракунии платформаи Ё-фронтенд
          </p>
        </div>

        {stats.some((item) => item.error?.status === 401) && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
            Иҷозати дастрасӣ нест. Токенро санҷед ва дубора ворид шавед.
          </div>
        )}

        {stats.some((item) => item.error?.status === "FETCH_ERROR") && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
            Ба сервер пайваст шуда натавонист. Фаъол будани Backend-ро санҷед.
          </div>
        )}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                to={item.path}
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      {item.title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-slate-900">
                      {item.loading ? "..." : item.error ? "!" : item.value}
                    </h2>

                    {item.error && (
                      <p className="mt-2 text-xs text-red-500">
                        Маълумот бор карда нашуд
                      </p>
                    )}
                  </div>

                  <div className="rounded-xl bg-indigo-50 p-3">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <Link
          to="/admin/messages"
          className="mt-5 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:bg-blue-50"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
            <Mail className="text-blue-600" size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-800">
              Мактубҳои корбарон
            </h3>

            <p className="text-sm text-slate-500">
              Идеяҳо ва пешниҳодҳои корбарон
            </p>
          </div>
        </Link>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Идоракунии платформа
          </h2>

          <p className="mt-2 text-slate-500">
            Аз меню қисмати лозимиро барои идоракунӣ интихоб кунед.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;