import { createBlocks,executeCode } from './GameLogic.js';

createBlocks();


const blocks = document.querySelectorAll('.block');
const dropzones = document.querySelectorAll('.dropzone');

document.querySelector('.executeCode').addEventListener('click', executeCode);

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






//================================== BLOCK LISTENERS ========================================================//
function dragstart() {
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'));

    //In this contex "this" means the block because this function is called by the block in line 5
    this.classList.add('is-dragging');
}

function dragend() {
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));
    this.classList.remove('is-dragging');
}
//================================== END OF BLOCK LISTENERS =================================================//

//================================== DROPZONES LISTENERS ========================================================//
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
//================================== END OF DROPZONES LISTENERS =================================================//


/*Helpers*/

function log(message) {
    console.log(message);
}

