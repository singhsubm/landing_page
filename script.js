var main = document.querySelector("#main");
var image = document.querySelector("#main #img>img");
main.addEventListener("mousemove",function(detail){
    image.style.top = 1-detail.y*0.02+"px"
    image.style.left = 1-detail.x*0.02+"px"
})