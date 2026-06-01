import { FaLongArrowAltRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

  return (
    // page 
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_85%_20%,rgba(186,230,253,0.75),transparent_35%),linear-gradient(to_bottom,#ffffff,#f8fbff)]">
      <div className="min-h-screen bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:72px_72px]">
        
        <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
            <h1 className="text-xl font-bold tracking-tight text-slate-950">
              BookFinder
            </h1>

            <div className="hidden items-center gap-8 md:flex">
              <a className="text-sm font-medium text-slate-700 hover:text-slate-950" href="#">
                Search
              </a>
              <a className="text-sm font-medium text-slate-700 hover:text-slate-950" href="#">
                Bookmarks
              </a>
              <a className="text-sm font-medium text-slate-700 hover:text-slate-950" href="#">
                About
              </a>
            </div>

            <button
              onClick={() => navigate("/search")}
              className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Start reading
            </button>
          </nav>
        </header>

        <main className="mx-auto max-w-7xl px-6 pt-28 pb-16 md:px-10 md:pt-32 md:pb-24">
          <section className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
            
            <div className="flex flex-col items-start">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
                <span className="text-blue-500">✦</span>
                Search by title, author, or publisher
              </div>

              <h1 className="max-w-2xl text-6xl font-semibold leading-[0.95] tracking-tight text-slate-950 md:text-7xl lg:text-8xl">
                Find books.
                <span className="block italic text-slate-700">Save your</span>
                favorites.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
                Search for books anywhere. You don&apos;t need to know the exact
                title — search by author, publisher, or keywords and keep your best
                finds organized.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => navigate("/search")}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Search now
                  <FaLongArrowAltRight />
                </button>

                <button className="rounded-full border border-slate-300/80 bg-white/70 px-7 py-4 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white">
                  View bookmarks
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-10 top-10 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl" />
              <div className="absolute bottom-0 left-8 h-56 w-56 rounded-full bg-blue-200/50 blur-3xl" />

              <div className="relative rounded-[2rem] bg-slate-200/60 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur">
                <div className="absolute -left-8 top-10 max-w-xs rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-xl backdrop-blur">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    Search tip
                  </p>
                  <p className="text-sm font-medium leading-6 text-slate-800">
                    Try searching by author name when you don&apos;t remember the book title.
                  </p>
                </div>

                <img
                  className="relative mx-auto w-full max-w-lg drop-shadow-2xl"
                  src="/reading.svg"
                  alt="Reading illustration"
                />

                <div className="absolute -right-5 bottom-12 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-xl backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    Saved
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950">12</p>
                  <p className="text-sm text-slate-500">favorite books</p>
                </div>
              </div>
            </div>

          </section>
        </main>
      </div>
    </div>
  )
}

export default Home
