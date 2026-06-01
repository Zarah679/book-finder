import { IoBookOutline } from "react-icons/io5"
import { LuSparkles } from "react-icons/lu"

const EmptyState = () => {
  return (
    <div className="mx-auto text-center flex flex-col justify-center items-center max-w-xl">
      <div className="relative px-7 py-7 border border-width-2px border-slate-300 rounded-xl mb-8 mt-4">
        <div className="absolute top-[-8px] right-[-8px] bg-black rounded-full p-2">
          < LuSparkles className="text-white" />
        </div>
        < IoBookOutline className="text-4xl"/>
      </div>
      <h1 className="text-3xl font-semibold mb-3">Your next great read awaits</h1>
      <p className="mb-2 max-w-md">Search millions of books to discover stories, ideas, and authors you&apos;ll love. Start by typing a title, author or a publisher.</p>
    </div>
  )
}

export default EmptyState
