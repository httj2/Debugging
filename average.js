// trying to find the average between a set of numbers
const average = function(list) {
  let sum = 0;
  // console.log(list.length)
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum / list.length;
};

console.log(average([3, 5, 7]));
