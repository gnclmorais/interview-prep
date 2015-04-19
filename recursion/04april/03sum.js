function mysum (numbers) {
  return numbers.length ? numbers.pop() + mysum(numbers) : 0;
}

console.log(mysum([]));
