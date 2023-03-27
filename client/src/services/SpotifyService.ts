import SpotifyWebApi from 'spotify-web-api-node';
import { clientId } from './constants';

const spotifyClient = new SpotifyWebApi({ clientId });

export const setAuthTokens = (tokens: any): void => {
    spotifyClient.setAccessToken(tokens.accessToken);
    spotifyClient.setRefreshToken(tokens.refreshToken);
};

export const removeAuthTokens = () => {
    spotifyClient.setAccessToken('');
    spotifyClient.setRefreshToken('');
};

export const getMe = async () => {
    return (await spotifyClient.getMe()).body;
};
