import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/form/Button';
import LoadingSpinner from '../../components/LoadingSpinner';
import Modal from '../../components/Modal';

type LoginModalProps = {
    handleLogin: () => void;
    isLoading?: boolean;
};

const LoginModal = ({ handleLogin, isLoading }: LoginModalProps) => {
    return (
        <Modal>
            <div className='flex flex-col justify-center items-center'>
                <div className='font-bold mb-2 text-2xl'>Spotify Playlist Manager</div>
                {isLoading && <LoadingSpinner className='h-6' />}
                {!isLoading && <>
                    <div className='mb-3'>You are not logged in.</div>
                    <Button onClick={handleLogin}>
                        <div className='flex items-center'>
                            <FontAwesomeIcon icon={faSpotify} className='mr-2 h-5' />
                            <span>Continue with Spotify</span>
                        </div>
                    </Button>
                </>}
            </div>
        </Modal>
    );
};

export default LoginModal;
