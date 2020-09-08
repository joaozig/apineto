const dateRegex = require('../utils/date-template-regex');
module.exports = (date) => {
    if (date.match(dateRegex)) return date;

    dateArray = date.split('-');
    return dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0]

}
