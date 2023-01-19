class Block{
    constructor(name, htmlClass, blockType) {
        this.name = name;
        this.htmlClass = htmlClass;
        this.blockType = blockType;
        this.color = Block.getCollorBasedOnBlockType(blockType);
        this.htmlElement = blockType === "function" ? this.getBlockFunctionHtml() : this.getBlockHtml();
    }


    static DEFAULT_BLOCKS = {
        "IF": new Block("SE", "if", "condition"),
        "ELSE": new Block("SENÃO", "else", "condition"),
        "THEN": new Block("ENTÃO", "then", "condition"),
        "END_IF": new Block("FIM SE", "endIf", "condition"),
        "END_ELSE": new Block("FIM SENÃO", "endElse", "condition"),
        "EQUALS": new Block("IGUAL <br>'=='", "===","mathematical"),
        "DIFFERENT": new Block("DIFERENTE <br>'!='","!==","mathematical"),
        "AND": new Block("E <br>'&&'","&&","logical"),
        "OR": new Block("OU <br>'||'","||","logical"),
        "GREATERTHEN": new Block("MAIOR <br>'>'",">","mathematical"),
        "GREATERTHENEQUAL": new Block("MAIOR OU IGUAL <br>'>='",">=","mathematical"),
        "LESSTHEN": new Block("MENOR <br>'<'","<","mathematical"),
        "LESSTHENEQUAL": new Block("MENOR OU IGUAL <br>'<='","<","mathematical"),
        "ASSIGN": new Block("RECEBE <br>'='","=","logical"),
        "WHILE": new Block("ENQUANTO","while","loop"),
        "DO": new Block("FAÇA","do","loop"),
        "END_WHILE": new Block("FIM ENQUANTO","endWhile","loop"),
    }

    static CUSTOM_BLOCKS = {
        "VARIABLE_BAIT": new Block("ISCA <br>'Variável'","bait", "variable"),
        "BAIT": new Block("ISCA","__bait__", "variable"),
        "BAIT1": new Block("FrogFish","---bait1---", "custom"),
        "BAIT2": new Block("SilverFish","---bait2---", "custom"),
        "PESCAR": new Block("Pescar ( )","getFish-premadeFunction", "premadeFuncition"),
        "SOLTARPEIXE": new Block("Soltar Peixe ( )","dropFish-premadeFunction", "premadeFuncition"),
        "PESCARSALMAO": new Block("Pescar<br> Salmao ( )","getSalmao-premadeFunction", "premadeFuncition"),
        "PESCARQUALQUER": new Block("Pescar Qualquer ( )","getAnyFish-premadeFunction", "premadeFuncition"),
        "VALUE10": new Block("10","__10__", "custom"),
        "FISHCONT": new Block("PEIXES PESCADOS","__fishCont__", "custom"),
        "SALMAO": new Block("SALMAO","__salmon__", "custom"),
        "FISHOBTAINED": new Block("PEIXE PESCADO","__fishObtained__", "custom"),
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
            "logical": "#1DFFFF",//Green
            "mathematical": "rgb(255, 113,19)",//Blue
            "custom": "#298EFF",//Pink
            "loop": "#FFA303",//Magenta
            "condition": "#0FFF77",//Orange
            "variable": "#D701FF", //Cyan
            // "logical": "rgb(89 192 89 / 100%)",//Green
            // "mathematical": "rgb(100 177 214 / 90%)",//Blue
            // "custom": "rgb(255 102 128 / 90%)",//Pink
            // "loop": "rgb(119 77 203 / 90%)",//Magenta
            // "condition": "rgb(255 171 25 / 90%)",//Orange
            // "variable": "rgb(0 255 255 / 90%)", //Cyan
            "function": "rgb(125 125 125 / 90%)", //Grey
            "premadeFuncition": "rgb(125 125 125 / 90%)", //Grey
        }
        return colors[blockType];
    }

}

export { Block };
