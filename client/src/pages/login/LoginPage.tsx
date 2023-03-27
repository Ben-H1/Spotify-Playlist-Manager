import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextProvider';
import { getAuthTokens, getAuthUrl } from '../../services/AuthService/AuthService';
import { removeAuthTokens, setAuthTokens } from '../../services/SpotifyService';
import LoginBackground from './LoginBackground';
import LoginModal from './LoginModal';

const LoginPage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    const { setTokens } = useContext(AuthContext);
    const navigate = useNavigate();

    removeAuthTokens();
    sessionStorage.setItem('tokens', '{}');
    
    useEffect(() => {
        if (code) {
            getAuthTokens(code).then(tokens => {
                if (tokens.accessToken && tokens.refreshToken) {
                    setAuthTokens(tokens);
                    setTokens(tokens);
                    sessionStorage.setItem('tokens', JSON.stringify(tokens));
                    navigate('/home');
                }
            });
        }
    }, []);

    const handleLogin = () => {
        const authUrl = getAuthUrl();
        window.location.href = authUrl;
    };

    return (
        <div className='bg-ui-grayscale-100 text-white font-montserrat h-screen w-screen overflow-hidden'>
            <LoginModal handleLogin={handleLogin} />
            <LoginBackground rotate={true} />
        </div>
    );
};

export default LoginPage;
