function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}
Shape.prototype.calcperimeter = function obj() {

  return this.obj.sideLength*this.obj.sides;

}
