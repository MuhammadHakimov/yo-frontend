import { Megaphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Reklamma() {
  return (
    <section className="w-full px-4 py-16 hidden md:inline-block">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 md:p-12 text-white shadow-xl">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-sm font-medium mb-5">
                <Megaphone size={17} />
                Ҷой барои реклама
              </div>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Бренди худро ба аудиторияи мо нишон диҳед
              </h2>

              <p className="mt-4 text-white/80 text-base md:text-lg leading-7">
                Агар шумо мехоҳед маҳсулот, хизматрасонӣ ё бренди худро
                ба корбарони платформаи Ё-барномасоз муаррифӣ кунед,
                ин ҷой барои рекламаи шумост.
              </p>

              <Link to='admin-message'>
                <button  className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition">
                Ҷойгир кардани реклама
                <ArrowRight size={18} />
              </button>
              </Link>
            </div>

            <div className="w-full md:w-80 shrink-0">
              <div className="aspect-video rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6">
                <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-4">
                  <Megaphone size={36} className="text-indigo-600" />
                </div>

                <h3 className="text-lg font-bold">
                  Рекламаи шумо
                </h3>

                <p className="mt-2 text-sm text-white/70">
                  Логотип ва маълумоти ширкати шумо дар ин ҷо нишон дода мешавад
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reklamma;