const squareList = arr => {
  // Only change code below this line
  let arrFilter = arr.filter(i => i > 0)
  let arrFilter1 = arrFilter.filter(i => Number.isInteger(i))
  let arrMap = arrFilter1.map( i => i*i)
  return arrMap;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
