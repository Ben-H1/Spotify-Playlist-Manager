import SpotifyWebApi from 'spotify-web-api-node';
import { clientId, redirectUri, scopes } from '../constants';
// @ts-ignore
import SpotifyWebApiServer from 'spotify-web-api-node/src/server-methods';
import { getBackend } from '../BackendService';

(SpotifyWebApi as unknown as { _addMethods: (fncs: unknown) => void })._addMethods(SpotifyWebApiServer);

const spotifyClient = new SpotifyWebApi({ clientId, redirectUri });

export const getAuthUrl = (): string => {
    return spotifyClient.createAuthorizeURL(scopes, '', true);
};

export type AuthTokens = {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
};

export const getAuthTokens = async (code: string): Promise<AuthTokens> => {
    return getBackend('/auth/tokens', { params: { code } });
};

export const getSessionTokens = () => {
    const sessionTokens = sessionStorage.getItem('tokens') ?? '{}';
    return JSON.parse(sessionTokens);
};

export const setSessionTokens = (tokens: AuthTokens) => {
    sessionStorage.setItem('tokens', JSON.stringify(tokens));
};

export const resetSessionTokens = () => {
    sessionStorage.setItem('tokens', '{}');
};
