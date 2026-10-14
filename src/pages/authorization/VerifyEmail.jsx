import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import { motion } from "framer-motion";
import { API_URL } from "../../config/api";

const schema = z.object({
  code: z
    .string()
    .length(6, "Код бояд аз 6 рақам иборат бошад")
    .regex(/^\d{6}$/, "Танҳо 6 рақам ворид кунед"),
});

function VerifyEmail() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      code: "",
    },
  });

  const verifyEmail = async (data) => {
    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(`${API_URL}/api/verification/verify-code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          code: data.code,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.message || "Код нодуруст аст");
        return;
      }

      navigate("/login", {
        state: {
          email,
          message: "Email бомуваффақият тасдиқ шуд",
        },
      });
    } catch {
      setMessage("Ба сервер пайваст шудан имконнопазир аст");
    } finally {
      setLoading(false);
    }
  };

  if (!email) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <p className="text-gray-600">
          Email ёфт нашуд. Аз нав сабти ном кунед.
        </p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15, 23, 42, 0.35), rgba(15, 23, 42, 0.35)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-white/40 bg-white/85 p-6 shadow-lg backdrop-blur-sm sm:p-8"
      >
        <h1 className="mb-2 text-2xl font-bold text-gray-800">
          Тасдиқи email
        </h1>
        <p className="mb-6 text-sm text-gray-600">
          Код ба <span className="font-medium text-gray-800">{email}</span>
          фиристода шуд. Коди 6-рақамаро ворид кунед.
        </p>
        <form onSubmit={handleSubmit(verifyEmail)} noValidate>
          <TextField
            {...register("code")}
            label="Коди тасдиқ"
            placeholder="123456"
            type="text"
            fullWidth
            error={!!errors.code} 
            helperText={errors.code?.message}
            sx={{ mb: 2 }}
          />

          {message && (
            <p className="mb-4 text-sm text-red-600" role="alert">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Санҷида истодаем..." : "Тасдиқ кардан"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmail;
