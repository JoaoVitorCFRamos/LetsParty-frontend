import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlueButton } from "../../../components/BlueButton";
import "./style.css"
import { toast } from "react-toastify";


export const ContractTerms = () => {
    const navigate = useNavigate();
    const [check, setCheck] = useState(false)

    const handleChecked =
        (e: boolean) =>
            (event: ChangeEvent<HTMLInputElement | HTMLInputElement>) => {
                setCheck(event.target.checked);

            };

    console.log(check)

    return (
        <div className="contractTerms-mainDiv">
            {/* <label className="contractTerms-stepOneLabel">Passo 3</label> */}
            <label className="contractTerms-header">Concorde com nossos termos para poder seguir para o pagamento</label>

            <div className="contractTerms-mainContent">
                <div className="scroll">TERMOS GERAIS DE CONTRATAÇÃO DE PRODUTOS E SERVIÇOS DE
                    PAGAMENTO
                    <br></br>
                    <br></br>
                    Estes Termos Gerais de Contratação de Produtos e Serviços de Pagamento
                    <br></br>
                    <br></br>
                    “Contrato” é firmado entre o usuário, pessoa física ou jurídica, devidamente
                    qualificado nos respectivos canais providos pela Contratada (conforme abaixo
                    definida) (“Cliente”); e (ii) as partes prestadoras dos serviços contratados indicadas
                    nos respectivos Anexos, conforme aplicável (doravante designadas, em conjunto ou
                    individualmente, conforme o caso, como “Contratada”).
                    Contratada e Cliente são doravante designados, em conjunto, “Partes” e,
                    individualmente, “Parte”.
                    Para a perfeita execução deste Contrato, as Partes deverão observar as condições
                    gerais dispostas a seguir, sem prejuízo de cumprir com as condições específicas aos
                    produtos e/ou serviços contratados, conforme previsto nos Anexos a este Contrato.
                    O Contrato e o respectivo Anexo devem ser interpretados, em conjunto, como
                    “Contrato”.
                    CONDIÇÕES GERAIS
                    CLÁUSULA I
                    Objeto
                    1.1. Este Contrato tem por objeto regular os termos e condições dos serviços
                    prestados pela Contratada ao Cliente, descritos nos Anexos ao presente Contrato.
                    CLÁUSULA II
                    Regras de Interpretação
                    2.1. As seguintes regras deverão ser aplicadas à interpretação deste Contrato:
                    (i) As referências a quaisquer documentos ou instrumentos incluem todos os
                    respectivos aditivos, substituições, consolidações e complementações,
                    exceto se de outra forma expressamente previsto neste Contrato;
                    (ii) As referências a disposições legais devem ser interpretadas como referências
                    a essas disposições, tais como alteradas ou consolidadas, ou conforme sua
                    aplicação seja alterada periodicamente por outras normas;
                    (iii) Conforme utilizados neste Contrato: os termos (a) “ou” não é exclusivo (a
                    menos que o contexto exija interpretação diversa); (b) “incluindo” significa
                    “incluindo, mas não se limitando a”; (c) palavras no singular incluem o
                    plural, e vice-versa; (d) palavras aplicáveis a um gênero se aplicam a todos
                    os gêneros; (e) os termos “deste instrumento”, “neste instrumento”, “por
                    este instrumento”, “a este instrumento” e expressões derivadas ou similares
                    se referem ao Contrato na íntegra, incluindo seus Anexos; (f) os termos
                    “Cláusula” e “Anexo” se referem a uma Cláusula ou Anexo específico deste
                    Contrato; e (g) a expressão “de acordo com”, “conforme descrito em”,
                    “observados os termos de” uma Cláusula específica deste Contrato, ou
                    palavras de significado similar, deverão se referir à Cláusula em questão;
                    (iv) Uma referência a qualquer pessoa inclui os sucessores e cessionários
                    autorizados dessa pessoa;
                    (v) Qualquer referência a “dias” significa dias corridos, a menos que “Dias Úteis”
                    esteja expressamente previsto;
                    (vi) Os Anexos identificados neste Contrato são parte integrante deste
                    instrumento para todos os fins; e
                    (vii) Todos os prazos contemplados neste Contrato serão contados excluindo-se
                    o primeiro dia e incluindo-se o último dia; adicionalmente, todos os prazos
                    estabelecidos neste Contrato e que se encerrem em um sábado, domingo ou
                    feriado declarado nacional, serão automaticamente prorrogados para o
                    primeiro Dia Útil seguinte.
                    CLÁUSULA III
                    Obrigações do Cliente
                    3.1. Não obstante as demais obrigações previstas neste Contrato e nos
                    respectivos Anexos, o Cliente se compromete a, durante toda a vigência deste
                    Contrato:
                    (i) Cumprir com as obrigações previstas neste Contrato e realizar os
                    pagamentos devidos sob este Contrato nas formas e nos respectivos prazos
                    e datas de vencimento;
                    (ii) Observar, respeitar e cumprir todas e quaisquer leis, regulamentos e
                    instruções aplicáveis às suas atividades, incluindo, mas não se limitando, as
                    regras e exigências determinadas pelo Banco Central, pelas Bandeiras, pelo
                    mercado de Meios de Pagamento, pelo sistema de pagamentos brasileiro e
                    pela legislação e regulamentação aplicável, brasileira ou estrangeira;
                    (iii) Manter a Contratada informada, por meios dos canais informados pela
                    Contratada, sobre qualquer assunto relevante de seu conhecimento que
                    possa vir a impactar a execução do objeto deste Contrato e/ou implique
                    alteração de quaisquer das atividades objeto deste Contrato, especialmente
                    a ocorrência de qualquer fato ou ato jurídico que possa impactar as
                    obrigações da Contratada relacionadas a negociação de Recebíveis e/ou de
                    qualquer processo de falência, recuperação judicial, liquidação ou
                    procedimentos similares da Contratada, de seus controladores, das suas
                    controladas e das suas coligadas, bem como informar à Contratada a
                    respeito de qualquer alienação de qualquer de seus ativos ou ponto
                    comercial;
                    (iv) (a) Fornecer à Contratada, imediatamente, todas as informações que lhe
                    sejam solicitadas para fins de execução do Contrato, bem como autorizar
                    que a Contrata colete junto a quaisquer terceiros todas as informações
                    necessárias para a prestação dos serviços, incluindo, mas não se limitando
                    a, dados cadastrais, de registro de Recebíveis, societários e/ou bancários; e
                    (b) manter tais informações atualizadas durante toda a vigência deste
                    Contrato; devendo o Cliente fornecer tais informações à Contratada no prazo
                    de 5 (cinco) Dias Úteis após solicitação da Contratada ou após a ocorrência
                    de alteração nas informações, conforme aplicável, sob pena de o Cliente
                    responder, nos termos da lei, pela veracidade, certeza, suficiência e
                    consistência das informações prestadas à Contratada e por eventual
                    divergência entre os dados informados à Contratada e os dados reais e/ou
                    oficiais, incluindo quaisquer Perdas relacionadas e incorridas pela
                    Contratada;
                    (v) Reembolsar a Contratada por quaisquer despesas que a Contratada venha a
                    incorrer para o cumprimento de ordem de terceiro com relação ao Cliente,
                    incluindo, sem limitar-se ao atendimento de ofícios judiciais e extrajudiciais,
                    bloqueios, penhoras e arrestos; e
                    (vi) Realizar as adequações técnicas solicitadas pela Contratada, tais como
                    homologações e atualizações de sistemas, software, nos prazos solicitados
                    pela Contratada, com o intuito de garantir a segurança e a eficiência dos
                    serviços prestados ao Cliente.
                    CLÁUSULA IV
                    Declarações do Cliente
                    4.1. O Cliente declara e garante à Contratada, por si e pelas sociedades que
                    integram seu grupo econômico, na data de assinatura deste Contrato, que:
                    (i) Tem capacidade e poder para: (a) celebrar este Contrato; (b) cumprir com
                    todas as obrigações assumidas neste Contrato; e (c) consumar o negócio
                    jurídico na forma contemplada neste Contrato, tendo tomado todas as
                    medidas necessárias para tanto;
                    (ii) Este Contrato constitui obrigação legal, válida e vinculante do Cliente,
                    exequível de acordo com seus termos, e nem a assinatura e formalização,
                    pelo Cliente, deste Contrato, nem o cumprimento, pelo Cliente, de qualquer
                    das suas obrigações nos termos deste Contrato dependem de qualquer
                    consentimento, aprovação e/ou autorização de, notificação a, ou
                    arquivamento ou registro junto a, qualquer pessoa, entidade, juízo ou
                    autoridade governamental;
                    (iii) Os documentos e informações fornecidos pelo Cliente à Contratada são
                    verídicos, corretos, completos, consistentes e suficientes e estão atualizados
                    até a data em que foram fornecidos à Contratada;
                    (iv) A Contratada, bem como as demais sociedades que integram o grupo
                    econômico da Contratada, poderão fazer uso das informações do Cliente,
                    bem como daquelas referentes às transações realizadas pelo Cliente, desde
                    que observadas as normas relativas à proteção de dados e ao sigilo bancário
                    aplicáveis;
                    (v) Não foi e não se encontra submetida a qualquer procedimento de falência,
                    recuperação judicial ou extrajudicial ou procedimento similar, bem como não
                    se encontra insolvente;
                    (vi) Exerce suas atividades em conformidade com a legislação e regulamentação
                    vigentes a elas aplicáveis, conforme o caso, não exercendo qualquer
                    atividade ilícita;
                    (vii) Não utiliza práticas de discriminação negativa, e limitativas ao acesso na
                    relação de emprego ou a sua manutenção, incluindo, mas não se limitando
                    a, motivos de sexo, origem, raça, cor, condição física, religião, estado civil,
                    idade, situação familiar ou estado gravídico;
                    (viii) Autoriza a Contratada a realizar, em nome do Cliente, comunicações e
                    solicitações à Registradora para que sejam (i) realizados registros de
                    Recebíveis; (ii) efetivadas constituições e desconstituições de ônus e
                    gravames, de qualquer natureza, sobre os Recebíveis, mediante solicitação
                    das instituições financeiras e terceiros interessados; e (iii) contestadas
                    anuências fornecidas ou não junto a terceiros e operações contratadas ou
                    não pelos Clientes junto a terceiros, nos termos da regulamentação
                    aplicável; e
                    (ix) Conforme aplicável às suas atividades: (a) conhece a legislação trabalhista
                    e ambiental que vigora no Brasil; (b) não utiliza trabalho infantil ou escravo
                    em suas atividades e observa as normas relativas à saúde e segurança
                    ocupacional; (c) não se relaciona ou contrata com sociedades ou
                    empresários que não estejam aderentes as normas ambientais e trabalhistas
                    e ambientais; (d) possui e apresenta, sempre que solicitado, todos os
                    documentos exigidos pela legislação trabalhista e ambiental; e (e) manterá
                    a Contratada informada sobre questionamentos e/ou manifestações de
                    órgãos públicos relativos a questões ambientais e trabalhistas.
                    4.2. EM RELAÇÃO AOS SEUS DADOS, O QUE PODE VIR A INCLUIR DADOS
                    PESSOAIS, O CLIENTE:
                    (i) RECONHECE QUE, NO CONTEXTO DO EXERCÍCIO DE SUAS
                    ATIVIDADES, A CONTRATADA TRATARÁ SUAS INFORMAÇÕES
                    (PESSOAIS, COMERCIAIS E/OU FINANCEIRAS), INCLUINDO, MAS
                    NÃO SE LIMITANDO A, NOME, ENDEREÇO, NÚMERO DE CPF OU CNPJ
                    E ENDEREÇO DE E-MAIL;
                    (ii) RECONHECE QUE A CONTRATADA PODERÁ COMPARTILHAR SUAS
                    INFORMAÇÕES (PESSOAIS, COMERCIAIS E/OU FINANCEIRAS),
                    RESPEITADAS AS NORMAS QUE TRATAM DO SIGILO BANCÁRIO E DA
                    PROTEÇÃO DE DADOS, COM: (A) AUTORIDADES PÚBLICAS
                    COMPETENTES QUE AS SOLICITAREM, NACIONAIS E
                    ESTRANGEIRAS, NOS TERMOS DA LEGISLAÇÃO APLICÁVEL; (B)
                    AFILIADAS, LOCALIZADAS NO BRASIL E NO EXTERIOR, PARA
                    PERMITIR A PRESTAÇÃO DOS SERVIÇOS CONTRATADOS POR MEIO
                    DESTE CONTRATO E/OU COM O INTUITO DE DISPONIBILIZAR
                    MELHORES FUNÇÕES E/OU SERVIÇOS AO CLIENTE; E (C) OUTRAS
                    INSTITUIÇÕES AUTORIZADAS PELO BANCO CENTRAL, DE FORMA
                    PONTUAL, PARA VERIFICAR E APURAR POSSÍVEIS FRAUDES EM
                    CASOS ESPECÍFICOS; E
                    (iii) RECONHECE QUE A CONTRATADA E SUAS AFILIADAS, CONFORME O
                    CASO E A QUALQUER TEMPO, PODERÃO CONSULTAR BANCOS DE
                    DADOS PÚBLICOS E PRIVADOS, TAIS COMO BUREAUS DE CRÉDITO,
                    QUE MANTENHAM INFORMAÇÕES RESTRITIVAS DE CRÉDITO,
                    CADASTRAIS, COMPORTAMENTAIS E FINANCEIRAS DE PESSOAS
                    FÍSICAS E JURÍDICAS, BANCOS DE DADOS DESESTRUTURADOS
                    MANTIDOS POR TERCEIROS, INCLUINDO REDES SOCIAIS, PARA
                    FINS DE PROTEÇÃO E ANÁLISE DE CRÉDITO E RISCO, BEM COMO
                    SISTEMAS DE REGISTRO DE ATIVOS FINANCEIROS
                    OPERACIONALIZADOS POR ENTIDADES REGISTRADORAS, PARA
                    FINS DE CONSULTA DE AGENDA DE RECEBÍVEIS, EFEITOS DE
                    CONTRATO SOBRE UNIDADES DE RECEBÍVEIS REGISTRADAS NOS
                    SISTEMAS DE REGISTRO, RECONHECENDO, AINDA, QUE A
                    CONTRATADA, SOCIEDADES DE SEU GRUPO ECONÔMICO E SUAS
                    AFILIADAS ESTÃO AUTORIZADAS A ENVIAR INSTRUÇÕES ÀS
                    INSTITUIÇÕES CREDENCIADORAS E ENTIDADES REGISTRADORAS
                    PARA FINS DA PRESTAÇÃO DOS SERVIÇOS.
                    4.3. O Cliente autoriza a Contratada, e suas Afiliadas, pelo prazo de 24 (vinte e
                    quatro) meses a contar do registro do presente Contrato, conforme alterado por meio
                    de aditamentos averbados à margem do registro principal, com o intuito de subsidiar
                    análise de risco de crédito e/ou relação comercial e empresarial entre as Partes e/ou
                    entre o Cliente e as Afiliadas, a consultar suas informações (pessoais, comerciais
                    e/ou financeiras), incluindo, mas não se limitando, ao histórico e pontuação de
                    crédito e/ou às agendas de Recebíveis, constantes de (a) Sistema de Informações de
                    Crédito do Banco Central – “SCR”, nos termos da regulamentação aplicável; (b)
                    informações de adimplemento – Cadastro Positivo, nos termos da regulamentação
                    aplicável; e (c) sistemas de registro de ativos financeiros operacionalizados por
                    entidades registradoras, autorizados pelo Banco Central.
                    4.3.1. O Cliente, desde já, se declara ciente de que:
                    (i) O SCR tem por finalidades: (i) prover informações ao Banco Central, para
                    fins de monitoramento do crédito no sistema financeiro e para o exercício de
                    suas atividades de fiscalização; e (ii) propiciar o intercâmbio de informações
                    entre instituições financeiras sobre o montante de responsabilidades de
                    clientes em operações de crédito;
                    (ii) A Contratada poderá ter acesso aos dados constantes em nome do Cliente
                    no SCR por meio do sistema Registrado do Banco Central;
                    (iii) Pedidos de correções, exclusões e manifestações de discordância quanto às
                    informações constantes do SCR deverão ser dirigidas ao SAC da instituição
                    financeira responsável pela inclusão da informação. O Cliente poderá
                    registrar reclamação na Central de Atendimento ao Público do Banco Central
                    - CAP, ou por meio de medida judicial cabível, em face de instituição
                    financeira responsável pelo lançamento incorreto das informações;
                    (iv) A consulta sobre qualquer informação ao SCR depende de autorização
                    prévia, concedida por esta Cláusula 4.3; e
                    (v) Mais informações sobre o SCR podem ser obtidas em consulta ao ambiente
                    virtual do Banco Central (www.bcb.gov.br).
                    4.3.2. O Cliente poderá, a qualquer tempo, revogar a presente autorização de
                    acesso ao SCR.
                    4.3.3. O Cliente autoriza a Contratada a compartilhar informações relacionadas à
                    movimentação transacional, nos termos da legislação vigente, especialmente do art.
                    1º, § 3º, v, da Lei Complementar 105/01, com:
                    (i) A Stone Sociedade de Crédito Direto S.A., inscrita no CNPJ/ME sob o nº
                    34.590.184/0001-09, com a finalidade de possibilitar análise de crédito e
                    outras atividades vinculadas à possível operação de crédito existente entre
                    o Cliente e a SCD; e
                    (ii) A Stone Instituição de Pagamento S.A., inscrita no CNPJ/ME sob o nº
                    16.501.555/0001-57, com a finalidade de possibilitar a (a) análise e
                    execução de operações com Recebíveis, e (b) abertura de Conta Stone.
                    4.4. O CLIENTE AUTORIZA O ENVIO DE INFORMAÇÕES RELATIVAS À SUA
                    AGENDA DE RECEBÍVEIS E A NEGOCIAÇÕES LASTREADAS NOS RECEBÍVEIS PARA
                    SISTEMAS DE REGISTRO DE ATIVOS FINANCEIROS GERIDOS POR ENTIDADES
                    REGISTRADORAS, NOS TERMOS DA REGULAMENTAÇÃO APLICÁVEL AO REGISTRO E
                    NEGOCIAÇÃO DE RECEBÍVEIS DE ARRANJOS DE PAGAMENTO INTEGRANTES DO
                    SISTEMA DE PAGAMENTOS BRASILEIRO.
                    4.5. O Cliente, desde já, autoriza e outorga poderes à Contratada, de forma
                    irrevogável e irretratável, nos termos dos artigos 683 e 684 do Código Civil, para a
                    abertura de conta de uma Conta Stone junto à Stone, em nome e titularidade do
                    Cliente, com o intuito de proporcionar uma melhor experiência ao Cliente com relação
                    aos serviços objeto deste Contrato e seus Anexos, bem como demais serviços que
                    venham a ser contratados pelo Cliente junto à Contratada e suas Afiliadas.
                    4.5.1. Até que o Cliente realize de forma voluntária todos os procedimentos
                    necessários ao cadastramento de outras funcionalidades, a Conta Stone de sua
                    titularidade terá funcionalidade limitada, podendo o Cliente única e exclusivamente
                    realizar transferências de saldos de livre movimentação para contas de mesma
                    titularidade, incluindo a sua Conta Pagar.me. Para tanto, o Cliente, desde já, autoriza
                    e outorga poderes à Contratada, de forma irrevogável e irretratável, nos termos dos
                    artigos 683 e 684 do Código Civil, para movimentar a Conta Stone de sua titularidade,
                    em seu nome, de modo a providenciar as referidas transferências, conforme
                    aplicável.
                    4.5.2. Durante este período, a mera existência da Conta Stone não ensejará
                    qualquer tipo de custo, encargo administrativo ou tarifa para o Cliente. Caso o Cliente
                    opte por ampliar o rol de funcionalidades da Conta Stone, a seu exclusivo critério,
                    serão aplicáveis as condições comerciais que a Stone venha a exigir à época da
                    solicitação.
                    4.5.3. Os Termos e Condições de Uso da Conta Stone, com as regras gerais para a
                    utilização da Conta Stone se encontram em: https://www.stone.com.br/contrato/.
                    4.6. O Cliente reconhece que a Contratada poderá compartilhar os seus dados,
                    informações e documentos cadastrais com a Stone, conforme exigidos pelas Políticas
                    Stone e pela regulamentação vigentes, com o intuito de viabilizar a abertura da Conta
                    Stone junto à Stone, nos termos dos Termos e Condições de Uso da Conta Stone.
                    CLÁUSULA V
                    Obrigações da Contratada
                    5.1. Não obstante as obrigações específicas da Contratada previstas no
                    respectivo Anexo, a Contratada se compromete a envidar seus melhores esforços
                    para garantir a plena execução dos serviços contratados, de modo a evitar quaisquer
                    falhas e/ou interferências que possam prejudicar a prestação de serviços ou
                    oferecimento de produtos ao Cliente.
                    CLÁUSULA VI
                    Confidencialidade
                    6.1. O Cliente compromete-se a manter em absoluto sigilo e confidencialidade
                    todas as Informações Confidenciais. No caso de sua eventual violação ou divulgação,
                    inclusive por atos de seus funcionários ou terceiros, o Cliente será responsável pelo
                    ressarcimento das Perdas ocasionadas à Contratada e a terceiros, incluindo danos
                    emergentes, lucros cessantes, custas judiciais e honorários advocatícios.
                    6.2. O Cliente se compromete a manter, conservar e guardar todas as
                    Informações Confidenciais que lhe sejam entregues ou a que tenha acesso em
                    decorrência deste Contrato, em local absolutamente seguro, inacessível a terceiros,
                    salvo quanto às pessoas devidamente autorizadas pela Contratada e cientes da
                    obrigação de sigilo aqui definida, as quais se obrigam também a observar as
                    restrições aqui previstas.
                    6.3. O Cliente obriga-se a utilizar as Informações Confidenciais que lhe são
                    disponibilizadas nos termos do Contrato, exclusivamente para as finalidades e
                    serviços contratados, ficando vedada qualquer alteração de sua forma ou substância.
                    6.4. A Contratada compromete-se a manter a confidencialidade de dados das
                    transações efetuadas pelo Cliente, exceto quando solicitados por ordem judicial,
                    administrativa ou arbitral, exigidos por lei, pelas Bandeiras, pelas Registradoras e/ou
                    por prestadores de serviço da Contratada, se aplicável. A Contratada poderá prestar
                    às autoridades competentes, tais como o Ministério da Fazenda, o Banco Central, a
                    Receita Federal, as Secretarias da Fazenda Estaduais e Municipais, Comissões
                    Parlamentares de Inquérito, Órgãos de Controle de Atividades Financeiras, Polícia
                    Federal, Tribunais de Justiça, Ministério Público e etc., todas as informações que
                    forem solicitadas em relação ao Cliente ou quaisquer dados relativos às transações
                    efetuadas pelo Cliente.
                    6.5. Exclusivamente para as finalidades e serviços contratados, o Cliente, de
                    forma irrevogável e irretratável, autoriza a Contratada e/ou as sociedades
                    pertencentes ao grupo econômico da Contratada a:
                    (i) Trocarem entre si as Informações Confidenciais e demais informações, assim
                    como consultar e/ou confirmar a exatidão das mesmas em websites e bancos
                    de dados em geral;
                    (ii) Compartilhar as Informações Confidenciais e demais informações com os
                    Emissores, Instituições Domicílio, Registradoras e Bandeiras;
                    (iii) Compartilhar Informações Confidenciais e demais informações com seus
                    parceiros estratégicos e prestadores de serviços, no Brasil ou no exterior,
                    para fins de cumprimento das obrigações deste Contrato, avaliação de
                    crédito, verificação e gestão de risco e fraude;
                    (iv) Utilizar suas Informações Confidenciais e demais informações para formação
                    de banco de dados, bem como sua divulgação a qualquer título, desde que
                    de forma anônima, generalizada e não identificável;
                    (v) Comunicar transações que possam estar configuradas no disposto na Lei nº
                    9.613, de 3 de março de 1998, e demais normas relativas à combate e
                    prevenção de lavagem de dinheiro, corrupção e financiamento do terrorismo,
                    incluindo as normas nacionais e internacionais aplicáveis e políticas internas
                    da Contratada nesse sentido; e
                    (vi) Informar, aos órgãos de proteção de crédito, os dados relativos à falta de
                    pagamento de obrigações assumidas pelo Cliente junto à Contratada.
                    6.6. A obrigação de sigilo se manterá válida inclusive quando do término por
                    qualquer motivo deste Contrato. A não observância dos requerimentos mencionados
                    nesta cláusula sujeitará o Cliente ao pagamento de indenização nos termos deste
                    Contrato e às sanções e pagamento das multas e/ou Perdas, sem prejuízo das demais
                    medidas asseguradas em lei às Partes e aos terceiros prejudicados.
                    CLÁUSULA VII
                    Proteção de Dados
                    7.1. Caso o Cliente trafegue, processe ou armazene dados do Portador em seu
                    ambiente, seja em mídia física ou digital, este compromete-se a cumprir e manterse aderente às regras, incluindo, mas não se limitando àquelas emanadas pelo PCI
                    (Payment Card Industry) Security Standards Council ou qualquer norma posterior,
                    observadas pela Contratada, que venha a regular a segurança de dados do portador
                    de cartão no mercado de Meios de Pagamento local e internacional, durante a
                    vigência deste Contrato, conforme prazos e condições definidas pela Contratada.
                    7.1.1. A obrigatoriedade acima se estende a qualquer fornecedor contratado pelo
                    Cliente cuja atividade seja passível de tráfego, processamento ou armazenamento
                    dos dados do Portador.
                    7.1.2. O Cliente deve comunicar a Contratada, no prazo máximo de 24 (vinte e
                    quatro) horas, caso tome conhecimento do vazamento dos dados do Portador.
                    7.2. O Cliente se declara ciente de que a Contratada não possui responsabilidade
                    quanto a criação e segurança do ambiente virtual do Cliente, nem mesmo pela forma
                    como se dá o acesso de clientes do Cliente a tal ambiente.
                    7.3. O Cliente é exclusivamente responsável por instalar e manter atualizados
                    sistemas e/ou dispositivos, bem como outros itens necessários a evitar a violação do
                    equipamento que terá acesso às soluções e serviços disponibilizados pela Contratada.
                    7.4. Além disso, o Cliente deve se certificar de que a configuração dos
                    equipamentos por ele utilizados, próprios ou de terceiros, atende aos requisitos
                    mínimos de segurança para uso das soluções e serviços disponibilizados pela
                    Contratada, de modo que a Contratada ficará isenta de qualquer responsabilidade
                    referente à essa questão.
                    7.5. O presente Contrato não implica a assunção de qualquer responsabilidade
                    pela Contratada por eventual tratamento de dados pessoais que vier a ser realizado
                    pelo Cliente, empresas do mesmo grupo econômico e/ou subcontratados (“Afiliadas
                    do Cliente”), permanecendo o Cliente única e exclusivamente responsável pelo
                    referido tratamento perante os titulares de dados, as autoridades competentes e/ou
                    quaisquer terceiros relacionados.
                    7.6. Caso a Contratada venha a ser demandada, administrativa, judicial ou
                    extrajudicialmente, em razão de tratamento de dados pessoais realizado pelo Cliente
                    e/ou Afiliadas do Cliente, incluindo, mas não se limitando em situações de incidentes
                    de segurança, o Cliente deverá envidar os melhores esforços para excluir a
                    Contratada da referida demanda, sem prejuízo do ressarcimento quaisquer despesas,
                    custos, multas, indenizações e/ou ônus que a Contratada vier a incorrer em
                    decorrência desta, incluindo, mas não se limitando aos honorários advocatícios,
                    periciais e/ou contábeis e/ou eventuais condenações.
                    7.7. Com relação aos dados pessoais, o Cliente declara que leu e está ciente do
                    conteúdo do Aviso de Privacidade da Contratada, prevista no website e/ou demais
                    ambientes disponibilizados pela Contratada.
                    CLÁUSULA VIII
                    Combate e Prevenção à Corrupção, ao Financiamento do Terrorismo e
                    à Lavagem de Dinheiro
                    8.1. O Cliente declara, por si e por seus colaboradores, contratados, sócios,
                    empresas integrantes do seu grupo econômico, acionistas, empregados, funcionários
                    e administradores (“Representantes”), que:
                    (i) Atua em conformidade com todas as leis, regulamentações, manuais,
                    políticas e quaisquer disposições relacionadas ao combate e prevenção à
                    corrupção, à lavagem de dinheiro e ao financiamento do terrorismo,
                    incluindo, mas não se limitando, a legislação brasileira aplicável, UK Bribery
                    Act e Foreign Corrupt Practices Act (FCPA); e
                    (ii) Não realizou, não realiza e não realizará quaisquer atos ou práticas que,
                    direta ou indiretamente, envolvam oferecimento, promessas, suborno,
                    extorsão, autorização, solicitação, aceite, pagamento, entrega ou qualquer
                    outro ato relacionado a vantagem pecuniária indevida ou qualquer outro
                    favorecimento ilegal em desconformidade com a legislação mencionada
                    acima e aplicável.
                    8.2. O Cliente se compromete a informar à Contratada caso algum de seus
                    Representantes já tenham exercido ou exerçam função de autoridade pública, bem
                    como todas as relações familiares ou relações pessoais próximas referentes aos seus
                    Representantes com autoridade pública.
                    8.3. O não cumprimento das disposições previstas nesta Cláusula pelo Cliente
                    poderá acarretar a rescisão unilateral deste Contrato, pela Contratada, que poderá
                    automaticamente suspender o cumprimento de obrigações oriundas do presente
                    Contrato e/ou rescindi-lo imediatamente. A violação da presente Cláusula, pelo
                    Cliente ou por seus Representantes, ensejará, ainda, a obrigação de indenizar a
                    Contratada por eventuais Perdas nos termos deste Contrato.
                    8.4. O Cliente concorda que a Contratada poderá, a qualquer tempo, auditar o
                    Cliente a respeito de qualquer informação e/ou documento com a finalidade de
                    verificar o cumprimento do disposto neste Contrato. A auditoria aqui mencionada
                    poderá ser realizada pela Contratada ou por terceiro indicado e custeado por ela,
                    devendo o Cliente, a todo momento, garantir amplo e irrestrito acesso a todos os
                    documentos e locais pertinentes.
                    8.5. O Cliente se compromete a comunicar imediatamente a Contratada no caso
                    de ocorrência de qualquer violação, suspeita de violação ou qualquer situação
                    irregular que se apresente contra a legislação aplicável acerca de combate e
                    prevenção à lavagem de dinheiro, ao financiamento do terrorismo e à corrupção,
                    bem como acordos e convenções internacionais que regulamentam o assunto.
                    CLÁUSULA IX
                    Uso da Marca
                    9.1. O Cliente autoriza a Contratada a incluir, sem qualquer ônus ou encargos,
                    seu nome, marcas e logotipos e endereço, bem como os de suas unidades comerciais
                    e filiais, em ações de marketing, comunicados, catálogos e/ou quaisquer materiais
                    promocionais da Contratada. O Cliente autoriza, ainda, a comunicação de seus dados
                    comerciais aos Emissores, Portadores, Bandeiras, Registradoras e demais
                    participantes do sistema de pagamento do qual a Contratada pertence.
                    9.2. O Cliente declara ciência de que a Contratada é titular e/ou licenciada de
                    diversos direitos de propriedade intelectual, incluindo vários direitos de propriedade
                    industrial e direitos autorais, sobre as marcas e domínios de internet relacionados à
                    Contratada (doravante conjuntamente denominados "Sinais Distintivos"), dentre
                    outros sinais distintivos não autorizados neste instrumento, no âmbito da Lei nº
                    9.279/96 (“Lei da Propriedade Industrial”), Lei nº 9.610/98 (“Lei de Direitos
                    Autorais”) e disposições da Lei nº 10.406/02 (“Código Civil”).
                    9.3. Com relação aos Sinais Distintivos, às marcas das Bandeiras e à marca Pix
                    de titularidade exclusiva do Banco Central, o Cliente obriga-se a utilizá-los, nos
                    estritos termos deste Contrato e dos respectivos regulamentos e/ou regras
                    aplicáveis, nas formas, cores e modelos indicados e aprovados previamente pela
                    Contratada e/ou por seu titular, conforme aplicável, não podendo alterá-los ou usálos de forma diversa à aprovada. Todo e qualquer uso indevido pelo Cliente ensejará
                    indenização das Perdas a ser paga pelo Cliente aos respectivos detentores dos
                    direitos de propriedade intelectual.
                    9.4. A presente autorização, concedida de forma não exclusiva, tem por
                    finalidade única a reprodução dos Sinais Distintivos, das marcas das Bandeiras e da
                    marca Pix de titularidade exclusiva do Banco Central, relacionada à identificação da
                    prestação de serviços de pagamento pela Contratada, e não deve ser interpretada
                    como licença de uso.
                    9.5. Em consequência ao disposto acima, este Contrato não transfere para o
                    Cliente qualquer direito de propriedade intelectual que a Contratada, as Bandeiras
                    e/ou o Banco Central possuam sobre os seus processos e sistemas e/ou qualquer
                    direito intelectual que venham a criar, construir ou adquirir. Assim, o Cliente não
                    deve, a qualquer tempo, reivindicar ou adquirir qualquer direito, título ou interesse
                    sobre os Sinais Distintivos, as marcas das Bandeiras e da marca Pix e
                    reconhece/compromete-se a respeitar todos os direitos, títulos e interesses da
                    Contratada, das Bandeiras e/ou do Banco Central sobre os respectivos direitos de
                    propriedade intelectual, obrigando-se a não intentar qualquer ação que possa
                    prejudicar ou questionar ou anular tais direitos, no Brasil ou no exterior.
                    9.6. É responsabilidade do Cliente zelar pela utilização dos Sinais Distintivos, das
                    marcas das Bandeiras e da marca Pix de titularidade exclusiva do Banco Central,
                    conforme estabelecido no presente Contrato e dos respectivos regulamentos e/ou
                    regras aplicáveis. TODO E QUALQUER MATERIAL DO CLIENTE, INCLUSIVE MATERIAL
                    DE PROPAGANDA, CONTENDO OS SINAIS DISTINTIVOS DEVERÁ SER PRÉVIA E
                    EXPRESSAMENTE APROVADO PELA CONTRATADA, A QUAL TERÁ PODER DE VETO
                    SOBRE O MATERIAL, QUER SEJA PARCIAL OU TOTAL.
                    9.7. O Cliente deve informar imediatamente à Contratada qualquer utilização
                    indevida dos Sinais Distintivos por terceiros que venha a ter conhecimento, sendo
                    que o direito de defesa dos Sinais Distintivos caberá sempre exclusivamente à
                    Contratada. O Cliente assume desde já o compromisso de cooperar com a Contratada
                    na defesa dos interesses desta nos Sinais Distintivos.
                    9.8. Após o término deste Contrato por qualquer motivo, o Cliente deverá cessar
                    o uso dos Sinais Distintivos e dos instituidores de arranjo de pagamento, bem como
                    dos equipamentos, aparelhos, software e materiais cedidos pela Contratada, de
                    forma irrevogável, irretratável e imediata.
                    CLÁUSULA X
                    Prazo e Rescisão
                    10.1. Caso o respectivo Anexo não contenha disposição em contrário, este
                    Contrato entra em vigor no momento em que o Cliente realizar, pela primeira vez,
                    uma Transação com Meio de Pagamento a partir dos sistemas disponibilizados pela
                    Contratada ou, conforme o caso, utilizar, pela primeira vez, os serviços prestados
                    pela Contratada, sendo que o Contrato permanecerá em vigor por tempo
                    indeterminado, podendo ser denunciado a qualquer tempo, pelo Cliente e sem a
                    incidência de qualquer ônus ou penalidade, ressalvado o cumprimento obrigações
                    contratuais ainda pendentes, mediante aviso prévio de 30 (trinta) dias. A Contratada
                    poderá, a qualquer tempo, rescindir o presente Contrato e qualquer de seus Anexos,
                    de forma imediata e independentemente de notificação ou interpelação judicial ou
                    extrajudicial, devendo a Contratada ensejar os melhores esforços para notificar
                    previamente o Cliente desta rescisão.
                    10.2. Não obstante, este Contrato poderá ser imediatamente rescindido pela
                    Contratada, sem prejuízo do ressarcimento das Perdas devido pelo Cliente
                    eventualmente acarretados nos termos deste Contrato, nos seguintes casos:
                    (i) Infração ou tentativa de infração, pela Cliente, de qualquer das cláusulas,
                    termos ou condições deste Contrato e seus Anexos, bem como de quaisquer
                    solicitações ou recomendações colocadas pela Contratada;
                    (ii) Constatação de suspeita ou prática de fraude ou demais ilícitos pelo Cliente;
                    (iii) Determinação dos instituidores de arranjo de pagamento e/ou das
                    autoridades competentes;
                    (iv) Exercício de atividades consideradas ilegais ou ilícitas pelo Cliente;
                    (v) Decretação de falência, deferimento de pedido de recuperação judicial ou
                    proposição de recuperação extrajudicial ou procedimento similar, declaração
                    de insolvência do Cliente e/ou ocorrência de qualquer ato ou fato que
                    demonstre, a exclusivo critério da Contratada, a incapacidade do Cliente em
                    honrar suas obrigações com a Contratada ou com terceiros;
                    (vi) Impasse entre as Partes na definição de ajustes ou alterações ao presente
                    Contrato;
                    (vii) Alteração de controle societário, direto ou indireto, ou na administração do
                    Cliente e ocorrência de incorporação, fusão, cisão ou qualquer outra
                    reorganização societária, sem o consentimento prévio e por escrito da
                    Contratada;
                    (viii) Uso indevido dos Sinais Distintivos da Contratada que cause ou possa vir a
                    causar dano à imagem da Contratada, das marcas das Bandeiras e da marca
                    Pix de titularidade exclusiva do Banco Central, sem prejuízo da adoção das
                    medidas judiciais cabíveis;
                    (ix) Superveniência de alterações nas normas legais ou regulamentares
                    aplicáveis ao objeto deste Contrato e/ou ao mercado de atuação da
                    Contratada ou qualquer fato que altere substancialmente os procedimentos
                    ou regras objeto deste Contrato, a capacidade do Cliente de honrar com as
                    obrigações assumidas junto à Contratada e/ou o equilíbrio econômicofinanceiro deste Contrato; e
                    (x) Se o Cliente, sem autorização da Contratada, ceder, transferir, emprestar ou
                    entregar a terceiros os equipamentos ou materiais que receber da
                    Contratada em virtude deste Contrato, ou utilizar tais matérias ou
                    equipamentos em desacordo às especificações estabelecidas pela
                    Contratada.
                    10.3. O término do Contrato não exonera as Partes do cumprimento pleno e
                    irrestrito de todas as obrigações decorrentes do Contrato.
                    10.4. As disposições das Cláusulas 4, 6, 8, 9, 12 e 13 subsistirão em caso de
                    resilição ou rescisão do Contrato.
                    CLÁUSULA XI
                    Alterações do Contrato
                    11.1. A Contratada, por qualquer meio de transmissão ou comunicação ou, ainda,
                    por disponibilização em seu website, poderá alterar, aditar ou incluir Cláusulas ou
                    condições deste Contrato e/ou Anexos, mediante informação ao Cliente.
                    11.2. Durante a vigência deste Contrato, o Cliente poderá receber mensagens
                    eletrônicas da Contratada, de modo a assegurar a execução contratual, tais como
                    avisos relacionados a alterações contratuais, atualização de tecnologias, entre
                    outros. Essas mensagens não serão consideradas indesejadas, abusivas, spam, nem
                    e-mail marketing, tendo em vista que sua finalidade é manter o Cliente informado a
                    respeito de sua relação contratual com a Contratada.
                    11.3. Este Contrato (incluindo todos os seus Anexos) constitui o único e integral
                    acordo entre a Contratada e o Cliente, e substitui, incluindo, mas não se limitando,
                    o inteiro teor do Contrato de Solução de Pagamentos de Transações Comerciais,
                    registrado no 4º Oficial de Registro de Títulos e Documentos e Civil de Pessoa Jurídica
                    da Cidade e Estado de São Paulo, bem como as respectivas alterações e/ou aditivos.
                    11.4. Este Contrato, devidamente registrado em cartório competente, entra em
                    vigor na data de seu registro e, nesta data, rescinde e automaticamente torna sem
                    efeito o Contrato de Solução de Pagamentos de Transações Comerciais mencionado
                    na Cláusula 11.3 acima.
                    CLÁUSULA XII
                    Indenização
                    12.1. O Cliente se obriga, de modo irrevogável e irretratável, a defender, indenizar
                    e manter a Contratada indene em relação a toda e qualquer Perda decorrente de ato
                    ou fato que o Cliente tenha dado causa, independente de culpa ou dolo, como
                    resultado: (i) de qualquer inexatidão ou falsidade das declarações feitas pelo Cliente
                    neste Contrato, ou qualquer infração dessas declarações; (ii) do não cumprimento,
                    parcial ou total, de quaisquer obrigações ou acordos do Cliente contidos neste
                    Contrato e/ou na legislação e regulamentação aplicável; (iii) do fornecimento de
                    informação incorreta ou incompleta que tenha servido como base para a Contratada
                    executar suas obrigações nos termos do presente Contrato; e (iv) Perda causada a
                    terceiro. As disposições da presente Cláusula subsistirão em caso de rescisão do
                    presente Contrato, inclusive, mas sem limitação, até que todas as negociações e
                    processos, administrativos e judiciais em curso no momento da rescisão se concluam
                    até obtenção de decisão final e irrecorrível ou transitado em julgado em caso de
                    processo judicial.
                    12.1.1. O valor da Perda deverá ser indenizado pelo Cliente em até 7 (sete) Dias
                    Úteis contados do recebimento de notificação da Contratada neste sentido.
                    12.2. O pagamento de indenização por Perdas em razão do desrespeito às
                    disposições deste Contrato não excluirá a execução específica das obrigações
                    previstas neste Contrato e nem eximirá o Cliente pela quebra deste Contrato das
                    demais consequências previstas em lei.
                    12.3. Caso a Contratada seja notificada por escrito quanto a uma reclamação prélitigiosa, procedimento administrativo ou ação judicial iniciada por um terceiro em
                    razão de ato ou fato praticado pelo Cliente, a Contratada deverá cientificar o Cliente
                    quanto aos termos da notificação recebida.
                    12.4. O Cliente indenizará a Contratada por todas as despesas incorridas em sua
                    defesa, incluindo honorários advocatícios, sem prejuízo de indenizá-la por quaisquer
                    Perdas decorrentes da reclamação, procedimento administrativo ou ação judicial.
                    12.5. Cada Parte arcará com as despesas e obrigações trabalhistas e
                    previdenciárias referentes aos seus empregados, prepostos ou representantes.
                    12.6. Este Contrato não cria vínculo trabalhista entre cada Parte e os profissionais
                    designados pela outra Parte para a execução do objeto do Contrato, sejam eles
                    funcionários, cabendo à Parte responsável pela designação exclusiva e integral
                    responsabilidade (a) pela gestão e fiscalização desses profissionais e (b) pelo
                    cumprimento das obrigações de natureza trabalhista, tributária ou previdenciária,
                    inclusive relativas à segurança e higiene do trabalho. Da mesma forma, este Contrato
                    não cria vínculo trabalhista entre nenhuma Parte e qualquer funcionário ou prestador
                    de serviço da outra Parte.
                    12.6.1. A responsabilidade mencionada na Cláusula 12.6 acima subsistirá, inclusive,
                    em caso de reconhecimento de vínculo trabalhista de qualquer desses profissionais
                    com a outra Parte, por qualquer motivo.
                    12.7. Caso as soluções e serviços disponibilizados pela Contratada venham a
                    responder de forma não esperada e sofrer interrupções, atrasos ou erros, sem que a
                    Contratada possa controlar tais fatores (e.g., casos de erros ou interrupções
                    causadas por falhas operacionais ou por Bandeiras em questão, incluindo, mas não
                    se limitando a, Emissores, Credenciadoras, Instituições Domicílio, processadoras,
                    câmaras de compensação e liquidação, agentes financeiros e instituições financeiras),
                    a Contratada, sem prejuízo de agir com diligência para manter as soluções e serviços
                    disponibilizados funcionando corretamente, não será responsável de nenhuma forma
                    por tais interrupções, atrasos e erros, bem como por quaisquer danos alegados pelo
                    Cliente relacionados a tais interrupções, atrasos e erros. O Cliente neste ato, de
                    forma irrevogável e irretratável, expressamente concorda que não haverá qualquer
                    indenização neste caso.
                    CLÁUSULA XIII
                    Disposições Gerais
                    13.1. A tolerância ou omissão de qualquer uma das Partes não implica em
                    renúncia, perdão, novação ou alteração do pactuado neste Contrato, bem como na
                    desistência de exigir o cumprimento das disposições aqui contidas ou do direito de
                    requerer futuramente a total execução de cada uma das obrigações estabelecidas
                    neste Contrato.
                    13.2. Se qualquer disposição do presente Contrato for declarada ou considerada
                    ilegal, inexequível ou nula, ambas as Partes estarão liberadas de cumprir as
                    obrigações previstas na referida disposição, porém somente na medida em que essa
                    disposição seja ilegal, inexequível ou nula. Na ocorrência do aqui previsto, as Partes,
                    de comum acordo, deverão alterar este Contrato, modificando a referida disposição,
                    na medida necessária para torná-la legal e exequível, ao mesmo tempo preservando
                    seu objetivo, ou se isso não for possível, substituindo-a por outra disposição que seja
                    legal e exequível, e que atinja o mesmo objetivo.
                    13.3. As Partes não serão responsáveis por quaisquer falhas, interrupções ou
                    atrasos no cumprimento de suas obrigações, quando decorrentes de caso fortuito ou
                    de força maior, sendo estes excludentes de responsabilidade nos termos do artigo
                    393 do Código Civil, incluindo, entre outros, atos governamentais, limitações
                    impostas por parte do Poder Público, interrupção na prestação de serviços sob
                    licença, autorização, permissão ou concessão governamental (fornecimento de
                    energia elétrica e serviços de telefonia, atuação de operadoras de serviço de
                    telecomunicações interconectadas à rede do Cliente e da Contratada, entre outros),
                    catástrofes, greves, perturbações da ordem pública e demais eventos da mesma
                    natureza.
                    13.4. Este Contrato, junto com todos os seus Anexos, constitui a totalidade do
                    acordo entre as Partes com relação ao seu objeto e substitui em todos os aspectos
                    todas as propostas, negociações, discussões e entendimentos prévios entre as Partes
                    com relação ao objeto deste Contrato.
                    13.5. As condições do presente Contrato obrigam as Partes e seus sucessores a
                    qualquer título.
                    13.6. A Contratada poderá ceder ou transferir, total ou parcialmente, os seus
                    direitos e obrigações decorrentes deste Contrato para sociedades pertencentes ao
                    seu grupo econômico, ou quaisquer terceiros, independente de consentimento,
                    comunicação ou aviso ao Cliente. Os direitos e obrigações do Cliente previstos neste
                    Contrato não poderão ser cedidos ou transferidos, no todo ou em parte, direta ou
                    indiretamente, sem o prévio consentimento escrito da Contratada, sob pena de
                    rescisão imediata deste Contrato.
                    13.7. Não se estabelece, por força deste Contrato, qualquer vínculo societário,
                    trabalhista ou empregatício entre as Partes, correndo por conta exclusiva de cada
                    Parte todas as despesas com seus empregados, prepostos, contratados e
                    subcontratados, inclusive encargos decorrentes da legislação vigente, seja
                    trabalhista, previdenciária, securitária ou qualquer outra. A relação entre as Partes
                    versa única e exclusivamente sobre o objeto do presente Contrato, não podendo, em
                    nenhuma circunstância, ser interpretada como relação de associação, de sociedade
                    a qualquer título, de empregado-empregador, de fornecedor-consumidor, ou de
                    qualquer outra forma que não a prevista neste Contrato.
                    13.8. Na hipótese de o Cliente apresentar débitos ou créditos com sociedades
                    integrantes do grupo econômico da Contratada, o Cliente, desde já, autoriza, de
                    forma expressa, irrevogável e irretratável, a compensação dos respectivos valores,
                    renunciando, desde já, a quaisquer questionamentos decorrentes de tal
                    compensação.
                    13.9. Os tributos e contribuições que incidam ou venham a incidir sobre as
                    importâncias pagas à Contratada e/ou ao Cliente em decorrência direta ou indireta
                    deste Contrato serão suportados pelo seu contribuinte, assim definido na legislação
                    que instituir e/ou regular referidos tributos e contribuições.
                    13.10. Observado o disposto neste Contrato, as Partes reconhecem que a atribuição
                    de perdas e danos, embora sendo devida e apurada na forma da lei aplicável, não
                    constituirá reparação suficiente para o descumprimento das obrigações previstas
                    neste Contrato, podendo qualquer Parte exigir judicialmente o cumprimento
                    específico da obrigação inadimplida, incluindo tanto as obrigações principais como as
                    acessórias previstas neste instrumento.
                    13.11. Este Contrato constitui título executivo extrajudicial, nos termos do art. 784,
                    inciso II e seguintes, da Lei nº 13.105, de 16 de março de 2015 (Código de Processo
                    Civil).
                    13.12. O presente instrumento será regido e interpretado de acordo com as Leis da
                    República Federativa do Brasil.
                    13.13. As Partes elegem, como único competente para a solução ou interpretação
                    de cláusulas ou questões oriundas do presente Contrato, as que amigavelmente não
                    puderem resolver, o Foro da Comarca de São Paulo, Estado de São Paulo, em prejuízo
                    de qualquer outro por mais privilegiado que seja.
                    * * * * *
                    ANEXO I AOS TERMOS GERAIS DE CONTRATAÇÃO DE PRODUTOS E
                    SERVIÇOS DE PAGAMENTO
                    Por meio deste Anexo I, os termos aqui definidos em letra maiúscula serão aplicáveis
                    ao Contrato e a todos os Anexos.
                    DEFINIÇÕES E INTERPRETAÇÕES
                    “Afiliadas” significa todas as sociedades que integram o grupo econômico da
                    Contratada, em especial a Stone Sociedade de Crédito Direto S.A e/ou parceiros
                    estratégicos da Contratada e eventuais subcontratadas.
                    “Agenda Financeira” significa a relação de débitos e créditos do Cliente relativo às
                    Transações com Meio de Pagamento.
                    “Arranjo de Pagamento” significa o conjunto de regras e procedimentos instituídos
                    pela Bandeira que permitem a prestação de serviços de pagamento ao público em
                    geral por meio da relação entre Emissores, Contratada, Instituições Domicílio e
                    Credenciadoras.
                    “Banco Central” significa o Banco Central do Brasil.
                    “Bandeira” significa os instituidores de Arranjos de Pagamento, detentores dos
                    direitos de propriedade e franqueadoras de suas marcas e responsáveis pela gestão
                    e organização das regras dos serviços de pagamento por elas geridos.
                    “Cancelamento da Transação” significa o processo em que o Cliente solicita à
                    Contratada o cancelamento de uma Transação com meio de Pagamento já
                    processada.
                    “Cartão” ou “Cartões” significa os instrumentos de identificação e/ou de pagamento,
                    físicos ou virtuais, disponibilizados pelos Emissores, para uso pessoal e intransferível
                    dos Portadores e aceitos pelos estabelecimentos habilitados pela Contratada.
                    “Central de Atendimento” significa os canais de comunicação disponibilizados pela
                    Contratada para atendimento de todas as necessidades do Cliente.
                    “Conta Pagar.me” significa a conta de pagamento pré-paga de titularidade de um
                    Cliente e aberta junto à Contratada.
                    “Conta Stone” significa a conta de pagamento em nome e titularidade do Cliente
                    junto à Stone enquanto instituição de pagamento emissora de moeda eletrônica
                    autorizada pelo Banco Central (ISPB nº 16501555, código COMPE nº 197).
                    “Contestação” ou “Chargeback” significa o processo de devolução de uma Transação
                    com Meio de Pagamento, por contestação do Portador, da Bandeira ou do Emissor,
                    de acordo com as regras e prazos definidos pelas Bandeiras e/ou Credenciadoras.
                    “Credenciador” ou “Credenciadoras” significa a instituição de pagamento
                    credenciadora, que presta serviços de credenciamento de estabelecimentos
                    comerciais e participa do processo de liquidação das transações de pagamento, nos
                    termos da regulamentação do Banco Central.
                    “Dias Úteis” ou “Dia Útil” significa qualquer dia que não seja sábado, domingo ou
                    feriado declarado nacional.
                    “Emissor” significa as instituições de pagamento ou financeiras, nacionais ou
                    estrangeiras, autorizadas pelas Bandeiras a emitir e conceder Cartões e/ou
                    disponibilizar Produtos, para uso no Brasil e/ou no exterior.
                    “Informação Confidencial” ou “Informações Confidenciais” significa toda e qualquer
                    informação, seja verbal, escrita, impressa ou eletrônica, de qualquer natureza, que
                    poderá ser entendida como confidencial, sejam elas classificadas como confidenciais
                    ou não, incluindo, mas não limitado a, qualquer informação a respeito de transações
                    efetuadas, quaisquer informações ou condições decorrentes das transações ou
                    gerados a partir de tais transações ou estabelecidas no Contrato, tecnologia utilizada
                    pelas Partes, assim como os procedimentos técnicos, os processos de negócios,
                    incluindo as estratégias financeiras e as políticas de segurança de informação das
                    Partes, que podem ter a forma de documentos, especificações técnicas, know-how,
                    patentes, dados, desenhos, planos, fluxogramas de processo, fotografias, base de
                    dados, hardware, software, além de descrições, apresentações e observações
                    efetuadas oralmente.
                    “Instituição Domicílio” significa instituição financeira ou de pagamento participante
                    do Arranjo de Pagamento detentora de conta de depósitos à vista ou de pagamento
                    de escolha do Cliente para crédito ordinário de seus recebimentos autorizados no
                    âmbito do Arranjo de Pagamento, sendo certo que a Instituição Domicílio do Cliente
                    pode ser a própria Contratada.
                    “IPCA/FGV” significa o Índice de Preços ao Consumidor, divulgado pela Fundação
                    Getúlio Vargas ou outro que venha a substituí-lo.
                    “Loja Virtual” significa os estabelecimentos comerciais que oferecem seus produtos
                    e/ou serviços no âmbito da plataforma de Marketplace do Cliente.
                    “Marketplace” significa plataforma tecnológica mantida e administrada pelo Cliente,
                    sob sua exclusiva responsabilidade, que disponibiliza todas as condições para que as
                    Lojas Virtuais possam oferecer seus produtos e/ou serviços aos Portadores. É
                    sinônimo de shopping virtual.
                    “Meios de Pagamento” significa instrumentos físicos ou eletrônicos com funções de
                    pagamento, aceitos ou que venham a ser aceitos pela Contratada a qualquer tempo.
                    “Perda” significa todas e quaisquer perdas, obrigações, demandas, passivos,
                    exigências, constrições, danos, multas, penalidades, prejuízos, ônus, desembolsos,
                    custos ou despesas, incluindo danos diretos, danos indiretos, danos emergentes,
                    danos morais e/ou lucros cessantes, honorários advocatícios e de outros
                    especialistas, de verbas de sucumbência, bem como custas judiciais ou quaisquer
                    juros, sejam eles já materializados ou futuros, incorridos pela Contratada e/ou
                    terceiros, decorrentes, direta ou indiretamente, do objeto do Contrato e/ou Anexo,
                    bem como do descumprimento de obrigações assumidas pelo Cliente perante
                    terceiros ou no âmbito de sua atividade, inclusive após o decurso do prazo do
                    Contrato e/ou Anexo, incluindo, sem limitação, aquelas decorrentes de multas,
                    penalidades, reclamações, processos administrativos, extrajudiciais e judiciais
                    ajuizados por terceiros e/ou ocasionadas por ato oriundo de Clientes, independente
                    de culpa ou dolo.
                    “Pix” significa o arranjo de pagamentos instituído pelo Banco Central que disciplina a
                    prestação de serviços de pagamento relacionados a Transações de Pagamento
                    Instantâneo e a própria Transação de Pagamento Instantâneo no âmbito do
                    respectivo arranjo de pagamento.
                    “Políticas Stone” significam todas as políticas e procedimentos internos da Stone, que
                    poderão ser alterados e atualizados pela Stone, de tempos em tempos, conforme se
                    fizer necessário, incluindo, sem limitação, política de cibersegurança, política de
                    prevenção e combate à lavagem de dinheiro e subcontratação, política de riscos e
                    compliance, políticas de Know Your Customer (KYC), entre outras.
                    “Portadores” significa as pessoas físicas ou os prepostos de pessoas jurídicas,
                    detentores de Cartão e/ou outro Meio de Pagamento, autorizados a realizar
                    Transações com Meio de Pagamento.
                    “Produtos” significa todo e qualquer produto ou serviço disponibilizado ou que vier a
                    ser disponibilizado pela Contratada, cujas características, especificações e condições
                    de utilização e aceitação, determinadas pela Contratada e aceitas pelo Cliente, estão
                    estabelecidas no Contrato e/ou Anexos.
                    “Recebíveis” significa os direitos creditórios presentes ou futuros relativos a
                    obrigações de pagamento de instituições de pagamento, como a Contratada, ou de
                    outras instituições que atuem como credenciadoras ou subcredenciadoras, ao Cliente,
                    constituídos no âmbito do Arranjo de Pagamento.
                    “Registradora” significa a entidade autorizada pelo Banco Central do Brasil a realizar
                    o registro de Recebíveis e outros ativos financeiros.
                    “Recebimento Antecipado de Valor Líquido (RAVL)” significa, para o Cliente (i) o
                    recebimento antecipado do Valor Líquido relativo às Transações com Meio de
                    Pagamento; e para a Contratada, (ii) o pré-pagamento das obrigações oriundas das
                    Transações com Meio de Pagamento autorizadas pelos Emissores do Valor Líquido
                    relativo às Transações com Meio de Pagamento.
                    “Remuneração” significa todo e qualquer pagamento feito pelo Cliente à Contratada,
                    em moeda corrente nacional, pelos serviços prestados, incluindo quaisquer taxas ou
                    tarifas definidas nos demais Anexos.
                    “SCD” significa Stone Sociedade de Crédito Direto S.A., inscrita no CNPJ/ME sob o nº
                    34.590.184/0001-09.
                    “Site Pagar.me” significa a página eletrônica desenvolvida, mantida, atualizada e
                    disponibilizada pela Contratada na internet www.pagar.me para que o Cliente possa
                    obter informações, contratar serviços prestados pela Contratada e/ou acessar a
                    Central de Atendimento e/ou o ambiente exclusivo do Cliente.
                    “Stone” significa Stone Instituição de Pagamentos S.A., inscrita no CNPJ/ME sob o nº
                    16.501.555/0001-57.
                    “Subcredenciador” significa participante do Arranjo de Pagamento que habilita
                    usuário final recebedor para a aceitação de instrumento de pagamento
                    disponibilizado pelo Emissor, mas que não participa do processo de liquidação das
                    Transações como credor perante o Emissor.
                    “Transação com Meio de Pagamento” significa toda e qualquer aquisição de bens ou
                    contratação de prestação de serviços realizada por um Portador perante o Cliente,
                    de forma presencial (no ambiente físico) ou não presencial (no ambiente digital),
                    submetida e processada eletronicamente pela Contratada mediante a utilização de
                    um Meio de Pagamento.
                    “Transação de Aporte” significa todas e quaisquer operações de aporte de recursos
                    em reais armazenados na Conta Pagar.me.
                    “Transação de Pagamento Instantâneo” significa toda e qualquer transação de
                    liquidação instantânea, incluindo, mas não se limitando à, transações realizadas por
                    meio de Pix, entre conta de depósito e/ou conta de pagamento pré-paga junto a
                    qualquer instituição financeira ou instituição de pagamento habilitada a receber e
                    efetuar tais pagamentos.
                    “Transação entre Contas Pagar.me” significa toda e qualquer transação realizada a
                    partir da Conta Pagar.me de um Cliente e destinada para a Conta Pagar.me de outro
                    Cliente.
                    “Transação para Contas Diferenciadas” significa toda e qualquer transação realizada
                    a partir de uma Conta Pagar.me do Cliente destinada (i) para uma conta corrente de
                    titularidade diversa, mantida junto a uma instituição financeira localizada no Brasil,
                    ou (ii) para uma conta de pagamento de titularidade diversa, mantida junto a uma
                    instituição de pagamento localizada no Brasil.
                    “Valor Bruto” significa o valor total das Transações com Meio de Pagamento
                    realizadas pelo Cliente antes da dedução da Remuneração e quaisquer outros
                    descontos devidos à Contratada no âmbito do Contrato e/ou Anexo.
                    “Valor Líquido” significa o valor a ser creditado ao Cliente correspondente ao Valor
                    Bruto, após a dedução da Remuneração e quaisquer descontos devidos à Contratada
                    prevista neste Contrato e/ou Anexo.
                    * * * * *
                    ANEXO II AOS TERMOS GERAIS DE CONTRATAÇÃO DE PRODUTOS E
                    SERVIÇOS DE PAGAMENTO
                    Por meio deste Anexo II, o Cliente contrata a PAGAR.ME INSTITUIÇÃO DE
                    PAGAMENTO S.A., inscrita no CNPJ/ME sob nº 18.727.053/0001-74 (“Contratada”)
                    para prestação dos serviços descritos no presente Anexo II, com relação às quais as
                    Partes se comprometem a observar as condições específicas dispostas a seguir.
                    CONDIÇÕES ESPECÍFICAS DA SOLUÇÃO DE PAGAMENTO
                    I. DEFINIÇÕES E INTERPRETAÇÕES
                    1.1. Todos os termos em letra maiúscula, quando não expressamente definidos
                    neste Anexo II ou no Contrato, terão os significados a eles atribuídos no Anexo I.
                    1.2. O Cliente reconhece e concorda que este Anexo II deve ser interpretado em
                    conjunto com o Contrato e o Anexo I.
                    II. OBJETO
                    2.1. Este Anexo II tem como objeto prever os principais termos e condições
                    aplicáveis à prestação, pela Contratada ao Cliente, dos seguintes serviços:
                    (i) Captura, transmissão e roteamento de Transações com Meio de Pagamento,
                    mediante habilitação do Cliente a aceitar os Meio de Pagamento;
                    (ii) Liquidação financeira do Valor Líquido das Transações com Meio de
                    Pagamento à Instituição Domicílio do Cliente; e/ou
                    (iii) Disponibilização e gestão de conta de pagamento pré-paga (i.e., Conta
                    Pagar.me).
                    2.2. Os serviços relacionados acima são prestados ao Cliente pela Contratada,
                    podendo contemplar, ou não, a participação de integrantes dos Arranjos de
                    Pagamento dos quais a Contratada faça ou venha a fazer parte.
                    III. CADASTRO DO CLIENTE
                    3.1. O processo de cadastro de um Cliente perante a Contratada, para a utilização
                    de qualquer dos serviços descritos acima, ocorre por meio de canais disponibilizados
                    pela Contratada, incluindo, mas não se limitando a, empresas terceiras ou parceiras,
                    área comercial da Contratada ou, ainda, por outros canais que vierem a ser
                    disponibilizados pela Contratada.
                    3.1.1. Para iniciar o processo de cadastro por qualquer dos meios disponíveis, o
                    Cliente deve entregar à Contratada todas as informações e documentos solicitados.
                    3.1.2. O Cliente cadastrará um login e senha para seu uso único e exclusivo no Site
                    Pagar.me. O Cliente é integralmente responsável pelo seu login e senha junto à
                    Contratada, devendo mantê-los em absoluto sigilo e reconhece, de forma irrevogável
                    e irretratável, que seu login e senha são pessoais e intransferíveis, respondendo,
                    perante à Contratada e quaisquer terceiros, por quaisquer prejuízos ocasionados em
                    razão do compartilhamento de tais dados.
                    3.2. O Cliente reconhece e concorda que deverá realizar Transações de acordo
                    com as atividades e informações concedidas à Contratada no momento do cadastro,
                    não sendo admitida a alteração de atividade de um Cliente sem prévia e expressa
                    anuência da Contratada, sob pena de rescisão imediata do Contrato, sem prejuízo da
                    obrigação de indenização, por parte do Cliente, pelas Perdas sofridas pela
                    Contratada.
                    3.3. No âmbito do Contrato, é proibida a realização de atividades relativas à
                    atividade de Subcredenciador pelo Cliente, sob pena de rescisão imediata do
                    Contrato, sem prejuízo da obrigação de indenização, por parte do Cliente, pelas
                    Perdas sofridas pela Contratada.
                    3.4. O cadastro de um Cliente está condicionado à análise a ser realizada pela
                    Contratada. A Contratada poderá, ao seu exclusivo critério, recusar o cadastro a
                    qualquer momento ou interromper o fornecimento de quaisquer serviços objetos
                    deste Contrato a qualquer momento, independente de aviso prévio.
                    3.5. Ao se cadastrar e/ou ser cadastrado, o Cliente assume integral
                    responsabilidade pelas informações e documentos fornecidos, comprometendo-se a
                    mantê-los permanentemente atualizados e a enviar à Contratada esclarecimentos
                    sempre que solicitado. Sem prejuízo, a Contratada verificará periodicamente a
                    veracidade das informações requeridas do Cliente, inclusive mediante uso de bancos
                    de dados mantidos por terceiros, bem como poderá solicitar ao Cliente, a qualquer
                    momento, a comprovação de veracidade e a devida atualização das informações e
                    documentos fornecidos.
                    3.6. O cadastro de um Cliente implica sua aceitação, irrevogável e irretratável,
                    de pagar a Remuneração devida à Contratada nos termos do Contrato.
                    3.7. O Cliente autoriza a Contratada a, sempre que esta julgar necessário,
                    diretamente ou por terceiros por ela designados, vistoriar: (i) a regularidade,
                    validade e permanência de suas atividades; (ii) a regularidade e validade na
                    realização das Transações com Meio de Pagamento; e (iii) qualquer atividade
                    realizada pelo Cliente para fins de cumprimento do Contrato e/ou da legislação
                    aplicável.
                    IV. CONTA PAGAR.ME
                    4.1. A Conta Pagar.me é uma conta de pagamento pré-paga de titularidade de
                    um Cliente e poderá ser movimentada exclusivamente em ambiente digital para
                    registro de débitos e créditos relativos a transações de pagamento que somente
                    poderão ocorrer de pessoas físicas e/ou jurídicas para pessoas físicas e/ou jurídicas
                    localizadas no Brasil, tais como Transações de Aporte, Transações entre Contas
                    Pagar.me, Saque e Transações para Contas Diferenciadas, nos termos previstos
                    neste Contrato.
                    4.2. Cada Cliente deverá criar uma Conta Pagar.me, na forma indicada no Site
                    Pagar.me ou por outro meio disponibilizado pela Contratada. O Cliente declara estar
                    ciente de que a Conta Pagar.me poderá ser acessada por um ou mais usuários
                    previamente cadastrados.
                    4.3. A abertura, manutenção, movimentação e encerramento de uma Conta
                    Pagar.me estão condicionados à análise, pela Contratada, das informações fornecidas
                    pelo Cliente, bem como ao atendimento dos demais critérios de admissibilidade
                    adotados pela Contratada, podendo a Contratada recusar a abertura, suspender
                    temporariamente o acesso à Conta Pagar.me ou encerrá-la, mediante a verificação
                    de inconformidade com os referidos critérios e/ou na hipótese de violação deste
                    Contrato e/ou da legislação e regulamentação aplicável, até a sua devida
                    regularização, não sendo a Contratada responsável pela indisponibilidade do serviço.
                    4.4. O Cliente poderá acessar, consultar o histórico de todas as movimentações
                    de entrada e saída de recursos, extrato histórico, de sua Conta Pagar.me
                    exclusivamente em ambiente digital.
                    4.5. A Contratada não possui qualquer responsabilidade caso não seja possível
                    realizar qualquer transação por meio de uma Conta Pagar.me em virtude da ausência
                    de recursos disponíveis na respectiva Conta Pagar.me, bem como pela prestação ou
                    disponibilização de serviços de terceiros ao Cliente.
                    4.6. O saldo da Conta Pagar.me não sofrerá qualquer correção monetária,
                    acréscimo de juros ou qualquer tipo de atualização financeira, permanecendo
                    inalterado por todo o prazo em que os recursos forem nela mantidos. A Contratada
                    não tem qualquer responsabilidade pela desvalorização ou desatualização monetária
                    do valor do saldo mantido em qualquer Conta Pagar.me.
                    4.7. O encerramento de uma Conta Pagar.me estará condicionado à inexistência
                    de: (i) quaisquer tipos de saldos na Conta Pagar.me (disponível, indisponível ou
                    bloqueado); (ii) recursos transferidos para Clientes ainda não cadastrados, que não
                    efetuaram ou ainda não tiveram seu cadastro validado; (iii) Saques em
                    processamento ou agendados; e (iv) Remuneração devida à Contratada ainda não
                    quitada na data de solicitação do encerramento da Conta Pagar.me.
                    V. TRANSAÇÕES DE APORTE NA CONTA PAGAR.ME
                    5.1. Os aportes de recursos na Conta Pagar.me, conforme canais disponibilizados
                    pela Contratada, poderão ser realizados a partir de: (i) créditos de titularidade de um
                    Cliente decorrentes de Transações com Meio de Pagamento; (ii) Transações entre
                    Contas Pagar.me; (iii) boletos de pagamento; (iv) Transferência Eletrônica Disponível
                    – TED; ou (v) Transação de Pagamento Instantâneo.
                    5.2. Os recursos destinados à Conta Pagar.me somente estarão disponíveis: (i)
                    no caso de uma Transação entre Contas Pagar.me, após a confirmação da realização,
                    pela Contratada, da transação; e (ii) no caso de outras fontes (que não Transação
                    entre Contas Pagar.me), quando os respectivos recursos forem efetivamente
                    recebidos pela Contratada, salvo indicado em contrário.
                    5.3. Se, a qualquer tempo, a Transação de Aporte na Conta Pagar.me for
                    revogada, cancelada, contestada ou revertida pela instituição responsável pela fonte
                    de recursos utilizada para fins de tal aporte, como, por exemplo, nas hipóteses de
                    estorno de quantias depositadas via conta bancária, a Contratada poderá cancelar o
                    respectivo aporte na referida Conta Pagar.me.
                    5.3.1. Caso os recursos, cuja Transação de Aporte tenha sido cancelada, já tenham
                    sido utilizados, o Cliente obriga-se desde já a efetuar nova Transação de Aporte em
                    sua Conta Pagar.me no valor necessário para corrigir a defasagem causada pelos
                    valores utilizados ou a transferir tais valores diretamente para a Contratada, se a
                    Contratada assim solicitar. Não obstante, o Cliente autoriza desde já a Contratada a
                    deduzir o valor da Transação de Aporte cancelada de outras Transações de Aporte ou
                    Transações com Meio de Pagamento a serem realizadas no futuro, sem prejuízo da
                    Remuneração devida.
                    VI. SAQUE OU TRANSAÇÃO PARA CONTA DIFERENCIADA
                    6.1. O Cliente poderá, a qualquer tempo, realizar o Saque ou, quando
                    disponibilizada pela Contratada, a Transação para Conta Diferenciada mediante saldo
                    disponível na Conta Pagar.me, observados os prazos para disponibilização dos
                    recursos e a Remuneração cobrada.
                    6.2. O Saque ou a Transação para Conta Diferenciada será realizado por meio de
                    Transferência Eletrônica Disponível (TED) registrada na Conta Pagar.me para a
                    Instituição Domicílio indicada pelo Cliente, bem como por demais meios
                    disponibilizados pela Contratada.
                    6.3. Caso a Instituição Domicílio destinatária recuse o recebimento dos recursos,
                    a Contratada informará ao respectivo Cliente para que este solucione a situação ou
                    identifique outra Instituição Domicílio, destinatária do Saque ou da Transação para
                    Conta Diferenciada dos recursos.
                    VII. TRANSAÇÕES ENTRE CONTAS PAGAR.ME
                    7.1. As Transações entre Contas Pagar.me, quando disponibilizadas pela
                    Contratada, permitem que um Cliente realize uma transação a partir de sua Conta
                    Pagar.me, utilizando os recursos nela mantidos, para uma Conta Pagar.me de
                    titularidade de outro Cliente, mediante simples sinalização para comprometimento
                    do saldo envolvido na transação.
                    7.2. O Cliente declara que está ciente e concorda que a simples sinalização para
                    comprometimento do saldo implica concomitantemente a autorização do respectivo
                    Cliente para que os créditos de sua Conta Pagar.me sejam utilizados na realização
                    de Transação entre Contas Pagar.me, de forma irrevogável e irretratável,
                    condicionada apenas a confirmação pela Contratada do recebimento dos dados
                    relativos à transação enviados pelo Cliente.
                    7.3. Após a confirmação do recebimento das respectivas informações enviadas
                    por um Cliente, a Contratada analisará a conformidade da Transação entre Contas
                    Pagar.me nos termos deste Contrato e, uma vez aprovada, comunicará aos Clientes
                    envolvidos na Transação entre Contas Pagar.me, sem prejuízo da Remuneração
                    devida.
                    VIII. TRANSAÇÕES DE PAGAMENTO INSTANTÂNEO
                    8.1. Cada Cliente poderá cadastrar na Conta Pagar.me seu (i) CPF ou CNPJ, (ii)
                    número de celular, e/ou (iii) e-mail com a finalidade de facilitar o processo de
                    iniciação de Transações de Pagamento Instantâneo. O Cliente também poderá utilizar
                    a chave Pix gerada aleatoriamente para realizar as Transações de Pagamento
                    Instantâneo .
                    8.1.1. CADA CLIENTE RECONHECE DESDE JÁ QUE, NO MOMENTO EM
                    QUE REALIZAR SEU CADASTRO NO SISTEMA DA CONTRATADA, TOMA
                    CIÊNCIA DAS PRINCIPAIS CONDIÇÕES E REGRAS DE USO DAS CHAVES PIX,
                    BEM COMO AUTORIZA A CONTRATADA, DE FORMA IRREVOGÁVEL E
                    IRRETRATÁVEL, E MANIFESTA DE FORMA LIVRE, INFORMADA E
                    INEQUÍVOCA, A SUA CONCORDÂNCIA COM O CADASTRAMENTO DE UMA
                    CHAVE ALEATÓRIA COMO CHAVE PIX DE SUA CONTA PAGAR.ME.
                    8.1.2. AO SE CADASTRAR NO SISTEMA DA CONTRATADA, CADA
                    CLIENTE DECLARA E GARANTE À CONTRATADA, QUE TEM CAPACIDADE E
                    PODER PARA (A) CELEBRAR ESTE CONTRATO E OPTAR PELA CRIAÇÃO DA
                    CHAVE ALEATÓRIA COMO CHAVE PIX; e (B) CONSUMAR O NEGÓCIO
                    JURÍDICO NA FORMA CONTEMPLADA NESTE CONTRATO, TENDO TOMADO
                    TODAS AS MEDIDAS NECESSÁRIAS PARA TANTO.
                    8.1.3. AO SE CADASTRAR NO SISTEMA DA CONTRATADA, O CLIENTE
                    ESTÁ CIENTE QUE SERÃO ARMAZENADOS E DISPONIBILIZADOS AOS
                    USUÁRIOS QUE CONSULTAREM A CHAVE ALEATÓRIA EVENTUALMENTE
                    REQUISITADA, EXCLUSIVAMENTE PARA POSSIBILITAR A REALIZAÇÃO DA
                    TRANSAÇÃO DE PAGAMENTO INSTANTÂNEO, NO MOMENTO DO ENVIO DE
                    UM PIX PARA A CLIENTE, OS SEGUINTES DADOS: (I) NOME COMPLETO OU
                    RAZÃO SOCIAL; (II) CPF COM MÁSCARA ESCONDENDO OS PRIMEIROS TRÊS
                    E OS ÚLTIMOS DOIS DÍGITOS OU CNPJ COMPLETO; (III) O NOME DA
                    CONTRATADA COMO INSTITUIÇÃO A QUAL A CHAVE ESTÁ VINCULADA, EM
                    CASO DE PIX INICIADOS POR QR CODE.
                    8.1.4. CADA CLIENTE PODERÁ, A SEU EXCLUSIVO CRITÉRIO E A
                    QUALQUER MOMENTO, EXCLUIR A CHAVE PIX CRIADA NO AMBIENTE DA
                    CONTRATADA, OU REVOGAR O CONSENTIMENTO DADO À CONTRATADA NO
                    MOMENTO DE SEU CADASTRO.
                    8.2. Mediante o recebimento, pela Contratada, das informações fornecidas por
                    um Cliente pertinentes às Transações de Pagamento Instantâneo, a Contratada
                    analisará a sua conformidade, no que couber, nos termos do presente Contrato, das
                    políticas da Contratada e/ou legislação vigente, podendo:
                    (i) Aprovar e realizar a Transação de Pagamento Instantâneo, comunicando os
                    Clientes envolvidos, sem prejuízo da incidência de eventual Remuneração
                    devida; ou
                    (ii) Cancelar ou deixar de realizar a Transação de Pagamento Instantâneo, se
                    verificada violação do previsto no presente Contrato, nas políticas da
                    Contratada e/ou legislação vigente.
                    8.3. Se o respectivo Cliente vier a desistir ou arrepender-se da Transação de
                    Pagamento Instantâneo após a sua realização, caberá ao Cliente exigir diretamente
                    do destinatário do respectivo recurso a sua devolução, a qual poderá ser efetuada
                    por meio de Transação de Aporte à sua Conta Pagar.me ou por outro meio acordado
                    entre si fora do ambiente da Contratada.
                    8.3.1. A desistência ou arrependimento da Transação de Pagamento
                    Instantâneo após a sua realização não implicará na revogação e/ou no
                    cancelamento da Remuneração aplicável, nos termos do presente Contrato,
                    permanecendo o Cliente obrigado pelo seu respectivo pagamento, nos
                    termos da Cláusula 18 deste Anexo II.
                    8.4. A Contratada não se responsabiliza pelas consequências de quaisquer
                    imprecisões e/ou erros nas informações que lhe tiverem sido prestadas por um
                    Cliente no âmbito da Transação de Pagamento Instantâneo.
                    8.5. Se o Cliente vier a utilizar indevidamente a marca Pix de titularidade
                    exclusiva do Banco Central, a Contratada poderá suspender a realização de
                    Transações de Pagamento Instantâneo e/ou rescindir o presente Contrato e qualquer
                    de seus Anexos, de forma imediata e independentemente de notificação, nos termos
                    da Cláusula 10.2 do Contrato.
                    IX. TRANSAÇÕES COM MEIO DE PAGAMENTO
                    9.1. O Cliente se obriga a observar todas as condições de segurança e
                    operacionais determinadas neste Anexo II e no Contrato ou que venham a ser
                    adotadas pela Contratada, incluindo, mas não se limitando a:
                    (i) Não submeter para processamento uma única Transação com Meio de
                    Pagamento, em duas ou mais Transações com Meio de Pagamento no
                    mesmo Cartão, sendo vedada, por exemplo, que uma compra de
                    R$10.000,00 (dez mil reais) se torne dez compras de R$1.000,00 (mil reais);
                    (ii) Orientar os Portadores sobre as condições de pagamento para aquisição de
                    bens e/ou contratação de serviços de forma clara e objetiva; e
                    (iii) Não fornecer ou restituir aos Portadores, por qualquer motivo, sem
                    autorização prévia e expressa da Contratada, quantias em dinheiro (moeda
                    nacional ou estrangeira, cheques, ordens de pagamento ou títulos de
                    crédito).
                    9.2. A Contratada não se responsabilizará pelas Transações com Meio de
                    Pagamento concluídas em desacordo com o Contrato e/ou em desconformidade com
                    a legislação e/ou regulamentação aplicável, bem como as regras aplicadas pelas
                    Bandeiras e Credenciadoras.
                    9.3. Estão sujeitas ao não processamento e/ou não pagamento as Transações
                    com Meio de Pagamento irregularmente realizadas por um Cliente, sob quaisquer
                    modalidades, de forma conivente ou não, em circunstâncias que caracterizem indício
                    ou suspeita de fraude, que objetivem a obtenção de vantagens ilícitas ou que estejam
                    em desacordo com o Contrato, regras determinadas pelas Bandeiras, Credenciadoras
                    e/ou a legislação e regulamentação aplicável.
                    9.4. O Cliente está ciente que a Contratada poderá interromper a prestação dos
                    serviços descritos neste Anexo II caso atinja um percentual de Transação com Meio
                    de Pagamento suspeitas ou irregulares definido pela Contratada, conforme as suas
                    regras de monitoramento transacional.
                    9.5. O Cliente está ciente e expressamente concorda com os métodos que a
                    Contratada vier a adotar para identificar e prevenir fraudes e práticas ilícitas. O
                    Cliente se obriga a monitorar e orientar seus funcionários, bem como cooperar e
                    colaborar, principalmente com fornecimento das informações solicitadas, sob pena
                    de ressarcimento das Perdas causadas, pelo Cliente, nos termos deste Anexo II e do
                    Contrato, além da rescisão imediata do Contrato.
                    9.6. Para Transações realizadas via boleto bancário, o Cliente autoriza,
                    expressamente, que, na hipótese de ausência de endereço para emissão do boleto
                    ou, caso o Cliente não enviar esse dado à Contratada, quando esta for a forma de
                    pagamento escolhida, a Contratada inserirá automaticamente o endereço do Cliente.
                    X. PAGAMENTO DAS TRANSAÇÕES COM MEIO DE PAGAMENTO PARA O
                    CLIENTE
                    10.1. O Cliente está ciente e autoriza a Contratada a fazer o pagamento do Valor
                    Líquido das Transações com Meio de Pagamento, na forma e prazos definidos pela
                    Contratada, mediante crédito do respectivo valor na Instituição Domicílio indicada
                    pelo Cliente e/ou pela Registradora, conforme aplicável, bem como por qualquer
                    outra modalidade de pagamento admitida por este Anexo II ou acordado entre as
                    Partes.
                    10.1.1. O prazo de pagamento será contado a partir da data da captura da Transação
                    com Meio de Pagamento, de acordo com os termos e condições previstos neste
                    Contrato, bem como quaisquer regras aplicáveis pelas Credenciadoras, Bandeiras ou
                    autoridades reguladoras.
                    10.1.2. Caso a data prevista para o pagamento do Valor Líquido da Transação com
                    Meio de Pagamento coincida com feriado ou dia de não funcionamento bancário, o
                    pagamento será realizado no primeiro Dia Útil subsequente.
                    10.1.3. Nas hipóteses de falha técnica e/ou operacional nos sistemas e/ou quebra
                    de equipamentos, a Contratada poderá, a seu único e exclusivo critério, e sem
                    incorrer em qualquer ônus ou penalidade, exceder o prazo estabelecido para efetuar
                    o pagamento relativo a qualquer tipo de Valor Líquido.
                    10.1.4. O Cliente deverá zelar pela regularidade da Instituição Domicílio,
                    responsabilizando-se pela correção e suficiência das informações prestadas à
                    Contratada.
                    10.1.5. O Cliente autoriza a Contratada a realizar o pagamento dos Valores Líquidos
                    correspondentes aos Recebíveis de acordo com as instruções fornecidas pelas
                    Registradoras, sempre que os Recebíveis do Cliente sejam objeto de registro e em
                    decorrência das negociações de Recebíveis realizadas pelo Cliente, nos termos da
                    regulamentação vigente.
                    10.1.6. Fica a Contratada, desde já, isenta de qualquer responsabilidade quanto ao
                    pagamento dos Valores Líquidos correspondentes aos Recebíveis nos casos em que
                    se verifique incoerências e incorreções das informações e instruções fornecidas pelas
                    Registradoras, incluindo, mas não se limitando às informações sobre a Instituição
                    Domicílio para liquidação dos Valores Líquidos correspondentes aos Recebíveis.
                    10.2. O pagamento dos valores das Transações com Meio de Pagamento pela
                    Contratada estará sujeito a condições normais de operacionalidade do sistema de
                    liquidação centralizada utilizado nos termos da regulamentação aplicável, sendo que
                    eventuais interrupções ou falhas do sistema poderão impactar a agenda de
                    pagamento de um Cliente, sem que implique qualquer ônus ou penalidades à
                    Contratada.
                    10.3. Após a efetivação do crédito do Valor Líquido das Transações com Meio de
                    Pagamento na Instituição Domicílio informada por um Cliente, eventuais interrupções
                    ou falhas do sistema da Instituição Domicílio que impactem o acesso aos recursos
                    pelo respectivo Cliente não implicam qualquer ônus ou penalidades à Contratada.
                    10.4. Caso um Cliente celebre operação de crédito com instituição financeira na
                    qual utilize os recebíveis das Transações com Meio de Pagamento como garantia, a
                    Contratada fica, desde já, autorizada pelo respectivo Cliente a cumprir com todas as
                    obrigações que lhe são impostas pela regulamentação vigente em razão da
                    celebração da referida operação, incluindo, mas não se limitando, a obrigação de
                    realizar a liquidação financeira das Transações com Meio de Pagamento na Instituição
                    Domicílio especificada no contrato da operação de crédito garantida por parte ou pela
                    totalidade dos recebíveis das Transações com Meio de Pagamento.
                    10.5. A Contratada fica desde já autorizada a reter parte ou a totalidade do fluxo
                    de Recebíveis a serem liquidados a cada um dos Clientes para compensar o valor de
                    tais Recebíveis com o valor por estes devido à Contratada em razão de eventual (i)
                    Cancelamento da Transação; (ii) Contestação; (iii) irregularidades ou fraudes
                    verificadas; (iv) qualquer Perda sofrida pela Contratada, nos termos deste Contrato;
                    ou (v) obrigação de pagamento em relação à Contratada.
                    XI. OPERAÇÕES DE MARKETPLACE
                    11.1. Caso o Cliente mantenha e administre uma plataforma de Marketplace, por
                    meio da qual disponibiliza condições para que as Lojas Virtuais possam oferecer seus
                    produtos e/ou serviços, as referidas Lojas Virtuais poderão optar por habilitar-se para
                    a aceitação de Meios de Pagamento como forma de pagamento nas operações
                    realizadas no âmbito da plataforma de Marketplace do Cliente.
                    11.2. A Contratada poderá disponibilizar, nas Transações com Meio de Pagamento
                    realizadas em plataforma de Marketplace, a funcionalidade denominada split, a qual
                    permite pluralidade de recebedores do Valor Líquido, conforme informações
                    fornecidas pelo Cliente no momento de sua realização.
                    11.3. O Cliente declara, de forma irrevogável e irretratável, na qualidade de
                    Marketplace, que obtém das Lojas Virtuais todas as aprovações e/ou autorizações
                    necessárias para operacionalizar quaisquer Transações com Meio de Pagamento
                    realizadas em sua plataforma de Marketplace, em nome próprio e/ou em nome das
                    Lojas Virtuais, inclusive aquelas relacionadas à ordem de saque de Contas Pagar.me
                    de titularidade do Cliente e/ou de cada uma das Lojas Virtuais, bem como o
                    consentimento expresso das Lojas Virtuais para que seja autorizado, nos termos da
                    legislação vigente, especialmente do art. 1º, § 3º, v, da Lei Complementar 105/01,
                    especificamente, o acesso do Cliente às informações transacionais e de liquidação
                    das respectivas Lojas Virtuais que se fizerem necessários.
                    11.3.1. O Cliente deverá apresentar quaisquer documentos que vierem a ser
                    solicitados pela Contratada para a comprovação de que as aprovações e/ou
                    autorização junto às Lojas Virtuais foram e/ou estão sendo obtidos de forma
                    adequada e em cumprimento às determinações estabelecidas nesta Cláusula.
                    11.4. O Cliente declara, de forma irrevogável e irretratável, que é único e exclusivo
                    responsável, perante a Contratada, as Lojas Virtuais e/ou quaisquer terceiros, pela
                    existência, legitimidade, validade, veracidade e integridade das informações
                    fornecidas à Contratada referentes ao Cliente e/ou às Lojas Virtuais, bem como se
                    responsabiliza, de forma irrevogável e irretratável, pelo montante liquidado às Lojas
                    Virtuais.
                    11.5. Independentemente do que vier a ser pactuado entre o Cliente, na qualidade
                    de Marketplace, e as Lojas Virtuais a si vinculadas, eventual Chargeback, ocorrência
                    ou suspeita de fraude, bem como qualquer operação ou Transação com Meio de
                    Pagamento suspeita e/ou em desacordo com a legislação vigente será de
                    responsabilidade do Cliente e da respectiva Loja Virtual, sendo o Cliente e a
                    respectiva Loja Virtual solidariamente responsáveis pelo ressarcimento de quaisquer
                    Perdas à Contratada, inclusive eventual Chargeback incorrido.
                    11.6. Em caso de qualquer suspeita de irregularidade ou constatação de qualquer
                    irregularidade no âmbito da funcionalidade split, incluindo, mas não se limitando, às
                    operações mantidas entre o Cliente e as respectivas Lojas Virtuais, bem como
                    qualquer irregularidade referente aos valores liquidados, informações fornecidas ou
                    declarações realizadas pelo Cliente, a Contratada poderá, independente de aviso
                    prévio, suspender a funcionalidade split e/ou qualquer prestação de serviços objeto
                    deste Contrato e/ou alterar a Remuneração.
                    11.7. Para fins de esclarecimento, as disposições estabelecidas na presente
                    Cláusula 11 são aplicáveis exclusiva e tão somente caso o Cliente mantenha e
                    administre uma plataforma de Marketplace, não sendo aplicáveis em demais
                    hipóteses.
                    XII. PROCESSAMENTO, CONTESTAÇÃO (“Chargeback”) E
                    CANCELAMENTO DAS TRANSAÇÕES COM MEIO DE PAGAMENTO
                    12.1. A Transação com Meio de Pagamento, mesmo após ser autorizada, poderá
                    não ser processada e liquidada ou ser cancelada pela Contratada, a seu único e
                    exclusivo critério, nas seguintes hipóteses, incluindo, mas não se limitando a:
                    (i) Se for constatada a ocorrência de irregularidades e/ou de circunstâncias que
                    caracterizem indícios ou suspeita de fraudes, nos termos deste Contrato;
                    (ii) Não reconhecimento da Transação com Meio de Pagamento pelo Portador;
                    (iii) Não cumprimento, pelo Cliente, dos termos do Contrato e/ou das regras
                    aplicadas pelas Bandeiras, pelas Credenciadoras, bem como da legislação
                    aplicável;
                    (iv) Vulnerabilidades detectadas no ambiente do Cliente;
                    (v) Se for constatada a realização de transações fictícias ou simuladas.
                    12.2. Qualquer valor referente à Chargeback, estorno ou Cancelamento será
                    debitado da Instituição Domicílio ou Agenda Financeira do Cliente. Em caso de
                    inexistência e/ou insuficiência de créditos, o Cliente deve solucionar diretamente com
                    os Portadores a devolução de eventuais valores.
                    12.2.1. Caso o Cliente mantenha e administre uma plataforma de Marketplace, nos
                    termos da Cláusula 11 acima, qualquer valor referente à Chargeback, estorno ou
                    Cancelamento poderá ser debitado, conforme o caso, da Instituição Domicílio ou
                    Agenda Financeira do Cliente, na qualidade de responsável solidário, e/ou da
                    Instituição Domicílio ou Agenda Financeira da respectiva Loja Virtual.
                    12.3. Mesmo em caso de desfazimento da Transação com Meio de Pagamento, por
                    qualquer motivo, inclusive por Chargeback ou Cancelamento, a Remuneração
                    correspondente será devida à Contratada.
                    12.4. Caso um Cliente possua índice de Transações com Meio de Pagamento
                    canceladas, contestadas ou não reconhecidas em volume considerado elevado,
                    segundo critérios da Contratada e/ou das Bandeiras ou Credenciadoras, ou, conforme
                    determinação por parte das Bandeiras, a Contratada e/ou a respectiva Bandeira
                    poderá aplicar penalidade de multa ao Cliente, sem prejuízo da possibilidade de
                    rescisão imediata do Contrato pela Contratada, alteração da Remuneração e da
                    obrigação de indenização por quaisquer Perdas ocasionadas à Contratada.
                    12.5. Sem prejuízo das demais disposições deste Contrato, o Cliente assumirá
                    integral responsabilidade por (i) eventuais erros nos dados das Transações com Meio
                    de Pagamento, (ii) Chargeback e/ou (iii) Cancelamento de Transações com Meio de
                    Pagamento.
                    XIII. RESERVA DE SEGURANÇA
                    13.1. A Contratada poderá manter um valor mínimo mensal de reserva (“Reserva
                    de Segurança”) na Conta Pagar.me de um Cliente, a ser calculado de acordo com os
                    critérios de risco da Contratada, com o objetivo de mitigar eventual alto nível de risco
                    operacional ou financeiro associado ao respectivo Cliente.
                    13.2. A Reserva de Segurança poderá ser mantida, pela Contratada, inclusive após
                    o término do Contrato para suprir eventuais valores devidos em razão de Perdas e/ou
                    Chargebacks devidos pelo respectivo Cliente à Contratada.
                    13.3. A Contratada poderá reter, a seu exclusivo critério, todo e qualquer valor
                    que um Cliente tiver a receber se, a juízo da Contratada, houver alto nível de risco
                    operacional ou de crédito associado ao desempenho do respectivo Cliente, à sua
                    Instituição Domicílio ou a qualquer das transações relacionadas a este ou ao(s)
                    outro(s) recebedor(es).
                    XIV. SISTEMA ANTIFRAUDE E GARANTIA DE CHARGEBACK DE FRAUDE
                    14.1. Exceto se expressamente dispensado pela Contratada, o uso de um sistema
                    antifraude é obrigatório pelo Cliente que realiza Transação com Meio de Pagamento
                    não presenciais (em ambiente digital). O Cliente pode contratar o sistema antifraude
                    disponibilizado pela Contratada, nos termos do Anexo IV ao presente Contrato; ou
                    pode contratar o sistema antifraude de terceiro, desde que esteja na lista de sistemas
                    antifraude de terceiros homologados pela Contratada.
                    14.2. Se o sistema antifraude de terceiro homologado pela Contratada, contratado
                    pelo Cliente não identificar risco de Chargeback e sugerir a aprovação da Transação
                    com Meio de Pagamento, mas a Contratada indicar risco, prevalecerá a opinião da
                    análise de risco da Contratada e a Transação com Meio de Pagamento não será
                    aprovada.
                    XV. INSTITUIÇÃO DOMICÍLIO
                    15.1. É de integral responsabilidade do Cliente zelar pela regularidade da
                    Instituição Domicílio, bem como pela correção das informações prestadas à
                    Contratada.
                    15.2. Caso a Instituição Domicílio se declare impedida, por qualquer motivo, de
                    dar cumprimento às ordens emitidas pela Contratada, o Cliente deve indicar à
                    Contratada nova Instituição Domicílio. Até o recebimento do pedido de alteração da
                    Instituição Domicílio pelo Cliente, a Contratada está autorizada a reter o pagamento
                    dos respectivos valores, sem quaisquer ônus, penalidades ou encargos.
                    15.3. Em caso de término do Contrato por qualquer motivo, cada Cliente
                    compromete-se a manter ativa sua Instituição Domicílio até que todas as Transações
                    com Meio de Pagamento sejam quitadas pela Contratada.
                    XVI. RECEBIMENTO ANTECIPADO DO VALOR LÍQUIDO (RAVL)
                    16.1. O Cliente poderá solicitar à Contratada o Recebimento Antecipado do Valor
                    Líquido (RAVL) relativo às Transações com Meio de Pagamento, ficando ao exclusivo
                    critério da Contratada pré-pagar ou não os valores solicitados. O Cliente reconhece
                    e concorda que o RAVL poderá ser interrompido a qualquer momento, a critério
                    exclusivo da Contratada e independentemente de aviso prévio. As condições
                    comerciais de cada pré-pagamento serão ajustadas, caso a caso, entre as Partes. A
                    Contratada verificará e informará ao Cliente, pela Central de Atendimento ou
                    qualquer meio de comunicação disponibilizado pela Contratada, se o Cliente está apto
                    a receber antecipadamente seus direitos creditórios oriundos das Transações com
                    Meio de Pagamento, bem como seus termos e condições.
                    16.1.1. O Cliente concorda que a Contratada poderá, para viabilizar o RAVL: (i) ceder
                    a obrigação que detém de liquidar as Transações com Meio de Pagamento ao Cliente
                    para uma instituição financeira parceira, a qual realizará o pré-pagamento ao Cliente,
                    nos termos contratados com a Contratada; e (ii) permitir a cessão de crédito ou a
                    sub-rogação por terceiros, nos termos da legislação e regulamentação vigentes.
                    16.1.2. Sem prejuízo do disposto neste instrumento, o Cliente desde já nomeia e
                    constitui a Contratada como sua mandatária, nos termos do art. 653 et. seq. do
                    Código Civil, e lhe outorga os poderes necessários para tomar toda e qualquer
                    providência para viabilizar o RAVL, incluindo, sem limitação, pactuar com terceiros a
                    liquidação antecipada de Transações por meio de pagamento com sub-rogação, nos
                    termos da legislação e regulamentação aplicáveis. Caso seja pactuado que um
                    terceiro realizará um pagamento com sub-rogação para viabilizar o RAVL, o Cliente
                    desde já concorda que seus direitos de credor em face da Contratada serão
                    transferidos ao terceiro que realizar o pagamento com sub-rogação, nos termos do
                    art. 347 do Código Civil.
                    16.1.3. Nos casos em que o Cliente solicitar o RAVL e, ao mesmo tempo, apresentar
                    saldo negativo junto à Contratada, o Cliente autoriza a Contratada, de forma
                    expressa e irrevogável, a promover o desconto de referido saldo negativo do valor a
                    ser antecipado. Ainda, nos casos em que o Cliente apresentar saldo negativo junto à
                    Contratada e o RAVL for processado por meio de um terceiro, nos termos da Cláusula
                    16.1.1 acima, o Cliente, desde já, autoriza o terceiro a direcionar à Contratada o
                    pagamento do RAVL no valor correspondente ao saldo negativo do Cliente.
                    16.2. Para a formalização da operação de RAVL, o Cliente concorda em atender à
                    política de segurança e de validação das Transações com Meio de Pagamento da
                    Contratada. A Contratada poderá realizar a gravação dos telefonemas, assim como
                    solicitar o envio de documentos do Cliente, podendo adotar os procedimentos que
                    entender necessários para registrar, confirmar e formalizar a operação de RAVL,
                    sendo certo que o Cliente desde já autoriza a Contratada a efetuar tais
                    procedimentos.
                    16.2.1. O Cliente expressamente autoriza e reconhece que a Contratada poderá
                    disponibilizar informações da sua Agenda Financeira para a Instituição Domicílio e/ou
                    para qualquer terceiro que esteja diretamente envolvido na operação de RAVL, na
                    medida em que tal compartilhamento de informações seja necessário para
                    viabilização do RAVL.
                    16.2.2. Ocorrendo a solicitação de RAVL automático pelo Cliente à Contratada, de
                    acordo com o saldo de Recebíveis que o Cliente tem junto à Contratada, fica pactuado
                    que a liquidação se dará na Instituição Domicílio, nos preços e prazos negociados
                    entre a Contratada e o Cliente, devendo ser considerados, para fins da liquidação
                    aqui mencionada, eventuais prazos colocados pela Instituição Domicílio ou qualquer
                    agente terceiro e, conforme aplicável, alteração de Instituição Domicílio em
                    consonância com indicação pela Registradora. Quando o Cliente optar por não
                    continuar com a operação de RAVL automático com a Contratada, deverá comunicar
                    à Central de Atendimento da Contratada de tal decisão, responsabilizando-se a
                    Contratada por efetuar a mudança no cadastro do Cliente dentro do prazo por ela
                    estipulado.
                    16.2.3. Para as negociações do RAVL com a Contratada, o depósito do valor
                    acordado com a Contratada, na Instituição Domicílio, na data também negociada com
                    a Contratada, deduzidas a Remuneração, o preço do serviço RAVL e eventuais saldos
                    negativos mantidos pelo Cliente junto à Contratada, representa a quitação pela
                    Contratada das Transações com Meio de Pagamento incluídas na negociação de RAVL,
                    dando o Cliente plena, geral, irrevogável e irretratável quitação.
                    XVII. AQUISIÇÃO DE RECEBÍVEIS DE VENDA (ARV)
                    17.1. A Contratada poderá, a seu exclusivo critério, optar por realizar o pagamento
                    antecipado por meio de operação de Aquisição de Recebíveis de Venda (“ARV”), o
                    que poderá implicar a realização de cessão ou transferência, pelo Cliente, para
                    terceiros que a Contratada venha a determinar (inclusive fundos de investimento),
                    dos seus Recebíveis (sejam eles devidos pela Contratada ou por outras
                    credenciadoras ou subcredenciadoras), independente da forma jurídica ou comercial
                    a ser adotada pela Contratada, observada, inclusive, a possibilidade de pagamento
                    parcelado e diferido do preço de cessão, caso assim venha a ser acordado com o
                    Cliente. O Cliente concorda que, no caso de operação automática de antecipação de
                    Recebíveis, poderão ser constituídas, pelo Cliente, promessa de cessão e garantias
                    em favor do terceiro que a Contratada venha determinar (inclusive fundos de
                    investimento. Em caso de adesão à operação de ARV, de forma automática e
                    compulsória, o Cliente somente poderá cancelar a operação de ARV que contemple
                    agenda de pagamento performada após a data do pedido de cancelamento junto à
                    Contratada.
                    17.1.1. Exclusivamente para fins das operações de ARV, o Cliente, neste ato, de
                    forma irrevogável e irretratável, constitui a Contratada sua bastante procuradora,
                    nos termos dos arts. 653 et. seq. do Código Civil, para, em seu nome e por sua conta,
                    negociar os termos da referida cessão, promessa de cessão ou garantia, de qualquer
                    natureza, junto ao terceiro que adquirirá o Recebível podendo, inclusive, assinar em
                    nome do Cliente todo e qualquer documento necessário e praticar qualquer ato para
                    o pleno exercício dos poderes ora outorgados, incluindo, sem limitação, processar
                    formalizações de cessão e assinar termos de cessão fiduciária em garantia em nome
                    do Cliente.
                    17.1.2. Também, exclusivamente para fins das operações de ARV, o Cliente, neste
                    ato, de forma irrevogável e irretratável, autoriza a Contratada a fornecer à
                    Registradora todas as informações necessárias para a devida formalização da cessão,
                    promessa de cessão, garantia ou qualquer outra forma de transferência realizada no
                    âmbito de ARV.
                    17.1.3. Na hipótese de cessão dos Recebíveis ao TAPSO Fundo de Investimento em
                    Direitos Creditórios, inscrito no CNPJ/ME sob o nº 26.287.464/0001-14, os termos e
                    condições da cessão serão aqueles definidos nas Condições Gerais de Promessa de
                    Cessão e Aquisição de Direitos Creditórios e Outras Avenças que constam como
                    Apêndice I ao presente Anexo II, conforme aditado de tempos e tempos e registrado
                    em competente Cartório de Registro de Títulos e Documentos, a cujos termos e
                    condições o Cliente, por meio deste Anexo II, adere e se subordina sem restrições.
                    Para dirimir quaisquer dúvidas, o referido fundo de investimento e seus prestadores
                    de serviço são autorizados pelo Cliente a terem acesso às informações relativas aos
                    Recebíveis da agenda de pagamento do Cliente junto às Registradoras.
                    17.1.4. Na hipótese de cessão dos Recebíveis detidos pelo Cliente junto a outras
                    credenciadoras ou subcredenciadoras ao TAPSO II Fundo de Investimento em
                    Direitos Creditórios, inscrito no CNPJ/ME sob o nº 37.262.902/0001-06, os termos e
                    condições da cessão serão aqueles definidos nas Condições Gerais de Promessa de
                    Cessão e Aquisição de Direitos Creditórios e Outras Avenças que constam como
                    Apêndice II ao presente Anexo II, conforme aditado de tempos e tempos e registrado
                    em competente Cartório de Registro de Títulos e Documentos, a cujos termos e
                    condições o Cliente, por meio deste Anexo II, adere e se subordina sem restrições.
                    Para dirimir quaisquer dúvidas, o referido fundo de investimento e seus prestadores
                    de serviço são autorizados pelo Cliente a terem acesso às informações relativas aos
                    Recebíveis da agenda de pagamento do Cliente junto às Registradoras.
                    17.1.5. Na hipótese de realização de operações de ARV, conforme aqui previstas, o
                    Cliente desde já, de forma irrevogável e irretratável, se compromete a prestar todas
                    as informações que forem solicitadas pelos cessionários ou adquirentes dos
                    recebíveis (seja diretamente ou por intermédio da Contratada), com relação a
                    Transações com Meio de Pagamento ou sua agenda de pagamentos, também para
                    fins de formalização das operações em sede das regras aplicáveis.
                    17.1.6. Caso o terceiro adquirente dos recebíveis cedidos pelo Cliente, conforme
                    indicado pela Contratada, não receba a totalidade ou parte do valor integral dos
                    recebíveis cedidos nas respectivas datas de vencimento, o valor pago pelo terceiro
                    adquirente para aquisição dos recebíveis do Cliente no âmbito da operação de ARV
                    será reembolsado a título de indenização ao terceiro adquirente dos Recebíveis pelo
                    Cliente, conforme aplicável, podendo a Contratada, para quitar essa indenização: (i)
                    compensar valores eventualmente devidos pelo respectivo terceiro ao Cliente
                    oriundos de novas operações de ARV; (ii) debitar a Instituição Domicílio do Cliente;
                    ou (iii) cobrar tais valores de forma administrativa ou judicial.
                    XVIII. REMUNERAÇÃO DA CONTRATADA
                    18.1. A Contratada fará jus, em decorrência dos serviços prestados no âmbito
                    deste Contrato, bem como eventuais outras relações contratuais mantidas com a
                    Contratada, ao recebimento de uma Remuneração, de acordo com as condições e
                    valores estabelecidos de comum acordo entre as Partes. A Remuneração será paga
                    mediante ajuste a débito na Agenda Financeira ou Instituição Domicílio do Cliente, e
                    poderá corresponder a: (i) um percentual incidente sobre o Valor Bruto das
                    Transações com Meio de Pagamento, RAVL e ARV; e/ou (ii) um valor fixo ou um
                    percentual sobre o valor objeto da respectiva Transação de Aporte na Conta
                    Pagar.me, Transação para Conta Diferenciada, Transação entre Contas Pagar.me,
                    Transação de Pagamento Instantâneo, conforme estipulado entre as Partes, podendo
                    ser alterada pela Contratada, a seu único e exclusivo critério e/ou em razão de
                    qualquer mudança econômica e/ou reajustes realizados pelo Credenciador, Emissor
                    ou a Bandeira.
                    18.1.1. A Contratada poderá efetuar reajuste dos valores de sua Remuneração,
                    informando previamente o Cliente, por e-mail ou divulgação prévia no Site Pagar.me.
                    Caso o Cliente não concorde com as novas condições de Remuneração, poderá
                    solicitar esclarecimentos e, se, ainda assim, não concordar, poderá solicitar o
                    encerramento da relação contratual estabelecida por meio do presente Contrato, sem
                    qualquer tipo de ônus. O não encerramento do Contrato pelo Cliente será
                    interpretado como plena anuência aos novos valores.
                    18.1.2. A Remuneração da Contratada poderá ser alterada a qualquer momento
                    durante a vigência do Contrato, incluindo, mas não se limitando aos seguintes casos:
                    (i) alterações tributárias e/ou fiscais suportadas pela Contratada; (ii) alterações nos
                    valores impostos à Contratada pelos Credenciadores, Emissores e Bandeiras para a
                    realização das Transações com Meio de Pagamento; (iii) modificação no cenário
                    econômico, político ou regulatório; (iv) alteração nos insumos aplicáveis para a
                    prestação dos serviços objeto deste Anexo II; (v) qualquer modificação no equilíbrio
                    comercial, econômico ou financeiro deste Anexo II e/ou Contrato; (vi) suspeita ou
                    constatação de mudança adversa ou fragilidade na situação técnica, operacional,
                    patrimonial, financeira ou de outra natureza do Cliente.
                    18.1.3. A Contratada poderá instituir, mediante prévia comunicação por escrito,
                    novas modalidades de Remuneração.
                    18.2. Para efetuar a cobrança dos valores devidos pelo Cliente, a Contratada
                    poderá adotar, a seu exclusivo critério, qualquer das seguintes alternativas:
                    (i) Compensar o valor do débito com quaisquer outros créditos, presentes ou
                    futuros, devidos ao Cliente;
                    (ii) Realizar lançamentos a débito na Agenda Financeira e/ou Instituição
                    Domicílio do Cliente;
                    (iii) Permitir que o Cliente, no caso de ausência de créditos a compensar e/ou na
                    impossibilidade de lançamento a débito em conta de livre movimentação,
                    efetue, desde que acordado com a Contratada, o pagamento mediante DOC,
                    TED, boleto bancário ou depósito identificado; ou
                    (iv) Efetuar cobrança judicial e extrajudicial, inclusive por meio de terceiros, que
                    buscará, através de todos os meios permitidos em lei, a satisfação do débito,
                    seja mediante (a) penhora on-line de todas as contas bancárias existentes
                    em nome do Cliente devedor ou de seus sócios ou qualquer empresa
                    pertencente ao grupo econômico do Cliente, conforme estabelecido em lei,
                    por meio do sistema do BACEN JUD; (b) penhora de todos os bens existentes
                    em nome do Cliente ou qualquer empresa pertencente ao grupo econômico
                    do Cliente, ou, conforme permitido em lei, dos sócios do Cliente, suficientes
                    para garantir o pagamento da dívida; e/ou (c) outro meio disponível à época
                    da cobrança.
                    18.2.1. Eventual atraso no pagamento de qualquer quantia devida total ou
                    parcialmente pelo Cliente à Contratada implicará multa moratória de 2% (dois por
                    cento), incidente sobre o valor devido e não pago, acrescido de juros de mora de 1%
                    (um por cento) ao mês e de atualização monetária com base no IPCA/FGV, calculados
                    pro rata die, ou na falta deste, por outro índice que legalmente o substitua.
                    18.2.2. Na hipótese de o Cliente apresentar débitos ou créditos com empresas
                    controladas pela Contratada ou a ela coligadas, termos definidos no artigo 243 da Lei
                    nº 6.404/1976, o Cliente, desde já, autoriza a compensação dos respectivos valores
                    em sua Agenda Financeira.
                    18.2.3. O Cliente, desde já, também autoriza e concorda, de forma irrevogável e
                    irretratável com a compensação de quaisquer débitos ou créditos existentes em um
                    ou mais cadastros do Cliente na Contratada.
                    XIX. FRAUDE OU SUSPEITA DE FRAUDE
                    19.1. A Contratada adotará providências para identificação e prevenção de fraudes
                    e práticas ilícitas, comprometendo-se o Cliente a orientar seus funcionários acerca
                    do cumprimento das políticas de prevenção, bem como a fornecer as informações
                    solicitadas pela Contratada.
                    19.2. Em caso de suspeita de realização de Transações com Meio de Pagamento
                    irregulares, a Contratada fica desde logo autorizada pelo Cliente a iniciar
                    procedimento investigativo para a respectiva apuração.
                    19.2.1. Caso o Cliente venha a ser comunicado pela Contratada acerca de qualquer
                    procedimento investigativo, o Cliente deverá cooperar integralmente com a
                    Contratada, obrigando-se a fornecer todos os documentos solicitados pela
                    Contratada e adotar todas e quaisquer recomendações para regularizar as suas
                    atividades no prazo que vier a ser indicado pela Contratada, podendo a Contratada
                    realizar inspeção nas suas dependências físicas do Cliente e documentos e/ou
                    informações, em qualquer data e em horário comercial, independentemente de
                    prévia comunicação ao Cliente.
                    19.3. Em caso de suspeita de fraude ou qualquer outra atividade ilícita e durante
                    a realização do procedimento investigativo mencionado nesta Cláusula, a Contratada
                    poderá suspender a realização de quaisquer serviços aqui previstos e a liquidação
                    financeira do Valor Líquido decorrente das Transações com Meio de Pagamento ao
                    Cliente (e/ou recebedores, se necessário) ou reter eventuais repasses a serem
                    realizados ao Cliente, desde a data do início do procedimento investigativo até o seu
                    término, sem que isto gere para a Contratada a incidência de multa ou de encargos
                    moratórios.
                    19.3.1. Caso não reste comprovada a ocorrência de irregularidades nas transações
                    e o presente Contrato continuar em vigor, os valores das transações deverão ser
                    pagos pela Contratada ao Cliente, sem qualquer acréscimo ou penalidade.
                    19.3.2. Na hipótese de constatação de fraude ou suspeita de fraude ou irregularidade
                    na operação por parte do Cliente, poderá a Contratada imediatamente bloquear as
                    Transações com Meio de Pagamento e/ou alterar a Remuneração e/ou rescindir o
                    presente Contrato e/ou, ainda, reter todo e qualquer valor que porventura tivesse
                    que ser repassado pela Contratada ao Cliente pelo prazo necessário para concluir a
                    apuração de todas as Perdas causadas. Uma vez efetuada tal apuração, os valores
                    retidos poderão ser utilizados para amortização/compensação das Perdas causadas
                    à Contratada e/ou aos Portadores e/ou aos Emissores.
                    19.4. Em relação aos serviços aqui contratados, a Contratada poderá determinar
                    e comunicar ao Cliente um limite monetário a ser observado para que possa operar
                    e efetuar transações, dentro de um período especificado.
                    * * * * *
                    APÊNDICE I
                    (Condições Gerais de Promessa de Cessão e Aquisição de
                    Direitos Creditórios e Outras Avenças - TAPSO FUNDO DE INVESTIMENTO EM
                    DIREITOS CREDITÓRIOS)
                    CONDIÇÕES GERAIS DE PROMESSA DE CESSÃO E AQUISIÇÃO DE DIREITOS
                    CREDITÓRIOS E OUTRAS AVENÇAS
                    O TAPSO FUNDO DE INVESTIMENTO EM DIREITOS CREDITÓRIOS (“Fundo”
                    ou “Cessionário”), inscrito no Cadastro Nacional da Pessoa Jurídica do Ministério da
                    Economia (“CNPJ/ME”) sob o nº 26.287.464/0001-14, registrado na Comissão de
                    Valores Mobiliários (“CVM”), constituído sob a forma de condomínio fechado, regido
                    pela Instrução CVM nº 356, de 17 de dezembro de 2001, conforme alterada
                    (“Instrução CVM 356/01”), e representado na forma do Regulamento do Fundo
                    (“Regulamento”), por sua instituição administradora, OLIVEIRA TRUST
                    DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS S.A., com sede na
                    Cidade do Rio de Janeiro, Estado do Rio de Janeiro, na Av. das Américas, nº 3434,
                    Bloco 7, Sala 201, Barra da Tijuca, CEP 22640-100, inscrita no CNPJ/ME sob o nº
                    36.113.876/0001-91, devidamente autorizada pela CVM para o exercício profissional
                    de administração e gestão de carteiras de valores mobiliários pelo Ato Declaratório
                    CVM nº 6696, de 21 de fevereiro de 2002 (a “Administradora”), neste ato
                    representada na forma de seu Estatuto Social, resolve estabelecer as condições
                    gerais para as cessões de direitos creditórios que poderão ser realizadas de tempos
                    em tempos pelos Estabelecimentos Credenciados que tenham aderido aos Termos
                    Gerais de Contratação de Produtos e Serviços de Pagamento da Pagar.me, a ser
                    registrado no competente Cartório de Registro de Títulos e Documentos de São Paulo
                    (“Contrato de Credenciamento”), conforme aditado ou substituído de tempos em
                    tempos, por meio do presente instrumento de Condições Gerais de Promessa de
                    Cessão e Aquisição de Direitos Creditórios e Outras Avenças (“Condições Gerais de
                    Cessão”), que será regido pelas cláusulas e condições a seguir:
                    CONSIDERANDO QUE:
                    (i) em decorrência das Transações de Pagamento realizadas entre os Cedentes e
                    Usuários-Finais, os Cedentes, de tempos em tempos, detêm Direitos Creditórios em
                    face da Pagar.me, oriundos da aquisição, pelos Usuários-Finais, de bens ou serviços
                    oferecidos pelos Cedentes, quando da utilização de Instrumentos de Pagamento de
                    qualquer Bandeira e Emissor;
                    (ii) os Cedentes poderão, a seu exclusivo critério, ofertar e ceder ao Fundo os Direitos
                    Creditórios que estejam em conformidade com os Critérios de Elegibilidade, conforme
                    disciplina o Regulamento do Fundo, o Contrato de Credenciamento e este
                    instrumento de Condições Gerais de Cessão, com o intuito de adiantar recebíveis de
                    titularidade do Cedente;
                    (iii) o Fundo, por sua vez, deseja adquirir os respectivos Direitos Creditórios dos
                    Cedentes, desde que atendidos, de forma cumulativa, todos os Critérios de
                    Elegibilidade e desde que haja disponibilidades suficientes para a aquisição destes
                    Direitos Creditórios, conforme disciplina o Regulamento do Fundo e este instrumento
                    de Condições Gerais de Cessão;
                    (iv) os Cedentes, por meio de cada Formalização Eletrônica de Cessão iniciada por
                    meio do Sistema Pagar.me, cederão ao Fundo os Direitos Creditórios especificados
                    na respectiva Formalização Eletrônica de Cessão, nos termos dos artigos 286 e
                    seguintes da Lei nº 10.406, de 10 de janeiro de 2002, conforme alterada (“Código
                    Civil”), com tudo o que tais Direitos Creditórios representam;
                    (v) o Custodiante prestará os serviços de custódia para o Fundo, conforme previstos
                    no artigo 38 da Instrução CVM 356/01, incluindo a verificação do cumprimento dos
                    Critérios de Elegibilidade;
                    (vi) conforme disposto neste instrumento de Condições Gerais de Cessão, os Direitos
                    Creditórios são oriundos de Transações de Pagamento realizadas por Usuários-Finais,
                    quando da utilização de Instrumentos de Pagamento de qualquer Bandeira e de
                    qualquer Emissor, nos Estabelecimentos Credenciados, operacionalizados pelo
                    Sistema Pagar.me;
                    (vii) os Cedentes são e serão até o momento da cessão, os únicos e legítimos
                    proprietários dos Direitos Creditórios Elegíveis; e
                    (viii) para os fins do presente instrumento de Condições Gerais de Cessão, toda e
                    qualquer referência ao Fundo também deverá ser interpretada como uma referência
                    à Administradora, na qualidade de representante do Fundo.
                    Todos os termos e expressões, iniciados por letras maiúsculas, em sua forma singular
                    ou plural, utilizados no presente instrumento e seus anexos, e neles não definidos,
                    têm os respectivos significados que lhes são atribuídos no Anexo I a este instrumento
                    de Condições Gerais de Cessão e, caso não previstos no referido Anexo I, têm o
                    mesmo significado que lhes é atribuído no Regulamento.
                    Cláusula Primeira: Da Promessa de Cessão, da Cessão E Aquisição De
                    Direitos Creditórios
                    1.1. Sem prejuízo da possibilidade de o Cedente optar pela Promessa de Cessão, os
                    Cedentes, mediante a oferta de Direitos Creditórios, nos termos da Cláusula 1.1.2(i)
                    abaixo, uma vez concluída a Formalização Eletrônica de Cessão, cederão e
                    transferirão ao Fundo, de tempos em tempos, em caráter definitivo e sem qualquer
                    coobrigação ou responsabilidade pela solvência do Devedor, durante o prazo de
                    duração do Fundo, os Direitos Creditórios existentes, válidos, eficazes, livres e
                    desimpedidos, detidos contra o Devedor, em decorrência de Transações de
                    Pagamento realizadas por Usuários-Finais com a utilização de Instrumentos de
                    Pagamento, operacionalizados pelo Sistema Pagar.me.
                    1.1.1. O Fundo terá a faculdade de adquirir os Direitos Creditórios ofertados pelos
                    Cedentes, tenham eles sido objeto de Promessa de Cessão ou não, nos termos deste
                    instrumento de Condições Gerais de Cessão, do Contrato de Credenciamento e da
                    Formalização Eletrônica de Cessão, de forma a cumprir com a sua política de
                    investimento, conforme descrito no Regulamento, sendo que, em caso de opção pela
                    Promessa de Cessão, as obrigações dos Cedentes de ceder os Direitos Creditórios
                    sob a Promessa de Cessão serão garantidas pela Cessão Fiduciária.
                    1.1.2. Os Direitos Creditórios a serem cedidos ao Fundo, observado o disposto na
                    Cláusula 1.2 abaixo, deverão obedecer aos Critérios de Elegibilidade, a serem
                    verificados e validados pelo Custodiante. Todos e quaisquer Direitos Creditórios
                    oferecidos pelos Cedentes, operacionalizados e representados pela Pagar.me, ao
                    Fundo deverão observar, individualmente e de forma cumulativa, aos seguintes
                    critérios, os quais deverão ser verificados e confirmados pelo Custodiante, na forma
                    prevista no Capítulo Cinco do Regulamento, sem prejuízo de outros critérios que
                    venham a ser estipulados no Regulamento do Fundo (“Critérios de Elegibilidade”):
                    (i) os Direitos Creditórios deverão ser colocados à disposição pelos respectivos
                    Cedentes para venda, por meio de qualquer canal de comunicação disponibilizado
                    pela Pagar.me, que o representará na qualidade de mandatário para fins da cessão;
                    (ii) os Direitos Creditórios deverão ser provenientes de Transações de Pagamento
                    realizadas por Usuários-Finais utilizando-se de Instrumentos de Pagamento,
                    operacionalizados pelo Sistema Pagar.me para a aquisição de bens, produtos e
                    serviços ofertados pelos respectivos Cedentes;
                    (iii) os Direitos Creditórios deverão ser expressos em moeda corrente nacional.
                    1.2. Os Direitos Creditórios Cedidos ficarão vinculados a estas Condições Gerais de
                    Cessão, em caráter irrevogável e irretratável, observadas as disposições aplicáveis
                    desta Cláusula Primeira.
                    1.2.1. O Cedente poderá, nos termos do Contrato de Credenciamento, realizar a
                    Promessa de Cessão de Direitos Creditórios que venham a ser originados durante
                    determinado período ao Fundo, hipótese em que será aplicável o disposto na Cláusula
                    1.9 abaixo. Nesse caso, os Direitos Creditórios objetos da Promessa de Cessão
                    estarão vinculados até que haja manifestação em sentido contrário pelo respectivo
                    Cedente, solicitando a liberação, pelo Fundo, da Promessa de Cessão e,
                    consequentemente, da Cessão Fiduciária em Garantia. A partir da comunicação feita
                    pelo Cedente à Pagar.me, todas as disposições referentes à Promessa de Cessão
                    serão aplicáveis, ficando efetivamente constituída a Promessa de Cessão.
                    1.3. Os Cedentes não responderão pela solvência do Devedor, na qualidade de
                    devedor dos Direitos Creditórios Cedidos, mas apenas pela boa formalização, correta
                    constituição, existência, liquidez e certeza destes Direitos Creditórios adquiridos pelo
                    Fundo, nos termos deste instrumento de Condições Gerais de Cessão.
                    1.3.1. A Administradora, o Custodiante, a Gestora e o Controlador de Ativos não
                    respondem pela solvência, originação, validade, existência, liquidez, certeza e
                    exequibilidade dos Direitos Creditórios adquiridos pelo Fundo.
                    1.4. Pela cessão dos Direitos Creditórios, o Fundo, por meio da Pagar.me, enquanto
                    Agente de Liquidação, pagará o Preço de Aquisição na forma, nos valores e nas datas
                    acordadas com o Cedente (sendo a data acordada para pagamento da primeira
                    parcela do Preço de Aquisição, a “Data de Pagamento do Preço de Aquisição
                    Inicial”). O Preço de Aquisição indicado na respectiva Formalização Eletrônica de
                    Cessão, será acordado com o respectivo Cedente, representado pela Pagar.me, nos
                    termos do Contrato de Credenciamento, ao tempo de cada cessão segundo critérios
                    e parâmetros de mercado vigentes à época, podendo ser pago em 1 (uma) ou mais
                    parcelas, conforme previamente acordado entre Pagar.me e o respectivo Cedente.
                    No caso de pagamento em mais de uma parcela do Preço de Aquisição, o Fundo, por
                    meio da Pagar.me, enquanto Agente de Liquidação, efetuará o pagamento do saldo
                    remanescente do Preço de Aquisição na data de vencimento do respectivo Direito
                    Creditório (“Data de Pagamento do Preço de Aquisição Final”), se aplicável.
                    1.4.1. Fica desde já estabelecido que, caso, na Data de Pagamento do Preço de
                    Aquisição Final, o Fundo não tenha recebido o pagamento integral dos Direitos
                    Creditórios Cedidos pelo respectivo Cedente em virtude exclusivamente de
                    Chargebacks ou de outros eventos não relacionados ao risco de crédito do Devedor
                    que resultem na má-formalização dos respectivos Direitos Creditórios Cedidos, o
                    Preço de Aquisição será ajustado pela Pagar.me, de forma a deduzir o valor
                    equivalente ao montante não pago em virtude de tais eventos, se aplicável conforme
                    a Cláusula 1.4 acima.
                    1.4.2. O valor deduzido e não pago, na forma da Cláusula 1.4.1 acima, deverá ser
                    devolvido pela Pagar.me ao Fundo a título de ajuste de Preço de Aquisição.
                    1.5. O Preço de Aquisição será pago pelo Fundo ao Cedente, por intermédio do Agente
                    de Liquidação, por meio de Transferência Eletrônica Disponível – TED ou outros
                    mecanismos de transferência equivalentes, à conta indicada pelo Agente de
                    Liquidação, o qual terá recebido integralmente referido valor por conta e ordem do
                    Cedente, nos termos da Cláusula 1.5.1 abaixo, e deverá transferir tal valor, na
                    quantidade de parcelas e na periodicidade previamente acordada com o Cedente, via
                    Transferência Eletrônica Disponível – TED ou outros mecanismos de transferência
                    equivalentes na respectiva Data de Pagamento do Preço de Aquisição Inicial e Data
                    de Pagamento do Preço de Aquisição Final, conforme aplicável, de maneira que o
                    Cedente receba tais valores em conta de sua titularidade conforme procedimento
                    disposto no Contrato de Credenciamento e demais documentos aplicáveis.
                    1.5.1. O Agente de Liquidação receberá o Preço de Aquisição na condição de fiel
                    depositário, nos termos do Artigo 627 e ss. do Código Civil, e nos termos do Contrato
                    de Agente de Liquidação, realizando o pagamento das parcelas do Preço de Aquisição
                    na forma e periodicidade previamente acordada com o Cedente.
                    1.6. Nos termos do artigo 287 do Código Civil e conforme estabelecido neste
                    instrumento, a cessão, pelo Cedente, dos Direitos Creditórios ao Fundo, abrangerá
                    não somente os Direitos Creditórios como também tudo que os Direitos Creditórios
                    representam, inclusive reajustes monetários, juros e encargos, bem como todos os
                    direitos, ações, coobrigações e garantias assegurados ao Cedente por força dos
                    Direitos Creditórios, nos termos dos Documentos Comprobatórios.
                    1.7. A Promessa de Cessão, a Cessão Fiduciária e a cessão dos Direitos Creditórios
                    ao Fundo, quando aplicável, serão registradas em Sistema de Registro, observado
                    que tal registro será operacionalizado pela Pagar.me, na forma descrita no Contrato
                    de Agente de Liquidação, conforme procedimentos operacionais da Entidade
                    Registradora para o referido registro.
                    1.7.1. Os registros da Promessa de Cessão, da Cessão Fiduciária e das cessões dos
                    Direitos Creditórios Cedidos serão realizados considerando os elementos de
                    identificação da U.R. e, conforme aplicável, o valor de face agregado.
                    1.7.2. Todas as disposições referentes ao Sistema de Registro somente serão
                    aplicáveis após o início da vigência da Resolução CMN 4.734/19 e operacionalização
                    dos Sistemas de Registro.
                    1.7.3. Não será aplicável o registro de cessões dos Direitos Creditórios EC ao Fundo
                    no sistema de Registro em relação aos Direitos Creditórios EC que sejam cedidos por
                    Estabelecimentos Credenciados que não se enquadrem como usuário final recebedor,
                    nos termos da Resolução CMN 4.734/19 e da Circular BCB 3.952/19, exceto caso tais
                    Direitos Creditórios EC detidos por Estabelecimentos Credenciados que não se
                    enquadrem como usuário final recebedor sejam registrados nos Sistemas de Registro
                    pelo respectivo Devedor.
                    1.8. Caso, por qualquer motivo, os seguintes eventos ocorram de forma cumulativa:
                    (a) não seja possível a efetivação da cessão dos Direitos Creditórios ofertados ao
                    Fundo; (b) o registro da respectiva cessão já tenha sido realizado em favor do Fundo;
                    e (c) os Direitos Creditórios ofertados cuja cessão não tenha se efetivado tenham
                    sido subsequentemente cedidos a qualquer terceiro, o Cedente e o Fundo autorizam
                    a Pagar.me a realizar a atualização do registro da cessão dos referidos Direitos
                    Creditórios no Sistema de Registro diretamente para demonstrar a titularidade do
                    terceiro que vier a adquirir tais Direitos Creditórios.
                    1.9. Para assegurar cumprimento das obrigações assumidas pelos Cedentes no
                    âmbito da Promessa de Cessão, o Cedente, cede e transfere fiduciariamente em
                    garantia, conforme indicado no Termo de Cessão Fiduciária, a propriedade fiduciária,
                    o domínio resolúvel e a posse direta da totalidade dos Direitos Creditórios, em favor
                    do Fundo, nos termos dos artigos 1.361 e seguintes do Código Civil, do artigo 66-B,
                    §§ 3º, 4º e 5º da Lei nº 4.728, de 14 de julho de 1965, dos artigos 18 a 20 da Lei
                    nº 9.514, de 20 de novembro de 1997, e dos artigos 30 a 39 da Lei nº 10.931, bem
                    como das demais disposições legais e regulatórias aplicáveis.
                    1.9.1. O Cedente, representado pela Pagar.me, assinará, de tempos em tempos,
                    Termos de Cessão Fiduciária, os quais confirmarão a presente garantia e adesão às
                    Condições Gerais de Cessão, sendo que em cada Termo de Cessão Fiduciária estarão
                    indicadas a obrigação garantida, o prazo, o local, os Direitos Creditórios objeto da
                    Cessão Fiduciária, bem como quaisquer outros requisitos legais para perfeita
                    constituição da Cessão Fiduciária.
                    1.9.1.1. O Cedente, representado pela Pagar.me, declarará em cada Termo de
                    Cessão Fiduciária que os Direitos Creditórios de tempos em tempos dados em
                    garantia da presente Promessa de Cessão encontram-se livres e desembaraçados de
                    quaisquer ônus e gravames, de natureza real ou pessoal, sem concorrência de
                    terceiros, permanecendo íntegros e em pleno vigor até o cumprimento das
                    obrigações assumidas na Promessa de Cessão e que a garantia dada no âmbito
                    destas Condições Gerais de Cessão é plenamente válida e eficaz entre as partes.
                    1.9.2. Para fins de operacionalização do disposto na Cláusula 1.9, o Cedente autoriza
                    e consente, expressamente e desde já, que o Fundo, por intermédio da Pagar.me,
                    registre ônus e gravames, conforme aplicável, sobre os Direitos Creditórios objeto da
                    Promessa de Cessão e de cada Termo de Cessão Fiduciária nos Sistemas de Registro.
                    1.9.3. Na qualidade de credor fiduciário, poderá o Fundo exercer, sobre os Direitos
                    Creditórios dados em garantia, todos os direitos discriminados na legislação e
                    regulamentação aplicáveis.
                    1.9.4. O Cedente obriga-se a entregar ao Fundo, para compor a presente Cessão
                    Fiduciária, novos Direitos Creditórios no valor necessário para manter a garantia boa,
                    firme e valiosa, conforme indicado em cada Termo de Cessão Fiduciária.
                    1.9.5. Enquanto subsistirem obrigações referentes à Promessa de Cessão, obriga-se
                    o Cedente, a não sacar, ceder ou endossar a terceiros os Direitos Creditórios, e/ou,
                    ainda, ceder, alienar, descontar, transacionar, dar em garantia a quaisquer terceiros
                    ou constituir quaisquer ônus e gravames sobre os Direitos Creditórios dados em
                    garantia, bem como iniciar a prática de quaisquer destes atos.
                    1.9.6. A Pagar.me deverá providenciar a desconstituição de ônus e gravames sobre
                    os Direitos Creditórios (i) caso o respectivo Direito Creditório tenha sido efetivamente
                    adquirido pelo Fundo, (ii) na eventualidade de o Fundo não exercer o direito de
                    aquisição dos respectivos Direitos Creditórios, por qualquer motivo; e (iii) mediante
                    solicitação do Cedente para o cancelamento da renovação da Promessa de Cessão.
                    Cláusula Segunda: Da Cobrança Dos Direitos Creditórios Cedidos
                    2.1. Os Direitos Creditórios Cedidos, nos termos estabelecidos neste instrumento de
                    Condições Gerais de Cessão, da respectiva Formalização Eletrônica de Cessão e do
                    Instrumento de Aceite, pertencerão ao Fundo a partir da data de efetivação da
                    respectiva Formalização Eletrônica de Cessão e o Fundo terá o direito de cobrar e
                    receber quaisquer Direitos Creditórios Cedidos, agindo por sua conta própria ou por
                    meio de terceiros, estando o Agente de Liquidação autorizado a indicar a Conta
                    Autorizada do Fundo como domicílio bancário de recebimento dos Direitos Creditórios
                    Cedidos no Sistema de Registro.
                    2.2. Nos termos do Artigo 38, inciso VII da Instrução CVM 356/01, o Custodiante
                    será responsável por cobrar e receber, em nome do Fundo, os valores relativos aos
                    Direitos Creditórios Cedidos em suas respectivas datas de vencimento, conforme
                    regras estabelecidas no Regulamento e no Contrato de Agente de Liquidação.
                    Cláusula Terceira: Da Operacionalização Da Aquisição E Da Liquidação Dos
                    Direitos Creditórios
                    3.1. Como regra geral, cada operação de cessão de Direitos Creditórios Elegíveis ao
                    Fundo será considerada formalizada e regular após: (i) Formalização Eletrônica de
                    Cessão; (ii) celebração (mediante assinatura física ou digital) do Instrumento de
                    Aceite pelo respectivo Devedor em conjunto com o Fundo; (iii) pagamento, pelo
                    Fundo, do Preço de Aquisição ao respectivo Agente de Liquidação, o qual será
                    posteriormente pago ao respectivo Cedente (conforme acordado e previsto neste
                    instrumento de Condições Gerais de Cessão e nos Contratos de Agente de
                    Liquidação); e (iv) registro da respectiva cessão dos Direitos Creditórios Elegíveis em
                    nome do Fundo no Sistema de Registro, conforme previsto na Cláusula 1.7 acima e
                    quando aplicáveis as disposições referentes ao Sistema de Registro.
                    3.1.1. A Pagar.me encaminhará diariamente ao Administrador e ao Custodiante o
                    Arquivo Eletrônico Analítico por meio eletrônico a cada Instrumento de Aceite
                    celebrado que o Administrador tenha enviado preenchido, identificando
                    pormenorizadamente os Direitos Creditórios Cedidos.
                    3.1.2. O Fundo e o respectivo Devedor do Direito Creditório Cedido, em conjunto,
                    deverão celebrar diariamente o Instrumento de Aceite, de modo que o respectivo
                    Devedor declare ciência do valor devido oriundo dos Direitos Creditórios Cedidos em
                    um determinado Dia Útil pelos respectivos Cedentes ao Fundo.
                    3.1.2.1. Os Instrumentos de Aceite somente serão registrados nos Registros de
                    Títulos e Documentos do domicílio do Devedor e do Fundo nas seguintes hipóteses:
                    (i) exigência expressa de autoridade governamental ou do Poder Judiciário; (ii)
                    deliberação específica em Assembleia Geral; (iii) decretação de evento de
                    intervenção, liquidação, falência, ou outros eventos similares de um Devedor, nos
                    termos da legislação e regulamentação aplicáveis; (iv) inadimplemento de qualquer
                    dos Devedores de Direitos Creditórios Cedidos; ou, ainda, (v) no caso de
                    superveniência de legislação que exija o registro para fins da existência ou validade
                    das cessões.
                    3.2. Todos os pagamentos relacionados aos Direitos Creditórios deverão ser
                    realizados pelo Devedor por meio da compensação e liquidação financeira dos
                    pagamentos dos Direitos Creditórios ao Fundo, que serão realizados na conta mantida
                    pelo Fundo no Banco Bradesco (237), Agência 2373-6, nº 7561-2, a qual será
                    indicada como domicílio bancário do Fundo no Sistema de Registro, ou em outra
                    conta de titularidade do Fundo, desde que previamente indicada pelo Fundo, por
                    intermédio do Agente de Liquidação, mediante alteração de seu domicílio bancário
                    no Sistema de Registro (a “Conta Autorizada do Fundo”), inclusive quando o
                    pagamento ocorrer em decorrência da realização de esforços de cobrança, judicial
                    e/ou extrajudicial, de acordo com a legislação aplicável, para o recebimento de parte
                    e/ou da totalidade dos pagamentos referentes a tais Direitos Creditórios Cedidos.
                    3.3. Os Cedentes constituem, neste ato, de forma irrevogável e irretratável, nos
                    termos dos artigos 684 e 685 da Lei nº 10.406, de 10 de janeiro de 2002 (o Código
                    Civil Brasileiro), a Pagar.me sua bastante procuradora para, em seu nome e por sua
                    conta, negociar os termos, ceder e transferir definitivamente os Direitos Creditórios
                    ao Fundo, podendo para tanto firmar contratos, instrumentos, termos de cessão e/ou
                    qualquer outro documento, bem como praticar quaisquer atos que sejam necessários
                    para formalizar e validar a transferência dos Direitos Creditórios, ficando
                    expressamente prevista a dispensa de a Pagar.me prestar contas para os Cedentes,
                    nos termos da legislação civil.
                    Cláusula Quarta: Das Declarações
                    4.1. Os Cedentes, devidamente autorizados na forma de seus atos constitutivos,
                    conforme o caso, se responsabilizarão, civil e criminalmente, pela existência,
                    legalidade, legitimidade, veracidade e correta formalização dos Direitos Creditórios
                    adquiridos pelo Fundo, nos termos deste instrumento e de cada Formalização
                    Eletrônica de Cessão, devendo declarar e assegurar, ainda, ao Fundo, ao Custodiante
                    e à Administradora, individualmente, na data de formalização de cada Formalização
                    Eletrônica de Cessão, que:
                    (a) é uma pessoa jurídica ou pessoa física, conforme o caso, validamente registrada,
                    constituída e organizada e em funcionamento de acordo com a legislação da
                    República Federativa do Brasil e regulamentação aplicáveis em vigor;
                    (b) estas Condições Gerais de Cessão, a assunção e o cumprimento das obrigações
                    delas decorrentes, em especial as relativas à cessão e transferência dos Direitos
                    Creditórios, não dependem de quaisquer autorizações dos seus órgãos deliberativos
                    e executivos (assembleia geral, conselho de administração e diretoria), assim como
                    de qualquer deliberação prévia de acionistas exigível por força de acordos de
                    acionistas, eventualmente arquivados em sua sede, tendo sido satisfeitos, dessa
                    forma, todos os requisitos legais e estatutários necessários para tanto;
                    (c) estas Condições Gerais de Cessão, a assunção e o cumprimento das obrigações
                    delas decorrentes não acarretam, direta ou indiretamente, no descumprimento, total
                    ou parcial, de (i) quaisquer contratos, instrumentos ou documento, de qualquer
                    natureza, firmados anteriormente à data da oferta dos Direitos Creditórios nos
                    termos deste instrumento, dos quais seja parte ou aos quais estejam vinculados, a
                    qualquer título, quaisquer dos bens corpóreos, incorpóreos, tangíveis, intangíveis,
                    móveis ou imóveis de sua propriedade, em especial os Direitos Creditórios; (ii)
                    qualquer norma legal ou regulamentar a que o Cedente, ou quaisquer dos bens
                    corpóreos, incorpóreos, tangíveis, intangíveis, móveis ou imóveis de sua propriedade
                    estejam sujeitos; e (iii) qualquer ordem, decisão, ainda que liminar, judicial ou
                    administrativa que afete o Cedente, ou quaisquer dos bens corpóreos, incorpóreos,
                    tangíveis, intangíveis, móveis ou imóveis de sua propriedade;
                    (d) os Direitos Creditórios que, por força deste instrumento e de cada Formalização
                    Eletrônica de Cessão, são cedidos ao Fundo, são de sua legítima e exclusiva
                    titularidade, existentes, válidos, eficazes, livres, desimpedidos e desembaraçados de
                    quaisquer ônus, gravames ou restrições ou fatos impeditivos de qualquer natureza,
                    que, de qualquer modo, possam obstar a cessão e o pleno exercício, pelo Fundo, das
                    prerrogativas decorrentes da titularidade dos Direitos Creditórios adquiridos nos
                    termos deste instrumento e de cada Formalização Eletrônica de Cessão, inclusive
                    com relação a terceiros, não sendo objeto de nenhuma outra alienação, penhor,
                    cessão ou transferência, compromisso de alienação e/ou oneração;
                    (e) não tem conhecimento, na presente data, de ações pessoais ou reais de natureza
                    cível, comercial, fiscal ou trabalhista, instituídas em face do Cedente em qualquer
                    tribunal no Brasil ou no exterior e que envolvam ou tenham por objetivo os Direitos
                    Creditórios, de forma que possam obstar a cessão e o pleno exercício, pelo Fundo,
                    das prerrogativas decorrentes da titularidade dos Direitos Creditórios adquiridos nos
                    termos deste instrumento e de cada Formalização Eletrônica de Cessão;
                    (f) a cessão e a transferência de Direitos Creditórios, nos termos deste instrumento
                    e de cada Formalização Eletrônica de Cessão, não estabelecem, direta ou
                    indiretamente, qualquer relação de consumo ou comercial entre o Cedente e o Fundo
                    ou entre o Cedente, o Custodiante e/ou a Administradora;
                    (g) que não está sob intervenção e que não tem conhecimento de qualquer processo
                    que possa acarretar sua insolvência, falência, intervenção ou liquidação, judicial ou
                    extrajudicial ou procedimento similar;
                    (h) outorgou autorização à Pagar.me conferindo-lhe plenos poderes de representação
                    no âmbito do presente instrumento ou autorizando-a para que esta possa, sem
                    quaisquer restrições, realizar as seguintes atividades, sem a exclusão de outras que
                    venham a ser necessárias para correta formalização e aperfeiçoamento da cessão
                    dos Direitos Creditórios Elegíveis ao Fundo: (i) consulta dos Direitos Creditórios de
                    sua titularidade nos Sistemas de Registro; (ii) assinatura, seja física ou eletrônica,
                    nos termos da legislação aplicável, de quaisquer documentos necessários para
                    correta formalização da cessão, da Promessa de Cessão e da Cessão Fiduciária dos
                    Direitos Creditórios ao Fundo (ou, conforme o caso, resolução de cessão); e (iii)
                    realização de qualquer ordem ou comando a uma Entidade Registradora para que
                    esta realize a alteração da titularidade dos Direitos Creditórios Cedidos em favor do
                    Fundo, nos termos destas Condições Gerais de Cessão, no Sistema de Registro; e
                    (i) caso o Cedente não seja um usuário final recebedor, conforme definido na
                    regulamentação aplicável, o Cedente declara que, nos termos do art. 12-A da Lei
                    12.865/13, o produto de cada cessão de Direitos Creditórios realizada sob estas
                    Condições Gerais de Cessão (i.e., o Preço de Aquisição recebido pelo Cedente) será
                    destinado para cumprir as obrigações de liquidação entre os participantes do Arranjo
                    de Pagamento referentes às Transações de Pagamento até o recebimento pelo
                    usuário final recebedor, conforme as regras do Arranjo de Pagamento, respeitados
                    os descontos necessários. As Partes reconhecem que o eventual descumprimento
                    desta declaração, pelo Cedente, não poderá ser oposto ao Fundo para invalidar ou
                    tornar qualquer cessão de Direitos Creditórios realizada sob estas Condições Gerais
                    de Cessão ineficaz, tampouco resultar em qualquer prejuízo ao Fundo, ou, ainda,
                    descaracterizar qualquer cessão de Direitos Creditórios realizada sob estas Condições
                    Gerais de Cessão.
                    4.2. A Administradora, devidamente autorizada na forma do Regulamento, declara e
                    assegura, em nome do Fundo e, conforme o caso, devidamente autorizada na forma
                    de seu estatuto social, em seu próprio nome, que:
                    (a) o Fundo é uma comunhão de recursos validamente constituída sob a forma de
                    condomínio fechado, na forma da Resolução CMN 2.907 e da Instrução CVM 356/01;
                    (b) este instrumento e a assunção e o cumprimento das obrigações deste
                    decorrentes, assim como dos demais instrumentos legais relacionados com a cessão
                    e aquisição de Direitos Creditórios ora avençada, estão devidamente autorizados pelo
                    Regulamento, sendo que este instrumento e a assunção e o cumprimento das
                    obrigações dele decorrentes não acarretam, direta ou indiretamente, o
                    descumprimento, total ou parcial, de (i) quaisquer contratos, de qualquer natureza,
                    firmados anteriormente à data de oferta dos Direitos Creditórios nos termos deste
                    instrumento, dos quais o Fundo e/ou a Administradora seja parte; (ii) qualquer norma
                    legal ou regulamentar a que o Fundo e/ou a Administradora, ou quaisquer dos bens
                    corpóreos, incorpóreos, tangíveis, intangíveis, móveis ou imóveis de sua propriedade
                    estejam sujeitos; e (iii) qualquer ordem, decisão, ainda que liminar, judicial ou
                    administrativa que afete a Administradora;
                    (c) encontra-se técnica e operacionalmente habilitado e autorizado a prestar os
                    serviços de administração do Fundo, contando com todos os sistemas necessários ao
                    pleno e satisfatório exercício de suas funções, nos termos do Regulamento, dos
                    demais documentos relacionados ao Fundo e da legislação aplicável; e
                    (d) não está sob intervenção e que não tem conhecimento de qualquer processo que
                    possa acarretar sua insolvência, falência, intervenção ou liquidação, judicial ou
                    extrajudicial ou procedimento similar.
                    Cláusula Quinta: Das Obrigações Adicionais Dos Cedentes
                    5.1. Sem prejuízo das demais obrigações assumidas nos termos deste instrumento,
                    os Cedentes expressamente obrigar-se-ão, quando de cada cessão de Direitos
                    Creditórios Elegíveis ao Fundo, a:
                    (a) adotar todas as providências ao seu alcance para manter válidas e eficazes as
                    declarações contidas na Cláusula Quarta acima, e a manter o Fundo informado,
                    podendo tais comunicações serem feitas por meio da Pagar.me, na qualidade de
                    mandatária do Cedente, conforme disposto na Cláusula 3.3 acima, de qualquer ato
                    ou fato que possa afetar a validade de qualquer das referidas declarações, adotando
                    as medidas cabíveis para sanar ou evitar a invalidade de qualquer declaração; e
                    (b) informar imediatamente à Administradora, podendo tais comunicações serem
                    feitas por meio da Pagar.me, na qualidade de mandatária do Cedente, acerca da
                    ocorrência de qualquer inadimplemento com relação a este instrumento; e
                    (c) autorizar a Pagar.me a enviar as informações destas Condições Gerais de Cessão
                    para o correspondente Sistema de Registro, para fins do registro das cessões
                    realizadas nos termos destas Condições Gerais de Cessão.
                    5.1.1. As obrigações previstas nesta Cláusula para as quais não tenha sido
                    estabelecido prazo específico serão exigíveis no prazo de 2 (dois) Dias Úteis, contado
                    do recebimento, pelo Cedente, de comunicação enviada por meio da Pagar.me, na
                    qualidade de mandatária do Cedente, pela Administradora ou pelo Fundo, nos termos
                    da Cláusula Décima abaixo, exigindo o cumprimento da respectiva obrigação.
                    Cláusula Sexta: Da Extinção
                    6.1. A eventual extinção deste instrumento de Condições Gerais de Cessão não
                    eximirá o Cedente do integral e pontual cumprimento das obrigações assumidas nos
                    termos deste instrumento com relação aos Direitos Creditórios cedidos anteriormente
                    à data de sua extinção, inclusive o disposto na Cláusula 5.1 acima, ou que se tornem
                    exigíveis em razão da extinção deste instrumento, assim como não prejudicará o
                    direito do Fundo de exigir, por todos os meios estabelecidos nos referidos
                    instrumentos contratuais, o cumprimento de tais obrigações.
                    Cláusula Sétima: Das Penalidades
                    7.1. O inadimplemento pelo Fundo de quaisquer das obrigações de pagamento
                    previstas neste instrumento caracterizará, de pleno direito, independentemente de
                    qualquer aviso, notificação ou interpelação judicial ou extrajudicial, a mora da Parte
                    inadimplente, sujeitando os montantes em atraso a juros de mora de 1% (um por
                    cento) ao mês e atualização monetária com base no IPC/FGV ou, na falta deste, outro
                    índice que legalmente o substitua, calculados pro rata temporis desde a data em que
                    o pagamento era devido até o seu integral recebimento pela Parte credora.
                    7.1.1. Não serão penalizáveis quaisquer atrasos que decorram de falhas de sistema,
                    os quais, não obstante, deverão diligenciar para a imediata correção de tais falhas,
                    ficando ressalvado que a Administradora e/ou o Custodiante estarão sujeitos às
                    penalidades previstas neste Contrato caso tais falhas persistam por mais de 1 (um)
                    Dia Útil, contados a partir da data prevista para cumprimento da obrigação.
                    7.2. O inadimplemento, por parte do Cedente, por dolo ou culpa, de qualquer das
                    obrigações de dar, fazer ou não fazer assumidas nos termos deste instrumento e de
                    cada Formalização Eletrônica de Cessão, do qual tenha sido notificado para
                    regularizar e não o faça no prazo estabelecido neste instrumento, ou assinado na
                    respectiva notificação e/ou aviso, prazo este que, em nenhuma hipótese, será inferior
                    a 2 (dois) Dias Úteis, ou, ainda, a identificação, pelo Fundo, de que qualquer
                    declaração prestada pelo Cedente é falsa, incorreta, errada, imprecisa ou incompleta,
                    obrigará o Cedente ao ressarcimento das perdas e danos incorridos pelo Fundo em
                    decorrência de tal inadimplemento e/ou falsidade, incorreção, erro, imprecisão ou
                    incompletude de declaração.
                    7.2.1. O Cedente ficará isento de tal penalidade no caso de inadimplementos que
                    decorram de atrasos por parte do Devedor e/ou falhas de sistemas da
                    Administradora, do Custodiante e/ou da Pagar.me.
                    Cláusula Oitava: Da Confidencialidade
                    8.1. O Cedente, o Fundo, a Administradora e demais Partes aqui mencionadas
                    obrigam-se a manter em sigilo e respeitar a confidencialidade dos dados e
                    informações, verbais ou escritas, relativos às operações e negócios das outras Partes
                    (incluindo, sem limitação, todos os segredos e/ou informações financeiras,
                    operacionais, econômicas, técnicas e jurídicas), dos contratos, pareceres e outros
                    documentos, bem como de quaisquer cópias ou registros dos mesmos, contidos em
                    qualquer meio físico e/ou eletrônico a que a referida Parte obrigada tiver acesso em
                    virtude deste instrumento (“Informações Confidenciais”), ficando desde já
                    estabelecido que (i) as Informações Confidenciais somente poderão ser divulgadas a
                    seus sócios, administradores, procuradores, consultores, prepostos e empregados,
                    presentes ou futuros, que precisem ter acesso às Informações Confidenciais em
                    virtude do cumprimento das obrigações estabelecidas neste instrumento
                    (“Representantes”); e (ii) que a divulgação a terceiros, direta ou indiretamente, no
                    todo ou em parte, isolada ou conjuntamente, no Brasil ou no exterior, por qualquer
                    meio, de quaisquer Informações Confidenciais dependerá de prévia e expressa
                    autorização, por escrito, da parte titular das respectivas Informações Confidenciais.
                    8.2. O Cedente, o Fundo, a Administradora e demais Partes aqui mencionadas
                    comprometem-se a não utilizar qualquer das Informações Confidenciais em proveito
                    próprio ou de quaisquer terceiros e responsabilizam-se pela violação das obrigações
                    previstas nesta Cláusula por parte de quaisquer dos Representantes.
                    8.3. Caso qualquer das Partes ou qualquer de seus Representantes sejam obrigados,
                    em virtude de lei, de decisão judicial ou por determinação de qualquer autoridade
                    governamental, a divulgar quaisquer das Informações Confidenciais, tal Parte, sem
                    prejuízo do atendimento tempestivo à determinação legal ou administrativa, deverá,
                    exceto no caso em que seja impedida em decorrência de determinada ordem judicial
                    ou norma, comunicar imediatamente as outras Partes a respeito dessa obrigação, de
                    modo que as Partes, se possível e em mútua cooperação, possam intentar as medidas
                    cabíveis, inclusive judiciais, para preservar as Informações Confidenciais. Caso as
                    medidas tomadas para preservar as Informações Confidenciais não tenham êxito,
                    deverá ser divulgada somente a parcela das Informações Confidenciais estritamente
                    necessária à satisfação do dever legal e/ou cumprimento de ordem judicial ou de
                    qualquer autoridade competente de divulgação das informações.
                    8.4. Excluem-se do compromisso de confidencialidade aqui previsto as informações:
                    (i) disponíveis para o público de outra forma que não pela divulgação destas por
                    qualquer das Partes ou por qualquer de seus Representantes; e (ii) que
                    comprovadamente já eram do conhecimento de uma ou de todas as Partes ou de
                    qualquer de seus Representantes antes da referida Parte obrigada ou seus
                    Representantes terem acesso em função deste instrumento.
                    8.5. O dever de confidencialidade previsto nesta Cláusula remanescerá ao término
                    da vigência deste instrumento entre um determinado Cedente e o Fundo pelo prazo
                    de 2 (dois) anos, estando seu descumprimento sujeito ao disposto neste instrumento
                    a qualquer tempo durante a vigência do prazo ora referido, inclusive após a extinção
                    ou a resolução deste instrumento.
                    Cláusula Nona: Das Comunicações
                    9.1. Todos os documentos, comunicações, consentimentos, notificações, solicitações
                    e outras formas de comunicação relativos ao presente instrumento ao Fundo, à
                    Administradora e/ou ao Custodiante serão realizados por escrito e serão enviados
                    por correspondência eletrônica ou entregues nos termos deste instrumento, devendo
                    ser encaminhados para o seguinte endereço ou e-mail:
                    OLIVEIRA TRUST DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS
                    S.A.
                    Av. das Américas, nº 3434, Bloco 7, Sala 201, Barra da Tijuca
                    CEP 22640-102 - Rio de Janeiro – RJ
                    At.: Sr. Alan Najman / Alexandre Freitas
                    E-mail: ger1.fundos@oliveiratrust.com / alexandre.freitas@oliveiratrust.com.br
                    Telefone: (21) 3514-0000
                    Com cópia para:
                    PAGAR.ME INSTITUIÇÃO DE PAGAMENTO S.A.
                    Rua Fidêncio Ramos, nº 308, Torre A, conjunto 91, Vila Olímpia
                    CEP 04551-902 - São Paulo – SP
                    At.: Tesouraria / DCM
                    E-mail: tesouraria@stone.com.br / opestruturadas@stone.com.br /
                    juridicobancos@stone.com.br / dcmestruturacao@stone.com.br
                    Telefone: (11) 3157-3197
                    9.2. Todas as comunicações, cartas ou notificações enviadas ao Fundo nos termos
                    deste instrumento devem ser emitidas com cópia para a Administradora com “Aviso
                    de Recebimento” expedido pela Empresa Brasileira de Correios e Telégrafos (“A.R.”),
                    ou por e-mail com comprovante de recebimento, para o e-mail indicado na Cláusula
                    9.1 acima, sob pena de não serem consideradas recebidas pelo Fundo.
                    9.3. Os documentos e as comunicações, assim como os meios físicos que contenham
                    documentos ou comunicações, serão considerados recebidos quando entregues, sob
                    protocolo ou mediante A.R., nos endereços acima, ou quando da confirmação do
                    recebimento da transmissão via e-mail ou outro meio de transmissão eletrônica. Para
                    os fins desta Cláusula, será considerada válida a confirmação do recebimento via facsímile ou via e-mail ainda que emitida pela Parte que tenha transmitido a mensagem,
                    desde que o comprovante tenha sido expedido a partir do equipamento utilizado na
                    transmissão e que de tal equipamento constem informações suficientes à
                    identificação do emissor e do destinatário da comunicação, bem como da data do
                    envio.
                    Cláusula Décima: Das Disposições Finais
                    10.1. O Cedente e o Fundo reconhecem que estas Condições Gerais de Cessão, em
                    conjunto com a respectiva Formalização Eletrônica de Cessão constituem título
                    executivo extrajudicial para todos os fins e efeitos do artigo 784, inciso III, da Lei nº
                    13.105, de 16 de março de 2015, conforme alterada (o “Código de Processo
                    Civil”), reconhecendo, desde já, a liquidez e certeza de quaisquer obrigações
                    pecuniárias previstas neste instrumento que venham a ser cobradas por meio de
                    processo de execução por quantia certa contra devedor solvente.
                    10.2. Todas as disposições contidas neste instrumento que se caracterizem como
                    obrigação de fazer ou não fazer a ser cumprida pelo Fundo deverão ser consideradas,
                    salvo referência expressa em contrário, como de responsabilidade exclusiva da
                    Administradora e/ou do Custodiante.
                    10.2.1. O presente instrumento de Condições Gerais de Cessão substitui qualquer
                    acordo verbal ou escrito anterior entre as Partes e deve ser regido em conformidade
                    com o Contrato de Credenciamento.
                    10.3. Observados os prazos estabelecidos neste instrumento, e exceto se previsto de
                    maneira diversa neste instrumento, as obrigações de fazer e não fazer aqui previstas
                    serão exigíveis no prazo de 1 (um) Dia Útil contado do recebimento, pelas partes, da
                    notificação que constituir a respectiva Parte em mora, ficando facultada à Parte
                    credora a adoção das medidas judiciais necessárias (i) à tutela específica; ou (ii) à
                    obtenção do resultado prático equivalente, por meio das medidas a que se refere o
                    parágrafo 1º do artigo 536 do Código de Processo Civil.
                    10.4. As Partes desde já expressamente reconhecem que o comprovante de
                    recebimento da notificação mencionada na Cláusula 10.3 acima, acompanhado dos
                    documentos que a tenham fundamentado, será bastante para instruir o pedido de
                    tutela específica da obrigação descumprida.
                    10.5. O presente instrumento vigorará pelo prazo de duração do Fundo, ficando
                    ressalvado o disposto nas Cláusulas Sexta, Sétima e Oitava acima, bem como as
                    hipóteses de liquidação antecipada do Fundo previstas no Regulamento.
                    10.6. Toda e qualquer modificação deste instrumento somente será válida e eficaz
                    se feita por escrito e registrada em competente Cartório de Registro de Títulos e
                    Documentos, sendo que todos os custos decorrentes deste instrumento para sua
                    perfeita formalização, conforme estabelecido em lei, inclusive registro, serão de
                    responsabilidade e deverão ser pagos pelo Fundo.
                    10.7. Exceto pelas relações comerciais e obrigacionais ora estabelecidas, este
                    instrumento não cria nem estabelece qualquer relação comercial e/ou de
                    exclusividade entre o Cedente, o Fundo, e demais instituições envolvidas.
                    10.8. Exceto conforme expressamente previsto neste instrumento, este instrumento
                    em caráter é irrevogável e irretratável, obrigando-se os Cedentes e o Fundo ao seu
                    fiel, pontual e integral cumprimento, por si e seus sucessores, a qualquer título.
                    10.9. Os anexos a este instrumento (“Anexos”) são dele parte integrante e
                    inseparável. Em caso de divergência entre o teor e/ou sua interpretação do
                    instrumento e de seus Anexos, prevalecerão as disposições deste instrumento, dado
                    o caráter complementar dos Anexos. Reconhecem as Partes a unicidade e
                    incindibilidade das disposições do instrumento e dos Anexos, que deverão ser
                    interpretados de forma harmônica e sistemática, tendo como parâmetro a natureza
                    do negócio celebrado entre as Partes.
                    10.10. Se, em decorrência de qualquer decisão judicial irrecorrível, qualquer
                    disposição ou termo deste instrumento for declarada nula, inválida, inexigível ou for
                    anulável, tal nulidade, invalidade, inexequibilidade ou anulabilidade não prejudicará
                    a vigência das demais cláusulas deste instrumento não atingidas pela declaração de
                    nulidade, invalidade, inexequibilidade ou anulabilidade.
                    10.11. A tolerância e as concessões recíprocas entre as Partes terão caráter eventual
                    e transitório e não configurarão, em qualquer hipótese, renúncia, transigência,
                    remissão, perda, modificação, redução ou ampliação de qualquer direito, faculdade,
                    privilégio, prerrogativa ou poderes conferidos a qualquer das Partes nos termos deste
                    instrumento, assim como, quando havidas, o serão, expressamente, sem o intuito
                    de novar as obrigações aqui previstas.
                    10.12. O presente instrumento constitui o único e integral acordo entre as Partes
                    acerca dos direitos e obrigações nele estabelecidos, substituindo todos os outros
                    documentos, cartas, memorandos ou propostas entre as Partes, bem como os
                    entendimentos orais mantidos entre as Partes, anteriores à presente data.
                    10.13. Salvo disposição em contrário prevista neste instrumento, é expressamente
                    vedada a cessão a terceiros, por qualquer das Partes, dos direitos e obrigações nele
                    previstos.
                    10.14. As Partes declaram, conjunta e expressamente, que o presente instrumento
                    é estabelecido respeitando-se os princípios de probidade e de boa-fé, por livre,
                    consciente e firme manifestação de vontade das partes e em perfeita relação de
                    equidade.
                    10.15. Observados os termos e as condições contidos no presente instrumento, o
                    Cedente, o Custodiante e o Fundo acordam em envidar seus melhores esforços de
                    modo a adotar ou garantir a adoção das medidas ou dos atos que venham a ser
                    necessários ou convenientes de acordo com a legislação aplicável de modo a cumprir
                    e observar o disposto no presente instrumento.
                    10.16. Os títulos e cabeçalhos contidos no presente instrumento visam
                    exclusivamente à referência e não deverão afetar os direitos das partes do presente
                    instrumento.
                    10.17. O presente Contrato será regido e interpretado em conformidade com as leis
                    da República Federativa do Brasil.
                    10.18. As Partes neste ato elegem o Foro da Cidade de São Paulo, Estado de São
                    Paulo, com expressa exclusão de qualquer outro, ainda que privilegiado, como
                    competente para dirimir quaisquer dúvidas e/ou questões oriundas deste
                    instrumento ou das Formalizações Eletrônicas de Cessão.
                    São Paulo, 28 de maio de 2021
                    ANEXO I: Das Definições
                    **Condições Gerais de Promessa de Cessão e Aquisição de Direitos Creditórios e
                    Outras Avenças**
                    Os termos e expressões, em maiúscula, em sua forma singular ou plural, utilizados
                    no presente instrumento e seus Anexos e neles não definidos têm o mesmo
                    significado que lhes é atribuído no Regulamento e nas definições abaixo:
                    Administradora: significa a OLIVEIRA TRUST DISTRIBUIDORA DE TÍTULOS E
                    VALORES MOBILIÁRIOS S.A., sociedade devidamente autorizada pela CVM a
                    administrar fundos de investimento e gerir carteiras de valores mobiliários, por meio
                    do Ato Declaratório nº 6.696, de 21 de fevereiro de 2002, inscrita no CNPJ/ME sob o
                    n° 36.113.876/0001-91, com sede na Cidade do Rio de Janeiro, Estado do Rio de
                    Janeiro, na Avenida das Américas, nº 3434, Bloco 07, Sala 201, CEP 22640-100,
                    Barra da Tijuca.
                    Agente de Liquidação: significa a Pagar.me, na condição de agente de liquidação
                    contratado pelo Fundo, nos termos do Contrato de Agente de Liquidação.
                    Ambiente de Interoperabilidade: significa a base de controle e mecanismos de
                    trocas de informações padronizadas que viabilizam a interoperabilidade entre as
                    Entidades Registradoras, na forma prevista na Convenção entre Entidades
                    Registradoras.
                    Anexos: significa os anexos a este instrumento, dele partes integrantes e
                    inseparáveis.
                    BACEN: significa o Banco Central do Brasil.
                    A.R.: tem o significado previsto na Cláusula 9.2 deste instrumento de Condições
                    Gerais de Cessão.
                    Arquivo Eletrônico Analítico: será o arquivo que será elaborado pela Pagar.me
                    sempre que houver cessão de Direitos Creditórios ao Fundo e encaminhado ao
                    Administrador e ao Custodiante, em meio eletrônico, no layout previamente acordado
                    entre a Pagar.me, o Administrador e o Custodiante. O Arquivo Eletrônico Analítico
                    individualizará de forma analítica os Direitos Creditórios Cedidos.
                    Bandeiras: significa as instituições responsáveis por arranjos de pagamento
                    (instituidoras de arranjos de pagamento) e, quando for o caso, pelo uso da marca
                    associada ao arranjo de pagamento, detentoras dos direitos de propriedade e/ou
                    franqueadoras de suas marcas e logotipos que identificam os Instrumentos de
                    Pagamento, as quais são responsáveis por regulamentar e fiscalizar a emissão dos
                    Instrumentos de Pagamento, o credenciamento de Estabelecimentos Credenciados,
                    o uso e padrões operacionais e de segurança, nos termos da regulamentação
                    aplicável.
                    Cartão: significa o instrumento de pagamento apresentado sob a forma de cartão
                    plástico ou virtual, com funções de crédito e/ou débito, entre outras, emitido pelo
                    Emissor e dotado de número próprio, código de segurança, nome do Usuário-Final
                    (portador do Instrumento de Pagamento), prazo de validade e logomarca das
                    Bandeiras, marcas, nomes ou logomarcas admitidas no Sistema Pagar.me,
                    instrumento este utilizado em Transações de Pagamento no referido sistema.
                    Cedentes: significa os Estabelecimentos Credenciados que, de tempos em tempos,
                    e a seu exclusivo critério, cedem a totalidade ou parte de seus respectivos Direitos
                    Creditórios ao Fundo e, para tanto, tenham realizado e/ou venham a realizar
                    Formalização(ões) Eletrônica(s) de Cessão com o Fundo, representados por sua
                    mandatária Pagar.me, nos termos da Cláusula 3.3.
                    Cessão Fiduciária: é a cessão fiduciária de determinados Direitos Creditórios
                    outorgada, de tempos em tempos, pelos Cedentes em favor do Fundo para garantir
                    as obrigações dos Cedentes perante o Fundo sob a Promessa de Cessão, nos termos
                    da Cláusula 1.9.
                    Cessionário: significa o Fundo.
                    Chargeback: significa a contestação de Transação(ões) de Pagamento, seja no todo
                    ou em parte, por parte de Usuários-Finais, Emissores e/ou Devedor(es), que poderá
                    resultar na não realização do pagamento total ou no estorno do(s) crédito(s)
                    correspondente(s) efetuado(s) ao(s) respectivo(s) Cedente(s).
                    CMN: significa o Conselho Monetário Nacional.
                    Código Civil: significa a Lei nº 10.406, de 10 de janeiro de 2002, conforme alterada,
                    ou qualquer norma que venha a substituí-la.
                    Código de Processo Civil: significa a Lei nº 13.105, de 16 de março de 2015, com
                    suas alterações posteriores.
                    Conta Autorizada do Fundo: significa a conta corrente mantida pelo Fundo na
                    qual: (i) o Devedor efetuará a liquidação dos Direitos Creditórios Cedidos, conforme
                    domicílio bancário indicado pelo Agente de Liquidação, por meio de uma Entidade
                    Registradora, no Sistema de Registro, conforme aplicável; e (ii) serão depositados
                    os recursos provenientes da liquidação dos Direitos Creditórios Inadimplidos.
                    Condições Gerais de Cessão: significa este instrumento de “Condições Gerais de
                    Promessa de Cessão e Aquisição de Direitos Creditórios e Outras Avenças”, bem como
                    seus respectivos aditamentos a serem registrados no competente Cartório de
                    Registro de Títulos e Documentos, que tem por objeto estabelecer as condições gerais
                    da promessa de cessão dos Direitos Creditórios Elegíveis, por parte dos Cedentes, ao
                    Fundo.
                    Contrato de Agente de Liquidação: significa o “Contrato de Prestação de Serviços
                    de Agente de Liquidação de Direitos Creditórios e Outras Avenças”, celebrado entre
                    o Administrador, em nome do Fundo e o Agente de Liquidação, com a interveniência
                    do Custodiante para regular a prestação, pelo Agente de Liquidação, dos serviços de
                    liquidação e compensação dos Direitos Creditórios Cedidos, bem como seus
                    respectivos aditamentos.
                    Contrato de Credenciamento: significa o “Anexo I aos Termos Gerais de
                    Contratação de Produtos e Serviços de Pagamento” da Pagar.me, a ser registrado no
                    competente Cartório de Registro de Títulos e Documentos de São Paulo, conforme
                    aditado e/ou substituído de tempos em tempos, por meio do qual os
                    Estabelecimentos Credenciados aderem aos termos e condições gerais da prestação
                    de serviços prestados pela Pagar.me aos Estabelecimentos Credenciados, bem como
                    outorgam poderes à Pagar.me para formalizar, em nome dos Estabelecimentos
                    Credenciados, a cessão de Direitos Creditórios Elegíveis ao Fundo.
                    Convenção entre Entidades Registradoras: significa a convenção entre as
                    entidades registradoras, nos termos da Resolução CMN n° 4.734, que, dentre outras
                    matérias, define as regras para o Ambiente de Interoperabilidade.
                    Critérios de Elegibilidade: significa os critérios que todo e qualquer Direito
                    Creditório deverá atender cumulativamente para que possa ser adquirido pelo Fundo,
                    conforme definido na Cláusula 1.1.2 deste instrumento de Condições Gerais de
                    Cessão.
                    Custodiante: significa a Administradora.
                    CVM: significa a Comissão de Valores Mobiliários.
                    Data de Pagamento do Preço de Aquisição Inicial: significa a data na qual é
                    realizado o pagamento da primeira parcela do Preço de Aquisição pelos Direitos
                    Creditórios Elegíveis aos respectivos Cedentes, sendo transferidos tais valores aos
                    Cedentes, conforme previsto nestas Condições Gerais de Cessão.
                    Data de Pagamento do Preço de Aquisição Final: significa a respectiva data de
                    vencimento dos Direitos Creditórios Elegíveis, que será a data na qual é realizado o
                    pagamento da parcela final do Preço de Aquisição pelos Direitos Creditórios Elegíveis
                    aos respectivos Cedentes, sendo transferidos tais valores aos Cedentes, conforme
                    previsto nestas Condições Gerais de Cessão.
                    Devedor: significa a Pagar.me.
                    Dia Útil: significa qualquer dia que não seja sábado, domingo ou feriado declarado
                    nacional.
                    Direitos Creditórios: significa os direitos creditórios de tempos em tempos detidos
                    pelos Estabelecimentos Credenciados, originários de Transações de Pagamento
                    realizadas pelos Usuários-Finais com a utilização de Instrumentos de Pagamento,
                    operacionalizadas pelo Sistema Pagar.me, para a aquisição de bens ou serviços nos
                    Estabelecimentos Credenciados, devidos pelo Devedor, e, quando aplicável e após o
                    início da vigência da Resolução CMN 4.734/19 e da Circular BCB 3.952/19 e conforme
                    aplicável, estarão organizadas e formalizadas em formato de U.R. registradas nos
                    Sistemas de Registro.
                    Direitos Creditórios Cedidos: significa os Direitos Creditórios Elegíveis cedidos
                    pelos Cedentes ao Fundo, observados cumulativamente os Critérios de Elegibilidade
                    e a Política de Investimento do Fundo, nos termos do Contrato de Credenciamento,
                    dessas Condições Gerais de Cessão e Formalização(ões) Eletrônica(s) de Cessão e
                    demais Documentos Comprobatórios.
                    Direitos Creditórios Cedidos Inadimplidos: significa os Direitos Creditórios
                    Cedidos cujos respectivos Devedores estejam em atraso no cumprimento de suas
                    respectivas obrigações contratuais.
                    Direitos Creditórios Elegíveis: significa os Direitos Creditórios que atendam aos
                    Critérios de Elegibilidade.
                    Documentos Adicionais: são (a) os registros eletrônicos, padronizados pelo
                    Sistema Pagar.me preenchidos pelos Estabelecimentos Credenciados por meio de
                    equipamentos e/ou software de processamento de informações (POS - points of sale,
                    PDV – pontos de venda ou equipamento com tecnologia semelhante), que se conecte
                    à rede do Sistema Pagar.me e que realize a captura de Transações de Pagamento,
                    entre outras funções; (b) as ligações telefônicas gravadas e/ou e-mails dos
                    Estabelecimentos Credenciados para a Pagar.me, com objetivo de solicitar a
                    antecipação dos valores referentes às Transações de Pagamento; e (c) outros
                    documentos, adicionais aos Documentos Comprobatórios, que poderão ser
                    necessários em discussões sobre a existência e exequibilidade dos Direitos
                    Creditórios Cedidos.
                    Documentos Comprobatórios: significa os documentos comprobatórios do lastro
                    dos Direitos Creditórios, cujo processo de originação compete aos Estabelecimentos
                    Credenciados, e que compreendem, conjuntamente: (a) os Contratos de
                    Credenciamento e seus respectivos aditamentos; (b) as Condições Gerais de Cessão;
                    (c) os Instrumentos de Aceite; e (d) arquivo eletrônico, registros eletrônicos, extrato
                    ou documento semelhante emitido e disponibilizado por uma Entidade Registradora,
                    na forma da Convenção entre Entidades Registradoras, comprovando o registro das
                    cessão de Direito Creditório Elegível em favor do Fundo dos Direitos Creditórios
                    Elegíveis, no Sistema de Registro, quando aplicável.
                    Emissores: significa as Pessoas (instituições financeiras e/ou instituições de
                    pagamento) devidamente autorizadas pelo BACEN e licenciadas pelas Bandeiras a
                    emitir moeda eletrônica e/ou Instrumentos de Pagamento (inclusive Cartões), com
                    validade no Brasil, nos termos da legislação aplicável do CMN e BACEN.
                    Entidade Registradora: significa as entidades autorizadas pelo BACEN a exercer a
                    atividade de registro de recebíveis de Arranjos de Pagamentos, nos termos da
                    Resolução CMN 4.734/19.
                    Estabelecimentos Credenciados: significa os estabelecimentos comerciais,
                    subcredenciadores ou profissionais autônomos, localizados no Brasil, devidamente
                    credenciados pela Pagar.me e que tenham aderido e anuído ao Contrato de
                    Credenciamento com a Pagar.me e aos termos e condições do presente instrumento
                    por meio do Contrato de Credenciamento.
                    Formalização Eletrônica de Cessão: significa a conclusão do processo de oferta e
                    cessão de Direitos Creditórios Elegíveis ao Fundo, mediante a conclusão das
                    seguintes etapas: (A) solicitação, pelo Estabelecimento Credenciado da cessão de
                    Direitos Creditórios Elegíveis, nos termos destas Condições Gerais de Cessão e do
                    Contrato de Credenciamento; (B) envio, pela Pagar.me, do arquivo contendo lista de
                    Direitos Creditórios Elegíveis para o Fundo, que deverá conter (i) elementos
                    suficientes para identificação dos Direitos Creditórios Elegíveis (B1) de forma
                    agregada por (a) Cedente; (b) Devedor; (c) Bandeira; (d) data de vencimento; e (e)
                    valor de face agregado; ou, (B2) conforme o caso, de forma agregada por (a)
                    Devedor; (b) Bandeira; (c) data de vencimento; e (d) valor de face agregado; e (ii)
                    do valor do respectivo Preço de Aquisição; e (C) aquisição, pelo Fundo, destes
                    Direitos Creditórios Elegíveis mediante retorno da lista de Direitos Creditórios
                    Elegíveis do Cedente.
                    Fundo: significa o TAPSO FUNDO DE INVESTIMENTO EM DIREITOS
                    CREDITÓRIOS, constituído sob a forma de condomínio fechado, regido pelo seu
                    Regulamento, sendo disciplinado pela Resolução CMN 2.907, pela Instrução CVM
                    356/01 e pelas demais disposições legais e regulamentares que lhe forem aplicáveis.
                    Informações Confidenciais: tem o significado previsto na Cláusula 8.1 deste
                    instrumento de Condições Gerais de Cessão.
                    Instrução CVM 356/01: significa a Instrução nº 356, emitida pela CVM em 17 de
                    dezembro de 2001, conforme alterada, que regulamenta a constituição e o
                    funcionamento dos fundos de investimento em direitos creditórios e dos fundos de
                    investimento em cotas de fundos de investimento em direitos creditórios.
                    Instrumento de Aceite: é o “Instrumento de Aceite” elaborado substancialmente
                    na forma prevista do Anexo II deste instrumento de Condições Gerais de Cessão,
                    preenchido e enviado pelo Administrador ao Devedor, no qual o respectivo Devedor
                    declara ciência do valor devido oriundo dos Direitos Creditórios Cedidos em um
                    determinado Dia Útil pelos respectivos Cedentes (representados por sua mandatária
                    Pagar.me) ao Fundo, diariamente, na forma estabelecida no Regulamento.
                    Instrumentos de Pagamento: significa todo(s) e qual(is)quer dispositivo(s),
                    conjunto(s) de procedimentos (incluindo, mas não se limitando a instrumento(s)
                    físico(s) ou eletrônico(s) com funções de pagamento, inclusive Cartões), que
                    venha(m) a ser aceito(s) em Transações de Pagamento no Sistema Pagar.me.
                    Parte e/ou Partes: significa, individualmente ou em conjunto, o Cedente e o Fundo.
                    Pessoa: significa qualquer pessoa física ou jurídica, sociedade, associação, joint
                    venture, sociedades anônimas, fundos de investimento, organizações ou entidades
                    sem personalidade jurídica ou autoridade governamental.
                    Preço de Aquisição: significa, com relação aos Direitos Creditórios, o preço a ser
                    pago pelo Fundo a um Cedente em decorrência da aquisição de tais Direitos
                    Creditórios, conforme estabelecido nas Formalizações Eletrônicas de Cessão, a ser
                    acordado entre o respectivo Cedente, representado pela Pagar.me, conforme previsto
                    no Contrato de Credenciamento, e o Fundo ao tempo de cada cessão, segundo
                    critérios e parâmetros de mercado vigentes à época, levando em conta, dentre outros
                    fatores, o valor dos Direitos Creditórios a serem cedidos ao Fundo, a existência (ou
                    não) da Promessa de Cessão, a outorga (ou não) da Cessão Fiduciária e o prazo de
                    vencimento dos Direitos Creditórios a serem cedidos. O Preço de Aquisição poderá
                    ser pago em 1 (uma) ou mais parcelas, conforme acordado com o Cedente.
                    Promessa de Cessão: é a promessa de cessão de determinados Direitos Creditórios
                    realizada, de tempos em tempos, pelos Cedentes em favor do Fundo, garantida pela
                    Cessão Fiduciária, caso assim optado pelo Cedente.
                    Regulamento: significa o regulamento do Fundo, registrado no 1º Oficial de Registro
                    de Títulos e Documentos da Cidade do Rio de Janeiro, Estado do Rio de Janeiro.
                    Representantes: significa as pessoas definidas na Cláusula 8.1 deste instrumento.
                    Resolução CMN 2.907: significa a Resolução nº 2.907, expedida pelo Conselho
                    Monetário Nacional em 29 de novembro de 2001.
                    Resolução CMN 4.734/19: significa a Resolução do CMN nº 4.734, de 27 de junho
                    de 2017 ou qualquer outra norma que venha a substituí-la.
                    Sistema de Registro: significa a plataforma de comunicação com uma Entidade
                    Registradora por meio da qual determinados titulares dos Direitos Creditórios terão
                    acesso, a qualquer tempo, às informações dos Direitos Creditórios de sua
                    titularidade, bem como poderão efetuar o registro das cessões de Direitos
                    Creditórios. O Sistema de Registro deverá integrar a o Ambiente de
                    Interoperabilidade, conforme as especificações e requisitos discriminados em tais
                    normas e na Convenção entre Entidades Registradoras.
                    Sistema Pagar.me: significa o conjunto de pessoas, tecnologias e procedimentos
                    disponibilizados pela Pagar.me, necessários à habilitação de Estabelecimentos
                    Credenciados, aceitação dos Instrumentos de Pagamento, captura, transmissão,
                    processamento e liquidação das Transações de Pagamento e à aceitação e
                    operacionalização de outros produtos e serviços relacionados a tais atividades.
                    Pagar.me: significa a PAGAR.ME INSTITUIÇÃO DE PAGAMENTO S.A., sociedade
                    anônima com sede na Cidade de São Paulo, Estado de São Paulo, na Rua Fidêncio
                    Ramos, nº 308, Torre A, conjunto 91, Vila Olímpia, CEP 04551-902, inscrita no
                    CNPJ/ME sob nº 18.727.053/0001-74.
                    Termo de Cessão Fiduciária: significa o termo de Cessão Fiduciária de tempos em
                    tempos celebrado entre o Fundo e um Cedente, formalizando a constituição da
                    Cessão Fiduciária, indicando os respectivos Direitos Creditórios objeto da Cessão
                    Fiduciária, nos termos do Anexo II.
                    Transação de Pagamento: significa a operação de pagamento, pelo Usuário-Final,
                    pela aquisição de bens, produtos e/ou serviços junto ao respectivo Estabelecimento
                    Credenciado, mediante a utilização de quaisquer Instrumentos de Pagamento.
                    U.R. ou U.R.s.: significa cada unidade de recebível composta por recebíveis de
                    Arranjo de Pagamento, caracterizados, nos termos da Circular BACEN 3.952/19,
                    pelo(a) mesmo(a): (a) número de inscrição no CNPJ/ME ou no CPF/ME do Cedente;
                    (b) identificação do arranjo de pagamento (Bandeiras); (c) identificação da
                    Credenciadora (i.e., o Devedor); e (d) data de liquidação (vencimento).
                    Usuários-Finais: significa as pessoas físicas ou jurídicas que utilizam um
                    Instrumento de Pagamento das Bandeiras para a realização de uma Transação de
                    Pagamento.
                    ANEXO II – Modelo De Instrumento De Aceite
                    **Condições Gerais de Promessa de Cessão e Aquisição de Direitos Creditórios e
                    Outras Avenças**
                    INSTRUMENTO DE ACEITE Nº [•] **
                    A PAGAR.ME INSTITUIÇÃO DE PAGAMENTO S.A., sociedade anônima com sede
                    na Cidade de São Paulo, Estado de São Paulo, na Rua Fidêncio Ramos, nº 308, Torre
                    A, conjunto 91, Vila Olímpia, CEP 04551-902, inscrita no inscrito no Cadastro
                    Nacional das Pessoas Jurídicas do Ministério da Economia (“CNPJ/ME”) sob nº
                    18.727.053/0001-74, neste ato representada na forma de seu estatuto social, vem,
                    nos termos das Condições Gerais de Promessa de Cessão e Aquisição de Direitos
                    Creditórios e Outras Avenças anexa aos Termos Gerais de Contratação de Produtos
                    e Serviços de Pagamento, a ser registrado no competente Cartório de Registro de
                    Títulos e Documentos de São Paulo, conforme aditado, na qualidade de única
                    devedora dos Direitos Creditórios identificados no Anexo I e no respectivo Arquivo
                    Eletrônico Analítico enviado pela Pagar.me, cedidos pelos Estabelecimentos
                    Credenciados, nesta data, pelo valor total de R$ [•] ([•] reais) ao TAPSO FUNDO
                    DE INVESTIMENTO EM DIREITOS CREDITÓRIOS (“Fundo”), inscrito no
                    CNPJ/ME sob o nº 26.287.464/0001-14, registrado na Comissão de Valores
                    Mobiliários (“CVM”), constituído sob a forma de condomínio fechado, regido pela
                    Instrução CVM nº 356, de 17 de dezembro de 2001, conforme alterada, e pelo
                    Regulamento do Fundo, datado de 23 de maio de 2017, conforme alterado, neste ato
                    representado por sua administradora, OLIVEIRA TRUST DISTRIBUIDORA DE
                    TÍTULOS E VALORES MOBILIÁRIOS S.A., sociedade por ações com sede na
                    cidade do Rio de Janeiro, estado do Rio de Janeiro, na Av. das Américas, nº 3434,
                    Bloco 07, sala 201, CEP 22640-102, Barra da Tijuca, inscrita no CNPJ/ME sob o nº
                    36.113.876/0001-91, na condição de administradora e custodiante da carteira do
                    Fundo, e, para fins do disposto no art. 290 do Código Civil, declara-se notificada da
                    ocorrência da Cessão de Direitos Creditórios ocorrida em [•] de [•] de 20[•], confirma
                    ser a única devedora dos referidos Direitos Creditórios Cedidos e confirma, ainda, ter
                    operacionalizado o pagamento do Preço de Aquisição a cada um dos Cedentes.
                    São Paulo, [•] de [•] de 20[•].
                    PAGAR.ME INSTITUIÇÃO DE PAGAMENTO S.A.
                    Devedora dos Direitos Creditórios Cedidos listados no Anexo I
                    TAPSO FUNDO DE INVESTIMENTO EM DIREITOS CREDITÓRIOS, neste ato
                    representado por seu administrador a Oliveira Trust DTVM S.A.
                    Testemunhas:
                    Nome:
                    CPF:
                    Nome:
                    CPF:
                    ANEXO I: Relação de Direitos Creditórios Cedidos
                    ANEXO III – Modelo de Termo de Cessão Fiduciária
                    **Condições Gerais de Promessa de Cessão e Aquisição de Direitos Creditórios e
                    Outras Avenças**
                    A PAGAR.ME INSTITUIÇÃO DE PAGAMENTO S.A. sociedade anônima com sede
                    na Cidade de São Paulo, Estado de São Paulo, na Rua Fidêncio Ramos, nº 308, Torre
                    A, conjunto 91, Vila Olímpia, CEP 04551-902, inscrita no inscrito no Cadastro
                    Nacional das Pessoas Jurídicas do Ministério da Fazenda (“CNPJ/ME”) sob nº
                    18.727.053/0001-74, neste ato representada na forma de seu estatuto social, nos
                    termos das Condições Gerais de Promessa de Cessão e Aquisição de Direitos
                    Creditórios e Outras Avenças anexa ao Anexo I aos Termos Gerais de Contratação de
                    Produtos e Serviços de Pagamento, a ser registrado no competente Cartório de
                    Registro de Títulos e Documentos de São Paulo, conforme aditado (“Condições
                    Gerais de Cessão”), na qualidade de representante dos Estabelecimentos
                    Credenciados identificados no Anexo A e do TAPSO FUNDO DE INVESTIMENTO
                    EM DIREITOS CREDITÓRIOS (“Fundo”), inscrito no CNPJ/MF sob o nº
                    26.287.464/0001-14, registrado na Comissão de Valores Mobiliários (“CVM”),
                    constituído sob a forma de condomínio fechado, regido pela Instrução CVM nº 356,
                    de 17 de dezembro de 2001, conforme alterada, e pelo Regulamento do Fundo,
                    datado de 23 de maio de 2017, conforme alterado, neste ato representado por sua
                    administradora, OLIVEIRA TRUST DISTRIBUIDORA DE TÍTULOS E VALORES
                    MOBILIÁRIOS S.A., sociedade por ações com sede na cidade do Rio de Janeiro,
                    estado do Rio de Janeiro, na Av. das Américas, nº 3434, Bloco 07, sala 201, CEP
                    22640-102, Barra da Tijuca, inscrita no CNPJ/MF sob o nº 36.113.876/0001-91, na
                    condição de administradora e custodiante da carteira do Fundo, vem, formalizar a
                    cessão fiduciária dos Direitos Creditórios identificados no Anexo A, nos termos da
                    Cláusula 1.9 das Condições Gerais de Cessão, para garantia das obrigações
                    relacionadas à Promessa de Cessão, assumidas pelo respectivo Estabelecimento
                    Credenciado perante o Fundo, conforme descritas no Anexo A.
                    São Paulo, [•] de [•] de 20[•].
                    PAGAR.ME INSTITUIÇÃO DE PAGAMENTO S.A.
                    Mandatária dos Estabelecimentos Credenciados identificados no Anexo A
                    TAPSO FUNDO DE INVESTIMENTO EM DIREITOS CREDITÓRIOS, neste ato
                    representado pela Pagar.me InsiuçPagamentos S.A.
                    Testemunhas:
                    Nome:
                    CPF:
                    Nome:
                    CPF:
                    Anexo A: Lista de Estabelecimentos Comerciais, Obrigações Garantidas e
                    Direitos Creditórios Cedidos Fiduciariamente
                    CPF/CNPJ do Cedente Descrição das
                    Obrigações Garantidas
                    Identificação dos
                    Direitos Creditórios
                    Cedidos
                    Fiduciariamente
                    [•] Obrigação do Cedente
                    sob a Promessa de
                    Cessão, com as
                    seguintes características:
                    (i) estimativa do total da
                    dívida: [•];
                    (ii) o prazo: [•]; e
                    (iii) a taxa de juros: [não
                    aplicável].
                    Todos os Direitos
                    Creditórios futuros
                    originados pelos
                    Estabelecimentos
                    Comerciais em até [prazo]
                    a contar desta data.
                    (restante da página intencionalmente deixado em branco)
                    APÊNDICE II
                    (Condições Gerais de Promessa de Cessão e Aquisição de
                    Direitos Creditórios e Outras Avenças – TAPSO II FUNDO DE INVESTIMENTO EM
                    DIREITOS CREDITÓRIOS)
                    CONDIÇÕES GERAIS DE PROMESSA DE CESSÃO E AQUISIÇÃO DE DIREITOS
                    CREDITÓRIOS E OUTRAS AVENÇAS
                    O TAPSO II FUNDO DE INVESTIMENTO EM DIREITOS CREDITÓRIOS (“Fundo”
                    ou “Cessionário”), inscrito no Cadastro Nacional da Pessoa Jurídica do Ministério da
                    Economia (“CNPJ/ME”) sob o nº 37.262.902/0001-06, registrado na Comissão de
                    Valores Mobiliários (“CVM”), constituído sob a forma de condomínio fechado, regido
                    pela Instrução CVM nº 356, de 17 de dezembro de 2001, conforme alterada
                    (“Instrução CVM 356/01”), e representado na forma do Regulamento do Fundo
                    (“Regulamento”), por sua instituição administradora, OLIVEIRA TRUST
                    DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS S.A., com sede na
                    Cidade do Rio de Janeiro, Estado do Rio de Janeiro, na Av. das Américas, nº 3434,
                    Bloco 7, Sala 201, Barra da Tijuca, CEP 22640-100, inscrita no CNPJ/ME sob o nº
                    36.113.876/0001-91, devidamente autorizada pela CVM para o exercício profissional
                    de administração e gestão de carteiras de valores mobiliários pelo Ato Declaratório
                    CVM nº 6696, de 21 de fevereiro de 2002 (a “Administradora”), neste ato
                    representada na forma de seu Estatuto Social, resolve estabelecer as condições
                    gerais para as cessões de direitos creditórios que poderão ser realizadas de tempos
                    em tempos pelos Estabelecimentos Credenciados que tenham aderido aos Termos
                    Gerais de Contratação de Produtos e Serviços de Pagamento da Pagar.me, a ser
                    registrado no competente Cartório de Registro de Títulos e Documentos de São Paulo
                    (“Contrato de Credenciamento”), conforme aditado ou substituído de tempos em
                    tempos, por meio do presente instrumento de Condições Gerais de Promessa de
                    Cessão e Aquisição de Direitos Creditórios e Outras Avenças (“Condições Gerais de
                    Cessão”), que será regido pelas cláusulas e condições a seguir:
                    CONSIDERANDO QUE:
                    (i) em decorrência das Transações de Pagamento realizadas entre os Cedentes e
                    Usuários-Finais, os Cedentes, de tempos em tempos, detêm Direitos Creditórios em
                    face de Devedores, oriundos da aquisição, pelos Usuários-Finais, de bens ou serviços
                    oferecidos pelos Cedentes, quando da utilização de Instrumentos de Pagamento de
                    qualquer Bandeira e Emissor;
                    (ii) os Cedentes poderão, a seu exclusivo critério, ofertar e ceder ao Fundo os Direitos
                    Creditórios que estejam em conformidade com os Critérios de Elegibilidade, conforme
                    disciplina o Regulamento do Fundo, o Contrato de Credenciamento e este
                    instrumento de Condições Gerais de Cessão, com o intuito de adiantar recebíveis de
                    titularidade do Cedente;
                    (iii) o Fundo, por sua vez, deseja adquirir os respectivos Direitos Creditórios dos
                    Cedentes, desde que atendidos, de forma cumulativa, todos os Critérios de
                    Elegibilidade e desde que haja disponibilidades suficientes para a aquisição destes
                    Direitos Creditórios, conforme disciplina o Regulamento do Fundo e este instrumento
                    de Condições Gerais de Cessão;
                    (iv) os Cedentes, por meio de cada Formalização Eletrônica de Cessão iniciada pelo
                    Agente de Liquidação através de consulta ao Sistema de Registro, na forma do
                    Contrato de Agente de Liquidação, cederão ao Fundo os Direitos Creditórios
                    especificados na respectiva Formalização Eletrônica de Cessão, nos termos dos
                    artigos 286 e seguintes da Lei nº 10.406, de 10 de janeiro de 2002, conforme
                    alterada (“Código Civil”), com tudo o que tais Direitos Creditórios representam;
                    (v) o Custodiante prestará os serviços de custódia para o Fundo, conforme previstos
                    no artigo 38 da Instrução CVM 356/01, incluindo a verificação do cumprimento dos
                    Critérios de Elegibilidade;
                    (vi) conforme disposto neste instrumento de Condições Gerais de Cessão, os Direitos
                    Creditórios são oriundos de Transações de Pagamento realizadas por Usuários-Finais,
                    quando da utilização de Instrumentos de Pagamento de qualquer Bandeira e de
                    qualquer Emissor, nos Estabelecimentos Credenciados, operacionalizados pelos
                    Devedores;
                    (vii) os Cedentes são e serão até o momento da cessão, os únicos e legítimos
                    proprietários dos Direitos Creditórios Elegíveis; e
                    (viii) para os fins do presente instrumento de Condições Gerais de Cessão, toda e
                    qualquer referência ao Fundo também deverá ser interpretada como uma referência
                    à Administradora, na qualidade de representante do Fundo.
                    Todos os termos e expressões, iniciados por letras maiúsculas, em sua forma singular
                    ou plural, utilizados no presente instrumento e seus anexos, e neles não definidos,
                    têm os respectivos significados que lhes são atribuídos no Anexo I a este instrumento
                    de Condições Gerais de Cessão e, caso não previstos no referido Anexo I, têm o
                    mesmo significado que lhes é atribuído no Regulamento.
                    Cláusula Primeira: Da Promessa de Cessão, da Cessão E Aquisição De
                    Direitos Creditórios
                    1.1. Sem prejuízo da possibilidade de o Cedente optar pela Promessa de Cessão, os
                    Cedentes, mediante a oferta de Direitos Creditórios, nos termos da Cláusula 1.1.2(i)
                    abaixo, uma vez concluída a Formalização Eletrônica de Cessão, cederão e
                    transferirão ao Fundo, de tempos em tempos, em caráter definitivo e sem qualquer
                    coobrigação ou responsabilidade pela solvência do respectivo Devedor, durante o
                    prazo de duração do Fundo, os Direitos Creditórios existentes, válidos, eficazes, livres
                    e desimpedidos, detidos contra o Devedor, em decorrência de Transações de
                    Pagamento realizadas por Usuários-Finais com a utilização de Instrumentos de
                    Pagamento, processados por Credenciadoras ou Subcredenciadoras.
                    1.1.1. O Fundo terá a faculdade de adquirir os Direitos Creditórios ofertados pelos
                    Cedentes, tenham eles sido objeto de Promessa de Cessão ou não, nos termos deste
                    instrumento de Condições Gerais de Cessão, do Contrato de Credenciamento e da
                    Formalização Eletrônica de Cessão, de forma a cumprir com a sua política de
                    investimento, conforme descrito no Regulamento, sendo que, em caso de opção pela
                    Promessa de Cessão, as obrigações dos Cedentes de ceder os Direitos Creditórios
                    sob a Promessa de Cessão serão garantidas pela Cessão Fiduciária.
                    1.1.2. Os Direitos Creditórios a serem cedidos ao Fundo, observado o disposto na
                    Cláusula 1.2 abaixo, deverão obedecer aos Critérios de Elegibilidade, a serem
                    verificados e validados pelo Custodiante. Todos e quaisquer Direitos Creditórios
                    oferecidos pelos Cedentes, operacionalizados e representados pela Pagar.me, ao
                    Fundo deverão observar, individualmente e de forma cumulativa, aos seguintes
                    critérios, os quais deverão ser verificados e confirmados pelo Custodiante, na forma
                    prevista no Capítulo Cinco do Regulamento, sem prejuízo de outros critérios que
                    venham a ser estipulados no Regulamento do Fundo (“Critérios de Elegibilidade”):
                    (i) os Direitos Creditórios deverão ser colocados à disposição pelos respectivos
                    Cedentes para venda, por meio de qualquer canal de comunicação disponibilizado
                    pela Pagar.me, que o representará na qualidade de mandatário para fins da cessão;
                    (ii) os Direitos Creditórios deverão ser provenientes de Transações de Pagamento
                    realizadas por Usuários-Finais utilizando-se de Instrumentos de Pagamento,
                    operacionalizados pelos Devedores para a aquisição de bens, produtos e serviços
                    ofertados pelos respectivos Cedentes; e
                    (iii) os Direitos Creditórios deverão ser expressos em moeda corrente nacional.
                    1.1.3. Sem prejuízo da verificação, pelo Custodiante, dos Critérios de Elegibilidade,
                    como condição à cessão dos Direitos Creditórios ao Fundo, a Pagar.me deverá
                    confirmar junto ao Sistema de Registro na data de oferta dos Direitos Creditórios
                    Elegíveis ao Fundo que os Direitos Creditórios sejam representados por U.R. que não
                    tenha previamente sido objeto de negociação, alienação, objeto de garantia ou ônus
                    de qualquer natureza pelo respectivo Cedente, exceto, conforme o caso, pela
                    Promessa de Cessão e pela Cessão Fiduciária eventualmente registradas em benefício
                    do Fundo (“Condição de Cessão”).
                    1.1.3.1. Nos termos do artigo 34, inciso IX, da Instrução CVM 356/01, a
                    Administradora possui regras e procedimentos adequados, por escrito e passíveis de
                    verificação, que lhe permitam verificar o cumprimento, pela Pagar.me, da obrigação
                    de validar os correspondentes Direitos Creditórios em relação à Condição de Cessão
                    estabelecida nestas Condições Gerais de Cessão.
                    1.2. Os Direitos Creditórios Cedidos ficarão vinculados a estas Condições Gerais de
                    Cessão, em caráter irrevogável e irretratável, observadas as disposições aplicáveis
                    desta Cláusula Primeira.
                    1.2.1. O Cedente poderá, nos termos do Contrato de Credenciamento, realizar a
                    Promessa de Cessão de Direitos Creditórios que venham a ser originados durante
                    determinado período ao Fundo, hipótese em que será aplicável o disposto na Cláusula
                    1.9 abaixo. Nesse caso, os Direitos Creditórios objetos da Promessa de Cessão
                    estarão vinculados até que haja manifestação em sentido contrário pelo respectivo
                    Cedente, solicitando a liberação, pelo Fundo, da Promessa de Cessão e,
                    consequentemente, da Cessão Fiduciária em Garantia. A partir da comunicação feita
                    pelo Cedente à Pagar.me, todas as disposições referentes à Promessa de Cessão
                    serão aplicáveis, ficando efetivamente constituída a Promessa de Cessão.
                    1.2.2. Não obstante a aquisição pelo Fundo de Direitos Creditórios Elegíveis que
                    sejam correspondentes à totalidade de uma dada U.R., o Fundo e o Cedente,
                    representado pela Pagar.me, poderão acordar sobre a regra de pagamento ao Fundo
                    em relação à respectiva U.R., considerando o Valor de Referência, de modo que o
                    Fundo poderá fazer jus ao recebimento de valor inferior ao valor total da respectiva
                    U.R., independentemente de ser o efetivo titular.
                    1.2.3. O Cedente poderá, sem necessidade de comunicação ou anuência prévia do
                    Fundo e/ou da Pagar.me, negociar com terceiros as parcelas de determinada U.R.
                    representativa de Direitos Creditórios adquiridos pelo Fundo que superem o Valor de
                    Referência acordado com o Cedente. Não obstante a autorização aqui prevista, o
                    Cedente não poderá, de forma alguma, ceder, onerar ou criar qualquer tipo de
                    gravame sobre U.R.s adquiridas pelo Fundo de forma que possa se afetar o
                    recebimento prioritário, pelo Fundo, do Valor de Referência, conforme indicado no
                    Sistema de Registro.
                    1.3. Os Cedentes não responderão pela solvência do Devedor, na qualidade de
                    devedor dos Direitos Creditórios Cedidos, mas apenas pela boa formalização, correta
                    constituição, existência, liquidez e certeza destes Direitos Creditórios adquiridos pelo
                    Fundo, nos termos deste instrumento de Condições Gerais de Cessão.
                    1.3.1. A Administradora, o Custodiante, a Gestora e o Controlador de Ativos não
                    respondem pela solvência, originação, validade, existência, liquidez, certeza e
                    exequibilidade dos Direitos Creditórios adquiridos pelo Fundo.
                    1.4. Pela cessão dos Direitos Creditórios, o Fundo, por meio da Pagar.me, enquanto
                    Agente de Liquidação, pagará o Preço de Aquisição na forma, nos valores e nas datas
                    acordadas com o Cedente (sendo a data acordada para pagamento da primeira
                    parcela do Preço de Aquisição, a “Data de Pagamento do Preço de Aquisição
                    Inicial”). O Preço de Aquisição indicado na respectiva Formalização Eletrônica de
                    Cessão, será acordado com o respectivo Cedente, representado pela Pagar.me, nos
                    termos do Contrato de Credenciamento, ao tempo de cada cessão segundo critérios
                    e parâmetros de mercado vigentes à época, podendo ser pago em 1 (uma) ou mais
                    parcelas, conforme previamente acordado entre Pagar.me e o respectivo Cedente.
                    No caso de pagamento em mais de uma parcela do Preço de Aquisição, o Fundo, por
                    meio da Pagar.me, enquanto Agente de Liquidação, efetuará o pagamento do saldo
                    remanescente do Preço de Aquisição na data de vencimento do respectivo Direito
                    Creditório (“Data de Pagamento do Preço de Aquisição Final”), se aplicável.
                    1.4.1. Fica desde já estabelecido que, caso, na Data de Pagamento do Preço de
                    Aquisição Final, o Fundo não tenha recebido o pagamento integral dos Direitos
                    Creditórios Cedidos pelo respectivo Cedente em virtude exclusivamente de
                    Chargebacks ou de outros eventos não relacionados ao risco de crédito do Devedor
                    que resultem na má-formalização dos respectivos Direitos Creditórios Cedidos, o
                    Preço de Aquisição será ajustado pela Pagar.me, de forma a deduzir o valor
                    equivalente ao montante não pago em virtude de tais eventos, se aplicável conforme
                    a Cláusula 1.4 acima.
                    1.4.2. O valor deduzido e não pago, na forma da Cláusula 1.4.1 acima, deverá ser
                    devolvido pela Pagar.me ao Fundo a título de ajuste de Preço de Aquisição.
                    1.5. O Preço de Aquisição será pago pelo Fundo ao Cedente, por intermédio do Agente
                    de Liquidação, por meio de Transferência Eletrônica Disponível – TED ou outros
                    mecanismos de transferência equivalentes, à conta indicada pelo Agente de
                    Liquidação, o qual terá recebido integralmente referido valor por conta e ordem do
                    Cedente, nos termos da Cláusula 1.5.1 abaixo, e deverá transferir tal valor, na
                    quantidade de parcelas e na periodicidade previamente acordada com o Cedente, via
                    Transferência Eletrônica Disponível – TED ou outros mecanismos de transferência
                    equivalentes na respectiva Data de Pagamento do Preço de Aquisição Inicial e Data
                    de Pagamento do Preço de Aquisição Final, conforme aplicável, de maneira que o
                    Cedente receba tais valores em conta de sua titularidade conforme procedimento
                    disposto no Contrato de Credenciamento e demais documentos aplicáveis.
                    1.5.1. O Agente de Liquidação receberá o Preço de Aquisição na condição de fiel
                    depositário, nos termos do Artigo 627 e ss. do Código Civil, e nos termos do Contrato
                    de Agente de Liquidação, realizando o pagamento das parcelas do Preço de Aquisição
                    na forma e periodicidade previamente acordada com o Cedente.
                    1.6. Nos termos do artigo 287 do Código Civil e conforme estabelecido neste
                    instrumento, a cessão, pelo Cedente, dos Direitos Creditórios ao Fundo, abrangerá
                    não somente os Direitos Creditórios como também tudo que os Direitos Creditórios
                    representam, inclusive reajustes monetários, juros e encargos, bem como todos os
                    direitos, ações, coobrigações e garantias assegurados ao Cedente por força dos
                    Direitos Creditórios, nos termos dos Documentos Comprobatórios.
                    1.7. A Promessa de Cessão, a Cessão Fiduciária e a cessão dos Direitos Creditórios
                    ao Fundo, quando aplicável, serão registradas em Sistema de Registro, observado
                    que tal registro será operacionalizado pela Pagar.me, na forma descrita no Contrato
                    de Agente de Liquidação, conforme procedimentos operacionais da Entidade
                    Registradora para o referido registro.
                    1.7.1. Os registros da Promessa de Cessão, da Cessão Fiduciária e das cessões dos
                    Direitos Creditórios Cedidos serão realizados em formato de U.R.
                    1.8. Caso, por qualquer motivo, os seguintes eventos ocorram de forma cumulativa:
                    (a) não seja possível a efetivação da cessão dos Direitos Creditórios ofertados ao
                    Fundo; (b) o registro da respectiva cessão já tenha sido realizado em favor do Fundo;
                    e (c) os Direitos Creditórios ofertados cuja cessão não tenha se efetivado tenham
                    sido subsequentemente cedidos a qualquer terceiro, o Cedente e o Fundo autorizam
                    a Pagar.me a realizar a atualização do registro da cessão dos referidos Direitos
                    Creditórios no Sistema de Registro diretamente para demonstrar a titularidade do
                    terceiro que vier a adquirir tais Direitos Creditórios.
                    1.9. Para assegurar cumprimento das obrigações assumidas pelos Cedentes no
                    âmbito da Promessa de Cessão, o Cedente, cede e transfere fiduciariamente em
                    garantia, conforme indicado no Termo de Cessão Fiduciária, a propriedade fiduciária,
                    o domínio resolúvel e a posse direta da totalidade dos Direitos Creditórios, em favor
                    do Fundo, nos termos dos artigos 1.361 e seguintes do Código Civil, do artigo 66-B,
                    §§ 3º, 4º e 5º da Lei nº 4.728, de 14 de julho de 1965, dos artigos 18 a 20 da Lei
                    nº 9.514, de 20 de novembro de 1997, e dos artigos 30 a 39 da Lei nº 10.931, bem
                    como das demais disposições legais e regulatórias aplicáveis.
                    1.9.1. O Cedente, representado pela Pagar.me, assinará, de tempos em tempos,
                    Termos de Cessão Fiduciária, os quais confirmarão a presente garantia e adesão às
                    Condições Gerais de Cessão, sendo que em cada Termo de Cessão Fiduciária estarão
                    indicadas a obrigação garantida, o prazo, o local, os Direitos Creditórios objeto da
                    Cessão Fiduciária, bem como quaisquer outros requisitos legais para perfeita
                    constituição da Cessão Fiduciária.
                    1.9.1.1. O Cedente, representado pela Pagar.me, declarará em cada Termo de
                    Cessão Fiduciária que os Direitos Creditórios de tempos em tempos dados em
                    garantia da presente Promessa de Cessão encontram-se livres e desembaraçados de
                    quaisquer ônus e gravames, de natureza real ou pessoal, sem concorrência de
                    terceiros, permanecendo íntegros e em pleno vigor até o cumprimento das
                    obrigações assumidas na Promessa de Cessão e que a garantia dada no âmbito
                    destas Condições Gerais de Cessão é plenamente válida e eficaz entre as partes.
                    1.9.2. Para fins de operacionalização do disposto na Cláusula 1.9, o Cedente autoriza
                    e consente, expressamente e desde já, que o Fundo, por intermédio da Pagar.me,
                    registre ônus e gravames, conforme aplicável, sobre os Direitos Creditórios objeto da
                    Promessa de Cessão e de cada Termo de Cessão Fiduciária nos Sistemas de Registro.
                    1.9.3. Na qualidade de credor fiduciário, poderá o Fundo exercer, sobre os Direitos
                    Creditórios dados em garantia, todos os direitos discriminados na legislação e
                    regulamentação aplicáveis.
                    1.9.4. O Cedente obriga-se a entregar ao Fundo, para compor a presente Cessão
                    Fiduciária, novos Direitos Creditórios no valor necessário para manter a garantia boa,
                    firme e valiosa, conforme indicado em cada Termo de Cessão Fiduciária.
                    1.9.5. Enquanto subsistirem obrigações referentes à Promessa de Cessão, obriga-se
                    o Cedente, a não sacar, ceder ou endossar a terceiros os Direitos Creditórios, e/ou,
                    ainda, ceder, alienar, descontar, transacionar, dar em garantia a quaisquer terceiros
                    ou constituir quaisquer ônus e gravames sobre os Direitos Creditórios dados em
                    garantia, bem como iniciar a prática de quaisquer destes atos.
                    1.9.6. A Pagar.me deverá providenciar a desconstituição de ônus e gravames sobre
                    os Direitos Creditórios (i) caso o respectivo Direito Creditório tenha sido efetivamente
                    adquirido pelo Fundo, (ii) na eventualidade de o Fundo não exercer o direito de
                    aquisição dos respectivos Direitos Creditórios, por qualquer motivo; e (iii) mediante
                    solicitação do Cedente para o cancelamento da renovação da Promessa de Cessão.
                    Cláusula Segunda: Da Cobrança Dos Direitos Creditórios Cedidos
                    2.1. Os Direitos Creditórios Cedidos, nos termos estabelecidos neste instrumento de
                    Condições Gerais de Cessão, da respectiva Formalização Eletrônica de Cessão,
                    pertencerão ao Fundo a partir da data de efetivação da respectiva Formalização
                    Eletrônica de Cessão e o Fundo terá o direito de cobrar e receber o Valor de
                    Referência dos Direitos Creditórios Cedidos, agindo por sua conta própria ou por meio
                    de terceiros, estando o Agente de Liquidação autorizado a indicar a Conta Autorizada
                    do Fundo como domicílio bancário de recebimento dos Direitos Creditórios Cedidos
                    no Sistema de Registro.
                    2.2. Nos termos do Artigo 38, inciso VII da Instrução CVM 356/01, o Custodiante
                    será responsável por cobrar e receber, em nome do Fundo, os valores relativos aos
                    Direitos Creditórios Cedidos em suas respectivas datas de vencimento, conforme
                    regras estabelecidas no Regulamento e no Contrato de Agente de Liquidação.
                    Cláusula Terceira: Da Operacionalização Da Aquisição E Da Liquidação Dos
                    Direitos Creditórios
                    3.1. Como regra geral, cada operação de cessão de Direitos Creditórios Elegíveis ao
                    Fundo será considerada formalizada e regular após (i) Formalização Eletrônica de
                    Cessão; (ii) celebração (mediante assinatura física ou digital) do Termo de Cessão
                    pelo respectivo Agente de Liquidação em conjunto com o Fundo; (iii) pagamento,
                    pelo Fundo, do Preço de Aquisição ao respectivo Agente de Liquidação, o qual será
                    posteriormente pago ao respectivo Cedente (conforme acordado e previsto neste
                    instrumento de Condições Gerais de Cessão e nos Contratos de Agente de
                    Liquidação); e (iv) registro da respectiva cessão dos Direitos Creditórios em nome
                    do Fundo no Sistema de Registro, conforme previsto na Cláusula 1.7 acima,
                    observado o Valor de Referência.
                    3.1.1. O Fundo e a Pagar.me, representando os Cedentes, deverão celebrar
                    diariamente um termo de cessão (“Termo de Cessão”), elaborado substancialmente
                    na forma do Anexo II deste Contrato, formalizando as cessões realizadas por meio
                    das Formalizações Eletrônicas de Cessão em cada data que houver aquisição de
                    Direitos Creditórios Elegíveis. O Termo de Cessão será gerado e preenchido pelo
                    Administrador, para assinatura pela Pagar.me, representando os Cedentes, e pelo
                    Fundo.
                    3.1.1.1. Os Termos de Cessão somente serão registrados nos Registros de Títulos e
                    Documentos do domicílio do Devedor e do Fundo nas seguintes hipóteses: (i)
                    exigência expressa de autoridade governamental ou do Poder Judiciário; (ii)
                    deliberação específica em Assembleia Geral; (iii) decretação de evento de
                    intervenção, liquidação, falência, ou outros eventos similares de um Devedor, nos
                    termos da legislação e regulamentação aplicáveis; (iv) inadimplemento de qualquer
                    dos Devedores de Direitos Creditórios Cedidos; ou, ainda, (v) no caso de
                    superveniência de legislação que exija o registro para fins da existência ou validade
                    das cessões.
                    3.2. Todos os pagamentos relacionados aos Direitos Creditórios deverão ser
                    realizados pelos Devedores por meio da compensação e liquidação financeira dos
                    pagamentos dos Direitos Creditórios ao Fundo, que serão realizados na conta mantida
                    pelo Fundo no Banco Itaú (341), Agência 0911, nº 04604-3 , a qual será indicada
                    como domicílio bancário do Fundo no Sistema de Registro, ou em outra conta de
                    titularidade do Fundo, desde que previamente indicada pelo Fundo, por intermédio
                    do Agente de Liquidação, mediante alteração de seu domicílio bancário no Sistema
                    de Registro (“Conta Autorizada do Fundo”), inclusive quando o pagamento ocorrer
                    em decorrência da realização de esforços de cobrança, judicial e/ou extrajudicial, de
                    acordo com a legislação aplicável, para o recebimento de parte e/ou da totalidade
                    dos pagamentos referentes a tais Direitos Creditórios Cedidos.
                    3.3. Os Cedentes constituem, neste ato, de forma irrevogável e irretratável, nos
                    termos dos artigos 684 e 685 da Lei nº 10.406, de 10 de janeiro de 2002 (o Código
                    Civil Brasileiro), a Pagar.me sua bastante procuradora para, em seu nome e por sua
                    conta, negociar os termos, ceder e transferir definitivamente os Direitos Creditórios
                    ao Fundo, podendo para tanto firmar contratos, instrumentos, termos de cessão e/ou
                    qualquer outro documento, bem como praticar quaisquer atos que sejam necessários
                    para formalizar e validar a transferência dos Direitos Creditórios, ficando
                    expressamente prevista a dispensa de a Pagar.me prestar contas para os Cedentes,
                    nos termos da legislação civil.
                    Cláusula Quarta: Das Declarações
                    4.1. Os Cedentes, devidamente autorizados na forma de seus atos constitutivos,
                    conforme o caso, se responsabilizarão, civil e criminalmente, pela existência,
                    legalidade, legitimidade, veracidade e correta formalização dos Direitos Creditórios
                    adquiridos pelo Fundo, nos termos deste instrumento e de cada Formalização
                    Eletrônica de Cessão, devendo declarar e assegurar, ainda, ao Fundo, ao Custodiante
                    e à Administradora, individualmente, na data de formalização de cada Formalização
                    Eletrônica de Cessão, que:
                    (a) é uma pessoa jurídica ou pessoa física, conforme o caso, validamente registrada,
                    constituída e organizada e em funcionamento de acordo com a legislação da
                    República Federativa do Brasil e regulamentação aplicáveis em vigor;
                    (b) estas Condições Gerais de Cessão, a assunção e o cumprimento das obrigações
                    delas decorrentes, em especial as relativas à cessão e transferência dos Direitos
                    Creditórios, não dependem de quaisquer autorizações dos seus órgãos deliberativos
                    e executivos (assembleia geral, conselho de administração e diretoria), assim como
                    de qualquer deliberação prévia de acionistas exigível por força de acordos de
                    acionistas, eventualmente arquivados em sua sede, tendo sido satisfeitos, dessa
                    forma, todos os requisitos legais e estatutários necessários para tanto;
                    (c) estas Condições Gerais de Cessão, a assunção e o cumprimento das obrigações
                    delas decorrentes não acarretam, direta ou indiretamente, no descumprimento, total
                    ou parcial, de (i) quaisquer contratos, instrumentos ou documento, de qualquer
                    natureza, firmados anteriormente à data da oferta dos Direitos Creditórios nos
                    termos deste instrumento, dos quais seja parte ou aos quais estejam vinculados, a
                    qualquer título, quaisquer dos bens corpóreos, incorpóreos, tangíveis, intangíveis,
                    móveis ou imóveis de sua propriedade, em especial os Direitos Creditórios; (ii)
                    qualquer norma legal ou regulamentar a que o Cedente, ou quaisquer dos bens
                    corpóreos, incorpóreos, tangíveis, intangíveis, móveis ou imóveis de sua propriedade
                    estejam sujeitos; e (iii) qualquer ordem, decisão, ainda que liminar, judicial ou
                    administrativa que afete o Cedente, ou quaisquer dos bens corpóreos, incorpóreos,
                    tangíveis, intangíveis, móveis ou imóveis de sua propriedade;
                    (d) os Direitos Creditórios que, por força deste instrumento e de cada Formalização
                    Eletrônica de Cessão, são cedidos ao Fundo, são de sua legítima e exclusiva
                    titularidade, existentes, válidos, eficazes, livres, desimpedidos e desembaraçados de
                    quaisquer ônus, gravames ou restrições ou fatos impeditivos de qualquer natureza,
                    que, de qualquer modo, possam obstar a cessão e o pleno exercício, pelo Fundo, das
                    prerrogativas decorrentes da titularidade dos Direitos Creditórios adquiridos nos
                    termos deste instrumento e de cada Formalização Eletrônica de Cessão, inclusive
                    com relação a terceiros, não sendo objeto de nenhuma outra alienação, penhor,
                    cessão ou transferência, compromisso de alienação e/ou oneração;
                    (e) os Direitos Creditórios ofertados ao Fundo sob estas Condições Gerais de Cessão
                    são representados por U.R.s que não tenham previamente sido objeto de negociação,
                    alienação, objeto de garantia ou ônus de qualquer natureza pelo respectivo Cedente;
                    (f) não tem conhecimento, na presente data, de ações pessoais ou reais de natureza
                    cível, comercial, fiscal ou trabalhista, instituídas em face do Cedente em qualquer
                    tribunal no Brasil ou no exterior e que envolvam ou tenham por objetivo os Direitos
                    Creditórios, de forma que possam obstar a cessão e o pleno exercício, pelo Fundo,
                    das prerrogativas decorrentes da titularidade dos Direitos Creditórios adquiridos nos
                    termos deste instrumento e de cada Formalização Eletrônica de Cessão;
                    (g) a cessão e a transferência de Direitos Creditórios, nos termos deste instrumento
                    e de cada Formalização Eletrônica de Cessão, não estabelecem, direta ou
                    indiretamente, qualquer relação de consumo ou comercial entre o Cedente e o Fundo
                    ou entre o Cedente, o Custodiante e/ou a Administradora;
                    (h) que não está sob intervenção e que não tem conhecimento de qualquer processo
                    que possa acarretar sua insolvência, falência, intervenção ou liquidação, judicial ou
                    extrajudicial ou procedimento similar;
                    (i) outorgou autorização à Pagar.me, conferindo-lhe plenos poderes de representação
                    no âmbito do presente instrumento ou autorizando-a para que esta possa, sem
                    quaisquer restrições, realizar as seguintes atividades, sem a exclusão de outras que
                    venham a ser necessárias para correta formalização e aperfeiçoamento da cessão
                    dos Direitos Creditórios Elegíveis ao Fundo: (i) consulta dos Direitos Creditórios de
                    sua titularidade nos Sistemas de Registro; (ii) assinatura, seja física ou eletrônica,
                    nos termos da legislação aplicável, de quaisquer documentos necessários para
                    correta formalização da cessão, da Promessa de Cessão e da Cessão Fiduciária dos
                    Direitos Creditórios ao Fundo; e (iii) realização de qualquer ordem ou comando a
                    uma Entidade Registradora para que esta realize a alteração da titularidade dos
                    Direitos Creditórios Cedidos em favor do Fundo, nos termos destas Condições Gerais
                    de Cessão, no Sistema de Registro; e
                    (j) caso o Cedente não seja um usuário final recebedor, conforme definido na
                    regulamentação aplicável, o Cedente declara que, nos termos do art. 12-A da Lei
                    12.865/13, o produto de cada cessão de Direitos Creditórios realizada sob estas
                    Condições Gerais de Cessão (i.e., o Preço de Aquisição recebido pelo Cedente) será
                    destinado para cumprir as obrigações de liquidação entre os participantes do Arranjo
                    de Pagamento referentes às Transações de Pagamento até o recebimento pelo
                    usuário final recebedor, conforme as regras do Arranjo de Pagamento, respeitados
                    os descontos necessários. As Partes reconhecem que o eventual descumprimento
                    desta declaração, pelo Cedente, não poderá ser oposto ao Fundo para invalidar ou
                    tornar qualquer cessão de Direitos Creditórios realizada sob estas Condições Gerais
                    de Cessão ineficaz, tampouco resultar em qualquer prejuízo ao Fundo, ou, ainda,
                    descaracterizar qualquer cessão de Direitos Creditórios realizada sob estas Condições
                    Gerais de Cessão.
                    4.2. A Administradora, devidamente autorizada na forma do Regulamento, declara e
                    assegura, em nome do Fundo e, conforme o caso, devidamente autorizada na forma
                    de seu estatuto social, em seu próprio nome, que:
                    (a) o Fundo é uma comunhão de recursos validamente constituída sob a forma de
                    condomínio fechado, na forma da Resolução CMN 2.907 e da Instrução CVM 356/01;
                    (b) este instrumento e a assunção e o cumprimento das obrigações deste
                    decorrentes, assim como dos demais instrumentos legais relacionados com a cessão
                    e aquisição de Direitos Creditórios ora avençada, estão devidamente autorizados pelo
                    Regulamento, sendo que este instrumento e a assunção e o cumprimento das
                    obrigações dele decorrentes não acarretam, direta ou indiretamente, o
                    descumprimento, total ou parcial, de (i) quaisquer contratos, de qualquer natureza,
                    firmados anteriormente à data de oferta dos Direitos Creditórios nos termos deste
                    instrumento, dos quais o Fundo e/ou a Administradora seja parte; (ii) qualquer norma
                    legal ou regulamentar a que o Fundo e/ou a Administradora, ou quaisquer dos bens
                    corpóreos, incorpóreos, tangíveis, intangíveis, móveis ou imóveis de sua propriedade
                    estejam sujeitos; e (iii) qualquer ordem, decisão, ainda que liminar, judicial ou
                    administrativa que afete a Administradora;
                    (c) encontra-se técnica e operacionalmente habilitado e autorizado a prestar os
                    serviços de administração do Fundo, contando com todos os sistemas necessários ao
                    pleno e satisfatório exercício de suas funções, nos termos do Regulamento, dos
                    demais documentos relacionados ao Fundo e da legislação aplicável; e
                    (d) não está sob intervenção e que não tem conhecimento de qualquer processo que
                    possa acarretar sua insolvência, falência, intervenção ou liquidação, judicial ou
                    extrajudicial ou procedimento similar.
                    Cláusula Quinta: Das Obrigações Adicionais Dos Cedentes
                    5.1. Sem prejuízo das demais obrigações assumidas nos termos deste instrumento,
                    os Cedentes expressamente obrigar-se-ão, quando de cada cessão de Direitos
                    Creditórios Elegíveis ao Fundo, a:
                    (a) adotar todas as providências ao seu alcance para manter válidas e eficazes as
                    declarações contidas na Cláusula Quarta acima, e a manter o Fundo informado,
                    podendo tais comunicações serem feitas por meio da Pagar.me, na qualidade de
                    mandatária do Cedente, conforme disposto na Cláusula 3.3 acima, de qualquer ato
                    ou fato que possa afetar a validade de qualquer das referidas declarações, adotando
                    as medidas cabíveis para sanar ou evitar a invalidade de qualquer declaração;
                    (b) informar imediatamente à Administradora, podendo tais comunicações serem
                    feitas por meio da Pagar.me, na qualidade de mandatária do Cedente, acerca da
                    ocorrência de qualquer inadimplemento com relação a este instrumento; e
                    (c) autorizar a Pagar.me a enviar as informações destas Condições Gerais de Cessão
                    para o correspondente Sistema de Registro, para fins do registro das cessões
                    realizadas nos termos destas Condições Gerais de Cessão.
                    5.1.1. As obrigações previstas nesta Cláusula para as quais não tenha sido
                    estabelecido prazo específico serão exigíveis no prazo de 2 (dois) Dias Úteis, contado
                    do recebimento, pelo Cedente, de comunicação enviada por meio da Pagar.me, na
                    qualidade de mandatária do Cedente, pela Administradora ou pelo Fundo, nos termos
                    da Cláusula Décima abaixo, exigindo o cumprimento da respectiva obrigação.
                    Cláusula Sexta: Da Extinção
                    6.1. A eventual extinção deste instrumento de Condições Gerais de Cessão não
                    eximirá o Cedente do integral e pontual cumprimento das obrigações assumidas nos
                    termos deste instrumento com relação aos Direitos Creditórios cedidos anteriormente
                    à data de sua extinção, inclusive o disposto na Cláusula 5.1 acima, ou que se tornem
                    exigíveis em razão da extinção deste instrumento, assim como não prejudicará o
                    direito do Fundo de exigir, por todos os meios estabelecidos nos referidos
                    instrumentos contratuais, o cumprimento de tais obrigações.
                    Cláusula Sétima: Das Penalidades
                    7.1. O inadimplemento pelo Fundo de quaisquer das obrigações de pagamento
                    previstas neste instrumento caracterizará, de pleno direito, independentemente de
                    qualquer aviso, notificação ou interpelação judicial ou extrajudicial, a mora da Parte
                    inadimplente, sujeitando os montantes em atraso a juros de mora de 1% (um por
                    cento) ao mês e atualização monetária com base no IPC/FGV ou, na falta deste, outro
                    índice que legalmente o substitua, calculados pro rata temporis desde a data em que
                    o pagamento era devido até o seu integral recebimento pela Parte credora.
                    7.1.1. Não serão penalizáveis quaisquer atrasos que decorram de falhas de sistema,
                    os quais, não obstante, deverão diligenciar para a imediata correção de tais falhas,
                    ficando ressalvado que a Administradora e/ou o Custodiante estarão sujeitos às
                    penalidades previstas neste Contrato caso tais falhas persistam por mais de 1 (um)
                    Dia Útil, contados a partir da data prevista para cumprimento da obrigação.
                    7.2. O inadimplemento, por parte do Cedente, por dolo ou culpa, de qualquer das
                    obrigações de dar, fazer ou não fazer assumidas nos termos deste instrumento e de
                    cada Formalização Eletrônica de Cessão, do qual tenha sido notificado para
                    regularizar e não o faça no prazo estabelecido neste instrumento, ou assinado na
                    respectiva notificação e/ou aviso, prazo este que, em nenhuma hipótese, será inferior
                    a 2 (dois) Dias Úteis, ou, ainda, a identificação, pelo Fundo, de que qualquer
                    declaração prestada pelo Cedente é falsa, incorreta, errada, imprecisa ou incompleta,
                    obrigará o Cedente ao ressarcimento das perdas e danos incorridos pelo Fundo em
                    decorrência de tal inadimplemento e/ou falsidade, incorreção, erro, imprecisão ou
                    incompletude de declaração.
                    7.2.1. O Cedente ficará isento de tal penalidade no caso de inadimplementos que
                    decorram de atrasos por parte do Devedor e/ou falhas de sistemas da
                    Administradora, do Custodiante e/ou da Pagar.me.
                    Cláusula Oitava: Da Confidencialidade
                    8.1. O Cedente, o Fundo, a Administradora e demais Partes aqui mencionadas
                    obrigam-se a manter em sigilo e respeitar a confidencialidade dos dados e
                    informações, verbais ou escritas, relativos às operações e negócios das outras Partes
                    (incluindo, sem limitação, todos os segredos e/ou informações financeiras,
                    operacionais, econômicas, técnicas e jurídicas), dos contratos, pareceres e outros
                    documentos, bem como de quaisquer cópias ou registros dos mesmos, contidos em
                    qualquer meio físico e/ou eletrônico a que a referida Parte obrigada tiver acesso em
                    virtude deste instrumento (“Informações Confidenciais”), ficando desde já
                    estabelecido que (i) as Informações Confidenciais somente poderão ser divulgadas a
                    seus sócios, administradores, procuradores, consultores, prepostos e empregados,
                    presentes ou futuros, que precisem ter acesso às Informações Confidenciais em
                    virtude do cumprimento das obrigações estabelecidas neste instrumento
                    (“Representantes”); e (ii) que a divulgação a terceiros, direta ou indiretamente, no
                    todo ou em parte, isolada ou conjuntamente, no Brasil ou no exterior, por qualquer
                    meio, de quaisquer Informações Confidenciais dependerá de prévia e expressa
                    autorização, por escrito, da parte titular das respectivas Informações Confidenciais.
                    8.2. O Cedente, o Fundo, a Administradora e demais Partes aqui mencionadas
                    comprometem-se a não utilizar qualquer das Informações Confidenciais em proveito
                    próprio ou de quaisquer terceiros e responsabilizam-se pela violação das obrigações
                    previstas nesta Cláusula por parte de quaisquer dos Representantes.
                    8.3. Caso qualquer das Partes ou qualquer de seus Representantes sejam obrigados,
                    em virtude de lei, de decisão judicial ou por determinação de qualquer autoridade
                    governamental, a divulgar quaisquer das Informações Confidenciais, tal Parte, sem
                    prejuízo do atendimento tempestivo à determinação legal ou administrativa, deverá,
                    exceto no caso em que seja impedida em decorrência de determinada ordem judicial
                    ou norma, comunicar imediatamente as outras Partes a respeito dessa obrigação, de
                    modo que as Partes, se possível e em mútua cooperação, possam intentar as medidas
                    cabíveis, inclusive judiciais, para preservar as Informações Confidenciais. Caso as
                    medidas tomadas para preservar as Informações Confidenciais não tenham êxito,
                    deverá ser divulgada somente a parcela das Informações Confidenciais estritamente
                    necessária à satisfação do dever legal e/ou cumprimento de ordem judicial ou de
                    qualquer autoridade competente de divulgação das informações.
                    8.4. Excluem-se do compromisso de confidencialidade aqui previsto as informações:
                    (i) disponíveis para o público de outra forma que não pela divulgação destas por
                    qualquer das Partes ou por qualquer de seus Representantes; e (ii) que
                    comprovadamente já eram do conhecimento de uma ou de todas as Partes ou de
                    qualquer de seus Representantes antes da referida Parte obrigada ou seus
                    Representantes terem acesso em função deste instrumento.
                    8.5. O dever de confidencialidade previsto nesta Cláusula remanescerá ao término
                    da vigência deste instrumento entre um determinado Cedente e o Fundo pelo prazo
                    de 2 (dois) anos, estando seu descumprimento sujeito ao disposto neste instrumento
                    a qualquer tempo durante a vigência do prazo ora referido, inclusive após a extinção
                    ou a resolução deste instrumento.
                    Cláusula Nona: Das Comunicações
                    9.1. Todos os documentos, comunicações, consentimentos, notificações, solicitações
                    e outras formas de comunicação relativos ao presente instrumento ao Fundo, à
                    Administradora e/ou ao Custodiante serão realizados por escrito e serão enviados
                    por correspondência eletrônica ou entregues nos termos deste instrumento, devendo
                    ser encaminhados para o seguinte endereço ou e-mail:
                    OLIVEIRA TRUST DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS
                    S.A.
                    Av. das Américas, nº 3434, Bloco 7, Sala 201, Barra da Tijuca
                    CEP 22640-102 - Rio de Janeiro – RJ
                    At.: Sr. Alan Najman / Alexandre Freitas
                    E-mail: ger1.fundos@oliveiratrust.com / alexandre.freitas@oliveiratrust.com.br
                    Telefone: (21) 3514-0000
                    Com cópia para:
                    PAGAR.ME INSTITUIÇÃO DE PAGAMENTO S.A.
                    Rua Fidêncio Ramos, nº 308, Torre A, conjunto 91, Vila Olímpia
                    CEP 04551-902 - São Paulo – SP
                    At.: Tesouraria / DCM
                    E-mail: tesouraria@stone.com.br / opestruturadas@stone.com.br /
                    juridicobancos@stone.com.br / dcmestruturacao@stone.com.br
                    Telefone: (11) 3157-3197
                    9.2. Todas as comunicações, cartas ou notificações enviadas ao Fundo nos termos
                    deste instrumento devem ser emitidas com cópia para a Administradora com “Aviso
                    de Recebimento” expedido pela Empresa Brasileira de Correios e Telégrafos (“A.R.”),
                    ou por e-mail com comprovante de recebimento, para o e-mail indicado na Cláusula
                    9.1 acima, sob pena de não serem consideradas recebidas pelo Fundo.
                    9.3. Os documentos e as comunicações, assim como os meios físicos que contenham
                    documentos ou comunicações, serão considerados recebidos quando entregues, sob
                    protocolo ou mediante A.R., nos endereços acima, ou quando da confirmação do
                    recebimento da transmissão via e-mail ou outro meio de transmissão eletrônica. Para
                    os fins desta Cláusula, será considerada válida a confirmação do recebimento via facsímile ou via e-mail ainda que emitida pela Parte que tenha transmitido a mensagem,
                    desde que o comprovante tenha sido expedido a partir do equipamento utilizado na
                    transmissão e que de tal equipamento constem informações suficientes à
                    identificação do emissor e do destinatário da comunicação, bem como da data do
                    envio.
                    Cláusula Décima: Das Disposições Finais
                    10.1. O Cedente e o Fundo reconhecem que estas Condições Gerais de Cessão, em
                    conjunto com a respectiva Formalização Eletrônica de Cessão constituem título
                    executivo extrajudicial para todos os fins e efeitos do artigo 784, inciso III, da Lei nº
                    13.105, de 16 de março de 2015, conforme alterada (o “Código de Processo Civil”),
                    reconhecendo, desde já, a liquidez e certeza de quaisquer obrigações pecuniárias
                    previstas neste instrumento que venham a ser cobradas por meio de processo de
                    execução por quantia certa contra devedor solvente.
                    10.2. Todas as disposições contidas neste instrumento que se caracterizem como
                    obrigação de fazer ou não fazer a ser cumprida pelo Fundo deverão ser consideradas,
                    salvo referência expressa em contrário, como de responsabilidade exclusiva da
                    Administradora e/ou do Custodiante.
                    10.2.1. O presente instrumento de Condições Gerais de Cessão substitui qualquer
                    acordo verbal ou escrito anterior entre as Partes e deve ser regido em conformidade
                    com o Contrato de Credenciamento.
                    10.3. Observados os prazos estabelecidos neste instrumento, e exceto se previsto de
                    maneira diversa neste instrumento, as obrigações de fazer e não fazer aqui previstas
                    serão exigíveis no prazo de 1 (um) Dia Útil contado do recebimento, pelas partes, da
                    notificação que constituir a respectiva Parte em mora, ficando facultada à Parte
                    credora a adoção das medidas judiciais necessárias (i) à tutela específica; ou (ii) à
                    obtenção do resultado prático equivalente, por meio das medidas a que se refere o
                    parágrafo 1º do artigo 536 do Código de Processo Civil.
                    10.4. As Partes desde já expressamente reconhecem que o comprovante de
                    recebimento da notificação mencionada na Cláusula 10.3 acima, acompanhado dos
                    documentos que a tenham fundamentado, será bastante para instruir o pedido de
                    tutela específica da obrigação descumprida.
                    10.5. O presente instrumento vigorará pelo prazo de duração do Fundo, ficando
                    ressalvado o disposto nas Cláusulas Sexta, Sétima e Oitava acima, bem como as
                    hipóteses de liquidação antecipada do Fundo previstas no Regulamento.
                    10.6. Toda e qualquer modificação deste instrumento somente será válida e eficaz
                    se feita por escrito e registrada em competente Cartório de Registro de Títulos e
                    Documentos, sendo que todos os custos decorrentes deste instrumento para sua
                    perfeita formalização, conforme estabelecido em lei, inclusive registro, serão de
                    responsabilidade e deverão ser pagos pelo Fundo.
                    10.7. Exceto pelas relações comerciais e obrigacionais ora estabelecidas, este
                    instrumento não cria nem estabelece qualquer relação comercial e/ou de
                    exclusividade entre o Cedente, o Fundo, e demais instituições envolvidas.
                    10.8. Exceto conforme expressamente previsto neste instrumento, este instrumento
                    em caráter é irrevogável e irretratável, obrigando-se os Cedentes e o Fundo ao seu
                    fiel, pontual e integral cumprimento, por si e seus sucessores, a qualquer título.
                    10.9. Os anexos a este instrumento (“Anexos”) são dele parte integrante e
                    inseparável. Em caso de divergência entre o teor e/ou sua interpretação do
                    instrumento e de seus Anexos, prevalecerão as disposições deste instrumento, dado
                    o caráter complementar dos Anexos. Reconhecem as Partes a unicidade e
                    incindibilidade das disposições do instrumento e dos Anexos, que deverão ser
                    interpretados de forma harmônica e sistemática, tendo como parâmetro a natureza
                    do negócio celebrado entre as Partes.
                    10.10. Se, em decorrência de qualquer decisão judicial irrecorrível, qualquer
                    disposição ou termo deste instrumento for declarada nula, inválida, inexigível ou for
                    anulável, tal nulidade, invalidade, inexequibilidade ou anulabilidade não prejudicará
                    a vigência das demais cláusulas deste instrumento não atingidas pela declaração de
                    nulidade, invalidade, inexequibilidade ou anulabilidade.
                    10.11. A tolerância e as concessões recíprocas entre as Partes terão caráter eventual
                    e transitório e não configurarão, em qualquer hipótese, renúncia, transigência,
                    remissão, perda, modificação, redução ou ampliação de qualquer direito, faculdade,
                    privilégio, prerrogativa ou poderes conferidos a qualquer das Partes nos termos deste
                    instrumento, assim como, quando havidas, o serão, expressamente, sem o intuito
                    de novar as obrigações aqui previstas.
                    10.12. O presente instrumento constitui o único e integral acordo entre as Partes
                    acerca dos direitos e obrigações nele estabelecidos, substituindo todos os outros
                    documentos, cartas, memorandos ou propostas entre as Partes, bem como os
                    entendimentos orais mantidos entre as mesmas, anteriores à presente data.
                    10.13. Salvo disposição em contrário prevista neste instrumento, é expressamente
                    vedada a cessão a terceiros, por qualquer das Partes, dos direitos e obrigações nele
                    previstos.
                    10.14. As Partes declaram, conjunta e expressamente, que o presente instrumento
                    é estabelecido respeitando-se os princípios de probidade e de boa-fé, por livre,
                    consciente e firme manifestação de vontade das partes e em perfeita relação de
                    equidade.
                    10.15. Observados os termos e as condições contidos no presente instrumento, o
                    Cedente, o Custodiante e o Fundo acordam em envidar seus melhores esforços de
                    modo a adotar ou garantir a adoção das medidas ou dos atos que venham a ser
                    necessários ou convenientes de acordo com a legislação aplicável de modo a cumprir
                    e observar o disposto no presente instrumento.
                    10.16. Os títulos e cabeçalhos contidos no presente instrumento visam
                    exclusivamente à referência e não deverão afetar os direitos das partes do presente
                    instrumento.
                    10.17. O presente Contrato será regido e interpretado em conformidade com as leis
                    da República Federativa do Brasil.
                    10.18. As Partes neste ato elegem o Foro da Cidade de São Paulo, Estado de São
                    Paulo, com expressa exclusão de qualquer outro, ainda que privilegiado, como
                    competente para dirimir quaisquer dúvidas e/ou questões oriundas deste
                    instrumento ou das Formalizações Eletrônicas de Cessão.
                    São Paulo, 28 de maio de 2021
                    ANEXO I: Das Definições
                    Os termos e expressões, em maiúscula, em sua forma singular ou plural, utilizados
                    no presente instrumento e seus Anexos e neles não definidos têm o mesmo
                    significado que lhes é atribuído no Regulamento e nas definições abaixo:
                    Administradora: significa a OLIVEIRA TRUST DISTRIBUIDORA DE TÍTULOS E
                    VALORES MOBILIÁRIOS S.A., sociedade devidamente autorizada pela CVM a
                    administrar fundos de investimento e gerir carteiras de valores mobiliários, por meio
                    do Ato Declaratório nº 6.696, de 21 de fevereiro de 2002, inscrita no CNPJ/ME sob o
                    n° 36.113.876/0001-91, com sede na Cidade do Rio de Janeiro, Estado do Rio de
                    Janeiro, na Avenida das Américas, nº 3434, Bloco 07, Sala 201, CEP 22640-100,
                    Barra da Tijuca.
                    Agente de Liquidação: significa a Pagar.me, na condição de agente de liquidação
                    contratado pelo Fundo, nos termos do Contrato de Agente de Liquidação.
                    Ambiente de Interoperabilidade: significa a base de controle e mecanismos de
                    trocas de informações padronizadas que viabilizam a interoperabilidade entre as
                    Entidades Registradoras, na forma prevista na Convenção entre Entidades
                    Registradoras.
                    Anexos: significa os anexos a este instrumento, dele partes integrantes e
                    inseparáveis.
                    BACEN: significa o Banco Central do Brasil.
                    A.R.: tem o significado previsto na Cláusula 9.2 deste instrumento de Condições
                    Gerais de Cessão.
                    Bandeiras: significa as instituições responsáveis por arranjos de pagamento
                    (instituidoras de arranjos de pagamento) e, quando for o caso, pelo uso da marca
                    associada ao arranjo de pagamento, detentoras dos direitos de propriedade e/ou
                    franqueadoras de suas marcas e logotipos que identificam os Instrumentos de
                    Pagamento, as quais são responsáveis por regulamentar e fiscalizar a emissão dos
                    Instrumentos de Pagamento, o credenciamento de Estabelecimentos Credenciados,
                    o uso e padrões operacionais e de segurança, nos termos da regulamentação
                    aplicável.
                    Cartão: significa o instrumento de pagamento apresentado sob a forma de cartão
                    plástico ou virtual, com funções de crédito e/ou débito, entre outras, emitido pelo
                    Emissor e dotado de número próprio, código de segurança, nome do Usuário-Final
                    (portador do Instrumento de Pagamento), prazo de validade e logomarca das
                    Bandeiras, marcas, nomes ou logomarcas admitidas pelas Credenciadoras,
                    instrumento este utilizado em Transações de Pagamento nos sistemas das
                    Credenciadoras.
                    Cedentes: significa os Estabelecimentos Credenciados que, de tempos em tempos,
                    e a seu exclusivo critério, cedem seus respectivos Direitos Creditórios ao Fundo e,
                    para tanto, tenham realizado e/ou venham a realizar Formalização(ões) Eletrônica(s)
                    de Cessão com o Fundo, representados por sua mandatária Pagar.me, nos termos da
                    Cláusula 3.3.
                    Cessão Fiduciária: é a cessão fiduciária de determinados Direitos Creditórios
                    outorgada, de tempos em tempos, pelos Cedentes em favor do Fundo para garantir
                    as obrigações dos Cedentes perante o Fundo sob a Promessa de Cessão, nos termos
                    da Cláusula 1.9.
                    Cessionário: significa o Fundo.
                    Chargeback: significa a contestação de Transação(ões) de Pagamento, seja no todo
                    ou em parte, por parte de Usuários-Finais, Emissores e/ou Devedor(es), que poderá
                    resultar na não realização do pagamento total ou no estorno do(s) crédito(s)
                    correspondente(s) efetuado(s) ao(s) respectivo(s) Cedente(s).
                    CMN: significa o Conselho Monetário Nacional.
                    Código Civil: significa a Lei nº 10.406, de 10 de janeiro de 2002, conforme alterada,
                    ou qualquer norma que venha a substituí-la.
                    Código de Processo Civil: significa a Lei nº 13.105, de 16 de março de 2015, com
                    suas alterações posteriores.
                    Condição de Cessão: tem o significado que lhe é atribuído na Cláusula 1.1.3 acima.
                    Condições Gerais de Cessão: significa este instrumento de “Condições Gerais de
                    Promessa de Cessão e Aquisição de Direitos Creditórios e Outras Avenças”, bem como
                    seus respectivos aditamentos a serem registrados no competente Cartório de
                    Registro de Títulos e Documentos, que tem por objeto estabelecer as condições gerais
                    da promessa de cessão dos Direitos Creditórios Elegíveis, por parte dos Cedentes, ao
                    Fundo.
                    Conta Autorizada do Fundo: significa a conta corrente mantida pelo Fundo na
                    qual: (i) os respectivos Devedores efetuarão a liquidação dos Direitos Creditórios
                    Cedidos, conforme domicílio bancário indicado pelo Agente de Liquidação, por meio
                    de uma Entidade Registradora, no Sistema de Registro; e (ii) serão depositados os
                    recursos provenientes da liquidação dos Direitos Creditórios Inadimplidos.
                    Contrato de Agente de Liquidação: significa o “Contrato de Prestação de Serviços
                    de Agente de Liquidação de Direitos Creditórios e Outras Avenças”, celebrado entre
                    o Administrador, em nome do Fundo e o Agente de Liquidação, com a interveniência
                    do Custodiante para regular a prestação, pelo Agente de Liquidação, dos serviços de
                    liquidação e compensação dos Direitos Creditórios Cedidos, bem como seus
                    respectivos aditamentos.
                    Contrato de Credenciamento: significa o “Anexo I aos Termos Gerais de
                    Contratação de Produtos e Serviços de Pagamento” da Pagar.me, a ser registrado no
                    competente Cartório de Registro de Títulos e Documentos de São Paulo, conforme
                    aditado e/ou substituído de tempos em tempos, por meio do qual os
                    Estabelecimentos Credenciados aderem aos termos e condições gerais da prestação
                    de serviços prestados pela Pagar.me aos Estabelecimentos Credenciados, bem como
                    outorgam poderes à Pagar.me para formalizar, em nome dos Estabelecimentos
                    Credenciados, a cessão de Direitos Creditórios Elegíveis ao Fundo.
                    Convenção entre Entidades Registradoras: significa a convenção entre as
                    entidades registradoras, nos termos da Resolução CMN n° 4.734, que, dentre outras
                    matérias, define as regras para o Ambiente de Interoperabilidade.
                    Credenciadoras: são as instituições financeiras ou instituições de pagamento que
                    atuem como credenciadoras na captura e processamento de Transações de
                    Pagamento, e participam do processo de liquidação das Transações, sendo as
                    devedoras dos Direitos Creditórios.
                    Critérios de Elegibilidade: significa os critérios que todo e qualquer Direito
                    Creditório deverá atender cumulativamente para que possa ser adquirido pelo Fundo,
                    conforme definido na Cláusula 1.1.2 deste instrumento de Condições Gerais de
                    Cessão.
                    Custodiante: significa a Administradora.
                    CVM: significa a Comissão de Valores Mobiliários.
                    Data de Pagamento do Preço de Aquisição Inicial: significa a data na qual é
                    realizado o pagamento da primeira parcela do Preço de Aquisição pelos Direitos
                    Creditórios Elegíveis aos respectivos Cedentes, sendo transferidos tais valores aos
                    Cedentes, conforme previsto nestas Condições Gerais de Cessão.
                    Data de Pagamento do Preço de Aquisição Final: significa a respectiva data de
                    vencimento dos Direitos Creditórios Elegíveis, que será a data na qual é realizado o
                    pagamento da parcela final do Preço de Aquisição pelos Direitos Creditórios Elegíveis
                    aos respectivos Cedentes, sendo transferidos tais valores aos Cedentes, conforme
                    previsto nestas Condições Gerais de Cessão.
                    Devedores: as Credenciadoras e Subcredenciadoras que tenham processado as
                    respectivas Transações de Pagamento, conforme o caso, e que sejam devedores de
                    Direitos Creditórios Cedidos.
                    Dia Útil: significa qualquer dia que não seja sábado, domingo ou feriado declarado
                    nacional.
                    Direitos Creditórios: são os direitos creditórios de tempos em tempos detidos pelos
                    Estabelecimentos Credenciados contra uma Credenciadora ou uma
                    Subcredenciadora, representados por U.R.s registradas nos Sistemas de Registro,
                    originários de Transações de Pagamento realizadas pelos Usuários-Finais com a
                    utilização de Instrumentos de Pagamento, para a aquisição de bens ou serviços nos
                    Estabelecimentos Credenciados, após o desconto das taxas que constituem a
                    remuneração das Bandeiras, dos Emissores, das Credenciadoras e das
                    Subcredenciadoras.
                    Direitos Creditórios Cedidos: significa os Direitos Creditórios Elegíveis cedidos
                    pelos Cedentes ao Fundo, observados cumulativamente os Critérios de Elegibilidade
                    e a Política de Investimento do Fundo.
                    Direitos Creditórios Cedidos Inadimplidos: significa os Direitos Creditórios
                    Cedidos cujos respectivos Devedores estejam em atraso no cumprimento de suas
                    respectivas obrigações contratuais.
                    Direitos Creditórios Elegíveis: significa os Direitos Creditórios que atendam aos
                    Critérios de Elegibilidade.
                    Documentos Adicionais: são (i) as comunicações e/ou manifestações de vontade
                    dos Estabelecimentos Credenciados para a Pagar.me, com objetivo de solicitar a
                    antecipação dos valores referentes aos Direitos Creditórios; (ii) relatório de
                    conciliação preparado pelo Agente de Liquidação, que comprovam o pagamento do
                    Preço de Aquisição aos Cedentes, observado o disposto no Contrato de Agente de
                    Liquidação; e/ou (iii) outros documentos adicionais que poderão ser auxiliares em
                    discussões sobre a existência e exigibilidade, total ou parcial, dos Direitos Creditórios
                    Cedidos, bem como a titularidade dos Estabelecimentos Credenciados com relação a
                    estes.
                    Documentos Comprobatórios: significa os documentos comprobatórios do lastro
                    dos Direitos Creditórios, cujo processo de originação compete aos Estabelecimentos
                    Credenciados, e que compreendem, conjuntamente, e, conforme o caso: (i) as
                    Condições Gerais de Cessão; (ii) Termo de Cessão; e (iii) arquivo eletrônico,
                    registros eletrônicos, extrato ou documento semelhante emitido e disponibilizado por
                    uma Entidade Registradora, na forma da Convenção entre Entidades Registradoras,
                    comprovando o registro da cessão de Direitos Creditórios Elegíveis e evidenciando a
                    troca de titularidade, em favor do Fundo, dos Direitos Creditórios Elegíveis no
                    Sistema de Registro.
                    Emissores: significa as Pessoas (instituições financeiras e/ou instituições de
                    pagamento) devidamente autorizadas pelo BACEN e licenciadas pelas Bandeiras a
                    emitir moeda eletrônica e/ou Instrumentos de Pagamento (inclusive Cartões), com
                    validade no Brasil, nos termos da legislação aplicável do CMN e BACEN.
                    Entidade Registradora: significa as entidades autorizadas pelo BACEN a exercer a
                    atividade de registro de recebíveis de Arranjos de Pagamentos, nos termos da
                    Resolução CMN 4.734/19.
                    Estabelecimentos Credenciados: significa os estabelecimentos comerciais,
                    subcredenciadores ou profissionais autônomos, localizados no Brasil, devidamente
                    credenciados pela Pagar.me e que tenham aderido e anuído ao Contrato de
                    Credenciamento com a Pagar.me e aos termos e condições do presente instrumento
                    por meio do Contrato de Credenciamento, e que também sejam credenciados por
                    outra(s) Credenciadora(s) ou Subcredenciadora(s).
                    Formalização Eletrônica de Cessão: é a conclusão do processo de oferta e cessão
                    de Direitos Creditórios Elegíveis ao Fundo, mediante a conclusão das seguintes
                    etapas: (A) solicitação, pelo Estabelecimento Credenciado da cessão de Direitos
                    Creditórios Elegíveis, nos termos destas Condições Gerais de Cessão e do Contrato
                    de Credenciamento; (B) envio, pela Pagar.me, do arquivo contendo lista de Direitos
                    Creditórios Elegíveis para o Fundo, que deverá conter (a) elementos suficientes para
                    identificação dos Direitos Creditórios Elegíveis de forma agregada por U.R.; (b) o
                    Valor de Referência; e (c) o valor do respectivo Preço de Aquisição calculado com
                    base no Valor de Referência acordado com o Cedente; e (C) aquisição, pelo Fundo,
                    destes Direitos Creditórios Elegíveis mediante retorno da lista de Direitos Creditórios
                    Elegíveis do Cedente.
                    Fundo: significa o TAPSO II FUNDO DE INVESTIMENTO EM DIREITOS
                    CREDITÓRIOS, constituído sob a forma de condomínio fechado, regido pelo seu
                    Regulamento, sendo disciplinado pela Resolução CMN 2.907, pela Instrução CVM
                    356/01 e pelas demais disposições legais e regulamentares que lhe forem aplicáveis.
                    Informações Confidenciais: tem o significado previsto na Cláusula 8.1 deste
                    instrumento de Condições Gerais de Cessão.
                    Instrução CVM 356/01: significa a Instrução nº 356, emitida pela CVM em 17 de
                    dezembro de 2001, conforme alterada, que regulamenta a constituição e o
                    funcionamento dos fundos de investimento em direitos creditórios e dos fundos de
                    investimento em cotas de fundos de investimento em direitos creditórios.
                    Instrumentos de Pagamento: significa todo(s) e qual(is)quer dispositivo(s),
                    conjunto(s) de procedimentos (incluindo, mas não se limitando a instrumento(s)
                    físico(s) ou eletrônico(s) com funções de pagamento, inclusive Cartões), que
                    venha(m) a ser aceito(s) pelas Credenciadoras ou pelas Subcredenciadoras.
                    Parte e/ou Partes: significa, individualmente ou em conjunto, o Cedente e o Fundo.
                    Pessoa: significa qualquer pessoa física ou jurídica, sociedade, associação, joint
                    venture, sociedades anônimas, fundos de investimento, organizações ou entidades
                    sem personalidade jurídica ou autoridade governamental.
                    Preço de Aquisição: com relação aos Direitos Creditórios, o preço a ser pago pelo
                    Fundo a um Cedente em decorrência da aquisição de tais Direitos Creditórios,
                    calculado com base no Valor de Referência, conforme estabelecido nas Formalizações
                    Eletrônicas de Cessão, a ser acordado entre o respectivo Cedente, conforme
                    aplicável, representado pela Pagar.me, conforme previsto nos Contratos de
                    Credenciamento, e o Fundo ao tempo de cada cessão, segundo critérios e parâmetros
                    de mercado vigentes à época, levando em conta, dentre outros fatores, o Valor de
                    Referência, o valor dos Direitos Creditórios a serem cedidos ao Fundo, a existência
                    (ou não) de Promessa de Cessão, a outorga (ou não) da Cessão Fiduciária e o prazo
                    de pagamento dos Direitos Creditórios a serem cedidos. O Preço de Aquisição poderá
                    ser pago em 1 (uma) ou mais parcelas, conforme acordado com o Cedente nos
                    termos destas Condições Gerais de Cessão.
                    Promessa de Cessão: é a promessa de cessão de determinados Direitos Creditórios
                    realizada, de tempos em tempos, pelos Cedentes em favor do Fundo, garantida pela
                    Cessão Fiduciária, caso assim optado pelo Cedente.
                    Regulamento: significa o regulamento do Fundo, registrado no 1º Oficial de Registro
                    de Títulos e Documentos da Cidade do Rio de Janeiro, Estado do Rio de Janeiro.
                    Representantes: significa as pessoas definidas na Cláusula 8.1 deste instrumento.
                    Resolução CMN 2.907: significa a Resolução nº 2.907, expedida pelo Conselho
                    Monetário Nacional em 29 de novembro de 2001.
                    Resolução CMN 4.734/19: significa a Resolução do CMN nº 4.734, de 27 de junho
                    de 2017 ou qualquer outra norma que venha a substituí-la.
                    Sistema de Registro: significa a plataforma de comunicação com uma Entidade
                    Registradora por meio da qual determinados titulares dos Direitos Creditórios terão
                    acesso, a qualquer tempo, às informações dos Direitos Creditórios de sua
                    titularidade, bem como poderão efetuar o registro das cessões de Direitos
                    Creditórios. O Sistema de Registro deverá integrar a o Ambiente de
                    Interoperabilidade, conforme as especificações e requisitos discriminados em tais
                    normas e na Convenção entre Entidades Registradoras.
                    Subcredenciadora: significa a pessoa jurídica que (i) habilita Estabelecimentos
                    Credenciados para a aceitação de Instrumentos de Pagamento emitido por
                    instituições de pagamento ou por instituição financeira (Emissor) participante de um
                    mesmo Arranjo de Pagamento; e (ii) participa do processo de liquidação das
                    Transações de Pagamento como credora perante a Credenciadora.
                    Pagar.me: significa a PAGAR.ME INSTITUIÇÃO DE PAGAMENTO S.A., sociedade
                    anônima com sede na Cidade de São Paulo, Estado de São Paulo, na Rua Fidêncio
                    Ramos, nº 308, Torre A, conjunto 91, Vila Olímpia, CEP 04551-902, inscrita no
                    CNPJ/MF sob nº 18.727.053/0001-74.
                    Termo de Cessão: tem o significado atribuído na Cláusula 3.1.1 das Condições
                    Gerais de Cessão.
                    Termo de Cessão Fiduciária: significa o termo de Cessão Fiduciária de tempos em
                    tempos celebrado entre o Fundo e um Cedente, formalizando a constituição da
                    Cessão Fiduciária, indicando os respectivos Direitos Creditórios objeto da Cessão
                    Fiduciária, nos termos do Anexo III.
                    Transação de Pagamento: significa a operação de pagamento, pelo Usuário-Final,
                    pela aquisição de bens, produtos e/ou serviços junto ao respectivo Estabelecimento
                    Credenciado, mediante a utilização de quaisquer Instrumentos de Pagamento.
                    U.R. ou U.R.s.: significa cada unidade de recebível composta por recebíveis de
                    Arranjo de Pagamento, caracterizados, nos termos da Circular BACEN 3.952/19,
                    pelo(a) mesmo(a): (a) número de inscrição no CNPJ/ME ou no CPF/ME do Cedente;
                    (b) identificação do arranjo de pagamento (Bandeiras); (c) identificação da
                    Credenciadora ou Subcredenciadora (i.e., o Devedor); e (d) data de liquidação
                    (vencimento).
                    Usuários-Finais: significa as pessoas físicas ou jurídicas que utilizam um
                    Instrumento de Pagamento das Bandeiras para a realização de uma Transação de
                    Pagamento.
                    Valor de Referência: significa o valor de referência utilizado pelo respectivo Agente
                    de Liquidação para o cálculo do Preço de Aquisição de determinado Direito Creditório
                    Elegível com base em seu valor informado no Sistema de Registro. O Valor de
                    Referência será expresso em valor fixo e representará a expectativa de recebimento
                    do Fundo em relação a um determinado Direito Creditório Cedido. O Valor de
                    Referência será informado pelo Agente de Liquidação nos Sistemas de Registro
                    quando do registro da cessão dos Direitos Creditórios Elegíveis por meio de uma
                    Entidade Registradora.
                    ANEXO II
                    MODELO DE TERMO DE CESSÃO
                    TERMO DE CESSÃO DE DIREITOS CREDITÓRIOS Nº [•]
                    Cedentes: Cedentes identificados no Anexo A a este Termo, representados por sua
                    procuradora PAGAR.ME INSTITUIÇÃO DE PAGAMENTO S.A., sociedade anônima com
                    sede na Cidade de São Paulo, Estado de São Paulo, na Rua Fidêncio Ramos, nº 308, Torre
                    A, conjunto 91, Vila Olímpia, CEP 04551-902, inscrita no CNPJ/ME sob nº 18.727.053/0001-
                    74, na qualidade de devedora dos Direitos Creditórios (“Pagar.me”); e
                    Cessionário: TAPSO II FUNDO DE INVESTIMENTO EM DIREITOS
                    CREDITÓRIOS (“Fundo” ou “Cessionário”), inscrito no Cadastro Nacional da Pessoa
                    Jurídica do Ministério da Economia (“CNPJ/ME”) sob o nº 37.262.902/0001-06, registrado
                    na Comissão de Valores Mobiliários (“CVM”), constituído sob a forma de condomínio
                    fechado, regido pela Instrução CVM nº 356, de 17 de dezembro de 2001, conforme alterada
                    (“Instrução CVM 356/01”), e representado na forma do Regulamento do Fundo
                    (“Regulamento”), por sua instituição administradora, OLIVEIRA TRUST
                    DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS S.A., com sede na Cidade do
                    Rio de Janeiro, Estado do Rio de Janeiro, na Av. das Américas, nº 3434, Bloco 7, Sala 201,
                    Barra da Tijuca, CEP 22640-100, inscrita no CNPJ/ME sob o nº 36.113.876/0001-91,
                    devidamente autorizada pela CVM para o exercício profissional de administração e gestão
                    de carteiras de valores mobiliários pelo Ato Declaratório CVM nº 6696, de 21 de fevereiro
                    de 2002 (a “Administradora”).
                    Os termos e expressões iniciados em letra maiúscula, em sua forma singular ou plural,
                    utilizados no presente instrumento e neles não definidos têm o mesmo significado que lhes
                    é atribuído no instrumento de Condições Gerais de Promessa de Cessão e Aquisição de
                    Direitos Creditórios e Outras Avenças anexa ao Anexo I aos Termos Gerais de Contratação
                    de Produtos e Serviços de Pagamento, a ser registrado no competente Cartório de Registro
                    de Títulos e Documentos de São Paulo, conforme aditado (“Condições Gerais de Cessão”).
                    Pelo presente instrumento particular e na melhor forma de direito, os Cedentes e o
                    Cessionário, acima qualificados, devidamente representados, doravante conjuntamente
                    denominados "Partes", resolvem, de forma irrevogável e irretratável, celebrar o presente
                    termo de cessão e instrumento de aceite, que se regerá pelas cláusulas e condições a seguir
                    especificadas (“Termo”):
                    1. Pelo presente Termo e após cada Formalização de Cessão, cada Cedente cede e
                    transfere ao Cessionário, sem qualquer direito de regresso ou coobrigação dos Cedentes, os
                    Direitos Creditórios identificados no Anexo A, sendo os Direitos Creditórios cedidos pelos
                    Cedentes ao Cessionário nesta data pelo valor total de R$ [•] ([•] reais), mediante
                    Transferência Eletrônica Disponível – TED ou outros mecanismos de transferência
                    equivalentes à conta indicada pelo Agente de Liquidação, o qual receberá o valor por conta
                    e ordem do Cedente e transferirá tal valor via Transferência Eletrônica Disponível – TED ou
                    outros mecanismos de transferência equivalentes em conta de titularidade do Cedente.
                    2. Cada Cedente, representado pela Pagar.me, repete na presente data as declarações
                    e garantias constantes das Condições Gerais de Cessão.
                    3. A presente cessão é feita em caráter irrevogável e irretratável, excluída
                    expressamente a cláusula de arrependimento, obrigando as Partes e seus sucessores a
                    qualquer título.
                    4. O presente Termo será regido e interpretado em conformidade com as leis da
                    República Federativa do Brasil.
                    5. As Partes, pelo presente Termo, irrevogavelmente concordam em submeter ao Foro
                    da Cidade de São Paulo, Estado de São Paulo, quaisquer divergências que venham a resultar
                    do presente Termo, com a renúncia de qualquer outro, por mais privilegiado que seja.
                </div>
                <div className="contractTerms-divCheckAcceptTerms">
                    <input type="checkbox" checked={check} onChange={handleChecked(true)} />
                    <label className="contractTerms-labelAcceptTerms">Li e concordo com os termos de contrato</label>
                </div>


            </div >
            {check == false
                ? <BlueButton onClick={() => toast.info("Aceite os termos de contrato para poder proseguir")} title="Prosseguir" />
                : <BlueButton onClick={() => navigate('/payment')} title="Prosseguir" />
            }

        </div >
    )
}

export default ContractTerms