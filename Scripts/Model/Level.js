import { Button } from "./Button.js";
import { Block } from "./Block.js";
import { View } from "../View.js";
class Level {

    constructor(index, availableBlocks, scriptValidator, numberOfEmptySpaces) {
        this.index = index;
        this.availableBlocks = availableBlocks;
        this.scriptValidator = scriptValidator;
        this.numberOfEmptySpaces = numberOfEmptySpaces;
    }

    static CURRENT_LEVEL = 1;
    static CURRENT_LEVEL_IDENTIFIER = "level1";

    static blocksLevel1 = [
        Block.DEFAULT_BLOCKS["EQUALS"],
        Block.DEFAULT_BLOCKS["DIFFERENT"],
        Block.DEFAULT_BLOCKS["GREATERTHEN"],
        Block.DEFAULT_BLOCKS["GREATERTHENEQUAL"],
        Block.DEFAULT_BLOCKS["ASSIGN"],
        Block.CUSTOM_BLOCKS["VARIABLE_BAIT"],
        Block.CUSTOM_BLOCKS["BAIT1"],
        Block.CUSTOM_BLOCKS["BAIT2"],
        //new Block("Function Test", "teste", "function"),
    ];

    static blocksLevel2 = [
        Block.DEFAULT_BLOCKS["ASSIGN"],
        Block.CUSTOM_BLOCKS["VARIABLE_BAIT"],
        Block.CUSTOM_BLOCKS["BAIT1"]
    ];

    static LEVEL_VALIDATORS = {
        level1: (treatedCode) => {
            let bait;
            try {
                eval(treatedCode);
            } catch (e) { }

            if (bait === "bait1") {
                return true;
            }
            return false;
        },
        level2: (treatedCode) => {
            let bait;
            console.log(treatedCode);
            if (treatedCode === "bait='bait1' bait='bait1' bait='bait1' ") {
                return true;
            }
            return false;
        }
    };

    static levels = [
        "",//Level 0 -> Ignore
        new Level(1, Level.blocksLevel1, Level.LEVEL_VALIDATORS["level1"], 5),
        new Level(1, Level.blocksLevel2, Level.LEVEL_VALIDATORS["level2"], 3)
    ]

    static levelCurrentState = {}

    static saveLevelCurrentState() {
        Level.levelCurrentState = {
            "availableBlocks": document.querySelector('.availableBlocks').innerHTML,
            "selectedBlocks": document.querySelector('.selectedBlocks').innerHTML,
        }
    }

    static loadLevelCurrentState() {
        document.querySelector('.availableBlocks').innerHTML = Level.levelCurrentState["availableBlocks"];
        document.querySelector('.selectedBlocks').innerHTML = Level.levelCurrentState["selectedBlocks"];
        View.startDragAndDropControl();
    }

    static treatCodeString(string) {
        string = string.replaceAll("functBlock", "");
        string = string.replaceAll("---", "'");
        return string;
    }

    static getCurrentLevel(){
        return Level.levels[Level.CURRENT_LEVEL];
    }

    static startLevel(levelIndex) {
        console.log(levelIndex)
        let level = Level.levels[levelIndex];

        level.setAvailableBlocksDiv();
        level.setSelectedBlocksDiv();
        Level.CURRENT_LEVEL = levelIndex;
        Level.CURRENT_LEVEL_IDENTIFIER = 'level' + levelIndex;
        View.startDragAndDropControl();
        Level.saveLevelCurrentState();
    }

    setAvailableBlocksDiv() {
        let availableBlocksDivs = '';
        this.availableBlocks.forEach(block => {
            availableBlocksDivs += block.htmlElement;
        });
        document.querySelector('.availableBlocks').innerHTML = availableBlocksDivs;
    }

    setSelectedBlocksDiv() {
        let selectedBlocksDiv = '';
        for (let index = 0; index < this.numberOfEmptySpaces; index++) {
            selectedBlocksDiv += '<div class="blocksHolder dropzone"></div>';
        }

        document.querySelector('.selectedBlocks').innerHTML = selectedBlocksDiv;
    }

    

}

export { Level };