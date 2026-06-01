
const BookCardSkeleton = () => {
  return (
    <div className="book-card-skeleton">
      <div className="skel cover" />       {/* book cover */}
      <div className="skel title-line" />  {/* title */}
      <div className="skel title-line short" /> {/* subtitle/second line */}
      <div className="skel author-line" /> {/* author */}
    </div>
  )
}

export default BookCardSkeleton
