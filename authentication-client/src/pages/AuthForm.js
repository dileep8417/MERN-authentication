import { Outlet, useLocation } from 'react-router-dom';
import FormNav from '../components/form/FormNav';
import '../styles/AuthForm.css';

const AuthForm = ({isLoading, isAuthenticated}) => {
    if (isLoading || isAuthenticated) {
        return;
    }

    return (
        <div>
            <FormNav />
            <Outlet />
        </div>
    );
}

export default AuthForm;