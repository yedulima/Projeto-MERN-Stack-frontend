export const Profile = () => {
    return (
        <>
            <div className="flex justify-center flex-col gap-4 p-2 w-[100%] default-bg">
                <div className="flex items-center gap-3 max-w-[25rem]">
                    <div className="rounded-full w-15 h-15 bg-gray-300"></div>
                    <div className="flex-1 flex-col">
                        <h3 className="font-medium">Eduardo Lima</h3>
                        <span className="font-light text-[0.8rem]">
                            @yedulima
                        </span>
                    </div>
                </div>
                <div className="w-[70%] font-light">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Temporibus repellendus accusamus perferendis
                        voluptas aliquid adipisci harum veritatis, mollitia
                        aspernatur id eveniet, earum, quia fuga repellat! Nulla,
                        a quos? Neque, aperiam.
                    </p>
                </div>
            </div>
        </>
    );
};
