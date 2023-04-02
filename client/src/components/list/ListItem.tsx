import clsx from 'clsx';
import { ReactNode } from 'react';

type ListItemProps = {
    children?: ReactNode;
    className?: string;
};

const ListItem = ({ children, className }: ListItemProps) => {
    return (
        <div className={clsx('hover:bg-ui-grayscale-500 rounded-sm p-1 pr-4', className)}>
            {children}
        </div>
    );
};

export default ListItem;
