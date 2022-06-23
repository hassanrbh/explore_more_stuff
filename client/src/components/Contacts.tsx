import React,{useEffect, useState} from 'react'
import axios from 'axios';

const Contacts = () => {
	const [contacts, setContacts] = useState(null)	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [currentUser, setCurrentUser] = useState(null)

	const handleLogin = async (e: React.SyntheticEvent) => {
		e.preventDefault();

		const formData = {
			email,
			password,
		}

		try {
			const res = await axios.post("http://localhost:3000/api/login", formData)
			setCurrentUser(res.data);
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		const fetchContacts = async () => {

			const res = await axios.get("http://localhost:3000/api/v1/contacts", );
			console.log(res)
			setContacts(res.data)
		}

		fetchContacts()
			.catch((error) => {
				console.log(error)
			})
	}, [currentUser]);

  return (
    <div>
			<form onSubmit={handleLogin}>
				<label htmlFor="email">Email</label>
					<input type="email" name="email" onChange={(e) => {
						setEmail(e.target.value)
					}} />
				<label htmlFor="password">Password</label>
					<input type="password" name="password" onChange={(e) => {
						setPassword(e.target.value)
					}} />
				<input type="submit" value="login To see your Contacts" />
			</form>
			{JSON.stringify(contacts)}
		</div>
  )
}

export default Contacts