import { generateLevel } from '../Model/Levels/LevelGenerator.js';
import { createView } from '../View/ViewController.js';
import {executeCode} from '../Control/BlockConverter.js'

let currentLevel = 1;



export function startGame(){
    
    document.querySelector('.executeCode').addEventListener('click', executeCode);
    document.querySelector('.restartLevel').addEventListener('click', loadLevel);


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

