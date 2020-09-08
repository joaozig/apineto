const getCountriesBySortedConfirmedCases = require('../services/countries.service');


module.exports = (req, res) => {
    const countries = getCountriesBySortedConfirmedCases();
    return res.json(countries);
}
