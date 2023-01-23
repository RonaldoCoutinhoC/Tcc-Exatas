import { Button } from "./Model/Button.js";
import { Level } from "./Model/Level.js";
import { SaveController } from "./Model/SaveController.js";

function startGame(){

    if(isUniquePlay()){
        console.log("Is Unique Play")
        const urlParams = new URLSearchParams(window.location.search);
        const levelIndex = urlParams.get('uniquePlay');
        Level.IS_UNIQUE_PLAY = true;

        prepareAndLoadGame(levelIndex);

    }else{
        SaveController.loadGame();
        prepareAndLoadGame(1)//Level.CURRENT_LEVEL);
    }

    function prepareAndLoadGame(LEVEL_INDEX){
        Level.startLevel(LEVEL_INDEX);
        Button.setButtons(Button.MAIN_MENU_BUTTONS);
        Button.setHelperJoshButtons(Button.HELPER_JOSH_BUTTONS);
    }
    
}


function isUniquePlay(){
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get('uniquePlay');

    if(param){
        return true;
    }else{
        return false;
    }
    
}

export { startGame };

