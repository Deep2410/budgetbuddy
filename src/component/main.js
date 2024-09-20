import Display from './display';
import Header from './header';
import SingleExpence from './singleexpence';
import '../css/colors.css';
import '../css/main.css';
import React, {useEffect, useState} from 'react'
import BudgetSetter from './budgetsetter';
import AddExpence from './addexpence';


function Main(){
    const [budget, setBudget] = useState(0);
    const [totalcost, setTotalcost] = useState(0);
    const [balance, setBalance] = useState(0);
    const [expencelist, setExpencelist] = useState([]);
    const todayDate = new Date().toLocaleDateString();
    const [budgetFlag, setBudgetFlag] = useState(false);

    const handlebudget = (amount,flag) => {
        setBudget(amount);
        setBudgetFlag(flag);
    }   

    const addNewExpence = (name, price) => {
        const expence = {
        title: String(name),
        cost: Number(price),
        date: todayDate
        };

            setExpencelist(prevExpenceList => ([...prevExpenceList, expence]));
            let totalCost = totalcost + Number(price);
            setTotalcost(totalCost);
        }

        const updatebalance = () => {
            let balance = budget - totalcost
            setBalance(balance);
        }

        useEffect(() => {
            updatebalance();
        },[budget, totalcost]);

    return(
         <div className="App container mt-3">
            <Header heading = 'Budget Buddy' />
            <div className='row mt-5'>
                <div className='col-sm-6'>
                <BudgetSetter newbudget = {handlebudget}/>
                </div>

                <div className='col-sm-6'>
                <AddExpence newExpence = {addNewExpence} />
                </div>
            </div>

            <div className='mt-5'>
                <Display budget = {budget} balance = {balance} total = {totalcost} budgetflag = {budgetFlag} />
            </div>

            <div className='mt-5'>
                <Header heading = 'List of Expence' />
                <div className='row mt-4'>
                {expencelist.length ?
                    expencelist.map((singleExpence,index) => 
                    <SingleExpence key={index} title = {singleExpence.title} cost = {singleExpence.cost} date = {singleExpence.date}/>
                    ) : <p>You have no expence yet</p>
                }
                
                </div>
            </div>     
    </div>
    )
}

export default Main;