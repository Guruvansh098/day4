
class Tiles{
    constructor(x,y){
var options={
    isStatic:true}
    this.width=50
    this.height=50
    this.body=Bodies.rectangle(x,y,this.width,this.height,options)
    World.add(world,this.body)
}
display(){
    var pos=this.body.position
    push()
    translate(pos.x,pos.y)
    rectMode(CENTER)
    fill("blue")
    rect(0,0,this.width,this.height)
    pop()
}
}
