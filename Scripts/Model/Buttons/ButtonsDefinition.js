import {
    executeCodeButton,
    createFunctionButton,
    loadLevelButton,
    saveFunction
} from '../../Control/GameFunctions.js';


const contexts = {
    menu: [
        getButtonObject("restartLevel", "Resetar Nível", "Reset Level", "fa fa-solid fa-backward"),
        getButtonObject("createNewFunction", "Crie uma função", "Create a function", "fa fa-solid fa-plus"),
        getButtonObject("executeCode", "Execute o código", "Run Code", "fa fa-solid fa-play"),
    ],
    creatingFunctions: [
        getButtonObject("returnToMain", "Voltar", "Return", "fa fa-solid fa-backward-step"),
        getButtonObject("saveFunction", "Salvar Função", "Save Function", "fa fa-solid fa-floppy-disk"),
    ]
}

export function setButtonsFunctions(functionName){
    const functions = {
        executeCode: ()=>{
            document.querySelector('.executeCode').addEventListener('click', executeCodeButton);
        },
        restartLevel: ()=>{
            document.querySelector('.restartLevel').addEventListener('click', loadLevelButton);
        },
        createNewFunction: ()=>{
            document.querySelector('.createNewFunction').addEventListener('click', createFunctionButton);
        },
        saveFunction: ()=>{
            document.querySelector('.saveFunction').addEventListener('click', saveFunction);
        }
    }

    functions[functionName] ? functions[functionName]() : null;
}

export function getButtons(context) {
    let returnButtons = contexts[context];
    
    return returnButtons;
}

function getButtonObject(className, toolTipText_br, toolTipText_en, iconClasses) {
    return {
        "name-pt-br": toolTipText_br,
        "name-en": toolTipText_en,
        "iconClasses": iconClasses,
        "className": className,
    };
}


