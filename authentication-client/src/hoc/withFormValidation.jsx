import { useState } from "react";
import { loginFormData, signupFormData } from '../helpers/formValidation';
import axios from 'axios';
import { loginURL, signupURL } from "../constants/routes";
import { useNavigate } from "react-router-dom";

const withFormValidation = (Component, formType) => {
    
    const formData = formType === 'login' ? loginFormData : signupFormData;
    
    return (props) => {
        const [errors, setErrors] = useState({});
        const navigate = useNavigate();
        
        const fieldChangeHandler = (e) => {
            const field = formData.filter(input => input.name === e.target.name)[0];
            field.value = e.target.value;
            validateField(field);
        }
        
        const formSubmitHandler = (e) => {
            e.preventDefault();
            if (validateFormData(formData) === true) {
                sendFormData();
            }
        }

        const sendFormData = async () => {
            const dataToSend = {};
            formData.forEach(field => {
                dataToSend[field.name] = field.value;
            });

            try {
                const submissionUrl = formType === 'login' ? loginURL : signupURL;
                const {data : response} = await axios.post(submissionUrl, dataToSend, {withCredentials: true});
                if (!response.success) {
                    if (formType === 'login') {
                        navigate('/dashboard')
                    } else {
                        navigate('/auth/login')
                    }
                } else {
                    if (Object.keys(response.validationErrors).length) {
                        setValidationErrors(response.validationErrors);
                    } else if (response.errorMsg) {
                        setErrors(prevErrors => {
                            return {...prevErrors, ...{email: response.errorMsg}}
                        })
                    }
                }
            } catch (e) {
                console.log(e);
            }
        }

        const setValidationErrors = (validationErrors) => {
            Object.keys(validationErrors).forEach(errorField => {
                setErrors(prevErrors => {
                    return {...prevErrors, ...{[errorField]: validationErrors[errorField]}}
                })
            })
        }
    
        const validateFormData = (formData) => {
            let isValidForm = true;
            formData.forEach(field => {
                if (!validateField(field)) {
                    isValidForm = false;
                }              
            });

            return isValidForm;
        }
        
        const validateField = (field) => {
            let errorMsg = '';
            
            const valueLen = field.value.length;
            if (field.required && valueLen === 0) {
                errorMsg = 'This field is required';
            } else if (field.minLength && valueLen < field.minLength) {
                errorMsg = `Minimum ${field.minLength} characters required`;
            }

            setErrors((prevErrors) => {
                return {...prevErrors, ...{[field.name]: errorMsg}}
            });

            return errorMsg === '';
        }
        
        return <Component {...props} fieldChangeHandler={fieldChangeHandler} formSubmitHandler={formSubmitHandler} errors={errors} />
    }
}

export default withFormValidation;