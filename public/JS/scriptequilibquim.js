const perguntasEquilibrioQuimico = [
    // 21 Perguntas Teóricas
    {
        pergunta: "Qual é a constante de equilíbrio da reação A + B ⇌ C + D?",
        opcoes: {
            a: "[C][D] / [A][B]",
            b: "[A][B] / [C][D]",
            c: "[A][C] / [B][D]",
            d: "[B][D] / [A][C]"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual a influência da temperatura no deslocamento do equilíbrio químico?",
        opcoes: {
            a: "Depende da reação",
            b: "Aumenta o rendimento da reação",
            c: "Diminui a constante de equilíbrio",
            d: "Não influencia"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Em uma reação exotérmica, o aumento da temperatura favorece:",
        opcoes: {
            a: "Reagentes",
            b: "Produtos",
            c: "Não muda",
            d: "Ambos"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "O que é o princípio de Le Chatelier?",
        opcoes: {
            a: "Deslocamento do equilíbrio em resposta a uma alteração",
            b: "Equilíbrio dinâmico de uma reação",
            c: "Constante de equilíbrio",
            d: "Velocidade da reação"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "O que acontece quando se aumenta a concentração de um produto em um equilíbrio químico?",
        opcoes: {
            a: "Equilíbrio se desloca para os reagentes",
            b: "Equilíbrio se desloca para os produtos",
            c: "Constante de equilíbrio aumenta",
            d: "Nada acontece"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é o efeito da adição de um catalisador em um equilíbrio químico?",
        opcoes: {
            a: "Acelera a reação sem alterar o equilíbrio",
            b: "Desloca o equilíbrio para os produtos",
            c: "Desloca o equilíbrio para os reagentes",
            d: "Diminui a constante de equilíbrio"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "O que ocorre com o equilíbrio quando se aumenta a concentração de um reagente?",
        opcoes: {
            a: "Desloca para os produtos",
            b: "Desloca para os reagentes",
            c: "Não muda",
            d: "Aumenta a constante de equilíbrio"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Como a pressão afeta o equilíbrio em reações gasosas?",
        opcoes: {
            a: "Desloca para o lado com menos mols de gás",
            b: "Desloca para o lado com mais mols de gás",
            c: "Não tem efeito",
            d: "Aumenta a constante de equilíbrio"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "O que significa uma constante de equilíbrio grande (K >> 1)?",
        opcoes: {
            a: "Reação favorece produtos",
            b: "Reação favorece reagentes",
            c: "Equilíbrio dinâmico",
            d: "Reação lenta"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "O que significa uma constante de equilíbrio pequena (K << 1)?",
        opcoes: {
            a: "Reação favorece reagentes",
            b: "Reação favorece produtos",
            c: "Equilíbrio dinâmico",
            d: "Reação rápida"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é o efeito da remoção de um produto em uma reação em equilíbrio?",
        opcoes: {
            a: "Desloca para os produtos",
            b: "Desloca para os reagentes",
            c: "Não muda",
            d: "Diminui a constante de equilíbrio"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "O que é a constante de dissociação (Ka)?",
        opcoes: {
            a: "Mede a força de um ácido",
            b: "Mede a força de uma base",
            c: "Mede a concentração de produtos",
            d: "Mede a concentração de reagentes"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "O que é a constante de base (Kb)?",
        opcoes: {
            a: "Mede a força de uma base",
            b: "Mede a força de um ácido",
            c: "Mede a concentração de produtos",
            d: "Mede a concentração de reagentes"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é o princípio de Le Chatelier?",
        opcoes: {
            a: "Quando um sistema em equilíbrio é perturbado, ele se ajusta para minimizar a perturbação",
            b: "A velocidade de uma reação é diretamente proporcional à concentração dos reagentes",
            c: "A energia livre de Gibbs de uma reação é constante",
            d: "A constante de equilíbrio de uma reação é independente da temperatura"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "O que acontece com o equilíbrio de uma reação exotérmica quando a temperatura é aumentada?",
        opcoes: {
            a: "Desloca para os reagentes",
            b: "Desloca para os produtos",
            c: "Não muda",
            d: "Aumenta a constante de equilíbrio"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "O que acontece com o equilíbrio de uma reação endotérmica quando a temperatura é aumentada?",
        opcoes: {
            a: "Desloca para os produtos",
            b: "Desloca para os reagentes",
            c: "Não muda",
            d: "Diminui a constante de equilíbrio"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é a expressão da constante de equilíbrio para a reação N2(g) + 3H2(g) ⇌ 2NH3(g)?",
        opcoes: {
            a: "[NH3]^2 / ([N2][H2]^3)",
            b: "[N2][H2]^3 / [NH3]^2",
            c: "[N2][NH3]^2 / [H2]^3",
            d: "[NH3] / ([N2][H2])"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é o efeito da diluição em um equilíbrio químico em solução aquosa?",
        opcoes: {
            a: "Desloca para o lado com mais partículas",
            b: "Desloca para o lado com menos partículas",
            c: "Não tem efeito",
            d: "Aumenta a constante de equilíbrio"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é o efeito da adição de um gás inerte em um equilíbrio gasoso?",
        opcoes: {
            a: "Não tem efeito",
            b: "Desloca para o lado com mais mols de gás",
            c: "Desloca para o lado com menos mols de gás",
            d: "Aumenta a constante de equilíbrio"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é o efeito da remoção de calor em um equilíbrio exotérmico?",
        opcoes: {
            a: "Desloca para os produtos",
            b: "Desloca para os reagentes",
            c: "Não muda",
            d: "Diminui a constante de equilíbrio"
        },
        resposta: "a",
        tipo: "teorica"
    },
    {
        pergunta: "Qual é o efeito da adição de calor em um equilíbrio endotérmico?",
        opcoes: {
            a: "Desloca para os produtos",
            b: "Desloca para os reagentes",
            c: "Não muda",
            d: "Diminui a constante de equilíbrio"
        },
        resposta: "a",
        tipo: "teorica"
    },

    // 21 Perguntas Práticas
    {
        pergunta: "O que ocorre quando se adiciona mais reagente em uma reação em equilíbrio?",
        opcoes: {
            a: "Desloca para produtos",
            b: "Desloca para reagentes",
            c: "Não muda",
            d: "Reação para"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Qual o efeito do aumento de pressão sobre uma reação em equilíbrio que envolve gases?",
        opcoes: {
            a: "Desloca para o lado com menos mols de gás",
            b: "Desloca para o lado com mais mols de gás",
            c: "Não tem efeito",
            d: "Diminui a pressão parcial"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Adicionar um catalisador a uma reação em equilíbrio resultará em:",
        opcoes: {
            a: "Nenhuma mudança no equilíbrio",
            b: "Deslocamento para produtos",
            c: "Deslocamento para reagentes",
            d: "Aumento na concentração dos produtos"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Para a reação N2(g) + 3H2(g) ⇌ 2NH3(g), calcular Kc se [N2] = 0.5M, [H2] = 1.5M, [NH3] = 0.2M.",
        opcoes: {
            a: "0.71",
            b: "0.80",
            c: "1.25",
            d: "2.00"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Para a reação A + B ⇌ C + D, calcular a constante de equilíbrio Kc se [A] = 1M, [B] = 1M, [C] = 2M, [D] = 2M.",
        opcoes: {
            a: "4",
            b: "2",
            c: "1",
            d: "0.5"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Calcular a concentração de H2 se Kc = 0.5 para a reação H2 + I2 ⇌ 2HI, [HI] = 1M, [I2] = 0.5M.",
        opcoes: {
            a: "0.5M",
            b: "1.0M",
            c: "1.5M",
            d: "2.0M"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Para a reação 2NO2 ⇌ N2O4, se a concentração de NO2 é 0.2M e a de N2O4 é 0.1M, calcule Kc.",
        opcoes: {
            a: "2.5",
            b: "1.0",
            c: "0.5",
            d: "0.25"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Para a reação H2(g) + I2(g) ⇌ 2HI(g), se Kc = 50 e [HI] = 0.5M, calcule a concentração de H2.",
        opcoes: {
            a: "0.01M",
            b: "0.02M",
            c: "0.03M",
            d: "0.04M"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Para a reação CO(g) + 2H2(g) ⇌ CH3OH(g), se Kc = 10 e [CO] = 0.1M, [H2] = 0.2M, calcule [CH3OH].",
        opcoes: {
            a: "0.2M",
            b: "0.1M",
            c: "0.05M",
            d: "0.025M"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Para a reação 2SO2(g) + O2(g) ⇌ 2SO3(g), se Kc = 100 e [SO2] = 0.2M, [O2] = 0.1M, calcule [SO3].",
        opcoes: {
            a: "0.2M",
            b: "0.4M",
            c: "0.8M",
            d: "1.0M"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Para a reação H2(g) + Br2(g) ⇌ 2HBr(g), se Kc = 160 e [H2] = 0.2M, [Br2] = 0.2M, calcule [HBr].",
        opcoes: {
            a: "1.6M",
            b: "1.0M",
            c: "0.8M",
            d: "0.4M"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Para a reação 2NH3(g) ⇌ N2(g) + 3H2(g), se Kc = 0.5 e [NH3] = 0.4M, calcule [H2].",
        opcoes: {
            a: "0.2M",
            b: "0.1M",
            c: "0.05M",
            d: "0.025M"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Para a reação 2NO(g) ⇌ N2(g) + O2(g), se Kc = 0.1 e [NO] = 0.5M, calcule [N2].",
        opcoes: {
            a: "0.025M",
            b: "0.05M",
            c: "0.1M",
            d: "0.2M"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Para a reação 2H2(g) + O2(g) ⇌ 2H2O(g), se Kc = 500 e [H2] = 0.1M, [O2] = 0.1M, calcule [H2O].",
        opcoes: {
            a: "0.5M",
            b: "0.2M",
            c: "0.1M",
            d: "0.05M"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Para a reação N2(g) + O2(g) ⇌ 2NO(g), se Kc = 0.01 e [N2] = 0.8M, [O2] = 0.2M, calcule [NO].",
        opcoes: {
            a: "0.02M",
            b: "0.04M",
            c: "0.06M",
            d: "0.08M"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Para a reação 2HCl(g) ⇌ H2(g) + Cl2(g), se Kc = 0.05 e [HCl] = 0.5M, calcule [Cl2].",
        opcoes: {
            a: "0.125M",
            b: "0.25M",
            c: "0.5M",
            d: "1.0M"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Para a reação 2NO2(g) ⇌ N2O4(g), se Kc = 10 e [NO2] = 0.4M, calcule [N2O4].",
        opcoes: {
            a: "1.6M",
            b: "1.0M",
            c: "0.8M",
            d: "0.4M"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Para a reação CO(g) + Cl2(g) ⇌ COCl2(g), se Kc = 20 e [CO] = 0.1M, [Cl2] = 0.1M, calcule [COCl2].",
        opcoes: {
            a: "0.2M",
            b: "0.1M",
            c: "0.05M",
            d: "0.025M"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Para a reação PCl5(g) ⇌ PCl3(g) + Cl2(g), se Kc = 0.4 e [PCl5] = 0.4M, calcule [PCl3].",
        opcoes: {
            a: "0.4M",
            b: "0.2M",
            c: "0.1M",
            d: "0.05M"
        },
        resposta: "a",
        tipo: "pratica"
    },
    {
        pergunta: "Para a reação SO2(g) + NO2(g) ⇌ SO3(g) + NO(g), se Kc = 2 e [SO2] = 0.2M, [NO2] = 0.2M, calcule [SO3].",
        opcoes: {
            a: "0.4M",
            b: "0.2M",
            c: "0.1M",
            d: "0.05M"
        },
        resposta: "a",
        tipo: "pratica"
    }
];
