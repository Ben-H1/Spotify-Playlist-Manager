import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useRef } from 'react';
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
    const clearIconCommonClasses = 'ml-2';

    let uniqueClasses = '';
    let inputUniqueClasses = '';
    let searchIconUniqueClasses = '';
    let clearIconUniqueClasses = '';

    switch (variant) {
        case 'secondary': {
            uniqueClasses = 'bg-ui-grayscale-500 text-ui-grayscale-700 px-2 py-1 rounded-md';
            inputUniqueClasses = 'placeholder:text-ui-grayscale-700 placeholder:font-normal font-semibold';
            searchIconUniqueClasses = '';
            clearIconUniqueClasses = '';
            break;
        }
        default: {
            uniqueClasses = 'bg-white pl-3 py-2 pr-4 rounded-full text-black';
            inputUniqueClasses = '';
            searchIconUniqueClasses = 'h-5';
            clearIconUniqueClasses = 'h-5';
            break;
        }
    }

    let ref = useRef() as any;

    const handleClear = () => {
        ref.current.value = '';
        searchHandler('');
        ref.current.focus();
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
                inputRef={ref}
                onChange={(e) => searchHandler(e.target.value)}
            />
            {true && <FontAwesomeIcon
                className={clsx(clearIconCommonClasses, clearIconUniqueClasses, clearIconClassName)}
                onClick={handleClear}
                icon={faClose}
            />}
        </div>
    );
};

export default SearchBox;
