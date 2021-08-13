class Drops
{
    constructor(x, y)
    {
        var option = {
            "restitution":0.9,
            "isStatic": false,
            // "density" : 0.1,
            'friction': 0.1, 
        }

        this.r = 7;
        this.body=Bodies.circle(x,y,this.r,option);
        World.add(world,this.body);

        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        
    }

    updateDrop()
    {
        if(this.body.position.y>height)
        {
            Matter.Body.setPosition(this.body, {x:random(0, 400), y:random(5, 200)});
        }
    }

    display()
    {
    var pos = this.body.position;
    var angle = this.body.angle;
    push(); translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.r,this.r);
    pop();
    }
}