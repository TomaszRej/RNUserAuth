

const validate = (val, rules, connectedValue) => {
    let isValid = true;
    const errors = {};
    for (let rule in rules) {
        switch (rule) {
            case "isEmail":
                isValid = isValid && emailValidator(val);
                if (!emailValidator(val)) {
                    errors.isEmail = 'Enter correct email address'
                }

                break;
            case "minLength":
                isValid = isValid && minLengthValidator(val, rules[rule]);
                if (!minLengthValidator(val, rules[rule])) {
                    errors.isEmail = `Entered value must be at least ${rules[rule]} characters long`
                }
                break;
            case "equalTo":
                isValid = isValid && equalToValidator(val, connectedValue[rule]);
                break;
            case "notEmpty":
                isValid = isValid && notEmptyValidator(val);
                if (!notEmptyValidator(val)) {
                    errors.notEmpty = "This field is require"
                }
                break;
            default:
                isValid = true;
        }
    }
    return { isValid, errors };
};

const emailValidator = val => {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        val
    );
};

const minLengthValidator = (val, minLength) => {
    return val.length >= minLength -1
};

const equalToValidator = (val, checkValue) => {
    return val === checkValue;
};

const notEmptyValidator = val => {
    return val.trim() !== "";
};

export default validate;