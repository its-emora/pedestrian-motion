// window width = 1852, Window Height = 752

/// Setting constants ///
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/// Getting the canvas size ///
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath();
ctx.moveTo(canvas.width/2,canvas.height/2-100);
ctx.lineTo(canvas.width/2-200,canvas.height/2+100);
ctx.lineTo(canvas.width/2+200,canvas.height/2+100);
ctx.lineTo(canvas.width/2,canvas.height/2-100);

ctx.lineWidth = 5;
ctx.lineCap = "round";
ctx.stroke();

//test
//test
