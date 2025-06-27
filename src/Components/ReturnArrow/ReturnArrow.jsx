import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const ReturnArrow = () => {
    const navigate = useNavigate();

    return (
        <>
            <button
                className="fixed flex-center bg-transparent gap-1 left-72 top-5 w-20 h-8"
                onClick={() => {
                    navigate(-1);
                }}
            >
                <ArrowLeft className="relative stroke-default-light dark:stroke-default-dark stroke-[0.1rem] w-6 h-6 transition-all duration-300" />
                <p className="text-[0.9rem]">Return</p>
            </button>
        </>
    );
};
