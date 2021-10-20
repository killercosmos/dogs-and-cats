function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    var Classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/xwSkpaDTB/model.json",modelReady);
}
function modelReady(){
   Classifier.Classify(gotResults)
}
function gotResults(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result)
       var random_number_r = Math.floor(Math.random()*255)+1;
       var random_number_g = Math.floor(Math.random()*255)+1;
       var random_number_b = Math.floor(Math.random()*255)+1;

       document.getElementById("hearing").innerHTML = "I Can Hear - " + result[0].label;
       document.getElementById( "accuracy").innerHTML = 'Accuracy - ' + (result[0].confidence*100).toFixed(2) + "%";
       document.getElementById("hearing").style.color = "rgb(" +random_number_r+"," +random_number_g+"," +random_number_b+ ")";
       document.getElementById("accuracy").style.color = "rgb(" +random_number_r+"," +random_number_g+"," +random_number_b+ ")";
    }
        Dog = document.getElementById("dog.jpg");
        Cat = document.getElementById("download.jpg");
        parrot = document.getElementById("parrot.jpg");
    
    if(result[0].label == "Dog")
    {
        Dog = "dogs.gif";
        Cat = "download.jpg";
        parrot = "parrot.jpg";

    }
    else if(result[0].label == "Cat"){
        Dog = "dogs.jpg";
        Cat = "giphy.gif";
        parrot = "parrot.jpg";
    }
    else {
    Dog = "dogs.jpg";
    Cat = "download.jpg";
    parrot = "TOK1.gif";
    }

}