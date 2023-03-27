import { ClickAwayListener } from '@mui/base';
import clsx from 'clsx';
import { ReactNode } from 'react';

type ModalProps = {
    onClickAway?: (event: MouseEvent | TouchEvent) => void;
    blur?: boolean;
    children?: ReactNode;
};

const Modal = ({ onClickAway, blur, children }: ModalProps) => {
    return (
        <div className={clsx('absolute flex justify-center items-center w-full h-full z-modal transition-all', blur && 'backdrop-blur-md backdrop-brightness-75')}>
            <ClickAwayListener onClickAway={onClickAway ?? (() => {})}>
                <div className='bg-black rounded-lg p-4 shadow-lg shadow-black'>
                    {children}
                </div>
            </ClickAwayListener>
        </div>
    );
};

export default Modal;
