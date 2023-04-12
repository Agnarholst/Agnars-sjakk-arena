/* White Pieces - Drag and drop feature */

const wking = document.querySelector('.chess-piece')
const wqueen = document.querySelector('.chess-piece2')
const wbishop = document.querySelector('.chess-piece3')
const wbishopb = document.querySelector('.chess-piece35')
const wknight = document.querySelector('.chess-piece4')
const wknightb = document.querySelector('.chess-piece45')
const wrook = document.querySelector('.chess-piece5')
const wrookb = document.querySelector('.chess-piece55')
const wpawn = document.querySelector('.chess-piece6')
const wpawn2 = document.querySelector('.chess-piece7')
const wpawn3 = document.querySelector('.chess-piece8')
const wpawn4 = document.querySelector('.chess-piece9')
const wpawn5 = document.querySelector('.chess-piece10')
const wpawn6 = document.querySelector('.chess-piece11')
const wpawn7 = document.querySelector('.chess-piece12')
const wpawn8 = document.querySelector('.chess-piece13')

const squares = document.querySelectorAll('.square')
 
wking.addEventListener('dragstart', dragStart)
wqueen.addEventListener('dragstart', dragStart)
wbishop.addEventListener('dragstart', dragStart)
wbishopb.addEventListener('dragstart', dragStart)
wknight.addEventListener('dragstart', dragStart)
wknightb.addEventListener('dragstart', dragStart)
wrook.addEventListener('dragstart', dragStart)
wrookb.addEventListener('dragstart', dragStart)
wpawn.addEventListener('dragstart', dragStart)
wpawn2.addEventListener('dragstart', dragStart)
wpawn3.addEventListener('dragstart', dragStart)
wpawn4.addEventListener('dragstart', dragStart)
wpawn5.addEventListener('dragstart', dragStart)
wpawn6.addEventListener('dragstart', dragStart)
wpawn7.addEventListener('dragstart', dragStart)
wpawn8.addEventListener('dragstart', dragStart)

/* Black Pieces - Drag and drop feature */

const bking = document.querySelector('.black-chess-piece')

bking.addEventListener('dragstart', dragStart)



squares.forEach(square => {
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
})

let beingDragged

function dragStart(e) {
    beingDragged = e
}

function dragOver(e) {
    e.preventDefault()
}

function dragDrop(e) {
    e.target.append(beingDragged.target);
}
