function booWho(value) {
  return typeof value === "boolean";
}
//Test: 1
console.assert(typeof booWho === "function", "Test 1 Failed");