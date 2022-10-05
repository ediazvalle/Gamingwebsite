var amount = 0;

var added = document.querySelector("#cartAmount");

function addToCart(){
    amount++;
    added.innerHTML = amount;
}

var slider = document.getElementById('Img');

// contains images in an array
var images = ['cafe-neko','stonepunk', 'pixel-ninjas-2'];

var i = images.length;


// function for next image

function nextImg(){
  if (i<images.length) {
    i= i+1;
  }else{
    i = 1;
 }
    slider.innerHTML = "<img src="+ images[i-1] + ".png>";
    console.log(slider)
}


// function for prev image

function prevImg(){

  if (i<images.length+1 && i>1) {
    i= i-1;
  }else{
    i = images.length;
  }
    slider.innerHTML = "<img src="+ images[i-1] + ".png>";
}