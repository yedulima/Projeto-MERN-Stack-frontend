import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex-center flex-col gap-5 w-screen h-screen default-bg p-5">
            <h1 className="font-bold text-[3.5rem] text-default-light dark:text-default-dark">
                Oops!
            </h1>
            <p className="text-default-light dark:text-default-dark text-[1.1rem]">
                Sorry, an unexpected error has occurred.
            </p>
            <p>
                <i className="text-[#424242] dark:text-default-dark">
                    {error.statusText || error.message}
                </i>
            </p>
        </div>
    );
}
