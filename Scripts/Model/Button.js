import { Level } from "./Level.js";
import { View } from "../View.js";
import { Block } from "./Block.js";
class Button {
    constructor(tooltipText, className, iconHTMLClasses) {
        this.tooltipText = tooltipText;
        this.className = className;
        this.iconHTMLClasses = iconHTMLClasses;
        this.htmlElement = this.getButtonHtml();
    }

    static MAIN_MENU_BUTTONS = [
        new Button("Recomeçar o nível atual", "restartLevel", "fa fa-solid fa-backward"),
        new Button("Criar uma nova função!", "createNewFunction", "fa fa-solid fa-plus"),
        new Button("Execute o código!", "executeCode", "fa fa-solid fa-play"),
    ]

    static CREATING_FUNCTION_BUTTONS = [
        new Button("Retornar ao jogo!", "returnToGame", "fa fa-solid fa-backward-step"),
        new Button("Salvar Função!", "saveFunction", "fa fa-solid fa-floppy-disk"),
    ]

    getButtonHtml() {
        return '<div class="toolBarButton ' + this.className + '">' +
            '<span class="tooltiptext">' + this.tooltipText + '</span>' +
            '<i class="' + this.iconHTMLClasses + '" style="color: white;"></i>' +
            '</div>';
    }

    static setButtons(buttons) {
        let toolsDiv = '';

        buttons.forEach(button => {
            toolsDiv += button.htmlElement;
        });

        document.querySelector('.tools').innerHTML = toolsDiv;

        buttons.forEach(button => {
            Button.setButtonFunction(button.className);
        });
    }

    static setButtonFunction(buttonClassName) {
        document.querySelector('.' + buttonClassName).addEventListener('click', BUTTONS_FUNCTIONS[buttonClassName] || teste);
    }


}

//====================== BUTTONS FUNCTIONS =====================//

const BUTTONS_FUNCTIONS = {
    "executeCode": () => {
        //Get all the blocksHolders of the selectedBlocks div
        const blocksHolders = document.querySelector('.selectedBlocks').children;
        let codeString = '';

        for (let index = 0; index < blocksHolders.length; index++) {
            const element = blocksHolders[index].children ? blocksHolders[index].children[0] : null;
            if (element && element.tagName === "P") {
                codeString += element.classList[1] + ' ';
            }
        }

        if (Level.LEVEL_VALIDATORS[Level.CURRENT_LEVEL_IDENTIFIER](Level.treatCodeString(codeString))) {
            alert("Sucesso");
        } else {
            alert("Falha")
        }
    },
    "restartLevel": () => {
        Level.startLevel(Level.CURRENT_LEVEL);
    },
    "createNewFunction": () => {
        let selectedBlocksDiv = '';
        for (let index = 0; index < 6; index++) {
            selectedBlocksDiv += '<div class="functionBlocksHolder blocksHolder dropzone"></div>';
        }

        Level.saveLevelCurrentState();
        Button.setButtons(Button.CREATING_FUNCTION_BUTTONS);
        document.querySelector('.selectedBlocks').innerHTML = selectedBlocksDiv;
        let level = Level.getCurrentLevel();
        level.setAvailableBlocksDiv();
        View.startDragAndDropControl();

    },
    "returnToGame": () => {
        Button.setButtons(Button.MAIN_MENU_BUTTONS);
        Level.loadLevelCurrentState();
    },
    "saveFunction": () => {
        //Get all the blocksHolders of the selectedBlocks div
        const blocksHolders = document.querySelector('.selectedBlocks').children;
        let functionClass = '';

        for (let index = 0; index < blocksHolders.length; index++) {
            const element = blocksHolders[index].children ? blocksHolders[index].children[0] : null;
            if (element && element.tagName === "P") {
                functionClass += 'functBlock' + element.classList[1];
            }
        }

        if (functionClass.length === 0) {
            BUTTONS_FUNCTIONS["returnToGame"]();
            return;
        }

        let functionName = prompt("Funciton Name: ");

        //const availableBlocksHolders = document.querySelector('.availableBlocks').innerHTML;
        let block = new Block(functionName, functionClass, "function");
        Level.loadLevelCurrentState();
        document.querySelector('.availableBlocks').innerHTML += block.htmlElement;
        Level.saveLevelCurrentState();
        BUTTONS_FUNCTIONS["returnToGame"]();
    }
}



export { Button };

function teste() {//TO DELETE
    alert("Nenhuma função para o botão selecionado!!!")
}