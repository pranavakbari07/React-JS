import axios from 'axios';
import React, { useEffect } from 'react'

export default function Api() {

    useEffect(() => {
        fetchApi()
    }, [])

    // Fetching API using async await
    // const fetchApi = async () => {
    //     const response = await fetch("https://fakestoreapi.com/products");
    //     const res = await response.json();
    //     console.log(res);
    // }

    // Axios method to fetch API
    const fetchApi = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
    }

    return (
        <div>
            <h1>API</h1>
        </div>
    )
}
