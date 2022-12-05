import { levels, BUTTONS, Button } from "./Model.js";
import { startDragAndDropControl } from "./View.js";


export function startLevel(levelIndex){
    levels[levelIndex].setAvailableBlocksDiv();
    levels[levelIndex].setSelectedBlocksDiv();
    Button.setButtons(BUTTONS);
    startDragAndDropControl();
}



