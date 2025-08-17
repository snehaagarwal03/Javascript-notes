//CommonJS - Older way for import and export

//named export
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

//even if we have one function to export we still use module.exports
//we can export whatever we want be it functions, objects or variables

module.exports = {
  add, 
  //exporting the function not the return value that's why not writing add()
  subtract,
  multiply,
};
