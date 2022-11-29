const buttonsFunctions = {

}//ADICIONAR AS FUNÇÕES AQUI POIS NÃO SÃO RECARREGADAS APÓS O CARREGAMENTO DOS BOTÕES

const contexts = {
    menu: [
        getButtonObject("restartLevel", "Resetar Nível", "Reset Level", "fa fa-solid fa-backward"),
        getButtonObject("createNewFunction", "Crie uma função", "Create a function", "fa fa-solid fa-plus"),
        getButtonObject("executeCode", "Execute o código", "Run Code", "fa fa-solid fa-play"),
    ]
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


