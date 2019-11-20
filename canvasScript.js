window.addEventListener('load', drawTriangle); //when page is loaded, function is triggered.

function drawTriangle()
{
    var canvas=document.getElementById('myCanvas');
    var context=canvas.getContext('2d');
    
                                                    //BRAZIL FLAG
    
    //DRAW RECTANGLE
    context.fillStyle='#00A859';                    //colours the rectangle green
    context.fillRect(0,0,353,247);                  //sets x, y, width, height. This creates the rectangle needed for the flag.
    
    //DRAW DIAMOND
    context.fillStyle = "#FFCC29";                  //colours the diamond green
    context.beginPath();                            //starts a new path
    context.moveTo(45,124);                         //moves the path to the point x,y. This is the starting position of the diamond.
    context.lineTo(177,45);                         //creates a line to and from x,y. The lineTo draws a line  
    context.lineTo(308,124);
    context.lineTo(177,202);
    context.closePath();                            //closes the path
    context.fill();                                 //fills the diamond with colour
    
    //DRAW CIRCLE
    context.fillStyle = "#3E4095"                   //colour of the circle
    context.beginPath();                            //starts a new path
    context.arc(177,124,50,50,Math.PI*2, true);     //draws the circle
    context.fill();                                 //fills the circle with colour
    context.closePath();                            //closes the path
    context.stroke();                               
}