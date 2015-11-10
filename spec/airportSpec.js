describe('Airport', function() {
  beforeEach(function(){
    airport = new Airport();
  });

  var plane = "plane";

  describe('instructs a plane to',function(){
    it('land',function(){
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });
    it('take_off', function() {
      airport.take_off(plane);
      expect(airport.planes).not.toContain(plane);
    });
  });
});
