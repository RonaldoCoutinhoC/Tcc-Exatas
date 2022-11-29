import { generateLevel } from '../Model/Levels/LevelGenerator.js';
import { createView } from '../View/ViewController.js';
import {executeCode} from '../Control/BlockConverter.js'

let currentLevel = 1;



export function startGame(){

    document.querySelector('.executeCode').addEventListener('click', executeCode);
    document.querySelector('.restartLevel').addEventListener('click', loadLevel);
    document.querySelector('.createNewFunction').addEventListener('click', createNewFunction);
 

    generateLevel(currentLevel);
    createView();
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


function createNewFunction(){
    let selectedBlocksDiv = '';
    for (let index = 0; index < 10; index++) {
        selectedBlocksDiv += '<div class="functionBlocksHolder blocksHolder dropzone"></div>';
    }
    
    document.querySelector('.selectedBlocks').innerHTML = selectedBlocksDiv;
    createView();
}

