const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (Array.isArray(members)) {
    let result = members.filter(item => typeof(item) === 'string').map(item => {
      return item.replace(/ /g,'').substring(0, 1).toUpperCase();
    }).sort().join('');
    return result;
  } else {
    return false;
  }
};