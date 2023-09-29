import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";

const Blog = () => {
    const { id } = useParams()
    const { data: blog, error } = useFetch("http://localhost:8000/blogs/" + id)
    return (
        <div className="blog-details">

            {!blog && (<p>Loading ...</p>)}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}

            <br />
            <br />

            Blog id {id}
        </div>
    )
}

export default Blog;