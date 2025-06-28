import { Outlet } from "react-router-dom";

import { Sidebar } from "../Components/Sidebar/Sidebar.jsx";
import { ChangeTheme } from "../Components/ChangeTheme/ChangeTheme.jsx";
import { ReturnArrow } from "../Components/ReturnArrow/ReturnArrow.jsx";

export const Root = () => {

    return (
        <div className="flex default-bg min-h-screen">
            <Sidebar />
            <ReturnArrow />
            <ChangeTheme />

            <main className="flex-1 ml-[15rem] mt-[3.5rem] mr-[2rem] pl-12 pr-4 pt-5">
                <Outlet />
            </main>
        </div>
    );
};
