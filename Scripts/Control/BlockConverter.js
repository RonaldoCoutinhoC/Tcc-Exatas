




export function executeCode() {
    //Get all the blocksHolders of the selectedBlocks div
    const blocksHolders = document.querySelector('.selectedBlocks').children;
    let codeString = '';



    for (let index = 0; index < blocksHolders.length; index++) {
        const element = blocksHolders[index].children ? blocksHolders[index].children[0] : null;
        if (element && element.tagName === "P") {
            codeString += element.classList[1] + ' '; 
        }
    }
    alert(codeString);
}