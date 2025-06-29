import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { PostsCards } from "../Post/PostsCards";

export const Posts = ({ posts }) => {
    return (
        <section className="flex flex-col h-full">
            <h1 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                Posts
            </h1>

            <hr className="mb-2" />

            <div className="h-full pt-4 pb-4 mb-5">
                <ErrorBoundary
                    fallback={
                        <div className="flex-center h-full">
                            <h2 className="text-xl font-regular text-[#424242]">
                                Nenhum post foi publicado no momento.
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
                        <PostsCards Data={posts || []} />
                    </Suspense>
                </ErrorBoundary>
            </div>
        </section>
    );
};
