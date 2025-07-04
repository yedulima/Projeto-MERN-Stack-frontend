import { Heart, Eye } from "lucide-react";

import { useNavigate } from "react-router-dom";

export const Card = ({ id, title, description, author, date, likes, views }) => {
    const navigate = useNavigate();

    return (
        <>
            <div
                className="flex flex-col w-full max-h-[12rem] p-4 gap-1 
                        hover:bg-slate-400/20 dark:hover:bg-slate-700/20
                        transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/post/${id}`)}
            >
                <h3 className="font-medium text-2xl">{title || "Title not found"}</h3>
                <p className="text-[0.9rem]">{description || "Description not found"}</p>
                <div className="flex items-center gap-1 text-[0.8rem]">
                    <span>{date || "12/12/2012"}</span>
                    <span>
                        by <b>{author || "@unknow"}</b>
                    </span>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                        <Heart className="icon card-icon" />
                        <span className="text-[0.9rem] select-none">
                            {likes || 0}
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Eye className="icon card-icon" />
                        <span className="text-[0.9rem] select-none">
                            {views || 0}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};
