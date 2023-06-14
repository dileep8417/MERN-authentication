import { useNavigate } from 'react-router-dom';

const Welcome = ({isLoading, isAuthenticated}) => {
    const navigate = useNavigate();

    if (isLoading || isAuthenticated) {
        return;
    }

    return (
        <div>
            <center style={{margin: '48px 0 24px'}}><h2>Page shown for non logged-in users</h2></center>
            <button onClick={() => navigate('/auth/login')} style={{display: 'block', margin: '0 auto'}} className="primary-btn">Login/Signup</button>
        </div>
    );
}

export default Welcome;