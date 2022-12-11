import { Button } from "./Model/Button.js";
import { Level } from "./Model/Level.js";
function startGame(){ 
    Level.startLevel(1);
    Button.setButtons(Button.MAIN_MENU_BUTTONS);
}

export { startGame };

