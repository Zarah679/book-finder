/* eslint-disable */

import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const DetailsModal = ({ book, onClose }) => {
  const info = book.volumeInfo;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-[90vh] w-full max-w-5xl grid-cols-1 overflow-y-auto rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl md:grid-cols-[280px_1fr] md:gap-8 md:p-8"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-500 shadow-sm transition hover:text-slate-950"
        >
          <IoClose className="text-xl" />
        </button>

        <div className="flex justify-center items-center">
            <div className="rounded-[2rem] border border-slate-200/70 bg-white/70 p-6 shadow-xl shadow-slate-900/5 backdrop-blur">
                {info.imageLinks?.thumbnail ? (
                <img
                    src={info.imageLinks.thumbnail}
                    alt={info.title}
                    className="h-80 w-52 rounded-xl object-cover shadow-2xl shadow-slate-900/20"
                />
                ) : (
                <div className="flex h-80 w-52 items-center justify-center rounded-xl border border-slate-200 bg-white text-center text-sm text-slate-400">
                    No cover available
                </div>
                )}
            </div>
        </div>

        <div className="mt-6 md:mt-0 md:pr-10">
          <p className="mb-3 font-inter text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
            Book details
          </p>

          <h2 className="font-fraunces text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
            {info.title}
          </h2>

          <p className="mt-4 font-inter text-lg text-slate-600">
            {info.authors?.join(", ") || "Unknown author"}
          </p>

          <div className="mt-5 flex flex-wrap gap-3 font-inter text-sm text-slate-600">
            {info.publisher && (
              <span className="rounded-full border border-slate-200 bg-white/70 px-4 py-2">
                {info.publisher}
              </span>
            )}

            {info.publishedDate && (
              <span className="rounded-full border border-slate-200 bg-white/70 px-4 py-2">
                {info.publishedDate}
              </span>
            )}
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6 font-inter text-sm leading-7 text-slate-700">
            {info.description ? (
              <p dangerouslySetInnerHTML={{ __html: info.description }} />
            ) : (
              <p>No description available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;