import { Button } from "./Button.js";
import { Block } from "./Block.js";
import { View } from "../View.js";
import { setStartLevelText } from "./HelpText.js";
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

    static blocksLevel3 = [
        Block.DEFAULT_BLOCKS["IF"],
        Block.DEFAULT_BLOCKS["ELSE"],
        Block.DEFAULT_BLOCKS["THEN"],
        Block.DEFAULT_BLOCKS["THEN"],
        Block.DEFAULT_BLOCKS["AND"],
        Block.DEFAULT_BLOCKS["OR"],
        Block.DEFAULT_BLOCKS["EQUALS"],
        Block.DEFAULT_BLOCKS["DIFFERENT"],
        Block.CUSTOM_BLOCKS["PESCARSALMAO"],
        Block.CUSTOM_BLOCKS["PESCARQUALQUER"],
        Block.CUSTOM_BLOCKS["BAIT"],
        Block.CUSTOM_BLOCKS["BAIT1"],
    ];

    static blocksLevel4 = [
        Block.CUSTOM_BLOCKS["PESCAR"],
        Block.CUSTOM_BLOCKS["VALUE10"],
        Block.DEFAULT_BLOCKS["WHILE"],
        Block.DEFAULT_BLOCKS["GREATERTHEN"],
        Block.DEFAULT_BLOCKS["GREATERTHENEQUAL"],
        Block.DEFAULT_BLOCKS["LESSTHEN"],
        Block.DEFAULT_BLOCKS["LESSTHENEQUAL"],
        Block.DEFAULT_BLOCKS["DO"],
        Block.CUSTOM_BLOCKS["FISHCONT"],
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
        },
        level3: (treatedCode) => {
            
            let fishes = [];

            getFishes('bait1');
            getFishes('any');

            function getFishes(baitParameter){
                let bait = baitParameter;

                eval(treatedCode)

                function getSalmao(){
                    fishes.push("salmao");
                }

                function getAnyFish(){
                    fishes.push("qualquer");
                }
            }

            if(fishes.some(fish=> fish === "salmao") && fishes.some(fish=> fish === "qualquer") && fishes.length === 2){
                return true;
            }

            return false;
        },
        level4: (treatedCode) => {

            let fishCont = 0;

            eval(treatedCode);
            
            if(fishCont === 10)return true;
            
            return false;

            function getFish(){
                fishCont++;
            }

            return false;
        },
        

    };

    static levels = [
        "",//Level 0 -> Ignore
        new Level(1, Level.blocksLevel1, Level.LEVEL_VALIDATORS["level1"], 5),
        new Level(2, Level.blocksLevel2, Level.LEVEL_VALIDATORS["level2"], 3),
        new Level(3, Level.blocksLevel3, Level.LEVEL_VALIDATORS["level3"], 9),
        new Level(4, Level.blocksLevel4, Level.LEVEL_VALIDATORS["level4"], 8),
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
        string = string.replaceAll("-premadeFunction", "();");
        string = string.replaceAll("---", "'");
        string = string.replaceAll("__", "");
        string = string.replaceAll("if", "if(");
        string = string.replaceAll("then", "){");

        if(string.search("else")!== -1){
            string += "}";
        }
        string = string.replaceAll("else", "}else if(true");
        string = string.replaceAll("while", "let cont = 0;while(");

        if(string.search("do")!== -1){
            string += "; cont++; if(cont>1000)break;}";
        }

        string = string.replaceAll("do", "){");
        console.log(string)
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

        setStartLevelText();
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