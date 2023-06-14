module.exports.validateLoginForm = (formData, response) => {
    response.validationErrors = {};

    if (!formData.email || !isValidEmail(formData.email) ) {
        response.validationErrors.email = 'Please enter valid email address';
    }

    if (!formData.password || formData.password.length < 6) {
        response.validationErrors.password = 'Password should be minimum of 6 characters';
    }
}

module.exports.validateSignupForm = (formData, response) => {
    response.validationErrors = {};

    if (!formData.email || !isValidEmail(formData.email) ) {
        response.validationErrors.email = 'Please enter valid email address';
    }

    if (!formData.password || formData.password.length < 6) {
        response.validationErrors.password = 'Password should be minimum of 6 characters';
    }

    if (!formData.mobile || isNaN(formData.mobile)) {
        response.validationErrors.mobile = 'Please enter valid mobile number';
    }

    if (!formData.firstName) {
        response.validationErrors.firstName = 'Please enter valid first name';
    }

    if (!formData.countryCode || formData.countryCode[0] !== '+') {
        response.validationErrors.countryCode = 'Please enter valid country code';
    }
}


const isValidEmail = (email) => {
    // Regular expression pattern to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    return emailPattern.test(email);
}

