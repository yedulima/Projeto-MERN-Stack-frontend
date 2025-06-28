import { useParams } from "react-router-dom";

import { PostsCards } from "../Components/Post/PostsCards";
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
            <div className="flex flex-col gap-4 p-2 w-full h-full default-bg">
                {/* Profile infos */}
                <div className="flex items-center gap-3 max-w-[25rem]">
                    <div className="rounded-full w-20 h-20 bg-gray-300"></div>
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-medium">
                            {user.name || "Unknow"}
                        </h3>
                        <span className="font-light text-[0.9rem]">
                            {user.username || "@Unknow"}
                        </span>
                    </div>
                </div>

                {/* Metrics */}
                <div
                    className="flex items-center gap-3 text-[0.9rem]
                                underline underline-offset-4
                              decoration-default-light dark:decoration-default-dark"
                >
                    <span className="cursor-pointer">
                        {user.followers || 0} Followers
                    </span>
                    <span className="cursor-pointer">
                        {user.following || 0} Following
                    </span>
                </div>

                {/* Biography */}
                <div className="w-[60%] max-h-[15rem] font-light text-[0.9rem]">
                    <p>{user.bio || ""}</p>
                </div>

                {/* Posts */}
                <section className="flex flex-col h-full">
                    <h1 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                        Posts
                    </h1>

                    <hr className="mb-2" />

                    <div className=" h-full pt-4 pb-4 mb-5">
                        <PostsCards
                            Data={user.posts || []}
                            noPostMessage={
                                "Este usuário não possui nenhum post no momento."
                            }
                        />
                    </div>
                </section>
            </div>
        </>
    );
};
