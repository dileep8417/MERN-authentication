import { NavLink } from "react-router-dom";

const FormNav = () => {
    return (
        <div className="form-nav">
            <NavLink to='/auth/signup'>Signup</NavLink>
            <NavLink to='/auth/login'>Login</NavLink>
        </div>
    );
}

export default FormNav;