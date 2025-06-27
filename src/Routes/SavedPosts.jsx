export const SavedPosts = () => {
    return (
        <div className="flex flex-col h-[100%]">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Posts salvos
            </h1>

            <hr className="mt-2 mb-2" />

            <p className="text-gray-700 dark:text-gray-300 max-w-xl">
                Você não possui nenhum post salvo no momento.
            </p>
        </div>
    );
};
