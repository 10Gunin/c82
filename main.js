
var last_position_x, last_position_y;
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
Color="red";
widthofline=1;
var width=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    color=document.getElementById("color").value;
    console.log(color);
    last_position_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
currentpositionofx=e.touches[0].clientX-canvas.offsetLeft;
currentpositionofx=e.touches[0].clientY-canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=widthofline;
ctx.moveTo(last_position_x,last_position_y);
ctx.lineTo(currentpositionofx,currentpositionofy);
ctx.stroke();
last_position_x=currentpositionofx;
last_position_y=currentpositionofy;
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}