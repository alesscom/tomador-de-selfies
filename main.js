var reconosedor_vos =window.webkitSpeechRecognition;
var reconosedor = new reconosedor_vos();
function start(){
    document.getElementById("textbox").innerHTML = "";
    reconosedor.start();
}
reconosedor.onresult = function(event){
    console.log(event); 
    var contenido = event.results[0][0].transcript;
    console.log(contenido);
    document.getElementById("textbox").innerHTML =contenido;
    if(contenido == "Toma mi selfie"){
        console.log("Tomando tu selfie");
        speech();
    };
}
function speech(){
    var habla = window.speechSynthesis;
    speak_data = "tu selfie se tomara en 5 segundos";
    var di_esto = new SpeechSynthesisUtterance(speak_data);
    habla.speak(di_esto);
    Webcam.attach(camera);
    setTimeout(function(){
        tomar_foto();
        save();
    },5000);
}
Webcam.set({
    width: 360,
    height: 250,
    image_format:'png',
    png_quality: 90
});
camera = document.getElementById("camera");
function tomar_foto(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ='<img id="selfie_image" src="'+ data_uri + '"/>';
    });
}
function save(){
    link= document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}