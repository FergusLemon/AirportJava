'use strict';

describe('Airport', function() {
  var airport;

  beforeEach(function(){
    airport = new Airport(1);
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });

});

// describe('instructs a plane to', function() {
//   it('land', function() {
//     airport.land(plane);
//     expect(airport.planes).toContain(plane);
//   });
//
//   it('take_off', function() {
//     airport.take_off(plane);
//     expect(airport.planes).not.toContain(plane);
//   });
// });
//
// describe('prevent planes landing when', function() {
//   it('is full', function() {
//     airport.land(plane);
//     expect(function() {airport.land(plane);}).toThrowError('Cannot land: airport is full');
//   });
// });
