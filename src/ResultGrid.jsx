/* eslint-disable */ 

import BookCardSkeleton from "./BookCardSkeleton";
import BooksCard from "./BooksCard";
import Pagination from "./Pagination";

const ResultGrid = ({
  books,
  loading,
  onSelectBook,
  onToggleBookmark,
  bookmarks,
  totalPosts,
  postPerPage,
  currentPage,
  setCurrentPage
}) => {
  return (
    <>
      <div className="bg-white px-2 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full shadow border rounded-xl gap-3">
      {loading ? (
        Array.from({ length: 8 }).map((_, i) => (
          <BookCardSkeleton key={i} />
        ))
      ) : (
        books.map((book) => (
          <BooksCard
            key={book.id}
            book={book}
            onClick={onSelectBook}
            onToggleBookmark={onToggleBookmark}
            isBookmarked={bookmarks.some((b) => b.id === book.id)}
          />
        ))
      )}
      </div>
      <Pagination 
          totalPosts={totalPosts}
          postPerPage={postPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
      />
    </>
    
  );
};

export default ResultGrid;
