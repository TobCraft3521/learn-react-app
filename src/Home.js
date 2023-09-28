import { useState, useEffect } from "react"
import BlogList from "./BlogList";
import useFetch from "./UseFetch";
const Home = () => {
    const {data:blogs,error} = useFetch("http://localhost:8000/blogs")
   
    return (
        <div className="home">
            {error&& <div>Error: {error}</div> }
            {!blogs && <div>Loading</div> }
            {blogs && <BlogList blogs={blogs} title="All blogs"/>}
            {/*blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "TobCraft3521")} title="TobCraft3521s blogs" />*/}
        </div>
    );
}

export default Home;