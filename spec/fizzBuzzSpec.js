describe('Javabuzz', function() {
  beforeEach(function(){
    javabuzz = new Javabuzz();
  });
  // describe('knows when a number is', function() {
  //   it('divisible by 3', function() {
  //     expect(javabuzz.isDivisibleByThree(3)).toBe(true);
  //   });
  // });
  // describe('knows when a number is not', function() {
  //   it('divisible by 3',function() {
  //     expect(javabuzz.isDivisibleByThree(1)).toBe(false);
  //   });
  // });
  // describe('knows when a numbre is', function() {
  //   it('divisible by 5',function() {
  //     expect(javabuzz.isDivisibleByFive(5)).toBe(true);
  //   });
  // });
  // describe('knows when a number is not', function() {
  //   it('divisible by 5', function(){
  //     expect(javabuzz.isDivisibleByFive(12)).toBe(false);
  //   });
  // });
  // describe('knows when a number is', function() {
  //   it('divisible by 15', function() {
  //     expect(javabuzz.isDivisibleByFiveteen(30)).toBe(true);
  //   });
  // });
  // describe('knows when a number is not', function() {
  //   it('divisible by 15', function() {
  //     expect(javabuzz.isDivisibleByFiveteen(40)).toBe(false);
  //   });
  // });
  describe('when playing, says', function(){
    it('"Java" when a number is divisible by 3', function(){
      expect(javabuzz.says(3)).toEqual("Java");
    });
  });
  describe('when playing, says', function() {
    it('"buzz" when a number is divisible by 5', function() {
      expect(javabuzz.says(5)).toEqual('buzz');
    });
  });
  describe('when playing, says', function(){
    it('"Javabuzz" when a number is divisible by 15', function(){
      expect(javabuzz.says(15)).toEqual('Javabuzz');
    });
  });
  describe('when playing, returns', function(){
    it('number if the number is not divisible by 3,5 and 15',function(){
      expect(javabuzz.says(19)).toEqual(19);
    });
  });
});
