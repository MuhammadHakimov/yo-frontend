import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/counter/registrSlice";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  LayoutGrid,
  Trophy,
  Code2,
  Settings,
  Paintbrush,
  Palette,
  Atom,
} from "lucide-react";
import H2 from "../Typography/H2";
import { API_URL } from "../config/api";

function TestComponent({ 
  questions: initialQuestions = [],
  technology = "",
  testName = "",
  questionCount = 10,
  saveHistory = true,
  saveMistakes = true,
  giveXp = true,
  onBack,
  onQuestionCorrect,
  onLevelTestFinish,
}) {
  const user = useSelector((state) => state.registr.login);

  const dispatch = useDispatch();

  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [earnedXp, setEarnedXp] = useState(0);
  const [started, setStarted] = useState(false);

  function shuffleQuestions(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }

  function startTest() {
    if (!initialQuestions.length) return;

    const shuffled = shuffleQuestions(initialQuestions);

    const selected = shuffled.slice(
      0,
      Math.min(questionCount, initialQuestions.length),
    );

    setQuestions(selected);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setEarnedXp(0);
    setFinished(false);
    setStarted(true);
  }

  async function saveXp(xp) {
    if (!giveXp || !user?.email || xp <= 0) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/users/xp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          xp,
        }),
      });

      const result = await response.json();

      if (response.ok && result.user) {
        dispatch(login(result.user));
      }
    } catch (error) {
      console.error("XP REQUEST ERROR:", error);
    }
  }

  async function saveMistake(question) {
    if (!saveMistakes || !user?.id) {
      return;
    }

    const mistakeData = {
      userId: String(user.id),
      technology,
      questionId: question.id || `${technology}-${questionIndex + 1}`,
      question: question.question,
      options: Array.isArray(question.options) ? question.options : [],
      selectedAnswer: question.options?.[selectedAnswer] ?? "",
      correctAnswer: question.options?.[question.answer] ?? "",
      answer: question.answer,
      explanation: question.explanation || "",
      date: new Date().toISOString(),
    };

    try {
      const response = await fetch(`${API_URL}/api/users/mistakes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mistakeData),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));

        console.error(
          "MISTAKE SAVE ERROR:",
          result.message || "Хатогӣ ҳангоми нигоҳдории хато",
        );
      }
    } catch (error) {
      console.error("MISTAKE REQUEST ERROR:", error);
    }
  }

  async function saveTestHistory(finalScore, xp) {
    if (!saveHistory || !user?.id) {
      return;
    }

    const historyData = {
      userId: String(user.id),
      testName: testName || `${technology} Test`,
      technology,
      score: finalScore,
      totalQuestions: questions.length,
      xp,
    };

    try {
      const response = await fetch(`${API_URL}/api/tests/history`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(historyData),
      });

      if (!response.ok) {
        console.error("HISTORY SAVE ERROR");
      }
    } catch (error) {
      console.error("HISTORY FETCH ERROR:", error);
    }
  }

  function chooseAnswer(index) {
    if (selectedAnswer !== null) {
      return;
    }

    setSelectedAnswer(index);
  }

  async function nextQuestion() {
    if (selectedAnswer === null) {
      return;
    }

    const question = questions[questionIndex];

    if (!question) {
      return;
    }

    const isCorrect = Number(selectedAnswer) === Number(question.answer);

    const finalScore = score + (isCorrect ? 1 : 0);

    if (isCorrect) {
      if (onQuestionCorrect && question.id) {
        await onQuestionCorrect(String(question.id));
      }
    }

    if (!isCorrect && !onLevelTestFinish) {
      await saveMistake(question);
    }

    if (questionIndex + 1 >= questions.length) {
      const xp = finalScore * 10;

      setScore(finalScore);
      setEarnedXp(xp);
      setFinished(true);

      if (onLevelTestFinish) {
        await onLevelTestFinish(finalScore);

        return;
      }

      await saveXp(xp);

      await saveTestHistory(finalScore, xp);

      return;
    }

    setScore(finalScore);

    setQuestionIndex((prev) => prev + 1);

    setSelectedAnswer(null);
  }

  function restartTest() {
    startTest();
  }

  function backToMenu() {
    setStarted(false);
    setQuestions([]);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setEarnedXp(0);
    setFinished(false);

    if (onBack) {
      onBack();
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!started || finished) {
        return;
      }

      const key = e.key.toUpperCase();

      if (["A", "B", "C", "D"].includes(key)) {
        const index = key.charCodeAt(0) - 65;

        if (
          index < questions[questionIndex]?.options?.length &&
          selectedAnswer === null
        ) {
          chooseAnswer(index);
        }

        return;
      }

      if (e.key === "Enter" && !e.shiftKey && selectedAnswer !== null) {
        e.preventDefault();
        nextQuestion();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [started, finished, questions, questionIndex, selectedAnswer]);

  function imageOfTest(name) {
    if (name === "JavaScript") {
      return <Settings size={24} />;
    }
    if (name === "HTML") {
      return <Code2 size={24} />;
    }
    if (name === "CSS") {
      return <Paintbrush size={24} />;
    }
    if (name === "Tailwind") {
      return <Palette size={24} />;
    }
    if (name === "React") {
      return <Atom size={24} />;
    }
    return <Code2 size={24} />;
  }

  if (!started) {
    return (
      <div className="mx-auto max-w-4xl">
        <div className="my-15 rounded-4xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/50 md:p-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-blue-600">
              {imageOfTest(technology)}
            </div>

            <H2>{testName || `${technology} Test`}</H2>

            <p className="mt-3 text-slate-500">
              {Math.min(questionCount, initialQuestions.length)} савол
            </p>

            <button
              onClick={startTest}
              disabled={!initialQuestions.length}
              className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-4 font-black text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:bg-slate-300 disabled:bg-none disabled:shadow-none"
            >
              Оғози тест
              <ArrowRight size={19} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (finished) {
    const percent =
      questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-5 py-12">
        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 px-8 py-12 text-center text-white">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/15">
                <Trophy size={48} />
              </div>

              <H2>Тест ба анҷом расид!</H2>

              <p className="mt-3 text-blue-100">{technology}</p>
            </div>

            <div className="p-7 md:p-10">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-5 text-center">
                  <p className="text-xs font-bold text-slate-400">Дуруст</p>

                  <p className="mt-2 text-3xl font-black text-slate-900">
                    {score}/{questions.length}
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-50 p-5 text-center">
                  <p className="text-xs font-bold text-blue-500">Натиҷа</p>

                  <p className="mt-2 text-3xl font-black text-blue-600">
                    {percent}%
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-5 text-center">
                  <p className="text-xs font-bold text-emerald-500">XP</p>

                  <p className="mt-2 text-3xl font-black text-emerald-600">
                    +{earnedXp}
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <div className="mb-2 flex justify-between text-sm font-bold">
                  <span className="text-slate-600">Пешрафт</span>

                  <span className="text-blue-600">{percent}%</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-700"
                    style={{
                      width: `${percent}%`,
                    }}
                  />
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <button
                  onClick={restartTest}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
                >
                  <RotateCcw size={19} />
                  Аз нав гузаштан
                </button>

                <button
                  onClick={backToMenu}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-5 py-4 font-bold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                >
                  <LayoutGrid size={19} />
                  Баромадан
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const question = questions[questionIndex];

  if (!question) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="font-bold text-slate-500">Саволҳо ёфт нашуданд.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-5 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            onClick={backToMenu}
            className="font-semibold text-slate-500 transition hover:text-blue-600"
          >
            ← Баромадан
          </button>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              {imageOfTest(technology)}
            </div>

            <div>
              <p className="text-xs text-slate-400">Технология</p>

            </div>
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-3 flex justify-between text-sm font-bold">
            <span className="text-slate-500">Пешрафти тест</span>

            <span className="text-blue-600">
              {questionIndex + 1} / {questions.length}
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500"
              style={{
                width: `${((questionIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 md:p-10">
          <div className="mb-2 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 font-black text-white">
              {questionIndex + 1}
            </span>

            <div>
              <p className="text-xs font-black uppercase tracking-widest text-blue-600">
                Савол
              </p>

              <p className="text-sm text-slate-400">
                Аз {questions.length} савол
              </p>
            </div>
          </div>

          <H2>{question.question}</H2>

          <div className="mt-8 space-y-3">
            {question.options.map((option, index) => {
              const isCorrect = Number(index) === Number(question.answer);

              const isSelected =
                selectedAnswer !== null &&
                Number(index) === Number(selectedAnswer);

              let optionClass =
                "border-slate-200 bg-slate-50 text-slate-800 hover:border-blue-300 hover:bg-white";

              if (selectedAnswer !== null && isCorrect) {
                optionClass =
                  "border-emerald-400 bg-emerald-50 text-emerald-800";
              } else if (selectedAnswer !== null && isSelected) {
                optionClass = "border-red-400 bg-red-50 text-red-800";
              }

              return (
                <button
                  key={index}
                  onClick={() => chooseAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`flex w-full cursor-pointer items-center gap-4 rounded-xl border px-5 py-3 text-left text-base font-black outline-none transition ${optionClass} ${
                    selectedAnswer !== null ? "cursor-default" : ""
                  }`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 font-black text-slate-500">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span className="flex-1">{option}</span>

                  {selectedAnswer !== null && isCorrect && (
                    <CheckCircle2 size={22} className="text-emerald-500" />
                  )}

                  {selectedAnswer !== null && isSelected && !isCorrect && (
                    <XCircle size={22} className="text-red-500" />
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={nextQuestion}
            disabled={selectedAnswer === null}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 font-black text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:bg-slate-200 disabled:bg-none disabled:text-slate-400 disabled:shadow-none"
          >
            {questionIndex + 1 === questions.length
              ? "Натиҷаро дидан"
              : "Саволи навбатӣ"}

            <ArrowRight size={19} />
          </button>

          {selectedAnswer !== null && (
            <div className="mt-6 rounded-2xl bg-slate-50 p-5">
              <p className="font-black text-slate-900">
                {Number(selectedAnswer) === Number(question.answer)
                  ? "Ҷавоб дуруст аст!"
                  : "Ҷавоб нодуруст аст."}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {question.explanation}
              </p>
            </div>
          )}

          <div className="mt-5 flex flex-wrap justify-center gap-3 text-xs font-bold text-slate-400">
            <span>A / B / C / D — интихоб</span>

            <span>•</span>

            <span>Enter — саволи навбатӣ</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TestComponent;
