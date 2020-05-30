const genRandomSecret = require('./secret-gen');

class CodeBreaker {
  constructor() {
    this.secret = genRandomSecret();
  }

  setSecret(newSecret) {
    this.secret = newSecret;
  }

  generateSecret() {
    this.secret = genRandomSecret();
  }

  validate(input) {
    const secretArray = this.secret.split('');
    let result = '';
    secretArray.forEach((value, index) => {
      const valIndex = input.indexOf(value);
      if (valIndex === index) {
        result = 'X' + result;
      } else if (valIndex >= 0) {
        result += '_';
      }
    });
    return result;
  }
}

module.exports = CodeBreaker;
module.exports.codeBreakerInstance = new CodeBreaker();
