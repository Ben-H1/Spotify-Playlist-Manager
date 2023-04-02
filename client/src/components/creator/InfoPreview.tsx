import { faMusic } from '@fortawesome/free-solid-svg-icons';
import BlankPic from '../BlankPic';
import PublicIndicator from './PublicIndicator';

type InfoPreviewProps = {

};

const InfoPreview = ({  }: InfoPreviewProps) => {
    const title = 'Playlist title will go here';
    const description = 'This will be the playlist description';
    const isPublic = true;
    const songCount = 24 as number;
    const songString = `${songCount} song${songCount !== 1 ? 's' : ''}`;

    return (
        <div className='h-full flex justify-between'>
            <div className='flex flex-col truncate'>
                <div className='flex truncate'>
                    <div
                        className='font-semibold truncate'
                        title={title}
                    >
                        {title}
                    </div>
                </div>
                <div className='flex truncate'>
                    <div
                        className='truncate'
                        title={description}
                    >
                        {description}
                    </div>
                </div>
                <div className='grow'></div>
                <div className='flex items-center truncate'>
                    <PublicIndicator className='mr-2' isPublic={isPublic} />
                    <div
                        className='truncate'
                        title={songString}
                    >
                        {songString}
                    </div>
                </div>
            </div>
            <div className='ml-2'>
                <BlankPic icon={faMusic} className='h-24' iconClassName='h-8' />
            </div>
        </div>
    );
};

export default InfoPreview;
