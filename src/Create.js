import { useState } from "react";
import { useNavigate } from "react-router-dom"
const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("TobCraft3521")
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }
       
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("Published post")
            navigate("/")
        }).catch((error)=>console.error)
    }

    return (
        <div className="create">
            <h2>Add new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input placeholder="Write your title here" type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Blog content:</label>
                <textarea placeholder="Write content here, change size at bottom-right" required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="TobCraft3521">TobCraft3521</option>
                    <option value="ClaryCraft3521">ClaryCraft3521</option>
                    <option value="user1">user1</option>
                    <option value="user2">user2</option>
                </select>
                <button>Publish</button>
            </form>
        </div>
    )
}

export default Create;