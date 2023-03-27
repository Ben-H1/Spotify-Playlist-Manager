import { ReactNode } from 'react';

type TemplateProps = {
    title: string;
    children: ReactNode;
};

const Template = ({ title, children }: TemplateProps) => {
    return (
        <div className='flex h-full flex-col'>
            <div className='text-xl font-bold mb-2'>{title}</div>
            {children}
        </div>
    );
};

export default Template;
