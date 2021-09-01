const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')

    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')


}

const questions = [
   
    {
        question: 'Um sistema de informação é desenvolvido como resposta um problema, ou conjunto de problemas, que uma organização enfrenta. O processo de resolução de problemas relativo ao desenvolvimento de sistemas envolve quatro etapas, organize em ordem sequencial de acontecimentos as etapas. \n1 - Implementar a solução.\n2 - Escolher a melhor solução.\n3 - Definir e compreender o problema\n4 - Desenvolver ações alternativas.',

        answers: [
            { text: 'A	2,1,4,3.', correct: false },
            { text: 'B	4,3,1,2.', correct: false },
            { text: 'C	4,3,2,1.', correct: false },
            { text: 'D	3,4,2,1.', correct: true },
            { text: 'E  3,4,1,2.', correct: false}
        ]

    },
    {
        question: 'Dados são definidos como registros de algo que foi observado e medido, podem ser representados de modo numérico, textual ou visual. Considerando a relevância dos dados em sistemas de informação é INCORRETO afirmar:',
        answers: [
            { text: 'A Dados são sequências de ocorrências ainda não analisadas.', correct: false },
            { text: 'B Dados são os registros brutos não interpretados.', correct: false },
            { text: 'C Dados podem ser representativos de eventos que ocorrem nas organizações ou no ambiente físico.', correct: false },
            { text: 'D Dados são obtidos em grande volume e possuem um significado específico.', correct: true },
            { text: 'E Dados sequências de fatos ainda não analisados.', correct: false }
        ]

    },
    {
        question: 'Relacione o Sistema de Informação de acordo com seu nível:\nSPT\nSIG`s\nSAD`S\nSAE`S\n\n(  ) Gerência Sênior\n(  ) Nível Operacional\n(  ) Alta Gestão\n(  ) Gerência Intermediária',
        answers: [
            { text: 'A	1,3,2,4', correct: false },
            { text: 'B	2,4,3,1', correct: false },
            { text: 'C	3,1,2,4', correct: false },
            { text: 'D	2,1,4,3', correct: false },
            { text: 'E	3,1,4,2', correct: true }
        ]

    },
    {
        question: 'A Teoria Geral dos Sistemas (TGS) tem base nos trabalhos e pesquisas do biólogo Ludwig von Bertalanffy, com o objetivo de transcender aos problemas tecnológicos de cada uma delas e dispor de princípios gerais, bem como de modelos, também gerais, de tal forma que todas as ciências pudessem interligar as descobertas de todas de forma ampla e total.Selecione a alternativa que apresenta dois conceitos sistêmicos importantes ressaltados pela definição de sistema Bertalanffy:',
        answers: [
            { text: 'A	Entradas e saídas;', correct: false },
            { text: 'B	Conjuntos e partes;', correct: false },
            { text: 'C	Aberto e fechado;', correct: false },
            { text: 'D  Propósito e globalismo;', correct: true },
            { text: 'E  Recíproca e interação;', correct: false}
        ]

    },
    {
        question: 'O Sistema de Processamento de Transações - SPT, também conhecido como sistema transacional ou operacional, normalmente compõem a principal base de dados da empresa e tem como principais componentes:',
        answers: [
            { text: 'A  Entrada, processamento e saída de relatórios.', correct: false },
            { text: 'B  Entrada de dados, o processamento, o armazenamento e a geração de documentos e relatórios.', correct: true },
            { text: 'C  Entrada, informação, armazenamento.', correct: false },
            { text: 'D  Entrada de dados, armazenamento e saída.', correct: false },
            { text: 'E  Entrada de informações, o processamento, o armazenamento e a geração de documentos e relatórios.', correct: false }
        ]

    },
    {
        question: 'Em relação à utilização das informações, analisando o contexto do nível estratégico que é o mais alto nível nas organizações, é correto afirmar:',
        answers: [
            { text: 'A As informações são utilizadas em situações do dia a dia, consideradas previsíveis e com efeito imediato.', correct: false },
            { text: 'B As informações são tratadas de maneira detalhada e analítica. ', correct: false },
            { text: 'C  As informações são combinadas a partir de fontes diversificadas e produzidos efeitos mais amplos.', correct: false },
            { text: 'D As informações retratam situações complexas e incertas, que envolvem a elaboração de cenários, tendências, previsões e análises especializadas. ', correct: true },
            { text: 'E As informações que não causam impactos nos rumos da organização. ', correct: false }
        ]

    },

    {
        question: 'Um sistema de informação não é composto somente de computadores e softwares específicos é necessária uma combinação de três componentes, também referenciados por dimensões. Selecione a alternativa que apresenta estas três dimensões:',
        answers: [
            { text: 'A Humanos, organizacionais e tecnológicos.', correct: true },
            { text: 'B Hardware, software e redes de computadores.', correct: false },
            { text: 'C Humano, hardware e software.', correct: false },
            { text: 'D Hardware, software e banco de dados.', correct: false },
            { text: 'E Humano, hardware e redes de computadores.', correct: false }
        ]

    },
    {
        question: 'Os sistemas de informação são classificados conforme a abrangência, que se refere à sua capacidade de atender a diferentes áreas funcionais de uma organização. Assinale a alternativa que apresenta corretamente as três categorias de abrangência:',
        answers: [
            { text: 'A Sistemas Transacionais, Sistemas Departamentais, Sistema Tático.', correct: false },
            { text: 'B Sistemas Departamentais, Sistemas Integrados e Sistemas Interorganizacionais.', correct: true },
            { text: 'C Sistemas Financeiros, Sistemas de Marketing e Sistemas Industriais.', correct: false },
            { text: 'D Sistemas Departamentais, Sistemas Industriais e Sistemas ERP.', correct: false },
            { text: 'E Sistemas Integrados, Sistemas Comerciais e Sistemas Inteorganizacionais.', correct: false }
        ]

    },
    {
        question: 'Os sistemas estratégicos são utilizados, na maioria das vezes, por gerentes do nível tático ou estratégico e se caracterizam por prestar suporte à decisão por meio de simulações ou análise de situações. Em relação aos sistemas estratégicos é correto afirmar:',
        answers: [
            { text: 'A O sistema estratégico normalmente compõe a principal base de dados da empresa.', correct: false },
            { text: 'B Designa uma categoria específica de sistemas de informação que atende aos gerentes de nível médio.', correct: false },
            { text: 'C Os dados das operações são introduzidos no sistema por meio do módulo do SPT.', correct: false },
            { text: 'D Tem como principais componentes a entrada de dados, o processamento, o armazenamento e a geração de documentos e relatórios.', correct: false },
            { text: 'E Os sistemas estratégicos se dividem em duas categorias: sistemas de apoio à decisão SADs; sistemas de Apoio aos executivos SAEs.', correct: true }
        ]

    },
    {
        question: 'Com relação aos serviços prestados dentro de TI, é INCORRETO que:',
        answers: [
            { text: 'A As empresas precisam de pessoas para operar e gerenciar os componentes da infraestrutura de TI.', correct: false },
            { text: 'B Quando as empresas precisam fazer alterações profundas em seus sistemas, em geral recorrem a consultores externos.', correct: false },
            { text: 'C Hoje muitas empresas completam as atividades da equipe interna de sistemas de informação com consultoria externa de tecnologia.', correct: false },
            { text: 'D Quando as empresas vão implantar uma infraestrutura de TI completamente nova, em geral não recorrem a consultores externos.', correct: true },
            { text: 'E E As empresas precisam de pessoas para ensinar os funcionários a usar tecnologias em suas atividades diárias.', correct: false }
        ]

    },
    {
        question: 'Os dados quando processados geram informação, a informação pode ser entendida como dados moldados de uma forma significativa e útil para as pessoas. Neste sentido, assinale a alternativa correta:',
        answers: [
            { text: 'A Informação quer dizer dados que foram modelados em um formato significativo e inútil para os seres humanos', correct: false },
            { text: 'B As informações podem ser divididas em dois grandes grupos: quantitativa e explicativa.', correct: false },
            { text: 'C As informações podem ser representadas apenas de forma descritiva.', correct: false },
            { text: 'D As informações quantitativas são aquelas que não podem ser mensuradas', correct: false },
            { text: 'E As informações podem ser quantitativas e qualitativas.', correct: true }
        ]

    },
    {
        question: 'Os sistemas de informação são classificados conforme a abrangência, que se refere à sua capacidade de atender a diferentes áreas funcionais de uma organização. Assinale a alternativa que apresenta corretamente as três categorias de abrangência:',
        answers: [
            { text: 'A Sistemas Transacionais, Sistemas Departamentais, Sistema Tático.', correct: false },
            { text: 'B Sistemas Departamentais, Sistemas Integrados e Sistemas Interorganizacionais.', correct: true },
            { text: 'C Sistemas Financeiros, Sistemas de Marketing e Sistemas Industriais.', correct: false },
            { text: 'D Sistemas Departamentais, Sistemas Industriais e Sistemas ERP.', correct: false },
            { text: 'E Sistemas Integrados, Sistemas Comerciais e Sistemas Inteorganizacionais.', correct: false }
        ]

    },
    {
        question: 'Com relação aos serviços prestados dentro de TI, é INCORRETO que:',
        answers: [
            { text: 'A As empresas precisam de pessoas para operar e gerenciar os componentes da infraestrutura de TI.', correct: false },
            { text: 'B Quando as empresas precisam fazer alterações profundas em seus sistemas, em geral recorrem a consultores externos.', correct: false },
            { text: 'C Hoje muitas empresas completam as atividades da equipe interna de sistemas de informação com consultoria externa de tecnologia.', correct: false },
            { text: 'D Quando as empresas vão implantar uma infraestrutura de TI completamente nova, em geral não recorrem a consultores externos.', correct: true },
            { text: 'E As empresas precisam de pessoas para ensinar os funcionários a usar tecnologias em suas atividades diárias.', correct: false }
        ]

    },
     {
        question: 'Em relação à utilização das informações, analisando o contexto do nível estratégico que é o mais alto nível nas organizações, é correto afirmar:',
        answers: [
            { text: 'A As informações são utilizadas em situações do dia a dia, consideradas previsíveis e com efeito imediato.', correct: false },
            { text: 'B As informações são tratadas de maneira detalhada e analítica.', correct: false },
            { text: 'C As informações são combinadas a partir de fontes diversificadas e produzidos efeitos mais amplos.', correct: false },
            { text: 'D As informações retratam situações complexas e incertas, que envolvem a elaboração de cenários, tendências, previsões e análises especializadas.', correct: true },
            { text: 'E As informações que não causam impactos nos rumos da organização.', correct: false }
        ]

    },
    {
        question: 'A Teoria Geral dos Sistemas (TGS) tem base nos trabalhos e pesquisas do biólogo Ludwig von Bertalanffy, com o objetivo de transcender aos problemas tecnológicos de cada uma delas e dispor de princípios gerais, bem como de modelos, também gerais, de tal forma que todas as ciências pudessem interligar as descobertas de todas de forma ampla e total.\n\nSelecione a alternativa que apresenta dois conceitos sistêmicos importantes ressaltados pela definição de sistema Bertalanffy:',
        answers: [
            { text: 'A Entradas e saídas;', correct: false },
            { text: 'B Conjuntos e partes;', correct: false },
            { text: 'C Aberto e fechado;', correct: false },
            { text: 'D Propósito e globalismo', correct: true },
            { text: 'E Recíproca e interação', correct: false }
        ]

    },
    {
        question: 'Relacione o Sistema de Informação de acordo com seu nível:\n\n1 - SPT\n\n2 - SIG’s\n\n3 - SAD’S\n\n4 - SAE’S\n\n(  ) Gerência Sênior\n\n(  ) Nível Operacional\n\n(  ) Alta Gestão \n\n(  ) Gerência Intermediária\n\n\nSelecione a alternativa que apresenta a ordem correta das relações.',
        answers: [
            { text: 'A 1,3,2,4', correct: false },
            { text: 'B 2,4,3,1', correct: false },
            { text: 'C 3,1,2,4', correct: false },
            { text: 'D 2,1,4,3', correct: false },
            { text: 'E 3,1,4,2', correct: true }
        ]

    },
    {
        question: 'A Tecnologia da Informação criou diferenciais competitivos importantes para as empresas. A utilização de aplicativos mobile tornou possível a expansão das atividades de negócio das organizações, principalmente pela automatização de processos de negócio. A esse respeito, considere as assertivas a seguir.\n\nI - Excelência na segurança\n\nII - Auxílio do processo de tomada de decisões\n\nIII - Vantagem Competitiva\n\nIV - Sobrevivência da organização\n\n\n\nNo que diz respeito à utilização dos aplicativos mobile nas organizacionais, estão corretas as assertivas.',
        answers: [
            { text: 'A I e II.', correct: false },
            { text: 'B I, II e III.', correct: false },
            { text: 'C II, III e IV.', correct: true },
            { text: 'D I, II, III e IV.', correct: false },
            { text: 'E Apenas II e III.', correct: false }
        ]

    },
    {
        question: 'De acordo com Belmiro (2014), para que exista um bom sistema de controle relativo aos sistemas de informação, também são necessárias auditorias abrangentes e sistemáticas. Sobre a auditoria de sistemas assinale a alternativa INCORRETA.',
        answers: [
            { text: 'A É um sistema que avalia apenas o impacto financeiro de cada ameaça dos sistemas de informação', correct: false },
            { text: 'B É um sistema que identifica todos os controles que governam sistemas individuais de informação e avalia sua efetividade.', correct: false },
            { text: 'C As auditorias de segurança devem não fazem uso de tecnologias, somente de procedimentos, documentação, treinamento e recursos humanos.', correct: false },
            { text: 'D As auditorias nos sistemas de informação apenas listam e classificam os pontos fracos do controle e indicam os erros que  vão ocorrer nesses pontos.', correct: false },
            { text: 'E É um sistema que identifica todos os controles que governam sistemas individuais de informação, entretanto não avalia sua efetividade..', correct: true }
        ]

    },
    {
        question: 'A introdução das tecnologias de informação gera um efeito de ondas concêntricas que suscitam questões éticas, sociais e políticas as quais precisam ser tratadas nos níveis individual, social e político. Neste sentido, assinale as alternativas erradas sobre as questões éticas, sociais e políticas.\n\nI - dos indivíduos de não serem incomodados, de ficarem livres da vigilância da interferência de outros indivíduos ou organizações, inclusive do Estado.\nII - O direito à privacidade é protegido pelas constituições dos países e são escritas de maneiras diferentes por meio de vários estatutos legais.\nIII - A utilização da internet expandiu as possibilidades de cometer crimes, e para esses crimes não existem leis específicas.\nIV- As instituições políticas precisam de tempo para criar novas leis e muitas vezes só agem mediante a evidência de danos reais.\nAssinale a alternativa correspondente:\n\n',
        answers: [
            { text: 'A I e II', correct: false },
            { text: 'B III e IV', correct: false },
            { text: 'C I e III', correct: false },
            { text: 'D Apenas a III', correct: true },
            { text: 'E Apenas a IV', correct: false }
        ]

    },
    {
        question: 'Para coordenar e controlar as quatro funções principais de qualquer organização é necessário contratar um gerente cuja responsabilidade é assegurar que todas as partes trabalham em conjunto, geralmente as organizações empresariais são hierarquias compostas por três níveis principais, são eles:',
        answers: [
            { text: 'A Gerência de recursos humanos e gerência sênior.', correct: false },
            { text: 'B Gerência operacional e gerência financeira.', correct: false },
            { text: 'C Gerência operacional, gerência média e gerência sênior.', correct: true },
            { text: 'D Gerência transacional e gerência média.', correct: false },
            { text: 'E Gerência de recursos humanos, gerência financeira e gerência de marketing.', correct: false }
        ]

    },

    {
        question: 'Os sistemas de gestão de cadeia de suprimentos, SCM  são definidos como a gestão total das funções presentes em um processo logístico e seus processos são representados por:',
        answers: [
            { text: 'A Fluxo de informação, Fluxo de materiais e Fluxo de dinheiro.', correct: true },
            { text: 'B Fluxo de compra, Fluxo de materiais e Fluxo de dinheiro.', correct: false },
            { text: 'C Fluxo de informação, Fluxo de logística e Fluxo de materiais.', correct: false },
            { text: 'D Fluxo de compra, Fluxo de logística e Fluxo de dinheiro.', correct: false },
            { text: 'E Fluxo da informação, Fluxo de materiais e Fluxo de compra.', correct: false }
        ]

    },
    {
        question: 'Existem atributos fundamentais para um bom plano que contenha a política de segurança da informação, assinale a alternativa incorreta em relação aos atributos norteadores.',
        answers: [
            { text: 'A Estar alinhado com as estratégias da organização.', correct: false },
            { text: 'B Ser monitorado constantemente e revisado periodicamente.', correct: false },
            { text: 'C Buscar principalmente enfoque técnico e menos enfoque no aspecto comportamental.', correct: true },
            { text: 'D Ser amplamente divulgado para todos os membros da organização.', correct: false },
            { text: 'E Estar sintonizado com as pessoas que se envolvem no contexto computacional da organização.', correct: false }
        ]

    },
    {
        question: 'Muitas pesquisas e aquisições fazem parte do que é conceituado como comércio eletrônico. Exceto:',
        answers: [
            { text: 'A Compra de ingressos para um show pelo aplicativo.', correct: false },
            { text: 'B Pesquisa de livros a partir da internet.', correct: false },
            { text: 'C Troca de mercadorias utilizando as redes sociais.', correct: false },
            { text: 'D Comprar um celular na loja física.', correct: true },
            { text: 'E Utilizar um site de comparação de preços.', correct: false }
        ]

    },
    {
        question: 'Os principais problemas e ameaças em relação à segurança lógica estão ligados à possibilidade de acesso indevido, aos erros sejam eles intencionais ou não, a perda de dados, falhas ou ações e programas clandestinos na rede, violações dos sistemas que ocasionem desvio das informações, fraudes e sabotagens. São relacionadas medidas de proteções para a questão da segurança lógica adequada, as quais áreas:',
        answers: [
            { text: 'A Segurança de redes, Segurança do hardware e Segurança do sistema.', correct: false },
            { text: 'B Segurança do software, Segurança das redes e Segurança do hardware.', correct: false },
            { text: 'C Segurança de redes e Segurança dos sistemas.', correct: false },
            { text: 'D Segurança de hardware, Segurança do sistema e Segurança do usuário.', correct: false },
            { text: 'E Segurança de redes, Segurança dos sistemas e Segurança do usuário.', correct: true }
        ]

    },
    {
        question: 'A abrangência de um sistema SCM deve suportar as atividades indicadas na cadeia de suprimentos. São citados três tipos de cadeia de suprimento, relacione-os de acordo com sua especificidade:\n\n(1) Upstream\n\n(2) Interna\n\n(3) Downstream\n\n(  ) Envolve todos os processos relacionados à entrega do produto ao consumidor fina.\n\n(  ) Envolve desde a chegada da matéria-prima até a distribuição do produto acabado.\n\n(  ) Abrange fornecedores de primeiro e segundo nível.\n\nAssinale a alternativa correta:',
        answers: [
            { text: 'A 1,2,3', correct: false },
            { text: 'B 3,2,1', correct: true },
            { text: 'C 3,1,2', correct: false },
            { text: 'D 1,3,2', correct: false },
            { text: 'E 2,3,1', correct: false }
        ]

    },

    {
        question: 'A elaboração de políticas de segurança da informação deve ser realizada de modo holístico, que possibilite abranger a missão, a visão, as diretrizes organizacionais, as estratégias do negócio, os planos de ação e as respectivas metas institucionais. Para que isso ocorra à elaboração deve abranger alguns aspectos. Assinale a alternativa correta sobre os aspectos humanos e da segurança.',
        answers: [
            { text: 'A Estão relacionados à abrangência e escopo de atuação da política, como a identificação dos recursos críticos.', correct: false },
            { text: 'B Estão relacionados à política adotada pela organização no que se refere aos processos de admissão, contratação e demissão.', correct: true },
            { text: 'C Estão relacionados aos meios que serão utilizados na divulgação do plano e a periodicidade da revisão.', correct: false },
            { text: 'D Estão relacionados à proteção dos recursos e instalações.', correct: false },
            { text: 'E Estão relacionados à divulgação dos dados e as informações durante os processos de comunicação.', correct: false }
        ]

    },
    {
        question: 'A análise de riscos é caracterizada pela necessidade de gerar ou revisar o plano de segurança da organização, e que qualquer plano de segurança deve atender as preocupações básicas com as medidas necessárias para evitar, impedir ou minimizar as ocorrências. Relacione as preocupações básicas de acordo com suas funções. \n\n(1) Evitar a ocorrência da ameaça\n\n(2) Identificar ou combater as ameaças\n\n(3) Minimizar o dano, recompondo a função original\n\n(  ) Medidas de segurança\n\n(  ) Plano de Segurança\n\n(  ) Plano de contingência\n\nA sequência correta é:',
        answers: [
            { text: 'A 1,2,3', correct: false },
            { text: 'B 1,3,2', correct: false },
            { text: 'C 	3,2,1', correct: false },
            { text: 'D 2,1,3', correct: true },
            { text: 'E 2,3,1', correct: false }
        ]

    },
    {
        question: 'Qualquer empresa independente do seu tamanho tem por objetivo oferecer um produto ou serviço e para isso é necessário desempenhar quatro funções. Assinale as quatro funções básicas de uma empresa:',
        answers: [
            { text: 'A Manufatura e Produção, Vendas e Marketing, Recursos Humanos e Finanças e Contabilidade.', correct: true },
            { text: 'B Executar Funções, Realizar Tarefas, Vendas e Marketing, Finanças e Contabilidade.', correct: false },
            { text: 'C Coordenação, Controle, Vendas, Finanças.', correct: false },
            { text: 'D Manufatura, Compras, Finanças e Recursos Humanos.', correct: false },
            { text: 'E Realizar serviços, Criar produtos, Vendas e Recursos Humanos.', correct: false }
        ]

    },

    {
        question: 'Nos itens abaixo são apresentadas possíveis dificuldades relacionadas a Sistemas Integrados de Gestão (ERP - Enterprise Resource Planning):\n\nI  – Problemas relativos à integração das atividades e processos de negócios;\n\nII  – Nem todas customizações para necessidades específicas da organização podem ser aplicadas.\n\nIII – Algumas regras determinadas pelo sistema não podem ser alteradas;\n\nIV  – Não promove a informação de forma simplificada;\n\nSão dificuldades relativas à ERP:',
        answers: [
            { text: 'A I e III, apenas', correct: false },
            { text: 'B Apenas III', correct: false },
            { text: 'C I, III e IV', correct: false },
            { text: 'D II e III, apenas', correct: true },
            { text: 'E I, II, III e IV', correct: false }
        ]

    },
    {
        question: 'O termo e-business corresponde a uma definição mais ampla do que é considerado comércio eletrônico. Assinale V (verdadeiro) e F (falso):\n\n(   ) Possibilita a prestação de serviços a clientes.\n\n(   ) Ocorre apenas a compra e venda de produtos pela internet.\n\n(   ) Possibilita o cooperação com parceiros comerciais.\n\n(   ) Ocorre a realização de negócios eletrônicos em uma organização.\n\nQual alternativa correspondente:',
        answers: [
            { text: 'A V, V, V e V', correct: false },
            { text: 'B V, F, F e V', correct: false },
            { text: 'C V, F, V e V', correct: true },
            { text: 'D V, V, F e F', correct: false },
            { text: 'E F, F, F e F', correct: false }
        ]

    },
    {
        question: '',
        answers: [
            { text: 'A', correct: false },
            { text: 'B', correct: false },
            { text: 'C', correct: false },
            { text: 'D', correct: false },
            { text: 'E', correct: false }
        ]

    },
    {
        question: '',
        answers: [
            { text: 'A', correct: false },
            { text: 'B', correct: false },
            { text: 'C', correct: false },
            { text: 'D', correct: false },
            { text: 'E', correct: false }
        ]

    },{
        question: '',
        answers: [
            { text: 'A', correct: false },
            { text: 'B', correct: false },
            { text: 'C', correct: false },
            { text: 'D', correct: false },
            { text: 'E', correct: false }
        ]

    },

    
   /* {
        question: '',
        answers: [
            { text: 'A', correct: false },
            { text: 'B', correct: false },
            { text: 'C', correct: false },
            { text: 'D', correct: false },
            { text: 'E', correct: false }
        ]

    },*/


];
const random = Math.floor(Math.random() * questions.length);
console.log(random, questions[random]);