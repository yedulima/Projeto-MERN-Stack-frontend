import { Sidebar } from "./Components/Sidebar/Sidebar";
import { ChangeTheme } from "./Components/ChangeTheme/ChangeTheme";

const App = () => {
    return (
        <div className="flex bg-gray-50 dark:bg-gray-900 min-h-screen">
            <Sidebar />
            <ChangeTheme />
            <main className="flex-1 ml-[15rem] p-8">
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                    Bem-vindo ao Conteúdo Principal!
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    Este é o conteúdo que aparecerá à direita da sua barra
                    lateral fixa. O espaço à esquerda é reservado para a barra
                    lateral.
                </p>

                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                        Seção de Exemplo
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Você pode adicionar qualquer outro componente, rota ou
                        página aqui. Ele sempre se ajustará para começar após a
                        largura da barra lateral.
                    </p>
                    <hr className="w-1/4 border-default-light dark:border-default-dark border-t-2 my-4" />
                    <p className="text-gray-700 dark:text-gray-300">
                        Esta é a área onde o restante do seu aplicativo será
                        renderizado.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default App;
