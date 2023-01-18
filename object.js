let car = {
    model : "BMW",
    color : 'black',
    speed: 0,
    numberOfStatus: 5,
    moveForward: function(speed) {
        this.speed = speed
        console.log("moving forward with speed of: "+this.speed)
    },
    moveForward: function(speed) {
        this.speed = speed
        console.log("moving backward with speed of: "+this.speed)
    },

}