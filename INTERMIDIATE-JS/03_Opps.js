/*
object literal = let obj =  {}
this method is good if ur object is small but for big tasks define objects with constructors and factories.
so in constructor the first letter should be uppercase


*/
// factory
function createCircle(radius) {
    return  {
        name: 'name',
        radius: radius,
        draw:function(){console.log("this is draw from factory.");
        }
        
    }
}

const circle = createCircle(3)
console.log(circle.name);
 circle.draw();

// constructor here u do not need to return the object with this keyword this is done auto. also new keyword creates an empty  object and this keyword then point to that object , if not used new keyword then this keyword points to window object. 
function CreateCircle(radius) {
    this.radius = radius,
        this.name = 'circle',
        this.draw = function(){console.log("contructor");
        }
}


let otherCircle = new CreateCircle(3);
console.log(otherCircle.name);
otherCircle.draw();
