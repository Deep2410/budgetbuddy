import React, {useEffect, useState} from 'react';

function Display({budget, balance, total, budgetflag}){

    return(
        <div>
            <div className='row'>
                <div className='col-sm-4'>
                    <div className='card'>
                        <div className='card-header'>
                            <h5>Budget</h5>
                        </div>
                        <div className='card-body'>
                            <p>{budgetflag ? Number(budget): 'Please set budget'}</p>
                        </div>
                    </div>
                    
                </div>  

                <div className='col-sm-4'>
                    <div className='card'>
                        <div className='card-header'>
                            <h5>Expenditure</h5>
                        </div>
                        <div className='card-body'>
                            <p>{total}</p>
                        </div>
                    </div>
                </div>

                <div className='col-sm-4'>
                    <div className='card'>
                        <div className='card-header'>
                            <h5>Balance Remained</h5>
                        </div>
                        <div className='card-body'>
                            <p>{balance}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Display