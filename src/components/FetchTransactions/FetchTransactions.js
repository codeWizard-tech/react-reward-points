import React, {useState, useEffect} from 'react';
import data from '../../data.json';
import { GiCash } from "react-icons/gi";
import { AiFillSketchCircle } from "react-icons/ai";
import { MdCalendarMonth } from "react-icons/md";
import { GroupAndCalculate } from '../GroupAndCalculate';

const FetchTransactions = () => {

    const [groupedData, setGroupedData] = useState({});

    // Simulate fetching data
    useEffect(()=> {
        const transactions = data.transactions;
        const grouped = GroupAndCalculate(transactions);
        setGroupedData(grouped);        
    },[])

    return (
        <div className="card-container">
            {Object.entries(groupedData).map(([customerName, data]) => (
                <div key={customerName} className="card">
                <h3>{customerName}</h3>
                <div className='totalAmount'>
                    <GiCash className='totalAmountIcon'/>
                    <p>${data.totalAmount.toFixed(2)}</p>
                </div>
                <div className='totalRewardPoints'>
                    <AiFillSketchCircle className='totalRewardPointsIcon' />
                    <p>{data.totalPoints}</p>
                </div>
                {Object.entries(data.months).map(([month, monthData], idx) => (
                    <div key={idx} className='section'>
                    <div className='month'>
                        <MdCalendarMonth />
                        <p>{month}</p>
                    </div>
                    <div className='transactionDetail'>
                        <p>Number of Transactions: {monthData.transactionCount}</p>
                        <p>Total Amount Spent: ${monthData.totalAmount.toFixed(2)}</p>
                        <p>Total Reward Points: {monthData.totalPoints}</p>
                    </div>
                    </div>
                ))}
                </div>
            ))}
        </div>
    );
}

export default FetchTransactions;