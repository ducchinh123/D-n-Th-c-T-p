 var sides = [];

document.body.onload = function(){
    for (var i = 0; i<3; i++) {

        sides[i] = new Image();
        sides[i].src = "images/slide" + (i+1) + ".jpg";
        
        
    }
}

var hinh = document.querySelector("#anh");
var index =0;

function next(){
    index++;
    if(index>=3) index=0;
    hinh.src = sides[index].src;
 }

function pre(){
    index--;
    if(index <=0) index=4;
    hinh.src = sides[index].src;
}

setInterval("next()", 500);


