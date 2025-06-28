import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Heart, Eye } from "lucide-react";

import { useNavigate } from "react-router-dom";

import PostsData from "../PostsData";

export const Post = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const foundPost = PostsData.find((p) => p.id === id);

        if (foundPost) {
            setPost(foundPost);
        } else {
            setPost(null);
            console.warn(`Post "${id}" não encontrado.`);
        }
        setLoading(false);
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full text-gray-400 text-xl">
                Carregando post...
            </div>
        );
    }

    if (!post) {
        return (
            <div className="flex-center h-full">
                <h2 className="text-2xl font-regular text-[#424242]">
                    Post não encontrado!
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
