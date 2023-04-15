import React, { useState } from 'react'
import './style.css'
import { Images } from '../../../../Images'


const LoginPage = () => {
	function Add(a, b, c) {
		return a + b + c;
	}
	const result = Add(2, 2, 2)
	console.log(result);
	console.log('*************************');
	const [coupenCode, setCoupenCode] = useState("");
	const [password, setPassword] = useState("");
	const [visible, setVisible] = useState(false);
	return (
		<div className='form-container'>
			<div className='form'>
				<form action="">

					<div className='header-section'>
						<h1>Log in</h1>
					</div>

					<div className='middle-section'>
						<div className='search'>
							<label htmlFor="email">Email</label><br></br>
							<input type="email"
								placeholder='enter your email'
								onChange={(e) => setCoupenCode(e.target.value)}
								value={coupenCode}>
							</input>
							{coupenCode ?
								<img id="close-icon" src={Images.cross_icon}
									alt='icon'
									style={{ width: "20px", height: "20px" }}
									onClick={() => setCoupenCode("")} />
								: null}
						</div>
					</div>
					<div className='password-section'>
						<div>Password</div>
						<div className='password-wrapper'>
							<input id="password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								placeholder='password'
								type={visible ? 'text' : 'password'}
							>

							</input>
							<div onClick={() => setVisible(!visible)} className='toggle-div'>
								{visible ? <img src={Images.open_eye}
									alt='icon'
									style={{ width: "20px", height: "20px" }} /> : <img src={Images.close_icon}
										alt='icon'
										style={{ width: "20px", height: "20px" }} />}</div>
						</div>
					</div>
					<div className='footer-section'>
						<button className='button-login' type="submit">Login</button>
					</div>
				</form>
			</div>

		</div>

	)
}

export default LoginPage