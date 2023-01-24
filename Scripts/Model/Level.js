import { Button } from "./Button.js";
import { Block } from "./Block.js";
import { View } from "../View.js";
import { setStartLevelText } from "./HelpText.js";
import { SaveController } from "./SaveController.js";
import { Background } from "./Background.js";

class Level {

    constructor(index, availableBlocks, scriptValidator, numberOfEmptySpaces) {
        this.index = index;
        this.availableBlocks = availableBlocks;
        this.scriptValidator = scriptValidator;
        this.numberOfEmptySpaces = numberOfEmptySpaces;
    }

    static CURRENT_LEVEL = 1;
    static CURRENT_LEVEL_IDENTIFIER = "level1";
    static IS_UNIQUE_PLAY = false;

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
        Block.DEFAULT_BLOCKS["END_IF"],
        Block.DEFAULT_BLOCKS["END_ELSE"],
        Block.DEFAULT_BLOCKS["EQUALS"],
        Block.DEFAULT_BLOCKS["DIFFERENT"],
        Block.CUSTOM_BLOCKS["BAIT"],
        Block.CUSTOM_BLOCKS["BAIT1"],
        Block.CUSTOM_BLOCKS["PESCARSALMAO"],
        Block.CUSTOM_BLOCKS["PESCARQUALQUER"],
    ];

    static blocksLevel4 = [
        Block.DEFAULT_BLOCKS["WHILE"],
        Block.DEFAULT_BLOCKS["DO"],
        Block.DEFAULT_BLOCKS["END_WHILE"],
        Block.CUSTOM_BLOCKS["VALUE10"],
        Block.CUSTOM_BLOCKS["FISHCONT"],
        Block.CUSTOM_BLOCKS["PESCAR"],
        Block.DEFAULT_BLOCKS["GREATERTHEN"],
        Block.DEFAULT_BLOCKS["GREATERTHENEQUAL"],
        Block.DEFAULT_BLOCKS["LESSTHEN"],
        Block.DEFAULT_BLOCKS["LESSTHENEQUAL"],
    ];

    static blocksLevel5 = [
        Block.DEFAULT_BLOCKS["ASSIGN"],
        Block.CUSTOM_BLOCKS["VARIABLE_BAIT"],
        Block.CUSTOM_BLOCKS["MIKEWANTS"],
        Block.CUSTOM_BLOCKS["SALMAO"],
        Block.CUSTOM_BLOCKS["TILAPIA"],
        Block.CUSTOM_BLOCKS["BAIT1"],
        Block.CUSTOM_BLOCKS["BAIT2"],
        Block.DEFAULT_BLOCKS["IF"],
        Block.DEFAULT_BLOCKS["ELSE"],
        Block.DEFAULT_BLOCKS["THEN"],
        Block.DEFAULT_BLOCKS["THEN"],
        Block.DEFAULT_BLOCKS["END_IF"],
        Block.DEFAULT_BLOCKS["END_ELSE"],
        Block.DEFAULT_BLOCKS["EQUALS"],
        Block.DEFAULT_BLOCKS["DIFFERENT"],
    ];

    static blocksLevel6 = [
        Block.CUSTOM_BLOCKS["FISHWEIGHT"],
        Block.CUSTOM_BLOCKS["VALUE10KG"],
        Block.CUSTOM_BLOCKS["SALMAO"],
        Block.CUSTOM_BLOCKS["FISHOBTAINED"],
        Block.DEFAULT_BLOCKS["EQUALS"],
        Block.DEFAULT_BLOCKS["DIFFERENT"],
        Block.DEFAULT_BLOCKS["LESSTHEN"],
        Block.DEFAULT_BLOCKS["LESSTHENEQUAL"],
        Block.DEFAULT_BLOCKS["GREATERTHEN"],
        Block.DEFAULT_BLOCKS["GREATERTHENEQUAL"],
        Block.DEFAULT_BLOCKS["OR"],
        Block.CUSTOM_BLOCKS["PESCAR"],
        Block.DEFAULT_BLOCKS["WHILE"],
        Block.DEFAULT_BLOCKS["DO"],
        Block.DEFAULT_BLOCKS["END_WHILE"],

    ];

    static blocksLevel7 = [
        Block.CUSTOM_BLOCKS["PESCAR"],
        Block.CUSTOM_BLOCKS["SOLTARPEIXE"],
        Block.CUSTOM_BLOCKS["SALMAO"],
        Block.CUSTOM_BLOCKS["FISHCONT"],
        Block.CUSTOM_BLOCKS["VALUE10"],
        Block.CUSTOM_BLOCKS["FISHOBTAINED"],
        Block.DEFAULT_BLOCKS["WHILE"],
        Block.DEFAULT_BLOCKS["DO"],
        Block.DEFAULT_BLOCKS["END_WHILE"],
        Block.DEFAULT_BLOCKS["IF"],
        Block.DEFAULT_BLOCKS["THEN"],
        Block.DEFAULT_BLOCKS["END_IF"],
        Block.DEFAULT_BLOCKS["GREATERTHEN"],
        Block.DEFAULT_BLOCKS["LESSTHEN"],
        Block.DEFAULT_BLOCKS["DIFFERENT"],
    ];

    static blocksLevel8 = [
        Block.CUSTOM_BLOCKS["FISHWEIGHT"],
        Block.CUSTOM_BLOCKS["FISHWEIGHT"],
        Block.CUSTOM_BLOCKS["VALUE10KG"],
        Block.CUSTOM_BLOCKS["VALUE7KG"],
        Block.DEFAULT_BLOCKS["TRUE"],
        Block.DEFAULT_BLOCKS["FALSE"],
        Block.DEFAULT_BLOCKS["AND"],
        Block.DEFAULT_BLOCKS["ASSIGN"],
        Block.DEFAULT_BLOCKS["ASSIGN"],
        Block.DEFAULT_BLOCKS["IF"],
        Block.DEFAULT_BLOCKS["THEN"],
        Block.DEFAULT_BLOCKS["END_IF"],
        Block.DEFAULT_BLOCKS["ELSE"],
        Block.DEFAULT_BLOCKS["THEN"],
        Block.DEFAULT_BLOCKS["END_ELSE"],
        Block.DEFAULT_BLOCKS["GREATERTHEN"],
        Block.DEFAULT_BLOCKS["GREATERTHENEQUAL"],
        Block.DEFAULT_BLOCKS["LESSTHEN"],
        Block.DEFAULT_BLOCKS["LESSTHENEQUAL"],
        Block.CUSTOM_BLOCKS["FISHWANTEDOBTAINED"],
        Block.CUSTOM_BLOCKS["FISHWANTEDOBTAINED"],
    ];
    static blocksLevel9 = [

        Block.DEFAULT_BLOCKS["WHILE"],
        Block.DEFAULT_BLOCKS["DO"],
        Block.DEFAULT_BLOCKS["END_WHILE"],
        Block.DEFAULT_BLOCKS["IF"],
        Block.DEFAULT_BLOCKS["THEN"],
        Block.DEFAULT_BLOCKS["END_IF"],
        Block.DEFAULT_BLOCKS["LESSTHEN"],
        Block.DEFAULT_BLOCKS["EQUALS"],
        Block.DEFAULT_BLOCKS["ASSIGN"],
        Block.CUSTOM_BLOCKS["PESCARQUALQUER"],
        Block.CUSTOM_BLOCKS["VARIABLE_BAIT"],
        Block.CUSTOM_BLOCKS["BAIT2"],
        Block.CUSTOM_BLOCKS["VALUE10"],
        Block.CUSTOM_BLOCKS["FISHOBTAINED"],
        Block.CUSTOM_BLOCKS["FISHCONT"],
        Block.CUSTOM_BLOCKS["SALMAO"],
    ];

    static blocksLevel10 = [
        Block.DEFAULT_BLOCKS["WHILE"],
        Block.DEFAULT_BLOCKS["DO"],
        Block.DEFAULT_BLOCKS["END_WHILE"],
        Block.CUSTOM_BLOCKS["BAIT1"],
        Block.CUSTOM_BLOCKS["BAIT3"],
        Block.CUSTOM_BLOCKS["FISHCONT"],
        Block.CUSTOM_BLOCKS["FISHCONT"],
        Block.CUSTOM_BLOCKS["VALUE100"],
        Block.CUSTOM_BLOCKS["VALUE101"],
        Block.DEFAULT_BLOCKS["ASSIGN"],
        Block.CUSTOM_BLOCKS["VARIABLE_BAIT"],
        Block.DEFAULT_BLOCKS["IF"],
        Block.DEFAULT_BLOCKS["THEN"],
        Block.DEFAULT_BLOCKS["END_IF"],
        Block.DEFAULT_BLOCKS["EQUALS"],
        Block.DEFAULT_BLOCKS["LESSTHENEQUAL"],

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

            function getFishes(baitParameter) {
                let bait = baitParameter;

                try {
                    eval(treatedCode);
                } catch (e) { }

                function getSalmao() {
                    fishes.push("salmao");
                }

                function getAnyFish() {
                    fishes.push("qualquer");
                }
            }

            if (fishes[0] === "salmao" && fishes[1] === "qualquer" && fishes.length === 2) {
                return true;
            }

            return false;
        },
        level4: (treatedCode) => {
            let fishCont = 0;

            try {
                eval(treatedCode);
            } catch (e) { }

            if (fishCont === 10) return true;

            return false;

            function getFish() {
                fishCont++;
            }

            return false;
        },
        level5: (treatedCode) => {

            let salmon = "salmon";
            let tilapia = "tilapia"
            let condition1 = false;
            let condition2 = false;

            if (treatedCode.search("salmon") === -1 && treatedCode.search("tilapia") === -1) return false;

            function userCode(mikeWants) {
                try{
                    eval(treatedCode);
                }catch(e){
                }
            }

            let bait;
            userCode("salmon");

            if (bait === 'bait1') condition1 = true;
            userCode("tilapia");

            if (bait === 'bait2') condition2 = true;

            if (condition1 === true && condition2 === true) {
                return true;
            }

            return false;


        },
        level6: (treatedCode) => {

            let fishObtained = "random";
            let fishWeight = 0;
            let salmon = "salmon";
            let cont = 0;

            try {
                eval(treatedCode);
            } catch (e) { }

            if (treatedCode.search("while") === -1) return false;

            if (fishObtained === salmon && fishWeight >= 10) {
                return true;
            } else {
                return false;
            }

            function getFish() {
                let auxRandomFish = ["salmon", "random"];
                let auxRandomFishWeight = [5, 10];
                fishObtained = auxRandomFish[Math.floor(Math.random() * 2)];
                fishWeight = auxRandomFishWeight[Math.floor(Math.random() * 2)];
            }
        },
        level7: (treatedCode) => {


            let fishCont = 0;
            let fishContArray = [];
            let fishObtained;
            let salmon = "salmon";
            try {
                eval(treatedCode);

            } catch (e) { }

            if (fishContArray.length >= 10 && fishContArray.every(fish => fish === "salmon")) {
                return true;
            }

            return false;

            function getFish() {
                let auxRandomFish = ["salmon", "random"];
                fishObtained = auxRandomFish[Math.floor(Math.random() * 2)];
                fishContArray.push(fishObtained);
                fishCont++;
            }

            function dropFish() {
                fishContArray.pop();
                fishCont--;
            }


        },
        level8: (treatedCode) => {

            let fishWeight = 0;
            let fishWantedObtained = null;
            function testUserCode(weight) {
                fishWeight = weight;
                fishWantedObtained = null;
                eval(treatedCode);

                return fishWantedObtained;
            }

            try {
                if (testUserCode(7) === true &&
                    testUserCode(10) === false) {
                    console.log("Passou")
                    return true;
                }

            } catch (e) { }

            return false;


        },
        level9: (treatedCode) => {

            let fishCont = [];
            let salmon = "salmon";
            let fishObtained = "any";

            treatedCode = treatedCode.replaceAll("bait='bait2'", "getTilapia();");
            treatedCode = treatedCode.replaceAll("bait = 'bait2'", "getTilapia();");
            treatedCode = treatedCode.replaceAll("fishCont", "fishCont.length");
            
            try{
                eval(treatedCode);
            }catch(e){}
            
                            //0     1       2           3       4       5     6       7         8         9
            let mustFish = ["any", "any", "salmon", "tilapia","any", "any", "any", "salmon", "tilapia", "any"];
               
            function getAnyFish(){

                let index = fishCont.length;

                if(index === 0 || index === 1 || index === 4 || index === 5 || index === 6 || index === 9 ){
                    fishCont.push("any");
                    fishObtained = "any";
                }else if( index === 2 || index === 7 ){
                    fishCont.push("salmon");
                    fishObtained = "salmon";
                }
            }

            function getTilapia(){
                fishCont.push("tilapia");
            }

            if(arraysEqual(fishCont,mustFish)){
                return true;
            }

            return false;
            
            function arraysEqual(a1,a2) {
                if(a1 === null || a1 === undefined || a2 === null || a2 === undefined){
                    return false;
                }

                return JSON.stringify(a1)==JSON.stringify(a2);
            }

        },
        level10: (treatedCode) => {

            let fishCont = [];
            //treatedCode = "let cont = 0;while( fishCont < 101 ){ bait='bait1' if( fishCont === 100 ){ bait='bait3' } ; cont++; if(cont>50000)break;}";

            treatedCode = treatedCode.replaceAll("fishCont", "fishCont.length");
            treatedCode = treatedCode.replaceAll("bait='bait1'", "getSalmon();");
            treatedCode = treatedCode.replaceAll("bait = 'bait1'", "getSalmon();");
            treatedCode = treatedCode.replaceAll("bait='bait3'", "getLegendarySalmon();");
            treatedCode = treatedCode.replaceAll("bait = 'bait3'", "getLegendarySalmon();");

            console.log(treatedCode)
            try {
                eval(treatedCode);
            } catch (error) { }

            function getSalmon() {
                fishCont.push("salmon");
            }

            function getLegendarySalmon() {
                fishCont.push("LegendarySalmon");
            }

            if (fishCont.length === 101 &&
                fishCont.filter(fish => fish === "salmon").length === 100 &&
                fishCont[fishCont.length - 1] === "LegendarySalmon") {
                return true;
            }

            return false;

        },

    };

    static levels = [
        "",//Level 0 -> Ignore
        new Level(1, Level.blocksLevel1, Level.LEVEL_VALIDATORS["level1"], 3),
        new Level(2, Level.blocksLevel2, Level.LEVEL_VALIDATORS["level2"], 3),
        new Level(3, Level.blocksLevel3, Level.LEVEL_VALIDATORS["level3"], 11),
        new Level(4, Level.blocksLevel4, Level.LEVEL_VALIDATORS["level4"], 7),
        new Level(5, Level.blocksLevel5, Level.LEVEL_VALIDATORS["level5"], 11),
        new Level(6, Level.blocksLevel6, Level.LEVEL_VALIDATORS["level6"], 11),
        new Level(7, Level.blocksLevel7, Level.LEVEL_VALIDATORS["level7"], 20),
        new Level(8, Level.blocksLevel8, Level.LEVEL_VALIDATORS["level8"], 20),
        new Level(9, Level.blocksLevel9, Level.LEVEL_VALIDATORS["level9"], 14),
        new Level(10, Level.blocksLevel10, Level.LEVEL_VALIDATORS["level10"], 14),
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
        string = string.replaceAll("endIf", "}");
        string = string.replaceAll("endElse", "}");
        string = string.replaceAll("endWhile", "; cont++; if(cont>50000)break;}");
        string = string.replaceAll("then", "){");
        string = string.replaceAll("else", "else if(true");
        string = string.replaceAll("while", "let cont = 0;while(");
        string = string.replaceAll("do", "){");

        console.log(string)
        return string;
    }


    static getCurrentLevel() {
        return Level.levels[Level.CURRENT_LEVEL];
    }

    static startLevel(levelIndex) {

        let level = Level.levels[levelIndex];
        Background.setStarterBackground();
        level.setAvailableBlocksDiv();
        level.setSelectedBlocksDiv();
        Level.CURRENT_LEVEL = levelIndex;
        if (Level.IS_UNIQUE_PLAY === false) {
            console.log("Saved Game")
            SaveController.saveGame(levelIndex);
        }
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