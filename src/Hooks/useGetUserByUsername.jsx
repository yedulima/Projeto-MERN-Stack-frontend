import { useState, useEffect } from "react";
import { fetchUsers } from "../api.js";

export const useGetUserByUsername = (username) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUsers() {
            const response = await fetchUsers();

            if (!response || !response.data) {
                console.error(`Can't get user. Status: ${response.status}`);
            }

            const userArray = Object.values(response.data);

            setUsers(userArray);
        }

        getUsers();
    }, []);

    useEffect(() => {
        const foundUser = users.find((p) => p.username === username);

        setUser(foundUser || null);
    }, [users, username]);

    return user;
};
