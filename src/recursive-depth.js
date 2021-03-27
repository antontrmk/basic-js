const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    
    if (Array.isArray(arr)) {
      arr.push(1);
      let depth = arr.map(item => {
        return this.calculateDepth(item);
      });
      return 1 + Math.max.apply(null, depth);
    } else {
      return 0;
    }
  }
};

// const depthCalc = new module.exports();
// console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]));
// //console.log(depthCalc.calculateDepth([]));

// // console.log(Array.isArray([]));



