import { Level } from "./Level.js";

export class SaveController{

    constructor(){

    }
    
    static saveGame(currentLevel) {

        var saveGame = {
            currentLevel: currentLevel,
            achievements: [],
        };
    
        localStorage.setItem("gameSave", JSON.stringify(saveGame));
    }
    
    static loadGame() {
        var savedGame = JSON.parse(localStorage.getItem("gameSave"));
        Level.CURRENT_LEVEL = 1;
        if (savedGame && savedGame.currentLevel) {
            Level.CURRENT_LEVEL = savedGame.currentLevel;
        }
    }

    static resetGame() {
        if (confirm("Tem certeza que quer reiniciar seu progresso?")) {
            var gameSave = {};
            localStorage.setItem("gameSave", JSON.stringify(gameSave));
            location.reload();
        }
    }

}