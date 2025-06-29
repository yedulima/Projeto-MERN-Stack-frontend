import { use } from "react";
import { fetchUsers } from "../api.js";
import { getPromiseFromCache } from "../Utils/PromiseCache.js";

const allUsersPromise = getPromiseFromCache("all-users-data", async () => {
    const response = await fetchUsers();

    if (!response || !response.data) {
        throw new Error("Invalid response from user API.");
    }

    return response.data;
});

export const useGetUserByUsername = (username) => {
    const allUsersData = use(allUsersPromise);

    const foundUser = Object.values(allUsersData).find(
        (user) => user.username === username
    );

    if (foundUser) {
        const transformedPosts = foundUser.posts
            ? Object.entries(foundUser.posts).map(([id, post]) => ({
                  id: id,
                  title: post.title,
                  description: post.description,
                  author: post.author,
                  date: post.date,
                  likes: post.likes,
                  views: post.views,
              }))
            : [];

        return {
            name: foundUser.name,
            username: foundUser.username,
            bio: foundUser.bio,
            followers: foundUser.followers,
            following: foundUser.following,
            posts: transformedPosts,
        };
    }

    return null;
};
