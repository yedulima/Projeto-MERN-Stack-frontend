import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";

import { ReturnArrow } from "../Components/ReturnArrow/ReturnArrow.jsx";
import { Header } from "../Components/Profile/Header.jsx";
import { Posts } from "../Components/Profile/Posts.jsx";

import { useGetUserByUsername } from "../Hooks/useGetUserByUsername.jsx";

const ProfileContent = () => {
    const { userName } = useParams();
    const user = useGetUserByUsername(userName);

    return (
        <>
            <ReturnArrow />
            <div className="flex flex-col gap-4 w-full h-full default-bg">
                <Header
                    name={user.name}
                    username={user.username}
                    followers={user.followers}
                    following={user.following}
                    bio={user.bio}
                />

                <Posts posts={user.posts} />
            </div>
        </>
    );
};

export const Profile = () => {
    return (
        <ErrorBoundary
            fallback={
                <div className="flex-center h-full">
                    <h2 className="text-xl font-regular text-[#424242]">
                        User not found!
                    </h2>
                </div>
            }
        >
            <Suspense
                fallback={
                    <div className="flex-center h-full">
                        <h2 className="text-xl font-regular text-[#424242]">
                            Loading...
                        </h2>
                    </div>
                }
            >
                <ProfileContent />
            </Suspense>
        </ErrorBoundary>
    );
};
