import { Level } from "./Level.js";

let currentTextIndex = 0;


let levelsHelpsTexts = {
    1: getLevel1HelpTexts()
}

function setCurrentText(text){
    document.getElementById('helpTextHolder').innerText = text;
}

function setStartLevelText(){
    let currentLevel = Level.CURRENT_LEVEL;
    return setCurrentText(levelsHelpsTexts[currentLevel][currentTextIndex]);
}

function setNextHelpText(){
    let currentLevel = Level.CURRENT_LEVEL;
    currentTextIndex++;
    if(currentTextIndex > levelsHelpsTexts[currentLevel].length - 1)currentTextIndex = levelsHelpsTexts[currentLevel].length - 1;
    return  setCurrentText(levelsHelpsTexts[currentLevel][currentTextIndex]);
}

function setPreviousHelpText(){
    let currentLevel = Level.CURRENT_LEVEL;
    currentTextIndex--;
    if(currentTextIndex < 0)currentTextIndex = 0;
    return  setCurrentText(levelsHelpsTexts[currentLevel][currentTextIndex]);
}

export {setNextHelpText, setPreviousHelpText ,setStartLevelText};


function getLevel1HelpTexts(){
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

