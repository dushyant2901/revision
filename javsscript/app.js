var userInput=document.querySelector("#userInput")
var btnadd =document.querySelector("#btnadd")
var btnsub =document.querySelector("#btnsub")
var output=document.querySelector("#output")

console.log(userInput)
console.log(btnadd,btnsub,output)

var score=(userInput.value)

btnadd.addEventListener("click", clickAddButton)
btnsub.addEventListener("click", clickSubButton)


function clickAddButton(){
  console.log("clicked")
  
  console.log(userInputText)
  var userInputText=(userInput.value)
  output.innerText=1+userInputText


}
function clickSubButton(){

    score=-1+score
    output.innerText=score

  }

  
  

 