export const loginFormData = [
    {
        name: 'email',
        value: '',
        required: true,
    },
    {
        name: 'password',
        value: '',
        required: true,
        minLength: 6
    }
];

export const signupFormData = [
    {
        name: 'email',
        value: '',
        required: true,
    },
    {
        name: 'password',
        value: '',
        required: true,
        minLength: 6
    },
    {
        name: 'firstName',
        value: '',
        required: true,
    },
    {
        name: 'lastName',
        value: '',
    },
    {
        name: 'mobile',
        value: '',
        required: true,
        minLength: 10
    },
    {
        name: 'countryCode',
        value: '',
        required: true,
        minLength: 3
    }
];