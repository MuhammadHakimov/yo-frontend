import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import TestHistory from "../../components/TestHistory";
import H2 from "../../Typography/H2";
import { useDeleteUserMutation } from "../../store/admin/adminApi";
import { API_URL } from "../../config/api";
import UserLogoDiv from "../../Typography/UserLogoDiv";
function AdminUserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [deleteUser] = useDeleteUserMutation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`${API_URL}/api/users/${id}`);

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Корбар ёфт нашуд");
        }

        setUser(data.user);
      } catch (error) {
        console.error("USER DETAILS ERROR:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [id]);
  const handleDeleteUser = async () => {
    try {
      const data = await deleteUser(user.id).unwrap();
      navigate("/admin/users");
    } catch (error) {
      console.error("DELETE ERROR:", error);    
    const handleDeleteUser = async () => {
  try {
    await deleteUser(user.id).unwrap();
    navigate("/admin/users");
  } catch (error) {
    console.error("DELETE ERROR:", error);
    console.log("STATUS:", error?.status);
    console.log("DATA:", error?.data);
  }
};}

  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            Бор шуда истодааст...
          </div>
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="p-6">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-red-600">
              Корбар ёфт нашуд
            </h1>

            <p className="mt-2 text-slate-500">{error}</p>

            <Link
              to="/admin/users"
              className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white"
            >
              Ба рӯйхати корбарон
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-3.5 sm:p-4 md:p-6">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex justify-between">
          <Link
            to="/admin/users"
            className="mb-5 inline-flex items-center text-sm text-blue-600 hover:underline sm:text-base"
          >
            ← Бозгашт ба корбарон
          </Link>

          {user.role !== "admin" && (
            <button
              onClick={handleDeleteUser}
              className="px-5 py-2.5 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
            >
              Нест кардани корбар
            </button>
          )}
        </div>
        <H2>Маълумоти корбар</H2>

        <p className="mt-2 text-sm text-slate-500 sm:text-base">
          Омори пурраи корбар нишон дода мешавад.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
            <UserLogoDiv user={user} class={'flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white sm:h-24 sm:w-24 sm:text-3xl'}/>

            <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-500">Ном</p>

              <h2 className="break-words text-xl font-semibold text-slate-700 sm:text-2xl">
                {user.name}
              </h2>
            </div>

            <span className="mt-3 block h-0.5 w-full bg-slate-300"></span>

            {user.surename && (
              <>
                <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-slate-500">Насаб</p>

                  <p className="break-words text-lg font-semibold text-slate-700 sm:text-xl">
                    {user.surename}
                  </p>
                </div>

                <span className="mt-3 block h-0.5 w-full bg-slate-300"></span>
              </>
            )}

            <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-500">E-mail</p>

              <p className="break-all text-sm text-slate-500 sm:text-base sm:text-right">
                {user.email}
              </p>
            </div>

            <span className="mt-3 block h-0.5 w-full bg-slate-300"></span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white sm:h-24 sm:w-24 sm:text-3xl">
              XP
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-500">XP</p>

              <h2 className="text-2xl font-semibold text-blue-600">
                {user.xp || 0}
              </h2>
            </div>

            <span className="mt-3 block h-0.5 w-full bg-slate-300"></span>

            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-500">Сатҳ</p>

              <p className="text-lg font-semibold text-slate-700 sm:text-xl">
                {user.level || "Beginner"}
              </p>
            </div>

            <span className="mt-3 block h-0.5 w-full bg-slate-300"></span>

            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-500">Пешрафт</p>

              <p className="text-sm text-slate-500 sm:text-base">
                {user.xp || 0} XP
              </p>
            </div>

            <span className="mt-3 block h-0.5 w-full bg-slate-300"></span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white sm:h-24 sm:w-24 sm:text-3xl">
              ID
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-500">Ҳолати аккаунт</p>

              <p className="font-semibold text-green-600">Фаъол</p>
            </div>

            <span className="mt-3 block h-0.5 w-full bg-slate-300"></span>

            <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-500">ID корбар</p>

              <p className="break-all text-sm font-semibold text-slate-700 sm:text-base sm:text-right">
                {user.id}
              </p>
            </div>

            <span className="mt-3 block h-0.5 w-full bg-slate-300"></span>

            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-500">Role</p>

              <p
                className={
                  user.role === "admin"
                    ? "font-semibold text-red-600"
                    : "font-semibold text-slate-700"
                }
              >
                {user.role || "user"}
              </p>
            </div>

            <span className="mt-3 block h-0.5 w-full bg-slate-300"></span>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 md:p-8">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
            Омори омӯзиш
          </h2>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <div className="rounded-xl bg-slate-50 p-4 sm:p-5">
              <p className="text-sm text-slate-500">XP</p>

              <p className="mt-2 text-xl font-bold sm:text-2xl">
                {user.xp || 0}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4 sm:p-5">
              <p className="text-sm text-slate-500">Сатҳ</p>

              <p className="mt-2 text-xl font-bold sm:text-2xl">
                {user.level || "Beginner"}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <TestHistory userId={user.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUserDetails;
