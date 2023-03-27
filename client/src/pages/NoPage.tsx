import Button from '../components/form/Button';
import { useNavigate } from 'react-router-dom'

type NoPageProps = {

};

const NoPage = ({  }: NoPageProps) => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/home');        
    };

    return (
        <div className='flex justify-center items-center h-full flex-col'>
            <div className='font-semibold text-3xl mb-4'>This page does not exist.</div>
            <Button onClick={handleGoHome}>Return to home page</Button>
        </div>
    );
};

export default NoPage;
