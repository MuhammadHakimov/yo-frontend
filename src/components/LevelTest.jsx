import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TestComponent from "../components/TestComponent";
import { API_URL } from "../config/api";
import { login } from "../store/counter/registrSlice";

function LevelTest() {
  const user = useSelector((state) => state.registr.login);
  const dispatch = useDispatch();

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getTests() {
      try {
        const response = await fetch(`${API_URL}/api/tests`);

        if (!response.ok) {
          throw new Error("Тестҳоро гирифтан нашуд");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Формати маълумоти тестҳо нодуруст аст");
        }

        const allQuestions = data.map((test) => ({
          id: test.id,
          question: test.question,
          options: test.options,
          answer: Number(test.answer),
          explanation: test.explanation || "",
        }));

        setQuestions(allQuestions);
      } catch (error) {
        console.error("LEVEL TEST ERROR:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getTests();
  }, []);

  async function finishLevelTest(correctAnswers) {
    try {
      setError("");

      if (!user?.email) {
        throw new Error(
          "Корбар ворид нашудааст. Аввал ба аккаунт ворид шавед.",
        );
      }

      const response = await fetch(`${API_URL}/api/users/level-test`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          correctAnswers,
          totalQuestions: 50,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Сатҳро муайян кардан нашуд");
      }

      setResult(data);
      console.log(data);

      if (data.user) {
        dispatch(login(data.user));
      }
    } catch (error) {
      console.error("LEVEL TEST POST ERROR:", error);

      setError(error.message || "Ҳангоми муайян кардани сатҳ хатогӣ рух дод");
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-slate-500">Тестҳо зеркашӣ шуда истодаанд...</p>
      </div>
    );
  }

  if (error && !questions.length) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-red-600">Хатогӣ</h2>

          <p className="mt-3 text-slate-500">{error}</p>
        </div>
      </div>
    );
  }

  if (questions.length < 40) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-800">
            Барои Level Test 40 савол лозим аст
          </h2>

          <p className="mt-3 text-slate-500">
            Ҳоло танҳо {questions.length} савол дастрас аст.
          </p>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div className="mx-auto max-w-4xl">
        <div className="my-15 rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-xl shadow-slate-200/50">
          <h2 className="text-3xl font-bold text-slate-800">
            Сатҳи шумо муайян шуд
          </h2>

          <p className="mt-6 text-5xl font-bold text-blue-600">
            {result.level}
          </p>

          <p className="mt-4 text-slate-500">
            {result.correctAnswers} аз {result.totalQuestions} ҷавоб дуруст
          </p>

          <p className="mt-2 text-slate-500">Натиҷа: {result.percentage}%</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {error && (
        <div className="mx-auto mb-5 max-w-4xl rounded-2xl border border-red-200 bg-red-50 p-4 text-center text-red-600">
          {error}
        </div>
      )}

      <TestComponent
        questions={questions}
        technology="Frontend"
        testName="Муайян кардани сатҳи Frontend"
        questionCount={40}
        saveHistory={false}
        saveMistakes={false}
        giveXp={false}
        onLevelTestFinish={finishLevelTest}
      />
    </>
  );
}

export default LevelTest;
