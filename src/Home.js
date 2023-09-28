import { useState, useEffect } from "react"
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8000/blogs").then(res => {
            return res.json()
        }).then(data => {
            setBlogs(data)
        })
    })

    return (
        <div className="home">
            {!blogs && <div>Loading</div> }
            {blogs && <BlogList blogs={blogs} title="All blogs"/>}
            {/*blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "TobCraft3521")} title="TobCraft3521s blogs" />*/}
        </div>
    );
}

export default Home;