const questoes = {
    multipla: {
        q1: {
            pergunta: 'Qual o tipo de vegetação da região do LABGENE?',

            alternativas: {
                0: 'A região está inserida no bioma Árido, em menor porção, e mais expressivamente na Mata Atlântica, onde a cobertura vegetal de maior ocorrência é a Floresta Ombrófila Mista (Ou floresta tropical)',

                1: 'A região está inserida no bioma Caatiga, em maior porção, e menos expressivamente na Floresta Amazônia, onde a cobertura vegetal de maior ocorrência é a Floresta Ombrófila Densa (Ou floresta tropical pluvial)',

                2: 'A região está inserida no bioma Cerrado, em menor porção, e mais expressivamente na Mata Atlântica, onde a cobertura vegetal de maior ocorrência é a Floresta Ombrófila Densa (Ou floresta tropical pluvial)',

                3: 'A região está inserida no bioma Seco, em maior porção, e mais expressivamente na Mata Atlântica, onde a cobertura vegetal de maior ocorrência é a Floresta Amazônica',

                4: 'A região está inserida mais expressivamente na Mata Atlântica, em menor porção, no bioma Cerrado, onde a cobertura vegetal de maior ocorrência é a Floresta Ombrófila Densa (Ou floresta tropical pluvial)'
            },

            resposta: `A região está inserida no bioma Cerrado, em menor porção, e mais expressivamente na Mata Atlântica, onde a cobertura vegetal de maior ocorrência é a Floresta Ombrófila Densa (Ou floresta tropical pluvial)`,

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q2: {
            pergunta: `Quais os locais de patrimônio histórico que existe na região e que pode ser atingido?`,

            alternativas: {
                0: `Instituto Técnico Federal de São Paulo (IFSP); <br><br>
                Acervo do Museu de Arte Moderna de São Paulo (AMAMSP).
                `,

                1: `Mercado Municipal de Iperó; <br><br>
                Estrada Vicinal Iperó-Sorocaba`,

                2: `Instituto Chico Mendes da Conservação do Biodiesel (ICMBio); <br><br>
                Sítio histórico tombado pelo Instituto do Paraná Histórico e Artístico Nacional (IPHAN)`,

                3: `Sítio histórico tombado pelo Instituto de Patrimônio Histórico e Artístico Nacional (IPHAN);<br><br>
                
                Instituto Chico Mendes da Conservação da Biodiversidade (ICMBio).
                `,

                4: `Fundação Pátria; <br><br>
                Reator Multipropósito Brasileiro (RMB)`
            },

            resposta: `Sítio histórico tombado pelo Instituto de Patrimônio Histórico e Artístico Nacional (IPHAN);<br><br>
                
            Instituto Chico Mendes da Conservação da Biodiversidade (ICMBio)`,

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q3: {
            pergunta: `Quais os principais problemas socioambientais preexistentes na região da instalação e quais as consequências deles?`,

            alternativas: {
                0: `
                
                Estradas internas - formação de sulcos erosivos;<br><br>

                Áreas de mineração ativas ou não - bota-fora da empresa Holdercim que afetou o ribeirão do Ferro, causando estrangulação do leito e formação de lagoa <br><br>

                Aceiros - impedem propagação de incêndios, mas propiciam a formação de sulcos erosivos;<br><br>

                Gasoduto - causou alteração no curso do rio Ipanema, erosões e assoreamento. 
                `,

                1: `Oleoduto - causou alteração no curso do rio Ipanema, erosões e assoreamento; <br><br>

                Aceiros - impedem propagação de incêndios, mas propiciam a formação de sulcos erosivos;<br><br>

                Estradas internas - formação de sulcos erosivos;<br><br>

                Áreas de mineração ativas ou não - bota-fora da empresa Holdercim que afetou o ribeirão do Ferro, causando estrangulação do leito e formação de lagoa.
                `,

                2: `Aceiros - permitem a propagação de incêndios e propiciam a formação de sulcos erosivos;<br><br>

                Áreas de mineração ativas ou não - bota-fora da empresa Holdercim que afetou o ribeirão do Ferro, causando estrangulação do leito e formação de lagoa;<br><br>

                Oleoduto - causou alteração no curso do rio Ipanema, erosões e assoreamento; <br><br>

                Estradas internas - formação de sulcos erosivos.
                `,

                3: `Curvas Sinuosas na Estrada - causa de acidentes automobilístico anual acima da média;<br><br>

                Áreas de industrias química - afeta o ribeirão do Ferro, causando estrangulação do leito e formação de lagoa <br><br>

                Aceiros - impedem propagação de incêndios, mas propiciam a formação de sulcos erosivos;<br><br>
                
                Gasoduto - causou alteração no curso do rio Ipanema, erosões e assoreamento.`,

                4: `Animais peçonhentos - constantes ataques de animais selvagens na região;<br><br>

                Áreas de mineração ativas ou não - bota-fora da empresa Holdercim que afetou o ribeirão do Ferro, causando estrangulação do leito e formação de lagoa <br><br>

                Aceiros - impedem propagação de incêndios, mas propiciam a formação de sulcos erosivos;<br><br>
                
                Alteração do clima devido ao aquecimento global.`
            },

            resposta: `Estradas internas - formação de sulcos erosivos;<br><br>

                Áreas de mineração ativas ou não - bota-fora da empresa Holdercim que afetou o ribeirão do Ferro, causando estrangulação do leito e formação de lagoa <br><br>

                Aceiros - impedem propagação de incêndios, mas propiciam a formação de sulcos erosivos;<br><br>
                
                Gasoduto - causou alteração no curso do rio Ipanema, erosões e assoreamento.`,

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q4: {
            pergunta: `Quais foram os parâmetros para a escolha do local atual do LABGENE?`,

            alternativas: {
                0: `Disponibilidade de vias de tráfego. <br><br>
                Disponibilidade de água; <br><br>
                Disponibilidade de Energia Elétrica; <br><br>
                Disponibilidade de vias de desembarque de tropa; <br><br>
                Cidades de apoio próxima; <br><br>
                Sismologia estável;`,

                1: `Disponibilidade de vias de tráfego. <br><br>
                Disponibilidade de água potável; <br><br>
                Disponibilidade de Energia Elétrica; <br><br>
                Raio de 100km a partir da USP; <br><br>
                Cidades de apoio próxima; <br><br>
                Sismologia estável`,

                2: `
                Disponibilidade de vias de tráfego. <br><br>
                Disponibilidade de água; <br><br>
                Sismologia maleável;<br><br>
                Disponibilidade de Energia Elétrica; <br><br>
                Disponibilidade de vias de desembarque de tropa; <br><br>
                Cidades de apoio próxima;
                ;`,

                3: `Disponibilidade de vias de tráfego. <br><br>
                Disponibilidade de água; <br><br>
                Disponibilidade de Energia Elétrica; <br><br>
                Raio de 100km a partir da USP; <br><br>
                Proximidade com Sorocaba, São Paulo e Campinas; <br><br>
                Sismologia estável;`,

                4: `Disponibilidade de vias de tráfego. <br><br>
                Disponibilidade de água; <br><br>
                Disponibilidade de Energia Elétrica; <br><br>
                Raio de 100km a partir da USP; <br><br>
                Cidades de apoio próxima; <br><br>
                Sismologia estável`
            },

            resposta: `
            Disponibilidade de vias de tráfego. <br><br>
            Disponibilidade de água; <br><br>
            Disponibilidade de Energia Elétrica; <br><br>
            Raio de 100km a partir da USP; <br><br>
            Cidades de apoio próxima; <br><br>
            Sismologia estável;
            `,

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q5: {
            pergunta: `Qual a fonte principal de suprimento de água do LABGENE?`,

            alternativas: {
                0: `Rio Sorocaba`,

                1: `Rio Tietê`,

                2: `Rio Tatuí`,

                3: `Rio Ipanema`,

                4: `Rio Sarapuí`
            },

            resposta: `Rio Ipanema`,

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q6: {
            pergunta: `De quem é a responsabilidade do controle da Área de Exclusão do LABGENE?`,

            alternativas: {
                0: `Responsabilidade do Diretor do CINA `,

                1: `Responsabilidade do Diretor do LABGENE `,

                2: `Responsabilidade do Diretor do CTMSP `,

                3: `Responsabilidade do Diretor do CEA `,

                4: `Responsabilidade do Diretor de ARAMAR `
            },

            resposta: `Responsabilidade do Diretor do CTMSP `,

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q7: {
            pergunta: `Como é demarcada a área de exclusão e zona de baixa população do LABGENE?`,

            alternativas: {
                0: `Conforme Resolução CNEN 9/69 e 10CFR part 100 a área de exclusão tem raio 330 metros medidos a partir do marco zero (Área 3) <br><br>
                A zona de baixa população tem 2200 metros de raio a partir do marco zero (Área 4)..
                `,

                1: `Área 1 - População permanente: raio de 15 km a partir das coordenadas do prédio do LABGENE, posteriormente foram estabelecidos círculos concêntricos, com o Reator no ponto central. <br><br>
                Área 2 - População permanente: raio entre 15 e 80 km
                `,

                2: `Conforme Resolução CNEN 9/66 e 10CFR part 100 a área de exclusão tem raio 330 metros medidos a partir do marco zero (Área 2) <br><br>
                A zona de baixa população tem 2200 metros de raio a partir do marco zero (Área 3).`,

                3: `Conforme Resolução CNEN 9/69 e 10CFR part 100 a área de exclusão tem raio 220 metros medidos a partir do marco zero (Área 3) <br><br>
                A zona de baixa população tem 3300 metros de raio a partir do marco zero (Área 4).`,

                4: `Conforme Resolução CNEN 9/69 e 10CFR part 100 a área de exclusão tem raio 360 metros medidos a partir do marco zero (Área 3) <br><br>
                A zona de baixa população tem 2500 metros de raio a partir do marco zero (Área 4).`
            },

            resposta: `Conforme Resolução CNEN 9/69 e 10CFR part 100 a área de exclusão tem raio 330 metros medidos a partir do marco zero (Área 3) <br><br>
            A zona de baixa população tem 2200 metros de raio a partir do marco zero (Área 4).`,

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q8: {
            pergunta: `Quais os potenciais riscos na proximidade do sítio?`,

            alternativas: {
                0: `Gasoduto - causou alteração no curso do rio Ipanema, erosões e assoreamento; <br><br>

                Aceiros - impedem propagação de incêndios, mas propiciam a formação de sulcos erosivos;<br><br>

                Estradas internas - formação de sulcos erosivos;<br><br>

                Áreas de mineração ativas ou não - bota-fora da empresa Holdercim que afetou o ribeirão do Ferro, causando estrangulação do leito e formação de lagoa
                `,

                1: `
                Linhas de transmissão; <br><br>
                Rotas com potenciais de riscos;<br><br>
    Gasodutos Bolívia-Brasil;<br><br>
    Ferrovias e rodovias;<br><br>
    Instalações do CEA;<br><br>
    Ocorrências de incêndios;<br><br>
    Invasões;<br><br>
    Instalações próximas.`,

                2: `Ocorrências de incêndios;<br><br>
                Risco de sabotagem; <br><br>
                Rotas com potenciais de riscos;<br><br>
    Gasodutos Bolívia-Brasil;<br><br>
    Ferrovias, rodovias;<br><br>
    Instalações do CEA;<br><br>
    Invasões;<br><br>
    Instalações próximas.`,

                3: `Ocorrências de incêndios;<br><br>
                Linhas de transmissão de Internet; <br><br>
                Rotas com potenciais de riscos;<br><br>
    Gasodutos Bolívia-Brasil;<br><br>
    Ferrovias, rodovias;<br><br>
    Instalações do CEA;<br><br>
    Invasões;<br><br>
    Instalações próximas.`,

                4: `Ocorrências de incêndios;<br><br>
                Linhas de transmissão de Internet; <br><br>
                Rotas com potenciais de riscos;<br><br>
    Gasodutos Bolívia-Brasil;<br><br>
    Ferrovias, rodovias e hidrovias;<br><br>
    Instalações do CEA;<br><br>
    Invasões;<br><br>
    Instalações próximas.`
            },

            resposta: `
            Linhas de transmissão; <br><br>
            Rotas com potenciais de riscos;<br><br>
Gasodutos Bolívia-Brasil;<br><br>
Ferrovias e rodovias;<br><br>
Instalações do CEA;<br><br>
Ocorrências de incêndios;<br><br>
Invasões;<br><br>
Instalações próximas.
`,

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q9: {
            pergunta: `Quais as medidas tomadas para evitar os riscos de inundação no rio que possa afetar o LABGENE? `,

            alternativas: {
                0: `Mesmo ocorrendo a vazão máxima provável, o transbordamento da calha do rio nas proximidades do LABGENE não será capaz de atingi-la.<br><br>
                
                Portanto, não é necessário nenhuma medida pois não existe risco de inundação no rio`,

                1: ``,

                2: `Serão feitas barreiras físicas no sistema viário no LABGENE com declividades, guias e sarjetas. serão verificadas/recalculadas para a drenagem da água proveniente de uma chuva de grande intensidade além de escoamento adequado ao fluxo no local.`,

                3: `As canaletas de drenagem e o sistema viário no LABGENE com declividades, guias e sarjetas existentes serão verificadas/recalculadas para a drenagem da água proveniente de uma chuva de grande intensidade além de escoamento adequado ao fluxo no local.`,

                4: `Mesmo ocorrendo a vazão máxima provável, o transbordamento da calha do rio nas proximidades do LABGENE não será capaz de atingi-la.<br><br>
                
                Mesmo assim, as canaletas de drenagem e o sistema viário no LABGENE com declividades, guias e sarjetas existentes serão superdimensionadas para a drenagem da água proveniente de uma chuva de grande intensidade além de escoamento adequado ao fluxo no local.`
            },

            resposta: `As canaletas de drenagem e o sistema viário no LABGENE com declividades, guias e sarjetas existentes serão verificadas/recalculadas para a drenagem da água proveniente de uma chuva de grande intensidade além de escoamento adequado ao fluxo no local.`,

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q10: {
            pergunta: `Qual é o posto fluviométrico mais próximo de Aramar?`,

            alternativas: {
                0: `Estação Corumbá`,

                1: `Estação Araçoiaba`,

                2: `Estação Usexa`,

                3: `Estação Ipanema`,

                4: `Estação Tupinambá`
            },

            resposta: `Estação Corumbá`,

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q11: {
            pergunta: `Qual a magnitude máxima possível de Probabilidade de Sismo (PSS)  que se pode definir na região, utilizando um discernimento conservador?`,

            alternativas: {
                0: `Valor de  mb 7,8 ou 8,0`,

                1: `Valor de  mb 5,8 ou 6,0`,

                2: `Valor de  mb 6,8 ou 7,0`,

                3: `Valor de  mb 6,8 ou 7,8`,

                4: `Valor de  mb 7,0 ou 6,8`
            },

            resposta: `Valor de  mb 7,0 ou 6,8`,

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q12: {
            pergunta: `Qual o valor que se pode concluir de sismo básico de projeto recomendado para uma instalação nuclear do CEA?`,

            alternativas: {
                0: `Probabilidade anual de 10<sup>-5</sup> `,

                1: `Probabilidade anual de 10<sup>-4</sup> `,

                2: `Probabilidade anual de 10<sup>-3</sup> `,

                3: `Probabilidade anual de 10<sup>-8</sup> `,

                4: `Probabilidade anual de 10<sup>-2</sup> `
            },

            resposta: `Probabilidade anual de 10<sup>-4</sup> `,

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q13: {
            pergunta: `Qual o documento tomado como base para o regulamento de procedimentos para a identificação e caracterização de fontes sísmicas e para a determinação do nível de movimento do terreno?`,

            alternativas: {
                0: `CNEN NN 8.01`,

                1: `RFAS`,

                2: `IAEA 1.165`,

                3: `Regulatory Guide 1.165`,

                4: `NRC Guide 6.265`
            },

            resposta: `Regulatory Guide 1.165`,

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
        q14: {
            pergunta: `Como é demarcado a distribuição da população?`,

            alternativas: {
                0: `Área 1 - População permanente: raio de 15 km a partir das coordenadas do prédio do LABGENE, posteriormente foram estabelecidos círculos concêntricos, com o Reator no ponto central. <br><br>

                Área 2 - População permanente: raio entre 15 e 80 km
                `,

                1: `Área 1 - População permanente: raio de 15 km a partir das coordenadas do ponto central do reator, posteriormente foram estabelecidos círculos concêntricos, com o prédio do LABGENE no ponto central. <br><br>

                Área 2 - População permanente: raio entre 15 e 80 km`,

                2: `Área 1 - População permanente: raio entre 15 e 80 km.<br><br> 
                
                Área 2 - População permanente: raio de 15 km a partir das coordenadas do prédio do LABGENE, posteriormente foram estabelecidos círculos concêntricos, com o Reator no ponto central.`,

                3: `Área 1 - População permanente: raio de 15 km a partir das coordenadas do prédio do LABGENE, posteriormente foram estabelecidos círculos concêntricos, com o Reator no ponto central. <br><br>
                
                Área 2 - População temporária: raio entre 15 e 80 km`,

                4: `Área 1 - População permanente: raio de 15 km a partir das coordenadas do prédio do LABGENE, posteriormente foram estabelecidos círculos concêntricos, com o PAC no ponto central. <br><br>
                
                Área 2 - População permanente: raio entre 15 e 80 km`
            },

            resposta: `Área 1 - População permanente: raio de 15 km a partir das coordenadas do prédio do LABGENE, posteriormente foram estabelecidos círculos concêntricos, com o Reator no ponto central. <br><br>
                
                Área 2 - População permanente: raio entre 15 e 80 km`,

            responder(alternativa) {
                if (alternativa == this.resposta) {
                    return true;
                } else {
                    return false
                }
            }
        },
    }
}