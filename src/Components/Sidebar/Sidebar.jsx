import { Box, House, UserRound, Bookmark } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
    return (
        <>
            <nav className="flex flex-col fixed w-[15rem] h-screen default-bg shadow-xl/30">
                {/* Logo */}
                <div className="flex-center w-[100%] h-[8rem]">
                    <Box className="relative left-0 icon w-18 h-18" />
                </div>

                <hr className="w-[90%] self-center m-2" />

                {/* Navbar items */}
                <ul className="sidebar">
                    <li>
                        <NavLink to={`/home`} className="sidebar-link">
                            <House className="icon sidebar-icon" />
                            <h3 className="sidebar-h3">Home</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/profile`} className="sidebar-link">
                            <UserRound className="icon sidebar-icon" />
                            <h3 className="sidebar-h3">Profile</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/saves`} className="sidebar-link">
                            <Bookmark className="icon sidebar-icon" />
                            <h3 className="sidebar-h3">Saved posts</h3>
                        </NavLink>
                    </li>
                </ul>

                {/* Create new post */}
                <div className="absolute flex-center left-[50%] -translate-x-1/2 w-full h-[4rem] bottom-25">
                    <button className="w-[13rem] p-2 rounded-2xl hover-scale-105 text-[0.95rem]">
                        New Post
                    </button>
                </div>
            </nav>
        </>
    );
};
