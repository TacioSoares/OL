const questoes = {
    multipla: {
        q1: {
            pergunta: 'Marque a alternativa verdadeira',

            alternativas: {
                0: 'Com a melhora na transferência de calor, as temperaturas no combustível se tornam menores, o que por sua vez proporciona uma maior liberação de gases de fissão',

                1: 'Com a melhora na transferência de calor, as temperaturas no combustível se tornam menores, o que por sua vez proporciona uma menor liberação de gases de fissão',

                2: 'Com a melhora na transferência de calor, as temperaturas no combustível se tornam maiores, o que por sua vez proporciona uma menor liberação de gases de fissão',

                3: 'Com a melhora na transferência de calor, as temperaturas no combustível se tornam maiores, o que por sua vez proporciona uma maior liberação de gases de fissão',

                4: 'Com a melhora na transferência de calor, as temperaturas no combustível se tornam menores, o que por sua vez proporciona uma maior liberação de corrosão'
            },

            resposta: 'Com a melhora na transferência de calor, as temperaturas no combustível se tornam menores, o que por sua vez proporciona uma menor liberação de gases de fissão',

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q2: {
            pergunta: `Qual a potência elétrica aproximada e a potência térmica prevista no LABGENE?`,

            alternativas: {
                0: `8,3 KW elétricos e 48KWt.
                `,

                1: `8,3 KW elétricos e 48MWt`,

                2: `8,3 MWt e 48KW elétricos`,

                3: '48MWt e 8,3 MW elétricos',

                4: `48 MW elétricos e 8,3MWt`
            },

            resposta: '48MWt e 8,3 MW elétricos',

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q3: {
            pergunta: `Marque a alternativa FALSA`,

            alternativas: {
                0: 'Com o reator a 100% de potência, a diferença de temperatura entre a entrada e a saída do fluido refrigerante no reator é de 20,4°C',

                1: 'O LABGENE irá operar na maior parte do tempo à 30% de potência e deverá ter a capacidade de atingir 100% da potência total em um curso espaço de tempo.',

                2: 'O LABGENE foi projetado considerando um programa de operação com potência média de 8,3MWt, 30% da sua potência nominal.',

                3: '28 varetas absorvedoras compõe uma barra de segurança/controle',

                4: 'O LABGENE apresenta menor oscilação espacial de Xenônio do que plantas PWR comerciais o que contribui na estabilidade e segurança da planta.'
            },

            resposta: 'O LABGENE foi projetado considerando um programa de operação com potência média de 8,3MWt, 30% da sua potência nominal.',

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q4: {
            pergunta: 'Qual condição determina o fim do ciclo de um núcleo do LABGENE?',

            alternativas: {
                0: 'Quando atinge-se 3,2 anos de operação',

                1: 'Quando não tiver reatividade suficiente para permitir o religamento, mesmo nas condições mais adversas de concentração de Xenônio.',

                2: 'Quandão não tiver reatividade suficiente para permitir o religamento, após o pico de Xenônio.',

                3: 'Quando atinge-se 2,3 anos de operação',

                4: 'Quando atinge-se 0,96 anos de operação caso esteja com 100%',
            },

            resposta: 'Quando não tiver reatividade suficiente para permitir o religamento, mesmo nas condições mais adversas de concentração de Xenônio.',

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q5: {
            pergunta: 'Qual propriedade que o revestimento da vareta combustível NÃO deve possuir?',

            alternativas: {
                0: 'Alta confiabilidade',

                1: 'Alta economia de nêutrons',

                2: 'Alta resistência mecânica',

                3: 'Alta resistência à corrosão',

                4: 'Alta seção de choque de absorção de nêutrons',
            },

            resposta: 'Alta seção de choque de absorção de nêutrons',

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q6: {
            pergunta: `Qual a diferença entre o zircaloy e o aço inoxidável austenítico para revestimento da vareta combustível?`,

            alternativas: {
                0: 'O aço é mais susceptível à corrosão sob tensão por produtos de fissão que o zircaloy.',

                1: 'O aço inoxidável austenítico apresenta uma maior temperatura de fusão.',

                2: 'O zircaloy é largamente utilizado em reatores comerciais em relação ao aço inoxidável.',

                3: 'O aço inoxidável austenítico apresenta a desvantagem de possuir uma menor seção de choque de absorção para nêutrons térmicos.',

                4: 'Durante acidentes onde a temperatura do revestimento permanece abaixo de 1.200 °C, o zircaloy exibe taxa de reação metal-vapor, cuja a quantidade de Hidrogênio liberada e o calor de reação são menores que os do aço.'
            },

            resposta: 'O zircaloy é largamente utilizado em reatores comerciais em relação ao aço inoxidável.',

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q7: {
            pergunta: 'Qual dos motivos abaixo pode ser a causa de tensões mecânicas impostas ao revestimento do combustível.',

            alternativas: {
                0: 'Baixas temperaturas.',

                1: 'Vibração induzida pelo fluxo magnético.',

                2: 'Diferença entre a pressão do refrigerante e a pressão interna da vareta.',

                3: 'Interação com o MAB causada pela liberação do fuso a partir de um SCRAM.',

                4: 'Aumento da difença de temperatura entre a perna quente e a perna fria.',
            },

            resposta: 'Diferença entre a pressão do refrigerante e a pressão interna da vareta.',

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q8: {
            pergunta: 'Qual dessas é uma função do gás hélio no tubo de revestimento?',

            alternativas: {
                0: 'Manter uma pressão interna no revestimento ligeiramente inferior a pressão externa.',

                1: 'Aumentar a temperatura do combustível transferindo mais calor para a água.',

                2: 'Servir de isolante químico, evitando a corrosão do material em contato com a água.',

                3: 'Confinar os gases de produtos de fissão.',

                4: 'Possibilitar a execução do ensaio de vazamento.',
            },

            resposta: 'Possibilitar a execução do ensaio de vazamento.',

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q9: {
            pergunta: 'Quantos EC compõe o núcleo do LABGENE?',

            alternativas: {
                0: '23 elementos combustíveis',

                1: '21 elementos combustíveis',

                2: '17 elementos combustíveis',

                3: '20 elementos combustíveis',

                4: '28 elementos combustíveis',
            },

            resposta: '21 elementos combustíveis',

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q10: {
            pergunta: 'Marque a alternativa correta',

            alternativas: {
                0: 'O LABGENE possui 5440 pastilhas combustíveis',

                1: 'O comprimento ativo da vareta combustível é de 98,7 cm',

                2: 'As pastilhas possuem concavidades nas bordas para diminuir a probabilidade da interação mecânica entre a pastilha e o revestimento durante a operação do reator',

                3: 'O bocal lateral também funciona como um filtro de detritos',

                4: 'As extremidades da pastilha possuem chanfros para evitar maiores expansões axiais no seu centro',
            },

            resposta: 'O comprimento ativo da vareta combustível é de 98,7 cm',

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q11: {
            pergunta: 'Que parte do esqueleto do EC auxilia a evitar a ejeção de uma vareta combustível?',

            alternativas: {
                0: 'A placa perfurada do bocal superior',

                1: 'A placa lateral inferior',

                2: 'A mola do plenum',

                3: 'Tubo guia',

                4: 'Grade espaçadora',
            },

            resposta: 'A placa perfurada do bocal superior',

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q12: {
            pergunta: 'A parte inferior do tubo guia do elemento de controle/segurança tem uma particularidade para amortecer a queda da barra de controle durante um "SCRAM". Que particularidade é essa?',

            alternativas: {
                0: 'O tubo guia é inundado com água',

                1: 'Possui uma mola no plenum',

                2: 'Possui um diâmetro interno reduzido',

                3: 'Possui um freio mecânico',

                4: 'Possui uma trava hidráulica'
            },

            resposta: 'Possui um diâmetro interno reduzido',

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q13: {
            pergunta: 'Como será exercido o controle de reatividade do LABGENE?',

            alternativas: {
                0: 'Será exercido apenas por meio de elementos de controle e de segurança contendo varetas absorvedoras de nêutrons. Não haverá controle de reatividade por diluição de boro',

                1: 'Será exercido por meio de elementos de controle e de segurança contendo varetas absorvedoras de nêutrons e também por meio de varetas de veneno queimável.',

                2: 'Será exercido por meio de elementos de controle e de segurança contendo varetas absorvedoras de nêutrons e diluição de boro.',

                3: 'Será exercido por meio de elementos de segurança contendo varetas absorvedoras de nêutrons.',

                4: 'Será exercido apenas pela movimentação dos bancos de controle.',
            },

            resposta: 'Será exercido por meio de elementos de controle e de segurança contendo varetas absorvedoras de nêutrons e também por meio de varetas de veneno queimável.',

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q14: {
            pergunta: 'Serão usadas para diminuir a reatividade inicial do Reator e também para se obter uma distribuição mais homogênea no perfil radial do fluxo de nêutrons no núcleo:',

            alternativas: {
                0: 'As barras de controle',

                1: 'As varetas de veneno queimável',

                2: 'As barras de segurança',

                3: 'As injeções de boro',

                4: 'As placas refletoras',
            },

            resposta: 'As varetas de veneno queimável',

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q15: {
            pergunta: 'O que é um banco de controle?',

            alternativas: {
                0: 'Elemento mecânico utilizado para movimentar o conjunto das 28 varetas absorvedoras de um Elemento combustível',

                1: 'Conjunto de barras de controle que são movimentadas em conjunto durante a operação do Reator',

                2: 'Elemento mecânico utilizado para movimentar o conjunto das 28 barras de controle absorvedoras de um Elemento combustível',

                3: 'Conjunto de barras de controle que são fixadas em conjunto durante a operação do Reator',

                4: 'Elemento mecânico utilizado para movimentar a aranha'
            },

            resposta: 'Conjunto de barras de controle que são movimentadas em conjunto durante a operação do Reator',

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q16: {
            pergunta: 'Existe dependência no movimento entre as barras de controle e as barras de segurança?',

            alternativas: {
                0: 'As barras de controle e segurança são mecanicamente dependentes entre si.',

                1: 'As barras de controle e segurança são mecanicamente independentes entre si, e a lógica de funcionamento mantêm as barras de um mesmo banco com um ajuste necessário para evitar distribuição anormal de fluxo de potência.',

                2: 'As barras de controle e segurança são mecanicamente independentes entre si, no entanto, a lógica de funcionamento mantêm as barras de todos os bancos alinhados com uma determinada tolerância.',

                3: 'As barras de controle e segurança são eletricamente dependentes por isso, a lógica de funcionamento mantêm as barras de um mesmo banco alinhadas.',

                4: 'As barras de controle e segurança são mecanicamente independentes entre si, no entanto, a lógica de funcionamento mantêm as barras de um mesmo banco alinhados com uma determinada tolerância.',
            },

            resposta: 'As barras de controle e segurança são mecanicamente independentes entre si, no entanto, a lógica de funcionamento mantêm as barras de um mesmo banco alinhados com uma determinada tolerância.',

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q17: {
            pergunta: 'Qual a responsabilidade do banco C?',

            alternativas: {
                0: 'É utilizado para manter o reator crítico ele compensa as variações de reatividade no núcleo devido, por exemplo, a manobras de potência, e é movimentado automaticamente pelo SDCP de forma a manter a temperatura média do moderador aproximadamente constante',

                1: 'É utilizado para compensar a queima do combustível e do veneno queimável.',

                2: 'Tem a função de desligamento.',

                3: 'Juntamente com o banco A2 são utilizados para compensar a queima do combustível e do veneno queimável e são reposicionados de tempos em tempos.',

                4: 'É utilizado para compensar a queima do combustível e do veneno queimável e é reposicionado de tempos em tempos.',
            },

            resposta: 'É utilizado para compensar a queima do combustível e do veneno queimável.',

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q18: {
            pergunta: 'Marque a opção verdadeira',

            alternativas: {
                0: 'Elementos de controle e de segurança são idênticos nos aspectos geométricos e dimensionais, diferindo somente nos materiais do interior das varetas absorvedoras de nêutrons',

                1: 'Os bancos A1 e A2, têm a função de desligamento e permanecem fora do núcleo durante a operação do reator sendo inseridos conforme os venenos queimáveis vão sendo consumidos.',

                2: 'O Sistema de Injeção de Boro no LABGENE é ativado pelo Sistema de Proteção do Protótipo. Esse sistema atua apenas nos casos de desligamento rápido da planta.',

                3: 'O carregamento do combustível com os elementos de controle e segurança é considerado um erro na sequência de carregamento.',

                4: 'A configuração é mantida estruturalmente pelos tubos guias, grades espaçadoras e bocais de extremidades é: 260 varetas combustíveis, 17 tubos guias e 1 tubo de instrumentação, sendo esses colocados em um reticulado quadrado de 28x28.',
            },

            resposta: 'Elementos de controle e de segurança são idênticos nos aspectos geométricos e dimensionais, diferindo somente nos materiais do interior das varetas absorvedoras de nêutrons',

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
    },
    
    embaralhar() {
        let arrayDeNumeros = arrayDeNumerosSorteados()
        
        let questoesDeMultiplaEscolha = Object.entries(questoes.multipla)
        
        let w = 0
        while (w < 4) {
            [questoes.multipla.q1.alternativas[w], questoes.multipla.q1.alternativas[arrayDeNumeros[w]]] = [questoes.multipla.q1.alternativas[arrayDeNumeros[w]], questoes.multipla.q1.alternativas[w]]
            w ++
        }
        w = 0
        while (w < 4) {
            [questoes.multipla.q2.alternativas[w], questoes.multipla.q2.alternativas[arrayDeNumeros[w]]] = [questoes.multipla.q2.alternativas[arrayDeNumeros[w]], questoes.multipla.q2.alternativas[w]] 
            w ++
        }
        w = 0
        while (w < 4) {
            [questoes.multipla.q3.alternativas[w], questoes.multipla.q3.alternativas[arrayDeNumeros[w]]] = [questoes.multipla.q3.alternativas[arrayDeNumeros[w]], questoes.multipla.q3.alternativas[w]]
            w ++
        }
        w = 0
        while (w < 4) {
            [questoes.multipla.q4.alternativas[w], questoes.multipla.q4.alternativas[arrayDeNumeros[w]]] = [questoes.multipla.q4.alternativas[arrayDeNumeros[w]], questoes.multipla.q4.alternativas[w]]
            w ++
        }
        w = 0
        while (w < 4) {/* 
            questoes.multipla.q5.alternativas[w] = questoes.multipla.q5.alternativas[arrayDeNumeros[w]] 
 */
            [questoes.multipla.q5.alternativas[w], questoes.multipla.q5.alternativas[arrayDeNumeros[w]]] = [questoes.multipla.q5.alternativas[arrayDeNumeros[w]], questoes.multipla.q5.alternativas[w]]
            /* console.log(arrayDeNumeros)
            console.log(questoes.multipla.q5.alternativas[w])
            console.log(questoes.multipla.q5.alternativas[arrayDeNumeros[w]]) */
            w ++
        }
        w = 0
        while (w < 4) {
            [questoes.multipla.q6.alternativas[w], questoes.multipla.q6.alternativas[arrayDeNumeros[w]]] = [questoes.multipla.q6.alternativas[arrayDeNumeros[w]], questoes.multipla.q6.alternativas[w]]
            w ++
        }
        w = 0
        while (w < 4) {
            [questoes.multipla.q7.alternativas[w], questoes.multipla.q7.alternativas[arrayDeNumeros[w]]] = [questoes.multipla.q7.alternativas[arrayDeNumeros[w]], questoes.multipla.q7.alternativas[w]]
            w ++
        }
        w = 0
        while (w < 4) {
            [questoes.multipla.q8.alternativas[w], questoes.multipla.q8.alternativas[arrayDeNumeros[w]]] = [questoes.multipla.q8.alternativas[arrayDeNumeros[w]], questoes.multipla.q8.alternativas[w]]
            w ++
        }
        w = 0
        while (w < 4) {
            [questoes.multipla.q9.alternativas[w], questoes.multipla.q9.alternativas[arrayDeNumeros[w]]] = [questoes.multipla.q9.alternativas[arrayDeNumeros[w]], questoes.multipla.q9.alternativas[w]]
            w ++
        }
        w = 0
        while (w < 4) {
            [questoes.multipla.q10.alternativas[w], questoes.multipla.q10.alternativas[arrayDeNumeros[w]]] = [questoes.multipla.q10.alternativas[arrayDeNumeros[w]], questoes.multipla.q10.alternativas[w]] 
            w ++
        }
        w = 0
        while (w < 4) {
            [questoes.multipla.q11.alternativas[w], questoes.multipla.q11.alternativas[arrayDeNumeros[w]]] = [questoes.multipla.q11.alternativas[arrayDeNumeros[w]], questoes.multipla.q11.alternativas[w]] 
            w ++
        }
        w = 0
        while (w < 4) {
            [questoes.multipla.q12.alternativas[w], questoes.multipla.q12.alternativas[arrayDeNumeros[w]]] = [questoes.multipla.q12.alternativas[arrayDeNumeros[w]], questoes.multipla.q12.alternativas[w]] 
            w ++
        }
        w = 0
        while (w < 4) {
            [questoes.multipla.q13.alternativas[w], questoes.multipla.q13.alternativas[arrayDeNumeros[w]]] = [questoes.multipla.q13.alternativas[arrayDeNumeros[w]], questoes.multipla.q13.alternativas[w]] 
            w ++
        }
        w = 0
        while (w < 4) {
            [questoes.multipla.q14.alternativas[w], questoes.multipla.q14.alternativas[arrayDeNumeros[w]]] = [questoes.multipla.q14.alternativas[arrayDeNumeros[w]], questoes.multipla.q14.alternativas[w]] 
            w ++
        }
        w = 0
        while (w < 4) {
            [questoes.multipla.q15.alternativas[w], questoes.multipla.q15.alternativas[arrayDeNumeros[w]]] = [questoes.multipla.q15.alternativas[arrayDeNumeros[w]], questoes.multipla.q15.alternativas[w]] 
            w ++
        }
        w = 0
        while (w < 4) {
            [questoes.multipla.q16.alternativas[w], questoes.multipla.q16.alternativas[arrayDeNumeros[w]]] = [questoes.multipla.q16.alternativas[arrayDeNumeros[w]], questoes.multipla.q16.alternativas[w]] 
            w ++
        }
        w = 0
        while (w < 4) {
            [questoes.multipla.q17.alternativas[w], questoes.multipla.q17.alternativas[arrayDeNumeros[w]]] = [questoes.multipla.q17.alternativas[arrayDeNumeros[w]], questoes.multipla.q17.alternativas[w]] 
            w ++
        }
        w = 0
        while (w < 4) {
            [questoes.multipla.q18.alternativas[w], questoes.multipla.q18.alternativas[arrayDeNumeros[w]]] = [questoes.multipla.q18.alternativas[arrayDeNumeros[w]], questoes.multipla.q18.alternativas[w]] 
            w ++
        }
    },

    
    
}
function arrayDeNumerosSorteados() {
    let questaoSorteada = []
    while (questaoSorteada.length < 5) {
        var numero = Math.floor(Math.random() * (5))
        if (questaoSorteada.indexOf(numero) == -1) {
            questaoSorteada.push(numero)
        }
    }
    return questaoSorteada
}
questoes.embaralhar()