import { Link } from 'react-router-dom';
function MainBanner() {
  return (
    <section
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl"></div>
        <div className="absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-indigo-100/40 blur-3xl"></div>
      </div>

      <div className="mx-auto grid w-[92%] max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>


          <h1 className="mt-7 max-w-3xl text-2xl font-black   text-slate-950 sm:text-5xl md:text-5,5xl ">
            Барои барномасозон 
            <br />
            ё нафароне, ки 
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              мехоҳанд барномасоз шаванд
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
            Frontend-ро аз сифр омӯзед, тест супоред, вазифа иҷро кунед,
            XУ гиред ва сатҳи худро баланд бардоред.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#lessons"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              Оғози омӯзиш
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div className="mt-6 md:mt-12 flex flex-wrap items-center gap-x-4 md:gap-x-8 gap-y-5 border-t border-slate-200 pt-7">
            <div>
              <strong className="block text-2xl font-black text-slate-950">
                5+
              </strong>
              <span className="text-xs font-medium text-slate-400">
                Технология
              </span>
            </div>

            <div className="h-10 w-px bg-slate-200"></div>

            <div>
              <strong className="block text-2xl font-black text-slate-950">
                100+
              </strong>
              <span className="text-xs font-medium text-slate-400">
                Дарс ва тест
              </span>
            </div>

            <div className="h-10 w-px bg-slate-200"></div>

            <div>
              <strong className="block text-2xl font-black text-slate-950">
                XУ
              </strong>
              <span className="text-xs font-medium text-slate-400">
                Системаи сатҳ
              </span>
            </div>
          </div>
        </div>
<div className="hidden md:flex relative mx-auto  w-full max-w-xl items-center justify-center lg:ml-auto">
  <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-100/60 blur-3xl" />

  <div className="relative h-[480px] w-full max-w-[500px]">
    <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/60" />

    <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-200" />

    <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2.5rem] border border-white bg-white shadow-2xl shadow-blue-200/60">
      <div className="flex h-24 w-24 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 shadow-xl shadow-indigo-300/50">
        <span className="text-5xl font-black text-white">
          Ё
        </span>
      </div>
    </div>

    <div className="absolute left-5 top-16 flex h-20 w-20 rotate-[-12deg] items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-xl">
      <span className="text-3xl font-black text-orange-500">
        HTML
      </span>
    </div>

    <div className="absolute right-5 top-24 flex h-20 w-20 rotate-[10deg] items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-xl">
      <span className="text-2xl font-black text-blue-500">
        CSS
      </span>
    </div>

    <div className="absolute bottom-20 left-8 flex h-20 w-20 rotate-[8deg] items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-xl">
      <span className="text-xl font-black text-yellow-500">
        JS
      </span>
    </div>
    <Link to='/react-hooks'>

    <div className="absolute bottom-10 right-8 flex h-20 w-20 rotate-[-8deg] items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-xl">
      <span className="text-3xl font-black text-cyan-500">
        ⚛
      </span>
    </div>
    </Link>
    


    <div className="absolute left-[18%] top-[42%] h-3 w-3 rounded-full bg-blue-500 shadow-lg shadow-blue-300" />

    <div className="absolute right-[20%] top-[38%] h-2.5 w-2.5 rounded-full bg-violet-500 shadow-lg shadow-violet-300" />

    <div className="absolute bottom-[27%] left-[30%] h-2 w-2 rounded-full bg-indigo-500" />

    <div className="absolute bottom-[32%] right-[31%] h-3 w-3 rounded-full bg-cyan-500 shadow-lg shadow-cyan-300" />

    <div className="absolute left-1/2 top-1/2 h-[1px] w-[210px] -translate-x-1/2 -translate-y-1/2 rotate-[25deg] bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

    <div className="absolute left-1/2 top-1/2 h-[1px] w-[210px] -translate-x-1/2 -translate-y-1/2 rotate-[-25deg] bg-gradient-to-r from-transparent via-violet-300 to-transparent" />

    <div className="absolute left-1/2 top-1/2 h-[1px] w-[230px] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
    <Link to='/lessons'>

    <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-lg">
      <span className="text-xs font-bold text-slate-600">
        Learn
      </span>
    </div></Link>
    <Link to='/tests'>

    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-lg">
      <span className="text-xs font-bold text-slate-600">
        Test
      </span>
    </div></Link>
    <Link to='/chatbot'>

    <div className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-lg">
      <span className="text-xs font-bold text-slate-600">
        Ai
      </span>
    </div></Link>

    <Link to='/tasks'>
    <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-lg">
      <span className="text-xs font-bold text-slate-600">
        Task
      </span>
    </div></Link>
  </div>
</div>

      </div>
    </section>
  );
}

export default MainBanner;