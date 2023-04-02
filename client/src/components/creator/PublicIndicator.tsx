import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

type PublicIndicatorProps = {
    isPublic: boolean;
    className?: string;
};

const PublicIndicator = ({ isPublic, className }: PublicIndicatorProps) => {
    return (
        <div
            className={clsx('bg-ui-grayscale-400 w-fit flex p-2 rounded-md items-center', className)}
            title={isPublic ? 'Public playlist' : 'Private playlist'}
        >
            <FontAwesomeIcon
                className='mr-2'
                icon={isPublic ? faUnlock : faLock}
            />
            <div className='text-sm'>{isPublic ? 'Public' : 'Private'}</div>
        </div>
    );
};

export default PublicIndicator;
