




export function startDragAndDropControl(){
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
        this.classList.add('is-dragging');
    }
    
    function dragend() {
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

