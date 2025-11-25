export default function Dashboardinfo() {
    return (
        <div className="w-full flex justify-center mt-10">
            <div className="bg-white shadow-xl rounded-xl p-6 w-[300px]">

                <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">
                    Informações do Projeto
                </h2>

                <table>
                    <tbody>

                        <tr className="border-b">
                            <td className="py-3 text-gray-600 font-medium">Usuários Ativos</td>
                            <td className="py-3 text-blue-600 font-bold text-lg">148</td>
                        </tr>

                        <tr>
                            <td className="py-3 text-gray-600 font-medium">Registros Atuais</td>
                            <td className="py-3 text-green-600 font-bold text-lg">23</td>
                        </tr>

                        <tr>
                            <td className="py-3 text-gray-600 font-medium">Status do Projeto</td>
                            <td className="py-3 text-yellow-600 font-bold text-lg">Boas Condições</td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </div>
    );
}