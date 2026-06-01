
const Pagination = ({ totalPosts, postPerPage, currentPage, setCurrentPage }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i += 1) {
    pages.push(i);
  }

  if (pages.length <= 1) return null;

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => setCurrentPage(page)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            currentPage === page
              ? "bg-slate-950 text-white"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination
