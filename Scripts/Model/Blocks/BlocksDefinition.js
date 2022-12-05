const naturalBlocks = {
    //name_br, name_en, name_logical, className, color
    "IF": getBlockObject("SE", "IF", "IF", "if", getCollorBasedOnBlockType("condition")),
    "ELSE": getBlockObject("SENAO", "ELSE", "ELSE", "else", getCollorBasedOnBlockType("condition")),
    "EQUALS": getBlockObject("IGUAL", "EQUALS", "===", "===", getCollorBasedOnBlockType("mathematical")),
    "DIFFERENT": getBlockObject("DIFERENTE", "DIFFERENT", "!==", "!==", getCollorBasedOnBlockType("mathematical")),
    "AND": getBlockObject("E", "AND", "&&", "and", getCollorBasedOnBlockType("logical")),
    "OR": getBlockObject("OU", "OR", "||", "or", getCollorBasedOnBlockType("logical")),
    "GREATERTHEN": getBlockObject("MAIOR QUE", "GREATER THEN", ">", ">", getCollorBasedOnBlockType("mathematical")),
    "GREATERTHENEQUAL": getBlockObject("MAIOR OU IGUAL QUE", "GREATER THEN EQUAL", ">=", ">=", getCollorBasedOnBlockType("mathematical")),
    "LESSTHEN": getBlockObject("MENOR QUE", "LESS THEN", "<", "<", getCollorBasedOnBlockType("mathematical")),
    "LESSTHENEQUAL": getBlockObject("MENOR OU IGUAL QUE", "LESS THEN EQUAL", ">", "<=", getCollorBasedOnBlockType("mathematical")),
    "ASSIGN": getBlockObject("ATRIBUIR", "ASSIGN", "=", "=", getCollorBasedOnBlockType("logical")),
}

const customBlocks = {
    //name_br, name_en, name_logical, className, color
    "VARIABLE_BAIT": getBlockObject("ISCA", "BAIT (Variable)", "Bait (Variable)", "bait", getCollorBasedOnBlockType("variable")),
    "BAIT1": getBlockObject("ISCA1", "BAIT1", "FrogFish", "---bait1---", getCollorBasedOnBlockType("custom")),
    "BAIT2": getBlockObject("ISCA2", "BAIT2", "SilverFish", "---bait2---", getCollorBasedOnBlockType("custom")),
}

export function getBlock(blockToGet) {
    let returnBlock = naturalBlocks[blockToGet.identifier] ? naturalBlocks[blockToGet.identifier] : customBlocks[blockToGet.identifier];
    returnBlock.quantity = blockToGet.quantity;

    return returnBlock;
}

export function getFunctionBlock(className) {
    return getBlockObject("Função1", "Function1", "Function1", className, getCollorBasedOnBlockType("function"));
}

function getBlockObject(name_br, name_en, name_logical, className, color) {
    return {
        "name-pt-br": name_br,
        "name-en": name_en,
        "name-logical": name_logical,
        "className": className,
        "color": color
    };
}

function getCollorBasedOnBlockType(type) {
    let colors = {
        "logical": "rgb(89, 192, 89)",//Green
        "mathematical": "rgb(100, 177, 214)",//Blue
        "custom": "rgb(255, 102, 128)",//Pink
        "loop": "rgb(119, 77, 203)",//Magenta
        "condition": "rgb(255, 171, 25)",//Orange
        "variable": "rgb(0, 255, 255)", //Cyan
        "function": "rgb(125 125 125)", //Grey
    }

    return colors[type];
}