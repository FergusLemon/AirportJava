'use strict';

var Airport = function(capacity) {
  this.capacity = capacity;
};

var plane = "plane";

Airport.prototype.planes = function() { return []; };

Airport.prototype.land = function(plane){
  if (this.planes.length >= this.capacity) {
    throw new Error('Cannot land: airport is full');
  }
  this.planes.push(plane);
};

Airport.prototype.take_off = function(plane){
  this.planes.pop(plane);
};
