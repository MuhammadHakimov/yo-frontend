import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ArrowRight, RotateCcw } from "lucide-react";
import TestComponent from "../components/TestComponent";
import { API_URL } from "../config/api";

function shuffleOptions(options, correctAnswer) {
  const items = options.map((option) => ({
    option,
    correct: option === correctAnswer,
  }));
  
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  return {
    options: items.map((item) => item.option),
    answer: items.findIndex((item) => item.correct),
  };
}

function MistakesTest() {
  const user = useSelector((state) => state.registr.login);
  const [mistakes, setMistakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [questionCount, setQuestionCount] = useState(1);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    async function loadMistakes() {
      if (!user?.id) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        const response = await fetch(
          `${API_URL}/api/users/mistakes?userId=${user.id}`,
        );

        if (!response.ok) {
          throw new Error("Хатогиҳоро гирифтан нашуд");
        }

        const data = await response.json();

        const mistakesData = Array.isArray(data) ? data : data.mistakes || [];

        const questions = mistakesData
          .filter(
            (item) =>
              item.id &&
              item.question &&
              item.correctAnswer &&
              Array.isArray(item.options) &&
              item.options.length >= 2,
          )
          .map((item, index) => {
            const shuffled = shuffleOptions(item.options, item.correctAnswer);

            return {
              id: String(item.id),

              questionId: item.questionId || `mistake-${index}`,

              question: item.question,

              options: shuffled.options,

              answer: shuffled.answer,

              explanation:
                item.explanation || `Ҷавоби дуруст: ${item.correctAnswer}`,

              technology: item.technology || "Frontend",

              correctAnswer: item.correctAnswer,
            };
          })
          .filter((item) => item.options.length >= 2 && item.answer >= 0);

        setMistakes(questions);
        

        if (questions.length > 0) {
          setQuestionCount(Math.min(10, questions.length));
        }
      } catch (error) {
        console.error("MISTAKES FETCH ERROR:", error);

        setMistakes([]);
      } finally {
        setLoading(false);
      }
    }

    loadMistakes();
  }, [user?.id]);

  const handleCorrectMistake = async (mistakeId) => {
    if (!mistakeId || !user?.id) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/api/users/mistakes/${mistakeId}?userId=${user.id}`,
        {
          method: "DELETE",
        },
      );

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        console.error(
          "DELETE MISTAKE ERROR:",
          result.message || `Хатогии ${mistakeId} нест карда нашуд`,
        );

        return;
      }

      setMistakes((prev) =>
        prev.filter((mistake) => String(mistake.id) !== String(mistakeId)),
      );
    } catch (error) {
      console.error("DELETE MISTAKE REQUEST ERROR:", error);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 px-5 py-16">
        <div className="mx-auto flex min-h-[400px] max-w-4xl items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

            <p className="mt-4 font-bold text-slate-500">
              Хатогиҳо бор шуда истодаанд...
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (!mistakes.length) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <RotateCcw size={28} />
            </div>

            <h1 className="mt-5 text-2xl font-black text-slate-900">
              Ҳоло хатогӣ надоред
            </h1>

            <p className="mt-3 text-slate-500">
              Барои сохтани тест аввал якчанд тест гузаред ва ҷавобҳои нодуруст
              диҳед.
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (started) {
    return (
      <TestComponent
        questions={mistakes.slice(0, questionCount)}
        technology="Хатогиҳои ман"
        testName="Тести хатогиҳои ман"
        questionCount={Math.min(questionCount, mistakes.length)}
        saveMistakes={false}
        onBack={() => setStarted(false)}
        onQuestionCorrect={handleCorrectMistake}
      />
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50 md:p-10">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-blue-600">
              <RotateCcw size={34} />
            </div>

            <h1 className="mt-6 text-3xl font-black text-slate-900">
              Тести хатогиҳои ман
            </h1>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-500">
              Саволҳо аз хатогиҳое сохта мешаванд, ки шумо дар тестҳои гузашта
              карда будед.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-center">
            <p className="text-sm font-bold text-blue-500">Шумораи хатогиҳо</p>

            <p className="mt-1 text-3xl font-black text-blue-700">
              {mistakes.length}
            </p>
          </div>

          <div className="mt-8">
            <label className="mb-3 block text-sm font-black text-slate-700">
              Чанд савол мехоҳед?
            </label>

            <select
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base font-black text-slate-800 outline-none transition hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            >
              {Array.from(
                {
                  length: mistakes.length,
                },
                (_, index) => index + 1,
              ).map((count) => (
                <option key={count} value={count}>
                  {count} савол
                </option>
              ))}
            </select>

            <p className="mt-3 text-sm text-slate-400">
              Максимум савол: {mistakes.length}
            </p>
          </div>

          <button
            onClick={() => setStarted(true)}
            disabled={!questionCount || !mistakes.length}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 font-black text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:bg-slate-200 disabled:bg-none disabled:text-slate-400 disabled:shadow-none"
          >
            Оғози тест
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
    </main>
  );
}

export default MistakesTest;
