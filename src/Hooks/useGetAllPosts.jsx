import { useState, useEffect } from "react";
import { fetchPosts } from "../api.js";

export const useGetAllPosts = () => {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        async function getPosts() {
            const response = await fetchPosts();

            if (!response || !response.data) {
                console.error(`Can't get post. Status: ${response.status}`);
            }

            setPosts(response.data);
        }

        getPosts();
    }, []);

    return posts;
};