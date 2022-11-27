import { generateLevel } from '../Model/Levels/LevelGenerator.js';
import { createView } from '../View/ViewController.js';


export function startGame(){
    
    generateLevel(1);

    createView();
}