// form blur event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
    const name = document.getElementById('name');
    // regular expression used to evaluate the input
    const re = /^[a-zA-Z]{2,10}$/;

    // test name value to see if it matches re
    if(!re.test(name.value)) {
        // if it doesn't match
        name.classList.add('is-invalid');
    } else {
        // if it does match
        name.classList.remove('is-invalid')
    }
}
function validateZip() {
    const zip = document.getElementById('zip');
    // regular expression used to evaluate the input
    const re = /^[0-9]{5}(-[0-9]{4})?$/;

    // test zip value to see if it matches re
    if(!re.test(zip.value)) {
        // if it doesn't match
        zip.classList.add('is-invalid');
    } else {
        // if it does match
        zip.classList.remove('is-invalid')
    }

}
function validateEmail() {
    const email = document.getElementById('email');
    // regular expression used to evaluate the input
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    // test name value to see if it matches re
    if(!re.test(email.value)) {
        // if it doesn't match
        email.classList.add('is-invalid');
    } else {
        // if it does match
        email.classList.remove('is-invalid')
    }
}
function validatePhone() {
    const phone = document.getElementById('phone');
    // regular expression used to evaluate the input
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}?$/;

    // test name value to see if it matches re
    if(!re.test(phone.value)) {
        // if it doesn't match
        phone.classList.add('is-invalid');
    } else {
        // if it does match
        phone.classList.remove('is-invalid')
    }
}