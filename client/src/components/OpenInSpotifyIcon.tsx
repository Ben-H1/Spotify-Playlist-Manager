import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type OpenInSpotifyIconProps = {
    className?: string
};

const OpenInSpotifyIcon = ({ className }: OpenInSpotifyIconProps) => {
    return (
        <FontAwesomeIcon
            className={className}
            icon={faArrowUpRightFromSquare}
            title='Open in Spotify'
        />
    );
};

export default OpenInSpotifyIcon;
