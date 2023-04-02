import { ReactNode } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';

type ListProps = {
    children?: ReactNode;
};

const List = ({ children }: ListProps) => {
    return (
        <div className='bg-ui-grayscale-400 h-full rounded-md p-2'>
            <Scrollbars>
                {children}
            </Scrollbars>
        </div>
    );
};

export default List;
