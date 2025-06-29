import { useState, useEffect } from "react";
import { fetchUsers } from "../api.js";

export const useGetUserByUsername = (username) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUser() {
            const response = await fetchUsers();

            if (!response || !response.data) {
                throw new Error(`Can't get user. Status: ${response.status}`);
            }

            const foundUser = Object.values(response.data).find(
                (user) => user.username === username
            );

            setUser(
                foundUser
                    ? {
                          name: foundUser.name,
                          username: foundUser.username,
                          bio: foundUser.bio,
                          followers: foundUser.followers,
                          following: foundUser.following,
                          posts: Object.entries(foundUser.posts).map(
                              ([id, post]) => {
                                  return {
                                      id: id,
                                      ...post,
                                  };
                              }
                          ),
                      }
                    : null
            );
        }

        getUser();
    }, [username]);

    return user;
};
