import { getLevelInfo } from './LevelDefinition.js';

export function generateLevel(levelIndex){

    let selectedLanguagekey = defineLanguage("logical");
    let levelInfo = getLevelInfo(levelIndex);


    let div = '';
    levelInfo.blocks.forEach(block => {
        for (let index = 0; index < block.quantity; index++) {
            let html = '<div class="blocksHolder dropzone">' +
                '<p class="block ' + block.className +
                '" draggable="true" style="background-color:' + block.color + ';"' +
                '>' + block[selectedLanguagekey] + '</p>' +
                '</div>';
            div += html;
        }
    });

    document.querySelector('.availableBlocks').innerHTML = div;
  
}

function defineLanguage(languange){
    let languages = {
        "en": "name-en",
        "br": "name-pt-br",
        "logical": "name_logical"
    };

    return languages[languange];
}