import { faCaretDown, faCaretUp, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextProvider';
import { getMe, removeAuthTokens } from '../../services/SpotifyService';
import BlankPic from '../BlankPic';
import DropdownDivider from '../dropdown/DropdownDivider';
import DropdownItem from '../dropdown/DropdownItem';
import DropdownMenu from '../dropdown/DropdownMenu';
import LoadingSpinner from '../LoadingSpinner';
import OpenInSpotifyIcon from '../OpenInSpotifyIcon';

const UserInfo = () => {
    const navigate = useNavigate();

    const { setTokens } = useContext(AuthContext);

    const [userInfo, setUserInfo] = useState<SpotifyApi.CurrentUsersProfileResponse | undefined>(undefined);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    useEffect(() => {
        getMe().then(info => setUserInfo(info));
    }, []);

    const handleLogout = () => {
        removeAuthTokens();
        setTokens(undefined);
        sessionStorage.setItem('tokens', '{}');
        navigate('/login');
    };

    const handleOpenProfile = () => {
        window.open(userInfo?.external_urls.spotify);
    };

    return (
        <div>
            <div
                className='bg-black p-1 rounded-full h-10 flex items-center hover:bg-ui-grayscale-400 cursor-pointer select-none'
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                {userInfo && <>
                    {userInfo.images?.[0] ? <>
                        <img className='h-full rounded-full' src={userInfo.images[0].url}></img>
                    </> : <>
                        <BlankPic className='h-full rounded-full' icon={faUser} />
                    </>}
                    <div className='mx-3 font-semibold'>{userInfo.display_name}</div>
                </>}
                {!userInfo && <>
                    <LoadingSpinner className='h-5 mx-3' />
                </>}
                <FontAwesomeIcon
                    className='h-5 mr-3'
                    icon={dropdownOpen ? faCaretUp : faCaretDown}
                />
            </div>
            {dropdownOpen && <DropdownMenu
                className='w-64 right-2 mt-2'
                setIsOpen={setDropdownOpen}
            >
                <DropdownItem onClick={handleOpenProfile}>
                    <div className='flex justify-between items-center'>
                        Profile
                        <OpenInSpotifyIcon />
                    </div>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={handleLogout}>Log out</DropdownItem>
            </DropdownMenu>}
        </div>
    );
};

export default UserInfo;
