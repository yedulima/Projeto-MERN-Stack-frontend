import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export const ChangeTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme) {
                return savedTheme === "dark";
            }
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false;
    });

    useEffect(() => {
        if (typeof document !== "undefined") {
            const htmlElement = document.documentElement;
            if (isDarkMode) {
                htmlElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                htmlElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <>
            <button
                className="fixed right-11 top-5 bg-transparent w-8 h-8 hover-scale-120"
                onClick={toggleDarkMode}
            >
                {isDarkMode ? (
                    <Sun className="stroke-default-dark stroke-2 w-6 h-6" />
                ) : (
                    <Moon className="stroke-default-light stroke-2 w-6 h-6" />
                )}
            </button>
        </>
    );
};
