

class View {
    constructor(){

    }

    static startDragAndDropControl(){
        //document.querySelector('.executeCode').addEventListener('click', executeCode);
        const blocks = document.querySelectorAll('.block');
        const dropzones = document.querySelectorAll('.dropzone');
        blocks.forEach(block => {
            block.addEventListener('dragstart', dragstart)
            //block.addEventListener('drag', drag)
            block.addEventListener('dragend', dragend)
        });
    
        dropzones.forEach(dropzone => {
            //dropzone.addEventListener('dragenter', dragenter)
            dropzone.addEventListener('dragover', dragover)
            dropzone.addEventListener('dragleave', dragleave)
            dropzone.addEventListener('drop', drop)
        });
    
        function dragstart() {
            //In this contex "this" means the block because this function is called by the block in line 5
            
            var sound = document.getElementById("dragSound");
            sound.play();
            this.classList.add('is-dragging');
        }
        
        function dragend() {
            var sound = document.getElementById("dragSound");
            sound.pause();
            sound.currentTime = 0;
            this.classList.remove('is-dragging');
        }
        
        function dragover() {
        
            this.classList.add('over');
            const blockBeingDragged = document.querySelector('.is-dragging')
        
            if (this.children.length === 0) {
                this.appendChild(blockBeingDragged);
            }
        
        }
        
        function dragleave() {
            this.classList.remove('over');
        }
        
        function drop() {
            this.classList.remove('over');
            this.classList.add('isOccupied');
        }
        
    }
    
    static startDoubleClickUtils() {
        let blocks = document.querySelectorAll(".block");
    
        blocks.forEach(block => {
            block.addEventListener('dblclick', (event) => {

                let blockClicked = event.composedPath().find(element => element.tagName === "SPAN");
                playSound();
                
    
                if(blockClicked.parentElement.parentElement.classList[0] === "selectedBlocks"){
                    changeBlockPosition(blockClicked, "availableBlocks");
                }else if(blockClicked.parentElement.parentElement.classList[0] === "availableBlocks"){
                    changeBlockPosition(blockClicked, "selectedBlocks");
                }
                
                
            });
        });
    
        async function playSound(){
            const delay = ms => new Promise(res => setTimeout(res, ms));
            var sound = document.getElementById("dropSound");
            sound.play();
            await delay(500);
            sound.pause();
            sound.currentTime = 0;

        }
    
        function changeBlockPosition(block, divToMove){
    
            
                let holders = document.querySelectorAll(".blocksHolder");
                let selectedBlocksHolders = [];
        
                holders.forEach(holder=>{
                    if(holder.parentElement.classList[0] === divToMove){
                        selectedBlocksHolders.push(holder);
                    }
                });
        
                let changed = false;
                selectedBlocksHolders.forEach(holder=>{
                    if(holder.children.length === 0 && changed === false){
                        holder.appendChild(block);
                        changed = true;
                    }
                });
        
            
        }
    
        
    
    }

    

}

export { View };
