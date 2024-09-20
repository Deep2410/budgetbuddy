import React, {useState, useEffect} from 'react';
import '../css/budget-setter.css';

function BudgetSetter({newbudget}){

    const [budget, setBudget] = useState(0);
    const [error, setError] = useState(false);
    const [isbudgetset, setIsbudgetset] = useState(false);

    let buttonsec = document.getElementById('confirmedBudget');
    
    

    const handleonChanageBudget = (event) => {
        setBudget(event.target.value);
    }

    const setNewBudget = () => {
        if(budget > 0){
            if(isbudgetset){
                buttonsec.style.display = 'block';
                setError(false);
            }

            else{
                buttonsec.style.display = 'none';
                newbudget(budget,true);
                setBudget(0);
                setError(false);
                setIsbudgetset(true);

            }
        }
        else{
            setError(true);
        }
    }

    const setbudgetagain = () => {
        if(budget>0){
            newbudget(budget, true);
            setBudget(0);
            buttonsec.style.display = 'none';
            
        }
        else{
            setError(true)
        }
    }

    const declinesetbudgetagain = () => {
        setBudget(0);
        buttonsec.style.display = 'none';
    }

    useEffect(() => {

    },[])


    return(
        <div>
            <div className='card'>

                <div className='card-header'>
                   <h4>Budget</h4>
                </div>

                <div className='card-body'>
                    <label className='mr-3'>Budget: </label>
                    <input type='number' value={budget} placeholder='Enter Budget' onChange={handleonChanageBudget} />

                    {error ? <p className='error'>budget must be positive number</p>: ''}
                </div>
                <div className='card-footer'>
                    <button className='button' onClick={setNewBudget}>Set Budget</button>
                    <div className='confirmedBudgetagain' id='confirmedBudget'>
                        <p className='mt-3'>Are you sure you want to change the budget</p>
                        <button className='btn btn-success mr-2' onClick={setbudgetagain}>Yes</button>
                        <button className='btn btn-danger ml-2' onClick={declinesetbudgetagain}>No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BudgetSetter;