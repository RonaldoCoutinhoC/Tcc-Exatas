class Block{
    constructor(name, htmlClass, blockType) {
        this.name = name;
        this.htmlClass = htmlClass;
        this.blockType = blockType;
        this.color = Block.getCollorBasedOnBlockType(blockType);
        this.htmlElement = blockType === "function" ? this.getBlockFunctionHtml() : this.getBlockHtml();
    }


    static DEFAULT_BLOCKS = {
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

    static CUSTOM_BLOCKS = {
        "VARIABLE_BAIT": new Block("BAIT (Variable)","bait", "variable"),
        "BAIT1": new Block("FrogFish","---bait1---", "custom"),
        "BAIT2": new Block("SilverFish","---bait2---", "custom"),
    }

    getBlockHtml() {
        return'<div class="blocksHolder dropzone">' +
            '<p class="block ' + this.htmlClass +
            '" draggable="true" style="background-color:' + this.color + ';"' +
            '>' + this.name + '</p>' +
            '</div>';
    }

    getBlockFunctionHtml() {
        return'<div class="blocksHolder dropzone">' +
        '<p class="block ' + this.htmlClass +
        '" draggable="true" style="background-color:' + this.color + ';"' +
        '><i class="blocksButtons duplicateFunction fa-regular fa-clone"></i>' + this.name + '</p>' +
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

export { Block };
