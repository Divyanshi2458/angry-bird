class Pig
{
constructor(x,y)
{
    var Options={
        'restitution':0.8,
        'friction':1.0,
        'density':1,
    }

this.body=Bodies.rectangle(x,y,50,50,Options)
this.width=50
this.height=50
World.add(world,this.body)
 
}

display()
    {
var pos= this.body.position
var angle=this.body.angle  
push()
translate(pos.x,pos.y)
rotate(angle)
rectMode(CENTER)
strokeWeight(4)
stroke("red")
fill("red")
rect(0,0,this.Width,this.height)
pop()
    }

}   