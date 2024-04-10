import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState ,useEffect } from 'react';

const AuthRedirect = ({ children }) => {
    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () =>{
            try{
                await axios.post('http://localhost:8000/api/token/verify/',{
                    token: localStorage.getItem('access_token')
                })
                setIsAuthenticated(true);
            } catch (error) {
                try{
                    const response = await axios.post('http://localhost:8000/api/token/refresh/',{
                        refresh: localStorage.getItem('refresh_token')
                    })
                    localStorage.setItem('access_token', response.data.access);
                    setIsAuthenticated(true);
                } catch (error) {
                    console.error(error);
                    setIsAuthenticated(false);
                }
            }
            setIsLoading(false);
        }
        checkAuth();
    },[]);

    if(isLoading) {
        return <div>Cargando...</div>
    };

    return (
        isAuthenticated ? <Navigate to="/admin" state={{ from: location }} /> : children
    );
}
export default AuthRedirect;