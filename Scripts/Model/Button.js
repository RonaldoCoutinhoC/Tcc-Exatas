import { Level } from "./Level.js";
import { View } from "../View.js";
import { Block } from "./Block.js";
import { setNextHelpText,setPreviousHelpText } from "./HelpText.js";
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
        new Button("Ajuda!", "displayHelp", "fa-solid fa-question"),
        new Button("Execute o código!", "executeCode", "fa fa-solid fa-play"),
        
    ]

    static CREATING_FUNCTION_BUTTONS = [
        new Button("Retornar ao jogo!", "returnToGame", "fa fa-solid fa-backward-step"),
        new Button("Salvar Função!", "saveFunction", "fa fa-solid fa-floppy-disk"),
    ]

    static HELPER_JOSH_BUTTONS = [
        new Button("Texto anterior", "previousHelpText",  "fa fa-solid fa-chevron-left"),
        new Button("Proximo texto", "nextHelpText","fa fa-solid fa-chevron-right"),
    ]

    getButtonHtml() {
        return '<div class="toolBarButton ' + this.className + '">' +
            '<span class="tooltiptext">' + this.tooltipText + '</span>' +
            '<i class="' + this.iconHTMLClasses + '""></i>' +
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

    static setBlockButtonFunction(buttonClassName) {
        document.querySelectorAll('.' + buttonClassName).forEach(elementInList=>{
            elementInList.addEventListener('click', BUTTONS_FUNCTIONS[buttonClassName] || teste);
        });
    }

    static setHelperJoshButtons(buttons) {
        let toolsDiv = '';
    
        buttons.forEach(button => {
            toolsDiv += button.htmlElement;
        });
    
        document.getElementById('helpTextHolderButtons').innerHTML = toolsDiv;
    
        buttons.forEach(button => {
            Button.setButtonFunction(button.className);
        });
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
            Level.startLevel(Level.CURRENT_LEVEL + 1);
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

        
        let blocksCounter = 0;
        for (let index = 0; index < blocksHolders.length; index++) {
            const element = blocksHolders[index].children ? blocksHolders[index].children[0] : null;
            if (element && element.tagName === "P") {
                blocksCounter++;
                functionClass += 'functBlock' + element.classList[1];
            }
        }

        if (blocksCounter < 2) {
            alert("Funções vazias ou com somente um unico bloco são inválidas!");
            BUTTONS_FUNCTIONS["returnToGame"]();
            return;
        }

        let functionName = prompt("Funciton Name: ");
        let block = new Block(functionName, functionClass, "function");

        Level.loadLevelCurrentState();
        document.querySelector('.availableBlocks').innerHTML += block.htmlElement;
        Level.saveLevelCurrentState();

        BUTTONS_FUNCTIONS["returnToGame"]();
        
        Button.setButtonFunction('duplicateFunction');
    },
    "duplicateFunction": (event) =>{
        let parentElement = event.srcElement.parentElement;
        let functionName = parentElement.innerText || parentElement.textContent;

        let block = new Block(functionName, parentElement.classList[1], "function");
        document.querySelector('.availableBlocks').innerHTML += block.htmlElement;
        Level.saveLevelCurrentState();
        BUTTONS_FUNCTIONS["returnToGame"]();
        Button.setBlockButtonFunction('duplicateFunction');
    },
    "nextHelpText": () => {
        setNextHelpText();
    },
    "previousHelpText": () => {
        setPreviousHelpText();
    }
}

export { Button };

function teste() {//TO DELETE
    alert("Nenhuma função para o botão selecionado!!!")
}