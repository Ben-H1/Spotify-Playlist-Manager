import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

type OpenInSpotifyIconProps = {
    className?: string
    onClick?: () => void;
};

const OpenInSpotifyIcon = ({ className, onClick }: OpenInSpotifyIconProps) => {
    return (
        <FontAwesomeIcon
            className={clsx(onClick && 'cursor-pointer', className)}
            icon={faArrowUpRightFromSquare}
            title='Open in Spotify'
            onClick={onClick}
        />
    );
};

export default OpenInSpotifyIcon;
