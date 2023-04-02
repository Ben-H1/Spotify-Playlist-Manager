import Template from '../Template';
import Creator from './Creator';
import CreatorPreview from './CreatorPreview';

const CreatorPage = () => {
    return (
        <Template title='Playlist Creator'>
            <div className='flex h-full'>
                <div className='grow'>
                    <Creator />
                </div>
                <div className='h-full w-px bg-white mx-4'></div>
                <div className='w-1/4'>
                    <CreatorPreview />
                </div>
            </div>
        </Template>
    );
};

export default CreatorPage;
