const moment = require("moment");

const aDay = new Date();
const niceDay = moment(aDay).format("llll");
console.log(aDay);
console.log(niceDay)
