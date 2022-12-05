import { generateLevel,setUtilsButtons } from '../Model/Levels/LevelGenerator.js';
import { createView } from '../View/ViewController.js';

let currentLevel = 1;
export let selectedLanguagekey = defineLanguage("logical");
export let selectedTextLanguageKey = defineLanguage("br");

export function startGame(){
    loadLevel()
}

export function getCurrentLevel(){
    return currentLevel;
}

export function setCurrentLevel(levelToSet){
    currentLevel = levelToSet;
}

export function loadLevel(){
    generateLevel(currentLevel);
    createView();
}

function defineLanguage(languange){
    let languages = {
        "en": "name-en",
        "br": "name-pt-br",
        "logical": "name-logical"
    };

    return languages[languange];
}

export function getCreateFunctionView(){
    let selectedBlocksDiv = '';
    for (let index = 0; index < 6; index++) {
        selectedBlocksDiv += '<div class="functionBlocksHolder blocksHolder dropzone"></div>';
    }
    
    document.querySelector('.selectedBlocks').innerHTML = selectedBlocksDiv;
    createView();
    setUtilsButtons("creatingFunctions");

}

