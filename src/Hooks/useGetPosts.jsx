import { useState, useEffect } from "react";

export const useGetPosts = (Data) => {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        const postArray = Object.entries(Data).map(([id, post]) => {
            return {
                id: id,
                ...post,
            };
        });

        if (Data && postArray.length > 0) {
            setPosts(postArray);
        }
    }, [Data]);

    return posts;
};
