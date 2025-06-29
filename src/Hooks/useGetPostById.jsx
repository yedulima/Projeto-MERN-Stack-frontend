import { use } from "react";
import { fetchPosts } from "../api.js";
import { getPromiseFromCache } from "../Utils/PromiseCache.js";

const allPostsPromise = getPromiseFromCache("all-posts-data", async () => {
    const response = await fetchPosts();

    if (!response || !response.data) {
        throw new Error("Invalid response from post API.");
    }

    return response.data;
});

export const useGetPostById = (id) => {
    const allPostsData = use(allPostsPromise);

    const foundPost = Object.entries(allPostsData).find(
        ([postId]) => postId === id
    );

    if (foundPost) {
        return {
            id: foundPost.postId,
            ...foundPost[1],
        };
    }

    return null;
};
