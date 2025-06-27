export const Home = () => {
    return (
        <>
            <div className="flex-center flex-col pt-10 h-[85%]">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Bem-vindo à Página Inicial!
                </h1>

                <p className="text-gray-700 text-center dark:text-gray-300 max-w-xl">
                    Esta é a tela inicial padrão do seu aplicativo. Acesse o
                    perfil clicando na barra lateral.
                </p>
            </div>

            <section className="flex flex-col h-[100%]">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Posts recentes
                </h1>

                <hr className="mt-2 mb-2" />

                <p className="text-gray-700 dark:text-gray-300 max-w-xl">
                    Nenhum post foi publicado no momento.
                </p>
            </section>
        </>
    );
};
