import { useParams } from "react-router-dom";
import { Heart, Eye } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useGetPostById } from "../Hooks/useGetPostById";

export const Post = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const post = useGetPostById(id);

    if (!post) {
        return (
            <div className="flex-center h-full">
                <h2 className="text-2xl font-regular text-[#424242]">
                    Post not found!
                </h2>
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-col gap-4 h-full p-2">
                <div className="flex flex-col gap-3">
                    <h1 className="text-5xl font-medium">
                        {post.title || "Title not found."}
                    </h1>
                    <span className="text-[0.95rem]">
                        by{" "}
                        <b
                            className="cursor-pointer"
                            onClick={() => {
                                if (post) {
                                    navigate(`/profile/${post.author}`);
                                }
                            }}
                        >
                            {post.author || "@unknow"}
                        </b>{" "}
                        at {post.date || "31/12/2025"}
                    </span>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                        <Heart className="icon post-icon cursor-pointer" />
                        <span className="text-[0.9rem] select-none">
                            {post.likes || 0}
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Eye className="icon post-icon" />
                        <span className="text-[0.9rem] select-none">
                            {post.views || 0}
                        </span>
                    </div>
                </div>
                <p>{post.content || "Content not found."}</p>
            </div>
        </>
    );
};
