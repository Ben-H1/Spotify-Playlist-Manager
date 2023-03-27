import { Routes, Route } from 'react-router-dom';
import CreatorPage from '../pages/creator/CreatorPage';
import HomePage from '../pages/home/HomePage';
import NoPage from '../pages/NoPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/creator' element={<CreatorPage />} />
            <Route path='/*' element={<NoPage />} />
        </Routes>
    );
};

export default AppRoutes;
