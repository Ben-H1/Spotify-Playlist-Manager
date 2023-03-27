import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
    variant?: 'primary' | 'secondary';
    className?: string;
    onClick?: MouseEventHandler,
    disabled?: boolean;
    children?: ReactNode;
};

const Button = ({ variant, className, onClick, disabled, children }: ButtonProps) => {
    const commonClasses = clsx(
        'py-2 px-4 rounded-full font-semibold',
        !disabled && 'hover:scale-103',
        !disabled && 'active:scale-100'
    );

    let uniqueClasses;

    switch (variant) {
        case 'secondary': {
            uniqueClasses = clsx(
                'text-white outline outline-1',
                !disabled && 'hover:outline-2',
                !disabled && 'active:text-ui-grayscale-600 active:outline-ui-grayscale-500 active:outline-1',
                disabled && 'brightness-50'
            );
            break;
        }
        default: {
            uniqueClasses = clsx(
                'bg-ui-green text-black',
                !disabled && 'hover:bg-ui-green-light',
                !disabled && 'active:bg-ui-green-dark',
                disabled && 'brightness-50'
            );
            break;
        }
    }

    return (
        <button
            className={clsx(commonClasses, uniqueClasses, className)}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
