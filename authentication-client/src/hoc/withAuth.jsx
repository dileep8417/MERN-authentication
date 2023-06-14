import axios from "axios";
import { useEffect, useState } from "react"
import { authCheckURL } from "../constants/routes";
import { useLocation, useNavigate } from "react-router-dom";
import { usePageContext } from "../PageContext";

const withAuth = (Component) => {
    return (props) => {
        const [data, setData] = useState(null);
        const [isLoading, setIsLoading] = useState(true);

        const { setIsAuthenticated, isAuthenticated } = usePageContext();

        const navigate = useNavigate();
        const pathname = useLocation().pathname;
        
        useEffect(() => {
            const url = props.url || authCheckURL;
            const fetchData = async () => {
                try {
                    const response = await axios.get(url, { withCredentials: true });
                    const isLoggedin = response.data.isLoggedin;
                    setIsAuthenticated(isLoggedin);

                    // Don't allow logged in user to land on these pages
                    if (isLoggedin && (pathname === '/' || pathname.includes('/auth'))) {
                        navigate('/dashboard');
                    } else if (!isLoggedin && pathname.includes('/dashboard')) {
                        navigate('/auth/login');
                    }

                    setData(response.data);
                    setIsLoading(false);
                } catch (e) {
                    console.log(e);
                }
            }
            fetchData();
        }, []);

        return <Component data={data} isLoading={isLoading} isAuthenticated={isAuthenticated} {...props} />
    }
}

export default withAuth;