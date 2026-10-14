import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { logout } from "../store/counter/registrSlice";
import { API_URL } from "../config/api";
import { Mail, ShieldCheck, TrendingUpDown } from "lucide-react";
import UserLogoDiv from "../Typography/UserLogoDiv";
function Profile() {
  const reduxUser = useSelector((state) => state.registr.login);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!reduxUser?.email) {
      setLoading(false);
      return;
    }

    const getUser = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/users/profile?email=${reduxUser.email}`,
        );

        const data = await response.json();

        if (response.ok && data.user) {
          setUser(data.user);
        } else {
          console.error("PROFILE ERROR:", data);
        }
      } catch (error) {
        console.error("PROFILE ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [reduxUser?.email]);

  function handleLogout() {
    dispatch(logout());
    navigate("/login");
  }

  if (loading) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl">
          <h1 className="text-2xl font-extrabold text-slate-900">
            Бор шуда истодааст...
          </h1>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl">
          <h1 className="text-2xl font-extrabold text-slate-900">
            Шумо авторизатсия нашудаед
          </h1>

          <p className="mt-3 text-slate-500">
            Барои дидани профил аввал ба аккаунт ворид шавед.
          </p>

          <Link
            to="/login"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Ворид шудан
          </Link>
        </div>
      </main>
    );
  }

  const xp = user?.xp || 0;
  const level = user?.level || "Beginner";

  let currentLevelStart = 0;
  let nextLevelXp = 1500;

  if (xp <= 1500) {
    currentLevelStart = 0;
    nextLevelXp = 1500;
  } else if (xp <= 3100) {
    currentLevelStart = 1500;
    nextLevelXp = 3100;
  } else if (xp <= 4700) {
    currentLevelStart = 3100;
    nextLevelXp = 4700;
  } else {
    currentLevelStart = 4700;
    nextLevelXp = 4700;
  }

  const progress =
    nextLevelXp === currentLevelStart
      ? 100
      : Math.min(
          ((xp - currentLevelStart) / (nextLevelXp - currentLevelStart)) * 100,
          100,
        );

  return (
    <main className="min-h-[80vh] bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-[280px_1fr]">
          <aside className="rounded-3xl bg-white p-6 shadow-lg">
            <UserLogoDiv
              user={user}
              class={
                "mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-3xl font-extrabold text-white"
              }
            />

            <h2 className="mt-5 text-center text-xl font-extrabold text-slate-900">
              {user.name}
            </h2>

            <p className="mt-1 text-center text-sm text-slate-500">
              {user.email}
            </p>

            <div className="mt-6 rounded-2xl bg-blue-50 p-4 text-center">
              <p className="text-sm text-blue-600">Сатҳи ҳозира</p>
              <p className="mt-1 text-2xl font-extrabold text-blue-700">
                {level}
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="mt-6 w-full rounded-xl border border-red-200 px-4 py-3 font-semibold text-red-600 hover:bg-red-50"
            >
              Баромадан
            </button>

            <div className="flex flex-row gap-4 mt-4 items-center">
              <Link
                to="/admin"
                className="rounded-xl bg-green-600 p-4 font-semibold text-white hover:bg-green-700"
              >
                <ShieldCheck />
              </Link>

              <Link
                to="/mistakes"
                className="rounded-xl bg-yellow-600 p-4 font-semibold text-white hover:bg-yellow-700"
              >
                Хатогиҳои ман
              </Link>
            </div>
            <Link
              to="/profile/level-test"
              className="flex mt-5 items-center gap-2 px-4 py-3 rounded-xl bg-violet-300 text-blue-600 hover:bg-violet-400 transition"
            >
              <TrendingUpDown />
              Муаянкунии сатҳ
            </Link>
            <Link
              to="/admin-message"
              className="flex mt-5 items-center gap-2 px-4 py-3 rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
            >
              <Mail size={20} />
              Мактуб ба админ
            </Link>
          </aside>

          <section className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-500">
                    Хуш омадед ба Ё-Frontend
                  </p>

                  <h1 className="mt-1 text-3xl font-extrabold text-slate-900">
                    Профили ман
                  </h1>
                </div>

                <Link
                  to="/tests"
                  className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
                >
                  Оғози тест
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Холи умумӣ</p>

              <h2 className="mt-2 text-3xl font-black text-blue-600">
                {xp} XУ
              </h2>

              <p className="mt-2 font-semibold text-slate-700">Сатҳ: {level}</p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-extrabold text-slate-900">
                  Пешрафти омӯзиш
                </h2>

                <span className="font-bold text-blue-600">
                  {Math.round(progress)}%
                </span>
              </div>

              <div className="mt-4 h-4 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="mt-3 text-sm text-slate-500">
                {level === "Senior"
                  ? "Шумо ба сатҳи Senior расидед. Омӯзишро идома диҳед ва XP ҷамъ кунед."
                  : `Барои расидан ба сатҳи нав ${Math.max(
                      nextLevelXp - xp,
                      0,
                    )} XP боқӣ мондааст.`}
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <h2 className="text-xl font-extrabold text-slate-900">
                Маълумоти корбар
              </h2>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex flex-wrap justify-between gap-2 border-b border-slate-100 pb-3">
                  <span className="text-slate-500">Ном</span>

                  <span className="font-semibold text-slate-900">
                    {user.name}
                  </span>
                </div>

                <div className="flex flex-wrap justify-between gap-2 border-b border-slate-100 pb-3">
                  <span className="text-slate-500">Насаб</span>

                  <span className="font-semibold text-slate-900">
                    {user.surename || "Нависонида нашудааст"}
                  </span>
                </div>

                <div className="flex flex-wrap justify-between gap-2 border-b border-slate-100 pb-3">
                  <span className="text-slate-500">Email</span>

                  <span className="font-semibold text-slate-900">
                    {user.email}
                  </span>
                </div>

                <div className="flex flex-wrap justify-between gap-2">
                  <span className="text-slate-500">Ҳолат</span>

                  <span className="font-semibold text-green-600">
                    Авторизатсияшуда
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Profile;
