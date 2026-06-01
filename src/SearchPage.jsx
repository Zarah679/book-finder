/* eslint-disable */ 

import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import ResultGrid from "./ResultGrid";
import EmptyState from "./EmptyState";
import DetailsModal from "./DetailsModal";
import Pagination from "./Pagination";

const SearchPage = ({ bookmarks, onToggleBookmark }) => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [hasSearched, setHasSearched] = useState(false)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  //States for Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(8)

  //Pagination Calculation
  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage
  const currentPosts = books.slice(firstPostIndex, lastPostIndex)
  

  const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          query
        )}&maxResults=12`
      );

      if (!res.ok) throw new Error("Failed to fetch books");

      const data = await res.json();
      setBooks(data.items || []);
      setHasSearched(true)
    } catch (err) {
      setError("Something went wrong while fetching books!");
      setBooks([]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
  <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_85%_20%,rgba(186,230,253,0.75),transparent_35%),linear-gradient(to_bottom,#ffffff,#f8fbff)]">
    <div className="min-h-screen bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:72px_72px]">
      
      <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <h1 className="text-xl font-bold tracking-tight text-slate-950 font-fraunces">
            Book<span className="text-blue-400">Finder</span>
          </h1>

          <div className="hidden items-center gap-8 font-inter md:flex">
            <a className="text-sm font-medium text-slate-700 hover:text-slate-950" href="#">
              About
            </a>
            <a className="text-sm font-medium text-slate-700 hover:text-slate-950" href="#">
              Contact
            </a>
            <Link
              to="/bookmarks"
              className="text-sm font-medium text-slate-700 hover:text-slate-950"
            >
              My Bookmarks
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-6 pt-28 pb-16 md:px-10 md:pt-32 md:pb-24">
        <section className="flex flex-col items-center text-center">
          
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
            <span className="text-blue-500">✦</span>
            Search millions of books in seconds
          </div>

          <h1 className="max-w-5xl font-fraunces text-5xl font-semibold leading-[1.05] tracking-tight text-slate-950 md:text-7xl">
            Find your next{" "}
            <span className="text-blue-300">favourite</span> book by{" "}
            <span className="italic text-slate-800">title</span>,{" "}
            <span className="text-blue-300">author</span> or publisher
          </h1>

          <p className="mt-6 max-w-2xl font-inter text-lg leading-8 text-slate-600">
            Search by title, author, publisher, or keywords — then open details
            and save your favourite finds to your personal library.
          </p>

          <form
            onSubmit={handleSearch}
            className="mt-10 flex w-full max-w-4xl items-center gap-3 rounded-full border border-slate-200/80 bg-white/85 px-5 py-4 shadow-xl shadow-slate-900/5 backdrop-blur"
          >
            <input
              type="text"
              name="search"
              placeholder="Enter your search..."
              className="w-full bg-transparent font-inter text-base text-slate-800 outline-none placeholder:text-slate-400"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <button
              type="submit"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white transition hover:bg-slate-800"
            >
              <FaSearch className="text-sm" />
            </button>
          </form>

          <div className="mt-12 w-full">
            {loading ? (
              <p className="font-inter text-slate-500">Loading books...</p>
            ) : error ? (
              <p className="mb-4 font-inter text-red-500">{error}</p>
            ) : !hasSearched ? (
              <EmptyState />
            ) : books.length === 0 ? (
              <div className="mx-auto max-w-md rounded-3xl border border-slate-200/80 bg-white/75 p-8 shadow-sm backdrop-blur">
                <p className="font-inter text-slate-600">
                  No books found. Try a different search.
                </p>
              </div>
            ) : (
              <ResultGrid
                books={currentPosts}
                loading={loading}
                onSelectBook={setSelectedBook}
                onToggleBookmark={onToggleBookmark}
                bookmarks={bookmarks}
                totalPosts={books.length}
                postPerPage={postPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </div>

          {selectedBook && (
            <DetailsModal
              book={selectedBook}
              onClose={() => setSelectedBook(null)}
            />
          )}

        </section>
      </main>
    </div>
  </div>
);
};

export default SearchPage;
