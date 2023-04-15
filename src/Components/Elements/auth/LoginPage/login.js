import React, { useState } from 'react'
import './style.css'
import { Images } from '../../../../Images'


const LoginPage = () => {
	function Add(a,b,c){
		return a+b+c;
	}
	const result=Add(2,2,2)
	console.log(result);
	console.log('*************************');
	const [coupenCode,setCoupenCode]=useState("");
	return (
		<div className='form-container'>
			<div className='form-action'>
				<div className='form'>
					<form action="">
						<div className='header-section'>
							<h1>Log in page</h1>
						</div>
						<div className='middle-section'>
							<div><label htmlFor="email">Email</label><br></br>
								<input type="text" name="email" placeholder='Enter your email' id="email" />
							</div>
							<div className='search'> 
							<input type="text" onChange={(e) => setCoupenCode(e.target.value)}  value={coupenCode}></input>
							{ coupenCode ? 
							<img  src={Images.close_icon}
									 alt='icon'
									  style={{width:"20px",height:"20px"}}
									  onClick={() => setCoupenCode("")}/>
							:null}
							

							</div>
							

							<div className='password-section'>
								{/* <div className='icon-div'>
								{ passwordType==="password"?
									<img  src={Images.close_icon}
									 alt='icon'
									  style={{width:"20px",height:"20px"}}/> :
								<img src={Images.open_eye}
								 alt='icon' 
								 style={{width:"20px",height:"20px"}}/>
								 
	}
		</div> */}
		<div><label>Password</label></div>
		                     <div className='password-wrapper'>
								<input  type="password" id="ispassword" placeholder='password'></input>
								<img className="image" id="pass-icon"  src={Images.close_icon}
									 alt='icon'
									  style={{width:"20px",height:"20px"}}/>
							 </div>
							</div>
							<button type="submit">Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>

	)
}

export default LoginPage