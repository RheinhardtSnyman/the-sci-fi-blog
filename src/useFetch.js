import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const handleDelete = (id) => {
        const newData = data.filter(data => data.id != id);
        setData(newData);
    }

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal }).then(response => {
                if (!response.ok) {
                    throw Error('Could not fetch the data for that resource.');
                }
                return response.json();
            }).then(data => {
                setData(data);
                setLoading(false);
                setError(null);
            }).catch((err) => {
                if (err.name != 'AbortError') {
                    setError(err.message);
                    setLoading(false);
                }
            });
        }, 500);

        return () => abortCont.abort();
    }, []);

    return { data, isLoading, error, handleDelete };
}

export default useFetch;