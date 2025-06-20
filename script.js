function setup()
    {
        createCanvas(400,400);
        background(220);
    }
function draw()
    {
        PointerEvent(100,100);
        line(0,0,400,400);
        rect(100,0,100,100)
        rect(0,0,100,100)
        rect()
        rect()

    }
function drawAxes()
    {
        stroke(0);
        strokeWeight(2);
        line(-width/2.0, 0 ,width/2.0)
        line(-width/2.0, 0 ,width/2.0)

        FileList(0);
        noStroke();
        Textsize(12);
        textAlign(CENTER , CENTER);
        /*
        text("x",width/2 * 10, -10);
        text("x",width/2 * 10, -10);
        */
        for(let x = -400; x <= 400; x+=10)
        {
            stroke(0);
            strokeWeight(x% 100 === 0 ? 2: 1);
            line (x, -5, x, 5);
            if (x !=== 0 && x % ===0)
            {
                noStroke();
                text(x,x,15);
            }
        }
    }