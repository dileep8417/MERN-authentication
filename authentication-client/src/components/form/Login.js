import { usePageContext } from "../../PageContext";
import withFormValidation from "../../hoc/withFormValidation";
import FormField from "../../wrapperComponents/FormField";

const Login = ({ fieldChangeHandler, formSubmitHandler, errors }) => {
    return (
        <form className="auth-form">
            <FormField error={errors.email}>
                <label>Email id</label>
                <input type="text" name="email" placeholder="john@gmail.com" onChange={fieldChangeHandler} />
            </FormField>

            <FormField error={errors.password}>
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" onChange={fieldChangeHandler} />
            </FormField>
          
            <button className="primary-btn form-submit" onClick={formSubmitHandler}>Login</button>
        </form>
    );
}

export default withFormValidation(Login, 'login');