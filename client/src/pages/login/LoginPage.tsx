import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthTokens, getAuthUrl, resetSessionTokens, setSessionTokens } from '../../services/AuthService/AuthService';
import { resetAuthTokens, setAuthTokens } from '../../services/SpotifyService';
import LoginBackground from './LoginBackground';
import LoginModal from './LoginModal';

const LoginPage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    const navigate = useNavigate();

    resetAuthTokens();
    resetSessionTokens();
    
    useEffect(() => {
        if (code) {
            getAuthTokens(code).then(tokens => {
                if (tokens.accessToken && tokens.refreshToken) {
                    setAuthTokens(tokens);
                    setSessionTokens(tokens);
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
