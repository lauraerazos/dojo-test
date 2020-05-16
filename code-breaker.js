let secret = (Math.floor(Math.random() * (9999 - 1000) + 1000)).toString();

function setSecret(newSecret) {
    secret = newSecret;
}

function validate(input) {
    const secretArray = secret.split('');
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

module.exports.secret = secret;
module.exports.setSecret = setSecret;
module.exports.validate = validate;