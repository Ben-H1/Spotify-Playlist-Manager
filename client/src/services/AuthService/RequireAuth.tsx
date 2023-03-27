import { Navigate } from 'react-router-dom';
import { setAuthTokens } from '../SpotifyService';
import { getSessionTokens } from './AuthService';

const RequireAuth = ({ children }: any) => {
    const sessionTokens = getSessionTokens();

    if (sessionTokens?.accessToken && sessionTokens?.refreshToken) {
        if (sessionTokens?.accessToken && sessionTokens?.refreshToken) {
            setAuthTokens(sessionTokens);
        }

        return children;
    } else {
        return <Navigate to='/login' replace />
    }
};

export default RequireAuth;
