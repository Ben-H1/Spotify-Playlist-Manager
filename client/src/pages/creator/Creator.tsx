import SearchBox from '../../components/form/SearchBox';

type CreatorProps = {

};

const Creator = ({  }: CreatorProps) => {
    return (
        <div className='h-full'>
            <SearchBox
                className='mb-2 w-64'
                placeholder='Search...'
                searchHandler={v => console.log(`1: ${v}`)}
            />
            <SearchBox
                className='w-64'
                variant='secondary'
                placeholder='Search...'
                searchHandler={v => console.log(`2: ${v}`)}
            />
        </div>
    );
};

export default Creator;
