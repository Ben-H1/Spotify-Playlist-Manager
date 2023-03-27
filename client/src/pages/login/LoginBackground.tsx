import clsx from 'clsx';
import LoginImage from './login-image.png';

type LoginBackgroundProps = {
    rotate?: boolean;
};

const LoginBackground = ({ rotate }: LoginBackgroundProps) => {
    return (
        <div className='h-full w-full overflow-hidden absolute'>
            <div className='h-full w-full vignette absolute z-10'></div>
            <img 
                className={clsx(
                    'h-full w-full object-cover',
                    rotate && '[transform:rotateX(30deg)rotateY(350deg)rotateZ(10deg)scale(1.25)]'
                )}
                src={LoginImage}
            />
        </div>
    );
};

export default LoginBackground;
