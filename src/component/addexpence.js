import React, {useState} from 'react';
import '../css/addexpence.css';

function AddExpence({newExpence}){

    const [title, setTitle] = useState('');
    const [cost, setCost] = useState(0);

    const handletitle = (event) => {
        setTitle(event.target.value);
    }

    const handlecost = (event) => {
        setCost(event.target.value);
    }

    const sendData = () => {
        newExpence(title, cost);
        setTitle('');
        setCost(0);
    }

    return(
        <div className='card'>
            <div className='card-header'>
                   <h4>Add New Expence</h4>
                </div>

                <div className='card-body'>
                    <div className='inputset'>
                        <label className='mr-3'>Title: </label>
                        <input type='text' value={title} onChange={handletitle} placeholder='Title of the product' />
                    </div>
                    
                    <div className='inputset'>
                        <label className='mr-3'>Cost: </label>
                        <input type='number' value={cost} onChange={handlecost} placeholder='Enter price' />
                    </div>
                </div>
                <div className='card-footer'>
                    <button onClick={sendData} className='button'>Add Expence</button>
                </div>
        </div>
    )
}

export default AddExpence;