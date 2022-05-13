webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

function takesnapshot()
{
    webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'" />';
    });
}

Webcam.attach('ml5 version:', ml5.version);


classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fl8b6a1ZT/',modelLoaded);


function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResults);
}

function gotResults(error, results) {
if(error){
console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_name").innerHTML = results[0].label;
    document.getElementById("result_accuracy").innerHTML = results[0].confidence.tofixed(3);
}
}
