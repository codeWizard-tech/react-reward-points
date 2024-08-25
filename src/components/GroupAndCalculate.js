import {CalculateRewards} from "./CalculateRewards";

export const GroupAndCalculate = (transactions) => {
    return transactions.reduce((acc, transaction) => {
        const { customerName, date, amount } = transaction;
        const month = new Date(date).toLocaleString('default', { month: 'long', year: 'numeric' });

        if (!acc[customerName]) {
            acc[customerName] = { totalAmount: 0, totalPoints: 0, months: {} };
        }
      
        if (!acc[customerName].months[month]) {
            acc[customerName].months[month] = { totalAmount: 0, totalPoints: 0, transactionCount: 0 };
        }
    
        const points = CalculateRewards(amount);

        acc[customerName].totalAmount += amount;
        acc[customerName].totalPoints += points;
        acc[customerName].months[month].totalAmount += amount;
        acc[customerName].months[month].totalPoints += points;
        acc[customerName].months[month].transactionCount += 1;

        return acc;

    },{});
};