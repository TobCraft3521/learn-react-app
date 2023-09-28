import { useState,useEffect } from "react"
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
       fetch()
    })

    const handleDelete = (id) => {
        setBlogs(blogs.filter(blog => blog.id !== id))
    }
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === "TobCraft3521")} title="TobCraft3521s blogs" handleDelete={handleDelete} />
        </div>
    );
}

export default Home;