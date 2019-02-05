var pictures = ["1.jpeg","2.jpeg","3.jpeg","4.jpeg"];
var nextImage = document.querySelector("#goRight");
var previousImage = document.querySelector("#goLeft");
var imageBox = document.querySelector("#container");
var i=0;
previousImage.addEventListener("click",function(){
    if(i==3)
        i=0;
    else
        i++;
    imageBox.style.background = "url(" + pictures[i] + ")";
})
nextImage.addEventListener("click",function(){
    if(i==0)
        i=3;
    else
        i--;
    imageBox.style.background = "url(" + pictures[i] + ")";
})