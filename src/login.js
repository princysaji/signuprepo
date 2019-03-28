import React, { Component } from 'react';
import './signup.css';
import SignUp from './Signup.js';
import axios from 'axios';
import  {BrowserRouter as Router, Link,Route} from 'react-router-dom';

class Login extends Component {
    constructor(props) {

        super(props);

        this.state = {

        }
    }

    render() {
        return (
        	<Router>
            <div>
			 <Link to="/">Login</Link>   
			 <Link to="/SignUp">SignUp</Link>
			<Route path='/' exact strict component={Log}/>
			
			   
			<Route path='/SignUp' exact strict component={SignUp}/>  
	 		</div>
	 </Router>
        );
    }
}

export default Login;


class Log extends Component{

	login = () => {
		
        var email = this.refs.email.value;
        var password = this.refs.password.value;

        axios.post('http://cvhunt.com/API/userLogin', {
                email: email,
                password: password,
               
            })
            .then(function(response) {
                console.log(response);
                if (response.data.message) { 
                	alert(response.data.message); 
                }
                if (response.data.errorMsg) { 
                	alert(response.data.errorMsg); 
                	window.location.href='/Newpage'
                }

            })
            .catch(function(error) {
                console.log(error);
            });

    }

	render(){
		return(
			<div>
				<div  className="login_form">
				<h2>Login</h2>
					<table>
						<tbody>
							<tr>
								<td>Email</td>
								<td ><input type="text" name="user" ref="email" />
								</td>
							</tr>
							<tr>
								<td>Password</td>
								<td><input type="Password" name="pass" ref="password"/>
								</td>
							</tr>
							<tr>
								<td>
									<button className="button" type="button" ref="login" onClick={this.login}>Login</button>
								</td>
							</tr>
						</tbody>	
					</table>
					</div>
			</div>);
	}
}
