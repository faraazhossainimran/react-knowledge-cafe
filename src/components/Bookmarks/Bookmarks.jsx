import Bookmark from "../Bookmark/Bookmark"

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3">
            <div className="text-[#6047EC]"><h2 className="text-2xl">Spent Time on Read: {readingTime}</h2></div>
            <h3 className="text-2xl">Bookmarks blogs {bookmarks.length}</h3>
            
            {bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)}
        </div>
    )
}

export default Bookmarks