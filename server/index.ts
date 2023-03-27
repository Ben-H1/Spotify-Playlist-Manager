import chalk from 'chalk';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import SpotifyWebApi from 'spotify-web-api-node';
import Logger from './logger.js';

dotenv.config();

const app: Express = express();
app.use(cors({
    origin: 'http://localhost:5174'
}));

const port = process.env.PORT ?? 8000;

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;

if (!clientId || !clientSecret || !redirectUri) {
    console.log(chalk.red('You must set environment variables in .env:'));
    console.log(chalk.red('   CLIENT_ID'));
    console.log(chalk.red('   CLIENT_SECRET'));
    console.log(chalk.red('   REDIRECT_URI'));
    console.log();

    process.exit(1);
}

const spotifyClient = new SpotifyWebApi({ clientId, clientSecret, redirectUri });

app.get('/auth/tokens', async (req: Request, res: Response) => {
    Logger.logRequest(req);

    const code = req.query.code as string;
    
    if (code) {
        try {
            const tokens = (await spotifyClient.authorizationCodeGrant(code)).body;
            
            const response = {
                accessToken: tokens.access_token,
                refreshToken: tokens.refresh_token,
                expiresIn: tokens.expires_in
            };

            Logger.info('Sending tokens');
            res.send(response);
        } catch (e: any) {
            Logger.error(e.message);
        }
    } else {
        res.status(400).send('No code provided.');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log();
});
