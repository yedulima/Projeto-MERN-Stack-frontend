import { PostsCards } from "../Post/PostsCards";

export const Posts = ({ posts }) => {
    return (
        <section className="flex flex-col h-full">
            <h1 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                Posts
            </h1>

            <hr className="mb-2" />

            <div className="h-full pt-4 pb-4 mb-5">
                <PostsCards
                    Data={posts || []}
                    noPostMessage={
                        "Este usuário não possui nenhum post no momento."
                    }
                />
            </div>
        </section>
    );
};
