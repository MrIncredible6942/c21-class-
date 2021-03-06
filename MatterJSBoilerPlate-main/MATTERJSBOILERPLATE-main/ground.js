//Blueprint or design template 

class Ground
{

    //properties
     constructor(x, y, w, h)
     {
        var options = 
        {
            isStatic: true
        }

         this.body = Bodies.rectangle(x, y, w, h, options);
         this.w = w;
         this.h = h;

         World.add(myWorld,this.body);
     }



    //methods
    display()
    {
        var pos = this.body.position;
         push();
        rectMode(CENTER);
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }

}