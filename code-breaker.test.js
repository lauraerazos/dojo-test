const codeBreaker = require('./code-breaker'); //Arrange

describe('Basics', () => {
    console.log(codeBreaker.secret);

    codeBreaker.setSecret('1234');

    test('given a secret 1234 for a secret 1234', () => {
        var value = codeBreaker.validate('1234'); //Act
        expect(value).toBe('XXXX'); //Assert
    });

    test('given a secret 1234 for a secret 5678', () => {
        var value = codeBreaker.validate('5678'); //Act
        expect(value).toBe(''); //Assert
    });

    test('given a secret 1234 for a secret 1238', () => {
        var value = codeBreaker.validate('1238'); //Act
        expect(value).toBe('XXX'); //Assert
    });

    test('given a secret 1234 for a secret 1238', () => {
        var value = codeBreaker.validate('1268'); //Act
        expect(value).toBe('XX'); //Assert
    });

    test('given a secret 1234 for a secret 1238', () => {
        var value = codeBreaker.validate('1568'); //Act
        expect(value).toBe('X'); //Assert
    });

    test('given a secret 1234 for a secret 3412', () => {
        var value = codeBreaker.validate('3412'); //Act
        expect(value).toBe('____'); //Assert
    });

    test('given a secret 1234 for a secret 1243', () => {
        var value = codeBreaker.validate('1243'); //Act
        expect(value).toBe('XX__'); //Assert
    });

    test('given a secret 1234 for a secret 2134', () => {
        var value = codeBreaker.validate('2134'); //Act
        expect(value).toBe('XX__'); //Assert
    });

})