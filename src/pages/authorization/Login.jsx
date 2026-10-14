import { useState } from "react";
import ShowPassword from "../../components/ShowPassword";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { login } from "../../store/counter/registrSlice";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import { API_URL } from "../../config/api";

const schema = z.object({
  email: z.string().email("Суроғаи почтаи электронии дурустро ворид кунед."),
  password: z
    .string()
    .min(6, "Рамз бояд ҳадди ақал аз 6 аломат иборат бошад.")
    .max(20, "Рамз наметавонад аз 20 аломат зиёдтар бошад."),
});

function Login() {
  const [password, setPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const emailFromState = location.state?.email;
  const message = location.state?.message;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: emailFromState || "",
      password: "",
    },
  });

  const onSubmit = async (formData) => {
    try {
      setError("root", { message: "" });

      const response = await fetch(`${API_URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Воридшавӣ иҷро нашуд.");
      }

      if (!result.token || !result.user) {
        throw new Error("Сервер маълумоти пурраи корбарро барнагардонд.");
      }

      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));

      if (result.user.role === "admin") {
        localStorage.setItem("admin", JSON.stringify(result.user));
      } else {
        localStorage.removeItem("admin");
      }

      dispatch(login(result.user));

      navigate(
        result.user.role === "admin"
          ? "/admin"
          : location.state?.from?.pathname || "/",
        { replace: true },
      );
    } catch (error) {
      setError("root", {
        message: error.message || "Ба сервер пайваст шудан имконнопазир аст.",
      });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage:
          'url("https://static.vecteezy.com/system/resources/previews/070/681/712/non_2x/artificial-intelligence-activation-businessman-interfaces-with-ai-circuitry-signaling-the-future-of-technology-and-innovation-photo.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        whileHover={{
          scale: 1.03,
          boxShadow: "0 0 25px rgba(0, 149, 255, 0.4)",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        className="w-full max-w-md backdrop-blur-2xl shadow-2xl p-10 rounded-3xl border border-blue-400"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <Link to="/" title="Главная страница">
            <span className="font-bold text-white text-2xl">Ё-FrontEnd</span>
          </Link>

          <motion.h2
            whileHover={{
              color: "#3B82F6",
              scale: 1.05,
            }}
            transition={{ duration: 0.3 }}
            className="text-3xl font-extrabold text-center text-blue-500 my-4"
          >
            Дохил шудан ба ҳисоб
          </motion.h2>

          {message && (
            <p className="text-green-600 text-sm text-center">{message}</p>
          )}

          <TextField
            {...register("email")}
            label="example@mail.com"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <label className="relative flex flex-col">
            <input
              {...register("password")}
              type={password ? "text" : "password"}
              placeholder="Рамз"
              className="border border-gray-400 rounded-sm p-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
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

          <Link
            to="/register"
            className="text-center text-blue-600 hover:underline"
          >
            Бақайдгирӣ?
          </Link>

          {errors.root && (
            <p className="text-red-500 text-center font-medium">
              {errors.root.message}
            </p>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className="mt-4 cursor-pointer bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 transition disabled:opacity-50"
          >
            {isSubmitting ? "Дохил мешавем..." : "Дохил шудан"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
