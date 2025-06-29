import { useNavigate } from "react-router-dom";
import { Heart, Eye } from "lucide-react";

export const Header = ({ title, author, date, likes, views }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col gap-3">
                <h1 className="text-5xl font-medium">
                    {title || "Title not found."}
                </h1>
                <span className="text-[0.95rem]">
                    by{" "}
                    <b
                        className="cursor-pointer"
                        onClick={() => {
                            if (author) {
                                navigate(`/profile/${author}`);
                            }
                        }}
                    >
                        {author || "@unknow"}
                    </b>{" "}
                    at {date || "31/12/2025"}
                </span>
            </div>
            <div className="flex gap-4">
                <div className="flex items-center gap-1">
                    <Heart className="icon post-icon cursor-pointer" />
                    <span className="text-[0.9rem] select-none">
                        {likes || 0}
                    </span>
                </div>
                <div className="flex items-center gap-1">
                    <Eye className="icon post-icon" />
                    <span className="text-[0.9rem] select-none">
                        {views || 0}
                    </span>
                </div>
            </div>
        </>
    );
};
