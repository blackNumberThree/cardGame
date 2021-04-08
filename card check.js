let couple=[]
let count=0
const countText=document.querySelector(".count")

function checkCard(event) {
  let currentCard=event.target
  currentCard.classList.add("visible")
  couple.push(currentCard)
  checkCouple()
}

function   checkCouple(){
      if (couple.length==2){
        if (couple[0].src==couple[1].src) {count++;countText.textContent=count}
        else {hiddenCard()};
    couple=[]
  }
  if (count==8) {createNewGame()}
}

function hiddenCard() {
  let closureCouple=couple
    function hiddenAllCards() {
      setTimeout(()=>{
        closureCouple[0].classList.remove("visible")
        closureCouple[1].classList.remove("visible")
      },1000)
    }
    hiddenAllCards() 
}


  