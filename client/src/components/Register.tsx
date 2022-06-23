import React,{useState, useRef, useEffect} from 'react'
import axios from 'axios';
import Home from './Home';
import Logout from './Logout';
import { Link } from 'react-router-dom';

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [currentUser, setCurrentUser] = useState(null);
	const [is_authenticated, setIsAuthenticated] = useState(false)

	const handleSignUp = async (e: React.SyntheticEvent) => {
		e.preventDefault()

		const formData = {
			email,
			password,
			password_confirmation: passwordConfirmation,
		}

		try {
			const res = await axios.post("http://localhost:3000/api/sign_up",formData)
			if (res) {
				setCurrentUser(res.data)
				setIsAuthenticated(true)
			}
		} catch (e) {
			console.log(e)
		}
	}

	// if (is_authenticated) {
	// 	window.location.pathname = "/";
	// }

  return (
    <div className="">
			<form onSubmit={handleSignUp} className="mx-auto">
				<label htmlFor="sign_up_email">Email: </label>
				<input type="email"
							placeholder="john@email.com"
							id="sign_up_email"
							name="email"
							onChange={(e) => {
								setEmail(e.target.value)
							}}
							className="block"
						/>
				<label htmlFor="sign_up_password">Password: </label>
				<input type="password"
							placeholder="xxxxxxxx"
							id="sign_up_password"
							name="password"
							onChange={(e) => {
								setPassword(e.target.value)
							}}
							className="block"
						/>
				<label htmlFor="sign_up_password_confirmation">Password Confirmation: </label>
				<input type="password"
							placeholder="xxxxxxxx"
							id="sign_up_password_confirmation"
							name="password"
							onChange={(e) => {
								setPasswordConfirmation(e.target.value)
							}}
							className="block"
						/>
				<input type="submit" value="Enter" className="cursor-pointer block"/>
			</form>
			<br />
			<br />
			{!is_authenticated ? <Home /> : <Logout />}
			<Link to="/contacts">
				Go To Contacts
			</Link>
		</div>
  )
}

export default Register