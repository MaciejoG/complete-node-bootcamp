// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports (single variable)
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(2, 5));

// exports (can export multiple variables as parameters of module)
// const calc2 = require("./test-module-2");
// console.log(calc2.multiply(2, 5));
// exports (directly use names of exported variables to simplify)
const { add, multiply, divide } = require("./test-module-2");
console.log(multiply(2, 5));

// caching (first usage will store the module in the cache)
// (Call the function right away without assigning to a separate variable)
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();

