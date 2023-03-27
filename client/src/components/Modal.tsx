import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ClickAwayListener } from '@mui/base';
import clsx from 'clsx';
import { ReactNode } from 'react';

type ModalProps = {
    onClickAway?: (event: MouseEvent | TouchEvent) => void;
    blur?: boolean;
    title?: string;
    children?: ReactNode;
};

const Modal = ({ onClickAway, blur = true, title, children }: ModalProps) => {
    return (
        <div className={clsx('absolute flex justify-center items-center inset-0 z-modal transition-all', blur && 'backdrop-blur-md backdrop-brightness-125')}>
            <ClickAwayListener onClickAway={onClickAway ?? (() => {})}>
                <div className='bg-black rounded-lg p-4 shadow-lg shadow-black'>
                    {title && <div className='flex mb-2 items-center'>
                        <div className='font-bold text-lg'>{title}</div>
                    </div>}
                    {children}
                </div>
            </ClickAwayListener>
        </div>
    );
};

export default Modal;
