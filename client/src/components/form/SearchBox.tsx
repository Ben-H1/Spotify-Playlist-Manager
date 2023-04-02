import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';

type SearchBoxProps = {
    variant?: 'primary' | 'secondary';
    className?: string;
    inputClassName?: string;
    searchIconClassName?: string;
    clearIconClassName?: string;
    searchHandler: (value: string) => void;
    placeholder?: string;
    timeoutMs?: number;
};

const SearchBox = ({ variant, className, inputClassName, searchIconClassName, clearIconClassName, searchHandler, placeholder, timeoutMs = 500 }: SearchBoxProps) => {
    const commonClasses = 'flex items-center';
    const inputCommonClasses = 'outline-none w-full bg-inherit';
    const searchIconCommonClasses = 'mr-2';

    let uniqueClasses = '';
    let inputUniqueClasses = '';
    let searchIconUniqueClasses = '';

    switch (variant) {
        case 'secondary': {
            uniqueClasses = 'bg-ui-grayscale-500 text-ui-grayscale-700 px-2 py-1 rounded-md';
            inputUniqueClasses = 'placeholder:text-ui-grayscale-700 placeholder:font-normal font-semibold';
            searchIconUniqueClasses = '';
            break;
        }
        default: {
            uniqueClasses = 'bg-white pl-3 py-2 pr-4 rounded-full text-black';
            inputUniqueClasses = '';
            searchIconUniqueClasses = 'h-5';
            break;
        }
    }

    const [currentValue, setCurrentValue] = useState('');

    const handleChange = (e: any) => {
        const value = e.target.value;

        if (value !== currentValue) {
            setCurrentValue(value);
            searchHandler(value);
        }
    };

    return (
        <div className={clsx(commonClasses, uniqueClasses, className)}>
            <FontAwesomeIcon
                className={clsx(searchIconCommonClasses, searchIconUniqueClasses, searchIconClassName)}
                icon={faSearch}
            />
            <DebounceInput
                className={clsx(inputCommonClasses, inputUniqueClasses, inputClassName)}
                debounceTimeout={500}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBox;
