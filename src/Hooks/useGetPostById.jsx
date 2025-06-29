import { use } from "react";
import { fetchPosts } from "../api.js";
import { getPromiseFromCache } from "../Utils/PromiseCache.js";

import Showdown from "showdown";

const converter = new Showdown.Converter();

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
            title: foundPost[1].title,
            description: foundPost[1].description,
            content: converter.makeHtml(foundPost[1].content),
            author: foundPost[1].author,
            date: foundPost[1].date,
            likes: foundPost[1].likes,
            views: foundPost[1].views,
        };
    }

    return null;
};
