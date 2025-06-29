import { PostsCards } from "../Post/PostsCards";

export const Posts = ({ posts }) => {
    return (
        <section id="posts" className="flex flex-col h-full">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Posts recentes
            </h1>

            <hr className="mt-2 mb-2" />

            <div className=" h-full pt-4 pb-4 mb-5">
                <PostsCards
                    Data={posts || []}
                    noPostMessage={"Nenhum post foi publicado no momento."}
                />
            </div>
        </section>
    );
};
