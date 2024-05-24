import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import EscolasContent from '../Components/EscolasContent'


function Escolas() {
    return (
        <div>
            <Header />
            <EscolasContent
                imageEscolas={[
                    { name: "E.M.Jatobá", text: "Atendemos: Ensino Fundamental", endereco: "Avenida Rotary, 3621 - Jardim Sao Francisco, Embu das Artes - SP, 06816-030"},
                    { name: "E.M. Profa Valdelice Aparecida", text: "Atendemos: Ensino Fundamental", endereco: "Av. Joacaba, 40 - Parque Pirajussara, Embu das Artes - SP, 06815-000" },
                    { name: "E.M. Reynaldo Da Gama", text: "Atendemos: Ensino Fundamental", endereco: "R. Narumi Nakayama, 100 - Jd. N.Sra. de Fátima, Embu das Artes - SP, 06835-390" },
                    { name: "E.M. Elza Marreiro Medina", text: "Atendemos: 1º ao 5º Ano", endereco: "R. Bolívia, 200 - Pirajussara, Embu das Artes - SP, 06814-190"},
                    { name: "E.M. Profa Maria Auxiliadora", text: "Atendemos: Ensino Fundamental e Ensino Medio", endereco: "R. Padre João Álvares, 80 - Centro, Embu das Artes - SP, 06803-470"},
                    { name: "E.M. Mauro Ferreira da Silva", text: "Atendemos: Ensino Fundamental", endereco: "Estrada Professor Candido Motta Filho, 967 - Jardim Recanto da Fonte - Embu das Artes - SP - 06804-445"},
                    { name: "E.M. Maria Josefina de Almeida Carvalho Azteca", text: "Atendemos: Ensino Fundamental", endereco: "Rua Henfil Henrique de Souza Filho, 30, Rua Jardim Taima - Embu das Artes - SP - 06823-460"},
                    { name: "E.M. Prof Amilton Suga Gallego", text: "Atendemos: Ensino Fundamental", endereco: "Rua Caetano Sao, 1883- Jardim Valo Verde - Embu das Artes - SP - 06815-300"},
                    { name: "E.M. Jose Ramos Jornalista", text: "Atendemos: Ensino Fundamental", endereco: "Avenida Santa Tereza, 537 - Jardim Santa Tereza - Embu das Artes - SP - 06813-4000"},
                    { name: "E.M.Jequitiba", text: "Atendemos: Ensino Fundamental", endereco: "Rua Cajueiro, 44, Jardim Pinheirinho - Embu das Artes - SP - 06835-260"},
                    { name: "E.M. Prof Paulo Freire", text: "Atendemos: Ensino Fundamental", endereco: "Estrada Itapecerica-campo Limpo, 1856 - Jardim Santa Emilia - Embu das Artes - SP - 06820-185"},
                ]}
            />
            <Footer />
        </div>
    )
}
export default Escolas