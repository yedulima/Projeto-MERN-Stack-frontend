import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";

import { ReturnArrow } from "../Components/ReturnArrow/ReturnArrow.jsx";
import { Header } from "../Components/Post/Header.jsx";
import { Content } from "../Components/Post/Content.jsx";

import { useGetPostById } from "../Hooks/useGetPostById.jsx";

const PostContent = () => {
    const { id } = useParams();
    const post = useGetPostById(id);

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

export const Post = () => {
    return (
        <ErrorBoundary
            fallback={
                <div className="flex-center h-full">
                    <h2 className="text-xl font-regular text-[#424242]">
                        Post not found!
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
                <PostContent />
            </Suspense>
        </ErrorBoundary>
    );
};
