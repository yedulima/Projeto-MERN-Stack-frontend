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

export const useGetAllPosts = () => {
    const allPostsData = use(allPostsPromise);

    const formatedPosts = Object.entries(allPostsData).map(([postId, post]) => {
        return {
            id: postId,
            title: post.title,
            description: post.description,
            author: post.author,
            date: post.date,
            likes: post.likes,
            views: post.views,
        };
    });

    return formatedPosts;
};
