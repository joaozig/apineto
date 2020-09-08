const COUNTRIES = require('../../db');
const formatDate = require('./formatDate.service');

function getCountriesBySortedConfirmedCases(){
    COUNTRIES.map((country) => country.updatedAt = formatDate(country.updatedAt));
    console.log(COUNTRIES);
    COUNTRIES.sort((prevCountry, curCountry) => {
        return prevCountry.confirmedCases < curCountry.confirmedCases ? 1 : -1;
    });

    return COUNTRIES;
}


module.exports = getCountriesBySortedConfirmedCases;
