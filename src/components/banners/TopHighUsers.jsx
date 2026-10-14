import { useCallback, useMemo } from "react";
import { ArrowLeft, ArrowRight, Trophy, User } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useGetUsersQuery } from "../../store/admin/adminApi";

function TopHighUsers() {
  const { data, isLoading, error } = useGetUsersQuery();

  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [Autoplay(autoplayOptions)]
  );

  const users = useMemo(() => {
    const usersData = Array.isArray(data)
      ? data
      : Array.isArray(data?.users)
        ? data.users
        : [];

    return [...usersData]
      .sort((a, b) => Number(b.xp || 0) - Number(a.xp || 0))
      .slice(0, 10);
  }, [data]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const getLevel = (xp) => {
    const value = Number(xp || 0);

    if (value >= 4700) return "Senior";
    if (value >= 3100) return "Middle";
    if (value >= 1500) return "Junior";
    if (value < 1500) return "Beginner";

    return "Beginner";
  };

  if (isLoading) {
    return (
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto w-[92%] max-w-7xl">
          <div className="h-8 w-56 animate-pulse rounded-lg bg-slate-200"></div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-64 animate-pulse rounded-2xl bg-slate-200"
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return null;
  }

  if (!users.length) {
    return null;
  }

  return (
    <section className="overflow-hidden bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-600">
              <Trophy size={15} />
              Рейтинг
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Top корбарон
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Корбароне, ки аз рӯи XP натиҷаи баландтарин доранд.
            </p>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={scrollPrev}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <ArrowLeft size={19} />
            </button>

            <button
              onClick={scrollNext}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-4">
            {users.map((user, index) => {
              const xp = Number(user.xp || 0);
              const level = user.level || getLevel(xp);

              return (
                <div
                  key={user.id || user._id || index}
                  className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_48%] md:flex-[0_0_32%] lg:flex-[0_0_24%]"
                >
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-extrabold text-slate-500">
                      #{index + 1}
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="relative shrink-0">
                        {user.img ? (
                          <img
                            src={user.img}
                            alt={user.name || "User"}
                            className="h-16 w-16 rounded-2xl object-cover ring-4 ring-slate-50"
                          />
                        ) : (
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-4 ring-slate-50">
                            <User size={27} />
                          </div>
                        )}

                        {index === 0 && (
                          <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 text-white shadow-md">
                            <Trophy size={14} />
                          </div>
                        )}
                      </div>

                      <div className="min-w-0 pr-7">
                        <h3 className="truncate text-base font-extrabold text-slate-900">
                          {user.name || "Корбар"}
                          {user.surename ? ` ${user.surename}` : ""}
                        </h3>

                        <p className="mt-1 text-xs font-semibold text-blue-600">
                          {level}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-xl bg-slate-50 p-4">
                      <p className="text-xs font-medium text-slate-400">
                        XP умумӣ
                      </p>

                      <div className="mt-1 flex items-end justify-between">
                        <p className="text-2xl font-black text-slate-900">
                          {xp.toLocaleString()}
                        </p>

                        <span className="text-xs font-bold text-blue-600">
                          XP
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500"
                        style={{
                          width: `${Math.min((xp / 4700) * 100, 100)}%`,
                        }}
                      ></div>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs">
                      <span className="text-slate-400">
                        Сатҳ: {level}
                      </span>

                      <span className="font-bold text-slate-600">
                        {xp} XP
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-2 sm:hidden">
          <button
            onClick={scrollPrev}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={scrollNext}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TopHighUsers;