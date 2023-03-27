import { ClickAwayListener } from '@mui/base';
import clsx from 'clsx';
import { ReactElement } from 'react';
import { DropdownItemProps } from './DropdownItem';

type DropdownMenuProps = {
    isOpen?: boolean;
    setIsOpen: (value: boolean) => void;
    className?: string;
    children: ReactElement<DropdownItemProps> | Array<ReactElement<DropdownItemProps>>;
};

const DropdownMenu = ({ isOpen = true, setIsOpen, className, children }: DropdownMenuProps) => {
    return (
        <>
            {isOpen && <ClickAwayListener onClickAway={() => setIsOpen(false)}>
                <div
                    className={clsx('bg-ui-grayscale-400 shadow-neutral-900 shadow-lg absolute rounded-md p-1', className)}
                    onClick={() => setIsOpen(false)}
                >
                    {children}
                </div>
            </ClickAwayListener>}
        </>
    );
};

export default DropdownMenu;
