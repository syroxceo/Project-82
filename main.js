canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");


mouseEvent = "empty";
color = "black";
width_of_line = 3;
radius = 2;

var lastPositionOfX;
var lastPositionofY;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;

    width_of_line = document.getElementById("width_of_line").value;

    radius = document.getElementById("radius").value

    mouseEvent = "mouseDown";

    console.log("inside my mousedown");
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    console.log("inside my mousemove");

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        console.log("Current position of x and y coordinates =");
        console.log("x = " + current_position_of_mouse_x == "y =" + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        //ctx.moveTo(lastPositionOfX, lastPositionofY);//
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
    lastPositionOfX = current_position_of_mouse_x;
    lastPositionOfY = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    console.log("inside my mouseup");

    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    console.log("inside my mouseleave");

    mouseEvent = "mouseleave";
}
