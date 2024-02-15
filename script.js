//Tout ça c'est pour créer le canvas (l'espece de cadre noir  )
window.onload = function()
{
    var canvas;
    var ctx;
    var delay=10;
    var xCoord =0;
    var yCoord =0;

    init();

    function init()
    {
        canvas = document.createElement('canvas');
        canvas.width =900;
        canvas.height = 600;
        canvas.style.border = '1px solid';
        document.body.appendChild(canvas);
        ctx = canvas.getContext("2d");
        refreshCanvas();

        
    

       
     }

     function refreshCanvas()
     {
//Comment dessiner dans un canvas (en 2D pour notre cas)
        xCoord +=1;
        yCoord +=1;
        ctx.fillStyle ='#ff0000';
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.fillRect(xCoord, yCoord, 100, 50 );
        setTimeout(refreshCanvas,delay);
     }

}