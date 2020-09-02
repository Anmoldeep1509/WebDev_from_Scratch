const validator = require('validator')

const email = 'anmoldeep@dev.in'


isemail = false


if(validator.isEmail(email)){
    console.log('Proceeding to log in');
} else {
    console.log('invalid email, check again');
}