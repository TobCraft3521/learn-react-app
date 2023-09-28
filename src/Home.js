import { useState } from "react"
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new webside", body: "lorem ipsum...", author: "TobCraft3521", id: 1 },
        { title: "My new react app", body: "lorem ipsum...", author: "ClayrCraft3521", id: 2 },
        { title: "Ad vor my webside", body: "lorem ipsum...", author: "TobCraft3521", id: 3 },
        { title: "Random blog", body: "lorem ipsum...", author: "user1", id: 4 },
    ])
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs"/>
            <BlogList blogs = {blogs.filter((blog) => blog.author === "TobCraft3521")} title="TobCraft3521s blogs" />
        </div>
    );
}

export default Home;