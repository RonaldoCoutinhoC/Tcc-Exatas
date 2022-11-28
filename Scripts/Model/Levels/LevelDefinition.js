import { getBlock } from '../Blocks/BlocksDefinition.js';
import { util } from '../../Utils/debugUtils.js';
export function getLevelSuccessValidator(index,codeString){

    let treatedCode = treatCodeString(codeString);
    const LEVEL_VALIDATOR = {
        1: ()=>{
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

    return LEVEL_VALIDATOR[index]();
}


export function getLevelInfo(levelIndex){
    const LEVELS_INFO = {
        1: {
            blocks: [
                getBlock({"identifier": "VARIABLE_BAIT","quantity": 1}),
                getBlock({"identifier": "BAIT1","quantity": 1}),
                getBlock({"identifier": "BAIT2","quantity": 1}),
                getBlock({"identifier": "EQUALS","quantity": 1}),
                getBlock({"identifier": "LESSTHEN","quantity": 1}),
                getBlock({"identifier": "GREATERTHENEQUAL","quantity": 1}),
                getBlock({"identifier": "GREATERTHEN","quantity": 1}),
                getBlock({"identifier": "DIFFERENT","quantity": 1}),
                getBlock({"identifier": "ASSIGN","quantity": 1}),
            ],
            requirement: null,
            numberOfEmptySpaces: 5

        }
    }
    return LEVELS_INFO[levelIndex];
}

function treatCodeString(string){

    
    string = string.replaceAll("---","'");

    return string;
}



