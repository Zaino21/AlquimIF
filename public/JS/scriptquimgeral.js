const perguntasQuimicaGeral = [
    // 21 Perguntas Teóricas
    {
        pergunta: "Qual a massa molar do ácido sulfúrico (H2SO4)?",
        opcoes: {
            a: "98 g/mol",
            b: "94 g/mol",
            c: "100 g/mol",
            d: "102 g/mol"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Calcule o número de mols de CO2 em 88g de CO2.",
        opcoes: {
            a: "2 mol",
            b: "4 mol",
            c: "1 mol",
            d: "3 mol"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é o valor do número de Avogadro?",
        opcoes: {
            a: "6.022 × 10²³",
            b: "3.14",
            c: "1.66 × 10^-24",
            d: "9.8 m/s²"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é a fórmula química do metano?",
        opcoes: {
            a: "CH4",
            b: "C2H6",
            c: "C3H8",
            d: "C4H10"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é o pH de uma solução neutra à temperatura ambiente?",
        opcoes: {
            a: "7",
            b: "0",
            c: "14",
            d: "1"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é a unidade de medida da constante de gás ideal (R)?",
        opcoes: {
            a: "L·atm/(mol·K)",
            b: "m/s²",
            c: "kg",
            d: "m³"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é a fórmula do cloreto de sódio?",
        opcoes: {
            a: "NaCl",
            b: "KCl",
            c: "CaCl2",
            d: "MgCl2"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Quantos prótons tem um átomo de carbono-12?",
        opcoes: {
            a: "6",
            b: "12",
            c: "14",
            d: "8"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é a principal característica dos gases nobres?",
        opcoes: {
            a: "São inertes",
            b: "São altamente reativos",
            c: "São líquidos à temperatura ambiente",
            d: "São metais"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é a fórmula química da água?",
        opcoes: {
            a: "H2O",
            b: "H2O2",
            c: "O2",
            d: "H2"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é o elemento mais abundante na crosta terrestre?",
        opcoes: {
            a: "Oxigênio",
            b: "Silício",
            c: "Alumínio",
            d: "Ferro"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é a fórmula do ácido clorídrico?",
        opcoes: {
            a: "HCl",
            b: "H2SO4",
            c: "HNO3",
            d: "HCN"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é o produto principal da combustão completa do metano?",
        opcoes: {
            a: "CO2 e H2O",
            b: "CO e H2",
            c: "C e H2O",
            d: "CH4 e O2"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é a fórmula do ácido acético?",
        opcoes: {
            a: "CH3COOH",
            b: "C2H5OH",
            c: "C6H12O6",
            d: "CH4"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é a unidade de medida da massa atômica?",
        opcoes: {
            a: "u (unidade de massa atômica)",
            b: "g",
            c: "kg",
            d: "mol"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é o nome do processo de separação de misturas que utiliza a diferença de pontos de ebulição?",
        opcoes: {
            a: "Destilação",
            b: "Filtração",
            c: "Decantação",
            d: "Sublimação"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é a fórmula do gás carbônico?",
        opcoes: {
            a: "CO2",
            b: "CO",
            c: "C2H6",
            d: "C3H8"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é o tipo de ligação química no NaCl?",
        opcoes: {
            a: "Iônica",
            b: "Covalente",
            c: "Metálica",
            d: "Hidrogênio"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "O que é uma substância pura?",
        opcoes: {
            a: "Uma substância com composição fixa e propriedades definidas",
            b: "Uma mistura de dois ou mais elementos",
            c: "Uma solução",
            d: "Um composto iônico"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é o símbolo químico do ouro?",
        opcoes: {
            a: "Au",
            b: "Ag",
            c: "O",
            d: "Fe"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "O que é uma reação endotérmica?",
        opcoes: {
            a: "Uma reação que absorve calor",
            b: "Uma reação que libera calor",
            c: "Uma reação que ocorre no estado sólido",
            d: "Uma reação que ocorre no estado líquido"
        },
        resposta: "a",
        tipo: "teorica"
    },

    // 21 Perguntas Práticas
    {
        pergunta: "Qual é a cor da chama de sódio quando queimado?",
        opcoes: {
            a: "Amarela",
            b: "Verde",
            c: "Azul",
            d: "Vermelha"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Qual a reação entre ácido clorídrico e magnésio?",
        opcoes: {
            a: "Liberação de hidrogênio",
            b: "Formação de óxido de magnésio",
            c: "Formação de cloreto de magnésio",
            d: "Liberação de cloro"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "O que ocorre quando o sódio metálico entra em contato com água?",
        opcoes: {
            a: "Libera gás hidrogênio e forma hidróxido de sódio",
            b: "Formação de cloreto de sódio",
            c: "Reage formando óxido de sódio",
            d: "Não reage"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Qual é a técnica usada para separar um sólido de um líquido em uma mistura heterogênea?",
        opcoes: {
            a: "Filtração",
            b: "Destilação",
            c: "Centrifugação",
            d: "Decantação"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Qual é o teste químico usado para identificar a presença de amido?",
        opcoes: {
            a: "Teste do iodo",
            b: "Teste da chama",
            c: "Teste da chama",
            d: "Teste de pH"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Qual é o produto principal da reação entre ácido sulfúrico e açúcar?",
        opcoes: {
            a: "Carbono",
            b: "Oxigênio",
            c: "Água",
            d: "Dióxido de carbono"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Qual é o resultado da reação de ácido acético com bicarbonato de sódio?",
        opcoes: {
            a: "Liberação de dióxido de carbono",
            b: "Formação de água",
            c: "Formação de sódio",
            d: "Liberação de hidrogênio"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "O que acontece quando o ácido clorídrico é adicionado ao carbonato de cálcio?",
        opcoes: {
            a: "Liberação de dióxido de carbono",
            b: "Formação de cálcio",
            c: "Liberação de hidrogênio",
            d: "Formação de água"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Qual é o reagente usado para testar a presença de íons cloreto?",
        opcoes: {
            a: "Nitrato de prata",
            b: "Sulfato de cobre",
            c: "Hidróxido de sódio",
            d: "Ácido nítrico"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Qual é o efeito do aquecimento de nitrato de amônio?",
        opcoes: {
            a: "Decomposição em água e gás",
            b: "Formação de nitrato de sódio",
            c: "Formação de óxido de amônio",
            d: "Nenhum efeito"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Qual é a cor da chama de cobre quando queimado?",
        opcoes: {
            a: "Verde",
            b: "Azul",
            c: "Amarela",
            d: "Vermelha"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "O que acontece quando o ferro é exposto ao ar úmido?",
        opcoes: {
            a: "Forma ferrugem",
            b: "Reage violentamente",
            c: "Nada acontece",
            d: "Libera gás oxigênio"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Qual é a reação observada quando o zinco é colocado em ácido clorídrico?",
        opcoes: {
            a: "Liberação de hidrogênio",
            b: "Formação de óxido de zinco",
            c: "Liberação de cloro",
            d: "Nenhuma reação"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Qual é a mudança de cor do papel de tornassol azul em ácido?",
        opcoes: {
            a: "Fica vermelho",
            b: "Fica verde",
            c: "Fica amarelo",
            d: "Permanece azul"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Qual é o produto da combustão completa de um hidrocarboneto?",
        opcoes: {
            a: "CO2 e H2O",
            b: "CO e H2",
            c: "C e H2O",
            d: "CH4 e O2"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Qual é a cor da chama de potássio quando queimado?",
        opcoes: {
            a: "Lilás",
            b: "Verde",
            c: "Amarela",
            d: "Vermelha"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Qual é o método utilizado para separar uma mistura de líquidos miscíveis com diferentes pontos de ebulição?",
        opcoes: {
            a: "Destilação",
            b: "Filtração",
            c: "Decantação",
            d: "Sublimação"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "O que acontece quando a amônia é misturada com ácido clorídrico?",
        opcoes: {
            a: "Forma cloreto de amônio",
            b: "Libera gás hidrogênio",
            c: "Forma óxido de amônio",
            d: "Nenhuma reação"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Qual é o resultado da reação entre vinagre e bicarbonato de sódio?",
        opcoes: {
            a: "Liberação de dióxido de carbono",
            b: "Formação de cloreto de sódio",
            c: "Formação de água",
            d: "Liberação de hidrogênio"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "O que acontece quando o magnésio é queimado no ar?",
        opcoes: {
            a: "Forma óxido de magnésio",
            b: "Libera dióxido de carbono",
            c: "Nada acontece",
            d: "Forma cloreto de magnésio"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Qual é a técnica usada para separar um líquido de um sólido insolúvel?",
        opcoes: {
            a: "Filtração",
            b: "Decantação",
            c: "Destilação",
            d: "Centrifugação"
        },
        resposta: "a",
        tipo: "pratica"
    }
];
