import React from 'react';
import FetchTransactions from '../FetchTransactions/FetchTransactions';

const Dashboard = () => {
    return (
        <div>
            <h1 className='title'>React Reward Points</h1>
            <FetchTransactions/>
        </div>
    );
}

export default Dashboard;