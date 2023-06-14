import { Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import AuthForm from './AuthForm';
import Dashboard from './Dashboard';
import Login from '../components/form/Login';
import Signup from '../components/form/Signup';
import withAuth from '../hoc/withAuth';
import { dashboardURL } from '../constants/routes';

const PageContainer = () => {
    const WelcomeWithAuth = withAuth(Welcome);
    const AuthFormWithAuth = withAuth(AuthForm);
    const DashboardWithAuth = withAuth(Dashboard);

    return (
        <Routes>
            <Route path='/' element={<WelcomeWithAuth />} />
            <Route path='/auth' element={<AuthFormWithAuth />}>
                <Route index path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
            </Route>
            <Route path='/dashboard' element={<DashboardWithAuth url={dashboardURL} />} />
        </Routes>
    );
}

export default PageContainer;