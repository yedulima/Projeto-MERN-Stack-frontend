import { PostsCards } from "../Components/Post/PostsCards";

export const Home = () => {
    return (
        <>
            <div className="flex-center flex-col pt-10 h-[90%]">
                <h1 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
                    Bem-vindo à Página Inicial!
                </h1>

                <p className="text-gray-700 text-center dark:text-gray-300 text-[1.1rem] max-w-xl">
                    Esta é a tela inicial padrão do seu aplicativo. Acesse o
                    perfil clicando na barra lateral.
                </p>

                <a
                    href="#posts"
                    className="p-2.5 pl-3.5 pr-3.5 m-5
                            font-medium bg-default-button-light
                            dark:bg-default-button-dark text-white
                            rounded-2xl hover-scale-105"
                >
                    Ver postagens
                </a>
            </div>

            <section id="posts" className="flex flex-col h-full">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Posts recentes
                </h1>

                <hr className="mt-2 mb-2" />

                <div className=" h-full pt-4 pb-4 mb-5">
                    <PostsCards />
                </div>
            </section>
        </>
    );
};
