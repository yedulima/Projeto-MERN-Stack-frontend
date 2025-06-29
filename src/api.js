import axios from "axios";

export async function fetchPosts() {
    try {
        const response = await axios.get("/PostsData.json");

        return response;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function fetchUsers() {
    try {
        const response = await axios.get("/UsersData.json");

        return response;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
