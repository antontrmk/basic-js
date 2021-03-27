const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(date) {  
  let season;
  if (date && Object.prototype.toString.call(date) === '[object Date]') {

    switch(String(date.getMonth() + 1)) {
      case '12':
      case '1':
      case '2':
        season = 'winter';
        break;
      case '3':
      case '4':
      case '5':
        season = 'spring';
        break;
      case '6':
      case '7':
      case '8':
        season = 'summer';
        break;
      case '9':
      case '10': 
      case '11':
        season = 'autumn';
        break;
    }
    return season;
  }
  else if (typeof(date) === 'undefined') {
    return 'Unable to determine the time of year!';
  }
  else {
    throw {name : "NotImplementedError", message : "too lazy to implement"};
  }
};

//console.log(module.exports(new Date(2019, 11, 22, 23, 45, 11, 500)));