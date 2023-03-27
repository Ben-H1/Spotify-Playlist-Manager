import clsx from 'clsx';
import { ReactNode } from 'react';

export type DropdownItemProps = {
    onClick: () => void;
    className?: string;
    children?: ReactNode;
};

const DropdownItem = ({ onClick, className, children }: DropdownItemProps) => {
    return (
        <div
            className={clsx('cursor-pointer hover:bg-ui-grayscale-500 p-3 rounded-sm', className)}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default DropdownItem;
