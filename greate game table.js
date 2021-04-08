const defoultCardDeck=[
   "./img/ВЧ.PNG", "./img/ВП.PNG", "./img/ДП.PNG", "./img/ДЧ.PNG",
   "./img/КЧ.PNG", "./img/КП.PNG", "./img/ТП.PNG", "./img/ТЧ.PNG"

]
const startButton=document.querySelector(".new-game-button")
let gameTable=document.querySelector(".game-table")
const timeText=document.querySelector(".time")
let time=60

function mixingCardDeck(array) {
  const newCardDeck=[...array,...array]
    for (let i = newCardDeck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [newCardDeck[i], newCardDeck[j]] = [newCardDeck[j], newCardDeck[i]];
    }
    return newCardDeck
  }

function fillingGameTable(array) {
  let count=0
  while(count<16){
    let newElement= document.createElement("img")
    let imgWrapper=document.createElement("div")
    imgWrapper.append(newElement)
    newElement.src=array[count]
    newElement.setAttribute("data-number",count)
    newElement.onclick=checkCard
    gameTable.append(imgWrapper)
    count++
  }
}

function createNewGame(){
  gameTable.innerHTML=""
  const array=mixingCardDeck(defoultCardDeck)
  fillingGameTable(array)
  time=60
  count=0
}

window.onload = createNewGame
startButton.addEventListener("click",createNewGame)


setInterval(() => {
  time--;
  timeText.textContent=time
  if(time<=0){createNewGame();count=0} 
}, 700);


