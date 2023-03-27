import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextProvider';
import { setAuthTokens } from '../SpotifyService';

const RequireAuth = ({ children }: any): any => {
    const { tokens } = useContext(AuthContext);

    const sessionTokens = sessionStorage.getItem('tokens') ?? '{}';
    const parsedSessionTokens = JSON.parse(sessionTokens);

    if ((tokens?.accessToken && tokens?.refreshToken) || (parsedSessionTokens?.accessToken && parsedSessionTokens?.refreshToken)) {
        if (parsedSessionTokens?.accessToken && parsedSessionTokens?.refreshToken) {
            setAuthTokens(parsedSessionTokens);
        }

        return children;
    } else {
        return <Navigate to='/login' replace />
    }
};

export default RequireAuth;
