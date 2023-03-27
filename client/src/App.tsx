import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import Wrapper from './pages/Wrapper';
import RequireAuth from './services/AuthService/RequireAuth';

const App = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/*' element={
                <RequireAuth>
                    <Wrapper />
                </RequireAuth>
            } />
        </Routes>
    );
};

export default App;
