import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

type BlankPicProps = {
    className?: string;
    iconClassName?: string;
    icon: IconProp;
};

const BlankPic = ({ className, iconClassName, icon }: BlankPicProps) => {
    return (
        <div className={clsx('bg-no-pic flex items-center justify-center aspect-square', className)}>
            <FontAwesomeIcon
                className={iconClassName}
                icon={icon}
            />
        </div>
    );
};

export default BlankPic;
