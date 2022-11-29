import { getLevelInfo } from './LevelDefinition.js';
import { getButtons } from '../Buttons/ButtonsDefinition.js';

let selectedLanguagekey = defineLanguage("logical");

export function generateLevel(levelIndex){
    let levelInfo = getLevelInfo(levelIndex);
    setAvailableBlocks(levelInfo);
    setSelectedBlocks(levelInfo);
    //Descomentar para começar os testes com a geração de botões
    //setUtilsButtons("menu");
}


function setUtilsButtons(context){
                
    let toolsDiv = '';
    let buttons = getButtons(context);
    buttons.forEach(button=>{
        let html =  '<div class="toolBarButton '+ button.className +'">' + 
                        '<span class="tooltiptext">'+ button[selectedLanguagekey] +'</span>' + 
                        '<i class="'+button.iconClasses +'" style="color: white;"></i>' + 
                    '</div>';
        toolsDiv += html;
    });
    document.querySelector('.tools').innerHTML = toolsDiv;
}


function setSelectedBlocks(levelInfo){
    let selectedBlocksDiv = '';
    for (let index = 0; index < levelInfo.numberOfEmptySpaces; index++) {
        selectedBlocksDiv += '<div class="blocksHolder dropzone"></div>';
    }

    document.querySelector('.selectedBlocks').innerHTML = selectedBlocksDiv;
}

function setAvailableBlocks(levelInfo){
    
    let availableBlocksDivs = '';

    levelInfo.blocks.forEach(block => {

        for (let index = 0; index < block.quantity; index++) {
            let html = '<div class="blocksHolder dropzone">' +
                '<p class="block ' + block.className +
                '" draggable="true" style="background-color:' + block.color + ';"' +
                '>' + block[selectedLanguagekey] + '</p>' +
                '</div>';
            
            availableBlocksDivs += html;
        }
    });
    document.querySelector('.availableBlocks').innerHTML = availableBlocksDivs;
}

function defineLanguage(languange){
    let languages = {
        "en": "name-en",
        "br": "name-pt-br",
        "logical": "name-logical"
    };

    return languages[languange];
}