var API_1=window.webkitSpeechRecognition;
var Speech =new API_1();
function start(){
    document.getElementById("textbox").innerHTML="";
    Speech.start();
}
Speech.onresult=function(event){
    var Content=event;
    console.log(Content);
    Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    if (Content=="take my selfie"){
        speak()
        console.log("Taking Selfie....");
    }
}
function speak(){
    syth=window.speechSynthesis;
    var speak_data="Taking Selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    syth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000)
}
camera=document.getElementById("camera");
Webcam.set({
    height:360,
    width:250,
    image_format:'jpeg',
    jpeg_quality:90
});
function take_snapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML='<img id="image" src="'+data_url+'">';
    })
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("image").src;
    link.href=image;
    link.click();
}