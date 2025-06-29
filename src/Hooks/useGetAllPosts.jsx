import { useState, useEffect } from "react";
import { fetchPosts } from "../api.js";

export const useGetAllPosts = () => {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        async function getPosts() {
            const response = await fetchPosts();

            if (!response || !response.data) {
                throw new Error(`Can't get post. Status: ${response.status}`);
            }

            const postsArray = Object.entries(response.data).map(
                ([id, post]) => {
                    return {
                        id: id,
                        ...post,
                    };
                }
            );

            if (postsArray.length > 0) {
                setPosts(postsArray);
            } else {
                throw new Error(`Can't get posts! :P`);
            }
        }

        getPosts();
    }, []);

    return posts;
};
