import withFormValidation from "../../hoc/withFormValidation";
import FormField from "../../wrapperComponents/FormField";

const Signup = ({ fieldChangeHandler, formSubmitHandler, errors }) => {

    return (
        <form className="auth-form">
            <div className="form-group">
                <FormField error={errors.firstName}>
                    <label>First name</label>
                    <input type="text" name="firstName" placeholder="Dileep" onChange={fieldChangeHandler} />
                </FormField>
                <FormField error={errors.lastName}>
                    <label>Last name</label>
                    <input type="text" name="lastName" placeholder="Atyam" onChange={fieldChangeHandler} />
                </FormField>
            </div>

            <div className="form-group">
                <div className="country-code">
                    <FormField error={errors.countryCode}>
                        <label>Country code</label>
                        <input type="text" name="countryCode" placeholder="+91" onChange={fieldChangeHandler} />
                    </FormField>
                </div>
                <FormField error={errors.mobile}>
                    <label>Mobile number</label>
                    <input type="text" name="mobile" placeholder="9999999999" onChange={fieldChangeHandler} />
                </FormField>
            </div>

            <FormField error={errors.email}>
                <label>Email id</label>
                <input type="text" name="email" placeholder="john@gmail.com" onChange={fieldChangeHandler} />
            </FormField>

            <FormField error={errors.password}>
                <label>Password</label>
                <input type="password" name="password" placeholder="password" onChange={fieldChangeHandler} />
            </FormField>

            <button className="primary-btn form-submit" onClick={formSubmitHandler}>Signup</button>
        </form>
    );
}

export default withFormValidation(Signup, 'signup');