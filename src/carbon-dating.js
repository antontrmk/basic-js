const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(!/[^0-9.]/g.test(sampleActivity) && 
      sampleActivity) == 'string' &&
      sampleActivity != '' &&
      sampleActivity > 0 &&
      sampleActivity < 15) {
    return Math.ceil(Math.log(15/sampleActivity) / 0.00012094240837696334);
  } else {
    return false;
  }
};