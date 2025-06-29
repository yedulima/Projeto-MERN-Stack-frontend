import { Card } from "./Card";

export const PostsCards = ({ Data }) => {
    return (
        <>
            <div className="flex flex-col w-full h-full gap-3">
                {Data.map((post) => {
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
                })}
            </div>
        </>
    );
};
