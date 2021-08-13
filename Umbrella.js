class Umbrella
{
    constructor(x, y, width, height)
    {
        var option = {
            'restitution' : 0.6,
            "isStatic": true,
            'friction': 0.1
        }

        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x, y, this.width, this.height, option);
        World.add(world, this.body);
    }

    display()
    {
        var pos=this.body.position;
        fill("black");
        push();
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}