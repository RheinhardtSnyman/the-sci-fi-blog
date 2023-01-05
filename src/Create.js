import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isLoading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setLoading(true);

        fetch('http://localhost:8007/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setLoading(false);
            // history.go(-1);
            history.push('/');
        });
    }

    return (
        <div className="create">
            <h2>Add a new Blog.</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required />
                <label>Blog body:</label>
                <textarea
                    value={body}
                    onChange={(e) => { setBody(e.target.value) }}
                    required></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => { setAuthor(e.target.value) }}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;