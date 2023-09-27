import { useState } from "react"
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new webside", body: "lorem ipsum...", author: "TobCraft3521", id: 1 },
        { title: "My new react app", body: "lorem ipsum...", author: "TobCraft3521", id: 2 },
        { title: "Ad vor my webside", body: "lorem ipsum...", author: "TobCraft3521", id: 3 },
        { title: "Random blog", body: "lorem ipsum...", author: "TobCraft3521", id: 4 },
    ])
    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author} </p>
                </div>
            ))}
        </div>
    );
}

export default Home;