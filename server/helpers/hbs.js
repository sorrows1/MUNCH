const moment = require('moment');

module.exports = {
    formatDate: function (date, targetFormat) {
        return moment(date).format(targetFormat);
    },
    radioCheck: function (value, radioValue) {
        if (value === radioValue) {
            return 'checked';
        }
        return '';
    },
    replaceCommas: function (str) {
        if (str != null) {   // Check for null and empty string
            if (str.trim().length !== 0) {
                // Replace the ',' to '|'. Use pattern-matching string /,/g for ','
                return str.replace(/,/g, ' | ');
            }
        }
        return 'None';  // display 'None' if got no subtitles
    },
    checkAdmin: function (str) {
        return str == 'admin';
    },
    checkCustomer: function (str) {
        return str == 'customer';
    },
    math: function (lvalue, operator, rvalue) {
        lvalue = parseFloat(lvalue);
        rvalue = parseFloat(rvalue);
        return {
            "+": lvalue + rvalue,
            "-": lvalue - rvalue,
            "*": lvalue * rvalue,
            "/": lvalue / rvalue,
            "%": lvalue % rvalue
        }[operator];
    },
    ifEquals: function (left, right) {
        return left == right;
    },
};