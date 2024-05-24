import React from 'react'
import styled from 'styled-components'



const ProjText= styled.div`
font-size: 25px;
text-align: center;
`
const Text = styled.p`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
justify-content: center;
    text-align:justify;
    font-size: 20px;
    padding-right: 1.5em;
    margin-left: 1.2em;
`
function ProjEM(){
    return(
        <div>
            <ProjText>ENCEEJA</ProjText>
            <Text>O Exame Nacional para Certificação de Competências para Jovens e Adultos (Encceja) pode ser realizado para obter a certificação de conclusão dos ensinos fundamental e médio.

Para certificação do ensino fundamental é preciso ter no mínimo 15 anos completos na data de realização do exame e, para o ensino médio, a idade mínima é de 18 anos completos no dia de aplicação da prova.

A avaliação é oferecida anualmente pelo Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (Inep).

Aqueles que não atingirem o desempenho necessário para obter o certificado podem solicitar o atestado parcial de conclusão nas áreas de conhecimento nas quais atingiu a nota necessária. A partir disso, o candidato pode prestar novamente o exame ou concluir as demais disciplinas na EJA ou no CEEJA.</Text>
<ProjText>OLIMPÍADA LITERÁRIA </ProjText>
<Text>As Olimpíadas Literárias chegam às escolas da rede municipal como uma estratégia para promover a prática da leitura e da escrita.

Os professores já desenvolvem, no âmbito da sala de aula, situações nas quais os estudantes são confrontados com a escrita e com a leitura de textos.

Entretanto, sabe-se da dificuldade de atrelar a produção de texto às práticas sociais, de maneira que ocorram situações de efetiva comunicação e circulação de leituras e produções.

Dessa forma, as Olimpíadas priorizam a criação de condições para que a leitura aconteça, em todos os âmbitos do contexto escolar.

Todos os personagens do ambiente escolar: alunos, professores e funcionários – são convidados a se aventurar por diferentes gêneros literários e criar trabalhos para disputar a melhor colocação.
</Text>
<ProjText>MOVA</ProjText>
<Text>O MOVA – Movimento de Alfabetização de São Paulo é uma parceria entre a Secretaria Municipal de Educação de São Paulo e organizações da Sociedade Civil, com a proposta de estabelecer classes de alfabetização inicial para combater o analfabetismo, oferecendo o acesso à educação de forma a contemplar às necessidades e condições dos jovens e adultos.

As salas do MOVA estão instaladas em locais onde a demanda por alfabetização é grande. Geralmente as aulas são dadas em associações comunitárias, igrejas, creches ou empresas. Depois de alfabetizados, os alunos são orientados a dar continuidade aos estudos em escolas públicas de São Paulo.

As classes são agrupadas em núcleos e desenvolvem atividades educativas e culturais presenciais, por 2 horas e meia, durante 4 dias da semana, de segunda a quinta-feira. A sexta-feira é reservada para formação de educadores / monitores.

Os jovens e adultos interessados em estudar no MOVA-SP devem procurar uma entidade conveniada e fazer sua inscrição.

</Text>
            
        </div>
    )
}
export default ProjEM