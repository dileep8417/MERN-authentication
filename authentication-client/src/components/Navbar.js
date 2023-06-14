import axios from 'axios';
import { logOutURL } from '../constants/routes';
import { useNavigate } from 'react-router-dom';
import { usePageContext } from '../PageContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = usePageContext();

    const logOutHandler = async () => {
        await axios(logOutURL, {withCredentials: true});
        navigate('/');
    }

    return (
        <nav>
            <h3>Authentication App</h3>
            <div className="nav-options">
                {isAuthenticated && (<div onClick={logOutHandler}>Logout</div>)}
            </div>
        </nav>
    );
}

export default Navbar;