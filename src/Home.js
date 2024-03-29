import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isLoading, error, handleDelete } = useFetch('http://localhost:8007/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />}
        </div>
    );
}

export default Home;