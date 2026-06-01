import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SearchPage from "./SearchPage";
import Bookmarks from "./Bookmarks";

function App() {

  //this instead of useEffect(which requires rerender) because bookmarks is set correctly from start
  //run the function immediately state is initialized, so bookmarks appear immediately
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("bookmarks");
    return saved ? JSON.parse(saved) : [];
  });

  //For saving not loading, when state changes 
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);


  //bookmark function 
  function toggleBookmark(book) {
    const exists = bookmarks.some((b) => b.id === book.id);

    if (exists) {
      setBookmarks(bookmarks.filter((b) => b.id !== book.id));
    } else {
      setBookmarks([...bookmarks, book]);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search"
          element={
            <SearchPage
              bookmarks={bookmarks}
              onToggleBookmark={toggleBookmark}
            />
          }
        />
        <Route
          path="/bookmarks"
          element={
            <Bookmarks
              // state 
              bookmarks={bookmarks}
              // add & remove bookmark function 
              onToggleBookmark={toggleBookmark}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;