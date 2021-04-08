let couple=[]
let count=0
const countText=document.querySelector(".count")
const blockScreen=document.querySelector(".block-screen")
function checkCard(event) {
  let currentCard=event.target
  currentCard.classList.add("visible")
  couple.push(currentCard)
  checkCouple()
}

function   checkCouple(){
      if (couple.length==2){
        
        blockScreen.style.zIndex=1
        if (couple[0].src==couple[1].src) {
          count++;
          countText.textContent=count
          blockScreen.style.zIndex=-1
          couple=[]
        }
        else {
          couple[0].classList.add("red-shadow")
          couple[1].classList.add("red-shadow")
          hiddenCards();
        };

  }
  if (count==8) {createNewGame()}
}


    function hiddenCards() {
      setTimeout(()=>{
        couple[0].classList.remove("visible")
        couple[1].classList.remove("visible")
        blockScreen.style.zIndex=-1
        couple[0].classList.remove("red-shadow")
        couple[1].classList.remove("red-shadow")
        couple=[]
      },700)
}


  