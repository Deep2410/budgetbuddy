import React from 'react';

function SingleExpence({title, cost, date}){
    return(
        <div className='col-sm-6'>
            <div className='card'>
                <div className='card-body'>
                    <p>{title}</p>
                    <p>{cost}</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleExpence;