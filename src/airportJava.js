var Javabuzz = function() {};
// function Javabuzz () {};
// Javabuzz.prototype.isDivisibleByThree = function(number){
//   return this._isDivisibleBy(number, 3);
// };
//
// Javabuzz.prototype.isDivisibleByFive = function(number){
//   return this._isDivisibleBy(number, 5);
// };
//
// Javabuzz.prototype.isDivisibleByFiveteen = function(number){
//   return this._isDivisibleBy(number, 15);
// };

Javabuzz.prototype.says = function(number){
  if (number === 0){
    return number
  }
  if (this.isDivisibleBy(number, 15)){
    return "Javabuzz";
  }
  if (this.isDivisibleBy(number, 3)){
    return "Java";
  }
  if (this.isDivisibleBy(number, 5)){
    return "buzz";
  }
  return number;
};

Javabuzz.prototype.isDivisibleBy = function(number, divisor){
  return ( number % divisor === 0 );
};
