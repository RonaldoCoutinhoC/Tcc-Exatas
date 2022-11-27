import { getBlock } from '../Blocks/BlocksDefinition.js';


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
            requirement: null 
        }
    }
    return LEVELS_INFO[levelIndex];
}


