class Ball {
constructor(x,y,r){
    var prop = {
        isStatic:true
    }
    this.body = Bodies.circle (x,y,r,prop)
    this.r = r
    World.add(world,this.body)
    this.img = loadImage("assets/cannonball.png")
}

display(){
push()
imageMode(CENTER)
image(this.img,this.body.position.x,this.body.position.y,this.r,this.r)
pop()
}
fire(){
    var vectors = p5.Vector.fromAngle(cannon.a)
    vectors.mult(20)
    Matter.Body.setStatic(this.body,false)
    Matter.Body.setVelocity(this.body,{x:vectors.x,y:vectors.y})
    
}

}