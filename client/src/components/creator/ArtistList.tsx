import { faUser } from '@fortawesome/free-solid-svg-icons';
import BlankPic from '../BlankPic';
import List from '../list/List';
import ListItem from '../list/ListItem';
import OpenInSpotifyIcon from '../OpenInSpotifyIcon';

type ArtistListProps = {

};

const ArtistList = ({  }: ArtistListProps) => {
    return (
        <List>
            <ListItem>
                <div className='h-10 flex items-center'>
                    <BlankPic icon={faUser} className='h-full mr-2 rounded-full' />
                    <div className='flex items-center justify-between w-full truncate'>
                        <div className='truncate' title='Jamiroquai'>Jamiroquai</div>
                        <OpenInSpotifyIcon className='ml-3' onClick={() => {}} />
                    </div>
                </div>
            </ListItem>
        </List>
    );
};

export default ArtistList;
