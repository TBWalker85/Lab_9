$(document).ready(function() {
});

var Vehicle = function() {
    this.div = document.createElement('div');
    document.body.appendChild(this.div);
    var damage = 1;
};

Vehicle.prototype.move = function() {  
    var classname = this.div.className;
    if(classname === 'car') {
        $(this.div).animate({'left':'1200px'}, 5000).animate({'left':'-1000px'},5000);
        return;
    };
    if(classname === 'copcar') {
        $(this.div).animate({'top':'1200px'},5000).animate({'top':'-1000px'},5000);
        return;
    };
    if(classname === 'motorcycle') {
        $(this.div).animate({'left':'1200px', 'top':'1200px'},2500).animate({'left':'-1000px', 'top':'-200px'},2500);
        return;
    };
    if(classname === 'tank') {
        $(this.div).animate({'left':'1200px'},10000).animate({'left':'-1000px'},10000);
        return;
    };
};

var Car = function() {
    Vehicle.call(this);
    this.div.className = 'car';
    this.health = 2;  
    $(this.div).css({
        left: Math.floor((Math.random() *1000) +1),
        top: Math.floor((Math.random() *1000) +1),
    });
};

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

var CopCar = function(){
    Vehicle.call(this);
    this.div.className = 'copcar';
    this.health = 3;
    $(this.div).css({
        left: Math.floor((Math.random() *1000) +1),
        top: Math.floor((Math.random() *1000) +1),
    });
};

CopCar.prototype = Object.create(Vehicle.prototype);
CopCar.prototype.constructor = CopCar;

var Motorcycle = function(){
    Vehicle.call(this);
    this.div.className = 'motorcycle';
    this.health = 1;
    $(this.div).css({
        left: Math.floor((Math.random() *1000) +1),
        top: Math.floor((Math.random() *1000) +1),
    });
};

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

var Tank = function(){
    Vehicle.call(this);
    this.div.className = 'tank';
    this.health = 10;
    $(this.div).css({
        left: Math.floor((Math.random() *1000) +1),
        top: Math.floor((Math.random() *1000) +1),
    });
};

Tank.prototype = Object.create(Vehicle.prototype);
Tank.prototype.constructor = Tank;

function makeCar() {
    var car  = new Car();
    car.move();
    setInterval(function() {
       car.move(); 
    }, 20000);
};

function makeCopCar() {
    var copcar = new CopCar();
    copcar.move();
     setInterval(function() {
       copcar.move(); 
    }, 20000);
};

function makeMotorcycle() {
    var motorcycle = new Motorcycle();
    motorcycle.move();
     setInterval(function() {
       motorcycle.move(); 
    }, 10000);
};

function makeTank() {
    var tank = new Tank();
    tank.move();
     setInterval(function() {
       tank.move(); 
    }, 40000);
};