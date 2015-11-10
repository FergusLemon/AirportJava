var Airport = function() {
  this.planes = [];
};

var plane = "plane";

Airport.prototype.land = function(plane){
  this.planes.push(plane);
};

Airport.prototype.take_off = function(plane){
  this.planes.pop(plane);
};
