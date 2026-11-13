
import { motion } from "framer-motion";
import { Send, ArrowRight, Bot } from "lucide-react";

const TelegramBanner = () => {
  const botLink = "https://t.me/Erdamchy_bot";

  return (
    <div className="w-full px-0 py-8" id='bot'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-5 py-10 shadow-lg sm:px-8 md:py-12"
      >
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 text-center md:flex-row md:justify-between md:text-left">

          <div className="max-w-xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm text-white">
              <Send size={15} />
              Ё-Барномасоз дар Telegram
            </span>

            <h2 className="mb-4 text-2xl font-bold leading-tight text-white md:text-4xl">
              Омӯзиши барномасозӣ
              <br />
              акнун дар Telegram!
            </h2>

            <p className="mb-6 text-sm leading-7 text-blue-50 md:text-base">
              Бо ёрии Telegram-боти мо барномасозиро омӯзед,
              донишатонро санҷед ва малакаҳои худро инкишоф диҳед.
            </p>

            <a
              href={botLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Send size={18} />
              Ба Telegram гузаштан
              <ArrowRight size={18} />
            </a>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex h-32 w-32 shrink-0 items-center justify-center rounded-3xl border border-white/30 bg-white/20 text-white shadow-xl backdrop-blur-md md:h-44 md:w-44"
          >
            <Bot size={85} strokeWidth={1.5} />
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default TelegramBanner;
