import { useEffect } from "react"
import { useState } from "react"
import Blog from '../Blog/Blog'
const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=> {
        fetch('./blogs.json')
        .then(res => res.json())
        .then (data =>setBlogs(data))
    }, [])
    return (
        <div className="w-2/3">
             <h3 className='text-2xl'>blogs {blogs.length}</h3>
           {blogs.map( blog => <Blog 
           key={blog.id}
           handleAddToBookmark={handleAddToBookmark} 
           handleMarkAsRead = {handleMarkAsRead}
           blog={blog}>
           </Blog>)}
        </div>
    )
}

export default Blogs