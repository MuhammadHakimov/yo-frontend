import { User, Mail, Shield, Star, LoaderCircle } from "lucide-react";
import { useGetUsersQuery } from "../../store/admin/adminApi";
import { Link } from "react-router-dom";
import UserLogoDiv from "../../Typography/UserLogoDiv";

function AdminUsers() {
  const { data, isLoading, error } = useGetUsersQuery();

  const users = data?.users || [];

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex items-center gap-3 text-slate-600">
          <LoaderCircle className="h-6 w-6 animate-spin" />
          <span>Корбарон бор шуда истодаанд...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-red-200 bg-red-50 p-6">
          <p className="font-medium text-red-600">Хато</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Корбарон</h1>

          <p className="mt-2 text-slate-500">Ҳамаи корбарони платформа</p>
        </div>

        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-indigo-50 p-3">
              <User className="h-6 w-6 text-indigo-600" />
            </div>

            <div>
              <p className="text-sm text-slate-500">Ҳамагӣ корбарон</p>

              <p className="text-3xl font-bold text-slate-900">
                {users.length}
              </p>
            </div>
          </div>
        </div>

        {users.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <p className="text-slate-500">Ҳоло ягон корбар вуҷуд надорад.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {users.map((user) => (
              <Link to={`/admin/users/${user.id}`} key={user.id}>
                <div
                  key={user.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center flex-col sm:flex-row gap-1.5 sm:gap-3">
                    <UserLogoDiv user={user} class={'flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-600'}/>
                      

                    <div className="min-w-0 flex items-center flex-col sm:inline-block ">
                      <h2 className="truncate text-lg font-bold text-slate-900">
                        {user.name} {user.surename}
                      </h2>

                      <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                        <Mail className="h-4 w-4" />
                        <span className="truncate">{user.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:grid  grid-cols-2 flex flex-col gap-3 ">
                    <div className="rounded-xl bg-slate-50 p-4">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Star className="h-4 w-4" />
                        XP
                      </div>

                      <p className="mt-1 text-xl font-bold text-slate-900">
                        {user.xp || 0}
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-4">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Shield className="h-4 w-4" />
                        Level
                      </div>

                      <p className="mt-1 text-xl font-bold text-slate-900">
                        {user.level || "Beginner"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {user.role || "user"}
                    </span>

                    <span className="text-xs text-slate-400">
                      ID: {user.id}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminUsers;
