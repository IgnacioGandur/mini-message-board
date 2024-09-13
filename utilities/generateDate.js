const moment = require("moment");

module.exports = function generateDate() {
    return moment(new Date()).format("dddd, Do MMMM YYYY [at] h:mm:ss a");
};
