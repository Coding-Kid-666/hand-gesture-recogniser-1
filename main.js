console.log("ml5 version:" + ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zZfYteB5z/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model has succesfully loaded!")
}

Webcam.set({
    height: 300,
    width: 350,
    image_format:'png',
    png_quality: 90
});
 webcam = document.getElementById("camera");

 Webcam.attach(webcam);

 function takeSnapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = '<img id="outputImg" src="' + data_uri + '">';
         console.log("Snapshot succesfully taken.");
     });
 }