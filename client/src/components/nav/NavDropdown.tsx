import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { ReactElement, useState } from 'react';
import { DropdownItemProps } from '../dropdown/DropdownItem';
import DropdownMenu from '../dropdown/DropdownMenu';

type NavDropdownProps = {
    className?: string;
    titleClassName?: string;
    dropdownClassName?: string;
    title: string;
    children: ReactElement<DropdownItemProps> | Array<ReactElement<DropdownItemProps>>;
};

const NavDropdown = ({ className, titleClassName, dropdownClassName, title, children }: NavDropdownProps) => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    return (
        <div>
            <div
                className={clsx('hover:bg-ui-grayscale-400 p-2 px-4 select-none flex items-center rounded-md cursor-pointer', className)}
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                <div className={clsx('mr-3', titleClassName)}>{title}</div>
                <FontAwesomeIcon icon={dropdownOpen ? faCaretUp : faCaretDown} />
            </div>
            {dropdownOpen && <DropdownMenu
                className={clsx('mt-2', dropdownClassName)}
                setIsOpen={setDropdownOpen}
            >
                {children}
            </DropdownMenu>}
        </div>
    );
};

export default NavDropdown;
