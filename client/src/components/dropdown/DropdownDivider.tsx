import clsx from 'clsx';

type DropdownDividerProps = {
    className?: string;
};

const DropdownDivider = ({ className }: DropdownDividerProps) => {
    return (
        <div className={clsx('w-full h-px bg-ui-grayscale-500', className)}></div>
    );
};

export default DropdownDivider;
