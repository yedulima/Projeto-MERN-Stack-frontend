import { useState, useEffect } from "react";
import { fetchPosts } from "../api.js";

export const useGetPostsById = (id) => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);

    useEffect(() => {
        async function getPosts() {
            const response = await fetchPosts();

            if (!response || !response.data) {
                console.error(`Can't get post. Status: ${response.status}`);
            }

            const postArray = Object.entries(response.data).map(
                ([postId, post]) => {
                    return {
                        id: postId,
                        ...post,
                    };
                }
            );

            setPosts(postArray);
        }

        getPosts();
    }, []);

    useEffect(() => {
        const foundPost = posts.find((p) => p.id === id);

        setPost(foundPost || null);
    }, [posts, id]);

    return post;
};
