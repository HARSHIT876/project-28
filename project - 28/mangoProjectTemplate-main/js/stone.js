class stone  {
  constructor( bodyA,pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 10
    }
    this.pointB = pointB;
    this.stone1 = (options);
    World.add(world,this.stone1);
    this.image = loadImage("images/stone.png")
}
fly(){
this.stone1.bodyA = null;
}
display(){
    if(this.stone1.bodyA){
        var pointA = this.stone1.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}

}









