import { Level } from "./Level.js";

let currentTextIndex = 0;


let levelsHelpsTexts = {
    1: getLevel1HelpTexts(),
    2: getLevel2HelpTexts(),
    3: getLevel3HelpTexts(),
    4: getLevel4HelpTexts(),
    5: getLevel5HelpTexts(),
    6: getLevel6HelpTexts(),
    7: getLevel7HelpTexts(),
    8: getLevel8HelpTexts(),
    9: getLevel9HelpTexts(),
    10: getLevel10HelpTexts(),
}

function setCurrentText(text) {
    let currentLevel = Level.CURRENT_LEVEL;
    document.getElementById('helpTextHolder').innerHTML = text;

    document.getElementById('dialogCounter').innerHTML = (currentTextIndex + 1) + "/" + levelsHelpsTexts[currentLevel].length
    setImage()
    
    function setImage(){

        if(isOdd(currentTextIndex) === true){
            document.getElementById("explainerImg").setAttribute("src", "Assets/explainer2.png");
        }else{
            document.getElementById("explainerImg").setAttribute("src", "Assets/explainer.png");
        }

        function isOdd(number){
            const result = number % 2;
            if(result === 0){
                return true;
            }
            return false;
        }
    }
}

function setStartLevelText() {
    currentTextIndex = 0
    let currentLevel = Level.CURRENT_LEVEL;
    return setCurrentText(levelsHelpsTexts[currentLevel][currentTextIndex]);
}

function setNextHelpText() {
    let currentLevel = Level.CURRENT_LEVEL;
    currentTextIndex++;
    if (currentTextIndex > levelsHelpsTexts[currentLevel].length - 1) currentTextIndex = levelsHelpsTexts[currentLevel].length - 1;
    return setCurrentText(levelsHelpsTexts[currentLevel][currentTextIndex]);
}

function setPreviousHelpText() {
    let currentLevel = Level.CURRENT_LEVEL;
    currentTextIndex--;
    if (currentTextIndex < 0) currentTextIndex = 0;
    return setCurrentText(levelsHelpsTexts[currentLevel][currentTextIndex]);
}

export { setNextHelpText, setPreviousHelpText, setStartLevelText };


function getLevel1HelpTexts() {
    let level1HelpsText = [
        'Olá, bem-vindo ao Code Fishing! Sou o Josh e vou lhe ajudar durante o jogo!!',
        'O objetivo do jogo é ajudar o programador e pescador Mike a realizar sua cota mensal de pesca utilizando lógica de programação.',
        'Na sua esquerda, você encontrará os blocos disponíveis para prosseguir para a próxima fase.(Para move-los basta clicar, segurar e arrastar. Ou então você também pode dar um click duplo)',
        'Logo abaixo de mim, tem sua barra de utilitários com alguns botões e abaixo dela o local onde você devera montar a lógica que permitira Mike pescar o que deseja. Arrastando os blocos para lá',
        'Passe o mouse por cima de cada botão na barra de utilitários para entender suas funções',
        'Os 4 primeiros níveis serão como um tutorial, bem simples, mas importantes para aprender os fundamentos do jogo e da programação. Preste bastante atenção!',
        'Isso foi sua introdução! O primeiro tópico será sobre variáveis! Vamos começar!',
        'Imagine que você tenha uma gaveta de meias. Para simplificar vamos considerar que só caiba uma meia na sua gaveta, você pode guardar qualquer meia que quiser lá. Porém, apenas uma por vez e pode trocá-la a hora que quiser.',
        'Na programação, sua gaveta seria chamada de variável. Uma variável é um "Espaço" onde você pode colocar qualquer valor.',
        'Para definir um valor a uma variável normalmente utilizamos a seguinte notação: variável recebe valor. Colocando isso em um código, teríamos variável = valor. Note que o símbolo “=” tem o sentido de "Recebe"',
        'Nesse momento, Mike precisa pescar um salmão, salmões são espertos, mas não resistem a um FrogFish, sua comida preferida. Mike disse que a isca de sua vara de pesca é uma variável.Consegue ajudá-lo a pescar um salmão?',
        'Atribua o valor correto à variável!'
    ];

    return level1HelpsText;
}

function getLevel2HelpTexts() {
    let level2HelpsText = [
        'Muito bem! Você aprendeu o que é uma variável. Agora vamos entender como funcionam as funções na programação.',
        'Imagine que para conseguir pescar um salmão, as etapas que o pescador Mike tem que seguir é sempre atribuir o valor “FrogFish” a variável “ISCA”, da forma que você fez no nível anterior. (Considere que a variável “ISCA” sempre perde seu valor após um salmão ser pescado, pois o peixe come a isca.)',
        'Para conseguir pescar dois salmões, você teria que fazer “Isca recebe FrogFish” duas vezes certo? Isso seria fácil, mas conforme aumentamos a dificuldades e a quantidade das ações seria um pouco cansativo repeti-las várias e várias vezes.',
        'Por isso na programação nós temos o conceito de funções. Você cria uma função, define as ações que ela deve fazer e sempre que precisar dessa sequência de ações você simplesmente chama a função.',
        'Vamos então criar uma função para pescar um salmão. Para criar uma função clique no ícone de “+” na barra de botões logo abaixo.',
        'Após isso coloque os blocos necessários para pescar um salmão e clique no ícone de salvar. Você pode dar o nome que quiser para sua função, mas sugiro um nome como “Pescar Salmão” para facilitar.',
        'Sempre que houver um bloco de função no jogo você o verá com um “( )” na sua frente, isso é para familiariza-lo com a escrita de funções, normalmente esses parenteses servem para identificar a chamada de funções e passar parâmetros (Mas isso fica para outro momento).',
        'Após sua função criada você vera um novo bloco com o nome que você definiu, há também um botão no bloco, ele serve para você duplicar o bloco e chamá-lo quantas vezes quiser.',
        'Nesse nível o seu objetivo é ajudar Mike a pescar 3 salmões. Como pode ver, os espaços disponíveis e os blocos não permitem que você repita o código do nível 1 varias vezes. Então tera que usar funções. Boa sorte!',
    ];

    return level2HelpsText;
}

function getLevel3HelpTexts() {
    let level3HelpsText = [
        'Você está progredindo bem, agora vamos entender o conceito de condicionais na programação.',
        'Imagine que você queira ir para uma praia, mas o pacote completo com viagem e estadia custa 500 reais. Se seu dinheiro for maior ou igual a 500 reais, então, você vai para a praia, senão, você fica em casa vendo uma série mesmo. Essa situação que descrevi agora nada mais é que uma condicional.',
        'SE uma condição qualquer é verdadeira, ENTÃO algo acontece, SENÃO ENTÃO outra coisa acontece. Simples não é?',
        'Para criar uma condição, perceba que usamos “dinheiro for maior ou igual a 500 reais”. O “maior ou igual” é um operador matemático chamado de “operador de comparação”. São de extrema importância nas condicionais, pois praticamente sempre será usado.',
        'Os blocos "FIM SE" e "FIM SENÃO" servem para identificar o fim de uma condicional, por exemplo, "SE verdade ENTÃO faça x FIM SE"',
        'Caso não utilizássemos esses blocos não teríamos como saber o fim de uma ação de uma condicional',
        'Esse nível pode parecer um pouco mais assustador pela quantidade de blocos que você pode utilizar, mas não se preocupe. Caso necessário leia a explicação de condicionais novamente que vai ser simples.',
        'Para montar suas condicionais sempre utilize a seguinte lógica: “SE CONDIÇÃO ENTÃO XXXX FIM SE SENÃO ENTÃO XXXX FIM SENÃO”. Sempre coloque o fim se e o fim senão, pois eles delimitam aonde as condicionais acabam',
        'Para esse nível, Mike vai pegar uma isca aleatória da sua caixa de iscas e pescar. Para não desperdiçar o FrogFish (uma isca cara e rara) precisamos que caso a isca aleatória seja o FrogFish ele deve aproveitar e pescar um salmão. Caso seja outra isca, ele deve pescar qualquer peixe.',
    ];

    return level3HelpsText;
}

function getLevel4HelpTexts() {
    let level4HelpsText = [
        'Excelente, até o momento você aprendeu 3 dos 4 tópicos necessários para entender a base da programação e continuar a jogar o Code Fish. Nesse próximo nível você aprendera sobre estrutura de repetição.',
        'Vamos lembrar do nível 2, você fez uma função, algo que ajuda você a reutilizar comandos específicos. Imagine então que você tem a função que pesca 1 salmão, igual a utilizada no nível 2. Como você faria caso eu te pedisse para pescar 35 mil salmões. Repetir a função 35 mil vezes é um pouco demais não é?',
        'Para evitar essa situação, nós temos as estruturas de repetição. A estrutura que vamos usar no Code Fish é a estrutura “enquanto” (Porem existem outras estruturas de repetições, cada uma adequada a um caso diferente. Pesquise sobre! )',
        'A estrutura “enquanto” funciona da seguinte maneira: Enquanto uma condição for verdadeira, ela vai realizar um bloco de operações. Quando essa condição não for mais verdadeira, ela segue o fluxo.',
        'Então considerando nosso exemplo do salmão, vamos facilitar a sua vida com a seguinte repetição: Enquanto a quantidade de salmões pescados for menor que 35 mil, pesque um salmão. Bem mais simples do que repetir 35 mil vezes certo?',
        'Para montar sua repetição “enquanto” siga o seguinte padrão: “ENQUANTO CONDIÇÃO FAÇA XXXX FIM ENQUANTO”. (Obs: existe também a repetição “FAÇA XXXX ENQUANTO CONDIÇÃO”, porém, essa não será utilizada no Code Fishing)',
        'Para conseguir avançar esse nível e concluir o tutorial, você deve ajudar Mike a concluir sua cota diária de pelo menos 10 peixes usando a repetição! Para facilitar, novamente você tem a função “Pescar ()” que pesca um peixe. Boa sorte!',
    ];

    return level4HelpsText;
}
function getLevel5HelpTexts() {
    let level5HelpsText = [
        'Muito bem! Você concluiu o tutorial, agora é hora de começar a colocar em prática os conhecimentos adquiridos de uma só vez.',
        'Nesse nível, você tera que usar condicionais, atribuição de valores a variáveis e funções. Todos simultaneamente.',
        'Hoje, Mike está indeciso sobre o que quer pescar. Ele disse que vai decidir na hora, porem você deve ajudá-lo a pescar de acordo com sua decisão. Sua dúvida é se vai pescar uma tilápia para variar ou se vai com o salmão mesmo.',
        'Para esse nível, você deve montar uma condicional que, caso o Mike queira o salmão, você deve utilizar a lógica de pescar salmão (Atribuir o valor certo à isca). O mesmo vale para a Tilápia.(Obs: tilápias são pescadas quando utilizamos a isca SilverFish!).',
        'Dica 1: Mike com certeza irá escolher entre um dos dois peixes para pescar hoje, você deve garantir que independentemente da escolha, ele consiga um peixe.',
        'Dica 2: não há espaço nem blocos o suficiente para garantir que ele pegue ambos os peixes. A não ser que você utilize funções, sendo que os blocos para montar as funções não retiram blocos dos disponíveis. Monte uma função para pescar cada peixe (Pescar Salmão e Pescar Tilápia) ',
    ];

    return level5HelpsText;
}
function getLevel6HelpTexts() {
    let level6HelpsText = [
        'Para esse nível, é necessário que você complemente seu conhecimento em como as condições são criadas.',
        'Caso eu queira usar mais de uma condição simultaneamente nós temos dois operadores que fazem isso. O “E” e o “OU”. Por exemplo, “SE CONDIÇÃO1 E CONDIÇÃO 2 ENTÃO XXXX”',
        'Nesse caso é necessário que ambas as condições sejam verdadeiras para continuar (O operador “E” é escrito normalmente como “&&”).',
        'Temos também o operador “OU”, por exemplo, “SE CONDIÇÃO1 OU CONDIÇÃO2 ENTÃO XXXX”. Nesse caso, basta que apenas uma das condições sejam verdadeiras. (O operador “OU” é escrito normalmente como “||”).',
        'Hoje, Mike veio com um objetivo muito claro em mente. Pescar um salmão que tenha ao menos 10 quilogramas. Ele irá pescar quantos peixes forem precisos antes de ir embora.',
        'É seu dever montar a lógica que o ajude a concluir tal objetivo.(Obs: Nesse nível você tem a função “Pescar ()” que irá pescar um peixe aleatório de peso aleatório)',
        'Para esse nível, você tera que usar uma lógica não tão trivial. Caso queira algumas dicas, basta seguir para o próximo dialogo. (Mas tente resolver primeiro. As informações dos diálogos anteriores são suficientes para resolver o nível).',
        'Dica1: Para esse nível, será necessário que as condições não sejam o que desejamos até o momento correto. Por exemplo, imagine que queremos o número 1000, porém começamos a contar a partir do número 1 (continua) ',
        'assim temos “ENQUANTO número < 1000 FAÇA ADICIONAR 1 NO NUMERO() FIM ENQUANTO” (Obs: existe mais uma dica, caso precise use-a)',
        'Dica2: Em uma repetição “enquanto”, podemos utilizar um “OU” para garantir que só sairemos da repetição, quando ambas as condições sejam falsas, ou seja, podemos definir uma condição que queremos e “invertê-la” dentro do enquanto.',
    ];

    return level6HelpsText;
}
function getLevel7HelpTexts() {
    let level7HelpsText = [
        'Hoje, Mike quer levar para casa pelo menos 10 salmões. Sendo que, outros peixes ele vai soltar. Ajude-o com essa lógica!',
        'Nesse nível, você tem a função “Pescar ()”, que pesca um peixe aleatório, podendo este ser um salmão ou não.',
        'Toda vez que a função pescar é chamada, ela aumenta a quantidade de peixes pescados em 1. Porém, também temos a função “Soltar Peixe ()” que diminui a quantidade de peixes pescados em 1, sendo que ela solta o último peixe pescado. (Novamente você tem uma dica no próximo dialogo, mas tente resolver sem ela!)',
        'Dica: Para esse nível, você tem que utilizar o “SE” dentro do “ENQUANTO” após usar a função “Pescar ()”',
    ];

    return level7HelpsText;
}
function getLevel8HelpTexts() {
    let level8HelpsText = [
        'Hoje, Mike pediu uma ajuda um pouco diferente a você. Ele ira pescar um peixe qualquer por conta própria (Não precisa que você use uma função). Porem, ele quer um peixe que tenha no mínimo 7 quilos e também tenha menos de 10 quilos (não pode ter exatamente 10 quilos).',
        'O que ele quer, é que você monte um código que valide se o peixe que ele pescar é o peixe desejado.',
        'Para isso, você tera que criar uma condicional, e dependendo do peso do peixe dele, atribuir à variável “Peixe desejado pescado” o valor verdadeiro ou falso.(Caso precise, dicas no próximo dialogo)',
        'Dica1: o comparador “<” exclui o valor que você comprar. Exemplo: 10 <(Menor) 10 - Falso. Porém, temos que 10 <= (Menor ou igual) 10 - Verdadeiro <br>Dica2: Você tera que usar o operador “OU” nesse nível.',
    ];

    return level8HelpsText;
}
function getLevel9HelpTexts() {
    let level9HelpsText = [
        'Hoje, Mike quer pescar 10 peixes. Porém, ele está com um desafio pessoal. Mike vai pescar peixes aleatoriamente, contudo, caso ele consiga um salmão logo em seguida deve pescar uma tilápia. Consegue garantir que Mike complete seu desafio?',
        'Lembre-se, para pescar uma tilápia, a isca deve ser um SilverFish.(Dica no próximo dialogo)',
        'Dica: Para esse nível você deve usar criar uma função para pescar a tilápia, senão, não haverá espaço para todos os blocos.',
    ];

    return level9HelpsText;
}
function getLevel10HelpTexts() {
    let level10HelpsText = [
        'Parabéns, você chegou ao último nível do Code Fish. Agora é hora de mostrar que você entendeu os fundamentos da programação e consegue pescar o Salmão Lendário.',
        'Nesse nível, não haverá dicas. E a lógica para pescar utiliza todos os 4 aspectos aprendidos no jogo. Vou te passar as instruções para pescar o Lendário. Boa Sorte!!',
        'O Salmão Lendário tem um comportamento muito específico. Ele só aparece no lago quando 100 salmões forem pescados, após isso ele deve ser o próximo peixe a ser pescado, porém, ele só mordera a isca caso a mesma seja a rara “Silver FrogFish”. Boa pescaria!!',
    ];

    return level10HelpsText;
}