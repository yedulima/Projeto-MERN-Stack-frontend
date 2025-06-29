import { useParams } from "react-router-dom";

import { ReturnArrow } from "../Components/ReturnArrow/ReturnArrow.jsx";
import { Header } from "../Components/Profile/Header.jsx";
import { Posts } from "../Components/Profile/Posts.jsx";

import { useGetUserByUsername } from "../Hooks/useGetUserByUsername.jsx";

export const Profile = () => {
    const { userName } = useParams();
    const user = useGetUserByUsername(userName);

    if (!user) {
        return (
            <div className="flex-center h-full">
                <h2 className="text-2xl font-regular text-[#424242]">
                    User not found!
                </h2>
            </div>
        );
    }

    return (
        <>
            <ReturnArrow />
            <div className="flex flex-col gap-4 p-2 w-full h-full default-bg">
                <Header
                    name={user.name}
                    username={user.userName}
                    followers={user.followers}
                    following={user.following}
                    bio={user.bio}
                />

                <Posts posts={user.posts} />
            </div>
        </>
    );
};
