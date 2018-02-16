'use strict';

import moment from 'moment';
import validator from 'validator';

// Custom default rules to validate form fields
const rules = {
    email: /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/,
    minlength(length, value) {
        console.log(value);
        if(value && validator.isLength(value, {min:3})) {
            return true;
        }

        return false;
    },
};

export default rules;