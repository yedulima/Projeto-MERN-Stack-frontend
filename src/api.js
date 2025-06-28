import axios from "axios";

export async function fetchPosts() {
    try {
        const response = await axios.get("../public/PostsData.json");

        return response;
    } catch (err) {
        console.error(err);
    }
}

export async function fetchUsers() {
    try {
        const response = await axios.get("../public/UsersData.json");

        return response;
    } catch (err) {
        console.error(err);
    }
}
