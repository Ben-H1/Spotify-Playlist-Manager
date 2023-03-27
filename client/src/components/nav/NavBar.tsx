import DropdownItem from '../dropdown/DropdownItem';
import NavDropdown from './NavDropdown';
import UserInfo from './UserInfo';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = (e: any) => setScrollTop(e.target.documentElement.scrollTop);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    const getOpacity = () => {
        return Math.min(scrollTop / 100, 1);
    };

    const handleGoHome = () => {
        navigate('/home');
    };

    const handleOpenPlaylistCreator = () => {
        navigate('/creator');
    };

    return (
        <div
            className='p-2 pl-4 w-full fixed flex items-center top-0 z-nav h-14'
            style={{ backgroundColor: `rgba(36, 36, 36, ${getOpacity()})` }}
        >
            <div
                className='font-bold text-2xl mr-6 select-none cursor-pointer'
                onClick={handleGoHome}
            >
                Spotify Playlist Manager
            </div>
            <NavDropdown title='Tools'>
                <DropdownItem onClick={handleOpenPlaylistCreator}>Playlist Creator</DropdownItem>
            </NavDropdown>
            <div className='grow'></div>
            <UserInfo />
        </div>
    );
};

export default NavBar;
