import {getCreateFunctionView, loadLevel} from './GameEngine.js';
import {executeCode} from './BlockConverter.js'
import {  saveNewFunction } from '../Model/Levels/LevelGenerator.js';


export function executeCodeButton(){
    executeCode();
}

export function createFunctionButton(){
    getCreateFunctionView();
}

export function loadLevelButton(){
    loadLevel();
}

export function saveFunction(){
    saveNewFunction();
}