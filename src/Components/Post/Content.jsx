export const Content = ({ content }) => {
    return (
        <div
            className="text-default-light dark:text-default-dark transition-colors duration-300"
            dangerouslySetInnerHTML={{
                __html: content || "Content not found.",
            }}
        />
    );
};
