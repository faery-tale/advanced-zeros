module.exports = function getZerosCount(number, base) {
  // your implementation
  var answer = 0;
  while (number>0){
     number = ~~(number/5);
     answer+=number;
  }
  return answer;
}