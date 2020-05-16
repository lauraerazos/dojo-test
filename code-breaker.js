class CodeBreaker {
    
    constructor () {
        this.secret = (Math.floor(Math.random() * (9999 - 1000) + 1000)).toString();
    }

    setSecret(newSecret) {
        this.secret = newSecret;
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
        })
        return (result);    
    }
}

module.exports = CodeBreaker;