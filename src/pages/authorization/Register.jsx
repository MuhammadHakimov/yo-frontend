import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ShowPassword from "../../components/ShowPassword";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { API_URL } from "../../config/api";
const schema = z
  .object({
    name: z.string().min(1, "Ном ҳатмист").max(20, "Максимум 20 символ"),

    surename: z.string(),

    email: z.string().email("Email нодуруст аст"),

    password: z
      .string()
      .min(6, "Рамз бояд ҳадди ақал аз 6 аломат иборат бошад.")
      .max(20, "Рамз наметавонад аз 20 аломат зиёдтар бошад."),

    password2: z
      .string()
      .min(6, "Рамз бояд ҳадди ақал аз 6 аломат иборат бошад.")
      .max(20, "Рамз наметавонад аз 20 аломат зиёдтар бошад."),
  })
  .refine((data) => data.password === data.password2, {
    message: "Рамзҳо мувофиқ нестанд",
    path: ["password2"],
  });

function Register() {
  const [password, setPassword] = useState(false);
  const [password2, setPassword2] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${API_URL}/api/verification/send-code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          surename: data.surename,
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError("root", {
          message: result.message || "Хатогӣ ҳангоми фиристодани код",
        });
        return;
      }

      navigate("/verify-email", {
        state: {
          name: data.name,
          surename: data.surename,
          email: data.email,
          password: data.password,
        },
      });
    } catch (error) {
      setError("root", {
        message: "Ба сервер пайваст шудан имконнопазир аст",
      });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage:
          'url("https://f1studioz.com/blog/wp-content/uploads/2024/10/DALL%C2%B7E-2024-10-16-14.13.05-A-minimalist-futuristic-illustration-of-a-person-interacting-with-a-chatbot-on-a-website.-The-scene-is-set-in-a-dark-grey-sleek-environment-with-soft-1024x585.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md backdrop-blur-2xl shadow-2xl p-10 rounded-4xl border border-blue-400">
        <Link to="/" title="Главная страница">
          <span className="font-bold text-white text-2xl">Ё-Frontend</span>
        </Link>

        <h2 className="text-3xl font-extrabold text-center text-blue-700 my-8 tracking-wide">
          Бақайдгирӣ
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <TextField
            {...register("name")}
            label="Номи шумо"
            variant="outlined"
          />

          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          <TextField
            {...register("surename")}
            label="Насаби шумо"
            variant="outlined"
          />

          {errors.surename && (
            <p className="text-red-500 text-sm">{errors.surename.message}</p>
          )}

          <TextField
            {...register("email")}
            label="example@mail.com"
            variant="outlined"
          />

          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <label className="relative flex flex-col">
            <input
              {...register("password")}
              type={password ? "text" : "password"}
              className="border border-gray-400 rounded-sm p-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Рамзро ворид кунед"
            />

            <div className="absolute right-3 top-2 cursor-pointer">
              <ShowPassword
                showPassword={password}
                setShowPassword={setPassword}
              />
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </label>

          <label className="relative flex flex-col">
            <input
              {...register("password2")}
              type={password2 ? "text" : "password"}
              className="border border-gray-400 rounded-sm p-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Рамзро дубора ворид кунед"
            />

            <div className="absolute right-3 top-2 cursor-pointer">
              <ShowPassword
                showPassword={password2}
                setShowPassword={setPassword2}
              />
            </div>

            {errors.password2 && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password2.message}
              </p>
            )}
          </label>

          <Link
            to="/login"
            className="text-center text-blue-600 hover:underline"
          >
            Аллакай ҳисоб доред? Ворид шавед
          </Link>

          {errors.root && (
            <p className="text-red-500 text-center font-medium">
              {errors.root.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 cursor-pointer bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 transition disabled:opacity-50"
          >
            {isSubmitting ? "Код фиристода мешавад..." : "Қайд кардан"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
