import Data from "../../Data.js";

import { Card } from "./Card";

export const PostsCards = () => {
    return (
        <>
            <div className="flex flex-col w-full h-full gap-3">
                {Data.length > 0 ? (
                    Data.map((post) => {
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
                        Nenhum post foi publicado no momento.
                    </p>
                )}
            </div>
        </>
    );
};
