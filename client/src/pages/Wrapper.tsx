import NavBar from '../components/nav/NavBar';
import AppRoutes from '../routes/AppRoutes';

const Wrapper = () => {
    return (
        <div className='backgroundFade text-white font-montserrat min-h-screen w-screen'>
            <NavBar />
            <div className='p-4 min-h-screen w-screen pt-14 flex flex-1'>
                <div className='w-full'>
                    <AppRoutes />
                </div>
            </div>
        </div>
    );
};

export default Wrapper;
