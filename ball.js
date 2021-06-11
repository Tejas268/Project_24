class Ball {
    constructor(x, y, width, height) {

        var options = {
            'restitution' : 1,
            'friction' : 0.4,
            'density' : 1
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.heigth = height;
        
        World.add(world, this.body);

    } display() {

        var pos = this.body.position;

        pos.x = mouseX;
        pos.y = mouseY;
        rect(pos.x, pos.y, this.width, this.height);
    }
}