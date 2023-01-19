import { Button } from "./Model/Button.js";
import { Level } from "./Model/Level.js";
import { SaveController } from "./Model/SaveController.js";

function startGame(){
    SaveController.loadGame();
    Level.startLevel(5)//Level.CURRENT_LEVEL);
    Button.setButtons(Button.MAIN_MENU_BUTTONS);
    Button.setHelperJoshButtons(Button.HELPER_JOSH_BUTTONS);
}

export { startGame };

