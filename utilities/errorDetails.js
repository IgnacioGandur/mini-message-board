const errorDetails = {
    lengthError(field, min, max, receivedInputLength) {
        return `${field}: This field must be between ${min} and ${max} characters long.`;
    },
    emptyField(field) {
        return `${field}: This field can't be empty.`;
    },
};

module.exports = errorDetails;
