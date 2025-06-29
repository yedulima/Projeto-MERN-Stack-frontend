import { useState, useEffect } from "react";
import { fetchPosts } from "../api.js";

export const useGetPostById = (id) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        async function getPost() {
            const response = await fetchPosts();

            if (!response || !response.data) {
                throw new Error(`Can't get posts. Status: ${response.status}`);
            }

            const foundPost = Object.entries(response.data).find(
                ([postId]) => postId === id
            );

            setPost(
                foundPost
                    ? {
                          id: foundPost.postId,
                          ...foundPost[1],
                      }
                    : null
            );
        }

        getPost();
    }, [id]);

    return post;
};
