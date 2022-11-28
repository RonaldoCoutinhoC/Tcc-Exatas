import { getLevelInfo } from './LevelDefinition.js';

export function generateLevel(levelIndex){

    let selectedLanguagekey = defineLanguage("logical");
    let levelInfo = getLevelInfo(levelIndex);

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


    let selectedBlocksDiv = '';
    for (let index = 0; index < levelInfo.numberOfEmptySpaces; index++) {
        selectedBlocksDiv += '<div class="blocksHolder dropzone"></div>';
    }

    document.querySelector('.selectedBlocks').innerHTML = selectedBlocksDiv;
  
}

function defineLanguage(languange){
    let languages = {
        "en": "name-en",
        "br": "name-pt-br",
        "logical": "name-logical"
    };

    return languages[languange];
}