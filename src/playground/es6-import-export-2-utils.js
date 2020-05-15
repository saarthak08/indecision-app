console.log('utils.js is running');


const square = (x) => x * x;

export const add = (a, b) => a + b;

const defaultFunction = function () { console.log('Hello! I am default from utils.js') };

export default defaultFunction;

//module.exports = {square};

export { square };