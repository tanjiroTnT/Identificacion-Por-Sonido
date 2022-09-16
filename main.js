function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/fC_sHKwqf/model.json', modelReady);
}
function modelReady()
{
    classifier.classify( gotResults);
}
function gotResults(error, results){
    if (error){
        console.error(error);
    } else{
        console.log(results);
        random_number_r=Math.floor(Math.random() * 255) + 1;
        random_number_g=Math.floor(Math.random() * 255) + 1;
        random_number_b=Math.floor(Math.random() * 255) + 1;
        
        document.getElementById("result_label").innerHTML = 'Escucho - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Precision - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
     
        img=document.getElementById('gallina')
        img1=document.getElementById('gato')
        img2=document.getElementById('perro')
        img3=document.getElementById('rana')

        if(results[0].label=="Gallina"){
            img.src='gallina.gif';
            img1.src='gato.jpg';
            img2.src='perro.jpg';
            img3.src='rana.jpg';
        }
        else if(results[0].label =="Gato"){
            img.src='gallina.jpg';
            img1.src='gato.webp';
            img2.src='perro.jpg';
            img3.src='rana.jpg';
        }
        else if(results[0].label=="Perro"){
            img.src='gallina.jpg';
            img1.src='gato.jpg';
            img2.src='perro.gif';
            img3.src='rana.jpg';
        }
        else{
            img.src='gallina.jpg';
            img1.src='gato.jpg';
            img2.src='perro.jpg';
            img3.src='rana.gif';
        }
    }
}