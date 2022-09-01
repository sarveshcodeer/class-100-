var SpeechRecognition = window.webkitSpeechRecognition  ; 

var recog = new SpeechRecognition() ; 

function st() {

recog.start()

}

recog.onresult = function run(event) {

console.log(event)
content = event.results[0][0].transcript ; 
document.getElementById("textbox").innerHTML = content ; 
if(content=="take my selfie"){

sp()
}
}

function sp()  {

    
    
synth =  window.speechSynthesis ;
speak_data = "taking your selfie within 5 seconds " ; 
ut = new SpeechSynthesisUtterance(speak_data) ; 

synth.speak(ut) ; 
Webcam.attach("#camera") ; 

setTimeout( function(){

    take_selfie() ; 
    save() ; 
    
    } , 5000 )
}

Webcam.set({
width:300 , 
height: 300 , 
image_format: "jpeg" ,
jpeg_quality : 90 
})

 camera = document.getElementById("camera") ; 

function take_selfie(){

Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = "<img id='pic' src=" +data_uri+">" ; 


}) ;

}

function save() {

document.getElementById("link").href = document.getElementById("pic").src ; 
document.getElementById("link").click() ; 

}
