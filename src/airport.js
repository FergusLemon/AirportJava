var Airport = function() {
  this.planes = [];
};

var plane = "plane";

Airport.prototype.land = function(plane){
  this.planes.push(plane);
};
