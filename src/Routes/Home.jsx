import { Landing } from "../Components/Home/Landing";
import { Posts } from "../Components/Home/Posts";

import { useGetAllPosts } from "../Hooks/useGetAllPosts";

export const Home = () => {
    const posts = useGetAllPosts();

    return (
        <>
            <Landing />
            <Posts posts={posts} />
        </>
    );
};
