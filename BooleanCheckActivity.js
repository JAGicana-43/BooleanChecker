function booWho(value) {
  return typeof value === "boolean";
}
//Test: 1
console.assert(typeof booWho === "function", "Test 1 Failed");

//Test: 2
console.assert(booWho(true) === true, "Test 2 Failed");

//Test: 3
console.assert(booWho(false) === true, "Test 3 Failed");

//Test: 4
console.assert(booWho([1, 2, 3]) === false, "Test 4 Failed");

//Test: 5
console.assert(booWho([].slice) === false, "Test 5 Failed");

//Test: 6
console.assert(booWho({ "a": 1 }) === false, "Test 6 Failed");

//Test: 7
console.assert(booWho(1) === false, "Test 7 Failed");
