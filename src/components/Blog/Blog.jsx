import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, reading_time, author_img, author, posted_date, hashtags} = blog;
    return (
        <div className="mb-20 space-y-4">
            <img className="w-full mb-4" src={cover} alt={`cover picture of ${title}`}/>
            <div className="flex justify-between mb-4 ">
                <div className="flex mb-4">
                    <img className="w-14" src={author_img}/>
                    <div className="ml-4">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() =>handleAddToBookmark(blog)}><FaBookmark/></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p className="mb-4">
                {hashtags.map((hashtag, idx) => <span key={idx}><a>#{hashtag}</a></span>)}
            </p>
            <button className='text-purple-600 font-bold underline' onClick={() => handleMarkAsRead(reading_time)}>Mark as Read</button>
        </div>
    )
}

export default Blog