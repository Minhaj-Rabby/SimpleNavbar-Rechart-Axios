import React from 'react';

const link = ({route}) => {
    return (
        <div className='font-bold'>
               {
                   <li className='mr-12' key={route.id}><a href={route.path}>{route.name}</a></li>
                }
        </div>
    );
};

export default link;