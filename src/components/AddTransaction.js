import React, {useState, useContext, useEffect} from "react";
import { GlobalContext } from "../context/GlobalState";


const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
	const { addTransaction } = useContext(GlobalContext);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState({});

	// function validateInfo(text) {
	// 	if (!text.trim()){
	// 		errors.text = "Item name is required!"
	// 	}
	// }

	const onSubmit = e => {
		e.preventDefault()

		const newTransaction = {
			id: Math.floor(Math.random() * 100000000),
			text,
			amount: parseInt(amount)
		}
		addTransaction(newTransaction);
		

		// setErrors(validateInfo(text));
		// setIsSubmitting(true);
	}

	// useEffect(() => {
	// 	if (Object.keys(errors).length === 0 && isSubmitting) {
	// 		
	// 		
	// 	}
	// }, [errors]);

	return (
		<div>
			<h3>Add new transaction</h3>
			<form onSubmit={onSubmit}>
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</div>
	);
};

export default AddTransaction;
