const arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this);
  }
};

Array.prototype.myFilter = function (fn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) result.push(this[i]);
  }
  return result;
};

const newArr = arr.myFilter((num) => num > 2);
console.log(newArr);
// arr.myMap((i) => console.log(i ** 2));

Array.prototype.myreduce = function (fn, accumulator) {
  accumulator += this[0];

  if (this.length === 1) return accumulator;
  for (let i = 1; i < this.length; i++) {
    accumulator += this[i];
    fn(this[i - 1], this[i], i, this);
  }
  return accumulator;
};

const res = arr.reduce((prev, curr) => prev + curr, 0);

console.log(res);
