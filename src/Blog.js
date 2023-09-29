import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./UseFetch";

const Blog = () => {
    const { id } = useParams()
    const { data: blog, error } = useFetch("http://localhost:8000/blogs/" + id)

    const navigate = useNavigate()

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE"
        }).then(() => {
            navigate("/")
        })
    }

    return (
        <div className="blog-details">

            {!blog && (<p>Loading ...</p>)}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div id="body">{blog.body}</div>
                </article>
            )}

            <br />
            <br />

            Blog id {id}
            <br />
            <button onClick={handleDelete} >Delete</button>
        </div>
    )
}

export default Blog;