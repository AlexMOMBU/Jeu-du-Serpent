//Tout ça c'est pour créer le canvas (l'espece de cadre noir  )
window.onload = function()
{
    var canvasWidth=900;
    var canvasHeight=600;
    var blockSize=30;
    var ctx;
    var delay=100;
    

    init();

    function init()
    {
        var canvas = document.createElement('canvas');
        canvas.width =canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = '1px solid';
        document.body.appendChild(canvas);
        ctx = canvas.getContext("2d");
        Snakee = new Snake( [[6,4], [5,4], [4,4]] );
        refreshCanvas();
    }
       
      
     function refreshCanvas()
     {
//Comment dessiner dans un canvas (en 2D pour notre cas)
     
        ctx.clearRect(0,0,canvasWidth, canvasHeight);
        Snakee.advance();
        Snakee.draw();
        setTimeout(refreshCanvas,delay);
     }

     function drawBlock(ctx, position)
     {
        var x = position[0] * blockSize;
        var y = position[1] * blockSize;
        ctx.fillRect(x,y, blockSize, blockSize);

     }

 //On va créer une fonction constructeur ( prototype de notre serpent)
     function Snake(body)
     {
        this.body= body;
        this.draw = function()
            {
                ctx.save();
                ctx.fillStyle ='#ff0000';
                for(var i = 0; i< this.body.length; i++)
                {
                    drawBlock( ctx, this.body[i] );
                }
                ctx.restore();
                   

            };

            this.advance = function()
                {
                    var nextPosition = this.body[0].slice();
                    nextPosition[0] += 1;
                    this.body.unshift(nextPosition);
                    this.body.pop();
                };
            
     } 


}