import React from 'react' ;

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='black f3'>
                {`${name}, You Current Entry Count is ...`}
            </div>
            <div className='black f1'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;