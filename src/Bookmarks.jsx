/* eslint-disable */

import { Link } from "react-router-dom";
import BooksCard from "./BooksCard";

const Bookmarks = ({ bookmarks, onToggleBookmark }) => {
  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_85%_20%,rgba(186,230,253,0.75),transparent_35%),linear-gradient(to_bottom,#ffffff,#f8fbff)]">
      <div className="min-h-screen bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:72px_72px]">
        <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/75 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
            <Link
              to="/"
              className="font-fraunces text-xl font-bold tracking-tight text-slate-950"
            >
              Book<span className="text-blue-400">Finder</span>
            </Link>

            <div className="hidden items-center gap-8 font-inter md:flex">
              <Link
                to="/search"
                className="text-sm font-medium text-slate-700 hover:text-slate-950"
              >
                Search
              </Link>
              <a
                href="#"
                className="text-sm font-medium text-slate-700 hover:text-slate-950"
              >
                About
              </a>
              <a
                href="#"
                className="text-sm font-medium text-slate-700 hover:text-slate-950"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-7xl px-6 pt-28 pb-16 md:px-10 md:pt-32 md:pb-24">
          <section className="mb-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
              <span className="text-blue-500">✦</span>
              Your personal reading shelf
            </div>

            <h1 className="font-fraunces text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
              My <span className="text-blue-300">Bookmarks</span>
            </h1>

            <p className="mt-5 max-w-2xl font-inter text-lg leading-8 text-slate-600">
              Books you saved for later — all in one clean, organized place.
            </p>
          </section>

          {bookmarks.length === 0 ? (
            <div className="mx-auto flex max-w-xl flex-col items-center rounded-[2rem] border border-slate-200/80 bg-white/75 p-10 text-center shadow-xl shadow-slate-900/5 backdrop-blur">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-sm">
                📚
              </div>

              <h2 className="font-inter text-2xl font-bold text-slate-950">
                No bookmarked books yet
              </h2>

              <p className="mt-3 font-inter text-slate-600">
                Start searching and tap the heart icon to save your favourite books.
              </p>

              <Link
                to="/search"
                className="mt-8 rounded-full bg-slate-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Search books
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {bookmarks.map((book) => (
                <BooksCard
                  key={book.id}
                  book={book}
                  onClick={() => {}}
                  onToggleBookmark={onToggleBookmark}
                  isBookmarked={true}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Bookmarks;