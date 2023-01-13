import { Button } from "./Model/Button.js";
import { Level } from "./Model/Level.js";

function startGame(){ 
    Level.startLevel(3);
    Button.setButtons(Button.MAIN_MENU_BUTTONS);
    Button.setHelperJoshButtons(Button.HELPER_JOSH_BUTTONS);
}

export { startGame };

