import { Level } from "./Level.js";

let currentTextIndex = 0;


let levelsHelpsTexts = {
    1: getLevel1HelpTexts(),
    2: getLevel2HelpTexts(),
    3: getLevel3HelpTexts(),
    4: getLevel4HelpTexts(),
    5: getLevel4HelpTexts(),
    6: getLevel4HelpTexts(),
    7: getLevel4HelpTexts(),
    8: getLevel4HelpTexts(),
    9: getLevel4HelpTexts(),
}

function setCurrentText(text) {
    document.getElementById('helpTextHolder').innerText = text;
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
        "Olá, bem vindo ao Code Fishing! Sou o Josh e vou te ajudar durante o jogo!!",
        "O objetivo do jogo é ajudar o programador e pescador Mike a realizar sua cota mensal de pesca utilizando lógica de programação.",
        "Na sua esquerda, você encontrará os blocos disponíveis para prosseguir para a próxima fase.(Para move-los basta clicar, segurar e arrastar)",
        "Logo abaixo de mim, tem sua barra de utilitarios com alguns botões e abaixo dela o local onde voce devera montar a lógica que permitira Mike pescar o que deseja. Arrastando os blocos para lá",
        "Os 5 primeiros níveis serão como um tutorial, bem simples, mas importantes para aprender os fundamentos do jogo e da programação. Preste bastante atenção! ",
        "Isso foi sua introdução! Vamos começar!",
        "Imagine que você tenha uma gaveta de meias. Para simplificar vamos considerar que só caiba uma meia na sua gaveta, você pode guardar qualquer meia que quiser lá. Porém, apenas uma por vez e pode trocá-la a hora que quiser.",
        'Na programação, sua gaveta seria chamada de variável. Uma variável é um "Espaço" onde você pode colocar qualquer valor.(Obs: uma gaveta onde você pudesse guardar uma meia, mas não pudesse trocá-la seria chamada de “Constante”).',
        'Para definir um valor a uma variavel normalmente utilizamos a seguinte notação: variavel recebe valor. Colocando isso em um código, teríamos variavel = valor. Note que o símbolo “=” tem o sentido de "Recebe"',
        'Nesse momento, Mike precisa pescar um salmão, salmões são espertos, mas não resistem a um FrogFish, sua comida preferida. Mike disse que a isca de sua vara de pesca é uma variável.Consegue ajudá-lo a pescar um salmão? ',
    ];

    return level1HelpsText;
}

function getLevel2HelpTexts() {
    let level2HelpsText = [
        'Muito bem, você aprendeu o que é uma variável. Agora vamos entender como funciona funções na programação.',
        'Imagine que para conseguir pescar um salmão, as etapas que o pescador Mike tem que seguir é sempre atribuir o valor FrogFish a variável isca, da forma que você fez no nível anterior.',
        'Para conseguir pescar dois salmões, você teria que fazer “Isca recebe FrogFish” duas vezes certo? Isso seria fácil, mas conforme aumentamos a dificuldades e a quantidade das ações seria um pouco cansativo repeti-las várias e várias vezes.',
        'Por isso na programação nós temos o conceito de funções. Você cria uma função, define as ações que ela deve fazer se sempre que precisar dessa sequência de ações você simplesmente chama a função.',
        'Vamos então criar uma função para pescar um salmão. Para criar uma função clique no ícone de “+” na barra de botões logo abaixo. Coloque os blocos que necessários para pescar um salmão e clique no ícone de salvar. Você pode dar o nome que quiser para sua função, mas sugiro um nome como “Pescar Salmão” para facilitar.',
        'Sempre que houver um bloco de função no jogo você o verá com um “( )” na sua frente, isso é para familiariza-lo com a escrita de funções, normalmente esses parenteses servem para identificar a chamada de funções e passar parâmetros (Mas isso fica para outro momento)',
        'Após sua função criada você vera um novo bloco com o nome que você definiu, há também um botão no bloco, ele serve para você duplicar o bloco e chamá-lo quantas vezes quiser.',
        'Nesse nível o seu objetivo é ajudar Mike a pescar 3 salmões. Como pode ver, os espaços disponíveis e os blocos não permitem que você repita o código do nível 1 varias vezes. Então tera que usar funções. Boa sorte!',
    ];

    return level2HelpsText;
}

function getLevel3HelpTexts() {
    let level3HelpsText = [
        'Você está progredindo bem, agora vamos entender o conceito de condicionais na programação.',
        'Imagine que você queira ir para uma praia, mas o pacote completo com viagem e estadia custa 500 reais. Se seu dinheiro for maior ou igual a 500 reais, então, você vai para a praia, senão, você fica em casa vendo uma série mesmo. Essa situação que eu descrevi agora nada mais é que uma condicional.',
        'SE uma condição qualquer é verdadeira ENTÃO algo acontece, SENÃO ENTÃO outra coisa acontece. Simples não é?',
        'Para criar uma condição, perceba que usamos “dinheiro for maior ou igual a 500 reais”. O “maior ou igual” é um operador matemático chamado de “operador de comparação”. São de extrema importância nas condicionais, pois praticamente sempre será usado.',
        'Esse nível pode parecer um pouco mais assustador pela quantidade de blocos que você pode utilizar, mas não se preocupe. Caso necessário leia a explicação de condicionais novamente que vai ser simples.',
        'Para esse nível, Mike vai pegar uma isca aleatória da sua caixa de iscas e pescar. Para não desperdiçar o FrogFish (uma isca cara e rara) precisamos que caso a isca aleatória seja o FrogFish ele deve aproveitar e pescar um salmão. Caso seja outra isca, ele deve pescar qualquer peixe.',
        'Para facilitar, você já tem disponível as funções de pescar o salmão e pescar qualquer outro peixe. Use-as! Obs: existe mais de uma forma de montar a condição! Boa sorte!!!'
    ];

    return level3HelpsText;
}

function getLevel4HelpTexts() {
    let level4HelpsText = [
        'Excelente, até o momento você aprendeu 3 dos 4 tópicos necessários para entender a base da programação e continuar a jogar o Code Fish. Nesse próximo nível você aprendera sobre estrutura de repetição.',
        'Vamos lembrar do nível 2, você fez uma função, algo que ajuda você a reutilizar comandos específicos. Imagine então que você tem a função que pesca 1 salmão, igual a utilizada no nível 2. Como você faria caso eu te pedisse para pescar 10 mil salmões. Repetir a função 10 mil vezes é um pouco feio não é?',
        'Para evitar essa situação, nós temos as estruturas de repetição. A estrutura que vamos usar no Code Fish é a estrutura “enquanto” (Porem existem outras estruturas de repetições, cada uma adequada a um caso diferente. Pesquise sobre! )',
        'A estrutura enquanto funciona da seguinte maneira: Enquanto uma condição for verdadeira, ela vai realizar um bloco de operações. Quando essa condição não for mais verdadeira, ela segue o fluxo.',
        'Então considerando nosso exemplo do salmão, vamos facilitar a sua vida com a seguinte repetição: Enquanto a quantidade de salmões pescados for menor que 10 mil, pesque um salmão. Bem mais simples do que repetir 10 mil vezes certo?',
        'Para conseguir avançar esse nível e concluir o tutorial, você deve ajudar Mike a concluir sua cota diária de 10 peixes usando a repetição! Para facilitar novamente você tem a função “Pescar ()” que pesca um peixe. Boa sorte!',
     ];

    return level4HelpsText;
}