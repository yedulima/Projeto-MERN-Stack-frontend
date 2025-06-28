import { Card } from "./Card";
import { useGetPosts } from "../../Hooks/useGetPosts";

export const PostsCards = ({ Data, noPostMessage }) => {
    
    const posts = useGetPosts(Data);

    return (
        <>
            <div className="flex flex-col w-full h-full gap-3">
                {posts.length > 0 ? (
                    posts.map((post) => {
                        return (
                            <Card
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                content={post.content}
                                author={post.author}
                                date={post.date}
                                likes={post.likes}
                                views={post.views}
                            />
                        );
                    })
                ) : (
                    <p className="text-left text-gray-700 dark:text-gray-300 max-w-xl">
                        {noPostMessage}
                    </p>
                )}
            </div>
        </>
    );
};
