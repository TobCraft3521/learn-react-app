const Home = () => {
    const handleClick = () => {
        console.log("Super button")
    }

    const handleClickAgain = (name) => {
        console.log("hello", name)
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => { handleClickAgain("TobCraft3521") }}>Click me again</button>
        </div>
    );
}

export default Home;