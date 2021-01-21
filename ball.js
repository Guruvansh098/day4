
class Ball{
    constructor(x,y){
var options={
restitution:0.1 ,friction:0.1,density:0.8   
}
    
    this.radius=10
    this.body=Bodies.circle(x,y,this.radius,options)
    World.add(world,this.body)
}
display(){
    var pos=this.body.position
    push()
    translate(pos.x,pos.y)
    ellipseMode(CENTER)
    fill("yellow")
    ellipse(0,0,this.radius,this.radius)
    pop()
}
}
