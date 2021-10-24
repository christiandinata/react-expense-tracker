import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
	const { transactions } = useContext(GlobalContext);
	console.log(transactions);

	useEffect(() => {
		const transactionData = window.localStorage.getItem('transactionItem')
	})

	useEffect( () => {
        window.localStorage.setItem('transactionItem', JSON.stringify(transactions))
    })

	return (
		<>
			<h3>History</h3>
			<ul id="list" className="list">
				{transactions.map((transaction) => (
					<Transaction key={transaction.id} transaction={transaction}/>
				))}
			</ul>
		</>
	);
};

export default TransactionList;
