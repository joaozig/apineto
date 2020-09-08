const COUNTRIES = require('../../db')

test('Get All Countries', () => {
    expect(COUNTRIES).not.toBeNull();
})
