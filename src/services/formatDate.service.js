module.exports = (date) => {
    dateArray = date.split('-');
    return dateArray[2]
    .concat('/')
    .concat(dateArray[1])
    .concat('/')
    .concat(dateArray[0]);

}
