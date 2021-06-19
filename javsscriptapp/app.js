var userInput=document.querySelector("#userInput")
var translate =document.querySelector("#translate")

var output=document.querySelector("#output")

console.log(userInput)





translate.addEventListener("click", translateButton)

var url="ggggggg"

function constructURL(text){
    return url+"?"+"text="+text
}
function errorHandler(error
){ alert("try after some time")}

function translateButton(){
  console.log("clicked")
  
 
  var userInputText=userInput.value
  console.log(userInputText,typeof(userInputText))

  .fetch(constructURL(userInputText))
  .then(response=>response.json)
  .then(json=>console.log(json))
  .then(json=>{output.innerHTML=json.content.translated})
  .catch(errorHandler)


  


}

  