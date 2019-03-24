module.exports = function getZerosCount(number, base) {
  // your implementation
  let mult = [];
  let primes = [];
  let exp = [];
  let counter = null;

  for (let i = 1; base > 1; i++) {
      let j = 2;
      while (base % j != 0)  {
          j++;
      }
      base = base / j;
      mult.push(j);
  }

  for (let i = 0; i < mult.length; i++) {
      if ((mult[i] == mult[i+2]) && (mult[i] == mult[i+1]) && (mult[i] != primes[i])) {
          primes.push(mult[i]);
          mult.splice(i,3);
          exp.push(3);
          i = -1;
      } else if ((mult[i] == mult[i+1]) && (mult[i] != primes[i])) {
          primes.push(mult[i]);
          mult.splice(i,2);
          exp.push(2);
          i = -1;
      } else if (mult[i] == primes[i]) {
          mult.splice(i,1);
          exp[i]++;
          i = -1;
      } else {
          primes.push(mult[i]);
          mult.splice(i,1);
          exp.push(1);
          i = -1;
      }
  }

  for(let i = 0; i < primes.length; i++){
      let buffer = 0;
      let number_buf = number;
      for (let j = 1; number_buf > 0; j++) {
          buffer = buffer + Math.floor(number_buf / primes[i]);
          number_buf = Math.floor(number_buf / primes[i]);
      }
      if (counter==null) {
          counter = Math.floor(buffer / exp[i]);
      } else
      if(counter>Math.floor(buffer / exp[i])) {
          counter = Math.floor(buffer / exp[i]);
      };
  }

return counter;
}