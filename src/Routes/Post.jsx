import { useParams } from "react-router-dom";

import { ReturnArrow } from "../Components/ReturnArrow/ReturnArrow.jsx";
import { Header } from "../Components/Post/Header";
import { Content } from "../Components/Post/Content";

import { useGetPostById } from "../Hooks/useGetPostById";

export const Post = () => {
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
            <ReturnArrow />
            <div className="flex flex-col gap-4 h-full p-2">
                <Header
                    title={post.title}
                    author={post.author}
                    date={post.date}
                    likes={post.likes}
                    views={post.views}
                />
                <Content content={post.content} />
            </div>
        </>
    );
};
