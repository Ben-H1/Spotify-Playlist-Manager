import AlbumList from '../../components/creator/AlbumList';
import ArtistList from '../../components/creator/ArtistList';
import InfoPreview from '../../components/creator/InfoPreview';
import TrackList from '../../components/creator/TrackList';

type CreatorPreviewProps = {

};

const CreatorPreview = ({  }: CreatorPreviewProps) => {
    return (
        <div className='h-full flex-col flex'>
            <div className='font-bold text-lg mb-2'>Preview</div>
            <div className='flex flex-col grow'>
                <div className='flex flex-col mb-2 h-1/6'>
                    <div className='font-bold'>Artists</div>
                    <div className='grow'>
                        <ArtistList />
                    </div>
                </div>
                <div className='flex flex-col mb-2 h-1/5'>
                    <div className='font-bold'>Albums</div>
                    <div className='grow'>
                        <AlbumList />
                    </div>
                </div>
                <div className='flex flex-col mb-2 grow'>
                    <div className='font-bold'>Tracks</div>
                    <div className='grow'>
                        <TrackList />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='font-bold'>Info</div>
                    <div className='grow'>
                        <InfoPreview />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatorPreview;
