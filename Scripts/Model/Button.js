import { Level } from "./Level.js";
import { View } from "../View.js";
import { Block } from "./Block.js";
import { Background } from "./Background.js";
import { setNextHelpText, setPreviousHelpText } from "./HelpText.js";
import { Achievements } from "./Achievements.js";
import { SaveController } from "./SaveController.js";


class Button {
    constructor(tooltipText, className, iconHTMLClasses) {
        this.tooltipText = tooltipText;
        this.className = className;
        this.iconHTMLClasses = iconHTMLClasses;
        this.htmlElement = this.getButtonHtml();
    }

    static MAIN_MENU_BUTTONS = [
        new Button("Menu de Ajuda!", "openHelper", "fa fa-solid fa-question"),
        new Button("Desativar Musica!", "muteMusic", "fa fa-solid fa-volume-high"),
        new Button("Voltar ao Menu!", "returnMainMenu", "fa fa-solid fa-arrow-right-from-bracket"),
        new Button("Recomeçar o nível atual", "restartLevel", "fa fa-solid fa-backward"),
        new Button("Criar uma nova função!", "createNewFunction", "fa fa-solid fa-plus newFunction"),
        new Button("Execute o código!", "executeCode", "fa fa-solid fa-play"),

    ]

    static CREATING_FUNCTION_BUTTONS = [
        new Button("Retornar ao jogo!", "returnToGame", "fa fa-solid fa-backward-step"),
        new Button("Salvar Função!", "saveFunction", "fa fa-solid fa-floppy-disk"),
    ]

    static HELPER_JOSH_BUTTONS = [
        new Button("Texto anterior", "previousHelpText", "fa fa-solid fa-chevron-left"),
        new Button("Proximo texto", "nextHelpText", "fa fa-solid fa-chevron-right"),
    ]

    static musicPlaying = true;

    getButtonHtml() {
        return '<div class="toolBarButton ' + this.className + ' " >' +
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
        document.querySelectorAll('.' + buttonClassName).forEach(elementInList => {
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

    "returnMainMenu": () => {
        location.href = "index.html"
    },
    "executeCode": async () => {

        hideButtons();
        //Get all the blocksHolders of the selectedBlocks div
        const blocksHolders = document.querySelector('.selectedBlocks').children;
        let codeString = '';

        for (let index = 0; index < blocksHolders.length; index++) {
            const element = blocksHolders[index].children ? blocksHolders[index].children[0] : null;
            if (element && element.tagName === "SPAN") {
                codeString += element.classList[1] + ' ';
            }
        }

        if (Level.LEVEL_VALIDATORS[Level.CURRENT_LEVEL_IDENTIFIER](Level.treatCodeString(codeString))) {
            await Background.runSucessAnimation();
            Swal.fire({
                title: 'Pescado!',
                text: 'Muito bem!! Mike pescou o que queria!',
                icon: 'success',
                confirmButtonText: 'Continuar'
            })
            var sound = document.getElementById("sucessSound");
            sound.play();

            if (Level.IS_UNIQUE_PLAY === true) {
                Level.IS_UNIQUE_PLAY === false;
                window.location.href = "index.html";
                return;
            }

            Achievements.achievementUnlocked(Level.CURRENT_LEVEL);

            if (Level.CURRENT_LEVEL === 10) {
                SaveController.saveGame(Level.CURRENT_LEVEL);
                setTimeout(function () {
                    window.location.href = "index.html";
                }, 15000);

            }
            showButtons()
            Level.startLevel(Level.CURRENT_LEVEL + 1);
        } else {
            await Background.runFailAnimation();
            showButtons()
            Swal.fire({
                title: 'Escapou!',
                text: 'Mike não conseguiu pescar :( Verifique a sua lógica!',
                icon: 'error',
                confirmButtonText: 'Tentar Novamente'
            });
            var sound = document.getElementById("failSound");
            sound.play();
        }

        function hideButtons() {
            document.querySelector('.executeCode').classList.add("hidden");
            document.querySelector('.createNewFunction').classList.add("hidden");
            document.querySelector('.restartLevel').classList.add("hidden");
            document.querySelector('.returnMainMenu').classList.add("hidden");
            document.querySelector('.muteMusic').classList.add("hidden");
            document.querySelector('.openHelper').classList.add("hidden");
        }

        function showButtons() {
            document.querySelector('.muteMusic').classList.remove("hidden");
            document.querySelector('.openHelper').classList.remove("hidden");
            document.querySelector('.executeCode').classList.remove("hidden");
            document.querySelector('.createNewFunction').classList.remove("hidden");
            document.querySelector('.restartLevel').classList.remove("hidden");
            document.querySelector('.returnMainMenu').classList.remove("hidden");
        }

    },
    "restartLevel": () => {
        Level.startLevel(Level.CURRENT_LEVEL);
    },
    "createNewFunction": () => {

        if (Level.CURRENT_LEVEL === 1) {
            Swal.fire({
                title: 'Ainda não!',
                text: 'Disponível a partir do nível 2',
                icon: 'error',
                confirmButtonText: 'Voltar Depois'
            });
            return;
        }

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
        View.startDoubleClickUtils();
    },
    "returnToGame": () => {
        Button.setButtons(Button.MAIN_MENU_BUTTONS);
        Level.loadLevelCurrentState();
    },
    "saveFunction": async () => {
        //Get all the blocksHolders of the selectedBlocks div
        const blocksHolders = document.querySelector('.selectedBlocks').children;
        let functionClass = '';


        let blocksCounter = 0;
        for (let index = 0; index < blocksHolders.length; index++) {
            const element = blocksHolders[index].children ? blocksHolders[index].children[0] : null;
            if (element && element.tagName === "SPAN") {
                blocksCounter++;
                functionClass += 'functBlock' + element.classList[1];
            }
        }

        if (blocksCounter < 2) {
            Swal.fire({
                title: 'Verifique a função!',
                text: 'Funções vazias ou com somente um unico bloco são inválidas!',
                icon: 'error',
                confirmButtonText: 'Tentar Novamente'
            });
            return;
        }
        const { value: functionName } = await Swal.fire({
            title: 'Digite o nome para a função!',
            input: 'text',
            inputLabel: '',
            inputValue: "",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'Necessário informar um nome para a função!'
                }
                if (value.length > 18) {
                    return 'O nome da função não deve passar de 18 caracteres!Dê um nome simples e intuitivo!'
                }
            }
        })
        if (!functionName) {
            Swal.fire({
                title: 'Verifique a função!',
                text: 'Necessário informar um nome para a função!',
                icon: 'error',
                confirmButtonText: 'Tentar Novamente'
            });
            return;
        }


        if ((functionName.search(" ") === -1 || functionName.search(" ") > 7) && functionName.length > 7) {
            let auxFuntionName = functionName.split('');
            auxFuntionName.splice(7, 0, " - ");

            auxFuntionName = auxFuntionName.join('');
            functionName = auxFuntionName;
        }

        if (functionName.search(" ") !== -1) {
            functionName.replaceAll(" ", "oi")
        }


        let block = new Block(functionName + " ( )", functionClass, "function");

        Level.loadLevelCurrentState();
        document.querySelector('.availableBlocks').innerHTML += block.htmlElement;
        Level.saveLevelCurrentState();

        BUTTONS_FUNCTIONS["returnToGame"]();

        Button.setButtonFunction('duplicateFunction');
        Button.setBlockButtonFunction('deleteFunction');
    },
    "duplicateFunction": (event) => {
        let parentElement = event.srcElement.parentElement;
        let functionName = parentElement.innerText || parentElement.textContent;

        let block = new Block(functionName, parentElement.classList[1], "function");
        document.querySelector('.availableBlocks').innerHTML += block.htmlElement;
        Level.saveLevelCurrentState();
        BUTTONS_FUNCTIONS["returnToGame"]();
        Button.setBlockButtonFunction('duplicateFunction');
        Button.setBlockButtonFunction('deleteFunction');
    },
    "deleteFunction": (event) => {
        let parentElement = event.srcElement.parentElement.parentElement;

        if (parentElement.parentElement.classList[0] === "selectedBlocks") {
            Swal.fire({
                title: 'Ação Inválida!',
                text: 'Você não pode excluir funções que estão sendo usadas!',
                icon: 'error',
                confirmButtonText: 'Continuar'
            });
        } else {
            parentElement.remove();
        }
    },
    "nextHelpText": () => {
        setNextHelpText();
    },
    "previousHelpText": () => {
        setPreviousHelpText();
    },
    "muteMusic": () => {
        console.log(Button.musicPlaying)
        if (!Button.musicPlaying) {

            var sound = document.getElementById("backgroundSound");
            sound.play();
            sound.volume = 0.2
            sound.loop = true;
            Button.musicPlaying = true;
        } else {
            var sound = document.getElementById("backgroundSound");
            sound.pause();
            sound.currentTime = 0;
            Button.musicPlaying = false;
        }
    },
    "openHelper": () => {
        const popupContainer = document.querySelector('.popup-container');
        openPopup();
        function openPopup() {
            popupContainer.classList.add('active');
        }
    }
}

export { Button };

function teste() {//TO DELETE
    alert("Nenhuma função para o botão selecionado!!!")
}

