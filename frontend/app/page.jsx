"use client";
import React, { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/db');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>FastAPI Data in React</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            <p>Username: {item.username}</p>
                            <p>Password: {item.password}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;
