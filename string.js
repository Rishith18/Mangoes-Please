class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 30
        }
        this.string = Matter.Constraint.create(options);
        World.add(world, this.string);
        this.pointB = pointB;
    }

    fly() {
        this.string.bodyA = null
    }
    attach(body1) {
        this.string.bodyA = body1;
    }

    display(){
        if (this.string.bodyA)
        {var pointA = this.string.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);}
    }
    
}