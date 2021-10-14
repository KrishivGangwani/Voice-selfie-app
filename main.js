var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run(event){
    console.log(event);

    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
     if(content == "take my selfie"){
         console.log("taking your selfie");
         speak();

     }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    webcam.attach(camera);

    setTimeout(function(){
        snapshot();
        save();
    }, 5000);
}

Webcam.set({
width: 360,
height: 250,
image_format : 'png',
png_quality: 90
});
camera = document.getElementById("camera");


function snapshot(){
    Webcam.snap(function(krishiv){
        document.getElementById("result").innerHTML = "<img id = 'image' src = ' "+krishiv+"' >";
    });
}

function save(){
    link = document.getElementById("link");
    link.href = document.getElementById("image").src;
    link.click(); // this code is to click the anchor tag with id link 
    
}
