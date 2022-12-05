class Block{
    constructor(name, htmlClass, blockType) {
        this.name = name;
        this.htmlClass = htmlClass;
        this.blockType = blockType;
        this.color = Block.getCollorBasedOnBlockType(blockType);
        this.htmlElement = this.getBlockHtml();
    }

    getBlockHtml() {
        return'<div class="blocksHolder dropzone">' +
            '<p class="block ' + this.htmlClass +
            '" draggable="true" style="background-color:' + this.color + ';"' +
            '>' + this.name + '</p>' +
            '</div>';
    }

    static getCollorBasedOnBlockType(blockType) {
        let colors = {
            "logical": "rgb(89, 192, 89)",//Green
            "mathematical": "rgb(100, 177, 214)",//Blue
            "custom": "rgb(255, 102, 128)",//Pink
            "loop": "rgb(119, 77, 203)",//Magenta
            "condition": "rgb(255, 171, 25)",//Orange
            "variable": "rgb(0, 255, 255)", //Cyan
            "function": "rgb(125 125 125)", //Grey
        }
        return colors[blockType];
    }
}

class Level{
    constructor(index, availableBlocks, scriptValidator, numberOfEmptySpaces){
        this.index = index;
        this.availableBlocks = availableBlocks;
        this.scriptValidator = scriptValidator;
        this.numberOfEmptySpaces = numberOfEmptySpaces;
    }

    static treatCodeString(string){
        console.log(string);
        string = string.replaceAll("functBlock","");    
        string = string.replaceAll("---","'");
        return string;
    }

    setAvailableBlocksDiv(){
        let availableBlocksDivs = '';
        this.availableBlocks.forEach(block => {      
            availableBlocksDivs += block.htmlElement;
        });
        document.querySelector('.availableBlocks').innerHTML = availableBlocksDivs;
    }

    setSelectedBlocksDiv(){
        let selectedBlocksDiv = '';
        for (let index = 0; index < this.numberOfEmptySpaces; index++) {
            selectedBlocksDiv += '<div class="blocksHolder dropzone"></div>';
        }
    
        document.querySelector('.selectedBlocks').innerHTML = selectedBlocksDiv;
    }
    
}

export class Button{
    constructor(tooltipText, className, iconHTMLClasses){
        this.tooltipText = tooltipText;
        this.className = className;
        this.iconHTMLClasses = iconHTMLClasses;
        this.htmlElement = this.getButtonHtml();
    }

    getButtonHtml(){
        return  '<div class="toolBarButton '+ this.className +'">' + 
                    '<span class="tooltiptext">'+ this.tooltipText +'</span>' + 
                    '<i class="'+this.iconHTMLClasses +'" style="color: white;"></i>' + 
                '</div>';
    }

    static setButtons(buttons){
        let toolsDiv = '';

        buttons.forEach(button=>{
            toolsDiv += button.htmlElement;
        });

        document.querySelector('.tools').innerHTML = toolsDiv;

        buttons.forEach(button=>{
            Button.setButtonsFunctions(button.className);
        });
    }

    static setButtonsFunctions(buttonClassName){
        document.querySelector('.'+ buttonClassName).addEventListener('click', teste);
    }
}

function teste() {//TO DELETE
    alert("Funciona")
}

export const BUTTONS = [
    new Button("Execute o código!","executeCode","fa fa-solid fa-play")
]

const customBlocks = {
    "VARIABLE_BAIT": new Block("BAIT (Variable)","bait", "custom"),
    "BAIT1": new Block("FrogFish","-bait1-", "custom"),
    "BAIT2": new Block("SilverFish","-bait2-", "custom"),
}

const defaultBlocks = {
    "IF": new Block("IF", "if", "condition"),
    "ELSE": new Block("ELSE", "else", "condition"),
    "EQUALS": new Block("EQUALS (==)", "===","mathematical"),
    "DIFFERENT": new Block("DIFFERENT (!=)","!==","mathematical"),
    "AND": new Block("AND (&&)","&&","logical"),
    "OR": new Block("OR (||)","||","logical"),
    "GREATERTHEN": new Block("GREATER THEN (>)",">","mathematical"),
    "GREATERTHENEQUAL": new Block("GREATER THEN EQUAL (>=)",">=","mathematical"),
    "LESSTHEN": new Block("LESS THEN (<)","<","mathematical"),
    "LESSTHENEQUAL": new Block("LESS THEN EQUAL (<=)","<","mathematical"),
    "ASSIGN": new Block("ASSIGN (=)","=","logical"),
}

const LEVEL_VALIDATOR = {
    level1 : ()=>{
        let bait;
        try {
            eval(treatedCode);
        } catch (e) { }
    
        if (bait === "bait1") {
            return true;
        }
        return false;
    }
};

const blocksLevel1 = [
    defaultBlocks["EQUALS"],
    defaultBlocks["DIFFERENT"],
    defaultBlocks["GREATERTHEN"],
    defaultBlocks["GREATERTHENEQUAL"],
    defaultBlocks["ASSIGN"],
    customBlocks["VARIABLE_BAIT"],
    customBlocks["BAIT1"],
    customBlocks["BAIT2"],
];

export const levels = [
    "",//Level 0 -> Ignore
    new Level(1,blocksLevel1,LEVEL_VALIDATOR["level1"],5)
]

