import { createContext, ReactNode, useState } from 'react';

export const AuthContext = createContext<any>(undefined);

type AuthContextProviderProps = {
    children: ReactNode;
};

export type AuthTokens = {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
};

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [tokens, setTokens] = useState<AuthTokens | undefined>(undefined);

    return (
        <AuthContext.Provider value={{
            tokens, setTokens
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
