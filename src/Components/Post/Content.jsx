export const Content = ({ content }) => {
    return (
        <div
            className="flex flex-col text-default-light dark:text-default-dark transition-colors duration-300 gap-3"
            dangerouslySetInnerHTML={{
                __html: content || "Content not found.",
            }}
        />
    );
};
