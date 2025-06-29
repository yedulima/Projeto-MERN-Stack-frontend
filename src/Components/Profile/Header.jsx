export const Header = ({ name, username, followers, following, bio }) => {
    return (
        <>
            <div className="flex items-center gap-3 max-w-[25rem]">
                <div className="rounded-full w-20 h-20 bg-gray-300"></div>
                <div className="flex flex-col">
                    <h3 className="text-2xl font-medium">{name || "Unknow"}</h3>
                    <span className="font-light text-[0.9rem]">
                        {username || "@Unknow"}
                    </span>
                </div>
            </div>

            <div
                className="flex items-center gap-3 text-[0.9rem]
                                underline underline-offset-4
                              decoration-default-light dark:decoration-default-dark"
            >
                <span className="cursor-pointer">
                    {followers || 0} Followers
                </span>
                <span className="cursor-pointer">
                    {following || 0} Following
                </span>
            </div>

            <div className="w-[60%] max-h-[15rem] font-light text-[0.9rem]">
                <p>{bio || ""}</p>
            </div>
        </>
    );
};
