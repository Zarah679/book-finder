/* eslint-disable */ 

import { FaRegHeart, FaHeart } from "react-icons/fa";

const BooksCard = ({ book, onClick, onToggleBookmark, isBookmarked }) => {
  const info = book.volumeInfo;

  return (
    <div
      className="bg-white/5 rounded-2xl p-4 shadow-md relative cursor-pointer"
      onClick={() => onClick(book)}
    >
      <img
        src={
          info.imageLinks?.thumbnail || "/fallback.jpg"
        }
        alt={info.title}
        className="mb-4 object-cover h-60 w-full"
      />

      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleBookmark(book);
        }}
        className="absolute top-6 right-6 bg-white/90 rounded-full p-2 shadow"
      >
        {isBookmarked ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart className="hover:text-red-500" />
        )}
      </button>

      <h2>{info.title}</h2>
      <p className="text-sm text-gray-600">
        {info.authors?.join(", ") || "Unknown author"}
      </p>
      <p>{info.publishedDate}</p>
    </div>
  );
};

export default BooksCard;