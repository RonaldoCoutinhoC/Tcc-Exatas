import { Button } from "./Model/Button.js";
import { Level } from "./Model/Level.js";
import { SaveController } from "./Model/SaveController.js";
import { View } from "./View.js";


function startGame() {
    controlPopup();
    if (isUniquePlay()) {
        console.log("Is Unique Play")
        const urlParams = new URLSearchParams(window.location.search);
        const levelIndex = urlParams.get('uniquePlay');
        Level.IS_UNIQUE_PLAY = true;

        prepareAndLoadGame(levelIndex);

    } else {
        SaveController.loadGame();
        prepareAndLoadGame(Level.CURRENT_LEVEL);
    }



    function prepareAndLoadGame(LEVEL_INDEX) {
        Level.startLevel(LEVEL_INDEX);
        if (LEVEL_INDEX === 1 && !Level.isUniquePlay) {
            const popupContainer = document.querySelector('.popup-container');
            openPopup();
            function openPopup() {
                popupContainer.classList.add('active');
            }
        }
        Button.setButtons(Button.MAIN_MENU_BUTTONS);
        Button.setHelperJoshButtons(Button.HELPER_JOSH_BUTTONS);
    }

}

function isUniquePlay() {
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get('uniquePlay');

    if (param) {
        return true;
    } else {
        return false;
    }

}

function controlPopup() {
    const popupContainer = document.querySelector('.popup-container');
    const closeBtn = document.querySelector('.close-btn');

    function openPopup() {
        popupContainer.classList.add('active');
    }

    function closePopup() {
        popupContainer.classList.remove('active');
    }

    //openBtn.addEventListener('click', openPopup);
    closeBtn.addEventListener('click', closePopup);
}



export { startGame };

