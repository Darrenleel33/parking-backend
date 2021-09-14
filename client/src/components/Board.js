import React from 'react'

function Board() {

    const drop = e =>{
        e.preventDefault()
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = "block";

        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <div
            onDrop={drop}
            onDragOver={dragOver}
        >
            <p>board here
            </p>
        </div>
    )
}

export default Board;

