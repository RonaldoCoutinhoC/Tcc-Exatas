import { getLevelInfo } from './LevelDefinition.js';
import { getButtons,setButtonsFunctions } from '../Buttons/ButtonsDefinition.js';
import { selectedLanguagekey, selectedTextLanguageKey, getCurrentLevel } from '../../Control/GameEngine.js';
import { getFunctionBlock } from '../Blocks/BlocksDefinition.js';
import { createView } from '../../View/ViewController.js';

export function generateLevel(levelIndex){
    let levelInfo = getLevelInfo(levelIndex);
    setAvailableBlocks(levelInfo);
    setSelectedBlocks(levelInfo);
    //Descomentar para começar os testes com a geração de botões
    setUtilsButtons("menu");
}


export function setUtilsButtons(context){
                
    let toolsDiv = '';
    let buttons = getButtons(context);

    buttons.forEach(button=>{
        let html =  '<div class="toolBarButton '+ button.className +'">' + 
                        '<span class="tooltiptext">'+ button[selectedTextLanguageKey] +'</span>' + 
                        '<i class="'+button.iconClasses +'" style="color: white;"></i>' + 
                    '</div>';
        toolsDiv += html;
    });
    
    document.querySelector('.tools').innerHTML = toolsDiv;

    buttons.forEach(button=>{
        setButtonsFunctions(button.className);
    });

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
            availableBlocksDivs += createBlock(block);
        }
    });
    document.querySelector('.availableBlocks').innerHTML = availableBlocksDivs;
}

export function saveNewFunction(){
    //Get all the blocksHolders of the selectedBlocks div
    const blocksHolders = document.querySelector('.selectedBlocks').children;
    let functionClass = '';

    for (let index = 0; index < blocksHolders.length; index++) {
        const element = blocksHolders[index].children ? blocksHolders[index].children[0] : null;
        if (element && element.tagName === "P") {
            functionClass += 'functBlock' + element.classList[1];
        }
    }
    
    if(functionClass.length === 0){
        returnToMenu();
        return;
    }

    //const availableBlocksHolders = document.querySelector('.availableBlocks').innerHTML;
    let block = getFunctionBlock(functionClass);
    document.querySelector('.availableBlocks').innerHTML += createBlock(block);
    returnToMenu()
}

function returnToMenu(){
    setSelectedBlocks(getLevelInfo(getCurrentLevel()));
    createView();
    setUtilsButtons("menu");
}

export function createBlock(block){

    let html = '<div class="blocksHolder dropzone">' +
        '<p class="block ' + block.className +
        '" draggable="true" style="background-color:' + block.color + ';"' +
        '>' + block[selectedLanguagekey] + '</p>' +
        '</div>';
    
    return html;
}

