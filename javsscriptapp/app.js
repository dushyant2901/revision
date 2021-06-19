var userInput=document.querySelector("#userInput")
var translate =document.querySelector("#translate")

var output=document.querySelector("#output")

console.log(userInput)





translate.addEventListener("click", translateButton)

var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function constructURL(text){
    return serverURL+"?"+"text="+text
}
function errorHandler(error
){ alert("try after some time")}

function translateButton(){
  console.log("clicked")
  
 
  var userInputText=userInput.value
  console.log(userInputText,typeof(userInputText))

  fetch(constructURL(userInputText))
  .then(response=>response.json())
  .then(json=>{output.innerHTML=json.contents.translated})
  .catch(errorHandler)


  


}

  