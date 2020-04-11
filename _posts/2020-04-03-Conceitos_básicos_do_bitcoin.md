---
title: Conceitos Básicos do Bitcoin
layout: post
youtubelink: https://www.youtube.com/embed/lv3Z4IrLP90
questions: conceitos-bitcoin
options: conceitos-bitcoin
author: José Carlos Tobias da Silva
subject: Criptomoedas
categories: [moeda, mercado, serviços, microeconomia]
---

Muitas vezes, os materiais encontrados sobre as criptomoedas não têm como objetivo o público estudante economia - explicando conceitos de maneira técnicas que são entendíveis apenas por aqueles que fazem parte de um nicho da computação. Portanto essa aula tem o objetivo de iniciar uma pessoa, que não tem conhecimentos técnicos de computação, a entender o que torna as criptomoedas tão utilizadas no mundo atual. Explicar conceitos de maneiras simples e demonstrar a utilização da moeda num cenário simplificado mas com entendimento das operações é o principal objetivo desta postagem.

Nessa aula, conceitos principais como: descentralização, *blockchain*, mineradores, transações e carteiras deverão ficar com seus pontos iniciais. Esses termos são muito utilizados quando se está falando de criptomoedas (como o Bitcoin) mas raramente são explicados, ou desmistificados, de maneira simples. Deve-se ficar claro que diversas tecnicidades foram abstraídas ou não explicitadas durante a explicação para que não se perca o foco da aula - que não é direcionada para desenvolvedores.

### Introdução

O Bitcoin é precursora do modelo atual empregado em criptomoedas. Todas as criptomoedas atualmente empregam um modelo igual ou extremamente parecido - adaptando pequenas modificações para seus fins. Pode-se dizer que o surgimento do Bitcoin se deu no dia 31 de outubro de 2008 quando foi divulgado o artigo intitulado *A Peer-to-Peer Electronic Cash System* que continha toda a explicação da implementação e modus-operandis da moeda que estava ainda a ser implementada na época. Esse artigo foi divulgado sob o pseudônimo de Satoshi Nakamoto - o qual ainda não se tem provas concretas de sua identidade. A primeira transação foi feita, e registrada pelos mecanismos da moeda, no dia primeira de março de 2009 - pelo próprio Satoshi Nakamoto.

### Desmistificando Termos

Nessa seção, os termos: descentralização, *blockchain* e mineradores serão explicados, nessa ordem, de maneira sutil e com poucos conceitos técnicos. Farei ao final da seção o link de artigos que têm como objetivo explicar mais a fundo conceitos explicados para aqueles que achem necessidade do aprofundamento.

#### Descentralização

O funcionamento do Bitcoin se dá por uma rede P2P. As redes P2P são caracterizadas pelo seu funcionamento onde nós conectados a rede trocam mensagens contendo informações de um para o outro - isso quer dizer que as mensagens são passadas de um para um - até que seu objetivo seja alcançado. Esses objetivos podem ser desde fazer com que todos os nós da rede recebam determinada informação, ou fazer com que um nó qualquer envie uma mensagem para outro nó.

Na rede Bitcoin, os nós são os usuários da rede e eles executam ações de acordo com protocolos empregados. Protocolos são definidos como "um conjunto de informações, decisões, normas e regras definidas a partir de um ato oficial para que ações sejam aceitas dentro de um determinado ambiente" - ou seja, o protocolo foi definido pelos criadores da rede Bitcoin e os usuários que desejam usufruir das funcionalidades da rede devem obedecer a este protocolo para que suas ações sejam aceitas. Os protocolos são pré-definidos, porém não há um mecanismo central controlando outros aspectos da rede como um banco ou governo. Todos os usuários na rede colaboram com seu funcionamento recebendo e repassando mensagens pela rede, e a rede ajusta sua forma de trabalho através do seu próprio funcionamento.

### Blockchain (Blocos Encadeados)

Talvez o maior *buzzword* (palavra/termo da moda) quando se fala de Bitcoin é o *blockchain*. O *blockchain*, em seu conceito mais básico, é nada mais do que um conjunto de protocolos que tornou possível a implementação das criptomoedas como conhecidas atualmente. No artigo citado anteriormente, "*A Peer-to-Peer Electronic Cash System*" de Satoshi Nakamoto, ele explicita problemas manejados com a implementação do *blockchain* como o *double spending* (gasto duplo) - que é uma antiga vulnerabilidade enfrentadas por tentativas anteriores à implementação do *blockchain* por outras moedas.

Além disso, também é denominado *blockchain* o registro distribuído - e único - que guarda todas as transações, em forma de blocos, feitas com a moeda desde a criação da rede Bitcoin. A correlação entre os protocolos e o registro é muito grande, portanto é entendível que os termos sejam usados intercaladamente para o *blockchain* em sua forma de tecnologia e protocolos, bem como para o *blockchain* em sua forma de estrutura e quase-vida dada pelos protocolos empregados na sua criação. Deve-se ficar atento então quando este termo estiver a ser discutido - se estivermos falando de adição de blocos ao *blockchain* é de se saber que este *blockchain* é o registro em sua forma de blocos encadeados, se estivermos falando de regulamentação da rede pelo *blockchain* é de se saber que este *blockchain* é o conjunto de protocolos. Os blocos são adicionados à estrutura *blockchain*, mas a rede obedece ao protocolo *blockchain*.

A principal inovação do Bitcoin é o *blockchain* e isso deve ser reconhecido de antemão no estudo das criptomoedas.

### Miners (Mineradores)

Os mineradores são nós conectados a rede que têm um papel não de usuário comum, aquele que está ali para executar transações, mas com o papel de confirmar transações. Essa confirmação de uma transação, se dá quando ela é agrupada com outras transações formando um bloco e é adicionada ao *blockchain* - registro único e distribuído de todas as transações. Ao fazer a junção de transações em blocos, resolver um determinado problema de criptografia e adicionar o bloco ao *blockchain* os mineradores recebem uma quantidade de bitcoins pelo bloco e também as taxas de todas as transações no bloco - sendo assim, a atividade de mineração é rentável e os mineradores são remunerados fixamente por bloco confirmado bem como pelos usuário da rede com o pagamento de taxas opcionais. A rede se ajusta de maneira a permitir que um bloco seja adicionar ao *blockchain* a cada 10 minutos.

Os mineradores são essenciais para o funcionamento de uma rede de criptomoedas - como o Bitcoin. Sem eles, as transações não são confirmadas e a rede não terá funcionamento de acordo com o esperado. Como dito, qualquer usuário é um minerador em potencial, porém atualmente existem computadores especializados na atividade que se mostra rentável e suficiente para dar vasão ao grande número de transações realizadas.

### Transações

As transações são atividades que envolvem a troca de valores entre dois nós da rede Bitcoin. Assim sendo, quando um usuário retira valor de seus fundos e os repassa para fundos de outro usuário, uma transação ocorre. Vamos verificar agora os principais mecanismos e ferramentas envolvidas nas transações

#### Carteiras

Carteiras funcionam como lugar para armazenamento e verificação de valores, bem como locais de saída e chega de valores em transações - exatamente como no mundo real. Porém, as carteiras de Bitcoin possuem uma arquitetura que vai além de carteiras do mundo real e por isso é mais fácil pensar nelas como uma conta de banco.

As carteiras podem ser totalmente administradas por um usuário, sem a necessidade de nenhuma intervenção de terceiros. Porém, essa atividade requer conhecimento técnico do funcionamento das criptomoedas e de como suas transações são montadas para trafegarem pela rede, e por isso esse serviço de manejamento de carteira é geralmente prestado por empresas para uma grande parte do público. Essas empresas prestam funcionalidades específicas para os usuários e para fins variados, tornando-se um grande atrativo para produtividade e facilidade de uso das carteiras. É importante entender que as transações são realizadas de carteira para carteira e não de usuário para usuário, portanto há de se ter ao menos uma carteira para cada usuário que está a realizar transações na rede.

Um fator principal para diferenciação das carteiras convencionais, da vida real que conhecemos, e das carteiras de Bitcoin, é o fato delas serem identificadas unicamente por um endereço - assim como um número de conta de banco. Esse endereço tem o nome de *Bitcoin address* (endereço de Bitcoin), e portanto nas transações esse endereço funciona como origem e destino de valores.

#### Verificações

Quando transações são feitas na rede Bitcoin, os valores empregados formam um rastro pela rede formando entradas e saídas. Sendo assim, se você receber um determinado valor de uma pessoa, e repassá-lo para um terceiro, é possível verificar que este valor que você passou a um terceiro foi recebido em transações anteriores. Esses valores que estão nas carteiras e podem ser gastos, são chamados de valores de saída não gastos (UTXO - *Unspent Transaction Output*), e eles podem ser validados desde sua concepção na cadeia de registros do *blockchain*.

Os valores de UTXO são como notas ou moedas de dinheiro em sua carteira, e portanto você só consegue gastar o valor integral de uma ou mais UTXO em uma transação. Caso o valor que você empregar na transação for maior que o valor a ser pago, você deverá receber o troco em forma de uma única UTXO. Por exemplo, se você for comprar algo que custe 10 bitcoins e você tenha quatro UTXO de 3 bitcoins cada, você deverá empregar as quatro UTXO disponíveis (3 + 3 + 3 + 3  = 4*3 = 12) e receber então o valor de 2 bitcoins de troco - lhe deixando assim com uma UTXO com valor 2 para poder ser gasto numa próxima transação. Percebe-se então, grande semelhança com a utilização de valores em notas e moedas.

#### Tipos Básicos de Transações

Existem três tipos básicos de transações que empregam o modelo básico nas trocas realizadas em bitcoins. São elas:

- **Transação Comum**: 1 entrada e 2 saídas.
  - 1 envio de A para B, com um recebimento em B e um envio de troco de A para A
  - !["diagrama de modelo de transação comum"]({{ site.url }}/{{ site.baseurl }}/assets/images/conceitos-do-bitcoin/transacao1.png){: .img-fluid}

- **Transação Agregada**: Múltiplas entradas e 1 saída
  - 1 envio com somatório de várias entradas de A para B, com um recebimento em B
  - !["diagrama de modelo de transação agregada"]({{ site.url }}/{{ site.baseurl }}/assets/images/conceitos-do-bitcoin/transacao2.png){: .img-fluid}

- **Transação Distribuída**: 1 entrada e múltiplas saídas
  - 1 envio de A para B, com um recebimento em B e vários envios de B para outros
  - !["diagrama de modelo de transação distribuída"]({{ site.url }}/{{ site.baseurl }}/assets/images/conceitos-do-bitcoin/transacao3.png){: .img-fluid}

É importante lembrar que no mundo real, bem como em transações reais de bitcoins, esses tipo de transações podem ser combinados e geralmente são. Por exemplo, é difícil haver uma transação no modelo distribuído ou agregado que não possua troco.